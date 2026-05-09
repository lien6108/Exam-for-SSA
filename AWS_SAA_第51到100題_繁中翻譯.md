# AWS SAA 第 51～100 題 繁中翻譯

來源整理自使用者上傳檔案，保留：題號、題目、選項、答案。

---

## Question #51

**題目**  
某公司正在開發一套應用程式，透過 REST API 提供訂單出貨統計資料查詢。公司希望擷取出貨統計資料、整理成易讀的 HTML 格式，並於每天早上固定時間同時寄送報表給多個電子郵件地址。解決方案架構師應採取哪兩個步驟來滿足這些需求？（選二）

**選項**
- A. 設定應用程式將資料傳送到 Amazon Kinesis Data Firehose。
- B. 使用 Amazon Simple Email Service (Amazon SES) 來格式化資料並以電子郵件寄送報表。
- C. 建立 Amazon EventBridge（Amazon CloudWatch Events）排程事件，觸發 AWS Glue job 查詢應用程式資料。
- D. 建立 Amazon EventBridge（Amazon CloudWatch Events）排程事件，觸發 AWS Lambda 函數查詢應用程式資料。
- E. 將應用程式資料儲存在 Amazon S3，並建立 Amazon Simple Notification Service (Amazon SNS) topic 作為 S3 事件目的地。

**答案**  
DE

## Question #52

**題目**  
某公司想將內部部署應用程式遷移至 AWS。該應用程式會產生大小從數十 GB 到數百 TB 不等的輸出檔案。應用程式資料必須以標準檔案系統結構儲存。公司希望解決方案能自動擴展、高可用，且需要最少的營運維護。哪一種解決方案最符合需求？

**選項**
- A. 將應用程式遷移為在 Amazon Elastic Container Service (Amazon ECS) 上執行的容器，並使用 Amazon S3 儲存。
- B. 將應用程式遷移為在 Amazon Elastic Kubernetes Service (Amazon EKS) 上執行的容器，並使用 Amazon Elastic Block Store (Amazon EBS) 儲存。
- C. 將應用程式遷移到 Amazon EC2 執行個體，部署於跨多個可用區域的 Auto Scaling 群組中，並使用 Amazon Elastic File System (Amazon EFS) 儲存。
- D. 將應用程式遷移到 Amazon EC2 執行個體，部署於跨多個可用區域的 Auto Scaling 群組中，並使用 Amazon Elastic Block Store (Amazon EBS) 儲存。

**答案**  
C

## Question #53

**題目**  
某公司需要將會計紀錄儲存在 Amazon S3。這些紀錄在前 1 年必須可立即存取，之後需再封存 9 年。在整個 10 年期間內，包括管理員與 root 使用者在內的任何人都不得刪除這些紀錄。紀錄也必須以最高耐久性方式儲存。哪一種解決方案最符合需求？

**選項**
- A. 在整個 10 年期間將紀錄儲存在 S3 Glacier，並使用存取控制政策拒絕刪除。
- B. 使用 S3 Intelligent-Tiering 儲存紀錄，透過 IAM policy 拒絕刪除；10 年後再調整 IAM policy。
- C. 建立 S3 Lifecycle policy，在 1 年後將紀錄從 S3 Standard 轉移到 S3 Glacier Deep Archive，並搭配 S3 Object Lock。
- D. 建立 S3 Lifecycle policy，在 1 年後將紀錄從 S3 Standard 轉移到 S3 One Zone-Infrequent Access (S3 One Zone-IA)。

**答案**  
C

## Question #54

**題目**  
某公司在 AWS 上執行多個 Windows 工作負載。員工目前使用部署在兩台 Amazon EC2 執行個體上的 Windows 檔案分享，兩邊會同步資料並維持重複副本。公司希望保留目前的存取方式，同時改用高可用且耐久的儲存解決方案。解決方案架構師應如何設計？

**選項**
- A. 將所有資料遷移到 Amazon S3，並設定 IAM 驗證讓使用者存取檔案。
- B. 設定 Amazon S3 File Gateway，並將其掛載到既有 EC2 執行個體上。
- C. 將檔案分享環境延伸到採用 Multi-AZ 設定的 Amazon FSx for Windows File Server，並把所有資料遷移到 FSx。
- D. 將檔案分享環境延伸到採用 Multi-AZ 設定的 Amazon Elastic File System (Amazon EFS)，並把所有資料遷移到 EFS。

**答案**  
C

## Question #55

**題目**  
某解決方案架構師正在設計一個包含多個子網路的 VPC 架構，用來承載使用 Amazon EC2 執行個體與 Amazon RDS 資料庫執行個體的應用程式。此架構跨兩個可用區域，共有六個子網路；每個可用區域包含一個公有子網路、一個私有子網路，以及一個專用的資料庫子網路。只有私有子網路中的 EC2 執行個體可以存取 RDS 資料庫。哪一種方案最符合需求？

**選項**
- A. 建立新的 route table，排除通往公有子網路 CIDR 區段的路由，並將該 route table 關聯到資料庫子網路。
- B. 建立 security group，拒絕來自公有子網路執行個體所使用 security group 的入站流量，並將其套用到資料庫執行個體。
- C. 建立 security group，允許來自私有子網路執行個體所使用 security group 的入站流量，並將其套用到資料庫執行個體。
- D. 在公有子網路與私有子網路之間建立 peering connection，再於私有子網路與資料庫子網路之間建立另一條 peering connection。

**答案**  
C

## Question #56

**題目**  
某公司已使用 Amazon Route 53 註冊其網域名稱，並在 ca-central-1 區域使用 Amazon API Gateway 作為後端微服務 API 的公開介面。第三方服務需透過 HTTPS 安全地呼叫這些 API。公司希望 API Gateway 的 URL 使用公司自有網域與對應憑證。哪一種解決方案最符合需求？

