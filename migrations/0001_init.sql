-- 錯題庫跨裝置同步：以 sync_code 為分組鍵，一列存一筆測驗紀錄（record）。
CREATE TABLE wrong_bank_records (
  sync_code  TEXT NOT NULL,
  id         TEXT NOT NULL,
  data       TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (sync_code, id)
);

CREATE INDEX idx_wrong_bank_sync_created ON wrong_bank_records (sync_code, created_at DESC);
