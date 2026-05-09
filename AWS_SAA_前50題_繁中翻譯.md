# AWS SAA 題目整理（前 50 題繁體中文翻譯）

說明：
- 僅處理前 50 題。
- 保留原本題號、選項與答案。
- AWS 服務名稱盡量保留官方英文，避免誤譯。

## Question #1

**題目**
某公司在多個洲的城市據點蒐集溫度、濕度與大氣壓力資料。公司每天從每個站點蒐集的平均資料量為 500 GB。每個站點都有高速網際網路連線。公司希望能以最快速度，將所有全球站點的資料彙整到單一 Amazon S3 bucket 中，且解決方案必須將營運複雜度降到最低。哪一個解決方案符合這些需求？

**選項**
- A. 在目標 S3 bucket 啟用 S3 Transfer Acceleration，並使用 multipart upload，讓各站點直接將資料上傳到目標 S3 bucket。
- B. 先將各站點資料上傳到距離最近 Region 的 S3 bucket，再使用 S3 Cross-Region Replication 將物件複製到目標 bucket。
- C. 每天排程 AWS Snowball Edge Storage Optimized 裝置工作，將各站點資料傳到最近的 Region，再使用 S3 Cross-Region Replication。
- D. 先將各站點資料上傳到最近 Region 的 Amazon EC2 執行個體，並將資料存放在 Amazon Elastic Block Store (Amazon EBS) 磁碟區中。

**答案**
A

## Question #2

**題目**
某公司需要分析自家應用程式的日誌檔。這些日誌以 JSON 格式儲存在 Amazon S3 bucket 中。查詢會很簡單，且只會在需要時執行。Solutions Architect 需要在盡量不變更既有架構的前提下完成分析。為了以最低營運負擔滿足需求，應該怎麼做？

**選項**
- A. 使用 Amazon Redshift 將所有內容載入後，再視需要執行 SQL 查詢。
- B. 使用 Amazon CloudWatch Logs 儲存日誌，並從 Amazon CloudWatch 主控台執行 SQL 查詢。
- C. 直接使用 Amazon Athena 搭配 Amazon S3，按需執行查詢。
- D. 使用 AWS Glue 建立日誌目錄，並在 Amazon EMR 啟動暫時性的 Apache Spark 叢集來執行 SQL 查詢。

**答案**
C

## Question #3

**題目**
某公司使用 AWS Organizations 管理多個部門的 AWS 帳號。管理帳號中有一個 Amazon S3 bucket，內含專案報告。公司希望將此 S3 bucket 的存取限制為僅限 AWS Organizations 組織內帳號的使用者。哪個解決方案在營運負擔最低的情況下能滿足需求？

**選項**
- A. 在 S3 bucket policy 中加入 `aws:PrincipalOrgID` 全域條件金鑰，並指定組織 ID。
- B. 為每個部門建立一個 organizational unit (OU)，並在 S3 bucket policy 中加入 `aws:PrincipalOrgPaths` 全域條件金鑰。
- C. 使用 AWS CloudTrail 監控 CreateAccount、InviteAccountToOrganization、LeaveOrganization 等事件。
- D. 為所有需要存取 S3 bucket 的使用者加上標籤，並在 S3 bucket policy 中加入 `aws:PrincipalTag` 全域條件金鑰。

**答案**
A

## Question #4

**題目**
某應用程式執行在 VPC 中的一台 Amazon EC2 執行個體上。該應用程式會處理儲存在 Amazon S3 bucket 中的日誌。EC2 執行個體需要在不連上網際網路的情況下存取 S3 bucket。哪個解決方案可以為 Amazon S3 提供私有網路連線？

**選項**
- A. 為 S3 建立 gateway VPC endpoint。
- B. 將日誌串流到 Amazon CloudWatch Logs，再匯出到 S3 bucket。
- C. 在 Amazon EC2 建立 instance profile 以允許存取 S3。
- D. 建立 Amazon API Gateway API，並以 private link 存取 S3 endpoint。

**答案**
A

## Question #5

**題目**
某公司將 Web 應用程式部署在 AWS 上，原本使用單一 Amazon EC2 執行個體，並把使用者上傳的文件存放在 Amazon EBS volume 中。為了提升可擴展性與可用性，公司複製了整套架構，在另一個 Availability Zone 建立第二台 EC2 執行個體與 EBS volume，並將兩台都放在 Application Load Balancer 後面。完成後，使用者反映每次重新整理網站時，只會看到其中一部分文件，無法同時看到全部文件。Solutions Architect 應提出什麼做法，才能讓使用者一次看到所有文件？

**選項**
- A. 複製資料，讓兩個 EBS volume 都包含所有文件。
- B. 設定 Application Load Balancer，將使用者導向存有該文件的伺服器。
- C. 將兩個 EBS volume 的資料複製到 Amazon EFS，並修改應用程式使新文件儲存在 Amazon EFS。
- D. 設定 Application Load Balancer，將請求同時送到兩台伺服器，並由正確的伺服器回傳各文件。

**答案**
C

## Question #6

**題目**
某公司目前使用 NFS 將大型影音檔案儲存在地端的 NAS 中。每個影音檔大小介於 1 MB 到 500 GB，總儲存量為 70 TB，且資料量不再成長。公司決定將這些影音檔遷移到 Amazon S3。公司希望在使用最少網路頻寬的前提下，盡快完成遷移。哪個解決方案最符合需求？

