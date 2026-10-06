#!/usr/bin/env node
'use strict';

// 讀取 saa_003_zh-TW.md（人類編輯用的題庫原始檔），編譯成結構化 JSON
// （question-bank/saa_003.json），讓 app.js 不用在瀏覽器內即時做正則解析。
//
// 用法： node tools/build-question-bank.js

const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, '..', 'saa_003_zh-TW.md');
const OUTPUT_FILE = path.join(__dirname, '..', 'question-bank', 'saa_003.json');

// ── 章節領域定義（與 app.js 的 CHAPTER_DOMAINS 保持一致）────────────
const CHAPTER_DOMAINS = [
  { id: 'compute', rawCategories: ['運算', '容器', '無伺服器'] },
  { id: 'storage', rawCategories: ['儲存', '移轉和傳輸'] },
  { id: 'database', rawCategories: ['資料庫', '分析'] },
  { id: 'networking', rawCategories: ['網路連結和內容交付'] },
  { id: 'security', rawCategories: ['安全、身分與合規', '管理與控管', 'AWS Cost Management'] },
  { id: 'integration', rawCategories: ['應用程式整合', '機器學習', '前端網頁和行動裝置', '媒體服務'] },
  { id: 'all', rawCategories: [] },
];

// ── 領域關鍵字規則（與 app.js 的 DOMAIN_RULES 保持一致，作為
//    分類欄位缺漏時的 fallback）───────────────────────────────────
const DOMAIN_RULES = [
  {
    id: 'compute',
    keywords: ['ec2', 'lambda', 'fargate', 'ecs', 'eks', 'elastic beanstalk', 'auto scaling',
      'instance', 'container', 'kubernetes', 'batch', 'lightsail', 'outposts',
      'graviton', 'spot instance', 'reserved instance', 'dedicated host',
      '執行個體', '容器', '運算', '自動擴展'],
  },
  {
    id: 'storage',
    keywords: ['s3', 'ebs', 'efs', 'fsx', 'glacier', 'storage gateway', 'snowball', 'snowcone',
      'datasync', 'backup', 'instance store', 'object storage', 'archive',
      '儲存', '備份', '封存', '快照', 'volume', 'snapshot'],
  },
  {
    id: 'database',
    keywords: ['rds', 'aurora', 'dynamodb', 'elasticache', 'redshift', 'documentdb', 'neptune',
      'keyspaces', 'timestream', 'dax', 'memcached', 'redis', 'mysql', 'postgresql',
      'mariadb', 'oracle', 'sql server', 'nosql',
      '資料庫', '資料表', '快取', '分析', '倉儲'],
  },
  {
    id: 'networking',
    keywords: ['vpc', 'cloudfront', 'route 53', 'direct connect', 'vpn', 'transit gateway',
      'api gateway', 'global accelerator', 'nat gateway', 'load balancer', 'alb', 'nlb', 'elb',
      'network firewall', 'waf', 'shield', 'subnet', 'security group', 'nacl',
      'peering', 'endpoint', 'dns', 'bandwidth', 'cdn',
      '網路', '負載平衡', '防火牆', '加速', '流量', '頻寬'],
  },
  {
    id: 'appintegration',
    keywords: ['sqs', 'sns', 'eventbridge', 'step functions', 'appflow', 'mq', 'kinesis',
      'firehose', 'data streams', 'kafka', 'msk', 'queue', 'topic', 'event',
      'workflow', 'orchestration', 'notification', 'message', 'pub/sub',
      '佇列', '訊息', '事件', '通知', '工作流程', '串流', '解耦'],
  },
  {
    id: 'management',
    keywords: ['cloudwatch', 'cloudtrail', 'config', 'systems manager', 'trusted advisor',
      'organizations', 'control tower', 'service catalog', 'cost explorer', 'budgets',
      'iam', 'sso', 'cognito', 'secrets manager', 'parameter store', 'kms',
      'inspector', 'guardduty', 'macie', 'detective', 'security hub',
      'logging', 'monitoring', 'compliance', 'audit', 'patch',
      '管理', '監控', '稽核', '治理', '合規', '安全', '權限', '憑證', '加密', '成本'],
  },
];

const DOMAIN_TO_CHAPTER = {
  compute: 'compute',
  storage: 'storage',
  database: 'database',
  networking: 'networking',
  appintegration: 'integration',
  management: 'security',
};

function classifyDomain(question) {
  const corpus = [
    question.questionText,
    ...question.options.map(o => o.text),
    ...question.answers.map(a => {
      const opt = question.options.find(o => o.key === a);
      return opt ? opt.text : '';
    }),
  ].join(' ').toLowerCase();

  let best = null;
  let bestScore = 0;
  for (const domain of DOMAIN_RULES) {
    const score = domain.keywords.filter(k => corpus.includes(k)).length;
    if (score > bestScore) { bestScore = score; best = domain; }
  }
  return best || DOMAIN_RULES[DOMAIN_RULES.length - 1];
}

