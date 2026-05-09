# AWS SAA 題目整理（第 253～275 題中文翻譯）

說明：
- 依據你上傳的 `AWS_SAA_pages_701_800(1).md` 內容整理。
- 保留 AWS 服務相關英文名稱。
- 僅整理：題號、題目、選項、答案。

---

## Question #253

**題目**  
一位 solutions architect 建立了兩個 IAM policies：Policy1 與 Policy2，並且將這兩個 policies 都附加到某個 IAM group。  
之後，一位 cloud engineer 被加入為該 IAM group 的 IAM user。  
請問這位 cloud engineer 能執行下列哪一項動作？

**選項**  
- A. 刪除 IAM users  
- B. 刪除 directories  
- C. 刪除 Amazon EC2 instances  
- D. 刪除 Amazon CloudWatch Logs 中的 logs  

**答案**  
C

---

## Question #254

**題目**  
某公司正在檢視最近將三層式應用程式遷移到 VPC 的結果。安全團隊發現，在應用程式各層之間的 Amazon EC2 security group ingress 與 egress 規則中，沒有落實 least privilege 原則。  
solutions architect 應該怎麼修正這個問題？

**選項**  
- A. 使用 instance ID 作為來源或目的地來建立 security group rules。  
- B. 使用 security group ID 作為來源或目的地來建立 security group rules。  
- C. 使用 VPC CIDR blocks 作為來源或目的地來建立 security group rules。  
- D. 使用 subnet CIDR blocks 作為來源或目的地來建立 security group rules。  

**答案**  
B

---

## Question #255

**題目**  
某公司有一個 ecommerce checkout workflow，會先將訂單寫入資料庫，再呼叫一個服務來處理付款。使用者在 checkout 過程中經常遇到 timeout。當使用者重新送出 checkout 表單時，系統會為同一筆預期交易建立多筆不同的訂單。  
solutions architect 應如何重構這個 workflow，以避免建立多筆訂單？

**選項**  
- A. 將 web application 設定為把 order message 傳送到 Amazon Kinesis Data Firehose。讓 payment service 從 Kinesis Data Firehose 取回訊息並處理訂單。  
- B. 在 AWS CloudTrail 中建立規則，根據記錄的 application path request 觸發 AWS Lambda function。使用 Lambda 查詢資料庫、呼叫 payment service，並傳入 order 資訊。  
- C. 先將 order 儲存在資料庫中，再把包含 order number 的訊息傳送到 Amazon Simple Notification Service (Amazon SNS)。讓 payment service 輪詢 Amazon SNS、取回訊息並處理訂單。  
- D. 先將 order 儲存在資料庫中，再把包含 order number 的訊息傳送到 Amazon Simple Queue Service (Amazon SQS) FIFO queue。讓 payment service 取回訊息並處理訂單，處理完成後刪除訊息。  

**答案**  
D

---

## Question #256

**題目**  
一位 solutions architect 正在使用 Amazon S3 bucket 作為儲存層，實作文件審核應用程式。此解決方案必須防止文件被意外刪除，並確保所有版本的文件都可被存取。使用者必須能下載、修改，並重新上傳文件。  
應採取下列哪兩項措施來滿足需求？（選兩項）

**選項**  
- A. 啟用唯讀 bucket ACL。  
- B. 在 bucket 上啟用 versioning。  
- C. 將 IAM policy 附加到 bucket。  
- D. 在 bucket 上啟用 MFA Delete。  
- E. 使用 AWS KMS 加密 bucket。  

**答案**  
BD

---

## Question #257

**題目**  
某公司要為 AWS account 內所有應用程式彙整 Amazon EC2 Auto Scaling events。公司需要使用 serverless 解決方案，將 EC2 Auto Scaling 狀態資料儲存到 Amazon S3。之後公司會利用 S3 中的資料，在 dashboard 上提供近即時更新。此解決方案不得影響 EC2 instance 的啟動速度。  
公司應該如何將資料搬移到 Amazon S3，以符合需求？