**選項**
- A. 在 API Gateway 建立 stage variables，將 Name 設為「Endpoint-URL」、Value 設為公司網域名稱，以覆寫預設 URL。
- B. 在 Route 53 建立公司的網域 DNS 記錄，並將 alias record 指向 Regional API Gateway 的 stage endpoint。
- C. 建立 Regional API Gateway endpoint，將其與公司網域名稱關聯，並匯入公開憑證。
- D. 建立 Regional API Gateway endpoint，將其與公司網域名稱關聯，並匯入公開憑證。

**答案**  
D

## Question #57

**題目**  
某公司正在營運一個熱門社群媒體網站，允許使用者上傳圖片與其他使用者分享。公司希望確保圖片中不含不當內容，並且希望解決方案能將開發工作量降到最低。解決方案架構師應該怎麼做？

**選項**
- A. 使用 Amazon Comprehend 偵測不當內容，並對低信心預測採人工審查。
- B. 使用 Amazon Rekognition 偵測不當內容，並對低信心預測採人工審查。
- C. 使用 Amazon SageMaker 偵測不當內容，並使用 ground truth 標記低信心預測。
- D. 使用 AWS Fargate 部署自訂機器學習模型來偵測不當內容，並使用 ground truth 標記低信心預測。

**答案**  
B

## Question #58

**題目**  
某公司希望將關鍵應用程式以容器方式執行，以符合可擴展性與可用性需求。公司希望把重心放在關鍵應用程式本身的維護，不想負責容器底層基礎設施的佈建與管理。解決方案架構師應如何設計？

**選項**
- A. 使用 Amazon EC2 執行個體，並在執行個體上安裝 Docker。
- B. 使用 Amazon Elastic Container Service (Amazon ECS) 搭配 Amazon EC2 worker nodes。
- C. 使用 Amazon Elastic Container Service (Amazon ECS) 搭配 AWS Fargate。
- D. 使用來自 Amazon ECS 最佳化 Amazon Machine Image (AMI) 的 Amazon EC2 執行個體。

**答案**  
C

## Question #59

**題目**  
某公司託管超過 300 個全球網站與應用程式，並需要一個平台每天分析超過 30 TB 的 clickstream 資料。解決方案架構師應如何傳輸與處理這些 clickstream 資料？

**選項**
- A. 設計 AWS Data Pipeline，將資料封存到 Amazon S3，並執行 Amazon EMR 叢集進行分析。
- B. 建立 Amazon EC2 Auto Scaling 群組來處理資料，再送至 Amazon S3 資料湖供 Amazon Redshift 分析。
- C. 將資料快取到 Amazon CloudFront，儲存在 Amazon S3，並於物件新增時執行 AWS Lambda。
- D. 從 Amazon Kinesis Data Streams 收集資料，再使用 Amazon Kinesis Data Firehose 傳送到 Amazon S3 資料湖。

**答案**  
D

## Question #60

**題目**  
某公司網站架設在 AWS 上，並位於 Application Load Balancer (ALB) 後方。ALB 目前分別處理 HTTP 與 HTTPS。公司希望所有網站請求都改為使用 HTTPS。解決方案架構師應如何設計？

**選項**
- A. 更新 ALB 的 network ACL，只接受 HTTPS 流量。
- B. 建立規則，將 URL 中的 HTTP 取代為 HTTPS。
- C. 在 ALB 上建立 listener rule，將 HTTP 流量重新導向至 HTTPS。
- D. 將 ALB 替換為使用 Server Name Indication (SNI) 的 Network Load Balancer。

**答案**  
C

## Question #61

**題目**  
某公司正在 AWS 上開發一個兩層式 Web 應用程式。開發人員已將應用程式部署在 Amazon EC2 執行個體上，並直接連線至後端 Amazon RDS 資料庫。公司不能將資料庫憑證硬編碼在應用程式中，且必須定期自動輪替資料庫憑證。哪一種解決方案能以最低營運負擔滿足需求？

**選項**
- A. 將資料庫憑證儲存在 instance metadata 中，並透過 Amazon EventBridge（Amazon CloudWatch Events）規則執行輪替。
- B. 將資料庫憑證儲存在加密的 Amazon S3 bucket 設定檔中，並透過 Amazon EventBridge 執行輪替。
- C. 將資料庫憑證儲存為 AWS Secrets Manager secret，啟用自動輪替，並賦予 EC2 執行個體必要權限。
- D. 將資料庫憑證儲存為 AWS Systems Manager Parameter Store 的加密參數，並啟用自動輪替。

**答案**  
C

## Question #62

**題目**  
某公司要在 AWS 上部署新的公開 Web 應用程式，並讓其運行於 Application Load Balancer (ALB) 後方。應用程式需要在邊界層使用由外部憑證授權單位（CA）簽發的 SSL/TLS 憑證進行加密，且憑證必須每年於到期前輪替。解決方案架構師應如何設計？

**選項**
- A. 使用 AWS Certificate Manager (ACM) 簽發 SSL/TLS 憑證，套用到 ALB，並使用 ACM 的自動續約功能。
- B. 使用 AWS Certificate Manager (ACM) 簽發 SSL/TLS 憑證，匯入私鑰資料後套用到 ALB。
- C. 使用 AWS Certificate Manager (ACM) Private Certificate Authority 簽發來自 root CA 的 SSL/TLS 憑證，並套用到 ALB。
- D. 將外部 SSL/TLS 憑證匯入 AWS Certificate Manager (ACM)，套用到 ALB，並使用 Amazon EventBridge 協助進行憑證輪替提醒或自動化流程。

**答案**  
D

## Question #63