function getQuestionChapterId(q) {
  if (q.category) {
    const found = CHAPTER_DOMAINS.find(c => c.id !== 'all' && c.rawCategories.includes(q.category));
    if (found) return found.id;
  }
  const domain = classifyDomain(q);
  return DOMAIN_TO_CHAPTER[domain.id] || 'compute';
}

// ── 解析邏輯（與 app.js 的 parseMarkdownQuestions 保持一致）────────
function parseMarkdownQuestions(mdText) {
  const questions = [];
  const skipped = [];
  const blocks = mdText.split(/^## Question\s*#\d+/m).slice(1);
  const headers = [...mdText.matchAll(/^## Question\s*#(\d+)/gm)];

  blocks.forEach((block, i) => {
    const idMatch = headers[i] ? headers[i][1] : null;
    const id = idMatch ? parseInt(idMatch, 10) : null;
    if (!id) { skipped.push({ id: null, reason: '找不到題號' }); return; }

    const qMatch = block.match(/\*\*題目\*\*\s*\n([\s\S]*?)(?=\*\*選項\*\*)/);
    const opMatch = block.match(/\*\*選項\*\*\s*\n([\s\S]*?)(?=\*\*答案\*\*)/);
    const anMatch = block.match(/\*\*答案[：:]?\*\*\s*([A-Za-z,\s]+)/);

    if (!qMatch || !opMatch || !anMatch) {
      skipped.push({ id, reason: '缺少題目/選項/答案區塊' });
      return;
    }

    const questionText = qMatch[1].trim();
    const optionsRaw = opMatch[1].trim();
    const answerRaw = anMatch[1].trim().toUpperCase();

    const options = [];
    const optLines = optionsRaw.split('\n').filter(l => l.trim().match(/^-\s*[A-Z][.、。:\s]/i));
    optLines.forEach(line => {
      const m = line.trim().match(/^-\s*([A-Z])[.、。:\s]\s*(.*)/i);
      if (m) options.push({ key: m[1].toUpperCase(), text: m[2].trim() });
    });

    if (options.length < 2) { skipped.push({ id, reason: '選項數量不足' }); return; }

    const answers = answerRaw.includes(',')
      ? answerRaw.split(',').map(a => a.trim()).filter(a => /^[A-Z]$/.test(a))
      : answerRaw.split('').filter(c => /[A-Z]/.test(c));

    const exMatch = block.match(/\*\*詳解\*\*\s*\n([\s\S]*?)(?=\n\*\*分類|$)/);
    const explanation = exMatch ? exMatch[1].trim() : '';

    const catMatch = block.match(/\*\*分類[：:]\*\*\s*([^\n\r]+)/);
    const category = catMatch ? catMatch[1].trim() : '';

    questions.push({ id, questionText, options, answers, explanation, category });
  });

  return { questions, skipped };
}

function validateQuestions(questions) {
  const valid = [];
  const invalid = [];
  questions.forEach(q => {
    const keys = q.options.map(o => o.key);
    const ok = q.id && q.questionText && q.options.length >= 2 && q.answers.length >= 1
      && q.answers.every(a => keys.includes(a));
    if (ok) valid.push(q);
    else invalid.push(q.id);
  });
  return { valid, invalid };
}

function main() {
  if (!fs.existsSync(SOURCE_FILE)) {
    console.error(`找不到題庫原始檔：${SOURCE_FILE}`);
    process.exit(1);
  }

  const mdText = fs.readFileSync(SOURCE_FILE, 'utf8');
  const { questions, skipped } = parseMarkdownQuestions(mdText);
  const { valid, invalid } = validateQuestions(questions);

  const output = valid.map(q => ({
    id: q.id,
    questionText: q.questionText,
    options: q.options,
    answers: q.answers,
    explanation: q.explanation,
    category: q.category,
    chapterId: getQuestionChapterId(q),
  }));

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output), 'utf8');

  console.log(`解析區塊數：${questions.length + skipped.length}`);
  console.log(`成功轉出題數：${output.length}`);
  if (skipped.length) {
    console.warn(`跳過（解析失敗）：${skipped.length} 題`);
    skipped.forEach(s => console.warn(`  - #${s.id ?? '?'}：${s.reason}`));
  }
  if (invalid.length) {
    console.warn(`跳過（驗證失敗）：${invalid.length} 題 → ${invalid.join(', ')}`);
  }
  console.log(`已輸出：${OUTPUT_FILE}`);
}

main();