**選項**  
- A. 使用 Amazon CloudWatch metric stream，將 EC2 Auto Scaling 狀態資料送到 Amazon Kinesis Data Firehose，再將資料儲存到 Amazon S3。  
- B. 啟動 Amazon EMR cluster 來收集 EC2 Auto Scaling 狀態資料，再送到 Amazon Kinesis Data Firehose，最後儲存到 Amazon S3。  
- C. 建立 Amazon EventBridge rule，定期觸發 AWS Lambda function。讓 Lambda function 將 EC2 Auto Scaling 狀態資料直接送到 Amazon S3。  
- D. 在 EC2 instance 啟動期間使用 bootstrap script 安裝 Amazon Kinesis Agent。設定 Kinesis Agent 收集 EC2 Auto Scaling 狀態資料並送到 Amazon Kinesis Data Firehose，再儲存到 Amazon S3。  

**答案**  
A

---

## Question #258

**題目**  
某公司每小時都會將數百個 `.csv` 檔案放入 Amazon S3 bucket，每個檔案大小為 1 GB。每當有檔案上傳時，公司都需要把該檔案轉換成 Apache Parquet 格式，並把輸出檔放到另一個 S3 bucket。  
哪個解決方案能以**最低營運負擔**滿足需求？

**選項**  
- A. 建立 AWS Lambda function 下載 `.csv` 檔、將檔案轉換為 Parquet 格式，並把輸出檔放到 S3 bucket。每次發生 S3 PUT event 時觸發 Lambda。  
- B. 建立 Apache Spark job 讀取 `.csv` 檔、轉換為 Parquet 格式，並將輸出檔放到 S3 bucket。為每個 S3 PUT event 建立 AWS Lambda function 來觸發 Spark job。  
- C. 在放置 `.csv` 檔的 S3 bucket 上建立 AWS Glue table 與 AWS Glue crawler。定期由 AWS Lambda function 使用 Amazon Athena 查詢 AWS Glue table，將查詢結果轉換為 Parquet 格式，並寫入 S3 bucket。  
- D. 建立 AWS Glue extract, transform, and load (ETL) job，將 `.csv` 檔轉換為 Parquet 格式並輸出到 S3 bucket。針對每次 S3 PUT event 建立 AWS Lambda function 來觸發 ETL job。  

**答案**  
A

---

## Question #259

**題目**  
某公司正在為所有執行於 Amazon RDS DB instances 的資料庫實作新的資料保留政策。公司必須將每日備份保留至少 2 年，而且這些備份必須具備一致性並可還原。  
solutions architect 應建議哪個解決方案？

**選項**  
- A. 在 AWS Backup 中建立 backup vault 以保留 RDS backups。建立新的 backup plan，設定每日排程，並在建立後 2 年到期。將 RDS DB instances 指派到該 backup plan。  
- B. 為 RDS DB instances 設定 backup window 以進行每日 snapshots。為每個 RDS DB instance 指派 2 年的 snapshot retention policy。使用 Amazon Data Lifecycle Manager (Amazon DLM) 排程刪除 snapshots。  
- C. 設定 database transaction logs 自動備份到 Amazon CloudWatch Logs，並設定 2 年到期。  
- D. 設定 AWS Database Migration Service (AWS DMS) replication task。部署 replication instance，並設定 change data capture (CDC) task，將資料庫變更串流到 Amazon S3。再設定 S3 Lifecycle policies 於 2 年後刪除 snapshots。  

**答案**  
A

---

## Question #260

**題目**  
某公司的法遵團隊需要將檔案分享系統搬到 AWS。這些分享目前執行在 Windows Server SMB file share 上，並由自管的 on-premises Active Directory 控制對檔案與資料夾的存取。  
公司希望在解決方案中使用 Amazon FSx for Windows File Server，並且必須確保搬遷到 AWS 之後，on-premises Active Directory groups 仍能限制對 FSx for Windows File Server SMB compliance shares、資料夾與檔案的存取。公司目前已建立好一個 FSx for Windows File Server file system。  
哪個解決方案能滿足需求？