**題目**  
某公司在 AWS 上營運基礎設施，並有 700,000 名已註冊使用者使用其文件管理應用程式。公司打算推出一項產品，將大型 .pdf 檔案轉換為 .jpg 圖片檔。平均每個 .pdf 檔約 5 MB。公司需要同時儲存原始檔與轉換後的檔案，並且必須設計一個可隨需求快速成長而擴展、且最具成本效益的解決方案。哪一種方案最符合需求？

**選項**
- A. 將 .pdf 檔儲存至 Amazon S3，設定 S3 PUT event 觸發 AWS Lambda 函數將檔案轉換為 .jpg，並儲存轉換結果。
- B. 將 .pdf 檔儲存至 Amazon DynamoDB，使用 DynamoDB Streams 觸發 AWS Lambda 進行轉換。
- C. 將 .pdf 檔上傳至包含 Amazon EC2 執行個體與 Amazon EBS 的 AWS Elastic Beanstalk 應用程式進行處理。
- D. 將 .pdf 檔上傳至包含 Amazon EC2 執行個體與 Amazon EFS 的 AWS Elastic Beanstalk 應用程式進行處理。

**答案**  
A

## Question #64

**題目**  
某公司在內部部署的 Windows 檔案伺服器上有超過 5 TB 的檔案資料，使用者與應用程式每天都會存取這些資料。公司正在將 Windows 工作負載搬遷至 AWS。在搬遷過程中，公司需要同時保有對 AWS 與內部部署檔案儲存的低延遲存取，且不希望大幅改變現有檔案存取模式，同時要降低營運負擔。公司目前使用 AWS Site-to-Site VPN 連接 AWS。解決方案架構師應如何設計？

**選項**
- A. 在 AWS 上部署並設定 Amazon FSx for Windows File Server，並將內部部署檔案資料搬遷至 FSx for Windows File Server。
- B. 在內部部署環境中部署並設定 Amazon S3 File Gateway，將資料搬遷至 S3 File Gateway，並重新設定應用程式存取方式。
- C. 在內部部署環境中部署並設定 Amazon S3 File Gateway，將資料搬遷至 Amazon S3，並重新設定應用程式存取方式。
- D. 在 AWS 上部署並設定 Amazon FSx for Windows File Server，並於內部部署環境部署 Amazon FSx File Gateway。

**答案**  
A

## Question #65

**題目**  
某醫院最近使用 Amazon API Gateway 與 AWS Lambda 部署了一個 RESTful API。醫院利用 API Gateway 與 Lambda 上傳 PDF 與 JPEG 格式的報告。現在醫院需要修改 Lambda 程式碼，以辨識報告中的受保護健康資訊（PHI）。哪一種方案能以最低營運負擔滿足需求？

**選項**
- A. 使用既有的 Python 函式庫擷取報告文字，並從擷取出的文字中辨識 PHI。
- B. 使用 Amazon Textract 擷取報告文字，再使用 Amazon SageMaker 從文字中辨識 PHI。
- C. 使用 Amazon Textract 擷取報告文字，再使用 Amazon Comprehend Medical 從文字中辨識 PHI。
- D. 使用 Amazon Rekognition 擷取報告文字，再使用 Amazon Comprehend Medical 從文字中辨識 PHI。

**答案**  
C

## Question #66

**題目**  
某公司有一個應用程式會產生大量檔案，每個檔案約 5 MB，並儲存在 Amazon S3。公司政策要求這些檔案必須保存 4 年後才能刪除。這些檔案屬於不易重建的關鍵業務資料，因此任何時候都必須可立即存取。檔案在建立後前 30 天內會被頻繁存取，之後則很少存取。哪一種儲存方案最具成本效益？

**選項**
- A. 建立 S3 Lifecycle policy，在物件建立 30 天後從 S3 Standard 移轉到 S3 Glacier，並在 4 年後刪除。
- B. 建立 S3 Lifecycle policy，在物件建立 30 天後從 S3 Standard 移轉到 S3 One Zone-Infrequent Access (S3 One Zone-IA)。
- C. 建立 S3 Lifecycle policy，在物件建立 30 天後從 S3 Standard 移轉到 S3 Standard-Infrequent Access (S3 Standard-IA)。
- D. 建立 S3 Lifecycle policy，在物件建立 30 天後從 S3 Standard 移轉到 S3 Standard-IA，並在 4 年後刪除。

**答案**  
C

## Question #67

**題目**  
某公司在多台 Amazon EC2 執行個體上執行一個應用程式。該應用程式會從 Amazon SQS queue 讀取訊息、寫入 Amazon RDS 資料表，然後刪除 queue 中的訊息。RDS 資料表中偶爾會出現重複紀錄，但 SQS queue 中並沒有重複訊息。解決方案架構師應如何確保每則訊息只會被處理一次？

**選項**
- A. 使用 CreateQueue API 建立一個新的 queue。
- B. 使用 AddPermission API 新增適當權限。
- C. 使用 ReceiveMessage API 設定適當的 wait time。
- D. 使用 ChangeMessageVisibility API 增加 visibility timeout。

**答案**  
D

## Question #68

**題目**  
某解決方案架構師正在設計新的混合式架構，將公司的內部部署基礎設施延伸到 AWS。公司需要一條高可用、低延遲且穩定連接到 AWS Region 的連線，同時希望盡可能降低成本，並接受在主要連線故障時改由較慢的方式作為備援。哪一種方案最符合需求？

**選項**
- A. 佈建一條連到 AWS Region 的 AWS Direct Connect 連線，並額外建立 VPN 連線作為主要 Direct Connect 故障時的備援。
- B. 佈建一條 VPN tunnel 連線到 AWS Region，並再建立第二條 VPN tunnel 作為備援。
- C. 佈建一條連到 AWS Region 的 AWS Direct Connect 連線，並再建立第二條 Direct Connect 連線到相同 Region 作為備援。
- D. 佈建一條連到 AWS Region 的 AWS Direct Connect 連線，並使用 AWS CLI 的 Direct Connect failover 屬性自動切換。