**選項**
- A. 建立 S3 bucket，建立具有寫入權限的 IAM role，並使用 AWS CLI 從本地直接複製所有檔案到 S3。
- B. 建立 AWS Snowball Edge 工作，將裝置寄送到地端，並使用 Snowball Edge client 將資料傳到裝置後再匯入 AWS。
- C. 在地端部署 S3 File Gateway，建立 public service endpoint 連線至 S3 File Gateway，再建立 S3 bucket。
- D. 在地端網路與 AWS 之間建立 AWS Direct Connect，部署 S3 File Gateway，並建立相應設定。

**答案**
C

## Question #7

**題目**
某公司有一個應用程式會接收傳入訊息，之後有數十個其他應用程式與微服務會快速消費這些訊息。訊息量變化非常大，有時甚至會突然增加到每秒 100,000 筆。公司希望將系統解耦並提升可擴展性。哪個解決方案符合需求？

**選項**
- A. 將訊息持久化到 Amazon Kinesis Data Analytics，並設定消費端應用程式讀取與處理訊息。
- B. 將接收應用程式部署在 Amazon EC2 Auto Scaling group 中，依流量自動擴展 EC2 執行個體數量。
- C. 將訊息寫入只有單一 shard 的 Amazon Kinesis Data Streams，並使用 AWS Lambda 預先處理訊息。
- D. 將訊息發佈到一個 Amazon SNS topic，並搭配多個 Amazon SQS queue。

**答案**
A

## Question #8

**題目**
某公司正在將一套分散式應用程式遷移到 AWS。此應用程式需處理變動式工作負載。原本的舊平台由一台主要伺服器負責協調工作，並分派給多個運算節點。公司希望以最具韌性且可擴展的方式現代化這套應用程式。Solutions Architect 應如何設計架構以滿足這些需求？

**選項**
- A. 將工作送到 Amazon SQS queue，並以 AWS Lambda 實作運算節點。
- B. 將工作送到 Amazon SQS queue，並以容器服務實作運算節點。
- C. 將主要伺服器與運算節點都實作為由 Auto Scaling group 管理的 Amazon EC2 執行個體。
- D. 將主要伺服器與運算節點都實作為由另一種 Auto Scaling 組態管理的 Amazon EC2 執行個體。

**答案**
C

## Question #9

**題目**
某公司在資料中心內執行一台 SMB 檔案伺服器。此伺服器儲存大型檔案，而這些檔案在建立後的前幾天會被頻繁存取；7 天後則很少存取。總資料量持續成長，已接近公司儲存容量上限。Solutions Architect 必須在不失去對最近存取檔案的低延遲存取能力下，增加可用儲存空間，並提供檔案生命週期管理，以避免未來再次發生儲存不足。哪個解決方案可符合需求？

**選項**
- A. 使用 AWS DataSync，將超過 7 天的資料從 SMB 檔案伺服器複製到 AWS。
- B. 建立 Amazon S3 File Gateway 擴充公司的儲存空間，並建立 S3 Lifecycle policy 將資料轉移到較低成本儲存層。
- C. 建立 Amazon FSx for Windows File Server 來擴充公司的儲存空間。
- D. 在每位使用者電腦上安裝公用程式直接存取 Amazon S3，並建立 S3 Lifecycle policy 將資料轉移到 S3 Glacier Flexible Retrieval。

**答案**
D

## Question #10

**題目**
某公司正在 AWS 上建置電子商務 Web 應用程式。應用程式會將新訂單資訊送到 Amazon API Gateway REST API 進行處理。公司希望確保訂單是依照接收順序被處理。哪個解決方案能滿足需求？

**選項**
- A. 使用 API Gateway integration，在收到訂單時將訊息發佈到 Amazon SNS topic。
- B. 使用 API Gateway integration，將訊息送到 Amazon SQS FIFO queue。
- C. 使用 API Gateway authorizer，在處理訂單期間封鎖其他請求。
- D. 使用 API Gateway integration，將訊息送到 Amazon SQS standard queue。

**答案**
A

## Question #11

**題目**
某公司有一套應用程式執行在 Amazon EC2 執行個體上，並使用 Amazon Aurora 資料庫。EC2 執行個體透過儲存在本機檔案中的帳號與密碼來連線資料庫。公司希望盡量降低認證資料管理的營運負擔。Solutions Architect 應如何達成這個目標？

**選項**
- A. 使用 AWS Secrets Manager，並啟用自動輪替。
- B. 使用 AWS Systems Manager Parameter Store，並啟用自動輪替。
- C. 建立一個 Amazon S3 bucket，並將物件以 AWS KMS 金鑰加密後儲存。
- D. 為每台 EC2 執行個體建立一個加密的 Amazon EBS volume，並將其掛載上去。

**答案**
B

## Question #12

**題目**
某跨國公司將 Web 應用程式部署在 Application Load Balancer (ALB) 後方的 Amazon EC2 執行個體上。此 Web 應用程式同時包含靜態資料與動態資料。公司將靜態資料儲存在 Amazon S3 bucket 中，且使用註冊於 Amazon Route 53 的自有網域名稱。公司希望提升靜態與動態資料的效能並降低延遲。Solutions Architect 應如何滿足需求？

**選項**
- A. 建立一個 Amazon CloudFront distribution，並將 S3 bucket 與 ALB 都設定為 origin，再由 Route 53 將流量導向該 distribution。
- B. 建立一個以 ALB 為 origin 的 Amazon CloudFront distribution，再建立 AWS Global Accelerator standard accelerator。
- C. 建立一個以 S3 bucket 為 origin 的 Amazon CloudFront distribution，再建立 AWS Global Accelerator standard accelerator。
- D. 建立一個以 ALB 為 origin 的 Amazon CloudFront distribution，再建立另一種 Global Accelerator 設定。