**選項**  
- A. 建立 Active Directory Connector 來連接 Active Directory。將 Active Directory groups 對應到 IAM groups 以限制存取。  
- B. 指派一個 tag，tag key 為 `Restrict`、tag value 為 `Compliance`。將 Active Directory groups 對應到 IAM groups 以限制存取。  
- C. 建立直接連結到 FSx for Windows File Server 的 IAM service-linked role 來限制存取。  
- D. 將該 file system 加入 Active Directory 以限制存取。  

**答案**  
D

---

## Question #261

**題目**  
某公司最近宣布其零售網站將面向全球使用者提供服務。該網站執行在多台 Amazon EC2 instances 上，並由 Elastic Load Balancer 導流。這些 instances 透過跨多個 Availability Zones 的 Auto Scaling group 執行。  
公司希望根據使用者存取網站的裝置類型，提供不同版本的內容。  
solutions architect 應採取下列哪兩個動作來滿足需求？（選兩項）

**選項**  
- A. 設定 Amazon CloudFront 快取多個版本的內容。  
- B. 在 Network Load Balancer 設定 host header，將流量轉送到不同 instances。  
- C. 設定 Lambda@Edge function，根據 User-Agent header 將特定物件傳送給使用者。  
- D. 設定 AWS Global Accelerator，將請求轉送到 Network Load Balancer (NLB)，並在 NLB 上設定 host-based routing 到不同 EC2 instances。  
- E. 設定 AWS Global Accelerator，將請求轉送到 Network Load Balancer (NLB)，並在 NLB 上設定 path-based routing 到不同 EC2 instances。  

**答案**  
AC

---

## Question #262

**題目**  
某公司計畫在其多層式 web application 中使用 Amazon ElastiCache。solutions architect 為 ElastiCache cluster 建立了一個 Cache VPC，也為應用程式的 Amazon EC2 instances 建立了一個 App VPC。兩個 VPC 都位於 us-east-1 Region。  
solutions architect 必須實作一個解決方案，讓應用程式的 EC2 instances 可以存取 ElastiCache cluster。  
哪個解決方案能以**最具成本效益**的方式滿足需求？

**選項**  
- A. 在兩個 VPC 之間建立 peering connection。於兩個 VPC 中都加入指向 peering connection 的 route table entry。並在 ElastiCache cluster 的 security group 中設定 inbound rule，允許來自 application security group 的連線。  
- B. 建立一個 Transit VPC。更新 Cache VPC 與 App VPC 的 route tables，將流量導向 Transit VPC。並在 ElastiCache cluster 的 security group 中設定 inbound rule，允許來自 application security group 的連線。  
- C. 在兩個 VPC 之間建立 peering connection。於兩個 VPC 中都加入指向 peering connection 的 route table entry。並在 peering connection 的 security group 中設定 inbound rule，允許來自 application security group 的連線。  
- D. 建立一個 Transit VPC。更新 Cache VPC 與 App VPC 的 route tables，將流量導向 Transit VPC。並在 Transit VPC 的 security group 中設定 inbound rule，允許來自 application security group 的連線。  

**答案**  
A

---

## Question #263

**題目**  
某公司正在建置一套由多個 microservices 組成的應用程式。公司已決定使用 container technologies 將軟體部署到 AWS。公司需要一個能將持續維護與擴展工作量降到最低的方案，而且公司不能管理額外的基礎設施。  
solutions architect 應採取下列哪兩個動作？（選兩項）

**選項**  
- A. 部署 Amazon Elastic Container Service (Amazon ECS) cluster。  
- B. 在跨多個 Availability Zones 的 Amazon EC2 instances 上部署 Kubernetes control plane。  
- C. 部署使用 Amazon EC2 launch type 的 Amazon Elastic Container Service (Amazon ECS) service，並將 desired task number 設定為大於等於 2。  
- D. 部署使用 Fargate launch type 的 Amazon Elastic Container Service (Amazon ECS) service，並將 desired task number 設定為大於等於 2。  
- E. 在跨多個 Availability Zones 的 Amazon EC2 instances 上部署 Kubernetes worker nodes，並建立 deployment，為每個 microservice 指定 2 個以上 replicas。  

**答案**  
AD

---

## Question #264