**答案**  
A

## Question #69

**題目**  
某公司在 Amazon EC2 執行個體上執行一個關鍵 Web 應用程式，前方有 Application Load Balancer，EC2 執行個體位於 Auto Scaling 群組中。應用程式使用部署在單一可用區域中的 Amazon Aurora PostgreSQL 資料庫。公司希望應用程式具備高可用性，並將停機時間與資料遺失降到最低，且希望以最低營運負擔達成。哪一種方案最符合需求？

**選項**
- A. 將 EC2 執行個體部署於不同 AWS Region，使用 Amazon Route 53 health checks 重新導流，並使用 Aurora PostgreSQL Cross-Region 功能。
- B. 將 Auto Scaling 群組設定為跨多個可用區域，並將資料庫設為 Multi-AZ，同時設定 Amazon RDS／Aurora 的高可用架構。
- C. 將 Auto Scaling 群組設定在單一可用區域，並每小時產生資料庫快照，在發生問題時從快照還原。
- D. 將 Auto Scaling 群組設定於多個 AWS Region，並把應用程式資料寫入 Amazon S3，再透過 S3 Event 處理。

**答案**  
B

## Question #70

**題目**  
某公司的 HTTP 應用程式位於 Network Load Balancer (NLB) 後方。NLB 的 target group 使用 Amazon EC2 Auto Scaling 群組中的多台 EC2 執行個體來提供 Web 服務。公司發現 NLB 無法偵測應用程式的 HTTP 錯誤，這些錯誤目前需要人工重新啟動執行 Web 服務的 EC2 執行個體。公司希望在不撰寫自訂程式碼或腳本的情況下提升可用性。解決方案架構師應如何設計？

**選項**
- A. 在 NLB 上啟用 HTTP health checks，並提供公司應用程式的 URL。
- B. 在 EC2 執行個體上加入 cron job，每分鐘檢查本機應用程式日誌；若偵測到 HTTP 錯誤就重新啟動應用程式。
- C. 將 NLB 換成 Application Load Balancer，並啟用 HTTP health checks，指定公司應用程式的 URL。
- D. 建立 Amazon CloudWatch alarm 監控 NLB 的 UnhealthyHostCount 指標，並設定 Auto Scaling action。

**答案**  
C

## Question #71

**題目**  
某公司執行一個購物應用程式，使用 Amazon DynamoDB 儲存客戶資訊。若發生資料損毀，解決方案架構師需要設計一個符合 RPO 15 分鐘、RTO 1 小時的復原方案。應推薦哪一種方案？

**選項**
- A. 設定 DynamoDB global tables，發生復原需求時將應用程式指向其他 AWS Region。
- B. 啟用 DynamoDB point-in-time recovery，復原時還原到所需的時間點。
- C. 每天將 DynamoDB 資料匯出到 Amazon S3 Glacier，復原時再從 S3 Glacier 匯入回 DynamoDB。
- D. 每 15 分鐘為 DynamoDB table 建立 Amazon EBS snapshot，復原時還原 snapshot。

**答案**  
B

## Question #72

**題目**  
某公司執行一個照片處理應用程式，需要頻繁上傳與下載位於同一 AWS Region 的 Amazon S3 bucket 中的圖片。解決方案架構師發現資料傳輸費用增加，希望降低這些成本。應如何設計？

**選項**
- A. 將 Amazon API Gateway 部署到公有子網路中，並調整 route table，將 S3 呼叫導向 API Gateway。
- B. 在公有子網路部署 NAT gateway，並附加允許存取 S3 buckets 的 endpoint policy。
- C. 將應用程式部署於公有子網路，透過 internet gateway 存取 S3 buckets。
- D. 在 VPC 中部署 S3 gateway endpoint，並附加允許存取 S3 buckets 的 endpoint policy。

**答案**  
D

## Question #73

**題目**  
某公司最近在 VPC 的私有子網路中啟動 Linux 應用程式執行個體，並在公有子網路中的 Amazon EC2 執行個體上啟動 Linux bastion host。解決方案架構師需要讓公司內部網路透過公司對外網際網路連線，先連到 bastion host，再連到應用程式伺服器，同時確保所有 EC2 執行個體的 security group 都允許此存取。應採取哪兩個步驟？（選二）

**選項**
- A. 將 bastion host 的 security group 更換成僅允許來自應用程式執行個體的入站存取。
- B. 將 bastion host 的 security group 更換成僅允許來自公司內部 IP 範圍的入站存取。
- C. 將 bastion host 的 security group 更換成僅允許來自公司外部對外 IP 範圍的入站存取。
- D. 將應用程式執行個體的 security group 更換成僅允許來自 bastion host 私有 IP 位址的 SSH 入站存取。
- E. 將應用程式執行個體的 security group 更換成僅允許來自 bastion host 公有 IP 位址的 SSH 入站存取。

**答案**  
CD

## Question #74

**題目**  
某解決方案架構師正在設計一個兩層式 Web 應用程式。應用程式的公開 Web 層部署在公有子網路中的 Amazon EC2；資料庫層則是執行於私有子網路中的 Microsoft SQL Server on Amazon EC2。公司非常重視安全性。此情境下應如何設定 security groups？（選二）

