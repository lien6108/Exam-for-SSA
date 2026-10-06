'use strict';

// 錯題庫跨裝置同步 API（/api/wrong-bank/:code），其餘路徑交給靜態資源。
// 資料庫 schema 見 migrations/0001_init.sql。

const SYNC_CODE_RE = /^[A-Za-z0-9-]{8,64}$/;
const MAX_RECORDS_PER_CODE = 50;
const MAX_RECORD_BYTES = 500_000;

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

async function handleGet(code, env) {
  const { results } = await env.DB.prepare(
    `SELECT data FROM wrong_bank_records WHERE sync_code = ? ORDER BY created_at DESC LIMIT ?`
  ).bind(code, MAX_RECORDS_PER_CODE).all();

  const records = [];
  for (const row of results) {
    try {
      records.push(JSON.parse(row.data));
    } catch {
      // 忽略單筆壞資料，不影響其餘紀錄回傳
    }
  }
  return jsonResponse({ records });
}

async function handlePost(code, request, env) {
  const bodyText = await request.text();
  if (bodyText.length > MAX_RECORD_BYTES) {
    return jsonResponse({ error: 'record too large' }, 413);
  }

  let record;
  try {
    record = JSON.parse(bodyText);
  } catch {
    return jsonResponse({ error: 'invalid json' }, 400);
  }

  if (!record || typeof record.id !== 'string' || !record.id ||
      typeof record.createdAt !== 'string' || !record.createdAt) {
    return jsonResponse({ error: 'record missing id/createdAt' }, 400);
  }

  const now = new Date().toISOString();
  await env.DB.prepare(
    `INSERT INTO wrong_bank_records (sync_code, id, data, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(sync_code, id) DO UPDATE SET
       data = excluded.data,
       created_at = excluded.created_at,
       updated_at = excluded.updated_at`
  ).bind(code, record.id, bodyText, record.createdAt, now).run();

  // 只保留最新 MAX_RECORDS_PER_CODE 筆，裁掉多裝置同時寫入後超出上限的舊紀錄
  await env.DB.prepare(
    `DELETE FROM wrong_bank_records
     WHERE sync_code = ? AND id NOT IN (
       SELECT id FROM wrong_bank_records WHERE sync_code = ? ORDER BY created_at DESC LIMIT ?
     )`
  ).bind(code, code, MAX_RECORDS_PER_CODE).run();

  return jsonResponse({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const match = url.pathname.match(/^\/api\/wrong-bank\/([^/]+)\/?$/);

    if (match) {
      const code = decodeURIComponent(match[1]);
      if (!SYNC_CODE_RE.test(code)) {
        return jsonResponse({ error: 'invalid sync code' }, 400);
      }
      try {
        if (request.method === 'GET') return await handleGet(code, env);
        if (request.method === 'POST') return await handlePost(code, request, env);
      } catch (err) {
        return jsonResponse({ error: 'internal error', message: String(err) }, 500);
      }
      return jsonResponse({ error: 'method not allowed' }, 405);
    }

    return env.ASSETS.fetch(request);
  },
};