**題目**  
某公司有一個 web application，託管在超過 10 台 Amazon EC2 instances 上，並由 Amazon Route 53 導流。公司偶爾在瀏覽該應用程式時遇到 timeout error。網路團隊發現，部分 DNS queries 會回傳不健康 instances 的 IP addresses，導致 timeout。  
solutions architect 應實作什麼來解決這些 timeout errors？

**選項**  
- A. 為每一台 EC2 instance 建立 Route 53 simple routing policy record，並為每個 record 關聯 health check。  
- B. 為每一台 EC2 instance 建立 Route 53 failover routing policy record，並為每個 record 關聯 health check。  
- C. 建立 Amazon CloudFront distribution，並以 EC2 instances 作為 origin。再將 health check 關聯到這些 EC2 instances。  
- D. 在這些 EC2 instances 前方建立一個 Application Load Balancer (ALB) 並設定 health check，再由 Route 53 導向 ALB。  

**答案**  
D

---

## Question #265

**題目**  
solutions architect 需要設計一個高可用應用程式，包含 web、application 與 database tiers。HTTPS 內容傳遞必須盡可能靠近 edge，以取得最短傳遞時間。  
哪個解決方案最符合需求且**最安全**？

**選項**  
- A. 設定 public Application Load Balancer (ALB)，搭配部署在 public subnets 中的多台備援 Amazon EC2 instances。設定 Amazon CloudFront，並以 public ALB 作為 origin 來傳遞 HTTPS 內容。  
- B. 設定 public Application Load Balancer，搭配部署在 private subnets 中的多台備援 Amazon EC2 instances。設定 Amazon CloudFront，並以 EC2 instances 作為 origin 來傳遞 HTTPS 內容。  
- C. 設定 public Application Load Balancer (ALB)，搭配部署在 private subnets 中的多台備援 Amazon EC2 instances。設定 Amazon CloudFront，並以 public ALB 作為 origin 來傳遞 HTTPS 內容。  
- D. 設定 public Application Load Balancer，搭配部署在 public subnets 中的多台備援 Amazon EC2 instances。設定 Amazon CloudFront，並以 EC2 instances 作為 origin 來傳遞 HTTPS 內容。  

**答案**  
C

---

## Question #266

**題目**  
某公司在 AWS 上執行一個熱門遊戲平台。此應用程式對延遲非常敏感，因為延遲會影響使用者體驗，甚至造成玩家之間不公平的優勢。應用程式已部署在每個 AWS Region，並執行在屬於 Auto Scaling groups 的 Amazon EC2 instances 上，且後方配置了 Application Load Balancers (ALBs)。  
solutions architect 需要實作一種機制，用來監控應用程式健康狀態，並將流量重新導向到健康的 endpoints。  
哪個解決方案能滿足需求？

**選項**  
- A. 在 AWS Global Accelerator 中設定 accelerator。新增應用程式監聽的 port 對應 listener，並在每個 Region 附加一個 Regional endpoint，再將 ALB 作為 endpoint。  
- B. 建立 Amazon CloudFront distribution，並指定 ALB 作為 origin server。設定 cache behavior 使用 origin cache headers，並使用 AWS Lambda functions 最佳化流量。  
- C. 建立 Amazon CloudFront distribution，並指定 Amazon S3 作為 origin server。設定 cache behavior 使用 origin cache headers，並使用 AWS Lambda functions 最佳化流量。  
- D. 設定 Amazon DynamoDB 作為應用程式資料存放區，再建立 DynamoDB Accelerator (DAX) cluster 作為記憶體快取。  

**答案**  
A

---

## Question #267

**題目**  
某公司有一百萬名使用者使用其 mobile app。公司必須近即時分析資料使用情況，也必須近即時加密資料，並以 Apache Parquet 格式將資料儲存在集中式位置，以供後續處理。  
哪個解決方案能以**最低營運負擔**滿足需求？