**選項**
- A. 將 Web 層的 security group 設定為允許來自 0.0.0.0/0 的 443 入站流量。
- B. 將 Web 層的 security group 設定為允許到 0.0.0.0/0 的 443 出站流量。
- C. 將資料庫層的 security group 設定為允許來自 Web 層 security group 的 1433 入站流量。
- D. 將資料庫層的 security group 設定為允許到 Web 層 security group 的 443 與 1433 出站流量。
- E. 將資料庫層的 security group 設定為允許來自 Web 層 security group 的 443 與 1433 入站流量。

**答案**  
AC

## Question #75

**題目**  
某公司想將多層式應用程式從內部部署搬到 AWS Cloud，以改善效能。各應用層之間透過 RESTful 服務通訊；當某一層過載時，交易會遺失。解決方案架構師必須設計一個既能解決問題、又能現代化應用程式，且營運效率最高的方案。哪一種方案最符合需求？

**選項**
- A. 使用 Amazon API Gateway，將交易導向 AWS Lambda 作為應用層，並搭配 Amazon SQS 進行解耦。
- B. 使用 Amazon CloudWatch metrics 分析歷史效能，以找出伺服器尖峰負載期間並手動擴充。
- C. 使用 Amazon SNS 來處理部署在 Amazon EC2 Auto Scaling 群組中的應用伺服器之間的訊息傳遞。
- D. 使用 Amazon SQS 來處理部署在 Amazon EC2 Auto Scaling 群組中的應用伺服器之間的訊息傳遞。

**答案**  
A

## Question #76

**題目**  
某公司每天從單一工廠內的多台機器接收 10 TB 的儀器資料。資料以 JSON 檔形式儲存在工廠內部部署資料中心的 SAN 中。公司希望將資料傳送到 Amazon S3，讓其他多個系統可用於關鍵的近即時分析。由於資料敏感，因此安全傳輸非常重要。哪一種解決方案可提供最可靠的資料傳輸？

**選項**
- A. 透過公網使用 AWS DataSync。
- B. 透過 AWS Direct Connect 使用 AWS DataSync。
- C. 透過公網使用 AWS Database Migration Service (AWS DMS)。
- D. 透過 AWS Direct Connect 使用 AWS Database Migration Service (AWS DMS)。

**答案**  
B

## Question #77

**題目**  
某公司需要為其應用程式建置即時資料擷取架構。公司需要一個 API、一個在資料串流過程中進行轉換的處理程序，以及一個資料儲存解決方案。哪一種解決方案能以最低營運負擔滿足需求？

**選項**
- A. 部署 Amazon EC2 執行個體來託管 API，將資料送到 Amazon Kinesis Data Stream，並建立 Kinesis Data Analytics 進行轉換。
- B. 部署 Amazon EC2 執行個體來託管 API，將資料送到 AWS Glue，並停用 source/destination checking。
- C. 設定 Amazon API Gateway API，將資料送到 Amazon Kinesis Data Stream，再建立 Amazon Kinesis Data Firehose 進行後續儲存與傳遞。
- D. 設定 Amazon API Gateway API，將資料送到 AWS Glue，使用 AWS Lambda 轉換資料，再由 AWS Glue 儲存資料。

**答案**  
C

## Question #78

**題目**  
某公司需要將使用者交易資料保存在 Amazon DynamoDB table 中，且必須保存 7 年。哪一種方案能以最高營運效率滿足需求？

**選項**
- A. 使用 DynamoDB point-in-time recovery 持續備份該 table。
- B. 使用 AWS Backup 建立備份排程與保留政策來保護該 table。
- C. 透過 DynamoDB 主控台建立 on-demand backup，並存放到 Amazon S3，再設定 S3 policy。
- D. 建立 Amazon EventBridge 規則觸發 AWS Lambda 函數，定期備份資料。

**答案**  
B

## Question #79

**題目**  
某公司計畫使用 Amazon DynamoDB table 作為資料儲存。公司關注成本最佳化。該 table 在大多數早上幾乎不會被使用，但到了晚上讀寫流量通常會變得不可預測，而且流量尖峰出現得非常快。解決方案架構師應推薦哪一種作法？

**選項**
- A. 建立使用 on-demand capacity mode 的 DynamoDB table。
- B. 建立含有 global secondary index 的 DynamoDB table。
- C. 建立使用 provisioned capacity 並啟用 auto scaling 的 DynamoDB table。
- D. 建立使用 provisioned capacity mode 並設定為 global table 的 DynamoDB table。

**答案**  
A

## Question #80

**題目**  
某公司最近與 AWS Managed Service Provider (MSP) Partner 簽約，以協助應用程式遷移。解決方案架構師需要將既有 AWS 帳號中的 Amazon Machine Image (AMI) 分享給 MSP Partner 的 AWS 帳號。此 AMI 由 Amazon EBS 支援，且使用 AWS KMS customer managed key 加密 EBS volume snapshots。哪一種方式是最安全的分享方式？

**選項**
- A. 將加密的 AMI 與 snapshots 設為公開可用，並修改 key policy 允許 MSP Partner 的 AWS 帳號使用該金鑰。
- B. 修改 AMI 的 launchPermission 屬性，只分享給 MSP Partner 的 AWS 帳號，並修改 key policy 允許對方使用該 KMS key。
- C. 修改 AMI 的 launchPermission 屬性，只分享給 MSP Partner 的 AWS 帳號，並修改 key policy（內容不同於 B）。
- D. 將 AMI 匯出到 MSP Partner AWS 帳號中的 Amazon S3 bucket，並用新的 KMS key 加密該 bucket。

**答案**  
B

## Question #81

**題目**  
某解決方案架構師正在為一個新應用程式設計雲端架構。此處理程序必須可平行執行，並可依待處理工作數量動態增加或移除應用節點。處理器應用程式是無狀態的，同時必須確保應用程式鬆耦合，且工作項目能被耐久保存。應採用哪一種設計？