**答案**
C

## Question #13

**題目**
某公司每月都會對 AWS 基礎架構進行維護。在維護期間，公司需要為分散在多個 AWS Region 的 Amazon RDS for MySQL 資料庫輪替認證資訊。哪個解決方案能以最低營運負擔滿足這些需求？

**選項**
- A. 將認證資訊以 secret 形式儲存在 AWS Secrets Manager 中，使用 multi-Region secret replication 複寫到所需 Region，並設定自動輪替。
- B. 將認證資訊以 secure string 參數形式儲存在 AWS Systems Manager 中，使用 multi-Region secret replication。
- C. 將認證資訊存到啟用 server-side encryption 的 Amazon S3 bucket 中，並使用 Amazon EventBridge 排程輪替。
- D. 使用 AWS KMS multi-Region customer managed key 將認證資訊加密後，以 secret 形式儲存。

**答案**
A

## Question #14

**題目**
某公司在 Application Load Balancer 後方，透過跨多個 Availability Zone 的 Amazon EC2 Auto Scaling group 執行電子商務應用程式。Auto Scaling group 依 CPU 使用率擴展。應用程式將交易資料儲存在一台大型 EC2 執行個體上的 MySQL 8.0 資料庫。隨著應用程式負載增加，資料庫效能快速下降。此應用程式的讀取請求多於寫入交易。公司希望資料庫能自動擴展，以因應不可預測的讀取工作負載，同時維持高可用性。哪個解決方案符合需求？

**選項**
- A. 使用單節點的 Amazon Redshift，同時負責 leader 與 compute 功能。
- B. 使用 Single-AZ 部署的 Amazon RDS，並在另一個 Availability Zone 增加 reader instance。
- C. 使用 Multi-AZ 部署的 Amazon Aurora，並搭配 Aurora Replicas 與 Aurora Auto Scaling。
- D. 使用 Amazon ElastiCache for Memcached 搭配 EC2 Spot Instances。

**答案**
C

## Question #15

**題目**
某公司最近將多種工作負載遷移到 AWS，並想保護進出 production VPC 的流量。公司原本在地端資料中心有一台檢測伺服器，可執行流量檢查與流量過濾。現在公司希望在 AWS Cloud 中提供相同功能。哪個解決方案可滿足需求？

**選項**
- A. 使用 Amazon GuardDuty 對 production VPC 做流量檢查與流量過濾。
- B. 使用 Traffic Mirroring 將 production VPC 的流量鏡像出來進行檢查與過濾。
- C. 使用 AWS Network Firewall 為 production VPC 建立所需規則，以執行流量檢查與流量過濾。
- D. 使用 AWS Firewall Manager 為 production VPC 建立所需規則，以執行流量檢查與流量過濾。

**答案**
C

## Question #16

**題目**
某公司在 AWS 上建置資料湖，資料來源包含 Amazon S3 與 Amazon RDS for PostgreSQL。公司需要一套能提供資料視覺化的報表解決方案，且必須納入資料湖中的所有資料來源。只有管理團隊可以完整存取所有視覺化內容，其餘員工只能有限度存取。哪個解決方案符合需求？

**選項**
- A. 在 Amazon QuickSight 中建立 analysis，連接所有資料來源並建立新資料集，再發佈 dashboards 提供視覺化。
- B. 在 Amazon QuickSight 中建立 analysis，連接所有資料來源並建立新資料集，再發佈 dashboards，並另外設定不同權限。
- C. 針對 Amazon S3 的資料建立 AWS Glue table 與 crawler，再以 AWS Glue ETL job 產出資料供視覺化使用。
- D. 針對 Amazon S3 的資料建立 AWS Glue table 與 crawler，並使用 Amazon Athena Federated Query 存取 Amazon RDS 內資料。

**答案**
D

## Question #17

**題目**
某公司正在導入新的商業應用程式。此應用程式執行在兩台 Amazon EC2 執行個體上，並使用一個 Amazon S3 bucket 儲存文件。Solutions Architect 需要確保 EC2 執行個體可以存取該 S3 bucket。應該怎麼做？

**選項**
- A. 建立一個可授予 S3 bucket 存取權限的 IAM role，並將此 role 附加到 EC2 執行個體。
- B. 建立一個可授予 S3 bucket 存取權限的 IAM policy，並將該 policy 附加到 EC2 執行個體。
- C. 建立一個可授予 S3 bucket 存取權限的 IAM group，並將該群組附加到 EC2 執行個體。
- D. 建立一個可授予 S3 bucket 存取權限的 IAM user，並將該使用者帳號附加到 EC2 執行個體。

**答案**
A

## Question #18

**題目**
某應用開發團隊正在設計一個微服務，會將大型圖片轉換成較小、經壓縮的圖片。當使用者透過 Web 介面上傳圖片時，微服務需要先將圖片存入一個 Amazon S3 bucket，再由 AWS Lambda 函數進行處理與壓縮，最後將壓縮後的圖片存入另一個 S3 bucket。Solutions Architect 需要設計一個使用耐久且無狀態元件、自動處理圖片的解決方案。哪一組動作能滿足這些需求？（選兩項）