**選項**  
- A. 建立 Amazon Kinesis data stream 將資料儲存到 Amazon S3。建立 Amazon Kinesis Data Analytics application 分析資料。再觸發 AWS Lambda function，將資料送到 Kinesis Data Analytics application。  
- B. 建立 Amazon Kinesis data stream 將資料儲存到 Amazon S3。建立 Amazon EMR cluster 分析資料。再觸發 AWS Lambda function，將資料送到 EMR cluster。  
- C. 建立 Amazon Kinesis Data Firehose delivery stream 將資料儲存到 Amazon S3。建立 Amazon EMR cluster 分析資料。  
- D. 建立 Amazon Kinesis Data Firehose delivery stream 將資料儲存到 Amazon S3。建立 Amazon Kinesis Data Analytics application 分析資料。  

**答案**  
D

---

## Question #268

**題目**  
某遊戲公司有一個顯示分數的 web application。該應用程式執行在 Application Load Balancer 後方的 Amazon EC2 instances 上，並將資料儲存在 Amazon RDS for MySQL database。使用者開始遇到由資料庫讀取效能導致的長時間延遲與中斷。公司希望改善使用者體驗，同時將對應用程式架構的修改降到最低。  
solutions architect 應該怎麼做？

**選項**  
- A. 在資料庫前面使用 Amazon ElastiCache。  
- B. 在應用程式與資料庫之間使用 RDS Proxy。  
- C. 將應用程式從 EC2 instances 遷移到 AWS Lambda。  
- D. 將資料庫從 Amazon RDS for MySQL 遷移到 Amazon DynamoDB。  

**答案**  
A

---

## Question #269

**題目**  
某電商公司注意到其以 Amazon RDS 為基礎的 web application 出現效能下降。效能下降是因為 business analysts 觸發的唯讀 SQL queries 數量增加所造成。solutions architect 需要在**最少修改既有 web application** 的前提下解決此問題。  
應建議什麼做法？

**選項**  
- A. 將資料匯出到 Amazon DynamoDB，讓 business analysts 在那裡執行查詢。  
- B. 將資料載入 Amazon ElastiCache，讓 business analysts 在那裡執行查詢。  
- C. 為 primary database 建立 read replica，讓 business analysts 對 read replica 執行查詢。  
- D. 將資料複製到 Amazon Redshift cluster，讓 business analysts 在那裡執行查詢。  

**答案**  
C

---

## Question #270

**題目**  
某公司使用集中式 AWS account 將 log data 儲存在多個 Amazon S3 buckets 中。solutions architect 需要確保資料在上傳到 S3 buckets **之前** 就已在靜態狀態下加密，而且資料在傳輸過程中也必須加密。  
哪個解決方案符合需求？

**選項**  
- A. 使用 client-side encryption 對即將上傳到 S3 buckets 的資料進行加密。  
- B. 使用 server-side encryption 對即將上傳到 S3 buckets 的資料進行加密。  
- C. 建立 bucket policies，強制 S3 uploads 必須使用 server-side encryption with S3 managed encryption keys (SSE-S3)。  
- D. 啟用安全性設定，讓 S3 buckets 使用預設的 AWS Key Management Service (AWS KMS) key 進行加密。  

**答案**  
A

---

## Question #271

**題目**  
一位 solutions architect 觀察到，某個每晚執行的 batch processing job 會在 Amazon EC2 容量達到目標值前，先自動擴展 1 小時。每晚尖峰容量都相同，而且 batch jobs 總是在凌晨 1 點開始。solutions architect 需要找出一個具成本效益的解決方案，讓所需 EC2 容量能快速到位，並在 batch jobs 完成後讓 Auto Scaling group 縮減。  
應該怎麼做？

**選項**  
- A. 提高 Auto Scaling group 的 minimum capacity。  
- B. 提高 Auto Scaling group 的 maximum capacity。  
- C. 設定 scheduled scaling，在固定時間擴展到所需運算層級。  
- D. 修改 scaling policy，讓每次 scaling operation 增加更多 EC2 instances。  

**答案**  
C

---

## Question #272

**題目**  
某公司透過位於 Application Load Balancer (ALB) 後方的 Amazon EC2 instances 群組提供動態網站服務。網站需要支援多國語言，以服務全球客戶。網站目前的架構部署在 us-west-1 Region，對於位於世界其他地區的使用者來說，請求延遲很高。  
網站需要不論使用者位於何處，都能快速且有效率地提供請求。但公司不想在多個 Regions 重建既有架構。  
solutions architect 應該怎麼做？