**選項**
- A. 建立 Amazon SNS topic 傳送待處理工作，並建立包含處理器程式的 Amazon Machine Image (AMI)。
- B. 建立 Amazon SQS queue 儲存待處理工作，並建立包含處理器程式的 Amazon Machine Image (AMI)。
- C. 建立 Amazon SQS queue 儲存待處理工作，並建立包含處理器程式的 Amazon Machine Image (AMI)。
- D. 建立 Amazon SNS topic 傳送待處理工作，並建立包含處理器程式的 Amazon Machine Image (AMI)。

**答案**  
C

## Question #82

**題目**  
某公司在 AWS Cloud 上託管多個 Web 應用程式，並在 Elastic Load Balancers 上使用匯入到 AWS Certificate Manager (ACM) 的憑證。公司安全團隊要求在每張憑證到期前 30 天收到通知。解決方案架構師應推薦哪一種方案？

**選項**
- A. 在 ACM 中新增規則，自憑證到期前 30 天開始每天發布自訂訊息到 Amazon SNS topic。
- B. 建立 AWS Config rule，檢查 30 天內即將到期的憑證，並設定 Amazon EventBridge（Amazon CloudWatch Events）處理通知。
- C. 使用 AWS Trusted Advisor 檢查 30 天內即將到期的憑證，並建立 Amazon CloudWatch alarm。
- D. 建立 Amazon EventBridge（Amazon CloudWatch Events）規則，以偵測任何 30 天內即將到期的憑證，並設定通知流程。

**答案**  
D

## Question #83

**題目**  
某公司的動態網站目前由美國的內部部署伺服器託管。公司即將在歐洲推出產品，希望改善歐洲新使用者的網站載入時間，但後端仍必須保留在美國，而且產品幾天後就要上線，必須採用可立即實施的方案。解決方案架構師應推薦什麼？

**選項**
- A. 在 us-east-1 啟動 Amazon EC2 執行個體，並將網站遷移過去。
- B. 將網站搬到 Amazon S3，並在不同 Region 間使用 Cross-Region Replication。
- C. 使用 Amazon CloudFront，並將內部部署伺服器設為 custom origin。
- D. 使用 Amazon Route 53 geoproximity routing policy，指向內部部署伺服器。

**答案**  
C

## Question #84

**題目**  
某公司希望降低既有三層式 Web 架構的成本。Web、應用程式與資料庫伺服器分別運行在 Amazon EC2 執行個體上，供開發、測試與正式環境使用。EC2 執行個體在尖峰時平均 CPU 使用率為 30%，離峰時為 10%。正式環境的 EC2 執行個體 24 小時運作；開發與測試環境每天至少運作 8 小時。公司計畫自動化停止未使用的開發與測試 EC2。哪一種 EC2 採購策略最具成本效益？

**選項**
- A. 正式環境使用 Spot Instances；開發與測試環境使用 Reserved Instances。
- B. 正式環境使用 Reserved Instances；開發與測試環境使用 On-Demand Instances。
- C. 正式環境使用 Spot blocks；開發與測試環境使用 Reserved Instances。
- D. 正式環境使用 On-Demand Instances；開發與測試環境使用 Spot blocks。

**答案**  
B

## Question #85

**題目**  
某公司有一套正式環境 Web 應用程式，使用者可透過 Web 介面或行動 App 上傳文件。依照新的法規要求，文件一旦儲存後就不得再被修改或刪除。解決方案架構師應如何設計？

**選項**
- A. 將上傳文件儲存在啟用 S3 Versioning 與 S3 Object Lock 的 Amazon S3 bucket 中。
- B. 將上傳文件儲存在 Amazon S3 bucket 中，並設定 S3 Lifecycle policy 定期封存文件。
- C. 將上傳文件儲存在啟用 S3 Versioning 的 Amazon S3 bucket 中，並透過 ACL 限制為唯讀。
- D. 將上傳文件儲存在 Amazon EFS volume 中，並以掛載方式供應用程式存取。

**答案**  
A

## Question #86

**題目**  
某公司有數台 Web 伺服器需要經常存取共用的 Amazon RDS MySQL Multi-AZ DB instance。公司需要安全的連線方式，同時還必須符合定期輪替使用者憑證的安全要求。哪一種方案最符合需求？

**選項**
- A. 將資料庫使用者憑證儲存在 AWS Secrets Manager 中，並授與 Web 伺服器存取 secret 的必要 IAM 權限。
- B. 將資料庫使用者憑證儲存在 AWS Systems Manager OpsCenter 中，並授與 Web 伺服器必要 IAM 權限。
- C. 將資料庫使用者憑證儲存在安全的 Amazon S3 bucket 中，並授與 Web 伺服器必要 IAM 權限。
- D. 將資料庫使用者憑證儲存在 Web 伺服器檔案系統中由 AWS KMS 加密的檔案裡。

**答案**  
A

## Question #87

**題目**  
某公司有一套應用程式，使用 AWS Lambda 函數並由 Amazon API Gateway API 觸發。這些 Lambda 函數會將客戶資料寫入 Amazon Aurora MySQL 資料庫。每當公司升級資料庫時，Lambda 函數在升級完成前都無法建立資料庫連線，導致部分事件期間產生的客戶資料未被記錄。解決方案架構師需要設計一個解決方案，在資料庫升級期間仍能保留客戶資料。哪一種方案最符合需求？

**選項**
- A. 在 Lambda 函數與資料庫之間佈建 Amazon RDS Proxy，並讓 Lambda 透過 RDS Proxy 連線。
- B. 將 Lambda 最長執行時間設到最大值，並在程式碼中加入重試機制，把客戶資料暫存於程式內。
- C. 將客戶資料持久化到 Lambda 本機儲存空間，再由新的 Lambda 函數掃描本機儲存並補寫入資料庫。
- D. 將客戶資料儲存在 Amazon SQS FIFO queue 中，再建立新的 Lambda 函數輪詢並寫入資料庫。