**選項**
- A. 建立一個 Amazon SQS queue，並設定 S3 bucket 在有新物件上傳時，傳送通知到此 SQS queue。
- B. 將 Lambda function 設定為以 Amazon SQS queue 作為觸發來源，當 SQS queue 收到訊息時執行處理。
- C. 設定 Lambda function 監控 S3 bucket 的新上傳，偵測到圖片後將檔名寫入資料表。
- D. 啟動一台 Amazon EC2 執行個體來監控 Amazon SQS queue，當有訊息進來時進行處理。
- E. 設定 Amazon EventBridge 事件以監控 S3 bucket，當圖片上傳時再送出事件。

**答案**
AB

## Question #19

**題目**
某公司在 AWS 上部署了三層式 Web 應用程式。Web 伺服器位於 VPC 的 public subnet，中介層與資料庫伺服器位於同一個 VPC 的 private subnet。公司已在 inspection VPC 中，從 AWS Marketplace 部署了一台第三方虛擬防火牆 appliance，且該 appliance 已設定可接收 IP 封包的 IP 介面。Solutions Architect 需要將此 Web 應用與該 appliance 整合，讓所有流向應用程式的流量在到達 web server 前都先經過檢查。哪個解決方案能以最低營運負擔滿足需求？

**選項**
- A. 在應用程式 VPC 的 public subnet 建立一個 Network Load Balancer，將流量導向 appliance 做封包檢查。
- B. 在應用程式 VPC 的 public subnet 建立一個 Application Load Balancer，將流量導向 appliance 做封包檢查。
- C. 在 inspection VPC 部署 transit gateway，並設定 route table 讓封包流量經過 transit gateway。
- D. 在 inspection VPC 部署 Gateway Load Balancer，並建立 Gateway Load Balancer endpoint 接收進入封包。

**答案**
B

## Question #20

**題目**
某公司希望提升在同一個 AWS Region 內，將大量 production 資料複製到 test 環境的能力。資料儲存在 Amazon EC2 執行個體的 Amazon EBS volume 上。對複製資料所做的修改不得影響 production 環境，而且存取此資料的軟體需要穩定且高 I/O 效能。Solutions Architect 需要盡可能縮短將 production 資料複製到 test 環境所需的時間。哪個解決方案符合需求？

**選項**
- A. 對 production EBS volume 建立 EBS snapshots，然後還原到 test 環境中的 EC2 instance store volume。
- B. 將 production EBS volume 設為使用 EBS Multi-Attach，建立 snapshot 後直接同時掛載到 test 環境。
- C. 對 production EBS volume 建立 EBS snapshots，建立並初始化新的 EBS volume 後掛載到 test 環境 EC2。
- D. 對 production EBS volume 建立 EBS snapshots，啟用 EBS fast snapshot restore，再將 snapshot 還原到新的 EBS volume。

**答案**
D

## Question #21

**題目**
某電商公司想在 AWS 上推出「每日一檔特價」網站。每天只會有一項商品上架特價 24 小時。公司希望在尖峰時段可處理每小時數百萬次請求，且延遲需維持在毫秒等級，同時希望營運負擔最低。哪個解決方案符合需求？

**選項**
- A. 使用多個 Amazon S3 bucket 來託管整個網站，並加上 Amazon CloudFront distributions，以 S3 bucket 作為 origin。
- B. 將整個網站部署在跨多個 Availability Zone 的 Auto Scaling EC2 執行個體上，並使用 Application Load Balancer。
- C. 將整個應用改寫為容器，部署於 Amazon EKS。
- D. 使用 Amazon S3 bucket 託管網站的靜態內容，並部署 Amazon CloudFront distribution，以 S3 bucket 作為 origin。

**答案**
D

## Question #22

**題目**
Solutions Architect 正在為新的數位媒體應用程式設計以 Amazon S3 為基礎的儲存架構。媒體檔案必須能承受一個 Availability Zone 故障而不遺失。有些檔案經常被存取，有些則會以不可預測的模式偶爾被存取。Solutions Architect 必須將儲存與擷取成本降到最低。哪個儲存選項最符合需求？

**選項**
- A. S3 Standard
- B. S3 Intelligent-Tiering
- C. S3 Standard-Infrequent Access (S3 Standard-IA)
- D. S3 One Zone-Infrequent Access (S3 One Zone-IA)

**答案**
B

## Question #23

**題目**
某公司目前使用 Amazon S3 Standard 儲存備份檔案。這些檔案在前 1 個月會被頻繁存取，之後則不再被存取，但公司必須永久保留這些檔案。哪個儲存方案最具成本效益？

**選項**
- A. 設定 S3 Intelligent-Tiering，自動遷移物件。
- B. 建立 S3 Lifecycle 設定，於 1 個月後將物件從 S3 Standard 轉移到 S3 Glacier Deep Archive。
- C. 建立 S3 Lifecycle 設定，於 1 個月後將物件從 S3 Standard 轉移到 S3 Standard-IA。
- D. 建立 S3 Lifecycle 設定，於 1 個月後將物件從 S3 Standard 轉移到 S3 One Zone-IA。

**答案**
B

## Question #24

**題目**
某公司在最近一期帳單中發現 Amazon EC2 成本上升。計費團隊注意到，有幾台 EC2 執行個體發生了不必要的垂直擴展（instance type 升級）。Solutions Architect 需要建立一張比較最近 2 個月 EC2 成本的圖表，並進一步深入分析以找出造成垂直擴展的根本原因。應該怎麼做，才能以最低營運負擔取得這些資訊？