**選項**  
- A. 以 Amazon S3 bucket 取代既有架構來提供網站。設定 Amazon CloudFront distribution，以 S3 bucket 作為 origin，並設定 cache behavior 依照 Accept-Language request header 進行快取。  
- B. 設定 Amazon CloudFront distribution，以 ALB 作為 origin。並設定 cache behavior 依照 Accept-Language request header 進行快取。  
- C. 建立一個整合 ALB 的 Amazon API Gateway API，使用 HTTP integration type。建立 API Gateway stage，並根據 Accept-Language request header 啟用 API cache。  
- D. 在每個額外的 Region 啟動一台 EC2 instance，並設定 NGINX 作為該 Region 的 cache server。再將所有 EC2 instances 與 ALB 放在 Amazon Route 53 geolocation routing policy 後方。  

**答案**  
B

---

## Question #273

**題目**  
某快速成長的電商公司目前所有工作負載都在單一 AWS Region 中運行。solutions architect 必須制定一個 disaster recovery (DR) 策略，並納入另一個 AWS Region。公司希望在 DR Region 中的資料庫能以**最低延遲**保持最新，而 DR Region 中其餘基礎設施則只需以較低容量運作，並在必要時可擴展。  
哪個解決方案能以**最低 recovery time objective (RTO)** 滿足需求？

**選項**  
- A. 使用 Amazon Aurora global database 搭配 pilot light 部署。  
- B. 使用 Amazon Aurora global database 搭配 warm standby 部署。  
- C. 使用 Amazon RDS Multi-AZ DB instance 搭配 pilot light 部署。  
- D. 使用 Amazon RDS Multi-AZ DB instance 搭配 warm standby 部署。  

**答案**  
B

---

## Question #274

**題目**  
某公司在 Amazon EC2 instances 上執行應用程式。公司需要為此應用程式實作 disaster recovery (DR) 解決方案。DR 解決方案的 recovery time objective (RTO) 必須小於 4 小時，並且在正常運作期間必須使用盡可能少的 AWS 資源。  
哪個解決方案能以**最具營運效率**的方式滿足需求？

**選項**  
- A. 建立 Amazon Machine Images (AMIs) 備份 EC2 instances，並將 AMIs 複製到第二個 AWS Region。使用 AWS Lambda 與自訂 scripts 自動化在第二個 Region 的基礎設施部署。  
- B. 建立 Amazon Machine Images (AMIs) 備份 EC2 instances，並將 AMIs 複製到第二個 AWS Region。使用 AWS CloudFormation 自動化在第二個 Region 的基礎設施部署。  
- C. 在第二個 AWS Region 啟動 EC2 instances，並讓這些 EC2 instances 持續保持啟用狀態。  
- D. 在第二個 Availability Zone 啟動 EC2 instances，並讓這些 EC2 instances 持續保持啟用狀態。  

**答案**  
D

---

## Question #275

**題目**  
某公司有一個內部 browser-based application。該應用程式執行在 Application Load Balancer 後方的 Amazon EC2 instances 上。這些 instances 執行在跨多個 Availability Zones 的 Amazon EC2 Auto Scaling group 中。Auto Scaling group 在上班時間會擴展到 20 台 instances，但夜間會縮減到 2 台 instances。員工抱怨每天一開始上班時系統非常慢，但到上午中段後就運作良好。  
應如何調整 scaling，才能解決員工抱怨並將成本維持在最低？

**選項**  
- A. 實作 scheduled action，在辦公室開門前不久，將 desired capacity 設為 20。  
- B. 實作由較低 CPU threshold 觸發的 step scaling action，並縮短 cooldown period。  
- C. 實作由較低 CPU threshold 觸發的 target tracking action，並縮短 cooldown period。  
- D. 實作 scheduled action，在辦公室開門前不久，將 minimum 與 maximum capacity 都設為 20。  

**答案**  
A
