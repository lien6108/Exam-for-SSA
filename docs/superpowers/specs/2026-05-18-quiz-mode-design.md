# 小考模式設計文件

**日期：** 2026-05-18
**狀態：** 已確認，待實作

---

## 背景

現有的 `index.html` 是 AWS SAA 模擬考系統，一次出 65 題，仿照真實考試流程。本次新增「小考模式」，讓使用者可以做短時間的快速練習。

---

## 需求摘要

| 項目 | 模擬考 | 小考 |
|------|--------|------|
| 題數 | 65 題 | 10 題 |
| 抽題方式 | 加權隨機（題號越大機率越高） | 純隨機 |
| 計時方式 | 正數計時（無上限） | 15 分鐘倒數 |
| 時間到 | — | 自動送出批改 |
| 答題列表 | 有 | 無 |
| 標記功能 | 有 | 無 |
| 及格線 | 700 / 1000 | 無 |
| 結果頁 | 分數環、領域分析、錯題列表 | 簡版（全題對錯 + 正確答案） |

---

## 架構設計

### 方案：Config 驅動，共用同一套畫面

不新增 HTML screen，改用 `currentMode` 變數 + 兩個 config 物件控制行為差異。

### 模式設定（app.js 頂部）

```js
const MODES = {
  exam: {
    size: 65,
    timeLimit: null,       // null = 正數計時，無上限
    weighted: true,
    hasReview: true,
    hasMark: true,
    passScore: 700,
  },
  quiz: {
    size: 10,
    timeLimit: 15 * 60,   // 900 秒倒數
    weighted: false,
    hasReview: false,
    hasMark: false,
    passScore: null,
  },
};

let currentMode = 'exam';
```

---

## 各畫面設計

### 1. 首頁（screen-start）

在現有開始畫面頂部加入切換 tab：

```
┌──────────────┬──────────────┐
│  📝 模擬考   │  ⚡ 小考     │
└──────────────┴──────────────┘
```

切換後，meta 資訊（題數、時間、及格分）即時更新。小考不顯示及格分數項目。

### 2. 作答畫面（screen-question）

小考模式下的差異：
- **計時器**：顯示倒數 `MM:SS`，剩餘 ≤ 60 秒時計時器變紅色
- **標記按鈕**（`btn-mark`）：`hasMark = false` 時隱藏
- **答題列表按鈕**（`btn-review`）：`hasReview = false` 時隱藏
- **最後一題的「下一題」按鈕**：改為「送出批改」
- **時間歸零**：直接執行 `stopTimer() → gradeExam() → renderResultPage()`，不跳 alert

### 3. 結果畫面（screen-result）

共用現有 `screen-result`，依 `currentMode` 條件顯示：

**小考模式顯示：**
- 答對題數（X / 10）
- 作答時間
- 全部 10 題的對錯清單（含答對的題目）

**小考模式隱藏：**
- 分數環形圖
- 及格 / 不及格 hero 樣式
- 各領域正確率（domain-breakdown）

每題對錯格式：
```
✅ Q3  你的答案：A. xxxx  /  正確答案：A. xxxx
❌ Q7  你的答案：B. xxxx  /  正確答案：D. xxxx
```

---

## 不在本次範圍內

- 題目解析（explanation）欄位：題庫格式尚未包含此欄，待後續擴充
- 小考歷史紀錄
- 自訂題數或時間

---

## 實作順序（供 writing-plans 參考）

1. `app.js`：新增 `MODES` config 與 `currentMode` 狀態
2. `index.html`：首頁加入模式切換 tab，meta 區動態化
3. `app.js`：`startExam()` 依 mode 選擇抽題方式
4. `app.js`：計時器改為支援正數 / 倒數兩種模式，倒數到 0 自動送出
5. `app.js`：`renderQuestionPage()` 依 mode 隱藏標記、答題列表按鈕，最後一題改為送出按鈕
6. `app.js` / `index.html`：結果頁依 mode 條件顯示/隱藏區塊
7. `styles.css`：切換 tab 樣式、倒數紅色警示、小考結果頁樣式