**選項**
- A. 使用 AWS Budgets 建立預算報表，依 instance type 比較 EC2 成本。
- B. 使用 Cost Explorer 的細部篩選功能，依 instance type 深入分析 EC2 成本。
- C. 使用 AWS Billing and Cost Management dashboard 的圖表，比較最近 2 個月依 instance type 區分的 EC2 成本。
- D. 使用 AWS Cost and Usage Reports 建立報表並送到 Amazon S3 bucket，再用 Amazon QuickSight 分析。

**答案**
C

## Question #25

**題目**
某公司正在設計一套應用程式，使用 AWS Lambda function 透過 Amazon API Gateway 接收資料，並將資料寫入 Amazon Aurora PostgreSQL 資料庫。在概念驗證階段，公司發現為了處理大量資料匯入資料庫，必須大幅提高 Lambda 配額。Solutions Architect 需要提出新的設計，以改善可擴展性並降低設定工作量。哪個解決方案最符合需求？

**選項**
- A. 將 Lambda function 程式重構成執行在 Amazon EC2 上的 Apache Tomcat 程式，並使用原生驅動連接資料庫。
- B. 將資料平台改成 Amazon DynamoDB，並佈署 DynamoDB Accelerator (DAX) 叢集。
- C. 建立兩個 Lambda function：一個接收資料，另一個直接將資料載入資料庫。
- D. 建立兩個 Lambda function：一個接收資料，另一個以較可擴展的方式將資料載入資料庫。

**答案**
D

## Question #26

**題目**
某公司需要檢查其 AWS Cloud 部署，以確保 Amazon S3 buckets 不會出現未經授權的設定變更。Solutions Architect 應如何達成此目標？

**選項**
- A. 啟用 AWS Config 並套用適當的規則。
- B. 啟用 AWS Trusted Advisor 並使用適當檢查項目。
- C. 啟用 Amazon Inspector 並設定適當的 assessment template。
- D. 啟用 Amazon S3 server access logging，並設定 Amazon EventBridge。

**答案**
A

## Question #27

**題目**
某公司即將推出新應用程式，並會在 Amazon CloudWatch dashboard 顯示應用程式指標。公司的產品經理需要定期查看這個 dashboard，但他沒有 AWS 帳號。Solutions Architect 必須在遵循最小權限原則下，提供產品經理存取權。哪個解決方案符合需求？

**選項**
- A. 直接從 CloudWatch console 分享 dashboard，輸入產品經理的電子郵件地址並完成分享流程。
- B. 專門為產品經理建立一個 IAM user，並附加 CloudWatchReadOnlyAccess 受管政策，再分享登入資訊。
- C. 為公司員工建立一個 IAM user，並附加 ViewOnlyAccess 受管政策，再分享該登入帳號。
- D. 在 public subnet 部署一台 bastion server；產品經理需要存取 dashboard 時，再啟動該伺服器並提供連線方式。

**答案**
B

## Question #28

**題目**
某公司正在將多個應用程式遷移到 AWS，且這些應用分散部署在不同 AWS 帳號中。公司使用 AWS Organizations 做集中管理。資安團隊需要一套能跨所有帳號單一登入（SSO）的解決方案，同時公司仍須繼續使用地端自管的 Microsoft Active Directory 來管理使用者與群組。哪個解決方案符合需求？

**選項**
- A. 從 AWS Single Sign-On (AWS SSO) 主控台啟用 AWS SSO，並建立 one-way forest trust 或 one-way domain trust 連接公司的自管 Microsoft Active Directory。
- B. 從 AWS SSO 主控台啟用 AWS SSO，並建立 two-way forest trust 連接公司的自管 Microsoft Active Directory。
- C. 使用 AWS Directory Service，並與公司的自管 Microsoft Active Directory 建立 two-way trust。
- D. 在地端部署 identity provider (IdP)，再從 AWS SSO 主控台啟用 AWS SSO。

**答案**
A

## Question #29

**題目**
某公司提供 Voice over Internet Protocol (VoIP) 服務，使用 UDP 連線。此服務由部署在 Auto Scaling group 中的 Amazon EC2 執行個體提供，且跨多個 AWS Region 部署。公司需要將使用者導向延遲最低的 Region，並在 Region 間提供自動容錯移轉。哪個解決方案符合需求？

**選項**
- A. 部署 Network Load Balancer (NLB) 與對應 target group，將 target group 關聯到 Auto Scaling group，再搭配相應路由服務。
- B. 部署 Application Load Balancer (ALB) 與對應 target group，將 target group 關聯到 Auto Scaling group。
- C. 部署 Network Load Balancer (NLB) 與對應 target group，將 target group 關聯到 Auto Scaling group，並建立可在多 Region 間導流的設定。
- D. 部署 Application Load Balancer (ALB) 與對應 target group，將 target group 關聯到 Auto Scaling group，並設定跨 Region 路由。

**答案**
C

## Question #30

**題目**
某開發團隊每月都會在其 general purpose 的 Amazon RDS for MySQL DB instance 上執行一次為期 48 小時、極度耗資源的測試，且已啟用 Performance Insights。該測試是整個月唯一會使用資料庫的工作。團隊希望在不降低 DB instance 運算與記憶體規格的前提下，降低執行測試的成本。哪個解決方案最具成本效益？

**選項**
- A. 測試完成後停止 DB instance，需要時再重新啟動。
- B. 對 DB instance 使用 Auto Scaling policy，在測試完成後自動縮減資源。
- C. 測試完成後建立 snapshot，終止 DB instance，需要時再由 snapshot 還原。
- D. 測試完成後把 DB instance 改成低規格，需要時再改回原規格。

