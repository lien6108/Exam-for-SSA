# AWS SAA 模擬考試系統 (AWS SAA Mock Exam System)

這是一個純前端架構的 AWS Solutions Architect Associate (SAA-C03) 模擬考試網頁應用程式。透過解析 Markdown 格式的題庫，為使用者提供逼真、高互動性的考前練習環境。

## ✨ 核心功能 (Features)

*   🎲 **智能隨機抽題**
    *   每次測驗自動從題庫中隨機抽取 65 題。
    *   內建**權重抽題機制**（題號越大的最新題目，被抽中的機率越高）。
*   📝 **完整的考試體驗**
    *   支援單選題與複選題作答。
    *   提供**考試計時器**、**題目標記 (Flag)** 以及**直覺的上一題/下一題導航**。
    *   交卷前設有「答題列表」畫面，可清楚檢視「已作答」、「未作答」與「已標記」的題目狀態，避免遺漏。
*   📊 **考後成績與分析**
    *   模擬真實考試計分：總分 1000 分，及格門檻 700 分。
    *   透過關鍵字自動將題目分類，並於考後提供**各領域正確率 (Domain Breakdown)** 分析。
    *   提供詳細的**錯題檢討列表**與解析，幫助考生針對弱項快速補強。
*   🛡️ **安全與高效能**
    *   純前端 (HTML/CSS/JS) 實作，無需部署後端伺服器。
    *   使用 `textContent` 等安全方式渲染題目內容，防範 XSS 攻擊。

## 🛠️ 技術棧 (Tech Stack)

*   **HTML5**：語意化結構設計。
*   **CSS3**：純原生 CSS (Vanilla CSS)，提供現代化、美觀且具響應式的操作介面。
*   **JavaScript (ES6+)**：負責 Markdown 題庫解析、考試邏輯處理、計分計算與 DOM 操作。

## 🚀 快速開始 (Getting Started)

1.  **取得程式碼**：
    ```bash
    git clone https://github.com/lien6108/Exam-for-SSA.git
    ```
2.  **執行專案**：
    由於本專案為純前端網頁，請使用任何本地端伺服器 (Local Server) 來開啟專案，以確保能正確讀取本機的 Markdown 題庫檔案。
    *   如果您使用 VS Code，推薦安裝並使用 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 擴充套件，右鍵點擊 `index.html` 並選擇 "Open with Live Server" 即可。
    *   或是使用 Python 內建伺服器：
        ```bash
        python -m http.server 8000
        ```
        然後在瀏覽器開啟 `http://localhost:8000`。

## 📁 專案結構 (Project Structure)

*   `index.html`: 應用程式的主要進入點與 UI 結構。
*   `styles.css`: 所有的版面設計與樣式設定。
*   `app.js`: 核心應用程式邏輯、題庫解析與狀態管理。
*   `*.md` / `question-bank/`: 存放各個區段的 AWS SAA 中文翻譯題庫。

## 📝 題庫擴充說明

本系統透過解析專案目錄下的 `.md` 檔案來建立題庫。如需新增題目，只需遵循既有的 Markdown 題目格式擴充文件即可，系統在載入時會自動進行解析並納入抽題池中。

---

*祝您考試順利，成功取得 AWS SAA 證照！*