**答案**  
A

## Question #88

**題目**  
某調查公司多年來蒐集美國各地資料，並將資料存放在一個 3 TB 且持續成長的 Amazon S3 bucket 中。公司最近開始與一家在歐洲、也使用 S3 bucket 的行銷公司分享資料。公司希望將資料傳輸成本降到最低。哪一種解決方案最符合需求？

**選項**
- A. 在公司的 S3 bucket 上啟用 Requester Pays。
- B. 將公司的 S3 bucket 設定 S3 Cross-Region Replication 到該行銷公司的某個 S3 bucket。
- C. 設定 cross-account access，讓行銷公司可直接存取公司的 S3 bucket。
- D. 將公司的 S3 bucket 設定為 S3 Intelligent-Tiering，並同步到該行銷公司的某個 S3 bucket。

**答案**  
B

## Question #89

**題目**  
某公司使用 Amazon S3 儲存機密稽核文件。S3 bucket 目前透過 bucket policy，依最小權限原則限制只有稽核團隊 IAM 使用者能夠存取。公司經理擔心文件被誤刪，希望採用更安全的方案。解決方案架構師應如何保護這些稽核文件？

**選項**
- A. 在 S3 bucket 上啟用 versioning 與 MFA Delete。
- B. 為每個稽核團隊 IAM 使用者帳號啟用 MFA。
- C. 在稽核期間，為稽核團隊 IAM 使用者帳號新增 S3 Lifecycle policy 來拒絕 s3:DeleteObject。
- D. 使用 AWS KMS 加密 S3 bucket，並限制稽核團隊 IAM 使用者存取金鑰。

**答案**  
A

## Question #90

**題目**  
某公司使用 SQL 資料庫儲存公開可存取的電影資料。該資料庫執行於 Amazon RDS Single-AZ DB instance。某支腳本每天會在隨機時間查詢資料庫，以記錄新增電影的數量，並且必須在上班時間內提供最終統計。開發團隊發現當該腳本執行時，資料庫效能不足，影響開發作業。解決方案架構師必須以最低營運負擔解決此問題。哪一種方案最符合需求？

**選項**
- A. 將 DB instance 修改為 Multi-AZ 部署。
- B. 建立資料庫 read replica，並將腳本改為只查詢 read replica。
- C. 要求開發團隊每天結束時手動匯出資料庫資料。
- D. 使用 Amazon ElastiCache 快取該腳本常用查詢結果。

**答案**  
D

## Question #91

**題目**  
某公司在 VPC 內的 Amazon EC2 執行個體上執行應用程式，其中一個應用程式需要呼叫 Amazon S3 API 來讀寫物件。依公司安全規範，應用程式流量不得經過公網。哪一種方案最符合需求？

**選項**
- A. 設定 S3 gateway endpoint。
- B. 在私有子網路中建立 S3 bucket。
- C. 在與 EC2 相同 AWS Region 建立 S3 bucket。
- D. 在 EC2 所在子網路中設定 NAT gateway。

**答案**  
A

## Question #92

**題目**  
某公司將敏感使用者資訊儲存在 Amazon S3 bucket 中，並希望從執行於 VPC 內 Amazon EC2 執行個體上的應用程式層安全地存取該 bucket。解決方案架構師應採取哪兩個步驟？（選二）

**選項**
- A. 在 VPC 內為 Amazon S3 設定 VPC gateway endpoint。
- B. 建立 bucket policy，將 S3 bucket 中的物件設為公開。
- C. 建立 bucket policy，將存取限制為僅允許來自 VPC 內應用程式層。
- D. 建立 IAM user 並授與 S3 存取權限，再將憑證複製到 EC2 執行個體。
- E. 建立 NAT instance，讓 EC2 執行個體透過 NAT instance 存取 S3 bucket。

**答案**  
AC

## Question #93

**題目**  
某公司在內部部署執行一套由 MySQL 資料庫支援的應用程式，現在要將其遷移到 AWS，以提升彈性與可用性。現有架構在正常運作時讀取流量很高，而且每 4 小時開發團隊會將正式環境資料庫完整匯出，用於建立測試環境資料庫。匯出期間使用者會遭遇無法接受的延遲，且開發團隊在程序完成前無法使用測試環境。解決方案架構師必須提出可降低正式環境延遲，並讓開發團隊能立即持續使用測試環境的替代架構。哪一種方案最符合需求？

**選項**
- A. 正式環境使用 Amazon Aurora MySQL 搭配 Multi-AZ Aurora Replicas，並透過備份與還原方式建立測試資料庫。
- B. 正式環境使用 Amazon Aurora MySQL 搭配 Multi-AZ Aurora Replicas，並使用 database cloning 即時建立測試資料庫。
- C. 正式環境使用 Amazon RDS for MySQL 搭配 Multi-AZ 與 read replicas，並直接使用 standby instance 作為測試環境。
- D. 正式環境使用 Amazon RDS for MySQL 搭配 Multi-AZ 與 read replicas，並透過備份與還原方式建立測試資料庫。

**答案**  
B

## Question #94

**題目**  
某公司正在設計一個應用程式，讓使用者將小型檔案上傳到 Amazon S3。每當使用者上傳檔案後，系統需要對檔案做一次性的簡單處理，將資料轉換為 JSON 格式，供後續分析使用。每個檔案必須在上傳後盡快處理。流量需求不固定，有些天會有大量上傳，有些天則很少甚至沒有。哪一種方案能以最低營運負擔滿足需求？