**答案**
C

## Question #31

**題目**
某公司希望確保其 AWS 上所有 Amazon EC2 instances、Amazon RDS DB instances 與 Amazon Redshift clusters 都有正確標籤。公司想用最低設定與維運成本完成這項檢查。Solutions Architect 應如何做？

**選項**
- A. 使用 AWS Config 規則定義並偵測未正確加上標籤的資源。
- B. 使用 Cost Explorer 顯示未正確加上標籤的資源，再手動補上標籤。
- C. 撰寫 API 呼叫程式檢查所有資源的標籤，並定期在 EC2 執行個體上執行。
- D. 撰寫 API 呼叫程式檢查所有資源的標籤，並以 Amazon CloudWatch 排程 AWS Lambda function 執行。

**答案**
A

## Question #32

**題目**
某開發團隊需要託管一個供其他團隊存取的網站。網站內容包含 HTML、CSS、前端 JavaScript 與圖片。哪一種網站託管方式最具成本效益？

**選項**
- A. 將網站容器化並部署到 AWS Fargate。
- B. 建立 Amazon S3 bucket 並將網站託管於其中。
- C. 在 Amazon EC2 執行個體上部署 Web 伺服器來託管網站。
- D. 設定一個 Application Load Balancer，並將使用 Express.js 的 AWS Lambda 作為 target。

**答案**
B

## Question #33

**題目**
某公司在 AWS 上執行線上市場平台應用程式。此應用在尖峰時段服務數十萬使用者。公司需要一套可擴展、近即時的解決方案，將數百萬筆金融交易明細分享給多個內部應用程式。同時，交易資料在寫入文件型資料庫以供低延遲查詢前，還必須先移除敏感資料。Solutions Architect 應推薦什麼解決方案？

**選項**
- A. 將交易資料直接存入 Amazon DynamoDB，並設定規則在寫入時移除敏感資料。
- B. 將交易資料串流到 Amazon Kinesis Data Firehose，分別儲存到 Amazon DynamoDB 與 Amazon S3，並使用 AWS Lambda 移除敏感資料。
- C. 將交易資料串流到 Amazon Kinesis Data Streams，使用 AWS Lambda 整合，在每筆交易寫入文件型資料庫前移除敏感資料。
- D. 將批次交易資料存成檔案於 Amazon S3，再用 AWS Lambda 處理每個檔案並移除敏感資料。

**答案**
C

## Question #34

**題目**
某公司在 AWS 上託管多層式應用程式。基於法遵、治理、稽核與安全需求，公司必須追蹤 AWS 資源的設定變更，並記錄對這些資源所發出的 API 呼叫歷程。Solutions Architect 應如何滿足需求？

**選項**
- A. 使用 AWS CloudTrail 追蹤設定變更，並使用 AWS Config 記錄 API 呼叫。
- B. 使用 AWS Config 追蹤設定變更，並使用 AWS CloudTrail 記錄 API 呼叫。
- C. 使用 AWS Config 追蹤設定變更，並使用 Amazon CloudWatch 記錄 API 呼叫。
- D. 使用 AWS CloudTrail 追蹤設定變更，並使用 Amazon CloudWatch 記錄 API 呼叫。

**答案**
B

## Question #35

**題目**
某公司正準備在 AWS Cloud 推出一個對外公開的 Web 應用程式。架構由 VPC 中、位於 Elastic Load Balancer (ELB) 後方的 Amazon EC2 執行個體組成，DNS 則使用第三方服務。Solutions Architect 必須提出一個可偵測並防禦大規模 DDoS 攻擊的方案。哪個解決方案符合需求？

**選項**
- A. 在帳號中啟用 Amazon GuardDuty。
- B. 在 EC2 執行個體上啟用 Amazon Inspector。
- C. 啟用 AWS Shield，並將 Amazon Route 53 指派給它。
- D. 啟用 AWS Shield Advanced，並將 ELB 納入保護。

**答案**
D

## Question #36

**題目**
某公司正在 AWS Cloud 中建置應用程式，並將資料儲存在兩個 AWS Region 的 Amazon S3 buckets 中。公司要求所有儲存在 S3 bucket 的資料都必須使用 AWS KMS customer managed key 加密。兩個 S3 bucket 中的資料都必須能使用同一把 KMS key 進行加解密，且資料與金鑰都必須儲存在各自 Region。哪個解決方案能以最低營運負擔滿足需求？

**選項**
- A. 在每個 Region 建立一個 S3 bucket，並設定使用 Amazon S3 managed key (SSE-S3) 加密。
- B. 建立 customer managed multi-Region KMS key，在每個 Region 建立 S3 bucket，並設定 bucket 間 replication。
- C. 在每個 Region 各自建立 customer managed KMS key 與 S3 bucket，並設定 S3 bucket 使用 AWS KMS 加密。
- D. 在每個 Region 各自建立 customer managed KMS key 與 S3 bucket，並設定其他類型的 KMS 加密方式。

**答案**
C

## Question #37

**題目**
某公司最近在 AWS 帳號中啟用了多種新的 Amazon EC2 工作負載。公司需要制定一套可遠端且安全地存取與管理這些執行個體的策略，並希望建立一個可重複使用、採用原生 AWS 服務且符合 AWS Well-Architected Framework 的流程。哪個解決方案能以最低營運負擔滿足需求？

