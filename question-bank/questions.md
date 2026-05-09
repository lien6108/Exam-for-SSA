# AWS SAA 範例題庫

## Question #1

**題目**
某公司在多個洲的城市據點蒐集溫度、濕度與大氣壓力資料。公司每天從每個站點蒐集的平均資料量為 500 GB。每個站點都有高速網際網路連線。公司希望能以最快速度，將所有全球站點的資料彙整到單一 Amazon S3 bucket 中，且解決方案必須將營運複雜度降到最低。哪一個解決方案符合這些需求？

**選項**
- A. 在目標 S3 bucket 啟用 S3 Transfer Acceleration，並使用 multipart upload，讓各站點直接將資料上傳到目標 S3 bucket。
- B. 先將各站點資料上傳到距離最近 Region 的 S3 bucket，再使用 S3 Cross-Region Replication 將物件複製到目標 bucket。
- C. 每天排程 AWS Snowball Edge Storage Optimized 裝置工作。
- D. 先將各站點資料上傳到最近 Region 的 Amazon EC2 執行個體。

**答案**
A

## Question #2

**題目**
某公司需要分析自家應用程式的日誌檔，以 JSON 格式儲存在 Amazon S3 bucket 中。查詢會很簡單，且只會在需要時執行。為了以最低營運負擔滿足需求，應該怎麼做？

**選項**
- A. 使用 Amazon Redshift 將所有內容載入後，再視需要執行 SQL 查詢。
- B. 使用 Amazon CloudWatch Logs 儲存日誌，並從 Amazon CloudWatch 主控台執行 SQL 查詢。
- C. 直接使用 Amazon Athena 搭配 Amazon S3，按需執行查詢。
- D. 使用 AWS Glue 建立日誌目錄，並在 Amazon EMR 啟動暫時性的 Apache Spark 叢集。

**答案**
C
