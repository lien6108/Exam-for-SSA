# 小考結果頁：顯示完整選項設計文件

**日期：** 2026-06-04
**狀態：** 已確認，待實作

---

## 背景

小考結果頁目前只顯示「你的答案」與「正確答案」兩行摘要。使用者希望能在結果頁直接看到題目、完整選項（A/B/C/D）、以及詳解，方便對照理解錯誤原因。

---

## 需求摘要

結果頁每張題目卡片需包含：

| 元素 | 現狀 | 目標 |
|------|------|------|
| 題目文字 | 已在進行中（未提交變更） | 維持 |
| 完整選項（A/B/C/D）| 無 | 新增，含顏色狀態 |
| 你的答案 / 正確答案摘要行 | 有 | 移除（由選項顏色取代） |
| 詳解 | 已實作 | 維持 |

---

## 視覺設計

### 選項狀態對照表

| 狀態 | 徽章（`.opt-key`） | 選項文字（`.opt-text`） |
|------|------------------|----------------------|
| 正確答案（不論有無選） | 綠底白字 | 粗體，正常文字色 |
| 你選的但答錯 | 紅底白字 | 紅色 |
| 其餘未選且非正確 | 灰底灰字 | 淡灰色 |

### 卡片結構

```
❌  Q1  單選
一家公司收集多大洲城市的溫度、溼度…（題目文字）

[A]  選項 A 文字        ← 灰色（未選）
[B]  選項 B 文字        ← 灰色（未選）
[C]  選項 C 文字        ← 紅色（你選的，答錯）
[D]  選項 D 文字        ← 綠色（正確答案）

詳解：正確答案是 D，因為…
```

### 邊界情況

- **未作答**：所有選項灰色，正確答案仍標綠色
- **複選題**：所有正確答案鍵皆標綠色，錯選的鍵標紅色，其餘灰色
- **答對**：正確答案標綠色，其餘灰色（無紅色出現）

---

## 實作範圍

### app.js

1. 在 `renderQuizResult` 中，移除 `yourText` / `corrText` 變數
2. 新增 `optionsHtml`：遍歷 `q.options`，依狀態指派 CSS class
   - `isCorrectOpt`（`q.answers.includes(opt.key)`）→ `opt-correct`
   - `isSelectedOpt && !isCorrectOpt` → `opt-wrong`
   - 其餘 → `opt-neutral`
3. 將 `item.innerHTML` 中的 `<div class="qri-answers">` 區塊替換為 `<div class="qri-options">${optionsHtml}</div>`

```js
// 選項 HTML 產生邏輯
const optionsHtml = q.options.map(opt => {
  const isCorrectOpt = q.answers.includes(opt.key);
  const isSelectedOpt = selected.includes(opt.key);
  let cls = 'opt-neutral';
  if (isCorrectOpt) cls = 'opt-correct';
  else if (isSelectedOpt) cls = 'opt-wrong';
  const escapedText = opt.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<div class="qri-option ${cls}"><span class="opt-key">${opt.key}</span><span class="opt-text">${escapedText}</span></div>`;
}).join('');
```

### styles.css

新增以下樣式：

```css
.qri-options { display: flex; flex-direction: column; gap: .3rem; margin: .4rem 0 .6rem; }
.qri-option  { display: flex; align-items: baseline; gap: .5rem; font-size: .875rem; }

.opt-key {
  display: inline-flex; align-items: center; justify-content: center;
  width: 1.4rem; height: 1.4rem; border-radius: .3rem;
  font-size: .75rem; font-weight: 700; flex-shrink: 0;
  background: var(--card); color: var(--text3);
}
.opt-correct .opt-key { background: var(--green); color: #fff; }
.opt-wrong   .opt-key { background: var(--red);   color: #fff; }

.opt-correct .opt-text { color: var(--text); font-weight: 600; }
.opt-wrong   .opt-text { color: var(--red); }
.opt-neutral .opt-text { color: var(--text3); }
```

---

## 不在本次範圍內

- 模擬考結果頁的選項顯示（維持現有錯題列表格式）
- 點擊展開 / 收合選項的互動
- 自訂顏色主題

---

## 實作順序（供 writing-plans 參考）

1. `app.js`：移除 `yourText`、`corrText`；新增 `optionsHtml` 產生邏輯
2. `app.js`：將 `item.innerHTML` 中的 `qri-answers` 替換為 `qri-options`
3. `styles.css`：新增 `.qri-options`、`.qri-option`、`.opt-key`、`.opt-correct`、`.opt-wrong`、`.opt-neutral` 樣式