**選項**
- A. 使用 EC2 serial console，直接連線到每台執行個體的終端機進行管理。
- B. 為所有既有與新建立的執行個體附加適當的 IAM role，並使用 AWS Systems Manager Session Manager 建立管理連線。
- C. 建立一組管理用 SSH key pair，將公鑰放入每台 EC2，並在 public subnet 部署 bastion host 供管理人員連線。
- D. 建立 AWS Site-to-Site VPN，要求管理員從地端機器直接連線到各 EC2 執行個體。

**答案**
B

## Question #38

**題目**
某公司使用 Amazon S3 託管靜態網站，並使用 Amazon Route 53 做 DNS。近期網站全球流量增加，公司希望降低世界各地使用者的存取延遲，且方案要具成本效益。哪個解決方案最符合需求？

**選項**
- A. 將網站所在 S3 bucket 複寫到所有 AWS Region，並使用 Route 53 geolocation routing。
- B. 建立 AWS Global Accelerator 加速器，將提供的 IP 位址關聯至 S3 bucket，再更新 Route 53 紀錄。
- C. 在 S3 bucket 前方加上 Amazon CloudFront distribution，並更新 Route 53 紀錄指向 CloudFront。
- D. 在 bucket 上啟用 S3 Transfer Acceleration，並將 Route 53 紀錄指向新的 endpoint。

**答案**
C

## Question #39

**題目**
某公司在網站上維護一個可搜尋的項目資料庫。資料儲存在 Amazon RDS for MySQL 資料表中，超過 1,000 萬列，並使用 2 TB General Purpose SSD 儲存空間。每天透過網站會有數百萬次更新。公司注意到部分 insert 操作需花費 10 秒以上，並判斷問題出在資料庫儲存效能。哪個解決方案可以改善這個效能問題？

**選項**
- A. 將儲存類型改為 Provisioned IOPS SSD。
- B. 將 DB instance 改為 memory optimized instance class。
- C. 將 DB instance 改為 burstable performance instance class。
- D. 啟用 Multi-AZ RDS read replicas，並使用 MySQL 原生非同步複寫。

**答案**
B

## Question #40

**題目**
某公司有數千台邊緣裝置，每天總共產生 1 TB 的狀態警示資料。每筆警示約 2 KB。Solutions Architect 需要建置一套方案來接收並儲存這些警示，以供後續分析。公司希望方案具高可用性、成本低，且不想管理額外基礎設施。另外，公司希望最近 14 天資料可立即分析，超過 14 天的資料則封存。哪個解決方案在營運效率上最佳？

**選項**
- A. 建立 Amazon Kinesis Data Firehose delivery stream 接收警示，並將資料傳送至相應儲存體。
- B. 在兩個 Availability Zone 啟動 Amazon EC2 執行個體並放在 Elastic Load Balancer 後方，用來接收警示。
- C. 建立另一種設定的 Amazon Kinesis Data Firehose delivery stream 接收警示。
- D. 建立 Amazon SQS standard queue 接收警示，並將 message retention period 設為 14 天。

**答案**
A

## Question #41

**題目**
某公司的應用程式會整合多個 software-as-a-service (SaaS) 來源來蒐集資料。公司目前使用 Amazon EC2 執行個體接收資料、上傳到 Amazon S3 bucket 進行分析，並在上傳完成後由同一台 EC2 發送通知給使用者。公司發現應用程式效能變慢，希望盡可能改善效能，同時維持最低營運負擔。哪個解決方案符合需求？

**選項**
- A. 建立 Auto Scaling group 讓 EC2 可自動擴展，並設定 S3 event notification 將事件送往 Amazon SNS。
- B. 建立 Amazon AppFlow flow，將各 SaaS 來源資料直接傳到 S3 bucket，並設定 S3 event notification 進一步通知使用者。
- C. 為每個 SaaS 來源建立 Amazon EventBridge 規則傳送輸出資料，並將 S3 bucket 設定為目標。
- D. 將現有程式容器化，改部署在 Amazon ECS 上取代 EC2。

**答案**
B

## Question #42

**題目**
某公司在單一 VPC 中，以跨多個 Availability Zone 的多個 subnet 內 Amazon EC2 執行個體執行高可用的影像處理應用程式。這些 EC2 執行個體彼此不通信，但都透過單一 NAT gateway 從 Amazon S3 下載圖片並上傳處理後圖片。公司擔心資料傳輸費用。要避免 Regional data transfer charges，最具成本效益的做法是什麼？

**選項**
- A. 在每個 Availability Zone 各部署一個 NAT gateway。
- B. 以 NAT instance 取代 NAT gateway。
- C. 為 Amazon S3 部署 gateway VPC endpoint。
- D. 佈署一台 EC2 Dedicated Host 執行這些 EC2 執行個體。

**答案**
C

## Question #43

**題目**
某公司有一套地端應用程式，會產生大量且具時效性的資料，並備份到 Amazon S3。隨著應用成長，使用者開始抱怨網際網路頻寬受限。Solutions Architect 需要設計一個長期方案，讓資料能即時備份到 Amazon S3，同時盡量降低對內部使用者網路的影響。哪個解決方案符合需求？

**選項**
- A. 建立 AWS VPN 連線，並透過 VPC gateway endpoint 代理所有流量。
- B. 新增一條 AWS Direct Connect 連線，並將備份流量導向這條連線。
- C. 每天訂購 AWS Snowball 裝置，將資料寫入後寄回 AWS。
- D. 透過 AWS Management Console 提交支援工單，要求移除帳號的 S3 服務限制。

**答案**
B

## Question #44