**選項**
- A. 設定 Amazon EMR 從 Amazon S3 讀取文字檔，執行處理腳本轉換資料，並把結果 JSON 檔儲回 S3。
- B. 設定 Amazon S3 傳送 event notification 到 Amazon SQS queue，再使用 Amazon EC2 執行個體處理。
- C. 設定 Amazon S3 傳送 event notification 到 Amazon SQS queue，再使用 AWS Lambda 函數進行處理。
- D. 設定 Amazon EventBridge（Amazon CloudWatch Events）在新檔案上傳時傳送事件到 Amazon Kinesis Data Streams。

**答案**  
C

## Question #95

**題目**  
某應用程式讓總公司使用者存取產品資料，資料存放在 Amazon RDS MySQL DB instance。營運團隊已確認應用程式效能瓶頸來自資料庫，希望將讀取流量與寫入流量分離。解決方案架構師需要快速優化效能。應推薦哪一種方案？

**選項**
- A. 將現有資料庫改為 Multi-AZ 部署，並由主要可用區域提供讀取請求。
- B. 將現有資料庫改為 Multi-AZ 部署，並由次要可用區域提供讀取請求。
- C. 為資料庫建立 read replicas，並以原始資料庫一半的運算與儲存資源來配置。
- D. 為資料庫建立 read replicas，並以與原始資料庫相同的運算與儲存資源來配置。

**答案**  
D

## Question #96

**題目**  
某 Amazon EC2 管理員建立了一個 IAM policy，並將其關聯到一個包含多名使用者的 IAM group。此 policy 的效果是什麼？

**選項**
- A. 使用者可以在除 us-east-1 之外的任何 AWS Region 終止 EC2 執行個體。
- B. 使用者可以終止位於 us-east-1、IP 位址為 10.100.100.1 的 EC2 執行個體。
- C. 使用者在來源 IP 為 10.100.100.254 時，可以於 us-east-1 Region 終止 EC2 執行個體。
- D. 使用者在來源 IP 為 10.100.100.254 時，不能於 us-east-1 Region 終止 EC2 執行個體。

**答案**  
C

## Question #97

**題目**  
某公司在內部部署有大型 Microsoft SharePoint 環境，需要 Microsoft Windows 共用檔案儲存。公司希望將此工作負載遷移到 AWS Cloud，並評估多種儲存選項。儲存解決方案必須高可用，且能與 Active Directory 整合以進行存取控制。哪一種方案最符合需求？

**選項**
- A. 設定 Amazon EFS 儲存，並將 Active Directory 網域設為驗證來源。
- B. 在兩個可用區域中建立 AWS Storage Gateway file gateway 的 SMB 檔案分享。
- C. 建立 Amazon S3 bucket，並設定 Microsoft Windows Server 將其掛載為磁碟區。
- D. 在 AWS 上建立 Amazon FSx for Windows File Server 檔案系統，並設定 Active Directory 網域進行驗證。

**答案**  
D

## Question #98

**題目**  
某影像處理公司有一個 Web 應用程式，讓使用者上傳圖片。應用程式會把圖片上傳到 Amazon S3 bucket，且公司已設定 S3 event notifications 將物件建立事件發佈到 Amazon SQS standard queue。該 SQS queue 作為 AWS Lambda 函數的事件來源，Lambda 會處理圖片並透過電子郵件將結果寄給使用者。現在使用者回報每張圖片都收到了多封電子郵件。解決方案架構師判斷，SQS 訊息重複觸發 Lambda，導致重複寄信。要以最低營運負擔解決此問題，應怎麼做？

**選項**
- A. 在 SQS queue 中啟用 long polling，將 ReceiveMessage wait time 增加到 30 秒。
- B. 將 SQS standard queue 改成 SQS FIFO queue，並使用 message deduplication ID 丟棄重複訊息。
- C. 將 SQS queue 的 visibility timeout 設定為大於 Lambda function timeout 與 batch window 總和的值。
- D. 修改 Lambda function，在讀取到每筆訊息後、處理前就立即將訊息從 SQS queue 刪除。

**答案**  
A

## Question #99

**題目**  
某公司正在為部署於內部部署資料中心的遊戲應用程式設計共用儲存方案。公司需要能讓 Lustre client 存取資料，且解決方案必須是全受管服務。哪一種方案最符合需求？

**選項**
- A. 建立 AWS Storage Gateway file gateway，並建立符合需求通訊協定的 file share，再讓應用伺服器連線。
- B. 建立 Amazon EC2 Windows 執行個體，安裝並設定 Windows file share 角色，再讓應用伺服器連線。
- C. 建立 Amazon EFS 檔案系統，並設定支援 Lustre，然後掛載到來源伺服器。
- D. 建立 Amazon FSx for Lustre 檔案系統，掛載到來源伺服器，並讓應用伺服器透過 Lustre client 連線。

**答案**  
D

## Question #100

**題目**  
某公司的容器化應用程式執行於 Amazon EC2 執行個體上。該應用程式在與其他業務應用程式通訊前，必須先下載安全憑證。公司希望有一個高度安全的方案，能即時或近即時地加密與解密憑證，並在加密後將資料儲存在高可用儲存空間中，同時把營運負擔降到最低。哪一種方案最符合需求？

**選項**
- A. 為加密後的憑證建立 AWS Secrets Manager secrets，並在需要時手動更新憑證，再用 IAM 控制存取。
- B. 建立 AWS Lambda 函數，使用 Python cryptography 函式庫接收並執行加密作業，再儲存結果。
- C. 建立 AWS KMS customer managed key，允許 EC2 角色使用該金鑰進行加密。
- D. 建立 AWS KMS customer managed key，允許 EC2 角色使用該金鑰進行加密與解密，並將資料儲存在高可用儲存服務中。

**答案**  
D