**題目**
某公司有一個儲存關鍵資料的 Amazon S3 bucket。公司必須保護資料，避免誤刪除。Solutions Architect 應採取哪兩個步驟以滿足需求？（選兩項）

**選項**
- A. 在 S3 bucket 啟用 versioning。
- B. 在 S3 bucket 啟用 MFA Delete。
- C. 在 S3 bucket 建立 bucket policy。
- D. 在 S3 bucket 啟用預設加密。
- E. 為 S3 bucket 中的物件建立 lifecycle policy。

**答案**
BD

## Question #45

**題目**
某公司有一個資料接收工作流程，包含：
- 一個 Amazon SNS topic，用於接收新資料送達的通知
- 一個 AWS Lambda function，用於處理資料並記錄 metadata

公司觀察到該工作流程偶爾會因網路連線問題而失敗。一旦失敗，Lambda function 就不會處理對應資料，除非公司手動重新執行工作。Solutions Architect 應採取哪兩個動作，確保未來 Lambda function 能處理所有資料？（選兩項）

**選項**
- A. 將 Lambda function 部署在多個 Availability Zone。
- B. 建立一個 Amazon SQS queue，並將其訂閱到 SNS topic。
- C. 增加配置給 Lambda function 的 CPU 與記憶體。
- D. 提高 Lambda function 的 provisioned throughput。
- E. 修改 Lambda function，讓它從 Amazon SQS queue 讀取資料。

**答案**
BE

## Question #46

**題目**
某公司為各店家提供行銷服務，內容依據店家顧客的歷史購買資料產生。各店家透過 SFTP 上傳交易資料，公司再處理與分析這些資料，以產生新的行銷優惠。有些檔案大小會超過 200 GB。近期公司發現部分店家上傳的檔案中含有不應包含的個人可識別資訊（PII）。公司希望若未來再次出現 PII，系統能自動警示管理員，並能自動化處置。在哪個解決方案下，開發工作量最少？

**選項**
- A. 使用 Amazon S3 bucket 作為安全傳輸點，使用 Amazon Inspector 掃描 bucket 中物件；若含有 PII，再執行相應處置。
- B. 使用 Amazon S3 bucket 作為安全傳輸點，使用 Amazon Macie 掃描 bucket 中物件；若含有 PII，再透過事件驅動進行自動處置。
- C. 在 AWS Lambda function 中自行實作掃描演算法，當物件進入 bucket 時觸發掃描；若發現 PII，再執行處置。
- D. 同樣在 AWS Lambda 中實作自訂掃描邏輯並在物件上傳時觸發。

**答案**
B

## Question #47

**題目**
某公司需要在特定 AWS Region 的三個指定 Availability Zone 中，保證即將到來、為期 1 週活動所需的 Amazon EC2 容量。公司應該怎麼做，才能保證這些 EC2 容量？

**選項**
- A. 購買指定所需 Region 的 Reserved Instances。
- B. 建立指定所需 Region 的 On-Demand Capacity Reservation。
- C. 購買同時指定 Region 與三個 Availability Zone 的 Reserved Instances。
- D. 建立同時指定 Region 與三個 Availability Zone 的 On-Demand Capacity Reservation。

**答案**
D

## Question #48

**題目**
某公司的網站將商品目錄存放在 Amazon EC2 instance store 中。公司希望確保商品目錄具高可用性，且儲存在耐久的位置。Solutions Architect 應如何滿足需求？

**選項**
- A. 將商品目錄移到 Amazon ElastiCache for Redis。
- B. 部署更大的 EC2 執行個體，並使用更大的 instance store。
- C. 將商品目錄從 instance store 移到 Amazon S3 Glacier Deep Archive。
- D. 將商品目錄移到 Amazon Elastic File System (Amazon EFS) file system。

**答案**
A

## Question #49

**題目**
某公司每月儲存通話逐字稿檔案。使用者在通話後 1 年內會隨機存取這些檔案，但 1 年後的存取頻率很低。公司希望優化方案，讓使用者可以盡快查詢並擷取 1 年內的檔案；至於較舊檔案，延遲取回是可接受的。哪個解決方案最具成本效益？

**選項**
- A. 以標籤方式將個別檔案存入 Amazon S3 Glacier Instant Retrieval，並透過查詢標籤來取回檔案。
- B. 將個別檔案存入 Amazon S3 Intelligent-Tiering，並使用 S3 Lifecycle policy 在 1 年後移到 S3 Glacier Flexible Retrieval。
- C. 將個別檔案存入 Amazon S3 Standard，並將每份封存檔案的搜尋 metadata 也儲存在 Amazon S3 Standard。
- D. 將個別檔案存入 Amazon S3 Standard，並使用 S3 Lifecycle policy 在 1 年後移到 S3 Glacier Deep Archive。

**答案**
C

## Question #50

**題目**
某公司有一個 production 工作負載，執行在 1,000 台 Amazon EC2 Linux 執行個體上。此工作負載仰賴第三方軟體。公司現在需要盡快為所有 EC2 執行個體上的第三方軟體套用修補程式，以修復一個重大安全漏洞。Solutions Architect 應如何滿足需求？

**選項**
- A. 建立 AWS Lambda function，對所有 EC2 執行個體套用修補程式。
- B. 設定 AWS Systems Manager Patch Manager，將修補程式套用到所有 EC2 執行個體。
- C. 排程 AWS Systems Manager maintenance window，於指定時間套用修補程式。
- D. 使用 AWS Systems Manager Run Command 執行自訂命令，將修補程式套用到所有 EC2 執行個體。

**答案**
D
