## Question #1

**題目**
一家公司收集多大洲城市的溫度、溼度和大氣壓力資料。 公司每天從每個網站收集的平均資料量為500GB. 每個網站都有高速網際網路連線. 公司希望儘快將所有這些全球網站的資料彙總到一個Amazon S3桶中. 解決辦法必須儘量減少營運複雜性(operational complexity)。 哪種解決辦法符合這些要求?

**選項**
- A. 開啟目的地S3 儲存桶(S3 bucket)的S3 Transfer Acceleration 使用多段上傳,將網站資料直接上傳到目的地S3 儲存桶(S3 bucket).
- B. 在最接近的區域(Region)中將每個站點的資料上傳到一個S3 儲存桶(S3 bucket). 使用 S3 Cross-Region Replication 複製物件到目的地 S3 儲存桶(S3 bucket). 然後從來源S3 儲存桶(S3 bucket)中移除資料.
- C. 每天計劃AWS Snowball Edge Storage Optimized裝置任務,將資料從每個站點傳輸到最近的區域(Region). 使用S3 Cross-區域(Region) 複寫(Replication)複製物件到目的地S3 儲存桶(S3 bucket).
- D. 在最接近的區域(Region)中將每個站點的資料上傳到Amazon EC2例項. 將資料儲存在亞馬遜彈性塊儲存器(Amazon EBS)的體積中. 每隔一段時間,取一架EBS 快照(snapshot),複製到包含目的地S3 儲存桶(S3 bucket)的區域(Region). 在區域(Region)中恢復EBS體積.

**答案**
A


**詳解**
正確答案是 **A**。
- A：開啟目的地S3 儲存桶(S3 bucket)的S3 Transfer Acceleration 使用多段上傳,將網站資料直接上傳到目的地S3 儲存桶(S3 bucket)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在最接近的區域(Region)中將每個站點的資料上傳到一個S3 儲存桶(S3 bucket). 使用 S3 Cross-Region Replication 複製物件到目的地 S3 儲存桶(S3 bucket). 然後從來源S3 儲存桶(S3 bucket)中移除資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：每天計劃AWS Snowball Edge Storage Optimized裝置任務,將資料從每個站點傳輸到最近的區域(Region). 使用S3 Cross-區域(Region) 複寫(Replication)複製物件到目的地S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在最接近的區域(Region)中將每個站點的資料上傳到Amazon EC2例項. 將資料儲存在亞馬遜彈性塊儲存器(Amazon EBS)的體積中. 每隔一段時間,取一架EBS 快照(snapshot),複製到包含目的地S3 儲存桶(S3 bucket)的區域(Region). 在區域(Region)中恢復EBS體積。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #2

**題目**
公司需要有能力分析其專有應用程式的日誌檔案. 日誌以JSON格式儲存在Amazon S3桶中. 查詢會簡單且按需執行. 解決方案架構設計師需要在對現有架構進行最小變化的情況下進行分析. 解決方案設計師應做什麼才能滿足這些要求?

**選項**
- A. 使用 Amazon Redshift 將所有內容載入到一個地方,並根據需要執行 SQL 查詢.
- B. 使用Amazon CloudWatch Logs儲存日誌. 根據需要從 Amazon CloudWatch 控制檯執行 SQL 查詢。
- C. 使用Amazon Athena直接與Amazon S3一起執行所需的查詢.
- D. 使用AWS Glue對日誌進行編目. 在 Amazon EMR 上使用一個瞬態的 Apache Spark 叢集來根據需要執行 SQL 查詢.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用Amazon Athena直接與Amazon S3一起執行所需的查詢。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon Redshift 將所有內容載入到一個地方,並根據需要執行 SQL 查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon CloudWatch Logs儲存日誌. 根據需要從 Amazon CloudWatch 控制檯執行 SQL 查詢 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Glue對日誌進行編目. 在 Amazon EMR 上使用一個瞬態的 Apache Spark 叢集來根據需要執行 SQL 查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #3

**題目**
一家公司使用AWS Organizations管理不同部門的多個AWS帳戶. 管理帳戶有一個Amazon S3桶,內有專案報告. 公司希望將這個S3 儲存桶(S3 bucket)的接入限制在AWS Organizations中只允許組織內部的帳戶使用者使用. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 新增 aws:PrincipalOrgID 全域性條件金鑰,並參考組織ID到S3 儲存桶政策(bucket policy).
- B. 為每個部門設立一個組織單位。 新增 aws: PrincipalOrgPaths 全域性條件金鑰到 S3 儲存桶政策(bucket policy).
- C. 使用 AWS CloudTrail 來監視建立帳戶、邀請帳戶組織、離開組織和從組織活動中刪除帳戶。 相應更新S3 儲存桶政策(bucket policy).
- D. 標記每個需要存取S3 儲存桶(S3 bucket)的使用者. 新增 aws: S3 儲存桶政策(bucket policy) 的主 Tag 全球條件金鑰。

**答案**
A


**詳解**
正確答案是 **A**。
- A：新增 aws:PrincipalOrgID 全域性條件金鑰,並參考組織ID到S3 儲存桶政策(bucket policy)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為每個部門設立一個組織單位。 新增 aws: PrincipalOrgPaths 全域性條件金鑰到 S3 儲存桶政策(bucket policy)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS CloudTrail 來監視建立帳戶、邀請帳戶組織、離開組織和從組織活動中刪除帳戶。 相應更新S3 儲存桶政策(bucket policy)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：標記每個需要存取S3 儲存桶(S3 bucket)的使用者. 新增 aws: S3 儲存桶政策(bucket policy) 的主 Tag 全球條件金鑰 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #4

**題目**
一項申請是在VPC的Amazon EC2 執行個體中進行的。 應用程式處理儲存在Amazon S3桶中的日誌。 EC2例項需要存取S3 儲存桶(S3 bucket)而不連線網際網路。 哪個解決方案將為Amazon S3提供私人網路連線?

**選項**
- A. 建立一個VPC 端點(VPC endpoint)到S3 儲存桶(S3 bucket)的閘道器.
- B. 將日誌流到Amazon CloudWatch Logs。 將日誌匯出至 S3 儲存桶(S3 bucket)。
- C. 在Amazon EC2上建立執行個體設定檔(instance profile),允許S3存取.
- D. 建立一個帶有私人連結的Amazon API Gateway API來存取S3端點.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個VPC 端點(VPC endpoint)到S3 儲存桶(S3 bucket)的閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將日誌流到Amazon CloudWatch Logs。 將日誌匯出至 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon EC2上建立執行個體設定檔(instance profile),允許S3存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個帶有私人連結的Amazon API Gateway API來存取S3端點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #5

**題目**
一家公司正在AWS上託管一個網路應用程式,使用一個單一的Amazon EC2例項,將使用者載入的檔案儲存在Amazon EBS 磁碟區中. 為了更好的可擴展性(scalability)和可用性,該公司複製了架構,並在另一套可用區(Availability Zone)中建立了第二套EC2例項和EBS 磁碟區,兩者都放在應用程式負載平衡器(Application Load Balancer)後面. 完成這一修改後,使用者報告說,每次重新整理網站時,他們都能看到自己的檔案的一個子集或另一個,但從未同時看到所有的檔案. 一個解決方案設計師應該建議什麼來確保使用者同時看到他們的所有檔案?

**選項**
- A. 複製資料,這樣兩個EBS 磁碟區都包含所有檔案
- B. 配置 應用程式負載平衡器(Application Load Balancer) , 用文件引導使用者到伺服器
- C. 將兩個EBS 磁碟區的資料複製到Amazon EFS. 修改應用程式以將新文件儲存到 Amazon EFS
- D. 配置應用程式負載平衡器(Application Load Balancer)將請求傳送到兩個伺服器. 從正確的伺服器返回每個文件

**答案**
C


**詳解**
正確答案是 **C**。
- C：將兩個EBS 磁碟區的資料複製到Amazon EFS. 修改應用程式以將新文件儲存到 Amazon EFS。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：複製資料,這樣兩個EBS 磁碟區都包含所有檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 應用程式負載平衡器(Application Load Balancer) , 用文件引導使用者到伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置應用程式負載平衡器(Application Load Balancer)將請求傳送到兩個伺服器. 從正確的伺服器返回每個文件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #6

**題目**
一家公司使用NFS將大型影片檔案儲存在附著的 on-premises 網路儲存中. 每個影片檔案的大小從1MB到500GB不等. 總儲存量為70TB,不再增長. 公司決定將影片檔案遷移到Amazon S3. 公司必須儘快遷移影片檔案,同時使用儘可能少的網路頻寬. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 S3 儲存桶(S3 bucket). 建立一個 IAM 角色,該角色擁有寫入 S3 儲存桶(S3 bucket) 的許可權。 使用 AWS CLI 在本地複製所有檔案到 S3 儲存桶(S3 bucket).
- B. 建立 AWS Snowball Edge 任務。 在本地接收Snowball Edge 裝置。 使用Snowball Edge 用戶端向裝置傳輸資料. 返回裝置,使AWS可以將資料匯入Amazon S3.
- C. 在本地端部署一個S3檔案閘道器。 建立公共服務端點連線到 S3 檔案閘道器。 建立 S3 儲存桶(S3 bucket). 在 S3 檔案閘道器上建立一個新的 NFS 檔案共享。 將新檔案共享指向S3 儲存桶(S3 bucket). 將資料從現有的NFS檔案共享轉移到S3檔案閘道器.
- D. 在AWS Direct Connect網路和AWS之間建立連線. 在本地端部署一個S3檔案閘道器。 建立公共虛擬介面(VIF),連線到S3檔案閘道器. 建立 S3 儲存桶(S3 bucket). 在 S3 檔案閘道器上建立一個新的 NFS 檔案共享。 將新檔案共享指向S3 儲存桶(S3 bucket). 將資料從現有的NFS檔案共享轉移到S3檔案閘道器.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立 AWS Snowball Edge 任務。 在本地接收Snowball Edge 裝置。 使用Snowball Edge 用戶端向裝置傳輸資料. 返回裝置,使AWS可以將資料匯入Amazon S3。**AWS Snowball Edge 是離線資料傳輸服務，資料透過實體裝置運送，完全不消耗網路頻寬。** 題目明確要求「儘快遷移且使用盡可能少的網路頻寬」，70 TB 資料透過實體裝置傳輸是最佳選擇。
- 其餘選項比較：
- A：建立 S3 儲存桶(S3 bucket). 建立一個 IAM 角色,該角色擁有寫入 S3 儲存桶(S3 bucket) 的許可權。 使用 AWS CLI 在本地複製所有檔案到 S3 儲存桶(S3 bucket)。直接透過 AWS CLI 上傳 70 TB 資料需要大量網路頻寬，且速度受限於網際網路連線，不符合最小化頻寬使用的要求。
- C：在本地端部署一個S3檔案閘道器。 建立公共服務端點連線到 S3 檔案閘道器。 建立 S3 儲存桶(S3 bucket). 在 S3 檔案閘道器上建立一個新的 NFS 檔案共享。 將新檔案共享指向S3 儲存桶(S3 bucket). 將資料從現有的NFS檔案共享轉移到S3檔案閘道器。S3 File Gateway 是透過網際網路將資料傳輸到 S3，仍然會消耗大量網路頻寬傳送 70 TB 資料，不符合最小化頻寬的要求。
- D：在AWS Direct Connect網路和AWS之間建立連線. 在本地端部署一個S3檔案閘道器。 建立公共虛擬介面(VIF),連線到S3檔案閘道器. 建立 S3 儲存桶(S3 bucket). 在 S3 檔案閘道器上建立一個新的 NFS 檔案共享。 將新檔案共享指向S3 儲存桶(S3 bucket). 將資料從現有的NFS檔案共享轉移到S3檔案閘道器。建立 Direct Connect 需要時間，且仍需透過網路傳輸資料，增加了建置複雜度，不符合題目要求。

## Question #7

**題目**
一家公司有一個負責接收訊息的應用程式。 數十種其他應用程式和微服務隨後迅速消耗這些訊息. 資訊數量差異很大,有時會突然增加到每秒10萬。 公司希望解耦架構並提升可擴展性(scalability). 哪種解決辦法符合這些要求?

**選項**
- A. 將訊息儲存到 Amazon Kinesis Data Analytics。 配置消費者應用程式來讀取和處理訊息。
- B. 在Auto Scaling 群組(Auto Scaling group)中應用對 Amazon EC2 例項的攝入應用,以基於CPU 度量衡的EC2例項數量為尺度.
- C. 將訊息寫入 Amazon Kinesis Data Streams , 並使用單個分片。 使用 AWS Lambda 函式來預處理訊息,並將其儲存在 Amazon DynamoDB 中. 配置消費者應用程式從DynamoDB讀取處理訊息.
- D. 將訊息釋出到一個亞馬遜簡易通知服務(Amazon SNS)主題上,並有多個亞馬遜簡易佇列服務(Amazon SQS)訂閱. 配置消費者應用程式處理佇列中的資訊。

**答案**
D


**詳解**
正確答案是 **D**。
- D：將訊息釋出到一個亞馬遜簡易通知服務(Amazon SNS)主題上,並有多個亞馬遜簡易佇列服務(Amazon SQS)訂閱. 配置消費者應用程式處理佇列中的資訊。**SNS + SQS Fan-out 模式** 是解耦多個消費者的標準 AWS 架構。SNS 主題將訊息廣播給所有訂閱的 SQS 佇列，各消費應用程式獨立地從自己的佇列讀取訊息，實現解耦並可分別擴展。SQS 佇列提供緩衝，處理每秒 10 萬訊息的突發流量。
- 其餘選項比較：
- A：將訊息儲存到 Amazon Kinesis Data Analytics。 配置消費者應用程式來讀取和處理訊息。Kinesis Data Analytics 是用於對串流資料執行 SQL 分析的服務，並非用於訊息解耦與分發給多個消費者，不適合此架構需求。
- B：在Auto Scaling 群組(Auto Scaling group)中應用對 Amazon EC2 例項的攝入應用,以基於CPU 度量衡的EC2例項數量為尺度。使用 CPU 指標縮放不能解決解耦的問題，且不能有效處理突發的高峰訊息量，維運複雜度也較高。
- C：將訊息寫入 Amazon Kinesis Data Streams , 並使用單個分片。 使用 AWS Lambda 函式來預處理訊息,並將其儲存在 Amazon DynamoDB 中. 配置消費者應用程式從DynamoDB讀取處理訊息。Kinesis Data Streams 適合有序串流資料，但此方案將訊息存入 DynamoDB 後由消費者輪詢，增加了不必要的複雜度，且 DynamoDB 並非訊息佇列。

## Question #8

**題目**
一家公司正在將一個分散式應用程式遷移到AWS. 應用程式服務的工作量不定。 遺留平臺包括一個主伺服器,它協調跨越多個計算節點的工作. 公司希望應用現代化,解決方案能最大限度地提升韌性和可擴展性(scalability). 解決方案架構師應如何設計架構以滿足這些要求?

**選項**
- A. 配置 Amazon 簡單佇列服務( Amazon SQS) 佇列作為任務的目標。 用在Auto Scaling 群組(Auto Scaling group)中管理的 Amazon EC2 例項執行計算節點。 配置 EC2 自動縮放以使用預定縮放。
- B. 配置 Amazon 簡單佇列服務( Amazon SQS) 佇列作為任務的目標。 用在Auto Scaling 群組(Auto Scaling group)中管理的 Amazon EC2 例項執行計算節點。 根據佇列大小配置 EC2 自動縮放。
- C. 用在Auto Scaling 群組(Auto Scaling group)中管理的 Amazon EC2 例項執行主伺服器和計算節點. 配置 AWS CloudTrail 作為工作的目的地。 根據主伺服器的負載配置 EC2 自動縮放。
- D. 用在Auto Scaling 群組(Auto Scaling group)中管理的 Amazon EC2 例項執行主伺服器和計算節點. 配置 Amazon EventBridge(Amazon CloudWatch Events) 作為工作的目的地. 根據計算節點上的負載配置 EC2 自動縮放。

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置 Amazon 簡單佇列服務( Amazon SQS) 佇列作為任務的目標。 用在Auto Scaling 群組(Auto Scaling group)中管理的 Amazon EC2 例項執行計算節點。 根據佇列大小配置 EC2 自動縮放。**SQS 佇列取代了傳統主伺服器的角色**，工作任務放入佇列中，計算節點從佇列消費任務，實現了去中心化架構。根據 SQS 佇列深度（訊息數量）進行 Auto Scaling，能精確反映實際工作量，確保在流量不可預測的情況下自動擴展，最大化耐久性與可擴展性。
- 其餘選項比較：
- A：配置 Amazon 簡單佇列服務( Amazon SQS) 佇列作為任務的目標。 用在Auto Scaling 群組(Auto Scaling group)中管理的 Amazon EC2 例項執行計算節點。 配置 EC2 自動縮放以使用預定縮放 。使用預定縮放（Scheduled Scaling）無法應對不可預測的工作負載，只適合有規律的流量模式，不符合題目要求。
- C：用在Auto Scaling 群組(Auto Scaling group)中管理的 Amazon EC2 例項執行主伺服器和計算節點. 配置 AWS CloudTrail 作為工作的目的地。 根據主伺服器的負載配置 EC2 自動縮放。**AWS CloudTrail 是稽核日誌服務，完全不能作為工作任務的目的地**，此選項在技術上完全不可行。
- D：用在Auto Scaling 群組(Auto Scaling group)中管理的 Amazon EC2 例項執行主伺服器和計算節點. 配置 Amazon EventBridge(Amazon CloudWatch Events) 作為工作的目的地. 根據計算節點上的負載配置 EC2 自動縮放 。EventBridge 是事件路由服務，不適合作為任務工作佇列。保留主伺服器節點也代表仍有單點故障風險，不符合高耐久性設計。

## Question #9

**題目**
一家公司正在其資料中心執行一個SMB檔案伺服器. 檔案伺服器儲存在檔案建立後的最初幾天經常存取的大檔案. 7天后,檔案很少被存取。 資料總容量不斷增大,接近公司總儲存容量. 解決方案架構師必須增加公司現有的儲存空間,同時不失去低延遲(latency)存取最近存取的檔案的機會. 解決方案架構師還必須提供檔案生命週期管理,以避免未來的儲存問題. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用AWS DataSync複製從SMB檔案伺服器到AWS超過7天的資料.
- B. 建立一個Amazon S3檔案閘道器,以擴充套件公司的儲存空間. 建立一個S3 生命週期政策(Lifecycle policy),在7天后將資料轉換為S3 Glacier Deep Archive.
- C. 為Windows檔案伺服器檔案系統建立Amazon FSx,以擴充套件公司的儲存空間.
- D. 在每個使用者的計算機上安裝一個工具以存取Amazon S3. 建立一個S3 生命週期政策(Lifecycle policy),在7天后將資料轉換為S3 Glacier Flexible Retrieval.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個Amazon S3檔案閘道器,以擴充套件公司的儲存空間. 建立一個S3 生命週期政策(Lifecycle policy),在7天后將資料轉換為S3 Glacier Deep Archive。**S3 File Gateway 在本地提供 NFS/SMB 介面**，並在本地端快取最近存取的檔案（低延遲存取），舊檔案透過 S3 生命週期政策自動轉移至 Glacier Deep Archive（最低成本長期儲存），完整滿足低延遲存取最新檔案、自動生命週期管理、擴充儲存空間三項需求。
- 其餘選項比較：
- A：使用AWS DataSync複製從SMB檔案伺服器到AWS超過7天的資料。DataSync 是單向資料遷移工具，不提供本地端快取也無法讓使用者繼續以 SMB 存取檔案，不符合低延遲存取需求。
- C：為Windows檔案伺服器檔案系統建立Amazon FSx,以擴充套件公司的儲存空間。FSx for Windows 是完整的 Windows 檔案系統，資料全部在 AWS 端，本地存取仍需透過網路，且沒有自動的生命週期管理功能將舊資料歸檔。
- D：在每個使用者的計算機上安裝一個工具以存取Amazon S3. 建立一個S3 生命週期政策(Lifecycle policy),在7天后將資料轉換為S3 Glacier Flexible Retrieval。在每台電腦安裝工具的維運開銷極高，S3 並非標準檔案系統結構，且 Glacier Flexible Retrieval 的取回時間較長，不符合快速存取需求。

## Question #10

**題目**
一家公司正在AWS上建立一個電子商務網路應用程式。 應用程式向Amazon API Gateway REST API傳送有關新訂單的資訊進行處理. 公司希望確保訂單按收到順序處理. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用API閘道器整合,在應用程式收到訂單時向一個亞馬遜簡易通知服務(Amazon SNS)主題釋出訊息. 將 AWS Lambda 功能訂閱給主題進行處理.
- B. 使用API Gateway整合,在應用程式收到訂單時向一個亞馬遜簡易佇列服務(Amazon SQS)FIFO佇列傳送訊息. 配置 SQS FIFO 佇列以觸發 AWS Lambda 函式進行處理.
- C. 使用 API 閘道器授權器在應用程式處理訂單時遮蔽任何請求。
- D. 使用 API Gateway 整合，在應用程式收到訂單時向 Amazon 簡單佇列服務(Amazon SQS) 標準佇列傳送訊息. 配置 SQS 標準佇列以觸發 AWS Lambda 函式進行處理.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用API Gateway整合,在應用程式收到訂單時向一個亞馬遜簡易佇列服務(Amazon SQS)FIFO佇列傳送訊息. 配置 SQS FIFO 佇列以觸發 AWS Lambda 函式進行處理。**SQS FIFO（First-In-First-Out）佇列保證訊息嚴格按照傳送順序被處理**，完全滿足「按收到順序處理訂單」的需求。FIFO 佇列也提供「恰好一次」（Exactly-Once）的訊息投遞，防止重複處理。
- 其餘選項比較：
- A：使用API閘道器整合,在應用程式收到訂單時向一個亞馬遜簡易通知服務(Amazon SNS)主題釋出訊息. 將 AWS Lambda 功能訂閱給主題進行處理。**SNS 不保證訊息順序**，訂閱 SNS 的多個 Lambda 函式可能以任意順序收到並處理訊息，無法滿足按序處理訂單的需求。
- C：使用 API 閘道器授權器在應用程式處理訂單時遮蔽任何請求 。API Gateway 授權器是用於驗證請求身份的，不能控制訊息處理順序，此選項完全不相關。
- D：使用 API Gateway 整合，在應用程式收到訂單時向 Amazon 簡單佇列服務(Amazon SQS) 標準佇列傳送訊息. 配置 SQS 標準佇列以觸發 AWS Lambda 函式進行處理。**SQS Standard 標準佇列僅提供「盡力而為」的順序**，不保證嚴格的 FIFO 順序，無法確保訂單按收到順序處理。

## Question #11

**題目**
一家公司有一個在Amazon EC2 執行個體上執行的應用程式,並使用Amazon Aurora 資料庫(database). EC2例項透過使用本地儲存在一個檔案中的使用者名稱和密碼連線到資料庫(database). 公司希望儘量減少營運開銷(operational overhead)的憑證管理. 解決方案設計師應如何實現這一目標?

**選項**
- A. 使用AWS Secrets Manager. 開啟自動輪換。
- B. 使用 AWS Systems Manager 引數儲存器. 開啟自動輪換。
- C. 建立 Amazon S3 桶以儲存用 AWS Key Management Service(AWS KMS) 加密(encryption) 鍵加密的物件. 將憑證檔案移到 S3 儲存桶(S3 bucket). 將應用程式指向S3 儲存桶(S3 bucket).
- D. 為每個EC2例項建立加密的亞馬遜彈性塊儲存器(Amazon EBS)磁碟區. 將新的 EBS 磁碟區附加到每個EC2 例項中。 將憑證檔案移到新的EBS 磁碟區中. 將應用程式指向新的 EBS 磁碟區。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS Secrets Manager. 開啟自動輪換。**AWS Secrets Manager 原生支援 Amazon Aurora 和 RDS 的憑證自動輪換**，無需任何自訂程式碼。啟用自動輪換後，Secrets Manager 會自動更新資料庫密碼並確保應用程式使用新憑證，大幅降低維運負擔，是本題的最佳解。
- 其餘選項比較：
- B：使用 AWS Systems Manager 引數儲存器. 開啟自動輪換。**SSM Parameter Store 並不支援 RDS/Aurora 的原生自動輪換功能**，若要實現輪換需要自行撰寫 Lambda 函式來更新參數值並通知資料庫，維運複雜度遠高於 Secrets Manager。
- C：建立 Amazon S3 桶以儲存用 AWS Key Management Service(AWS KMS) 加密(encryption) 鍵加密的物件. 將憑證檔案移到 S3 儲存桶(S3 bucket). 將應用程式指向S3 儲存桶(S3 bucket)。將憑證存入 S3 需要應用程式修改，且沒有內建的輪換機制，需要自行管理輪換流程，維運複雜度高。
- D：為每個EC2例項建立加密的亞馬遜彈性塊儲存器(Amazon EBS)磁碟區. 將新的 EBS 磁碟區附加到每個EC2 例項中。 將憑證檔案移到新的EBS 磁碟區中. 將應用程式指向新的 EBS 磁碟區 。EBS 是區塊儲存設備，完全不提供任何憑證管理或輪換功能，此方案徒增複雜度而不解決問題。

## Question #12

**題目**
一家全球公司在Amazon EC2例項上以應用程式負載平衡器(Application Load Balancer)(ALB)為主機。 網路應用有靜態資料和動態資料. 公司將其靜態資料儲存在Amazon S3桶中. 公司希望提高效能,減少靜態資料和動態資料的延遲(latency). 該公司使用自己的域名註冊於Amazon Route 53. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立一個以S3 儲存桶(S3 bucket)和ALB為起源的Amazon CloudFront發行. 設定 Route 53 將流量路由至 CloudFront Distribution.
- B. 建立一個以ALB為源的Amazon CloudFront分佈. 建立一個以S3 儲存桶(S3 bucket)為終點的AWS Global Accelerator 標準加速器。設定 Route 53 路由流量至 CloudFront Distribution.
- C. 建立一個以S3 儲存桶(S3 bucket)為源的Amazon CloudFront發行. 建立一個以 ALB 和 CloudFront Distribution 為終點的 AWS Global Accelerator 標準加速器. 建立自定義域名,指向加速器 DNS 名稱. 使用自定義域名作為網路應用程式的終點.
- D. 建立一個以ALB為源的Amazon CloudFront分佈. 建立一個以S3 儲存桶(S3 bucket)為終點的AWS Global Accelerator標準加速器. 建立兩個域名. 點一域名為CloudFront DNS名稱,用於動態內容. 將其他域名指向靜態內容的加速器DNS名稱. 使用域名作為網路應用程式的終點.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個以S3 儲存桶(S3 bucket)和ALB為起源的Amazon CloudFront發行. 設定 Route 53 將流量路由至 CloudFront Distribution。**CloudFront 支援多個 Origin**，可以同時設定 S3（靜態內容）和 ALB（動態內容）作為不同路徑的 Origin，透過 Cache Behaviors 設定不同路徑規則，一個 CloudFront Distribution 即可服務靜態與動態內容，降低延遲且架構簡單。
- 其餘選項比較：
- B：建立一個以ALB為源的Amazon CloudFront分佈. 建立一個以S3 儲存桶(S3 bucket)為終點的AWS Global Accelerator 標準加速器。設定 Route 53 路由流量至 CloudFront Distribution。Global Accelerator 不支援 S3 作為終端節點，且將靜態和動態內容分拆到不同服務架構不必要地增加了複雜度和成本。
- C：建立一個以S3 儲存桶(S3 bucket)為源的Amazon CloudFront發行. 建立一個以 ALB 和 CloudFront Distribution 為終點的 AWS Global Accelerator 標準加速器. 建立自定義域名,指向加速器 DNS 名稱. 使用自定義域名作為網路應用程式的終點。混用 Global Accelerator 和 CloudFront 造成架構過度複雜，且靜態內容不需要 Global Accelerator，CloudFront 邊緣快取已足夠優化靜態內容的延遲。
- D：建立一個以ALB為源的Amazon CloudFront分佈. 建立一個以S3 儲存桶(S3 bucket)為終點的AWS Global Accelerator標準加速器. 建立兩個域名. 點一域名為CloudFront DNS名稱,用於動態內容. 將其他域名指向靜態內容的加速器DNS名稱. 使用域名作為網路應用程式的終點。使用兩個不同域名分別提供靜態和動態內容，對使用者和應用程式都增加了複雜度，且 Global Accelerator 並不適合做靜態檔案的 CDN 服務。

## Question #13

**題目**
一家公司每月對其AWS基礎設施進行維護。 在這些維護活動期間,公司需要將Amazon RDS的Amazon RDS的憑證輪換給多個AWS區域MySQL資料庫. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將憑證作為機密存放在AWS Secrets Manager。 為所需區域使用多區域(Region)秘密複寫(replication). 配置密件管理器, 以在日程中輪換憑證。
- B. 透過建立安全字串引數,將憑證作為機密儲存在 AWS Systems Manager 中. 為所需區域使用多區域(Region)秘密複寫(replication). 配置系統管理器以在時間表中輪換這些憑證。
- C. 將憑證儲存在 Amazon S3 桶中, 該桶已啟用伺服器側 加密(encryption)(SSE)。 使用Amazon EventBridge(Amazon CloudWatch Events)來引用一個AWS Lambda函式來輪換憑證.
- D. 使用 AWS Key Management Service(AWS KMS) 多區域(Region) 客戶管理金鑰加密憑證為機密. 在 Amazon DynamoDB 全球表格中儲存這些秘密。 使用 AWS Lambda 函式從 DynamoDB 獲取機密. 使用 RDS API來輪換這些憑證.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將憑證作為機密存放在AWS Secrets Manager。 為所需區域使用多區域(Region)秘密複寫(replication). 配置密件管理器, 以在日程中輪換憑證 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：透過建立安全字串引數,將憑證作為機密儲存在 AWS Systems Manager 中. 為所需區域使用多區域(Region)秘密複寫(replication). 配置系統管理器以在時間表中輪換這些憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將憑證儲存在 Amazon S3 桶中, 該桶已啟用伺服器側 加密(encryption)(SSE)。 使用Amazon EventBridge(Amazon CloudWatch Events)來引用一個AWS Lambda函式來輪換憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Key Management Service(AWS KMS) 多區域(Region) 客戶管理金鑰加密憑證為機密. 在 Amazon DynamoDB 全球表格中儲存這些秘密。 使用 AWS Lambda 函式從 DynamoDB 獲取機密. 使用 RDS API來輪換這些憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #14

**題目**
一家公司在Amazon EC2 執行個體中執行了應用程式負載平衡器(Application Load Balancer)之後的電子商務應用程式。 這些執行個體在Amazon EC2 Auto Scaling 群組(Auto Scaling group)中跨越多個可用區(Availability Zones). 基於CPU利用率度量的Auto Scaling 群組(Auto Scaling group)尺度. 電子商務應用程式將交易資料儲存在一個大型EC2例項上的MySQL 8.0 資料庫(database)中。 資料庫(database)的效能隨著應用程式負載的增加而迅速退化. 該應用程式處理的讀取請求多於寫入交易. 公司希望有一個解決方案可以自動縮放資料庫,以滿足無法預測的閱讀工作量需求,同時維持高可用性. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用帶有單一節點的Amazon Redshift用於領導和計算功能.
- B. 使用帶有單AZ部署的Amazon RDS 配置 Amazon RDS 在不同的可用區(Availability Zone)中新增讀取器例項.
- C. 使用Amazon Aurora,部署多AZ. 配置 Aurora 自動縮放與 Aurora 複製。
- D. 使用 Amazon ElastiCache 與 EC2 Spot 執行個體 相配合。

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用Amazon Aurora,部署多AZ. 配置 Aurora 自動縮放與 Aurora 複製 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用帶有單一節點的Amazon Redshift用於領導和計算功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用帶有單AZ部署的Amazon RDS 配置 Amazon RDS 在不同的可用區(Availability Zone)中新增讀取器例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon ElastiCache 與 EC2 Spot 執行個體 相配合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #15

**題目**
最近一家公司遷移到AWS,希望執行一個解決方案,以保護進出生產VPC的流量。 該公司在現場資料中心設有檢查伺服器。 檢查伺服器進行了流量檢查和流量過濾等具體操作. 公司希望在AWS雲中擁有相同的功能. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon GuardDuty在生產VPC時進行流量檢查和流量過濾.
- B. 使用流量鏡像來反射生產VPC的流量,進行流量檢查和過濾.
- C. 使用AWS Network 防火牆(Firewall)來建立生產VPC的流量檢查和流量過濾所需的規則.
- D. 使用 AWS 防火牆(Firewall) 管理器為生產VPC 的流量檢查和流量過濾制定所需的規則.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用AWS Network 防火牆(Firewall)來建立生產VPC的流量檢查和流量過濾所需的規則。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon GuardDuty在生產VPC時進行流量檢查和流量過濾。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用流量鏡像來反射生產VPC的流量,進行流量檢查和過濾。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 防火牆(Firewall) 管理器為生產VPC 的流量檢查和流量過濾制定所需的規則。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #16

**題目**
一家公司在AWS上擁有一個資料湖(data lake). 資料湖(data lake)由Amazon S3和Amazon RDS的資料組成,用於PostgreSQL. 公司需要一個報告解決方案,提供資料視覺化,幷包括資料湖(data lake)內的所有資料來源. 只有公司管理團隊才能完全進入所有視覺化. 公司的其餘部分只能有限地進入. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在Amazon QuickSight建立分析. 連線所有的資料來源並建立新的資料集. 釋出視覺化資料的儀表板. 與適當的IAM角色共享儀表板.
- B. 在Amazon QuickSight建立分析. 連線所有的資料來源並建立新的資料集. 釋出視覺化資料的儀表板. 與適當的使用者和團體共享儀表板。
- C. 為 Amazon S3 中的資料建立 AWS Glue 表格和爬蟲. 建立 AWS Glue 提取、轉換和載入任務以生成報告。 將報告公佈給Amazon S3。 使用S3 儲存桶(S3 bucket)政策限制獲取報告.
- D. 為 Amazon S3 中的資料建立 AWS Glue 表格和爬蟲. 使用 Amazon Athena Federated Query 存取 Amazon RDS 內部的資料用於 PostgreSQL. 透過使用Amazon Athena生成報告. 將報告公佈給Amazon S3。 使用S3 儲存桶(S3 bucket)政策限制獲取報告.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在Amazon QuickSight建立分析. 連線所有的資料來源並建立新的資料集. 釋出視覺化資料的儀表板. 與適當的使用者和團體共享儀表板。**Amazon QuickSight 是 AWS 的 BI 可視化服務**，可直接連線 S3 和 RDS 資料來源，建立互動式儀表板。QuickSight 使用自己的使用者和群組權限系統，可精細控制哪些人員可以檢視哪些儀表板，完全滿足「管理團隊完整存取、其他人有限存取」的差異化授權需求。
- 其餘選項比較：
- A：在Amazon QuickSight建立分析. 連線所有的資料來源並建立新的資料集. 釋出視覺化資料的儀表板. 與適當的IAM角色共享儀表板。QuickSight 儀表板是透過 QuickSight 的使用者/群組系統（而非 IAM 角色）來共享的，與 IAM 角色共享儀表板在 QuickSight 中並非標準的存取控制方式。
- C：為 Amazon S3 中的資料建立 AWS Glue 表格和爬蟲. 建立 AWS Glue 提取、轉換和載入任務以生成報告。 將報告公佈給Amazon S3。 使用S3 儲存桶(S3 bucket)政策限制獲取報告。AWS Glue ETL 是資料轉換服務，不提供可視化功能，生成的是靜態檔案而非互動式儀表板，不符合題目的「視覺化」需求。
- D：為 Amazon S3 中的資料建立 AWS Glue 表格和爬蟲. 使用 Amazon Athena Federated Query 存取 Amazon RDS 內部的資料用於 PostgreSQL. 透過使用Amazon Athena生成報告. 將報告公佈給Amazon S3。 使用S3 儲存桶(S3 bucket)政策限制獲取報告。**Amazon Athena 是 SQL 查詢引擎，完全沒有視覺化功能**，生成的查詢結果是 CSV 檔案，不能提供互動式儀表板，不符合「資料視覺化」的需求。

## Question #17

**題目**
一家公司正在執行新的業務申請。 該應用程式執行在兩個Amazon EC2 執行個體上,並使用一個Amazon S3桶進行檔案儲存. 一個解決方案設計師需要確保EC2例項能夠存取S3 儲存桶(S3 bucket). 解決方案設計師應如何滿足這一要求?

**選項**
- A. 建立IAM角色,允許進入S3 儲存桶(S3 bucket). 將角色附加到EC2例項中.
- B. 建立一個IAM 政策(IAM policy),允許進入S3 儲存桶(S3 bucket). 將政策附加到EC2例項中。
- C. 建立一個IAM組,允許存取S3 儲存桶(S3 bucket). 將該組附加到 EC2 例項中。
- D. 建立一個IAM使用者,允許存取S3 儲存桶(S3 bucket). 將使用者帳戶附加到 EC2 例項中。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立IAM角色,允許進入S3 儲存桶(S3 bucket). 將角色附加到EC2例項中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個IAM 政策(IAM policy),允許進入S3 儲存桶(S3 bucket). 將政策附加到EC2例項中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個IAM組,允許存取S3 儲存桶(S3 bucket). 將該組附加到 EC2 例項中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個IAM使用者,允許存取S3 儲存桶(S3 bucket). 將使用者帳戶附加到 EC2 例項中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #18

**題目**
一個應用程式開發團隊正在設計一個微服務,將大型影象轉換為較小的壓縮影象. 當使用者透過網路介面上傳影象時,微伺服器應該將影象儲存在Amazon S3桶中,用AWS Lambda功能處理和壓縮影象,並以不同的S3 儲存桶(S3 bucket)壓縮形式儲存影象. 一個解決方案架構師需要設計一個使用持久,無狀態元件自動處理影象的解決方案. 哪些行動組合將滿足這些要求?(選二.

**選項**
- A. 建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 配置 S3 儲存桶(S3 bucket) 在影象上傳到 S3 儲存桶(S3 bucket) 時向 SQS 佇列傳送通知。
- B. 配置 Lambda 函式以使用 Amazon 簡單佇列服務(Amazon SQS) 佇列作為呼叫來源。 當SQS訊息被成功處理時,刪除佇列中的訊息.
- C. 配置 Lambda 函式以監視 S3 儲存桶(S3 bucket) 用於新的上傳。 當檢測到上傳的影象時,將檔名寫入記憶體中的文字檔案,並使用文字檔案來跟蹤處理過的影象.
- D. 啟動 Amazon EC2 例項以監視 Amazon 簡單佇列服務( Amazon SQS) 佇列。 當專案新增到佇列時,在EC2例項的文字檔案中記錄檔名,並觸發 Lambda 函式.
- E. 配置 Amazon EventBridge(Amazon CloudWatch事件)活動,以監視S3 儲存桶(S3 bucket). 當一個影象被上傳時,向一個帶有應用程式所有者的電子郵件地址的Amazon Simple Notification Service(Amazon SNS)主題發出警報,供進一步處理.

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 配置 S3 儲存桶(S3 bucket) 在影象上傳到 S3 儲存桶(S3 bucket) 時向 SQS 佇列傳送通知 。此選項符合題目條件，能有效滿足核心需求。
- B：配置 Lambda 函式以使用 Amazon 簡單佇列服務(Amazon SQS) 佇列作為呼叫來源。 當SQS訊息被成功處理時,刪除佇列中的訊息。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：配置 Lambda 函式以監視 S3 儲存桶(S3 bucket) 用於新的上傳。 當檢測到上傳的影象時,將檔名寫入記憶體中的文字檔案,並使用文字檔案來跟蹤處理過的影象。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：啟動 Amazon EC2 例項以監視 Amazon 簡單佇列服務( Amazon SQS) 佇列。 當專案新增到佇列時,在EC2例項的文字檔案中記錄檔名,並觸發 Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：配置 Amazon EventBridge(Amazon CloudWatch事件)活動,以監視S3 儲存桶(S3 bucket). 當一個影象被上傳時,向一個帶有應用程式所有者的電子郵件地址的Amazon Simple Notification Service(Amazon SNS)主題發出警報,供進一步處理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #19

**題目**
一家公司在 AWS 上部署了一個三層式網路應用程式。 網路伺服器部署在VPC的公共子網中. 應用伺服器和資料庫(database)伺服器部署在同一VPC的私人子網中. 公司在VPC檢查中部署了來自AWS Marketplace的第三方虛擬防火牆設備(firewall appliance). 應用程式配置有一個可以接受IP包的IP介面. 解決方案架構師需要將網路應用程式與應用程式整合,在流量到達網路伺服器之前檢查應用程式的所有流量. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在應用程式的 VPC 的公開子網中建立 網路負載平衡器(Network Load Balancer) , 將流量路由到設備進行封包檢查.
- B. 在應用程式的 VPC 的公開子網中建立 應用程式負載平衡器(Application Load Balancer), 將流量路由到設備進行封包檢查。
- C. 在檢查的 VPC 部署一個中繼閘道（Transit Gateway），透過中繼閘道對收到的封包進行路由.
- D. 在檢查 VPC 中部署 Gateway Load Balancer。 建立 Gateway Load Balancer 端點以接收封包並轉發給虛擬設備。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在檢查 VPC 中部署 Gateway Load Balancer。 建立 Gateway Load Balancer 端點以接收封包並轉發給虛擬設備。**Gateway Load Balancer (GWLB) 是專為第三方網路虛擬設備（防火牆、IDS/IPS）設計的服務**，運作於 OSI 第 3 層（IP 層），使用 GENEVE 協定封裝 IP 封包後透明轉發給虛擬設備進行檢查，再返回，完全透明且不改變原始封包。題目中的防火牆設備需要接收完整的 IP 封包，只有 GWLB 能滿足此需求。
- 其餘選項比較：
- A：在應用程式的 VPC 的公開子網中建立 網路負載平衡器(Network Load Balancer) , 將流量路由到設備進行封包檢查。NLB 運作於 OSI 第 4 層（TCP/UDP），雖能傳遞 TCP 連線，但不具備 GWLB 的透明 IP 封包轉發能力，無法搭配需要接收完整 IP 封包的網路設備。
- B：在應用程式的 VPC 的公開子網中建立 應用程式負載平衡器(Application Load Balancer), 將流量路由到設備進行封包檢查。**ALB 運作於 OSI 第 7 層（HTTP/HTTPS），根本無法轉發原始 IP 封包**，完全不符合第三方虛擬防火牆設備需要接收 IP 封包進行深度封包檢測的要求。
- C：在檢查的 VPC 部署一個中繼閘道（Transit Gateway），透過中繼閘道對收到的封包進行路由。Transit Gateway 是網路中樞連線服務，可以路由流量到檢查 VPC，但本身不提供負載平衡功能，無法對多個防火牆設備做健康檢查和負載分散。

## Question #20

**題目**
一家公司希望提高自己的能力,把大量生產資料複製到同一個AWS 區域(Region)的試驗環境中. 資料以Amazon EC2 執行個體儲存在亞馬遜彈性塊儲存(Amazon EBS 磁碟區上. 克隆資料的修改不得影響生產環境. 存取此資料的軟體需要持續高的I/O效能. 一個解決方案架構師需要儘可能縮短將生產資料複製到測試環境中所需的時間. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 EBS 生產磁碟區的快照. 在測試環境中將快照恢復到EC2例項儲存量。
- B. 配置製作的EBS 磁碟區以使用EBS Multi-Attach. 建立 EBS 生產磁碟區的快照. 在測試環境中,將生產EBS 磁碟區附加到EC2例項中。
- C. 建立 EBS 生產磁碟區的快照. 建立和初始化新的 EBS 磁碟區。 將新的 EBS 磁碟區附於測試環境中的EC2 例,然後恢復生產 EBS 的快照卷。
- D. 建立 EBS 生產磁碟區的快照. 開啟EBS快速快照(snapshot)恢復EBS快照功能. 將快照恢復為新的 EBS 磁碟區。 在測試環境中將新的 EBS 磁碟區附加到 EC2 例項中。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 EBS 生產磁碟區的快照. 開啟EBS快速快照(snapshot)恢復EBS快照功能. 將快照恢復為新的 EBS 磁碟區。 在測試環境中將新的 EBS 磁碟區附加到 EC2 例項中 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 EBS 生產磁碟區的快照. 在測試環境中將快照恢復到EC2例項儲存量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置製作的EBS 磁碟區以使用EBS Multi-Attach. 建立 EBS 生產磁碟區的快照. 在測試環境中,將生產EBS 磁碟區附加到EC2例項中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 EBS 生產磁碟區的快照. 建立和初始化新的 EBS 磁碟區。 將新的 EBS 磁碟區附於測試環境中的EC2 例,然後恢復生產 EBS 的快照卷。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #21

**題目**
一家電子商務公司想在AWS上推出一天一次的交易網站. 每天的銷售時間為24小時。 公司希望在高峰時段以毫秒延遲(latency)處理每小時數百萬個請求. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用Amazon S3在不同的S3桶內託管完整網站. 增加Amazon CloudFront分佈. 設定 S3 桶作為分發的起源。 在Amazon S3中儲存訂單資料.
- B. 在跨多個可用區(Availability Zones)的Amazon EC2例項上部署全網站。 新增一個應用程式負載平衡器(Application Load Balancer)(ALB)來分配網站流量. 為後端 API 新增另一個 ALB。 為 MySQL 將資料儲存在 Amazon RDS 中.
- C. 將全部應用程式移到容器中執行。 在Amazon Elastic Kubernetes Service(Amazon EKS)上託管容器. 使用 Kubernetes 叢集自動縮放器來增加和減少處理流量暴動的Pod 數量. 為 MySQL 將資料儲存在 Amazon RDS 中.
- D. 使用Amazon S3 儲存桶託管網站的靜態內容. 部署Amazon CloudFront 發行版。 設定 S3 儲存桶(S3 bucket) 為源。 為後端API使用Amazon API Gateway和AWS Lambda功能. 在Amazon DynamoDB中儲存資料.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用Amazon S3 儲存桶託管網站的靜態內容. 部署Amazon CloudFront 發行版。 設定 S3 儲存桶(S3 bucket) 為源。 為後端API使用Amazon API Gateway和AWS Lambda功能. 在Amazon DynamoDB中儲存資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon S3在不同的S3桶內託管完整網站. 增加Amazon CloudFront分佈. 設定 S3 桶作為分發的起源。 在Amazon S3中儲存訂單資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在跨多個可用區(Availability Zones)的Amazon EC2例項上部署全網站。 新增一個應用程式負載平衡器(Application Load Balancer)(ALB)來分配網站流量. 為後端 API 新增另一個 ALB。 為 MySQL 將資料儲存在 Amazon RDS 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將全部應用程式移到容器中執行。 在Amazon Elastic Kubernetes Service(Amazon EKS)上託管容器. 使用 Kubernetes 叢集自動縮放器來增加和減少處理流量暴動的Pod 數量. 為 MySQL 將資料儲存在 Amazon RDS 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #22

**題目**
一個解決方案架構師正在使用Amazon S3設計一個新的數位媒體應用的儲存架構. 媒體檔案必須能夠抵禦可用區(Availability Zone)失效. 一些檔案經常被存取,而其他檔案很少以不可預測的方式存取。 解決方案設計師必須儘量減少儲存和檢索媒體檔案的費用。 哪個儲存選項符合這些要求?

**選項**
- A. S3標準
- B. S3 Intelligent-Tiering.
- C. S3 標準-不頻繁存取（S3 Standard-IA）
- D. S3 單一可用區-不頻繁存取（S3 One Zone-IA）

**答案**
B


**詳解**
正確答案是 **B**。
- B：S3 Intelligent-Tiering。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：S3標準。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：S3 標準-不頻繁存取（S3 Standard-IA）。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：S3 單一可用區-不頻繁存取（S3 One Zone-IA）。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #23

**題目**
一家公司透過使用Amazon S3標準儲存儲存備份(backup)檔案. 這些檔案經常存取1個月。 然而,在1個月後無法查閱這些檔案。 公司必須無限期儲存檔案. 哪種儲存辦法能以成本效益高的方式滿足這些要求?

**選項**
- A. 配置 S3 Intelligent-Tiering 自動遷移物件。
- B. 建立一個S3生命週期配置,在1個月後從S3 Standard到S3 Glacier Deep Archive的轉換物件.
- C. 建立一個S3生命週期配置,在1個月後從S3標準到S3標準-不頻繁存取(S3 Standard-IA)的轉換物件.
- D. 建立一個S3生命週期配置,在1個月後從S3 Standard到S3 One Zone-In頻繁存取(S3 One Zone-IA)的轉換物件.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個S3生命週期配置,在1個月後從S3 Standard到S3 Glacier Deep Archive的轉換物件。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 S3 Intelligent-Tiering 自動遷移物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個S3生命週期配置,在1個月後從S3標準到S3標準-不頻繁存取(S3 Standard-IA)的轉換物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個S3生命週期配置,在1個月後從S3 Standard到S3 One Zone-In頻繁存取(S3 One Zone-IA)的轉換物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #24

**題目**
一家公司在最近的帳單中注意到Amazon EC2的費用增加。 計費小組通報,對於幾個EC2 執行個體,不想要的垂直擴展執行個體類型。 解決方案架構師需要製作一個圖表,比較最後兩個月EC2成本,並進行深入分析,以確定垂直縮放的根本原因. 解決方案架構師應如何用LEAST 營運開銷(operational overhead)生成資訊?

**選項**
- A. 使用 AWS 預算來建立預算報告,並根據例項型別比較EC2 成本.
- B. 使用Cost Explorer的細粒度篩選功能,根據例項型別對EC2成本進行深入分析.
- C. 使用AWS計費和成本管理儀表板的圖表來比較過去兩個月基於例項型別的EC2成本.
- D. 使用 AWS Cost and Usage Reports 建立報告併傳送到Amazon S3桶. 使用帶有Amazon S3的Amazon QuickSight作為源頭,生成基於例項型別的互動圖.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Cost Explorer的細粒度篩選功能,根據例項型別對EC2成本進行深入分析。**AWS Cost Explorer 提供細粒度的成本篩選功能**，可按服務、帳戶、地區、**執行個體類型**等維度篩選，並提供時間序列圖表比較不同時期的成本。直接在 Cost Explorer 中篩選「EC2 服務 + 依執行個體類型分組」，即可快速找出哪些類型的執行個體費用異常，操作簡單、維運開銷最低。
- 其餘選項比較：
- A：使用 AWS 預算來建立預算報告,並根據例項型別比較EC2 成本。AWS Budgets 主要用於設定預算閾值和告警，不提供按執行個體類型進行歷史成本深入分析的功能。
- C：使用AWS計費和成本管理儀表板的圖表來比較過去兩個月基於例項型別的EC2成本。**AWS Billing Dashboard 顯示的是整體帳單摘要**，不提供按執行個體類型篩選的細粒度分析功能，無法做到題目要求的執行個體類型深入分析。
- D：使用 AWS Cost and Usage Reports 建立報告併傳送到Amazon S3桶. 使用帶有Amazon S3的Amazon QuickSight作為源頭,生成基於例項型別的互動圖。此方案雖然可行，但需要設定 CUR、S3、QuickSight 多個服務，維運開銷遠高於直接使用 Cost Explorer，不符合最低維運開銷的要求。

## Question #25

**題目**
一個公司正在設計一個應用程式。 該應用程式使用AWS Lambda功能透過Amazon API Gateway接收資訊,並將資訊儲存在Amazon Aurora PostgreSQL 資料庫(database)中. 在概念證明階段,公司必須大幅提高Lambda配額,以處理公司需要載入到資料庫(database)的高量資料. 解決方案架構師必須建議新的設計,以改進可擴展性(scalability),並儘量減少配置努力. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將 Lambda 函式程式碼重置為執行於 Amazon EC2 例項上的 Apache Tomcat 程式碼。 透過使用本地Java 資料庫(Database) 連線資料庫(database)的驅動程式(JDBC)連線.
- B. 將平臺從 Aurora 改為Amazon DynamoDB 提供DynamoDB加速器(DAX)叢集. 使用DAX客戶端SDK將現有的DynamoDB API呼叫指向DAX叢集.
- C. 設定兩個Lambda功能. 配置一個函式以接收資訊。 配置其他功能將資訊載入到資料庫(database). 透過使用亞馬遜簡易通知服務(Amazon SNS)整合Lambda功能.
- D. 設定兩個Lambda功能. 配置一個函式以接收資訊。 配置其他功能將資訊載入到資料庫(database). 使用 Amazon 簡單佇列服務( Amazon SQS) 佇列整合 Lambda 函式。

**答案**
D


**詳解**
正確答案是 **D**。
- D：設定兩個Lambda功能. 配置一個函式以接收資訊。 配置其他功能將資訊載入到資料庫(database). 使用 Amazon 簡單佇列服務( Amazon SQS) 佇列整合 Lambda 函式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將 Lambda 函式程式碼重置為執行於 Amazon EC2 例項上的 Apache Tomcat 程式碼。 透過使用本地Java 資料庫(Database) 連線資料庫(database)的驅動程式(JDBC)連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將平臺從 Aurora 改為Amazon DynamoDB 提供DynamoDB加速器(DAX)叢集. 使用DAX客戶端SDK將現有的DynamoDB API呼叫指向DAX叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：設定兩個Lambda功能. 配置一個函式以接收資訊。 配置其他功能將資訊載入到資料庫(database). 透過使用亞馬遜簡易通知服務(Amazon SNS)整合Lambda功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #26

**題目**
一家公司需要審查它的AWS雲部署,以確保它的Amazon S3桶沒有未經授權的配置改變. 解決方案設計師應如何實現這一目標?

**選項**
- A. 開啟AWS Config 並有相應的規則.
- B. 呼叫AWS信任的顧問進行適當的檢查。
- C. 使用適當的評估模板開啟Amazon Inspector。
- D. 開啟Amazon S3伺服器存取日誌. 配置 Amazon EventBridge(Amazon 雲表事件).

**答案**
A


**詳解**
正確答案是 **A**。
- A：開啟AWS Config 並有相應的規則。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：呼叫AWS信任的顧問進行適當的檢查。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用適當的評估模板開啟Amazon Inspector。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：開啟Amazon S3伺服器存取日誌. 配置 Amazon EventBridge(Amazon 雲表事件)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #27

**題目**
一家公司正在推出新的應用程式,並將在Amazon CloudWatch儀表板上顯示應用度量衡。 公司的產品經理需要定期存取這個儀表板. 產品經理沒有AWS帳戶. 解決方案設計師必須遵循最小權限(least privilege)的原則,為產品經理提供存取機會. 哪種解決辦法能滿足這些要求?

**選項**
- A. 共享雲表控制檯的儀表板. 輸入產品管理器的電子郵件地址, 並完成共享步驟。 為產品管理器提供一個共享的連結。
- B. 專門為產品管理器建立 IAM 使用者. 附加 CloudWatch 僅存取 AWS 管理的政策給使用者。 與產品管理器共享新登入憑證。 與產品管理器共享正確儀表板的瀏覽器URL.
- C. 為公司員工建立IAM使用者. 在 IAM 使用者中附加 ViewOnlyAccess AWS 管理政策。 與產品管理器共享新登入憑證。 請產品管理器導航到雲表控制檯,並在Dashboards區按名稱定位儀表板.
- D. 在公共子網中部署堡壘伺服器. 當產品經理需要存取儀表板時,啟動伺服器並共享RDP憑證. 在bastion伺服器上,確保瀏覽器被配置,以快取的AWS憑證開啟儀表板URL,這些憑證具有檢視儀表板的適當許可權.

**答案**
A


**詳解**
正確答案是 **A**。
- A：共享雲表控制檯的儀表板. 輸入產品管理器的電子郵件地址, 並完成共享步驟。 為產品管理器提供一個共享的連結。**CloudWatch 儀表板支援無需 AWS 帳號即可存取的共享連結**，僅提供儀表板的唯讀存取，完全符合「最小權限原則」——產品經理只能看到這個特定儀表板，沒有任何 AWS 帳號或其他資源的存取權限，且無需建立 IAM 使用者。
- 其餘選項比較：
- B：專門為產品管理器建立 IAM 使用者. 附加 CloudWatch 僅存取 AWS 管理的政策給使用者。 與產品管理器共享新登入憑證。 與產品管理器共享正確儀表板的瀏覽器URL。**建立 IAM 使用者給予對方 AWS 帳號的部分存取權限，違反了最小權限原則**，且 IAM 使用者擁有的 CloudWatch Read-Only 政策不只限於單一儀表板，存取範圍超過需求。
- C：為公司員工建立IAM使用者. 在 IAM 使用者中附加 ViewOnlyAccess AWS 管理政策。 與產品管理器共享新登入憑證。 請產品管理器導航到雲表控制檯,並在Dashboards區按名稱定位儀表板。同樣是建立 IAM 使用者的問題，且讓產品管理器自行導覽到儀表板也增加了不必要的步驟。
- D：在公共子網中部署堡壘伺服器. 當產品經理需要存取儀表板時,啟動伺服器並共享RDP憑證. 在bastion伺服器上,確保瀏覽器被配置,以快取的AWS憑證開啟儀表板URL,這些憑證具有檢視儀表板的適當許可權。部署堡壘伺服器是極度過度設計的方案，維運成本極高，且安全風險更大，完全不符合最小複雜度原則。

## Question #28

**題目**
一家公司正在將申請轉移到AWS。 應用程式部署在不同帳戶。 公司透過使用AWS Organizations集中管理帳戶. 公司的安全團隊需要一個單一的簽入(SSO)解決方案覆蓋公司的所有帳戶. 公司必須在其自控的微軟活動目錄中繼續管理使用者和團體. 哪種解決辦法能滿足這些要求?

**選項**
- A. 從 AWS SSO 控制檯啟用 AWS 單一簽名( AWS SSO)。 建立單向森林信託或單向域名信託,透過使用AWS目錄服務連線公司自主管理的Microsoft Active Directory與AWS SO,用於Microsoft Active Directory.
- B. 從 AWS SSO 控制檯啟用 AWS 單一簽名( AWS SSO)。 建立雙向森林信託,透過使用AWS目錄服務連線公司自主管理的微軟活動目錄與AWS SSO,用於微軟活動目錄.
- C. 使用 AWS 目錄服務。 與公司自主管理的微軟活動目錄建立雙向信託關係.
- D. 在本地端部署一個身份提供者。 從 AWS SSO 控制檯啟用 AWS 單一簽名( AWS SSO)。

**答案**
A


**詳解**
正確答案是 **A**。
- A：從 AWS SSO 控制檯啟用 AWS 單一簽名( AWS SSO)。 建立單向森林信託或單向域名信託,透過使用AWS目錄服務連線公司自主管理的Microsoft Active Directory與AWS SO,用於Microsoft Active Directory。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：從 AWS SSO 控制檯啟用 AWS 單一簽名( AWS SSO)。 建立雙向森林信託,透過使用AWS目錄服務連線公司自主管理的微軟活動目錄與AWS SSO,用於微軟活動目錄。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 目錄服務。 與公司自主管理的微軟活動目錄建立雙向信託關係。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在本地端部署一個身份提供者。 從 AWS SSO 控制檯啟用 AWS 單一簽名( AWS SSO) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #29

**題目**
一家公司提供網路協議(VoIP)語音服務,使用UDP連線. 該服務包括以Auto Scaling 群組(Auto Scaling group)執行的Amazon EC2 執行個體. 該公司在多個AWS地區都有部署. 公司需要以最低的延遲(latency)路由使用者前往區域(Region)路段. 公司還需要在地區間自動故障. 哪種解決辦法能滿足這些要求?

**選項**
- A. 部署一個網路負載平衡器(Network Load Balancer)(NLB)和一個相關的目標群體。 將目標群體與Auto Scaling 群組(Auto Scaling group)聯絡起來。 將NLB作為每個區域(Region)中的AWS Global Accelerator端點.
- B. 部署一個應用程式負載平衡器(Application Load Balancer)(ALB)和一個相關的目標群體。 將目標群體與Auto Scaling 群組(Auto Scaling group)聯絡起來。 將ALB作為每個區域(Region)中的AWS Global Accelerator端點.
- C. 部署一個網路負載平衡器(Network Load Balancer)(NLB)和一個相關的目標群體。 將目標群體與Auto Scaling 群組(Auto Scaling group)聯絡起來。 建立Amazon Route 53 延遲(latency)記錄,註明每個NLB的別名. 建立一個使用延遲(latency)記錄作為來源的Amazon CloudFront發行.
- D. 部署一個應用程式負載平衡器(Application Load Balancer)(ALB)和一個相關的目標群體。 將目標群體與Auto Scaling 群組(Auto Scaling group)聯絡起來。 建立 Amazon Route 53 加權記錄,該記錄指每個ALB的別名. 使用加權記錄作為來源的Amazon CloudFront分配。

**答案**
A


**詳解**
正確答案是 **A**。
- A：部署一個網路負載平衡器(Network Load Balancer)(NLB)和一個相關的目標群體。 將目標群體與Auto Scaling 群組(Auto Scaling group)聯絡起來。 將NLB作為每個區域(Region)中的AWS Global Accelerator端點。**AWS Global Accelerator 支援 TCP 和 UDP 協定**，使用 AWS 全球骨幹網路路由流量，提供最低延遲的全球路由，並在區域故障時自動容錯移轉。NLB 支援 UDP，與 Global Accelerator 搭配是 VoIP（UDP 協定）跨區域低延遲且自動容錯的最佳組合。
- 其餘選項比較：
- B：部署一個應用程式負載平衡器(Application Load Balancer)(ALB)和一個相關的目標群體。 將目標群體與Auto Scaling 群組(Auto Scaling group)聯絡起來。 將ALB作為每個區域(Region)中的AWS Global Accelerator端點。ALB 只支援 HTTP/HTTPS（第 7 層），**完全不支援 UDP 協定**，無法用於 VoIP 服務。
- C：部署一個網路負載平衡器(Network Load Balancer)(NLB)和一個相關的目標群體。 將目標群體與Auto Scaling 群組(Auto Scaling group)聯絡起來。 建立Amazon Route 53 延遲(latency)記錄,註明每個NLB的別名. 建立一個使用延遲(latency)記錄作為來源的Amazon CloudFront發行。**Amazon CloudFront 僅支援 HTTP/HTTPS 流量，不支援 UDP**，無法用於 VoIP 語音服務，此架構技術上不可行。
- D：部署一個應用程式負載平衡器(Application Load Balancer)(ALB)和一個相關的目標群體。 將目標群體與Auto Scaling 群組(Auto Scaling group)聯絡起來。 建立 Amazon Route 53 加權記錄,該記錄指每個ALB的別名. 使用加權記錄作為來源的Amazon CloudFront分配。ALB 和 CloudFront 都不支援 UDP，且 Route 53 加權路由不如 Global Accelerator 能做到真正的自動容錯移轉。

## Question #30

**題目**
一個開發團隊每月對其通用的Amazon RDS進行資源密集型測試,測試物件為MySQL DB例項,並啟用效能透視. 測試每月持續48小時,是使用資料庫(database)的唯一過程. 團隊希望在不減少DB例項的計算和記憶體屬性的情況下降低執行測試的成本. 哪種解決辦法符合這些要求?

**選項**
- A. 測試完成後停止 DB 例項。 需要時重新啟動 DB 例項。
- B. 使用帶有 DB 例項的自動縮放策略在測試完成後自動縮放。
- C. 測試完成後建立 快照(snapshot)。 終止 DB 例項並在需要時恢復 快照(snapshot)。
- D. 測試完成時將 DB 例項修改為低容量例項。 需要時再次修改 DB 例項。

**答案**
C


**詳解**
正確答案是 **C**。
- C：測試完成後建立 快照(snapshot)。 終止 DB 例項並在需要時恢復 快照(snapshot) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：測試完成後停止 DB 例項。 需要時重新啟動 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用帶有 DB 例項的自動縮放策略在測試完成後自動縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：測試完成時將 DB 例項修改為低容量例項。 需要時再次修改 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #31

**題目**
一家在AWS上託管其網路應用程式的公司希望確保所有Amazon EC2例項. Amazon RDS DB 例項。 而Amazon Redshift叢集則配置了標記. 公司希望最大限度地減少此檢查的配置和操作努力. 解決方案設計師應該怎麼做才能做到這一點?

**選項**
- A. 使用 AWS Config 規則來定義和檢測沒有正確標記的資源.
- B. 使用 Cost Explorer 來顯示沒有正確標記的資源。 手工標記這些資源。
- C. 寫入 API 呼叫以檢查所有資源, 以進行適當的標籤分配。 在EC2例項上定期執行程式碼.
- D. 寫入 API 呼叫以檢查所有資源, 以進行適當的標籤分配。 透過 Amazon CloudWatch 安排一個 AWS Lambda 函式來定期執行程式碼。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 AWS Config 規則來定義和檢測沒有正確標記的資源。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 Cost Explorer 來顯示沒有正確標記的資源。 手工標記這些資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：寫入 API 呼叫以檢查所有資源, 以進行適當的標籤分配。 在EC2例項上定期執行程式碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：寫入 API 呼叫以檢查所有資源, 以進行適當的標籤分配。 透過 Amazon CloudWatch 安排一個 AWS Lambda 函式來定期執行程式碼 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #32

**題目**
開發團隊需要託管一個其他團隊會存取的網站. 網站內容包括HTML,CSS,客戶端JavaScript,以及影象. 網站的託管採用哪種方法最符合成本效益?

**選項**
- A. 將網站裝箱並在AWS Fargate中託管.
- B. 建立一個 Amazon S3 桶,並在那裡託管網站.
- C. 在 Amazon EC2 例項上部署網路伺服器以託管網站。
- D. 配置使用Express.js框架的帶有AWS Lambda目標的應用程式負載平衡器(Application Load Balancer).

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個 Amazon S3 桶,並在那裡託管網站。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將網站裝箱並在AWS Fargate中託管。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Amazon EC2 例項上部署網路伺服器以託管網站。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置使用Express.js框架的帶有AWS Lambda目標的應用程式負載平衡器(Application Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #33

**題目**
一家公司在AWS上執行線上市場網路應用程式. 該應用程式在高峰時段為數十萬使用者服務. 公司需要一個可擴充套件的,近乎實時的解決方案,以便與其他幾個內部應用程式共享數百萬筆金融交易的細節. 還需要處理交易,以刪除敏感資料,然後儲存在資料庫(database)中以供後續檢索。 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 將交易資料儲存到Amazon DynamoDB中. 在 DynamoDB 中設定一條規則,以刪除每筆交易在寫時的敏感資料. 使用 DynamoDB Streams 與其他應用程式共享交易資料.
- B. 將交易資料流入Amazon Kinesis Data Firehose,以儲存Amazon DynamoDB和Amazon S3的資料. 使用與Kinesis Data Firehose的AWS Lambda整合,去除敏感資料. 其他應用可以消耗Amazon S3儲存的資料.
- C. 將交易資料流到 Amazon Kinesis 資料流。 使用AWS Lambda整合,從每次交易中移除敏感資料,然後將交易資料儲存在Amazon DynamoDB中. 其他應用程式可以消耗Kinesis資料流以外的交易資料.
- D. 在 Amazon S3 中將批次交易資料儲存為檔案。 使用AWS Lambda在更新Amazon S3中的檔案之前處理每個檔案並刪除敏感資料. Lambda函式然後將資料儲存在Amazon DynamoDB中. 其他應用程式可以消耗儲存在Amazon S3的交易檔案.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將交易資料流到 Amazon Kinesis 資料流。 使用AWS Lambda整合,從每次交易中移除敏感資料,然後將交易資料儲存在Amazon DynamoDB中. 其他應用程式可以消耗Kinesis資料流以外的交易資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將交易資料儲存到Amazon DynamoDB中. 在 DynamoDB 中設定一條規則,以刪除每筆交易在寫時的敏感資料. 使用 DynamoDB Streams 與其他應用程式共享交易資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將交易資料流入Amazon Kinesis Data Firehose,以儲存Amazon DynamoDB和Amazon S3的資料. 使用與Kinesis Data Firehose的AWS Lambda整合,去除敏感資料. 其他應用可以消耗Amazon S3儲存的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Amazon S3 中將批次交易資料儲存為檔案。 使用AWS Lambda在更新Amazon S3中的檔案之前處理每個檔案並刪除敏感資料. Lambda函式然後將資料儲存在Amazon DynamoDB中. 其他應用程式可以消耗儲存在Amazon S3的交易檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #34

**題目**
一個公司在AWS上託管其多級應用. 對於合規(compliance),治理,審計和安全,公司必須跟蹤其AWS資源配置的變化,並記錄API對這些資源的呼叫的歷史. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用AWS CloudTrail跟蹤配置變化,使用AWS Config記錄API呼叫.
- B. 使用AWS Config跟蹤配置變化,使用AWS CloudTrail記錄API呼叫.
- C. 使用AWS Config跟蹤配置變化,使用Amazon CloudWatch記錄API呼叫.
- D. 使用AWS CloudTrail跟蹤配置變化,使用Amazon CloudWatch記錄API呼叫.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用AWS Config跟蹤配置變化,使用AWS CloudTrail記錄API呼叫。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS CloudTrail跟蹤配置變化,使用AWS Config記錄API呼叫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Config跟蹤配置變化,使用Amazon CloudWatch記錄API呼叫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS CloudTrail跟蹤配置變化,使用Amazon CloudWatch記錄API呼叫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #35

**題目**
一家公司正準備在AWS雲中推出一個公開的網頁應用. 該架構包含在彈性負載平衡器(Load Balancer)(ELB)後面的VPC內Amazon EC2例項. 第三方服務用於DNS. 公司的解決方案架構師必須推薦一個解決方案來檢測和防範大規模的DDoS攻擊. 哪種解決辦法符合這些要求?

**選項**
- A. 啟用帳戶上的Amazon GuardDuty。
- B. 在 EC2 例項上啟用 Amazon 檢查器。
- C. 啟用 AWS Shield 並給它指定 Amazon Route 53.
- D. 啟用 AWS Shield 高階並給它分配ELB.

**答案**
D


**詳解**
正確答案是 **D**。
- D：啟用 AWS Shield 高階並給它分配ELB。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：啟用帳戶上的Amazon GuardDuty 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 EC2 例項上啟用 Amazon 檢查器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：啟用 AWS Shield 並給它指定 Amazon Route 53。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #36

**題目**
一家公司正在AWS雲建造一個應用程式. 該應用程式將在兩個AWS區域的Amazon S3桶中儲存資料. 公司必須使用AWS Key Management Service(AWS KMS)客戶管理的金鑰加密儲存在S3桶中的所有資料. 兩個S3桶中的資料必須加密並用相同的KMS金鑰解密. 資料和金鑰必須儲存在這兩個區域的每一個區域。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在每個區域(Region)中建立一個S3 儲存桶(S3 bucket). 配置 S3 桶以使用伺服器側的 加密(encryption) 與 Amazon S3 管理 加密(encryption) 鍵(SSE-S3). 在S3桶之間配置 複寫(replication)。
- B. 建立客戶管理的多區域(Region) KMS金鑰. 在每個區域(Region)中建立一個S3 儲存桶(S3 bucket). 在S3桶之間配置 複寫(replication)。 用客戶端的 加密(encryption) 配置使用 KMS 金鑰的應用程式。
- C. 在每個區域(Region)中建立一個客戶管理KMS金鑰和一個S3 儲存桶(S3 bucket). 配置 S3 桶以使用伺服器側的 加密(encryption) 與 Amazon S3 管理 加密(encryption) 鍵(SSE-S3). 在S3桶之間配置 複寫(replication)。
- D. 在每個區域(Region)中建立一個客戶管理 KMS 金鑰和一個S3 儲存桶(S3 bucket). 配置 S3 桶,用 AWS KMS 鍵(SSE-KMS)使用伺服器側的 加密(encryption)。 在S3桶之間配置 複寫(replication)。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立客戶管理的多區域(Region) KMS金鑰. 在每個區域(Region)中建立一個S3 儲存桶(S3 bucket). 在S3桶之間配置 複寫(replication)。 用客戶端的 加密(encryption) 配置使用 KMS 金鑰的應用程式。**KMS Multi-Region Keys** 允許在多個 AWS 區域中使用相同的邏輯金鑰（相同的金鑰材料，但不同區域有各自的金鑰 ARN），實現「在兩個區域都能用同一把金鑰加解密」的需求。搭配 S3 複寫，資料可在兩個區域間同步，且兩端都能以同一金鑰解密，維運開銷最低。
- 其餘選項比較：
- A：在每個區域(Region)中建立一個S3 儲存桶(S3 bucket). 配置 S3 桶以使用伺服器側的 加密(encryption) 與 Amazon S3 管理 加密(encryption) 鍵(SSE-S3). 在S3桶之間配置 複寫(replication)。**SSE-S3 使用的是 Amazon S3 管理的金鑰，而非客戶管理的 KMS 金鑰**，不符合題目要求使用 AWS KMS 客戶管理金鑰加密的需求。
- C：在每個區域(Region)中建立一個客戶管理KMS金鑰和一個S3 儲存桶(S3 bucket). 配置 S3 桶以使用伺服器側的 加密(encryption) 與 Amazon S3 管理 加密(encryption) 鍵(SSE-S3). 在S3桶之間配置 複寫(replication) 。雖然建立了客戶管理的 KMS 金鑰，但配置的加密方式卻是 **SSE-S3（不是 SSE-KMS）**，實際上沒有使用那把 KMS 金鑰加密，且兩個區域的 KMS 金鑰是不同的，無法用同一把金鑰解密兩端的資料。
- D：在每個區域(Region)中建立一個客戶管理 KMS 金鑰和一個S3 儲存桶(S3 bucket). 配置 S3 桶,用 AWS KMS 鍵(SSE-KMS)使用伺服器側的 加密(encryption)。 在S3桶之間配置 複寫(replication) 。各區域有獨立的不同 KMS 金鑰，雖然都是 SSE-KMS，但兩個區域的資料各自用不同金鑰加密，**無法滿足「用相同 KMS 金鑰加解密」的核心需求**。

## Question #37

**題目**
一家公司最近在Amazon EC2的AWS帳戶中啟動了各種新的工作量。 公司需要制定一項戰略,以便遠端和安全地存取和管理這些執行個體。 公司需要執行一個可重複的過程,與本地的AWS服務機構合作,並遵循AWS Well-Architected框架. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用EC2序列控制檯直接存取每個例項的終端介面進行管理.
- B. 在每一個現有例項和新例項中附加適當的IAM角色. 使用 AWS Systems Manager 會話管理器建立遠端SSH會話.
- C. 建立行政 SSH 金鑰對。 將公鑰裝入每個 EC2 例項。 在一個公共子網中部署一個堡壘主機,為每個案例的行政管理提供隧道。
- D. 建立AWS站點對站點VPN連線. 指示管理員透過使用跨VPN隧道的SSH金鑰,使用本地的前提機直接連線到例項.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在每一個現有例項和新例項中附加適當的IAM角色. 使用 AWS Systems Manager 會話管理器建立遠端SSH會話。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用EC2序列控制檯直接存取每個例項的終端介面進行管理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立行政 SSH 金鑰對。 將公鑰裝入每個 EC2 例項。 在一個公共子網中部署一個堡壘主機,為每個案例的行政管理提供隧道。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立AWS站點對站點VPN連線. 指示管理員透過使用跨VPN隧道的SSH金鑰,使用本地的前提機直接連線到例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #38

**題目**
一家公司正在Amazon S3上託管一個靜態網站,並使用Amazon Route 53進行DNS. 該網站的需求正在世界各地增加。 該公司必須減少進入網站的使用者的延遲(latency)。 哪種解決辦法符合這些要求?

**選項**
- A. 將包含網站的S3 儲存桶(S3 bucket)複製到所有AWS區域. 新增 Route 53 地理定位路由記錄.
- B. AWS Global Accelerator中提供加速器. 將所提供的IP地址與S3 儲存桶(S3 bucket)聯絡起來。 編輯路由53條目以指向加速器的IP地址.
- C. 在S3 儲存桶(S3 bucket)前增加一個Amazon CloudFront分佈. 編輯 Route 53 記錄以指向 CloudFront Distribution.
- D. 在桶上啟用 S3 Transfer Acceleration。 編輯 route 53 條目以指向新的終點。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在S3 儲存桶(S3 bucket)前增加一個Amazon CloudFront分佈. 編輯 Route 53 記錄以指向 CloudFront Distribution。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將包含網站的S3 儲存桶(S3 bucket)複製到所有AWS區域. 新增 Route 53 地理定位路由記錄。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：AWS Global Accelerator中提供加速器. 將所提供的IP地址與S3 儲存桶(S3 bucket)聯絡起來。 編輯路由53條目以指向加速器的IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在桶上啟用 S3 Transfer Acceleration。 編輯 route 53 條目以指向新的終點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #39

**題目**
一家公司在其網站上設有可搜尋物品存放處。 資料儲存於Amazon RDS,用於包含1000多萬行的MySQL 資料庫(database)表. 資料庫(database)有2 TB的通用SSD儲存器. 每天透過公司網站對這些資料進行數百萬次更新. 該公司注意到一些插入操作需要10秒或更長的時間. 公司確定資料庫(database)儲存效能為問題. 哪種解決辦法可以解決這一業績問題?

**選項**
- A. 將儲存型別改為提供 IOPS SSD.
- B. 將 DB 例項改為記憶體最佳化例項類。
- C. 將 DB 例項改為可爆性效能例項類。
- D. 啟用多AZ RDS與 MySQL 原生同步複寫(replication) 的複製件讀取.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將儲存型別改為提供 IOPS SSD。**題目明確指出「資料庫儲存效能是問題」**，目前使用通用 SSD（gp2），每 GB 提供 3 IOPS，2TB 約 6,000 IOPS。換用 Provisioned IOPS SSD（io1/io2）可獨立設定高達 64,000 IOPS，直接解決 INSERT 操作慢的根本原因（I/O 瓶頸），是對症下藥的解法。
- 其餘選項比較：
- B：將 DB 例項改為記憶體最佳化例項類 。增加記憶體可以擴大 Buffer Pool 緩衝區，減少磁碟 I/O，但題目已確認問題在於**儲存效能（I/O）而非記憶體不足**。記憶體升級無法直接解決磁碟 IOPS 不足的問題，不是最直接的解法。
- C：將 DB 例項改為可爆性效能例項類 。可爆性效能執行個體（如 db.t 系列）的 CPU 和 I/O 效能均不如標準或記憶體最佳化執行個體，適合低流量場景，完全不適合高寫入量的生產資料庫。
- D：啟用多AZ RDS與 MySQL 原生同步複寫(replication) 的複製件讀取。多 AZ 部署是用於高可用性和容錯，讀取複本是用於分散讀取負載，兩者都無法解決主節點的**寫入（INSERT）儲存 I/O 效能**問題。

## Question #40

**題目**
一家公司擁有數千個邊緣裝置,每天共同生成1TB狀態警報. 每個警報大小約為2KB. 解決方案架構師需要實施一個解決方案來攝取並儲存提醒,供未來分析. 公司想要一個非常可用的解決方案. 然而,公司需要儘量減少成本,不想管理額外的基礎設施. 此外,該公司希望保留14天的資料,以便立即進行分析,並將任何超過14天的資料歸檔。 滿足這些要求的MOST業務效率解決方案是什麼?

**選項**
- A. 建立 Amazon Kinesis 資料 Firehose 傳送流, 以吞噬警報。 配置 Kinesis 資料 Firehose 流向 Amazon S3 桶傳送警報。 建立S3生命週期配置,在14天后向Amazon S3冰川過渡資料.
- B. 在兩個可用區(Availability Zones)上發射Amazon EC2個例,並將其置於一個彈性負載平衡器(Load Balancer)後,以吞噬警報. 在 EC2 例項上建立指令碼, 將提醒儲存在 Amazon S3 桶中。 建立S3生命週期配置,在14天后向Amazon S3冰川過渡資料.
- C. 建立 Amazon Kinesis 資料 Firehose 傳送流, 以吞噬警報。 配置 Kinesis 資料 Firehose 流向 Amazon OpenSearch Service(Amazon Elasticsearch Service) 叢集傳送警報. 設定 Amazon OpenSearch Service(Amazon Elasticsearch Service) 叢集,每天進行人工快照,並刪除超過14天的叢集資料.
- D. 建立一個 Amazon 簡單佇列服務( Amazon SQS) 標準佇列來接收提醒, 並將訊息保留期設定為 14 天。 配置消費者以瀏覽 SQS 佇列,檢查訊息的年齡,並根據需要分析訊息資料. 如果訊息已經14天了,消費者應當將訊息複製到一個Amazon S3桶,並刪除SQS佇列中的訊息.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon Kinesis 資料 Firehose 傳送流, 以吞噬警報。 配置 Kinesis 資料 Firehose 流向 Amazon S3 桶傳送警報。 建立S3生命週期配置,在14天后向Amazon S3冰川過渡資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在兩個可用區(Availability Zones)上發射Amazon EC2個例,並將其置於一個彈性負載平衡器(Load Balancer)後,以吞噬警報. 在 EC2 例項上建立指令碼, 將提醒儲存在 Amazon S3 桶中。 建立S3生命週期配置,在14天后向Amazon S3冰川過渡資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon Kinesis 資料 Firehose 傳送流, 以吞噬警報。 配置 Kinesis 資料 Firehose 流向 Amazon OpenSearch Service(Amazon Elasticsearch Service) 叢集傳送警報. 設定 Amazon OpenSearch Service(Amazon Elasticsearch Service) 叢集,每天進行人工快照,並刪除超過14天的叢集資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個 Amazon 簡單佇列服務( Amazon SQS) 標準佇列來接收提醒, 並將訊息保留期設定為 14 天。 配置消費者以瀏覽 SQS 佇列,檢查訊息的年齡,並根據需要分析訊息資料. 如果訊息已經14天了,消費者應當將訊息複製到一個Amazon S3桶,並刪除SQS佇列中的訊息。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #41

**題目**
一家公司的應用程式與多個軟體-as-service(SaaS)源整合,用於資料收集. 該公司執行Amazon EC2 執行個體,接收資料並將資料上傳到Amazon S3桶進行分析. 接收和上傳資料的同一EC2例項,在上傳完成後也會向使用者傳送通知. 公司注意到應用效能緩慢,希望儘可能提高效能. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立 Auto Scaling 群組(Auto Scaling group) , 以便 EC2 例項可以縮放。 配置 S3 事件通知, 當上傳到 S3 儲存桶(S3 bucket) 完成後, 將事件傳送到 Amazon 簡單通知服務( Amazon SNS)。
- B. 建立 Amazon AppFlow filow ,在每個SaaS源和S3 儲存桶(S3 bucket)之間傳輸資料. 配置 S3 事件通知, 當上傳到 S3 儲存桶(S3 bucket) 完成後, 將事件傳送到 Amazon 簡單通知服務( Amazon SNS)。
- C. 為每個SaaS源建立一條Amazon EventBridge(Amazon CloudWatch Events)規則,以傳送輸出資料. 配置S3 儲存桶(S3 bucket)作為規則的目標. 建立第二個事件Bridge(雲表事件)規則,以便在上傳到S3 儲存桶(S3 bucket)完成後傳送事件. 配置一個亞馬遜簡易通知服務(Amazon SNS)話題作為第二條規則的目標.
- D. 建立 Docker 容器, 而不是 EC2 例項。 Amazon彈性集裝箱服務公司(Amazon ECS)的集裝箱化應用程式。 配置 Amazon CloudWatch 容器透視器, 當上傳到 S3 儲存桶(S3 bucket) 完成時, 可將事件傳送到一個亞馬遜簡單通知服務(Amazon SNS) 主題.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立 Amazon AppFlow filow ,在每個SaaS源和S3 儲存桶(S3 bucket)之間傳輸資料. 配置 S3 事件通知, 當上傳到 S3 儲存桶(S3 bucket) 完成後, 將事件傳送到 Amazon 簡單通知服務( Amazon SNS) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Auto Scaling 群組(Auto Scaling group) , 以便 EC2 例項可以縮放。 配置 S3 事件通知, 當上傳到 S3 儲存桶(S3 bucket) 完成後, 將事件傳送到 Amazon 簡單通知服務( Amazon SNS) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為每個SaaS源建立一條Amazon EventBridge(Amazon CloudWatch Events)規則,以傳送輸出資料. 配置S3 儲存桶(S3 bucket)作為規則的目標. 建立第二個事件Bridge(雲表事件)規則,以便在上傳到S3 儲存桶(S3 bucket)完成後傳送事件. 配置一個亞馬遜簡易通知服務(Amazon SNS)話題作為第二條規則的目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Docker 容器, 而不是 EC2 例項。 Amazon彈性集裝箱服務公司(Amazon ECS)的集裝箱化應用程式。 配置 Amazon CloudWatch 容器透視器, 當上傳到 S3 儲存桶(S3 bucket) 完成時, 可將事件傳送到一個亞馬遜簡單通知服務(Amazon SNS) 主題。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #42

**題目**
一家公司在一個單一的VPC中執行著一個在Amazon EC2情況下可以大量使用的影象處理應用程式. EC2例項跨越多個可用區(Availability Zones)子網。 EC2例項互不溝通. 然而,EC2例項從Amazon S3下載影象,並透過單一的NAT閘道器將影象上傳到Amazon S3. 公司關注資料傳輸收費. 公司在避免區域資料傳輸收費方面有哪些成本效益高的方法?

**選項**
- A. 在每個可用區(Availability Zone)中啟動NAT閘道器.
- B. 將 NAT 閘道器替換為 NAT 例項。
- C. 為Amazon S3部署一個閘道器VPC 端點(VPC endpoint).
- D. 提供EC2專用主機來執行EC2例項.

**答案**
C


**詳解**
正確答案是 **C**。
- C：為Amazon S3部署一個閘道器VPC 端點(VPC endpoint)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在每個可用區(Availability Zone)中啟動NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將 NAT 閘道器替換為 NAT 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：提供EC2專用主機來執行EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #43

**題目**
一家公司有一個professions應用程式,生成大量時間敏感資料,備份至Amazon S3. 該應用程式已經增加,使用者對網際網路頻寬限制表示不滿。 一個解決方案架構師需要設計一個長期解決方案,既能及時備份到Amazon S3,又能對內部使用者的網際網路連線影響最小. 哪種解決辦法符合這些要求?

**選項**
- A. 透過一個VPC閘道器端點建立AWS VPN連線並代理所有流量.
- B. 建立新的AWS Direct Connect連線,並透過這個新的連線來引導備份(backup)的流量.
- C. 訂購每日AWS Snowball裝置. 將資料裝入雪球裝置,每天將裝置返回AWS.
- D. 透過 AWS 管理控制檯提交支援票。 要求從帳戶中刪除S3服務限制.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立新的AWS Direct Connect連線,並透過這個新的連線來引導備份(backup)的流量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過一個VPC閘道器端點建立AWS VPN連線並代理所有流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：訂購每日AWS Snowball裝置. 將資料裝入雪球裝置,每天將裝置返回AWS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過 AWS 管理控制檯提交支援票。 要求從帳戶中刪除S3服務限制。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #44

**題目**
一家公司有一個Amazon S3 儲存桶,包含關鍵資料. 公司必須保護資料不被意外刪除. 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 在S3 儲存桶(S3 bucket)上啟用版本.
- B. 在 S3 儲存桶(S3 bucket) 上啟用 MFA 刪除。
- C. 在S3 儲存桶(S3 bucket)上建立一個儲存桶政策(bucket policy).
- D. 在 S3 儲存桶(S3 bucket) 上啟用預設的 加密(encryption)。
- E. 為 S3 儲存桶(S3 bucket) 中的物件建立 生命週期政策(lifecycle policy)。

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：在S3 儲存桶(S3 bucket)上啟用版本。**S3 版本控制（Versioning）** 確保每次刪除物件只是新增一個「刪除標記」，舊版本仍然保留，可以復原誤刪的物件。這是防止意外刪除的基礎機制。
- B：在 S3 儲存桶(S3 bucket) 上啟用 MFA 刪除。**MFA Delete** 要求執行永久刪除版本或停用版本控制的操作時，必須提供 MFA 驗證碼，防止未授權或意外的永久性刪除，進一步加固保護。MFA Delete 必須在啟用版本控制後才能開啟。
- 其餘選項比較：
- C：在S3 儲存桶(S3 bucket)上建立一個儲存桶政策(bucket policy)。儲存桶政策可以限制刪除操作，但不能防止具有足夠 IAM 權限的使用者刪除物件，不是最直接的保護機制。
- D：在 S3 儲存桶(S3 bucket) 上啟用預設的 加密(encryption)。**加密保護的是資料機密性，而非防止刪除**，啟用加密無法阻止授權使用者刪除物件，不符合本題防意外刪除的需求。
- E：為 S3 儲存桶(S3 bucket) 中的物件建立 生命週期政策(lifecycle policy) 。生命週期政策用於自動化儲存類別轉換或定期刪除，反而可能自動刪除物件，與防止刪除的目標相悖。

## Question #45

**題目**
• AWS Lambda處理資料和記錄後設資料的功能 公司觀察到,由於網路連通性問題,攝入工作俘虜偶爾會失敗. 當這樣的失敗發生時,Lambda函式不會攝入相應的資料,除非公司手動重執行該工作. 一個解決方案設計師應該採取哪一種綜合行動來確保Lambda功能在未來吸收所有資料?(選二.

**選項**
- A. 在多個可用區(Availability Zones)中部署Lambda函式.
- B. 建立一個亞馬遜簡易佇列服務佇列(Amazon SQS),並訂閱到SNS主題.
- C. 增加分配給Lambda函式的CPU和記憶體.
- D. 增加為Lambda函式提供的吞吐量(throughput)。
- E. 修改 Lambda 函式以從 Amazon 簡單佇列服務( Amazon SQS) 佇列讀取。

**答案**
B,E



**詳解**
正確答案是 **B, E**。
- B：建立一個亞馬遜簡易佇列服務佇列(Amazon SQS),並訂閱到SNS主題。此選項符合題目條件，能有效滿足核心需求。
- E：修改 Lambda 函式以從 Amazon 簡單佇列服務( Amazon SQS) 佇列讀取 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在多個可用區(Availability Zones)中部署Lambda函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：增加分配給Lambda函式的CPU和記憶體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：增加為Lambda函式提供的吞吐量(throughput)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #46

**題目**
一家公司有一個為商店提供營銷服務的應用程式. 這些服務是根據商店顧客以前購買的。 儲存透過SFTP向公司上傳交易資料,對資料進行處理和分析,生成新的營銷報價. 一些檔案的大小可以超過200GB. 最近,該公司發現,一些商店上傳了包含個人可識別資訊(PII)的檔案,這些檔案本不該包含在內. 公司希望如果PII再次被共享,管理員會被提醒. 公司也希望實現修復自動化. 解決方案設計師應如何透過 " LEAST " 開發努力滿足這些要求?

**選項**
- A. 使用Amazon S3桶作為安全轉移點. 使用亞馬遜巡視器掃描桶內的物品. 如果物件包含PII,則觸發一個S3 生命週期政策(Lifecycle policy)來移除包含PII的物件.
- B. 使用Amazon S3桶作為安全轉移點. 使用Amazon Macie掃描桶內的物體. 如果物件包含PII,則使用亞馬遜簡易通知服務(Amazon SNS)觸發一個通知給管理員以刪除包含PII的物件.
- C. 在 AWS Lambda 函式中執行自定義掃描演算法. 將物件裝入桶時觸發函式。 如果物件包含PII,則使用亞馬遜簡易通知服務(Amazon SNS)觸發一個通知給管理員以刪除包含PII的物件.
- D. 在 AWS Lambda 函式中執行自定義掃描演算法. 將物件裝入桶時觸發函式。 如果物件包含PII,則使用Amazon Simple Email Service(Amazon SES)觸發向管理員的通知,並觸發S3 生命週期政策(Lifecycle policy),以移除包含PII的肉類.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon S3桶作為安全轉移點. 使用Amazon Macie掃描桶內的物體. 如果物件包含PII,則使用亞馬遜簡易通知服務(Amazon SNS)觸發一個通知給管理員以刪除包含PII的物件。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon S3桶作為安全轉移點. 使用亞馬遜巡視器掃描桶內的物品. 如果物件包含PII,則觸發一個S3 生命週期政策(Lifecycle policy)來移除包含PII的物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 AWS Lambda 函式中執行自定義掃描演算法. 將物件裝入桶時觸發函式。 如果物件包含PII,則使用亞馬遜簡易通知服務(Amazon SNS)觸發一個通知給管理員以刪除包含PII的物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 AWS Lambda 函式中執行自定義掃描演算法. 將物件裝入桶時觸發函式。 如果物件包含PII,則使用Amazon Simple Email Service(Amazon SES)觸發向管理員的通知,並觸發S3 生命週期政策(Lifecycle policy),以移除包含PII的肉類。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #47

**題目**
一個公司需要保證Amazon EC2在3個特定的可用區(Availability Zones)中的容量,在一個特定的AWS 區域(Region)中,用於一個持續一週的即將到來的活動. 公司應如何保證EC2能力?

**選項**
- A. 規定需要的區域(Region)採購儲備例項。
- B. 建立一個規定需要的區域(Region)的即時能力保留。
- C. 規定需要區域(Region)和3個可用區(Availability Zones)的採購儲備例項。
- D. 建立一個即時能力保留,具體說明需要的區域(Region)和3個可用區(Availability Zones)。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立一個即時能力保留,具體說明需要的區域(Region)和3個可用區(Availability Zones)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：規定需要的區域(Region)採購儲備例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個規定需要的區域(Region)的即時能力保留。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：規定需要區域(Region)和3個可用區(Availability Zones)的採購儲備例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #48

**題目**
一家公司的網站使用Amazon EC2例項商店作為專案目錄. 公司希望確保目錄高度可用,並將目錄存放在一個耐久的地方. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 將目錄移到 Amazon ElastiCache 用於 Redis.
- B. 部署一個更大的EC2 執行個體 和更大的案例商店。
- C. 將目錄從例項商店移至亞馬遜S3 Glacier Deep Archive.
- D. 將目錄移至亞馬遜彈性檔案系統(Amazon EFS)檔案系統.

**答案**
D


**詳解**
正確答案是 **D**。
- D：將目錄移至亞馬遜彈性檔案系統(Amazon EFS)檔案系統。**Amazon EFS（Elastic File System）是完全受管的 NFS 共享檔案系統**，資料自動跨多個 AZ 複寫，提供高可用性和高耐久性（11 個 9）。多個 EC2 執行個體可同時掛載同一個 EFS，滿足「高度可用且耐久的儲存」需求。
- 其餘選項比較：
- A：將目錄移到 Amazon ElastiCache 用於 Redis。**ElastiCache 是記憶體內（In-Memory）快取服務，資料不具持久性**。當執行個體重啟或故障時資料會遺失，完全不符合「耐久（durable）」的需求，不適合儲存需要持久保存的目錄資料。
- B：部署一個更大的EC2 執行個體 和更大的案例商店。EC2 執行個體存放區（Instance Store）是臨時性儲存，當執行個體停止或終止時資料會永久遺失，沒有高可用性，且更大的執行個體增加成本，不解決根本問題。
- C：將目錄從例項商店移至亞馬遜S3 Glacier Deep Archive。Glacier Deep Archive 是長期冷儲存，取回時間需要 12 小時，完全不適合需要即時存取的網站目錄資料。

## Question #49

**題目**
某公司商店每月呼叫筆錄檔案. 使用者在呼叫後1年內隨機存取檔案,但使用者在1年後很少存取檔案. 公司希望透過讓使用者能夠儘快查詢和檢索不到1年的檔案來最佳化其解決方案. 延遲檢索舊檔案是可以接受的。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在Amazon S3 Glacier Instant Retrieval中儲存帶有標記的個人檔案. 查詢標籤從 S3 Glacier Instant Retrieval 檢索檔案。
- B. 在亞馬遜S3 Intelligent-Tiering儲存個人檔案. 使用 S3 壽命週期政策在一年後將檔案移動到 S3 Glacier Flexible Retrieval。 透過使用Amazon Athena查詢並檢索Amazon S3中的檔案. 透過使用 S3 冰川選擇來查詢和檢索 S3 冰川中的檔案.
- C. 在Amazon S3標準儲存中儲存帶有標籤的單個檔案. 在Amazon S3標準儲存中儲存每個歸檔的搜尋後設資料. 使用 S3 壽命週期政策在一年後將檔案移動到 S3 Glacier Instant Retrieval。 透過搜尋Amazon S3的後設資料查詢並檢索檔案.
- D. 在Amazon S3標準儲存中儲存個人檔案. 使用 S3 壽命週期政策將檔案移動到一年後的 S3 Glacier Deep Archive。 在Amazon RDS中儲存搜尋後設資料. 查詢來自Amazon RDS的檔案. 從S3 Glacier Deep Archive檢索檔案.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在Amazon S3標準儲存中儲存帶有標籤的單個檔案. 在Amazon S3標準儲存中儲存每個歸檔的搜尋後設資料. 使用 S3 壽命週期政策在一年後將檔案移動到 S3 Glacier Instant Retrieval。 透過搜尋Amazon S3的後設資料查詢並檢索檔案。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Amazon S3 Glacier Instant Retrieval中儲存帶有標記的個人檔案. 查詢標籤從 S3 Glacier Instant Retrieval 檢索檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在亞馬遜S3 Intelligent-Tiering儲存個人檔案. 使用 S3 壽命週期政策在一年後將檔案移動到 S3 Glacier Flexible Retrieval。 透過使用Amazon Athena查詢並檢索Amazon S3中的檔案. 透過使用 S3 冰川選擇來查詢和檢索 S3 冰川中的檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon S3標準儲存中儲存個人檔案. 使用 S3 壽命週期政策將檔案移動到一年後的 S3 Glacier Deep Archive。 在Amazon RDS中儲存搜尋後設資料. 查詢來自Amazon RDS的檔案. 從S3 Glacier Deep Archive檢索檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #50

**題目**
一家公司的生產工作量為1,000個Amazon EC2 Linux例。 工作量由第三方軟體提供。 公司需要儘快在所有EC2上補齊第三方軟體,以補救嚴重的安全脆弱性. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立 AWS Lambda 函式,將補丁應用到所有 EC2 例項中。
- B. 配置 AWS Systems Manager 補丁管理器將補丁應用到所有 EC2 例項中。
- C. 計劃一個 AWS Systems Manager 維護視窗,將補丁應用到所有 EC2 例項。
- D. 使用 AWS Systems Manager 執行命令執行自定義命令,將補丁應用於所有EC2例項.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用 AWS Systems Manager 執行命令執行自定義命令,將補丁應用於所有EC2例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 AWS Lambda 函式,將補丁應用到所有 EC2 例項中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 AWS Systems Manager 補丁管理器將補丁應用到所有 EC2 例項中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：計劃一個 AWS Systems Manager 維護視窗,將補丁應用到所有 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #51

**題目**
一家公司正在開發一個應用程式,提供訂單運輸統計資料供REST API檢索。 公司希望提取航運統計資料,將資料組織成易於閱讀的HTML格式,每天早上將報告同時傳送到多個電子郵件地址. 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 配置將資料傳送到 Amazon Kinesis Data Firehose 的應用程式。
- B. 使用Amazon Simple電子郵件服務(Amazon SES)格式化資料並透過電子郵件傳送報告.
- C. 建立 Amazon EventBridge(Amazon CloudWatch Events) 計劃事件,以引用 AWS Glue 任務查詢應用程式的API的資料.
- D. 建立 Amazon EventBridge(Amazon CloudWatch Events) 計劃事件,以引用 AWS Lambda 函式查詢應用程式的API資料.
- E. 在Amazon S3中儲存應用程式資料. 建立一個亞馬遜簡易通知服務(Amazon SNS),作為S3事件目的地,透過電子郵件傳送報告.

**答案**
D,B



**詳解**
正確答案是 **D, B**。
- D：建立 Amazon EventBridge(Amazon CloudWatch Events) 計劃事件,以引用 AWS Lambda 函式查詢應用程式的API資料。**Amazon EventBridge 排程事件** 可每天早上在固定時間觸發 Lambda 函式，Lambda 查詢 REST API 取得航運統計資料，並組織成 HTML 格式，完全符合「每天早上排程執行」的需求。
- B：使用Amazon Simple電子郵件服務(Amazon SES)格式化資料並透過電子郵件傳送報告。**Amazon SES（Simple Email Service）支援發送 HTML 格式的電子郵件**，可以同時發送給多個電子郵件地址，完全符合題目「組織成易於閱讀的 HTML 格式，傳送到多個電子郵件地址」的需求。
- 其餘選項比較：
- A：配置將資料傳送到 Amazon Kinesis Data Firehose 的應用程式 。Kinesis Data Firehose 是資料串流傳輸服務（傳到 S3/Redshift/OpenSearch），與每日電子郵件報告需求完全無關。
- C：建立 Amazon EventBridge(Amazon CloudWatch Events) 計劃事件,以引用 AWS Glue 任務查詢應用程式的API的資料。AWS Glue 是 ETL 服務，不是 REST API 查詢工具，且 Glue 任務的啟動時間較長，不適合用於查詢應用程式 API 並發送即時報告。
- E：在Amazon S3中儲存應用程式資料. 建立一個亞馬遜簡易通知服務(Amazon SNS),作為S3事件目的地,透過電子郵件傳送報告。**Amazon SNS 電子郵件訂閱只能發送純文字訊息**，無法發送 HTML 格式的郵件，不符合題目「易於閱讀的 HTML 格式」的需求。

## Question #52

**題目**
一家公司想將它的前提應用程式遷移到AWS. 應用程式生成輸出檔案,大小從數十千兆位元組到數百兆位元組不等. 應用程式資料必須儲存在標準檔案系統結構中. 公司想要一個自動縮放的解決方案. 高可用性,需要最低限度的營運開銷(operational overhead)。 哪種解決辦法能滿足這些要求?

**選項**
- A. 在亞馬遜彈性容器服務(Amazon ECS)上將作為集裝箱執行的應用程式遷移。 使用Amazon S3進行儲存.
- B. 在Amazon Elastic Kubernetes Service(Amazon EKS)上將應用程式遷移到作為容器執行. 使用Amazon彈性塊儲存器(Amazon EBS)進行儲存.
- C. 在多AZ Auto Scaling 群組(Auto Scaling group)中將應用程式遷移到Amazon EC2。 使用Amazon彈性檔案系統(Amazon EFS)進行儲存.
- D. 在多AZ Auto Scaling 群組(Auto Scaling group)中將應用程式遷移到Amazon EC2。 使用Amazon彈性塊儲存器(Amazon EBS)進行儲存.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在多AZ Auto Scaling 群組(Auto Scaling group)中將應用程式遷移到Amazon EC2。 使用Amazon彈性檔案系統(Amazon EFS)進行儲存。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在亞馬遜彈性容器服務(Amazon ECS)上將作為集裝箱執行的應用程式遷移。 使用Amazon S3進行儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在Amazon Elastic Kubernetes Service(Amazon EKS)上將應用程式遷移到作為容器執行. 使用Amazon彈性塊儲存器(Amazon EBS)進行儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在多AZ Auto Scaling 群組(Auto Scaling group)中將應用程式遷移到Amazon EC2。 使用Amazon彈性塊儲存器(Amazon EBS)進行儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #53

**題目**
公司需要將其會計記錄儲存在Amazon S3. 記錄必須可立即查閱1年,然後再歸檔9年。 公司任何人,包括行政使用者和根使用者,都不能在整個十年內刪除記錄. 記錄必須保持最大限度的彈性。 哪種解決辦法能滿足這些要求?

**選項**
- A. 將記錄儲存在S3冰川中 整個十年 使用 存取控制(access control) 政策拒絕刪除記錄10年.
- B. 透過使用S3 Intelligent-Tiering儲存記錄. 使用 IAM 政策(IAM policy) 拒絕刪除記錄。 10年後,修改IAM 政策(IAM policy)允許刪除.
- C. 使用一款S3 生命週期政策(Lifecycle policy)在1年後將記錄從S3 Standard轉換為S3 Glacier Deep Archive. 在合規(compliance)模式中使用S3 Object Lock,為期10年.
- D. 使用一個S3 生命週期政策(Lifecycle policy)在1年後將記錄從S3 Standard轉換為S3 One Zone-In頻繁存取(S3 One Zone-IA). 在治理模式中使用S3 Object Lock,為期10年.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用一款S3 生命週期政策(Lifecycle policy)在1年後將記錄從S3 Standard轉換為S3 Glacier Deep Archive. 在合規(compliance)模式中使用S3 Object Lock,為期10年。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將記錄儲存在S3冰川中 整個十年 使用 存取控制(access control) 政策拒絕刪除記錄10年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：透過使用S3 Intelligent-Tiering儲存記錄. 使用 IAM 政策(IAM policy) 拒絕刪除記錄。 10年後,修改IAM 政策(IAM policy)允許刪除。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用一個S3 生命週期政策(Lifecycle policy)在1年後將記錄從S3 Standard轉換為S3 One Zone-In頻繁存取(S3 One Zone-IA). 在治理模式中使用S3 Object Lock,為期10年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #54

**題目**
一個公司在AWS上執行多個Windows工作量. 公司員工使用兩家Amazon EC2情況下託管的Windows檔案股份. 檔案共享它們之間同步資料並維護重複副本. 公司希望有一個高度可用且持久的儲存解決方案,以保留使用者目前如何存取檔案. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 將所有資料遷移到Amazon S3. 設定IAM認證供使用者存取檔案.
- B. 建立Amazon S3檔案閘道器. 在現有的 EC2 例項上掛載 S3 檔案閘道器。
- C. 用多AZ配置的Windows檔案伺服器將檔案共享環境擴充套件至Amazon FSx. 將所有資料遷移到 FSx 用於 Windows 檔案伺服器。
- D. 將檔案共享環境擴充套件至亞馬遜彈性檔案系統(Amazon EFS),並帶有多AZ配置. 將所有資料遷移到Amazon EFS.

**答案**
C


**詳解**
正確答案是 **C**。
- C：用多AZ配置的Windows檔案伺服器將檔案共享環境擴充套件至Amazon FSx. 將所有資料遷移到 FSx 用於 Windows 檔案伺服器 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將所有資料遷移到Amazon S3. 設定IAM認證供使用者存取檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立Amazon S3檔案閘道器. 在現有的 EC2 例項上掛載 S3 檔案閘道器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將檔案共享環境擴充套件至亞馬遜彈性檔案系統(Amazon EFS),並帶有多AZ配置. 將所有資料遷移到Amazon EFS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #55

**題目**
一個解決方案架構師正在開發一個包含多個子網的VPC架構. 該架構將託管使用 Amazon EC2 例和 Amazon RDS DB 例的應用程式. 該架構由兩個可用區(Availability Zones)中的6個子網組成. 每個可用區(Availability Zone)包括一個公共子網,一個私人子網,和一個資料庫專用子網. 只有使用私人子網的EC2例項才能存取RDS資料庫。 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個新的路由表,將路由排除到公共子網的CIDR塊. 將路由表與資料庫(database)子網聯絡起來.
- B. 建立一個安全群組(security group),拒絕安全群組(security group)的入境流量,該流量被分配到公共子網中的例項. 在 DB 例項中附加 安全群組(security group)。
- C. 建立一個安全群組(security group),允許從安全群組(security group)的入境流量被分配到私人子網中的例項. 在 DB 例項中附加 安全群組(security group)。
- D. 在公共子網和私人子網之間建立新的對等連線. 在私有子網和資料庫(database)子網之間建立不同的對等連線.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個安全群組(security group),允許從安全群組(security group)的入境流量被分配到私人子網中的例項. 在 DB 例項中附加 安全群組(security group) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個新的路由表,將路由排除到公共子網的CIDR塊. 將路由表與資料庫(database)子網聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個安全群組(security group),拒絕安全群組(security group)的入境流量,該流量被分配到公共子網中的例項. 在 DB 例項中附加 安全群組(security group) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在公共子網和私人子網之間建立新的對等連線. 在私有子網和資料庫(database)子網之間建立不同的對等連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #56

**題目**
一家公司在Amazon Route 53註冊了它的域名. 該公司在ca-central-1 區域(Region)中使用Amazon API Gateway作為後端微服務API的公共介面. 第三方服務安全地消耗API。 公司希望用公司的域名和相應的憑證設計其API Gateway URL,這樣第三方服務就可以使用HTTPS. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在 API 閘道器中建立具有" Endpoint- URL" 和" company domain Name" 的階段變數,以覆蓋預設的 URL。 將與公司域名相關的公憑證匯入AWS Certificate Manager(ACM).
- B. 以公司域名建立路由53DNS記錄. 將別名記錄指向區域API Gateway 階段終點. 將公司域名相關的公憑證匯入AWS Certificate Manager(ACM)於我們-東-1 區域(Region).
- C. 建立區域 API 閘道器終點。 將API閘道器端點與公司的域名聯絡起來. 在同一區域(Region)中將與公司域名相關的公憑證匯入AWS Certificate Manager(ACM). 將憑證附加到 API 閘道器終點。 配置到 API Gateway 端點的線路流量。
- D. 建立區域 API 閘道器終點。 將API閘道器端點與公司的域名聯絡起來. 將公司域名相關的公憑證匯入AWS Certificate Manager(ACM)於我們-東-1 區域(Region). 將憑證附加到 API 閘道器 API。 以公司域名建立路由53DNS記錄. 將A記錄指向公司的域名.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立區域 API 閘道器終點。 將API閘道器端點與公司的域名聯絡起來. 在同一區域(Region)中將與公司域名相關的公憑證匯入AWS Certificate Manager(ACM). 將憑證附加到 API 閘道器終點。 配置到 API Gateway 端點的線路流量。**AWS API Gateway Regional 端點的自訂網域名稱，ACM 憑證必須在與 API Gateway 相同的區域（ca-central-1）申請或匯入**，這是 Regional API Gateway 的核心要求。配置 Route 53 別名記錄指向 API Gateway 端點後，第三方即可用公司域名透過 HTTPS 呼叫 API。
- 其餘選項比較：
- A：在 API 閘道器中建立具有" Endpoint- URL" 和" company domain Name" 的階段變數,以覆蓋預設的 URL。 將與公司域名相關的公憑證匯入AWS Certificate Manager(ACM)。API Gateway 階段變數無法覆蓋端點 URL 使其使用自訂域名，這不是設定自訂網域的正確方式，且此方案未提及在哪個區域申請憑證。
- B：以公司域名建立路由53DNS記錄. 將別名記錄指向區域API Gateway 階段終點. 將公司域名相關的公憑證匯入AWS Certificate Manager(ACM)於我們-東-1 區域(Region)。**Regional API Gateway 不能使用 us-east-1 的 ACM 憑證**，us-east-1 的憑證只用於 CloudFront 和邊緣優化（Edge-Optimized）API Gateway，此方案會導致憑證配置失敗。
- D：建立區域 API 閘道器終點。 將API閘道器端點與公司的域名聯絡起來. 將公司域名相關的公憑證匯入AWS Certificate Manager(ACM)於我們-東-1 區域(Region). 將憑證附加到 API 閘道器 API。 以公司域名建立路由53DNS記錄. 將A記錄指向公司的域名。同樣的錯誤：**Regional API Gateway 在 ca-central-1，但 ACM 憑證卻放在 us-east-1**，兩個區域不一致，無法將 us-east-1 的憑證附加到 ca-central-1 的 Regional API Gateway。

## Question #57

**題目**
一家公司正在經營一個受歡迎的社交媒體網站. 網站賦予使用者上傳影象與其他使用者共享的能力. 公司希望確保影象不包含不適當的內容. 公司需要一個解決方案,最大限度地減少開發努力. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用 Amazon Comprehend 來檢測不適當的內容。 利用人類評論進行低信心預測.
- B. 使用Amazon Rekcognition來檢測不適當的內容. 利用人類評論進行低信心預測.
- C. 使用Amazon SageMaker來檢測不適當的內容. 用地面真理來標註低自信的預測.
- D. 使用AWS Fargate來部署自定義機器學習模型來檢測不適當的內容. 用地面真理來標註低自信的預測.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon Rekcognition來檢測不適當的內容. 利用人類評論進行低信心預測。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon Comprehend 來檢測不適當的內容。 利用人類評論進行低信心預測。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon SageMaker來檢測不適當的內容. 用地面真理來標註低自信的預測。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Fargate來部署自定義機器學習模型來檢測不適當的內容. 用地面真理來標註低自信的預測。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #58

**題目**
一家公司希望在集裝箱中執行其關鍵應用,以滿足可擴展性(scalability)的要求和可用性. 公司更傾向於專注於關鍵應用的維護. 該公司不想負責提供和管理管理集裝箱化工作量的基本基礎設施。 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用 Amazon EC2 例,並在例上安裝 Docker。
- B. 在Amazon EC2工人節點上使用亞馬遜彈性容器服務(Amazon ECS).
- C. 在AWS Fargate上使用亞馬遜彈性容器服務(Amazon ECS).
- D. 使用亞馬遜彈性容器服務(Amazon ECS)最佳化的亞馬遜機器影象(AMI)的Amazon EC2 執行個體。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在AWS Fargate上使用亞馬遜彈性容器服務(Amazon ECS)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon EC2 例,並在例上安裝 Docker 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在Amazon EC2工人節點上使用亞馬遜彈性容器服務(Amazon ECS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用亞馬遜彈性容器服務(Amazon ECS)最佳化的亞馬遜機器影象(AMI)的Amazon EC2 執行個體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #59

**題目**
一家公司託管超過300個全球網站和應用程式. 該公司需要有一個平臺來分析每天超過30 TB的點選流資料. 一個解決方案架構師應該做什麼來傳輸和處理點選流資料?

**選項**
- A. 設計一個AWS資料管道,將資料歸檔到一個Amazon S3桶,並執行一個Amazon EMR叢集,與資料一起生成分析資料.
- B. 建立 Amazon EC2 的 Auto Scaling 群組(Auto Scaling group) 例,處理資料並將其傳送給 Amazon S3 資料湖(data lake) 用於 Amazon Redshift 用於分析.
- C. 將資料儲存到 Amazon CloudFront。 在Amazon S3桶中儲存資料. 當一個天體被新增到S3 儲存桶(S3 bucket)中時. 執行一個 AWS Lambda 函式處理資料進行分析。
- D. 從Amazon Kinesis資料流中收集資料. 使用Amazon Kinesis Data Firehose將資料傳輸到一個Amazon S3 資料湖(data lake). 裝入Amazon Redshift中的資料進行分析.

**答案**
D


**詳解**
正確答案是 **D**。
- D：從Amazon Kinesis資料流中收集資料. 使用Amazon Kinesis Data Firehose將資料傳輸到一個Amazon S3 資料湖(data lake). 裝入Amazon Redshift中的資料進行分析。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：設計一個AWS資料管道,將資料歸檔到一個Amazon S3桶,並執行一個Amazon EMR叢集,與資料一起生成分析資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon EC2 的 Auto Scaling 群組(Auto Scaling group) 例,處理資料並將其傳送給 Amazon S3 資料湖(data lake) 用於 Amazon Redshift 用於分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料儲存到 Amazon CloudFront。 在Amazon S3桶中儲存資料. 當一個天體被新增到S3 儲存桶(S3 bucket)中時. 執行一個 AWS Lambda 函式處理資料進行分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #60

**題目**
一家公司在AWS上設有一個網站。 該網站位於一個應用程式負載平衡器(Application Load Balancer)(ALB)的背後,它被配置來分別處理HTTP和HTTPS. 公司希望將所有請求轉至網站,以便這些請求使用HTTPS. 解決方案設計師應如何滿足這一要求?

**選項**
- A. 更新ALB的網路 ACL(network ACL),只接受HTTPS流量.
- B. 建立一條規則,以 HTTPS 取代 URL 中的 HTTP。
- C. 在 ALB 上建立一個聽眾規則,將 HTTP 流量重定向到 HTTPS。
- D. 將 ALB 替換為 網路負載平衡器(Network Load Balancer) , 配置為使用 Server 名稱標識(SNI)。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 ALB 上建立一個聽眾規則,將 HTTP 流量重定向到 HTTPS 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：更新ALB的網路 ACL(network ACL),只接受HTTPS流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一條規則,以 HTTPS 取代 URL 中的 HTTP 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 ALB 替換為 網路負載平衡器(Network Load Balancer) , 配置為使用 Server 名稱標識(SNI) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #61

**題目**
一家公司正在開發關於AWS的兩級網路應用程式。 公司的開發者已在Amazon EC2例項上部署應用程式,直接連線到後端的Amazon RDS 資料庫(database). 公司不得在應用程式中硬碼資料庫(database)憑證. 公司還必須實施一個解決方案,定期自動輪換資料庫(database)憑證. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在例項後設資料中儲存 資料庫(database) 憑證。 使用 Amazon EventBridge(Amazon CloudWatch Events) 規則執行一個預定的 AWS Lambda 函式,同時更新 RDS 憑證和例項後設資料.
- B. 在加密的Amazon S3桶中將資料庫(database)憑證儲存在配置檔案中. 使用Amazon EventBridge(Amazon CloudWatch Events)規則執行一個預定的AWS Lambda功能,同時更新配置檔案中的RDS憑證和憑證. 使用 S3 版本來保證返回到先前的值的能力.
- C. 將資料庫(database)憑證作為秘密存放在AWS Secrets Manager. 開啟自動輪換的密碼。 將必要的許可附加到EC2角色上,以允許存取該秘密.
- D. 將資料庫(database)憑證作為加密引數儲存在AWS Systems Manager引數儲存器中. 開啟加密引數的自動輪換。 將所需的許可權附加到 EC2 角色,以授予加密引數的存取許可權.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將資料庫(database)憑證作為秘密存放在AWS Secrets Manager. 開啟自動輪換的密碼。 將必要的許可附加到EC2角色上,以允許存取該秘密。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在例項後設資料中儲存 資料庫(database) 憑證。 使用 Amazon EventBridge(Amazon CloudWatch Events) 規則執行一個預定的 AWS Lambda 函式,同時更新 RDS 憑證和例項後設資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在加密的Amazon S3桶中將資料庫(database)憑證儲存在配置檔案中. 使用Amazon EventBridge(Amazon CloudWatch Events)規則執行一個預定的AWS Lambda功能,同時更新配置檔案中的RDS憑證和憑證. 使用 S3 版本來保證返回到先前的值的能力。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料庫(database)憑證作為加密引數儲存在AWS Systems Manager引數儲存器中. 開啟加密引數的自動輪換。 將所需的許可權附加到 EC2 角色,以授予加密引數的存取許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #62

**題目**
一個公司正在向AWS部署一個新的公共網路應用程式。 該應用程式將執行在應用程式負載平衡器(Application Load Balancer)(ALB)之後. 應用程式需要在邊緣加密由外部憑證管理機構(CA)簽發的SSL/TLS憑證. 憑證必須在憑證到期前每年輪換一次. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用AWS Certificate Manager(ACM)來頒發SSL/TLS憑證. 將憑證應用到 ALB。 使用管理下的更新特性自動輪換憑證。
- B. 使用AWS Certificate Manager(ACM)來頒發SSL/TLS憑證. 從憑證中匯入關鍵材料。 將憑證應用到 ALUS 管理更新功能中,以自動輪換憑證。
- C. 使用 AWS Certificate Manager(ACM) 私人憑證管理局從根 CA 簽發 SSL/ TLS 憑證. 將憑證應用到 ALB。 使用管理下的更新特性自動輪換憑證。
- D. 使用AWS Certificate Manager(ACM)匯入SSL/TLS憑證. 將憑證應用到 ALB。 使用 Amazon EventBridge(Amazon CloudWatch Events) 在憑證即將過期時傳送通知. 手動輪換憑證。

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用AWS Certificate Manager(ACM)匯入SSL/TLS憑證. 將憑證應用到 ALB。 使用 Amazon EventBridge(Amazon CloudWatch Events) 在憑證即將過期時傳送通知. 手動輪換憑證 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS Certificate Manager(ACM)來頒發SSL/TLS憑證. 將憑證應用到 ALB。 使用管理下的更新特性自動輪換憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用AWS Certificate Manager(ACM)來頒發SSL/TLS憑證. 從憑證中匯入關鍵材料。 將憑證應用到 ALUS 管理更新功能中,以自動輪換憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Certificate Manager(ACM) 私人憑證管理局從根 CA 簽發 SSL/ TLS 憑證. 將憑證應用到 ALB。 使用管理下的更新特性自動輪換憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #63

**題目**
一家公司在AWS上執行其基礎設施,其檔案管理應用程式的註冊使用者數量為70萬. 公司打算建立一個將大型的.pdf檔案轉換成.jpg影象檔案的產品. .pdf檔案的大小平均為5 MB. 公司需要儲存原始檔案和轉換後的檔案. 解決方案設計師必須設計一種可伸縮的解決方案,以適應隨著時間推移而迅速增長的需求. 哪種解決辦法符合這些要求?

**選項**
- A. 將.pdf檔案儲存到 Amazon S3. 配置 S3 PUT 事件以引用 AWS Lambda 函式將檔案轉換為 .jpg 格式,並將其儲存在 Amazon S3 中.
- B. 將 .pdf 檔案儲存到 Amazon DynamoD 使用 DynamoDB Streams 特性引用 AWS Lambda 函式將檔案轉換為 .jpg 格式並將其儲存回 DynamoDB.
- C. 將 .pdf 檔案上傳到一個AWS Elastic Beanstalk 應用程式,包括 Amazon EC2 例, Amazon Elastic Block Store(Amazon EBS) 儲存, 和一個 Auto Scaling 群組(Auto Scaling group). 使用 EC2 例項中的程式將檔案轉換為 .jpg 格式。 在EBS商店中儲存.pdf檔案和.jpg檔案.
- D. 將.pdf檔案上傳到一個包括Amazon EC2例項的AWS Elastic Beanstalk應用程式,Amazon Elastic檔案系統(Amazon EFS)儲存,以及一個Auto Scaling 群組(Auto Scaling group). 使用EC2例項中的程式將檔案轉換為.jpg格式. 在EBS商店中儲存.pdf檔案和.jpg檔案.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將.pdf檔案儲存到 Amazon S3. 配置 S3 PUT 事件以引用 AWS Lambda 函式將檔案轉換為 .jpg 格式,並將其儲存在 Amazon S3 中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將 .pdf 檔案儲存到 Amazon DynamoD 使用 DynamoDB Streams 特性引用 AWS Lambda 函式將檔案轉換為 .jpg 格式並將其儲存回 DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 .pdf 檔案上傳到一個AWS Elastic Beanstalk 應用程式,包括 Amazon EC2 例, Amazon Elastic Block Store(Amazon EBS) 儲存, 和一個 Auto Scaling 群組(Auto Scaling group). 使用 EC2 例項中的程式將檔案轉換為 .jpg 格式。 在EBS商店中儲存.pdf檔案和.jpg檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將.pdf檔案上傳到一個包括Amazon EC2例項的AWS Elastic Beanstalk應用程式,Amazon Elastic檔案系統(Amazon EFS)儲存,以及一個Auto Scaling 群組(Auto Scaling group). 使用EC2例項中的程式將檔案轉換為.jpg格式. 在EBS商店中儲存.pdf檔案和.jpg檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #64

**題目**
一家公司在Windows檔案伺服器上有超過5TB的檔案資料,執行於房地. 使用者和應用程式每天與資料互動. 公司將Windows的工作量轉移到AWS. 隨著公司繼續這一程序,公司要求進入AWS和至少使用延遲(latency)的房地內檔案儲存. 公司需要一個解決方案,將營運開銷(operational overhead)最小化,不需要對現有檔案存取模式進行重大修改. 公司使用AWS站點對站點VPN連線連線AWS. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 在 AWS 上為 Windows 檔案伺服器部署和配置 Amazon FSx。 將預設檔案資料移動到FSx,用於Windows檔案伺服器. 重新配置工作量, 在 AWS 上為 Windows 檔案伺服器使用 FSx。
- B. 在本地端部署和配置一個Amazon S3檔案閘道器。 將預設檔案資料移動到 S3 檔案閘道器。 重新配置現場工作量和雲量工作量,使用S3檔案閘道器.
- C. 在本地端部署和配置一個Amazon S3檔案閘道器。 將預設檔案資料移動到 Amazon S3。 重新配置工作量以直接使用Amazon S3或使用S3檔案閘道器. 取決於每一工作量的地點。
- D. 在 AWS 上為 Windows 檔案伺服器部署和配置 Amazon FSx。 安裝並配置一個 Amazon FSx 檔案閘道器。 將預設檔案資料移動到 FSx 檔案閘道器。 在 AWS 上配置使用 Windows 檔案伺服器的雲工作量。 配置預設工作量以使用 FSx 檔案閘道器。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 AWS 上為 Windows 檔案伺服器部署和配置 Amazon FSx。 將預設檔案資料移動到FSx,用於Windows檔案伺服器. 重新配置工作量, 在 AWS 上為 Windows 檔案伺服器使用 FSx 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在本地端部署和配置一個Amazon S3檔案閘道器。 將預設檔案資料移動到 S3 檔案閘道器。 重新配置現場工作量和雲量工作量,使用S3檔案閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在本地端部署和配置一個Amazon S3檔案閘道器。 將預設檔案資料移動到 Amazon S3。 重新配置工作量以直接使用Amazon S3或使用S3檔案閘道器. 取決於每一工作量的地點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 AWS 上為 Windows 檔案伺服器部署和配置 Amazon FSx。 安裝並配置一個 Amazon FSx 檔案閘道器。 將預設檔案資料移動到 FSx 檔案閘道器。 在 AWS 上配置使用 Windows 檔案伺服器的雲工作量。 配置預設工作量以使用 FSx 檔案閘道器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #65

**題目**
一家醫院最近部署了一個帶有Amazon API Gateway和AWS Lambda的RESTFLAPI. 醫院使用API Gateway和Lambda上傳了PDF格式和JPEG格式的報告. 醫院需要修改Lambda程式碼,以確定報告中受保護的健康資訊(PHI). 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 利用現有的 Python 庫從報告中提取文字,並從提取的文字中識別 PHI。
- B. 使用 Amazon Textract 從報告中提取文字。 使用 Amazon SageMaker 從提取文字中識別 PHI。
- C. 使用 Amazon Textract 從報告中提取文字。 使用Amazon Comprehend Medical從提取文字中識別PHI.
- D. 使用Amazon Rekcognition從報告中提取文字. 使用Amazon Comprehend Medical從提取文字中識別PHI.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用 Amazon Textract 從報告中提取文字。 使用Amazon Comprehend Medical從提取文字中識別PHI。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：利用現有的 Python 庫從報告中提取文字,並從提取的文字中識別 PHI 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 Amazon Textract 從報告中提取文字。 使用 Amazon SageMaker 從提取文字中識別 PHI 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon Rekcognition從報告中提取文字. 使用Amazon Comprehend Medical從提取文字中識別PHI。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #66

**題目**
一個公司有一個應用程式,生成大量檔案,每個檔案大小大約5 MB. 這些檔案被儲存在Amazon S3中. 公司政策要求檔案要儲存4年才能刪除. 由於檔案載有不易複製的關鍵業務資料,因此總是需要立即查閱。 檔案在物件建立的前30天經常存取,但在前30天之後很少存取. 哪種儲存解決方案最符合成本效益?

**選項**
- A. 建立一個S3 儲存桶(S3 bucket) 生命週期政策(lifecycle policy),從物件建立起30天將檔案從S3標準移動到S3冰川. 刪除物件建立4年後的檔案。
- B. 建立S3 儲存桶(S3 bucket) 生命週期政策(lifecycle policy),將檔案從S3 Standard移動到S3 One Zone-In頻繁存取(S3 One Zone-IA),從物件建立開始30天. 刪除物件建立4年後的檔案。
- C. 建立 S3 儲存桶(S3 bucket) 生命週期政策(lifecycle policy) ,將檔案從 S3 標準移動到 S3 標準-不頻繁存取(S3 Standard-IA),從物件建立開始30天. 刪除物件建立4年後的檔案。
- D. 建立 S3 儲存桶(S3 bucket) 生命週期政策(lifecycle policy) ,將檔案從 S3 標準移動到 S3 標準-不頻繁存取(S3 Standard-IA),從物件建立開始30天. 在物件建立4年後將檔案移至 S3 Glacier。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 S3 儲存桶(S3 bucket) 生命週期政策(lifecycle policy) ,將檔案從 S3 標準移動到 S3 標準-不頻繁存取(S3 Standard-IA),從物件建立開始30天. 刪除物件建立4年後的檔案 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個S3 儲存桶(S3 bucket) 生命週期政策(lifecycle policy),從物件建立起30天將檔案從S3標準移動到S3冰川. 刪除物件建立4年後的檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立S3 儲存桶(S3 bucket) 生命週期政策(lifecycle policy),將檔案從S3 Standard移動到S3 One Zone-In頻繁存取(S3 One Zone-IA),從物件建立開始30天. 刪除物件建立4年後的檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 S3 儲存桶(S3 bucket) 生命週期政策(lifecycle policy) ,將檔案從 S3 標準移動到 S3 標準-不頻繁存取(S3 Standard-IA),從物件建立開始30天. 在物件建立4年後將檔案移至 S3 Glacier 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #67

**題目**
一個公司在多個Amazon EC2例項上託管一個應用程式. 應用程式處理來自 Amazon SQS 佇列的訊息,寫到 Amazon RDS 表格,並刪除佇列中的訊息. 偶爾重複的記錄見RDS表格. SQS 佇列不包含任何重複的訊息。 一個解決方案設計師應該做些什麼來確保只處理一次資訊?

**選項**
- A. 使用 CreateQue API 呼叫建立新佇列。
- B. 使用 AddPermission API 呼叫以新增適當的許可權。
- C. 使用 ReceptMessage API 呼叫設定適當的等待時間。
- D. 使用 ChangeMessageVisibility API 呼叫來增加可見度超時.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用 ChangeMessageVisibility API 呼叫來增加可見度超時。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 CreateQue API 呼叫建立新佇列 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AddPermission API 呼叫以新增適當的許可權 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 ReceptMessage API 呼叫設定適當的等待時間 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #68

**題目**
一個解決方案架構師正在設計一個新的混合結構,以將公司的前提基礎設施擴充套件到AWS. 該公司需要與持續低水平的延遲(latency)與AWS 區域(Region)的高度可用連線. 公司需要儘量降低成本,如果主連線失敗,願意接受較慢的流量. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 提供AWS Direct Connect與區域(Region)的連線。 如果主直接連線失敗, 則以 備份(backup) 方式提供 VPN 連線。
- B. 提供VPN隧道連線區域(Region),用於私人連線. 為私人連線提供第二個VPN隧道,如果主VPN連線失敗,則作為備份(backup).
- C. 提供AWS Direct Connect與區域(Region)的連線。 如果主直接連線失敗,則提供與備份(backup)相同的區域(Region)的第二個直接連線連線.
- D. 提供AWS Direct Connect與區域(Region)的連線。 使用來自AWS CLI的直接連線故障屬性,在主直接連線失敗時自動建立備份(backup)連線.

**答案**
A


**詳解**
正確答案是 **A**。
- A：提供AWS Direct Connect與區域(Region)的連線。 如果主直接連線失敗, 則以 備份(backup) 方式提供 VPN 連線 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：提供VPN隧道連線區域(Region),用於私人連線. 為私人連線提供第二個VPN隧道,如果主VPN連線失敗,則作為備份(backup)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：提供AWS Direct Connect與區域(Region)的連線。 如果主直接連線失敗,則提供與備份(backup)相同的區域(Region)的第二個直接連線連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：提供AWS Direct Connect與區域(Region)的連線。 使用來自AWS CLI的直接連線故障屬性,在主直接連線失敗時自動建立備份(backup)連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #69

**題目**
一家公司在Amazon EC2公司應用程式負載平衡器(Application Load Balancer)公司背後執行一個商業關鍵網路應用程式。 EC2 執行個體為Auto Scaling 群組(Auto Scaling group)。 該應用程式使用Amazon Aurora PostgreSQL 資料庫(database),部署在單一的可用區(Availability Zone)中. 公司希望該應用程式能高度可用,同時儘量減少故障時間和資料損失. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將 EC2 例項放在不同的 AWS 區域。 使用Amazon Route 53健康檢查來引導交通. 使用Aurora PostgreSQL 跨區域(Region) 複寫(Replication).
- B. 配置 Auto Scaling 群組(Auto Scaling group) 使用多個 可用區(Availability Zones). 配置 資料庫(database) 為多AZ。 配置 資料庫(database) 的 Amazon RDS 代理例項。
- C. 配置 Auto Scaling 群組(Auto Scaling group) 使用一個 可用區(Availability Zone). 生成資料庫(database)的小時快照. 在出現故障時從快照中回收資料庫(database).
- D. 配置 Auto Scaling 群組(Auto Scaling group) 以使用多個 AWS 區域. 將應用程式的資料寫入 Amazon S3。 使用 S3 事件通知以啟動 AWS Lambda 函式,將資料寫入 資料庫(database).

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置 Auto Scaling 群組(Auto Scaling group) 使用多個 可用區(Availability Zones). 配置 資料庫(database) 為多AZ。 配置 資料庫(database) 的 Amazon RDS 代理例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將 EC2 例項放在不同的 AWS 區域。 使用Amazon Route 53健康檢查來引導交通. 使用Aurora PostgreSQL 跨區域(Region) 複寫(Replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Auto Scaling 群組(Auto Scaling group) 使用一個 可用區(Availability Zone). 生成資料庫(database)的小時快照. 在出現故障時從快照中回收資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Auto Scaling 群組(Auto Scaling group) 以使用多個 AWS 區域. 將應用程式的資料寫入 Amazon S3。 使用 S3 事件通知以啟動 AWS Lambda 函式,將資料寫入 資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #70

**題目**
一家公司的HTTP應用程式在網路負載平衡器(Network Load Balancer)(NLB)背後. NLB的目標群體被配置為使用Amazon EC2 Auto Scaling 群組(Auto Scaling group),並有多個執行網路服務的EC2例項. 該公司注意到,NLB沒有發現該應用程式的HTTP錯誤。 這些錯誤需要手動重啟執行網路服務的EC2例項. 公司需要在不寫自定義指令碼或程式碼的情況下改進應用程式的可用性. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 啟用HTTP在NLB的健康檢查,提供公司應用程式的URL.
- B. 在 EC2 例項中新增一個 cron 任務, 每分鐘檢查一次本地應用程式的日誌。 如果檢測到 HTTP 錯誤。 應用程式將重新啟動。
- C. 以應用程式負載平衡器(Application Load Balancer)取代NLB。 透過提供公司應用程式的URL來啟用HTTP健康檢查. 配置自動縮放動作以取代不健康的事件。
- D. 建立一個亞馬遜雲表警報器,用於監測NLB的UnhealthyHostCounctor指標。 配置自動縮放動作以替換提醒處於 ALARM 狀態時的不健康事件。

**答案**
C


**詳解**
正確答案是 **C**。
- C：以應用程式負載平衡器(Application Load Balancer)取代NLB。 透過提供公司應用程式的URL來啟用HTTP健康檢查. 配置自動縮放動作以取代不健康的事件 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：啟用HTTP在NLB的健康檢查,提供公司應用程式的URL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 EC2 例項中新增一個 cron 任務, 每分鐘檢查一次本地應用程式的日誌。 如果檢測到 HTTP 錯誤。 應用程式將重新啟動。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個亞馬遜雲表警報器,用於監測NLB的UnhealthyHostCounctor指標。 配置自動縮放動作以替換提醒處於 ALARM 狀態時的不健康事件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #71

**題目**
一家公司經營的購物應用程式使用Amazon DynamoDB儲存客戶資訊. 在出現資料腐敗的情況下,解決方案架構師需要設計一個解決方案,滿足15分鐘的回收點目標(RPO)和1小時的回收時間目標(RTO). 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 配置 DynamoDB 全球表格。 對於RPO回收,將應用指向不同的AWS 區域(Region).
- B. 配置 DynamoDB 時間點恢復。 對於RPO恢復,恢復到理想的時間點.
- C. DynamoDB資料每日匯出至Amazon S3冰川. 用於RPO回收,將資料從S3冰川匯入到DynamoDB.
- D. Amazon Elastic Block Store(Amazon EBS)計劃每15分鐘為DynamoDB表提供快照. 對於RPO恢復,使用EBS 快照(snapshot)恢復DynamoDB表.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置 DynamoDB 時間點恢復。 對於RPO恢復,恢復到理想的時間點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 DynamoDB 全球表格。 對於RPO回收,將應用指向不同的AWS 區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：DynamoDB資料每日匯出至Amazon S3冰川. 用於RPO回收,將資料從S3冰川匯入到DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon Elastic Block Store(Amazon EBS)計劃每15分鐘為DynamoDB表提供快照. 對於RPO恢復,使用EBS 快照(snapshot)恢復DynamoDB表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #72

**題目**
一家公司執行一個照片處理應用程式,需要經常上傳和下載Amazon S3桶中位於同一個AWS 區域(Region)的圖片. 一位解決方案設計師注意到資料傳輸費增加,需要實施一個降低這些費用的解決方案。 解決方案架構如何滿足這一要求?

**選項**
- A. 將Amazon API Gateway部署到公共子網中,並將路由表調整為透過它的路由S3呼叫.
- B. 將一個NAT閘道器部署到公共子網,並附加一個允許存取S3桶的端點政策.
- C. 將應用程式應用到公共子網中,並允許其透過網際網路閘道器進行路由存取S3桶.
- D. 在VPC中部署一個S3 VPC閘道器端點,並附加一個允許存取S3桶的端點政策.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在VPC中部署一個S3 VPC閘道器端點,並附加一個允許存取S3桶的端點政策。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將Amazon API Gateway部署到公共子網中,並將路由表調整為透過它的路由S3呼叫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將一個NAT閘道器部署到公共子網,並附加一個允許存取S3桶的端點政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將應用程式應用到公共子網中,並允許其透過網際網路閘道器進行路由存取S3桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #73

**題目**
一家公司最近在一個私人子網推出基於Linux的Amazon EC2應用例項,並在一個VPC的公共子網推出基於Linux的bastion主機. 一個解決方案架構師需要從現場網路,透過公司的網際網路連線,連線到bastion主機,以及應用伺服器. 解決方案設計師必須確保所有EC2 執行個體的安全小組允許進入。 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 將當前Bastion主機的安全群組(security group)替換為只允許從應用程式例項進入的選項。
- B. 將當前Bastion主機的安全群組(security group)替換為只允許公司從內部IP範圍進入的.
- C. 將Bastion主機目前的安全群組(security group)替換為只允許公司從外部IP範圍進入的機型.
- D. 將當前應用例中的安全群組(security group)替換為只允許從bastion主機的私人IP地址進入SSH.
- E. 將當前應用例中的安全群組(security group)替換為只允許從bastion主機公共IP地址進入的SSH.

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：將Bastion主機目前的安全群組(security group)替換為只允許公司從外部IP範圍進入的機型。此選項符合題目條件，能有效滿足核心需求。
- D：將當前應用例中的安全群組(security group)替換為只允許從bastion主機的私人IP地址進入SSH。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：將當前Bastion主機的安全群組(security group)替換為只允許從應用程式例項進入的選項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將當前Bastion主機的安全群組(security group)替換為只允許公司從內部IP範圍進入的。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：將當前應用例中的安全群組(security group)替換為只允許從bastion主機公共IP地址進入的SSH。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #74

**題目**
一個解決方案架構師正在設計一個兩級網路應用程式. 該應用程式包括公共子網Amazon EC2上託管的公交網路級. 資料庫(database)級由在Amazon EC2上執行的Microsoft SQL Server在一個私人子網組成. 安保是該公司的高度優先事項。 在這種情況下,應如何配置安全小組?(選二.

**選項**
- A. 配置網路級的安全群組(security group),允許從0.0/0.
- B. 配置網路級的安全群組(security group),允許從0.0/0.
- C. 為資料庫(database)級配置安全群組(security group),允許從安全群組(security group)埠進入1433埠的網路級.
- D. 為資料庫(database)級配置安全群組(security group),允許在443埠和1433埠向安全群組(security group)埠的網路傳輸.
- E. 為資料庫(database)級配置安全群組(security group),允許從安全群組(security group)到網路級的443和1433埠的入境流量.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：配置網路級的安全群組(security group),允許從0.0/0。此選項符合題目條件，能有效滿足核心需求。
- C：為資料庫(database)級配置安全群組(security group),允許從安全群組(security group)埠進入1433埠的網路級。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：配置網路級的安全群組(security group),允許從0.0/0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為資料庫(database)級配置安全群組(security group),允許在443埠和1433埠向安全群組(security group)埠的網路傳輸。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：為資料庫(database)級配置安全群組(security group),允許從安全群組(security group)到網路級的443和1433埠的入境流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #75

**題目**
一家公司希望將一個多層次的應用程式從場地移動到AWS雲,以提高應用程式的效能. 應用程式包括透過RESTful服務相互溝通的應用層. 當一個層次超載時,交易就會減少。 解決方案設計師必須設計出解決這些問題的解決方案,並使應用程式現代化. 哪種解決辦法符合這些要求,而最高運作效率高?

**選項**
- A. 使用Amazon API Gateway並直接交易到AWS Lambda功能作為應用層. 使用亞馬遜簡易佇列服務(Amazon SQS)作為應用程式服務之間的通訊層.
- B. 使用Amazon CloudWatch 度量衡分析應用程式效能歷史,以確定伺服器在效能故障時的峰值利用率. 增加應用程式伺服器的 Amazon EC2 例項的大小,以滿足峰值要求.
- C. 使用Amazon簡單通知服務(Amazon SNS)在執行於Amazon EC2的應用程式伺服器之間,在Auto Scaling 群組(Auto Scaling group)中處理訊息. 使用Amazon CloudWatch來監控SNS佇列長度,並根據需要上下縮放.
- D. 使用Amazon簡單排隊服務(Amazon SQS)在執行於Amazon EC2的應用程式伺服器之間,在Auto Scaling 群組(Auto Scaling group)中處理訊息. 使用Amazon CloudWatch來監視在檢測到通訊故障時的SQS佇列長度和規模.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon API Gateway並直接交易到AWS Lambda功能作為應用層. 使用亞馬遜簡易佇列服務(Amazon SQS)作為應用程式服務之間的通訊層。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon CloudWatch 度量衡分析應用程式效能歷史,以確定伺服器在效能故障時的峰值利用率. 增加應用程式伺服器的 Amazon EC2 例項的大小,以滿足峰值要求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon簡單通知服務(Amazon SNS)在執行於Amazon EC2的應用程式伺服器之間,在Auto Scaling 群組(Auto Scaling group)中處理訊息. 使用Amazon CloudWatch來監控SNS佇列長度,並根據需要上下縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon簡單排隊服務(Amazon SQS)在執行於Amazon EC2的應用程式伺服器之間,在Auto Scaling 群組(Auto Scaling group)中處理訊息. 使用Amazon CloudWatch來監視在檢測到通訊故障時的SQS佇列長度和規模。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #76

**題目**
一家公司每天從一家工廠的幾臺機器獲得10TB儀器資料。 資料包括儲存在一個儲存域網(SAN)上的JSON檔案,存放在工廠內的一個professes資料中心. 公司希望將這個資料傳送到Amazon S3,在那裡可以被另外幾個提供關鍵近實時分析的系統存取. 安全轉移很重要,因為資料被認為是敏感的。 哪種解決方案可以提供MOST可靠的資料傳輸?

**選項**
- A. AWS 公共網際網路資料同步
- B. AWS 資料同步於 AWS Direct Connect
- C. AWS 資料庫(Database) 公共網際網路上的移民服務
- D. AWS 資料庫(Database) 移民服務處(AWS DMS),位於AWS Direct Connect上空

**答案**
B


**詳解**
正確答案是 **B**。
- B：AWS 資料同步於 AWS Direct Connect。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：AWS 公共網際網路資料同步。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：AWS 資料庫(Database) 公共網際網路上的移民服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：AWS 資料庫(Database) 移民服務處(AWS DMS),位於AWS Direct Connect上空。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #77

**題目**
公司需要為其應用配置實時資料攝入架構. 公司需要API,一個在資料流時轉換資料的過程,以及資料的儲存解決方案. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 部署一個 Amazon EC2 例項以託管一個將資料傳送到 Amazon Kinesis 資料流的 API。 建立一個使用Kinesis資料流作為資料來源的Amazon Kinesis Data Firehose送電流. 使用 AWS Lambda 函式轉換資料. 使用Kinesis資料Firehose傳送流將資料傳送到Amazon S3.
- B. 部署一個 Amazon EC2 例項以託管一個向 AWS Glue 傳送資料的API。 停止對 EC2 例項進行來源/目的地檢查。 使用AWS Glue轉換資料,並將資料傳送到Amazon S3.
- C. 配置 Amazon API Gateway API 將資料傳送到 Amazon Kinesis 資料流. 建立一個使用Kinesis資料流作為資料來源的Amazon Kinesis Data Firehose送電流. 使用 AWS Lambda 函式轉換資料. 使用Kinesis資料Firehose傳送流將資料傳送到Amazon S3.
- D. 配置 Amazon API Gateway API 將資料傳送到 AWS Glue. 使用 AWS Lambda 函式轉換資料. 使用AWS Glue將資料傳送到Amazon S3.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 Amazon API Gateway API 將資料傳送到 Amazon Kinesis 資料流. 建立一個使用Kinesis資料流作為資料來源的Amazon Kinesis Data Firehose送電流. 使用 AWS Lambda 函式轉換資料. 使用Kinesis資料Firehose傳送流將資料傳送到Amazon S3。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：部署一個 Amazon EC2 例項以託管一個將資料傳送到 Amazon Kinesis 資料流的 API。 建立一個使用Kinesis資料流作為資料來源的Amazon Kinesis Data Firehose送電流. 使用 AWS Lambda 函式轉換資料. 使用Kinesis資料Firehose傳送流將資料傳送到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：部署一個 Amazon EC2 例項以託管一個向 AWS Glue 傳送資料的API。 停止對 EC2 例項進行來源/目的地檢查。 使用AWS Glue轉換資料,並將資料傳送到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon API Gateway API 將資料傳送到 AWS Glue. 使用 AWS Lambda 函式轉換資料. 使用AWS Glue將資料傳送到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #78

**題目**
公司需要將使用者交易資料儲存在Amazon DynamoDB表中. 公司必須將資料保留7年。 滿足這些要求的MOST業務效率解決方案是什麼?

**選項**
- A. 使用DynamomDB點即時恢復來連續備份表格.
- B. 使用AWS Backup為表格建立備份(backup)排程和保留政策.
- C. 使用DynamoDB控制檯建立表格的點播備份(backup). 將備份(backup)存放在Amazon S3桶中. 設定S3 儲存桶(S3 bucket)的S3生命週期配置.
- D. 建立 Amazon EventBridge(Amazon CloudWatch Events) 規則以引用 AWS Lambda 函式. 配置 Lambda 函式備份表,並將 備份(backup) 儲存在 Amazon S3 桶中. 設定S3 儲存桶(S3 bucket)的S3生命週期配置.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用AWS Backup為表格建立備份(backup)排程和保留政策。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用DynamomDB點即時恢復來連續備份表格。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用DynamoDB控制檯建立表格的點播備份(backup). 將備份(backup)存放在Amazon S3桶中. 設定S3 儲存桶(S3 bucket)的S3生命週期配置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon EventBridge(Amazon CloudWatch Events) 規則以引用 AWS Lambda 函式. 配置 Lambda 函式備份表,並將 備份(backup) 儲存在 Amazon S3 桶中. 設定S3 儲存桶(S3 bucket)的S3生命週期配置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #79

**題目**
一家公司正計劃使用Amazon DynamoDB表進行資料儲存. 公司關注成本最佳化. 多數早晨不會使用這個表格。 在晚間,讀寫流量往往無法預測. 當交通擁堵時,會很快發生. 一個解決方案設計師應該推薦什麼?

**選項**
- A. 以點播容量模式建立 DynamoDB 表.
- B. 建立帶有全域性二級索引的DynamoDB表.
- C. 建立帶有供給容量和自動縮放的DynamomDB表.
- D. 在提供容量模式下建立 DynamomDB 表格,並配置為全域性表。

**答案**
A


**詳解**
正確答案是 **A**。
- A：以點播容量模式建立 DynamoDB 表。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立帶有全域性二級索引的DynamoDB表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立帶有供給容量和自動縮放的DynamomDB表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在提供容量模式下建立 DynamomDB 表格,並配置為全域性表 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #80

**題目**
最近,一家公司與AWS管理服務提供商(MSP)夥伴簽訂了一項合同,要求幫助一項申請遷移倡議。 一個解決方案架構師需要ta與MSP Partner的AWS帳戶共享一個現有的AWS帳戶的亞馬遜機器影象(AMI). AMI由Amazon Elastic Block Store(Amazon EBS)支援,並使用AWSERV007(AWS KMS)客戶管理的金鑰加密EBS 磁碟區快照. 解決方案設計師與MSP合作伙伴的AWS帳戶共享AMI的MOST安全途徑是什麼?.

**選項**
- A. 將加密的AMI和快照公開. 修改金鑰政策,允許MSP Partner的 AWS 帳戶使用金鑰.
- B. 修改 AMI 的發射屬性。 僅與MSP合作伙伴的AWS帳戶共享AMI. 修改金鑰政策,允許MSP Partner的 AWS 帳戶使用金鑰.
- C. 修改 AMI 的發射屬性。 僅與MSP合作伙伴的AWS帳戶共享AMI. 修改關鍵政策,以信任由MSP合作伙伴擁有的加密(encryption)的新 KMS 金鑰。
- D. 從源帳戶匯出AMI到MSP Partner的AWS帳戶中的Amazon S3桶,用MSP Partner擁有的新KMS金鑰加密S3 儲存桶(S3 bucket). 複製並啟動MSP Partner的AWS帳戶中的AMI.

**答案**
B


**詳解**
正確答案是 **B**。
- B：修改 AMI 的發射屬性。 僅與MSP合作伙伴的AWS帳戶共享AMI. 修改金鑰政策,允許MSP Partner的 AWS 帳戶使用金鑰。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將加密的AMI和快照公開. 修改金鑰政策,允許MSP Partner的 AWS 帳戶使用金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：修改 AMI 的發射屬性。 僅與MSP合作伙伴的AWS帳戶共享AMI. 修改關鍵政策,以信任由MSP合作伙伴擁有的加密(encryption)的新 KMS 金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：從源帳戶匯出AMI到MSP Partner的AWS帳戶中的Amazon S3桶,用MSP Partner擁有的新KMS金鑰加密S3 儲存桶(S3 bucket). 複製並啟動MSP Partner的AWS帳戶中的AMI。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #81

**題目**
一個解決方案架構師正在為正在AWS上部署的新應用程式設計雲架構. 這一過程應當平行進行,同時根據需要根據待處理的工作數量新增和刪除應用程式節點. 處理器申請為無狀態. 解決方案設計師必須確保應用程式鬆散搭配,並長期儲存工作專案。 架構師應該使用哪種設計?

**選項**
- A. 建立 Amazon SNS 主題,以傳送需要處理的工作。 建立一個包含處理器應用程式的亞馬遜機器影象(AMI). 建立使用AMI的發射配置. 使用發射配置建立Auto Scaling 群組(Auto Scaling group). 設定 Auto Scaling 群組(Auto Scaling group) 的縮放策略, 以便根據 CPU 的使用來新增和刪除節點。
- B. 建立一個 Amazon SQS 佇列來儲存需要處理的工作。 建立一個包含處理器應用程式的亞馬遜機器影象(AMI). 建立使用AMI的發射配置. 使用發射配置建立Auto Scaling 群組(Auto Scaling group). 設定 Auto Scaling 群組(Auto Scaling group) 的縮放策略, 以便根據網路使用情況新增並刪除節點。
- C. 建立一個 Amazon SQS 佇列來儲存需要處理的工作。 建立一個包含處理器應用程式的亞馬遜機器影象(AMI). 建立使用AMI的發射模板. 使用發射模板建立Auto Scaling 群組(Auto Scaling group). 設定 Auto Scaling 群組(Auto Scaling group) 的縮放策略, 以便根據 SQS 佇列中的專案數量新增並刪除節點。
- D. 建立 Amazon SNS 主題,以傳送需要處理的工作。 建立一個包含處理器應用程式的亞馬遜機器影象(AMI). 建立使用AMI的發射模板. 使用發射模板建立Auto Scaling 群組(Auto Scaling group). 設定Auto Scaling 群組(Auto Scaling group)的縮放政策,根據釋出到SNS主題的資訊數量新增並刪除節點.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個 Amazon SQS 佇列來儲存需要處理的工作。 建立一個包含處理器應用程式的亞馬遜機器影象(AMI). 建立使用AMI的發射模板. 使用發射模板建立Auto Scaling 群組(Auto Scaling group). 設定 Auto Scaling 群組(Auto Scaling group) 的縮放策略, 以便根據 SQS 佇列中的專案數量新增並刪除節點 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon SNS 主題,以傳送需要處理的工作。 建立一個包含處理器應用程式的亞馬遜機器影象(AMI). 建立使用AMI的發射配置. 使用發射配置建立Auto Scaling 群組(Auto Scaling group). 設定 Auto Scaling 群組(Auto Scaling group) 的縮放策略, 以便根據 CPU 的使用來新增和刪除節點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個 Amazon SQS 佇列來儲存需要處理的工作。 建立一個包含處理器應用程式的亞馬遜機器影象(AMI). 建立使用AMI的發射配置. 使用發射配置建立Auto Scaling 群組(Auto Scaling group). 設定 Auto Scaling 群組(Auto Scaling group) 的縮放策略, 以便根據網路使用情況新增並刪除節點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon SNS 主題,以傳送需要處理的工作。 建立一個包含處理器應用程式的亞馬遜機器影象(AMI). 建立使用AMI的發射模板. 使用發射模板建立Auto Scaling 群組(Auto Scaling group). 設定Auto Scaling 群組(Auto Scaling group)的縮放政策,根據釋出到SNS主題的資訊數量新增並刪除節點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #82

**題目**
一個公司在AWS雲中託管其網路應用. 公司配置了彈性負載平衡器,用於使用匯入AWS Certificate Manager(ACM)的憑證. 公司的安全小組必須在每份憑證到期前30天接到通知。 解決方案設計師建議如何滿足這一要求?

**選項**
- A. 在ACM中新增一條規則,從任何憑證過期前30天開始,每天在亞馬遜簡易通知服務(Amazon SNS)中釋出自定義訊息.
- B. 建立 AWS Config 規則, 檢查30天內過期的憑證。 配置 Amazon EventBridge(Amazon CloudWatch Events),在AWS Config報告一個不符合要求的資源時,透過亞馬遜簡易通知服務(Amazon SNS)引用自定義提醒.
- C. 使用 AWS 信任的顧問檢查將在30天內過期的憑證。 建立 Amazon CloudWatch 提醒,該提醒基於對檢查狀態變化的可信任的顧問衡量標準。 配置提醒, 透過 Amazon 簡單通知服務( Amazon SNS) 傳送自定義提醒。
- D. 建立一個 Amazon EventBridge(Amazon CloudWatch Events)規則,以檢測任何將在30天內過期的憑證. 配置規則以引用 AWS Lambda 函式。 配置 Lambda 函式以透過 Amazon 簡單通知服務(Amazon SNS)傳送自定義提醒。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立一個 Amazon EventBridge(Amazon CloudWatch Events)規則,以檢測任何將在30天內過期的憑證. 配置規則以引用 AWS Lambda 函式。 配置 Lambda 函式以透過 Amazon 簡單通知服務(Amazon SNS)傳送自定義提醒 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在ACM中新增一條規則,從任何憑證過期前30天開始,每天在亞馬遜簡易通知服務(Amazon SNS)中釋出自定義訊息。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS Config 規則, 檢查30天內過期的憑證。 配置 Amazon EventBridge(Amazon CloudWatch Events),在AWS Config報告一個不符合要求的資源時,透過亞馬遜簡易通知服務(Amazon SNS)引用自定義提醒。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 信任的顧問檢查將在30天內過期的憑證。 建立 Amazon CloudWatch 提醒,該提醒基於對檢查狀態變化的可信任的顧問衡量標準。 配置提醒, 透過 Amazon 簡單通知服務( Amazon SNS) 傳送自定義提醒 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #83

**題目**
一家公司的動態網站在美國使用premess伺服器進行託管. 該公司正在歐洲推出其產品,它希望最佳化歐洲新使用者的站點載入時間. 該網站的後端必須留在美國. 該產品幾天後即將推出,需要立即解決. 解決方案設計師應該建議什麼?

**選項**
- A. 在東1號發射Amazon EC2 並遷移到它。
- B. 將網站移至Amazon S3. 使用跨區域(Region) 複寫(Replication)跨區域.
- C. 使用 Amazon CloudFront,並帶有自定義源,指向預設伺服器.
- D. 使用 Amazon Route 53 地理近似路由政策指向前提伺服器.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用 Amazon CloudFront,並帶有自定義源,指向預設伺服器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在東1號發射Amazon EC2 並遷移到它。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將網站移至Amazon S3. 使用跨區域(Region) 複寫(Replication)跨區域。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon Route 53 地理近似路由政策指向前提伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #84

**題目**
一家公司希望降低其現有的三級網路架構的成本. 網路、應用和資料庫(database)伺服器正在Amazon EC2上執行,用於開發、測試和生產環境。 EC2 執行個體平均在高峰時段使用CPU30%,在非高峰時段使用CPU10%. EC2生產案例每天24小時執行。 EC2的開發和測試每天至少執行8小時。 該公司計劃實施自動化,以停止開發,並在EC2未使用的情況下測試它們. 哪種EC2採購辦法能以成本效益高的方式滿足公司的要求?

**選項**
- A. 生產 EC2 例項時使用 Spotexits。 使用保留例項進行開發並測試EC2例項。
- B. 在生產EC2時使用保留例項。 開發並測試 EC2 例項時使用本地例項。
- C. 生產 EC2 時使用點塊。 使用保留例項進行開發並測試EC2例項。
- D. 生產EC2 例項時使用當量例項。 使用點塊進行開發並測試 EC2 例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：在生產EC2時使用保留例項。 開發並測試 EC2 例項時使用本地例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：生產 EC2 例項時使用 Spotexits。 使用保留例項進行開發並測試EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：生產 EC2 時使用點塊。 使用保留例項進行開發並測試EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：生產EC2 例項時使用當量例項。 使用點塊進行開發並測試 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #85

**題目**
公司擁有一個生產網路應用程式,使用者透過網路介面或移動應用程式上傳文件. 根據新的監管要求。 新文件在儲存後無法修改或刪除。 解決方案設計師應如何滿足這一要求?

**選項**
- A. 將上傳的文件儲存在 Amazon S3 桶中,啟用了 S3 版本和 S3 Object Lock。
- B. 將上傳的文件儲存在 Amazon S3 桶中。 配置一個 S3 生命週期政策(Lifecycle policy) 來定期歸檔文件。
- C. 將上傳的文件儲存在啟用 S3 版本的 Amazon S3 桶中。 配置 ACL 以限制所有隻讀存取。
- D. 將上傳的文件儲存在亞馬遜彈性檔案系統(Amazon EFS)捲上. 以只讀模式載入磁碟區來獲取資料。

**答案**
A


**詳解**
正確答案是 **A**。
- A：將上傳的文件儲存在 Amazon S3 桶中,啟用了 S3 版本和 S3 Object Lock 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將上傳的文件儲存在 Amazon S3 桶中。 配置一個 S3 生命週期政策(Lifecycle policy) 來定期歸檔文件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將上傳的文件儲存在啟用 S3 版本的 Amazon S3 桶中。 配置 ACL 以限制所有隻讀存取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將上傳的文件儲存在亞馬遜彈性檔案系統(Amazon EFS)捲上. 以只讀模式載入磁碟區來獲取資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #86

**題目**
一家公司有幾個網路伺服器,需要經常存取一個常見的Amazon RDS MySQL 多AZ DB例項. 公司希望網路伺服器在滿足安全要求的同時連線資料庫(database),頻繁旋轉使用者憑證的安全方法. 哪種解決辦法符合這些要求?

**選項**
- A. 在AWS Secrets Manager中儲存資料庫(database)使用者憑證. 授予必要的IAM許可權,允許網路伺服器存取AWS Secrets Manager.
- B. 在AWS Systems Manager OpsCenter中儲存資料庫(database)使用者憑證. 授予必要的IAM許可權,允許網頁伺服器存取OpsCenter.
- C. 在安全的Amazon S3桶中儲存資料庫(database)使用者憑證. 授予必要的IAM許可權,允許網路伺服器檢索憑證並存取資料庫(database).
- D. 將資料庫(database)的使用者憑證儲存在網路伺服器檔案系統中的AWS Key Management Service(AWS KMS)加密檔案中. 網路伺服器應該能夠解密檔案並存取資料庫(database).

**答案**
A


**詳解**
正確答案是 **A**。
- A：在AWS Secrets Manager中儲存資料庫(database)使用者憑證. 授予必要的IAM許可權,允許網路伺服器存取AWS Secrets Manager。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在AWS Systems Manager OpsCenter中儲存資料庫(database)使用者憑證. 授予必要的IAM許可權,允許網頁伺服器存取OpsCenter。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在安全的Amazon S3桶中儲存資料庫(database)使用者憑證. 授予必要的IAM許可權,允許網路伺服器檢索憑證並存取資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料庫(database)的使用者憑證儲存在網路伺服器檔案系統中的AWS Key Management Service(AWS KMS)加密檔案中. 網路伺服器應該能夠解密檔案並存取資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #87

**題目**
一個公司託管一個AWS Lambda功能上的應用程式,由Amazon API Gateway API引用. Lambda 函式將客戶資料儲存到 Amazon Aurora MySQL 資料庫(database)。 當公司升級資料庫(database)時,Lambda的功能無法建立資料庫(database)連線,直到升級完成. 結果是部分事件沒有記錄客戶資料. 一個解決方案架構師需要設計一個儲存客戶資料,在資料庫(database)升級過程中建立的解決方案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 提供一種Amazon RDS代理,在Lambda函式和資料庫(database)之間。 配置 Lambda 函式連線到 RDS 代理。
- B. 將Lambda函式的執行時間增加到最大. 在程式碼中建立一個重試機制,將客戶資料儲存在資料庫(database)中.
- C. 堅持客戶資料到Lambda本地儲存. 配置新的 Lambda 函式掃描本地儲存,將客戶資料儲存到 資料庫(database)。
- D. 在亞馬遜簡易佇列服務(Amazon SQS)中儲存客戶資料 FIFO佇列. 建立一個新的 Lambda 函式,用於對佇列進行投票,並將客戶資料儲存在 資料庫(database) 中.

**答案**
A


**詳解**
正確答案是 **A**。
- A：提供一種Amazon RDS代理,在Lambda函式和資料庫(database)之間。 配置 Lambda 函式連線到 RDS 代理 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將Lambda函式的執行時間增加到最大. 在程式碼中建立一個重試機制,將客戶資料儲存在資料庫(database)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：堅持客戶資料到Lambda本地儲存. 配置新的 Lambda 函式掃描本地儲存,將客戶資料儲存到 資料庫(database) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在亞馬遜簡易佇列服務(Amazon SQS)中儲存客戶資料 FIFO佇列. 建立一個新的 Lambda 函式,用於對佇列進行投票,並將客戶資料儲存在 資料庫(database) 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #88

**題目**
一家調查公司多年來從美國各地區收集了資料。 公司將資料存放在Amazon S3 儲存桶中,該水桶的大小和生長量為3TB. 公司開始與一家擁有S3桶的歐洲營銷公司共享資料. 該公司希望確保其資料傳輸費用儘可能低。 哪種解決辦法能滿足這些要求?

**選項**
- A. 在公司的S3 儲存桶(S3 bucket)上配置請求者付費功能.
- B. 配置S3 Cross-Region Replication從公司的S3 儲存桶(S3 bucket)到銷售公司之一的S3桶.
- C. 為營銷公司配置跨帳戶接入,使營銷公司能夠存取該公司的S3 儲存桶(S3 bucket).
- D. 配置公司的S3 儲存桶(S3 bucket)使用S3 Intelligent-Tiering. 將S3 儲存桶(S3 bucket)同步到銷售公司之一的S3桶.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置S3 Cross-Region Replication從公司的S3 儲存桶(S3 bucket)到銷售公司之一的S3桶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在公司的S3 儲存桶(S3 bucket)上配置請求者付費功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為營銷公司配置跨帳戶接入,使營銷公司能夠存取該公司的S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置公司的S3 儲存桶(S3 bucket)使用S3 Intelligent-Tiering. 將S3 儲存桶(S3 bucket)同步到銷售公司之一的S3桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #89

**題目**
一家公司使用Amazon S3儲存其保密的稽核(audit)檔案. S3 儲存桶(S3 bucket)採用桶政策,按照最小權限(least privilege)的原則限制稽核(audit)團隊IAM使用者資格. 公司經理擔心S3 儲存桶(S3 bucket)中檔案的意外刪除,希望有一個更安全的解決方案. 一個解決方案設計師應該如何確保稽核(audit)檔案的安全?

**選項**
- A. 啟用版本和 MFA 刪除 S3 儲存桶(S3 bucket) 上的功能。
- B. 啟用每個稽核(audit)團隊IAM使用者帳戶的IAM使用者憑證上的多要素認證(MFA).
- C. 在稽核(audit)團隊的IAM使用者帳戶中新增一個S3 生命週期政策(Lifecycle policy),以否認在稽核(audit)日期期間的s3:刪除物件動作.
- D. 使用AWS Key Management Service(AWS KMS)加密S3 儲存桶(S3 bucket),並限制稽核(audit)團隊IAM使用者帳戶存取KMS金鑰.

**答案**
A


**詳解**
正確答案是 **A**。
- A：啟用版本和 MFA 刪除 S3 儲存桶(S3 bucket) 上的功能 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：啟用每個稽核(audit)團隊IAM使用者帳戶的IAM使用者憑證上的多要素認證(MFA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在稽核(audit)團隊的IAM使用者帳戶中新增一個S3 生命週期政策(Lifecycle policy),以否認在稽核(audit)日期期間的s3:刪除物件動作。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Key Management Service(AWS KMS)加密S3 儲存桶(S3 bucket),並限制稽核(audit)團隊IAM使用者帳戶存取KMS金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #90

**題目**
一家公司正在使用SQL 資料庫(database)儲存可公開獲取的電影資料. 資料庫(database)執行於Amazon RDS的單AZ DB例項上. 指令碼每天隨機執行查詢,以記錄資料庫(database)中新增的電影數量. 劇本必須在工作時間報告最終總數。 公司開發團隊注意到資料庫(database)在劇本執行時的效能不足以完成開發任務. 解決辦法的設計者必須建議解決這個問題的解決辦法。 LEAST 營運開銷(operational overhead)將滿足這一要求的哪一種解決方案?

**選項**
- A. 修改 DB 例項為多 AZ 部署。
- B. 建立資料庫(database)的讀取複製品. 配置指令碼只查詢已讀複製件。
- C. 指示開發團隊每天結束時手動匯出資料庫(database)中的條目.
- D. 使用 Amazon ElastiCache 來快取指令碼執行於資料庫(database)的常見查詢.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用 Amazon ElastiCache 來快取指令碼執行於資料庫(database)的常見查詢。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：修改 DB 例項為多 AZ 部署 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立資料庫(database)的讀取複製品. 配置指令碼只查詢已讀複製件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：指示開發團隊每天結束時手動匯出資料庫(database)中的條目。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #91

**題目**
一家公司在VPC中有執行於Amazon EC2的應用程式. 其中一個應用程式需要呼叫Amazon S3 API來儲存和讀取物件. 根據公司的安全規定,不得透過網際網路透過應用程式。 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 S3 閘道器端點。
- B. 在私有子網中建立 S3 儲存桶(S3 bucket)。
- C. 在與EC2 執行個體相同的 AWS 區域(Region) 中建立 S3 儲存桶(S3 bucket)。
- D. 在與EC2例項相同的子網中配置一個NAT閘道器.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 S3 閘道器端點 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在私有子網中建立 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在與EC2 執行個體相同的 AWS 區域(Region) 中建立 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在與EC2例項相同的子網中配置一個NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #92

**題目**
一家公司正在Amazon S3桶中儲存敏感的使用者資訊。 該公司希望從執行於VPC內部的Amazon EC2 執行個體的應用層上提供安全進入這個桶的通道. 一個設計師應該採取什麼樣的步驟來實現這一點?(選二.

**選項**
- A. 在 VPC 內配置 Amazon S3 的 VPC 閘道器端點。
- B. 建立 儲存桶政策(bucket policy) 以公開 S3 儲存桶(S3 bucket) 中的物件。
- C. 建立一個 儲存桶政策(bucket policy),它只限制存取執行在 VPC 中的應用程式級.
- D. 建立具有 S3 存取策略的 IAM 使用者,並將 IAM 憑證複製到 EC2 例項。
- E. 建立一個NAT例項,讓EC2例項使用NAT例項存取S3 儲存桶(S3 bucket).

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：在 VPC 內配置 Amazon S3 的 VPC 閘道器端點 。此選項符合題目條件，能有效滿足核心需求。
- C：建立一個 儲存桶政策(bucket policy),它只限制存取執行在 VPC 中的應用程式級。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：建立 儲存桶政策(bucket policy) 以公開 S3 儲存桶(S3 bucket) 中的物件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立具有 S3 存取策略的 IAM 使用者,並將 IAM 憑證複製到 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立一個NAT例項,讓EC2例項使用NAT例項存取S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #93

**題目**
一家公司執行一個由MySQL 資料庫(database)型電力機車供電的在建裝置應用程式. 該公司正在將應用程式遷移到AWS,以增加應用程式的彈性和可用性. 目前的架構顯示在正常執行期間資料庫(database)上的重讀活動. 每4小時,該公司的開發團隊將生產資料庫(database)的全程出口,在中轉環境中注入資料庫(database). 在此期間,使用者經歷不可接受的應用延遲(latency). 開發團隊無法使用中轉環境,直到程式完成. 解決方案架構師必須推薦能夠緩解應用延遲(latency)問題的替換架構. 更換結構還必須使開發團隊能夠毫不拖延地繼續使用中轉環境。 哪種解決辦法符合這些要求?

**選項**
- A. 使用Amazon Aurora MySQL與多AZ Aurora複製品進行生產. 透過實施一個備份(backup)來傳播中轉資料庫(database),並恢復使用 mysqldump 工具的程序.
- B. 使用Amazon Aurora MySQL與多AZ Aurora複製品進行生產. 使用 資料庫(database) 克隆來建立中轉的 資料庫(database) 需求。
- C. 使用Amazon RDS用於具有多AZ部署的MySQL,並讀作生產複製品. 用備用例項來進行資料庫(database)中轉。
- D. 使用Amazon RDS用於具有多AZ部署的MySQL,並讀作生產複製品. 透過實施一個備份(backup)來傳播中轉資料庫(database),並恢復使用 mysqldump 工具的程序.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon Aurora MySQL與多AZ Aurora複製品進行生產. 使用 資料庫(database) 克隆來建立中轉的 資料庫(database) 需求。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon Aurora MySQL與多AZ Aurora複製品進行生產. 透過實施一個備份(backup)來傳播中轉資料庫(database),並恢復使用 mysqldump 工具的程序。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon RDS用於具有多AZ部署的MySQL,並讀作生產複製品. 用備用例項來進行資料庫(database)中轉。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon RDS用於具有多AZ部署的MySQL,並讀作生產複製品. 透過實施一個備份(backup)來傳播中轉資料庫(database),並恢復使用 mysqldump 工具的程序。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #94

**題目**
一個公司正在設計一個應用程式,使用者將小檔案上傳到Amazon S3. 在使用者上傳一個檔案後,檔案需要一次性的簡單處理來轉換資料,並將資料儲存在JSON格式中供日後分析. 每個檔案上傳後必須儘快處理. 需求會有所不同。 有時使用者會上傳大量檔案. 在其他的日子,使用者會上傳一些檔案或者沒有檔案. LEAST 營運開銷(operational overhead)符合這些要求的解決方案是什麼?

**選項**
- A. 配置 Amazon EMR 讀取 Amazon S3 的文字檔案. 執行處理指令碼以轉換資料. 將由此產生的JSON檔案儲存在 Amazon Aurora DB 叢集中.
- B. 配置 Amazon S3 向 Amazon 簡單佇列服務(Amazon SQS) 佇列傳送事件通知。 使用 Amazon EC2 例項從佇列中讀取並處理資料。 將生成的JSON檔案儲存於 Amazon DynamoDB.
- C. 配置 Amazon S3 向 Amazon 簡單佇列服務(Amazon SQS) 佇列傳送事件通知。 使用 AWS Lambda 函式從佇列讀取並處理資料. 將生成的JSON檔案儲存於 Amazon DynamoDB.
- D. 配置 Amazon EventBridge(Amazon CloudWatch Events) 在上傳新檔案時將一個事件傳送給 Amazon Kinesis Data Streams. 使用 AWS Lambda 函式從流中消耗事件並處理資料. 將由此產生的JSON檔案儲存在 Amazon Aurora DB 叢集中.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 Amazon S3 向 Amazon 簡單佇列服務(Amazon SQS) 佇列傳送事件通知。 使用 AWS Lambda 函式從佇列讀取並處理資料. 將生成的JSON檔案儲存於 Amazon DynamoDB。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Amazon EMR 讀取 Amazon S3 的文字檔案. 執行處理指令碼以轉換資料. 將由此產生的JSON檔案儲存在 Amazon Aurora DB 叢集中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 Amazon S3 向 Amazon 簡單佇列服務(Amazon SQS) 佇列傳送事件通知。 使用 Amazon EC2 例項從佇列中讀取並處理資料。 將生成的JSON檔案儲存於 Amazon DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon EventBridge(Amazon CloudWatch Events) 在上傳新檔案時將一個事件傳送給 Amazon Kinesis Data Streams. 使用 AWS Lambda 函式從流中消耗事件並處理資料. 將由此產生的JSON檔案儲存在 Amazon Aurora DB 叢集中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #95

**題目**
一個應用程式允許公司總部的使用者存取產品資料. 產品資料儲存在Amazon RDS MySQL DB例項中. 運營團隊已經隔離了應用程式效能減速,希望將讀流量與寫流量分開. 一個解決方案架構師需要快速最佳化應用程式的效能. 解決方案設計師應該建議什麼?

**選項**
- A. 將現有的資料庫(database)改為多AZ部署. 滿足主可用區(Availability Zone)的讀取請求.
- B. 將現有的資料庫(database)改為多AZ部署. 滿足二級可用區(Availability Zone)的讀取請求.
- C. 為資料庫(database)建立讀取複製品. 配置帶有一半計算和儲存資源的讀取複製品作為源 資料庫(database).
- D. 為資料庫(database)建立讀取複製品. 配置讀取的複製品,其計算和儲存資源與源資料庫(database)相同.

**答案**
D


**詳解**
正確答案是 **D**。
- D：為資料庫(database)建立讀取複製品. 配置讀取的複製品,其計算和儲存資源與源資料庫(database)相同。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將現有的資料庫(database)改為多AZ部署. 滿足主可用區(Availability Zone)的讀取請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將現有的資料庫(database)改為多AZ部署. 滿足二級可用區(Availability Zone)的讀取請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為資料庫(database)建立讀取複製品. 配置帶有一半計算和儲存資源的讀取複製品作為源 資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #96

**題目**
一名Amazon EC2管理員建立了下列與包含多個使用者的IAM組相關的政策: 這項政策有什麼影響?

**選項**
- A. 使用者可以在任何AWS 區域(Region)中終止一個EC2例項,但我們-東-1除外.
- B. 使用者可以在我們東-1 區域(Region)的IP地址10.100.1終止EC2例項.
- C. 當使用者的源IP為10.100.100.254時,使用者可以終止我們東-1 區域(Region)中的EC2例項.
- D. 當使用者的源IP為10.100.100.254時,使用者不能終止我們東-1 區域(Region)中的EC2例項.

**答案**
C


**詳解**
正確答案是 **C**。
- C：當使用者的源IP為10.100.100.254時,使用者可以終止我們東-1 區域(Region)中的EC2例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用者可以在任何AWS 區域(Region)中終止一個EC2例項,但我們-東-1除外。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用者可以在我們東-1 區域(Region)的IP地址10.100.1終止EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：當使用者的源IP為10.100.100.254時,使用者不能終止我們東-1 區域(Region)中的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #97

**題目**
一個公司有一個大型的微軟SharePoint部署執行在前提上,需要Microsoft Windows共享檔案儲存. 該公司希望將這一工作量遷移到AWS雲,並正在考慮各種儲存選項. 儲存解決方案必須非常可用,並與存取控制(access control)活動目錄整合. 哪一種辦法能滿足這些要求?

**選項**
- A. 配置 Amazon EFS 儲存並設定活動目錄域進行認證.
- B. 在兩個 可用區(Availability Zones) 中建立一個 AWS Storage Gateway 檔案閘道器上的 SMB 檔案共享。
- C. 建立 Amazon S3 桶並配置 Microsoft Windows 伺服器以掛載為磁碟區。
- D. 在AWS上為Windows檔案伺服器檔案系統建立Amazon FSx,並設定Active Directory域進行認證.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在AWS上為Windows檔案伺服器檔案系統建立Amazon FSx,並設定Active Directory域進行認證。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Amazon EFS 儲存並設定活動目錄域進行認證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在兩個 可用區(Availability Zones) 中建立一個 AWS Storage Gateway 檔案閘道器上的 SMB 檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon S3 桶並配置 Microsoft Windows 伺服器以掛載為磁碟區 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #98

**題目**
一個影象處理公司有一個使用者用來上傳影象的網路應用程式. 應用程式將影象上傳到Amazon S3桶中. 公司設定了S3事件通知,將物件建立事件釋出到亞馬遜簡易佇列服務(Amazon SQS)標準佇列. SQS佇列是AWS Lambda功能的事件源,它處理影象並透過電子郵件將結果傳送給使用者. 使用者報告說,他們正在為每個上傳的影象收到多個電子郵件。 一個解決方案架構師確定,SQS訊息不止一次引用Lambda函式,導致多個電子郵件訊息. 解決方案設計師應該如何用LEAST 營運開銷(operational overhead)解決這個問題?

**選項**
- A. 在 SQS 佇列中設定長選票, 將接收Message 等待時間增加到 30 秒。
- B. 將 SQS 標準佇列改為 SQS FIFO 佇列。 使用訊息解碼ID來丟棄重複的訊息。
- C. 將 SQS 佇列中的能見度超時增加至大於函式超時和批次視窗超時的總值.
- D. 修改 Lambda 函式,以便在處理訊息前立即從 SQS 佇列中刪除每封信。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 SQS 佇列中設定長選票, 將接收Message 等待時間增加到 30 秒 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將 SQS 標準佇列改為 SQS FIFO 佇列。 使用訊息解碼ID來丟棄重複的訊息 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 SQS 佇列中的能見度超時增加至大於函式超時和批次視窗超時的總值。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改 Lambda 函式,以便在處理訊息前立即從 SQS 佇列中刪除每封信。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #99

**題目**
一家公司正在執行一個共享的儲存解決方案,用於安裝在現場資料中心的遊戲應用程式。 公司需要有能力使用Lustre客戶獲取資料. 解決辦法必須得到充分管理。 哪種解決辦法符合這些要求?

**選項**
- A. 建立 AWS Storage Gateway 檔案閘道器。 建立使用所需客戶協議的檔案共享。 連線應用程式伺服器到檔案共享。
- B. 建立 Amazon EC2 Windows 例項。 安裝和配置例項上的 Windows 檔案共享角色。 連線應用程式伺服器到檔案共享。
- C. 建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統,並配置支援Lustre. 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統.
- D. 為 Lustre 檔案系統建立 Amazon FSx。 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統.

**答案**
D


**詳解**
正確答案是 **D**。
- D：為 Lustre 檔案系統建立 Amazon FSx。 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 AWS Storage Gateway 檔案閘道器。 建立使用所需客戶協議的檔案共享。 連線應用程式伺服器到檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon EC2 Windows 例項。 安裝和配置例項上的 Windows 檔案共享角色。 連線應用程式伺服器到檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統,並配置支援Lustre. 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #100

**題目**
一家公司的集裝箱化應用在Amazon EC2的案例中執行。 應用程式需要下載安全憑證才能與其他業務應用程式通訊. 公司希望有一個高度安全的解決方案,以加密和解密憑證近實時. 解決方案還需要在資料加密後將資料儲存在高度可用的儲存中. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 為加密憑證建立 AWS Secrets Manager 秘密。 需要時手動更新憑證。 透過使用精細的IAM存取來控制資料的獲取.
- B. 建立一個AWS Lambda功能,使用Python加密庫接收和進行加密(encryption)操作. 將函式儲存在 Amazon S3 桶中.
- C. 建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 允許EC2角色在加密(encryption)操作中使用KMS金鑰. 在Amazon S3上儲存加密資料.
- D. 建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 允許EC2角色在加密(encryption)操作中使用KMS金鑰. 在Amazon Elastic Block Store(Amazon EBS 磁碟區上儲存加密資料.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 允許EC2角色在加密(encryption)操作中使用KMS金鑰. 在Amazon Elastic Block Store(Amazon EBS 磁碟區上儲存加密資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為加密憑證建立 AWS Secrets Manager 秘密。 需要時手動更新憑證。 透過使用精細的IAM存取來控制資料的獲取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個AWS Lambda功能,使用Python加密庫接收和進行加密(encryption)操作. 將函式儲存在 Amazon S3 桶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 允許EC2角色在加密(encryption)操作中使用KMS金鑰. 在Amazon S3上儲存加密資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #101

**題目**
一個解決方案架構師正在設計一個具有公共和私人子網的VPC. VPC和子網使用IPv4 CIDR塊. 在高可用性(high availability)的三個可用區(Availability Zones)(AZs)中各有一個公共子網和一個私人子網. 網際網路閘道器被用來為公共子網提供網際網路接入。 私人子網需要存取網際網路,以便Amazon EC2例項下載軟體更新。 解決方案設計師應該做什麼才能使私人子網能夠上網?

**選項**
- A. 建立三個NAT閘道器,每個AZ的每個公共子網各一個. 為每個 AZ 建立私有的路由表,將非 VPC 流量轉發到 AZ 中的 NAT 閘道器.
- B. 建立三個NAT例項,每個AZ中每個私有子網一個. 為每個 AZ 建立私有的路由表,將非 VPC 流量轉發到 AZ 中的 NAT 例項。
- C. 在其中一個私人子網上建立第二個網際網路閘道器。 更新私有子網的路由表, 將非 VPC 流量轉發到私有網際網路閘道器。
- D. 在其中的一個公共子網上建立一個僅Egress的網際網路閘道器. 更新私有子網的路由表,將非 VPC 流量轉發到 Egress 唯一的網際網路閘道器.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立三個NAT閘道器,每個AZ的每個公共子網各一個. 為每個 AZ 建立私有的路由表,將非 VPC 流量轉發到 AZ 中的 NAT 閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立三個NAT例項,每個AZ中每個私有子網一個. 為每個 AZ 建立私有的路由表,將非 VPC 流量轉發到 AZ 中的 NAT 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在其中一個私人子網上建立第二個網際網路閘道器。 更新私有子網的路由表, 將非 VPC 流量轉發到私有網際網路閘道器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在其中的一個公共子網上建立一個僅Egress的網際網路閘道器. 更新私有子網的路由表,將非 VPC 流量轉發到 Egress 唯一的網際網路閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #102

**題目**
一個公司想將一個professes資料中心遷移到AWS. 資料中心託管一個SFTP伺服器,將其資料儲存在基於NFS的檔案系統中. 伺服器持有需要傳輸的200GB資料. 伺服器必須託管在使用亞馬遜彈性檔案系統(Amazon EFS)檔案系統的Amazon EC2例項上. 一個設計師應該採取何種步驟使這項任務自動化?(選二.

**選項**
- A. 將 EC2 例項與 EFS 檔案系統一樣推出到相同的 可用區(Availability Zone)。
- B. 在預設資料中心安裝 AWS 資料同步代理。
- C. 在EC2中建立二級亞馬遜彈性塊儲存器(Amazon EBS),用於資料。
- D. 手動使用作業系統複製命令將資料推向EC2例項.
- E. 使用AWS DataSync為premies SFTP伺服器建立合適的位置配置.

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：將 EC2 例項與 EFS 檔案系統一樣推出到相同的 可用區(Availability Zone) 。此選項符合題目條件，能有效滿足核心需求。
- B：在預設資料中心安裝 AWS 資料同步代理 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：在EC2中建立二級亞馬遜彈性塊儲存器(Amazon EBS),用於資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：手動使用作業系統複製命令將資料推向EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用AWS DataSync為premies SFTP伺服器建立合適的位置配置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #103

**題目**
一家公司擁有每天同時執行的AWS Glue提取,轉換,裝載(ETL)工作. 工作處理位於Amazon S3桶中的XML資料. 每天在S3 儲存桶(S3 bucket)中加入新的資料. 一個解決方案架構師注意到,AWS Glue正在處理每次執行中的所有資料. 解決方案設計師應如何防止AWS Glue重新處理舊資料?

**選項**
- A. 編輯工作以使用工作書籤。
- B. 編輯處理資料後刪除資料的工作。
- C. 透過將"工人數"欄位設定為 1 來編輯此任務。
- D. 使用 FindMatches 機器學習( ML) 轉換。

**答案**
A


**詳解**
正確答案是 **A**。
- A：編輯工作以使用工作書籤。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：編輯處理資料後刪除資料的工作。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過將"工人數"欄位設定為 1 來編輯此任務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 FindMatches 機器學習( ML) 轉換 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #104

**題目**
解決方案設計師必須為網站設計一個非常可用的基礎設施。 該網站由執行在Amazon EC2 執行個體上的Windows網路伺服器提供動力. 解決方案架構師必須實施一個能夠減輕源自數千個IP地址的大規模DDoS攻擊的解決方案. 網站不能接受停工。 設計師應該採取什麼行動來保護網站免受這種攻擊?(選二.

**選項**
- A. 使用AWS Shield Advanced阻止DDoS攻擊.
- B. 配置 Amazon GuardDuty 自動封鎖攻擊者。
- C. 配置網站,用於靜態和動態內容使用Amazon CloudFront.
- D. 使用一個AWS Lambda功能將攻擊者IP地址自動新增到VPC網路ACLs.
- E. 在 Auto Scaling 群組(Auto Scaling group) 中使用 EC2 Spotexits , 並設定目標跟蹤縮放策略, 將 CPU 利用率設為 80%。

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：使用AWS Shield Advanced阻止DDoS攻擊。此選項符合題目條件，能有效滿足核心需求。
- C：配置網站,用於靜態和動態內容使用Amazon CloudFront。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：配置 Amazon GuardDuty 自動封鎖攻擊者 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用一個AWS Lambda功能將攻擊者IP地址自動新增到VPC網路ACLs。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在 Auto Scaling 群組(Auto Scaling group) 中使用 EC2 Spotexits , 並設定目標跟蹤縮放策略, 將 CPU 利用率設為 80% 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #105

**題目**
一個連正在準備部署新的無伺服器工作量。 一個解決方案架構師必須使用最小權限(least privilege)的原則來配置用於執行AWS Lambda函式的許可權. Amazon EventBridge(Amazon CloudWatch Events)規則將引用此函式. 哪種解決辦法符合這些要求?

**選項**
- A. 在函式中新增一個執行角色, 由 lambda: Invoke Function 作為動作和 * 作為主操作.
- B. 在函式中新增一個執行角色, 由 lambda: InvokeFunction 作為動作和服務: lambda. amazonaws.com 作為主.
- C. 將基於資源的政策新增到函式中, Lambda: * 作為動作和服務: events.amazonaws.com 作為主.
- D. 在函式中新增一個基於資源的政策, Lambda: Invoke Function作為動作和服務: events.amazonaws.com為主.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在函式中新增一個基於資源的政策, Lambda: Invoke Function作為動作和服務: events.amazonaws.com為主。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在函式中新增一個執行角色, 由 lambda: Invoke Function 作為動作和 * 作為主操作。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在函式中新增一個執行角色, 由 lambda: InvokeFunction 作為動作和服務: lambda. amazonaws.com 作為主。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將基於資源的政策新增到函式中, Lambda: * 作為動作和服務: events.amazonaws.com 作為主。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #106

**題目**
一家公司正在準備在Amazon S3儲存機密資料。 由於合規(compliance)的原因,資料必須在休息時加密. 為審計目的,必須記錄加密(Encryption)的關鍵用途。 鑰匙必須每年輪換。 哪種解決辦法符合這些要求,而最高運作效率高?

**選項**
- A. 伺服器側式加密(encryption)帶客戶提供的金鑰(SSE-C)
- B. 伺服器端 加密(encryption) 帶有 Amazon S3 管理的金鑰(SSE-S3)
- C. 伺服器側式 加密(encryption) 帶有 AWS KMS 金鑰(SSE- KMS) , 手動旋轉
- D. 伺服器側式 加密(encryption) 帶有自動輪換的 AWS KMS 金鑰(SSE-KMS)

**答案**
D


**詳解**
正確答案是 **D**。
- D：伺服器側式 加密(encryption) 帶有自動輪換的 AWS KMS 金鑰(SSE-KMS)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：伺服器側式加密(encryption)帶客戶提供的金鑰(SSE-C)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：伺服器端 加密(encryption) 帶有 Amazon S3 管理的金鑰(SSE-S3)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：伺服器側式 加密(encryption) 帶有 AWS KMS 金鑰(SSE- KMS) , 手動旋轉。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #107

**題目**
一個腳踏車共享公司正在開發一個多層次的架構,以跟蹤其腳踏車在高峰運營時間的位置. 公司希望在其現有的分析平臺中使用這些資料點. 解決方案架構師必須確定支援這一架構的最可行的多層次選項. 資料點必須可從 REST API 中存取。 哪些行動符合儲存和檢索位置資料的要求?

**選項**
- A. 使用Amazon Athena與Amazon S3對接.
- B. 與AWS Lambda一起使用Amazon API Gateway.
- C. 使用Amazon QuickSight與Amazon Redshift.
- D. 使用Amazon API Gateway與Amazon Kinesis資料分析.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用Amazon API Gateway與Amazon Kinesis資料分析。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon Athena與Amazon S3對接。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：與AWS Lambda一起使用Amazon API Gateway。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon QuickSight與Amazon Redshift。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #108

**題目**
一家公司有一個汽車銷售網站,在Amazon RDS上的資料庫(database)上市. 出售汽車時,需要從網站上刪除上市內容,資料必須傳送到多個目標系統. 設計師應該推薦哪種設計?

**選項**
- A. 更新 Amazon RDS 上的 資料庫(database) 時,建立 AWS Lambda 函式,將資訊傳送到亞馬遜簡易佇列服務(Amazon SQS)佇列供目標消耗.
- B. 更新 Amazon RDS 上的 資料庫(database) 時,建立 AWS Lambda 函式,將資訊傳送到亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列供目標消耗.
- C. 訂閱一個 RDS 事件通知, 併傳送一個 Amazon 簡單佇列 服務(Amazon SQS) 佇列扇向多個 Amazon 簡單通知服務(Amazon SNS) 主題。 使用AWS Lambda功能來更新目標.
- D. 訂閱一個 RDS 事件通知, 併傳送一個 Amazon 簡單通知服務( Amazon SNS) 主題扇形到多個 Amazon 簡單佇列服務( Amazon SQS) 佇列。 使用AWS Lambda功能來更新目標.

**答案**
C


**詳解**
正確答案是 **C**。
- C：訂閱一個 RDS 事件通知, 併傳送一個 Amazon 簡單佇列 服務(Amazon SQS) 佇列扇向多個 Amazon 簡單通知服務(Amazon SNS) 主題。 使用AWS Lambda功能來更新目標。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：更新 Amazon RDS 上的 資料庫(database) 時,建立 AWS Lambda 函式,將資訊傳送到亞馬遜簡易佇列服務(Amazon SQS)佇列供目標消耗。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：更新 Amazon RDS 上的 資料庫(database) 時,建立 AWS Lambda 函式,將資訊傳送到亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列供目標消耗。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：訂閱一個 RDS 事件通知, 併傳送一個 Amazon 簡單通知服務( Amazon SNS) 主題扇形到多個 Amazon 簡單佇列服務( Amazon SQS) 佇列。 使用AWS Lambda功能來更新目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #109

**題目**
公司需要在Amazon S3中儲存資料,必須防止資料被更改. 公司希望上傳到Amazon S3的新物件在非特定時間內保持不可更改,直到公司決定修改物件. 只有公司AWS帳戶中的特定使用者才能擁有10刪除物件的能力. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立 S3 冰川庫。 對物件應用寫入、讀出(WORM)庫鎖政策。
- B. 啟用 S3 Object Lock 建立 S3 儲存桶(S3 bucket)。 啟用版本。 規定保留期100年。 對新物件使用治理模式作為S3 儲存桶(S3 bucket)的預設保留模式.
- C. 建立 S3 儲存桶(S3 bucket). 使用 AWS CloudTrail 來跟蹤任何修改物件的 S3 API 事件. 在接到通知後,從公司擁有的任何備份(backup)版本恢復修改物件.
- D. 啟用 S3 Object Lock 建立 S3 儲存桶(S3 bucket)。 啟用版本。 在物件上新增一個合法控制元件. 新增 s3: 在需要刪除物件的使用者的 IAM 政策中設定 ObjectLegalHold 許可權。

**答案**
D


**詳解**
正確答案是 **D**。
- D：啟用 S3 Object Lock 建立 S3 儲存桶(S3 bucket)。 啟用版本。 在物件上新增一個合法控制元件. 新增 s3: 在需要刪除物件的使用者的 IAM 政策中設定 ObjectLegalHold 許可權 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 S3 冰川庫。 對物件應用寫入、讀出(WORM)庫鎖政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：啟用 S3 Object Lock 建立 S3 儲存桶(S3 bucket)。 啟用版本。 規定保留期100年。 對新物件使用治理模式作為S3 儲存桶(S3 bucket)的預設保留模式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 S3 儲存桶(S3 bucket). 使用 AWS CloudTrail 來跟蹤任何修改物件的 S3 API 事件. 在接到通知後,從公司擁有的任何備份(backup)版本恢復修改物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #110

**題目**
一個社交媒體公司允許使用者將影象上傳到其網站. 該網站執行於Amazon EC2 執行個體. 在上傳請求中,網站將影象大小調整為標準大小,並將調整大小的影象儲存在Amazon S3中. 使用者在網站上傳請求緩慢. 公司需要減少應用程式內的耦合,提高網站效能. 一個解決方案架構師必須設計出最操作高效的影象上傳過程. 設計師應採取何種綜合行動來滿足這些要求?(選二.

**選項**
- A. 配置上傳影象到 S3 Glacier 的應用程式。
- B. 配置網路伺服器將原始影象上傳到Amazon S3.
- C. 透過使用預先簽名的 URL 配置將影象直接從每個使用者的瀏覽器上傳到 Amazon S3 的應用程式
- D. 在影象上傳時配置 S3 事件通知以引用 AWS Lambda 函式。 使用此函式來調整影象大小。
- E. 建立一個 Amazon EventBridge(Amazon CloudWatch Events) 規則,在更改上傳影象大小的排程中引用 AWS Lambda 函式.

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：配置網路伺服器將原始影象上傳到Amazon S3。此選項符合題目條件，能有效滿足核心需求。
- D：在影象上傳時配置 S3 事件通知以引用 AWS Lambda 函式。 使用此函式來調整影象大小 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：配置上傳影象到 S3 Glacier 的應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過使用預先簽名的 URL 配置將影象直接從每個使用者的瀏覽器上傳到 Amazon S3 的應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立一個 Amazon EventBridge(Amazon CloudWatch Events) 規則,在更改上傳影象大小的排程中引用 AWS Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #111

**題目**
一家公司最近將一個訊息處理系統遷移到AWS. 系統接收訊息進入執行在 Amazon EC2 例項上的 ActiveMQ 佇列. 訊息由執行在Amazon EC2上的消費者申請處理. 消費者應用處理訊息,並將結果寫給執行在Amazon EC2上的MySQL 資料庫(database). 公司希望這種應用能以低的營運複雜性(operational complexity)高可用. 哪個架構能提供高科技的可用性?

**選項**
- A. 在另一個可用區(Availability Zone)上新增第二個ActiveMQ伺服器. 在另一個可用區(Availability Zone)中增加一個消費者EC2例項. 將 MySQL 資料庫(database) 複製到另一個 可用區(Availability Zone).
- B. 使用 Amazon MQ 並配置在兩個 可用區(Availability Zones) 上的活躍/備用經紀人。 在另一個可用區(Availability Zone)中增加一個消費者EC2例項. 將 MySQL 資料庫(database) 複製到另一個 可用區(Availability Zone).
- C. 使用 Amazon MQ 並配置在兩個 可用區(Availability Zones) 上的活躍/備用經紀人。 在另一個可用區(Availability Zone)中增加一個消費者EC2例項. 啟用多AZ的MySQL使用Amazon RDS.
- D. 使用 Amazon MQ 並配置在兩個 可用區(Availability Zones) 上的活躍/備用經紀人。 在兩個可用區(Availability Zones)中為消費者EC2增加一個Auto Scaling 群組(Auto Scaling group)。 啟用多AZ的MySQL使用Amazon RDS.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用 Amazon MQ 並配置在兩個 可用區(Availability Zones) 上的活躍/備用經紀人。 在兩個可用區(Availability Zones)中為消費者EC2增加一個Auto Scaling 群組(Auto Scaling group)。 啟用多AZ的MySQL使用Amazon RDS。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在另一個可用區(Availability Zone)上新增第二個ActiveMQ伺服器. 在另一個可用區(Availability Zone)中增加一個消費者EC2例項. 將 MySQL 資料庫(database) 複製到另一個 可用區(Availability Zone)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 Amazon MQ 並配置在兩個 可用區(Availability Zones) 上的活躍/備用經紀人。 在另一個可用區(Availability Zone)中增加一個消費者EC2例項. 將 MySQL 資料庫(database) 複製到另一個 可用區(Availability Zone)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon MQ 並配置在兩個 可用區(Availability Zones) 上的活躍/備用經紀人。 在另一個可用區(Availability Zone)中增加一個消費者EC2例項. 啟用多AZ的MySQL使用Amazon RDS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #112

**題目**
一家公司在一個處理收到的請求的虛擬伺服器上託管一個集裝箱化的網路應用程式。 請求數量迅速增加。 現場伺服器無法處理更多的請求。 公司希望將應用程式移動到AWS,同時進行最小的程式碼修改和最小的開發努力. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在亞馬遜彈性容器服務(Amazon ECS)上使用AWS Fargate,使用Service Auto Usization執行集裝箱化網路應用程式. 使用 應用程式負載平衡器(Application Load Balancer) 來分配收到的請求。
- B. 使用兩個 Amazon EC2 例項來託管容器化的網路應用程式。 使用 應用程式負載平衡器(Application Load Balancer) 來分配收到的請求。
- C. 使用AWS Lambda,並使用新的程式碼,使用支援的語言之一. 建立多個Lambda功能來支援負載. 使用Amazon API Gateway作為Lambda函式的切入點.
- D. 使用高效能運算(HPC)解決方案,如AWS並行Cluster,建立HPC叢集,可以按適當比例處理收到的請求.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在亞馬遜彈性容器服務(Amazon ECS)上使用AWS Fargate,使用Service Auto Usization執行集裝箱化網路應用程式. 使用 應用程式負載平衡器(Application Load Balancer) 來分配收到的請求 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用兩個 Amazon EC2 例項來託管容器化的網路應用程式。 使用 應用程式負載平衡器(Application Load Balancer) 來分配收到的請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Lambda,並使用新的程式碼,使用支援的語言之一. 建立多個Lambda功能來支援負載. 使用Amazon API Gateway作為Lambda函式的切入點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用高效能運算(HPC)解決方案,如AWS並行Cluster,建立HPC叢集,可以按適當比例處理收到的請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #113

**題目**
一家公司使用50TB資料進行報告。 公司希望將這些資料從辦公地點轉移到AWS. 公司資料中心的自定義應用程式每週執行一次資料轉換工作。 公司計劃暫停應用直至資料傳輸完成,需要儘快開始傳輸過程. 資料中心沒有可用於額外工作量的網路頻寬。 一個解決方案架構師必須傳輸資料,必須配置轉換任務,以便在AWS雲中繼續執行. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用 AWS 資料同步來移動資料. 使用 AWS Glue 建立自定義轉換任務。
- B. 命令一個 AWS Snowcone 裝置來移動資料. 向裝置部署轉換應用程式。
- C. 訂購AWS Snowball Edge Storage Optimized裝置. 將資料複製到裝置中。 使用 AWS Glue 建立自定義轉換任務。
- D. 訂購包括Amazon EC2計算在內的AWS Snowball Edge Storage Optimized裝置. 將資料複製到裝置中。 在 AWS 上建立一個新的 EC2 例項來執行轉換應用程式。

**答案**
C


**詳解**
正確答案是 **C**。
- C：訂購AWS Snowball Edge Storage Optimized裝置. 將資料複製到裝置中。 使用 AWS Glue 建立自定義轉換任務 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 資料同步來移動資料. 使用 AWS Glue 建立自定義轉換任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：命令一個 AWS Snowcone 裝置來移動資料. 向裝置部署轉換應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：訂購包括Amazon EC2計算在內的AWS Snowball Edge Storage Optimized裝置. 將資料複製到裝置中。 在 AWS 上建立一個新的 EC2 例項來執行轉換應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #114

**題目**
一家公司建立了影象分析應用程式,使用者可以在其中上傳照片,並在影象中新增照片幀. 使用者上傳影象和後設資料,以表示他們想要在影象中新增哪個照片框. 該應用程式使用單一的Amazon EC2例項和Amazon DynamoDB儲存後設資料. 該應用程式越來越受歡迎,使用者數量也在增加. 公司預計同時使用的人數會因週日與日而異。 公司必須確保應用程式能夠規模化,以滿足日益增長的使用者基礎的需求. 這些要求是哪一種溶液?

**選項**
- A. 使用AWS Lambda處理照片. 將照片和後設資料儲存在DynamomDB.
- B. 使用Amazon Kinesis Data Firehose處理照片並儲存照片和後設資料.
- C. 使用AWS Lambda處理照片. 在Amazon S3中儲存照片. 保留DynamoDB儲存後設資料.
- D. EC2 執行個體增至3例. 使用IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS)卷儲存照片和後設資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS Lambda處理照片. 將照片和後設資料儲存在DynamomDB。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon Kinesis Data Firehose處理照片並儲存照片和後設資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Lambda處理照片. 在Amazon S3中儲存照片. 保留DynamoDB儲存後設資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：EC2 執行個體增至3例. 使用IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS)卷儲存照片和後設資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #115

**題目**
一家醫療記錄公司正在受理Amazon EC2病例的申請。 應用程式處理儲存在Amazon S3上的客戶資料檔案. EC2 執行個體由公共子網託管。 EC2 執行個體透過網際網路存取Amazon S3,但並不要求任何其他網路存取. 一項新的要求要求檔案傳輸的網路流量採用私人路線,而不透過網際網路傳送。 一個解決方案設計師應該建議對網路結構進行哪些修改來達到這一要求?

**選項**
- A. 建立一個NAT閘道器. 配置公共子網的路由表,透過NAT閘道器向Amazon S3傳送流量.
- B. 為 EC2 例項配置 安全群組(security group) 以限制出入境流量,從而只允許流量到 S3 字首列表。
- C. 將 EC2 例項移至私有子網。 為 Amazon S3 建立 VPC 端點(VPC endpoint),並將端點連線到私人子網的路由表.
- D. 從VPC中移除網際網路閘道器. 搭建AWS Direct Connect連線線,透過直通連線線連線至Amazon S3的線路交通.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將 EC2 例項移至私有子網。 為 Amazon S3 建立 VPC 端點(VPC endpoint),並將端點連線到私人子網的路由表。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個NAT閘道器. 配置公共子網的路由表,透過NAT閘道器向Amazon S3傳送流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 EC2 例項配置 安全群組(security group) 以限制出入境流量,從而只允許流量到 S3 字首列表 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：從VPC中移除網際網路閘道器. 搭建AWS Direct Connect連線線,透過直通連線線連線至Amazon S3的線路交通。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #116

**題目**
一家公司對其公司網站使用流行內容管理系統(CMS). 然而,所需的補丁和維修負擔沉重。 該公司正在重新設計其網站,希望有新的解決方案. 網站將每年更新四次,不需要有任何動態內容。 解決辦法必須提供高的可擴展性(scalability)和加強安全。 哪些組合的改變與LEAST 營運開銷(operational overhead)將滿足這些要求?(選二.

**選項**
- A. 在網站前配置Amazon CloudFront,以使用HTTPS功能.
- B. 在網站前部署一個AWS WAF網路ACL,以提供HTTPS功能.
- C. 建立和部署AWS Lambda功能,管理和服務網站內容.
- D. 建立新網站和Amazon S3桶. 在S3 儲存桶(S3 bucket)上部署網站,啟用靜態網站託管。
- E. 建立新網站. 透過使用一個Auto Scaling 群組(Auto Scaling group)的Amazon EC2例項在應用程式負載平衡器(Application Load Balancer)背後部署網站.

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：在網站前配置Amazon CloudFront,以使用HTTPS功能。此選項符合題目條件，能有效滿足核心需求。
- D：建立新網站和Amazon S3桶. 在S3 儲存桶(S3 bucket)上部署網站,啟用靜態網站託管。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在網站前部署一個AWS WAF網路ACL,以提供HTTPS功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立和部署AWS Lambda功能,管理和服務網站內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立新網站. 透過使用一個Auto Scaling 群組(Auto Scaling group)的Amazon EC2例項在應用程式負載平衡器(Application Load Balancer)背後部署網站。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #117

**題目**
一家公司將其應用日誌儲存在Amazon CloudWatch Logs日誌組中. 新政策要求公司在Amazon OpenSearch Service(Amazon Elasticsearch Service)中,在近實時儲存所有應用日誌. LEAST 營運開銷(operational overhead)將滿足這一要求的哪一種解決方案?

**選項**
- A. 配置一個 Cloud Watch 日誌訂閱以將日誌流到 Amazon OpenSearch Service(Amazon Elasticsearch Service)。
- B. 建立 AWS Lambda 函式。 使用日誌組引用函式將日誌寫入 Amazon OpenSearch Service(Amazon Elasticsearch Service).
- C. 建立 Amazon Kinesis 資料 Firehose 傳送流。 配置日誌組為傳送流源。 配置 Amazon OpenSearch Service(Amazon Elasticsearch Service) 作為送貨流的目的地.
- D. 在每個應用程式伺服器上安裝和配置 Amazon Kinesis Agent,將日誌傳送給 Amazon Kinesis Data Streams. 配置 Kinesis 資料流向 Amazon OpenSearch Service(Amazon Elasticsearch Service) 傳送日誌.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 Amazon Kinesis 資料 Firehose 傳送流。 配置日誌組為傳送流源。 配置 Amazon OpenSearch Service(Amazon Elasticsearch Service) 作為送貨流的目的地。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置一個 Cloud Watch 日誌訂閱以將日誌流到 Amazon OpenSearch Service(Amazon Elasticsearch Service) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS Lambda 函式。 使用日誌組引用函式將日誌寫入 Amazon OpenSearch Service(Amazon Elasticsearch Service)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在每個應用程式伺服器上安裝和配置 Amazon Kinesis Agent,將日誌傳送給 Amazon Kinesis Data Streams. 配置 Kinesis 資料流向 Amazon OpenSearch Service(Amazon Elasticsearch Service) 傳送日誌。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #118

**題目**
一家公司正在建立一個基於Amazon EC2的網路應用程式,在多個可用區(Availability Zones)中執行。 網路應用程式將提供對總計約900TB的文字檔案儲存庫的存取. 該公司預計網路應用將經歷需求高的時期. 一個解決方案架構師必須確保文字文件的儲存元件可以縮放以滿足應用程式在任何時候的需求. 該公司對解決方案的整體成本感到關切. 哪些儲存解決方案符合這些要求?

**選項**
- A. 亞馬遜彈性區塊儲存(Amazon EBS)
- B. 亞馬遜彈性檔案系統(Amazon EFS)
- C. Amazon OpenSearch Service(亞馬遜彈性搜尋服務)
- D. Amazon S3.

**答案**
D


**詳解**
正確答案是 **D**。
- D：Amazon S3。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：亞馬遜彈性區塊儲存(Amazon EBS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：亞馬遜彈性檔案系統(Amazon EFS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：Amazon OpenSearch Service(亞馬遜彈性搜尋服務)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #119

**題目**
一家全球公司正在使用Amazon API Gateway為其在東-1 區域(Region)和AP-東南-2 區域(Region)的忠誠俱樂部使用者設計REST API. 一個解決方案架構師必須設計一個解決方案來保護這些API Gateway管理的REST API跨越多個帳戶從SQL隱碼攻擊和跨站點指令碼攻擊. 用LEAST數額的行政努力滿足這些要求的辦法是什麼?

**選項**
- A. 在兩個大區設立AWS WAF. 具有API階段的協理區域網路ACL.
- B. 在兩個大區設立AWS 防火牆(Firewall)管理器. 中央配置AWS WAF規則.
- C. 在浴區設立AWS Shield. 具有API階段的協理區域網路ACL.
- D. 在其中一個大區設立AWS Shield. 具有API階段的協理區域網路ACL.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在兩個大區設立AWS WAF. 具有API階段的協理區域網路ACL。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在兩個大區設立AWS 防火牆(Firewall)管理器. 中央配置AWS WAF規則。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在浴區設立AWS Shield. 具有API階段的協理區域網路ACL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在其中一個大區設立AWS Shield. 具有API階段的協理區域網路ACL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #120

**題目**
一家公司在我們西部2個區域(Region)的網路負載平衡器(Network Load Balancer)(NLB)之後,針對3個Amazon EC2情況實施了自我管理的DNS解決方案. 該公司的大部分使用者都位於美國和歐洲. 公司希望改善解決方案的效能和可用性. 該公司在eu-West-1 區域(Region)中推出並配置了3個EC2例項,並增加了EC2例項作為新的NLB的目標。 公司可以使用哪一種解決方案來通向所有EC2的線路交通?

**選項**
- A. 制定Amazon Route 53的地理路線政策,以便向兩個NLB中的一個提出路線請求。 建立 Amazon CloudFront 分佈。 使用 Route 53 記錄作為 Distribution 來源。
- B. 在 AWS 全球加速器中建立標準加速器。 建立端點組,我們西-2和eu西-1. 增加兩個NLB作為終點組的終點。
- C. 將 Elastic IP 地址附加到六個 EC2 例項中。 建立 Amazon Route 53 地理定位路由政策, 用於向 EC2 六例之一的路由請求。 建立 Amazon CloudFront 分佈。 使用 Route 53 記錄作為 Distribution 來源.
- D. 將兩個NLB改為兩個應用程式負載平衡器。 建立一個 Amazon Route 53 延遲(latency) 路由政策,用於向兩個ALB中的一個路由請求. 建立 Amazon CloudFront 分佈。 使用 Route 53 記錄作為 Distribution 來源。

**答案**
A


**詳解**
正確答案是 **A**。
- A：制定Amazon Route 53的地理路線政策,以便向兩個NLB中的一個提出路線請求。 建立 Amazon CloudFront 分佈。 使用 Route 53 記錄作為 Distribution 來源 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在 AWS 全球加速器中建立標準加速器。 建立端點組,我們西-2和eu西-1. 增加兩個NLB作為終點組的終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 Elastic IP 地址附加到六個 EC2 例項中。 建立 Amazon Route 53 地理定位路由政策, 用於向 EC2 六例之一的路由請求。 建立 Amazon CloudFront 分佈。 使用 Route 53 記錄作為 Distribution 來源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將兩個NLB改為兩個應用程式負載平衡器。 建立一個 Amazon Route 53 延遲(latency) 路由政策,用於向兩個ALB中的一個路由請求. 建立 Amazon CloudFront 分佈。 使用 Route 53 記錄作為 Distribution 來源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #121

**題目**
一家公司正在對AWS進行線上交易處理工作量。 這種工作量在多AZ部署中使用未加密的Amazon RDS DB例項. 每日資料庫(database)的快照取自此例子. 一個解決方案設計師應該做什麼來確保資料庫(database)和快照總是加密的前進?

**選項**
- A. 加密最新的 DB 快照(snapshot) 的副本。 將現有的 DB 例項替換為恢復加密的 快照(snapshot).
- B. 建立一個新的加密的亞馬遜彈性塊儲存器(Amazon EBS)卷,並將快照複製到其中. 在 DB 例項上啟用 加密(encryption)。
- C. 複製快照並啟用 加密(encryption) 使用 AWS Key Management Service(AWS KMS) 將加密的 快照(snapshot) 恢復到現有的 DB 例項。
- D. 將快照複製到一個使用伺服器側加密(encryption)加密的Amazon S3桶上,並配有AWS Key Management Service(AWS KMS)管理的金鑰(SSE-KMS).

**答案**
A


**詳解**
正確答案是 **A**。
- A：加密最新的 DB 快照(snapshot) 的副本。 將現有的 DB 例項替換為恢復加密的 快照(snapshot)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個新的加密的亞馬遜彈性塊儲存器(Amazon EBS)卷,並將快照複製到其中. 在 DB 例項上啟用 加密(encryption) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：複製快照並啟用 加密(encryption) 使用 AWS Key Management Service(AWS KMS) 將加密的 快照(snapshot) 恢復到現有的 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將快照複製到一個使用伺服器側加密(encryption)加密的Amazon S3桶上,並配有AWS Key Management Service(AWS KMS)管理的金鑰(SSE-KMS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #122

**題目**
一家公司希望建立一個可縮放的關鍵管理基礎設施,以支援需要加密其應用中資料的開發者. 解決方案設計師應如何減輕業務負擔?

**選項**
- A. 使用多要素認證(MFA)來保護加密(encryption)金鑰.
- B. 使用AWS Key Management Service(AWS KMS)來保護加密(encryption)鍵.
- C. 使用AWS Certificate Manager(ACM)來建立,儲存,並指定加密(encryption)鍵.
- D. 使用IAM 政策(IAM policy)限制擁有存取許可權的使用者保護加密(encryption)金鑰的範圍.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用AWS Key Management Service(AWS KMS)來保護加密(encryption)鍵。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用多要素認證(MFA)來保護加密(encryption)金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Certificate Manager(ACM)來建立,儲存,並指定加密(encryption)鍵。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用IAM 政策(IAM policy)限制擁有存取許可權的使用者保護加密(encryption)金鑰的範圍。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #123

**題目**
一家公司有兩個Amazon EC2的動態網路應用程式。 該公司擁有自己的SSL憑證,每個例項上都有執行SSL終止的憑證. 最近流量增加,運營團隊確定SSL 加密(encryption)和解密(decryption)導致網路伺服器的計算能力達到最大極限. 一個解決方案架構師應該做什麼來提高應用程式的效能?

**選項**
- A. 使用 AWS Certificate Manager(ACM) 建立新的 SSL 憑證。 在每個例項上安裝ACM憑證。
- B. 建立 Amazon S3 桶將 SSL 憑證移到 S3 儲存桶(S3 bucket)。 配置 EC2 例項以引用 SSL 終止的桶。
- C. 作為代理伺服器建立另一個 EC2 例項。 將 SSL 憑證移到新例項, 並配置它來直接連線到現有的 EC2 例項。
- D. 將SSL憑證匯入 AWS Certificate Manager(ACM). 建立一個使用來自ACM的SSL憑證的HTTPS聽器的應用程式負載平衡器(Application Load Balancer).

**答案**
D


**詳解**
正確答案是 **D**。
- D：將SSL憑證匯入 AWS Certificate Manager(ACM). 建立一個使用來自ACM的SSL憑證的HTTPS聽器的應用程式負載平衡器(Application Load Balancer)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS Certificate Manager(ACM) 建立新的 SSL 憑證。 在每個例項上安裝ACM憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon S3 桶將 SSL 憑證移到 S3 儲存桶(S3 bucket)。 配置 EC2 例項以引用 SSL 終止的桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：作為代理伺服器建立另一個 EC2 例項。 將 SSL 憑證移到新例項, 並配置它來直接連線到現有的 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #124

**題目**
一家公司擁有高度動態的批次處理工作,使用許多Amazon EC2例項來完成. 該工作在性質上是無狀態的,可以在任何特定時間開始和停止,沒有負面影響,通常總共需要60分鐘以上才能完成. 公司要求解決方案架構師設計符合工作要求的可伸縮且具有成本效益的解決方案. 解決方案設計師應該建議什麼?

**選項**
- A. 執行EC2例項。
- B. 購買EC2 保留例項。
- C. 執行EC2 裁決。
- D. 在AWS Lambda上實施處理.

**答案**
A


**詳解**
正確答案是 **A**。
- A：執行EC2例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：購買EC2 保留例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：執行EC2 裁決。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Lambda上實施處理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #125

**題目**
一家公司在AWS上經營其兩級電子商務網站. 網路層由負載平衡器(load balancer)組成,它向Amazon EC2 執行個體傳送流量. 資料庫(database)級使用Amazon RDS DB例項. EC2 執行個體和RDS DB案例不應在公共網際網路上曝光。 EC2案要求網際網路透過第三方網路服務完成訂單的支付處理。 申請必須非常方便。 哪些組合組合的配置方案將滿足這些要求?(選二.

**選項**
- A. 使用Auto Scaling 群組(Auto Scaling group)在私人子網中啟動EC2 執行個體. 在私人子網中部署 RDS 多AZ DB 例項。
- B. 配置一個VPC,有兩個私人子網和兩個NAT閘道器跨越兩個可用區(Availability Zones). 在私人子網中部署一個應用程式負載平衡器(Application Load Balancer).
- C. 使用Auto Scaling 群組(Auto Scaling group)在兩個可用區(Availability Zones)的公共子網中啟動EC2例項. 在私人子網中部署 RDS 多AZ DB 例項。
- D. 配置一個VPC,有一個公共子網,一個私人子網,兩個NAT閘道器跨越兩個可用區(Availability Zones). 在公共子網部署一個應用程式負載平衡器(Application Load Balancer).
- E. 配置一個VPC,有兩個公共子網,兩個私有子網,兩個NAT閘道器跨越兩個可用區(Availability Zones). 在公共子網中部署一個應用程式負載平衡器(Application Load Balancer).

**答案**
C,E



**詳解**
正確答案是 **C, E**。
- C：使用Auto Scaling 群組(Auto Scaling group)在兩個可用區(Availability Zones)的公共子網中啟動EC2例項. 在私人子網中部署 RDS 多AZ DB 例項 。此選項符合題目條件，能有效滿足核心需求。
- E：配置一個VPC,有兩個公共子網,兩個私有子網,兩個NAT閘道器跨越兩個可用區(Availability Zones). 在公共子網中部署一個應用程式負載平衡器(Application Load Balancer)。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用Auto Scaling 群組(Auto Scaling group)在私人子網中啟動EC2 執行個體. 在私人子網中部署 RDS 多AZ DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置一個VPC,有兩個私人子網和兩個NAT閘道器跨越兩個可用區(Availability Zones). 在私人子網中部署一個應用程式負載平衡器(Application Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個VPC,有一個公共子網,一個私人子網,兩個NAT閘道器跨越兩個可用區(Availability Zones). 在公共子網部署一個應用程式負載平衡器(Application Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #126

**題目**
一個解決方案架構師需要實施一個解決方案來降低公司的儲存成本. 公司的所有資料都屬於Amazon S3標準儲存類. 公司必須將所有資料儲存至少25年. 最近兩年的資料必須非常可用,並且可以立即檢索。 哪種解決辦法能滿足這些要求?

**選項**
- A. 立即設定一個S3 生命週期政策(Lifecycle policy)來轉換物件到S3 Glacier Deep Archive.
- B. 在2年後設定一個S3 生命週期政策(Lifecycle policy)來向S3 Glacier Deep Archive轉換物件.
- C. 使用S3 Intelligent-Tiering. 啟用歸檔選項,以確保資料存檔於S3 Glacier Deep Archive.
- D. 立即設定一個S3 生命週期政策(Lifecycle policy)來轉換物件到S3 One Zone-不經常存取(S3 One Zone-IA),並在兩年後到達S3 Glacier Deep Archive.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在2年後設定一個S3 生命週期政策(Lifecycle policy)來向S3 Glacier Deep Archive轉換物件。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：立即設定一個S3 生命週期政策(Lifecycle policy)來轉換物件到S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用S3 Intelligent-Tiering. 啟用歸檔選項,以確保資料存檔於S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：立即設定一個S3 生命週期政策(Lifecycle policy)來轉換物件到S3 One Zone-不經常存取(S3 One Zone-IA),並在兩年後到達S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #127

**題目**
一家媒體公司正在評估將其系統移至AWS雲的可能性。 該公司需要至少10個TB儲存,並儘可能在影片處理中進行I/O效能,300個TB儲存非常耐用,儲存媒體內容,900個TB儲存,以滿足不再使用的檔案媒體的要求. 一個解決方案設計師應該建議哪些服務來滿足這些要求?

**選項**
- A. Amazon EBS用於最大效能,Amazon S3用於持久資料儲存,Amazon S3用於存檔儲存的冰川
- B. Amazon EBS用於最大效能,Amazon EFS用於持久資料儲存,Amazon S3用於存檔儲存的冰川
- C. Amazon EC2 最大效能例項儲存,Amazon EFS 持久資料儲存,Amazon S3 存檔儲存
- D. Amazon EC2 最大效能例項儲存,Amazon S3 持久資料儲存,Amazon S3 Glacier 存檔儲存

**答案**
A


**詳解**
正確答案是 **A**。
- A：Amazon EBS用於最大效能,Amazon S3用於持久資料儲存,Amazon S3用於存檔儲存的冰川。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：Amazon EBS用於最大效能,Amazon EFS用於持久資料儲存,Amazon S3用於存檔儲存的冰川。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：Amazon EC2 最大效能例項儲存,Amazon EFS 持久資料儲存,Amazon S3 存檔儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon EC2 最大效能例項儲存,Amazon S3 持久資料儲存,Amazon S3 Glacier 存檔儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #128

**題目**
一家公司希望在AWS雲的容器中執行應用程式. 這些應用是無狀態的,可以容忍基本基礎設施的中斷。 公司需要一種能將成本降到最低的解決方案和營運開銷(operational overhead). 解決方案設計師應如何滿足這些要求?

**選項**
- A. 在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 中使用 Spotexacts 來執行應用容器.
- B. 在Amazon Elastic Kubernetes Service(Amazon EKS)中使用Spot 執行個體管理節點組.
- C. 在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 中使用線上例項來執行應用程式容器。
- D. 在Amazon Elastic Kubernetes Service(Amazon EKS)中使用 On-Demand Incents 管理節點組.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 中使用 Spotexacts 來執行應用容器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在Amazon Elastic Kubernetes Service(Amazon EKS)中使用Spot 執行個體管理節點組。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 中使用線上例項來執行應用程式容器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon Elastic Kubernetes Service(Amazon EKS)中使用 On-Demand Incents 管理節點組。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #129

**題目**
一家公司正在房舍上執行一個多層次的網路應用程式。 網路應用程式被裝箱,執行在多個Linux主機上,連線到包含使用者記錄的PostgreSQL 資料庫(database). 維持基礎設施和能力規劃的營運開銷(operational overhead)限制了公司的增長。 解決方案設計師必須改進應用程式的基礎設施。 設計者應採取何種綜合行動來實現這一目標?(選二.

**選項**
- A. 將PostgreSQL 資料庫(database)遷移到Amazon Aurora.
- B. 在 Amazon EC2 例項上移動將要託管的網路應用程式。
- C. 為網路應用內容設定Amazon CloudFront發行版.
- D. 在網路應用程式和PostgreSQL 資料庫(database)之間設定Amazon ElastiCache.
- E. 與亞馬遜彈性容器服務公司(Amazon ECS)在AWS Fargate上移動將託管的網路應用程式.

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：將PostgreSQL 資料庫(database)遷移到Amazon Aurora。此選項符合題目條件，能有效滿足核心需求。
- E：與亞馬遜彈性容器服務公司(Amazon ECS)在AWS Fargate上移動將託管的網路應用程式。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在 Amazon EC2 例項上移動將要託管的網路應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為網路應用內容設定Amazon CloudFront發行版。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在網路應用程式和PostgreSQL 資料庫(database)之間設定Amazon ElastiCache。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #130

**題目**
Amazon EC2的應用程式貫穿多個可提供Zonas。 這些執行個體發生在應用程式負載平衡器(Application Load Balancer)後面的Amazon EC2 Auto Scaling 群組(Auto Scaling group)中。 當EC2例項的CPU使用率達到或接近40%時,應用效果最好. 一個解決方案設計師應該做些什麼來保持集團中所有情況下的預期業績?

**選項**
- A. 用簡單的縮放策略來動態地縮放Auto Scaling 群組(Auto Scaling group).
- B. 使用目標跟蹤策略來動態放大Auto Scaling 群組(Auto Scaling group).
- C. 使用 AWS Lambda 函式 ta 更新所期望的Auto Scaling 群組(Auto Scaling group)容量.
- D. 利用預定的擴大行動來擴大和縮小Auto Scaling 群組(Auto Scaling group)。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用目標跟蹤策略來動態放大Auto Scaling 群組(Auto Scaling group)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：用簡單的縮放策略來動態地縮放Auto Scaling 群組(Auto Scaling group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Lambda 函式 ta 更新所期望的Auto Scaling 群組(Auto Scaling group)容量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：利用預定的擴大行動來擴大和縮小Auto Scaling 群組(Auto Scaling group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #131

**題目**
一家公司正在開發一個檔案共享應用程式,將使用Amazon S3桶進行儲存. 公司希望透過Amazon CloudFront發行服務所有檔案. 公司不希望檔案透過直接導航到S3 URL來存取. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 為每個 S3 儲存桶(S3 bucket) 編寫單個政策, 僅允許 CloudFront 存取。
- B. 建立 IAM 使用者。 給使用者讀取S3 儲存桶(S3 bucket)中物件的許可權. 指派使用者至雲龍.
- C. 寫一個S3 儲存桶政策(bucket policy),指定CloudFront發行ID為特等,並指定目標S3 儲存桶(S3 bucket)為亞馬遜資源名稱(ARN).
- D. 建立來源存取身份( OAI)。 指定審調局負責雲紋發行. 配置S3 儲存桶(S3 bucket)許可權,以便只有審調處有讀取許可權.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立來源存取身份( OAI)。 指定審調局負責雲紋發行. 配置S3 儲存桶(S3 bucket)許可權,以便只有審調處有讀取許可權。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為每個 S3 儲存桶(S3 bucket) 編寫單個政策, 僅允許 CloudFront 存取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 IAM 使用者。 給使用者讀取S3 儲存桶(S3 bucket)中物件的許可權. 指派使用者至雲龍。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：寫一個S3 儲存桶政策(bucket policy),指定CloudFront發行ID為特等,並指定目標S3 儲存桶(S3 bucket)為亞馬遜資源名稱(ARN)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #132

**題目**
一家公司的網站為使用者提供可下載的歷史業績報告. 網站需要一個解決方案, 解決辦法應具有成本效益,限制基礎設施資源的提供,並提供儘可能快的反應時間。 解決方案設計師建議何種組合滿足這些要求?

**選項**
- A. Amazon CloudFront和Amazon S3(中文(簡體) ).
- B. AWS Lambda和Amazon DynamoDB(中文(簡體) ).
- C. 應用程式負載平衡器(Application Load Balancer) 帶有 Amazon EC2 自動縮放
- D. Amazon Route 53 帶有內部應用程式負載平衡器

**答案**
A


**詳解**
正確答案是 **A**。
- A：Amazon CloudFront和Amazon S3(中文(簡體) )。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：AWS Lambda和Amazon DynamoDB(中文(簡體) )。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：應用程式負載平衡器(Application Load Balancer) 帶有 Amazon EC2 自動縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon Route 53 帶有內部應用程式負載平衡器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #133

**題目**
一家公司在房地經營一個甲骨文資料庫(database)。 作為公司向AWS遷移的一部分,公司希望將資料庫(database)升級為最新版本. 公司也希望為資料庫(database)公司設立災難復原(disaster recovery)(DR). 公司需要將正常執行和DR設定的營運開銷(operational overhead)最小化. 公司還需要維持資料庫(database)基礎作業系統的接入. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將甲骨文資料庫(database)遷移到Amazon EC2 執行個體. 將資料庫(database) 複寫(replication)設定到不同的AWS 區域(Region).
- B. 將甲骨文資料庫(database)遷移到甲骨文Amazon RDS. 啟用Cross-區域(Region)自動備份,將快照複製到另一個AWS 區域(Region).
- C. 將甲骨文 資料庫(database) 修改為 Amazon RDS Oracle 自定義。 在另一個 AWS 區域(Region) 中為 資料庫(database) 建立讀本複製.
- D. 將甲骨文資料庫(database)遷移到Amazon RDS用於甲骨文. 在另一個可用區(Availability Zone)中建立備用資料庫(database).

**答案**
D


**詳解**
正確答案是 **D**。
- D：將甲骨文資料庫(database)遷移到Amazon RDS用於甲骨文. 在另一個可用區(Availability Zone)中建立備用資料庫(database)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將甲骨文資料庫(database)遷移到Amazon EC2 執行個體. 將資料庫(database) 複寫(replication)設定到不同的AWS 區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將甲骨文資料庫(database)遷移到甲骨文Amazon RDS. 啟用Cross-區域(Region)自動備份,將快照複製到另一個AWS 區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將甲骨文 資料庫(database) 修改為 Amazon RDS Oracle 自定義。 在另一個 AWS 區域(Region) 中為 資料庫(database) 建立讀本複製。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #134

**題目**
一個公司想要將其應用程式移動到一個沒有伺服器的解決方案. 無伺服器解決方案需要透過使用SL分析現有和新資料. 公司將資料儲存在Amazon S3桶中. 資料需要加密(encryption),必須複製到不同的AWS 區域(Region). 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立新的S3 儲存桶(S3 bucket). 將資料裝入新的S3 儲存桶(S3 bucket). 使用S3 Cross-Region Replication(CRR)在另一個區域(Region)中將加密物件複製到一個S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption)與AWS KMS多區域(Region) kays(SSE-KMS). 使用Amazon Athena查詢資料.
- B. 建立新的S3 儲存桶(S3 bucket). 將資料裝入新的S3 儲存桶(S3 bucket). 使用S3 Cross-Region Replication(CRR)在另一個區域(Region)中將加密物件複製到一個S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption)與AWS KMS多區域(Region)鍵(SSE-KMS). 使用Amazon RDS查詢資料.
- C. 將資料裝入現有的S3 儲存桶(S3 bucket). 使用S3 Cross-Region Replication(CRR)在另一個區域(Region)中將加密物件複製到一個S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption),由Amazon S3管理加密(encryption)鍵(SSE-S3). 使用Amazon Athena查詢資料.
- D. 將資料裝入現有的S3 儲存桶(S3 bucket). 使用S3 Cross-Region Replication(CRR)在另一個區域(Region)中將加密物件複製到一個S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption),由Amazon S3管理加密(encryption)鍵(SSE-S3). 使用Amazon RDS查詢資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立新的S3 儲存桶(S3 bucket). 將資料裝入新的S3 儲存桶(S3 bucket). 使用S3 Cross-Region Replication(CRR)在另一個區域(Region)中將加密物件複製到一個S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption)與AWS KMS多區域(Region) kays(SSE-KMS). 使用Amazon Athena查詢資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立新的S3 儲存桶(S3 bucket). 將資料裝入新的S3 儲存桶(S3 bucket). 使用S3 Cross-Region Replication(CRR)在另一個區域(Region)中將加密物件複製到一個S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption)與AWS KMS多區域(Region)鍵(SSE-KMS). 使用Amazon RDS查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料裝入現有的S3 儲存桶(S3 bucket). 使用S3 Cross-Region Replication(CRR)在另一個區域(Region)中將加密物件複製到一個S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption),由Amazon S3管理加密(encryption)鍵(SSE-S3). 使用Amazon Athena查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料裝入現有的S3 儲存桶(S3 bucket). 使用S3 Cross-Region Replication(CRR)在另一個區域(Region)中將加密物件複製到一個S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption),由Amazon S3管理加密(encryption)鍵(SSE-S3). 使用Amazon RDS查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #135

**題目**
一個公司在AWS上承擔工作量. 公司需要連線到外部提供者的服務. 服務託管於供應商的VPC. 公司的安全團隊認為,連線必須是私人的,必須限於目標服務. 聯絡只能由公司的VPC啟動。 哪一種辦法能滿足這些要求?

**選項**
- A. 在公司VPC和供應商VPC之間建立VPC對等連線. 更新路由表以連線到目標服務.
- B. 請供應商在其VPC中建立虛擬私有閘道(virtual private gateway). 使用 AWS PrivateLink 連線到目標服務.
- C. 在公司的VPUpdate路由表的公共子網中建立一個NAT閘道器來連線目標服務.
- D. 請提供者為目標服務建立VPC 端點(VPC endpoint). 使用 AWS PrivateLink 連線到目標服務.

**答案**
D


**詳解**
正確答案是 **D**。
- D：請提供者為目標服務建立VPC 端點(VPC endpoint). 使用 AWS PrivateLink 連線到目標服務。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在公司VPC和供應商VPC之間建立VPC對等連線. 更新路由表以連線到目標服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：請供應商在其VPC中建立虛擬私有閘道(virtual private gateway). 使用 AWS PrivateLink 連線到目標服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在公司的VPUpdate路由表的公共子網中建立一個NAT閘道器來連線目標服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #136

**題目**
一家公司正在將其房地PostgreSQL 資料庫(database)遷移到Amazon Aurora PostgreSQL。 資料庫(database)在遷移期間必須保持線上和無障礙。 Aurora 資料庫(database)型機車必須與原型機資料庫(database)型機車保持同步. 設計師必須採取何種綜合行動來滿足這些要求?(選二.

**選項**
- A. 建立一個正在進行的複寫(replication)任務.
- B. 建立一個資料庫(database) 備份(backup) 預設的資料庫(database).
- C. 建立 AWS 資料庫(Database) 遷移服務(AWS DSM) 複寫(replication) 伺服器.
- D. 透過使用 AWS Schema 轉換工具( AWS SCT) 轉換 資料庫(database) 計劃.
- E. 建立 Amazon EventBridge(Amazon CloudWatch Events)規則,以監控資料庫(database)同步.

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：建立 AWS 資料庫(Database) 遷移服務(AWS DSM) 複寫(replication) 伺服器。此選項符合題目條件，能有效滿足核心需求。
- D：透過使用 AWS Schema 轉換工具( AWS SCT) 轉換 資料庫(database) 計劃。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：建立一個正在進行的複寫(replication)任務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個資料庫(database) 備份(backup) 預設的資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立 Amazon EventBridge(Amazon CloudWatch Events)規則,以監控資料庫(database)同步。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #137

**題目**
一家公司使用AWS Organizations為每個業務單位建立專門的AWS帳戶,根據請求獨立管理每個業務單位的帳戶. root 電子郵件收件人錯過了傳送到一個帳戶的root 使用者電子郵件地址的通知。 公司希望確保今後不會錯過所有通知. 今後的通知必須限於帳戶管理人。 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置公司的電子郵件伺服器,將傳送到AWS帳戶根使用者電子郵件地址的通知郵件轉發給組織內的所有使用者.
- B. 配置所有 AWS 帳戶的 root 使用者電子郵件地址作為分發列表,這些地址會傳送給少數可以響應提醒的管理員. 在 AWS Organizations 控制檯或程式上配置 AWS 帳戶替代聯絡人。
- C. 配置所有 AWS 帳戶使用者根電子郵件訊息, 傳送給負責 監控(monitoring) 提醒的管理員, 並將這些提醒轉發給相應的組。
- D. 配置所有已有的 AWS 帳戶和所有新建的帳戶以使用相同的根使用者電子郵件地址。 在 AWS Organizations 控制檯或程式上配置 AWS 帳戶替代聯絡人。

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置所有已有的 AWS 帳戶和所有新建的帳戶以使用相同的根使用者電子郵件地址。 在 AWS Organizations 控制檯或程式上配置 AWS 帳戶替代聯絡人 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置公司的電子郵件伺服器,將傳送到AWS帳戶根使用者電子郵件地址的通知郵件轉發給組織內的所有使用者。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置所有 AWS 帳戶的 root 使用者電子郵件地址作為分發列表,這些地址會傳送給少數可以響應提醒的管理員. 在 AWS Organizations 控制檯或程式上配置 AWS 帳戶替代聯絡人 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置所有 AWS 帳戶使用者根電子郵件訊息, 傳送給負責 監控(monitoring) 提醒的管理員, 並將這些提醒轉發給相應的組 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #138

**題目**
一家公司在AWS上執行其電子商務應用程式. 每個新順序都以按摩的形式釋出在兔子MQ佇列中,該佇列執行在單張可用區(Availability Zone)的Amazon EC2 執行個體上. 這些訊息由執行在單獨的EC2例項上的不同應用程式處理. 這個應用程式在另一個EC2例項上將細節儲存在 PostgreSQL 資料庫(database) 中. 所有EC2 執行個體都屬於同一可用區(Availability Zone)。 公司需要重新設計其架構,以提供最高可用量,至少提供營運開銷(operational overhead). 解決方案設計師應如何滿足這些要求?

**選項**
- A. 在 Amazon MQ 上將佇列移到 rabbitMQ 例項的冗餘對(活動/待命)。 為主機的 EC2 例項建立多 AZ Auto Scaling 群組(Auto Scaling group)。 為託管 PostgreSQL 資料庫(database) 的EC2 例項建立另一個多 AZ Auto Scaling 群組(Auto Scaling group)。
- B. 在 Amazon MQ 上將佇列移到 rabbitMQ 例項的冗餘對(活動/待命)。 為主機的 EC2 例項建立多 AZ Auto Scaling 群組(Auto Scaling group)。 將資料庫(database)型機車在Amazon RDS的多AZ部署下執行,用於PostgreSQL.
- C. 為託管 RabbitMQ 佇列的 EC2 例項建立多 AZ Auto Scaling 群組(Auto Scaling group)。 為託管應用程式的EC2例項建立另一個多 AZ Auto Scaling 群組(Auto Scaling group)。 將資料庫(database)型機車在Amazon RDS的多AZ部署下執行,用於PostgreSQL.
- D. 為託管 RabbitMQ 佇列的 EC2 例項建立多 AZ Auto Scaling 群組(Auto Scaling group)。 為託管應用程式的EC2例項建立另一個多 AZ Auto Scaling 群組(Auto Scaling group)。 為託管 PostgreSQL 資料庫(database) 的EC2 例項建立第三個多AZ Auto Scaling 群組(Auto Scaling group)

**答案**
B


**詳解**
正確答案是 **B**。
- B：在 Amazon MQ 上將佇列移到 rabbitMQ 例項的冗餘對(活動/待命)。 為主機的 EC2 例項建立多 AZ Auto Scaling 群組(Auto Scaling group)。 將資料庫(database)型機車在Amazon RDS的多AZ部署下執行,用於PostgreSQL。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 Amazon MQ 上將佇列移到 rabbitMQ 例項的冗餘對(活動/待命)。 為主機的 EC2 例項建立多 AZ Auto Scaling 群組(Auto Scaling group)。 為託管 PostgreSQL 資料庫(database) 的EC2 例項建立另一個多 AZ Auto Scaling 群組(Auto Scaling group) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為託管 RabbitMQ 佇列的 EC2 例項建立多 AZ Auto Scaling 群組(Auto Scaling group)。 為託管應用程式的EC2例項建立另一個多 AZ Auto Scaling 群組(Auto Scaling group)。 將資料庫(database)型機車在Amazon RDS的多AZ部署下執行,用於PostgreSQL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為託管 RabbitMQ 佇列的 EC2 例項建立多 AZ Auto Scaling 群組(Auto Scaling group)。 為託管應用程式的EC2例項建立另一個多 AZ Auto Scaling 群組(Auto Scaling group)。 為託管 PostgreSQL 資料庫(database) 的EC2 例項建立第三個多AZ Auto Scaling 群組(Auto Scaling group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #139

**題目**
一個報告小組每天在Amazon S3桶中接收檔案. 報告小組每天手動審查並複製從這個最初的S3 儲存桶(S3 bucket)到一個分析的S3 儲存桶(S3 bucket)的檔案,以便與Amazon QuickSight同時使用. 更多團隊開始向最初的S3 儲存桶(S3 bucket)傳送更多更大尺寸的檔案. 報告小組希望隨著檔案進入最初的S3 儲存桶(S3 bucket),檔案自動移動S3 儲存桶(S3 bucket)分析. 報告組也希望使用AWS Lambda功能在複製的資料上執行模式匹配程式碼. 此外,報告小組希望將資料檔案傳送到亞馬遜SageMaker管道的一條管道. 解決方案設計師應如何用LEAST 營運開銷(operational overhead)滿足這些要求?

**選項**
- A. 建立 Lambda 函式,將檔案複製到分析 S3 儲存桶(S3 bucket). 為分析建立 S3 事件通知 S3 儲存桶(S3 bucket). 配置Lambda和SageMaker管道作為事件通知的目的地。 配置 s3: ObjectCreated: Put 作為事件型別.
- B. 建立 Lambda 函式,將檔案複製到分析 S3 儲存桶(S3 bucket). 配置分析 S3 儲存桶(S3 bucket) 向 Amazon EventBridge(Amazon CloudWatch Events) 傳送事件通知. 在 EventBridge(Cloud Watch Events) 中配置一個物件建立規則。 配置Lambda和SageMaker管道作為規則的目標.
- C. 配置 S3 桶之間的 S3 複寫(replication)。 為分析建立 S3 事件通知 S3 儲存桶(S3 bucket). 配置Lambda和SageMaker管道作為事件通知的目的地。 配置 s3: ObjectCreated: Put 作為事件型別.
- D. 配置 S3 桶之間的 S3 複寫(replication)。 配置分析 S3 儲存桶(S3 bucket) 向 Amazon EventBridge(Amazon CloudWatch Events) 傳送事件通知. 在 EventBridge(Cloud Watch Events) 中配置一個物件建立規則。 配置Lambda和SageMaker管道作為規則的目標.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Lambda 函式,將檔案複製到分析 S3 儲存桶(S3 bucket). 為分析建立 S3 事件通知 S3 儲存桶(S3 bucket). 配置Lambda和SageMaker管道作為事件通知的目的地。 配置 s3: ObjectCreated: Put 作為事件型別。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立 Lambda 函式,將檔案複製到分析 S3 儲存桶(S3 bucket). 配置分析 S3 儲存桶(S3 bucket) 向 Amazon EventBridge(Amazon CloudWatch Events) 傳送事件通知. 在 EventBridge(Cloud Watch Events) 中配置一個物件建立規則。 配置Lambda和SageMaker管道作為規則的目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 S3 桶之間的 S3 複寫(replication)。 為分析建立 S3 事件通知 S3 儲存桶(S3 bucket). 配置Lambda和SageMaker管道作為事件通知的目的地。 配置 s3: ObjectCreated: Put 作為事件型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 S3 桶之間的 S3 複寫(replication)。 配置分析 S3 儲存桶(S3 bucket) 向 Amazon EventBridge(Amazon CloudWatch Events) 傳送事件通知. 在 EventBridge(Cloud Watch Events) 中配置一個物件建立規則。 配置Lambda和SageMaker管道作為規則的目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #140

**題目**
一個解決方案架構師需要幫助一個公司最佳化在AWS上執行應用程式的成本. 該應用程式將使用 Amazon EC2 例, AWS Fargate, 和 AWS Lambda 在架構內進行計算. EC2例項將執行應用程式的資料攝入層。 EC2的使用將是零星的和無法預測的。 在EC2例項上執行的工作負荷可以在任何時候中斷. 應用程式前端將在Fargate上執行,Lambda將服務API層. 前端利用率和API層利用率在下一年是可預測的。 哪種採購選擇的組合將為託管這一應用程式提供最符合成本效益的解決方案?(選二.

**選項**
- A. 對資料攝入層使用例項
- B. 資料攝入層使用預設例項
- C. 購買前端和API層的1年計算儲蓄計劃.
- D. 購買資料攝入層的所有預留例項。
- E. 為前端和API層購買為期一年的EC2例項儲蓄計劃。

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：對資料攝入層使用例項。此選項符合題目條件，能有效滿足核心需求。
- C：購買前端和API層的1年計算儲蓄計劃。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：資料攝入層使用預設例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：購買資料攝入層的所有預留例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：為前端和API層購買為期一年的EC2例項儲蓄計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #141

**題目**
一家公司經營一個網路門戶,為使用者提供全球突發新聞,當地警報,天氣更新. 該門戶利用靜態和動態內容的混合,向每個使用者提供個性化的檢視。 內容透過執行在應用程式負載平衡器(Application Load Balancer)(ALB)後Amazon EC2例項上的API伺服器在HTTPS上服務. 公司希望入口網站儘快向世界各地的使用者提供這一內容. 解決方案設計師應如何設計應用程式,以確保所有使用者的LEAST值為延遲(latency)?

**選項**
- A. 在單 AWS 區域(Region) 中部署應用程式堆疊. 使用Amazon CloudFront透過指定ALB為來源來服務所有靜態和動態內容.
- B. 在兩個AWS區域部署應用程式堆疊. 使用 Amazon Route 53 延遲(latency) 路由政策,在最接近的區域(Region)中服務ALB的所有內容.
- C. 在單 AWS 區域(Region) 中部署應用程式堆疊. 使用Amazon CloudFront為靜態內容服務. 直接從ALB服務動態內容.
- D. 在兩個AWS區域部署應用程式堆疊. 使用 Amazon Route 53 地理定位路線政策,在最接近的區域(Region)中服務ALB的所有內容.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在兩個AWS區域部署應用程式堆疊. 使用 Amazon Route 53 延遲(latency) 路由政策,在最接近的區域(Region)中服務ALB的所有內容。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在單 AWS 區域(Region) 中部署應用程式堆疊. 使用Amazon CloudFront透過指定ALB為來源來服務所有靜態和動態內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在單 AWS 區域(Region) 中部署應用程式堆疊. 使用Amazon CloudFront為靜態內容服務. 直接從ALB服務動態內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在兩個AWS區域部署應用程式堆疊. 使用 Amazon Route 53 地理定位路線政策,在最接近的區域(Region)中服務ALB的所有內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #142

**題目**
一個遊戲公司正在設計一個非常可用的建築. 該應用程式執行在經過修改的Linux核心上,只支援基於UDP的流量. 公司需要前端分級,以提供儘可能最好的使用者體驗. 該級必須具有低的延遲(latency),路由流量到最近的邊緣節點(edge location),併為進入應用端點提供靜態IP地址. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 配置 Amazon Route 53 將請求轉發到 應用程式負載平衡器(Application Load Balancer)。 在 AWS 應用程式自動縮放時使用 AWS Lambda 應用程式。
- B. 配置 Amazon CloudFront 將請求轉發到 網路負載平衡器(Network Load Balancer)。 在AWS應用程式Auto Scaling 群組(Auto Scaling group)中使用AWS Lambda進行應用.
- C. 配置 AWS 全球加速器將請求轉發到 網路負載平衡器(Network Load Balancer)。 在EC2 Auto Scaling 群組(Auto Scaling group)中應用Amazon EC2例項.
- D. 配置 Amazon API Gateway 將請求轉發到 應用程式負載平衡器(Application Load Balancer)。 在EC2 Auto Scaling 群組(Auto Scaling group)中應用Amazon EC2例項.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 AWS 全球加速器將請求轉發到 網路負載平衡器(Network Load Balancer)。 在EC2 Auto Scaling 群組(Auto Scaling group)中應用Amazon EC2例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Amazon Route 53 將請求轉發到 應用程式負載平衡器(Application Load Balancer)。 在 AWS 應用程式自動縮放時使用 AWS Lambda 應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 Amazon CloudFront 將請求轉發到 網路負載平衡器(Network Load Balancer)。 在AWS應用程式Auto Scaling 群組(Auto Scaling group)中使用AWS Lambda進行應用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon API Gateway 將請求轉發到 應用程式負載平衡器(Application Load Balancer)。 在EC2 Auto Scaling 群組(Auto Scaling group)中應用Amazon EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #143

**題目**
一家公司希望將其現存的獨立體應用程式遷移到AWS. 公司希望儘量保留前端程式碼和後端程式碼. 然而,公司希望將應用程式破解為較小的應用程式. 每個應用程式將由不同的團隊管理。 公司需要一個高度可擴充套件的解決方案,將營運開銷(operational overhead)最小化. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在 AWS Lambda 上託管申請. 將應用程式與Amazon API Gateway整合.
- B. 以 AWS 擴充套件託管應用程式。 將應用程式連線到與AWS Lambda整合的Amazon API Gateway API.
- C. 在 Amazon EC2 例項上託管應用程式。 在Auto Scaling 群組(Auto Scaling group)中設定以EC2為例的應用程式負載平衡器(Application Load Balancer)作為目標.
- D. 在亞馬遜彈性容器服務(Amazon ECS)上託管應用程式。 建立以亞馬遜ECS為目標的應用程式負載平衡器(Application Load Balancer).

**答案**
D


**詳解**
正確答案是 **D**。
- D：在亞馬遜彈性容器服務(Amazon ECS)上託管應用程式。 建立以亞馬遜ECS為目標的應用程式負載平衡器(Application Load Balancer)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 AWS Lambda 上託管申請. 將應用程式與Amazon API Gateway整合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：以 AWS 擴充套件託管應用程式。 將應用程式連線到與AWS Lambda整合的Amazon API Gateway API。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Amazon EC2 例項上託管應用程式。 在Auto Scaling 群組(Auto Scaling group)中設定以EC2為例的應用程式負載平衡器(Application Load Balancer)作為目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #144

**題目**
最近一家公司開始使用Amazon Aurora作為其全球電子商務應用的資料庫。 在執行大型報告時,開發人員報告說,電子商務應用程式表現不佳。 在審查了Amazon CloudWatch中的衡量標準之後,一名解決方案設計師發現,ReadIOPS和CPUUtilizalion的衡量標準在每月報告執行時正在溢位。 什麼是最符合成本效益的解決辦法?

**選項**
- A. 將月報遷移到Amazon Redshift。
- B. 將月報移到Aurora複製品公司
- C. 將Aurora 資料庫(database)號移動到更大的例項類.
- D. 增加關於Aurora事件的IOPS。

**答案**
B


**詳解**
正確答案是 **B**。
- B：將月報移到Aurora複製品公司。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將月報遷移到Amazon Redshift。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將Aurora 資料庫(database)號移動到更大的例項類。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：增加關於Aurora事件的IOPS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #145

**題目**
一家公司在單一的Amazon EC2 On-Demand Incentry上主持一個網站分析應用程式. 分析軟體使用PHP編寫,並使用MySQL 資料庫(database). 分析軟體,提供PHP的網路伺服器,以及資料庫(database)伺服器均在EC2例項上託管. 應用程式顯示在繁忙時期效能退化的跡象,並出現5xx錯誤. 公司要使應用規模無縫. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 為 MySQL DB 例項將 資料庫(database) 移動到 Amazon RDS。 建立網路應用程式的 AMI。 利用AMI推出第二架EC2 強制實驗. 使用 應用程式負載平衡器(Application Load Balancer) 來分配負載到每個EC2 例項。
- B. 為 MySQL DB 例項將 資料庫(database) 移動到 Amazon RDS。 建立網路應用程式的 AMI。 利用AMI推出第二架EC2 強制實驗. 使用 Amazon Route 53 加權路由,在兩個EC2 例項中分配負載.
- C. 將 資料庫(database) 移動到 Amazon Aurora MySQL DB 例項。 建立 AWS Lambda 函式來停止EC2 例項並更改例項型別。 當CPU利用率超過75%時,建立 Amazon CloudWatch 提醒以引用 Lambda 函式。
- D. 將 資料庫(database) 移動到 Amazon Aurora MySQL DB 例項。 建立網路應用程式的 AMI。 將AMI應用到發射模板中. 以發射模板建立Auto Scaling 群組(Auto Scaling group) 配置發射模板,使用Spot Fleet. 在Auto Scaling 群組(Auto Scaling group)上附加一架應用程式負載平衡器(Application Load Balancer).

**答案**
D


**詳解**
正確答案是 **D**。
- D：將 資料庫(database) 移動到 Amazon Aurora MySQL DB 例項。 建立網路應用程式的 AMI。 將AMI應用到發射模板中. 以發射模板建立Auto Scaling 群組(Auto Scaling group) 配置發射模板,使用Spot Fleet. 在Auto Scaling 群組(Auto Scaling group)上附加一架應用程式負載平衡器(Application Load Balancer)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 MySQL DB 例項將 資料庫(database) 移動到 Amazon RDS。 建立網路應用程式的 AMI。 利用AMI推出第二架EC2 強制實驗. 使用 應用程式負載平衡器(Application Load Balancer) 來分配負載到每個EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 MySQL DB 例項將 資料庫(database) 移動到 Amazon RDS。 建立網路應用程式的 AMI。 利用AMI推出第二架EC2 強制實驗. 使用 Amazon Route 53 加權路由,在兩個EC2 例項中分配負載。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 資料庫(database) 移動到 Amazon Aurora MySQL DB 例項。 建立 AWS Lambda 函式來停止EC2 例項並更改例項型別。 當CPU利用率超過75%時,建立 Amazon CloudWatch 提醒以引用 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #146

**題目**
一家公司在應用程式負載平衡器(Application Load Balancer)之後的一組Amazon EC2 On-Demand Incents上執行一個在生產中的無狀態網路應用程式。 應用程式在每個工作日8小時期間使用量很大。 應用程式的使用在一夜之間是適度和穩定的。 週末的應用使用率較低. 公司希望在不影響申請可用性的情況下將EC2成本降到最低. 哪種解決辦法能滿足這些要求?

**選項**
- A. 對整個工作量使用 Spot 執行個體。
- B. 使用保留例項進行基線使用。 應用所需的任何額外能力時使用 Spot 例項。
- C. 使用當量例項進行基線使用。 應用所需的額外能力時使用 Spot 執行個體。
- D. 使用專用例項進行基線使用。 對應用程式所需的任何額外能力使用線上例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用保留例項進行基線使用。 應用所需的任何額外能力時使用 Spot 例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：對整個工作量使用 Spot 執行個體 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用當量例項進行基線使用。 應用所需的額外能力時使用 Spot 執行個體 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用專用例項進行基線使用。 對應用程式所需的任何額外能力使用線上例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #147

**題目**
公司需要將應用程式日誌檔案保留在關鍵應用程式上10年. 應用程式小組定期存取過去一個月的日誌以排除故障,但超過1個月的日誌很少存取. 該應用程式每月生成超過10個TB的原木. 哪種儲存辦法符合這些要求?

**選項**
- A. 在Amazon S3中儲存日誌. 使用AWS Backup將1個月以上的日誌移動到S3 Glacier Deep Archive.
- B. 在Amazon S3中儲存日誌. 使用S3生命週期政策將1個月以上的日誌移動到S3 Glacier Deep Archive.
- C. 在Amazon CloudWatch Logs中儲存日誌. 使用AWS Backup將1個月以上的日誌移動到S3 Glacier Deep Archive.
- D. 在Amazon CloudWatch Logs中儲存日誌. 使用Amazon S3壽命週期政策將1個月以上的日誌移動到S3 Glacier Deep Archive.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在Amazon S3中儲存日誌. 使用S3生命週期政策將1個月以上的日誌移動到S3 Glacier Deep Archive。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Amazon S3中儲存日誌. 使用AWS Backup將1個月以上的日誌移動到S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon CloudWatch Logs中儲存日誌. 使用AWS Backup將1個月以上的日誌移動到S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon CloudWatch Logs中儲存日誌. 使用Amazon S3壽命週期政策將1個月以上的日誌移動到S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #148

**題目**
亞馬遜簡易通知服務(Amazon SNS) 接收新資料傳送通知的話題 AWS Lambda 處理和儲存資料的功能 由於網路連通性問題,攝入工作封存偶爾會失敗. 失敗發生時,除非公司手動重新執行該工作,否則相應的資料不會被攝入. 解決方案設計師應如何確保所有通知最終得到處理?

**選項**
- A. 配置Lambda功能,用於跨多個可用區(Availability Zones)的部署.
- B. 修改Lambda函式的配置,以增加該函式的CPU和記憶體分配.
- C. 配置 SNS 主題的重試策略, 以增加重試次數和重試之間的等待時間。
- D. 配置一個 Amazon 簡單的佇列服務( Amazon SQS) 佇列作為失敗目的地。 修改 Lambda 函式處理佇列中的訊息。

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置一個 Amazon 簡單的佇列服務( Amazon SQS) 佇列作為失敗目的地。 修改 Lambda 函式處理佇列中的訊息 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置Lambda功能,用於跨多個可用區(Availability Zones)的部署。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：修改Lambda函式的配置,以增加該函式的CPU和記憶體分配。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 SNS 主題的重試策略, 以增加重試次數和重試之間的等待時間 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #149

**題目**
一個公司有一個服務 產生事件資料。 公司希望使用AWS處理收到的事件資料. 資料按具體順序編寫,必須在整個處理過程中保持。 公司希望實施一個將營運開銷(operational overhead)最小化的解決方案. 一個解決方案設計師應該如何做到這一點?

**選項**
- A. 建立 Amazon 簡單佇列服務( Amazon SQS) FIFO 佇列以儲存訊息。 設定 AWS Lambda 函式處理佇列中的訊息.
- B. 建立亞馬遜簡易通知服務(Amazon SNS)主題,以傳送含有有效載荷的通知進行處理。 配置 AWS Lambda 函式為訂閱者。
- C. 建立一個 Amazon 簡單佇列服務(Amazon SQS) 標準佇列來儲存訊息。 設定 AWS Lambda 函式,以獨立處理佇列中的訊息.
- D. 建立亞馬遜簡易通知服務(Amazon SNS)主題,以傳送含有有效載荷的通知進行處理。 配置 Amazon 簡單佇列服務( Amazon SQS) 佇列為訂閱者。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon 簡單佇列服務( Amazon SQS) FIFO 佇列以儲存訊息。 設定 AWS Lambda 函式處理佇列中的訊息。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立亞馬遜簡易通知服務(Amazon SNS)主題,以傳送含有有效載荷的通知進行處理。 配置 AWS Lambda 函式為訂閱者 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個 Amazon 簡單佇列服務(Amazon SQS) 標準佇列來儲存訊息。 設定 AWS Lambda 函式,以獨立處理佇列中的訊息。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立亞馬遜簡易通知服務(Amazon SNS)主題,以傳送含有有效載荷的通知進行處理。 配置 Amazon 簡單佇列服務( Amazon SQS) 佇列為訂閱者 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #150

**題目**
一家公司正在將一個應用程式從現場伺服器轉移到Amazon EC2。 作為遷移設計要求的一部分,解決方案設計師必須實施基礎設施的計量警報。 如果CPU的利用率在短時間內提高到50%以上,公司就無需採取行動. 然而,如果CPU利用率提高到50%以上,並且同時在磁碟上讀取IOPS的比例很高,公司需要儘快行動. 解決方案設計師也必須減少假警報. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 儘可能建立 Amazon CloudWatch 複合提醒。
- B. 建立 Amazon CloudWatch 儀表板,以視覺化度量衡並快速應對問題.
- C. 建立 Amazon CloudWatch 合成金絲雀來監控應用程式併發出警報.
- D. 儘可能建立單一的 Amazon CloudWatch 公尺提醒,並設定多個公尺閾值.

**答案**
A


**詳解**
正確答案是 **A**。
- A：儘可能建立 Amazon CloudWatch 複合提醒 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立 Amazon CloudWatch 儀表板,以視覺化度量衡並快速應對問題。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon CloudWatch 合成金絲雀來監控應用程式併發出警報。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：儘可能建立單一的 Amazon CloudWatch 公尺提醒,並設定多個公尺閾值。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #151

**題目**
一家公司想將它的立體資料中心遷移到AWS. 根據公司合規(compliance)的要求,公司只能使用Ap-東北-3區域(Region). 公司管理人員不得將VPC與網際網路連線。 哪些解決辦法能滿足這些要求?(選二.

**選項**
- A. 使用AWS控制塔來實施資料居住護欄來拒絕網際網路存取,並拒絕所有AWS區域的存取,除了AP-東北-3.
- B. 使用AWS WAF的規則防止網際網路接入. 除AWS帳戶設定中的AP-東北-3外,拒絕進入所有AWS區域.
- C. 使用AWS Organizations配置服務控制政策(SCPS),阻止VPC獲得網際網路存取. 除東北3區外,不準進入所有AWS地區。
- D. 為每個 VPC 中 網路 ACL(network ACL) 建立出局規則,以拒絕 0.0/0. 為每個使用者建立IAM 政策(IAM policy),以防止使用除AP-東北-3以外的任何AWS 區域(Region).
- E. 使用AWS Config啟動管理規則,以檢測和警示網際網路閘道器,並檢測和警示部署在東北-3以外的新資源。

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：使用AWS控制塔來實施資料居住護欄來拒絕網際網路存取,並拒絕所有AWS區域的存取,除了AP-東北-3。此選項符合題目條件，能有效滿足核心需求。
- C：使用AWS Organizations配置服務控制政策(SCPS),阻止VPC獲得網際網路存取. 除東北3區外,不準進入所有AWS地區。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：使用AWS WAF的規則防止網際網路接入. 除AWS帳戶設定中的AP-東北-3外,拒絕進入所有AWS區域。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為每個 VPC 中 網路 ACL(network ACL) 建立出局規則,以拒絕 0.0/0. 為每個使用者建立IAM 政策(IAM policy),以防止使用除AP-東北-3以外的任何AWS 區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用AWS Config啟動管理規則,以檢測和警示網際網路閘道器,並檢測和警示部署在東北-3以外的新資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #152

**題目**
公司使用三級網路應用程式為新員工提供培訓. 每天只能存取12小時。 該公司正使用Amazon RDS用於MySQL DB例項儲存資訊,並希望將成本降到最低. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 為 AWS Systems Manager 會話管理器配置 IAM 政策(IAM policy)。 為政策建立IAM角色. 更新角色的信任關係. 為 DB 例項設定自動啟動和停止。
- B. 為 Redis 快取叢集建立 Amazon ElastiCache,讓使用者在 DB 例項停止時能夠存取快取中的資料. DB 例項啟動後將快取無效。
- C. 推出Amazon EC2 執行個體. 建立一個IAM角色,允許存取Amazon RDS. 將角色附加到EC2例項中. 配置一個 cron 任務, 以啟動和停止 EC2 例項。
- D. 建立 AWS Lambda 函式以啟動和停止 DB 例項。 建立 Amazon EventBridge(Amazon CloudWatch Events) 計劃規則以引用 Lambda 函式. 配置 Lambda 函式作為規則的事件目標。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 AWS Lambda 函式以啟動和停止 DB 例項。 建立 Amazon EventBridge(Amazon CloudWatch Events) 計劃規則以引用 Lambda 函式. 配置 Lambda 函式作為規則的事件目標 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 AWS Systems Manager 會話管理器配置 IAM 政策(IAM policy)。 為政策建立IAM角色. 更新角色的信任關係. 為 DB 例項設定自動啟動和停止 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 Redis 快取叢集建立 Amazon ElastiCache,讓使用者在 DB 例項停止時能夠存取快取中的資料. DB 例項啟動後將快取無效 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：推出Amazon EC2 執行個體. 建立一個IAM角色,允許存取Amazon RDS. 將角色附加到EC2例項中. 配置一個 cron 任務, 以啟動和停止 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #153

**題目**
一家公司銷售由流行歌曲的片段創造的鈴聲. 包含環狀體的檔案儲存在Amazon S3 Standard中,大小至少為128 KB. 公司擁有上百萬個檔案,但對於90天以上的ringtones,下載次數很少. 公司需要在儲存上節省資金,同時保留使用者隨時可以獲取的最多檔案. 公司應採取何種行動,以成本效益高的方式滿足這些要求?

**選項**
- A. 為物件的初始儲存級配置 S3 標準-不頻繁存取(S3 Standard-IA) 儲存.
- B. 將檔案移動到 S3 Intelligent-Tiering,並在90天后將其配置為將物件移動到更便宜的儲存級.
- C. 配置 S3 存貨管理物件,並在90天后移動到 S3 標準-不頻繁存取(S3 Standard-1A).
- D. 實施一個S3 生命週期政策(Lifecycle policy),在90天后將物件從S3標準移動到S3標準-不頻繁存取(S3 Standard-1A).

**答案**
D


**詳解**
正確答案是 **D**。
- D：實施一個S3 生命週期政策(Lifecycle policy),在90天后將物件從S3標準移動到S3標準-不頻繁存取(S3 Standard-1A)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為物件的初始儲存級配置 S3 標準-不頻繁存取(S3 Standard-IA) 儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將檔案移動到 S3 Intelligent-Tiering,並在90天后將其配置為將物件移動到更便宜的儲存級。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 S3 存貨管理物件,並在90天后移動到 S3 標準-不頻繁存取(S3 Standard-1A)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #154

**題目**
一個公司需要將結果從醫療試驗儲存到Amazon S3儲存處. 暫存器必須允許少數科學家新增新檔案,而且必須限制所有其他使用者只讀存取. 任何使用者都無法修改或刪除暫存器中的任何檔案. 公司必須在建立日期後至少將儲存庫中的每個檔案儲存一年. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在治理模式中使用S3 Object Lock,合法持有期為1年.
- B. 在合規(compliance)模式中使用S3 Object Lock,保留期為365天.
- C. 使用 IAM 角色來限制所有使用者刪除或更改 S3 儲存桶(S3 bucket) 中的物件. 使用一個S3 儲存桶政策(bucket policy)只允許IAM角色.
- D. 配置 S3 儲存桶(S3 bucket) 以每次新增物件時引用 AWS Lambda 函式。 配置函式以跟蹤儲存物件的雜湊,從而可以相應標記修改物件.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在合規(compliance)模式中使用S3 Object Lock,保留期為365天。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在治理模式中使用S3 Object Lock,合法持有期為1年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 IAM 角色來限制所有使用者刪除或更改 S3 儲存桶(S3 bucket) 中的物件. 使用一個S3 儲存桶政策(bucket policy)只允許IAM角色。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 S3 儲存桶(S3 bucket) 以每次新增物件時引用 AWS Lambda 函式。 配置函式以跟蹤儲存物件的雜湊,從而可以相應標記修改物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #155

**題目**
一個大型媒體公司在AWS上主持一個網路應用程式. 該公司希望開始快取機密媒體檔案,以便世界各地的使用者能夠可靠地查閱這些檔案。 內容儲存在Amazon S3桶中. 公司必須迅速交付內容,無論請求來自何處。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS 資料同步將 S3 桶連線到網路應用程式.
- B. 部署 AWS 全球加速器將 S3 桶連線到網路應用程式。
- C. 部署Amazon CloudFront將S3桶連線到CloudFront邊緣伺服器.
- D. 使用亞馬遜簡易排隊服務(Amazon SQS)將S3桶連線到網路應用程式.

**答案**
C


**詳解**
正確答案是 **C**。
- C：部署Amazon CloudFront將S3桶連線到CloudFront邊緣伺服器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 資料同步將 S3 桶連線到網路應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：部署 AWS 全球加速器將 S3 桶連線到網路應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用亞馬遜簡易排隊服務(Amazon SQS)將S3桶連線到網路應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #156

**題目**
一家公司生產來自不同資料庫的批次資料。 公司還從網路感測器和應用API中生成直播流資料. 公司需要將所有資料整合成一個商業分析地點. 公司需要處理收到的資料,然後用不同的Amazon S3桶進行資料分級. 團隊日後將進行一次性查詢,並將資料匯入商業智慧工具,以顯示關鍵績效指標(KPI). 哪些步驟與 " LEAST 營運開銷(operational overhead) " 組合可滿足這些要求?(選二.

**選項**
- A. 使用Amazon Athena進行一次性查詢. 使用Amazon QuickSight為KPI建立儀表板.
- B. 一次性查詢使用Amazon Kinesis資料分析. 使用Amazon QuickSight為KPI建立儀表板.
- C. 建立自定義的 AWS Lambda 函式,將單個記錄從資料庫移動到 Amazon Redshift 叢集.
- D. 使用 AWS Glue 提取,轉換,並載入(ETL)任務將資料轉換為JSON格式. 將資料裝入多個 Amazon OpenSearch Service(Amazon Elasticsearch Service) 叢集.
- E. 使用AWS湖形成中的藍圖來識別可以被攝入資料湖(data lake)的資料. 使用AWS Glue來爬行源,提取資料,並以Apache Parquet格式將資料載入到Amazon S3.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：使用Amazon Athena進行一次性查詢. 使用Amazon QuickSight為KPI建立儀表板。此選項符合題目條件，能有效滿足核心需求。
- C：建立自定義的 AWS Lambda 函式,將單個記錄從資料庫移動到 Amazon Redshift 叢集。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：一次性查詢使用Amazon Kinesis資料分析. 使用Amazon QuickSight為KPI建立儀表板。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Glue 提取,轉換,並載入(ETL)任務將資料轉換為JSON格式. 將資料裝入多個 Amazon OpenSearch Service(Amazon Elasticsearch Service) 叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用AWS湖形成中的藍圖來識別可以被攝入資料湖(data lake)的資料. 使用AWS Glue來爬行源,提取資料,並以Apache Parquet格式將資料載入到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #157

**題目**
一家公司將資料儲存在Amazon Aurora PostgreSQL DB叢集中. 公司必須儲存5年的所有資料,5年後必須刪除所有資料. 該公司還必須無限期地保留稽核(audit)在資料庫(database)範圍內執行的行動記錄。 目前,該公司已經為Aurora配置了自動備份. 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 使用DB叢集的手動快照(snapshot).
- B. 為自動備份建立 生命週期政策(lifecycle policy)。
- C. 配置自動備份(backup)保留5年.
- D. 為 DB 叢集配置 Amazon CloudWatch Logs 匯出。
- E. 使用AWS Backup接收備份,並將備份儲存5年.

**答案**
B,E



**詳解**
正確答案是 **B, E**。
- B：為自動備份建立 生命週期政策(lifecycle policy) 。此選項符合題目條件，能有效滿足核心需求。
- E：使用AWS Backup接收備份,並將備份儲存5年。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用DB叢集的手動快照(snapshot)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置自動備份(backup)保留5年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 DB 叢集配置 Amazon CloudWatch Logs 匯出 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #158

**題目**
一個解決方案設計師正在最佳化一個網站,用於即將到來的音樂活動。 表演的影片將實時流傳,然後根據需要提供。 預計這一活動將吸引全球線上受眾。 哪些服務將提高實時和點播流的效能?

**選項**
- A. Amazon CloudFront.
- B. AWS 全球加速器
- C. Amazon Route 53.
- D. 亞馬遜 S3 Transfer Acceleration

**答案**
A


**詳解**
正確答案是 **A**。
- A：Amazon CloudFront。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：AWS 全球加速器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：Amazon Route 53。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：亞馬遜 S3 Transfer Acceleration。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #159

**題目**
一家公司正在執行一個可公開存取的無伺服器應用程式,該應用程式使用Amazon API Gateway和AWS Lambda. 最近,由於博特網的欺詐性要求,申請的流量激增。 設計師應採取什麼步驟阻止未經授權的使用者提出請求?(選二.

**選項**
- A. 建立一個僅與真實使用者共享的 API 金鑰的使用計劃。
- B. 整合Lambda函式中的邏輯,以忽略假IP地址的請求.
- C. 執行AWS WAF規則,瞄準惡意請求,並觸發行動來過濾它們.
- D. 將現有的公共 API 轉換為私人 API。 更新DNS記錄,將使用者重定向到新的API端點.
- E. 為每個試圖存取API的使用者建立IAM角色. 使用者在發出API呼叫時將承擔角色.

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：執行AWS WAF規則,瞄準惡意請求,並觸發行動來過濾它們。此選項符合題目條件，能有效滿足核心需求。
- D：將現有的公共 API 轉換為私人 API。 更新DNS記錄,將使用者重定向到新的API端點。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：建立一個僅與真實使用者共享的 API 金鑰的使用計劃 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：整合Lambda函式中的邏輯,以忽略假IP地址的請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：為每個試圖存取API的使用者建立IAM角色. 使用者在發出API呼叫時將承擔角色。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #160

**題目**
一家電子商務公司在AWS雲中設有分析應用程式。 該應用程式每月生成約300 MB的資料. 資料以JSON格式儲存. 該公司正在評估一個災難復原(disaster recovery)解決方案,以備份資料. 如果需要,資料必須可用毫秒獲取,資料必須儲存30天。 哪種解決辦法符合這些要求?

**選項**
- A. Amazon OpenSearch Service(亞馬遜彈性搜尋服務)
- B. Amazon S3 冰川
- C. Amazon S3標準
- D. 用於 PostgreSQL 的 Amazon RDS

**答案**
C


**詳解**
正確答案是 **C**。
- C：Amazon S3標準。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：Amazon OpenSearch Service(亞馬遜彈性搜尋服務)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：Amazon S3 冰川。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：用於 PostgreSQL 的 Amazon RDS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #161

**題目**
一家公司有一個小型的Python應用程式,處理JSON文件,並將結果輸出給一個promise SQL 資料庫(database). 應用程式每天執行數千次. 公司希望將應用程式移至AWS雲. 公司需要高可用解決方案,將可擴展性(scalability)最大化,將營運開銷(operational overhead)最小化. 哪種解決辦法能滿足這些要求?

**選項**
- A. 把JSON檔案放進Amazon S3桶裡. 在多個 Amazon EC2 例項上執行 Python 程式碼來處理文件. 將結果儲存在 Amazon Aurora DB 叢集中.
- B. 把JSON檔案放進Amazon S3桶裡. 建立一個執行 Python 程式碼的 AWS Lambda 函式,在檔案到達S3 儲存桶(S3 bucket) 時對其進行處理. 將結果儲存在 Amazon Aurora DB 叢集中.
- C. 將JSON檔案放入亞馬遜彈性塊儲存器(Amazon EBS)卷中. 使用 EBS 多選項特性將磁碟區附加到多個 Amazon EC2 例中. 在 EC2 例項上執行 Python 程式碼來處理文件。 在 Amazon RDS DB 例項中儲存結果。
- D. 將 JSON 文件放置在 Amazon 簡單佇列服務( Amazon SQS) 佇列中作為訊息。 將Python程式碼作為集裝箱安裝在亞馬遜彈性容器服務(Amazon ECS)叢集上,該叢集配置為Amazon EC2發射型. 使用容器處理 SQS 訊息。 在 Amazon RDS DB 例項中儲存結果。

**答案**
D


**詳解**
正確答案是 **D**。
- D：將 JSON 文件放置在 Amazon 簡單佇列服務( Amazon SQS) 佇列中作為訊息。 將Python程式碼作為集裝箱安裝在亞馬遜彈性容器服務(Amazon ECS)叢集上,該叢集配置為Amazon EC2發射型. 使用容器處理 SQS 訊息。 在 Amazon RDS DB 例項中儲存結果 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：把JSON檔案放進Amazon S3桶裡. 在多個 Amazon EC2 例項上執行 Python 程式碼來處理文件. 將結果儲存在 Amazon Aurora DB 叢集中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：把JSON檔案放進Amazon S3桶裡. 建立一個執行 Python 程式碼的 AWS Lambda 函式,在檔案到達S3 儲存桶(S3 bucket) 時對其進行處理. 將結果儲存在 Amazon Aurora DB 叢集中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將JSON檔案放入亞馬遜彈性塊儲存器(Amazon EBS)卷中. 使用 EBS 多選項特性將磁碟區附加到多個 Amazon EC2 例中. 在 EC2 例項上執行 Python 程式碼來處理文件。 在 Amazon RDS DB 例項中儲存結果 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #162

**題目**
一家公司希望在AWS上使用高效能運算(HPC)基礎設施進行金融風險模型製作. 公司HPC的工作量由Linux承擔. 每個HPC的工作fiow執行在數百個Amazon EC2 Spot 執行個體上,是短壽命的,並生成數千個輸出檔案,最終儲存在持久儲存中,以供分析及長期未來使用. 該公司尋求雲端儲存解決方案,允許將原始資料複製到長期持續儲存中,以便所有EC2例項都能處理資料。 解決方案還應是一個高效能檔案系統,與持續儲存相結合,以讀寫資料集和輸出檔案. 哪些AWS服務組合滿足這些要求?

**選項**
- A. Amazon FSx 用於與Amazon S3整合的Lustre
- B. Amazon FSx 用於與 Amazon S3 整合的 Windows 檔案伺服器
- C. Amazon S3 冰川與亞馬遜彈性塊儲存器整合(Amazon EBS)
- D. Amazon S3桶,裝有與亞馬遜彈性塊儲存器整合的VPC 端點(VPC endpoint)(Amazon EBS)通用SSD(gp2)體積

**答案**
A


**詳解**
正確答案是 **A**。
- A：Amazon FSx 用於與Amazon S3整合的Lustre。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：Amazon FSx 用於與 Amazon S3 整合的 Windows 檔案伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：Amazon S3 冰川與亞馬遜彈性塊儲存器整合(Amazon EBS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon S3桶,裝有與亞馬遜彈性塊儲存器整合的VPC 端點(VPC endpoint)(Amazon EBS)通用SSD(gp2)體積。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #163

**題目**
一家公司正在房地建造一個集裝箱化的應用程式,並決定將該應用程式移至AWS。 該應用程式在部署後不久將有數千個使用者。 該公司不確定如何管理規模集裝箱的部署。 公司需要將集裝箱化的應用部署在高可用架構中,以儘量減少營運開銷(operational overhead). 哪種解決辦法能滿足這些要求?

**選項**
- A. 將集裝箱影象儲存在亞馬遜彈性集裝箱登記庫中。 使用帶有AWS Fargate發射型的亞馬遜彈性容器服務(Amazon ECS)叢集來執行容器. 使用目標跟蹤來根據需求自動進行規模化.
- B. 將集裝箱影象儲存在亞馬遜彈性集裝箱登記庫中。 使用帶有Amazon EC2發射型的亞馬遜彈性容器服務叢集(Amazon ECS)執行集裝箱. 使用目標跟蹤來根據需求自動進行規模化.
- C. 將容器影象儲存在一個執行在 Amazon EC2 例項上的倉庫中。 執行分佈在多個可用區(Availability Zones)的EC2例項上的容器。 監測Amazon CloudWatch中的平均CPU利用率. 視需要推出新的EC2例項。
- D. 建立一個包含容器影象的Amazon EC2亞馬遜機器影象(AMI). 在Auto Scaling 群組(Auto Scaling group)中發射EC2例項,跨越多個可用區(Availability Zones). 使用 Amazon CloudWatch 提醒來縮放 EC2 例項, 當平均 CPU 利用率閾值被突破。

**答案**
C


**詳解**
正確答案是 **C**。
- C：將容器影象儲存在一個執行在 Amazon EC2 例項上的倉庫中。 執行分佈在多個可用區(Availability Zones)的EC2例項上的容器。 監測Amazon CloudWatch中的平均CPU利用率. 視需要推出新的EC2例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將集裝箱影象儲存在亞馬遜彈性集裝箱登記庫中。 使用帶有AWS Fargate發射型的亞馬遜彈性容器服務(Amazon ECS)叢集來執行容器. 使用目標跟蹤來根據需求自動進行規模化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將集裝箱影象儲存在亞馬遜彈性集裝箱登記庫中。 使用帶有Amazon EC2發射型的亞馬遜彈性容器服務叢集(Amazon ECS)執行集裝箱. 使用目標跟蹤來根據需求自動進行規模化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個包含容器影象的Amazon EC2亞馬遜機器影象(AMI). 在Auto Scaling 群組(Auto Scaling group)中發射EC2例項,跨越多個可用區(Availability Zones). 使用 Amazon CloudWatch 提醒來縮放 EC2 例項, 當平均 CPU 利用率閾值被突破 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #164

**題目**
一家公司有兩種應用:傳送者應用,用待處理的有效載荷傳送資訊;處理應用,用有效載荷接收資訊。 公司希望實施AWS服務來處理兩個應用程式之間的訊息. 傳送者應用程式可以每小時傳送約1000條資訊. 處理電文需要2天: 如果訊息無法處理,必須保留,以免影響任何剩餘訊息的處理。 哪種解決辦法符合這些要求,而最高運作效率高?

**選項**
- A. 設定一個 Amazon EC2 例項執行一個 Redis 資料庫(database). 配置兩個應用程式以使用例項。 分別儲存,處理和刪除訊息.
- B. 使用 Amazon Kinesis 資料流接收來自傳送程式的訊息. 將處理應用程式與Kinesis客戶端庫(KCL)整合.
- C. 將發件人和處理器應用程式與亞馬遜簡易佇列服務(Amazon SQS)佇列整合. 配置一個死字母佇列來收集無法處理的訊息。
- D. 將處理應用程式訂閱到亞馬遜簡易通知服務(Amazon SNS),以接收處理通知。 整合發件人應用程式以寫入SNS主題.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將發件人和處理器應用程式與亞馬遜簡易佇列服務(Amazon SQS)佇列整合. 配置一個死字母佇列來收集無法處理的訊息 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：設定一個 Amazon EC2 例項執行一個 Redis 資料庫(database). 配置兩個應用程式以使用例項。 分別儲存,處理和刪除訊息。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 Amazon Kinesis 資料流接收來自傳送程式的訊息. 將處理應用程式與Kinesis客戶端庫(KCL)整合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將處理應用程式訂閱到亞馬遜簡易通知服務(Amazon SNS),以接收處理通知。 整合發件人應用程式以寫入SNS主題。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #165

**題目**
解決方案架構師必須設計一個使用帶有Amazon CloudFront來源的Amazon S3的解決方案來儲存靜態網站. 該公司的安全政策要求AWS WAF檢查所有網站流量. 解決方案設計師應如何遵守這些要求?

**選項**
- A. 配置一個 S3 儲存桶政策(bucket policy) 只接受來自 AWS WAF Amazon 資源名稱(ARN) 的請求。
- B. 配置 Amazon CloudFront 將所有收到的請求轉發給 AWS WAF ,然後請求 S3 源的內容.
- C. 配置一個安全群組(security group),只允許Amazon CloudFront IP地址存取Amazon S3. 協理AWS WAF呼叫雲紋.
- D. 配置 Amazon CloudFront 和 Amazon S3 以使用來源存取身份(OAI)限制存取 S3 儲存桶(S3 bucket)。 在分發時啟用 AWS WAF。

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置 Amazon CloudFront 和 Amazon S3 以使用來源存取身份(OAI)限制存取 S3 儲存桶(S3 bucket)。 在分發時啟用 AWS WAF 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置一個 S3 儲存桶政策(bucket policy) 只接受來自 AWS WAF Amazon 資源名稱(ARN) 的請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 Amazon CloudFront 將所有收到的請求轉發給 AWS WAF ,然後請求 S3 源的內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個安全群組(security group),只允許Amazon CloudFront IP地址存取Amazon S3. 協理AWS WAF呼叫雲紋。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #166

**題目**
全球活動的組織者希望將每日報告作為靜態的HTML頁面上線. 預計這些網頁將引起世界各地使用者數百萬次的瀏覽。 檔案存放在Amazon S3桶中. 已請一個解決方案設計師設計一個高效和有效的解決方案。 設計師應該採取什麼行動來實現這一目標?

**選項**
- A. 生成檔案的預簽名 URL。
- B. 在所有區域使用跨區域(Region) 複寫(replication)。
- C. 使用Amazon Route 53的地理近緣特徵.
- D. 使用以S3 儲存桶(S3 bucket)為原產地的Amazon CloudFront.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用以S3 儲存桶(S3 bucket)為原產地的Amazon CloudFront。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：生成檔案的預簽名 URL 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在所有區域使用跨區域(Region) 複寫(replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Route 53的地理近緣特徵。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #167

**題目**
一家公司對Amazon EC2的一例生產申請進行操作。 應用程式讀取來自Amazon SQS佇列的資料,並平行處理訊息. 訊息量不可預測,經常有間斷的流量. 該應用程式應該不間斷地處理訊息而沒有任何故障時間. 哪種解決辦法符合這些要求?

**選項**
- A. 僅使用Spot 執行個體來處理所需的最大容量.
- B. 使用保留例項專門處理所需的最大容量。
- C. 為基線能力使用保留例項,並使用Spotexits處理額外能力。
- D. 使用保留例項作為基線能力,並利用保留例項處理額外能力。

**答案**
C


**詳解**
正確答案是 **C**。
- C：為基線能力使用保留例項,並使用Spotexits處理額外能力。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：僅使用Spot 執行個體來處理所需的最大容量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用保留例項專門處理所需的最大容量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用保留例項作為基線能力,並利用保留例項處理額外能力。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #168

**題目**
安全小組希望限制在小組所有AWS帳戶中獲取特定服務或行動. 所有帳戶都屬於AWS Organizations的一個大型組織. 解決方案必須是可伸縮的,必須有一個單一的點可以維持許可權. 解決方案設計師應該怎麼做才能做到這一點?

**選項**
- A. 建立ACL,以提供獲取服務或行動的機會.
- B. 建立 安全群組(security group) 允許帳戶並附加到使用者組中。
- C. 在每個帳戶中建立交叉帳戶作用,以拒絕獲得服務或採取行動。
- D. 在根組織單位建立服務控制政策,拒絕獲得服務或採取行動。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在根組織單位建立服務控制政策,拒絕獲得服務或採取行動。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立ACL,以提供獲取服務或行動的機會。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 安全群組(security group) 允許帳戶並附加到使用者組中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在每個帳戶中建立交叉帳戶作用,以拒絕獲得服務或採取行動。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #169

**題目**
一家公司擔心其公共網路應用程式由於近期的網路攻擊而安全. 該應用程式使用應用程式負載平衡器(Application Load Balancer)(ALB). 一個解決方案架構師必須降低DDoS攻擊應用程式的風險. 解決方案設計師應如何滿足這一要求?

**選項**
- A. 在ALB中新增一個亞馬遜督察代理.
- B. 配置Amazon Macie以防止攻擊.
- C. 啟用 AWS Shield 防襲先進.
- D. 配置 Amazon GuardDuty 監視 ALB。

**答案**
C


**詳解**
正確答案是 **C**。
- C：啟用 AWS Shield 防襲先進。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在ALB中新增一個亞馬遜督察代理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置Amazon Macie以防止攻擊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon GuardDuty 監視 ALB 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #170

**題目**
一家公司的網路應用程式執行在應用程式負載平衡器(Application Load Balancer)後面的Amazon EC2例項上. 該公司最近改變了其政策,現在只要求從一個特定國家獲取應用程式。 哪個配置將滿足這一要求?

**選項**
- A. 為 EC2 例項配置 安全群組(security group)。
- B. 在應用程式負載平衡器(Application Load Balancer)上配置安全群組(security group).
- C. 在VPC中配置應用程式負載平衡器(Application Load Balancer)上的AWS WAF.
- D. 為包含EC2例項的子網配置 網路 ACL(network ACL)。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在VPC中配置應用程式負載平衡器(Application Load Balancer)上的AWS WAF。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 EC2 例項配置 安全群組(security group) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在應用程式負載平衡器(Application Load Balancer)上配置安全群組(security group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為包含EC2例項的子網配置 網路 ACL(network ACL) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #171

**題目**
一家公司向使用者提供API,自動查詢根據物品價格計算的稅收。 公司在節日期間遇到較多的查詢,只導致回覆時間較慢. 一個解決方案架構師需要設計一個具有可伸縮性和彈性的解決方案. 解決方案設計師應該怎麼做才能做到這一點?

**選項**
- A. 提供Amazon EC2例項中的API。 EC2例項在提出API請求時進行所需的計算.
- B. 使用 Amazon API Gateway 設計 REST API,接受專案名稱。 API Gateway將專案名稱傳遞至AWS Lambda進行稅收計算.
- C. 建立一個應用程式負載平衡器(Application Load Balancer),後面有兩個Amazon EC2 執行個體. EC2例項將計算收到物品名稱的稅款。
- D. 使用 Amazon API Gateway 設計一個 REST API,與 Amazon EC2 例項上的 API 連線. API Gateway接受並將專案名稱傳遞給EC2,用於計算稅收.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用 Amazon API Gateway 設計一個 REST API,與 Amazon EC2 例項上的 API 連線. API Gateway接受並將專案名稱傳遞給EC2,用於計算稅收。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：提供Amazon EC2例項中的API。 EC2例項在提出API請求時進行所需的計算。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 Amazon API Gateway 設計 REST API,接受專案名稱。 API Gateway將專案名稱傳遞至AWS Lambda進行稅收計算。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個應用程式負載平衡器(Application Load Balancer),後面有兩個Amazon EC2 執行個體. EC2例項將計算收到物品名稱的稅款。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #172

**題目**
一個解決方案架構師正在為應用程式建立一個新的Amazon CloudFront分佈. 使用者提交的一些資訊是敏感的。 該應用程式使用HTTPS,但需要另一層安全. 敏感資訊應該。 在整個應用程式庫中都受到保護,資訊的獲取應限於某些應用程式。 設計師應該採取什麼行動?

**選項**
- A. 配置 CloudFront 簽名的 URL。
- B. 配置 CloudFront 簽名的餅乾。
- C. 配置 CloudFront 場級 加密(encryption) 配置。
- D. 配置 CloudFront 並設定僅用於檢視器協議政策的 HTTPS 原始協議政策設定。

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 CloudFront 簽名的 URL 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置 CloudFront 簽名的餅乾 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 CloudFront 場級 加密(encryption) 配置 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 CloudFront 並設定僅用於檢視器協議政策的 HTTPS 原始協議政策設定 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #173

**題目**
一個遊戲公司在AWS上託管一個基於瀏覽器的應用程式. 應用程式的使用者消耗了大量儲存在Amazon S3的影片和影象. 此內容適用於所有使用者. 該應用程式越來越受歡迎,全世界數百萬使用者查閱這些媒體檔案。 公司希望向使用者提供檔案,同時減少來源的負載. 哪種解決辦法符合這些要求?

**選項**
- A. 在網路伺服器前部署 AWS 全球加速器加速器。
- B. 在S3 儲存桶(S3 bucket)前部署Amazon CloudFront網路發行.
- C. 在網路伺服器前部署一個Amazon ElastiCache用於Redis例項.
- D. 在網路伺服器前部署一個Amazon ElastiCache,用於模擬例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：在S3 儲存桶(S3 bucket)前部署Amazon CloudFront網路發行。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在網路伺服器前部署 AWS 全球加速器加速器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在網路伺服器前部署一個Amazon ElastiCache用於Redis例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在網路伺服器前部署一個Amazon ElastiCache,用於模擬例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #174

**題目**
一家公司擁有一個多層次的應用程式,在一臺Amazon EC2 Auto Scaling 群組(Auto Scaling group)中執行6臺前端網路伺服器,在一臺應用程式負載平衡器(Application Load Balancer)(ALB)後面的單一可用區(Availability Zone)中執行. 解決方案架構師需要修改基礎設施,使其高度可用而不修改應用程式. 架構師應該選擇哪個解決方案提供高可用性(high availability)?

**選項**
- A. 建立一個Auto Scaling 群組(Auto Scaling group),在兩個區域中每個區域使用三個例項.
- B. 修改Auto Scaling 群組(Auto Scaling group),在兩個可用區(Availability Zones)中各使用三個例項.
- C. 建立一個自動縮放模板,用於在另一個區域(Region)中快速建立更多例項.
- D. 在圓旋配置中修改 Amazon EC2 前置的 ALB ,以平衡網路級的流量.

**答案**
B


**詳解**
正確答案是 **B**。
- B：修改Auto Scaling 群組(Auto Scaling group),在兩個可用區(Availability Zones)中各使用三個例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個Auto Scaling 群組(Auto Scaling group),在兩個區域中每個區域使用三個例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個自動縮放模板,用於在另一個區域(Region)中快速建立更多例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在圓旋配置中修改 Amazon EC2 前置的 ALB ,以平衡網路級的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #175

**題目**
一家電子商務公司擁有使用Amazon API Gateway和AWS Lambda功能的訂單處理應用程式. 該應用程式將資料儲存在 Amazon Aurora PostgreSQL 資料庫(database) 中. 在最近的一次銷售活動中,客戶訂單突然激增。 一些客戶出現超時,申請沒有處理這些客戶的訂單。 一位解決方案架構師認定,由於大量開放連線,資料庫(database)上的CPU利用率和記憶體利用率較高. 解決方案架構師需要防止超時錯誤,同時儘可能少修改應用程式. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 Lambda 函式的提供貨幣。 在多個AWS區域修改資料庫(database)成為全球資料庫(database).
- B. 使用 Amazon RDS 代理為 資料庫(database) 建立代理。 修改 Lambda 函式以使用 RDS 代理端點代替 資料庫(database) 端點。
- C. 在不同的 AWS 區域(Region) 中為 資料庫(database) 建立讀本複製。 使用API Gateway中的查詢字串引數來將流量路由到讀取的複製品.
- D. 透過使用AWS 資料庫(Database) 遷移服務(AWS DS)將資料從Aurora PostgreSQL遷移到Amazon DynamoDB. 修改 Lambda 函式以使用 DynamoDB 表格。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 Amazon RDS 代理為 資料庫(database) 建立代理。 修改 Lambda 函式以使用 RDS 代理端點代替 資料庫(database) 端點 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Lambda 函式的提供貨幣。 在多個AWS區域修改資料庫(database)成為全球資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在不同的 AWS 區域(Region) 中為 資料庫(database) 建立讀本複製。 使用API Gateway中的查詢字串引數來將流量路由到讀取的複製品。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過使用AWS 資料庫(Database) 遷移服務(AWS DS)將資料從Aurora PostgreSQL遷移到Amazon DynamoDB. 修改 Lambda 函式以使用 DynamoDB 表格 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #176

**題目**
一個應用程式執行在私人子網的 Amazon EC2 例項上. 應用程式需要存取 Amazon DynamoDB 表. 在確保交通不離開AWS網路的同時,什麼是最安全的進入桌子的方法?

**選項**
- A. 使用VPC 端點(VPC endpoint)用於DynatomDB.
- B. 在公共子網使用NAT閘道器.
- C. 在私人子網中使用 NAT 例項。
- D. 使用附在VPC上的網際網路閘道器.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用附在VPC上的網際網路閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用VPC 端點(VPC endpoint)用於DynatomDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在公共子網使用NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在私人子網中使用 NAT 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #177

**題目**
一家娛樂公司正在使用Amazon DynamoDB儲存媒體後設資料. 應用程式讀作密集,並出現延誤。 該公司沒有工作人員來處理額外的營運開銷(operational overhead),需要改進DynamoDB的效能便利度而不重新配置應用程式. 解決方案設計師建議如何滿足這一要求?

**選項**
- A. 使用Amazon ElastiCache用於Redis.
- B. 使用Amazon DynamoDB加速器(DAX).
- C. 透過使用DynamomDB全球表格來複制資料.
- D. 使用 Amazon ElastiCache 對自動發現器啟用的Memcached。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon DynamoDB加速器(DAX)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon ElastiCache用於Redis。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過使用DynamomDB全球表格來複制資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon ElastiCache 對自動發現器啟用的Memcached 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #178

**題目**
一家公司的基礎設施由Amazon EC2例項和一個Amazon RDS DB例項組成,在一個單一的AWS 區域(Region). 公司想在單獨的區域(Region)中備份資料. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用AWS Backup將EC2備份和RDS備份複製到單獨的區域(Region).
- B. 使用Amazon資料生命週期管理器(Amazon DLM)將EC2備份和RDS備份複製到獨立的區域(Region).
- C. 建立 EC2 例項的 Amazon 機器影象。 將AMIs複製到單獨的區域(Region). 在單獨的區域(Region)中建立 RDS DB 例項的讀取複製件。
- D. 建立Amazon Elastic Block Store(Amazon EBS)快照. 將EBS快照複製到單獨的區域(Region). 建立 RDS 快照。 匯出 RDS 快照到 Amazon S3。 配置 S3 Cross-Region Replication(CRR) 到單獨的區域(Region).

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS Backup將EC2備份和RDS備份複製到單獨的區域(Region)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon資料生命週期管理器(Amazon DLM)將EC2備份和RDS備份複製到獨立的區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 EC2 例項的 Amazon 機器影象。 將AMIs複製到單獨的區域(Region). 在單獨的區域(Region)中建立 RDS DB 例項的讀取複製件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立Amazon Elastic Block Store(Amazon EBS)快照. 將EBS快照複製到單獨的區域(Region). 建立 RDS 快照。 匯出 RDS 快照到 Amazon S3。 配置 S3 Cross-Region Replication(CRR) 到單獨的區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #179

**題目**
一個解決方案架構師需要安全儲存一個資料庫(database)使用者名稱和密碼,一個應用程式用來存取Amazon RDS DB例項. 存取資料庫(database)的應用程式執行在 Amazon EC2 例項上. 解決方案架構師希望在AWS Systems Manager引數儲存器中建立安全引數. 解決方案設計師應如何滿足這一要求?

**選項**
- A. 建立已讀取引數儲存引數的 IAM 角色。 允許解密存取用於加密引數的 AWS Key Management Service(AWS KMS) 金鑰. 將此IAM角色指定給EC2例項.
- B. 建立 IAM 政策(IAM policy) 允許讀取引數 Store 引數。 允許解密存取用於加密引數的 AWS Key Management Service(AWS KMS) 金鑰. 將此 IAM 政策(IAM policy) 指定為 EC2 例項。
- C. 建立引數儲存器引數和EC2例項之間的IAM信任關係. 在信託政策中指定Amazon RDS為主要負責人。
- D. 在 DB 例項和 EC2 例項之間建立 IAM 信任關係。 指定系統管理員為信託政策的主要負責人。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立已讀取引數儲存引數的 IAM 角色。 允許解密存取用於加密引數的 AWS Key Management Service(AWS KMS) 金鑰. 將此IAM角色指定給EC2例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立 IAM 政策(IAM policy) 允許讀取引數 Store 引數。 允許解密存取用於加密引數的 AWS Key Management Service(AWS KMS) 金鑰. 將此 IAM 政策(IAM policy) 指定為 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立引數儲存器引數和EC2例項之間的IAM信任關係. 在信託政策中指定Amazon RDS為主要負責人。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 DB 例項和 EC2 例項之間建立 IAM 信任關係。 指定系統管理員為信託政策的主要負責人。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #180

**題目**
一個公司正在設計一個由API驅動的雲通訊平臺. 該應用程式以Amazon EC2例項為主機,位於網路負載平衡器(Network Load Balancer)(NLB)之後。 公司使用Amazon API Gateway透過API為外部使用者提供對應用程式的存取. 公司希望保護平臺免受SQL注射等網路剝削,也希望探測和緩解大型,精密的DDoS攻擊. 哪種解決方案組合提供了MOST保護?(選二.

**選項**
- A. 使用AWS WAF保護NLB.
- B. 使用AWS Shield 前進與NLB.
- C. 使用AWS WAF保護Amazon API Gateway.
- D. 使用帶有 AWS Shield 標準的 Amazon GuardDuty
- E. 使用AWS Shield標準與Amazon API Gateway.

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：使用AWS Shield 前進與NLB。此選項符合題目條件，能有效滿足核心需求。
- C：使用AWS WAF保護Amazon API Gateway。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用AWS WAF保護NLB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用帶有 AWS Shield 標準的 Amazon GuardDuty。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用AWS Shield標準與Amazon API Gateway。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #181

**題目**
一個公司有一個遺留的資料處理應用程式,執行在Amazon EC2例項上. 資料按順序處理,但結果順序無關緊要. 該應用程式採用單體架構. 公司為滿足日益增長的需求而擴大應用規模的唯一途徑是擴大案例的規模. 公司開發商決定重寫應用程式,在亞馬遜彈性容器服務(Amazon ECS)上使用微服務架構. 解決方案設計師應該建議微服務機構之間如何溝通?

**選項**
- A. 建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 向資料生產者新增程式碼,並將資料傳送給佇列. 新增程式碼到資料消費者中處理佇列中的資料.
- B. 建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 向資料製作方新增程式碼,併發布該話題的通知. 在資料消費者中新增程式碼以訂閱該話題.
- C. 建立 AWS Lambda 函式來傳遞訊息。 向資料製作方新增程式碼,用資料物件呼叫Lambda函式. 在資料消費者中新增程式碼以接收從Lambda函式傳遞的資料物件.
- D. 建立 Amazon DynamoDB 表格。 啟用 DynamoDB 流。 向資料生產者新增程式碼,將資料插入表格. 在資料消費者中新增程式碼,以使用DynamoDB Streams API來檢測新的表格條目並檢索資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 向資料生產者新增程式碼,並將資料傳送給佇列. 新增程式碼到資料消費者中處理佇列中的資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 向資料製作方新增程式碼,併發布該話題的通知. 在資料消費者中新增程式碼以訂閱該話題。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS Lambda 函式來傳遞訊息。 向資料製作方新增程式碼,用資料物件呼叫Lambda函式. 在資料消費者中新增程式碼以接收從Lambda函式傳遞的資料物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon DynamoDB 表格。 啟用 DynamoDB 流。 向資料生產者新增程式碼,將資料插入表格. 在資料消費者中新增程式碼,以使用DynamoDB Streams API來檢測新的表格條目並檢索資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #182

**題目**
一家公司希望將自己的MySQL 資料庫(database)從房地遷移到AWS. 該公司最近經歷了資料庫(database)停產,對企業產生了重大影響。 為確保不再發生這種情況,公司希望在AWS上有一個可靠的資料庫(database)解決方案,最大限度地減少資料丟失,並將每筆交易儲存在至少兩個節點上. 哪種解決辦法符合這些要求?

**選項**
- A. 在3個可用區(Availability Zones)中建立一個帶有同步複寫(replication)到3個節點的Amazon RDS DB例項.
- B. 建立一個具有多AZ功能的Amazon RDS MySQL DB例項,能夠同步複製資料.
- C. 建立一個Amazon RDS MySQL DB例項,然後在單獨的AWS 區域(Region)中建立一個讀取複製,同步複製資料.
- D. 建立 Amazon EC2 例項,安裝了 MySQL 引擎,觸發 AWS Lambda 函式,將資料同步複製到 Amazon RDS MySQL DB 例項中.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個具有多AZ功能的Amazon RDS MySQL DB例項,能夠同步複製資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在3個可用區(Availability Zones)中建立一個帶有同步複寫(replication)到3個節點的Amazon RDS DB例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個Amazon RDS MySQL DB例項,然後在單獨的AWS 區域(Region)中建立一個讀取複製,同步複製資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon EC2 例項,安裝了 MySQL 引擎,觸發 AWS Lambda 函式,將資料同步複製到 Amazon RDS MySQL DB 例項中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #183

**題目**
一家公司正在建立一個新的動態訂購網站。 公司希望儘量減少伺服器的維護和補丁. 網站必須高度開放,必須儘快擴大讀寫能力,以滿足使用者需求的變化。 哪種解決辦法能滿足這些要求?

**選項**
- A. Amazon S3中的主機靜態內容. 主機動態內容使用Amazon API Gateway和AWS Lambda. 使用Amazon DynamoDB,具備資料庫(database)的點播能力. 配置 Amazon CloudFront 來傳送網站內容.
- B. Amazon S3中的主機靜態內容. 主機動態內容使用Amazon API Gateway和AWS Lambda. 為資料庫(database)使用Amazon Aurora與Aurora Auto縮放. 配置 Amazon CloudFront 來傳送網站內容.
- C. 託管 Amazon EC2 例項上的所有網站內容。 建立 Auto Scaling 群組(Auto Scaling group) 以縮放 EC2 例項。 使用應用程式負載平衡器(Application Load Balancer)來分配流量. 使用Amazon DynamoDB,為資料庫(database)提供寫作能力.
- D. 託管 Amazon EC2 例項上的所有網站內容。 建立 Auto Scaling 群組(Auto Scaling group) 以縮放 EC2 例項。 使用應用程式負載平衡器(Application Load Balancer)來分配流量. 為資料庫(database)使用Amazon Aurora與Aurora Auto縮放.

**答案**
A


**詳解**
正確答案是 **A**。
- A：Amazon S3中的主機靜態內容. 主機動態內容使用Amazon API Gateway和AWS Lambda. 使用Amazon DynamoDB,具備資料庫(database)的點播能力. 配置 Amazon CloudFront 來傳送網站內容。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：Amazon S3中的主機靜態內容. 主機動態內容使用Amazon API Gateway和AWS Lambda. 為資料庫(database)使用Amazon Aurora與Aurora Auto縮放. 配置 Amazon CloudFront 來傳送網站內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：託管 Amazon EC2 例項上的所有網站內容。 建立 Auto Scaling 群組(Auto Scaling group) 以縮放 EC2 例項。 使用應用程式負載平衡器(Application Load Balancer)來分配流量. 使用Amazon DynamoDB,為資料庫(database)提供寫作能力。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：託管 Amazon EC2 例項上的所有網站內容。 建立 Auto Scaling 群組(Auto Scaling group) 以縮放 EC2 例項。 使用應用程式負載平衡器(Application Load Balancer)來分配流量. 為資料庫(database)使用Amazon Aurora與Aurora Auto縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #184

**題目**
一家公司有一個用於軟體工程的AWS帳戶. AWS帳戶可以透過一對AWS Direct Connect連線進入該公司的premise資料中心. 所有非VPC交通線路均通往虛擬私有閘道(virtual private gateway). 一個開發團隊最近透過控制檯建立了AWS Lambda功能. 開發團隊需要允許該功能存取在公司資料中心的私人子網中執行的資料庫(database). 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置在 VPC 中執行的 Lambda 函式,並配有相應的 安全群組(security group)。
- B. 從AWS到資料中心建立VPN連線. 從Lambda的交通透過VPN執行.
- C. 更新VPC中的路由表,讓Lambda函式透過Direct Connect存取premes資料中心.
- D. 建立彈性 IP 地址。 配置Lambda功能,在無彈性網路介面的情況下,透過彈性IP地址傳送流量.

**答案**
C


**詳解**
正確答案是 **C**。
- C：更新VPC中的路由表,讓Lambda函式透過Direct Connect存取premes資料中心。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置在 VPC 中執行的 Lambda 函式,並配有相應的 安全群組(security group) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：從AWS到資料中心建立VPN連線. 從Lambda的交通透過VPN執行。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立彈性 IP 地址。 配置Lambda功能,在無彈性網路介面的情況下,透過彈性IP地址傳送流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #185

**題目**
一家公司使用亞馬遜ECS執行一個應用程式. 該應用程式建立了原影象的改型版本,然後讓Amazon S3 API呼叫將改型影象儲存在Amazon S3中. 解決方案架構師如何確保申請獲得存取Amazon S3的許可?

**選項**
- A. 更新AWS IAM中的S3角色,允許從亞馬遜ECS讀寫存取,然後重啟容器.
- B. 用 S3 許可權建立 IAM 角色, 然後在任務定義中指定該角色為任務RoleArn。
- C. 建立一個安全群組(security group),允許從亞馬遜ECS存取Amazon S3,並更新ECS叢集使用的發射配置.
- D. 建立具有 S3 許可權的 IAM 使用者, 並在登入為此帳戶時重新啟動 ECS 叢集的 Amazon EC2 例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：用 S3 許可權建立 IAM 角色, 然後在任務定義中指定該角色為任務RoleArn 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：更新AWS IAM中的S3角色,允許從亞馬遜ECS讀寫存取,然後重啟容器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個安全群組(security group),允許從亞馬遜ECS存取Amazon S3,並更新ECS叢集使用的發射配置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立具有 S3 許可權的 IAM 使用者, 並在登入為此帳戶時重新啟動 ECS 叢集的 Amazon EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #186

**題目**
一個公司有一個基於Windows的應用程式,必須遷移到AWS. 該應用程式需要使用一個共享的Windows檔案系統,它附在多個Amazon EC2的Windows例項上,這些例項部署在多個可用區(Availability Zone)上: 解決方案設計師應如何滿足這一要求?

**選項**
- A. 在卷閘道器模式下配置 AWS Storage Gateway. 將磁碟區掛載到每個 Windows 例項。
- B. 為Windows檔案伺服器配置 Amazon FSx. 將 Amazon FSx 檔案系統掛載到每個Windows 例項中.
- C. 透過使用亞馬遜彈性檔案系統(Amazon EFS)配置一個檔案系統. 將 EFS 檔案系統掛載到每個 Windows 例項。
- D. 配置 Amazon 彈性塊儲存器( Amazon EBS) 磁碟區, 並具有所需的大小。 在磁碟區中附加每個EC2例項。 將卷內的檔案系統掛載到每個 Windows 例項中。

**答案**
B


**詳解**
正確答案是 **B**。
- B：為Windows檔案伺服器配置 Amazon FSx. 將 Amazon FSx 檔案系統掛載到每個Windows 例項中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在卷閘道器模式下配置 AWS Storage Gateway. 將磁碟區掛載到每個 Windows 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過使用亞馬遜彈性檔案系統(Amazon EFS)配置一個檔案系統. 將 EFS 檔案系統掛載到每個 Windows 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon 彈性塊儲存器( Amazon EBS) 磁碟區, 並具有所需的大小。 在磁碟區中附加每個EC2例項。 將卷內的檔案系統掛載到每個 Windows 例項中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #187

**題目**
一家公司正在開發一種電子商務應用程式,其中包括一個負載平衡的前端、一個基於集裝箱的應用程式以及一個相對的資料庫(database)。 解決方案設計師需要創造出一個非常可用的解決方案,在儘可能少的人工干預下運作. 哪些解決辦法符合這些要求?(選二.

**選項**
- A. 在多AZ模式下建立 Amazon RDS DB 例項。
- B. 在另一個可用區(Availability Zone)中建立 Amazon RDS DB 例項和一個或多個複製件.
- C. 建立一個基於 Amazon EC2 例項的 Docker 叢集來處理動態應用程式負載。
- D. 建立一個亞馬遜彈性容器服務(Amazon ECS)叢集,具有Fargate 啟動類型,處理動態應用負載.
- E. 建立亞馬遜彈性容器服務(Amazon ECS)叢集,其啟動類型為Amazon EC2,處理動態應用負載.

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：在多AZ模式下建立 Amazon RDS DB 例項 。此選項符合題目條件，能有效滿足核心需求。
- D：建立一個亞馬遜彈性容器服務(Amazon ECS)叢集,具有Fargate 啟動類型,處理動態應用負載。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在另一個可用區(Availability Zone)中建立 Amazon RDS DB 例項和一個或多個複製件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個基於 Amazon EC2 例項的 Docker 叢集來處理動態應用程式負載 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立亞馬遜彈性容器服務(Amazon ECS)叢集,其啟動類型為Amazon EC2,處理動態應用負載。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #188

**題目**
一家公司使用Amazon S3作為其資料湖(data lake). 公司擁有一個新的合作伙伴,必須使用SFTP來上傳資料檔案. 一個解決方案架構設計師需要實施一個非常可用的SFTP解決方案,將營運開銷(operational overhead)最小化. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS Transfer Family 配置一個 SFTP 啟用的伺服器,其端點可公開存取. 選擇 S3 資料湖(data lake) 為目的地。
- B. 使用Amazon S3檔案閘道器作為SFTP伺服器. 將 S3 檔案閘道器端點 URL 顯示給新合作伙伴。 與新夥伴共享 S3 檔案閘道器終點。
- C. 在 VP 的私有子網中啟動 Amazon EC2 例項, 指示新合作伙伴使用 VPN 上傳檔案到 EC2 例項。 執行 cron 任務指令碼, 在 EC2 例項上上傳檔案到 S3 資料湖(data lake)。
- D. 在VPC的私人子網中發射Amazon EC2 執行個體. 在EC2例項前放置一個網路負載平衡器(Network Load Balancer)(NLB)。 為NLB建立 SFTP 聽器埠。 與新合作伙伴共享NLB主機名. 在 EC2 例項上執行一個 cron 任務指令碼,將檔案上傳到 S3 資料湖(data lake).

**答案**
D


**詳解**
正確答案是 **D**。
- D：在VPC的私人子網中發射Amazon EC2 執行個體. 在EC2例項前放置一個網路負載平衡器(Network Load Balancer)(NLB)。 為NLB建立 SFTP 聽器埠。 與新合作伙伴共享NLB主機名. 在 EC2 例項上執行一個 cron 任務指令碼,將檔案上傳到 S3 資料湖(data lake)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS Transfer Family 配置一個 SFTP 啟用的伺服器,其端點可公開存取. 選擇 S3 資料湖(data lake) 為目的地 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon S3檔案閘道器作為SFTP伺服器. 將 S3 檔案閘道器端點 URL 顯示給新合作伙伴。 與新夥伴共享 S3 檔案閘道器終點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 VP 的私有子網中啟動 Amazon EC2 例項, 指示新合作伙伴使用 VPN 上傳檔案到 EC2 例項。 執行 cron 任務指令碼, 在 EC2 例項上上傳檔案到 S3 資料湖(data lake) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #189

**題目**
公司需要儲存合同檔案. 合同期限為5年。 在5年內,公司必須確保檔案不能被重疊或刪除。 公司需要在休息時加密檔案,並每年自動輪換加密(encryption)鍵. 解決方案設計師應採取哪些步驟與LEAST 營運開銷(operational overhead)相結合來滿足這些要求?(選二.

**選項**
- A. 在Amazon S3中儲存檔案. 在治理模式下使用S3 Object Lock.
- B. 在Amazon S3中儲存檔案. 在合規(compliance)模式下使用S3 Object Lock.
- C. 使用伺服器側式加密(encryption),由Amazon S3管理加密(encryption)鍵(SSE-S3). 配置金鑰旋轉。
- D. 使用伺服器側式加密(encryption)與AWS Key Management Service(AWS KMS)客戶管理金鑰. 配置金鑰旋轉。
- E. 使用伺服器側式加密(encryption)與AWS Key Management Service(AWS KMS)客戶提供(進口)金鑰. 配置金鑰旋轉。

**答案**
C,E



**詳解**
正確答案是 **C, E**。
- C：使用伺服器側式加密(encryption),由Amazon S3管理加密(encryption)鍵(SSE-S3). 配置金鑰旋轉 。此選項符合題目條件，能有效滿足核心需求。
- E：使用伺服器側式加密(encryption)與AWS Key Management Service(AWS KMS)客戶提供(進口)金鑰. 配置金鑰旋轉 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在Amazon S3中儲存檔案. 在治理模式下使用S3 Object Lock。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在Amazon S3中儲存檔案. 在合規(compliance)模式下使用S3 Object Lock。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用伺服器側式加密(encryption)與AWS Key Management Service(AWS KMS)客戶管理金鑰. 配置金鑰旋轉 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #190

**題目**
一個公司有一個基於Java和PHP的網路應用程式. 該公司計劃將申請從辦公地點轉移到AWS. 公司需要能夠頻繁測試新的網站特徵. 該公司還需要一個高度可用和管理的解決方案,這需要最低限度的營運開銷(operational overhead). 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 Amazon S3 桶. 在 S3 儲存桶(S3 bucket) 上啟用靜態網路託管。 上傳靜態內容到S3 儲存桶(S3 bucket). 使用AWS Lambda處理所有動態內容.
- B. 在 AWS 彈性 Beanstalk 環境中部署網路應用程式。 使用 URL 互換在多個 Elastic Beanstalk 環境間切換,用於特性測試.
- C. 向配置在 Java 和 PHP 中的 Amazon EC2 例項部署網路應用程式。 使用自動縮放組和一個應用程式負載平衡器(Application Load Balancer)來管理網站的可用性.
- D. 整合網路應用程式。 對 Amazon EC2 例項應用網路應用程式。 使用 AWS 負載平衡器(Load Balancer) 控制器在包含測試新站點特性的容器之間動態路由流量.

**答案**
D


**詳解**
正確答案是 **D**。
- D：整合網路應用程式。 對 Amazon EC2 例項應用網路應用程式。 使用 AWS 負載平衡器(Load Balancer) 控制器在包含測試新站點特性的容器之間動態路由流量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon S3 桶. 在 S3 儲存桶(S3 bucket) 上啟用靜態網路託管。 上傳靜態內容到S3 儲存桶(S3 bucket). 使用AWS Lambda處理所有動態內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 AWS 彈性 Beanstalk 環境中部署網路應用程式。 使用 URL 互換在多個 Elastic Beanstalk 環境間切換,用於特性測試。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：向配置在 Java 和 PHP 中的 Amazon EC2 例項部署網路應用程式。 使用自動縮放組和一個應用程式負載平衡器(Application Load Balancer)來管理網站的可用性。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #191

**題目**
一家公司有一個訂購應用程式,為MySQL在Amazon RDS儲存客戶資訊. 在正常工作時間,僱員為報告目的進行一次性查詢。 處理訂單時出現超時,因為報告查詢需要很長時間。 公司需要取消超時,同時不妨礙員工進行查詢. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立讀本. 將報告查詢移至讀取的複製件。
- B. 建立讀本. 將命令應用程式分配到主 DB 例項和讀取的複製品。
- C. 以點播能力將訂購應用程式遷移到Amazon DynamoDB.
- D. 安排非高峰時段的報告查詢。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立讀本. 將命令應用程式分配到主 DB 例項和讀取的複製品。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立讀本. 將報告查詢移至讀取的複製件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：以點播能力將訂購應用程式遷移到Amazon DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：安排非高峰時段的報告查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #192

**題目**
一家醫院希望為其大量歷史書面記錄的收藏製作數字複製. 醫院將繼續每天增加數百份新檔案. 醫院資料組將掃描檔案,並將檔案上傳到AWS雲。 解決方案架構師必須執行一個解決方案來分析文件,提取醫療資訊,並儲存文件,這樣應用程式就可以執行資料上的SQL查詢. 解決辦法必須最大限度地擴大可擴展性(scalability)和業務便利。 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 將文件資訊寫入執行 MySQL 資料庫(database) 的 Amazon EC2 例項。
- B. 將文件資訊寫入 Amazon S3 桶中。 使用Amazon Athena查詢資料.
- C. 建立 Amazon EC2 的 Auto Scaling 群組(Auto Scaling group) 例,以執行一個自定義應用程式,處理掃描檔案並提取醫療資訊.
- D. 建立當新文件上傳時執行的 AWS Lambda 函式。 使用Amazon Rekcognition將文件轉換為原始文字. 使用Amazon Translatic Medical來檢測和提取文字中的相關醫學資訊.
- E. 建立當新文件上傳時執行的 AWS Lambda 函式。 使用 Amazon Textract 將文件轉換為原始文字。 使用Amazon Comprehend Medical來檢測和提取文字中的相關醫學資訊.

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：建立 Amazon EC2 的 Auto Scaling 群組(Auto Scaling group) 例,以執行一個自定義應用程式,處理掃描檔案並提取醫療資訊。此選項符合題目條件，能有效滿足核心需求。
- D：建立當新文件上傳時執行的 AWS Lambda 函式。 使用Amazon Rekcognition將文件轉換為原始文字. 使用Amazon Translatic Medical來檢測和提取文字中的相關醫學資訊。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：將文件資訊寫入執行 MySQL 資料庫(database) 的 Amazon EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將文件資訊寫入 Amazon S3 桶中。 使用Amazon Athena查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立當新文件上傳時執行的 AWS Lambda 函式。 使用 Amazon Textract 將文件轉換為原始文字。 使用Amazon Comprehend Medical來檢測和提取文字中的相關醫學資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #193

**題目**
一家公司正在執行Amazon EC2 執行個體的批次應用程式。 該應用程式由一個具有多個Amazon RDS資料庫的後端組成. 該應用程式正在引起資料庫的大量閱讀. 一個解決方案架構師必須減少資料庫(database)的讀數,同時確保高可用性(high availability). 解決方案設計師應如何滿足這一要求?

**選項**
- A. 增加Amazon RDS讀作複製品.
- B. 使用Amazon ElastiCache用於Redis.
- C. 使用 Amazon Route 53 DNS 快取
- D. 使用 Amazon ElastiCache 為Memcached。

**答案**
A


**詳解**
正確答案是 **A**。
- A：增加Amazon RDS讀作複製品。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon ElastiCache用於Redis。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon Route 53 DNS 快取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon ElastiCache 為Memcached 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #194

**題目**
公司需要在AWS上執行一個關鍵的應用程式. 公司需要使用Amazon EC2作為應用程式的資料庫(database). 資料庫(database)必須非常可用,如果發生干擾事件,必須自動失效。 哪種解決辦法能滿足這些要求?

**選項**
- A. 發射兩個EC2例項,每個例項在不同的可用區(Availability Zone)中在同一AWS 區域(Region)中. 在兩個EC2例項上安裝資料庫(database). 配置 EC2 例項為叢集。 設定資料庫(database) 複寫(replication).
- B. 在可用區(Availability Zone)中啟動EC2例項. 在EC2例項上安裝 資料庫(database)。 使用一個亞馬遜機器影象(AMI)來備份資料. 如果發生干擾事件, 使用 AWS CloudFormation 自動提供 EC2 例項。
- C. 發射兩個EC2 執行個體,每例在不同的AWS 區域(Region). 在兩個EC2例項上安裝資料庫(database). 設定資料庫(database) 複寫(replication). 失敗了資料庫(database)到第二個區域(Region).
- D. 在可用區(Availability Zone)中啟動EC2例項. 在EC2例項上安裝 資料庫(database)。 使用一個亞馬遜機器影象(AMI)來備份資料. 如果發生干擾事件,則使用EC2自動回收來恢復例項。

**答案**
C


**詳解**
正確答案是 **C**。
- C：發射兩個EC2 執行個體,每例在不同的AWS 區域(Region). 在兩個EC2例項上安裝資料庫(database). 設定資料庫(database) 複寫(replication). 失敗了資料庫(database)到第二個區域(Region)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：發射兩個EC2例項,每個例項在不同的可用區(Availability Zone)中在同一AWS 區域(Region)中. 在兩個EC2例項上安裝資料庫(database). 配置 EC2 例項為叢集。 設定資料庫(database) 複寫(replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在可用區(Availability Zone)中啟動EC2例項. 在EC2例項上安裝 資料庫(database)。 使用一個亞馬遜機器影象(AMI)來備份資料. 如果發生干擾事件, 使用 AWS CloudFormation 自動提供 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在可用區(Availability Zone)中啟動EC2例項. 在EC2例項上安裝 資料庫(database)。 使用一個亞馬遜機器影象(AMI)來備份資料. 如果發生干擾事件,則使用EC2自動回收來恢復例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #195

**題目**
公司訂單系統向Amazon EC2公司傳送客戶請求。 EC2例項處理訂單,然後將訂單儲存在Amazon RDS上的資料庫(database)上. 使用者報告說,系統故障時必須重新處理訂單. 公司希望有彈性的解決方案,在系統中斷時可以自動處理訂單. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 將EC2 例項移動到 Auto Scaling 群組(Auto Scaling group) 中。 建立一個Amazon EventBridge(Amazon CloudWatch事件)規則,以鎖定亞馬遜彈性容器服務(Amazon ECS)任務.
- B. 將 EC2 例項移動到 Auto Scaling 群組(Auto Scaling group) 之後的 應用程式負載平衡器(Application Load Balancer)(ALB)。 更新向 ALB 端點傳送訊息的命令系統。
- C. 將EC2 例項移動到 Auto Scaling 群組(Auto Scaling group) 中。 配置命令系統, 將訊息傳送到 Amazon 簡單佇列服務(Amazon SQS) 佇列。 配置 EC2 例項以消耗佇列中的訊息。
- D. 建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 建立 AWS Lambda 函式,並訂閱該函式為 SNS 主題. 配置向SNS主題傳送訊息的命令系統. 向 EC2 例項傳送命令,透過使用 AWS Systems Manager 執行命令處理訊息。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 建立 AWS Lambda 函式,並訂閱該函式為 SNS 主題. 配置向SNS主題傳送訊息的命令系統. 向 EC2 例項傳送命令,透過使用 AWS Systems Manager 執行命令處理訊息 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將EC2 例項移動到 Auto Scaling 群組(Auto Scaling group) 中。 建立一個Amazon EventBridge(Amazon CloudWatch事件)規則,以鎖定亞馬遜彈性容器服務(Amazon ECS)任務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將 EC2 例項移動到 Auto Scaling 群組(Auto Scaling group) 之後的 應用程式負載平衡器(Application Load Balancer)(ALB)。 更新向 ALB 端點傳送訊息的命令系統 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將EC2 例項移動到 Auto Scaling 群組(Auto Scaling group) 中。 配置命令系統, 將訊息傳送到 Amazon 簡單佇列服務(Amazon SQS) 佇列。 配置 EC2 例項以消耗佇列中的訊息 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #196

**題目**
一家公司對大量Amazon EC2 執行個體提出申請。 該應用程式將條目讀寫為 Amazon DynamoDB 表格。 迪納摩DB表的大小持續增長,但應用程式僅需要過去30天的資料. 公司需要一個解決方案,最大限度地降低成本和發展努力。 哪種解決辦法符合這些要求?

**選項**
- A. 使用AWS CloudFormation模板來部署完整的解決方案. 每30天重新部署雲格式堆疊,刪除原堆疊.
- B. 使用從 AWS 市場執行 監控(monitoring) 應用程式的EC2 例項。 配置 監控(monitoring) 應用程式,在表格中建立新專案時使用 Amazon DynamoDB Streams 儲存時間戳。 使用執行在EC2例項上的指令碼刪除時間戳超過30天的專案.
- C. 在表格中建立新專案時配置 Amazon DynamoDB Streams 以引用 AWS Lambda 函式。 配置 Lambda 函式刪除表格中超過30天的專案。
- D. 將應用程式擴充套件為在表格中建立的每個新專案上新增一個具有當前時間戳值的屬性+30天。 配置 DynamoDB 以該屬性作為 TTL 屬性。

**答案**
D


**詳解**
正確答案是 **D**。
- D：將應用程式擴充套件為在表格中建立的每個新專案上新增一個具有當前時間戳值的屬性+30天。 配置 DynamoDB 以該屬性作為 TTL 屬性 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS CloudFormation模板來部署完整的解決方案. 每30天重新部署雲格式堆疊,刪除原堆疊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用從 AWS 市場執行 監控(monitoring) 應用程式的EC2 例項。 配置 監控(monitoring) 應用程式,在表格中建立新專案時使用 Amazon DynamoDB Streams 儲存時間戳。 使用執行在EC2例項上的指令碼刪除時間戳超過30天的專案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在表格中建立新專案時配置 Amazon DynamoDB Streams 以引用 AWS Lambda 函式。 配置 Lambda 函式刪除表格中超過30天的專案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #197

**題目**
一個公司有一個微軟.NET應用程式,執行於一個premises Windows Server上. 該應用程式透過使用Oracle 資料庫(Database)標準版伺服器儲存資料. 該公司正計劃向AWS遷移,希望在移動應用程式時儘量減少開發變化. AWS應用環境應該非常可用. 公司應採取何種行動來滿足這些要求?(選二.

**選項**
- A. 用執行.NET Core的 AWS Lambda 函式將應用程式重構為無伺服器.
- B. 在多AZ部署中與.NET平臺重置AWS Elastic Beanstalk中的應用程式.
- C. 與亞馬遜Linux Amazon Machine Image(AMI)一起在Amazon EC2上執行的應用程式重新設定平臺.
- D. 使用AWS 資料庫(Database) 遷移服務(AWS DS)在多AZ部署中從Oracle 資料庫(database)遷移到Amazon DynamoDB.
- E. 使用AWS 資料庫(Database) 遷移服務(AWS DS)在多AZ部署中從Oracle 資料庫(database)遷移到Amazon RDS上的Oracle.

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：在多AZ部署中與.NET平臺重置AWS Elastic Beanstalk中的應用程式。此選項符合題目條件，能有效滿足核心需求。
- D：使用AWS 資料庫(Database) 遷移服務(AWS DS)在多AZ部署中從Oracle 資料庫(database)遷移到Amazon DynamoDB。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：用執行.NET Core的 AWS Lambda 函式將應用程式重構為無伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：與亞馬遜Linux Amazon Machine Image(AMI)一起在Amazon EC2上執行的應用程式重新設定平臺。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用AWS 資料庫(Database) 遷移服務(AWS DS)在多AZ部署中從Oracle 資料庫(database)遷移到Amazon RDS上的Oracle。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #198

**題目**
一家公司在一個前提資料中心的Kubernetes叢集上執行一個集裝箱化的應用程式。 該公司正在使用MongoDB 資料庫(database)進行資料儲存. 公司希望將其中一些環境遷移到AWS,但此時無法更改程式碼或部署方法. 公司需要一個解決方案,將營運開銷(operational overhead)最小化. 哪種解決辦法符合這些要求?

**選項**
- A. 使用亞馬遜彈性容器服務(Amazon ECS),使用Amazon EC2工人節點進行計算,使用EC2上的MongoDB進行資料儲存.
- B. 使用帶有 AWS Fargate 的 Amazon 彈性容器服務(Amazon ECS)進行計算,使用 Amazon DynamoDB 進行資料儲存
- C. 使用Amazon Elastic Kubernetes Service(Amazon EKS)與Amazon EC2工人節點進行計算,使用Amazon DynamoDB進行資料儲存.
- D. 使用Amazon Elastic Kubernetes Service(Amazon EKS)與AWS Fargate進行計算,使用Amazon DocumentDB(與MongoDB相容)進行資料儲存.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用Amazon Elastic Kubernetes Service(Amazon EKS)與AWS Fargate進行計算,使用Amazon DocumentDB(與MongoDB相容)進行資料儲存。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用亞馬遜彈性容器服務(Amazon ECS),使用Amazon EC2工人節點進行計算,使用EC2上的MongoDB進行資料儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用帶有 AWS Fargate 的 Amazon 彈性容器服務(Amazon ECS)進行計算,使用 Amazon DynamoDB 進行資料儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Elastic Kubernetes Service(Amazon EKS)與Amazon EC2工人節點進行計算,使用Amazon DynamoDB進行資料儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #199

**題目**
一個電話營銷公司正在設計其在AWS上的客戶呼叫中心功能. 公司需要一個解決方案,提供多個演講者識別並生成記錄檔案. 公司希望查詢記錄檔案,以分析業務模式. 記錄檔案必須儲存7年,以便審計。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Amazon Rekcognition 進行多個揚聲器識別. 在Amazon S3中儲存記錄檔案. 使用機器學習模型進行筆錄檔案分析.
- B. 使用 Amazon Translative 來進行多個揚聲器識別。 使用Amazon Athena進行筆錄檔案分析.
- C. 使用 Amazon Translate 進行多個揚聲器識別。 在Amazon Redshift中儲存記錄檔案. 使用 SQL 查詢進行筆錄檔案分析.
- D. 使用 Amazon Rekcognition 進行多個揚聲器識別. 在Amazon S3中儲存記錄檔案. 使用 Amazon Textract 進行筆錄檔案分析.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用 Amazon Translate 進行多個揚聲器識別。 在Amazon Redshift中儲存記錄檔案. 使用 SQL 查詢進行筆錄檔案分析。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon Rekcognition 進行多個揚聲器識別. 在Amazon S3中儲存記錄檔案. 使用機器學習模型進行筆錄檔案分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 Amazon Translative 來進行多個揚聲器識別。 使用Amazon Athena進行筆錄檔案分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon Rekcognition 進行多個揚聲器識別. 在Amazon S3中儲存記錄檔案. 使用 Amazon Textract 進行筆錄檔案分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #200

**題目**
一個公司在AWS上託管其應用程式. 公司使用亞馬遜·科尼託管理使用者. 當使用者登入到應用程式時,應用程式透過使用Amazon API Gateway託管的REST API從Amazon DynamoDB獲取所需的資料. 公司希望有一個AWS管理的解決方案,控制對REST API的獲取,以減少開發努力. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 配置 AWS Lambda 函式成為 API Gateway 中的授權者,以驗證哪個使用者提出請求.
- B. 對於每個使用者,建立並指定一個必須隨每個請求一起傳送的API金鑰. 使用 AWS Lambda 函式驗證金鑰。
- C. 將使用者的電子郵件地址隨每個請求一起傳送到信頭中。 啟動一個 AWS Lambda 功能,以驗證該電子郵件地址的使用者是否有適當的存取許可權。
- D. 在 API Gateway 中配置一個 Amazon Cognitto 使用者池授權器,讓 Amazon Cognitto 驗證每個請求.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 AWS Lambda 函式成為 API Gateway 中的授權者,以驗證哪個使用者提出請求。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：對於每個使用者,建立並指定一個必須隨每個請求一起傳送的API金鑰. 使用 AWS Lambda 函式驗證金鑰 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將使用者的電子郵件地址隨每個請求一起傳送到信頭中。 啟動一個 AWS Lambda 功能,以驗證該電子郵件地址的使用者是否有適當的存取許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 API Gateway 中配置一個 Amazon Cognitto 使用者池授權器,讓 Amazon Cognitto 驗證每個請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #201

**題目**
一家公司正在開發面向移動應用使用者的營銷通訊服務. 公司需要用短訊息服務(SMS)向其使用者傳送確認資訊. 使用者必須能夠對短訊息作出答覆。 公司必須將答覆儲存一年,以供分析。 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立 AmazonConnect 聯絡方式來傳送短訊息。 使用AWS Lambda處理響應.
- B. 構建亞馬遜平點之旅. 配置 Amazon Pinpoint 將事件傳送到 Amazon Kinesis 資料流進行分析和存檔.
- C. 使用亞馬遜簡易佇列服務(Amazon SQS)來分發短訊息. 使用AWS Lambda處理響應.
- D. 建立亞馬遜簡易通知服務(Amazon SNS) FIFO主題. 將 Amazon Kinesis 資料流訂閱到 SNS 專題,以供分析和存檔.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 AmazonConnect 聯絡方式來傳送短訊息。 使用AWS Lambda處理響應。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：構建亞馬遜平點之旅. 配置 Amazon Pinpoint 將事件傳送到 Amazon Kinesis 資料流進行分析和存檔。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用亞馬遜簡易佇列服務(Amazon SQS)來分發短訊息. 使用AWS Lambda處理響應。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立亞馬遜簡易通知服務(Amazon SNS) FIFO主題. 將 Amazon Kinesis 資料流訂閱到 SNS 專題,以供分析和存檔。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #202

**題目**
一家公司計劃將其資料移至Amazon S3桶。 資料儲存在S3 儲存桶(S3 bucket)時必須加密. 此外,每年必須自動輪換加密(encryption)鍵。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將資料移至S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption),由Amazon S3管理加密(encryption)鍵(SSE-S3). 使用SSE-S3 加密(encryption)金鑰的內建金鑰旋轉行為.
- B. 建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 啟用自動金鑰旋轉。 設定 S3 儲存桶(S3 bucket) 預設的 加密(encryption) 行為使用客戶管理的 KMS 金鑰。 將資料移至S3 儲存桶(S3 bucket).
- C. 建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 設定 S3 儲存桶(S3 bucket) 預設的 加密(encryption) 行為使用客戶管理的 KMS 金鑰。 將資料移至S3 儲存桶(S3 bucket). 每年手動旋轉KMS金鑰.
- D. 在將資料移至S3 儲存桶(S3 bucket)之前,用客戶關鍵材料加密資料. 建立一個AWS Key Management Service(AWS KMS)金鑰,不包含金鑰材料. 將客戶關鍵材料匯入 KMS 金鑰. 啟用自動金鑰旋轉。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 啟用自動金鑰旋轉。 設定 S3 儲存桶(S3 bucket) 預設的 加密(encryption) 行為使用客戶管理的 KMS 金鑰。 將資料移至S3 儲存桶(S3 bucket)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料移至S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption),由Amazon S3管理加密(encryption)鍵(SSE-S3). 使用SSE-S3 加密(encryption)金鑰的內建金鑰旋轉行為。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 設定 S3 儲存桶(S3 bucket) 預設的 加密(encryption) 行為使用客戶管理的 KMS 金鑰。 將資料移至S3 儲存桶(S3 bucket). 每年手動旋轉KMS金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在將資料移至S3 儲存桶(S3 bucket)之前,用客戶關鍵材料加密資料. 建立一個AWS Key Management Service(AWS KMS)金鑰,不包含金鑰材料. 將客戶關鍵材料匯入 KMS 金鑰. 啟用自動金鑰旋轉 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #203

**題目**
金融公司的客戶要求透過傳送簡訊與金融顧問預約。 在 Amazon EC2 例項上執行的網路應用程式接受預約請求. 簡訊透過網路應用程式釋出到一個亞馬遜簡易佇列服務(Amazon SQS)佇列. 執行在EC2例項上的另一個應用程式然後向客戶傳送會議邀請和會議確認電子郵件資訊. 在成功安排之後,該應用程式將會議資訊儲存在Amazon DynamoDB 資料庫(database)中。 隨著公司的擴大,顧客報告說他們的會議邀請書需要更長的時間才能到達. 一個解決方案設計師應該建議什麼來解決這個問題?

**選項**
- A. 在DynamoDB 資料庫(database)前增加一個DynamoDB加速器(DAX)叢集.
- B. 在接受預約請求的網路應用程式前新增一個Amazon API Gateway API.
- C. 增加Amazon CloudFront分佈. 將源設定為接受預約請求的網路應用程式.
- D. 為傳送會議邀請的應用程式新增 Auto Scaling 群組(Auto Scaling group)。 根據 SQS 佇列的深度配置 Auto Scaling 群組(Auto Scaling group) 以縮放。

**答案**
D


**詳解**
正確答案是 **D**。
- D：為傳送會議邀請的應用程式新增 Auto Scaling 群組(Auto Scaling group)。 根據 SQS 佇列的深度配置 Auto Scaling 群組(Auto Scaling group) 以縮放 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在DynamoDB 資料庫(database)前增加一個DynamoDB加速器(DAX)叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在接受預約請求的網路應用程式前新增一個Amazon API Gateway API。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：增加Amazon CloudFront分佈. 將源設定為接受預約請求的網路應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #204

**題目**
一家線上零售公司擁有超過5000萬活躍客戶,每天收到超過25,000份訂單. 公司為客戶收集購買資料,並將這些資料儲存在Amazon S3中. 其他客戶資料則儲存在Amazon RDS中. 公司希望將所有資料提供給各團隊,以便各團隊能夠進行分析. 解決方案必須提供管理資料精細授權的能力,必須儘量減少營運開銷(operational overhead)。 哪種解決辦法能滿足這些要求?

**選項**
- A. 移動購買資料直接寫入Amazon RDS. 使用 RDS 存取控制來限制存取.
- B. 計劃一個 AWS Lambda 函式,將資料定期從 Amazon RDS 複製到 Amazon S3。 建立 AWS Glue 爬蟲。 使用Amazon Athena查詢資料. 使用S3策略限制存取.
- C. 使用 AWS 湖組建立 資料湖(data lake)。 建立一個 AWS Glue JDBC 連線到 Amazon RDS. 在湖中註冊S3 儲存桶(S3 bucket)。 使用Lake Formation存取控制限制存取.
- D. 建立 Amazon Redshift 叢集。 安排一個 AWS Lambda 函式,將 Amazon S3 和 Amazon RDS 的資料定期複製到 Amazon Redshift。 使用Amazon Redshift存取控制限制存取.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 Amazon Redshift 叢集。 安排一個 AWS Lambda 函式,將 Amazon S3 和 Amazon RDS 的資料定期複製到 Amazon Redshift。 使用Amazon Redshift存取控制限制存取。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：移動購買資料直接寫入Amazon RDS. 使用 RDS 存取控制來限制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：計劃一個 AWS Lambda 函式,將資料定期從 Amazon RDS 複製到 Amazon S3。 建立 AWS Glue 爬蟲。 使用Amazon Athena查詢資料. 使用S3策略限制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 湖組建立 資料湖(data lake)。 建立一個 AWS Glue JDBC 連線到 Amazon RDS. 在湖中註冊S3 儲存桶(S3 bucket)。 使用Lake Formation存取控制限制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #205

**題目**
一家公司在一個premes資料中心內主持一個營銷網站. 網站由靜態文件組成,執行在單一伺服器上. 一個管理員不經常更新網站內容,並使用SFTP客戶端上傳新文件. 公司決定託管其在AWS上的網站,並使用Amazon CloudFront. 公司解決方案架構師建立了CloudFront發行. 解決方案架構師必須設計最具有成本效益和復原力的架構,使網站託管成為雲龍源. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon Lightsail建立虛擬伺服器. 在 Lightsail 例項中配置網路伺服器。 使用 SFTP 客戶端上傳網站內容。
- B. 為 Amazon EC2 例項建立 AWS Auto Scaling 群組(Auto Scaling group)。 使用應用程式負載平衡器(Application Load Balancer)型機車. 使用 SFTP 客戶端上傳網站內容。
- C. 建立私人Amazon S3 儲存桶. 使用 S3 儲存桶政策(bucket policy) 允許從 CloudFront 原始碼存取身份( OAI) 存取。 使用 AWS CLI 上傳網站內容。
- D. 打造公共Amazon S3 儲存桶. 配置 SFTP 的 AWS 傳輸。 為網站託管配置 S3 儲存桶(S3 bucket)。 使用 SFTP 客戶端上傳網站內容。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立私人Amazon S3 儲存桶. 使用 S3 儲存桶政策(bucket policy) 允許從 CloudFront 原始碼存取身份( OAI) 存取。 使用 AWS CLI 上傳網站內容 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon Lightsail建立虛擬伺服器. 在 Lightsail 例項中配置網路伺服器。 使用 SFTP 客戶端上傳網站內容 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 Amazon EC2 例項建立 AWS Auto Scaling 群組(Auto Scaling group)。 使用應用程式負載平衡器(Application Load Balancer)型機車. 使用 SFTP 客戶端上傳網站內容 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：打造公共Amazon S3 儲存桶. 配置 SFTP 的 AWS 傳輸。 為網站託管配置 S3 儲存桶(S3 bucket)。 使用 SFTP 客戶端上傳網站內容 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #206

**題目**
一家公司希望管理亞馬遜機器影象(AMI). 該公司目前將AMI複製到同一家AWS 區域(Region)公司,在那裡建立了AMI. 公司需要設計一個應用程式來捕捉AWS API呼叫,並在Amazon EC2 CreateImage API操作在公司帳戶內呼叫時發出警報. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立 AWS Lambda 函式以查詢 AWS CloudTrail 日誌,並在檢測到 CreateImage API 呼叫時發出警告.
- B. 配置 AWS CloudTrail 使用 Amazon 簡單通知服務(Amazon SNS) , 當更新日誌傳送到 Amazon S3 時會發生. 使用 Amazon Athena 建立一個新表格,並在檢測到API呼叫時查詢CreateImage.
- C. 為 CreateImage API 呼叫建立 Amazon EventBridge(Amazon CloudWatch Events)規則. 配置目標為亞馬遜簡單通知服務(Amazon SNS),以便在檢測到Creatimage API呼叫時發出警報.
- D. 配置一個亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列作為AWS CloudTrail日誌的目標. 建立一個 AWS Lambda 函式,在檢測到一個 Creatimage API 呼叫時向一個 Amazon 簡單通知服務(Amazon SNS) 發出警報.

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置一個亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列作為AWS CloudTrail日誌的目標. 建立一個 AWS Lambda 函式,在檢測到一個 Creatimage API 呼叫時向一個 Amazon 簡單通知服務(Amazon SNS) 發出警報。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 AWS Lambda 函式以查詢 AWS CloudTrail 日誌,並在檢測到 CreateImage API 呼叫時發出警告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 AWS CloudTrail 使用 Amazon 簡單通知服務(Amazon SNS) , 當更新日誌傳送到 Amazon S3 時會發生. 使用 Amazon Athena 建立一個新表格,並在檢測到API呼叫時查詢CreateImage。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 CreateImage API 呼叫建立 Amazon EventBridge(Amazon CloudWatch Events)規則. 配置目標為亞馬遜簡單通知服務(Amazon SNS),以便在檢測到Creatimage API呼叫時發出警報。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #207

**題目**
一個公司擁有一個同步API,用於攝取使用者請求,並根據請求型別,將請求傳送到適當的微服務處理. 該公司正使用Amazon API Gateway來部署API前端,以及一個AWS Lambda功能,該功能在將使用者請求傳送到處理微服務之前,會引用Amazon DynamoDB來儲存使用者請求. 該公司在其預算允許的範圍內提供了儘可能多的DynamoDB 吞吐量(throughput),但該公司仍然面臨可用性問題,正在失去使用者請求. 一個解決方案設計師應如何在不影響到現有使用者的情況下解決這一問題?

**選項**
- A. 在 API 閘道器上新增節流, 並設定伺服器側節流限制。
- B. 使用DynamoDB加速器(DAX)和Lambda來緩衝寫給DynamoDB.
- C. 在 DynamoDB 為表格建立一個帶有使用者請求的二級索引。
- D. 使用亞馬遜簡易排隊服務(Amazon SQS)佇列和Lambda來緩衝寫給DynamoDB.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用亞馬遜簡易排隊服務(Amazon SQS)佇列和Lambda來緩衝寫給DynamoDB。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 API 閘道器上新增節流, 並設定伺服器側節流限制 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用DynamoDB加速器(DAX)和Lambda來緩衝寫給DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 DynamoDB 為表格建立一個帶有使用者請求的二級索引 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #208

**題目**
公司需要將資料從Amazon EC2例項移動到Amazon S3桶. 該公司必須確保沒有API的電話和任何資料透過公共網際網路線路。 只有EC2例項可以存取上傳資料到S3 儲存桶(S3 bucket). 哪種解決辦法能滿足這些要求?

**選項**
- A. 在EC2例項所在的子網為Amazon S3建立介面VPC 端點(VPC endpoint). 在 S3 儲存桶(S3 bucket) 上附加一個資源政策, 只允許 EC2 例項的 IAM 角色存取。
- B. 在EC2例項所在的可用區(Availability Zone)中為Amazon S3建立一個閘道器VPC 端點(VPC endpoint). 將適當的安全小組帶至終點。 在 S3 儲存桶(S3 bucket) 上附加資源政策, 只允許 EC2 例項的 IAM 角色存取。
- C. 從 EC2 例項中執行 ns lookup 工具以獲取 S3 儲存桶(S3 bucket) 服務 API 端點的私人 IP 地址。 在 VPC 路由表中建立一條路由,為EC2 例項提供S3 儲存桶(S3 bucket) 存取許可權. 在 S3 儲存桶(S3 bucket) 上附加資源政策, 只允許 EC2 例項的 IAM 角色存取。
- D. 使用提供的AWS,可公開獲取的ip-ranges.json檔案獲取S3 儲存桶(S3 bucket)服務API端點的私人IP地址. 在 VPC 路由表中建立一條路由,為EC2 例項提供S3 儲存桶(S3 bucket) 存取許可權. 在 S3 儲存桶(S3 bucket) 上附加資源政策, 只允許 EC2 例項的 IAM 角色存取。

**答案**
B


**詳解**
正確答案是 **B**。
- B：在EC2例項所在的可用區(Availability Zone)中為Amazon S3建立一個閘道器VPC 端點(VPC endpoint). 將適當的安全小組帶至終點。 在 S3 儲存桶(S3 bucket) 上附加資源政策, 只允許 EC2 例項的 IAM 角色存取 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在EC2例項所在的子網為Amazon S3建立介面VPC 端點(VPC endpoint). 在 S3 儲存桶(S3 bucket) 上附加一個資源政策, 只允許 EC2 例項的 IAM 角色存取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：從 EC2 例項中執行 ns lookup 工具以獲取 S3 儲存桶(S3 bucket) 服務 API 端點的私人 IP 地址。 在 VPC 路由表中建立一條路由,為EC2 例項提供S3 儲存桶(S3 bucket) 存取許可權. 在 S3 儲存桶(S3 bucket) 上附加資源政策, 只允許 EC2 例項的 IAM 角色存取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用提供的AWS,可公開獲取的ip-ranges.json檔案獲取S3 儲存桶(S3 bucket)服務API端點的私人IP地址. 在 VPC 路由表中建立一條路由,為EC2 例項提供S3 儲存桶(S3 bucket) 存取許可權. 在 S3 儲存桶(S3 bucket) 上附加資源政策, 只允許 EC2 例項的 IAM 角色存取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #209

**題目**
一個解決方案架構師正在設計一個正在AWS雲部署的新應用程式的架構. 該應用程式將在Amazon EC2 現場執行,並將自動跨越多個可用區(Availability Zones)。 EC2 執行個體將經常增加和減少。 一個應用程式負載平衡器(Application Load Balancer)(ALB)將處理負載分配. 該架構需要支援分散式會話資料管理. 公司願意在必要時修改程式碼. 解決方案架構設計師應如何確保架構支援分散式會話資料管理?

**選項**
- A. 使用Amazon ElastiCache來管理和儲存會話資料.
- B. 使用 ALB 的會話無限( sticky sessions)來管理會話資料.
- C. 使用 AWS Systems Manager 的會話管理器來管理會話.
- D. 使用 AWS 安全託肯服務( AWS STS) 中的 GetSessionToken API 操作來管理會話。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon ElastiCache來管理和儲存會話資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 ALB 的會話無限( sticky sessions)來管理會話資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Systems Manager 的會話管理器來管理會話。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 安全託肯服務( AWS STS) 中的 GetSessionToken API 操作來管理會話 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #210

**題目**
一家公司提供糧食運送服務,這種服務正在迅速增長。 由於增長,該公司的訂單處理系統在高峰交通時段遇到了縮放問題. 當前的架構包括如下: • Amazon EC2 一組 Amazon EC2 例項,執行在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 例項,從應用程式中收集指令 ^ 另一組 EC2 例項,執行在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 例項,執行在完成指令 訂單收集過程迅速發生,但訂單實現過程可能需要更長的時間. 資料不能因為一個縮放事件而丟失。 解決方案架構師必須確保訂單收集過程和訂單實現過程能夠在高峰交通時段適當規模化. 解決方案必須最佳化對公司AWS資源的利用. 哪種解決辦法符合這些要求?

**選項**
- A. 使用 Amazon CloudWatch 度量衡來監視自動縮放組中每個例項的CPU. 根據工作高峰值配置每個Auto Scaling 群組(Auto Scaling group)的最低容量.
- B. 使用 Amazon CloudWatch 度量衡來監視自動縮放組中每個例項的CPU. 配置一個 Cloud Watch 提醒以引用 Amazon 簡單通知服務( Amazon SNS) 主題, 該主題可按要求建立額外的自動縮放組。
- C. 提供兩個亞馬遜簡易佇列服務(Amazon SQS)佇列:一個用於命令收集,另一個用於命令實現. 配置 EC2 例項以檢視各自的佇列。 根據佇列傳送的通知來縮放自動縮放組。
- D. 提供兩個亞馬遜簡易佇列服務(Amazon SQS)佇列:一個用於命令收集,另一個用於命令實現. 配置 EC2 例項以檢視各自的佇列。 根據每個例項的積壓計算建立一個衡量標準。 基於此引數的自動縮放組。

**答案**
C


**詳解**
正確答案是 **C**。
- C：提供兩個亞馬遜簡易佇列服務(Amazon SQS)佇列:一個用於命令收集,另一個用於命令實現. 配置 EC2 例項以檢視各自的佇列。 根據佇列傳送的通知來縮放自動縮放組 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon CloudWatch 度量衡來監視自動縮放組中每個例項的CPU. 根據工作高峰值配置每個Auto Scaling 群組(Auto Scaling group)的最低容量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 Amazon CloudWatch 度量衡來監視自動縮放組中每個例項的CPU. 配置一個 Cloud Watch 提醒以引用 Amazon 簡單通知服務( Amazon SNS) 主題, 該主題可按要求建立額外的自動縮放組 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：提供兩個亞馬遜簡易佇列服務(Amazon SQS)佇列:一個用於命令收集,另一個用於命令實現. 配置 EC2 例項以檢視各自的佇列。 根據每個例項的積壓計算建立一個衡量標準。 基於此引數的自動縮放組 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #211

**題目**
一家公司擁有多種生產應用. 其中一個應用程式包括來自Amazon EC2,AWS Lambda,Amazon RDS,亞馬遜簡易通知服務(Amazon SNS)和亞馬遜簡易佇列服務(AWS多個區域)的資源. 所有公司資源都標有"應用程式"的標籤名稱和與每個應用程式對應的值。 解決方案設計師必須提供最快的解決方案,以識別所有標記的元件。 哪種解決辦法符合這些要求?

**選項**
- A. 使用AWS CloudTrail生成一個帶有應用程式標記的資源列表.
- B. 使用 AWS CLI 查詢所有區域的每個服務以報告標記的元件。
- C. 在 Amazon CloudWatch Logs Insights 中執行一個查詢以報告帶有應用程式標籤的元件.
- D. 執行與 AWS 資源組標籤編輯器的查詢, 以應用程式標籤報告全球的資源。

**答案**
D


**詳解**
正確答案是 **D**。
- D：執行與 AWS 資源組標籤編輯器的查詢, 以應用程式標籤報告全球的資源 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS CloudTrail生成一個帶有應用程式標記的資源列表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS CLI 查詢所有區域的每個服務以報告標記的元件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Amazon CloudWatch Logs Insights 中執行一個查詢以報告帶有應用程式標籤的元件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #212

**題目**
一個公司需要每天將資料庫(database)出口一次到Amazon S3,供其他團隊存取. 匯出的物件大小介於2GB和5GB之間. 資料的S3存取模式是可變的,變化很快. 資料必須立即提供,並且必須持續3個月。 公司需要最具成本效益的解決辦法,不會增加檢索時間。 公司應使用何種S3儲存級來滿足這些要求?

**選項**
- A. S3 Intelligent-Tiering.
- B. S3 Glacier Instant Retrieval.
- C. S3標準
- D. S3 標準-不頻繁存取（S3 Standard-IA）

**答案**
A


**詳解**
正確答案是 **A**。
- A：S3 Intelligent-Tiering。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：S3 Glacier Instant Retrieval。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：S3標準。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：S3 標準-不頻繁存取（S3 Standard-IA）。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #213

**題目**
一家公司正在開發一個新的移動應用程式。 公司必須實施適當的流量過濾,以保護它的應用程式負載平衡器(Application Load Balancer)(ALB)免受常見的應用級別攻擊,如跨站點指令碼或SQL注射. 該公司基礎設施和業務人員最少。 公司需要減少其管理、更新和為其AWS環境保障伺服器的責任份額。 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 配置 AWS WAF 規則並將其與 ALB 關聯.
- B. 使用 Amazon S3 應用, 並啟用公共託管。
- C. 部署AWS Shield 高階並新增ALB作為保護資源.
- D. 建立一個新的ALB,引導流量到執行第三方防火牆(firewall)的Amazon EC2例項,然後將流量傳遞到目前的ALB.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 AWS WAF 規則並將其與 ALB 關聯。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 Amazon S3 應用, 並啟用公共託管 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署AWS Shield 高階並新增ALB作為保護資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個新的ALB,引導流量到執行第三方防火牆(firewall)的Amazon EC2例項,然後將流量傳遞到目前的ALB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #214

**題目**
一家公司的報告系統每天向Amazon S3桶提供數百個. 公司必須將這些檔案轉換為Apache Parquet格式,並將檔案儲存在已轉換的資料桶中. 在LEAST的開發努力下,哪一種解決辦法能滿足這些要求?

**選項**
- A. 建立一個安裝 Apache Spark 的 Amazon EMR 叢集。 寫入 Spark 應用程式以轉換資料。 使用EMR檔案系統(EMRFS)將檔案寫入轉換後的資料桶.
- B. 建立 AWS Glue 爬蟲以發現資料. 建立一個 AWS Glue 提取,轉換,並載入(ETL)任務來轉換資料. 在輸出步驟中指定已轉換的資料桶。
- C. 使用 AWS 批次與 Bash 語法建立工作定義,將資料轉換並輸出到轉換後的資料桶中. 使用職務定義來提交工作. 指定陣列任務為任務型別。
- D. 建立 AWS Lambda 函式,將資料轉換,輸出到轉換後的資料桶中. 配置 S3 儲存桶(S3 bucket) 的事件通知。 指定 Lambda 函式為事件通知的目的地。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 AWS Lambda 函式,將資料轉換,輸出到轉換後的資料桶中. 配置 S3 儲存桶(S3 bucket) 的事件通知。 指定 Lambda 函式為事件通知的目的地。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個安裝 Apache Spark 的 Amazon EMR 叢集。 寫入 Spark 應用程式以轉換資料。 使用EMR檔案系統(EMRFS)將檔案寫入轉換後的資料桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS Glue 爬蟲以發現資料. 建立一個 AWS Glue 提取,轉換,並載入(ETL)任務來轉換資料. 在輸出步驟中指定已轉換的資料桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 批次與 Bash 語法建立工作定義,將資料轉換並輸出到轉換後的資料桶中. 使用職務定義來提交工作. 指定陣列任務為任務型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #215

**題目**
一家公司擁有700 TB的備份(backup)資料儲存在其資料中心的網路附加儲存(NAS)中. 這一備份(backup)資料需要用於不經常的監管請求,必須保留7年。 公司決定將這個備份(backup)資料從它的資料中心遷移到AWS. 移民必須在1個月內完成。 該公司在其公共網際網路連線上擁有500Mbps的專用頻寬,可供資料傳輸使用. 一個解決方案架構師應該怎麼做才能以低價遷移和儲存資料?

**選項**
- A. 命令AWS Snowball裝置傳輸資料. 使用一個生命週期政策(lifecycle policy)來將檔案轉換到Amazon S3 Glacier Deep Archive.
- B. 在資料中心和Amazon VPC之間建立VPN連線。 使用AWS CLI將現場的資料複製到Amazon S3冰川.
- C. 提供500 Mbps AWS Direct Connect連線,並將資料傳輸到Amazon S3. 使用一個生命週期政策(lifecycle policy)來將檔案轉換到Amazon S3 Glacier Deep Archive.
- D. 使用AWS DataSync來傳輸資料,並在當地部署一個DataSync代理. 使用 DataSync 任務將檔案從所在地 NAS 儲存複製到 Amazon S3 Glacier。

**答案**
A


**詳解**
正確答案是 **A**。
- A：命令AWS Snowball裝置傳輸資料. 使用一個生命週期政策(lifecycle policy)來將檔案轉換到Amazon S3 Glacier Deep Archive。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在資料中心和Amazon VPC之間建立VPN連線。 使用AWS CLI將現場的資料複製到Amazon S3冰川。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：提供500 Mbps AWS Direct Connect連線,並將資料傳輸到Amazon S3. 使用一個生命週期政策(lifecycle policy)來將檔案轉換到Amazon S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS DataSync來傳輸資料,並在當地部署一個DataSync代理. 使用 DataSync 任務將檔案從所在地 NAS 儲存複製到 Amazon S3 Glacier 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #216

**題目**
一個公司有一個沒有伺服器的網站,在Amazon S3桶裡有數百萬個物體. 公司使用S3 儲存桶(S3 bucket)作為Amazon CloudFront分銷的原產地. 公司沒有在裝藥前將加密(encryption)設定在S3 儲存桶(S3 bucket)上. 一個解決方案架構師需要為今後S3 儲存桶(S3 bucket)中所有現有物件和所有物件啟用加密(encryption). 以哪些辦法能滿足這些要求?

**選項**
- A. 建立新的S3 儲存桶(S3 bucket). 為新的S3 儲存桶(S3 bucket)開啟預設的加密(encryption)設定. 將所有已有物件下載到本地臨時儲存。 上傳物件到新的 S3 儲存桶(S3 bucket).
- B. 開啟S3 儲存桶(S3 bucket)的預設加密(encryption)設定. 使用 S3 編目特性建立 .csv 檔案,列出未加密物件。 執行 S3 Batch Operations 任務, 使用複製命令加密這些物件。
- C. 使用 AWS Key Management Service(AWS KMS) 建立一個新的 加密(encryption) 金鑰. 更改S3 儲存桶(S3 bucket)上的設定,使用伺服器側式加密(encryption),由AWS KMS管理加密(encryption)金鑰(SSE-KMS). 開啟S3 儲存桶(S3 bucket)的版本.
- D. 在AWS管理控制檯中導航到Amazon S3. 瀏覽 S3 儲存桶(S3 bucket) 的物件。 按加密(encryption)欄位排序. 選擇每個未加密物件。 使用修改按鈕對 S3 儲存桶(S3 bucket) 中的每個未加密物件應用預設的 加密(encryption) 設定。

**答案**
B


**詳解**
正確答案是 **B**。
- B：開啟S3 儲存桶(S3 bucket)的預設加密(encryption)設定. 使用 S3 編目特性建立 .csv 檔案,列出未加密物件。 執行 S3 Batch Operations 任務, 使用複製命令加密這些物件 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立新的S3 儲存桶(S3 bucket). 為新的S3 儲存桶(S3 bucket)開啟預設的加密(encryption)設定. 將所有已有物件下載到本地臨時儲存。 上傳物件到新的 S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Key Management Service(AWS KMS) 建立一個新的 加密(encryption) 金鑰. 更改S3 儲存桶(S3 bucket)上的設定,使用伺服器側式加密(encryption),由AWS KMS管理加密(encryption)金鑰(SSE-KMS). 開啟S3 儲存桶(S3 bucket)的版本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS管理控制檯中導航到Amazon S3. 瀏覽 S3 儲存桶(S3 bucket) 的物件。 按加密(encryption)欄位排序. 選擇每個未加密物件。 使用修改按鈕對 S3 儲存桶(S3 bucket) 中的每個未加密物件應用預設的 加密(encryption) 設定 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #217

**題目**
一家公司在Amazon EC2例項上執行一個全球網路應用程式,其背後是應用程式負載平衡器(Application Load Balancer). 該應用程式將資料儲存在Amazon Aurora中. 公司需要建立災難復原(disaster recovery)解決方案,可以容忍長達30分鐘的停機時間和潛在的資料損失. 當初級基礎設施健康時,解決辦法不需要處理負荷。 解決方案設計師應如何滿足這些要求?

**選項**
- A. 將應用程式與必要的基礎設施部分一起部署。 使用 Amazon Route 53 配置主動被動故障。 在第二個AWS 區域(Region)中建立一個Aurora複製版.
- B. 在第二個AWS 區域(Region)中主持應用的縮放部署。 使用 Amazon Route 53 配置主動活動故障。 在第二個區域(Region)中建立一個Aurora複製版.
- C. 在第二個AWS 區域(Region)中複製初級基礎設施. 使用 Amazon Route 53 配置主動活動故障。 建立從最新的快照(snapshot)恢復的Aurora 資料庫(database).
- D. 以AWS Backup備份資料. 使用備份(backup)在第二個AWS 區域(Region)中建立所需的基礎設施. 使用 Amazon Route 53 配置主動被動故障。 在第二個區域(Region)中建立一個Aurora第二初級案例.

**答案**
D


**詳解**
正確答案是 **D**。
- D：以AWS Backup備份資料. 使用備份(backup)在第二個AWS 區域(Region)中建立所需的基礎設施. 使用 Amazon Route 53 配置主動被動故障。 在第二個區域(Region)中建立一個Aurora第二初級案例。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將應用程式與必要的基礎設施部分一起部署。 使用 Amazon Route 53 配置主動被動故障。 在第二個AWS 區域(Region)中建立一個Aurora複製版。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在第二個AWS 區域(Region)中主持應用的縮放部署。 使用 Amazon Route 53 配置主動活動故障。 在第二個區域(Region)中建立一個Aurora複製版。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在第二個AWS 區域(Region)中複製初級基礎設施. 使用 Amazon Route 53 配置主動活動故障。 建立從最新的快照(snapshot)恢復的Aurora 資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #218

**題目**
一家公司有一個網路伺服器執行在一個具有彈性IP地址的公共子網中的Amazon EC2例項上. 預設的 安全群組(security group) 被指定為 EC2 例項。 預設的網路 ACL(network ACL)已經修改,以封鎖所有流量. 一個解決方案架構師需要讓網路伺服器從443埠的任何地方都可以存取. 哪些步驟的組合將完成這項任務?(選二.

**選項**
- A. 建立 安全群組(security group) , 並附有一條規則, 允許從 0.0. 0.0/ 0.
- B. 建立 安全群組(security group) , 附帶一條規則允許 TCP 埠 443 到 0.0.0.0/0.
- C. 更新網路 ACL(network ACL),允許從來源0.0.0.0/0. 允許TCP埠443.
- D. 更新網路 ACL(network ACL),允許從0.0.0/0源埠進入/輸出TCP埠443,並允許進入0.0.0/0.
- E. 更新網路 ACL(network ACL),允許從0.0.0/0源頭進入TCP埠443,並從32768-65535源頭進入TCP埠到0.0.0.0/0.

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：建立 安全群組(security group) , 並附有一條規則, 允許從 0.0. 0.0/ 0。此選項符合題目條件，能有效滿足核心需求。
- E：更新網路 ACL(network ACL),允許從0.0.0/0源頭進入TCP埠443,並從32768-65535源頭進入TCP埠到0.0.0.0/0。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：建立 安全群組(security group) , 附帶一條規則允許 TCP 埠 443 到 0.0.0.0/0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：更新網路 ACL(network ACL),允許從來源0.0.0.0/0. 允許TCP埠443。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：更新網路 ACL(network ACL),允許從0.0.0/0源埠進入/輸出TCP埠443,並允許進入0.0.0/0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #219

**題目**
公司的申請有業績問題。 應用程式狀態良好,需要完成關於 Amazon EC2 例項的模擬任務。 公司使用AWS CloudFormation來部署基礎設施,並使用M5 EC2例項家族. 隨著交通量的增加,應用效能下降. 當使用者試圖存取應用程式時,使用者正在報告延遲. 哪種解決辦法能以業務效率最高的方式解決這些問題?

**選項**
- A. EC2 替換為 Auto Scaling 群組(Auto Scaling group) 執行的 T3 EC2 例項。 使用 AWS 管理控制檯進行更改。
- B. 修改 CloudFormation 模板,以便在 Auto Scaling 群組(Auto Scaling group) 中執行 EC2 例項。 如有必要,可人工增加Auto Scaling 群組(Auto Scaling group)的預期能力和最大容量。
- C. 修改 Cloud Formation 模板。 將 EC2 例項替換為 R5 例項。 使用Amazon CloudWatch內建的EC2記憶體度量衡來跟蹤應用效能,用於未來的能力規劃.
- D. 修改 Cloud Formation 模板。 將 EC2 例項替換為 R5 例項。 在EC2例項上部署Amazon CloudWatch代理,為未來能力規劃生成自定義應用程式延遲(latency)度量衡。

**答案**
D


**詳解**
正確答案是 **D**。
- D：修改 Cloud Formation 模板。 將 EC2 例項替換為 R5 例項。 在EC2例項上部署Amazon CloudWatch代理,為未來能力規劃生成自定義應用程式延遲(latency)度量衡。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：EC2 替換為 Auto Scaling 群組(Auto Scaling group) 執行的 T3 EC2 例項。 使用 AWS 管理控制檯進行更改 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：修改 CloudFormation 模板,以便在 Auto Scaling 群組(Auto Scaling group) 中執行 EC2 例項。 如有必要,可人工增加Auto Scaling 群組(Auto Scaling group)的預期能力和最大容量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：修改 Cloud Formation 模板。 將 EC2 例項替換為 R5 例項。 使用Amazon CloudWatch內建的EC2記憶體度量衡來跟蹤應用效能,用於未來的能力規劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #220

**題目**
一個解決方案架構師正在使用Amazon API Gateway設計一個新的API,接收使用者的請求. 請求量變化很大;數小時就可以透過,而沒有收到單一請求。 資料處理將同步進行,但應在提出請求後幾秒鐘內完成。 解決方案設計師應提供哪些計算服務,以便API以最低的成本提供需求?

**選項**
- A. AWS Glue 任務
- B. AWS Lambda 函式
- C. 在Amazon Elastic Kubernetes Service(Amazon EKS)主辦的集裝箱化服務
- D. Amazon EC2在亞馬遜ECS提供集裝箱服務

**答案**
B


**詳解**
正確答案是 **B**。
- B：AWS Lambda 函式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：AWS Glue 任務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon Elastic Kubernetes Service(Amazon EKS)主辦的集裝箱化服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon EC2在亞馬遜ECS提供集裝箱服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #221

**題目**
一家公司在亞馬遜Linux EC2的一組例項上執行一個應用程式. 出於合規(compliance)的原因,公司必須保留所有應用日誌檔案7年. 日誌檔案將透過必須能夠同時存取所有檔案的報告工具進行分析。 哪些儲存解決方案符合這些要求?

**選項**
- A. 亞馬遜彈性區塊儲存(Amazon EBS)
- B. 亞馬遜彈性檔案系統(Amazon EFS)
- C. Amazon EC2 例項商店
- D. Amazon S3.

**答案**
D


**詳解**
正確答案是 **D**。
- D：Amazon S3。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：亞馬遜彈性區塊儲存(Amazon EBS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：亞馬遜彈性檔案系統(Amazon EFS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：Amazon EC2 例項商店。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #222

**題目**
一家公司僱用了一家外部供應商在該公司的AWS帳戶工作。 供應商使用一個自動工具,由供應商擁有的AWS帳戶託管。 該供應商無法進入該公司的AWS帳戶。 解決方案設計師應如何允許供應商進入?

**選項**
- A. 在公司帳戶中設立IAM角色,授權供應商進入IAM角色. 將適當的IAM政策附在供應商需要的許可上。
- B. 在公司的帳戶中建立一個滿足密碼複雜要求的IAM使用者. 向使用者附上適當的IAM政策,以獲得供應商所需的許可。
- C. 在公司帳戶中建立一個IAM集團. 將工具的 IAM 使用者從供應商帳戶新增到組中。 將適當的IAM政策附給集團,以獲得供應商所需的許可。
- D. 透過選擇"AWS帳戶"作為IAM控制檯的提供者型別來建立新的身份提供者。 提供供應商的AWS帳戶ID和使用者名稱。 向新供應商附上適當的IAM政策,以獲得供應商所需的許可。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在公司帳戶中設立IAM角色,授權供應商進入IAM角色. 將適當的IAM政策附在供應商需要的許可上。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在公司的帳戶中建立一個滿足密碼複雜要求的IAM使用者. 向使用者附上適當的IAM政策,以獲得供應商所需的許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在公司帳戶中建立一個IAM集團. 將工具的 IAM 使用者從供應商帳戶新增到組中。 將適當的IAM政策附給集團,以獲得供應商所需的許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過選擇"AWS帳戶"作為IAM控制檯的提供者型別來建立新的身份提供者。 提供供應商的AWS帳戶ID和使用者名稱。 向新供應商附上適當的IAM政策,以獲得供應商所需的許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #223

**題目**
一家公司已部署一個Java Spring Boot應用程式,作為在亞馬遜精英庫伯涅茨服務(Amazon EKS)上執行於私人子網的 Pod. 該應用程式需要將資料寫入一個Amazon DynamoDB表格. 解決方案設計師必須確保應用程式能夠與DynamoDB表互動,而不會將流量暴露在網際網路上. 設計師應採取哪些步驟來實現這一目標?(選二.

**選項**
- A. 附加一個具有足夠許可權的IAM角色到EKS sock.
- B. 附加一個擁有足夠許可權的 IAM 使用者到 EKS 顯示器。
- C. 允許透過私人子網的ACLs網路向外連線到DynamoDB表格.
- D. 為 DynamoDB 建立 VPC 端點(VPC endpoint)。
- E. 在Java Spring Boot程式碼中嵌入存取金鑰.

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：附加一個具有足夠許可權的IAM角色到EKS sock。此選項符合題目條件，能有效滿足核心需求。
- D：為 DynamoDB 建立 VPC 端點(VPC endpoint) 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：附加一個擁有足夠許可權的 IAM 使用者到 EKS 顯示器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：允許透過私人子網的ACLs網路向外連線到DynamoDB表格。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在Java Spring Boot程式碼中嵌入存取金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #224

**題目**
一家公司最近將其網路應用程式遷移到AWS,在一次AWS 區域(Region)中重置Amazon EC2例項上的應用程式. 公司希望重新設計其應用架構,使其具有高度可用性和過失容忍性. 交通必須隨機到達所有執行的EC2例項. 公司應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 建立 Amazon Route 53 故障路由政策。
- B. 建立Amazon Route 53加權路由政策.
- C. 建立 Amazon Route 53 多值答案路由政策.
- D. 推出三個EC2例項:一個是可用區(Availability Zone),另一個是可用區(Availability Zone)。
- E. 推出4個EC2例項:1個可用區(Availability Zone)和2個可用區(Availability Zone)。

**答案**
C,E



**詳解**
正確答案是 **C, E**。
- C：建立 Amazon Route 53 多值答案路由政策。此選項符合題目條件，能有效滿足核心需求。
- E：推出4個EC2例項:1個可用區(Availability Zone)和2個可用區(Availability Zone)。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：建立 Amazon Route 53 故障路由政策 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立Amazon Route 53加權路由政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：推出三個EC2例項:一個是可用區(Availability Zone),另一個是可用區(Availability Zone)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #225

**題目**
一家媒體公司收集和分析房地內的使用者活動資料。 公司希望將這種能力遷移到AWS. 使用者活動資料儲存將繼續增長,規模將達到Petabytes. 公司需要構建一個高可用資料攝取解決方案,以方便對現有資料和SQL新資料進行按需分析. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將活動資料傳送到一個Amazon Kinesis資料流. 配置流將資料傳送給一個Amazon S3桶.
- B. 將活動資料傳送到一個Amazon Kinesis Data Firehose送電流. 配置流將資料傳送到 Amazon Redshift 叢集.
- C. 將活動資料放置在 Amazon S3 桶中. 配置 Amazon S3 在資料到達S3 儲存桶(S3 bucket)時執行一個AWS Lambda功能.
- D. 在分佈於多個可用區(Availability Zones)的 Amazon EC2 例項上建立一個攝入服務. 配置將資料轉發給 Amazon RDS 多AZ 資料庫(database).

**答案**
A


**詳解**
正確答案是 **A**。
- A：將活動資料傳送到一個Amazon Kinesis資料流. 配置流將資料傳送給一個Amazon S3桶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將活動資料傳送到一個Amazon Kinesis Data Firehose送電流. 配置流將資料傳送到 Amazon Redshift 叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將活動資料放置在 Amazon S3 桶中. 配置 Amazon S3 在資料到達S3 儲存桶(S3 bucket)時執行一個AWS Lambda功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在分佈於多個可用區(Availability Zones)的 Amazon EC2 例項上建立一個攝入服務. 配置將資料轉發給 Amazon RDS 多AZ 資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #226

**題目**
一家公司利用一個執行在Amazon EC2例項上的RESTful網路服務應用程式,從數千個遠端裝置收集資料。 EC2例項接收原始資料,轉換原始資料,並將所有資料儲存在Amazon S3桶中. 遠端裝置的數量將很快增加到數百萬。 公司需要一個高度可擴充套件的解決方案,將營運開銷(operational overhead)最小化. 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 使用AWS Glue處理Amazon S3中的原始資料.
- B. 使用 Amazon Route 53 來連線不同的 EC2 例項。
- C. 增加更多EC2例項,以適應越來越多的資料輸入。
- D. 將原始資料傳送到亞馬遜簡易佇列服務(Amazon SQS). 使用 EC2 例項處理資料。
- E. 使用Amazon API Gateway將原始資料傳送到Amazon Kinesis資料流. 配置 Amazon Kinesis Data Firehose 以資料流為源向 Amazon S3 傳送資料.

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：使用AWS Glue處理Amazon S3中的原始資料。此選項符合題目條件，能有效滿足核心需求。
- E：使用Amazon API Gateway將原始資料傳送到Amazon Kinesis資料流. 配置 Amazon Kinesis Data Firehose 以資料流為源向 Amazon S3 傳送資料。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：使用 Amazon Route 53 來連線不同的 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：增加更多EC2例項,以適應越來越多的資料輸入。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將原始資料傳送到亞馬遜簡易佇列服務(Amazon SQS). 使用 EC2 例項處理資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #227

**題目**
一家公司需要將AWS CloudTrail的日誌保留3年. 公司正透過使用母帳戶的AWS Organizations,在一組AWS帳戶上強制CloudTrail. CloudTrail目標S3 儲存桶(S3 bucket)配置為S3版本啟用. 一個S3 生命週期政策(Lifecycle policy)已經到位,可以在3年後刪除當前物件. 在使用S3 儲存桶(S3 bucket)的第四年後,S3 儲存桶(S3 bucket)的度量衡顯示物體數量持續上升. 然而,交付S3 儲存桶(S3 bucket)的新CloudTrail日誌的數量仍然一致。 哪種解決方案會以成本效益高的方式刪除3年以上的物件?

**選項**
- A. 配置組織集中的 CloudTrail 線索,使其在3年後過期。
- B. 配置 S3 生命週期政策(Lifecycle policy) 來刪除以前的版本以及當前版本.
- C. 建立 AWS Lambda 函式,以列舉和刪除 Amazon S3 中年齡超過 3 年的物件。
- D. 配置父帳戶為交付到 S3 儲存桶(S3 bucket) 的所有物件的擁有者。

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置 S3 生命週期政策(Lifecycle policy) 來刪除以前的版本以及當前版本。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置組織集中的 CloudTrail 線索,使其在3年後過期。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS Lambda 函式,以列舉和刪除 Amazon S3 中年齡超過 3 年的物件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置父帳戶為交付到 S3 儲存桶(S3 bucket) 的所有物件的擁有者 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #228

**題目**
一家公司有一個API,從監控(monitoring)裝置的fieet接收實時資料. API將這些資料儲存在Amazon RDS DB中,以便日後分析. 監控(monitoring)裝置向API fiuctuates傳送的資料量. 在交通繁忙時期,API經常會返回超時錯誤. 在對日誌進行檢查後,公司確定資料庫(database)無法處理來自API的書寫流量. 一個解決方案架構師必須儘量減少與資料庫(database)的連線數量,並確保資料在流量大期間不會丟失. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將 DB 例項的大小擴大為更多可用記憶體的例項型別。
- B. 修改 DB 例項為多 AZ DB 例項。 配置程式以寫入所有活動的 RDS DB 例項。
- C. 修改 API 以寫入一個 Amazon 簡單的佇列服務( Amazon SQS) 佇列。 使用 AWS Lambda 函式, Amazon SQS 引用來寫入從佇列到 資料庫(database) 的資料。
- D. 修改 API , 將收到的資料寫入 Amazon 簡單通知服務( Amazon SNS) 主題。 使用 AWS Lambda 函式,由 Amazon SNS 引用將資料從主題寫入 資料庫(database)。

**答案**
C


**詳解**
正確答案是 **C**。
- C：修改 API 以寫入一個 Amazon 簡單的佇列服務( Amazon SQS) 佇列。 使用 AWS Lambda 函式, Amazon SQS 引用來寫入從佇列到 資料庫(database) 的資料 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將 DB 例項的大小擴大為更多可用記憶體的例項型別 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：修改 DB 例項為多 AZ DB 例項。 配置程式以寫入所有活動的 RDS DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改 API , 將收到的資料寫入 Amazon 簡單通知服務( Amazon SNS) 主題。 使用 AWS Lambda 函式,由 Amazon SNS 引用將資料從主題寫入 資料庫(database) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #229

**題目**
一家公司管理自己的執行MySQL資料庫的Amazon EC2 執行個體. 公司正在手動管理複寫(replication),並隨著需求的增減而規模化. 公司需要一種新的解決辦法,以簡化根據需要在其資料庫(database)級中增加或取消計算能力的過程。 解決方案還必須提供更好的效能、規模和耐久性,儘量不增加行動的努力。 哪種解決辦法符合這些要求?

**選項**
- A. 將資料庫遷移到 Amazon Aurora Serverless for Aurora MySQL.
- B. 將資料庫遷移到 Amazon Aurora 無伺服器的Aurora PostgreSQL.
- C. 將資料庫合併為一個更大的 MySQL 資料庫(database)。 在更大的EC2例項上執行更大的資料庫(database).
- D. 為資料庫(database)級建立EC2 Auto Scaling 群組(Auto Scaling group). 將現有資料庫遷移到新環境。

**答案**
A


**詳解**
正確答案是 **A**。
- A：將資料庫遷移到 Amazon Aurora Serverless for Aurora MySQL。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將資料庫遷移到 Amazon Aurora 無伺服器的Aurora PostgreSQL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料庫合併為一個更大的 MySQL 資料庫(database)。 在更大的EC2例項上執行更大的資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為資料庫(database)級建立EC2 Auto Scaling 群組(Auto Scaling group). 將現有資料庫遷移到新環境。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #230

**題目**
一家公司擔心,正在使用的兩個NAT案例將無法支援該公司申請所需的流量。 一個解決方案設計師想要實施一個非常可用,錯誤寬容,自動可伸縮的解決方案. 解決方案設計師應該建議什麼?

**選項**
- A. 移除兩個NAT例,並在同一個可用區(Availability Zone)中替換為兩個NAT閘道器.
- B. 在不同的可用區(Availability Zones)中使用帶有網路負載平衡器的自動縮放組進行NAT例項.
- C. 刪除兩個NAT例,代之以不同可用區(Availability Zones)的兩個NAT閘道器.
- D. 在不同的可用區(Availability Zones)中將兩個NAT例項替換為Spotexits,並部署一個網路負載平衡器(Network Load Balancer).

**答案**
C


**詳解**
正確答案是 **C**。
- C：刪除兩個NAT例,代之以不同可用區(Availability Zones)的兩個NAT閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：移除兩個NAT例,並在同一個可用區(Availability Zone)中替換為兩個NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在不同的可用區(Availability Zones)中使用帶有網路負載平衡器的自動縮放組進行NAT例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在不同的可用區(Availability Zones)中將兩個NAT例項替換為Spotexits,並部署一個網路負載平衡器(Network Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #231

**題目**
一個應用程式執行在一個在VPC A中具有彈性IP地址的Amazon EC2例項上. 該應用需要存取VPC B中的資料庫(database). 兩個VPC都在同一個AWS帳戶中. 哪種解決辦法能夠安全地提供所需的准入?

**選項**
- A. 建立一個 DB 例項 安全群組(security group),允許從 VPC A 中應用程式伺服器的公開IP地址的所有流量.
- B. 配置 VPC A 和 VPC B 之間的對等連線。
- C. 公開 DB 例項。 為 DB 例項指定一個公開的 IP 地址。
- D. 透過新的EC2例項將帶有彈性IP地址的EC2例項啟動到VPC B. 代理所有請求.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置 VPC A 和 VPC B 之間的對等連線 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個 DB 例項 安全群組(security group),允許從 VPC A 中應用程式伺服器的公開IP地址的所有流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：公開 DB 例項。 為 DB 例項指定一個公開的 IP 地址 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過新的EC2例項將帶有彈性IP地址的EC2例項啟動到VPC B. 代理所有請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #232

**題目**
在Amazon EC2 執行個體中,一家公司為其客戶經營示範環境。 每一種環境在自己的VPC中都是孤立的. 當RDP或SSH進入環境確定後,需要通知公司的運營團隊.

**選項**
- A. 配置 Amazon CloudWatch 應用程式透視在檢測到 RDP 或 SSH 存取時建立 AWS Systems Manager Ops 專案。
- B. 配置 EC2 例項,並附帶一個IAM 執行個體設定檔(instance profile),與 AmazonSSMManaged Instance Core 政策具有IAM的作用.
- C. 將 VPC 線條日誌釋出到 Amazon CloudWatch Logs。 建立所需的度量過濾器。 建立 Amazon CloudWatch 公制提醒, 並附加提醒處於 ALARM 狀態時的通知動作。
- D. 配置 Amazon EventBridge 規則,以收聽 EC2 例項狀態改變通知。 配置 Amazon 簡單通知服務( Amazon SNS) 主題為目標。 將操作團隊訂閱為主題。

**答案**
C


**詳解**
正確答案是 **C**。
- C：將 VPC 線條日誌釋出到 Amazon CloudWatch Logs。 建立所需的度量過濾器。 建立 Amazon CloudWatch 公制提醒, 並附加提醒處於 ALARM 狀態時的通知動作 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Amazon CloudWatch 應用程式透視在檢測到 RDP 或 SSH 存取時建立 AWS Systems Manager Ops 專案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 EC2 例項,並附帶一個IAM 執行個體設定檔(instance profile),與 AmazonSSMManaged Instance Core 政策具有IAM的作用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon EventBridge 規則,以收聽 EC2 例項狀態改變通知。 配置 Amazon 簡單通知服務( Amazon SNS) 主題為目標。 將操作團隊訂閱為主題 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #233

**題目**
一個解決方案架構師建立了一個新的AWS帳戶,必須保證AWS帳戶根使用者存取. 哪些行動組合將做到這一點?(選二.

**選項**
- A. 確保根使用者使用強密碼.
- B. 為根使用者啟用多要素認證。
- C. 將根使用者存取金鑰儲存在加密的 Amazon S3 桶中.
- D. 將根使用者新增到包含行政許可權的組中.
- E. 用內含的策略文件對根使用者應用所需的許可權.

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：確保根使用者使用強密碼。此選項符合題目條件，能有效滿足核心需求。
- B：為根使用者啟用多要素認證 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：將根使用者存取金鑰儲存在加密的 Amazon S3 桶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將根使用者新增到包含行政許可權的組中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：用內含的策略文件對根使用者應用所需的許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #234

**題目**
一家公司正在建設一個新的基於網路的客戶關係管理應用程式. 該應用程式將使用亞馬遜彈性塊儲存(Amazon EBS)所支援的幾個Amazon EC2 執行個體,其後方為應用程式負載平衡器(Application Load Balancer)(ALB)卷. 該應用程式還將使用Amazon Aurora 資料庫(database). 應用程式的所有資料必須在休息和過境時加密。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用ALB上的AWS Key Management Service(AWS KMS)憑證加密過境資料. 使用AWS Certificate Manager(ACM)加密EBS 磁碟區和休息時的Aurora 資料庫(database)儲存.
- B. 使用 AWS 根帳戶登入到 AWS 管理控制檯。 上傳公司加密(encryption)憑證. 在根帳戶中,選擇開啟加密(encryption)的選項,用於帳戶的所有休息和中轉資料.
- C. 使用AWS Key Management Service(AWS KMS)加密EBS 磁碟區和Aurora 資料庫(database)在休息時的儲存. 在 ALB 上附上 AWS Certificate Manager(ACM) 憑證,用於加密過境資料.
- D. 使用 BitLocker 在休息時加密所有資料。 將公司的 TLS 憑證金鑰匯入 AWS Key Management Service(AWS KMS) 將 KMS 金鑰附加到 ALB 中, 以加密正在傳輸的資料。

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用AWS Key Management Service(AWS KMS)加密EBS 磁碟區和Aurora 資料庫(database)在休息時的儲存. 在 ALB 上附上 AWS Certificate Manager(ACM) 憑證,用於加密過境資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用ALB上的AWS Key Management Service(AWS KMS)憑證加密過境資料. 使用AWS Certificate Manager(ACM)加密EBS 磁碟區和休息時的Aurora 資料庫(database)儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS 根帳戶登入到 AWS 管理控制檯。 上傳公司加密(encryption)憑證. 在根帳戶中,選擇開啟加密(encryption)的選項,用於帳戶的所有休息和中轉資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 BitLocker 在休息時加密所有資料。 將公司的 TLS 憑證金鑰匯入 AWS Key Management Service(AWS KMS) 將 KMS 金鑰附加到 ALB 中, 以加密正在傳輸的資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #235

**題目**
一家公司正在將它的Oracle 資料庫(database)移動到Amazon Aurora PostgreSQL. 資料庫(database)有多個應用程式寫在同一表格上. 申請必須在每次遷移之間逐月遷移。 管理層對資料庫(database)的讀寫量很高表示關切. 在整個移徙期間,這兩個資料庫的資料必須保持同步。 一個解決方案設計師應該推薦什麼?

**選項**
- A. 初始遷移時使用 AWS 資料同步。 使用 AWS 資料庫(Database) 遷移服務(AWS DSMS)建立變化資料捕獲(CDC) 複寫(replication) 任務和一個表格對映來選擇所有表格.
- B. 初始遷移時使用 AWS 資料同步。 使用 AWS 資料庫(Database) 遷移服務(AWS DSMS)來建立全載加變化資料捕獲(CDC) 複寫(replication) 任務和一個表格對映來選擇所有表格.
- C. 使用 AWS Schema 轉換工具,使用 AWS 資料庫(Database) 遷移服務(AWS DSM),使用記憶體最佳化的 複寫(replication) 例項. 建立一個全載加變化資料捕獲(CDC)複寫(replication)任務和一個表格對映來選擇所有表格.
- D. 使用 AWS Schema 轉換工具,並使用 AWS 資料庫(Database) 遷移服務(AWS DSM) 使用計算最佳化的 複寫(replication) 例項. 建立一個滿載加變化資料捕獲(CDC)複寫(replication)任務和一個表格對映來選擇最大的表格.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用 AWS Schema 轉換工具,使用 AWS 資料庫(Database) 遷移服務(AWS DSM),使用記憶體最佳化的 複寫(replication) 例項. 建立一個全載加變化資料捕獲(CDC)複寫(replication)任務和一個表格對映來選擇所有表格。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：初始遷移時使用 AWS 資料同步。 使用 AWS 資料庫(Database) 遷移服務(AWS DSMS)建立變化資料捕獲(CDC) 複寫(replication) 任務和一個表格對映來選擇所有表格。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：初始遷移時使用 AWS 資料同步。 使用 AWS 資料庫(Database) 遷移服務(AWS DSMS)來建立全載加變化資料捕獲(CDC) 複寫(replication) 任務和一個表格對映來選擇所有表格。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Schema 轉換工具,並使用 AWS 資料庫(Database) 遷移服務(AWS DSM) 使用計算最佳化的 複寫(replication) 例項. 建立一個滿載加變化資料捕獲(CDC)複寫(replication)任務和一個表格對映來選擇最大的表格。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #236

**題目**
一家公司擁有三級影象共享應用程式. 該應用程式對前端層使用Amazon EC2 執行個體,對應用層使用另一個EC2 執行個體,對MySQL 資料庫(database)使用第三個EC2 執行個體. 解決方案架構師必須設計一個可伸縮和高度可用的解決方案,對應用程式要求的修改最少. 哪種解決辦法符合這些要求?

**選項**
- A. 使用Amazon S3託管前端層. 為應用層使用AWS Lambda功能. 將 資料庫(database) 移動到 Amazon DynamoDB 表中。 使用 Amazon S3 儲存並服務使用者的影象.
- B. 為前端層和應用層使用負載平衡的多AZ AWS Elastic Beanstalk環境. 將 資料庫(database) 移動到一個帶有多個讀取複製件的 Amazon RDS DB 例項以服務使用者的影象。
- C. 使用Amazon S3託管前端層. 在 Auto Scaling 群組(Auto Scaling group) 中為應用層使用 EC2 的縮寫。 將 資料庫(database) 移動到記憶體最佳化例項型別, 以儲存和服務使用者的影象。
- D. 為前端層和應用層使用負載平衡的多AZ AWS Elastic Beanstalk環境. 將 資料庫(database) 移動到 Amazon RDS 多AZ DB 例項。 使用 Amazon S3 儲存並服務使用者的影象.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon S3託管前端層. 為應用層使用AWS Lambda功能. 將 資料庫(database) 移動到 Amazon DynamoDB 表中。 使用 Amazon S3 儲存並服務使用者的影象。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為前端層和應用層使用負載平衡的多AZ AWS Elastic Beanstalk環境. 將 資料庫(database) 移動到一個帶有多個讀取複製件的 Amazon RDS DB 例項以服務使用者的影象 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon S3託管前端層. 在 Auto Scaling 群組(Auto Scaling group) 中為應用層使用 EC2 的縮寫。 將 資料庫(database) 移動到記憶體最佳化例項型別, 以儲存和服務使用者的影象 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為前端層和應用層使用負載平衡的多AZ AWS Elastic Beanstalk環境. 將 資料庫(database) 移動到 Amazon RDS 多AZ DB 例項。 使用 Amazon S3 儲存並服務使用者的影象。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #237

**題目**
一個執行在 VPC-A 中的 Amazon EC2 例項上的應用程式需要在 VPC- B 的另一個 EC2 例項中存取檔案。 兩個 VPC 都在單獨的 AWS 帳戶中。 網路管理員需要設計一個解決方案來配置從VPC-A到VPC-B的安全存取EC2例項. 連通性不應有單一的故障點或頻寬問題。 哪種解決辦法能滿足這些要求?

**選項**
- A. 在VPC-A和VPC-B之間建立VPC對等連線.
- B. 為執行於VPC-B的EC2例項設定 VPC閘道器端點.
- C. 在VPC-B上附加一個虛擬私有閘道(virtual private gateway),並設定從VPC-A的路由.
- D. 為執行於VPC-B的EC2例項建立私人虛擬介面(VIF),並新增來自VPC-A的適當路由.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在VPC-A和VPC-B之間建立VPC對等連線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為執行於VPC-B的EC2例項設定 VPC閘道器端點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在VPC-B上附加一個虛擬私有閘道(virtual private gateway),並設定從VPC-A的路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為執行於VPC-B的EC2例項建立私人虛擬介面(VIF),並新增來自VPC-A的適當路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #238

**題目**
一家公司希望為其工程師團隊實驗單個AWS帳戶. 公司希望在Amazon EC2特定月份的例用超過每個帳戶的特定門檻時立即得到通知。 解決方案設計師應如何以成本效益高的方式滿足這一要求?

**選項**
- A. 使用Cost Explorer建立按服務分列的每日成本報告. 用 EC2 例項過濾報表。 配置 Cost Explorer 在超過閾值時傳送 Amazon 簡單電子郵件服務(Amazon SES) 通知。
- B. 使用Cost Explorer建立按服務分列的成本月報. 用 EC2 例項過濾報表。 配置 Cost Explorer 在超過閾值時傳送 Amazon 簡單電子郵件服務(Amazon SES) 通知。
- C. 使用 AWS 預算為每個帳戶建立成本預算. 設期為月. 將範圍設定為EC2例項。 為預算設定警戒門檻. 配置一個 Amazon 簡單通知服務( Amazon SNS) 話題, 以便在超過閾值時收到通知。
- D. 使用 AWS 成本與使用報告建立一個具有小時顆粒性的報告. 將報告資料納入Amazon Athena。 使用Amazon EventBridge來安排雅典娜查詢. 配置一個 Amazon 簡單通知服務( Amazon SNS) 話題, 以便在超過閾值時收到通知。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Cost Explorer建立按服務分列的成本月報. 用 EC2 例項過濾報表。 配置 Cost Explorer 在超過閾值時傳送 Amazon 簡單電子郵件服務(Amazon SES) 通知 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Cost Explorer建立按服務分列的每日成本報告. 用 EC2 例項過濾報表。 配置 Cost Explorer 在超過閾值時傳送 Amazon 簡單電子郵件服務(Amazon SES) 通知 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 預算為每個帳戶建立成本預算. 設期為月. 將範圍設定為EC2例項。 為預算設定警戒門檻. 配置一個 Amazon 簡單通知服務( Amazon SNS) 話題, 以便在超過閾值時收到通知 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 成本與使用報告建立一個具有小時顆粒性的報告. 將報告資料納入Amazon Athena。 使用Amazon EventBridge來安排雅典娜查詢. 配置一個 Amazon 簡單通知服務( Amazon SNS) 話題, 以便在超過閾值時收到通知 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #239

**題目**
一個解決方案架構師需要為公司的應用設計一個新的微服務. 客戶端必須能夠呼叫HTTPS端點才能到達微服務. 微服務還必須使用AWS身份和存取管理(IAM)驗證通話. 解決方案架構師將透過使用一個用Go 1.x寫成的單一AWS Lambda函式來寫出這個微服務的邏輯. 哪種解決辦法能以業務效率高的MOST方式部署這一職能?

**選項**
- A. 建立 Amazon API Gateway REST API. 配置使用 Lambda 函式的方法。 在 API 上啟用 IAM 認證。
- B. 為此功能建立 Lambda 函式 URL。 指定 AWS IAM 為認證型別。
- C. 建立 Amazon CloudFront 分佈。 將函式部署到 Lambda@ Edge。 將IAM認證邏輯整合到Lambda@Edge函式中.
- D. 建立 Amazon CloudFront 分佈。 將函式部署到 CloudFront 函式。 指定 AWS IAM 為認證型別。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon API Gateway REST API. 配置使用 Lambda 函式的方法。 在 API 上啟用 IAM 認證 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為此功能建立 Lambda 函式 URL。 指定 AWS IAM 為認證型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon CloudFront 分佈。 將函式部署到 Lambda@ Edge。 將IAM認證邏輯整合到Lambda@Edge函式中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon CloudFront 分佈。 將函式部署到 CloudFront 函式。 指定 AWS IAM 為認證型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #240

**題目**
一家公司以前將其資料倉解決方案遷移到AWS. 該公司還擁有AWS Direct Connect連線. 企業辦公使用者使用視覺化工具查詢資料倉. 資料倉儲返回的查詢的平均大小為50 MB,視覺化工具傳送的每個網頁約為500 KB. 資料倉儲返回的結果集沒有快取。 哪個解決方案為公司提供了LOWEST資料傳輸互換成本?

**選項**
- A. 將視覺化工具託管於房地,並直接透過網際網路查詢資料倉。
- B. 在與資料倉儲相同的AWS 區域(Region)中託管視覺化工具. 透過網際網路存取它。
- C. 將視覺化工具託管於房地,並在AWS 區域(Region)同一地點的直通連線上直接查詢資料倉。
- D. 在與資料倉儲相同的AWS 區域(Region)中託管視覺化工具,並在同一區域(Region)中的位置透過直接連線連線存取.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將視覺化工具託管於房地,並在AWS 區域(Region)同一地點的直通連線上直接查詢資料倉。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將視覺化工具託管於房地,並直接透過網際網路查詢資料倉。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在與資料倉儲相同的AWS 區域(Region)中託管視覺化工具. 透過網際網路存取它。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在與資料倉儲相同的AWS 區域(Region)中託管視覺化工具,並在同一區域(Region)中的位置透過直接連線連線存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #241

**題目**
一個線上學習公司正在遷移到AWS雲. 公司在PostgreSQL 資料庫(database)中保持學生記錄. 該公司需要一種解決方案,隨時在多個AWS地區提供和線上資料。 哪個解決方案能滿足這些要求,LEAST數額是營運開銷(operational overhead)?

**選項**
- A. 在 Amazon EC2 例項上將 PostgreSQL 資料庫(database) 遷移到 PostgreSQL 叢集。
- B. 將 PostgreSQL 資料庫(database) 移動到一個具有多AZ特性的 PostgreSQL DB 例項的 Amazon RDS。
- C. 將 PostgreSQL 資料庫(database) 移動到 PostgreSQL DB 例項的 Amazon RDS。 在另一個區域(Region)中建立一個讀取的複製品.
- D. 將 PostgreSQL 資料庫(database) 移動到 PostgreSQL DB 例項的 Amazon RDS。 設定 DB 快照以複製到另一個 區域(Region).

**答案**
C


**詳解**
正確答案是 **C**。
- C：將 PostgreSQL 資料庫(database) 移動到 PostgreSQL DB 例項的 Amazon RDS。 在另一個區域(Region)中建立一個讀取的複製品。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 Amazon EC2 例項上將 PostgreSQL 資料庫(database) 遷移到 PostgreSQL 叢集 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將 PostgreSQL 資料庫(database) 移動到一個具有多AZ特性的 PostgreSQL DB 例項的 Amazon RDS 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 PostgreSQL 資料庫(database) 移動到 PostgreSQL DB 例項的 Amazon RDS。 設定 DB 快照以複製到另一個 區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #242

**題目**
一個公司使用7個Amazon EC2例項在AWS上託管其網路應用程式. 公司要求所有健康EC2病例的IP地址應回覆DNS查詢. 應採用何種政策來滿足這一要求?

**選項**
- A. 簡單路由政策
- B. 延遲(Latency) 路線政策
- C. 多價值路線政策
- D. 地理定位路線政策

**答案**
C


**詳解**
正確答案是 **C**。
- C：多價值路線政策。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：簡單路由政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：延遲(Latency) 路線政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：地理定位路線政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #243

**題目**
一個醫學研究實驗室產生與新研究相關的資料. 實驗室希望向全國各地的診所提供最低延遲(latency)的資料,以備它們基於檔案的應用。 資料檔案儲存在 Amazon S3 桶中,每個診所都有隻讀許可權. 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 在每個診所的房地安裝一個AWS Storage Gateway檔案閘道器作為虛擬機器
- B. 使用 AWS DataSync 將檔案移動到每個診所的配置應用程式。
- C. 在每個診所的房舍安裝一個AWS Storage Gateway卷閘道器作為虛擬機器。
- D. 將一個 Amazon 彈性檔案系統(Amazon EFS) 附加到每個診所的預設伺服器上。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在每個診所的房舍安裝一個AWS Storage Gateway卷閘道器作為虛擬機器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在每個診所的房地安裝一個AWS Storage Gateway檔案閘道器作為虛擬機器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS DataSync 將檔案移動到每個診所的配置應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將一個 Amazon 彈性檔案系統(Amazon EFS) 附加到每個診所的預設伺服器上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #244

**題目**
一家公司正在使用一個內容管理系統,該系統執行在單一的Amazon EC2例項上。 EC2例項包含網路伺服器和資料庫(database)軟體. 公司必須使其網站平臺高度開放,必須使網站能夠規模化以滿足使用者需求. 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 將資料庫(database)移動到Amazon RDS,並啟用自動備份. 在同一可用區(Availability Zone)中手動推出另一個EC2例項. 在可用區(Availability Zone)中配置一個應用程式負載平衡器(Application Load Balancer),並將這兩個例項設定為目標.
- B. 將 資料庫(database) 遷移到一個 Amazon Aurora 例項,其讀取的複製品與現有的 EC2 例項相同。 在同一可用區(Availability Zone)中,手動推出另一個EC2例項. 配置一個應用程式負載平衡器(Application Load Balancer),並將兩個EC2例項設定為目標.
- C. 將資料庫(database)移動到Amazon Aurora,在另一個可用區(Availability Zone)中帶有讀取的複製品. 從 EC2 例項建立一個 Amazon 機器影象( AMI)。 在兩個可用區(Availability Zones)中配置一個應用程式負載平衡器(Application Load Balancer). 附加一個Auto Scaling 群組(Auto Scaling group),使用AMI橫跨兩個可用區(Availability Zones).
- D. 將 資料庫(database) 移動到單獨的 EC2 例項,並將備份排程到 Amazon S3。 從最初的EC2例項建立一個亞馬遜機器影象(AMI). 在兩個可用區(Availability Zones)中配置一個應用程式負載平衡器(Application Load Balancer). 附加一個Auto Scaling 群組(Auto Scaling group),使用AMI橫跨兩個可用區(Availability Zones).

**答案**
C


**詳解**
正確答案是 **C**。
- C：將資料庫(database)移動到Amazon Aurora,在另一個可用區(Availability Zone)中帶有讀取的複製品. 從 EC2 例項建立一個 Amazon 機器影象( AMI)。 在兩個可用區(Availability Zones)中配置一個應用程式負載平衡器(Application Load Balancer). 附加一個Auto Scaling 群組(Auto Scaling group),使用AMI橫跨兩個可用區(Availability Zones)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料庫(database)移動到Amazon RDS,並啟用自動備份. 在同一可用區(Availability Zone)中手動推出另一個EC2例項. 在可用區(Availability Zone)中配置一個應用程式負載平衡器(Application Load Balancer),並將這兩個例項設定為目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將 資料庫(database) 遷移到一個 Amazon Aurora 例項,其讀取的複製品與現有的 EC2 例項相同。 在同一可用區(Availability Zone)中,手動推出另一個EC2例項. 配置一個應用程式負載平衡器(Application Load Balancer),並將兩個EC2例項設定為目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 資料庫(database) 移動到單獨的 EC2 例項,並將備份排程到 Amazon S3。 從最初的EC2例項建立一個亞馬遜機器影象(AMI). 在兩個可用區(Availability Zones)中配置一個應用程式負載平衡器(Application Load Balancer). 附加一個Auto Scaling 群組(Auto Scaling group),使用AMI橫跨兩個可用區(Availability Zones)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #245

**題目**
一家公司正在AWS上推出應用程式. 該應用使用應用程式負載平衡器(Application Load Balancer)(ALB)將流量引導到單個目標群體中至少兩例Amazon EC2. 每個環境的情況為Auto Scaling 群組(Auto Scaling group)。 公司需要發展環境和生產環境. 生產環境將存在高流量時期。 哪種解決方案能以成本效益高的方式配置發展環境?

**選項**
- A. 重新配置開發環境中的目標群體,只設定一個EC2例項作為目標.
- B. 將 ALB 平衡演算法修改為最小的未決請求。
- C. 在兩種環境中減少EC2 執行個體的規模.
- D. 減少開發環境Auto Scaling 群組(Auto Scaling group)中EC2 執行個體的最大數量。

**答案**
A


**詳解**
正確答案是 **A**。
- A：重新配置開發環境中的目標群體,只設定一個EC2例項作為目標。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將 ALB 平衡演算法修改為最小的未決請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在兩種環境中減少EC2 執行個體的規模。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：減少開發環境Auto Scaling 群組(Auto Scaling group)中EC2 執行個體的最大數量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #246

**題目**
一家公司在Amazon EC2的多個可用區(Availability Zones)上執行一個網路應用程式. EC2的例子是私人子網。 解決方案設計師實施一個網際網路化的應用程式負載平衡器(Application Load Balancer)(ALB),並將EC2作為目標群體。 然而,網際網路流量並沒有達到EC2。 解決方案設計師應如何重組建築以解決這一問題?

**選項**
- A. 將ALB改為網路負載平衡器(Network Load Balancer)。 在公共子網中配置一個NAT閘道器,允許網際網路流量.
- B. 將 EC2 例項移至公共子網。 在EC2的安保小組中增加一條規則,允許出入境流量為0.0/0.
- C. 更新 EC2 例項子網的路由表, 以透過 Internet 閘道器 路由傳送 0.0/ 0 流量。 在EC2的安保小組中增加一條規則,允許出入境流量為0.0/0.
- D. 每個可用區(Availability Zone)中建立公共子網. 將公共子網與ALB聯絡起來. 更新公共子網的路由表,並附帶一條通往私有子網的路由.

**答案**
C


**詳解**
正確答案是 **C**。
- C：更新 EC2 例項子網的路由表, 以透過 Internet 閘道器 路由傳送 0.0/ 0 流量。 在EC2的安保小組中增加一條規則,允許出入境流量為0.0/0。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將ALB改為網路負載平衡器(Network Load Balancer)。 在公共子網中配置一個NAT閘道器,允許網際網路流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將 EC2 例項移至公共子網。 在EC2的安保小組中增加一條規則,允許出入境流量為0.0/0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：每個可用區(Availability Zone)中建立公共子網. 將公共子網與ALB聯絡起來. 更新公共子網的路由表,並附帶一條通往私有子網的路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #247

**題目**
一個連在Amazon RDS部署了一架資料庫(database),用於MySQL. 由於交易增加,資料庫(database)支援小組報告閱讀速度緩慢,不利於DB例項,並建議增加一個讀本。 在實施這一變革之前,設計者應採取何種綜合行動?(選二.

**選項**
- A. 在 RDS 主節點啟用 binlog 複寫(replication)。
- B. 選擇源 DB 例項的失敗優先順序。
- C. 允許遠端交易在源 DB 例項上完成。
- D. 建立一個全域性表格,並指定該表格所在的 AWS 區域。
- E. 透過將備份(backup)保留期設定為0.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：在 RDS 主節點啟用 binlog 複寫(replication) 。此選項符合題目條件，能有效滿足核心需求。
- C：允許遠端交易在源 DB 例項上完成 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：選擇源 DB 例項的失敗優先順序 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個全域性表格,並指定該表格所在的 AWS 區域。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：透過將備份(backup)保留期設定為0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #248

**題目**
一家公司在Amazon EC2例項上執行分析軟體. 該軟體接受使用者的工作請求,處理已經上傳到Amazon S3的資料. 使用者報告說,一些提交的資料沒有經過處理,Amazon CloudWatch顯示,EC2例項的CPU利用率一致,或接近100%。 公司希望改善系統效能,並根據使用者負載來擴大系統規模. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立例項副本。 把所有例項都放在應用程式負載平衡器(Application Load Balancer)後面。
- B. 為 Amazon S3 建立 S3 VPC 端點(VPC endpoint). 更新軟體以引用終點。
- C. 停止EC2例項。 將例項型別修改為具有更強大的CPU和更多記憶體的例項型別. 重新啟動例項。
- D. 向亞馬遜簡易佇列服務(Amazon SQS)傳送路由請求。 根據佇列大小配置 EC2 Auto Scaling 群組(Auto Scaling group)。 更新從佇列讀取的軟體。

**答案**
D


**詳解**
正確答案是 **D**。
- D：向亞馬遜簡易佇列服務(Amazon SQS)傳送路由請求。 根據佇列大小配置 EC2 Auto Scaling 群組(Auto Scaling group)。 更新從佇列讀取的軟體 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立例項副本。 把所有例項都放在應用程式負載平衡器(Application Load Balancer)後面。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 Amazon S3 建立 S3 VPC 端點(VPC endpoint). 更新軟體以引用終點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：停止EC2例項。 將例項型別修改為具有更強大的CPU和更多記憶體的例項型別. 重新啟動例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #249

**題目**
一家公司正在對AWS雲託管的媒體應用程式實施共享儲存解決方案. 公司需要有能力使用SMB客戶來存取資料. 解決辦法必須得到充分管理。 哪些AWS解決方案符合這些要求?

**選項**
- A. 建立 AWS Storage Gateway 卷閘道器. 建立使用所需客戶協議的檔案共享。 連線應用程式伺服器到檔案共享。
- B. 建立 AWS Storage Gateway 磁帶閘道器. 配置使用 Amazon S3 的磁帶. 連線應用程式伺服器到磁帶閘道器。
- C. 建立 Amazon EC2 Windows 例項。 安裝和配置例項上的 Windows 檔案共享角色。 連線應用程式伺服器到檔案共享。
- D. 為Windows檔案伺服器檔案系統建立Amazon FSx. 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統.

**答案**
D


**詳解**
正確答案是 **D**。
- D：為Windows檔案伺服器檔案系統建立Amazon FSx. 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 AWS Storage Gateway 卷閘道器. 建立使用所需客戶協議的檔案共享。 連線應用程式伺服器到檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS Storage Gateway 磁帶閘道器. 配置使用 Amazon S3 的磁帶. 連線應用程式伺服器到磁帶閘道器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon EC2 Windows 例項。 安裝和配置例項上的 Windows 檔案共享角色。 連線應用程式伺服器到檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #250

**題目**
一家公司的安全小組要求在VPC流量日誌中記錄網路流量. 日誌將經常存取90天,然後斷斷續續地存取。 一個解決方案設計師在配置日誌時應該做什麼來滿足這些要求?

**選項**
- A. 使用Amazon CloudWatch作為目標. 設定雲表日誌組, 過期90天
- B. 使用Amazon Kinesis作為目標. 配置 Kinesis 流, 將日誌保留90天。
- C. 使用AWS CloudTrail作為目標. 配置 CloudTrail 以儲存到 Amazon S3 桶,並啟用 S3 Intelligent-Tiering。
- D. 使用Amazon S3作為目標. 啟用 S3 生命週期政策(Lifecycle policy) 在90天后將日誌轉換為 S3 標準-不頻繁存取(S3 Standard-IA)。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon CloudWatch作為目標. 設定雲表日誌組, 過期90天。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon Kinesis作為目標. 配置 Kinesis 流, 將日誌保留90天 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS CloudTrail作為目標. 配置 CloudTrail 以儲存到 Amazon S3 桶,並啟用 S3 Intelligent-Tiering 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon S3作為目標. 啟用 S3 生命週期政策(Lifecycle policy) 在90天后將日誌轉換為 S3 標準-不頻繁存取(S3 Standard-IA) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #251

**題目**
Amazon EC2 執行個體位於一個新的VPC的私人子網中. 這個子網沒有外出網際網路接入,但EC2例項需要能夠從外部供應商下載每月的安全更新. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立網際網路閘道器,並附在VPC上. 配置私有子網路由表以使用網際網路閘道器作為預設路由.
- B. 建立 NAT 閘道器,並將其放置在公共子網中. 配置私有子網路由表以使用NAT閘道器作為預設路由.
- C. 建立 NAT 例項, 並將其放置在 EC2 例項所在的子網中。 配置私有子網路由表以使用 NAT 例項作為預設路由。
- D. 建立網際網路閘道器,並附在VPC上. 建立 NAT 例項, 並將其放置在 EC2 例項所在的子網中。 配置私有子網路由表以使用網際網路閘道器作為預設路由.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立 NAT 閘道器,並將其放置在公共子網中. 配置私有子網路由表以使用NAT閘道器作為預設路由。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立網際網路閘道器,並附在VPC上. 配置私有子網路由表以使用網際網路閘道器作為預設路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 NAT 例項, 並將其放置在 EC2 例項所在的子網中。 配置私有子網路由表以使用 NAT 例項作為預設路由 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立網際網路閘道器,並附在VPC上. 建立 NAT 例項, 並將其放置在 EC2 例項所在的子網中。 配置私有子網路由表以使用網際網路閘道器作為預設路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #252

**題目**
一個解決方案架構師需要設計一個儲存客戶端案例檔案的系統. 這些檔案是公司的核心資產,是重要的。 檔案數量會隨時間而增加. 檔案必須同時從執行於 Amazon EC2 例項的多個應用程式伺服器上存取. 解決方案必須有內在冗餘. 哪種解決辦法符合這些要求?

**選項**
- A. 亞馬遜彈性檔案系統(Amazon EFS)
- B. 亞馬遜彈性區塊儲存(Amazon EBS)
- C. 亞馬遜 S3 Glacier Deep Archive
- D. AWS Backup 保管庫

**答案**
A


**詳解**
正確答案是 **A**。
- A：亞馬遜彈性檔案系統(Amazon EFS)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：亞馬遜彈性區塊儲存(Amazon EBS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：亞馬遜 S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：AWS Backup 保管庫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #253

**題目**
一個解決方案設計師制定了兩項IAM政策:政策1 和政策2。 這兩項政策都附屬於一個IAM集團. 雲工程師作為IAM使用者加入IAM組. 雲工程師能進行何種動作?

**選項**
- A. 刪除 IAM 使用者
- B. 刪除目錄
- C. 刪除 Amazon EC2 例項
- D. 從 Amazon CloudWatch Logs 刪除日誌

**答案**
C


**詳解**
正確答案是 **C**。
- C：刪除 Amazon EC2 例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：刪除 IAM 使用者。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：刪除目錄。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：從 Amazon CloudWatch Logs 刪除日誌。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #254

**題目**
一家公司正在審查最近一個三級申請向VPC的轉移。 安全小組發現,最小權限(least privilege)的原則並不適用於Amazon EC2 安全群組(security group)在應用層之間的內進和外進規則. 一個解決方案設計者應該如何糾正這一問題?

**選項**
- A. 建立 安全群組(security group) 規則,使用例項 ID 作為源或目的地。
- B. 使用 安全群組(security group) ID 建立 安全群組(security group) 規則作為原始碼或目的地.
- C. 使用 VPC CIDR 塊建立 安全群組(security group) 規則作為原始碼或目的地。
- D. 使用子網 CIDR 塊建立 安全群組(security group) 規則作為原始碼或目的地。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 安全群組(security group) ID 建立 安全群組(security group) 規則作為原始碼或目的地。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 安全群組(security group) 規則,使用例項 ID 作為源或目的地 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 VPC CIDR 塊建立 安全群組(security group) 規則作為原始碼或目的地 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用子網 CIDR 塊建立 安全群組(security group) 規則作為原始碼或目的地 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #255

**題目**
一家公司有一個電子商務檢查工作室,負責向資料庫(database)公司發出訂單,並呼叫服務處理付款。 使用者在退出過程中正在經歷超時. 當使用者重新提交取出表時,會為相同的預期交易建立多個獨特的訂單. 一個解決方案設計師應該如何重塑這個作品,以防止多重訂單的產生?

**選項**
- A. 配置網路應用程式向Amazon Kinesis Data Firehose傳送命令訊息. 設定支付服務以獲取 Kinesis Data Firehose 的資訊並處理訂單。
- B. 在 AWS CloudTrail 中建立一個規則,以引用基於已登入的應用程式路徑請求的 AWS Lambda 函式. 使用Lambda查詢資料庫(database),呼叫支付服務,並在訂單中傳遞資訊.
- C. 在資料庫(database)中儲存順序. 向亞馬遜簡易通知服務(Amazon SNS)傳送包含訂單號的資訊. 設定支付服務以對 Amazon SNS 進行投票,檢索訊息,並處理訂單.
- D. 在資料庫(database)中儲存順序. 傳送一個包含命令號的資訊到一個亞馬遜簡易佇列服務(Amazon SQS)FIFO佇列. 設定支付服務以獲取訊息並處理訂單。 從佇列中刪除訊息。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在資料庫(database)中儲存順序. 傳送一個包含命令號的資訊到一個亞馬遜簡易佇列服務(Amazon SQS)FIFO佇列. 設定支付服務以獲取訊息並處理訂單。 從佇列中刪除訊息 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置網路應用程式向Amazon Kinesis Data Firehose傳送命令訊息. 設定支付服務以獲取 Kinesis Data Firehose 的資訊並處理訂單 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 AWS CloudTrail 中建立一個規則,以引用基於已登入的應用程式路徑請求的 AWS Lambda 函式. 使用Lambda查詢資料庫(database),呼叫支付服務,並在訂單中傳遞資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在資料庫(database)中儲存順序. 向亞馬遜簡易通知服務(Amazon SNS)傳送包含訂單號的資訊. 設定支付服務以對 Amazon SNS 進行投票,檢索訊息,並處理訂單。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #256

**題目**
一名解決方案設計師正在使用Amazon S3桶進行檔案審查應用。 解決辦法必須防止意外刪除檔案,並確保提供所有版本的檔案。 使用者必須能夠下載、修改和上傳文件。 應採取何種綜合行動來滿足這些要求?(選二.

**選項**
- A. 啟用只讀桶 ACL。
- B. 在桶上啟用版本。
- C. 將IAM 政策(IAM policy)附在桶上.
- D. 啟用 MFA 在桶上刪除。
- E. 使用 AWS KMS 加密水桶。

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：在桶上啟用版本 。此選項符合題目條件，能有效滿足核心需求。
- D：啟用 MFA 在桶上刪除。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：啟用只讀桶 ACL 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將IAM 政策(IAM policy)附在桶上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用 AWS KMS 加密水桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #257

**題目**
一家公司正在建立一個解決方案,在AWS帳戶中報告Amazon EC2自動放大事件。 公司需要使用無伺服器的解決方案將EC2自動縮放狀態資料儲存在Amazon S3中. 然後公司將使用Amazon S3中的資料在一個儀表板中提供近實時的更新. 解決辦法不得影響EC2例項發射的速度。 公司應如何將資料移至Amazon S3,以滿足這些要求?

**選項**
- A. 使用 Amazon CloudWatch 公尺流將 EC2 自動縮放狀態資料傳送到 Amazon Kinesis Data Firehose. 在Amazon S3中儲存資料.
- B. 發射Amazon EMR叢集,以收集EC2自動縮放狀態資料,並將資料傳送給Amazon Kinesis Data Firehose. 在Amazon S3中儲存資料.
- C. 建立一個 Amazon EventBridge 規則,在一個排程中引用 AWS Lambda 函式. 配置 Lambda 函式將 EC2 自動縮放狀態資料直接傳送到 Amazon S3。
- D. 在啟動 EC2 例項時使用指令碼安裝 Amazon Kinesis 代理。 配置 Kinesis 代理來收集 EC2 自動縮放狀態資料,並將資料傳送給 Amazon Kinesis Data Firehose. 在Amazon S3中儲存資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 Amazon CloudWatch 公尺流將 EC2 自動縮放狀態資料傳送到 Amazon Kinesis Data Firehose. 在Amazon S3中儲存資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：發射Amazon EMR叢集,以收集EC2自動縮放狀態資料,並將資料傳送給Amazon Kinesis Data Firehose. 在Amazon S3中儲存資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個 Amazon EventBridge 規則,在一個排程中引用 AWS Lambda 函式. 配置 Lambda 函式將 EC2 自動縮放狀態資料直接傳送到 Amazon S3 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在啟動 EC2 例項時使用指令碼安裝 Amazon Kinesis 代理。 配置 Kinesis 代理來收集 EC2 自動縮放狀態資料,並將資料傳送給 Amazon Kinesis Data Firehose. 在Amazon S3中儲存資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #258

**題目**
一家公司有一個應用程式,每小時將數百個.csv檔案放入Amazon S3桶. 檔案大小為1GB. 每次上傳一個檔案,公司需要將檔案轉換為Apache Parquet格式,並將輸出檔案放入S3 儲存桶(S3 bucket). 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立 AWS Lambda 功能,下載 .csv 檔案,將檔案轉換為 Parquet 格式,並將輸出檔案放置在 S3 儲存桶(S3 bucket) 中. 為每個 S3 PUT 活動啟動 Lambda 函式。
- B. 建立一個 Apache Spark 任務來讀取.csv 檔案,將檔案轉換為 Parquet 格式,並將輸出檔案放置在 S3 儲存桶(S3 bucket) 中. 為每個 S3 PUT 事件建立 AWS Lambda 函式以引用 Spark 任務。
- C. 為 S3 儲存桶(S3 bucket) 建立 AWS Glue 表格和 AWS Glue 爬蟲,應用程式將 .csv 檔案放在其中. 計劃一個 AWS Lambda 函式,定期使用 Amazon Athena 查詢 AWS Glue 表格,將查詢結果轉換為 Parquet 格式,並將輸出檔案放置為 S3 儲存桶(S3 bucket).
- D. 建立一個 AWS Glue 提取,轉換和載入(ETL)任務,將.csv檔案轉換為Parquet格式,並將輸出檔案放置為S3 儲存桶(S3 bucket). 為每個 S3 PUT 事件建立 AWS Lambda 函式以引用 ETL 任務。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 AWS Lambda 功能,下載 .csv 檔案,將檔案轉換為 Parquet 格式,並將輸出檔案放置在 S3 儲存桶(S3 bucket) 中. 為每個 S3 PUT 活動啟動 Lambda 函式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個 Apache Spark 任務來讀取.csv 檔案,將檔案轉換為 Parquet 格式,並將輸出檔案放置在 S3 儲存桶(S3 bucket) 中. 為每個 S3 PUT 事件建立 AWS Lambda 函式以引用 Spark 任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 S3 儲存桶(S3 bucket) 建立 AWS Glue 表格和 AWS Glue 爬蟲,應用程式將 .csv 檔案放在其中. 計劃一個 AWS Lambda 函式,定期使用 Amazon Athena 查詢 AWS Glue 表格,將查詢結果轉換為 Parquet 格式,並將輸出檔案放置為 S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個 AWS Glue 提取,轉換和載入(ETL)任務,將.csv檔案轉換為Parquet格式,並將輸出檔案放置為S3 儲存桶(S3 bucket). 為每個 S3 PUT 事件建立 AWS Lambda 函式以引用 ETL 任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #259

**題目**
一家公司正在為執行在Amazon RDS DB例項上的所有資料庫執行新的資料保留政策。 公司必須保留至少2年的日常備份. 備份必須一致和可恢復。 哪個解決方案架構設計師建議滿足這些要求?

**選項**
- A. 在 AWS Backup 中建立 備份(backup) 保險庫以保留 RDS 備份。 建立新的備份(backup)計劃,每天計劃,建立後有效期為2年. 將 RDS DB 例項指定為 備份(backup) 計劃。
- B. 為每日快照的 RDS DB 例項配置 備份(backup) 視窗。 為每個 RDS DB 例項指定一個 快照(snapshot) 保留政策(retention policy) , 為期2年。 使用Amazon資料生命週期管理器(Amazon DLM)來計劃快照(snapshot)刪除.
- C. 配置 資料庫(database) 交易日誌, 自動備份至 Amazon CloudWatch Logs, 有效期為 2年。
- D. 配置 AWS 資料庫(Database) 遷移服務(AWS DS) 複寫(replication) 任務。 部署一個 複寫(replication) 例項,並配置一個變化資料捕獲(CDC)任務,將 資料庫(database) 的更改流到 Amazon S3 作為目標。 配置 S3 生命週期政策, 在 2 年後刪除快照。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 AWS Backup 中建立 備份(backup) 保險庫以保留 RDS 備份。 建立新的備份(backup)計劃,每天計劃,建立後有效期為2年. 將 RDS DB 例項指定為 備份(backup) 計劃 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為每日快照的 RDS DB 例項配置 備份(backup) 視窗。 為每個 RDS DB 例項指定一個 快照(snapshot) 保留政策(retention policy) , 為期2年。 使用Amazon資料生命週期管理器(Amazon DLM)來計劃快照(snapshot)刪除。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 資料庫(database) 交易日誌, 自動備份至 Amazon CloudWatch Logs, 有效期為 2年 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 AWS 資料庫(Database) 遷移服務(AWS DS) 複寫(replication) 任務。 部署一個 複寫(replication) 例項,並配置一個變化資料捕獲(CDC)任務,將 資料庫(database) 的更改流到 Amazon S3 作為目標。 配置 S3 生命週期政策, 在 2 年後刪除快照 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #260

**題目**
一個公司的合規(compliance)團隊需要將其檔案股份移動到AWS. 在Windows Server SMB檔案共享上執行的股份. 一個自管的房地 Active Directory控制了對檔案和資料夾的存取. 公司希望將Amazon FSx用於Windows檔案伺服器作為解決方案的一部分. 公司必須確保在移動到 AWS 後,對 Windows 檔案伺服器 SMB 合規(compliance) 的股票,資料夾和檔案進行存取時,presimes Active Directory 組會限制對 FSx 的存取. 公司為Windows檔案伺服器檔案系統建立了FSx. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立活動目錄連線符,以連線活動目錄. 將活動目錄組對映到IAM組以限制存取.
- B. 指定帶有限制標記金鑰和合規(Compliance)標記值的標記. 將活動目錄組對映到IAM組以限制存取.
- C. 為Windows檔案伺服器建立直接與FSx連結的IAM服務連結角色,以限制存取.
- D. 加入檔案系統到活動目錄中以限制存取.

**答案**
D


**詳解**
正確答案是 **D**。
- D：加入檔案系統到活動目錄中以限制存取。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立活動目錄連線符,以連線活動目錄. 將活動目錄組對映到IAM組以限制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：指定帶有限制標記金鑰和合規(Compliance)標記值的標記. 將活動目錄組對映到IAM組以限制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為Windows檔案伺服器建立直接與FSx連結的IAM服務連結角色,以限制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #261

**題目**
一家公司最近宣佈向全球受眾部署其零售網站。 該網站執行於一個彈性負載平衡器(Load Balancer)後面的多個Amazon EC2 執行個體. 這些例子在Auto Scaling 群組(Auto Scaling group)中跨越多個可用區(Availability Zones). 公司希望根據客戶存取網站所使用的裝置向客戶提供不同版本的內容. 一個設計師應採取何種綜合行動來滿足這些要求?(選二.

**選項**
- A. 配置 Amazon CloudFront 以快取內容的多個版本.
- B. 在 網路負載平衡器(Network Load Balancer) 中配置一個主機頭, 將流量傳送到不同的情況。
- C. 配置一個 Lambda@Edge 函式,以根據使用者代理頭向使用者傳送特定物件.
- D. 配置 AWS 全球加速器。 將請求轉交一個網路負載平衡器(Network Load Balancer)(NLB)。 配置NLB,以建立基於主機的線路,通往不同的EC2例項.
- E. 配置 AWS 全球加速器。 將請求轉交一個網路負載平衡器(Network Load Balancer)(NLB)。 配置 UNLB 設定基於路徑的路徑到不同的EC2例項.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：配置 Amazon CloudFront 以快取內容的多個版本。此選項符合題目條件，能有效滿足核心需求。
- C：配置一個 Lambda@Edge 函式,以根據使用者代理頭向使用者傳送特定物件。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在 網路負載平衡器(Network Load Balancer) 中配置一個主機頭, 將流量傳送到不同的情況 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 AWS 全球加速器。 將請求轉交一個網路負載平衡器(Network Load Balancer)(NLB)。 配置NLB,以建立基於主機的線路,通往不同的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：配置 AWS 全球加速器。 將請求轉交一個網路負載平衡器(Network Load Balancer)(NLB)。 配置 UNLB 設定基於路徑的路徑到不同的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #262

**題目**
一個公司計劃將Amazon ElastiCache用於其多級網路應用. 一個解決方案架構師為 ElastiCache 叢集建立了快取 VPC,併為應用程式的 Amazon EC2 例項建立了 App VPC。 兩個VPC都在我們東-1區域(Region)中. 解決方案架構師必須實施一個解決方案,為應用程式的EC2例項提供存取ElastiCache叢集的機會. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在 VPC 之間建立對等連線。 為兩個VPC中的對等連線新增一個路由表條目. 為ElastiCache叢集的安全群組(security group)配置一條輸入規則,允許從應用程式的安全群組(security group)中輸入連線.
- B. 建立 Transit VPC. 更新Cache VPC和App VPC中的VPC路由表,以透過Transit VPC進行路由流量. 為ElastiCache叢集的安全群組(security group)配置一條輸入規則,允許從應用程式的安全群組(security group)輸入連線.
- C. 在 VPC 之間建立對等連線。 為兩個VPC中的對等連線新增一個路由表條目. 為對等連線的安全群組(security group)配置一條輸入規則,允許從應用程式的安全群組(security group)輸入連線.
- D. 建立 Transit VPC. 更新Cache VPC和App VPC中的VPC路由表,以透過Transit VPC進行路由流量. 為 Transit VPC的安全群組(security group)配置一條入境規則,允許從應用程式的安全群組(security group)進入連線.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 VPC 之間建立對等連線。 為兩個VPC中的對等連線新增一個路由表條目. 為ElastiCache叢集的安全群組(security group)配置一條輸入規則,允許從應用程式的安全群組(security group)中輸入連線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立 Transit VPC. 更新Cache VPC和App VPC中的VPC路由表,以透過Transit VPC進行路由流量. 為ElastiCache叢集的安全群組(security group)配置一條輸入規則,允許從應用程式的安全群組(security group)輸入連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 VPC 之間建立對等連線。 為兩個VPC中的對等連線新增一個路由表條目. 為對等連線的安全群組(security group)配置一條輸入規則,允許從應用程式的安全群組(security group)輸入連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Transit VPC. 更新Cache VPC和App VPC中的VPC路由表,以透過Transit VPC進行路由流量. 為 Transit VPC的安全群組(security group)配置一條入境規則,允許從應用程式的安全群組(security group)進入連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #263

**題目**
一家公司正在建立一個由若干微服務組成的應用程式。 公司決定使用集裝箱技術在AWS上部署其軟體. 公司需要一個解決方案,最大限度地減少維護和規模化的持續努力. 該公司無法管理額外的基礎設施。 一個設計師應採取何種綜合行動來滿足這些要求?(選二.

**選項**
- A. 部署亞馬遜彈性容器服務組群。
- B. 在跨越多個可用區(Availability Zones)的Amazon EC2情況下部署Kubernetes控制飛機.
- C. 部署亞馬遜彈性容器服務(Amazon ECS),發射型為Amazon EC2。 指定一個大於或等於2的預期任務數量。
- D. 部署亞馬遜彈性容器服務(Amazon ECS),啟動類型為 Fargate。 指定一個大於或等於2的預期任務數量。
- E. 在跨越多個可用區(Availability Zones)的Amazon EC2 執行個體中部署Kubernetes工人節點。 建立一個配置,為每個微服務指定兩個或兩個以上的複製件。

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：部署亞馬遜彈性容器服務組群。此選項符合題目條件，能有效滿足核心需求。
- D：部署亞馬遜彈性容器服務(Amazon ECS),啟動類型為 Fargate。 指定一個大於或等於2的預期任務數量。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在跨越多個可用區(Availability Zones)的Amazon EC2情況下部署Kubernetes控制飛機。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署亞馬遜彈性容器服務(Amazon ECS),發射型為Amazon EC2。 指定一個大於或等於2的預期任務數量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在跨越多個可用區(Availability Zones)的Amazon EC2 執行個體中部署Kubernetes工人節點。 建立一個配置,為每個微服務指定兩個或兩個以上的複製件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #264

**題目**
一家公司有一個網路應用程式,託管了10多個Amazon EC2 執行個體,由Amazon Route 53指揮流量. 公司在嘗試瀏覽應用程式時偶爾會遇到超時錯誤. 網路團隊發現一些DNS查詢返回不健康事件的IP地址,導致超時錯誤. 一個解決方案設計師應該執行什麼來克服這些超時錯誤?

**選項**
- A. 為每個EC2例項建立一條53路的簡單路線政策記錄。 每張記錄都要做健康檢查
- B. 為每個EC2例項建立一條路由53故障路由政策記錄。 每張記錄都要做健康檢查
- C. 建立 Amazon CloudFront 分佈, 以 EC2 例項作為來源。 將體檢與EC2病例聯絡起來。
- D. 建立應用程式負載平衡器(Application Load Balancer)(ALB),在EC2 執行個體前進行健康檢查. 53號公路通往ALB的路線.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立應用程式負載平衡器(Application Load Balancer)(ALB),在EC2 執行個體前進行健康檢查. 53號公路通往ALB的路線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為每個EC2例項建立一條53路的簡單路線政策記錄。 每張記錄都要做健康檢查。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為每個EC2例項建立一條路由53故障路由政策記錄。 每張記錄都要做健康檢查。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon CloudFront 分佈, 以 EC2 例項作為來源。 將體檢與EC2病例聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #265

**題目**
一個解決方案架構師需要設計一個高度可用的應用程式,包括網路,應用程式,以及資料庫(database)級. HTTPS內容的傳送應儘量接近邊緣,交貨時間最少. 哪種解決辦法符合這些要求,而且MOST安全嗎?

**選項**
- A. 配置公共子網中具有多個冗餘的Amazon EC2例項的應用程式負載平衡器(Application Load Balancer)(ALB). 配置 Amazon CloudFront 以 公共 ALB 作為源頭髮送 HTTPS 內容.
- B. 在私人子網中配置一個具有多個冗餘的Amazon EC2例項的公共應用程式負載平衡器(Application Load Balancer). 配置 Amazon CloudFront 以 EC2 例項作為源頭提供 HTTPS 內容。
- C. 配置一個公共的應用程式負載平衡器(Application Load Balancer)(ALB),在私人子網中具有多個冗餘的Amazon EC2 執行個體. 配置 Amazon CloudFront 以 公共 ALB 作為源頭髮送 HTTPS 內容.
- D. 在公共子網中配置一個具有多個冗餘的Amazon EC2例項的公共應用程式負載平衡器(Application Load Balancer). 配置 Amazon CloudFront 以 EC2 例項作為源頭提供 HTTPS 內容。

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置一個公共的應用程式負載平衡器(Application Load Balancer)(ALB),在私人子網中具有多個冗餘的Amazon EC2 執行個體. 配置 Amazon CloudFront 以 公共 ALB 作為源頭髮送 HTTPS 內容。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置公共子網中具有多個冗餘的Amazon EC2例項的應用程式負載平衡器(Application Load Balancer)(ALB). 配置 Amazon CloudFront 以 公共 ALB 作為源頭髮送 HTTPS 內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在私人子網中配置一個具有多個冗餘的Amazon EC2例項的公共應用程式負載平衡器(Application Load Balancer). 配置 Amazon CloudFront 以 EC2 例項作為源頭提供 HTTPS 內容 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在公共子網中配置一個具有多個冗餘的Amazon EC2例項的公共應用程式負載平衡器(Application Load Balancer). 配置 Amazon CloudFront 以 EC2 例項作為源頭提供 HTTPS 內容 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #266

**題目**
一家公司有一個受歡迎的遊戲平臺在AWS上執行. 該應用程式對延遲(latency)敏感,因為延遲(latency)可以影響使用者體驗,給一些玩家帶來不公平的優勢. 應用部署在每個AWS 區域(Region)中. 它執行在 Amazon EC2 例項上,這些例項屬於應用程式負載平衡器(ALBs)後配置的自動放大組的一部分. 解決方案設計師需要實施一種機制,以監測應用的健康狀況,並將流量轉向健康的終點. 哪種解決辦法符合這些要求?

**選項**
- A. 在 AWS 全球加速器中配置加速器。 為應用程式所收聽的埠新增一個收聽器,並附加到每個區域(Region)中的區域端點上. 新增 ALB 作為終點.
- B. 建立 Amazon CloudFront 分佈並指定 ALB 為源伺服器。 配置快取行為以使用源快取頭。 使用AWS Lambda功能最佳化流量.
- C. 建立一個 Amazon CloudFront 分佈,並將 Amazon S3 指定為源伺服器. 配置快取行為以使用源快取頭。 使用AWS Lambda功能最佳化流量.
- D. 配置一個 Amazon DynamoDB 資料庫(database),作為應用程式的資料庫. 建立 DynamoDB 加速器(DAX)叢集,作為 DynamoDB 託管應用程式資料的記憶體快取.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 AWS 全球加速器中配置加速器。 為應用程式所收聽的埠新增一個收聽器,並附加到每個區域(Region)中的區域端點上. 新增 ALB 作為終點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立 Amazon CloudFront 分佈並指定 ALB 為源伺服器。 配置快取行為以使用源快取頭。 使用AWS Lambda功能最佳化流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個 Amazon CloudFront 分佈,並將 Amazon S3 指定為源伺服器. 配置快取行為以使用源快取頭。 使用AWS Lambda功能最佳化流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個 Amazon DynamoDB 資料庫(database),作為應用程式的資料庫. 建立 DynamoDB 加速器(DAX)叢集,作為 DynamoDB 託管應用程式資料的記憶體快取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #267

**題目**
一家公司有100萬使用者使用其移動應用程式. 公司必須在近實時分析資料使用情況。 公司還必須在近實時加密資料,並將資料儲存在Apache Parquet格式的集中位置,供進一步處理. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立Amazon Kinesis資料流,將資料儲存在Amazon S3中. 建立一個 Amazon Kinesis 資料分析應用程式來分析資料. Invoke a AWS Lambda 函式將資料傳送到 Kinesis 資料分析應用程式.
- B. 建立Amazon Kinesis資料流,將資料儲存在Amazon S3中. 建立一個 Amazon EMR 叢集來分析資料. Invoke a AWS Lambda 函式將資料傳送到EMR叢集.
- C. 建立Amazon Kinesis Data Firehose送電流,將資料儲存在Amazon S3中. 建立一個 Amazon EMR 叢集來分析資料.
- D. 建立Amazon Kinesis Data Firehose送電流,將資料儲存在Amazon S3中. 建立一個 Amazon Kinesis 資料分析應用程式來分析資料.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立Amazon Kinesis Data Firehose送電流,將資料儲存在Amazon S3中. 建立一個 Amazon Kinesis 資料分析應用程式來分析資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立Amazon Kinesis資料流,將資料儲存在Amazon S3中. 建立一個 Amazon Kinesis 資料分析應用程式來分析資料. Invoke a AWS Lambda 函式將資料傳送到 Kinesis 資料分析應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立Amazon Kinesis資料流,將資料儲存在Amazon S3中. 建立一個 Amazon EMR 叢集來分析資料. Invoke a AWS Lambda 函式將資料傳送到EMR叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立Amazon Kinesis Data Firehose送電流,將資料儲存在Amazon S3中. 建立一個 Amazon EMR 叢集來分析資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #268

**題目**
一個遊戲公司有一個顯示分數的網路應用程式. 該應用程式執行在一臺應用程式負載平衡器(Application Load Balancer)後面的Amazon EC2例項上. 該應用程式將資料儲存在用於 MySQL 資料庫(database)的Amazon RDS中. 由於資料庫(database)的閱讀效能,使用者開始經歷長時間的延遲和中斷. 公司希望改善使用者體驗,同時儘量減少應用程式架構的變化. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 在資料庫(database)前使用Amazon ElastiCache.
- B. 在應用程式和資料庫(database)之間使用RDS代理.
- C. 將應用程式從 EC2 例項移到 AWS Lambda。
- D. 將資料庫(database)從Amazon RDS移到Amazon DynamoDB.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在資料庫(database)前使用Amazon ElastiCache。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在應用程式和資料庫(database)之間使用RDS代理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將應用程式從 EC2 例項移到 AWS Lambda 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料庫(database)從Amazon RDS移到Amazon DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #269

**題目**
一家電子商務公司注意到其基於Amazon RDS的網路應用的績效下降。 效能下降的原因是業務分析師引發的只讀的SQL查詢數量增加. 一個解決方案架構師需要用對現有網路應用程式的最小修改來解決這個問題. 解決方案設計師應該建議什麼?

**選項**
- A. 將資料匯出至Amazon DynamoDB,並讓商業分析師進行查詢.
- B. 將資料裝入Amazon ElastiCache並讓商業分析師執行他們的查詢.
- C. 建立主要資料庫(database)的讀本,並讓業務分析員進行查詢。
- D. 將資料複製到Amazon Redshift叢集,並讓業務分析員執行他們的查詢.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立主要資料庫(database)的讀本,並讓業務分析員進行查詢。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料匯出至Amazon DynamoDB,並讓商業分析師進行查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將資料裝入Amazon ElastiCache並讓商業分析師執行他們的查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料複製到Amazon Redshift叢集,並讓業務分析員執行他們的查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #270

**題目**
一家公司正在使用一個集中的AWS帳戶,將日誌資料儲存在各種Amazon S3桶中. 一個解決方案架構師需要在資料上傳到S3桶之前確保資料在休息時加密. 資料也必須在過境時加密。 哪種解決辦法符合這些要求?

**選項**
- A. 使用客戶端的加密(encryption)加密正在上傳到S3桶的資料.
- B. 使用伺服器側加密(encryption)加密正在上傳到S3桶的資料.
- C. 建立需要使用伺服器側加密(encryption)的桶策略,使用S3管理的加密(encryption)金鑰(SSE-S3)進行S3上傳.
- D. 透過使用預設的AWS Key Management Service(AWS KMS)金鑰,啟用安全選項加密S3桶.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用客戶端的加密(encryption)加密正在上傳到S3桶的資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用伺服器側加密(encryption)加密正在上傳到S3桶的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立需要使用伺服器側加密(encryption)的桶策略,使用S3管理的加密(encryption)金鑰(SSE-S3)進行S3上傳。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過使用預設的AWS Key Management Service(AWS KMS)金鑰,啟用安全選項加密S3桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #271

**題目**
一位解決方案架構師指出,在達到理想的Amazon EC2容量之前,夜間批次處理工作會自動提升1小時. 每天晚上都一樣, 解決方案架構師需要找到成本效益高的解決方案,以便快速達到預期的EC2能力,並允許Auto Scaling 群組(Auto Scaling group)在批次工作完成後縮小規模. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 提高Auto Scaling 群組(Auto Scaling group)的最低容量.
- B. 提高Auto Scaling 群組(Auto Scaling group)的最大容量.
- C. 配置預定的縮放以達到理想的計算級別.
- D. 修改縮放政策,在每次縮放操作中增加更多的EC2例項.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置預定的縮放以達到理想的計算級別。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：提高Auto Scaling 群組(Auto Scaling group)的最低容量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：提高Auto Scaling 群組(Auto Scaling group)的最大容量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改縮放政策,在每次縮放操作中增加更多的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #272

**題目**
一家公司為一個動態網站提供服務,該網站來自應用程式負載平衡器(Application Load Balancer)(ALB)背後的Amazon EC2例項。 網站需要支援多種語言為世界各地的客戶服務. 網站的架構在西-西-1區域(Region)執行,為位於世界其他地區的使用者展示高要求的延遲(latency)。 網站需要快速高效地滿足請求,無論使用者所在位置如何. 然而,該公司並不想在多個地區重新建立現有的建築. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 以Amazon S3桶服務的網站取代現有架構。 配置一個以 S3 儲存桶(S3 bucket) 為源的 Amazon CloudFront 分佈。 根據 Accept-Language 請求頭設定快取行為設定為快取。
- B. 配置 Amazon CloudFront 分佈,以 ALB 作為來源。 根據 Accept-Language 請求頭設定快取行為設定為快取。
- C. 建立一個與ALB整合的Amazon API Gateway API. 配置使用 HTTP 整合型別的 API。 設定一個 API 閘道器階段,以啟用基於 Accept-Language 請求頭的 API 快取。
- D. 在每個新增的區域(Region)中啟動EC2例項,並配置NGINX作為該區域(Region)的快取伺服器. 將所有EC2例項和ALB放在帶有地理定位路由政策的Amazon Route 53記錄集後面.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置 Amazon CloudFront 分佈,以 ALB 作為來源。 根據 Accept-Language 請求頭設定快取行為設定為快取 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：以Amazon S3桶服務的網站取代現有架構。 配置一個以 S3 儲存桶(S3 bucket) 為源的 Amazon CloudFront 分佈。 根據 Accept-Language 請求頭設定快取行為設定為快取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個與ALB整合的Amazon API Gateway API. 配置使用 HTTP 整合型別的 API。 設定一個 API 閘道器階段,以啟用基於 Accept-Language 請求頭的 API 快取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在每個新增的區域(Region)中啟動EC2例項,並配置NGINX作為該區域(Region)的快取伺服器. 將所有EC2例項和ALB放在帶有地理定位路由政策的Amazon Route 53記錄集後面。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #273

**題目**
一家迅速增長的電子商務公司正在一個AWS 區域(Region)中承擔其工作量。 一個解決方案架構師必須建立災難復原(disaster recovery)(DR)策略,其中包括不同的AWS 區域(Region). 公司希望其資料庫(database)在DR 區域(Region)中以儘可能少的延遲(latency)更新. DR 區域(Region)的剩餘基礎設施需要以較低的容量執行,必要時必須能夠擴大規模. 按照LOWEST回收時間目標,哪一種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon Aurora全球資料庫(database),並進行試光部署.
- B. 使用Amazon Aurora全球資料庫(database),並進行溫暖待命部署.
- C. 使用帶有試光部署的 Amazon RDS 多AZ DB 例項。
- D. 使用 Amazon RDS 多AZ DB 例項, 並進行溫暖的備用部署。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon Aurora全球資料庫(database),並進行溫暖待命部署。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon Aurora全球資料庫(database),並進行試光部署。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用帶有試光部署的 Amazon RDS 多AZ DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon RDS 多AZ DB 例項, 並進行溫暖的備用部署 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #274

**題目**
一家公司在Amazon EC2 執行個體中執行一個應用程式。 公司需要實施災難復原(disaster recovery)(DR)解決方案用於應用. DR解決方案的恢復時間目標(RTO)需要少於4小時. DR解決方案還需要在正常執行時使用儘可能少的AWS資源. 哪種解決辦法能以業務效率高的方式滿足這些要求?

**選項**
- A. 建立 Amazon 機器影象( AMI) 來備份 EC2 例項。 複製AMIs到一個二級AWS 區域(Region). 透過使用AWS Lambda和自定義指令碼在二級區域(Region)中自動部署基礎設施.
- B. 建立 Amazon 機器影象( AMI) 來備份 EC2 例項。 複製AMIs到一個二級AWS 區域(Region). 透過使用AWS CloudFormation在二級區域(Region)中自動部署基礎設施.
- C. 在二級AWS 區域(Region)中發射EC2例項. 在二級區域(Region)中始終保持EC2例項活躍.
- D. 在二級可用區(Availability Zone)中發射EC2例項. 在二級可用區(Availability Zone)中始終保持EC2例項活躍.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在二級可用區(Availability Zone)中發射EC2例項. 在二級可用區(Availability Zone)中始終保持EC2例項活躍。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon 機器影象( AMI) 來備份 EC2 例項。 複製AMIs到一個二級AWS 區域(Region). 透過使用AWS Lambda和自定義指令碼在二級區域(Region)中自動部署基礎設施。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon 機器影象( AMI) 來備份 EC2 例項。 複製AMIs到一個二級AWS 區域(Region). 透過使用AWS CloudFormation在二級區域(Region)中自動部署基礎設施。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在二級AWS 區域(Region)中發射EC2例項. 在二級區域(Region)中始終保持EC2例項活躍。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #275

**題目**
一家公司執行一個基於內部瀏覽器的應用程式. 該應用程式執行在一臺應用程式負載平衡器(Application Load Balancer)後面的Amazon EC2例項上. 這些執行個體在Amazon EC2 Auto Scaling 群組(Auto Scaling group)中跨越多個可用區(Availability Zones). Auto Scaling 群組(Auto Scaling group)在工作時間內可達到20例,但一夜之間可降至2例。 工作人員抱怨說,申請在當天開始時非常緩慢,雖然在上午中之前執行良好。 應如何改變規模,以解決工作人員的投訴,將費用保持在最低水平?

**選項**
- A. 執行一項預定行動,在辦事處開張前不久將預期能力定在20個。
- B. 執行一個在更低的CPU閾值下觸發的階梯縮放動作,並縮短冷卻期.
- C. 執行在較低的CPU閾值觸發的目標跟蹤動作,並縮短冷卻期.
- D. 實施一項預定行動,將最低和最大能力設定在辦公室開幕前不久的20個。

**答案**
A


**詳解**
正確答案是 **A**。
- A：執行一項預定行動,在辦事處開張前不久將預期能力定在20個。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：執行一個在更低的CPU閾值下觸發的階梯縮放動作,並縮短冷卻期。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：執行在較低的CPU閾值觸發的目標跟蹤動作,並縮短冷卻期。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：實施一項預定行動,將最低和最大能力設定在辦公室開幕前不久的20個。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #276

**題目**
一個連在Auto Scaling 群組(Auto Scaling group)的幾個Amazon EC2 執行個體中部署了一個多級應用程式。 甲骨文例項的Amazon RDS是應用程式使用甲骨文特定PL/SQL函式的資料層. 申請的流量穩步增加。 這造成EC2 執行個體超載,RDS案例的儲存耗盡。 Auto Scaling 群組(Auto Scaling group)沒有任何縮放度量衡,只定義最低健康例項計數. 公司預測,在平息之前,交通量將繼續以穩定但無法預測的速度增長. 解決方案設計師應該做些什麼來確保該系統能夠自動擴大流量?(選二.

**選項**
- A. 為 Oracle 例項配置 RDS 上的儲存自動縮放。
- B. 將資料庫(database)遷移到Amazon Aurora,以使用自動放大儲存.
- C. 為 Oracle 配置 RDS 上的提醒, 用於低自由儲存空間。
- D. 配置Auto Scaling 群組(Auto Scaling group),以平均CPU作為縮放度量衡.
- E. 配置Auto Scaling 群組(Auto Scaling group)以平均自由記憶體作為縮放度量衡.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：為 Oracle 例項配置 RDS 上的儲存自動縮放 。此選項符合題目條件，能有效滿足核心需求。
- C：為 Oracle 配置 RDS 上的提醒, 用於低自由儲存空間 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：將資料庫(database)遷移到Amazon Aurora,以使用自動放大儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置Auto Scaling 群組(Auto Scaling group),以平均CPU作為縮放度量衡。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：配置Auto Scaling 群組(Auto Scaling group)以平均自由記憶體作為縮放度量衡。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #277

**題目**
一家公司提供線上服務,釋出影片內容並進行轉碼,供任何移動平臺使用. 應用架構使用亞馬遜彈性檔案系統(Amazon EFS)標準來收集和儲存影片,以便多個Amazon EC2 Linux例項可以存取影片內容進行處理. 隨著服務受歡迎程度逐漸提高,儲存成本也變得太昂貴. 哪種儲存解決方案最符合成本效益?

**選項**
- A. 使用AWS Storage Gateway檔案儲存和處理影片內容.
- B. 使用 AWS Storage Gateway 的捲來儲存和處理影片內容.
- C. 使用Amazon EFS儲存影片內容. 處理完成後,將檔案轉移到Amazon Elastic Block Store(Amazon EBS).
- D. 使用Amazon S3儲存影片內容. 將檔案暫時移到連線在伺服器上的亞馬遜彈性塊儲存器(Amazon EBS)中進行處理。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS Storage Gateway檔案儲存和處理影片內容。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 AWS Storage Gateway 的捲來儲存和處理影片內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon EFS儲存影片內容. 處理完成後,將檔案轉移到Amazon Elastic Block Store(Amazon EBS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon S3儲存影片內容. 將檔案暫時移到連線在伺服器上的亞馬遜彈性塊儲存器(Amazon EBS)中進行處理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #278

**題目**
公司希望建立一個應用程式,將員工資料儲存在層次結構化關係中. 該公司需要至少-延遲(latency)對員工資料高流量查詢作出答覆,必須保護任何敏感資料。 如果僱員資料中有財務資訊,公司也需要每月收到電子郵件資訊。 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 使用Amazon Redshift將員工資料儲存在等級中. 每月將資料解除安裝到Amazon S3.
- B. 使用Amazon DynamoDB將員工資料儲存在等級中. 每月將資料匯出至Amazon S3.
- C. 為 AWS 帳戶配置 Amazon Macie。 將Mace與Amazon EventBridge整合,將月度事件傳送到AWS Lambda.
- D. 使用Amazon Athena分析Amazon S3中的員工資料. 將雅典娜與Amazon QuickSight融合,釋出分析儀表板,並與使用者共享儀表板.
- E. 為 AWS 帳戶配置 Amazon Macie。 將Macie與Amazon EventBridge整合,透過Amazon簡易通知服務(Amazon SNS)訂閱傳送月度通知.

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：為 AWS 帳戶配置 Amazon Macie。 將Mace與Amazon EventBridge整合,將月度事件傳送到AWS Lambda。此選項符合題目條件，能有效滿足核心需求。
- D：使用Amazon Athena分析Amazon S3中的員工資料. 將雅典娜與Amazon QuickSight融合,釋出分析儀表板,並與使用者共享儀表板。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用Amazon Redshift將員工資料儲存在等級中. 每月將資料解除安裝到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon DynamoDB將員工資料儲存在等級中. 每月將資料匯出至Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：為 AWS 帳戶配置 Amazon Macie。 將Macie與Amazon EventBridge整合,透過Amazon簡易通知服務(Amazon SNS)訂閱傳送月度通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #279

**題目**
一家公司有一個應用程式,由Amazon DynamoDB表支援。 該公司的合規(compliance)要求規定,資料庫(database)的備份必須每月取用,必須提供6個月,必須保留7年. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個AWS Backup計劃,在每月的第一天支援DynamomDB的桌子. 指定一個生命週期政策(lifecycle policy),在6個月後將備份(backup)轉換為冷藏. 將每一備份(backup)的留存期定為7年。
- B. 在每月的第一天建立一個DynamoDB按需的DynamoDB表格備份(backup). 6個月後,備份(backup)向亞馬遜S3 Glacier Flexible Retrieval過渡. 建立 S3 生命週期政策(Lifecycle policy) 來刪除超過 7 年的備份。
- C. 使用AWS SDK來開發一個指令碼,以建立DynamoDB表的點播備份(backup). 設定Amazon EventBridge規則,每月第一天執行劇本. 建立第二個指令碼,在每月第二天執行,將超過6個月的DynamomDB備份過渡到冷儲存,並刪除超過7年的備份.
- D. 使用AWS CLI建立DynamomDB表的點播備份(backup). 設定一條Amazon EventBridge規則,在每月的第一天以cron表示式執行命令. 在命令中指定在6個月後將備份轉換為冷儲存,並在7年後刪除備份。

**答案**
B


**詳解**
正確答案是 **B**。
- B：在每月的第一天建立一個DynamoDB按需的DynamoDB表格備份(backup). 6個月後,備份(backup)向亞馬遜S3 Glacier Flexible Retrieval過渡. 建立 S3 生命週期政策(Lifecycle policy) 來刪除超過 7 年的備份 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個AWS Backup計劃,在每月的第一天支援DynamomDB的桌子. 指定一個生命週期政策(lifecycle policy),在6個月後將備份(backup)轉換為冷藏. 將每一備份(backup)的留存期定為7年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS SDK來開發一個指令碼,以建立DynamoDB表的點播備份(backup). 設定Amazon EventBridge規則,每月第一天執行劇本. 建立第二個指令碼,在每月第二天執行,將超過6個月的DynamomDB備份過渡到冷儲存,並刪除超過7年的備份。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS CLI建立DynamomDB表的點播備份(backup). 設定一條Amazon EventBridge規則,在每月的第一天以cron表示式執行命令. 在命令中指定在6個月後將備份轉換為冷儲存,並在7年後刪除備份。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #280

**題目**
一家公司正在使用Amazon CloudFront及其網站. 該公司已啟用CloudFront發售記錄, 公司需要對原木進行高階分析,建立視覺化. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用Amazon Athena中的標準SQL查詢來分析S3 儲存桶(S3 bucket)中的CloudFront日誌. 以AWS Glue視覺效果.
- B. 使用Amazon Athena中的標準SQL查詢來分析S3 儲存桶(S3 bucket)中的CloudFront日誌. 以Amazon QuickSight視覺化結果.
- C. 使用Amazon DynamoDB中的標準SQL查詢來分析S3 儲存桶(S3 bucket)中的CloudFront日誌. 以AWS Glue視覺效果.
- D. 使用Amazon DynamoDB中的標準SQL查詢來分析S3 儲存桶(S3 bucket)中的CloudFront日誌. 以Amazon QuickSight視覺化結果.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon Athena中的標準SQL查詢來分析S3 儲存桶(S3 bucket)中的CloudFront日誌. 以AWS Glue視覺效果。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon Athena中的標準SQL查詢來分析S3 儲存桶(S3 bucket)中的CloudFront日誌. 以Amazon QuickSight視覺化結果。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon DynamoDB中的標準SQL查詢來分析S3 儲存桶(S3 bucket)中的CloudFront日誌. 以AWS Glue視覺效果。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon DynamoDB中的標準SQL查詢來分析S3 儲存桶(S3 bucket)中的CloudFront日誌. 以Amazon QuickSight視覺化結果。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #281

**題目**
一家公司使用Amazon RDS為PostgreSQL DB例項執行一款fieet網路伺服器. 經過例行的合規(compliance)檢查後,公司制定了標準,要求所有生產資料庫的回收點目標(RPO)小於1秒. 哪種解決辦法符合這些要求?

**選項**
- A. 為 DB 例項啟用多AZ 部署。
- B. 在一個 可用區(Availability Zone) 中啟用 DB 例項的自動縮放。
- C. 配置一個 可用區(Availability Zone) 中的 DB 例項,並在一個單獨的 可用區(Availability Zone) 中建立多個已讀複製件.
- D. 配置一個 可用區(Availability Zone) 中的 DB 例項,並配置 AWS 資料庫(Database) 遷移服務(AWS DSMS) 更改資料捕獲(CDC)任務.

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置一個 可用區(Availability Zone) 中的 DB 例項,並配置 AWS 資料庫(Database) 遷移服務(AWS DSMS) 更改資料捕獲(CDC)任務。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 DB 例項啟用多AZ 部署 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在一個 可用區(Availability Zone) 中啟用 DB 例項的自動縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個 可用區(Availability Zone) 中的 DB 例項,並在一個單獨的 可用區(Availability Zone) 中建立多個已讀複製件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #282

**題目**
一家公司執行一個網路應用程式,在一個VPC的私人子網中部署在Amazon EC2上。 覆蓋公共子網的應用程式負載平衡器(Application Load Balancer)(ALB)將網路流量導向EC2例項. 該公司希望實施新的安全措施,限制從ALB到EC2的入境交通,同時阻止EC2的私人子網內外的任何其他來源的進入。 哪種解決辦法能滿足這些要求?

**選項**
- A. 在路由表中配置一條路由,引導從網際網路到EC2例項的私人IP地址的流量.
- B. 為 EC2 例項配置 安全群組(security group) ,只允許 ALB 的 安全群組(security group) 流量。
- C. 將 EC2 例項移至公共子網。 給予EC2例項一組彈性IP地址.
- D. 配置 ALB 的 安全群組(security group) 允許任何埠的任何 TCP 流量。

**答案**
C


**詳解**
正確答案是 **C**。
- C：將 EC2 例項移至公共子網。 給予EC2例項一組彈性IP地址。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在路由表中配置一條路由,引導從網際網路到EC2例項的私人IP地址的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 EC2 例項配置 安全群組(security group) ,只允許 ALB 的 安全群組(security group) 流量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 ALB 的 安全群組(security group) 允許任何埠的任何 TCP 流量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #283

**題目**
一家研究公司透過模擬應用和視覺化應用進行實驗。 模擬應用程式執行在Linux上,並將中間資料輸出給每5分鐘共享一次NFS. 視覺化應用程式是Windows桌面應用程式,顯示模擬輸出,需要SMB檔案系統. 公司維護兩個同步檔案系統. 這項戰略造成資料重複和資源使用效率低下。 公司需要將應用程式遷移到AWS,而不對兩個應用程式進行程式碼修改. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將兩個應用都遷移到AWS Lambda. 建立一個 Amazon S3 桶,以便在應用程式之間交換資料.
- B. 將這兩種應用都遷移到亞馬遜彈性容器服務公司(Amazon ECS)。 配置 Amazon FSx 檔案閘道器進行儲存.
- C. 將模擬應用移到 Linux Amazon EC2 例項中. 將視覺化應用程式遷移到 Windows EC2 例項。 配置 Amazon 簡單佇列服務(Amazon SQS)在應用程式之間交換資料.
- D. 將模擬應用移到 Linux Amazon EC2 例項中. 將視覺化應用程式遷移到 Windows EC2 例項。 配置 Amazon FSx 用於 NetApp ONTAP 儲存。

**答案**
D


**詳解**
正確答案是 **D**。
- D：將模擬應用移到 Linux Amazon EC2 例項中. 將視覺化應用程式遷移到 Windows EC2 例項。 配置 Amazon FSx 用於 NetApp ONTAP 儲存 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將兩個應用都遷移到AWS Lambda. 建立一個 Amazon S3 桶,以便在應用程式之間交換資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將這兩種應用都遷移到亞馬遜彈性容器服務公司(Amazon ECS)。 配置 Amazon FSx 檔案閘道器進行儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將模擬應用移到 Linux Amazon EC2 例項中. 將視覺化應用程式遷移到 Windows EC2 例項。 配置 Amazon 簡單佇列服務(Amazon SQS)在應用程式之間交換資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #284

**題目**
作為預算規劃的一部分,管理層需要使用者列出的AWS計費專案的報告. 這些資料將用於編制部門預算。 解決方案設計師需要確定獲取本報告資訊的最有效方式。 哪種解決辦法符合這些要求?

**選項**
- A. 使用 Amazon Athena 執行查詢以生成報告。
- B. 在 Cost Explorer 中建立報告並下載報告。
- C. 從計費儀表板上獲取帳單細節並下載帳單.
- D. 修改 AWS 預算中的成本預算,以提醒使用 Amazon Simple 電子郵件服務(Amazon SES).

**答案**
B


**詳解**
正確答案是 **B**。
- B：在 Cost Explorer 中建立報告並下載報告。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon Athena 執行查詢以生成報告 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：從計費儀表板上獲取帳單細節並下載帳單。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改 AWS 預算中的成本預算,以提醒使用 Amazon Simple 電子郵件服務(Amazon SES)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #285

**題目**
一個公司透過使用Amazon S3託管其靜態網站. 公司希望在其網頁上新增聯絡表. 聯絡表將有動態伺服器側元件供使用者輸入自己的名字,電子郵件地址,電話號碼,以及使用者訊息. 該公司預計每月的現場存取不到100次。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在亞馬遜彈性容器服務(Amazon ECS)中主機為動態聯絡表頁. 建立亞馬遜簡易電子郵件服務(Amazon SES),以連線到任何第三方電子郵件提供者.
- B. 建立一個帶有AWS Lambda後端的Amazon API Gateway端點,呼叫 Amazon SES 發送電子郵件.
- C. 透過部署Amazon Lightsail,將靜態網頁轉換為動態. 使用客戶端指令碼構建聯絡人表單. 將窗體與Amazon WorkMail整合.
- D. 建立 t2.micro Amazon EC2 例項。 部署一個 LAMP(Linux, Apache, MySQL, PHP/Perl/ Python) 堆疊來託管網頁。 使用客戶端指令碼構建聯絡人表單. 將窗體與Amazon WorkMail整合.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個帶有AWS Lambda後端的Amazon API Gateway端點,呼叫 Amazon SES 發送電子郵件。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在亞馬遜彈性容器服務(Amazon ECS)中主機為動態聯絡表頁. 建立亞馬遜簡易電子郵件服務(Amazon SES),以連線到任何第三方電子郵件提供者。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過部署Amazon Lightsail,將靜態網頁轉換為動態. 使用客戶端指令碼構建聯絡人表單. 將窗體與Amazon WorkMail整合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 t2.micro Amazon EC2 例項。 部署一個 LAMP(Linux, Apache, MySQL, PHP/Perl/ Python) 堆疊來託管網頁。 使用客戶端指令碼構建聯絡人表單. 將窗體與Amazon WorkMail整合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #286

**題目**
一家公司有一個靜態網站,在Amazon CloudFront上主機位於Amazon S3前. 靜態網站使用資料庫(database)後端. 公司指出,網站不會重新更新網站Git儲存處的更新。 該公司檢查了Git倉庫和Amazon S3之間的連續整合和連續交付(CI/CD)管道. 該公司核實網路使用者配置適當,CI/CD管道正在傳送顯示成功部署的資訊。 解決方案架構師需要實施一個在網站上顯示更新的解決方案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 增加一個應用程式負載平衡器(Application Load Balancer).
- B. 在網路應用程式的資料庫(database)層中加入Redis或Memcached的Amazon ElastiCache.
- C. 無效 CloudFront 快取。
- D. 使用AWS Certificate Manager(ACM)驗證網站的SSL憑證.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在網路應用程式的資料庫(database)層中加入Redis或Memcached的Amazon ElastiCache。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：增加一個應用程式負載平衡器(Application Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：無效 CloudFront 快取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Certificate Manager(ACM)驗證網站的SSL憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #287

**題目**
一個公司想將一個基於Windows的應用程式從房地遷移到AWS雲. 該應用程式有三個層次:一個應用層次,一個業務層次,以及一個帶有Microsoft SQL Server的資料庫(database)層次. 公司希望使用SQL Server的具體功能,如本土備份和資料質量服務. 公司還需要在各層級之間共享處理檔案. 解決方案架構師應如何設計架構以滿足這些要求?

**選項**
- A. 在 Amazon EC2 例項上託管所有三個級別。 使用 Amazon FSx 檔案閘道器在等級間共享檔案.
- B. 在 Amazon EC2 例項上託管所有三個級別。 使用 Amazon FSx 用於Windows 檔案伺服器,在等級之間共享檔案.
- C. 在 Amazon EC2 例項中主機為應用程式級別和商業級別。 在Amazon RDS上託管資料庫(database)級. 使用 Amazon 彈性檔案系統(Amazon EFS)在等級之間共享檔案.
- D. 在 Amazon EC2 例項中主機為應用程式級別和商業級別。 在Amazon RDS上託管資料庫(database)級. 使用IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS) 的磁碟區,用於各層之間的檔案共享.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在 Amazon EC2 例項上託管所有三個級別。 使用 Amazon FSx 用於Windows 檔案伺服器,在等級之間共享檔案。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 Amazon EC2 例項上託管所有三個級別。 使用 Amazon FSx 檔案閘道器在等級間共享檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Amazon EC2 例項中主機為應用程式級別和商業級別。 在Amazon RDS上託管資料庫(database)級. 使用 Amazon 彈性檔案系統(Amazon EFS)在等級之間共享檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Amazon EC2 例項中主機為應用程式級別和商業級別。 在Amazon RDS上託管資料庫(database)級. 使用IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS) 的磁碟區,用於各層之間的檔案共享。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #288

**題目**
一個公司正在將一個基於Linux的網路伺服器組遷移到AWS. 網路伺服器必須存取共享檔案儲存中的檔案以獲取一些內容. 公司不得對申請作任何修改. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立一個可存取網路伺服器的Amazon S3標準桶.
- B. 配置一個 Amazon CloudFront 分散式,以 Amazon S3 桶作為來源.
- C. 建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 在所有網路伺服器上掛載 EFS 檔案系統。
- D. 配置通用 SSD(gp3) Amazon Elastic Block Store(Amazon EBS) 磁碟區. 將 EBS 捲上載到所有網路伺服器。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個可存取網路伺服器的Amazon S3標準桶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置一個 Amazon CloudFront 分散式,以 Amazon S3 桶作為來源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 在所有網路伺服器上掛載 EFS 檔案系統 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置通用 SSD(gp3) Amazon Elastic Block Store(Amazon EBS) 磁碟區. 將 EBS 捲上載到所有網路伺服器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #289

**題目**
一個公司有一個AWS Lambda功能,需要讀取位於同一個AWS帳戶的Amazon S3桶. 哪種解決辦法能以安全的方式滿足這些要求?

**選項**
- A. 應用S3 儲存桶政策(bucket policy),允許讀取S3 儲存桶(S3 bucket)。
- B. 將IAM角色應用到Lambda函式中. 將 IAM 政策(IAM policy) 應用到角色中,允許讀取 S3 儲存桶(S3 bucket)。
- C. 在 Lambda 函式的程式碼中嵌入一個存取金鑰和一個秘密金鑰,以授予閱讀存取S3 儲存桶(S3 bucket)所需的IAM許可權.
- D. 將IAM角色應用到Lambda函式中. 將 IAM 政策(IAM policy) 應用到角色上, 允許讀取帳戶中的所有 S3 桶。

**答案**
D


**詳解**
正確答案是 **D**。
- D：將IAM角色應用到Lambda函式中. 將 IAM 政策(IAM policy) 應用到角色上, 允許讀取帳戶中的所有 S3 桶 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：應用S3 儲存桶政策(bucket policy),允許讀取S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將IAM角色應用到Lambda函式中. 將 IAM 政策(IAM policy) 應用到角色中,允許讀取 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Lambda 函式的程式碼中嵌入一個存取金鑰和一個秘密金鑰,以授予閱讀存取S3 儲存桶(S3 bucket)所需的IAM許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #290

**題目**
一個公司在多個Amazon EC2例項上託管一個網路應用程式. EC2的情況是在Auto Scaling 群組(Auto Scaling group)中,根據使用者需求進行規模調整。 公司希望在不做出長期承諾的情況下最佳化成本節約. 一個解決方案設計師應該建議哪一種EC2採購方案滿足這些要求?

**選項**
- A. 專案
- B. 僅待決例項
- C. 現場例項和現場例項的組合
- D. 現場案例和保留案例的混合

**答案**
B


**詳解**
正確答案是 **B**。
- B：僅待決例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：專案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：現場例項和現場例項的組合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：現場案例和保留案例的混合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #291

**題目**
一家媒體公司使用Amazon CloudFront作為公開流媒體內容. 公司希望透過控制誰可以存取來保障Amazon S3託管的影片內容. 公司部分使用者使用不支援cookie的自定義HTTP客戶端. 公司的一些使用者無法更改他們用於存取的硬碼URL. 哪些服務或方法將滿足這些要求,對使用者的LEAST影響?(選二.

**選項**
- A. 已簽名的餅乾
- B. 已簽名的 URL
- C. AWS 應用同步
- D. JSON Web Token(JWT)(日本語).
- E. AWS Secrets Manager.

**答案**
C,E



**詳解**
正確答案是 **C, E**。
- C：AWS 應用同步。此選項符合題目條件，能有效滿足核心需求。
- E：AWS Secrets Manager。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：已簽名的餅乾。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：已簽名的 URL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：JSON Web Token(JWT)(日本語)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #292

**題目**
一家公司正在準備一個新的資料平臺,它將從多個來源吸收實時流資料。 公司在將資料寫入Amazon S3之前需要轉換資料. 公司需要有能力使用SQL查詢轉換後的資料. 哪些解決辦法能滿足這些要求?(選二.

**選項**
- A. 使用 Amazon Kinesis 資料流來流出資料. 使用Amazon Kinesis資料分析器來轉換資料. 使用Amazon Kinesis Data Firehose將資料寫入Amazon S3. 使用Amazon Athena從Amazon S3查詢轉換後的資料.
- B. 使用Amazon Managed Streaming為Apache Kafka(Amazon MSK)傳輸資料. 使用AWS Glue轉換資料,並將資料寫入Amazon S3. 使用Amazon Athena從Amazon S3查詢轉換後的資料.
- C. 使用 AWS 資料庫(Database) 遷移服務(AWS DS)來攝取資料. 使用Amazon EMR轉換資料,並將資料寫入Amazon S3. 使用Amazon Athena從Amazon S3查詢轉換後的資料.
- D. 使用Amazon Managed Streaming為Apache Kafka(Amazon MSK)傳輸資料. 使用Amazon Kinesis資料分析儀轉換資料,並將資料寫入Amazon S3. 使用 Amazon RDS 查詢編輯器查詢從 Amazon S3 轉換的資料.
- E. 使用 Amazon Kinesis 資料流來流出資料. 使用AWS Glue轉換資料. 使用Amazon Kinesis Data Firehose將資料寫入Amazon S3. 使用 Amazon RDS 查詢編輯器查詢從 Amazon S3 轉換的資料.

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：使用 Amazon Kinesis 資料流來流出資料. 使用Amazon Kinesis資料分析器來轉換資料. 使用Amazon Kinesis Data Firehose將資料寫入Amazon S3. 使用Amazon Athena從Amazon S3查詢轉換後的資料。此選項符合題目條件，能有效滿足核心需求。
- B：使用Amazon Managed Streaming為Apache Kafka(Amazon MSK)傳輸資料. 使用AWS Glue轉換資料,並將資料寫入Amazon S3. 使用Amazon Athena從Amazon S3查詢轉換後的資料。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：使用 AWS 資料庫(Database) 遷移服務(AWS DS)來攝取資料. 使用Amazon EMR轉換資料,並將資料寫入Amazon S3. 使用Amazon Athena從Amazon S3查詢轉換後的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon Managed Streaming為Apache Kafka(Amazon MSK)傳輸資料. 使用Amazon Kinesis資料分析儀轉換資料,並將資料寫入Amazon S3. 使用 Amazon RDS 查詢編輯器查詢從 Amazon S3 轉換的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用 Amazon Kinesis 資料流來流出資料. 使用AWS Glue轉換資料. 使用Amazon Kinesis Data Firehose將資料寫入Amazon S3. 使用 Amazon RDS 查詢編輯器查詢從 Amazon S3 轉換的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #293

**題目**
一家公司擁有一個已到生命末期的備份設備 (appliance)。 公司希望使用AWS作為新的備份(backup)解決方案的一部分,並希望在AWS上備份的同時保持本地對所有資料的存取. 公司希望確保AWS上備份的資料自動和安全地轉移. 哪種解決辦法符合這些要求?

**選項**
- A. 使用AWS Snowball將資料從presimes解析到Amazon S3. 配置安裝 Snowball S3 端點的預設系統,以提供本地存取資料的機會。
- B. 使用AWS Snowball Edge將資料從presimes解析到Amazon S3. 使用Snowball Edge檔案介面,提供本地存取資料的前提系統.
- C. 使用AWS Storage Gateway並配置快取的磁碟區閘道器. 在房地執行儲存閘道器軟體應用程式,並配置一定比例的資料在當地快取. 掛載閘道器儲存卷以提供本地對資料的存取.
- D. 使用AWS Storage Gateway並配置一個儲存的磁碟區閘道器. 在房地上執行儲存閘道器軟體應用程式,並將閘道器儲存量對映到前提儲存. 掛載閘道器儲存卷以提供本地對資料的存取.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用AWS Storage Gateway並配置一個儲存的磁碟區閘道器. 在房地上執行儲存閘道器軟體應用程式,並將閘道器儲存量對映到前提儲存. 掛載閘道器儲存卷以提供本地對資料的存取。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS Snowball將資料從presimes解析到Amazon S3. 配置安裝 Snowball S3 端點的預設系統,以提供本地存取資料的機會。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用AWS Snowball Edge將資料從presimes解析到Amazon S3. 使用Snowball Edge檔案介面,提供本地存取資料的前提系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Storage Gateway並配置快取的磁碟區閘道器. 在房地執行儲存閘道器軟體應用程式,並配置一定比例的資料在當地快取. 掛載閘道器儲存卷以提供本地對資料的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #294

**題目**
在 Amazon EC2 例項中託管的應用程式需要存取 Amazon S3 桶。 交通不能穿過網際網路。 解決方案設計師應如何配置存取許可權以滿足這些要求?

**選項**
- A. 使用 Amazon Route 53 建立私有主機區。
- B. 在VPC中為Amazon S3設定閘道器VPC 端點(VPC endpoint).
- C. 配置 EC2 例項以使用 NAT 閘道器存取 S3 儲存桶(S3 bucket)。
- D. 在VPC和S3 儲存桶(S3 bucket)之間建立AWS站點對站點VPN連線.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在VPC中為Amazon S3設定閘道器VPC 端點(VPC endpoint)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon Route 53 建立私有主機區 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 EC2 例項以使用 NAT 閘道器存取 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在VPC和S3 儲存桶(S3 bucket)之間建立AWS站點對站點VPN連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #295

**題目**
一家電子商務公司在AWS雲中儲存了幾兆位元組的客戶資料. 資料包含個人可識別資訊(PII). 公司希望在三個應用中使用資料. 其中只有一個應用程式需要處理PII. 在另外兩個應用程式處理資料之前,必須刪除PII。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將資料儲存在 Amazon DynamoDB 表格中。 建立代理應用程式層,以擷取和處理每個應用程式要求的資料.
- B. 在Amazon S3桶中儲存資料. 透過使用S3 Object Lambda處理和轉換資料,然後將資料返回請求的應用程式.
- C. 處理資料,並將轉換後的資料儲存在三個獨立的Amazon S3桶中,以便每個應用程式都有自己的自定義資料集. 將每個應用程式指向各自的S3 儲存桶(S3 bucket)。
- D. 處理資料,並將轉換後的資料儲存在三個獨立的Amazon DynamoDB表格中,以便每個應用程式都有自己的自定義資料集. 將每個應用程式對準各自的DynamoDB表格.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在Amazon S3桶中儲存資料. 透過使用S3 Object Lambda處理和轉換資料,然後將資料返回請求的應用程式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料儲存在 Amazon DynamoDB 表格中。 建立代理應用程式層,以擷取和處理每個應用程式要求的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：處理資料,並將轉換後的資料儲存在三個獨立的Amazon S3桶中,以便每個應用程式都有自己的自定義資料集. 將每個應用程式指向各自的S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：處理資料,並將轉換後的資料儲存在三個獨立的Amazon DynamoDB表格中,以便每個應用程式都有自己的自定義資料集. 將每個應用程式對準各自的DynamoDB表格。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #296

**題目**
一個開發小組推出了一個新的應用程式,在開發中的VPC內Amazon EC2例項上託管。 一個解決方案架構師需要在同一帳戶中建立一個新的VPC. 新的VPC將與發展VPC對等. 用於開發的VPC CIDR區塊為192.168.0.0/24. 解決方案架構師需要為新的VPC建立一個CIDR塊. CIDR塊必須適用於VPC與開發VPC的對等連線. 符合這些要求的小型CIDR區塊是什麼?

**選項**
- A. 10.0.1.0/32(中文(簡體) ).
- B. 第192.168.0.0/24號來文
- C. 192.168.1.0/32(中文(簡體) ).
- D. 10.01.0/24(中文(簡體) ).

**答案**
B


**詳解**
正確答案是 **B**。
- B：第192.168.0.0/24號來文。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：10.0.1.0/32(中文(簡體) )。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：192.168.1.0/32(中文(簡體) )。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：10.01.0/24(中文(簡體) )。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #297

**題目**
一家公司在5個Amazon EC2 執行個體中部署了一個應用程式。 應用程式負載平衡器(Application Load Balancer)(ALB)透過使用一個目標群體向例項分配流量。 每種情況的平均CPU使用率大多低於10%,偶爾會激增到65%。 一個解決方案架構師需要執行一個解決方案,實現應用程式可擴展性(scalability)的自動化. 解決方案必須最佳化架構的成本,必須確保應用程式在發生激增時有足夠的CPU資源. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 Amazon CloudWatch 提醒, 當 CPUUtili化 度量小於 20% 時進入 ALARM 狀態。 建立 Cloud Watch 提醒引用的 AWS Lambda 函式來終止 ALB 目標組中的 EC2 例之一。
- B. 建立 EC2 Auto Scaling 群組(Auto Scaling group). 選擇現有的ALB為負載平衡器(load balancer),現有的目標群體為目標群體. 設定基於ASGAverageCPUtili化度量衡的目標跟蹤縮放政策. 設定最小例項為2個,預期容量為3個,最大例項為6個,目標值為50%。 在Auto Scaling 群組(Auto Scaling group)中新增EC2例項.
- C. 建立 EC2 Auto Scaling 群組(Auto Scaling group). 選擇現有的ALB為負載平衡器(load balancer),現有的目標群體為目標群體. 設定最小例項為2個,預期容量為3個,最大例項為6個. 在Auto Scaling 群組(Auto Scaling group)中新增EC2例項.
- D. 建立兩個 Amazon CloudWatch 提醒。 配置第一個進入 ALARM 狀態的 Cloud Watch 提醒, 當平均 CPUUtili化 度量器低於 20% 時。 配置第二個 CloudWatch 提醒, 當平均 CPUUtili化 母性超過 50% 時進入 ALARM 狀態。 配置提醒以釋出到 Amazon 簡單通知服務(Amazon SNS) 主題以傳送電子郵件訊息。 收到訊息後, 登入以減少或增加正在執行的 EC2 例項。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立兩個 Amazon CloudWatch 提醒。 配置第一個進入 ALARM 狀態的 Cloud Watch 提醒, 當平均 CPUUtili化 度量器低於 20% 時。 配置第二個 CloudWatch 提醒, 當平均 CPUUtili化 母性超過 50% 時進入 ALARM 狀態。 配置提醒以釋出到 Amazon 簡單通知服務(Amazon SNS) 主題以傳送電子郵件訊息。 收到訊息後, 登入以減少或增加正在執行的 EC2 例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon CloudWatch 提醒, 當 CPUUtili化 度量小於 20% 時進入 ALARM 狀態。 建立 Cloud Watch 提醒引用的 AWS Lambda 函式來終止 ALB 目標組中的 EC2 例之一 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 EC2 Auto Scaling 群組(Auto Scaling group). 選擇現有的ALB為負載平衡器(load balancer),現有的目標群體為目標群體. 設定基於ASGAverageCPUtili化度量衡的目標跟蹤縮放政策. 設定最小例項為2個,預期容量為3個,最大例項為6個,目標值為50%。 在Auto Scaling 群組(Auto Scaling group)中新增EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 EC2 Auto Scaling 群組(Auto Scaling group). 選擇現有的ALB為負載平衡器(load balancer),現有的目標群體為目標群體. 設定最小例項為2個,預期容量為3個,最大例項為6個. 在Auto Scaling 群組(Auto Scaling group)中新增EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #298

**題目**
一家公司正在Amazon EC2公司執行一個關鍵業務應用程式,其背後是應用程式負載平衡器(Application Load Balancer)。 EC2例項在Auto Scaling 群組(Auto Scaling group)中執行,並存取Amazon RDS DB例項. 該設計沒有透過業務審查,因為EC2例項和DB例項都位於一個單一的可用區(Availability Zone)中. 一個解決方案架構師必須更新設計,使用第二個可用區(Availability Zone). 哪種解決辦法可以使應用程式非常容易獲得?

**選項**
- A. 每個可用區(Availability Zone)中提供一個子網. 配置 Auto Scaling 群組(Auto Scaling group) 以在 可用區(Availability Zones) 中分配 EC2 例項。 配置連線每個網路的 DB 例項。
- B. 提供兩個橫跨可用區(Availability Zones)的子網。 配置 Auto Scaling 群組(Auto Scaling group) 以在 可用區(Availability Zones) 中分配 EC2 例項。 配置連線每個網路的 DB 例項。
- C. 每個可用區(Availability Zone)中提供一個子網. 配置 Auto Scaling 群組(Auto Scaling group) 以在 可用區(Availability Zones) 中分配 EC2 例項。 為多AZ部署配置 DB 例項。
- D. 提供一個覆蓋可用區(Availability Zones)的子網。 配置 Auto Scaling 群組(Auto Scaling group) 以在 可用區(Availability Zones) 中分配 EC2 例項。 為多AZ部署配置 DB 例項。

**答案**
D


**詳解**
正確答案是 **D**。
- D：提供一個覆蓋可用區(Availability Zones)的子網。 配置 Auto Scaling 群組(Auto Scaling group) 以在 可用區(Availability Zones) 中分配 EC2 例項。 為多AZ部署配置 DB 例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：每個可用區(Availability Zone)中提供一個子網. 配置 Auto Scaling 群組(Auto Scaling group) 以在 可用區(Availability Zones) 中分配 EC2 例項。 配置連線每個網路的 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：提供兩個橫跨可用區(Availability Zones)的子網。 配置 Auto Scaling 群組(Auto Scaling group) 以在 可用區(Availability Zones) 中分配 EC2 例項。 配置連線每個網路的 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：每個可用區(Availability Zone)中提供一個子網. 配置 Auto Scaling 群組(Auto Scaling group) 以在 可用區(Availability Zones) 中分配 EC2 例項。 為多AZ部署配置 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #299

**題目**
一個研究實驗室需要處理大約8TB的資料. 實驗室需要分毫秒延遲,儲存子系統至少需要6GBps的吞吐量(throughput). 執行 Amazon Linux 的數百個 Amazon EC2 例會分發和處理資料. 哪種解決辦法符合業績要求?

**選項**
- A. 為NetApp ONTAP檔案系統建立 Amazon FSx. 符合每卷的分級政策。 將原始資料匯入檔案系統。 在EC2例項上掛載絲狀系統。
- B. 建立 Amazon S3 桶儲存原始資料。 為Lustre檔案系統建立一個使用持久SSD儲存的Amazon FSx. 選擇從Amazon S3匯入資料並匯出資料的選項。 在 EC2 例項上掛載檔案系統。
- C. 建立 Amazon S3 桶儲存原始資料。 為Lustre檔案系統建立一個使用持續HDD儲存的Amazon FSx. 選擇從Amazon S3匯入資料並匯出資料的選項。 在 EC2 例項上掛載檔案系統。
- D. 為NetApp ONTAP檔案系統建立 Amazon FSx. 將每卷的分層策略設定為無線。 將原始資料匯入檔案系統。 在 EC2 例項上掛載檔案系統。

**答案**
D


**詳解**
正確答案是 **D**。
- D：為NetApp ONTAP檔案系統建立 Amazon FSx. 將每卷的分層策略設定為無線。 將原始資料匯入檔案系統。 在 EC2 例項上掛載檔案系統 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為NetApp ONTAP檔案系統建立 Amazon FSx. 符合每卷的分級政策。 將原始資料匯入檔案系統。 在EC2例項上掛載絲狀系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon S3 桶儲存原始資料。 為Lustre檔案系統建立一個使用持久SSD儲存的Amazon FSx. 選擇從Amazon S3匯入資料並匯出資料的選項。 在 EC2 例項上掛載檔案系統 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon S3 桶儲存原始資料。 為Lustre檔案系統建立一個使用持續HDD儲存的Amazon FSx. 選擇從Amazon S3匯入資料並匯出資料的選項。 在 EC2 例項上掛載檔案系統 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #300

**題目**
由於硬體容量的限制,一家公司需要將遺留的應用程式從一個proposes資料中心遷移到AWS雲. 申請每天24小時,每週7天。 該應用程式的資料庫(database)儲存量隨時間而繼續增長. 一個解決方案設計師應該做什麼才能以成本效益高的方式滿足這些要求?

**選項**
- A. 將應用層遷移到 Amazon EC2 Spotecles. 將資料儲存層遷移到Amazon S3.
- B. 將應用層遷移到 Amazon EC2 保留例項。 將資料儲存層遷移到 Amazon RDS On-Demand Incents.
- C. 將應用層遷移到 Amazon EC2 保留例項。 將資料儲存層遷移到 Amazon Aurora 保留例項。
- D. 將應用程式層遷移到 Amazon EC2 On-Demand Incents。 將資料儲存層遷移到 Amazon RDS 保留例項。

**答案**
C


**詳解**
正確答案是 **C**。
- C：將應用層遷移到 Amazon EC2 保留例項。 將資料儲存層遷移到 Amazon Aurora 保留例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將應用層遷移到 Amazon EC2 Spotecles. 將資料儲存層遷移到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將應用層遷移到 Amazon EC2 保留例項。 將資料儲存層遷移到 Amazon RDS On-Demand Incents。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將應用程式層遷移到 Amazon EC2 On-Demand Incents。 將資料儲存層遷移到 Amazon RDS 保留例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #301

**題目**
一個大學研究實驗室需要將30 TB的資料從一個premises Windows檔案伺服器遷移到Windows檔案伺服器的Amazon FSx. 實驗室有一個Gbps網路連結,大學中許多其他部門共享. 實驗室希望實施資料遷移服務,最大限度地提高資料傳輸的效能. 然而,實驗室需要能夠控制服務使用的頻寬量,以儘量減少對其他部門的影響. 資料遷移必須在今後5天內進行。 哪個AWS解決方案能滿足這些要求?

**選項**
- A. AWS 雪球
- B. Amazon FSx 檔案閘道器
- C. AWS 資料同步
- D. AWS 傳輸家族

**答案**
C


**詳解**
正確答案是 **C**。
- C：AWS 資料同步。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：AWS 雪球。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：Amazon FSx 檔案閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：AWS 傳輸家族。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #302

**題目**
一家公司希望建立移動應用程式,允許使用者在移動裝置上流傳慢動作影片片段. 目前,該應用程式將影片片段捕獲,並以原始格式將影片片段上傳到Amazon S3桶中. 應用程式直接從S3 儲存桶(S3 bucket)上檢索這些影片片段. 然而,這些影片的原始格式很大。 使用者在移動裝置上遇到緩衝和回放的問題. 公司希望實施解決方案,以最大限度地提高該應用的效能和可擴展性(scalability),同時將營運開銷(operational overhead)最小化. 哪些解決方案組合將滿足這些要求?(選二.

**選項**
- A. 部署Amazon CloudFront,用於內容傳送和快取.
- B. 使用AWS DataSync在其它S3桶中複製橫跨AW'S區域的影片檔案.
- C. 使用Amazon Elastic Transcoder將影片檔案轉換為更合適的格式.
- D. 在本地區部署Amazon EC2自動密封組,以交付內容和快取。
- E. 在Amazon EC2例項中部署Auto Scaling 群組(Auto Scaling group),將影片檔案轉換為更適當的格式。

**答案**
A


**詳解**
正確答案是 **A**。
- A：部署Amazon CloudFront,用於內容傳送和快取。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS DataSync在其它S3桶中複製橫跨AW'S區域的影片檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Elastic Transcoder將影片檔案轉換為更合適的格式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在本地區部署Amazon EC2自動密封組,以交付內容和快取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #303

**題目**
一家公司正在啟動在亞馬遜彈性容器服務叢集(Amazon ECS)上部署的新應用程式,並正在使用Fargate發射型進行ECS任務。 該公司是監控(monitoring) CPU和記憶體使用,因為它期望在應用程式啟動時能有很高的流量. 然而,公司希望在利用率下降時降低成本. 一個解決方案設計師應該推薦什麼?

**選項**
- A. 使用 Amazon EC2 自動縮放以根據先前的流量模式在特定時期進行縮放.
- B. 使用一個 AWS Lambda 函式來根據觸發 Amazon CloudWatch 警報的公制違章來縮放 Amazon ECS.
- C. 使用 Amazon EC2 自動縮放在ECS 度量衡違反觸發 Amazon CloudWatch 提醒時使用簡單的縮放策略進行縮放.
- D. 使用 AWS 應用程式自動縮放, 並帶有目標跟蹤策略, 當ECS 度量符違反觸發 Amazon CloudWatch 提醒時, 縮放。

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用 AWS 應用程式自動縮放, 並帶有目標跟蹤策略, 當ECS 度量符違反觸發 Amazon CloudWatch 提醒時, 縮放 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon EC2 自動縮放以根據先前的流量模式在特定時期進行縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用一個 AWS Lambda 函式來根據觸發 Amazon CloudWatch 警報的公制違章來縮放 Amazon ECS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon EC2 自動縮放在ECS 度量衡違反觸發 Amazon CloudWatch 提醒時使用簡單的縮放策略進行縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #304

**題目**
最近一家公司在不同的AWS 區域(Region)中建立了災難復原(disaster recovery)網站. 公司需要在兩區NFS檔案系統之間定期傳輸大量資料迴轉. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用 AWS 資料同步。
- B. 使用AWS Snowball裝置.
- C. 在Amazon EC2上設定一個SFTP伺服器.
- D. 使用AWS 資料庫(Database) 遷移服務(AWS DS).

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 AWS 資料同步 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS Snowball裝置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon EC2上設定一個SFTP伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS 資料庫(Database) 遷移服務(AWS DS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #305

**題目**
一家公司正在為AWS雲中託管的遊戲應用程式設計共享儲存解決方案. 公司需要有能力使用SMB客戶來存取資料. 解決辦法必須得到充分管理。 哪些AWS解決方案符合這些要求?

**選項**
- A. 建立一個 AWS 資料同步任務,將資料作為可掛載的檔案系統共享. 將檔案系統掛載到應用程式伺服器。
- B. 建立 Amazon EC2 Windows 例項。 安裝和配置例項上的 Windows 檔案共享角色。 連線應用程式伺服器到檔案共享。
- C. 為Windows檔案伺服器檔案系統建立Amazon FSx. 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統.
- D. 建立 Amazon S3 桶. 為應用程式指定一個IAM角色,允許進入S3 儲存桶(S3 bucket)。 S3 儲存桶(S3 bucket) 掛載到應用程式伺服器中.

**答案**
C


**詳解**
正確答案是 **C**。
- C：為Windows檔案伺服器檔案系統建立Amazon FSx. 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個 AWS 資料同步任務,將資料作為可掛載的檔案系統共享. 將檔案系統掛載到應用程式伺服器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon EC2 Windows 例項。 安裝和配置例項上的 Windows 檔案共享角色。 連線應用程式伺服器到檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon S3 桶. 為應用程式指定一個IAM角色,允許進入S3 儲存桶(S3 bucket)。 S3 儲存桶(S3 bucket) 掛載到應用程式伺服器中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #306

**題目**
一家公司希望為執行在Amazon EC2 執行個體上的延遲(latency)敏感應用程式執行一個內建的資料庫(database). 應用程式每分鐘處理10萬多個交易,需要高網路吞吐量(throughput). 一個解決方案架構師需要提供成本效益高的網路設計,將資料傳輸收費降到最低. 哪種解決辦法符合這些要求?

**選項**
- A. 在同一AWS 區域(Region)範圍內在同一可用區(Availability Zone)中發射所有EC2例項. 在啟動 EC2 例項時指定一個帶有叢集策略的放置組。
- B. 在同一AWS 區域(Region)範圍內,在不同的可用區(Availability Zones)中啟動所有EC2例項. 在啟動 EC2 例項時指定帶有分割槽策略的放置組。
- C. 根據網路利用目標,在不同的可用區(Availability Zones)上部署一個Auto Scaling 群組(Auto Scaling group),啟動EC2例項.
- D. 採用Auto Scaling 群組(Auto Scaling group),並採用逐步縮放政策,在不同可用區(Availability Zones)中推出EC2例項.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在同一AWS 區域(Region)範圍內在同一可用區(Availability Zone)中發射所有EC2例項. 在啟動 EC2 例項時指定一個帶有叢集策略的放置組。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在同一AWS 區域(Region)範圍內,在不同的可用區(Availability Zones)中啟動所有EC2例項. 在啟動 EC2 例項時指定帶有分割槽策略的放置組 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：根據網路利用目標,在不同的可用區(Availability Zones)上部署一個Auto Scaling 群組(Auto Scaling group),啟動EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：採用Auto Scaling 群組(Auto Scaling group),並採用逐步縮放政策,在不同可用區(Availability Zones)中推出EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #307

**題目**
一家主要在房地執行應用伺服器的公司決定向AWS遷移。 公司希望儘量縮小其網際網路小計算機系統介面(iSCSI)在房地儲存的需求. 公司只希望其最近獲得的資料能夠在當地儲存。 公司應使用何種AWS解決方案來滿足這些要求?

**選項**
- A. Amazon S3 檔案閘道器
- B. AWS Storage Gateway 磁帶閘道器
- C. AWS Storage Gateway 卷門儲存卷
- D. AWS Storage Gateway 流閘道器快取卷

**答案**
A


**詳解**
正確答案是 **A**。
- A：Amazon S3 檔案閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：AWS Storage Gateway 磁帶閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：AWS Storage Gateway 卷門儲存卷。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：AWS Storage Gateway 流閘道器快取卷。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #308

**題目**
一家公司有多個AWS帳戶使用合併計費. 該公司為Oracle On-Demand DB例運營了數個活躍的高效能Amazon RDS,持續90天. 該公司的財務小組可以在合併的帳單帳戶和所有其他AWS帳戶中存取AWS信託顧問。 財務小組需要使用適當的AWS帳戶進入受託顧問檢查RDS的建議. 財務小組必須審查適當的受託顧問檢查,以減少資源分配費用。 財務小組應採取哪些綜合步驟來滿足這些要求?(選二.

**選項**
- A. 使用執行 RDS 例項的帳戶中的受託顧問建議。
- B. 利用受託顧問從合併帳單帳戶中提出的建議,同時看到所有RDS例項檢查。
- C. 審查受託顧問對Amazon RDS保留例項最佳化的檢查。
- D. 審查受託顧問對Amazon RDS Idle DB Events的檢查.
- E. 審查受託顧問對Amazon Redshift保留節點最佳化的檢查.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：使用執行 RDS 例項的帳戶中的受託顧問建議 。此選項符合題目條件，能有效滿足核心需求。
- C：審查受託顧問對Amazon RDS保留例項最佳化的檢查。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：利用受託顧問從合併帳單帳戶中提出的建議,同時看到所有RDS例項檢查。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：審查受託顧問對Amazon RDS Idle DB Events的檢查。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：審查受託顧問對Amazon Redshift保留節點最佳化的檢查。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #309

**題目**
一個解決方案架構師需要最佳化儲存成本. 解決方案架構師必須識別任何不再存取或很少存取的Amazon S3桶. 哪個解決方案能用LEAST 營運開銷(operational overhead)來實現這一目標?

**選項**
- A. 透過使用S3 Storage Lens儀表板進行高階活動度量儀分析桶進入模式.
- B. 透過使用AWS管理控制檯中的S3儀表板來分析桶進入模式.
- C. 為桶開啟Amazon CloudWatch BucketSizeBytes的度量衡. 透過使用Amazon Athena的度量資料來分析水桶存取模式.
- D. 為 S3 物件 監控(monitoring) 開啟 AWS CloudTrail。 透過使用與Amazon CloudWatch Logs整合的CloudTrail日誌來分析水桶存取模式.

**答案**
D


**詳解**
正確答案是 **D**。
- D：為 S3 物件 監控(monitoring) 開啟 AWS CloudTrail。 透過使用與Amazon CloudWatch Logs整合的CloudTrail日誌來分析水桶存取模式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過使用S3 Storage Lens儀表板進行高階活動度量儀分析桶進入模式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：透過使用AWS管理控制檯中的S3儀表板來分析桶進入模式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為桶開啟Amazon CloudWatch BucketSizeBytes的度量衡. 透過使用Amazon Athena的度量資料來分析水桶存取模式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #310

**題目**
一家公司向從事人工智慧和機器學習研究的客戶出售資料集(AI/ML). 資料集是大型的,格式化的檔案,存放於我們東-1 區域(Region)的Amazon S3桶中. 公司主機是客戶購買特定資料集存取許可權的網路應用程式. 網路應用程式部署在應用程式負載平衡器(Application Load Balancer)後面的多個Amazon EC2例項上。 購買後,客戶收到一個S3簽名的URL,允許存取檔案. 客戶分佈於北美和歐洲. 公司希望降低與資料傳輸相關的成本,並希望保持或提高效能. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 在現有的S3 儲存桶(S3 bucket)上配置S3 Transfer Acceleration. 直接客戶向S3 Transfer Acceleration端點提出請求. 繼續為存取控制(access control)使用S3簽名的URL.
- B. 以現有的S3 儲存桶(S3 bucket)作為原產地,部署Amazon CloudFront分佈. 直接客戶向CloudFront URL請求. 切換到CloudFront為存取控制(access control)簽名的URL.
- C. 在eu-Central-1 區域(Region)中設定第二架S3 儲存桶(S3 bucket),在水桶之間安裝S3 Cross-Region Replication. 直接客戶向最近的區域(Region)請求. 繼續為存取控制(access control)使用S3簽名的URL.
- D. 修改網路應用程式,使資料集流到終端使用者。 配置網路應用程式讀取現有S3 儲存桶(S3 bucket)的資料. 在應用程式中直接執行存取控制(access control).

**答案**
B


**詳解**
正確答案是 **B**。
- B：以現有的S3 儲存桶(S3 bucket)作為原產地,部署Amazon CloudFront分佈. 直接客戶向CloudFront URL請求. 切換到CloudFront為存取控制(access control)簽名的URL。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在現有的S3 儲存桶(S3 bucket)上配置S3 Transfer Acceleration. 直接客戶向S3 Transfer Acceleration端點提出請求. 繼續為存取控制(access control)使用S3簽名的URL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在eu-Central-1 區域(Region)中設定第二架S3 儲存桶(S3 bucket),在水桶之間安裝S3 Cross-Region Replication. 直接客戶向最近的區域(Region)請求. 繼續為存取控制(access control)使用S3簽名的URL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改網路應用程式,使資料集流到終端使用者。 配置網路應用程式讀取現有S3 儲存桶(S3 bucket)的資料. 在應用程式中直接執行存取控制(access control)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #311

**題目**
一個公司正在利用AWS設計一個網路應用程式,處理保險報價. 使用者會請求從應用程式引用引文. 引文必須按引文型別分開,必須在24小時內回覆,不得丟失. 解決辦法必須最大限度地提高業務效益,而且必須儘量減少維持費用。 哪種解決辦法符合這些要求?

**選項**
- A. 基於引用型別建立多個 Amazon Kinesis 資料流. 配置網路應用程式,將訊息傳送給適當的資料流。 配置每個後端組的應用程式伺服器,以使用 Kinesis 客戶端庫(KCL) 從自己的資料流中集合訊息.
- B. 為每個引用型別建立 AWS Lambda 函式和一個亞馬遜簡單通知服務(Amazon SNS)主題. 訂閱 Lambda 函式為與之相關的 SNS 主題. 配置用於釋出 SNS 相關主題引用請求的應用程式。
- C. 建立單一的亞馬遜簡單通知服務(Amazon SNS)主題. 訂閱亞馬遜簡單佇列服務(Amazon SQS) SNS主題的佇列. 配置 SNS 訊息過濾, 以根據引用型別釋出訊息到合適的 SQS 佇列。 配置每個後端應用程式伺服器以使用自己的SQS佇列.
- D. 基於引文型別建立多個Amazon Kinesis Data Firehose送電流,將資料流送至AWSERV008叢集. 配置應用程式以傳送訊息到合適的傳送流。 配置每個後端組的應用程式伺服器,以搜尋OpenSearch Service發來的訊息並相應處理.

**答案**
D


**詳解**
正確答案是 **D**。
- D：基於引文型別建立多個Amazon Kinesis Data Firehose送電流,將資料流送至AWSERV008叢集. 配置應用程式以傳送訊息到合適的傳送流。 配置每個後端組的應用程式伺服器,以搜尋OpenSearch Service發來的訊息並相應處理。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：基於引用型別建立多個 Amazon Kinesis 資料流. 配置網路應用程式,將訊息傳送給適當的資料流。 配置每個後端組的應用程式伺服器,以使用 Kinesis 客戶端庫(KCL) 從自己的資料流中集合訊息。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為每個引用型別建立 AWS Lambda 函式和一個亞馬遜簡單通知服務(Amazon SNS)主題. 訂閱 Lambda 函式為與之相關的 SNS 主題. 配置用於釋出 SNS 相關主題引用請求的應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立單一的亞馬遜簡單通知服務(Amazon SNS)主題. 訂閱亞馬遜簡單佇列服務(Amazon SQS) SNS主題的佇列. 配置 SNS 訊息過濾, 以根據引用型別釋出訊息到合適的 SQS 佇列。 配置每個後端應用程式伺服器以使用自己的SQS佇列。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #312

**題目**
一家公司有一個執行在幾個Amazon EC2例項上的應用程式。 每個EC2例項都有多個亞馬遜彈性塊儲存器(Amazon EBS)的資料卷附在其上. 應用程式的EC2 例項配置和資料需要夜間備份。 該應用程式還需要在不同的AWS 區域(Region)中可回收. 哪種解決辦法能以業務效率高的方式滿足這些要求?

**選項**
- A. 寫一個 AWS Lambda 函式,將應用程式的 EBS 磁碟區的夜快照排程,並將快照複製到不同的 區域(Region)。
- B. 透過使用AWS Backup進行夜間備份來建立備份(backup)計劃. 複製備份到另一個區域(Region). 新增應用程式的EC2 例項為資源。
- C. 透過使用AWS Backup進行夜間備份來建立備份(backup)計劃. 複製備份到另一個區域(Region). 將應用程式的 EBS 磁碟區新增為資源。
- D. 寫一個 AWS Lambda 函式,將應用程式的 EBS 磁碟區的夜快照排程,並將快照複製到不同的 可用區(Availability Zone)。

**答案**
C


**詳解**
正確答案是 **C**。
- C：透過使用AWS Backup進行夜間備份來建立備份(backup)計劃. 複製備份到另一個區域(Region). 將應用程式的 EBS 磁碟區新增為資源 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：寫一個 AWS Lambda 函式,將應用程式的 EBS 磁碟區的夜快照排程,並將快照複製到不同的 區域(Region) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：透過使用AWS Backup進行夜間備份來建立備份(backup)計劃. 複製備份到另一個區域(Region). 新增應用程式的EC2 例項為資源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：寫一個 AWS Lambda 函式,將應用程式的 EBS 磁碟區的夜快照排程,並將快照複製到不同的 可用區(Availability Zone) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #313

**題目**
一家公司正在AWS上建立一個移動應用程式. 公司希望將覆蓋範圍擴大到數百萬使用者. 公司需要搭建一個平臺,以便經授權的使用者可以在自己的移動裝置上觀看公司的內容. 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 向公眾釋出內容 Amazon S3桶. 使用 AWS Key Management Service(AWS KMS) 金鑰進行流內容.
- B. 在移動應用程式和AWS環境之間設定IPsec VPN以流出內容.
- C. 使用Amazon CloudFront. 為流內容提供已簽名的 URL。
- D. 在移動應用程式和AWS環境之間設定AWS客戶端VPN以流出內容.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用Amazon CloudFront. 為流內容提供已簽名的 URL 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：向公眾釋出內容 Amazon S3桶. 使用 AWS Key Management Service(AWS KMS) 金鑰進行流內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在移動應用程式和AWS環境之間設定IPsec VPN以流出內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在移動應用程式和AWS環境之間設定AWS客戶端VPN以流出內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #314

**題目**
一家公司擁有全球銷售團隊使用的不常用接入模式的proposes MySQL 資料庫(database). 銷售團隊要求資料庫(database)的停機時間最小. 一個資料庫(database)管理員希望將這個資料庫(database)遷移到AWS,而不選擇特定例項型別,以預示將來會有更多的使用者. 一個解決方案設計師應該推薦哪個服務?

**選項**
- A. Amazon Aurora MySQL.
- B. MySQL 的 Amazon Aurora 無伺服器
- C. Amazon Redshift 光譜
- D. 用於 MySQL 的 Amazon RDS

**答案**
B


**詳解**
正確答案是 **B**。
- B：MySQL 的 Amazon Aurora 無伺服器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：Amazon Aurora MySQL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：Amazon Redshift 光譜。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：用於 MySQL 的 Amazon RDS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #315

**題目**
一家公司遭遇了違反合同的情況,影響到該公司在現場資料中心的幾個應用。 攻擊者利用了伺服器上執行的自定義應用程式中的弱點. 目前該公司正在將其申請轉移到Amazon EC2公司。 公司希望實施一個解決方案,積極掃描EC2例項的弱點,併傳送一份報告,詳細說明調查結果。 哪種解決辦法能滿足這些要求?

**選項**
- A. 部署AWS Shield,掃描EC2的弱點。 建立 AWS Lambda 函式,將任何結果登入到 AWS CloudTrail。
- B. 部署 Amazon Macie 和 AWS Lambda 功能,掃描 EC2 例項以識別脆弱性。 把發現記錄到AWS CloudTrail。
- C. 啟動亞馬遜衛視 向EC2事件部署警衛人員。 配置一個 AWS Lambda 功能,實現報告生成和分發自動化,以詳細說明結果.
- D. 啟動亞馬遜探長 將亞馬遜巡視員部署到EC2區。 配置一個 AWS Lambda 功能,實現報告生成和分發自動化,以詳細說明結果.

**答案**
C


**詳解**
正確答案是 **C**。
- C：啟動亞馬遜衛視 向EC2事件部署警衛人員。 配置一個 AWS Lambda 功能,實現報告生成和分發自動化,以詳細說明結果。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：部署AWS Shield,掃描EC2的弱點。 建立 AWS Lambda 函式,將任何結果登入到 AWS CloudTrail 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：部署 Amazon Macie 和 AWS Lambda 功能,掃描 EC2 例項以識別脆弱性。 把發現記錄到AWS CloudTrail。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：啟動亞馬遜探長 將亞馬遜巡視員部署到EC2區。 配置一個 AWS Lambda 功能,實現報告生成和分發自動化,以詳細說明結果。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #316

**題目**
一家公司使用Amazon EC2例項執行一個指令碼,在亞馬遜簡易排隊服務(Amazon SQS)佇列中對訊息進行投票和處理. 公司希望降低運營成本,同時保持其處理越來越多的資訊的能力,這些資訊被新增到佇列中. 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 增加EC2例項的大小以更快地處理訊息。
- B. 使用 Amazon EventBridge 關閉 EC2 例項, 當例項利用不足。
- C. 將 EC2 例項上的指令碼移動到 AWS Lambda 函式, 並有適當的執行時間。
- D. 使用 AWS Systems Manager 執行命令按需執行指令碼.

**答案**
A


**詳解**
正確答案是 **A**。
- A：增加EC2例項的大小以更快地處理訊息 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 Amazon EventBridge 關閉 EC2 例項, 當例項利用不足 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 EC2 例項上的指令碼移動到 AWS Lambda 函式, 並有適當的執行時間 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Systems Manager 執行命令按需執行指令碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #317

**題目**
公司使用遺留應用程式以CSV格式生成資料. 遺留的應用程式將輸出資料儲存在Amazon S3中. 該公司正在部署一個新的現成商業(COTS)應用程式,能夠進行復雜的SQL查詢,以分析僅存於Amazon Redshift和Amazon S3的資料. 然而,COTS應用程式無法處理遺留應用程式產生的.csv檔案. 公司無法更新遺留的應用程式以生成另一種格式的資料. 公司需要實施一個解決方案,以便COTS應用能夠使用遺留應用生成的資料. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立一個 AWS Glue 提取,變換,並載入(ETL)任務,執行在時間表上. 配置ETL任務處理.csv檔案,並將已處理的資料儲存在Amazon Redshift中.
- B. 開發一個執行在 Amazon EC2 例項上的 Python 指令碼,以便將 .csv 檔案轉換為.sql 檔案。 將 Python 指令碼輸入一個 cron 排程表,以儲存 Amazon S3 中的輸出檔案.
- C. 建立一個 AWS Lambda 函式和一個 Amazon DynamoDB 表格. 使用 S3 事件來引用 Lambda 函式。 配置 Lambda 函式以執行一個提取,轉換,並載入(ETL)任務,處理.csv檔案,並將已處理的資料儲存在DynamoDB表中.
- D. 使用Amazon EventBridge在每週時間表上推出Amazon EMR叢集. 配置EMR叢集執行一個提取,變換,載入(ETL)任務,處理.csv檔案,並將處理過的資料儲存在Amazon Redshift表中.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個 AWS Glue 提取,變換,並載入(ETL)任務,執行在時間表上. 配置ETL任務處理.csv檔案,並將已處理的資料儲存在Amazon Redshift中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：開發一個執行在 Amazon EC2 例項上的 Python 指令碼,以便將 .csv 檔案轉換為.sql 檔案。 將 Python 指令碼輸入一個 cron 排程表,以儲存 Amazon S3 中的輸出檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個 AWS Lambda 函式和一個 Amazon DynamoDB 表格. 使用 S3 事件來引用 Lambda 函式。 配置 Lambda 函式以執行一個提取,轉換,並載入(ETL)任務,處理.csv檔案,並將已處理的資料儲存在DynamoDB表中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon EventBridge在每週時間表上推出Amazon EMR叢集. 配置EMR叢集執行一個提取,變換,載入(ETL)任務,處理.csv檔案,並將處理過的資料儲存在Amazon Redshift表中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #318

**題目**
一家公司最近將其整個資訊科技環境遷移到AWS雲. 公司發現使用者正在提供超大小的Amazon EC2 執行個體,並修改安全群組(security group)規則,而沒有使用適當的更改控制程式. 一個解決方案設計師必須設計一種戰略,跟蹤這些庫存和配置變化以及稽核(audit)。 設計師應採取什麼行動來滿足這些要求?(選二.

**選項**
- A. 啟用 AWS CloudTrail 並用於審計.
- B. 對Amazon EC2 執行個體使用資料生命週期政策.
- C. 啟用 AWS 信任的顧問並引用安全儀表板。
- D. 啟用 AWS Config 並建立用於審計和合規(compliance)目的的規則.
- E. 用 AWS 雲格式模板恢復以前的資源配置。

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：啟用 AWS CloudTrail 並用於審計。此選項符合題目條件，能有效滿足核心需求。
- D：啟用 AWS Config 並建立用於審計和合規(compliance)目的的規則。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：對Amazon EC2 執行個體使用資料生命週期政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：啟用 AWS 信任的顧問並引用安全儀表板 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：用 AWS 雲格式模板恢復以前的資源配置 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #319

**題目**
一家公司在AWS雲中有數百個基於Amazon EC2的Linux案例. 系統管理員使用共享的SSH金鑰來管理例項. 在最近稽核(audit)之後,該公司的安全小組正要求拆除所有共有鑰匙。 解決方案設計師必須設計一個解決方案,提供對EC2例項的安全存取. 以LEAST的行政間接費用數額滿足這一要求的哪一種辦法?

**選項**
- A. 使用 AWS Systems Manager 會話管理器連線到EC2 例項。
- B. 使用 AWS 安全託肯服務(AWS STS)按需生成一次性SSH金鑰.
- C. 允許共享 SSH 存取一組堡壘例項。 配置所有其他例項, 僅允許 SSH 從 bastion 例項存取。
- D. 使用 Amazon Cognitto 自定義授權器認證使用者. Invoke a AWS Lambda 函式生成一個臨時的SSH金鑰.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 AWS 安全託肯服務(AWS STS)按需生成一次性SSH金鑰。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS Systems Manager 會話管理器連線到EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：允許共享 SSH 存取一組堡壘例項。 配置所有其他例項, 僅允許 SSH 從 bastion 例項存取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon Cognitto 自定義授權器認證使用者. Invoke a AWS Lambda 函式生成一個臨時的SSH金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #320

**題目**
一家公司正在利用Amazon EC2例項來攝取現場資料來源的資料。 資料採用JSON格式,攝入率可高達1 MB/s. 當一個 EC2 例項被重啟時,資料會丟失。 公司的資料科學團隊希望在近實時查詢攝入的資料. 哪個解決方案提供近實時資料查詢,以最小的資料損失為可擴充套件性?

**選項**
- A. 將資料釋出到Amazon Kinesis資料流,使用Kinesis資料分析器查詢資料.
- B. 以Amazon Redshift為目的地,向Amazon Kinesis Data Firehose釋出資料. 使用Amazon Redshift查詢資料.
- C. 將攝入的資料儲存在EC2例項商店中. 將資料釋出給以Amazon S3為目的地的Amazon Kinesis Data Firehose. 使用Amazon Athena查詢資料.
- D. 將吸收的資料儲存在亞馬遜彈性塊儲存器(Amazon EBS)的體積中. 將資料釋出給 Amazon ElastiCache for Redis. 訂閱 Redis 頻道查詢資料。

**答案**
A


**詳解**
正確答案是 **A**。
- A：將資料釋出到Amazon Kinesis資料流,使用Kinesis資料分析器查詢資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：以Amazon Redshift為目的地,向Amazon Kinesis Data Firehose釋出資料. 使用Amazon Redshift查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將攝入的資料儲存在EC2例項商店中. 將資料釋出給以Amazon S3為目的地的Amazon Kinesis Data Firehose. 使用Amazon Athena查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將吸收的資料儲存在亞馬遜彈性塊儲存器(Amazon EBS)的體積中. 將資料釋出給 Amazon ElastiCache for Redis. 訂閱 Redis 頻道查詢資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #321

**題目**
一個解決方案架構師應該做什麼來確保上傳到Amazon S3桶的所有物件都加密?

**選項**
- A. 如果 PutObject 沒有 s3: x-amz- acl 頭集, 更新 儲存桶政策(bucket policy) 以拒絕。
- B. 更新 儲存桶政策(bucket policy) , 如果 PutObject 沒有 s3: x- amz- acl 頭設定為私有, 則拒絕。
- C. 更新 儲存桶政策(bucket policy) 如果 Put Object 沒有 aws: Secure Transport header 設定為 true 則拒絕。
- D. 如果 PutObject 沒有 X-amz- server- side- 加密(encryption) 頭集, 更新 儲存桶政策(bucket policy) 以否認。

**答案**
D


**詳解**
正確答案是 **D**。
- D：如果 PutObject 沒有 X-amz- server- side- 加密(encryption) 頭集, 更新 儲存桶政策(bucket policy) 以否認 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：如果 PutObject 沒有 s3: x-amz- acl 頭集, 更新 儲存桶政策(bucket policy) 以拒絕 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：更新 儲存桶政策(bucket policy) , 如果 PutObject 沒有 s3: x- amz- acl 頭設定為私有, 則拒絕 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：更新 儲存桶政策(bucket policy) 如果 Put Object 沒有 aws: Secure Transport header 設定為 true 則拒絕 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #322

**題目**
一個解決方案架構師正在為一家公司設計一個多層次的應用程式. 應用程式的使用者從移動裝置上傳影象. 應用程式生成每個影象的縮圖,並返回訊息給使用者,以確認影象成功上傳. 縮圖生成時間可長達60秒,但公司希望為其使用者提供更快的響應時間,以通知其收到原始影象. 解決方案架構師必須設計應用程式,以便同步向不同的應用程式層傳送請求。 解決方案設計師應如何滿足這些要求?

**選項**
- A. 寫入自定義的 AWS Lambda 函式生成縮圖並提醒使用者. 使用影象上傳程序作為事件源來引用 Lambda 函式.
- B. 建立 AWS 步函式工作模式。 配置 Step 函式處理應用程式級之間的管絃, 當縮圖生成完成時提醒使用者。
- C. 建立 Amazon 簡單佇列服務( Amazon SQS) 訊息佇列。 當影象被上傳時, 在 SQS 佇列上放置一個訊息, 用於縮圖生成。 透過一個應用程式訊息提醒使用者, 影象已經收到。
- D. 建立亞馬遜簡易通知服務(Amazon SNS)通知主題和訂閱. 在影象上傳完成後使用一個應用程式的訂閱生成縮圖。 在縮圖生成完成後, 使用第二個訂閱方式來獲取使用者的移動應用程式。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 Amazon 簡單佇列服務( Amazon SQS) 訊息佇列。 當影象被上傳時, 在 SQS 佇列上放置一個訊息, 用於縮圖生成。 透過一個應用程式訊息提醒使用者, 影象已經收到 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：寫入自定義的 AWS Lambda 函式生成縮圖並提醒使用者. 使用影象上傳程序作為事件源來引用 Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS 步函式工作模式。 配置 Step 函式處理應用程式級之間的管絃, 當縮圖生成完成時提醒使用者 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立亞馬遜簡易通知服務(Amazon SNS)通知主題和訂閱. 在影象上傳完成後使用一個應用程式的訂閱生成縮圖。 在縮圖生成完成後, 使用第二個訂閱方式來獲取使用者的移動應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #323

**題目**
一家公司的設施在整個大樓的每個入口都設有警徽閱讀器。 當徽章掃描後,讀者會在HTTPS上傳送資訊,以表明是誰試圖進入該特定入口. 一個解決方案架構師必須設計一個系統來處理感測器發出的這些訊息. 解決方案必須非常可用,結果必須提供給公司安全小組分析。 解決方案設計師應該建議哪種系統架構?

**選項**
- A. 啟動一個 Amazon EC2 例項,作為 HTTPS 的終點並處理訊息。 配置 EC2 例項將結果儲存到 Amazon S3 桶中。
- B. 在 Amazon API Gateway 中建立一個 HTTPS 端點。 配置 API 閘道器端點以引用 AWS Lambda 函式來處理訊息,並將結果儲存到 Amazon DynamoDB 表格中.
- C. 使用Amazon Route 53將傳入的感測器訊息引導到AWS Lambda功能上. 配置 Lambda 函式處理訊息,並將結果儲存到 Amazon DynamoDB 表格中.
- D. 為Amazon S3建立閘道器VPC 端點(VPC endpoint). 配置從設施網路到VPC的站點對站點VPN連線,以便感測器資料可以透過VPC 端點(VPC endpoint)直接寫入S3 儲存桶(S3 bucket).

**答案**
B


**詳解**
正確答案是 **B**。
- B：在 Amazon API Gateway 中建立一個 HTTPS 端點。 配置 API 閘道器端點以引用 AWS Lambda 函式來處理訊息,並將結果儲存到 Amazon DynamoDB 表格中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：啟動一個 Amazon EC2 例項,作為 HTTPS 的終點並處理訊息。 配置 EC2 例項將結果儲存到 Amazon S3 桶中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Route 53將傳入的感測器訊息引導到AWS Lambda功能上. 配置 Lambda 函式處理訊息,並將結果儲存到 Amazon DynamoDB 表格中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為Amazon S3建立閘道器VPC 端點(VPC endpoint). 配置從設施網路到VPC的站點對站點VPN連線,以便感測器資料可以透過VPC 端點(VPC endpoint)直接寫入S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #324

**題目**
一家公司希望實施災難復原(disaster recovery)計劃,用於其主要前提檔案儲存量. 檔案儲存量由一個Internet Small計算機系統介面(iSCSI)裝置掛載在本地儲存伺服器上. 檔案儲存量持有上百兆位元組(TB)的資料. 公司希望確保終端使用者在不經歷延遲(latency)的情況下,保留對現場系統的所有檔案型別的即時存取. 哪個解決方案將滿足這些要求,對公司現有基礎設施的LEAST數額進行修改?

**選項**
- A. 提供Amazon S3檔案閘道器作為虛擬機器(VM),託管於房地. 設定本地快取為 10 TB。 修改現有的應用程式,透過NFS協議存取檔案. 為了從災害中恢復,提供Amazon EC2例項,並掛載載有檔案的S3 儲存桶(S3 bucket)。
- B. 提供AWS Storage Gateway磁帶閘道器. 使用資料備份(backup)解決方案將所有現有資料備份到虛擬磁帶庫. 配置資料 備份(backup) 解決方案在初始 備份(backup) 完成後夜間執行. 為了從災難中恢復過來,提供Amazon EC2例項,並將資料從虛擬磁帶庫的卷中恢復到Amazon Elastic Block Store(Amazon EBS)。
- C. 提供AWS Storage Gateway卷門快取卷. 設定本地快取為 10 TB。 使用 iSCSI 將 Volume Gateway 快取的磁碟區掛載到現有的檔案伺服器,並將所有檔案複製到儲存磁碟區中. 配置儲存磁碟區的計劃快照。 為了從災難中恢復過來,將快照(snapshot)恢復到Amazon彈性塊儲存器(Amazon EBS)的體積,並將EBS體積附加在Amazon EC2例項中.
- D. 提供AWS Storage Gateway卷閘道器儲存的磁碟區,磁碟空間與現有的檔案儲存磁碟區相同. 使用 iSCSI 將儲存的磁碟區掛載到現有的檔案伺服器,並將所有檔案複製到儲存磁碟區中. 配置儲存磁碟區的計劃快照。 為了從災難中恢復過來,將快照(snapshot)恢復到Amazon彈性塊儲存器(Amazon EBS)的體積,並將EBS體積附加在Amazon EC2例項中.

**答案**
C


**詳解**
正確答案是 **C**。
- C：提供AWS Storage Gateway卷門快取卷. 設定本地快取為 10 TB。 使用 iSCSI 將 Volume Gateway 快取的磁碟區掛載到現有的檔案伺服器,並將所有檔案複製到儲存磁碟區中. 配置儲存磁碟區的計劃快照。 為了從災難中恢復過來,將快照(snapshot)恢復到Amazon彈性塊儲存器(Amazon EBS)的體積,並將EBS體積附加在Amazon EC2例項中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：提供Amazon S3檔案閘道器作為虛擬機器(VM),託管於房地. 設定本地快取為 10 TB。 修改現有的應用程式,透過NFS協議存取檔案. 為了從災害中恢復,提供Amazon EC2例項,並掛載載有檔案的S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：提供AWS Storage Gateway磁帶閘道器. 使用資料備份(backup)解決方案將所有現有資料備份到虛擬磁帶庫. 配置資料 備份(backup) 解決方案在初始 備份(backup) 完成後夜間執行. 為了從災難中恢復過來,提供Amazon EC2例項,並將資料從虛擬磁帶庫的卷中恢復到Amazon Elastic Block Store(Amazon EBS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：提供AWS Storage Gateway卷閘道器儲存的磁碟區,磁碟空間與現有的檔案儲存磁碟區相同. 使用 iSCSI 將儲存的磁碟區掛載到現有的檔案伺服器,並將所有檔案複製到儲存磁碟區中. 配置儲存磁碟區的計劃快照。 為了從災難中恢復過來,將快照(snapshot)恢復到Amazon彈性塊儲存器(Amazon EBS)的體積,並將EBS體積附加在Amazon EC2例項中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #325

**題目**
一家公司正在託管一個Amazon S3桶的網路應用程式。 該應用程式使用Amazon Cognito作為身份提供者,對使用者進行認證,並返回一個JSON Web Token(JWT),提供存取儲存在另一個S3 儲存桶(S3 bucket)的受保護資源. 應用程式部署後,使用者會報告錯誤,無法存取受保護的內容. 一個解決方案架構師必須透過提供適當的許可權來解決這個問題,這樣使用者就可以存取受保護的內容. 哪種解決辦法符合這些要求?

**選項**
- A. 更新Amazon Cognito身份池,以承擔存取受保護內容的適當IAM角色.
- B. 更新S3 ACL,允許應用程式存取受保護的內容.
- C. 將應用程式重新調配到Amazon S3,以防止最終一致在S3 儲存桶(S3 bucket)中讀取,從而影響使用者存取受保護內容的能力.
- D. 更新Amazon Cognitto 池,在身份池內使用自定義屬性對映,並給予使用者存取受保護內容的適當許可權.

**答案**
A


**詳解**
正確答案是 **A**。
- A：更新Amazon Cognito身份池,以承擔存取受保護內容的適當IAM角色。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：更新S3 ACL,允許應用程式存取受保護的內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將應用程式重新調配到Amazon S3,以防止最終一致在S3 儲存桶(S3 bucket)中讀取,從而影響使用者存取受保護內容的能力。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：更新Amazon Cognitto 池,在身份池內使用自定義屬性對映,並給予使用者存取受保護內容的適當許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #326

**題目**
一家影象託管公司將其大資產上傳至Amazon S3標準桶. 公司透過使用S3 API同時使用多段上傳,如果同一物件再次上傳,則覆蓋. 在上傳後的頭30天內,會頻繁存取這些物件. 物體在30天后將較少使用,但每個物體的存取模式將不一致. 公司必須最佳化其S3儲存成本,同時保持高可用性(high availability)和儲存資產的恢復能力. 一個解決方案設計師應該建議採取何種行動來滿足這些要求?(選二.

**選項**
- A. 30天后將資產移至S3 Intelligent-Tiering.
- B. 配置一個 S3 生命週期政策(Lifecycle policy) 來清理不完整的多段上傳。
- C. 配置一個 S3 生命週期政策(Lifecycle policy) 來清理過期物件刪除標記。
- D. 30天后將資產移至S3標準-不頻繁存取(S3 Standard-IA).
- E. 30天后將資產移至S3 One Zone-不經常存取(S3 One Zone-IA).

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：30天后將資產移至S3 Intelligent-Tiering。此選項符合題目條件，能有效滿足核心需求。
- B：配置一個 S3 生命週期政策(Lifecycle policy) 來清理不完整的多段上傳 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：配置一個 S3 生命週期政策(Lifecycle policy) 來清理過期物件刪除標記 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：30天后將資產移至S3標準-不頻繁存取(S3 Standard-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：30天后將資產移至S3 One Zone-不經常存取(S3 One Zone-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #327

**題目**
一個解決方案架構師必須保證一個託管 Amazon EC2 例項的VPC網路. EC2例項包含高度敏感的資料,並以一個私人子網執行。 根據公司政策,在VPC執行的EC2例項只能存取網際網路上經批准的第三方軟體儲存庫,用於使用第三方URL的軟體產品更新. 其他網際網路交通必須被封鎖。 哪種解決辦法符合這些要求?

**選項**
- A. 更新私有子網的路由表,將出入口流量引導到一個AWS網路防火牆(Firewall) 防火牆(firewall). 配置域列表規則組。
- B. 建立AWS WAF網路ACL. 建立一套自定義規則,根據原始碼和目的IP地址範圍集過濾流量請求.
- C. 執行嚴格的入境安全群組(security group)規則. 配置一條出局規則,透過指定 URL ,只允許傳輸到網際網路上授權的軟體倉庫。
- D. 在 EC2 例項前配置 應用程式負載平衡器(Application Load Balancer)(ALB)。 引導所有外出交通到ALB. 在 ALB 的目標群體中使用基於 URL 的規則聽器, 以獲取網際網路。

**答案**
A


**詳解**
正確答案是 **A**。
- A：更新私有子網的路由表,將出入口流量引導到一個AWS網路防火牆(Firewall) 防火牆(firewall). 配置域列表規則組 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立AWS WAF網路ACL. 建立一套自定義規則,根據原始碼和目的IP地址範圍集過濾流量請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：執行嚴格的入境安全群組(security group)規則. 配置一條出局規則,透過指定 URL ,只允許傳輸到網際網路上授權的軟體倉庫 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 EC2 例項前配置 應用程式負載平衡器(Application Load Balancer)(ALB)。 引導所有外出交通到ALB. 在 ALB 的目標群體中使用基於 URL 的規則聽器, 以獲取網際網路。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #328

**題目**
一家公司正在AWS雲中託管一個三級電子商務應用. 該公司託管Amazon S3上的網站,並將網站與處理銷售請求的API整合. 該公司在應用程式負載平衡器(Application Load Balancer)(ALB)後面的3個Amazon EC2例項上託管API. API由靜態和動態的前端內容以及處理銷售請求的後端工人組成. 該公司預計,在推出新產品的活動期間,銷售申請數量將急劇增加。 解決方案設計師建議如何確保所有請求都得到成功的處理?

**選項**
- A. 為動態內容新增一個 Amazon CloudFront 分佈. 增加EC2 執行個體處理流量增加.
- B. 為靜態內容新增一個 Amazon CloudFront 分佈. 將 EC2 例項放在 Auto Scaling 群組(Auto Scaling group) 中,以啟動基於網路流量的新例項。
- C. 為動態內容新增一個 Amazon CloudFront 分佈. 在 ALB 前增加一個 Amazon ElastiCache 例項,以減少API 處理的流量.
- D. 為靜態內容新增一個 Amazon CloudFront 分佈. 新增一個 Amazon 簡單佇列服務( Amazon SQS) 佇列以接收網站的請求, 以供 EC2 例項稍後處理。

**答案**
D


**詳解**
正確答案是 **D**。
- D：為靜態內容新增一個 Amazon CloudFront 分佈. 新增一個 Amazon 簡單佇列服務( Amazon SQS) 佇列以接收網站的請求, 以供 EC2 例項稍後處理 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為動態內容新增一個 Amazon CloudFront 分佈. 增加EC2 執行個體處理流量增加。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為靜態內容新增一個 Amazon CloudFront 分佈. 將 EC2 例項放在 Auto Scaling 群組(Auto Scaling group) 中,以啟動基於網路流量的新例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為動態內容新增一個 Amazon CloudFront 分佈. 在 ALB 前增加一個 Amazon ElastiCache 例項,以減少API 處理的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #329

**題目**
一個安全的稽核(audit)顯示,Amazon EC2 執行個體沒有定期補丁. 解決方案架構師需要提供一個解決方案,對大量EC2例項進行定期安全掃描。 解決方案還應將EC2例項補上一個常規時間表,並提供每個例項補丁狀態的報告。 哪種解決辦法能滿足這些要求?

**選項**
- A. 設定 Amazon Macie 掃描 EC2 例項,以瞭解軟體的脆弱性. 在每個EC2例項上設定 cron 任務, 在常規的日程中補齊例項。
- B. 在帳戶裡開啟Amazon GuardDuty 配置 GuardDuty 掃描 EC2 例項,以瞭解軟體的脆弱性。 設定 AWS Systems Manager 會話管理器,以便在常規排程中補丁EC2例項。
- C. 設定 Amazon Detective 掃描 EC2 例項以瞭解軟體的脆弱性. 設定一個 Amazon EventBridge 計劃規則,以便在常規的日程中補補 EC2 例項。
- D. 開啟帳戶裡的亞馬遜探長 配置 Amazon 檢查器掃描 EC2 例項, 以識別軟體的弱點。 設定 AWS Systems Manager 補丁管理器,以便在常規的日程中補丁 EC2 例項。

**答案**
D


**詳解**
正確答案是 **D**。
- D：開啟帳戶裡的亞馬遜探長 配置 Amazon 檢查器掃描 EC2 例項, 以識別軟體的弱點。 設定 AWS Systems Manager 補丁管理器,以便在常規的日程中補丁 EC2 例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：設定 Amazon Macie 掃描 EC2 例項,以瞭解軟體的脆弱性. 在每個EC2例項上設定 cron 任務, 在常規的日程中補齊例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在帳戶裡開啟Amazon GuardDuty 配置 GuardDuty 掃描 EC2 例項,以瞭解軟體的脆弱性。 設定 AWS Systems Manager 會話管理器,以便在常規排程中補丁EC2例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：設定 Amazon Detective 掃描 EC2 例項以瞭解軟體的脆弱性. 設定一個 Amazon EventBridge 計劃規則,以便在常規的日程中補補 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #330

**題目**
一家公司計劃儲存關於Amazon RDS DB例項的資料。 公司必須在休息時加密資料。 解決方案設計師應如何滿足這一要求?

**選項**
- A. 在 AWS Key Management Service(AWS KMS) 中建立金鑰. 為 DB 例項啟用 加密(encryption)。
- B. 建立 加密(encryption) 金鑰。 在AWS Secrets Manager中儲存金鑰. 使用金鑰加密 DB 例項。
- C. 在 AWS Certificate Manager(ACM) 中生成憑證. 使用憑證在 DB 例項上啟用 SSL/ TLS。
- D. 在 AWS 身份和存取管理(IAM)中生成憑證. 使用憑證在 DB 例項上啟用 SSL/ TLS。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 AWS Certificate Manager(ACM) 中生成憑證. 使用憑證在 DB 例項上啟用 SSL/ TLS 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 AWS Key Management Service(AWS KMS) 中建立金鑰. 為 DB 例項啟用 加密(encryption) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 加密(encryption) 金鑰。 在AWS Secrets Manager中儲存金鑰. 使用金鑰加密 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 AWS 身份和存取管理(IAM)中生成憑證. 使用憑證在 DB 例項上啟用 SSL/ TLS 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #331

**題目**
公司必須在30天內將20 TB資料從資料中心遷移到AWS雲. 公司的網路頻寬限為15 Mbps,利用率不得超過70%。 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用AWS Snowball.
- B. 使用 AWS 資料同步。
- C. 使用安全的VPN連線.
- D. 使用亞馬遜 S3 Transfer Acceleration.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS Snowball。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 AWS 資料同步 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用安全的VPN連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用亞馬遜 S3 Transfer Acceleration。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #332

**題目**
公司需要為其僱員提供安全查閱機密和敏感檔案的機會。 公司希望確保檔案只能被授權使用者存取. 這些檔案必須安全下載到員工的裝置。 這些檔案被儲存在一個premise的Windows檔案伺服器中. 然而,由於遠端使用量的增加,檔案伺服器正在耗盡容量。。 哪種解決辦法能滿足這些要求?

**選項**
- A. 將檔案伺服器遷移到公共子網的 Amazon EC2 例項。 配置 安全群組(security group) 以限制員工的IP地址的入境流量。
- B. 為 Windows 檔案伺服器系統將檔案遷移到 Amazon FSx。 將Amazon FSx檔案系統與promess Active Directory整合. 配置 AWS 客戶端 VPN。
- C. 將檔案遷移到Amazon S3,並建立私人VPC 端點(VPC endpoint). 建立已簽名的 URL 允許下載。
- D. 將檔案遷移到Amazon S3,並建立一個公開的VPC 端點(VPC endpoint). 允許員工與AWS IAM身份中心(AWS Single Sign-On)簽約.

**答案**
B


**詳解**
正確答案是 **B**。
- B：為 Windows 檔案伺服器系統將檔案遷移到 Amazon FSx。 將Amazon FSx檔案系統與promess Active Directory整合. 配置 AWS 客戶端 VPN 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將檔案伺服器遷移到公共子網的 Amazon EC2 例項。 配置 安全群組(security group) 以限制員工的IP地址的入境流量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將檔案遷移到Amazon S3,並建立私人VPC 端點(VPC endpoint). 建立已簽名的 URL 允許下載 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將檔案遷移到Amazon S3,並建立一個公開的VPC 端點(VPC endpoint). 允許員工與AWS IAM身份中心(AWS Single Sign-On)簽約。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #333

**題目**
一家公司的應用程式執行於應用程式負載平衡器(Application Load Balancer)(ALB)之後的Amazon EC2 執行個體。 這些執行個體在Amazon EC2 Auto Scaling 群組(Auto Scaling group)中跨越多個可用區(Availability Zones). 在每月的第一天午夜,當月末財務計算批次執行時,應用程式會變得慢得多. 這使得EC2例項的CPU使用率立即達到100%的峰值,干擾了應用. 解決方案設計師應建議什麼來確保應用程式能夠處理工作量和避免故障時間?

**選項**
- A. 在 ALB 前面配置 Amazon CloudFront 分佈。
- B. 配置基於 CPU 利用率的 EC2 自動縮放簡單縮放策略。
- C. 根據月表配置 EC2 自動縮放計劃縮放政策。
- D. 配置 Amazon ElastiCache 以刪除 EC2 例項中的一些工作量。

**答案**
C


**詳解**
正確答案是 **C**。
- C：根據月表配置 EC2 自動縮放計劃縮放政策 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 ALB 前面配置 Amazon CloudFront 分佈 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置基於 CPU 利用率的 EC2 自動縮放簡單縮放策略 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon ElastiCache 以刪除 EC2 例項中的一些工作量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #334

**題目**
一家公司希望給予客戶使用微軟Active Directory下載儲存在Amazon S3的檔案的能力. 客戶應用程式使用 SFTP 客戶端下載檔案. LEAST 營運開銷(operational overhead)將滿足這些要求,客戶的應用程式不變?

**選項**
- A. 為Amazon S3與SFTP建立AWS傳輸家族. 配置綜合活動目錄認證。
- B. 設定 AWS 資料庫(Database) 遷移服務(AWS DS),以與 Amazon S3 同步設定前提客戶端. 配置綜合活動目錄認證。
- C. 透過使用AWS IAM身份識別中心(AWS Single Sign-On),設定AWS DataSync,以同步在現場位置和S3位置之間.
- D. 與 SFTP 一起設定 Windows Amazon EC2 例項,以連線在前提上的客戶端與 Amazon S3. 整合AWS身份和存取管理。

**答案**
B


**詳解**
正確答案是 **B**。
- B：設定 AWS 資料庫(Database) 遷移服務(AWS DS),以與 Amazon S3 同步設定前提客戶端. 配置綜合活動目錄認證 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為Amazon S3與SFTP建立AWS傳輸家族. 配置綜合活動目錄認證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過使用AWS IAM身份識別中心(AWS Single Sign-On),設定AWS DataSync,以同步在現場位置和S3位置之間。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：與 SFTP 一起設定 Windows Amazon EC2 例項,以連線在前提上的客戶端與 Amazon S3. 整合AWS身份和存取管理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #335

**題目**
一家公司的需求突然增加。 公司需要從亞馬遜機器影象(AMI)中提供大型的Amazon EC2例項. 例項將以Auto Scaling 群組(Auto Scaling group)執行。 該公司需要一個解決方案,提供最低初始化延遲(latency)以滿足需求. 哪種解決辦法符合這些要求?

**選項**
- A. 使用 aws ec2 寄存影象命令從 快照(snapshot) 建立 AMI。 在Auto Scaling 群組(Auto Scaling group)中使用AWS Step函式來替換AMI.
- B. 啟用 Amazon 彈性塊儲存器( Amazon EBS) 快速 快照(snapshot) 在 快照(snapshot) 上恢復。 透過使用快照(snapshot)提供AMI. 將Auto Scaling 群組(Auto Scaling group)中的AMI替換為新的AMI.
- C. 在亞馬遜資料生命週期管理器(Amazon DLM)中啟用AMI建立並定義生命週期規則. 在 Auto Scaling 群組(Auto Scaling group) 中建立修改 AMI 的 AWS Lambda 函式。
- D. 使用Amazon EventBridge來引用提供AMI的AWS Backup生命週期政策. 配置 Auto Scaling 群組(Auto Scaling group) 容量限制,作為 EventBridge 中的事件源.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在亞馬遜資料生命週期管理器(Amazon DLM)中啟用AMI建立並定義生命週期規則. 在 Auto Scaling 群組(Auto Scaling group) 中建立修改 AMI 的 AWS Lambda 函式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 aws ec2 寄存影象命令從 快照(snapshot) 建立 AMI。 在Auto Scaling 群組(Auto Scaling group)中使用AWS Step函式來替換AMI。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：啟用 Amazon 彈性塊儲存器( Amazon EBS) 快速 快照(snapshot) 在 快照(snapshot) 上恢復。 透過使用快照(snapshot)提供AMI. 將Auto Scaling 群組(Auto Scaling group)中的AMI替換為新的AMI。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon EventBridge來引用提供AMI的AWS Backup生命週期政策. 配置 Auto Scaling 群組(Auto Scaling group) 容量限制,作為 EventBridge 中的事件源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #336

**題目**
一個公司託管一個多級網路應用程式,使用Amazon Aurora MySQL DB叢集進行儲存. 應用程式級別以 Amazon EC2 為主機。 該公司的IT安全準則規定,資料庫(database)憑證應加密,每14天輪換一次。 一個解決方案設計師應該如何透過 " LEAST " 業務努力滿足這一要求?

**選項**
- A. 建立一個新的 AWS Key Management Service(AWS KMS) 加密(encryption) 鍵. 使用 AWS Secrets Manager 來建立一個新的秘密,使用 KMS 金鑰並配有適當的憑證. 把這個秘密與AuroraDB叢集聯絡起來. 配置自定義旋轉期14天.
- B. 在 AWS Systems Manager 引數儲存器中建立兩個引數:一個是使用者名稱作為字串引數,另一個是使用SafeString型別進行密碼. 為密碼引數選擇AWS Key Management Service(AWS KMS)加密(encryption),並將這些引數載入到應用級. 執行AWS Lambda功能,每14天旋轉密碼.
- C. 在AWS Key Management Service(AWS KMS)加密的亞馬遜彈性檔案系統(Amazon EFS)檔案系統中儲存一個包含憑證的檔案. 在應用程式級的所有 EC2 例項中掛載 EFS 檔案系統。 限制對檔案系統中檔案的存取,以便應用程式能夠讀取檔案,只有超級使用者可以修改檔案. 執行AWS Lambda功能,每14天在Aurora旋轉一次金鑰,並將新的憑證寫入檔案.
- D. 在AWS Key Management Service(AWS KMS)加密的Amazon S3桶中儲存包含憑證的檔案,應用程式用來載入憑證. 定期嚮應用程式下載檔案,以確保使用正確的憑證。 實施AWS Lambda功能,每14天旋轉一次Aurora憑證,並將這些憑證上傳到S3 儲存桶(S3 bucket)中的檔案.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個新的 AWS Key Management Service(AWS KMS) 加密(encryption) 鍵. 使用 AWS Secrets Manager 來建立一個新的秘密,使用 KMS 金鑰並配有適當的憑證. 把這個秘密與AuroraDB叢集聯絡起來. 配置自定義旋轉期14天。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在 AWS Systems Manager 引數儲存器中建立兩個引數:一個是使用者名稱作為字串引數,另一個是使用SafeString型別進行密碼. 為密碼引數選擇AWS Key Management Service(AWS KMS)加密(encryption),並將這些引數載入到應用級. 執行AWS Lambda功能,每14天旋轉密碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在AWS Key Management Service(AWS KMS)加密的亞馬遜彈性檔案系統(Amazon EFS)檔案系統中儲存一個包含憑證的檔案. 在應用程式級的所有 EC2 例項中掛載 EFS 檔案系統。 限制對檔案系統中檔案的存取,以便應用程式能夠讀取檔案,只有超級使用者可以修改檔案. 執行AWS Lambda功能,每14天在Aurora旋轉一次金鑰,並將新的憑證寫入檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Key Management Service(AWS KMS)加密的Amazon S3桶中儲存包含憑證的檔案,應用程式用來載入憑證. 定期嚮應用程式下載檔案,以確保使用正確的憑證。 實施AWS Lambda功能,每14天旋轉一次Aurora憑證,並將這些憑證上傳到S3 儲存桶(S3 bucket)中的檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #337

**題目**
一個連在AWS上部署了一個網路應用程式. 公司在Amazon RDS上為MySQL託管後端資料庫(database),並設有初級DB例項和5個讀取複製件,以支援縮放需求. 讀取的複製件必須落後於初級DB例項不超過1秒. 資料庫(database)定期執行預定儲存的程式。 隨著網站流量的增加,複製品在高峰負荷期出現更多滯後. 一個解決方案架構師必須儘可能減少複寫(replication)的滯後. 解決方案架構師必須儘量減少對應用程式碼的修改,必須儘量減少正在進行的營運開銷(operational overhead). 哪種解決辦法能滿足這些要求?

**選項**
- A. 將資料庫(database)移動到Amazon Aurora MySQL. 將讀取的複製品替換為Aurora複製品,並配置Aurora自動縮放. 將儲存的程式替換為 Aurora MySQL 本地函式。
- B. 在資料庫(database)前為Redis叢集部署一個Amazon ElastiCache。 修改應用程式,以便在應用程式詢問資料庫(database)之前檢查快取. 用 AWS Lambda 函式替換儲存程式.
- C. 將 資料庫(database) 移動到執行於 Amazon EC2 例項的 MySQL 資料庫(database)。 為所有複製節點選擇大,計算最佳化的EC2例項. 維持EC2例項的儲存程式。
- D. 將資料庫(database)型機車遷移到Amazon DynamoDB型機車. 提供大量閱讀容量單位,支援所需的吞吐量(throughput),並配置按需容量縮放. 將儲存的程式替換為 DynamoDB 流。

**答案**
A


**詳解**
正確答案是 **A**。
- A：將資料庫(database)移動到Amazon Aurora MySQL. 將讀取的複製品替換為Aurora複製品,並配置Aurora自動縮放. 將儲存的程式替換為 Aurora MySQL 本地函式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在資料庫(database)前為Redis叢集部署一個Amazon ElastiCache。 修改應用程式,以便在應用程式詢問資料庫(database)之前檢查快取. 用 AWS Lambda 函式替換儲存程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 資料庫(database) 移動到執行於 Amazon EC2 例項的 MySQL 資料庫(database)。 為所有複製節點選擇大,計算最佳化的EC2例項. 維持EC2例項的儲存程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料庫(database)型機車遷移到Amazon DynamoDB型機車. 提供大量閱讀容量單位,支援所需的吞吐量(throughput),並配置按需容量縮放. 將儲存的程式替換為 DynamoDB 流 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #338

**題目**
一個解決方案架構師必須建立災難復原(disaster recovery)(DR)計劃,將高容量軟體作為服務(SaaS)平臺. 該平臺的所有資料都儲存在Amazon Aurora MySQL DB叢集中. DR計劃必須複製資料到二級AWS 區域(Region). 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用 MySQL 二進位制日誌 複寫(replication) 到二級 區域(Region) 中的Aurora 叢集. 為二級區域(Region)中的Aurora叢集提供一個DB例項。
- B. 為DB叢集建立Aurora全球資料庫(database). 設定完成後, 從二級 區域(Region) 中刪除 DB 例項。
- C. 使用AWS 資料庫(Database) 遷移服務(AWS DMS),在二級區域(Region)中不斷複製資料給Aurora叢集. 從二級 區域(Region) 中刪除 DB 例項。
- D. 為DB叢集建立Aurora全球資料庫(database). 在二級區域(Region)中指定最少一個DB例項.

**答案**
D


**詳解**
正確答案是 **D**。
- D：為DB叢集建立Aurora全球資料庫(database). 在二級區域(Region)中指定最少一個DB例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 MySQL 二進位制日誌 複寫(replication) 到二級 區域(Region) 中的Aurora 叢集. 為二級區域(Region)中的Aurora叢集提供一個DB例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為DB叢集建立Aurora全球資料庫(database). 設定完成後, 從二級 區域(Region) 中刪除 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS 資料庫(Database) 遷移服務(AWS DMS),在二級區域(Region)中不斷複製資料給Aurora叢集. 從二級 區域(Region) 中刪除 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #339

**題目**
一家公司有一個帶有嵌入式憑證的自定義應用程式,從Amazon RDS MySQL DB例項中檢索資訊. 管理層表示,應用必須用最少的程式設計努力來提高安全性. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用AWS Key Management Service(AWS KMS)來建立金鑰. 配置從 AWS KMS 裝入 資料庫(database) 憑證的應用程式。 啟用自動金鑰旋轉。
- B. 為應用程式使用者建立MySQL 資料庫(database)的RDS憑證,並將憑證儲存在AWS Secrets Manager中. 配置應用程式, 以從密件管理器裝入 資料庫(database) 憑證。 建立 AWS Lambda 函式,在密管理器中輪換憑證。
- C. 為應用程式使用者建立MySQL 資料庫(database)的RDS憑證,並將憑證儲存在AWS Secrets Manager中. 配置應用程式, 以從密件管理器裝入 資料庫(database) 憑證。 在MySQL 資料庫(database)的RDS中為應用程式使用者設定憑證旋轉時間表,使用秘密管理器.
- D. 為應用程式使用者建立MySQL 資料庫(database)的RDS憑證,並將憑證儲存在AWS Systems Manager引數儲存器中. 配置從引數儲存器裝入 資料庫(database) 憑證的應用程式。 為MySQL 資料庫(database)使用引數儲存器的RDS中應用程式使用者設定憑證旋轉時間表.

**答案**
D


**詳解**
正確答案是 **D**。
- D：為應用程式使用者建立MySQL 資料庫(database)的RDS憑證,並將憑證儲存在AWS Systems Manager引數儲存器中. 配置從引數儲存器裝入 資料庫(database) 憑證的應用程式。 為MySQL 資料庫(database)使用引數儲存器的RDS中應用程式使用者設定憑證旋轉時間表。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS Key Management Service(AWS KMS)來建立金鑰. 配置從 AWS KMS 裝入 資料庫(database) 憑證的應用程式。 啟用自動金鑰旋轉 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為應用程式使用者建立MySQL 資料庫(database)的RDS憑證,並將憑證儲存在AWS Secrets Manager中. 配置應用程式, 以從密件管理器裝入 資料庫(database) 憑證。 建立 AWS Lambda 函式,在密管理器中輪換憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為應用程式使用者建立MySQL 資料庫(database)的RDS憑證,並將憑證儲存在AWS Secrets Manager中. 配置應用程式, 以從密件管理器裝入 資料庫(database) 憑證。 在MySQL 資料庫(database)的RDS中為應用程式使用者設定憑證旋轉時間表,使用秘密管理器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #340

**題目**
一家媒體公司在AWS上設有網站. 該網站應用程式的架構包括一個應用程式負載平衡器(Application Load Balancer)(ALB)背後的Amazon EC2例項和Amazon Aurora上託管的資料庫(database)例項。 該公司的網路安全團隊報告說,該應用程式容易被SQL注射. 公司應如何解決這個問題?

**選項**
- A. 在ALB前使用AWS WAF. 將適當的網路ACL與AWS WAF聯絡起來。
- B. 建立一個 ALB 聽器規則,以固定的響應回覆 SQL 注射.
- C. 訂閱到 AWS Shield 高階, 可以自動遮蔽所有 SQL 注射嘗試。
- D. 設定 Amazon 檢查器來自動阻止所有的 SQL 注射嘗試。

**答案**
C


**詳解**
正確答案是 **C**。
- C：訂閱到 AWS Shield 高階, 可以自動遮蔽所有 SQL 注射嘗試 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在ALB前使用AWS WAF. 將適當的網路ACL與AWS WAF聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個 ALB 聽器規則,以固定的響應回覆 SQL 注射。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：設定 Amazon 檢查器來自動阻止所有的 SQL 注射嘗試 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #341

**題目**
一家公司擁有Amazon S3 資料湖(data lake),由AWS湖形成公司管理. 公司希望透過將資料湖(data lake)中的資料與儲存在Amazon Aurora MySQL 資料庫(database)的運算元據相融合,在Amazon QuickSight建立視覺化. 公司希望執行專欄級授權,以便公司的營銷團隊只能存取資料庫(database)中的一個子欄. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用Amazon EMR直接接收從資料庫(database)到QuickSight SPICE引擎的資料. 只包括所需的列。
- B. 使用AWS Glue工作室來攝取從資料庫(database)到S3 資料湖(data lake)的資料. 將一個IAM 政策(IAM policy)附加到QuickSight使用者上,以強制執行列級的存取控制(access control). 使用Amazon S3作為QuickSight的資料來源.
- C. 使用 AWS Glue 彈性檢視為 Amazon S3 中的 資料庫(database) 建立可實現檢視. 為QuickSight使用者建立一個S3 儲存桶政策(bucket policy),用於執行列級的存取控制(access control). 使用Amazon S3作為QuickSight的資料來源.
- D. 使用湖泊形成藍圖來吸收從資料庫(database)到S3 資料湖(data lake)的資料. 使用 Lake Formation 執行列級的 存取控制(access control),供快速視使用者使用. 使用Amazon Athena作為QuickSight的資料來源.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用 AWS Glue 彈性檢視為 Amazon S3 中的 資料庫(database) 建立可實現檢視. 為QuickSight使用者建立一個S3 儲存桶政策(bucket policy),用於執行列級的存取控制(access control). 使用Amazon S3作為QuickSight的資料來源。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon EMR直接接收從資料庫(database)到QuickSight SPICE引擎的資料. 只包括所需的列。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用AWS Glue工作室來攝取從資料庫(database)到S3 資料湖(data lake)的資料. 將一個IAM 政策(IAM policy)附加到QuickSight使用者上,以強制執行列級的存取控制(access control). 使用Amazon S3作為QuickSight的資料來源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用湖泊形成藍圖來吸收從資料庫(database)到S3 資料湖(data lake)的資料. 使用 Lake Formation 執行列級的 存取控制(access control),供快速視使用者使用. 使用Amazon Athena作為QuickSight的資料來源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #342

**題目**
一家交易處理公司每週對Amazon EC2 執行個體的批次工作進行指令碼處理。 EC2 執行個體為Auto Scaling 群組(Auto Scaling group)。 交易數量可能不同,但每次執行時注意到的基準CPU利用率至少為60%. 公司需要在工作開始前30分鐘提供能力。 目前,工程師透過人工修改Auto Scaling 群組(Auto Scaling group)引數來完成這項任務. 該公司沒有資源分析Auto Scaling 群組(Auto Scaling group)計數所需的能力趨勢。 該公司需要一種自動方式來修改Auto Scaling 群組(Auto Scaling group)的預期容量. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 為Auto Scaling 群組(Auto Scaling group)建立動態縮放政策. 配置基於CPU利用率度量的縮放策略。 將公尺的目標值設定為60%。
- B. 為Auto Scaling 群組(Auto Scaling group)制定預定的縮放政策. 確定適當的所需能力、最低能力和最大能力。 設定重現為週刊。 將開始時間設定為批次作業執行前30分鐘.
- C. 為Auto Scaling 群組(Auto Scaling group)建立預測縮放政策. 配置基於預測的縮放策略。 設定縮放度量衡為 CPU 利用率。 將公尺的目標值設定為60%。 在政策中,將例項設定在工作開始前30分鐘啟動。
- D. 建立 Amazon EventBridge 事件,以便在 Auto Scaling 群組(Auto Scaling group) 的 CPU 利用率度量衡值達到 60% 時引用 AWS Lambda 函式。 配置Lambda功能,將Auto Scaling 群組(Auto Scaling group)的預期容量和最大容量增加20%.

**答案**
C


**詳解**
正確答案是 **C**。
- C：為Auto Scaling 群組(Auto Scaling group)建立預測縮放政策. 配置基於預測的縮放策略。 設定縮放度量衡為 CPU 利用率。 將公尺的目標值設定為60%。 在政策中,將例項設定在工作開始前30分鐘啟動。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為Auto Scaling 群組(Auto Scaling group)建立動態縮放政策. 配置基於CPU利用率度量的縮放策略。 將公尺的目標值設定為60%。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為Auto Scaling 群組(Auto Scaling group)制定預定的縮放政策. 確定適當的所需能力、最低能力和最大能力。 設定重現為週刊。 將開始時間設定為批次作業執行前30分鐘。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon EventBridge 事件,以便在 Auto Scaling 群組(Auto Scaling group) 的 CPU 利用率度量衡值達到 60% 時引用 AWS Lambda 函式。 配置Lambda功能,將Auto Scaling 群組(Auto Scaling group)的預期容量和最大容量增加20%。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #343

**題目**
一名解決方案架構師正在設計公司的災難復原(disaster recovery)(DR)架構。 該公司有一個MySQL 資料庫(database),執行於一個私人子網的Amazon EC2例項上,計劃為備份(backup). DR設計需要包括多個AWS區域. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將 MySQL 資料庫(database) 遷移到多個 EC2 例項。 在 DR 區域(Region) 中配置備用EC2 例項。 開啟複寫(replication)
- B. 將 MySQL 資料庫(database) 移動到 Amazon RDS。 使用多AZ部署. 在不同的可用區(Availability Zones)中,開啟讀取複寫(replication),作為主要DB例項.
- C. 將 MySQL 資料庫(database) 移動到一個 Amazon Aurora 全球資料庫(database). 主機主機DB叢集在主機區域(Region). 託管DR 區域(Region)中的二級DB叢集.
- D. 將預定的MySQL 資料庫(database)的備份(backup)儲存在為S3 Cross-Region Replication(CRR)配置的Amazon S3 儲存桶中. 使用資料備份(backup)在DR 區域(Region)中恢復資料庫(database).

**答案**
B


**詳解**
正確答案是 **B**。
- B：將 MySQL 資料庫(database) 移動到 Amazon RDS。 使用多AZ部署. 在不同的可用區(Availability Zones)中,開啟讀取複寫(replication),作為主要DB例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將 MySQL 資料庫(database) 遷移到多個 EC2 例項。 在 DR 區域(Region) 中配置備用EC2 例項。 開啟複寫(replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 MySQL 資料庫(database) 移動到一個 Amazon Aurora 全球資料庫(database). 主機主機DB叢集在主機區域(Region). 託管DR 區域(Region)中的二級DB叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將預定的MySQL 資料庫(database)的備份(backup)儲存在為S3 Cross-Region Replication(CRR)配置的Amazon S3 儲存桶中. 使用資料備份(backup)在DR 區域(Region)中恢復資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #344

**題目**
一家公司有一個Java應用程式,使用亞馬遜簡易佇列服務(Amazon SQS)來解析訊息. 應用程式無法解析大小大於 256 KB 的訊息。 公司希望實施一個解決方案,讓應用程式有能力解析高達50 MB的資訊. FEWEST修改程式碼後,哪一種解決方案能滿足這些要求?

**選項**
- A. 使用 Java 的 Amazon SQS 擴充套件客戶端庫,以託管大於 256 KB 在 Amazon S3 中的訊息.
- B. 使用Amazon EventBridge從應用程式傳送大訊息,而不是Amazon SQS.
- C. 更改Amazon SQS中的限制,處理大於256 KB的訊息.
- D. 在亞馬遜彈性檔案系統(Amazon EFS)中儲存大於256KB的訊息. 配置 Amazon SQS 在訊息中引用此位置。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 Java 的 Amazon SQS 擴充套件客戶端庫,以託管大於 256 KB 在 Amazon S3 中的訊息。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon EventBridge從應用程式傳送大訊息,而不是Amazon SQS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：更改Amazon SQS中的限制,處理大於256 KB的訊息。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在亞馬遜彈性檔案系統(Amazon EFS)中儲存大於256KB的訊息. 配置 Amazon SQS 在訊息中引用此位置 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #345

**題目**
一家公司希望限制存取其其中一個主要網路應用程式的內容,並透過使用AWS上可用的授權技術來保護內容. 公司希望針對不到100個使用者實施無伺服器架構和認證解決方案. 解決方案需要與主要網路應用整合,併為全球網路內容服務. 該解決方案還必須隨著公司的使用者基礎的增長而擴大,同時提供儘可能最低的登入延遲(latency). 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用Amazon Cognito進行認證. 請使用 Lambda@ Edge 獲取授權。 使用Amazon CloudFront在全球服務網路應用程式.
- B. 使用 AWS 目錄服務進行微軟活動目錄認證. 使用AWS Lambda進行授權. 使用應用程式負載平衡器(Application Load Balancer)為全球網路應用服務.
- C. 使用Amazon Cognito進行認證. 使用AWS Lambda進行授權. 使用Amazon S3 Transfer Acceleration在全球服務網路應用.
- D. 使用 AWS 目錄服務進行微軟活動目錄認證. 請使用 Lambda@ Edge 獲取授權。 使用 AWS 彈性 Beanstalk 為全球網路應用程式服務.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon Cognito進行認證. 請使用 Lambda@ Edge 獲取授權。 使用Amazon CloudFront在全球服務網路應用程式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 AWS 目錄服務進行微軟活動目錄認證. 使用AWS Lambda進行授權. 使用應用程式負載平衡器(Application Load Balancer)為全球網路應用服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Cognito進行認證. 使用AWS Lambda進行授權. 使用Amazon S3 Transfer Acceleration在全球服務網路應用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 目錄服務進行微軟活動目錄認證. 請使用 Lambda@ Edge 獲取授權。 使用 AWS 彈性 Beanstalk 為全球網路應用程式服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #346

**題目**
一家公司在其資料中心內有一個老化的網路附屬儲存陣列。 NAS陣列向客戶工作站介紹SMB股份和NFS股份. 公司不想購買一個新的NAS陣列. 該公司也不願承擔延長NAS陣列支助合同的費用。 有些資料經常存取,但大部分資料不活躍。 一個解決方案架構師需要實施一個將資料遷移到Amazon S3的解決方案,使用S3生命週期政策,為客戶工作站保持同樣的外觀和感覺. 解決方案架構師將AWS Storage Gateway確定為解決方案的一部分. 何種型別的儲存閘道器應提供解決方案架構以滿足這些要求?

**選項**
- A. 磁碟區閘道器
- B. 磁帶閘道器
- C. Amazon FSx 檔案閘道器
- D. Amazon S3 檔案閘道器

**答案**
C


**詳解**
正確答案是 **C**。
- C：Amazon FSx 檔案閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：磁碟區閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：磁帶閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon S3 檔案閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #347

**題目**
一家公司有一個在Amazon EC2 執行個體中執行的應用程式. 一個解決方案架構師根據公司目前的需要,將公司標準化於某一特定案例的家庭和各種案例規模。 公司希望在未來三年裡最大限度地節省申請的費用. 公司需要能夠根據應用的受歡迎程度和用法,在未來6個月內改變案例的家族和規模. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 計算儲蓄計劃
- B. EC2 例項儲蓄計劃
- C. 區域保留例項
- D. 標準保留例項

**答案**
D


**詳解**
正確答案是 **D**。
- D：標準保留例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：計算儲蓄計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：EC2 例項儲蓄計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：區域保留例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #348

**題目**
一家公司從大量使用可穿戴裝置的參與者那裡收集資料. 公司將資料儲存在Amazon DynamoDB表格中,並使用應用程式分析資料. 資料工作量是持續和可預測的。 該公司希望維持在或低於其預計的DynamomDB預算. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用提供模式和DynamoDB標準-不經常存取(DynamoDB Standard-IA). 預測工作量的後備能力。
- B. 使用提供模式。 指定讀能力單位(RCU)和寫能力單位(WCU)。
- C. 使用點播模式. 設定閱讀容量單位(RCU)和書寫容量單位(WCU)的高度足以適應工作量的變化.
- D. 使用點播模式. 指定保留容量的讀取容量單位和寫寫容量單位。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用提供模式和DynamoDB標準-不經常存取(DynamoDB Standard-IA). 預測工作量的後備能力。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用提供模式。 指定讀能力單位(RCU)和寫能力單位(WCU)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用點播模式. 設定閱讀容量單位(RCU)和書寫容量單位(WCU)的高度足以適應工作量的變化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用點播模式. 指定保留容量的讀取容量單位和寫寫容量單位。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #349

**題目**
一家公司在Amazon Aurora PostgreSQL 資料庫(database)中儲存機密資料,位於東南-3 區域(Region). 資料庫(database)用一個AWS Key Management Service(AWS KMS)客戶管理金鑰加密. 該公司最近被收購,必須同收購公司的AWS帳戶在東南-3安全分享備份(backup)的資料庫(database)。 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立資料庫(database) 快照(snapshot). 複製快照(snapshot)到一個新的未加密的快照(snapshot). 與收購公司的AWS帳戶共享新的快照(snapshot)。
- B. 建立資料庫(database) 快照(snapshot). 將收購公司的AWS帳戶新增到 KMS 關鍵政策中。 與收購公司的AWS帳戶共享快照(snapshot)。
- C. 建立 資料庫(database) 快照(snapshot),使用不同的 AWS 管理的 KMS 金鑰. 在 KMS 金鑰別名中新增收購公司的 AWS 帳戶。 與收購公司的AWS帳戶共享快照(snapshot).
- D. 建立資料庫(database) 快照(snapshot). 下載資料庫(database) 快照(snapshot). 把資料庫(database) 快照(snapshot)上傳到Amazon S3桶上. 更新S3 儲存桶政策(bucket policy), 允許從收購公司的AWS帳戶存取。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立資料庫(database) 快照(snapshot). 將收購公司的AWS帳戶新增到 KMS 關鍵政策中。 與收購公司的AWS帳戶共享快照(snapshot)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立資料庫(database) 快照(snapshot). 複製快照(snapshot)到一個新的未加密的快照(snapshot). 與收購公司的AWS帳戶共享新的快照(snapshot)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 資料庫(database) 快照(snapshot),使用不同的 AWS 管理的 KMS 金鑰. 在 KMS 金鑰別名中新增收購公司的 AWS 帳戶。 與收購公司的AWS帳戶共享快照(snapshot)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立資料庫(database) 快照(snapshot). 下載資料庫(database) 快照(snapshot). 把資料庫(database) 快照(snapshot)上傳到Amazon S3桶上. 更新S3 儲存桶政策(bucket policy), 允許從收購公司的AWS帳戶存取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #350

**題目**
一家公司使用100GB Amazon RDS,用於微軟SQL Server Single-AZ DB例項在我們東-1 區域(Region)中儲存客戶交易. 公司需要高可用性(high availability)和自動回收DB例項. 該公司還必須每年數次報告RDS 資料庫(database)的情況。 報告過程使交易比通常需要更長的時間才能存入客戶帳戶。 該公司需要一種能夠改善報告程序業績的解決辦法。 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 將 DB 例項從單一 AZ DB 例項修改為多 AZ 部署。
- B. 使用當前 DB 例項的 快照(snapshot)。 將快照(snapshot)恢復到另一個可用區(Availability Zone)的新的RDS部署.
- C. 在不同的可用區(Availability Zone)中建立一個讀取的 DB 例項複製件. 將所有報告要求都標註在讀本上。
- D. 將 資料庫(database) 移動到 RDS 自定義。
- E. 使用 RDS 代理限制向維護視窗報告請求。

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：將 DB 例項從單一 AZ DB 例項修改為多 AZ 部署 。此選項符合題目條件，能有效滿足核心需求。
- C：在不同的可用區(Availability Zone)中建立一個讀取的 DB 例項複製件. 將所有報告要求都標註在讀本上。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：使用當前 DB 例項的 快照(snapshot)。 將快照(snapshot)恢復到另一個可用區(Availability Zone)的新的RDS部署。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 資料庫(database) 移動到 RDS 自定義 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用 RDS 代理限制向維護視窗報告請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #351

**題目**
一家公司正在將其資料管理應用程式移至AWS. 公司希望向事件驅動的架構過渡. 架構需要更加分佈,在進行工作fiow的不同方面時使用無伺服器的概念. 公司還希望將營運開銷(operational overhead)最小化. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在 AWS Glue 中構建工作空間. 使用 AWS Glue 來引用 AWS Lambda 函式來處理 workfiow 步驟.
- B. 在 AWS 步驟函式中構建工作fiow。 在 Amazon EC2 例項上應用應用程式。 使用 Step 函式在 EC2 例項上引用 workfiow 步驟。
- C. 在Amazon EventBridge中構建工作空間. 使用 EventBridge 來引用 AWS Lambda 函式在一個處理工作fiow 步驟的時間表上.
- D. 在 AWS 步驟函式中構建工作fiow。 使用 Step 函式建立狀態機器。 使用狀態機器來引用AWS Lambda函式來處理workfiow步驟.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在 AWS 步驟函式中構建工作fiow。 使用 Step 函式建立狀態機器。 使用狀態機器來引用AWS Lambda函式來處理workfiow步驟。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 AWS Glue 中構建工作空間. 使用 AWS Glue 來引用 AWS Lambda 函式來處理 workfiow 步驟。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 AWS 步驟函式中構建工作fiow。 在 Amazon EC2 例項上應用應用程式。 使用 Step 函式在 EC2 例項上引用 workfiow 步驟 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon EventBridge中構建工作空間. 使用 EventBridge 來引用 AWS Lambda 函式在一個處理工作fiow 步驟的時間表上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #352

**題目**
一家公司正在為線上多人遊戲設計網路. 遊戲使用UDP網路協議,並將部署在八個AWS區域. 網路架構需要最小化延遲(latency)和包丟失,讓終端使用者獲得高質量的遊戲體驗. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在每個區域(Region)中設定一箇中轉閘道器. 在每個過境閘道器之間建立區域(Region)對等附件。
- B. 在每個 區域(Region) 中設定 AWS 全球加速器,並配有 UDP 聽器和端點組.
- C. 與UDP開啟設定了Amazon CloudFront. 在每個 區域(Region) 中配置一個來源。
- D. 每個區域(Region)之間設定一個VPC對等網格. 每個VPC開啟UDP.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在每個 區域(Region) 中設定 AWS 全球加速器,並配有 UDP 聽器和端點組。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在每個區域(Region)中設定一箇中轉閘道器. 在每個過境閘道器之間建立區域(Region)對等附件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：與UDP開啟設定了Amazon CloudFront. 在每個 區域(Region) 中配置一個來源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：每個區域(Region)之間設定一個VPC對等網格. 每個VPC開啟UDP。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #353

**題目**
一家公司在一個單一的可用區(Availability Zone)中,在Amazon EC2例項上託管一個三級網路應用程式. 網路應用程式使用一個在EC2例項上託管的自控MySQL 資料庫(database),將資料儲存在亞馬遜彈性塊儲存器(Amazon EBS)的體積中. MySQL 資料庫(database)目前使用1 TB Productioned IOPS SSD(io2) EBS磁碟區. 公司預計流量為1000 IOPS, 公司希望儘量減少任何干擾,穩定效能,降低成本,同時保留將IOPS增加一倍的能力. 公司希望將資料庫(database)級移動到一個完全管理的解決辦法,這種解決辦法非常可用,並且能容忍錯誤。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 為 MySQL DB 例項使用一個多AZ 部署 Amazon RDS,並帶有io2 Block Express EBS 磁碟區.
- B. 為 MySQL DB 例項使用一個多AZ 部署 Amazon RDS,其通用 SSD(gp2) EBS 磁碟區。
- C. 使用亞馬遜S3 Intelligent-Tiering存取級.
- D. 使用兩個大型的EC2例項以主動被動模式託管資料庫(database).

**答案**
B


**詳解**
正確答案是 **B**。
- B：為 MySQL DB 例項使用一個多AZ 部署 Amazon RDS,其通用 SSD(gp2) EBS 磁碟區。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 MySQL DB 例項使用一個多AZ 部署 Amazon RDS,並帶有io2 Block Express EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用亞馬遜S3 Intelligent-Tiering存取級。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用兩個大型的EC2例項以主動被動模式託管資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #354

**題目**
一個公司在AWS上託管一個沒有伺服器的應用程式. 該應用程式使用Amazon API Gateway,AWS Lambda,以及用於PostgreSQL 資料庫(database)的Amazon RDS. 該公司注意到,由於資料庫(database)在高峰流量或無法預測流量期間的連線中斷,應用錯誤增加。 公司需要一個解決方案,以最小的修改程式碼來減少應用失敗. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 降低蘭巴達貨幣率.
- B. 在 RDS DB 例項上啟用 RDS 代理。
- C. 調整 RDS DB 例項類大小以接受更多的連線。
- D. 用點播縮放將資料庫(database)移動到Amazon DynamoDB.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在 RDS DB 例項上啟用 RDS 代理 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：降低蘭巴達貨幣率。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：調整 RDS DB 例項類大小以接受更多的連線 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：用點播縮放將資料庫(database)移動到Amazon DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #355

**題目**
一家公司正在將舊的應用程式遷移到AWS. 該應用程式每小時執行一個批次工作,並且是CPU密集的. 批次工作平均需要15分鐘使用一個proposes伺服器. 伺服器擁有64個虛擬CPU(vCPU)和512個GiB記憶體. 哪個解決方案將在15分鐘內執行 與LEAST 營運開銷(operational overhead)?

**選項**
- A. 使用帶有功能縮放的AWS Lambda.
- B. 使用帶有AWS Fargate的亞馬遜彈性容器服務(Amazon ECS).
- C. 使用帶有 AWS 自動縮放的 Amazon Lightsail。
- D. 在Amazon EC2上使用AWS批次.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用帶有功能縮放的AWS Lambda。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用帶有AWS Fargate的亞馬遜彈性容器服務(Amazon ECS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用帶有 AWS 自動縮放的 Amazon Lightsail 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon EC2上使用AWS批次。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #356

**題目**
一公司將其資料物件儲存在Amazon S3標準儲存中. 一名解決方案架構師發現,在30天后很少獲得75%的資料. 公司需要所有資料以相同的高可用性(high availability)和韌性保持即時可存取,但公司希望儘量降低儲存成本. 哪些儲存解決方案將滿足這些要求?

**選項**
- A. 30天后將資料物件移動到 S3 Glacier Deep Archive。
- B. 資料物件在30天后移動到S3標準-不頻繁存取(S3 Standard-IA).
- C. 資料物件在30天后移動到S3 One Zone-不頻繁存取(S3 One Zone-IA).
- D. 立即將資料物件移動到S3 One Zone-In頻繁存取(S3 One Zone-IA).

**答案**
B


**詳解**
正確答案是 **B**。
- B：資料物件在30天后移動到S3標準-不頻繁存取(S3 Standard-IA)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：30天后將資料物件移動到 S3 Glacier Deep Archive 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：資料物件在30天后移動到S3 One Zone-不頻繁存取(S3 One Zone-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：立即將資料物件移動到S3 One Zone-In頻繁存取(S3 One Zone-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #357

**題目**
一個遊戲公司正在將其公共記分牌從資料中心移動到AWS雲. 公司使用應用程式負載平衡器(Application Load Balancer)背後的Amazon EC2 Windows Server例項來託管其動態應用. 公司需要為應用程式提供大量可用的儲存解決方案. 應用程式包括靜態檔案和動態伺服器側碼. 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 在Amazon S3上儲存靜態檔案. 使用 Amazon CloudFront 在邊緣快取物件.
- B. 在Amazon S3上儲存靜態檔案. 使用 Amazon ElastiCache 在邊緣快取物件.
- C. 在亞馬遜彈性檔案系統(Amazon EFS)上儲存伺服器側碼. 在每個EC2例項上掛載 EFS 卷以共享檔案。
- D. 為Windows檔案伺服器在Amazon FSx上儲存伺服器側碼. 在每個 EC2 例項上掛載用於 Windows 檔案伺服器卷的 FSx 以共享檔案。
- E. 將伺服器側碼儲存在通用SSD(gp2) Amazon Elastic Block Store(Amazon EBS) 捲上. 在每個 EC2 例項上掛載 EBS 磁碟區以共享檔案。

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：在Amazon S3上儲存靜態檔案. 使用 Amazon CloudFront 在邊緣快取物件。此選項符合題目條件，能有效滿足核心需求。
- D：為Windows檔案伺服器在Amazon FSx上儲存伺服器側碼. 在每個 EC2 例項上掛載用於 Windows 檔案伺服器卷的 FSx 以共享檔案 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在Amazon S3上儲存靜態檔案. 使用 Amazon ElastiCache 在邊緣快取物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在亞馬遜彈性檔案系統(Amazon EFS)上儲存伺服器側碼. 在每個EC2例項上掛載 EFS 卷以共享檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：將伺服器側碼儲存在通用SSD(gp2) Amazon Elastic Block Store(Amazon EBS) 捲上. 在每個 EC2 例項上掛載 EBS 磁碟區以共享檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #358

**題目**
一家社交媒體公司在應用程式負載平衡器(Application Load Balancer)(ALB)之後執行其在Amazon EC2例項上的應用. ALB是Amazon CloudFront分佈的起源. 該應用程式有超過十億張影象儲存在Amazon S3桶中,每秒處理數千張影象. 公司希望將影象的大小動態調整,為客戶服務適當的格式. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在 EC2 例項上安裝外部影象管理庫。 使用影象管理庫處理影象.
- B. 建立 CloudFront 原始碼請求策略。 使用策略可以自動調整影象大小,並服務基於請求中的使用者代理HTTP頭的適當格式.
- C. 使用帶有外部影象管理庫的 Lambda@Edge 函式。 將Lambda@Edge功能與服務影象的CloudFront行為聯絡起來.
- D. 建立 CloudFront 響應頭政策。 使用策略可以自動調整影象大小,並服務基於請求中的使用者代理HTTP頭的適當格式.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 CloudFront 響應頭政策。 使用策略可以自動調整影象大小,並服務基於請求中的使用者代理HTTP頭的適當格式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 EC2 例項上安裝外部影象管理庫。 使用影象管理庫處理影象。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 CloudFront 原始碼請求策略。 使用策略可以自動調整影象大小,並服務基於請求中的使用者代理HTTP頭的適當格式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用帶有外部影象管理庫的 Lambda@Edge 函式。 將Lambda@Edge功能與服務影象的CloudFront行為聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #359

**題目**
醫院需要將患者記錄儲存在Amazon S3桶中. 醫院的合規(compliance)小組必須確保所有受保護的健康資訊在中途和休息時都加密。 合規(compliance)團隊必須管理加密(encryption)關鍵值供資料休息. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在AWS Certificate Manager(ACM)中建立一個公開的SSL/TLS憑證. 將憑證與Amazon S3聯絡起來。 每個 S3 儲存桶(S3 bucket) 配置預設的 加密(encryption),以使用伺服器側的 加密(encryption) 與 AWS KMS 金鑰(SSE-KMS). 指派合規(compliance)團隊管理KMS金鑰.
- B. 在 S3 儲存桶(S3 bucket) 政策上使用 aws:Secure Transport 條件,只允許在 HTTPS(TLS) 上加密連線. 每個 S3 儲存桶(S3 bucket) 配置預設的 加密(encryption) 使用伺服器側的 加密(encryption) 與 S3 管理的 加密(encryption) 鍵(SSE- S3). 指派合規(compliance)團隊管理SSE-S3金鑰.
- C. 在 S3 儲存桶(S3 bucket) 政策上使用 aws:Secure Transport 條件,只允許在 HTTPS(TLS) 上加密連線. 每個S3 儲存桶(S3 bucket)配置預設的加密(encryption),使用伺服器側式的加密(encryption),並配有AWS KMS金鑰(SSE-KMS). 指派合規(compliance)團隊管理KMS金鑰.
- D. 使用 aws: 在 S3 儲存桶(S3 bucket) 政策上保證運輸條件, 只允許在 HTTPS(TLS) 上加密連線。 使用Amazon Macie來保護儲存在Amazon S3中的敏感資料. 指派合規(compliance)團隊管理梅西.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 S3 儲存桶(S3 bucket) 政策上使用 aws:Secure Transport 條件,只允許在 HTTPS(TLS) 上加密連線. 每個S3 儲存桶(S3 bucket)配置預設的加密(encryption),使用伺服器側式的加密(encryption),並配有AWS KMS金鑰(SSE-KMS). 指派合規(compliance)團隊管理KMS金鑰。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在AWS Certificate Manager(ACM)中建立一個公開的SSL/TLS憑證. 將憑證與Amazon S3聯絡起來。 每個 S3 儲存桶(S3 bucket) 配置預設的 加密(encryption),以使用伺服器側的 加密(encryption) 與 AWS KMS 金鑰(SSE-KMS). 指派合規(compliance)團隊管理KMS金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 S3 儲存桶(S3 bucket) 政策上使用 aws:Secure Transport 條件,只允許在 HTTPS(TLS) 上加密連線. 每個 S3 儲存桶(S3 bucket) 配置預設的 加密(encryption) 使用伺服器側的 加密(encryption) 與 S3 管理的 加密(encryption) 鍵(SSE- S3). 指派合規(compliance)團隊管理SSE-S3金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 aws: 在 S3 儲存桶(S3 bucket) 政策上保證運輸條件, 只允許在 HTTPS(TLS) 上加密連線。 使用Amazon Macie來保護儲存在Amazon S3中的敏感資料. 指派合規(compliance)團隊管理梅西。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #360

**題目**
一家公司使用Amazon API Gateway在同一個VPC中執行兩個RESTAPI的私人閘道器. BuyStock RESTful網路服務稱為CheckFunds RESTful網路服務,以確保在購買股票之前有足夠的資金。 該公司在VPC fiow日誌中注意到,BuyStock RESTful網路服務將CheckFunds RESTful網路服務稱為網際網路上的CheckFunds RESTful網路服務,而不是透過VPC. 一個解決方案架構師必須實施一個解決方案,以便API透過VPC進行溝通. FEWEST修改程式碼後,哪一種解決方案能滿足這些要求?

**選項**
- A. 在 HTTP 標題中新增一個 X- API- Key 頭用於授權。
- B. 使用介面端點。
- C. 使用閘道器端點。
- D. 在兩個 REST API 之間新增一個 Amazon 簡單的佇列服務( Amazon SQS) 佇列。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 HTTP 標題中新增一個 X- API- Key 頭用於授權 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用介面端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用閘道器端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在兩個 REST API 之間新增一個 Amazon 簡單的佇列服務( Amazon SQS) 佇列 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #361

**題目**
一家公司在AWS上主持多人遊戲應用. 公司希望該應用程式使用次毫秒延遲(latency)讀取資料,並對歷史資料進行一次性查詢. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 經常存取的資料使用 Amazon RDS。 執行一個定期自定義指令碼,將資料匯出為 Amazon S3 桶。
- B. 直接將資料儲存在Amazon S3桶中. 實施S3 生命週期政策(Lifecycle policy),將舊資料移動到S3 Glacier Deep Archive進行長期儲存. 透過使用Amazon Athena對Amazon S3中的資料進行一次性查詢.
- C. 使用與DynamoDB加速器(DAX)的Amazon DynamoDB來獲取經常存取的資料. 透過使用 DynamoDB 表匯出將資料匯出為 Amazon S3 桶。 透過使用Amazon Athena對Amazon S3中的資料進行一次性查詢.
- D. 經常存取的資料使用Amazon DynamoDB. 開啟流線到Amazon Kinesis資料流. 使用Amazon Kinesis Data Firehose來讀取來自Kinesis Data Streams的資料. 把記錄存放在Amazon S3桶裡.

**答案**
B


**詳解**
正確答案是 **B**。
- B：直接將資料儲存在Amazon S3桶中. 實施S3 生命週期政策(Lifecycle policy),將舊資料移動到S3 Glacier Deep Archive進行長期儲存. 透過使用Amazon Athena對Amazon S3中的資料進行一次性查詢。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：經常存取的資料使用 Amazon RDS。 執行一個定期自定義指令碼,將資料匯出為 Amazon S3 桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用與DynamoDB加速器(DAX)的Amazon DynamoDB來獲取經常存取的資料. 透過使用 DynamoDB 表匯出將資料匯出為 Amazon S3 桶。 透過使用Amazon Athena對Amazon S3中的資料進行一次性查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：經常存取的資料使用Amazon DynamoDB. 開啟流線到Amazon Kinesis資料流. 使用Amazon Kinesis Data Firehose來讀取來自Kinesis Data Streams的資料. 把記錄存放在Amazon S3桶裡。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #362

**題目**
公司使用付款處理系統,要求按傳送的順序接收特定付款ID的資訊。 否則,付款可能處理不當。 設計師應採取哪些行動來滿足這一要求?(選二.

**選項**
- A. 將訊息寫入 Amazon DynamoDB 表格, 以支付ID作為分割槽鍵。
- B. 將訊息寫入 Amazon Kinesis 資料流, 以付款ID作為分割槽鍵。
- C. 將訊息寫入一個 Amazon ElastiCache 的 Memcached 叢集, 以支付 ID 作為金鑰。
- D. 將訊息寫入 Amazon 簡單佇列服務( Amazon SQS) 佇列。 設定訊息屬性以使用支付ID.
- E. 將訊息寫入亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列. 設定訊息組以使用支付ID。

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：將訊息寫入 Amazon Kinesis 資料流, 以付款ID作為分割槽鍵 。此選項符合題目條件，能有效滿足核心需求。
- D：將訊息寫入 Amazon 簡單佇列服務( Amazon SQS) 佇列。 設定訊息屬性以使用支付ID。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：將訊息寫入 Amazon DynamoDB 表格, 以支付ID作為分割槽鍵 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將訊息寫入一個 Amazon ElastiCache 的 Memcached 叢集, 以支付 ID 作為金鑰 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：將訊息寫入亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列. 設定訊息組以使用支付ID 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #363

**題目**
一家公司正在構建一個遊戲系統,需要傳送獨特的事件,以同時分離領導板,匹配,認證服務. 公司需要AWS事件驅動系統,保證事件秩序. 哪種解決辦法能滿足這些要求?

**選項**
- A. Amazon EventBridge 活動匯流排
- B. 亞馬遜簡易通知服務(Amazon SNS) FIFO主題
- C. 亞馬遜簡易通知服務(Amazon SNS)標準主題
- D. 亞馬遜簡易佇列服務( Amazon SQS) FIFO 佇列

**答案**
B


**詳解**
正確答案是 **B**。
- B：亞馬遜簡易通知服務(Amazon SNS) FIFO主題。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：Amazon EventBridge 活動匯流排。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：亞馬遜簡易通知服務(Amazon SNS)標準主題。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：亞馬遜簡易佇列服務( Amazon SQS) FIFO 佇列。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #364

**題目**
一家醫院正在設計一種新的應用程式,收集病人的症狀。 醫院決定在建築中使用亞馬遜簡易佇列服務(Amazon SQS)和亞馬遜簡易通知服務(Amazon SNS). 一名解決方案設計師正在審查基礎設施設計。 資料必須在休息和過境時加密。 只有經授權的醫院人員才能查閱資料。 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 在SQS元件上開啟伺服器側加密(encryption). 更新預設金鑰政策, 將金鑰的使用限制在一組授權的主機上。
- B. 透過使用AWS Key Management Service(AWS KMS)客戶端管理金鑰在SNS元件上開啟伺服器側加密(encryption). 應用關鍵政策,將關鍵用途限制在一套經授權的主要負責人。
- C. 在SNS元件上開啟加密(encryption). 更新預設金鑰政策, 將金鑰的使用限制在一組授權的主機上。 在主題策略中設定一個條件,只允許在 TLS 上加密連線.
- D. 透過使用AWS Key Management Service(AWS KMS)客戶端管理金鑰在SQS元件上開啟伺服器側加密(encryption). 應用關鍵政策,將關鍵用途限制在一套經授權的主要負責人。 在佇列策略中設定一個條件, 只允許在 TLS 上加密連線。
- E. 透過使用AWS Key Management Service(AWS KMS)客戶端管理金鑰在SQS元件上開啟伺服器側加密(encryption). 應用IAM 政策(IAM policy),將金鑰使用限制在一組授權主機. 在佇列策略中設定一個條件, 只允許在 TLS 上加密連線。

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：在SNS元件上開啟加密(encryption). 更新預設金鑰政策, 將金鑰的使用限制在一組授權的主機上。 在主題策略中設定一個條件,只允許在 TLS 上加密連線。此選項符合題目條件，能有效滿足核心需求。
- D：透過使用AWS Key Management Service(AWS KMS)客戶端管理金鑰在SQS元件上開啟伺服器側加密(encryption). 應用關鍵政策,將關鍵用途限制在一套經授權的主要負責人。 在佇列策略中設定一個條件, 只允許在 TLS 上加密連線 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在SQS元件上開啟伺服器側加密(encryption). 更新預設金鑰政策, 將金鑰的使用限制在一組授權的主機上 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：透過使用AWS Key Management Service(AWS KMS)客戶端管理金鑰在SNS元件上開啟伺服器側加密(encryption). 應用關鍵政策,將關鍵用途限制在一套經授權的主要負責人。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：透過使用AWS Key Management Service(AWS KMS)客戶端管理金鑰在SQS元件上開啟伺服器側加密(encryption). 應用IAM 政策(IAM policy),將金鑰使用限制在一組授權主機. 在佇列策略中設定一個條件, 只允許在 TLS 上加密連線 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #365

**題目**
一家公司執行著由Amazon RDS支援的網路應用程式. 一個新的資料庫(database)管理員由於在資料庫(database)表中不慎編輯資訊而導致資料丟失. 為了幫助從這類事件中恢復過來,公司希望能夠將資料庫(database)型機車從過去30天內的任何變化前5分鐘恢復到狀態. 解決方案設計師在設計中應包含哪些特點,以滿足這一要求?

**選項**
- A. 讀取複製品
- B. 手動快照
- C. 自動備份
- D. 多阿Z部署

**答案**
C


**詳解**
正確答案是 **C**。
- C：自動備份。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：讀取複製品。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：手動快照。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：多阿Z部署。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #366

**題目**
一家公司的網路應用包括Amazon API Gateway API在AWS Lambda功能前的Amazon DynamoDB 資料庫(database). Lambda函式處理業務邏輯,DynamotB表主機資料. 該應用程式使用Amazon Cognitto使用者池來識別該應用程式的個人使用者. 一個解決方案架構師需要更新應用程式,這樣只有擁有訂閱的使用者才能存取溢價內容. LEAST 營運開銷(operational overhead)將滿足這一要求的哪一種解決方案?

**選項**
- A. 在 API Gateway API 上啟用 API 快取和快取。
- B. 在API閘道器API上設定AWS WAF. 建立一條規則來過濾有訂閱的使用者.
- C. 對DynamoDB表中的溢價內容應用精細的IAM許可權.
- D. 實施API使用計劃和API金鑰,限制沒有訂閱的使用者存取.

**答案**
C


**詳解**
正確答案是 **C**。
- C：對DynamoDB表中的溢價內容應用精細的IAM許可權。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 API Gateway API 上啟用 API 快取和快取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在API閘道器API上設定AWS WAF. 建立一條規則來過濾有訂閱的使用者。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：實施API使用計劃和API金鑰,限制沒有訂閱的使用者存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #367

**題目**
一家公司正在使用Amazon Route 53 延遲(latency)-基於路由的線路,為世界各地的使用者提供其基於UDP的應用程式的路由請求. 該應用程式設在該公司在美國、亞洲和歐洲的虛擬資料中心的冗餘伺服器上。 該公司的合規(compliance)要求規定,申請必須設在辦公地點。 公司希望改進應用程式的效能和可用性. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 配置三個AWS區域的3個網路負載平衡器(NLB),以解決站點問題。 透過使用AWS Global Accelerator建立加速器,並將NLB登記為其終點. 使用指向加速器 DNS 的 CNAME 來提供對應用程式的存取許可權。
- B. 在三個AWS區域配置三個應用程式負載平衡器(ALBs),以解決前提端點. 使用 AWS 全球加速器建立加速器,並將 ALB 註冊為其終點。 使用指向加速器 DNS 的 CNAME 來提供對應用程式的存取許可權。
- C. 配置三個AWS區域的3個網路負載平衡器(NLB),以解決站點問題。 在"53路"中,建立基於延遲(latency)的紀錄,指向三個NLB,並將其作為Amazon CloudFront發行的源頭. 使用指向 CloudFront DNS 的 CNAME 來提供對應用程式的存取許可權。
- D. 在三個AWS區域配置三個應用程式負載平衡器(ALBs),以解決前提端點. 在"53路"中,建立基於延遲(latency)的唱片,指向三個ALB,並將其作為Amazon CloudFront發行的源頭. 使用指向 CloudFront DNS 的 CNAME 來提供對應用程式的存取許可權。

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置三個AWS區域的3個網路負載平衡器(NLB),以解決站點問題。 透過使用AWS Global Accelerator建立加速器,並將NLB登記為其終點. 使用指向加速器 DNS 的 CNAME 來提供對應用程式的存取許可權 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在三個AWS區域配置三個應用程式負載平衡器(ALBs),以解決前提端點. 使用 AWS 全球加速器建立加速器,並將 ALB 註冊為其終點。 使用指向加速器 DNS 的 CNAME 來提供對應用程式的存取許可權 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置三個AWS區域的3個網路負載平衡器(NLB),以解決站點問題。 在"53路"中,建立基於延遲(latency)的紀錄,指向三個NLB,並將其作為Amazon CloudFront發行的源頭. 使用指向 CloudFront DNS 的 CNAME 來提供對應用程式的存取許可權 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在三個AWS區域配置三個應用程式負載平衡器(ALBs),以解決前提端點. 在"53路"中,建立基於延遲(latency)的唱片,指向三個ALB,並將其作為Amazon CloudFront發行的源頭. 使用指向 CloudFront DNS 的 CNAME 來提供對應用程式的存取許可權 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #368

**題目**
一個解決方案架構師希望所有新使用者都有特定的複雜性要求和IAM使用者密碼的強制輪換期. 解決方案設計師應該怎麼做才能做到這一點?

**選項**
- A. 為整個AWS帳戶設定總體密碼政策.
- B. 為AWS帳戶中的每個IAM使用者設定密碼策略.
- C. 使用第三方供應商軟體設定密碼要求.
- D. 在 Create  newuser 事件上附加一條 Amazon CloudWatch 規則,以設定帶有相應要求的密碼.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為整個AWS帳戶設定總體密碼政策。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為AWS帳戶中的每個IAM使用者設定密碼策略。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用第三方供應商軟體設定密碼要求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Create  newuser 事件上附加一條 Amazon CloudWatch 規則,以設定帶有相應要求的密碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #369

**題目**
一家公司將一個應用程式遷移到 Amazon EC2 Linux 例項。 其中1例EC2按期執行若干個1小時的任務。 這些任務由不同的團隊編寫,沒有共同的程式語言. 該公司對業績和可擴展性(scalability)感到關切,而這些任務則在單一情況下進行。 一個解決方案設計師需要實施一個解決方案來解決這些關切. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用 AWS 批次將任務作為任務執行。 使用 Amazon EventBridge(Amazon CloudWatch事件)來安排工作。
- B. 將 EC2 例項轉換為容器。 使用 AWS App Runner 按需建立容器以將任務作為工作執行.
- C. 將任務複製到 AWS Lambda 函式中. 透過使用Amazon EventBridge(Amazon CloudWatch事件)來安排Lambda函式.
- D. 建立執行任務的 EC2 例項的 Amazon 機器影象( AMI)。 與 AMI 建立 Auto Scaling 群組(Auto Scaling group) 以執行多個例項副本。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 AWS 批次將任務作為任務執行。 使用 Amazon EventBridge(Amazon CloudWatch事件)來安排工作。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將 EC2 例項轉換為容器。 使用 AWS App Runner 按需建立容器以將任務作為工作執行。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將任務複製到 AWS Lambda 函式中. 透過使用Amazon EventBridge(Amazon CloudWatch事件)來安排Lambda函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立執行任務的 EC2 例項的 Amazon 機器影象( AMI)。 與 AMI 建立 Auto Scaling 群組(Auto Scaling group) 以執行多個例項副本 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #370

**題目**
一個公司在一個VPC中執行一個公開的三級網路應用程式. 該應用程式執行在跨多個可用區(Availability Zones)的Amazon EC2例項上. 在私人子網執行的EC2 執行個體需要透過網際網路與許可證伺服器通訊. 公司需要管理解決方案,儘量減少運營維護. 哪種解決辦法符合這些要求?

**選項**
- A. 在公共子網中提供NAT例項。 修改每個私有子網的路由表,並附帶一條指向NAT例項的預設路由.
- B. 在私人子網中提供NAT例項。 修改每個私有子網的路由表,並附帶一條指向NAT例項的預設路由.
- C. 在公共子網中提供一個NAT閘道器。 修改每個私有子網的路由表,並附帶一條指向NAT閘道器的預設路由.
- D. 在私人子網中提供NAT閘道器. 修改每個私有子網的路由表,並附帶一條指向NAT閘道器的預設路由.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在公共子網中提供一個NAT閘道器。 修改每個私有子網的路由表,並附帶一條指向NAT閘道器的預設路由。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在公共子網中提供NAT例項。 修改每個私有子網的路由表,並附帶一條指向NAT例項的預設路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在私人子網中提供NAT例項。 修改每個私有子網的路由表,並附帶一條指向NAT例項的預設路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在私人子網中提供NAT閘道器. 修改每個私有子網的路由表,並附帶一條指向NAT閘道器的預設路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #371

**題目**
一家公司需要建立一個亞馬遜彈性Kubernetes Service(Amazon EKS)叢集,以託管一個數位媒體流媒體應用. EKS叢集將使用由Amazon Elastic Block Store(Amazon EBS)卷支援的管理節點組進行儲存. 公司必須使用儲存在AWS Key Management Service(AWS KMS)的客戶管理金鑰加密所有休息資料. 哪些行動與LEAST 營運開銷(operational overhead)將滿足這一要求?(選二.

**選項**
- A. 使用 Kubernetes 外掛,使用客戶管理的金鑰來進行資料 加密(encryption)。
- B. EKS叢集建立後,定位EBS 磁碟區. 透過使用客戶管理的金鑰啟用 加密(encryption)。
- C. 在 AWS 區域(Region) 預設情況下啟用 EBS 加密(encryption), 將在此建立 EKS 叢集。 選擇客戶端管理的金鑰為預設金鑰。
- D. 建立 EKS 叢集。 建立IAM角色,其政策是允許客戶管理金鑰. 將角色與EKS叢集聯絡起來.
- E. 在 EKS 叢集中以 Kubernetes 金鑰儲存客戶管理金鑰。 使用客戶管理金鑰加密 EBS 磁碟區。

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：使用 Kubernetes 外掛,使用客戶管理的金鑰來進行資料 加密(encryption) 。此選項符合題目條件，能有效滿足核心需求。
- E：在 EKS 叢集中以 Kubernetes 金鑰儲存客戶管理金鑰。 使用客戶管理金鑰加密 EBS 磁碟區 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：EKS叢集建立後,定位EBS 磁碟區. 透過使用客戶管理的金鑰啟用 加密(encryption) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 AWS 區域(Region) 預設情況下啟用 EBS 加密(encryption), 將在此建立 EKS 叢集。 選擇客戶端管理的金鑰為預設金鑰 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 EKS 叢集。 建立IAM角色,其政策是允許客戶管理金鑰. 將角色與EKS叢集聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #372

**題目**
一個公司想將一個甲骨文資料庫(database)遷移到AWS. 資料庫(database)由一個單表組成,包含數百萬高解析度的地理資訊系統影象,並用地理程式碼識別. 當發生自然災害時,每隔幾分鐘就會更新數萬幅影象. 每個地理程式碼都有一個與之相關的單一影象或行. 該公司希望有一個在此類事件中可以大量利用和擴充套件的解決辦法。 哪種解決辦法符合這些要求?

**選項**
- A. 在 資料庫(database) 表中儲存影象和地理程式碼。 使用 Oracle 執行在 Amazon RDS 多AZ DB 例項上。
- B. 將影象儲存在 Amazon S3 桶中. 使用以地理程式碼為鍵的Amazon DynamoDB,將影象S3 URL作為值.
- C. 將影象和地理程式碼儲存在 Amazon DynamoDB 表格中。 在負載高的時候配置 DynamoDB 加速器(DAX).
- D. 將影象儲存在 Amazon S3 桶中. 在 資料庫(database) 表中儲存地理程式碼和影象 S3 URL。 使用 Oracle 執行在 Amazon RDS 多AZ DB 例項上。

**答案**
B


**詳解**
正確答案是 **B**。
- B：將影象儲存在 Amazon S3 桶中. 使用以地理程式碼為鍵的Amazon DynamoDB,將影象S3 URL作為值。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 資料庫(database) 表中儲存影象和地理程式碼。 使用 Oracle 執行在 Amazon RDS 多AZ DB 例項上 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將影象和地理程式碼儲存在 Amazon DynamoDB 表格中。 在負載高的時候配置 DynamoDB 加速器(DAX)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將影象儲存在 Amazon S3 桶中. 在 資料庫(database) 表中儲存地理程式碼和影象 S3 URL。 使用 Oracle 執行在 Amazon RDS 多AZ DB 例項上 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #373

**題目**
一家公司有一個應用程式,從汽車的IOT感測器收集資料. 資料流經Amazon S3透過Amazon Kinesis Data Firehose儲存. 資料每年產生數萬億S3天體. 每天早上,公司利用前30天的資料來重新訓練一套機器學習(ML)模型. 每年4次,公司使用前12個月的資料進行分析,並訓練其他ML模型. 資料必須儘可能少地拖延一年。 一年之後,必須保留資料以便存檔。 哪些儲存解決方案符合這些要求?

**選項**
- A. 使用S3 Intelligent-Tiering儲存級. 建立一個 S3 生命週期政策(Lifecycle policy),在1年後向 S3 Glacier Deep Archive 轉換物件.
- B. 使用S3 Intelligent-Tiering儲存級. 配置 S3 Intelligent-Tiering 在1年後自動移動物件到 S3 Glacier Deep Archive.
- C. 使用S3標準-不頻繁存取(S3 Standard-IA)儲存級. 建立一個 S3 生命週期政策(Lifecycle policy),在1年後向 S3 Glacier Deep Archive 轉換物件.
- D. 使用S3標準儲存類. 在30天后建立一個S3 生命週期政策(Lifecycle policy)來轉換物件到S3標準-不頻繁存取(S3 Standard-IA),然後在1年後建立S3 Glacier Deep Archive.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用S3標準儲存類. 在30天后建立一個S3 生命週期政策(Lifecycle policy)來轉換物件到S3標準-不頻繁存取(S3 Standard-IA),然後在1年後建立S3 Glacier Deep Archive。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用S3 Intelligent-Tiering儲存級. 建立一個 S3 生命週期政策(Lifecycle policy),在1年後向 S3 Glacier Deep Archive 轉換物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用S3 Intelligent-Tiering儲存級. 配置 S3 Intelligent-Tiering 在1年後自動移動物件到 S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用S3標準-不頻繁存取(S3 Standard-IA)儲存級. 建立一個 S3 生命週期政策(Lifecycle policy),在1年後向 S3 Glacier Deep Archive 轉換物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #374

**題目**
一家公司正在我們東1區域(Region)的3個單獨的VPC中執行多個業務應用. 應用程式必須能夠在VPC之間通訊. 這些應用程式還必須能夠持續地每天將數百千兆位元組的資料傳送給一個在單一的前提資料中心執行的延遲(latency)敏感應用程式。 一個解決方案架構師需要設計一個能最大限度地提高成本效益的網路連線解決方案. 哪種解決辦法符合這些要求?

**選項**
- A. 配置從資料中心到AWS的三個AWS站點對站點的VPN連線. 透過為每個VPC配置一個VPN連線來建立連線.
- B. 在每個VPC中推出第三方虛擬網路應用. 在資料中心和每個虛擬電器之間建立一個IPsec VPN隧道.
- C. 從資料中心設定3個AWS Direct Connect連線到我們東1的直通閘道器. 透過配置每個VPC來建立連通性,使用一個直接連線連線.
- D. 設定一個從資料中心到AWS的AWS Direct Connect連線. 建立一個過境閘道器,並將每個VPC附加到過境閘道器. 建立直接連線連線與中轉閘道器之間的連線.

**答案**
D


**詳解**
正確答案是 **D**。
- D：設定一個從資料中心到AWS的AWS Direct Connect連線. 建立一個過境閘道器,並將每個VPC附加到過境閘道器. 建立直接連線連線與中轉閘道器之間的連線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置從資料中心到AWS的三個AWS站點對站點的VPN連線. 透過為每個VPC配置一個VPN連線來建立連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在每個VPC中推出第三方虛擬網路應用. 在資料中心和每個虛擬電器之間建立一個IPsec VPN隧道。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：從資料中心設定3個AWS Direct Connect連線到我們東1的直通閘道器. 透過配置每個VPC來建立連通性,使用一個直接連線連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #375

**題目**
一家電子商務公司正在建立一個分散式應用程式,涉及若干無伺服器功能和AWS服務,以完成訂單處理任務。 這些任務需要人工批准,作為工作檔案的一部分。 一個解決方案架構師需要為訂單處理應用程式設計一個架構. 解決方案必須能夠將多個AWS Lambda功能結合到響應性無伺服器應用程式中. 解決方案還必須協調執行在Amazon EC2例項、容器或前提伺服器上的資料和服務。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用 AWS 步驟函式構建應用程式。
- B. 將所有應用程式元件納入AWS Glue工作。
- C. 使用Amazon簡單佇列服務(Amazon SQS)來構建應用程式.
- D. 使用 AWS Lambda 函式和 Amazon EventBridge 事件來構建應用程式.

**答案**
B


**詳解**
正確答案是 **B**。
- B：將所有應用程式元件納入AWS Glue工作。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 步驟函式構建應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon簡單佇列服務(Amazon SQS)來構建應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Lambda 函式和 Amazon EventBridge 事件來構建應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #376

**題目**
一家公司為MySQL DB例項推出了Amazon RDS. 與資料庫(database)的連線大多來自無伺服器應用程式. 與資料庫(database)的應用流量在隨機間隔下發生顯著變化. 在需求高的時候,使用者報告說他們的應用程式會經歷資料庫(database)連線拒絕錯誤. 哪個解決方案能用LEAST 營運開銷(operational overhead)解決這個問題?

**選項**
- A. 在 RDS 代理伺服器中建立代理。 配置使用者透過 RDS 代理程式使用 DB 例項的應用程式。
- B. 在使用者的應用程式和 DB 例項之間安裝 Amazon ElastiCache。
- C. 將 DB 例項遷移到具有更高I/O 容量的不同例項類。 配置使用者的應用程式以使用新的 DB 例項。
- D. 為 DB 例項配置多 AZ。 配置使用者的應用程式在 DB 例項之間切換。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 RDS 代理伺服器中建立代理。 配置使用者透過 RDS 代理程式使用 DB 例項的應用程式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在使用者的應用程式和 DB 例項之間安裝 Amazon ElastiCache 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 DB 例項遷移到具有更高I/O 容量的不同例項類。 配置使用者的應用程式以使用新的 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 DB 例項配置多 AZ。 配置使用者的應用程式在 DB 例項之間切換 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #377

**題目**
一家公司最近部署了一個新的審計系統,為Amazon EC2例項集中有關作業系統版本、補丁和安裝軟體的資訊。 解決方案設計師必須確保透過EC2自動縮放組提供的所有例項在報告啟動和終止後立即成功送交審計系統。 哪種解決辦法能有效地實現這些目標?

**選項**
- A. 使用預定的 AWS Lambda 函式,並對所有EC2 例項遠端執行一個指令碼,向 稽核(audit) 系統傳送資料.
- B. 使用 EC2 自動縮放生命週期鉤子來執行自定義指令碼,在啟動和終止例項時將資料傳送到 稽核(audit) 系統.
- C. 使用EC2自動縮放啟動配置,透過使用者資料執行自定義指令碼,在啟動和終止例項時將資料傳送到稽核(audit)系統.
- D. 在例項作業系統中執行自定義指令碼,將資料傳送到稽核(audit)系統. 在例項開始和終止時配置 EC2 Auto Scaling 群組(Auto Scaling group) 引用的指令碼。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 EC2 自動縮放生命週期鉤子來執行自定義指令碼,在啟動和終止例項時將資料傳送到 稽核(audit) 系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用預定的 AWS Lambda 函式,並對所有EC2 例項遠端執行一個指令碼,向 稽核(audit) 系統傳送資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用EC2自動縮放啟動配置,透過使用者資料執行自定義指令碼,在啟動和終止例項時將資料傳送到稽核(audit)系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在例項作業系統中執行自定義指令碼,將資料傳送到稽核(audit)系統. 在例項開始和終止時配置 EC2 Auto Scaling 群組(Auto Scaling group) 引用的指令碼 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #378

**題目**
一個公司正在開發一個實時多人遊戲,使用UDP在Auto Scaling 群組(Auto Scaling group)中進行客戶端和伺服器之間的通訊. 需求中的Spike預計在白天,因此遊戲伺服器平臺必須相應調整. 開發者希望在資料庫(database)解決方案中儲存遊戲員的分數和其他非關係資料,該解決方案將不干預地縮放. 設計師應該建議哪種解決方案?

**選項**
- A. 使用Amazon Route 53進行流量分配,使用Amazon Aurora無伺服器進行資料儲存.
- B. 使用網路負載平衡器(Network Load Balancer)進行流量分配,Amazon DynamoDB按需進行資料儲存.
- C. 使用網路負載平衡器(Network Load Balancer)進行流量分配,使用Amazon Aurora Global 資料庫(Database)進行資料儲存.
- D. 使用應用程式負載平衡器(Application Load Balancer)進行流量分佈,使用Amazon DynamoDB全球表格進行資料儲存.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用網路負載平衡器(Network Load Balancer)進行流量分配,Amazon DynamoDB按需進行資料儲存。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon Route 53進行流量分配,使用Amazon Aurora無伺服器進行資料儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用網路負載平衡器(Network Load Balancer)進行流量分配,使用Amazon Aurora Global 資料庫(Database)進行資料儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用應用程式負載平衡器(Application Load Balancer)進行流量分佈,使用Amazon DynamoDB全球表格進行資料儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #379

**題目**
一家公司主機為前端應用程式,使用與AWS Lambda整合的Amazon API Gateway API後端. 當API收到請求時,Lambda函式會載入許多庫. 然後Lambda函式連線到一個Amazon RDS 資料庫(database),處理資料,並將資料返回到前端應用程式. 公司希望確保延遲(latency)的響應率儘可能低,對於公司運營變化次數最少的所有使用者來說. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在前端應用程式和資料庫(database)之間建立連線,透過繞過API來更快地進行查詢.
- B. 配置處理請求的 Lambda 函式的提供貨幣。
- C. 快取Amazon S3中查詢的結果,以更快地檢索類似的資料集.
- D. 增加資料庫(database)的大小,以增加Lambda可以一次性建立的連線數量.

**答案**
C


**詳解**
正確答案是 **C**。
- C：快取Amazon S3中查詢的結果,以更快地檢索類似的資料集。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在前端應用程式和資料庫(database)之間建立連線,透過繞過API來更快地進行查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置處理請求的 Lambda 函式的提供貨幣 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：增加資料庫(database)的大小,以增加Lambda可以一次性建立的連線數量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #380

**題目**
一家公司正在將其現場工作量轉移到AWS雲。 該公司已經使用多個Amazon EC2 執行個體和Amazon RDS DB例. 公司希望有一個解決方案,在營業時間之外自動開始和停止EC2 執行個體和DB例. 解決辦法必須儘量減少費用和基礎設施的維護。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用彈性調整大小來縮放 EC2 例項。 在工作時間之外將 DB 例項縮放為零。
- B. 探索 AWS 將自動啟動和停止 EC2 例項和 DB 例項的合作伙伴解決方案的市場。
- C. 啟動另一個EC2例項. 配置一個 crontab 排程以執行 shell 指令碼, 以啟動並停止一個排程中現有的 EC2 例項和 DB 例項。
- D. 建立 AWS Lambda 函式, 啟動並停止 EC2 例項和 DB 例項。 配置 Amazon EventBridge 在一個排程中引用 Lambda 函式。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用彈性調整大小來縮放 EC2 例項。 在工作時間之外將 DB 例項縮放為零 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：探索 AWS 將自動啟動和停止 EC2 例項和 DB 例項的合作伙伴解決方案的市場。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：啟動另一個EC2例項. 配置一個 crontab 排程以執行 shell 指令碼, 以啟動並停止一個排程中現有的 EC2 例項和 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 AWS Lambda 函式, 啟動並停止 EC2 例項和 DB 例項。 配置 Amazon EventBridge 在一個排程中引用 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #381

**題目**
一家公司託管一個三級網路應用程式,其中包括一個PostgreSQL 資料庫(database). 資料庫(database)從文件中儲存後設資料. 公司搜尋後設資料以獲取公司每月在一份報告中審查的檔案。 檔案存放於Amazon S3. 檔案通常只寫過一次,但經常更新。 報告過程需要幾個小時,使用關係查詢。 報告程式不得阻止任何檔案修改或增加新的檔案。 解決方案設計師需要實施一個解決方案,以加快報告程序。 應用程式碼的LEAST修改金額將滿足這些要求的哪個解決方案?

**選項**
- A. 設定新的亞馬遜文件DB(與MongoDB相容)叢集,包含一個讀的複製品. 縮放讀取的複製件生成報告。
- B. 設定一個新的Amazon Aurora PostgreSQL DB叢集,其中包括一個Aurora複製品. 向Aurora複製公司提出詢問,以生成報告。
- C. 為 PostgreSQL 多AZ DB 例項設定新的 Amazon RDS。 配置報告模組,查詢二級RDS節點,使報告模組不影響主節點.
- D. 設定一個新的 Amazon DynamoDB 表格來儲存文件. 使用固定的寫能力支援新文件條目. 自動縮放支援報告的讀取能力。

**答案**
D


**詳解**
正確答案是 **D**。
- D：設定一個新的 Amazon DynamoDB 表格來儲存文件. 使用固定的寫能力支援新文件條目. 自動縮放支援報告的讀取能力。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：設定新的亞馬遜文件DB(與MongoDB相容)叢集,包含一個讀的複製品. 縮放讀取的複製件生成報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：設定一個新的Amazon Aurora PostgreSQL DB叢集,其中包括一個Aurora複製品. 向Aurora複製公司提出詢問,以生成報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 PostgreSQL 多AZ DB 例項設定新的 Amazon RDS。 配置報告模組,查詢二級RDS節點,使報告模組不影響主節點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #382

**題目**
一家公司在AWS上有一個三級應用程式,從使用者裝置中吸收感測器資料。 流量透過網路負載平衡器(Network Load Balancer)(NLB),然後到Amazon EC2的網路級,最後到EC2的應用級。 應用級呼叫資料庫(database)。 解決方案設計師應如何改善過境資料的安全?

**選項**
- A. 配置 TLS 聽器。 在NLB部署伺服器憑證。
- B. 配置 AWS Shield 高階. 在NLB啟用AWS WAF。
- C. 將負載平衡器(load balancer)改為應用程式負載平衡器(Application Load Balancer)(ALB). 在 ALB 上啟用 AWS WAF。
- D. 使用 AWSERV007(AWS KMS) 加密 EC2 例項上的 Amazon 彈性塊儲存(Amazon EBS)卷.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 TLS 聽器。 在NLB部署伺服器憑證。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置 AWS Shield 高階. 在NLB啟用AWS WAF。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將負載平衡器(load balancer)改為應用程式負載平衡器(Application Load Balancer)(ALB). 在 ALB 上啟用 AWS WAF 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWSERV007(AWS KMS) 加密 EC2 例項上的 Amazon 彈性塊儲存(Amazon EBS)卷。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #383

**題目**
一家公司正計劃將一個現成的商業應用程式從它的現成資料中心遷移到AWS. 該軟體有一個軟體許可模式,使用套接字和核心,具有可預測的容量和執行時間要求。 公司希望使用今年早些時候購買的現有許可證。 哪個Amazon EC2定價方案最符合成本效益?

**選項**
- A. 專用保留宿主
- B. 專設託管人
- C. 專門保留例項
- D. 專案案件

**答案**
A


**詳解**
正確答案是 **A**。
- A：專用保留宿主。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：專設託管人。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：專門保留例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：專案案件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #384

**題目**
一家公司在Amazon EC2 Linux例項上執行一個應用程式,跨越多個可用區(Availability Zones). 應用程式需要一個非常可用且符合行動式作業系統介面(POSIX)的儲存層. 儲存層必須提供最大資料耐久性,並且必須在整個EC2例項中共享。 儲存層的資料頭30天將經常存取,此後很少存取。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用Amazon S3標準儲存級. 建立一個 S3 生命週期政策(Lifecycle policy),將不經常存取的資料移動到 S3 Glacier.
- B. 使用Amazon S3標準儲存級. 建立一個S3 生命週期政策(Lifecycle policy),將不頻繁存取的資料移動到S3標準-不頻繁存取(S3 Standard-IA).
- C. 使用亞馬遜彈性檔案系統(Amazon EFS)標準儲存級. 建立生命週期管理政策,將不經常存取的資料轉移到EFS標準-不經常存取(EFS Standard-IA).
- D. 使用亞馬遜彈性檔案系統(Amazon EFS)一區儲存級. 制定生命週期管理政策,將不經常存取的資料移動到EFS One Zone-Creative Access(EFS One Zone-IA).

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon S3標準儲存級. 建立一個S3 生命週期政策(Lifecycle policy),將不頻繁存取的資料移動到S3標準-不頻繁存取(S3 Standard-IA)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon S3標準儲存級. 建立一個 S3 生命週期政策(Lifecycle policy),將不經常存取的資料移動到 S3 Glacier。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用亞馬遜彈性檔案系統(Amazon EFS)標準儲存級. 建立生命週期管理政策,將不經常存取的資料轉移到EFS標準-不經常存取(EFS Standard-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用亞馬遜彈性檔案系統(Amazon EFS)一區儲存級. 制定生命週期管理政策,將不經常存取的資料移動到EFS One Zone-Creative Access(EFS One Zone-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #385

**題目**
一個解決方案架構師正在建立一個新的VPC設計. 負載平衡器(load balancer)共有兩個公共子網,兩個私人子網用於網路伺服器,還有兩個私人子網用於MySQL. 網頁伺服器只使用HTTPS. 解決方案架構師已經為負載平衡器(load balancer)建立了安全群組(security group),允許從0.0/0. 公司政策要求每種資源都擁有仍然能夠完成任務所需的最少的准入權. 解決方案設計師應採用何種額外的配置戰略來滿足這些需求?

**選項**
- A. 為網路伺服器建立安全群組(security group),並允許從0.0/0. 為 MySQL 伺服器建立 安全群組(security group) ,並允許從網路伺服器 安全群組(security group) 埠 3306。
- B. 為網路伺服器建立網路 ACL(network ACL),並允許從0.0/0. 為 MySQL 伺服器建立 網路 ACL(network ACL) 並允許從網路伺服器中埠 3306 安全群組(security group).
- C. 為網路伺服器建立安全群組(security group),並允許負載平衡器(load balancer)的埠443. 為 MySQL 伺服器建立 安全群組(security group) ,並允許從網路伺服器 安全群組(security group) 埠 3306。
- D. 為網路伺服器建立網路 ACL(network ACL),並允許負載平衡器(load balancer)的埠443. 為 MySQL 伺服器建立 網路 ACL(network ACL) 並允許從網路伺服器中埠 3306 安全群組(security group).

**答案**
C


**詳解**
正確答案是 **C**。
- C：為網路伺服器建立安全群組(security group),並允許負載平衡器(load balancer)的埠443. 為 MySQL 伺服器建立 安全群組(security group) ,並允許從網路伺服器 安全群組(security group) 埠 3306 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為網路伺服器建立安全群組(security group),並允許從0.0/0. 為 MySQL 伺服器建立 安全群組(security group) ,並允許從網路伺服器 安全群組(security group) 埠 3306 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為網路伺服器建立網路 ACL(network ACL),並允許從0.0/0. 為 MySQL 伺服器建立 網路 ACL(network ACL) 並允許從網路伺服器中埠 3306 安全群組(security group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為網路伺服器建立網路 ACL(network ACL),並允許負載平衡器(load balancer)的埠443. 為 MySQL 伺服器建立 網路 ACL(network ACL) 並允許從網路伺服器中埠 3306 安全群組(security group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #386

**題目**
一個電子商務公司正在AWS上執行一個多級應用程式. 前端和後端兩層均執行在Amazon EC2上,資料庫(database)執行在Amazon RDS上,為MySQL. 後端層與 RDS 例項通訊。 人們經常呼籲從資料庫(database)中返回相同的資料集,造成效能減速. 應採取什麼行動來改進後端的效能?

**選項**
- A. 實施Amazon SNS儲存資料庫(database)呼叫.
- B. 執行 Amazon ElastiCache 快取大型資料集.
- C. 為 MySQL 執行 RDS 讀取複製件以快取 資料庫(database) 呼叫。
- D. 執行Amazon Kinesis Data Firehose來流傳到資料庫(database)的通話.

**答案**
B


**詳解**
正確答案是 **B**。
- B：執行 Amazon ElastiCache 快取大型資料集。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：實施Amazon SNS儲存資料庫(database)呼叫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 MySQL 執行 RDS 讀取複製件以快取 資料庫(database) 呼叫 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：執行Amazon Kinesis Data Firehose來流傳到資料庫(database)的通話。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #387

**題目**
新員工加入公司擔任部署工程師. 部署工程師將使用AWS CloudFormation模板來建立多個AWS資源. 一個解決方案架構師希望部署工程師在遵循最小權限(least privilege)原則的同時進行工作活動. 設計者應採取何種行動來實現這一目標?(選二.

**選項**
- A. 讓部署工程師使用AWS帳戶根使用者憑證來進行AWS CloudFormation堆疊操作.
- B. 為部署工程師建立一個新的IAM使用者,並將IAM使用者新增到一個帶有PowerUser IAM 政策(IAM policy)附件的組中.
- C. 為部署工程師建立新的IAM使用者,並將IAM使用者新增到一個擁有管理員Access IAM 政策(IAM policy)附件的組中.
- D. 為部署工程師建立新的IAM使用者,並將IAM使用者新增到一個只有AWS CloudFormation動作的IAM 政策(IAM policy)組中.
- E. 為部署工程師建立IAM角色,以明確定義AWS CloudFormation堆疊的特定許可權,並利用IAM角色來發射堆疊.

**答案**
D,E



**詳解**
正確答案是 **D, E**。
- D：為部署工程師建立新的IAM使用者,並將IAM使用者新增到一個只有AWS CloudFormation動作的IAM 政策(IAM policy)組中。此選項符合題目條件，能有效滿足核心需求。
- E：為部署工程師建立IAM角色,以明確定義AWS CloudFormation堆疊的特定許可權,並利用IAM角色來發射堆疊。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：讓部署工程師使用AWS帳戶根使用者憑證來進行AWS CloudFormation堆疊操作。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為部署工程師建立一個新的IAM使用者,並將IAM使用者新增到一個帶有PowerUser IAM 政策(IAM policy)附件的組中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為部署工程師建立新的IAM使用者,並將IAM使用者新增到一個擁有管理員Access IAM 政策(IAM policy)附件的組中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #388

**題目**
一個公司正在VPC中部署一個兩級網路應用程式. 網路層使用Amazon EC2 Auto Scaling 群組(Auto Scaling group),公共子網橫跨多個可用區(Availability Zones). 資料庫(database)級包含一個Amazon RDS,用於在單獨的私人子網中的MySQL DB例項. 網路級要求存取資料庫(database)檢索產品資訊. 網路應用程式沒有按照預期執行。 網路應用程式報告說,它無法連線到資料庫(database). 資料庫(database)確認上線執行. 網路ACL,安全組,以及路由表的所有配置仍然處於預設狀態. 一個解決方案設計師應該建議什麼來修復應用程式?

**選項**
- A. 在私有子網的網路 ACL(network ACL)中加入一條明確的規則,允許從網路級的EC2中傳輸。
- B. 在 VPC 路由表中新增一個路由, 允許網路級的 EC2 例和 資料庫(database) 級之間的流量。
- C. 將網路級的EC2例項和資料庫(database)層級的RDS例項分為兩個單獨的VPC,並配置VPC對等.
- D. 在資料庫(database)級的RDS例項安全群組(security group)中加入一個輸入規則,允許網路級的流量安全群組(security group).

**答案**
D


**詳解**
正確答案是 **D**。
- D：在資料庫(database)級的RDS例項安全群組(security group)中加入一個輸入規則,允許網路級的流量安全群組(security group)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在私有子網的網路 ACL(network ACL)中加入一條明確的規則,允許從網路級的EC2中傳輸。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 VPC 路由表中新增一個路由, 允許網路級的 EC2 例和 資料庫(database) 級之間的流量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將網路級的EC2例項和資料庫(database)層級的RDS例項分為兩個單獨的VPC,並配置VPC對等。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #389

**題目**
一家公司擁有一個大型的線上廣告業務資料集,儲存在一個單一的可用區(Availability Zone)中為MySQL DB例項的Amazon RDS. 公司希望業務報告查詢在不影響書面操作的情況下執行到生產DB例項. 哪種解決辦法符合這些要求?

**選項**
- A. 部署RDS讀取複製件處理業務報告查詢。
- B. 透過將其置於一個彈性負載平衡器(Load Balancer)之後,橫向縮小 DB 例項。
- C. 將 DB 例項縮放到更大的例項型別,以便處理寫操作和查詢。
- D. 在多個 可用區(Availability Zones) 中部署 DB 例項處理業務報告查詢。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在多個 可用區(Availability Zones) 中部署 DB 例項處理業務報告查詢 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：部署RDS讀取複製件處理業務報告查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：透過將其置於一個彈性負載平衡器(Load Balancer)之後,橫向縮小 DB 例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 DB 例項縮放到更大的例項型別,以便處理寫操作和查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #390

**題目**
在Amazon EC2 執行個體中,一家公司擁有三級電子商務應用程式。 這些例項發生在應用程式負載平衡器(Application Load Balancer)(ALB)後面的Auto Scaling 群組(Auto Scaling group)。 所有電子商務資料都儲存在用於MariaDB多AZ DB例項的Amazon RDS中. 公司希望在交易期間最佳化客戶會話管理. 應用程式必須持續儲存會話資料。 哪些解決辦法能滿足這些要求?(選二.

**選項**
- A. 開啟ALB上的粘性會話功能(會話無限).
- B. 使用 Amazon DynamoDB 表格儲存客戶會話資訊.
- C. 部署一個 Amazon Cognitto 使用者集合來管理使用者會話資訊。
- D. 為Redis叢集部署一個Amazon ElastiCache,以儲存客戶會話資訊。
- E. 在應用程式中使用 AWS Systems Manager 應用程式管理器來管理使用者會話資訊.

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：使用 Amazon DynamoDB 表格儲存客戶會話資訊。此選項符合題目條件，能有效滿足核心需求。
- D：為Redis叢集部署一個Amazon ElastiCache,以儲存客戶會話資訊。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：開啟ALB上的粘性會話功能(會話無限)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署一個 Amazon Cognitto 使用者集合來管理使用者會話資訊 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在應用程式中使用 AWS Systems Manager 應用程式管理器來管理使用者會話資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #391

**題目**
一家公司需要備份(backup)策略來實施三級無狀態網路應用. 網路應用程式在一個Auto Scaling 群組(Auto Scaling group)中執行在Amazon EC2例項上,其動態縮放策略是針對縮放事件配置的. 資料庫(database)級在Amazon RDS上執行,用於PostgreSQL. 網路應用程式不需要在EC2例項上臨時本地儲存. 公司恢復點目標(RPO)為2小時. 備份(backup)戰略必須最大限度地擴大可擴展性(scalability),並最佳化這一環境的資源利用。 哪種解決辦法能滿足這些要求?

**選項**
- A. 拍攝Amazon Elastic Block Store(Amazon EBS)卷的EC2 執行個體和每2小時資料庫(database)的快照,以滿足RPO.
- B. 配置一個 快照(snapshot) 生命週期政策(lifecycle policy) 來拍攝 Amazon Elastic Block Store(Amazon EBS) 的快照. 啟用Amazon RDS中的自動備份以滿足RPO.
- C. 保留最新的網路和應用級的亞馬遜機器影象(AMI). 在Amazon RDS中啟用自動備份,並使用點對時間恢復以滿足RPO.
- D. 每2小時拍攝亞馬遜彈性塊儲存(Amazon EBS)的EC2卷。 在Amazon RDS中啟用自動備份,並使用點對時間恢復以滿足RPO.

**答案**
D


**詳解**
正確答案是 **D**。
- D：每2小時拍攝亞馬遜彈性塊儲存(Amazon EBS)的EC2卷。 在Amazon RDS中啟用自動備份,並使用點對時間恢復以滿足RPO。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：拍攝Amazon Elastic Block Store(Amazon EBS)卷的EC2 執行個體和每2小時資料庫(database)的快照,以滿足RPO。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置一個 快照(snapshot) 生命週期政策(lifecycle policy) 來拍攝 Amazon Elastic Block Store(Amazon EBS) 的快照. 啟用Amazon RDS中的自動備份以滿足RPO。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：保留最新的網路和應用級的亞馬遜機器影象(AMI). 在Amazon RDS中啟用自動備份,並使用點對時間恢復以滿足RPO。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #392

**題目**
一個連想要在AWS上部署一個新的公共網路應用程式. 該應用程式包括一個使用Amazon EC2例項的網路伺服器級. 該應用程式還包括一個資料庫(database)級,該級為MySQL DB例項使用Amazon RDS. 應用程式必須是安全的,對擁有動態IP地址的全球客戶開放. 一個解決方案設計師應如何配置安全小組以滿足這些要求?

**選項**
- A. 配置網路伺服器的安全群組(security group),允許從0.0/0. 為 DB 例項配置 安全群組(security group) , 允許從網路伺服器的 安全群組(security group) 埠進入流量。
- B. 為網路伺服器配置安全群組(security group),允許使用者IP地址443埠的入境流量. 為 DB 例項配置 安全群組(security group) , 允許從網路伺服器的 安全群組(security group) 埠進入流量。
- C. 為網路伺服器配置安全群組(security group),允許使用者IP地址443埠的入境流量. 為 DB 例項配置 安全群組(security group), 允許從客戶的IP地址進入埠 3306。
- D. 配置網路伺服器的安全群組(security group),允許從0.0/0. 為 DB 例項配置 安全群組(security group) , 允許 0.0/ 0. 0 的 3306 埠入境流量。

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置網路伺服器的安全群組(security group),允許從0.0/0. 為 DB 例項配置 安全群組(security group) , 允許從網路伺服器的 安全群組(security group) 埠進入流量 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為網路伺服器配置安全群組(security group),允許使用者IP地址443埠的入境流量. 為 DB 例項配置 安全群組(security group) , 允許從網路伺服器的 安全群組(security group) 埠進入流量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為網路伺服器配置安全群組(security group),允許使用者IP地址443埠的入境流量. 為 DB 例項配置 安全群組(security group), 允許從客戶的IP地址進入埠 3306 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置網路伺服器的安全群組(security group),允許從0.0/0. 為 DB 例項配置 安全群組(security group) , 允許 0.0/ 0. 0 的 3306 埠入境流量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #393

**題目**
一個付款處理公司記錄與客戶的所有語音通訊,並將音訊檔案儲存在Amazon S3桶中. 公司需要從音訊檔案中獲取文字. 公司必須從文字中刪除屬於客戶的個人識別資訊。 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用 Amazon Kinesis 影片流處理音訊檔案。 使用 AWS Lambda 函式掃描已知的 PII 模式.
- B. 當一個音訊檔案被上傳到S3 儲存桶(S3 bucket)時,引用一個AWS Lambda功能開始一個亞馬遜Textract任務來分析通話錄音.
- C. 配置 Amazon 轉錄工作, 並開啟 PII 編輯功能。 當一個音訊檔案被上傳到S3 儲存桶(S3 bucket)時,引用一個AWS Lambda功能來開始抄錄工作. 將輸出儲存在單獨的S3 儲存桶(S3 bucket)中.
- D. 建立 Amazon Connect 聯絡符, 接收已開啟的音訊檔案。 嵌入一個 AWS Lambda 函式掃描已知的 PII 模式. 使用 Amazon EventBridge 在音訊檔案上傳到S3 儲存桶(S3 bucket) 時啟動聯絡方式。

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 Amazon 轉錄工作, 並開啟 PII 編輯功能。 當一個音訊檔案被上傳到S3 儲存桶(S3 bucket)時,引用一個AWS Lambda功能來開始抄錄工作. 將輸出儲存在單獨的S3 儲存桶(S3 bucket)中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon Kinesis 影片流處理音訊檔案。 使用 AWS Lambda 函式掃描已知的 PII 模式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：當一個音訊檔案被上傳到S3 儲存桶(S3 bucket)時,引用一個AWS Lambda功能開始一個亞馬遜Textract任務來分析通話錄音。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon Connect 聯絡符, 接收已開啟的音訊檔案。 嵌入一個 AWS Lambda 函式掃描已知的 PII 模式. 使用 Amazon EventBridge 在音訊檔案上傳到S3 儲存桶(S3 bucket) 時啟動聯絡方式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #394

**題目**
一家公司正在AWS雲執行一個多級電子商務網路應用程式. 該應用程式執行在 Amazon EC2 例項上,為 MySQL 多AZ DB 例項使用 Amazon RDS。 Amazon RDS被配置為最新一代的DB例項,在通用SSD(gp3) Amazon Elastic Block Store(Amazon EBS)的體積中儲存2,000GB. 資料庫(database)效能在高需求時期影響應用. 一個資料庫(database)管理員分析Amazon CloudWatch Logs中的日誌,發現當讀寫IOPS數量超過20,000時,應用程式效能總是退化. 解決方案設計師應如何改進應用效能?

**選項**
- A. 將磁碟區替換為磁磁碟區。
- B. 在gp3捲上增加IOPS的數量.
- C. 將該卷替換為IOPS SSD(io2)卷。
- D. 將2000GB gp3卷替換為2千GB gp3卷.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將該卷替換為IOPS SSD(io2)卷。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將磁碟區替換為磁磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在gp3捲上增加IOPS的數量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將2000GB gp3卷替換為2千GB gp3卷。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #395

**題目**
一名IAM使用者在上週的一次生產部署中,對公司帳戶中的AWS資源進行了幾次配置修改. 一位解決方案架構師得知,一對安全群組(security group)規則沒有按照預期配置. 解決方案架構師想要確認哪個IAM使用者負責做出修改. 解決方案設計師應該使用何種服務來找到想要的資訊?

**選項**
- A. 亞馬遜衛視
- B. 亞馬遜檢查員
- C. AWS CloudTrail.
- D. AWS Config 阿富汗

**答案**
B


**詳解**
正確答案是 **B**。
- B：亞馬遜檢查員。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：亞馬遜衛視。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：AWS CloudTrail。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：AWS Config 阿富汗。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #396

**題目**
一家公司在AWS上實施了自我管理的DNS服務. 解決方案包括以下內容: • Amazon EC2在不同AWS地區出現的情況 • AWS Global Accelerator中標準加速器的終點 公司希望保護解決方案免受DDoS攻擊. 解決方案設計師應如何滿足這一要求?

**選項**
- A. 訂閱至AWS Shield高階. 新增加速器作為保護資源.
- B. 訂閱至AWS Shield高階. 新增EC2 例項作為保護資源。
- C. 建立包含基於費率規則的AWS WAF網路ACL. 將ACL網路與加速器關聯.
- D. 建立包含基於費率規則的AWS WAF網路ACL. 將ACL網路與EC2 執行個體聯絡起來。

**答案**
A


**詳解**
正確答案是 **A**。
- A：訂閱至AWS Shield高階. 新增加速器作為保護資源。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：訂閱至AWS Shield高階. 新增EC2 例項作為保護資源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立包含基於費率規則的AWS WAF網路ACL. 將ACL網路與加速器關聯。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立包含基於費率規則的AWS WAF網路ACL. 將ACL網路與EC2 執行個體聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #397

**題目**
一家電子商務公司需要開展預定的日常工作,以彙總和過濾分析的銷售記錄。 公司將銷售記錄存放在Amazon S3桶中. 每個物體的大小可達10GB. 根據銷售活動的數量,工作可長達1小時完成. 工作的CPU和記憶體使用是恆定的,是事先知道的. 解決方案設計師需要儘量減少工作運作所需的業務努力量。 哪種解決辦法符合這些要求?

**選項**
- A. 建立具有 Amazon EventBridge 通知的 AWS Lambda 函式. 將事件Bridge事件安排在每天執行一次.
- B. 建立 AWS Lambda 函式。 建立 Amazon API Gateway HTTP API,並將API與函式整合. 建立 Amazon EventBridge 計劃事件,該事件可以呼叫 API 並引用函式。
- C. 建立亞馬遜彈性容器服務(Amazon ECS)叢集,具有AWS Fargate發射型. 建立 Amazon EventBridge 計劃活動, 啟動叢集上的ECS任務來執行此任務。
- D. 建立亞馬遜彈性容器服務(Amazon ECS)叢集,其啟動類型為Amazon EC2,Auto Scaling 群組(Auto Scaling group)至少有一個EC2例項. 建立 Amazon EventBridge 計劃活動, 啟動叢集上的ECS任務來執行此任務。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立亞馬遜彈性容器服務(Amazon ECS)叢集,具有AWS Fargate發射型. 建立 Amazon EventBridge 計劃活動, 啟動叢集上的ECS任務來執行此任務 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立具有 Amazon EventBridge 通知的 AWS Lambda 函式. 將事件Bridge事件安排在每天執行一次。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS Lambda 函式。 建立 Amazon API Gateway HTTP API,並將API與函式整合. 建立 Amazon EventBridge 計劃事件,該事件可以呼叫 API 並引用函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立亞馬遜彈性容器服務(Amazon ECS)叢集,其啟動類型為Amazon EC2,Auto Scaling 群組(Auto Scaling group)至少有一個EC2例項. 建立 Amazon EventBridge 計劃活動, 啟動叢集上的ECS任務來執行此任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #398

**題目**
一家公司需要將600TB資料從其附著的網路儲存系統轉移到AWS雲. 資料傳輸必須在兩週內完成。 資料是敏感的,必須在過境時加密。 該公司的網際網路連線可以支援100 Mbps的上傳速度. 哪種解決辦法符合這些要求?

**選項**
- A. 使用Amazon S3多段上傳功能,透過HTTPS傳輸檔案.
- B. 建立一個 VPN 連線,連線在最接近的 AWS 區域(Region) 上。 透過VPN連線傳輸資料.
- C. 使用AWS Snow Family控制檯訂購多個AWS Snowball Edge Storage Optimized裝置. 使用裝置將資料傳輸到Amazon S3.
- D. 在公司所在地和最近的AWS 區域(Region)之間建立10 Gbps AWS Direct Connect連線. 透過一個VPN連線將資料傳輸到區域(Region),將資料儲存在Amazon S3中.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個 VPN 連線,連線在最接近的 AWS 區域(Region) 上。 透過VPN連線傳輸資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon S3多段上傳功能,透過HTTPS傳輸檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Snow Family控制檯訂購多個AWS Snowball Edge Storage Optimized裝置. 使用裝置將資料傳輸到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在公司所在地和最近的AWS 區域(Region)之間建立10 Gbps AWS Direct Connect連線. 透過一個VPN連線將資料傳輸到區域(Region),將資料儲存在Amazon S3中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #399

**題目**
一個金融公司在AWS上託管一個網路應用程式. 該應用程式使用Amazon API Gateway區域API端點,讓使用者能夠檢索當前股票價格. 該公司的保安小組注意到API請求數量有所增加. 安全小組擔心,HTTP精液攻擊可能佔用使用異丁胺。 解決方案架構師必須設計一個解決方案來保護應用程式免受這類攻擊. LEAST 營運開銷(operational overhead)符合這些要求的解決方案是什麼?

**選項**
- A. 在API Gateway Regional API端點前建立Amazon CloudFront分佈,最高TTL為24小時.
- B. 建立區域AWS WAF網路ACL,實行按費率計價規則. 將ACL網路與API Gateway階段聯絡起來.
- C. 使用 Amazon CloudWatch 度量衡來監控計數度量,並在達到預定義的速率時提醒安全團隊.
- D. 在 API 閘道器區域 API 端點前用 Lambda@ Edge 建立 Amazon CloudFront 分佈。 建立一個 AWS Lambda 函式,以阻斷來自IP地址超過預定義速率的請求.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立區域AWS WAF網路ACL,實行按費率計價規則. 將ACL網路與API Gateway階段聯絡起來。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在API Gateway Regional API端點前建立Amazon CloudFront分佈,最高TTL為24小時。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon CloudWatch 度量衡來監控計數度量,並在達到預定義的速率時提醒安全團隊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 API 閘道器區域 API 端點前用 Lambda@ Edge 建立 Amazon CloudFront 分佈。 建立一個 AWS Lambda 函式,以阻斷來自IP地址超過預定義速率的請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #400

**題目**
氣象啟動公司擁有定製的網路應用軟體,可以線上向使用者出售氣象資料. 公司使用Amazon DynamoDB儲存其資料,並想建立一個新服務,每錄製一次新的天氣事件,就向四個內部團隊的管理人員發出警報. 公司不希望這種新服務影響當前應用程式的效能. 解決方案設計師應該做什麼才能滿足這些要求?

**選項**
- A. 使用 DynamoDB 交易將新事件資料寫入表格。 配置交易通知內部團隊。
- B. 讓當前應用程式向四個亞馬遜簡易通知服務(Amazon SNS)主題釋出訊息. 讓每個團隊都認同一個話題
- C. 在桌面上啟用 Amazon DynamoDB 流。 使用觸發器寫入一個單一的亞馬遜簡易通知服務(Amazon SNS),各團隊可以訂閱.
- D. 在每個記錄中新增自定義屬性到 fiag 新項中。 寫一個 cron 任務, 每分鐘掃描表格中的新專案, 並通知 Amazon 簡單佇列服務( Amazon SQS) 佇列, 各隊可以訂閱。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在桌面上啟用 Amazon DynamoDB 流。 使用觸發器寫入一個單一的亞馬遜簡易通知服務(Amazon SNS),各團隊可以訂閱。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 DynamoDB 交易將新事件資料寫入表格。 配置交易通知內部團隊 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：讓當前應用程式向四個亞馬遜簡易通知服務(Amazon SNS)主題釋出訊息. 讓每個團隊都認同一個話題。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在每個記錄中新增自定義屬性到 fiag 新項中。 寫一個 cron 任務, 每分鐘掃描表格中的新專案, 並通知 Amazon 簡單佇列服務( Amazon SQS) 佇列, 各隊可以訂閱 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #401

**題目**
一家公司希望使用AWS雲,使現有的應用程式具有高度的可用性和彈性. 目前版本的應用程式位於公司的資料中心. 在資料庫(database)伺服器因意外停電而墜毀後,應用程式最近經歷了資料損失. 公司需要一個能夠避免任何單一的故障點的解決方案. 解決方案必須賦予應用程式規模化能力,以滿足使用者需求. 哪種解決辦法能滿足這些要求?

**選項**
- A. 透過在Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體,跨多個可用區(Availability Zones)部署應用伺服器. 在多AZ配置中使用 Amazon RDS DB 例項。
- B. 透過在單一的可用區(Availability Zone)的Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體來部署應用伺服器. 在EC2例項上部署資料庫(database). 啟用 EC2 自動回收。
- C. 透過在Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體,跨多個可用區(Availability Zones)部署應用伺服器. 使用 Amazon RDS DB 例項,在單個可用區(Availability Zone)中讀取複製. 如果初級 DB 例項失敗, 則推廣讀取的複製來取代初級 DB 例項。
- D. 透過在Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體,跨多個可用區(Availability Zones)部署應用伺服器. 透過多個可用區(Availability Zones)在EC2上部署主要的和次要的資料庫(database)伺服器。 使用Amazon Elastic Block Store(Amazon EBS)在例項之間建立共享儲存.

**答案**
A


**詳解**
正確答案是 **A**。
- A：透過在Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體,跨多個可用區(Availability Zones)部署應用伺服器. 在多AZ配置中使用 Amazon RDS DB 例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：透過在單一的可用區(Availability Zone)的Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體來部署應用伺服器. 在EC2例項上部署資料庫(database). 啟用 EC2 自動回收 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過在Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體,跨多個可用區(Availability Zones)部署應用伺服器. 使用 Amazon RDS DB 例項,在單個可用區(Availability Zone)中讀取複製. 如果初級 DB 例項失敗, 則推廣讀取的複製來取代初級 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過在Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體,跨多個可用區(Availability Zones)部署應用伺服器. 透過多個可用區(Availability Zones)在EC2上部署主要的和次要的資料庫(database)伺服器。 使用Amazon Elastic Block Store(Amazon EBS)在例項之間建立共享儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #402

**題目**
一個公司需要吸收和處理其應用生成的大量流資料. 該應用程式執行在 Amazon EC2 例項上,並將資料傳送給 Amazon Kinesis 資料流,資料流配置為預設設定. 每隔一天,應用程式會消耗資料,並將資料寫入一個Amazon S3桶,用於商業智慧(BI)處理. 該公司注意到,Amazon S3沒有收到應用程式傳送給Kinesis Data Streams的所有資料。 解決方案設計師應如何解決這一問題?

**選項**
- A. 透過修改資料保留期來更新 Kinesis 資料流預設設定。
- B. 更新應用程式以使用Kinesis製片人庫(KPL)將資料傳送給Kinesis Data Streams.
- C. 更新 Kinesis shards 的編號,處理傳送給 Kinesis Data Streams 的吞吐量(throughput) 資料.
- D. 開啟S3 儲存桶(S3 bucket)內部的S3版本,以保留S3 儲存桶(S3 bucket)中攝入的每個物件的每個版本.

**答案**
A


**詳解**
正確答案是 **A**。
- A：透過修改資料保留期來更新 Kinesis 資料流預設設定 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：更新應用程式以使用Kinesis製片人庫(KPL)將資料傳送給Kinesis Data Streams。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：更新 Kinesis shards 的編號,處理傳送給 Kinesis Data Streams 的吞吐量(throughput) 資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：開啟S3 儲存桶(S3 bucket)內部的S3版本,以保留S3 儲存桶(S3 bucket)中攝入的每個物件的每個版本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #403

**題目**
開發者有一個應用程式,使用AWS Lambda功能將檔案上傳到Amazon S3,並且需要執行任務所需的許可權. 開發者已經有一個IAM使用者,Amazon S3需要有效的IAM憑證. 一個解決方案設計師應該怎麼做才能批准?

**選項**
- A. 在 Lambda 函式的資源政策中新增所需的 IAM 許可權。
- B. 使用 Lambda 函式中現有的 IAM 憑證建立簽名請求。
- C. 建立一個新的IAM使用者,並在Lambda函式中使用現有的IAM憑證.
- D. 建立具有所需許可權的IAM執行角色,並將IAM角色附加到Lambda函式中.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 Lambda 函式的資源政策中新增所需的 IAM 許可權 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 Lambda 函式中現有的 IAM 憑證建立簽名請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個新的IAM使用者,並在Lambda函式中使用現有的IAM憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立具有所需許可權的IAM執行角色,並將IAM角色附加到Lambda函式中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #404

**題目**
當新檔案上傳到Amazon S3桶時,一連部署了一個無伺服器應用程式,該應用程式引用了AWS Lambda功能. 應用程式使用Lambda函式處理文件. 在近期的一次營銷運動之後,公司注意到申請沒有處理許多檔案. 一個解決方案設計師應該做些什麼來改進這一應用的架構?

**選項**
- A. 將Lambda函式的執行時間超時值設定為15分鐘.
- B. 配置 S3 儲存桶(S3 bucket) 複寫(replication) 策略. 在S3 儲存桶(S3 bucket)中預置文件供以後處理.
- C. 增加部署Lambda職能。 裝入兩個Lambda函式的檔案處理平衡。
- D. 建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將請求傳送給佇列。 配置佇列為 Lambda 的事件源。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將請求傳送給佇列。 配置佇列為 Lambda 的事件源 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將Lambda函式的執行時間超時值設定為15分鐘。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 S3 儲存桶(S3 bucket) 複寫(replication) 策略. 在S3 儲存桶(S3 bucket)中預置文件供以後處理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：增加部署Lambda職能。 裝入兩個Lambda函式的檔案處理平衡。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #405

**題目**
一個解決方案架構師正在設計軟體演示環境的架構. 環境將在應用程式負載平衡器(Application Load Balancer)(ALB)後面的Auto Scaling 群組(Auto Scaling group)中執行。 該系統在工作時間的交通量將大幅增加,但週末不需要執行。 解決方案設計師應採取何種綜合行動,確保該系統的規模能夠滿足需求?(選二.

**選項**
- A. 使用 AWS 自動縮放來根據請求速率調整 ALB 容量。
- B. 使用 AWS 自動縮放來擴大 VPC 網際網路閘道器的容量。
- C. 在多個AWS地區啟動EC2例項,以便在各地區之間分配負載.
- D. 使用目標跟蹤縮放政策,根據例項CPU的利用率,對Auto Scaling 群組(Auto Scaling group)進行縮放.
- E. 使用預定的縮放,將Auto Scaling 群組(Auto Scaling group)的最小,最大,以及週末的預期容量改為零. 每週開始時恢復預設值。

**答案**
D,E



**詳解**
正確答案是 **D, E**。
- D：使用目標跟蹤縮放政策,根據例項CPU的利用率,對Auto Scaling 群組(Auto Scaling group)進行縮放。此選項符合題目條件，能有效滿足核心需求。
- E：使用預定的縮放,將Auto Scaling 群組(Auto Scaling group)的最小,最大,以及週末的預期容量改為零. 每週開始時恢復預設值。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用 AWS 自動縮放來根據請求速率調整 ALB 容量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS 自動縮放來擴大 VPC 網際網路閘道器的容量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在多個AWS地區啟動EC2例項,以便在各地區之間分配負載。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #406

**題目**
一個解決方案架構師正在設計一個雙層架構,其中包括一個公共子網和一個資料庫(database)子網. 公共子網中的網路伺服器必須在443埠向網際網路開放. 資料庫(database)子網中用於 MySQL DB 例項的 Amazon RDS 只能被埠3306上的網路伺服器存取. 設計師應採取哪些步驟來滿足這些要求?(選二.

**選項**
- A. 為公共子網建立網路 ACL(network ACL). 新增一條規則,拒絕3306口岸出港流量為0.0.0.0/0.
- B. 為 DB 例項建立 安全群組(security group)。 新增一條規則,允許從公共子網CIDR區塊到港口3306的流量.
- C. 為公共子網的網路伺服器建立安全群組(security group). 增加一條規則,允許在443號口岸上從0.0/0.
- D. 為 DB 例項建立 安全群組(security group)。 新增一條規則允許從網路伺服器的安全群組(security group)在埠3306上的流量.
- E. 為 DB 例項建立 安全群組(security group)。 增加一條規則, 拒絕所有流量,

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：為公共子網的網路伺服器建立安全群組(security group). 增加一條規則,允許在443號口岸上從0.0/0。此選項符合題目條件，能有效滿足核心需求。
- D：為 DB 例項建立 安全群組(security group)。 新增一條規則允許從網路伺服器的安全群組(security group)在埠3306上的流量。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：為公共子網建立網路 ACL(network ACL). 新增一條規則,拒絕3306口岸出港流量為0.0.0.0/0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 DB 例項建立 安全群組(security group)。 新增一條規則,允許從公共子網CIDR區塊到港口3306的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：為 DB 例項建立 安全群組(security group)。 增加一條規則, 拒絕所有流量,。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #407

**題目**
一家公司正在對AWS雲中託管的遊戲應用程式實施共享儲存解決方案. 公司需要有能力使用Lustre客戶獲取資料. 解決辦法必須得到充分管理。 哪種解決辦法符合這些要求?

**選項**
- A. 建立一個 AWS 資料同步任務,將資料作為可掛載的檔案系統共享. 將檔案系統掛載到應用程式伺服器。
- B. 建立 AWS Storage Gateway 檔案閘道器。 建立使用所需客戶協議的檔案共享。 連線應用程式伺服器到檔案共享。
- C. 建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統,並配置支援Lustre. 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統.
- D. 為 Lustre 檔案系統建立 Amazon FSx。 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統,並配置支援Lustre. 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個 AWS 資料同步任務,將資料作為可掛載的檔案系統共享. 將檔案系統掛載到應用程式伺服器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS Storage Gateway 檔案閘道器。 建立使用所需客戶協議的檔案共享。 連線應用程式伺服器到檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 Lustre 檔案系統建立 Amazon FSx。 將檔案系統附加到源伺服器上。 連線應用程式伺服器到檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #408

**題目**
一家公司執行一個應用程式,接收來自數千個使用UDP的地理分散遠端裝置的資料. 應用程式立即處理資料,並在必要時向裝置傳送資訊。 沒有儲存資料。 公司需要一個解決方案,將延遲(latency)用於裝置的資料傳輸最小化. 解決方案還必須為另一個AWS 區域(Region)提供快速故障。 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 Amazon Route 53 故障路由策略。 在兩個區域各設立一個網路負載平衡器(Network Load Balancer)(NLB)。 配置 NLB 以引用 AWS Lambda 函式來處理資料。
- B. 使用 AWS 全球加速器。 作為終點,在兩個地區各建立一個網路負載平衡器(Network Load Balancer)(NLB)。 建立亞馬遜彈性容器服務(Amazon ECS)叢集,採用Fargate 啟動類型. 在叢集上建立一個ECS服務. 將ECS服務設定為Amadon ECS中的資料NLProcess的目標.
- C. 使用 AWS 全球加速器。 在兩個大區分別建立一個應用程式負載平衡器(Application Load Balancer)(ALB)作為終點. 建立亞馬遜彈性容器服務(Amazon ECS)叢集,採用Fargate 啟動類型. 在叢集上建立一個ECS服務. 將ECS服務設定為ALB的目標. 在亞馬遜ECS中處理資料.
- D. 配置 Amazon Route 53 故障路由策略。 在兩個大區分別建立一個應用程式負載平衡器(Application Load Balancer)(ALB). 建立亞馬遜彈性容器服務(Amazon ECS)叢集,採用Fargate 啟動類型. 在叢集上建立一個ECS服務. 將ECS服務設定為ALB的目標. 在亞馬遜ECS中處理資料.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 AWS 全球加速器。 作為終點,在兩個地區各建立一個網路負載平衡器(Network Load Balancer)(NLB)。 建立亞馬遜彈性容器服務(Amazon ECS)叢集,採用Fargate 啟動類型. 在叢集上建立一個ECS服務. 將ECS服務設定為Amadon ECS中的資料NLProcess的目標。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Amazon Route 53 故障路由策略。 在兩個區域各設立一個網路負載平衡器(Network Load Balancer)(NLB)。 配置 NLB 以引用 AWS Lambda 函式來處理資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 全球加速器。 在兩個大區分別建立一個應用程式負載平衡器(Application Load Balancer)(ALB)作為終點. 建立亞馬遜彈性容器服務(Amazon ECS)叢集,採用Fargate 啟動類型. 在叢集上建立一個ECS服務. 將ECS服務設定為ALB的目標. 在亞馬遜ECS中處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon Route 53 故障路由策略。 在兩個大區分別建立一個應用程式負載平衡器(Application Load Balancer)(ALB). 建立亞馬遜彈性容器服務(Amazon ECS)叢集,採用Fargate 啟動類型. 在叢集上建立一個ECS服務. 將ECS服務設定為ALB的目標. 在亞馬遜ECS中處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #409

**題目**
解決方案架構師必須將Windows Internet Information Services(IIS)的網路應用程式遷移到AWS. 該應用程式目前依賴於使用者在網路附著儲存(NAS)上託管的檔案共享. 解決方案架構師建議在連線到儲存解決方案的多個可用區(Availability Zones)中將IIS網路伺服器遷移到Amazon EC2例項,並配置了附在例項上的彈性負載平衡器(Load Balancer). 何者取代了配置檔案共享 MOST 具有彈性和耐用性 ?

**選項**
- A. 將檔案共享遷移到 Amazon RDS。
- B. 將檔案共享移到 AWS Storage Gateway。
- C. 為 Windows 檔案伺服器將檔案共享遷移到 Amazon FSx。
- D. 將檔案共享遷移到亞馬遜彈性檔案系統(Amazon EFS).

**答案**
A


**詳解**
正確答案是 **A**。
- A：將檔案共享遷移到 Amazon RDS 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將檔案共享移到 AWS Storage Gateway 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 Windows 檔案伺服器將檔案共享遷移到 Amazon FSx 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將檔案共享遷移到亞馬遜彈性檔案系統(Amazon EFS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #410

**題目**
一家公司正在Amazon EC2 執行個體中部署新的應用程式。 該應用程式將資料寫入Amazon Elastic Block Store(Amazon EBS)卷. 公司需要確保所有寫入EBS 磁碟區的資料在休息時加密. 哪種解決辦法能滿足這一要求?

**選項**
- A. 建立一個IAM角色,指定EBS 加密(encryption). 將角色附加到EC2例項中.
- B. 建立 EBS 磁碟區作為加密卷。 將 EBS 磁碟區附於 EC2 例中。
- C. 建立 EC2 例項標記, 它有加密的金鑰和 True 的值。 在 EBS 級別上標記所有需要 加密(encryption) 的例項。
- D. 建立一個 AWS Key Management Service(AWS KMS) 關鍵政策,在帳戶中執行EBS 加密(encryption). 確保關鍵政策是積極的。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立 EBS 磁碟區作為加密卷。 將 EBS 磁碟區附於 EC2 例中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個IAM角色,指定EBS 加密(encryption). 將角色附加到EC2例項中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 EC2 例項標記, 它有加密的金鑰和 True 的值。 在 EBS 級別上標記所有需要 加密(encryption) 的例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個 AWS Key Management Service(AWS KMS) 關鍵政策,在帳戶中執行EBS 加密(encryption). 確保關鍵政策是積極的。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #411

**題目**
一個公司有一個網路應用程式,有零星的使用模式. 每個月初使用量很大,每週開始時使用量適中,每週使用量不可預測。 應用程式包括一個網路伺服器和一個在資料中心內部執行的MySQL 資料庫(database)伺服器. 公司希望將應用程式移至AWS雲,需要選擇一個成本效益高的資料庫(database)平臺,不需要資料庫(database)修改. 哪種解決辦法能滿足這些要求?

**選項**
- A. Amazon DynamoDB.
- B. 用於 MySQL 的 Amazon RDS
- C. MySQL 相容 Amazon Aurora 無伺服器
- D. 在Amazon EC2上部署在Auto Scaling 群組(Auto Scaling group)

**答案**
C


**詳解**
正確答案是 **C**。
- C：MySQL 相容 Amazon Aurora 無伺服器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：Amazon DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：用於 MySQL 的 Amazon RDS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon EC2上部署在Auto Scaling 群組(Auto Scaling group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #412

**題目**
一家影象託管公司將其物品存放在Amazon S3桶中. 公司希望避免S3 儲存桶中的物體意外暴露給公眾. 整個AWS帳戶中的所有S3物件需要保持私密. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon GuardDuty監控S3 儲存桶(S3 bucket)政策. 建立一個自動補救行動規則,使用AWS Lambda函式來補救任何使物體公開的改變.
- B. 使用 AWS 信任的顧問尋找可公開存取的 S3 桶。 在檢測到更改時配置信任顧問的電子郵件通知。 如果允許公眾存取,則手動更改S3 儲存桶政策(bucket policy).
- C. 使用 AWS 資源存取管理器尋找可公開存取的 S3 桶. 使用Amazon簡單通知服務(Amazon SNS)在檢測到變化時引用一個AWS Lambda函式. 部署一個Lambda職能,在方案上補救變化。
- D. 在帳戶級別上使用 S3 Block Public Access 特性. 使用AWS Organizations來建立服務控制政策(SCP),防止IAM使用者更改設定. 應用 SCP 到帳戶。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在帳戶級別上使用 S3 Block Public Access 特性. 使用AWS Organizations來建立服務控制政策(SCP),防止IAM使用者更改設定. 應用 SCP 到帳戶 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon GuardDuty監控S3 儲存桶(S3 bucket)政策. 建立一個自動補救行動規則,使用AWS Lambda函式來補救任何使物體公開的改變。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS 信任的顧問尋找可公開存取的 S3 桶。 在檢測到更改時配置信任顧問的電子郵件通知。 如果允許公眾存取,則手動更改S3 儲存桶政策(bucket policy)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 資源存取管理器尋找可公開存取的 S3 桶. 使用Amazon簡單通知服務(Amazon SNS)在檢測到變化時引用一個AWS Lambda函式. 部署一個Lambda職能,在方案上補救變化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #413

**題目**
一家電子商務公司使用者流量正在增加。 該公司的商店作為雙層網路應用程式部署在Amazon EC2上,包括一個網路級和一個單獨的資料庫(database)級。 隨著流量的增加,公司注意到該架構在及時向使用者傳送營銷和訂單確認郵件方面造成了重大延誤. 公司希望縮短解決複雜的電子郵件傳送問題的時間,將營運開銷(operational overhead)降到最低. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用 EC2 專用於電子郵件處理的例建立單獨的應用程式級。
- B. 配置網路例項,透過Amazon Simple電子郵件服務(Amazon SES)傳送電子郵件.
- C. 配置網路例項, 透過 Amazon 簡單通知服務( Amazon SNS) 傳送電子郵件。
- D. 使用 EC2 專用於電子郵件處理的例建立單獨的應用程式級。 將這些例項放在 Auto Scaling 群組(Auto Scaling group) 中。

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置網路例項,透過Amazon Simple電子郵件服務(Amazon SES)傳送電子郵件。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 EC2 專用於電子郵件處理的例建立單獨的應用程式級 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置網路例項, 透過 Amazon 簡單通知服務( Amazon SNS) 傳送電子郵件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 EC2 專用於電子郵件處理的例建立單獨的應用程式級。 將這些例項放在 Auto Scaling 群組(Auto Scaling group) 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #414

**題目**
一個公司有一個商業系統,每天生成數百份報告. 業務系統將報告儲存為CSV格式的網路共享. 公司需要在近實時分析時將這些資料儲存在AWS雲中. LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 使用AWS DataSync將檔案傳輸到Amazon S3. 建立每日末執行的預定任務。
- B. 建立 Amazon S3 檔案閘道器。 更新業務系統以使用來自S3檔案閘道器的新網路共享.
- C. 使用AWS DataSync將檔案傳輸到Amazon S3. 建立一個在自動化工作fiow中使用DataSync API的應用程式.
- D. 為 SFTP 端點部署 AWS 傳輸。 建立一個指令碼,檢查網路共享上的新檔案,並透過使用SFTP上傳新檔案.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用AWS DataSync將檔案傳輸到Amazon S3. 建立一個在自動化工作fiow中使用DataSync API的應用程式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS DataSync將檔案傳輸到Amazon S3. 建立每日末執行的預定任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon S3 檔案閘道器。 更新業務系統以使用來自S3檔案閘道器的新網路共享。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 SFTP 端點部署 AWS 傳輸。 建立一個指令碼,檢查網路共享上的新檔案,並透過使用SFTP上傳新檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #415

**題目**
一家公司正在Amazon S3 Standard中儲存幾位元組資料. 資料被儲存在多個S3桶中,並以不同頻率存取. 公司並不知道所有資料的存取模式. 公司需要針對每個S3 儲存桶(S3 bucket)實施一個解決方案,以最佳化S3的使用成本. 哪種辦法能滿足這些要求?

**選項**
- A. 建立一個S3生命週期配置,其規則是將S3 儲存桶(S3 bucket)中的物件轉換為S3 Intelligent-Tiering.
- B. 使用S3儲存類分析工具確定S3 儲存桶(S3 bucket)中每個物件的正確等級. 將每個物件移動到指定的儲存級別。
- C. 建立一個S3生命週期配置,其規則是將S3 儲存桶(S3 bucket)中的物件轉換為S3 Glacier Instant Retrieval.
- D. 建立一個S3壽命週期配置,其規則是將S3 儲存桶(S3 bucket)中的物件轉換為S3 One Zone-不經常存取(S3 One Zone-IA).

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個S3生命週期配置,其規則是將S3 儲存桶(S3 bucket)中的物件轉換為S3 Intelligent-Tiering。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用S3儲存類分析工具確定S3 儲存桶(S3 bucket)中每個物件的正確等級. 將每個物件移動到指定的儲存級別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個S3生命週期配置,其規則是將S3 儲存桶(S3 bucket)中的物件轉換為S3 Glacier Instant Retrieval。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個S3壽命週期配置,其規則是將S3 儲存桶(S3 bucket)中的物件轉換為S3 One Zone-不經常存取(S3 One Zone-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #416

**題目**
一個迅速增長的全球電子商務公司正在AWS上託管其網路應用. 網路應用包括靜態內容和動態內容. 網站將線上交易處理(OLTP)資料儲存在Amazon RDS 資料庫(database)中 網站使用者的頁面負荷緩慢。 為解決這一問題,設計者應採取何種綜合行動?(選二.

**選項**
- A. 配置 Amazon Redshift 叢集。
- B. 設立Amazon CloudFront發行.
- C. 在 Amazon S3 中託管動態網路內容.
- D. 為 RDS DB 例項建立讀副本。
- E. 為 RDS DB 例項配置多AZ 部署。

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：設立Amazon CloudFront發行。此選項符合題目條件，能有效滿足核心需求。
- D：為 RDS DB 例項建立讀副本 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：配置 Amazon Redshift 叢集 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Amazon S3 中託管動態網路內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：為 RDS DB 例項配置多AZ 部署 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #417

**題目**
一家公司使用Amazon EC2例項和AWS Lambda功能執行其應用. 該公司在其AWS帳戶中設有具有公共子網和私人子網的VPC. EC2 執行個體在一個VPC的私人子網中執行. Lambda功能需要直接進入EC2例項的網路才能執行。 申請有效期至少為一年。 公司預計在這段時間內應用程式使用的Lambda功能數量將會增加. 公司希望最大限度地節約所有應用資源,並將延遲(latency)網路保持在服務低水平. 哪種解決辦法能滿足這些要求?

**選項**
- A. 購買EC2例項儲蓄計劃 最佳化Lambda功能的期限和記憶體使用以及引用次數。 連線 Lambda 函式到包含 EC2 例項的私有子網。
- B. 購買EC2例項儲蓄計劃 最佳化 Lambda 函式的持續時間和記憶體使用、引用次數以及傳輸的資料數量。 將 Lambda 函式連線到 EC2 例項執行的同一 VPC 中的公共子網。
- C. 購買計算儲蓄計劃。 最佳化 Lambda 函式的持續時間和記憶體使用、引用次數以及傳輸的資料數量。 連線 Lambda 函式到包含 EC2 例項的私有子網。
- D. 購買計算儲蓄計劃。 最佳化 Lambda 函式的持續時間和記憶體使用、引用次數以及傳輸的資料數量。 在Lambda服務VPC中保留Lambda功能.

**答案**
C


**詳解**
正確答案是 **C**。
- C：購買計算儲蓄計劃。 最佳化 Lambda 函式的持續時間和記憶體使用、引用次數以及傳輸的資料數量。 連線 Lambda 函式到包含 EC2 例項的私有子網 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：購買EC2例項儲蓄計劃 最佳化Lambda功能的期限和記憶體使用以及引用次數。 連線 Lambda 函式到包含 EC2 例項的私有子網 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：購買EC2例項儲蓄計劃 最佳化 Lambda 函式的持續時間和記憶體使用、引用次數以及傳輸的資料數量。 將 Lambda 函式連線到 EC2 例項執行的同一 VPC 中的公共子網。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：購買計算儲蓄計劃。 最佳化 Lambda 函式的持續時間和記憶體使用、引用次數以及傳輸的資料數量。 在Lambda服務VPC中保留Lambda功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #418

**題目**
一個解決方案架構師需要允許團隊成員在兩個不同的AWS帳戶中存取Amazon S3桶:一個開發帳戶和一個生產帳戶. 該團隊目前透過使用獨特的IAM使用者來存取開發帳戶中的S3桶,這些使用者被分配到帳戶中擁有適當許可權的IAM組. 解決方案架構師在生產帳戶中建立了IAM角色. 該角色有一項政策允許進入生產帳戶中的S3 儲存桶(S3 bucket)。 在遵守最小權限(least privilege)原則的同時,哪一種解決辦法將滿足這些要求?

**選項**
- A. 將管理員存取政策附於發展帳戶使用者。
- B. 增加發展帳戶作為生產帳戶中角色信託政策的主要部分。
- C. 關閉生產帳戶中S3 儲存桶(S3 bucket)上的S3 Block Public Access功能.
- D. 在製作帳戶中建立一個使用者,每個團隊成員都有獨特的憑證.

**答案**
B


**詳解**
正確答案是 **B**。
- B：增加發展帳戶作為生產帳戶中角色信託政策的主要部分。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將管理員存取政策附於發展帳戶使用者。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：關閉生產帳戶中S3 儲存桶(S3 bucket)上的S3 Block Public Access功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在製作帳戶中建立一個使用者,每個團隊成員都有獨特的憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #419

**題目**
一家公司使用具有所有功能的AWS Organizations,並在AP-東南-2 區域(Region)執行多個Amazon EC2工作量. 該公司有一項服務控制政策(SCP),防止在任何其他區域(Region)中建立任何資源. 一項安全政策要求公司對所有資料進行加密。 稽核(audit)發現員工為EC2例項建立了Amazon Elastic Block Store(Amazon EBS)卷,但沒有加密卷. 公司希望任何IAM使用者或根使用者在AP-東南-2中發射的任何新的EC2例項使用加密的EBS 磁碟區. 公司希望有一個解決方案,對創造EBS 磁碟區的員工影響最小. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 在Amazon EC2控制檯中,選擇EBS 加密(encryption)帳戶屬性並定義預設的加密(encryption)金鑰.
- B. 建立 IAM 許可權邊界。 將許可權邊界附加到根組織單位(OU). 定義拒絕 ec2: 當 ec2 時建立Volume 動作的邊界: 燒錄條件等於虛假。
- C. 建立 SCP。 將 SCP 附加到根部組織單位(OU). 定義 SCP 以拒絕 ec2: 當 ec2: 被壓縮的條件等於虛假時建立Volume 動作。
- D. 更新每個帳戶的 IAM 政策以拒絕 ec2: 當 ec2: 被催化的條件等於虛假時建立Volume 動作。
- E. 在組織管理帳戶中,指定預設的EBS 磁碟區加密(encryption)設定.

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：在Amazon EC2控制檯中,選擇EBS 加密(encryption)帳戶屬性並定義預設的加密(encryption)金鑰。此選項符合題目條件，能有效滿足核心需求。
- D：更新每個帳戶的 IAM 政策以拒絕 ec2: 當 ec2: 被催化的條件等於虛假時建立Volume 動作 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：建立 IAM 許可權邊界。 將許可權邊界附加到根組織單位(OU). 定義拒絕 ec2: 當 ec2 時建立Volume 動作的邊界: 燒錄條件等於虛假 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 SCP。 將 SCP 附加到根部組織單位(OU). 定義 SCP 以拒絕 ec2: 當 ec2: 被壓縮的條件等於虛假時建立Volume 動作 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在組織管理帳戶中,指定預設的EBS 磁碟區加密(encryption)設定。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #420

**題目**
一家公司希望使用Amazon RDS用於PostgreSQL DB叢集,以簡化耗時的資料庫(database)行政任務,用於生產資料庫(database)的工作量. 公司希望確保其資料庫(database)的高度可用性,並將在不到40秒的時間內在大多數情況下提供自動故障支援. 公司希望Ofioad讀取初級案例,儘可能降低成本. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Amazon RDS 多AZ DB 例項部署。 建立一個閱讀複製品,並將閱讀工作量指向閱讀複製品.
- B. 使用 Amazon RDS 多AZ DB 粉塵器部署 建立兩個讀取複製件,並將讀取的工作量指向讀取複製件.
- C. 使用 Amazon RDS 多AZ DB 例項部署。 將閱讀工作量指向多AZ對中的次要例項。
- D. 使用 Amazon RDS 多AZ DB 群集部署點 讀取工作量到讀取端點。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 Amazon RDS 多AZ DB 例項部署。 建立一個閱讀複製品,並將閱讀工作量指向閱讀複製品。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 Amazon RDS 多AZ DB 粉塵器部署 建立兩個讀取複製件,並將讀取的工作量指向讀取複製件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon RDS 多AZ DB 例項部署。 將閱讀工作量指向多AZ對中的次要例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon RDS 多AZ DB 群集部署點 讀取工作量到讀取端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #421

**題目**
一家公司經營著可大量使用的SFTP服務. SFTP服務使用兩個帶有彈性IP地址執行的Amazon EC2 Linux例來接受網際網路上信任的IP源的流量. SFTP服務由附在例項上的共享儲存支援. 使用者帳戶在SFTP伺服器中作為Linux使用者建立和管理. 公司希望有一個無伺服器選項,提供高IOPS效能和高度可配置的安全性. 公司還希望保持對使用者許可權的控制. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立加密的Amazon Elastic Block Store(Amazon EBS)磁碟區. 建立一個只允許信任的IP地址的AWS Transfer Family SFTP服務. 將 EBS 磁碟區附加到 SFTP 服務端點. 允許使用者存取SFTP服務.
- B. 建立加密的亞馬遜彈性檔案系統(Amazon EFS)卷. 建立具有彈性IP地址的AWS Transfer Family SFTP服務,並建立具有網際網路上網功能的VPC 端點(VPC endpoint). 在端點上附加一個只允許信任的IP地址的安全群組(security group). 將 EFS 磁碟區附加到 SFTP 服務端點。 允許使用者存取SFTP服務.
- C. 建立預設 加密(encryption) 的 Amazon S3 桶。 建立一個只允許信任的IP地址的AWS Transfer Family SFTP服務. 將S3 儲存桶(S3 bucket)附加到SFTP服務端點. 允許使用者存取SFTP服務.
- D. 建立 Amazon S3 桶, 啟用預設的 加密(encryption)。 建立一個帶有VPC 端點(VPC endpoint)的AWS Transfer Family SFTP服務,在私人子網內可以內部存取. 附加只允許信任的 IP 地址的 安全群組(security group)。 將S3 儲存桶(S3 bucket)附加到SFTP服務端點. 允許使用者存取SFTP服務.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立預設 加密(encryption) 的 Amazon S3 桶。 建立一個只允許信任的IP地址的AWS Transfer Family SFTP服務. 將S3 儲存桶(S3 bucket)附加到SFTP服務端點. 允許使用者存取SFTP服務。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立加密的Amazon Elastic Block Store(Amazon EBS)磁碟區. 建立一個只允許信任的IP地址的AWS Transfer Family SFTP服務. 將 EBS 磁碟區附加到 SFTP 服務端點. 允許使用者存取SFTP服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立加密的亞馬遜彈性檔案系統(Amazon EFS)卷. 建立具有彈性IP地址的AWS Transfer Family SFTP服務,並建立具有網際網路上網功能的VPC 端點(VPC endpoint). 在端點上附加一個只允許信任的IP地址的安全群組(security group). 將 EFS 磁碟區附加到 SFTP 服務端點。 允許使用者存取SFTP服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon S3 桶, 啟用預設的 加密(encryption)。 建立一個帶有VPC 端點(VPC endpoint)的AWS Transfer Family SFTP服務,在私人子網內可以內部存取. 附加只允許信任的 IP 地址的 安全群組(security group)。 將S3 儲存桶(S3 bucket)附加到SFTP服務端點. 允許使用者存取SFTP服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #422

**題目**
一家公司正在AWS上開發一種新的機器學習(ML)模型解決方案. 這些模型是作為獨立的微服務開發的,在啟動時從Amazon S3獲取大約1GB的模型資料,並將資料載入到記憶體中. 使用者透過同步API存取模型. 使用者可以傳送請求或批次請求,並指定傳送結果的地點. 公司向數百個使用者提供模型. 這些模型的使用模式不規則。 一些型號可能會被使用數日或數週. 其他型號一次可收到數千批請求。 哪個解決方案設計師建議滿足這些要求?

**選項**
- A. 將API的請求導向網路負載平衡器(Network Load Balancer)(NLB)。 將模型作為AWS Lambda功能,由NLB援引。
- B. 將API的請求導向應用程式負載平衡器(Application Load Balancer)(ALB). 將模型作為亞馬遜彈性容器服務(Amazon ECS)服務,從亞馬遜簡易佇列服務(Amazon SQS)佇列讀取。 根據 SQS 佇列大小,使用 AWS App Mesh 來縮放 ECS 叢集的例項。
- C. 將 API 的請求引導到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將模型作為 SQS 事件所引用的 AWS Lambda 函式應用。 根據 SQS 佇列大小,使用 AWS 自動縮放來增加 Lambda 函式的 vCPU 數量。
- D. 將 API 的請求引導到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將模型作為從佇列讀取的亞馬遜彈性容器服務(Amazon ECS)服務。 在亞馬遜ECS上啟用 AWS 自動縮放, 用於基於佇列大小的服務叢集和副本。

**答案**
D


**詳解**
正確答案是 **D**。
- D：將 API 的請求引導到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將模型作為從佇列讀取的亞馬遜彈性容器服務(Amazon ECS)服務。 在亞馬遜ECS上啟用 AWS 自動縮放, 用於基於佇列大小的服務叢集和副本 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將API的請求導向網路負載平衡器(Network Load Balancer)(NLB)。 將模型作為AWS Lambda功能,由NLB援引。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將API的請求導向應用程式負載平衡器(Application Load Balancer)(ALB). 將模型作為亞馬遜彈性容器服務(Amazon ECS)服務,從亞馬遜簡易佇列服務(Amazon SQS)佇列讀取。 根據 SQS 佇列大小,使用 AWS App Mesh 來縮放 ECS 叢集的例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 API 的請求引導到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將模型作為 SQS 事件所引用的 AWS Lambda 函式應用。 根據 SQS 佇列大小,使用 AWS 自動縮放來增加 Lambda 函式的 vCPU 數量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #423

**題目**
解決方案架構師希望使用以下JSON文字作為基於身份的政策,以授予特定許可權: 解決方案設計師可以把這項政策附在哪個IAM主上?(選二.

**選項**
- A. 作用
- B. 組
- C. 組織
- D. 亞馬遜彈性容器服務(Amazon ECS)資源
- E. Amazon EC2 資源

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：作用。此選項符合題目條件，能有效滿足核心需求。
- B：組。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：組織。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：亞馬遜彈性容器服務(Amazon ECS)資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：Amazon EC2 資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #424

**題目**
一家公司正在Amazon EC2 On-Demand Practens上執行一個定製應用程式. 應用程式有前端節點,需要每週7天每天24小時執行,後端節點根據工作量只需要短時間執行. 後端節點的數量在白天有所不同. 公司需要根據工作量擴大規模。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 前端節點使用保留例項。 後端節點使用 AWS Fargate。
- B. 前端節點使用保留例項。 後端節點使用 SpotStrics。
- C. 在前端節點使用 SpotStrics。 後端節點使用保留例項。
- D. 在前端節點使用 SpotStrics。 後端節點使用 AWS Fargate。

**答案**
B


**詳解**
正確答案是 **B**。
- B：前端節點使用保留例項。 後端節點使用 SpotStrics 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：前端節點使用保留例項。 後端節點使用 AWS Fargate 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在前端節點使用 SpotStrics。 後端節點使用保留例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在前端節點使用 SpotStrics。 後端節點使用 AWS Fargate 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #425

**題目**
一家公司使用高容量的區塊儲存能力來管理其房地的工作量。 公司日高峰投入和產出交易每秒不超過15,000 IOPS. 公司希望將工作量遷移到Amazon EC2,並提供獨立於儲存容量的磁碟效能. 亞馬遜彈性塊儲存器(Amazon EBS)的容量型別將以符合成本效益的方式滿足這些要求?

**選項**
- A. GP2 磁碟區型別
- B. io2 磁碟區型別
- C. GP3 磁碟區型別
- D. io1 磁碟區型別

**答案**
C


**詳解**
正確答案是 **C**。
- C：GP3 磁碟區型別。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：GP2 磁碟區型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：io2 磁碟區型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：io1 磁碟區型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #426

**題目**
公司需要儲存其保健應用中的資料。 應用程式的資料經常發生變化。 一項新的條例要求稽核(audit)在儲存資料的所有級別存取。 該公司在儲存能力耗盡的前提基礎設施上託管應用程式。 一個解決方案設計師必須安全地將現有資料遷移到AWS,同時滿足新的監管要求. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用AWS DataSync將現有資料移動到Amazon S3. 使用AWS CloudTrail記錄資料事件.
- B. 使用AWS Snowcone將現有資料移動到Amazon S3. 使用 AWS CloudTrail 來日誌管理事件.
- C. 使用Amazon S3 Transfer Acceleration將現有資料移動到Amazon S3. 使用AWS CloudTrail記錄資料事件.
- D. 使用AWS Storage Gateway將現有資料移動到Amazon S3. 使用 AWS CloudTrail 來日誌管理事件.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用AWS Snowcone將現有資料移動到Amazon S3. 使用 AWS CloudTrail 來日誌管理事件。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS DataSync將現有資料移動到Amazon S3. 使用AWS CloudTrail記錄資料事件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon S3 Transfer Acceleration將現有資料移動到Amazon S3. 使用AWS CloudTrail記錄資料事件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Storage Gateway將現有資料移動到Amazon S3. 使用 AWS CloudTrail 來日誌管理事件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #427

**題目**
一個解決方案架構師正在用一個MySQL 資料庫(database)執行一個複雜的Java應用程式. Java應用程式必須部署在Apache Tomcat上,並且必須高度可用. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 在AWS Lambda中部署應用程式。 配置 Amazon API Gateway API 與 Lambda 函式連線.
- B. 使用 AWS 彈性 Beanstalk 部署應用程式。 配置負載平衡環境和滾動部署政策.
- C. 將資料庫(database)型機車遷移到Amazon ElastiCache型機車. 配置 ElastiCache 安全群組(security group) 允許從應用程式存取。
- D. 推出Amazon EC2 執行個體. 在 EC2 例項上安裝 MySQL 伺服器。 配置伺服器上的應用程式。 建立AMI. 使用AMI建立帶有Auto Scaling 群組(Auto Scaling group)的發射模板.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 AWS 彈性 Beanstalk 部署應用程式。 配置負載平衡環境和滾動部署政策。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在AWS Lambda中部署應用程式。 配置 Amazon API Gateway API 與 Lambda 函式連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料庫(database)型機車遷移到Amazon ElastiCache型機車. 配置 ElastiCache 安全群組(security group) 允許從應用程式存取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：推出Amazon EC2 執行個體. 在 EC2 例項上安裝 MySQL 伺服器。 配置伺服器上的應用程式。 建立AMI. 使用AMI建立帶有Auto Scaling 群組(Auto Scaling group)的發射模板。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #428

**題目**
無伺服器應用程式使用Amazon API Gateway,AWS Lambda,以及Amazon DynamoDB. Lambda 函式需要許可權才能讀寫到DynamomDB表. 哪個解決方案能讓蘭博達函式安全進入DynamoDB表MOST?

**選項**
- A. 建立一個IAM使用者,可以程式存取Lambda功能. 在使用者中附加一個允許讀寫存取DynamomDB表格的策略. 儲存 access key id和secret access key引數作為Lambda環境變數的一部分. 確保其他AWS使用者沒有讀寫許可權存取Lambda函式配置.
- B. 建立IAM角色,將Lambda作為可信賴的服務. 在允許讀寫存取DynamomDB表格的角色上附加一個策略. 更新Lambda函式的配置,以使用新角色作為執行角色.
- C. 建立一個IAM使用者,可以程式存取Lambda功能. 在使用者中附加一個允許讀寫存取DynamomDB表格的策略. 在 AWS Systems Manager 引數儲存器中儲存 access key id和secret access key引數作為安全的字串引數. 更新Lambda函式程式碼,在連線到DynamoDB表之前檢索安全字串引數.
- D. 建立一個包含DynamomaDB作為可信任服務的IAM角色. 在允許從Lambda函式讀寫存取的角色上附加一個策略. 更新Lambda函式的程式碼,以附加作為執行角色的新角色.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立IAM角色,將Lambda作為可信賴的服務. 在允許讀寫存取DynamomDB表格的角色上附加一個策略. 更新Lambda函式的配置,以使用新角色作為執行角色。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個IAM使用者,可以程式存取Lambda功能. 在使用者中附加一個允許讀寫存取DynamomDB表格的策略. 儲存 access key id和secret access key引數作為Lambda環境變數的一部分. 確保其他AWS使用者沒有讀寫許可權存取Lambda函式配置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個IAM使用者,可以程式存取Lambda功能. 在使用者中附加一個允許讀寫存取DynamomDB表格的策略. 在 AWS Systems Manager 引數儲存器中儲存 access key id和secret access key引數作為安全的字串引數. 更新Lambda函式程式碼,在連線到DynamoDB表之前檢索安全字串引數。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個包含DynamomaDB作為可信任服務的IAM角色. 在允許從Lambda函式讀寫存取的角色上附加一個策略. 更新Lambda函式的程式碼,以附加作為執行角色的新角色。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #429

**題目**
以下IAM 政策(IAM policy)系附屬於IAM組. 這是適用於該團體的唯一政策。 對於團體成員來說,這項政策的有效IAM許可權是什麼?

**選項**
- A. 允許集團成員在我們東-1區域(Region)範圍內採取任何Amazon EC2行動。 許可後的發言不適用。
- B. 集團成員在我們的東-1 區域(Region)中被拒絕任何Amazon EC2許可權,除非他們用多要素認證(MFA)登入.
- C. Group成員被允許使用 ec2: StopInstances 和 ec2: 當登入到多因子認證(MFA)時,所有區域的終止Instances許可權. 允許集團成員採取任何其他行動。
- D. Ec2: Stop Instances and ec2: 僅當登入到多要素認證(MFA)時,允許組成員對我們東-1 區域(Region)的終止Instances許可權. 允許集團成員在我們東-1區域(Region)範圍內採取任何其他行動。

**答案**
D


**詳解**
正確答案是 **D**。
- D：Ec2: Stop Instances and ec2: 僅當登入到多要素認證(MFA)時,允許組成員對我們東-1 區域(Region)的終止Instances許可權. 允許集團成員在我們東-1區域(Region)範圍內採取任何其他行動。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：允許集團成員在我們東-1區域(Region)範圍內採取任何Amazon EC2行動。 許可後的發言不適用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：集團成員在我們的東-1 區域(Region)中被拒絕任何Amazon EC2許可權,除非他們用多要素認證(MFA)登入。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：Group成員被允許使用 ec2: StopInstances 和 ec2: 當登入到多因子認證(MFA)時,所有區域的終止Instances許可權. 允許集團成員採取任何其他行動。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #430

**題目**
一家制造公司擁有機器感測器,可以上傳.csv檔案到Amazon S3桶. 這些.csv檔案必須轉換成影象,必須儘快提供,以便自動生成圖形報告. 影象在1個月後變得無關緊要,但必須儲存.csv檔案,以便每年訓練兩次機器學習(ML)模型. 管理責任培訓和審計計劃提前數週進行。 哪些步驟的組合將以符合成本效益的方式滿足這些要求?(選二.

**選項**
- A. 推出Amazon EC2 Spotext,每小時下載.csv檔案,生成影象檔案,並將影象上傳到S3 儲存桶(S3 bucket).
- B. 設計一個AWS Lambda功能,將.csv檔案轉換成影象,並將影象儲存在S3 儲存桶(S3 bucket)中. 當一個 .csv 檔案被上傳時, 請啟用 Lambda 函式。
- C. 在S3 儲存桶(S3 bucket)中為.csv檔案和影象檔案建立S3生命週期規則. .csv檔案在上傳1天后從S3標準轉換為S3冰川. 30天后終止影象檔案。
- D. 在S3 儲存桶(S3 bucket)中為.csv檔案和影象檔案建立S3生命週期規則. 將.csv檔案從S3標準轉換為S3 One Zone-不經常存取(S3 One Zone-IA),在上傳1天后. 30天后終止影象檔案。
- E. 在S3 儲存桶(S3 bucket)中為.csv檔案和影象檔案建立S3生命週期規則. .csv檔案在上傳1天后從S3標準轉換為S3標準不頻繁存取(S3 Standard-IA). 將影象檔案儲存在減少冗餘儲存(RRS)中.

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：設計一個AWS Lambda功能,將.csv檔案轉換成影象,並將影象儲存在S3 儲存桶(S3 bucket)中. 當一個 .csv 檔案被上傳時, 請啟用 Lambda 函式 。此選項符合題目條件，能有效滿足核心需求。
- C：在S3 儲存桶(S3 bucket)中為.csv檔案和影象檔案建立S3生命週期規則. .csv檔案在上傳1天后從S3標準轉換為S3冰川. 30天后終止影象檔案 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：推出Amazon EC2 Spotext,每小時下載.csv檔案,生成影象檔案,並將影象上傳到S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在S3 儲存桶(S3 bucket)中為.csv檔案和影象檔案建立S3生命週期規則. 將.csv檔案從S3標準轉換為S3 One Zone-不經常存取(S3 One Zone-IA),在上傳1天后. 30天后終止影象檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在S3 儲存桶(S3 bucket)中為.csv檔案和影象檔案建立S3生命週期規則. .csv檔案在上傳1天后從S3標準轉換為S3標準不頻繁存取(S3 Standard-IA). 將影象檔案儲存在減少冗餘儲存(RRS)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #431

**題目**
一家公司開發了新的電子遊戲作為網路應用. 該應用程式處於VPC的三級架構中,在資料庫(database)層為MySQL配有Amazon RDS. 幾位玩家將同時線上競爭. 遊戲開發者希望在近實時顯示前十名的記分牌,並提供在保留當前記分的同時停止和恢復遊戲的能力. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 為Memcached叢集設定 Amazon ElastiCache,以快取要顯示的網路應用程式的分數.
- B. 為 Redis 叢集設定 Amazon ElastiCache 來計算和快取要顯示的網路應用程式的分數.
- C. 在網路應用程式前放置一個 Amazon CloudFront 分佈,以在應用程式的一個部分中快取計分板.
- D. 在 Amazon RDS 上建立一個讀取複製件,供 MySQL 執行查詢以計算計分板並服務讀取流量到網路應用程式.

**答案**
B


**詳解**
正確答案是 **B**。
- B：為 Redis 叢集設定 Amazon ElastiCache 來計算和快取要顯示的網路應用程式的分數。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為Memcached叢集設定 Amazon ElastiCache,以快取要顯示的網路應用程式的分數。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在網路應用程式前放置一個 Amazon CloudFront 分佈,以在應用程式的一個部分中快取計分板。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Amazon RDS 上建立一個讀取複製件,供 MySQL 執行查詢以計算計分板並服務讀取流量到網路應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #432

**題目**
一個電子商務公司希望使用機器學習(ML)演算法來構建和訓練模型. 公司將使用這些模型視覺化複雜情景,並檢測客戶資料的趨勢. 架構團隊希望將其ML模型與報告平臺整合,以分析擴充資料,並將資料直接用於其業務智慧儀表板. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用AWS Glue來建立ML變換以構建和訓練模型. 使用Amazon OpenSearch Service視覺化資料.
- B. 使用Amazon SageMaker來構建和訓練模型. 使用Amazon QuickSight視覺化資料.
- C. 使用從AWS Marketplace預建的ML Amazon機器影象(AMI)來構建和訓練模型. 使用Amazon OpenSearch Service視覺化資料.
- D. 使用亞馬遜快速視(Amazon QuickSight)透過使用計算場構建和訓練模型. 使用Amazon QuickSight視覺化資料.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon SageMaker來構建和訓練模型. 使用Amazon QuickSight視覺化資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS Glue來建立ML變換以構建和訓練模型. 使用Amazon OpenSearch Service視覺化資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用從AWS Marketplace預建的ML Amazon機器影象(AMI)來構建和訓練模型. 使用Amazon OpenSearch Service視覺化資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用亞馬遜快速視(Amazon QuickSight)透過使用計算場構建和訓練模型. 使用Amazon QuickSight視覺化資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #433

**題目**
一家公司正在多個AWS帳戶中經營其生產和非生產環境工作量. 帳戶設在AWS Organizations的一個組織。 公司需要設計一種能夠防止成本使用標籤修改的解決方案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立自定義的 AWS Config 規則,以阻止除授權主機外的標記修改.
- B. 在 AWS CloudTrail 中建立自定義線索以防止標記修改。
- C. 建立服務控制政策(SCP),以防止除授權主機外的標記修改.
- D. 建立自定義的 Amazon CloudWatch 日誌,以防止標記修改。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立服務控制政策(SCP),以防止除授權主機外的標記修改。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立自定義的 AWS Config 規則,以阻止除授權主機外的標記修改。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 AWS CloudTrail 中建立自定義線索以防止標記修改 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立自定義的 Amazon CloudWatch 日誌,以防止標記修改 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #434

**題目**
一個公司在AWS雲中託管其應用. 該應用程式執行在Auto Scaling 群組(Auto Scaling group)中一個彈性負載平衡器(Load Balancer)後面的Amazon EC2例項上,並有一個Amazon DynamoDB表格. 公司希望確保該應用程式能在最小的停機時間在另一個AWS 區域(Region)中提供. 一個解決方案設計師應該怎麼做才能滿足這些要求?

**選項**
- A. 在災難復原(disaster recovery)中建立Auto Scaling 群組(Auto Scaling group)和負載平衡器(load balancer). 配置 DynamoDB 表格為全域性表。 配置 DNS 故障翻轉指向新的 災難復原(disaster recovery) 區域(Region) 的 負載平衡器(load balancer).
- B. 建立一個 AWS 雲陣模板,以建立EC2 例項,載入平衡器,以及當需要時啟動的 DynamoDB 表格 配置 DNS 故障翻轉,指向新的 災難復原(disaster recovery) 區域(Region) 的 負載平衡器(load balancer).
- C. 建立一個AWS CloudFormation模板,以建立EC2例項,並在需要時推出負載平衡器(load balancer). 配置 DynamoDB 表格為全域性表。 配置 DNS 失敗翻轉指向新的 災難復原(disaster recovery) 區域(Region) 的 負載平衡器(load balancer)。
- D. 在災難復原(disaster recovery) 區域(Region)中建立Auto Scaling 群組(Auto Scaling group)和負載平衡器(load balancer). 配置 DynamoDB 表格為全域性表。 建立 Amazon CloudWatch 提醒以觸發 AWS Lambda 函式,更新 Amazon Route 53 指向 災難復原(disaster recovery) 負載平衡器(load balancer).

**答案**
A


**詳解**
正確答案是 **A**。
- A：在災難復原(disaster recovery)中建立Auto Scaling 群組(Auto Scaling group)和負載平衡器(load balancer). 配置 DynamoDB 表格為全域性表。 配置 DNS 故障翻轉指向新的 災難復原(disaster recovery) 區域(Region) 的 負載平衡器(load balancer)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個 AWS 雲陣模板,以建立EC2 例項,載入平衡器,以及當需要時啟動的 DynamoDB 表格 配置 DNS 故障翻轉,指向新的 災難復原(disaster recovery) 區域(Region) 的 負載平衡器(load balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個AWS CloudFormation模板,以建立EC2例項,並在需要時推出負載平衡器(load balancer). 配置 DynamoDB 表格為全域性表。 配置 DNS 失敗翻轉指向新的 災難復原(disaster recovery) 區域(Region) 的 負載平衡器(load balancer) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在災難復原(disaster recovery) 區域(Region)中建立Auto Scaling 群組(Auto Scaling group)和負載平衡器(load balancer). 配置 DynamoDB 表格為全域性表。 建立 Amazon CloudWatch 提醒以觸發 AWS Lambda 函式,更新 Amazon Route 53 指向 災難復原(disaster recovery) 負載平衡器(load balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #435

**題目**
一家公司需要在兩週內將一個MySQL 資料庫(database)從它的立體資料中心遷移到AWS. 資料庫(database)的體型為20TB. 公司希望以最小的停工時間完成遷移. 哪種解決方案能夠以成本效益高的方式遷移資料庫(database)?

**選項**
- A. 訂購AWS Snowball Edge Storage Optimized裝置. 使用AWS 資料庫(Database) 遷移服務(AWS DS),使用AWS Schema轉換工具(AWS SCT),將資料庫(database)與正在進行中的複寫(replication)遷移. 將Snowball Edge 裝置送到AWS完成遷移,並繼續進行中複寫(replication).
- B. 訂購AWS雪車. 使用AWS 資料庫(Database) 遷移服務(AWS DS)與 AWS Schema 轉換工具(AWS SCT)一起進行遷移,並進行中的變化. 將Snowmobile車輛送回AWS完成遷移,並繼續進行正在進行的複寫(replication).
- C. 用GPU裝置訂購一個AWS Snowball Edge計算最佳化. 使用AWS 資料庫(Database) 遷移服務(AWS DS)與 AWS Schema 轉換工具(AWS SCT)一起進行遷移,並進行中的變化. 將Snowball裝置送到AWS完成遷移,並繼續正在進行的複寫(replication)
- D. 訂購1GB專用的AWS Direct Connect連線,與資料中心建立連線. 使用 AWS 資料庫(Database) 遷移服務(AWS DS) 使用 AWS Schema 轉換工具(AWS SCT) 將 資料庫(database) 遷移到正在進行中的 複寫(replication) .

**答案**
D


**詳解**
正確答案是 **D**。
- D：訂購1GB專用的AWS Direct Connect連線,與資料中心建立連線. 使用 AWS 資料庫(Database) 遷移服務(AWS DS) 使用 AWS Schema 轉換工具(AWS SCT) 將 資料庫(database) 遷移到正在進行中的 複寫(replication) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：訂購AWS Snowball Edge Storage Optimized裝置. 使用AWS 資料庫(Database) 遷移服務(AWS DS),使用AWS Schema轉換工具(AWS SCT),將資料庫(database)與正在進行中的複寫(replication)遷移. 將Snowball Edge 裝置送到AWS完成遷移,並繼續進行中複寫(replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：訂購AWS雪車. 使用AWS 資料庫(Database) 遷移服務(AWS DS)與 AWS Schema 轉換工具(AWS SCT)一起進行遷移,並進行中的變化. 將Snowmobile車輛送回AWS完成遷移,並繼續進行正在進行的複寫(replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：用GPU裝置訂購一個AWS Snowball Edge計算最佳化. 使用AWS 資料庫(Database) 遷移服務(AWS DS)與 AWS Schema 轉換工具(AWS SCT)一起進行遷移,並進行中的變化. 將Snowball裝置送到AWS完成遷移,並繼續正在進行的複寫(replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #436

**題目**
一家公司將廠房PostgreSQL 資料庫(database)移至Amazon RDS,作為PostgreSQL DB例項。 公司成功推出新產品. 資料庫(database)的工作量有所增加。 公司希望在不增加基礎設施的情況下承擔更大的工作量. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 購買保留的全部工作量的開發銀行例項。 讓 PostgreSQL DB 的 Amazon RDS 例項更大。
- B. 讓 PostgreSQL DB 例項的 Amazon RDS 成為多AZ DB 例項。
- C. 購買保留的全部工作量的開發銀行例項。 為 PostgreSQL DB 例項新增另一個 Amazon RDS。
- D. 讓 PostgreSQL DB 例項的 Amazon RDS 成為點播 DB 例項。

**答案**
A


**詳解**
正確答案是 **A**。
- A：購買保留的全部工作量的開發銀行例項。 讓 PostgreSQL DB 的 Amazon RDS 例項更大 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：讓 PostgreSQL DB 例項的 Amazon RDS 成為多AZ DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：購買保留的全部工作量的開發銀行例項。 為 PostgreSQL DB 例項新增另一個 Amazon RDS 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：讓 PostgreSQL DB 例項的 Amazon RDS 成為點播 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #437

**題目**
一家公司在應用程式負載平衡器(Application Load Balancer)(ALB)之後的Amazon EC2 執行個體中經營一個電子商務網站。 該網站正面臨與來自非法外部系統的高要求率以及IP地址變化有關的效能問題。 安全小組擔心DDoS可能攻擊網站. 公司必須以對合法使用者影響最小的方式阻止非法收到的請求。 一個解決方案設計師應該推薦什麼?

**選項**
- A. 部署亞馬遜巡視員,並把它與ALB聯絡起來。
- B. 部署AWS WAF,將其與ALB聯絡起來,並配置一個限速規則.
- C. 向與ALB相關的網路ACL部署規則,以阻斷進入的流量.
- D. 部署亞馬遜衛戍區,並在配置衛戍區時啟用限速保護.

**答案**
B


**詳解**
正確答案是 **B**。
- B：部署AWS WAF,將其與ALB聯絡起來,並配置一個限速規則。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：部署亞馬遜巡視員,並把它與ALB聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：向與ALB相關的網路ACL部署規則,以阻斷進入的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署亞馬遜衛戍區,並在配置衛戍區時啟用限速保護。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #438

**題目**
公司希望與外聘審計師共享會計資料. 資料儲存在Amazon RDS DB例項中,該例項存在於一個私人子網中。 審計員有自己的AWS帳戶,需要自己的資料庫(database)副本。 公司與審計員分享資料庫(database)的MOST安全方式是什麼?

**選項**
- A. 建立資料庫(database)的讀取複製品. 配置IAM標準資料庫(database)認證,允許審計師存取.
- B. 匯出 資料庫(database) 內容到文字檔案。 在Amazon S3桶裡儲存檔案. 為審計員建立一個新的IAM使用者. 允許使用者存取S3 儲存桶(S3 bucket).
- C. 將資料庫(database)的快照(snapshot)複製到Amazon S3桶中. 建立 IAM 使用者。 與審計師共享使用者金鑰,允許存取S3 儲存桶(S3 bucket)中的物件.
- D. 在資料庫(database)中建立加密的快照(snapshot). 與審計師共享快照(snapshot). 允許存取 AWS Key Management Service(AWS KMS) 加密(encryption) 鍵.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在資料庫(database)中建立加密的快照(snapshot). 與審計師共享快照(snapshot). 允許存取 AWS Key Management Service(AWS KMS) 加密(encryption) 鍵。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立資料庫(database)的讀取複製品. 配置IAM標準資料庫(database)認證,允許審計師存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：匯出 資料庫(database) 內容到文字檔案。 在Amazon S3桶裡儲存檔案. 為審計員建立一個新的IAM使用者. 允許使用者存取S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料庫(database)的快照(snapshot)複製到Amazon S3桶中. 建立 IAM 使用者。 與審計師共享使用者金鑰,允許存取S3 儲存桶(S3 bucket)中的物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #439

**題目**
一個解決方案架構師配置了一個擁有少量IP地址的VPC. VPC中的Amazon EC2 執行個體數量不斷增加,未來工作量IP地址數量不足. 哪一種辦法能用LEAST 營運開銷(operational overhead)解決這個問題?

**選項**
- A. 增加一個額外的IPv4 CIDR塊,以增加IP地址的數量,並在VPC中建立額外的子網. 使用新的 CIDR 在新子網中建立新資源。
- B. 建立帶有額外子網的第二個 VPC。 使用對等連線連線連線第二VPC和第一VPC 更新路徑,並在第二VPC的子網中建立新的資源.
- C. 使用AWS Transit Gateway來新增一箇中轉閘道器,並將第二個VPC與第一個VPUpdate的中轉閘道器和VPC連線起來. 在第二VPC的子網中建立新資源.
- D. 建立第二個 VPC. 透過在Amazon EC2上使用VPN託管的解決方案和虛擬私有閘道(virtual private gateway),在第一個VPC和第二個VPC之間建立一個站點對站點VPN連線. 更新VPC之間透過VPN的交通線路. 在第二VPC的子網中建立新資源.

**答案**
A


**詳解**
正確答案是 **A**。
- A：增加一個額外的IPv4 CIDR塊,以增加IP地址的數量,並在VPC中建立額外的子網. 使用新的 CIDR 在新子網中建立新資源 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立帶有額外子網的第二個 VPC。 使用對等連線連線連線第二VPC和第一VPC 更新路徑,並在第二VPC的子網中建立新的資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Transit Gateway來新增一箇中轉閘道器,並將第二個VPC與第一個VPUpdate的中轉閘道器和VPC連線起來. 在第二VPC的子網中建立新資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立第二個 VPC. 透過在Amazon EC2上使用VPN託管的解決方案和虛擬私有閘道(virtual private gateway),在第一個VPC和第二個VPC之間建立一個站點對站點VPN連線. 更新VPC之間透過VPN的交通線路. 在第二VPC的子網中建立新資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #440

**題目**
一家公司在應用測試時使用Amazon RDS用於MySQL DB例項. 在測試周期結束時終止 DB 例項之前,一個解決方案架構師建立了兩個備份. 解決方案架構師利用 Mysqldump 工具建立了第一個 資料庫(database) 垃圾堆。 解決方案架構師透過啟用最終的DB 快照(snapshot) RDS終止選項,創造了第二個備份(backup). 該公司目前正在計劃一個新的測試周期,希望從最近的備份(backup)中建立一個新的DB例項. 該公司選擇了相容MySQL的Amazon Aurora版本,以託管DB例項. 哪些解決方案將建立新的 DB 例項 ?(選二.

**選項**
- A. 將RDS 快照(snapshot)直接匯入Aurora.
- B. 上傳RDS 快照(snapshot)至Amazon S3. 然後將RDS 快照(snapshot)匯入到Aurora.
- C. 上傳資料庫傾印 (dump) 上傳至 Amazon S3，然後將傾印匯入 Aurora.
- D. 使用 AWS 資料庫(Database) 遷移服務(AWS DS)將 RDS 快照(snapshot) 匯入 Aurora.
- E. 上傳資料庫傾印 (dump) 上傳至 Amazon S3，然後使用 AWS DMS 將傾印匯入 Aurora.

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：將RDS 快照(snapshot)直接匯入Aurora。此選項符合題目條件，能有效滿足核心需求。
- D：使用 AWS 資料庫(Database) 遷移服務(AWS DS)將 RDS 快照(snapshot) 匯入 Aurora。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：上傳RDS 快照(snapshot)至Amazon S3. 然後將RDS 快照(snapshot)匯入到Aurora。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：上傳資料庫傾印 (dump) 上傳至 Amazon S3，然後將傾印匯入 Aurora。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：上傳資料庫傾印 (dump) 上傳至 Amazon S3，然後使用 AWS DMS 將傾印匯入 Aurora。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #441

**題目**
一家公司在Amazon Linux Amazon EC2例項上,在應用程式負載平衡器(Application Load Balancer)背後託管一個多級網路應用程式. 這些例子在Auto Scaling 群組(Auto Scaling group)中跨越多個可用區(Availability Zones). 公司觀察到,Auto Scaling 群組(Auto Scaling group)在應用程式的終端使用者存取大量靜態網路內容時,推出更多的On-Demand Incents. 公司希望最佳化成本. 解決方案設計師應如何以成本效益高的方式重新設計應用程式?

**選項**
- A. 更新 Auto Scaling 群組(Auto Scaling group) 以使用 Reserved Practens 而不是 On-Demand Practers。
- B. 更新Auto Scaling 群組(Auto Scaling group),透過發射Spotexits而不是On-Demand Incents來放大.
- C. 建立 Amazon CloudFront 發行版,以託管 Amazon S3 桶中的靜態網路內容.
- D. 在 Amazon API Gateway API 後方建立 AWS Lambda 功能,以託管靜態網站內容.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 Amazon CloudFront 發行版,以託管 Amazon S3 桶中的靜態網路內容。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：更新 Auto Scaling 群組(Auto Scaling group) 以使用 Reserved Practens 而不是 On-Demand Practers 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：更新Auto Scaling 群組(Auto Scaling group),透過發射Spotexits而不是On-Demand Incents來放大。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Amazon API Gateway API 後方建立 AWS Lambda 功能,以託管靜態網站內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #442

**題目**
一家公司透過多個AWS帳戶儲存了數個Petabytes的資料. 公司使用AWS湖立交管理其資料湖(data lake). 公司的資料科學團隊希望安全地與公司的工程團隊共享其帳戶中選擇性的資料,用於分析目的. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將所需資料複製到一個共同帳戶。 在該帳戶中建立一個IAM存取功能. 透過指定一項許可政策,將工程組帳戶的使用者作為可信任實體,准予存取。
- B. 在儲存資料的每個帳戶中使用"湖形成"許可權Grant命令,允許所需的工程團隊使用者存取資料.
- C. 使用AWS資料交換機私下向所需的工程組帳戶公佈所需資料.
- D. 使用基於Lake Formation標籤的存取控制(access control)授權並向工程組帳戶提供所需資料的交叉帳戶許可.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用基於Lake Formation標籤的存取控制(access control)授權並向工程組帳戶提供所需資料的交叉帳戶許可。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將所需資料複製到一個共同帳戶。 在該帳戶中建立一個IAM存取功能. 透過指定一項許可政策,將工程組帳戶的使用者作為可信任實體,准予存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在儲存資料的每個帳戶中使用"湖形成"許可權Grant命令,允許所需的工程團隊使用者存取資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS資料交換機私下向所需的工程組帳戶公佈所需資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #443

**題目**
一個公司想在AWS上託管一個可縮放的網路應用程式. 來自世界不同地理區域的使用者將存取該應用程式。 應用程式使用者將能夠下載和上傳唯一資料,其大小可達千兆位元組。 開發團隊希望有一個成本效益高的解決方案,以儘量減少上傳和下載延遲(latency),並最大限度地發揮效能. 解決方案設計師應該怎麼做才能做到這一點?

**選項**
- A. 使用 Amazon S3 並帶有傳輸加速器來託管應用程式.
- B. 使用帶有快取控制頭的 Amazon S3 來託管應用程式。
- C. 使用 Amazon EC2 與 Auto 縮放和 Amazon CloudFront 託管應用程式.
- D. 使用 Amazon EC2 與 Auto 縮放和 Amazon ElastiCache 託管應用程式。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 Amazon S3 並帶有傳輸加速器來託管應用程式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用帶有快取控制頭的 Amazon S3 來託管應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon EC2 與 Auto 縮放和 Amazon CloudFront 託管應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon EC2 與 Auto 縮放和 Amazon ElastiCache 託管應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #444

**題目**
一家公司聘請了一位解決方案架構師,為其應用設計了可靠的架構. 該應用程式包括一個Amazon RDS DB例項和兩個手動提供執行網路伺服器的Amazon EC2例項. EC2 執行個體位於單一的可用區(Availability Zone)中. 一名僱員最近刪除了DB例項,因此24小時無法使用該應用程式。 該公司關注整個可靠性(reliability)環境. 解決方案設計師應如何最大限度地利用該應用程式的基礎設施?

**選項**
- A. 刪除一個EC2例項,使另一個EC2例項得到終止保護。 更新 DB 例項為多AZ,並允許刪除保護。
- B. 更新 DB 例項為多AZ,並允許刪除保護。 將EC2例項置於應用程式負載平衡器(Application Load Balancer)之後,並執行在EC2 Auto Scaling 群組(Auto Scaling group)中,跨越多個可用區(Availability Zones).
- C. 與 Amazon API Gateway 和 AWS Lambda 函式一起建立額外的 DB 例項。 配置應用程式以透過 API Gateway 引用 Lambda 函式。 讓 Lambda 函式將資料寫入兩個 DB 例項。
- D. 將 EC2 例項放在 EC2 Auto Scaling 群組(Auto Scaling group) 中,該 EC2 Auto Scaling 群組(Auto Scaling group) 有多個子網位於多個 可用區(Availability Zones) 中. 使用 SpotStrics 代替 On-Demand Strics。 設定 Amazon CloudWatch 提醒以監視事件的健康 更新 DB 例項為多 AZ,並啟用刪除保護。

**答案**
B


**詳解**
正確答案是 **B**。
- B：更新 DB 例項為多AZ,並允許刪除保護。 將EC2例項置於應用程式負載平衡器(Application Load Balancer)之後,並執行在EC2 Auto Scaling 群組(Auto Scaling group)中,跨越多個可用區(Availability Zones)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：刪除一個EC2例項,使另一個EC2例項得到終止保護。 更新 DB 例項為多AZ,並允許刪除保護 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：與 Amazon API Gateway 和 AWS Lambda 函式一起建立額外的 DB 例項。 配置應用程式以透過 API Gateway 引用 Lambda 函式。 讓 Lambda 函式將資料寫入兩個 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 EC2 例項放在 EC2 Auto Scaling 群組(Auto Scaling group) 中,該 EC2 Auto Scaling 群組(Auto Scaling group) 有多個子網位於多個 可用區(Availability Zones) 中. 使用 SpotStrics 代替 On-Demand Strics。 設定 Amazon CloudWatch 提醒以監視事件的健康 更新 DB 例項為多 AZ,並啟用刪除保護 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #445

**題目**
一家公司正在將700兆位元組的資料儲存在其公司資料中心內一個大型網路附屬儲存系統上。 該公司擁有10Gbps AWS Direct Connect連線的混合環境. 在從一個監管機構得到稽核(audit)後,公司有90天的時間將資料移動到雲端. 公司需要高效和不間斷地移動資料. 公司仍然需要能夠在轉移視窗期間存取和更新資料. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在公司資料中心建立 AWS 資料同步代理。 建立資料傳輸任務 啟動傳輸到 Amazon S3 桶。
- B. 將資料備份到 AWS Snowball Edge Storage Optimized 裝置中. 將裝置運送到AWS資料中心. 掛載目標Amazon S3桶在promess檔案系統上.
- C. 使用 rsync 將資料從本地儲存直接複製到指定的 Amazon S3 桶,透過直接連線連線.
- D. 備份磁帶上的資料。 把磁帶送到AWS資料中心 掛載目標Amazon S3桶在promess檔案系統上.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在公司資料中心建立 AWS 資料同步代理。 建立資料傳輸任務 啟動傳輸到 Amazon S3 桶 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將資料備份到 AWS Snowball Edge Storage Optimized 裝置中. 將裝置運送到AWS資料中心. 掛載目標Amazon S3桶在promess檔案系統上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 rsync 將資料從本地儲存直接複製到指定的 Amazon S3 桶,透過直接連線連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：備份磁帶上的資料。 把磁帶送到AWS資料中心 掛載目標Amazon S3桶在promess檔案系統上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #446

**題目**
一家公司用Amazon S3桶儲存PDF格式的資料. 公司必須遵守法律要求,將Amazon S3中的所有新資料和現有資料保留7年。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 開啟S3 儲存桶(S3 bucket)的S3版本功能. 配置 S3 生命週期以刪除7 年後的資料。 為所有 S3 物件配置多要素認證( MFA) 刪除。
- B. 為S3 儲存桶(S3 bucket)開啟具有治理保留模式的S3 Object Lock. 規定保留期在7年後屆滿。 複製所有現有物件,將現有資料帶入合規(compliance).
- C. 為S3 儲存桶(S3 bucket)開啟S3 Object Lock,採用合規(compliance)保留模式. 規定保留期在7年後屆滿。 複製所有現有物件,將現有資料帶入合規(compliance).
- D. 為S3 儲存桶(S3 bucket)開啟S3 Object Lock,採用合規(compliance)保留模式. 規定保留期在7年後屆滿。 使用S3 Batch Operations將現有資料帶入合規(compliance).

**答案**
C


**詳解**
正確答案是 **C**。
- C：為S3 儲存桶(S3 bucket)開啟S3 Object Lock,採用合規(compliance)保留模式. 規定保留期在7年後屆滿。 複製所有現有物件,將現有資料帶入合規(compliance)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：開啟S3 儲存桶(S3 bucket)的S3版本功能. 配置 S3 生命週期以刪除7 年後的資料。 為所有 S3 物件配置多要素認證( MFA) 刪除 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為S3 儲存桶(S3 bucket)開啟具有治理保留模式的S3 Object Lock. 規定保留期在7年後屆滿。 複製所有現有物件,將現有資料帶入合規(compliance)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為S3 儲存桶(S3 bucket)開啟S3 Object Lock,採用合規(compliance)保留模式. 規定保留期在7年後屆滿。 使用S3 Batch Operations將現有資料帶入合規(compliance)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #447

**題目**
一家公司有一個無狀態的網路應用程式,執行在AWS Lambda功能上,由Amazon API Gateway引用. 該公司希望在多個AWS地區部署該應用程式,以提供區域故障處理能力. 一個解決方案設計師應該對通往多個地區的線路交通做什麼?

**選項**
- A. 為每個區域(Region)建立Amazon Route 53健康檢查. 使用活躍的失敗配置。
- B. 建立 Amazon CloudFront 分佈,每個 區域(Region) 都有來源。 使用雲紋健康檢查進行線路交通.
- C. 建立中轉閘道器。 將中轉閘道器附加到每個區域(Region)中的API閘道器端. 配置路由請求的中轉閘道器。
- D. 在主機區域(Region)中建立應用程式負載平衡器(Application Load Balancer). 設定目標組以指向每個區域(Region)中的API Gateway端點主機名.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為每個區域(Region)建立Amazon Route 53健康檢查. 使用活躍的失敗配置 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立 Amazon CloudFront 分佈,每個 區域(Region) 都有來源。 使用雲紋健康檢查進行線路交通。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立中轉閘道器。 將中轉閘道器附加到每個區域(Region)中的API閘道器端. 配置路由請求的中轉閘道器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在主機區域(Region)中建立應用程式負載平衡器(Application Load Balancer). 設定目標組以指向每個區域(Region)中的API Gateway端點主機名。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #448

**題目**
一家公司有兩個名為管理和生產的VPC. 管理VPC透過客戶閘道器使用VPN連線到資料中心的單個裝置. 生產VPC使用虛擬私有閘道(virtual private gateway)型機車,並設有兩個附著的AWS Direct Connect連線. 管理和生產VPC都使用單一的VPC對等連線,允許應用程式之間的通訊. 一個解決方案設計師應該做什麼來緩解這個架構中任何單一的失敗點?

**選項**
- A. 在管理和生產VPC之間增加一組VPN.
- B. 增加第二個虛擬私有閘道(virtual private gateway)並附在管理VPC上.
- C. 從第二個客戶閘道器裝置新增第二套VPN到管理VPC.
- D. 新增管理VPC與生產VPC之間的第二個VPC對等連線.

**答案**
C


**詳解**
正確答案是 **C**。
- C：從第二個客戶閘道器裝置新增第二套VPN到管理VPC。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在管理和生產VPC之間增加一組VPN。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：增加第二個虛擬私有閘道(virtual private gateway)並附在管理VPC上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：新增管理VPC與生產VPC之間的第二個VPC對等連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #449

**題目**
一家公司在甲骨文資料庫(database)上執行其應用. 由於資料庫(database),備份(backup)管理以及資料中心維護的資源有限,公司計劃迅速遷移到AWS. 該應用程式使用第三方的資料庫(database)特性,這些特性需要優先存取. 哪個解決方案能幫助公司以成本效益高的方式將資料庫(database)型機車遷移到AWS MOST型機車?

**選項**
- A. 將資料庫(database)遷移到Amazon RDS用於甲骨文. 以雲服務取代第三方特性。
- B. 將 資料庫(database) 修改為 Amazon RDS Oracle 自定義。 自定義資料庫(database)設定以支援第三方特性.
- C. 為甲骨文將資料庫(database)遷移到Amazon EC2亞馬遜機器影象(AMI). 自定義資料庫(database)設定,支援第三方特性.
- D. 將資料庫(database)修改為Amazon RDS用於PostgreSQL,方法是重寫應用程式程式碼以消除對甲骨文APEX的依賴.

**答案**
C


**詳解**
正確答案是 **C**。
- C：為甲骨文將資料庫(database)遷移到Amazon EC2亞馬遜機器影象(AMI). 自定義資料庫(database)設定,支援第三方特性。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料庫(database)遷移到Amazon RDS用於甲骨文. 以雲服務取代第三方特性。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將 資料庫(database) 修改為 Amazon RDS Oracle 自定義。 自定義資料庫(database)設定以支援第三方特性。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料庫(database)修改為Amazon RDS用於PostgreSQL,方法是重寫應用程式程式碼以消除對甲骨文APEX的依賴。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #450

**題目**
一個公司有一個三級的網路應用程式,它在一個單一的伺服器上. 公司希望將應用程式遷移到AWS雲. 該公司還希望該應用程式與AWS井層框架保持一致,並與AWS建議的安全最佳做法可擴展性(scalability)和復原力保持一致。 哪些解決方案組合將滿足這些要求?(選三.

**選項**
- A. 用應用程式的現有架構建立一個跨兩個可用區(Availability Zones)的VPC. 在每個可用區(Availability Zone)的私人子網中,將現有架構中的應用程式與Amazon EC2例項放在EC2自動縮放組上。 以安全小組和存取控制(access control)網路清單(網路ACLs)確保EC2例項的安全。
- B. 設定安全組和網路存取控制(access control)列表(network ACLs),以控制資料庫(database)層的接入. 在一個私人子網中設定一個單獨的Amazon RDS 資料庫(database).
- C. 建立一個跨兩個可用區(Availability Zones)的VPC. 重置應用程式以託管網路級、應用級和資料庫(database)級。 將每個級別放在自己的私有子網上, 並設定用於網路級別和應用級別的自動縮放組。
- D. 使用單一的Amazon RDS 資料庫(database). 僅允許資料庫(database)從應用級安全群組(security group)存取.
- E. 在網路級前使用彈性負載平衡器。 透過使用包含每層安全小組參考文獻的安全小組來控制存取.
- F. 在私人子網使用Amazon RDS 資料庫(database)多AZ叢集部署. 只允許資料庫(database)從應用程式級安全組存取.

**答案**
A,C,F



**詳解**
正確答案是 **A, C**。
- A：用應用程式的現有架構建立一個跨兩個可用區(Availability Zones)的VPC. 在每個可用區(Availability Zone)的私人子網中,將現有架構中的應用程式與Amazon EC2例項放在EC2自動縮放組上。 以安全小組和存取控制(access control)網路清單(網路ACLs)確保EC2例項的安全。此選項符合題目條件，能有效滿足核心需求。
- C：建立一個跨兩個可用區(Availability Zones)的VPC. 重置應用程式以託管網路級、應用級和資料庫(database)級。 將每個級別放在自己的私有子網上, 並設定用於網路級別和應用級別的自動縮放組。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：設定安全組和網路存取控制(access control)列表(network ACLs),以控制資料庫(database)層的接入. 在一個私人子網中設定一個單獨的Amazon RDS 資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用單一的Amazon RDS 資料庫(database). 僅允許資料庫(database)從應用級安全群組(security group)存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在網路級前使用彈性負載平衡器。 透過使用包含每層安全小組參考文獻的安全小組來控制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #451

**題目**
一家公司正在將其應用程式和資料庫遷移到AWS雲。 該公司將使用亞馬遜彈性容器服務公司(Amazon ECS)、AWS Direct Connect和Amazon RDS。 哪些活動將由公司的業務團隊管理?(選三.

**選項**
- A. Amazon RDS基礎設施層、作業系統和平臺的管理
- B. 建立 Amazon RDS DB 例項並配置預定的維護視窗
- C. 為監控(monitoring)配置亞馬遜ECS的其他軟體元件,補丁管理、日誌管理和主機入侵探測
- D. 為Amazon RDS的所有小型和主要資料庫(database)版本安裝補丁
- E. 確保資料中心Amazon RDS基礎設施的實物安全
- F. 加密(Encryption) 透過直接連線過境的資料

**答案**
B,C,F



**詳解**
正確答案是 **B, C**。
- B：建立 Amazon RDS DB 例項並配置預定的維護視窗。此選項符合題目條件，能有效滿足核心需求。
- C：為監控(monitoring)配置亞馬遜ECS的其他軟體元件,補丁管理、日誌管理和主機入侵探測。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：Amazon RDS基礎設施層、作業系統和平臺的管理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為Amazon RDS的所有小型和主要資料庫(database)版本安裝補丁。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：確保資料中心Amazon RDS基礎設施的實物安全。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #452

**題目**
一家公司以Amazon EC2為例經營基於Java的工作. 工作每個小時執行,執行需要10秒. 任務執行在預定間隔,消耗1GB的記憶體. 例項的CPU利用率很低,但短波突襲除外,在短波突襲期間,該工作使用可用的最大CPU. 公司希望最佳化經營成本. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用AWS App2Container(A2C)將任務容器化. 在 AWS Fargate 上執行 Amazon 彈性容器服務(Amazon ECS)的任務,任務為 0.5 虛擬 CPU(vCPU)和 1 GB 記憶體.
- B. 將程式碼複製到具有1GB記憶體的AWS Lambda函式中. 建立一個 Amazon EventBridge 計劃規則,每小時執行程式碼.
- C. 使用AWS App2Container(A2C)將任務容器化. 在現有的亞馬遜機器影象(AMI)中安裝容器. 確保任務完成時時刻表停止容器。
- D. 配置現有的時間表, 以在任務完成時停止 EC2 例項, 在下一個任務開始時重新啟動 EC2 例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：將程式碼複製到具有1GB記憶體的AWS Lambda函式中. 建立一個 Amazon EventBridge 計劃規則,每小時執行程式碼。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS App2Container(A2C)將任務容器化. 在 AWS Fargate 上執行 Amazon 彈性容器服務(Amazon ECS)的任務,任務為 0.5 虛擬 CPU(vCPU)和 1 GB 記憶體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS App2Container(A2C)將任務容器化. 在現有的亞馬遜機器影象(AMI)中安裝容器. 確保任務完成時時刻表停止容器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置現有的時間表, 以在任務完成時停止 EC2 例項, 在下一個任務開始時重新啟動 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #453

**題目**
一家公司希望針對Amazon EC2資料和多個Amazon S3桶實施備份(backup)策略. 由於監管要求,公司必須保留備份(backup)檔案一段時間. 公司在保留期內不得變更檔案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用AWS Backup來建立備份(backup)金庫,在治理模式下設有金庫鎖. 建立所需的備份(backup)計劃.
- B. 使用亞馬遜資料生命週期管理器建立所需的自動快照(snapshot)政策.
- C. 使用 Amazon S3 檔案閘道器建立備份(backup). 配置相應的 S3 生命週期管理。
- D. 使用AWS Backup來建立備份(backup)金庫,該金庫以合規(compliance)模式設有金庫鎖. 建立所需的備份(backup)計劃.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS Backup來建立備份(backup)金庫,在治理模式下設有金庫鎖. 建立所需的備份(backup)計劃。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用亞馬遜資料生命週期管理器建立所需的自動快照(snapshot)政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon S3 檔案閘道器建立備份(backup). 配置相應的 S3 生命週期管理 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Backup來建立備份(backup)金庫,該金庫以合規(compliance)模式設有金庫鎖. 建立所需的備份(backup)計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #454

**題目**
一家公司擁有跨多個AWS區域和帳戶的資源. 一名新聘的解決方案設計師發現一名前僱員沒有提供資源庫存的詳細情況。 解決方案架構師需要構建和繪製所有帳戶中各種工作量的關係細節。 哪種解決辦法能以業務效率高的方式滿足這些要求?

**選項**
- A. 使用 AWS Systems Manager 編目從詳細檢視報告中生成地圖檢視.
- B. 使用 AWS 步驟函式來收集工作量細節。 手動構建工作量的架構圖。
- C. 在 AWS 上使用 Workload Discovery 生成工作量的架構圖.
- D. 使用AWS X-Ray檢視工作量細節. 構建結構圖與關係.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 AWS Systems Manager 編目從詳細檢視報告中生成地圖檢視。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 AWS 步驟函式來收集工作量細節。 手動構建工作量的架構圖。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 AWS 上使用 Workload Discovery 生成工作量的架構圖。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS X-Ray檢視工作量細節. 構建結構圖與關係。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #455

**題目**
一個公司使用AWS Organizations. 公司希望以不同的預算運作其AWS的一些帳戶. 公司希望收到警報,並在某一特定時期達到分配的預算門檻時,自動防止在AWS帳戶上提供額外資源. 哪些解決方案組合將滿足這些要求?(選三.

**選項**
- A. 使用 AWS 預算來建立預算。 確定所需AWS帳戶成本和使用報告部分的預算數額。
- B. 使用 AWS 預算來建立預算。 在所需AWS帳戶的帳單儀表板下設定預算數額。
- C. 為 AWS 預算建立 IAM 使用者, 以執行需要許可權的預算動作。
- D. 為 AWS 預算建立一個 IAM 角色,以便在需要的許可權下執行預算動作.
- E. 在每個帳戶達到預算門檻時增加一個提醒,通知公司. 新增一個預算行動,選擇帶有適當配置規則的IAM身份,以防止提供額外資源.
- F. 在每個帳戶達到預算門檻時增加一個提醒,通知公司. 增加一項預算行動,選擇帶有適當服務控制政策(SCP)的IAM身份,以防止提供額外資源.

**答案**
B,D,F



**詳解**
正確答案是 **B, D**。
- B：使用 AWS 預算來建立預算。 在所需AWS帳戶的帳單儀表板下設定預算數額。此選項符合題目條件，能有效滿足核心需求。
- D：為 AWS 預算建立一個 IAM 角色,以便在需要的許可權下執行預算動作。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用 AWS 預算來建立預算。 確定所需AWS帳戶成本和使用報告部分的預算數額。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 AWS 預算建立 IAM 使用者, 以執行需要許可權的預算動作 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在每個帳戶達到預算門檻時增加一個提醒,通知公司. 新增一個預算行動,選擇帶有適當配置規則的IAM身份,以防止提供額外資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #456

**題目**
一家公司在一個AWS 區域(Region)中執行Amazon EC2的應用程式. 公司希望將EC2 執行個體支援到第二個區域(Region). 該公司還希望在第二個區域(Region)中提供EC2資源,並從一個AWS帳戶集中管理EC2 執行個體. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立一個災難復原(disaster recovery)(DR)計劃,在第二個區域(Region)中,EC2 執行個體數量相似. 配置資料 複寫(replication).
- B. 建立時點 Amazon Elastic Block Store(Amazon EBS) EC2 例項的快照. 將快照定期複製到第二個區域(Region).
- C. 透過使用AWS Backup建立備份(backup)計劃. 為EC2例項配置跨區域(Region) 備份(backup)到第二個區域(Region).
- D. 在第二次全球OSS0001中部署類似的EC2例項。 使用AWS DataSync將資料從源區域(Region)轉移到第二個區域(Region).

**答案**
C


**詳解**
正確答案是 **C**。
- C：透過使用AWS Backup建立備份(backup)計劃. 為EC2例項配置跨區域(Region) 備份(backup)到第二個區域(Region)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個災難復原(disaster recovery)(DR)計劃,在第二個區域(Region)中,EC2 執行個體數量相似. 配置資料 複寫(replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立時點 Amazon Elastic Block Store(Amazon EBS) EC2 例項的快照. 將快照定期複製到第二個區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在第二次全球OSS0001中部署類似的EC2例項。 使用AWS DataSync將資料從源區域(Region)轉移到第二個區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #457

**題目**
一個使用AWS的公司正在構建一個向產品製造商傳輸資料的應用程式. 公司擁有自己的身份提供商(IDP). 公司希望IDP認證應用程式使用者,而使用者則使用該應用程式傳輸資料. 公司必須使用適用宣告2(AS2)協議. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS 資料同步來傳輸資料. 為 IDP 認證建立 AWS Lambda 功能.
- B. 使用Amazon AppFlow fiows傳輸資料. 建立亞馬遜彈性容器服務(Amazon ECS)任務,用於IDP認證.
- C. 使用 AWS 傳輸家族來傳輸資料. 為 IDP 認證建立 AWS Lambda 功能.
- D. 使用AWS Storage Gateway傳輸資料. 為 IDP 認證建立 Amazon Cognito 身份池。

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用 AWS 傳輸家族來傳輸資料. 為 IDP 認證建立 AWS Lambda 功能。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 資料同步來傳輸資料. 為 IDP 認證建立 AWS Lambda 功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon AppFlow fiows傳輸資料. 建立亞馬遜彈性容器服務(Amazon ECS)任務,用於IDP認證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Storage Gateway傳輸資料. 為 IDP 認證建立 Amazon Cognito 身份池 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #458

**題目**
一名解決方案架構師正在Amazon API Gateway設計一個RESTAPI,用於現金還款服務. 應用程式需要1GB儲存器和2GB儲存器為其計算資源. 應用程式要求資料採用關係格式。 哪些附加的AWS服務將隨著LEAST的行政努力而滿足這些要求?(選二.

**選項**
- A. Amazon EC2 衛星
- B. AWS Lambda.
- C. Amazon RDS.
- D. Amazon DynamoDB.
- E. Amazon Elastic Kubernetes Services(Amazon EKS)().

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：AWS Lambda。此選項符合題目條件，能有效滿足核心需求。
- C：Amazon RDS。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：Amazon EC2 衛星。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：Amazon Elastic Kubernetes Services(Amazon EKS)()。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #459

**題目**
一家公司使用AWS Organizations在多個AWS帳戶內管理工作量. 公司建立標籤時,標籤政策會在AWS資源中新增部門標籤. 會計小組需要確定Amazon EC2消費的支出。 會計小組必須確定由哪個部門負責費用,而不論AWS帳戶如何。 會計小組可以查閱組織內所有AWS帳戶的AWS Cost Explorer,需要查閱Cost Explorer的所有報告. 哪種解決辦法能以運作效率高的方式滿足這些要求?

**選項**
- A. 從組織管理帳戶計費控制檯啟動一個使用者定義的成本分配標籤,命名為部門。 在Cost Explorer分組中按標籤名稱建立一份成本報告,由EC2過濾.
- B. 從組織管理帳戶計費控制檯啟動一個命名為部門的AWS定義成本分配標籤. 在Cost Explorer分組中按標籤名稱建立一份成本報告,由EC2過濾.
- C. 從組織成員帳單控制檯啟動一個使用者定義的成本分配標籤,命名為部門。 在Cost Explorer分組中按標籤名稱建立一份成本報告,並透過EC2過濾.
- D. 從組織成員帳號計費控制檯啟動一個命名為部門的AWS定義成本分配標籤. 在Cost Explorer分組中按標籤名稱建立一份成本報告,由EC2過濾.

**答案**
C


**詳解**
正確答案是 **C**。
- C：從組織成員帳單控制檯啟動一個使用者定義的成本分配標籤,命名為部門。 在Cost Explorer分組中按標籤名稱建立一份成本報告,並透過EC2過濾。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：從組織管理帳戶計費控制檯啟動一個使用者定義的成本分配標籤,命名為部門。 在Cost Explorer分組中按標籤名稱建立一份成本報告,由EC2過濾。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：從組織管理帳戶計費控制檯啟動一個命名為部門的AWS定義成本分配標籤. 在Cost Explorer分組中按標籤名稱建立一份成本報告,由EC2過濾。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：從組織成員帳號計費控制檯啟動一個命名為部門的AWS定義成本分配標籤. 在Cost Explorer分組中按標籤名稱建立一份成本報告,由EC2過濾。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #460

**題目**
公司希望在其軟體作為服務(SaaS)應用程式 Salesforce 帳戶和Amazon S3之間安全地交換資料. 公司必須透過使用AWS Key Management Service(AWS KMS)客戶管理的金鑰(CMKs)對資料進行休息加密. 公司還必須加密過境資料。 該公司允許API進入銷售力量帳戶。

**選項**
- A. 建立 AWS Lambda 函式,將資料安全地從 Salesforce 傳輸到 Amazon S3.
- B. 建立 AWS 步函式工作模式。 確定將資料安全地從銷售部隊轉移到Amazon S3的任務。
- C. 建立Amazon AppFlow fiows,將資料安全地從 Salesforce 傳輸到 Amazon S3.
- D. 為 Salesforce 建立自定義聯結器,將資料安全地從 Salesforce 轉移到 Amazon S3。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立Amazon AppFlow fiows,將資料安全地從 Salesforce 傳輸到 Amazon S3。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 AWS Lambda 函式,將資料安全地從 Salesforce 傳輸到 Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS 步函式工作模式。 確定將資料安全地從銷售部隊轉移到Amazon S3的任務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 Salesforce 建立自定義聯結器,將資料安全地從 Salesforce 轉移到 Amazon S3 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #461

**題目**
一家公司正在開發一個AWS 區域(Region)的移動遊戲應用程式。 該應用程式執行於Auto Scaling 群組(Auto Scaling group)的多例Amazon EC2. 該公司在Amazon DynamoDB中儲存應用資料. 該應用程式透過使用TCP流量和使用者與伺服器之間的UDP流量進行通訊. 該應用程式將在全球範圍內使用。 公司希望確保所有使用者獲得最低可能的延遲(latency). 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS 全球加速器建立加速器. 在加速器端點後面建立一個應用程式負載平衡器(Application Load Balancer)(ALB),使用全球加速器整合,並監聽TCP和UDP埠. 更新 Auto Scaling 群組(Auto Scaling group) 以註冊 ALB 上的例項。
- B. 使用 AWS 全球加速器建立加速器. 使用全球加速器整合並監聽TCP和UDP埠,在加速器端點後建立網路負載平衡器(Network Load Balancer)(NLB). 更新Auto Scaling 群組(Auto Scaling group)系統,以便在NLB登記例項。
- C. 建立 Amazon CloudFront 內容傳遞網路(content delivery network)(CDN(CDN)) 端點. 在端點後建立網路負載平衡器(Network Load Balancer)(NLB),並監聽TCP和UDP埠. 更新Auto Scaling 群組(Auto Scaling group),以便在NLB登記例項。 更新 CloudFront 以 LNB 作為原始碼.
- D. 建立一個 Amazon CloudFront 內容傳遞網路(content delivery network)(CDN(CDN))端點. 在端點後建立應用程式負載平衡器(Application Load Balancer)(ALB),並監聽TCP和UDP埠. 更新 Auto Scaling 群組(Auto Scaling group) 以註冊 ALB 上的例項。 更新 CloudFront 以 ALB 作為來源。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 AWS 全球加速器建立加速器. 在加速器端點後面建立一個應用程式負載平衡器(Application Load Balancer)(ALB),使用全球加速器整合,並監聽TCP和UDP埠. 更新 Auto Scaling 群組(Auto Scaling group) 以註冊 ALB 上的例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 AWS 全球加速器建立加速器. 使用全球加速器整合並監聽TCP和UDP埠,在加速器端點後建立網路負載平衡器(Network Load Balancer)(NLB). 更新Auto Scaling 群組(Auto Scaling group)系統,以便在NLB登記例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon CloudFront 內容傳遞網路(content delivery network)(CDN(CDN)) 端點. 在端點後建立網路負載平衡器(Network Load Balancer)(NLB),並監聽TCP和UDP埠. 更新Auto Scaling 群組(Auto Scaling group),以便在NLB登記例項。 更新 CloudFront 以 LNB 作為原始碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個 Amazon CloudFront 內容傳遞網路(content delivery network)(CDN(CDN))端點. 在端點後建立應用程式負載平衡器(Application Load Balancer)(ALB),並監聽TCP和UDP埠. 更新 Auto Scaling 群組(Auto Scaling group) 以註冊 ALB 上的例項。 更新 CloudFront 以 ALB 作為來源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #462

**題目**
一個公司有一個處理客戶訂單的應用程式. 該公司在Amazon EC2例項上託管應用程式,將訂單儲存到Amazon Aurora 資料庫(database)上. 有時交通量大,工作量不夠快。 解決方案設計師應該怎麼做才能儘快將訂單可靠地寫給資料庫(database)?

**選項**
- A. 交通量大時增加EC2 執行個體的例數. 向亞馬遜簡易通知服務(Amazon SNS)寫訂單. 將資料庫(database)端點訂閱到SNS話題.
- B. 將命令寫入 Amazon 簡單佇列服務( Amazon SQS) 佇列。 在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中使用EC2例項從SQS佇列和處理命令讀入資料庫(database).
- C. 向亞馬遜簡易通知服務(Amazon SNS)寫訂單. 訂閱SNS主題的資料庫(database)端點. 在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中使用EC2例項從SNS話題讀取.
- D. 當 EC2 例項達到 CPU 閾值限制時, 將命令寫入 Amazon 簡單佇列服務( Amazon SQS) 佇列。 在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中使用EC2的預定縮放,從SQS佇列和處理命令讀入資料庫(database).

**答案**
B


**詳解**
正確答案是 **B**。
- B：將命令寫入 Amazon 簡單佇列服務( Amazon SQS) 佇列。 在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中使用EC2例項從SQS佇列和處理命令讀入資料庫(database)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：交通量大時增加EC2 執行個體的例數. 向亞馬遜簡易通知服務(Amazon SNS)寫訂單. 將資料庫(database)端點訂閱到SNS話題。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：向亞馬遜簡易通知服務(Amazon SNS)寫訂單. 訂閱SNS主題的資料庫(database)端點. 在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中使用EC2例項從SNS話題讀取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：當 EC2 例項達到 CPU 閾值限制時, 將命令寫入 Amazon 簡單佇列服務( Amazon SQS) 佇列。 在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中使用EC2的預定縮放,從SQS佇列和處理命令讀入資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #463

**題目**
一家IoT公司正在釋放一個床墊,它有感測器來收集使用者睡眠的資料。 感測器將把資料傳送到一個Amazon S3桶. 感測器每晚為每個床墊收集大約2MB的資料. 公司必須處理和彙總每個床墊的資料。 需要儘快提供結果。 資料處理需要1GB的記憶體,並在30秒內完成. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用帶有 Scala 任務的 AWS Glue
- B. 使用帶有 Apache Spark 指令碼的 Amazon EMR
- C. 使用帶有 Python 指令碼的 AWS Lambda
- D. 使用帶有 PySpark 任務的 AWS Glue

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用帶有 Python 指令碼的 AWS Lambda。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用帶有 Scala 任務的 AWS Glue。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用帶有 Apache Spark 指令碼的 Amazon EMR。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用帶有 PySpark 任務的 AWS Glue。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #464

**題目**
一家公司託管線上購物應用程式,將所有訂單儲存在PostgreSQL Single-AZ DB例項的Amazon RDS中. 管理層希望消除單一的故障點,並要求解決方案架構師建議一種方法,以儘量減少資料庫(database)故障時間,而無需修改應用程式程式碼. 哪種解決辦法符合這些要求?

**選項**
- A. 透過修改資料庫(database)例項並指定多AZ選項,將現有的資料庫(database)例項轉換為多AZ部署.
- B. 新建 RDS 多AZ 部署。 使用當前RDS例項中的快照(snapshot),並使用快照(snapshot)恢復新的多AZ部署.
- C. 在另一個可用區(Availability Zone)中建立只讀的PostgreSQL 資料庫(database)複製版. 使用 Amazon Route 53 加權記錄集在資料庫中分配請求.
- D. 將 PostgreSQL 資料庫(database) 的 RDS 放置在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 中,最小組大小為 2。 使用 Amazon Route 53 加權記錄集在各種例項中分配請求。

**答案**
A


**詳解**
正確答案是 **A**。
- A：透過修改資料庫(database)例項並指定多AZ選項,將現有的資料庫(database)例項轉換為多AZ部署。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：新建 RDS 多AZ 部署。 使用當前RDS例項中的快照(snapshot),並使用快照(snapshot)恢復新的多AZ部署。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在另一個可用區(Availability Zone)中建立只讀的PostgreSQL 資料庫(database)複製版. 使用 Amazon Route 53 加權記錄集在資料庫中分配請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 PostgreSQL 資料庫(database) 的 RDS 放置在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 中,最小組大小為 2。 使用 Amazon Route 53 加權記錄集在各種例項中分配請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #465

**題目**
一家公司正在開發支援客戶需求的應用程式。 該公司希望在同一個可用區(Availability Zone)的多個基於氮的Amazon EC2例項上部署該應用程式. 公司還希望讓應用程式能夠同時在多個EC2 Nitro的案例中對多個塊儲存量進行寫入,以實現更高的應用程式可用性. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用通用 SSD( gp3) 與 Amazon 彈性塊儲存器( Amazon EBS) 的 EBS 磁碟區
- B. 使用 吞吐量(Throughput) 最佳化 HDD(st1) 與 Amazon 彈性塊 Store(Amazon EBS) 的 EBS 磁碟區
- C. 使用提供 IOPS SSD(io2) 的 EBS 磁碟區與 Amazon 彈性塊儲存器(Amazon EBS) 多選項
- D. 使用通用 SSD(gp2) 與 Amazon 彈性塊 Store(Amazon EBS) 的 EBS 磁碟區

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用提供 IOPS SSD(io2) 的 EBS 磁碟區與 Amazon 彈性塊儲存器(Amazon EBS) 多選項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用通用 SSD( gp3) 與 Amazon 彈性塊儲存器( Amazon EBS) 的 EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 吞吐量(Throughput) 最佳化 HDD(st1) 與 Amazon 彈性塊 Store(Amazon EBS) 的 EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用通用 SSD(gp2) 與 Amazon 彈性塊 Store(Amazon EBS) 的 EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #466

**題目**
一家公司設計了一個無狀態的兩級應用程式,在單一的可用區(Availability Zone)和Amazon RDS 多AZ DB例項中使用了Amazon EC2. 新公司管理層希望確保該應用程式能夠大量使用。 解決方案設計師應如何滿足這一要求?

**選項**
- A. 配置應用程式以使用多 AZ EC2 自動縮放並建立 應用程式負載平衡器(Application Load Balancer)
- B. 配置應用程式以獲取 EC2 例項的快照並將其傳送到不同的 AWS 區域(Region)
- C. 配置使用 Amazon Route 53 延遲(latency) 基於路由的應用程式, 將請求輸入應用程式
- D. 配置 Amazon Route 53 規則,處理收到的請求並建立多AZ 應用程式負載平衡器(Application Load Balancer)

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置應用程式以使用多 AZ EC2 自動縮放並建立 應用程式負載平衡器(Application Load Balancer)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置應用程式以獲取 EC2 例項的快照並將其傳送到不同的 AWS 區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置使用 Amazon Route 53 延遲(latency) 基於路由的應用程式, 將請求輸入應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon Route 53 規則,處理收到的請求並建立多AZ 應用程式負載平衡器(Application Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #467

**題目**
一個公司使用AWS Organizations. 一個會員帳戶購買了計算儲蓄計劃。 由於成員帳戶內工作量的變化,該帳戶不再完全受益於計算儲蓄計劃的承諾。 公司使用其購買的計算功率不到50%.

**選項**
- A. 在購買計算儲蓄計劃的成員帳戶中開啟從帳戶控制檯的計費優惠部分的折扣分享。
- B. 開通公司組織管理帳戶中帳戶控制檯的計費優惠部分的貼現共享.
- C. 將額外計算的工作量從另一個AWS帳戶轉移到擁有計算儲蓄計劃的帳戶。
- D. 在儲備市場出售超額儲蓄計劃承付款。

**答案**
B


**詳解**
正確答案是 **B**。
- B：開通公司組織管理帳戶中帳戶控制檯的計費優惠部分的貼現共享。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在購買計算儲蓄計劃的成員帳戶中開啟從帳戶控制檯的計費優惠部分的折扣分享。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將額外計算的工作量從另一個AWS帳戶轉移到擁有計算儲蓄計劃的帳戶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在儲備市場出售超額儲蓄計劃承付款。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #468

**題目**
一家公司正在開發一個微服務應用程式,為客戶提供搜尋目錄。 公司必須使用REST APIs向使用者展示應用程式的前端. REST API必須存取公司在私人VPC子網的容器中託管的後端服務. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon API Gateway設計一個WebSocket API. 在亞馬遜彈性容器服務公司(Amazon ECS)以私營子網託管應用程式。 為API Gateway建立私人VPC連結以存取亞馬遜ECS.
- B. 使用Amazon API Gateway設計一個REST API. 在亞馬遜彈性容器服務公司(Amazon ECS)以私營子網託管應用程式。 為API Gateway建立私人VPC連結以存取亞馬遜ECS.
- C. 使用Amazon API Gateway設計一個WebSocket API. 在亞馬遜彈性容器服務公司(Amazon ECS)以私營子網託管應用程式。 為 API Gateway 建立 安全群組(security group) 存取 Amazon ECS。
- D. 使用Amazon API Gateway設計一個REST API. 在亞馬遜彈性容器服務公司(Amazon ECS)以私營子網託管應用程式。 為 API Gateway 建立 安全群組(security group) 存取 Amazon ECS。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon API Gateway設計一個REST API. 在亞馬遜彈性容器服務公司(Amazon ECS)以私營子網託管應用程式。 為API Gateway建立私人VPC連結以存取亞馬遜ECS。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon API Gateway設計一個WebSocket API. 在亞馬遜彈性容器服務公司(Amazon ECS)以私營子網託管應用程式。 為API Gateway建立私人VPC連結以存取亞馬遜ECS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon API Gateway設計一個WebSocket API. 在亞馬遜彈性容器服務公司(Amazon ECS)以私營子網託管應用程式。 為 API Gateway 建立 安全群組(security group) 存取 Amazon ECS 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon API Gateway設計一個REST API. 在亞馬遜彈性容器服務公司(Amazon ECS)以私營子網託管應用程式。 為 API Gateway 建立 安全群組(security group) 存取 Amazon ECS 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #469

**題目**
一家公司將收集的原始資料儲存在Amazon S3桶中。 資料用於代表公司客戶的幾類分析. 所要求的分析型別決定了S3物件上的存取模式. 公司無法預測或控制存取模式. 公司希望降低其S3成本. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 S3 複寫(replication) 向 S3 標準- 不經常存取( S3 Standard-IA) 過渡
- B. 使用 S3 壽命週期規則將物件從 S3 標準到標準- 不頻繁存取( S3 Standard-IA)
- C. 使用 S3 壽命週期規則將物件從 S3 標準轉換為 S3 Intelligent-Tiering
- D. 使用 S3 編目來識別和轉換尚未從 S3 標準存取到 S3 Intelligent-Tiering 的物件

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用 S3 壽命週期規則將物件從 S3 標準轉換為 S3 Intelligent-Tiering。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 S3 複寫(replication) 向 S3 標準- 不經常存取( S3 Standard-IA) 過渡。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 S3 壽命週期規則將物件從 S3 標準到標準- 不頻繁存取( S3 Standard-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 S3 編目來識別和轉換尚未從 S3 標準存取到 S3 Intelligent-Tiering 的物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #470

**題目**
一家公司在Amazon EC2例項上擁有有IPv6地址的應用程式。 這些應用程式必須利用網際網路啟動與其他外部應用程式的通訊。 然而,該公司的安全政策指出,任何外部服務都不能與EC2 執行個體建立聯絡。 一個解決方案設計師應該建議什麼來解決這個問題?

**選項**
- A. 建立 NAT 閘道器並使其成為子網路由表的目的地
- B. 建立網際網路閘道器並使其成為子網路由表的目的地
- C. 建立 虛擬私有閘道(virtual private gateway) 並使其成為子網路由表的目的地
- D. 建立一個只使用 Egress 的網際網路閘道器, 並使其成為子網路由表的目的地

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立一個只使用 Egress 的網際網路閘道器, 並使其成為子網路由表的目的地。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 NAT 閘道器並使其成為子網路由表的目的地。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立網際網路閘道器並使其成為子網路由表的目的地。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 虛擬私有閘道(virtual private gateway) 並使其成為子網路由表的目的地。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #471

**題目**
一家公司正在建立一種在VPC容器上執行的應用程式。 應用程式在Amazon S3桶中儲存並存取資料. 在開發階段,該應用程式將每天儲存並存取Amazon S3中的1 TB資料. 公司希望儘量降低成本, 哪種解決辦法能滿足這些要求?

**選項**
- A. 為 S3 儲存桶(S3 bucket) 啟用 S3 Intelligent-Tiering
- B. 為 S3 儲存桶(S3 bucket) 啟用 S3 Transfer Acceleration
- C. 為Amazon S3建立閘道器VPC 端點(VPC endpoint). 將此端點與 VPC 中的所有路由表關聯
- D. 在VPC中為Amazon S3建立介面端點. 將此端點與 VPC 中的所有路由表關聯

**答案**
C


**詳解**
正確答案是 **C**。
- C：為Amazon S3建立閘道器VPC 端點(VPC endpoint). 將此端點與 VPC 中的所有路由表關聯。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 S3 儲存桶(S3 bucket) 啟用 S3 Intelligent-Tiering。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 S3 儲存桶(S3 bucket) 啟用 S3 Transfer Acceleration。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在VPC中為Amazon S3建立介面端點. 將此端點與 VPC 中的所有路由表關聯。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #472

**題目**
一家公司有一個移動聊天應用程式,其資料庫位於Amazon DynamoDB. 使用者希望用儘可能多的延遲(latency)讀取新訊息。 解決方案架構師需要設計一個最最佳化的解決方案,需要最小的應用改變. 設計師應該選擇哪種方法?

**選項**
- A. 為新訊息表配置 Amazon DynamoDB 加速器(DAX). 更新程式碼以使用 DAX 端點。
- B. 新增 DynamoDB 讀取複製件處理增加的讀取負載. 更新應用程式以指向已讀複製品的讀端點。
- C. 將DynamoDB中新訊息表的閱讀容量單位數增加一倍. 繼續使用現有的DynamoDB終點.
- D. 為 Redis 快取新增一個 Amazon ElastiCache 到應用程式堆疊。 更新應用程式以指向 Redis 快取端點而不是 DynamoDB.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為新訊息表配置 Amazon DynamoDB 加速器(DAX). 更新程式碼以使用 DAX 端點 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：新增 DynamoDB 讀取複製件處理增加的讀取負載. 更新應用程式以指向已讀複製品的讀端點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將DynamoDB中新訊息表的閱讀容量單位數增加一倍. 繼續使用現有的DynamoDB終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 Redis 快取新增一個 Amazon ElastiCache 到應用程式堆疊。 更新應用程式以指向 Redis 快取端點而不是 DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #473

**題目**
一家公司在應用程式負載平衡器(Application Load Balancer)(ALB)背後設有關於Amazon EC2例項的網站。 該網站服務於靜態內容. 網站流量不斷增加,公司擔心成本可能增加.

**選項**
- A. 建立 Amazon CloudFront 分佈到邊緣位置快取狀態檔案
- B. 建立 Amazon ElastiCache 叢集。 將 ALB 連線到 ElastiCache 叢集以服務快取檔案
- C. 建立AWS WAF網路ACL,並與ALB關聯. 在網路 ACL 中新增規則以快取靜態檔案
- D. 在替代的 AWS 區域(Region) 中建立第二個 ALB。 路線使用者流量與最近的區域(Region),以儘量減少資料傳輸費用

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon CloudFront 分佈到邊緣位置快取狀態檔案。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立 Amazon ElastiCache 叢集。 將 ALB 連線到 ElastiCache 叢集以服務快取檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立AWS WAF網路ACL,並與ALB關聯. 在網路 ACL 中新增規則以快取靜態檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在替代的 AWS 區域(Region) 中建立第二個 ALB。 路線使用者流量與最近的區域(Region),以儘量減少資料傳輸費用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #474

**題目**
一家公司在整個AWS地區設有多個VPC,以支援和管理與其他地區工作量無關的工作量。 由於最近的應用發射要求,該公司的VPC必須與所有區域的所有其他VPC通訊。 用LEAST數額的行政努力滿足這些要求的辦法是什麼?

**選項**
- A. 使用VPC對等,在單一的區域(Region)中管理VPC通訊. 使用跨區域的VPC對等,管理VPC通訊.
- B. 利用跨區域的AWS Direct Connect閘道器連線跨區域的VPC並管理VPC通訊.
- C. 使用AWS Transit Gateway管理單一區域(Region)中的VPC通訊,以及跨區域對等的Transit Gateway管理VPC通訊.
- D. 使用跨區域的 AWS 私人連結連線跨區域的 VPC 並管理 VPC 通訊

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用AWS Transit Gateway管理單一區域(Region)中的VPC通訊,以及跨區域對等的Transit Gateway管理VPC通訊。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用VPC對等,在單一的區域(Region)中管理VPC通訊. 使用跨區域的VPC對等,管理VPC通訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：利用跨區域的AWS Direct Connect閘道器連線跨區域的VPC並管理VPC通訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用跨區域的 AWS 私人連結連線跨區域的 VPC 並管理 VPC 通訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #475

**題目**
一家公司正在設計一個集裝箱化應用軟體,將使用亞馬遜彈性容器服務公司(Amazon ECS)。 應用程式需要存取一個具有高度耐用性的共享檔案系統,並且可以回收資料到另一個AWS 區域(Region),回收點目標(RPO)為8小時. 檔案系統需要在區域(Region)內提供每個可用區(Availability Zone)的掛載目標m. 一個解決方案架構師希望使用AWS Backup來管理複寫(replication)到另一個區域(Region). 哪種解決辦法能滿足這些要求?

**選項**
- A. Amazon FSx 用於多AZ部署的 Windows 檔案伺服器
- B. Amazon FSx,用於部署多AZ的NetApp ONTAP
- C. 亞馬遜彈性檔案系統(Amazon EFS),包含標準儲存類
- D. 用於 OpenZFS 的 Amazon FSx

**答案**
C


**詳解**
正確答案是 **C**。
- C：亞馬遜彈性檔案系統(Amazon EFS),包含標準儲存類。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：Amazon FSx 用於多AZ部署的 Windows 檔案伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：Amazon FSx,用於部署多AZ的NetApp ONTAP。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：用於 OpenZFS 的 Amazon FSx。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #476

**題目**
一家公司預計在不久的將來會迅速增長。 一個解決方案架構師需要配置現有使用者,並在AWS上給予新使用者許可權. 解決方案架構師決定成立IAM團體. 解決方案架構師將在基於部門的IAM小組中新增新的使用者. 哪些額外行動是MOST給新使用者許可的安全方式?

**選項**
- A. 應用服務控制政策管理存取許可權
- B. 建立具有最小權限(least privilege)許可權的IAM角色. 將角色附加到 IAM 組中
- C. 建立 IAM 政策(IAM policy) 授權 最小權限(least privilege)。 將策略附加到 IAM 組中
- D. 建立IAM角色. 將角色與定義最大許可權的許可權邊界聯絡起來

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 IAM 政策(IAM policy) 授權 最小權限(least privilege)。 將策略附加到 IAM 組中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：應用服務控制政策管理存取許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立具有最小權限(least privilege)許可權的IAM角色. 將角色附加到 IAM 組中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立IAM角色. 將角色與定義最大許可權的許可權邊界聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #477

**題目**
一個組需要許可權來列出一個 Amazon S3 桶並刪除該桶中的物品. 一個管理員建立了以下IAM 政策(IAM policy),以提供對水桶的存取,並將這一政策應用於該組. 組無法刪除桶中的物件。 公司遵循最低特權准入規則.

現有IAM 政策(IAM policy):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:ListBucket",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::bucket-name"
      ],
      "Effect": "Allow"
    }
  ]
}
```

解決方案設計師應該增加哪些內容?

**選項**
- A. "行動":[
  "s3: *物件"
  [
  "資治通鑑":[
  "arn:aws:s3::::bucket-name/*"(中文(簡體) ).
  [
  "效果":"阿羅"
- B. "行動":[
  "s3:*"(中文(簡體) ).
  [
  "資治通鑑":[
  "arn:aws:s3::::bucket-name/*"(中文(簡體) ).
  [
  "效果":"阿羅"
- C. "行動":[
  "s3: 刪除物件"
  [
  "資治通鑑":[
  "arn:aws:s3:::bucket-name*".
  [
  "效果":"阿羅"
- D. "行動":[
  "s3: 刪除物件"
  [
  "資治通鑑":[
  "arn:aws:s3::::bucket-name/*"(中文(簡體) ).
  [
  "效果":"阿羅"

**答案**
C


**詳解**
正確答案是 **C**。
- C："行動":[。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A："行動":[。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B："行動":[。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D："行動":[。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #478

**題目**
律師事務所需要與公眾分享資訊. 資訊包括數百個必須公開閱讀的檔案. 禁止任何人在指定的未來日期之前修改或刪除檔案。 哪種解決辦法能以安全的方式滿足這些要求?

**選項**
- A. 上傳所有檔案到一個配置用於靜態網站託管的 Amazon S3 桶。 向任何存取S3 儲存桶(S3 bucket)的AWS主機授予只讀的IAM許可權,直到指定日期.
- B. 建立新的 Amazon S3 桶, 啟用 S3 版本。 使用S3 Object Lock,按照指定日期保留期。 為靜態網站託管配置 S3 儲存桶(S3 bucket)。 設定一個 S3 儲存桶政策(bucket policy) 允許只讀存取物件。
- C. 建立新的 Amazon S3 桶, 啟用 S3 版本。 配置一個事件觸發器,以便在物件修改或刪除時執行 AWS Lambda 函式. 配置 Lambda 函式,以私人S3 儲存桶(S3 bucket)的原始版本取代物件.
- D. 上傳所有檔案到一個配置用於靜態網站託管的 Amazon S3 桶。 選擇包含檔案的資料夾。 使用S3 Object Lock,按照指定日期保留期。 向任何存取S3 儲存桶(S3 bucket)的AWS主機授予只讀的IAM許可權.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立新的 Amazon S3 桶, 啟用 S3 版本。 使用S3 Object Lock,按照指定日期保留期。 為靜態網站託管配置 S3 儲存桶(S3 bucket)。 設定一個 S3 儲存桶政策(bucket policy) 允許只讀存取物件 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：上傳所有檔案到一個配置用於靜態網站託管的 Amazon S3 桶。 向任何存取S3 儲存桶(S3 bucket)的AWS主機授予只讀的IAM許可權,直到指定日期。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立新的 Amazon S3 桶, 啟用 S3 版本。 配置一個事件觸發器,以便在物件修改或刪除時執行 AWS Lambda 函式. 配置 Lambda 函式,以私人S3 儲存桶(S3 bucket)的原始版本取代物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：上傳所有檔案到一個配置用於靜態網站託管的 Amazon S3 桶。 選擇包含檔案的資料夾。 使用S3 Object Lock,按照指定日期保留期。 向任何存取S3 儲存桶(S3 bucket)的AWS主機授予只讀的IAM許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #479

**題目**
一家公司正在透過人工提供必要的基礎設施,為其新網站製作基礎設施的原型。 這一基礎設施包括一臺Auto Scaling 群組(Auto Scaling group)、一臺應用程式負載平衡器(Application Load Balancer)和一臺Amazon RDS資料庫(database)。 在配置經過徹底驗證後,公司希望能夠以自動化方式立即將開發和生產使用的基礎設施部署在兩個可用區(Availability Zones)中. 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 使用AWS Systems Manager複製和提供兩個可用區(Availability Zones)中的原型基礎設施
- B. 以原型基礎設施為指南,將基礎設施定義為模板. 用AWS雲陣部署基礎設施.
- C. 使用AWS Config記錄原型基礎設施使用的資源清單. 使用AWS Config將原型基礎設施部署到兩個可用區(Availability Zones).
- D. 使用AWS Elastic Beanstalk並配置它,以自動參照原型基礎設施,在兩個可用區(Availability Zones)中自動部署新環境.

**答案**
B


**詳解**
正確答案是 **B**。
- B：以原型基礎設施為指南,將基礎設施定義為模板. 用AWS雲陣部署基礎設施。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS Systems Manager複製和提供兩個可用區(Availability Zones)中的原型基礎設施。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Config記錄原型基礎設施使用的資源清單. 使用AWS Config將原型基礎設施部署到兩個可用區(Availability Zones)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Elastic Beanstalk並配置它,以自動參照原型基礎設施,在兩個可用區(Availability Zones)中自動部署新環境。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #480

**題目**
一個業務應用程式在Amazon EC2上託管,並使用Amazon S3進行加密物件儲存. 首席資訊保安官員指示,兩個部門之間的任何應用流量都不得穿越公共網際網路。 設計師應使用何種能力來滿足合規(compliance)的要求?

**選項**
- A. AWS Key Management Service(AWS KMS).
- B. VPC 端點(VPC endpoint).
- C. 私人子網
- D. 虛擬私有閘道(Virtual private gateway).

**答案**
B


**詳解**
正確答案是 **B**。
- B：VPC 端點(VPC endpoint)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：AWS Key Management Service(AWS KMS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：私人子網。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：虛擬私有閘道(Virtual private gateway)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #481

**題目**
一個公司在AWS雲中託管一個三級網路應用程式. 一個用於MySQL伺服器的多AZAmazon RDS形成資料庫(database)層Amazon ElastiCache形成快取層. 公司想要一種快取策略,當客戶在資料庫(database)上新增一個專案時,在快取中新增或更新資料. 快取中的資料必須始終符合資料庫(database)中的資料. 哪種解決辦法能滿足這些要求?

**選項**
- A. 執行懶惰的裝載快取策略
- B. 執行寫入快取策略
- C. 執行新增的 TTL 快取策略
- D. 執行 AWS appConfig 快取策略

**答案**
B


**詳解**
正確答案是 **B**。
- B：執行寫入快取策略。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：執行懶惰的裝載快取策略。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：執行新增的 TTL 快取策略。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：執行 AWS appConfig 快取策略。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #482

**題目**
一家公司希望將100GB的歷史資料從一個presimes位置遷移到一個Amazon S3桶. 該公司擁有100兆位元每秒(Mbps)的網際網路連線。 公司需要加密傳輸中的資料到S3 儲存桶(S3 bucket). 該公司將在Amazon S3直接儲存新資料. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用 AWS CLI 中的 s3 同步命令將資料直接移動到 S3 儲存桶(S3 bucket)
- B. 使用 AWS 資料同步將資料從預設位置遷移到 S3 儲存桶(S3 bucket)
- C. 使用 AWS Snowball 移動資料到 S3 儲存桶(S3 bucket)
- D. 設定一個IPsec VPN,從presimes位置到AWS. 使用 AWS CLI 中的 s3 cp 命令將資料直接移動到 S3 儲存桶(S3 bucket)

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 AWS 資料同步將資料從預設位置遷移到 S3 儲存桶(S3 bucket)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS CLI 中的 s3 同步命令將資料直接移動到 S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Snowball 移動資料到 S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：設定一個IPsec VPN,從presimes位置到AWS. 使用 AWS CLI 中的 s3 cp 命令將資料直接移動到 S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #483

**題目**
一家公司在Windows容器下將一個執行在.NET 6 Framework上的Windows工作集裝箱化. 公司想在AWS雲經營這項工作. 工作每10分鐘進行一次. 工作時間從1分鐘到3分鐘不等。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 基於任務的容器影象建立 AWS Lambda 函式。 配置 Amazon EventBridge 每10分鐘引用此函式。
- B. 使用 AWS 批次來建立一個使用 AWS Fargate 資源的工作. 配置每10分鐘執行的工作時間安排。
- C. 在AWS Fargate上使用亞馬遜彈性容器服務(Amazon ECS)來執行這項工作. 根據任務的容器影象建立任務, 每10分鐘執行一次。
- D. 在AWS Fargate上使用亞馬遜彈性容器服務(Amazon ECS)來執行這項工作. 根據任務的容器影象建立獨立的任務。 使用Windows任務排程器每10分鐘執行工作.

**答案**
A


**詳解**
正確答案是 **A**。
- A：基於任務的容器影象建立 AWS Lambda 函式。 配置 Amazon EventBridge 每10分鐘引用此函式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 AWS 批次來建立一個使用 AWS Fargate 資源的工作. 配置每10分鐘執行的工作時間安排 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在AWS Fargate上使用亞馬遜彈性容器服務(Amazon ECS)來執行這項工作. 根據任務的容器影象建立任務, 每10分鐘執行一次 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Fargate上使用亞馬遜彈性容器服務(Amazon ECS)來執行這項工作. 根據任務的容器影象建立獨立的任務。 使用Windows任務排程器每10分鐘執行工作。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #484

**題目**
一家公司希望從許多獨立的AWS帳戶轉移到一個綜合的,多帳戶的架構. 公司計劃為不同的業務單位建立許多新的AWS帳戶. 公司需要透過使用集中的公司目錄服務來認證這些AWS帳戶的存取許可權. 一個解決方案設計師應該建議採取何種行動來滿足這些要求?(選二.

**選項**
- A. 在 AWS Organizations 建立新組織,所有功能都開啟. 在組織中建立新的AWS帳戶.
- B. 建立亞馬遜·科尼託身份池. 配置 AWS IAM 身份識別中心(AWS Single Sign-On)接受亞馬遜Cognitto認證.
- C. 配置服務控制策略(SCP)來管理AWS帳戶. 在AWS目錄服務中加入AWS IAM身份中心(AWS Single Sign-On).
- D. 在AWS Organizations建立新組織. 配置組織認證機制直接使用 AWS 目錄服務.
- E. 在組織內設立AWS IAM身份中心(AWS Single Sign-On). 配置IAM身份中心,並將其與公司的企業目錄服務整合.

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：在 AWS Organizations 建立新組織,所有功能都開啟. 在組織中建立新的AWS帳戶。此選項符合題目條件，能有效滿足核心需求。
- E：在組織內設立AWS IAM身份中心(AWS Single Sign-On). 配置IAM身份中心,並將其與公司的企業目錄服務整合。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：建立亞馬遜·科尼託身份池. 配置 AWS IAM 身份識別中心(AWS Single Sign-On)接受亞馬遜Cognitto認證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置服務控制策略(SCP)來管理AWS帳戶. 在AWS目錄服務中加入AWS IAM身份中心(AWS Single Sign-On)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Organizations建立新組織. 配置組織認證機制直接使用 AWS 目錄服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #485

**題目**
一家公司正在尋找一個解決方案,可以將舊新聞片段的影片檔案儲存在AWS中. 公司需要儘量降低成本,很少需要恢復這些檔案. 當需要檔案時,這些檔案必須在5分鐘內提供。 什麼是最符合成本效益的解決辦法?

**選項**
- A. 將影片檔案儲存在Amazon S3冰川中,並使用快速檢索.
- B. 在Amazon S3冰川中儲存影片檔案,並使用標準檢索.
- C. 將影片檔案儲存在Amazon S3標準-不經常存取(S3 Standard-IA)中.
- D. 將錄影檔案儲存在Amazon S3 " 一個區-不經常存取 "(S3 One Zone-IA)。

**答案**
C


**詳解**
正確答案是 **C**。
- C：將影片檔案儲存在Amazon S3標準-不經常存取(S3 Standard-IA)中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將影片檔案儲存在Amazon S3冰川中,並使用快速檢索。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在Amazon S3冰川中儲存影片檔案,並使用標準檢索。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將錄影檔案儲存在Amazon S3 " 一個區-不經常存取 "(S3 One Zone-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #486

**題目**
一家公司正在AWS上建立一個三級應用程式. 簡報層將提供一個靜態網站 邏輯級是一個容器化的應用. 這個應用程式將把資料儲存在一個關聯的資料庫(database)中. 公司希望簡化部署,降低運營成本. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon S3主機靜態內容. 使用帶有AWS Fargate的亞馬遜彈性容器服務(Amazon ECS)進行計算功率. 為資料庫(database)使用一個管理的Amazon RDS叢集.
- B. 使用Amazon CloudFront主機靜態內容. 使用帶有Amazon EC2的亞馬遜彈性容器服務(Amazon ECS)進行計算功率. 為資料庫(database)使用一個管理的Amazon RDS叢集.
- C. 使用Amazon S3主機靜態內容. 使用帶有AWS Fargate的Amazon Elastic Kubernetes Service(Amazon EKS)來進行功率計算. 為資料庫(database)使用一個管理的Amazon RDS叢集.
- D. 使用 Amazon EC2 保留例項以託管靜態內容。 使用帶有Amazon EC2的Amazon Elastic Kubernetes Service(Amazon EKS)進行計算功率. 為資料庫(database)使用一個管理的Amazon RDS叢集.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon S3主機靜態內容. 使用帶有AWS Fargate的亞馬遜彈性容器服務(Amazon ECS)進行計算功率. 為資料庫(database)使用一個管理的Amazon RDS叢集。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon CloudFront主機靜態內容. 使用帶有Amazon EC2的亞馬遜彈性容器服務(Amazon ECS)進行計算功率. 為資料庫(database)使用一個管理的Amazon RDS叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon S3主機靜態內容. 使用帶有AWS Fargate的Amazon Elastic Kubernetes Service(Amazon EKS)來進行功率計算. 為資料庫(database)使用一個管理的Amazon RDS叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon EC2 保留例項以託管靜態內容。 使用帶有Amazon EC2的Amazon Elastic Kubernetes Service(Amazon EKS)進行計算功率. 為資料庫(database)使用一個管理的Amazon RDS叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #487

**題目**
一家公司尋求其應用的儲存解決方案. 解決辦法必須高度可用和可擴充套件。 解決方案也必須作為檔案系統在AWS的多個 Linux 例項和透過本地協議在前提上可以掛載,並且沒有最小大小要求. 該公司建立了一個站點對站點VPN,以便從其站點網路進入VPC. 哪些儲存解決方案符合這些要求?

**選項**
- A. Amazon FSx 多AZ部署
- B. 亞馬遜彈性塊儲存器(Amazon EBS)
- C. 亞馬遜彈性檔案系統(Amazon EFS),包含多個掛載目標
- D. 亞馬遜彈性檔案系統(Amazon EFS),單掛載目標和多個接入點

**答案**
C


**詳解**
正確答案是 **C**。
- C：亞馬遜彈性檔案系統(Amazon EFS),包含多個掛載目標。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：Amazon FSx 多AZ部署。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：亞馬遜彈性塊儲存器(Amazon EBS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：亞馬遜彈性檔案系統(Amazon EFS),單掛載目標和多個接入點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #488

**題目**
一家4年的媒體公司正在使用AWS Organizations的所有功能設定來組織其AWS帳戶. 公司財務團隊認為,包括會員帳戶的根使用者在內的任何人不得獲取會員帳戶的帳單資訊. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將所有財務團隊使用者新增到IAM組中. 附加一個名為 Billing 的 AWS 管理策略到組中。
- B. 附上基於身份的政策,拒絕所有使用者,包括根使用者獲取計費資訊。
- C. 建立服務控制政策(SCP),拒絕獲取計費資訊. 將 SCP 附加到根部組織單位(OU).
- D. 將組織設定的所有功能轉換為組織合併收費功能。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立服務控制政策(SCP),拒絕獲取計費資訊. 將 SCP 附加到根部組織單位(OU)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將所有財務團隊使用者新增到IAM組中. 附加一個名為 Billing 的 AWS 管理策略到組中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：附上基於身份的政策,拒絕所有使用者,包括根使用者獲取計費資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將組織設定的所有功能轉換為組織合併收費功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #489

**題目**
一家電子商務公司在AWS雲中執行一個應用程式,該應用程式與前提倉庫解決方案整合. 公司使用亞馬遜簡易通知服務(Amazon SNS)將訂單訊息傳送到一個promise的HTTPS端點,這樣倉庫應用程式就可以處理訂單. 本地資料中心團隊發現一些訂單訊息沒有收到. 解決方案架構師需要保留未傳送的資訊,並分析資訊長達14天. 在LEAST的開發努力下,哪一種解決辦法能滿足這些要求?

**選項**
- A. 配置 Amazon SNS 死字母佇列,該佇列有 Amazon Kinesis 資料流目標,保留期為14天.
- B. 新增一個亞馬遜簡易佇列服務(Amazon SQS)佇列,應用程式和Amazon SNS之間的保留期為14天.
- C. 配置 Amazon SNS 死字母佇列,該佇列具有亞馬遜簡易佇列服務(Amazon SQS)的目標,保留期為14天.
- D. 配置 Amazon SNS 死字母佇列,該佇列具有一個Amazon DynamoDB目標,TTL屬性設定,保留期為14天.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 Amazon SNS 死字母佇列,該佇列具有亞馬遜簡易佇列服務(Amazon SQS)的目標,保留期為14天。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Amazon SNS 死字母佇列,該佇列有 Amazon Kinesis 資料流目標,保留期為14天。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：新增一個亞馬遜簡易佇列服務(Amazon SQS)佇列,應用程式和Amazon SNS之間的保留期為14天。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon SNS 死字母佇列,該佇列具有一個Amazon DynamoDB目標,TTL屬性設定,保留期為14天。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #490

**題目**
一個遊戲公司使用Amazon DynamoDB儲存使用者資訊,如地理位置,玩家資料,以及領導板. 公司需要配置一個Amazon S3桶的連續備份,並配有最小的編碼. 備份不得影響應用程式的可用性,也不得影響表中定義的讀容量單位(RCU). 哪種解決辦法符合這些要求?

**選項**
- A. 使用Amazon EMR叢集. 建立 Apache 蜂巢任務,將資料備份到 Amazon S3。
- B. 資料直接從DynamoDB匯出至Amazon S3,並有連續備份. 開啟時間點恢復臺。
- C. 配置 Amazon DynamoDB 流線. 建立一個 AWS Lambda 函式來消耗流,並將資料匯出到 Amazon S3 桶中.
- D. 建立一個 AWS Lambda 函式,將資料從 資料庫(database) 表格匯出到 Amazon S3。 開啟時間點恢復臺。

**答案**
B


**詳解**
正確答案是 **B**。
- B：資料直接從DynamoDB匯出至Amazon S3,並有連續備份. 開啟時間點恢復臺。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon EMR叢集. 建立 Apache 蜂巢任務,將資料備份到 Amazon S3 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon DynamoDB 流線. 建立一個 AWS Lambda 函式來消耗流,並將資料匯出到 Amazon S3 桶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個 AWS Lambda 函式,將資料從 資料庫(database) 表格匯出到 Amazon S3。 開啟時間點恢復臺。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #491

**題目**
一個解決方案架構師正在設計一個同步應用程式,處理銀行信用卡資料驗證請求。 申請必須安全,並且能夠至少處理一次每項請求。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用 AWS Lambda 事件源對映. 將亞馬遜簡易佇列服務(Amazon SQS)標準佇列設定為事件源. 使用AWS Key Management Service(SSE-KMS)用於加密(encryption). 新增kms:解密Lambda執行角色許可權.
- B. 使用 AWS Lambda 事件源對映. 使用亞馬遜簡易排隊服務(Amazon SQS) FIFO佇列作為事件源. 使用 SQS 管理的 加密(encryption) 金鑰(SSE-SQS)用於 加密(encryption)。 為 Lambda 函式新增 加密(encryption) 金鑰引用許可權。
- C. 使用 AWS Lambda 事件源對映. 將亞馬遜簡易佇列服務(Amazon SQS)FIFO佇列設定為事件源. 使用 AWS KMS 金鑰(SSE-KMS). 新增kms:解密Lambda執行角色許可權.
- D. 使用 AWS Lambda 事件源對映. 將亞馬遜簡易佇列服務(Amazon SQS)標準佇列設定為事件源. 為加密(encryption)使用 AWS KMS 金鑰(SSE-KMS). 為 Lambda 函式新增 加密(encryption) 金鑰引用許可權。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 AWS Lambda 事件源對映. 將亞馬遜簡易佇列服務(Amazon SQS)標準佇列設定為事件源. 使用AWS Key Management Service(SSE-KMS)用於加密(encryption). 新增kms:解密Lambda執行角色許可權。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 AWS Lambda 事件源對映. 使用亞馬遜簡易排隊服務(Amazon SQS) FIFO佇列作為事件源. 使用 SQS 管理的 加密(encryption) 金鑰(SSE-SQS)用於 加密(encryption)。 為 Lambda 函式新增 加密(encryption) 金鑰引用許可權 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Lambda 事件源對映. 將亞馬遜簡易佇列服務(Amazon SQS)FIFO佇列設定為事件源. 使用 AWS KMS 金鑰(SSE-KMS). 新增kms:解密Lambda執行角色許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Lambda 事件源對映. 將亞馬遜簡易佇列服務(Amazon SQS)標準佇列設定為事件源. 為加密(encryption)使用 AWS KMS 金鑰(SSE-KMS). 為 Lambda 函式新增 加密(encryption) 金鑰引用許可權 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #492

**題目**
一家公司有多個AWS帳戶用於開發工作. 一些工作人員一貫使用規模過大的Amazon EC2 執行個體,這導致公司超出發展帳戶的年度預算。 公司希望在這些帳戶中集中限制AWS資源的建立. 在LEAST的開發努力下,哪一種解決辦法能滿足這些要求?

**選項**
- A. 開發使用經批准的EC2建立程序的AWS Systems Manager模板. 使用已核准的系統管理員模板提供EC2例項。
- B. 使用AWS Organizations將帳戶組織為組織單位(OUs). 定義並附加服務控制政策(SCP),以控制EC2例項型別的使用.
- C. 配置 Amazon EventBridge 規則,在建立 EC2 例項時引用 AWS Lambda 函式。 停止不允許的EC2例項型別。
- D. 為工作人員設定 AWS 服務目錄產品,以建立允許的EC2例項型別. 確保工作人員只能透過使用服務目錄產品來部署EC2例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用AWS Organizations將帳戶組織為組織單位(OUs). 定義並附加服務控制政策(SCP),以控制EC2例項型別的使用。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：開發使用經批准的EC2建立程序的AWS Systems Manager模板. 使用已核准的系統管理員模板提供EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon EventBridge 規則,在建立 EC2 例項時引用 AWS Lambda 函式。 停止不允許的EC2例項型別 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為工作人員設定 AWS 服務目錄產品,以建立允許的EC2例項型別. 確保工作人員只能透過使用服務目錄產品來部署EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #493

**題目**
一家公司希望使用人工智慧(AI)來確定其客戶服務呼叫的質量. 該公司目前以英語等四種不同語言管理電話. 公司未來會提供新語言. 該公司沒有資源定期維護機器學習(ML)模型. 公司需要從客戶服務呼叫錄音中建立書面情緒分析報告. 客戶服務電話錄音文字必須翻譯成英文。 哪些步驟的組合將滿足這些要求?(選三.

**選項**
- A. 使用Amazon Comprehend將錄音翻譯成英語.
- B. 使用亞馬遜萊克斯建立書面情緒分析報告.
- C. 使用Amazon Polly將錄音轉換成文字.
- D. 使用Amazon Translax將任何語言的錄音轉換成文字.
- E. 使用Amazon Translate將任何語言的文字翻譯為英語.
- F. 使用Amazon Comprehend建立情緒分析報告.

**答案**
D,E,F



**詳解**
正確答案是 **D, E**。
- D：使用Amazon Translax將任何語言的錄音轉換成文字。此選項符合題目條件，能有效滿足核心需求。
- E：使用Amazon Translate將任何語言的文字翻譯為英語。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用Amazon Comprehend將錄音翻譯成英語。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用亞馬遜萊克斯建立書面情緒分析報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Polly將錄音轉換成文字。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #494

**題目**
一家公司使用Amazon EC2例項託管其內部系統. 作為部署操作的一部分,管理員試圖使用AWS CLI終止一個EC2例項. 然而,管理員收到403(Access Delied)錯誤訊息. 管理員使用一個IAM角色,該角色附有以下IAM 政策(IAM policy): 請求失敗的原因是什麼?

**選項**
- A. EC2例項有一個基於資源的政策,並附有拒絕宣告。
- B. 政策說明中沒有具體說明主要內容。
- C. "行動"欄位不授予終止EC2例項所需的行動.
- D. 終止EC2案件的請求並非來自CIDR區塊192.0.2.0/24或203.0.113.0/24。

**答案**
D


**詳解**
正確答案是 **D**。
- D：終止EC2案件的請求並非來自CIDR區塊192.0.2.0/24或203.0.113.0/24。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：EC2例項有一個基於資源的政策,並附有拒絕宣告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：政策說明中沒有具體說明主要內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C："行動"欄位不授予終止EC2例項所需的行動。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #495

**題目**
一家公司正在進行內部稽核(audit). 該公司希望確保Amazon S3桶中與該公司的AWS Lake Formation 資料湖(data lake)相關的資料不包含敏感的客戶或僱員資料. 公司希望發現個人可識別的資訊(PII)或金融資訊,包括護照號碼和信用卡號碼. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 AWS 稽核(Audit) 經理在帳上。 選擇支付卡行業資料安全標準用於審計。
- B. 在 S3 儲存桶(S3 bucket) 上配置 Amazon S3 庫存 配置 Amazon Athena 查詢庫存.
- C. 配置 Amazon Macie 以執行一個資料發現任務,該任務對所需的資料型別使用管理識別符號.
- D. 使用 Amazon S3 選擇在 S3 儲存桶(S3 bucket) 執行一個報告。

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 Amazon Macie 以執行一個資料發現任務,該任務對所需的資料型別使用管理識別符號。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 AWS 稽核(Audit) 經理在帳上。 選擇支付卡行業資料安全標準用於審計。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 S3 儲存桶(S3 bucket) 上配置 Amazon S3 庫存 配置 Amazon Athena 查詢庫存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon S3 選擇在 S3 儲存桶(S3 bucket) 執行一個報告 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #496

**題目**
一家公司使用前提伺服器來託管其應用程式. 公司倉儲能力耗盡. 應用程式同時使用塊儲存和NFS儲存. 公司需要高效能的解決方案,支援本地的快取,而不對其現有的應用進行重新存檔. 一個設計師應採取何種綜合行動來滿足這些要求?(選二.

**選項**
- A. 掛載 Amazon S3 作為檔案系統到預設伺服器.
- B. 部署一個 AWS Storage Gateway 檔案閘道器來取代 NFS 儲存。
- C. 部署AWS Snowball Edge向伺服器提供NFS掛載。
- D. 部署一個AWS Storage Gateway卷閘道器以取代塊儲存.
- E. 部署 Amazon 彈性檔案系統(Amazon EFS) 卷,並將其掛載到虛擬伺服器上。

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：部署一個 AWS Storage Gateway 檔案閘道器來取代 NFS 儲存 。此選項符合題目條件，能有效滿足核心需求。
- D：部署一個AWS Storage Gateway卷閘道器以取代塊儲存。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：掛載 Amazon S3 作為檔案系統到預設伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署AWS Snowball Edge向伺服器提供NFS掛載。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：部署 Amazon 彈性檔案系統(Amazon EFS) 卷,並將其掛載到虛擬伺服器上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #497

**題目**
一家公司有一個服務,從Amazon S3 儲存桶的同一個AWS 區域(Region)中讀寫大量資料. 這項服務是在一個VPC的私人子網中部署的。 該服務透過公共子網的NAT閘道器與Amazon S3通訊. 然而,公司希望有一個能夠降低資料輸出成本的解決方案. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在公共子網提供專門的EC2 NAT例項。 配置私有子網的路由表以使用此例項的彈性網路介面作為所有S3流量的目的地.
- B. 在私人子網中提供一個專門的EC2 NAT例項。 配置公共子網的路由表以使用此例項的彈性網路介面作為所有S3流量的目的地.
- C. 提供 VPC 閘道器終點。 配置私家子網的路由表,將閘道器端點作為所有S3流量的路由.
- D. 提供第二個NAT閘道器。 配置私有子網的路由表以使用此NAT閘道器作為所有S3流量的目的地.

**答案**
C


**詳解**
正確答案是 **C**。
- C：提供 VPC 閘道器終點。 配置私家子網的路由表,將閘道器端點作為所有S3流量的路由。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在公共子網提供專門的EC2 NAT例項。 配置私有子網的路由表以使用此例項的彈性網路介面作為所有S3流量的目的地。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在私人子網中提供一個專門的EC2 NAT例項。 配置公共子網的路由表以使用此例項的彈性網路介面作為所有S3流量的目的地。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：提供第二個NAT閘道器。 配置私有子網的路由表以使用此NAT閘道器作為所有S3流量的目的地。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #498

**題目**
一家公司使用Amazon S3在S3 儲存桶(S3 bucket)中儲存高解析度圖片. 為了儘量減少應用更改,公司將圖片作為S3物件的最新版本儲存. 公司只需保留兩個最新版本的圖片. 公司希望降低成本. 公司將S3 儲存桶(S3 bucket)確定為鉅額支出. 哪種解決辦法將用LEAST 營運開銷(operational overhead)降低S3的成本?

**選項**
- A. 使用S3生命週期刪除過期物件版本並保留最近的兩個版本.
- B. 使用一個 AWS Lambda 函式來檢查舊版本,並刪除除最近兩個版本外的所有版本.
- C. 使用S3 Batch Operations刪除非當前物件版本,只保留最近兩個版本.
- D. 在S3 儲存桶(S3 bucket)上解除版本功能,保留最近兩個版本.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用S3生命週期刪除過期物件版本並保留最近的兩個版本。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用一個 AWS Lambda 函式來檢查舊版本,並刪除除最近兩個版本外的所有版本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用S3 Batch Operations刪除非當前物件版本,只保留最近兩個版本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在S3 儲存桶(S3 bucket)上解除版本功能,保留最近兩個版本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #499

**題目**
一個公司需要儘量減少其1Gbps AWS Direct Connect連線的成本. 公司平均連線利用率低於10%. 解決方案設計師必須建議一種能夠降低成本而又不損害安全的解決辦法。 哪種解決辦法能滿足這些要求?

**選項**
- A. 新建1Gbps直通連線. 與另一個 AWS 帳戶共享連線。
- B. 在AWS管理控制檯中設定一個新的200 Mbps直接連線連線.
- C. 聯絡一個 AWS Direct Connect 合夥人 訂購一個 Gbps 連線。 與另一個 AWS 帳戶共享連線。
- D. 聯絡一個 AWS Direct Connect 合夥人,為一個現有的 AWS 帳戶訂購200 Mbps 主機連線。

**答案**
B


**詳解**
正確答案是 **B**。
- B：在AWS管理控制檯中設定一個新的200 Mbps直接連線連線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：新建1Gbps直通連線. 與另一個 AWS 帳戶共享連線 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：聯絡一個 AWS Direct Connect 合夥人 訂購一個 Gbps 連線。 與另一個 AWS 帳戶共享連線 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：聯絡一個 AWS Direct Connect 合夥人,為一個現有的 AWS 帳戶訂購200 Mbps 主機連線 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #500

**題目**
一家公司在房地設有多個Windows檔案伺服器. 公司希望將其檔案遷移並整合為Windows檔案伺服器檔案系統的Amazon FSx. 必須儲存檔案許可權,以確保存取許可權不變. 哪些解決辦法能滿足這些要求?(選二.

**選項**
- A. 在現場部署AWS資料同步代理. 排程資料同步任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統.
- B. 透過使用AWS CLI,將每個檔案伺服器上的股份複製成Amazon S3桶. 計劃AWS DataSync任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統.
- C. 從每個檔案伺服器中刪除驅動器。 將驅動器運送到AWS,以匯入Amazon S3. 計劃AWS DataSync任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統.
- D. 訂購 AWS 斯諾科內裝置。 連線裝置到promises網路. 在裝置上發射AWS資料同步代理. 排程資料同步任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統.
- E. 訂購AWS Snowball Edge Storage Optimized裝置. 連線裝置到promises網路. 使用 AWS CLI 將資料複製到裝置中. 將裝置運回AWS,以匯入Amazon S3. 計劃AWS DataSync任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統.

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：在現場部署AWS資料同步代理. 排程資料同步任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統。此選項符合題目條件，能有效滿足核心需求。
- D：訂購 AWS 斯諾科內裝置。 連線裝置到promises網路. 在裝置上發射AWS資料同步代理. 排程資料同步任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：透過使用AWS CLI,將每個檔案伺服器上的股份複製成Amazon S3桶. 計劃AWS DataSync任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：從每個檔案伺服器中刪除驅動器。 將驅動器運送到AWS,以匯入Amazon S3. 計劃AWS DataSync任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：訂購AWS Snowball Edge Storage Optimized裝置. 連線裝置到promises網路. 使用 AWS CLI 將資料複製到裝置中. 將裝置運回AWS,以匯入Amazon S3. 計劃AWS DataSync任務將資料傳輸到FSx用於Windows檔案伺服器檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #501

**題目**
一家公司希望將客戶支付資料攝入Amazon S3中的公司的資料湖(data lake). 該公司平均每分鐘收到付款資料。 公司希望實時分析支付資料. 然後公司想把資料輸入到資料湖(data lake). 哪種辦法能滿足這些要求?

**選項**
- A. 使用 Amazon Kinesis 資料流來吸收資料. 使用AWS Lambda實時分析資料.
- B. 使用AWS Glue來攝取資料. 使用Amazon Kinesis資料分析法實時分析資料.
- C. 使用Amazon Kinesis Data Firehose來攝取資料. 使用Amazon Kinesis資料分析法實時分析資料.
- D. 使用Amazon API Gateway來攝取資料. 使用AWS Lambda實時分析資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 Amazon Kinesis 資料流來吸收資料. 使用AWS Lambda實時分析資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS Glue來攝取資料. 使用Amazon Kinesis資料分析法實時分析資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Kinesis Data Firehose來攝取資料. 使用Amazon Kinesis資料分析法實時分析資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon API Gateway來攝取資料. 使用AWS Lambda實時分析資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #502

**題目**
一個公司在Amazon EC2上執行一個使用內容管理系統(CMS)的網站. CMS執行在單一EC2例項上,並對資料層採用Amazon Aurora MySQL 多AZ DB例項. 網站影象儲存在Amazon Elastic Block Store(Amazon EBS)體積上,在EC2例項中掛載. 設計師應採取何種綜合行動來提高網站的效能和復原力?(選二.

**選項**
- A. 將網站影象移動到安裝在每個 EC2 例項上的 Amazon S3 桶中
- B. 透過使用來自初級EC2例項的 NFS 共享共享網站影象. 在其它EC2 例項上掛載此共享。
- C. 將網站影象移動到每個EC2例項上掛載的亞馬遜彈性檔案系統(Amazon EFS)上.
- D. 從現有的 EC2 例項建立一個 Amazon 機器影象( AMI)。 使用AMI作為Auto Scaling 群組(Auto Scaling group)的一部分,提供應用程式負載平衡器(Application Load Balancer)背後的新例項. 配置 Auto Scaling 群組(Auto Scaling group) 以保持至少兩個例項。 為網站配置 AWS 全球加速器
- E. 從現有的 EC2 例項建立一個 Amazon 機器影象( AMI)。 使用AMI作為Auto Scaling 群組(Auto Scaling group)的一部分,提供應用程式負載平衡器(Application Load Balancer)背後的新例項. 配置 Auto Scaling 群組(Auto Scaling group) 以保持至少兩個例項。 為網站配置 Amazon CloudFront 發行版。

**答案**
D,E



**詳解**
正確答案是 **D, E**。
- D：從現有的 EC2 例項建立一個 Amazon 機器影象( AMI)。 使用AMI作為Auto Scaling 群組(Auto Scaling group)的一部分,提供應用程式負載平衡器(Application Load Balancer)背後的新例項. 配置 Auto Scaling 群組(Auto Scaling group) 以保持至少兩個例項。 為網站配置 AWS 全球加速器。此選項符合題目條件，能有效滿足核心需求。
- E：從現有的 EC2 例項建立一個 Amazon 機器影象( AMI)。 使用AMI作為Auto Scaling 群組(Auto Scaling group)的一部分,提供應用程式負載平衡器(Application Load Balancer)背後的新例項. 配置 Auto Scaling 群組(Auto Scaling group) 以保持至少兩個例項。 為網站配置 Amazon CloudFront 發行版 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：將網站影象移動到安裝在每個 EC2 例項上的 Amazon S3 桶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：透過使用來自初級EC2例項的 NFS 共享共享網站影象. 在其它EC2 例項上掛載此共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將網站影象移動到每個EC2例項上掛載的亞馬遜彈性檔案系統(Amazon EFS)上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #503

**題目**
一家公司經營監控(monitoring)基礎設施服務。 該公司正在建立一個新的功能,使服務能夠監測客戶AWS帳戶中的資料. 新功能將呼叫客戶帳戶中的AWS API來描述Amazon EC2 執行個體,並讀取Amazon CloudWatch 度量衡. 公司應該怎麼做才能以安全的方式進入客戶帳戶?

**選項**
- A. 確保客戶在其帳戶中扮演一個只讀EC2和Cloud Watch許可權以及公司帳戶信託政策的角色。
- B. 建立一個沒有伺服器的API,執行一個符號自動售票機,為一個只讀 EC2 和 Cloud Watch 許可權的角色提供臨時 AWS 憑證.
- C. 確保客戶在其帳戶中建立只讀EC2和Cloud Watch許可權的IAM使用者. 加密並儲存客戶存取和秘密金鑰在秘密管理系統中.
- D. 確保客戶在其帳戶中建立Amazon Cognitto使用者,以使用只讀的EC2和Cloud Watch許可權的IAM角色. 加密並儲存Amazon Cognito使用者和密碼在一個秘密管理系統中.

**答案**
A


**詳解**
正確答案是 **A**。
- A：確保客戶在其帳戶中扮演一個只讀EC2和Cloud Watch許可權以及公司帳戶信託政策的角色。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個沒有伺服器的API,執行一個符號自動售票機,為一個只讀 EC2 和 Cloud Watch 許可權的角色提供臨時 AWS 憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：確保客戶在其帳戶中建立只讀EC2和Cloud Watch許可權的IAM使用者. 加密並儲存客戶存取和秘密金鑰在秘密管理系統中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：確保客戶在其帳戶中建立Amazon Cognitto使用者,以使用只讀的EC2和Cloud Watch許可權的IAM角色. 加密並儲存Amazon Cognito使用者和密碼在一個秘密管理系統中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #504

**題目**
一個公司需要連線我們東-1區域(Region)中跨越數百個AWS帳戶的幾個VPC. 公司的網路團隊有自己的AWS帳戶管理雲網路. 將VPC連線起來的MOST操作效率解決方案是什麼?

**選項**
- A. 在每個VPC之間建立VPC對等連線. 更新每個相關子網的路由表
- B. 在每個 VPC 中配置一個 NAT 閘道器和一個網際網路閘道器,透過網際網路連線每個 VPC
- C. 在網路團隊的 AWS 帳戶中建立一個 AWS Transit 閘道器。 配置每個 VPC 的靜態路徑。
- D. 在每個VPC中部署VPN閘道器. 在網路團隊的 AWS 帳戶中建立一箇中轉 VPC 連線到每個 VPC。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在網路團隊的 AWS 帳戶中建立一個 AWS Transit 閘道器。 配置每個 VPC 的靜態路徑 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在每個VPC之間建立VPC對等連線. 更新每個相關子網的路由表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在每個 VPC 中配置一個 NAT 閘道器和一個網際網路閘道器,透過網際網路連線每個 VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在每個VPC中部署VPN閘道器. 在網路團隊的 AWS 帳戶中建立一箇中轉 VPC 連線到每個 VPC 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #505

**題目**
一家公司有Amazon EC2 執行個體,執行夜間批次工作處理資料. EC2 執行個體在使用On-Demand計費的Auto Scaling 群組(Auto Scaling group)中執行. 如果一個工作在一個例項中失敗, 另一個例項將重新處理該工作。 批次工作每天當地時間中午12:00至06:00之間. 哪種解決辦法將提供EC2例項,以便以成本效益高的方式滿足這些要求?

**選項**
- A. 購買一個為期一年的Amazon EC2儲蓄計劃,涵蓋批次工作使用的Auto Scaling 群組(Auto Scaling group)公司。
- B. 為批次工作使用的Auto Scaling 群組(Auto Scaling group)例項的具體例項型別和作業系統購買1年的後備例項。
- C. 為Auto Scaling 群組(Auto Scaling group)建立新的發射模板. 將例項設定為 Spot 執行個體。 根據 CPU 使用量設定一個縮放策略。
- D. 為Auto Scaling 群組(Auto Scaling group)建立新的發射模板. 增加例項大小。 根據 CPU 使用量設定一個縮放策略。

**答案**
C


**詳解**
正確答案是 **C**。
- C：為Auto Scaling 群組(Auto Scaling group)建立新的發射模板. 將例項設定為 Spot 執行個體。 根據 CPU 使用量設定一個縮放策略 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：購買一個為期一年的Amazon EC2儲蓄計劃,涵蓋批次工作使用的Auto Scaling 群組(Auto Scaling group)公司。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為批次工作使用的Auto Scaling 群組(Auto Scaling group)例項的具體例項型別和作業系統購買1年的後備例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為Auto Scaling 群組(Auto Scaling group)建立新的發射模板. 增加例項大小。 根據 CPU 使用量設定一個縮放策略 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #506

**題目**
一家社交媒體公司正在為其網站建立一個功能。 該功能將賦予使用者上傳照片的能力. 公司預計大型活動期間的需求會大幅增加,必須確保網站能夠處理使用者的上傳流量. 用MOST 可擴展性(scalability)滿足這些要求的解決方案是什麼?

**選項**
- A. 從使用者瀏覽器上傳檔案到應用程式伺服器. 把檔案轉到Amazon S3桶裡
- B. 提供AWS Storage Gateway檔案閘道器. 從使用者瀏覽器直接上傳檔案到檔案閘道器.
- C. 在應用程式中生成 Amazon S3 預先簽名的 URL。 從使用者瀏覽器直接上傳檔案到S3 儲存桶(S3 bucket).
- D. 提供亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 從使用者瀏覽器直接上傳檔案到檔案系統.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在應用程式中生成 Amazon S3 預先簽名的 URL。 從使用者瀏覽器直接上傳檔案到S3 儲存桶(S3 bucket)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：從使用者瀏覽器上傳檔案到應用程式伺服器. 把檔案轉到Amazon S3桶裡。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：提供AWS Storage Gateway檔案閘道器. 從使用者瀏覽器直接上傳檔案到檔案閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：提供亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 從使用者瀏覽器直接上傳檔案到檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #507

**題目**
一家公司設有網路旅行票申請. 該應用基於在北美單一資料中心執行的資料庫(database). 公司希望擴大應用程式以服務全球使用者基礎. 公司需要將應用程式部署到多個AWS地區. 平均延遲(latency)對保留的更新必須少於1秒。 公司希望在多個地區分別部署其網路平臺. 然而,該公司必須保持全球一致的單一主要保留地資料庫(database)。 哪個解決方案架構設計師建議滿足這些要求?

**選項**
- A. 將應用程式轉換為使用Amazon DynamoDB. 中心預定表使用全域性表。 在每個區域部署中使用正確的區域終點。
- B. 將資料庫(database)移動到Amazon Aurora MySQL 資料庫(database). 在每個區域(Region)中部署Aurora Read Replicas. 利用每個區域部署中正確的區域終點進入全球業務安全標準0003。
- C. 將資料庫(database)移動到Amazon RDS,用於MySQL 資料庫(database). 在每個區域(Region)中部署 MySQL讀取複製品. 利用每個區域部署中正確的區域終點進入全球業務安全標準0003。
- D. 將應用程式移動到 Amazon Aurora 無伺服器的 資料庫(database)。 為每個區域(Region)部署資料庫(database)的例項. 使用每個區域部署中正確的區域終點進入全球業務安全標準0003。 使用AWS Lambda功能處理每個區域(Region)中的事件流,同步資料庫.

**答案**
B


**詳解**
正確答案是 **B**。
- B：將資料庫(database)移動到Amazon Aurora MySQL 資料庫(database). 在每個區域(Region)中部署Aurora Read Replicas. 利用每個區域部署中正確的區域終點進入全球業務安全標準0003。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將應用程式轉換為使用Amazon DynamoDB. 中心預定表使用全域性表。 在每個區域部署中使用正確的區域終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料庫(database)移動到Amazon RDS,用於MySQL 資料庫(database). 在每個區域(Region)中部署 MySQL讀取複製品. 利用每個區域部署中正確的區域終點進入全球業務安全標準0003。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將應用程式移動到 Amazon Aurora 無伺服器的 資料庫(database)。 為每個區域(Region)部署資料庫(database)的例項. 使用每個區域部署中正確的區域終點進入全球業務安全標準0003。 使用AWS Lambda功能處理每個區域(Region)中的事件流,同步資料庫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #508

**題目**
一家公司將多個微軟Windows伺服器的工作量遷移到Amazon EC2 執行個體,執行於我們西-1 區域(Region). 公司手動支撐工作量,根據需要打造形象. 萬一我們西-1區域(Region)發生自然災害,公司希望迅速恢復西-2區域(Region)的工作量. 公司希望EC2案的資料損失不超過24小時. 公司還希望將EC2例項的任何備份自動化. 哪些解決辦法將滿足這些要求?(選二.

**選項**
- A. 建立Amazon EC2後置的亞馬遜機器影象(AMI)生命週期政策(lifecycle policy),以基於標記建立備份(backup). 安排備份(backup)每天執行兩次. 按要求複製影象。
- B. 建立Amazon EC2後置的亞馬遜機器影象(AMI)生命週期政策(lifecycle policy),以基於標記建立備份(backup). 安排備份(backup)每天執行兩次. 配置複製到西-2 區域(Region).
- C. 使用 AWS Backup 建立 備份(backup) 的西-1和西-2金庫. 基於標記值為EC2例項建立一個備份(backup)計劃. 建立一個 AWS Lambda 函式,作為預定任務執行,將 備份(backup) 資料複製到我們-West-2.
- D. 使用 AWS Backup 建立 備份(backup) 保險庫。 使用AWS Backup為EC2例項建立基於標記值的備份(backup)計劃. 定義副本的目的地為 us-west-2。 請指定每天執行兩次的 備份(backup) 時間表。
- E. 使用 AWS Backup 建立 備份(backup) 保險庫。 使用AWS Backup為EC2例項建立基於標記值的備份(backup)計劃. 指定每天執行兩次的備份(backup)時間表。 向西二區索取

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：建立Amazon EC2後置的亞馬遜機器影象(AMI)生命週期政策(lifecycle policy),以基於標記建立備份(backup). 安排備份(backup)每天執行兩次. 配置複製到西-2 區域(Region)。此選項符合題目條件，能有效滿足核心需求。
- C：使用 AWS Backup 建立 備份(backup) 的西-1和西-2金庫. 基於標記值為EC2例項建立一個備份(backup)計劃. 建立一個 AWS Lambda 函式,作為預定任務執行,將 備份(backup) 資料複製到我們-West-2。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：建立Amazon EC2後置的亞馬遜機器影象(AMI)生命週期政策(lifecycle policy),以基於標記建立備份(backup). 安排備份(backup)每天執行兩次. 按要求複製影象 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Backup 建立 備份(backup) 保險庫。 使用AWS Backup為EC2例項建立基於標記值的備份(backup)計劃. 定義副本的目的地為 us-west-2。 請指定每天執行兩次的 備份(backup) 時間表 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用 AWS Backup 建立 備份(backup) 保險庫。 使用AWS Backup為EC2例項建立基於標記值的備份(backup)計劃. 指定每天執行兩次的備份(backup)時間表。 向西二區索取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #509

**題目**
一家公司經營影象處理的兩級應用程式。 該應用程式使用兩個可用區(Availability Zones),每個都有一個公共子網和一個私人子網. 用於網路層級的應用程式負載平衡器(Application Load Balancer)(ALB)使用公共子網. 應用級的 Amazon EC2 例項使用私有子網. 使用者報告應用程式執行速度比預期慢. 一個安全的稽核(audit)網路伺服器日誌檔案顯示,該應用程式正收到少量IP地址提出的數百萬個非法請求. 一個解決方案架構師需要解決即時的效能問題,而公司則調查更永久的解決方案. 解決方案設計師建議如何滿足這一要求?

**選項**
- A. 為網路級別修改輸入的安全群組(security group)。 對正在消耗資源的IP地址新增拒絕規則。
- B. 為網路級子網修改 網路 ACL(network ACL)。 對耗盡資源的IP地址新增一個入境拒絕規則.
- C. 為應用級修改輸入的安全群組(security group)。 對正在消耗資源的IP地址新增拒絕規則。
- D. 修改應用級子網的網路 ACL(network ACL)。 對耗盡資源的IP地址新增一個入境拒絕規則.

**答案**
B


**詳解**
正確答案是 **B**。
- B：為網路級子網修改 網路 ACL(network ACL)。 對耗盡資源的IP地址新增一個入境拒絕規則。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為網路級別修改輸入的安全群組(security group)。 對正在消耗資源的IP地址新增拒絕規則 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為應用級修改輸入的安全群組(security group)。 對正在消耗資源的IP地址新增拒絕規則 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改應用級子網的網路 ACL(network ACL)。 對耗盡資源的IP地址新增一個入境拒絕規則。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #510

**題目**
一家全球營銷公司在Ap-S東南-2 區域(Region)和eu-West-1 區域(Region)中執行應用. 在eu-west-1的VPC執行的應用程式需要安全地與在AP-東南-2的VPC執行的資料庫進行通訊. 哪些網路設計將滿足這些要求?

**選項**
- A. 在eu-West-1 VPC和AP-東南-2 VPC之間建立VPC對等連線. 在eu-West-1應用程式安全群組(security group)中建立一條入境規則,允許從AP-東南-2 安全群組(security group)的資料庫(database)伺服器IP地址傳輸.
- B. 配置一個在 AP-東南-2 VPC 和 eu-西-1 VPC 之間的 VPC 對等連線. 更新子網路由表。 在 AP-東南-2 資料庫(database) 安全群組(security group) 中建立一條入境規則,該規則引用 eu-West-1 中應用伺服器的 安全群組(security group) ID.
- C. 配置 AP- 東南-2 VPC 和 eu- West-1 VPUpdate 子網路由表之間的 VPC 對等連線。 在 AP-東南-2 資料庫(database) 安全群組(security group) 中建立一條入境規則,允許eu-West-1應用程式伺服器IP地址的流量.
- D. 在eu-West-1 VPC和AP-S東南部-2 VPC之間建立一個具有對等附件的中轉閘道器. 在中轉閘道器正確對等和路由配置後,在資料庫(database)安全群組(security group)中建立一條入境規則,該規則引用eu-west-1中應用伺服器的安全群組(security group)ID.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置一個在 AP-東南-2 VPC 和 eu-西-1 VPC 之間的 VPC 對等連線. 更新子網路由表。 在 AP-東南-2 資料庫(database) 安全群組(security group) 中建立一條入境規則,該規則引用 eu-West-1 中應用伺服器的 安全群組(security group) ID。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在eu-West-1 VPC和AP-東南-2 VPC之間建立VPC對等連線. 在eu-West-1應用程式安全群組(security group)中建立一條入境規則,允許從AP-東南-2 安全群組(security group)的資料庫(database)伺服器IP地址傳輸。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 AP- 東南-2 VPC 和 eu- West-1 VPUpdate 子網路由表之間的 VPC 對等連線。 在 AP-東南-2 資料庫(database) 安全群組(security group) 中建立一條入境規則,允許eu-West-1應用程式伺服器IP地址的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在eu-West-1 VPC和AP-S東南部-2 VPC之間建立一個具有對等附件的中轉閘道器. 在中轉閘道器正確對等和路由配置後,在資料庫(database)安全群組(security group)中建立一條入境規則,該規則引用eu-west-1中應用伺服器的安全群組(security group)ID。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #511

**題目**
一家公司正在開發使用PostgreSQL 資料庫(database) schema的軟體。 公司需要為公司開發商配置多個開發環境和資料庫. 平均而言,每個開發環境用於8小時工作日的一半。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 用自己的 Amazon Aurora 配置每個開發環境 PostgreSQL 資料庫(database)
- B. 為 PostgreSQL 單個 AZ DB 例項配置每個開發環境, 並配置自己的 Amazon RDS
- C. 使用自己的Amazon Aurora On-Demand PostgreSQL-相容資料庫(database)配置每個開發環境
- D. 使用 Amazon S3 物件選擇配置每個開發環境

**答案**
B


**詳解**
正確答案是 **B**。
- B：為 PostgreSQL 單個 AZ DB 例項配置每個開發環境, 並配置自己的 Amazon RDS。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：用自己的 Amazon Aurora 配置每個開發環境 PostgreSQL 資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用自己的Amazon Aurora On-Demand PostgreSQL-相容資料庫(database)配置每個開發環境。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon S3 物件選擇配置每個開發環境。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #512

**題目**
一家公司使用AWS Organizations,資源用帳戶標記。 公司還使用AWS Backup來支撐其AWS基礎設施資源. 公司需要支援所有AWS資源. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用AWS Config來識別所有未標記的資源. 以方案方式標記已確定的資源。 在備份(backup)計劃中使用標記.
- B. 使用AWS Config來識別所有未執行的資源. 將這些資源加入備份(backup)金庫。
- C. 要求所有AWS帳戶所有者審查其資源,以確定需要備份的資源.
- D. 使用 Amazon 檢查員來識別所有不符合要求的資源。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS Config來識別所有未標記的資源. 以方案方式標記已確定的資源。 在備份(backup)計劃中使用標記。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS Config來識別所有未執行的資源. 將這些資源加入備份(backup)金庫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：要求所有AWS帳戶所有者審查其資源,以確定需要備份的資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon 檢查員來識別所有不符合要求的資源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #513

**題目**
一家社交媒體公司希望允許其使用者在AWS雲託管的應用程式中上傳影象. 公司需要一種自動調整影象大小的解決方案,以便影象可以在多個裝置型別上顯示. 該應用在全天都經歷了無法預測的交通模式. 該公司正在尋求一個能最大限度地實現可擴展性(scalability). 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立一個以 Amazon S3 託管的靜態網站,該網站引用 AWS Lambda 功能來調整影象大小,並將影象儲存在 Amazon S3 桶中.
- B. 建立一個在 Amazon CloudFront 中託管的靜態網站,以引用 AWS Step 函式來調整影象大小,並將影象儲存在 Amazon RDS 資料庫(database) 中.
- C. 在執行於 Amazon EC2 例項的網路伺服器上建立一個動態網站。 配置一個執行在 EC2 例項上的程序,以調整影象大小並將影象儲存在 Amazon S3 桶中.
- D. 在自動縮放的亞馬遜彈性容器服務(Amazon ECS)叢集上建立一個動態網站,在亞馬遜簡易排隊服務(Amazon SQS)中建立一個大小調整的工作. 設定一個在 Amazon EC2 例項上執行的影象恢復程式, 以處理更改大小的工作。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個以 Amazon S3 託管的靜態網站,該網站引用 AWS Lambda 功能來調整影象大小,並將影象儲存在 Amazon S3 桶中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個在 Amazon CloudFront 中託管的靜態網站,以引用 AWS Step 函式來調整影象大小,並將影象儲存在 Amazon RDS 資料庫(database) 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在執行於 Amazon EC2 例項的網路伺服器上建立一個動態網站。 配置一個執行在 EC2 例項上的程序,以調整影象大小並將影象儲存在 Amazon S3 桶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在自動縮放的亞馬遜彈性容器服務(Amazon ECS)叢集上建立一個動態網站,在亞馬遜簡易排隊服務(Amazon SQS)中建立一個大小調整的工作. 設定一個在 Amazon EC2 例項上執行的影象恢復程式, 以處理更改大小的工作 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #514

**題目**
一家公司正在Amazon EC2 執行個體中執行一個微服務應用程式。 公司希望將該應用程式遷移到一個為可擴展性(scalability)的Amazon Elastic Kubernetes Service(Amazon EKS)叢集. 公司必須配置Amazon EKS控制平面,端點私人存取設定為真,端點公共存取設定為假,以維護安全合規(compliance). 公司還必須將資料平面放入私人子網. 然而,公司收到了錯誤通知,因為節點不能加入叢集. 哪個解決方案可以讓節點加入叢集?

**選項**
- A. 在AWS身份和存取管理(IAM)中給予亞馬遜EKSNODERole IAM角色所需的許可.
- B. 建立介面 VPC 端點,允許節點存取控制平面.
- C. 在公共子網中重建節點. 限制EC2節點的安全小組.
- D. 允許在節點的安全群組(security group)中外運.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立介面 VPC 端點,允許節點存取控制平面。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在AWS身份和存取管理(IAM)中給予亞馬遜EKSNODERole IAM角色所需的許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在公共子網中重建節點. 限制EC2節點的安全小組。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：允許在節點的安全群組(security group)中外運。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #515

**題目**
一家公司正在向AWS遷移一個現場申請。 公司希望使用Amazon Redshift作為解決方案. 在本設想中,哪些使用案例適合Amazon Redshift?(選三.

**選項**
- A. 支援資料 API使用傳統、集裝箱和事件驅動的應用程式獲取資料
- B. 支援客戶端和伺服器端 加密(encryption)
- C. 在指定時間和應用程式不執行時建立分析工作量
- D. 快取資料以減少後端資料庫(database)的壓力
- E. 在全球範圍進行擴充套件,以支援每分鐘幾位元組的資料和數千萬個請求
- F. 使用 AWS 管理控制檯建立叢集的二次複製

**答案**
B,C,E



**詳解**
正確答案是 **B, C, E**。
- B：支援客戶端和伺服器端 加密(encryption)。此選項符合題目條件，能有效滿足核心需求。
- C：在指定時間和應用程式不執行時建立分析工作量。此選項符合題目條件，能有效滿足核心需求。
- E：在全球範圍進行擴充套件,以支援每分鐘幾位元組的資料和數千萬個請求。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：支援資料 API使用傳統、集裝箱和事件驅動的應用程式獲取資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：快取資料以減少後端資料庫(database)的壓力。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #516

**題目**
一家公司為客戶提供API介面,以便客戶可以檢索其財務資訊. 公司預計當年使用高峰期會收到更多請求。 公司要求API以較低的延遲(latency)響應,以確保客戶滿意. 公司需要為API提供計算主機. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用應用程式負載平衡器(Application Load Balancer)和亞馬遜彈性容器服務公司。
- B. 使用 Amazon API Gateway 和 AWS Lambda 函式,並附帶提供貨幣.
- C. 使用應用程式負載平衡器(Application Load Balancer)和Amazon Elastic Kubernetes Service(Amazon EKS)叢集.
- D. 使用帶有保留貨幣的Amazon API Gateway和AWS Lambda函式.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 Amazon API Gateway 和 AWS Lambda 函式,並附帶提供貨幣。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用應用程式負載平衡器(Application Load Balancer)和亞馬遜彈性容器服務公司。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用應用程式負載平衡器(Application Load Balancer)和Amazon Elastic Kubernetes Service(Amazon EKS)叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用帶有保留貨幣的Amazon API Gateway和AWS Lambda函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #517

**題目**
一家公司希望將AWS Systems Manager會話經理日誌全部傳送到一個Amazon S3桶進行存檔. 以何種辦法滿足這一需要?

**選項**
- A. 在系統管理器控制檯中啟用 S3 記錄。 選擇 S3 儲存桶(S3 bucket) 將會話資料傳送到。
- B. 安裝 Amazon CloudWatch 代理。 將所有日誌推向雲表日誌組。 將日誌匯出至該組的S3 儲存桶(S3 bucket),以便存檔。
- C. 建立系統管理器文件,將所有伺服器日誌上傳到中央S3 儲存桶(S3 bucket)。 使用 Amazon EventBridge 執行系統管理器文件,以對抗帳戶中每天的所有伺服器.
- D. 安裝 Amazon CloudWatch 代理。 將所有日誌推向雲表日誌組。 建立 CloudWatch 日誌訂閱, 將任何日誌事件推向 Amazon Kinesis Data Firehose 傳送流。 將Amazon S3設定為目的地.

**答案**
D


**詳解**
正確答案是 **D**。
- D：安裝 Amazon CloudWatch 代理。 將所有日誌推向雲表日誌組。 建立 CloudWatch 日誌訂閱, 將任何日誌事件推向 Amazon Kinesis Data Firehose 傳送流。 將Amazon S3設定為目的地。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在系統管理器控制檯中啟用 S3 記錄。 選擇 S3 儲存桶(S3 bucket) 將會話資料傳送到 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：安裝 Amazon CloudWatch 代理。 將所有日誌推向雲表日誌組。 將日誌匯出至該組的S3 儲存桶(S3 bucket),以便存檔。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立系統管理器文件,將所有伺服器日誌上傳到中央S3 儲存桶(S3 bucket)。 使用 Amazon EventBridge 執行系統管理器文件,以對抗帳戶中每天的所有伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #518

**題目**
應用程式使用 Amazon RDS MySQL DB 例項。 RDS 資料庫(database)在磁碟空間越來越低. 一個解決方案架構師想要增加磁碟空間而無需停機時間. 哪些解決辦法能滿足這些要求?

**選項**
- A. 啟用 RDS 中的儲存自動縮放
- B. 增加 RDS 資料庫(database) 例項大小
- C. 將 RDS 資料庫(database) 例項儲存型別改為提供 IOPS
- D. 備份 RDS 資料庫(database), 增加儲存能力, 恢復 資料庫(database), 並停止前例

**答案**
A


**詳解**
正確答案是 **A**。
- A：啟用 RDS 中的儲存自動縮放。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：增加 RDS 資料庫(database) 例項大小。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 RDS 資料庫(database) 例項儲存型別改為提供 IOPS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：備份 RDS 資料庫(database), 增加儲存能力, 恢復 資料庫(database), 並停止前例。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #519

**題目**
一家諮詢公司向世界各地的客戶提供專業服務。 該公司為客戶提供解決方案和工具,以加快收集和分析關於AWS的資料. 公司需要集中管理和部署一套共同的解決方案和工具供客戶用於自助目的. 哪種解決辦法能滿足這些要求?

**選項**
- A. 為客戶建立 AWS 雲格式模板。
- B. 為客戶建立 AWS 服務目錄產品。
- C. 為客戶建立 AWS Systems Manager 模板.
- D. 為客戶建立 AWS Config 項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：為客戶建立 AWS 服務目錄產品 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為客戶建立 AWS 雲格式模板 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為客戶建立 AWS Systems Manager 模板。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為客戶建立 AWS Config 項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #520

**題目**
一家公司正在設計一個新的網路應用程式,將在Amazon EC2 Incents上執行。 該應用程式將使用Amazon DynamoDB進行後端資料儲存. 應用流量將無法預測. 公司預計,該應用程式讀寫吞吐量(throughput)至資料庫(database)將適中到高. 公司需要規模化以應對應用流量. 哪些DynamomaDB表格配置能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 透過使用DynamoDB標準表類來配置提供讀寫功能的DynamomDB. 設定 DynamomDB 自動縮放到最大定義容量。
- B. 透過使用DynamoDB標準表類,以點播模式配置DynamoDB.
- C. 透過使用DynamoDB標準不頻繁存取(DynamoDB Standard-IA)表類來配置提供讀寫功能的DynamoDB. 設定 DynamomDB 自動縮放到最大定義容量。
- D. 透過使用DynamoDB標準不經常存取(DynamoDB Standard-IA)表類,在點播模式下配置DynamoDB.

**答案**
B


**詳解**
正確答案是 **B**。
- B：透過使用DynamoDB標準表類,以點播模式配置DynamoDB。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過使用DynamoDB標準表類來配置提供讀寫功能的DynamomDB. 設定 DynamomDB 自動縮放到最大定義容量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過使用DynamoDB標準不頻繁存取(DynamoDB Standard-IA)表類來配置提供讀寫功能的DynamoDB. 設定 DynamomDB 自動縮放到最大定義容量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過使用DynamoDB標準不經常存取(DynamoDB Standard-IA)表類,在點播模式下配置DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #521

**題目**
一家零售公司有幾家企業。 每個企業的資訊科技團隊管理自己的AWS帳戶. 每個團隊帳戶都是AWS Organizations組織的一部分. 每個團隊在團隊自己的AWS帳戶中的Amazon DynamoDB表中監測其產品庫存水平. 該公司正在向一個共享的AWS帳戶部署中央庫存報告應用程式。 應用程式必須能夠讀取所有團隊的DynamoDB表格中的專案. 哪個認證方案能夠安全地滿足這些要求?

**選項**
- A. 將DynamomDB與AWS Secrets Manager納入庫存應用帳戶. 配置應用程式以使用來自保密管理器的正確金鑰來認證和讀取DynamoDB表. 每30天安排一次秘密輪換
- B. 在每個業務帳戶中,建立一個有程式存取的IAM使用者. 配置應用程式以使用正確的IAM使用者存取金鑰ID和秘密存取金鑰來認證並讀取DynamoDB表. 每30天人工旋轉IAM存取金鑰.
- C. 在每個商業帳戶中,建立一個名為BU ROLE的IAM角色,其政策是讓角色存取DynamoDB表,以及信任在清單應用帳戶中特定角色的信任政策. 在存貨帳戶中,建立一個名為APP ROLE的角色,允許存取STS AssumeRole API操作. 配置應用程式以使用 APP ROLE 並承擔交叉帳戶角色 BU ROLE 讀取 DynamoDB 表.
- D. 將DynamoDB與AWS Certificate Manager(ACM)整合. 生成身份憑證以認證DynamomDB. 配置應用程式以使用正確的憑證認證並讀取DynamomDB表.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在每個商業帳戶中,建立一個名為BU ROLE的IAM角色,其政策是讓角色存取DynamoDB表,以及信任在清單應用帳戶中特定角色的信任政策. 在存貨帳戶中,建立一個名為APP ROLE的角色,允許存取STS AssumeRole API操作. 配置應用程式以使用 APP ROLE 並承擔交叉帳戶角色 BU ROLE 讀取 DynamoDB 表。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將DynamomDB與AWS Secrets Manager納入庫存應用帳戶. 配置應用程式以使用來自保密管理器的正確金鑰來認證和讀取DynamoDB表. 每30天安排一次秘密輪換。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在每個業務帳戶中,建立一個有程式存取的IAM使用者. 配置應用程式以使用正確的IAM使用者存取金鑰ID和秘密存取金鑰來認證並讀取DynamoDB表. 每30天人工旋轉IAM存取金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將DynamoDB與AWS Certificate Manager(ACM)整合. 生成身份憑證以認證DynamomDB. 配置應用程式以使用正確的憑證認證並讀取DynamomDB表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #522

**題目**
一家公司透過使用Amazon Elastic Kubernetes Service(Amazon EKS)執行集裝箱應用. 公司的工作量在一天之內並不一致. 公司希望亞馬遜EKS根據工作量進行規模化進出. 哪些步驟與 " LEAST 營運開銷(operational overhead) " 組合可滿足這些要求?(選二.

**選項**
- A. 使用 AWS Lambda 函式來調整EKS叢集的大小.
- B. 使用 Kubernetes Metrics 伺服器來啟用水平Pod自動縮放.
- C. 使用Kubernetes叢集自動縮放器來管理叢集中的節點數.
- D. 使用Amazon API Gateway並連線到亞馬遜EKS.
- E. 使用AWS App Mesh觀察網路活動.

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：使用 Kubernetes Metrics 伺服器來啟用水平Pod自動縮放。此選項符合題目條件，能有效滿足核心需求。
- C：使用Kubernetes叢集自動縮放器來管理叢集中的節點數。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用 AWS Lambda 函式來調整EKS叢集的大小。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon API Gateway並連線到亞馬遜EKS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用AWS App Mesh觀察網路活動。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #523

**題目**
一個公司執行一個基於微服務的無伺服器網路應用程式. 應用程式必須能夠從多個Amazon DynamoDB表格中檢索資料 A解決方案架構師需要賦予應用程式檢索資料的能力,而不影響應用程式的基線效能. 哪種解決辦法能以業務效率高的方式滿足這些要求?

**選項**
- A. AWS AppSync 管道解析器
- B. 帶有 Lambda@ Edge 函式的 Amazon CloudFront
- C. 具有AWS Lambda功能的邊緣最佳化Amazon API Gateway
- D. Amazon Athena 帶有 DynamoDB 聯結器的聯邦查詢

**答案**
A


**詳解**
正確答案是 **A**。
- A：AWS AppSync 管道解析器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：帶有 Lambda@ Edge 函式的 Amazon CloudFront。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：具有AWS Lambda功能的邊緣最佳化Amazon API Gateway。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon Athena 帶有 DynamoDB 聯結器的聯邦查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #524

**題目**
一個公司想要分析和排除與IAM許可權相關的Access否認錯誤和未經授權錯誤. 公司有AWS CloudTrail開機. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS Glue 並寫入自定義指令碼來查詢 CloudTrail 日誌中的錯誤。
- B. 使用 AWS 批次並寫自定義指令碼來查詢 CloudTrail 日誌中的錯誤。
- C. 以 Amazon Athena 查詢方式搜尋 CloudTrail 日誌以識別錯誤。
- D. 與Amazon QuickSight合作搜尋雲軌日誌. 建立顯示錯誤的儀表板。

**答案**
C


**詳解**
正確答案是 **C**。
- C：以 Amazon Athena 查詢方式搜尋 CloudTrail 日誌以識別錯誤 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS Glue 並寫入自定義指令碼來查詢 CloudTrail 日誌中的錯誤 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS 批次並寫自定義指令碼來查詢 CloudTrail 日誌中的錯誤 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：與Amazon QuickSight合作搜尋雲軌日誌. 建立顯示錯誤的儀表板 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #525

**題目**
一家公司希望將其現有的AWS使用成本加入到其運營成本儀表板中. 解決方案設計師需要建議一種解決方案,使公司能夠按方案獲得使用成本。 公司必須能夠獲取當年的成本資料,並預測未來12個月的成本. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 透過使用帶有pagination的AWS Cost Explorer API,獲取使用成本相關資料.
- B. 透過使用可下載的AWS Cost Explorer報告.csv檔案存取使用成本相關資料.
- C. 配置 AWS 預算動作,透過 FTP 向公司傳送使用成本資料.
- D. 建立 AWS 預算報告使用費用資料。 透過SMTP將資料傳送給公司.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 AWS 預算報告使用費用資料。 透過SMTP將資料傳送給公司。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過使用帶有pagination的AWS Cost Explorer API,獲取使用成本相關資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：透過使用可下載的AWS Cost Explorer報告.csv檔案存取使用成本相關資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 AWS 預算動作,透過 FTP 向公司傳送使用成本資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #526

**題目**
一個解決方案設計師正在審查應用程式的復原力。 解決方案架構設計師注意到,作為縮放工作的一部分,一個資料庫(database)管理員最近因應用程式的Amazon Aurora PostgreSQL 資料庫(database)編寫例項而失敗。 故障導致應用程式有3分鐘的故障時間。 用LEAST 營運開銷(operational overhead) 縮放演習的停機時間將減少哪一個解決方案?

**選項**
- A. 建立更多Aurora PostgreSQL在叢集中讀取複製件,以便在故障時處理負載.
- B. 在同一AWS 區域(Region)中設定二級Aurora PostgreSQL叢集. 在故障翻轉期間,更新應用程式,以使用二級叢集的寫入端點.
- C. 為 Memcached 叢集建立 Amazon ElastiCache ,以便在故障時處理負載。
- D. 為資料庫(database)設立Amazon RDS代理機. 更新應用程式以使用代理端點。

**答案**
D


**詳解**
正確答案是 **D**。
- D：為資料庫(database)設立Amazon RDS代理機. 更新應用程式以使用代理端點 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立更多Aurora PostgreSQL在叢集中讀取複製件,以便在故障時處理負載。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在同一AWS 區域(Region)中設定二級Aurora PostgreSQL叢集. 在故障翻轉期間,更新應用程式,以使用二級叢集的寫入端點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 Memcached 叢集建立 Amazon ElastiCache ,以便在故障時處理負載 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #527

**題目**
一家公司有一個基於區域訂閱的流線服務,在單一的AWS 區域(Region)中執行. 該架構由Amazon EC2例項上的網路伺服器和應用伺服器組成. EC2 例項存在於彈性負載平衡器後面的自動縮放組中。 該架構包括一個覆蓋多個可用區(Availability Zones)的Amazon Aurora全球資料庫(database)叢集. 公司希望在全球擴張,並確保其應用有最小的停機時間. 哪一種解決方案能提供最有可能的過失承受力?

**選項**
- A. 擴充套件網路級和應用級的自動縮放組,以便在第二個區域(Region)中部署可用區(Availability Zones)例項。 使用Aurora全球資料庫(database)在主區域(Region)和第二區域(Region)部署資料庫(database). 使用Amazon Route 53健康檢查,並採用故障路由政策到第二個區域(Region).
- B. 將網路級和應用級部署到第二個全球業務安全標準0001。 在第二個區域(Region)中加入一個Aurora PostgreSQL跨區域(Region) Aurora Replica. 使用 Amazon Route 53 健康檢查,並採用故障通路政策到第二個區域(Region). 視需要將中學升至小學。
- C. 將網路層級和應用層級部署到第二個區域(Region)。 在第二個區域(Region)中建立一個Aurora PostgreSQL 資料庫(database). 使用AWS 資料庫(Database) 遷移服務(AWS DSM)複製主機資料庫(database)到第二個區域(Region). 使用Amazon Route 53健康檢查,並採用故障路由政策到第二個區域(Region).
- D. 將網路層級和應用層級部署到第二個區域(Region)。 使用Amazon Aurora全球資料庫(database)在主區域(Region)和第二區域(Region)中部署資料庫(database). 使用Amazon Route 53健康檢查,並配有故障通路政策到第二個區域(Region). 視需要將中學升至小學。

**答案**
B


**詳解**
正確答案是 **B**。
- B：將網路級和應用級部署到第二個全球業務安全標準0001。 在第二個區域(Region)中加入一個Aurora PostgreSQL跨區域(Region) Aurora Replica. 使用 Amazon Route 53 健康檢查,並採用故障通路政策到第二個區域(Region). 視需要將中學升至小學。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：擴充套件網路級和應用級的自動縮放組,以便在第二個區域(Region)中部署可用區(Availability Zones)例項。 使用Aurora全球資料庫(database)在主區域(Region)和第二區域(Region)部署資料庫(database). 使用Amazon Route 53健康檢查,並採用故障路由政策到第二個區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將網路層級和應用層級部署到第二個區域(Region)。 在第二個區域(Region)中建立一個Aurora PostgreSQL 資料庫(database). 使用AWS 資料庫(Database) 遷移服務(AWS DSM)複製主機資料庫(database)到第二個區域(Region). 使用Amazon Route 53健康檢查,並採用故障路由政策到第二個區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將網路層級和應用層級部署到第二個區域(Region)。 使用Amazon Aurora全球資料庫(database)在主區域(Region)和第二區域(Region)中部署資料庫(database). 使用Amazon Route 53健康檢查,並配有故障通路政策到第二個區域(Region). 視需要將中學升至小學。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #528

**題目**
一個資料分析公司希望將其批次處理系統遷移到AWS. 公司白天透過FTP定期接收數千個小資料檔案. 一個模擬的批次任務在一夜之間處理資料檔案。 然而,批次工作需要幾個小時才能完成執行. 公司希望AWS解決方案能夠儘快處理收到的資料檔案,對傳送檔案的FTP客戶端進行最小的修改. 解決方案必須在檔案處理成功後刪除匯入的資料檔案. 每個檔案的處理需要3-8分鐘. 哪種解決辦法能以業務效率高的方式滿足這些要求?

**選項**
- A. 使用執行 FTP 伺服器的 Amazon EC2 例項,將收到的檔案作為物件儲存在 Amazon S3 Glacier Flexible Retrieval. 在 AWS 批次中配置工作佇列。 使用 Amazon EventBridge 規則引用任務來從 S3 Glacier Flexible Retrieval 夜處理物件. 任務處理物件後刪除物件。
- B. 使用執行 FTP 伺服器的 Amazon EC2 例項,將收到的檔案儲存在 Amazon Elastic Block Store(Amazon EBS) 磁碟區上. 在 AWS 批次中配置工作佇列。 使用 Amazon EventBridge 規則引用任務從 EBS 磁碟區中夜處理檔案. 任務處理檔案後刪除檔案。
- C. 使用 AWS Transfer Family 建立 FTP 伺服器,將收到的檔案儲存在亞馬遜彈性塊儲存器(Amazon EBS)的磁碟區上. 在 AWS 批次中配置工作佇列。 在每個檔案到達時使用 Amazon S3 事件通知以引用 AWS 批次中的任務。 任務處理檔案後刪除檔案。
- D. 使用AWS Transfer Family建立一個FTP伺服器,以Amazon S3 Standard儲存收到的檔案. 建立一個 AWS Lambda 函式來處理檔案,並在檔案處理完畢後將其刪除. 使用 S3 事件通知在檔案到達時引用 Lambda 函式。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用執行 FTP 伺服器的 Amazon EC2 例項,將收到的檔案儲存在 Amazon Elastic Block Store(Amazon EBS) 磁碟區上. 在 AWS 批次中配置工作佇列。 使用 Amazon EventBridge 規則引用任務從 EBS 磁碟區中夜處理檔案. 任務處理檔案後刪除檔案 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用執行 FTP 伺服器的 Amazon EC2 例項,將收到的檔案作為物件儲存在 Amazon S3 Glacier Flexible Retrieval. 在 AWS 批次中配置工作佇列。 使用 Amazon EventBridge 規則引用任務來從 S3 Glacier Flexible Retrieval 夜處理物件. 任務處理物件後刪除物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Transfer Family 建立 FTP 伺服器,將收到的檔案儲存在亞馬遜彈性塊儲存器(Amazon EBS)的磁碟區上. 在 AWS 批次中配置工作佇列。 在每個檔案到達時使用 Amazon S3 事件通知以引用 AWS 批次中的任務。 任務處理檔案後刪除檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Transfer Family建立一個FTP伺服器,以Amazon S3 Standard儲存收到的檔案. 建立一個 AWS Lambda 函式來處理檔案,並在檔案處理完畢後將其刪除. 使用 S3 事件通知在檔案到達時引用 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #529

**題目**
一家公司正在將其工作量轉移到AWS。 該公司的資料庫中有交易和敏感資料。 公司希望使用AWS Cloud解決方案來增加安全性,減少資料庫的營運開銷(operational overhead). 哪種解決辦法能滿足這些要求?

**選項**
- A. 將資料庫遷移到 Amazon EC2。 為加密(encryption)使用 AWS Key Management Service(AWS KMS) AWS管理金鑰.
- B. 將資料庫遷移到 Amazon RDS 配置 靜態加密(encryption at rest)。
- C. 將資料遷移到 Amazon S3 使用 Amazon Macie 進行資料安全和保護
- D. 將資料庫(database)型機車遷移到Amazon RDS型機車. 使用Amazon CloudWatch Logs進行資料安全和保護.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將資料庫遷移到 Amazon EC2。 為加密(encryption)使用 AWS Key Management Service(AWS KMS) AWS管理金鑰。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將資料庫遷移到 Amazon RDS 配置 靜態加密(encryption at rest) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料遷移到 Amazon S3 使用 Amazon Macie 進行資料安全和保護。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料庫(database)型機車遷移到Amazon RDS型機車. 使用Amazon CloudWatch Logs進行資料安全和保護。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #530

**題目**
一個公司擁有線上遊戲應用,擁有TCP和UDP多人遊戲能力. 公司使用Amazon Route 53將應用流量指向不同AWS區域的多個網路負載平衡器(NLB). 公司需要改善應用效能,減少線上遊戲的延遲(latency),為使用者成長做準備. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在NLB前增加Amazon CloudFront分發。 增加快取控制最大年齡引數。
- B. 以應用程式負載平衡器(ALB)取代NLB。 配置53路使用基於延遲(latency)的路由.
- C. 在NLB前增加AWS Global Accelerator. 配置全域性加速器端點以使用正確的聽器埠。
- D. 在NLB後面增加一個Amazon API Gateway端點。 啟用 API 快取。 覆蓋不同階段的快取方法。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在NLB後面增加一個Amazon API Gateway端點。 啟用 API 快取。 覆蓋不同階段的快取方法。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在NLB前增加Amazon CloudFront分發。 增加快取控制最大年齡引數 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：以應用程式負載平衡器(ALB)取代NLB。 配置53路使用基於延遲(latency)的路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在NLB前增加AWS Global Accelerator. 配置全域性加速器端點以使用正確的聽器埠 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #531

**題目**
公司需要與第三方資料反饋進行整合. 資料反饋傳送一個webhook,以便在新資料可供消費時通知外部服務。 一名開發者寫了一個AWS Lambda功能,當公司收到一個webhook召回時檢索資料. 開發者必須讓Lambda函式可供第三方呼叫. 哪種辦法能滿足這些要求?

**選項**
- A. 為 Lambda 函式建立函式 URL。 向第三方提供 Lambda 函式 URL 用於 Webhook。
- B. 在Lambda函式前部署一個應用程式負載平衡器(Application Load Balancer)(ALB). 向第三方提供 ALB URL 用於網頁瀏覽。
- C. 建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 將此主題附加於 Lambda 函式。 向第三方提供 SNS 主題的公開主機名, 用於 Webhook。
- D. 建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將佇列附加到 Lambda 函式中。 為 Webhook 提供 SQS 佇列的公開主機名給第三方。

**答案**
B


**詳解**
正確答案是 **B**。
- B：在Lambda函式前部署一個應用程式負載平衡器(Application Load Balancer)(ALB). 向第三方提供 ALB URL 用於網頁瀏覽 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 Lambda 函式建立函式 URL。 向第三方提供 Lambda 函式 URL 用於 Webhook 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 將此主題附加於 Lambda 函式。 向第三方提供 SNS 主題的公開主機名, 用於 Webhook 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將佇列附加到 Lambda 函式中。 為 Webhook 提供 SQS 佇列的公開主機名給第三方 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #532

**題目**
一家公司的工作量為AWS 區域(Region)。 客戶透過使用Amazon API Gateway REST API連線並獲取工作量. 公司使用Amazon Route 53作為其DNS供應商. 公司希望為所有客戶提供個人和安全的URL. 哪些步驟的組合將滿足這些要求?(選三.

**選項**
- A. 在登記員中登記所需領域。 在53號公路主機區建立萬用字元自定義域名,並在該區記錄指向API Gateway終點.
- B. 請求在不同的區域(Region)中匹配 AWS Certificate Manager(ACM) 中的域的萬用字元憑證。
- C. 根據53號公路的要求為每個客戶建立託管區. 建立指向 API 閘道器終點的區域記錄。
- D. 請求匹配同一區域(Region)中AWS Certificate Manager(ACM)中自定義域名的萬用字元憑證.
- E. 在 API Gateway 為每個客戶建立多個 API 端點.
- F. 在 API 閘道器中為 REST API 建立自定義域名。 從 AWS Certificate Manager(ACM) 匯入憑證.

**答案**
C,F,D



**詳解**
正確答案是 **C, D**。
- C：根據53號公路的要求為每個客戶建立託管區. 建立指向 API 閘道器終點的區域記錄 。此選項符合題目條件，能有效滿足核心需求。
- D：請求匹配同一區域(Region)中AWS Certificate Manager(ACM)中自定義域名的萬用字元憑證。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在登記員中登記所需領域。 在53號公路主機區建立萬用字元自定義域名,並在該區記錄指向API Gateway終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：請求在不同的區域(Region)中匹配 AWS Certificate Manager(ACM) 中的域的萬用字元憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在 API Gateway 為每個客戶建立多個 API 端點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #533

**題目**
一家公司在Amazon S3儲存資料. 根據規定,資料不得包含個人識別資訊(PII)。 該公司最近發現,S3桶有一些含有PII的物體. 公司需要自動檢測S3桶中的PII,並通知公司的安全團隊. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用亞馬遜梅西. 建立 Amazon EventBridge 規則,從 Macie 發現中過濾敏感資料事件型別,並向安全團隊傳送亞馬遜簡易通知服務(Amazon SNS)通知.
- B. 使用亞馬遜衛視Duty. 建立 Amazon EventBridge 規則,從 GuardDuty 發現中過濾 CRITICAL 事件型別,並向安全團隊傳送亞馬遜簡易通知服務(Amazon SNS)通知.
- C. 使用亞馬遜梅西. 建立 Amazon EventBridge 規則,從 Macie 發現過濾敏感資料:S3 Object/Personal 事件型別,並向安全團隊傳送Amazon Simple Quue Service(Amazon SQS)通知.
- D. 使用亞馬遜衛視Duty. 建立一個 Amazon EventBridge 規則,從 GuardDuty 的發現過濾 CRITICAL 事件型別,並向安全小組傳送Amazon 簡單佇列服務(Amazon SQS)通知.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用亞馬遜梅西. 建立 Amazon EventBridge 規則,從 Macie 發現過濾敏感資料:S3 Object/Personal 事件型別,並向安全團隊傳送Amazon Simple Quue Service(Amazon SQS)通知。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用亞馬遜梅西. 建立 Amazon EventBridge 規則,從 Macie 發現中過濾敏感資料事件型別,並向安全團隊傳送亞馬遜簡易通知服務(Amazon SNS)通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用亞馬遜衛視Duty. 建立 Amazon EventBridge 規則,從 GuardDuty 發現中過濾 CRITICAL 事件型別,並向安全團隊傳送亞馬遜簡易通知服務(Amazon SNS)通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用亞馬遜衛視Duty. 建立一個 Amazon EventBridge 規則,從 GuardDuty 的發現過濾 CRITICAL 事件型別,並向安全小組傳送Amazon 簡單佇列服務(Amazon SQS)通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #534

**題目**
一家公司希望為其多個AWS帳戶建立一個伐木解決方案. 該公司目前將所有帳戶的日誌儲存在一個集中帳戶中。 公司在集中帳戶中建立了Amazon S3桶,用於儲存VPC的無線日誌和AWS CloudTrail日誌. 所有日誌必須高度可用30天進行頻繁分析,為備份(backup)目的保留60天,並在建立90天后刪除。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立後30天向S3標準儲存類轉換物件. 寫入一個過期動作,指示 Amazon S3 在90天后刪除物件.
- B. 建立後30天轉換物件為S3標準-不頻繁存取(S3 Standard-IA)儲存類. 90天后將所有物件移動到 S3 Glacier Flexible Retrieval 儲存類. 寫入一個過期動作,指示 Amazon S3 在90天后刪除物件.
- C. 建立後30天轉換物件為S3 Glacier Flexible Retrieval儲存類. 寫入一個過期動作,指示 Amazon S3 在90天后刪除物件.
- D. 建立後30天向S3 One Zone-不頻繁存取(S3 One Zone-IA)的儲存類轉換物件. 90天后將所有物件移動到 S3 Glacier Flexible Retrieval 儲存類. 寫入一個過期動作,指示 Amazon S3 在90天后刪除物件.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立後30天轉換物件為S3標準-不頻繁存取(S3 Standard-IA)儲存類. 90天后將所有物件移動到 S3 Glacier Flexible Retrieval 儲存類. 寫入一個過期動作,指示 Amazon S3 在90天后刪除物件。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立後30天向S3標準儲存類轉換物件. 寫入一個過期動作,指示 Amazon S3 在90天后刪除物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立後30天轉換物件為S3 Glacier Flexible Retrieval儲存類. 寫入一個過期動作,指示 Amazon S3 在90天后刪除物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立後30天向S3 One Zone-不頻繁存取(S3 One Zone-IA)的儲存類轉換物件. 90天后將所有物件移動到 S3 Glacier Flexible Retrieval 儲存類. 寫入一個過期動作,指示 Amazon S3 在90天后刪除物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #535

**題目**
一家公司正在建造一個亞馬遜智慧Kubernetes服務(Amazon EKS)叢集,以應付其工作量。 所有儲存在亞馬遜EKS中的秘密都必須加密在Kubernetes等金鑰價值商店中. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個新的 AWS Key Management Service(AWS KMS) 金鑰. 使用AWS Secrets Manager來管理,旋轉,並儲存亞馬遜EKS的所有秘密.
- B. 建立一個新的 AWS Key Management Service(AWS KMS) 金鑰. 在亞馬遜EKS叢集上啟用亞馬遜EKS KMS秘密加密(encryption).
- C. 以預設選項建立 Amazon EKS 叢集。 使用亞馬遜彈性塊儲存器(Amazon EBS)容器儲存介面(CSI)驅動器作為載入.
- D. 建立一個新的 AWS Key Management Service(AWS KMS) 金鑰,其別名/aws/eb的別名. 為帳戶啟用預設的 Amazon 彈性塊儲存( Amazon EBS) 卷 加密(encryption)。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立一個新的 AWS Key Management Service(AWS KMS) 金鑰,其別名/aws/eb的別名. 為帳戶啟用預設的 Amazon 彈性塊儲存( Amazon EBS) 卷 加密(encryption) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個新的 AWS Key Management Service(AWS KMS) 金鑰. 使用AWS Secrets Manager來管理,旋轉,並儲存亞馬遜EKS的所有秘密。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個新的 AWS Key Management Service(AWS KMS) 金鑰. 在亞馬遜EKS叢集上啟用亞馬遜EKS KMS秘密加密(encryption)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：以預設選項建立 Amazon EKS 叢集。 使用亞馬遜彈性塊儲存器(Amazon EBS)容器儲存介面(CSI)驅動器作為載入。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #536

**題目**
一家公司希望為資料科學家提供近實時只讀存取公司生產的Amazon RDS,用於PostgreSQL 資料庫(database). 資料庫(database)目前配置為單AZ資料庫(database)型. 資料科學家使用複雜的查詢,不會影響資料庫(database)的生產. 公司需要一個非常可用的解決方案. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在維護視窗中縮放現有的生產資料庫(database),為資料科學家提供足夠的動力.
- B. 將設定從單AZ改為多AZ例項部署,並增加一個二級備用例項。 使資料科學家能夠進入二審。
- C. 將設定從單AZ改為多AZ例項部署. 為資料科學家提供另外兩個讀本。
- D. 將設定從單AZ改為多AZ叢集部署,並有兩個可讀的備用例. 為資料科學家提供讀取的終點。

**答案**
C


**詳解**
正確答案是 **C**。
- C：將設定從單AZ改為多AZ例項部署. 為資料科學家提供另外兩個讀本。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在維護視窗中縮放現有的生產資料庫(database),為資料科學家提供足夠的動力。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將設定從單AZ改為多AZ例項部署,並增加一個二級備用例項。 使資料科學家能夠進入二審。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將設定從單AZ改為多AZ叢集部署,並有兩個可讀的備用例. 為資料科學家提供讀取的終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #537

**題目**
一家公司在AWS雲中執行一個三級網路應用程式,執行於三個可用區(Availability Zones). 應用程式架構有一個應用程式負載平衡器(Application Load Balancer),一個託管使用者會話狀態的Amazon EC2網路伺服器,和一個執行在EC2例項上的MySQL 資料庫(database). 公司預計應用流量會突然增加. 該公司希望能夠擴大規模,以滿足未來的應用能力需求,並確保高可用性(high availability)覆蓋所有三個可用區(Availability Zones). 哪種解決辦法能滿足這些要求?

**選項**
- A. 將MySQL 資料庫(database)遷移到Amazon RDS,用於MySQL,並進行多AZ DB叢集部署. 使用 Amazon ElastiCache 來使用 高可用性(high availability) 的 Redis 儲存會話資料,並讀取快取。 將網路伺服器移動到一個Auto Scaling 群組(Auto Scaling group),它位於三個可用區(Availability Zones)中.
- B. 將MySQL 資料庫(database)遷移到Amazon RDS,用於MySQL,並進行多AZ DB叢集部署. 使用 Amazon ElastiCache 來使用 高可用性(high availability) 的 Memcached 儲存會話資料和快取讀取。 將網路伺服器移動到一個Auto Scaling 群組(Auto Scaling group),它位於三個可用區(Availability Zones)中.
- C. 將 MySQL 資料庫(database) 移動到 Amazon DynamoDB 使用 DynamoDB 加速器( DAX) 以快取讀取。 將會話資料儲存於 DynatomDB。 將網路伺服器移動到一個Auto Scaling 群組(Auto Scaling group),它位於三個可用區(Availability Zones)中.
- D. 將 MySQL 資料庫(database) 移動到 Amazon RDS 為 MySQL 在一個單獨的 可用區(Availability Zone). 使用 Amazon ElastiCache 來使用 高可用性(high availability) 的 Redis 儲存會話資料,並讀取快取。 將網路伺服器移動到一個Auto Scaling 群組(Auto Scaling group),它位於三個可用區(Availability Zones)中.

**答案**
B


**詳解**
正確答案是 **B**。
- B：將MySQL 資料庫(database)遷移到Amazon RDS,用於MySQL,並進行多AZ DB叢集部署. 使用 Amazon ElastiCache 來使用 高可用性(high availability) 的 Memcached 儲存會話資料和快取讀取。 將網路伺服器移動到一個Auto Scaling 群組(Auto Scaling group),它位於三個可用區(Availability Zones)中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將MySQL 資料庫(database)遷移到Amazon RDS,用於MySQL,並進行多AZ DB叢集部署. 使用 Amazon ElastiCache 來使用 高可用性(high availability) 的 Redis 儲存會話資料,並讀取快取。 將網路伺服器移動到一個Auto Scaling 群組(Auto Scaling group),它位於三個可用區(Availability Zones)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 MySQL 資料庫(database) 移動到 Amazon DynamoDB 使用 DynamoDB 加速器( DAX) 以快取讀取。 將會話資料儲存於 DynatomDB。 將網路伺服器移動到一個Auto Scaling 群組(Auto Scaling group),它位於三個可用區(Availability Zones)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 MySQL 資料庫(database) 移動到 Amazon RDS 為 MySQL 在一個單獨的 可用區(Availability Zone). 使用 Amazon ElastiCache 來使用 高可用性(high availability) 的 Redis 儲存會話資料,並讀取快取。 將網路伺服器移動到一個Auto Scaling 群組(Auto Scaling group),它位於三個可用區(Availability Zones)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #538

**題目**
一家全球影片流媒體公司使用Amazon CloudFront作為內容釋出網路(CDN(CDN)). 公司希望透過多個國家分階段推出內容. 公司需要確保公司推出內容的國家以外的觀眾無法檢視內容. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用允許列表在 CloudFront 中新增地理限制內容。 設定自定義錯誤訊息。
- B. 設定新的 URL tor 限制內容。 使用簽名的 URL 和 cookie 授權存取。 設定自定義錯誤訊息。
- C. 加密公司分發內容的資料。 設定自定義錯誤訊息。
- D. 為限制內容建立新 URL。 為已簽名的 URL 設定限時存取政策。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用允許列表在 CloudFront 中新增地理限制內容。 設定自定義錯誤訊息 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：設定新的 URL tor 限制內容。 使用簽名的 URL 和 cookie 授權存取。 設定自定義錯誤訊息 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：加密公司分發內容的資料。 設定自定義錯誤訊息 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為限制內容建立新 URL。 為已簽名的 URL 設定限時存取政策 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #539

**題目**
一家公司希望使用AWS雲來改進它的災難復原(disaster recovery)(DR)配置. 公司的核心生產業務應用使用Microsoft SQL Server Standard,它執行在虛擬機器(VM)上. 應用程式的恢復點目標(RPO)為30秒或更短,恢復時間目標(RTO)為60分鐘. DR解決方案需要儘可能降低成本. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Microsoft SQL 伺服器 Entertainment 與 Always On 可用性組,在 options 伺服器和 AWS 之間配置多站點活動/活動設定。
- B. 為AWS上的SQL Server 資料庫(database)配置一個溫暖的備用Amazon RDS. 配置 AWS 資料庫(Database) 遷移服務(AWS DS)使用更改資料捕獲(CDC).
- C. 使用配置的AWS Elastic 災難復原(Disaster Recovery)將磁碟更改複製到AWS作為試光.
- D. 使用第三方備份(backup)軟體每晚獲取備份. 在Amazon S3中儲存一組二級備份.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用第三方備份(backup)軟體每晚獲取備份. 在Amazon S3中儲存一組二級備份。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Microsoft SQL 伺服器 Entertainment 與 Always On 可用性組,在 options 伺服器和 AWS 之間配置多站點活動/活動設定 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為AWS上的SQL Server 資料庫(database)配置一個溫暖的備用Amazon RDS. 配置 AWS 資料庫(Database) 遷移服務(AWS DS)使用更改資料捕獲(CDC)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用配置的AWS Elastic 災難復原(Disaster Recovery)將磁碟更改複製到AWS作為試光。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #540

**題目**
一家公司擁有一個使用Oracle 資料庫(database)處理和儲存客戶資訊的promess伺服器. 公司希望使用AWS 資料庫(database)服務實現更高的可用性,提高應用效能. 該公司還希望從其主要的資料庫(database)系統進行Ofioad報告. 哪種解決辦法能以業務效率高的方式滿足這些要求?

**選項**
- A. 使用 AWS 資料庫(Database) 遷移服務(AWS DS)在多個 AWS區域建立 Amazon RDS DB 例項. 將報告功能與初級 DB 例項分開。
- B. 在單AZ部署中使用Amazon RDS來建立甲骨文資料庫(database). 與主 DB 例項在同一區域建立讀取複製。 將報告功能引導到讀取的複製品。
- C. 使用部署在多AZ叢集部署中的Amazon RDS來建立Oracle 資料庫(database). 引導報告功能在分組部署中使用閱讀器例項.
- D. 使用部署在多AZ例項部署中的Amazon RDS來建立Amazon Aurora 資料庫(database). 將報告功能導向讀者例項。

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用部署在多AZ例項部署中的Amazon RDS來建立Amazon Aurora 資料庫(database). 將報告功能導向讀者例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 資料庫(Database) 遷移服務(AWS DS)在多個 AWS區域建立 Amazon RDS DB 例項. 將報告功能與初級 DB 例項分開。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在單AZ部署中使用Amazon RDS來建立甲骨文資料庫(database). 與主 DB 例項在同一區域建立讀取複製。 將報告功能引導到讀取的複製品。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用部署在多AZ叢集部署中的Amazon RDS來建立Oracle 資料庫(database). 引導報告功能在分組部署中使用閱讀器例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #541

**題目**
一個公司想在AWS上建立一個網路應用程式. 網站的客戶存取請求不可預測,可以長時間閒置. 只有支付訂閱費的客戶才能在網路應用程式上簽名和使用. 哪些步驟的組合將以符合成本效益的方式滿足這些要求?(選三.

**選項**
- A. 建立 AWS Lambda 功能,從 Amazon DynamoDB 獲取使用者資訊. 建立 Amazon API Gateway 端點以接受 RESTful API. 將API的呼叫傳送給Lambda函式.
- B. 在應用程式負載平衡器(Application Load Balancer)後建立亞馬遜彈性容器服務(Amazon ECS)服務,從Amazon RDS獲取使用者資訊. 建立 Amazon API Gateway 端點以接受 RESTful API. 將API的呼叫傳送給Lambda函式.
- C. 建立Amazon Cognitto使用者池,以認證使用者.
- D. 建立Amazon Cognito身份池,以認證使用者.
- E. 使用AWS Amplify服務前端的網頁內容有HTML,CSS和JS. 使用整合的Amazon CloudFront配置.
- F. 使用與PHP,CSS,JS的Amazon S3靜態網路託管. 使用Amazon CloudFront服務前端網路內容.

**答案**
A,C,E



**詳解**
正確答案是 **A, C, E**。
- A：建立 AWS Lambda 功能,從 Amazon DynamoDB 獲取使用者資訊. 建立 Amazon API Gateway 端點以接受 RESTful API. 將API的呼叫傳送給Lambda函式。此選項符合題目條件，能有效滿足核心需求。
- C：建立Amazon Cognitto使用者池,以認證使用者。此選項符合題目條件，能有效滿足核心需求。
- E：使用AWS Amplify服務前端的網頁內容有HTML,CSS和JS. 使用整合的Amazon CloudFront配置。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在應用程式負載平衡器(Application Load Balancer)後建立亞馬遜彈性容器服務(Amazon ECS)服務,從Amazon RDS獲取使用者資訊. 建立 Amazon API Gateway 端點以接受 RESTful API. 將API的呼叫傳送給Lambda函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立Amazon Cognito身份池,以認證使用者。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #542

**題目**
一家媒體公司使用Amazon CloudFront發行,透過網際網路傳送內容. 公司只希望溢價客戶能夠存取媒體流和檔案內容. 公司將所有內容儲存在Amazon S3桶中. 公司還為特定目的,如電影出租或音樂下載,按需向客戶交付內容. 哪種解決辦法能滿足這些要求?

**選項**
- A. 生成並向溢價客戶提供S3簽名餅乾.
- B. 生成並向溢價客戶提供CloudFront簽名的URL.
- C. 使用原產地存取控制(access control)(OAC)限制非Premium客戶的存取.
- D. 生成並啟用場級加密(encryption),以遮蔽非前置客戶.

**答案**
B


**詳解**
正確答案是 **B**。
- B：生成並向溢價客戶提供CloudFront簽名的URL。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：生成並向溢價客戶提供S3簽名餅乾。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用原產地存取控制(access control)(OAC)限制非Premium客戶的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：生成並啟用場級加密(encryption),以遮蔽非前置客戶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #543

**題目**
一家公司在多個AWS帳戶中執行Amazon EC2 執行個體,這些帳戶個人流血. 公司最近購買了一家儲蓄派. 由於公司業務要求的變化,公司已經退役了大量EC2 執行個體. 公司希望在其他AWS帳戶上使用其儲蓄計劃折扣. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 從管理帳戶的AWS帳戶管理控制檯開啟從計費優惠部分的折扣共享.
- B. 從購買現有儲蓄計劃的帳戶的AWS帳戶管理控制檯開啟從計費優惠部分的折扣分享. 包含所有帳戶。
- C. 從AWS Organizations管理帳戶,使用AWS資源存取管理器(AWS RAM)與其他帳戶共享儲蓄計劃.
- D. 在AWS Organizations新付款人帳戶中建立一個組織. 邀請其他AWS帳戶從管理帳戶加入組織.
- E. 在AWS Organizations現有AWS帳戶中建立一個組織,並有現有的EC2例項和儲蓄計劃. 邀請其他AWS帳戶從管理帳戶加入組織.

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：從管理帳戶的AWS帳戶管理控制檯開啟從計費優惠部分的折扣共享。此選項符合題目條件，能有效滿足核心需求。
- E：在AWS Organizations現有AWS帳戶中建立一個組織,並有現有的EC2例項和儲蓄計劃. 邀請其他AWS帳戶從管理帳戶加入組織。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：從購買現有儲蓄計劃的帳戶的AWS帳戶管理控制檯開啟從計費優惠部分的折扣分享. 包含所有帳戶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：從AWS Organizations管理帳戶,使用AWS資源存取管理器(AWS RAM)與其他帳戶共享儲蓄計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Organizations新付款人帳戶中建立一個組織. 邀請其他AWS帳戶從管理帳戶加入組織。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #544

**題目**
一家零售公司使用地區性的Amazon API Gateway API進行公共REST API. API閘道器端點是一個自定義域名,指代Amazon Route 53別名記錄. 解決方案架構師需要建立一個對客戶影響最小,資料損失最小的解決方案,以釋出新版API. 哪種解決辦法能滿足這些要求?

**選項**
- A. 為API Gateway建立金絲雀釋放部署階段. 部署最新的 API 版本。 指向金絲雀舞臺的適當比例 API驗證後,將金絲雀舞臺推廣到生產舞臺.
- B. 用 OpenAPI YAML 檔案格式建立新的API Gateway end point,並使用新版本的API. 在 API 閘道器中將匯入到更新的操作合併到 API 模式中. 將新版API部署到生產階段.
- C. 以 OpenAPI JSON 檔案格式建立新的API Gateway end point,並使用新的版本API. 在API Gateway中將覆蓋模式中的匯入至更新操作用於API. 將新版API部署到生產階段.
- D. 建立一個帶有新版本API定義的新的API Gateway端點. 為新的API Gateway API建立自定義域名. 將"路由53"別名記錄到新的API Gateway API自定義域名.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為API Gateway建立金絲雀釋放部署階段. 部署最新的 API 版本。 指向金絲雀舞臺的適當比例 API驗證後,將金絲雀舞臺推廣到生產舞臺。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：用 OpenAPI YAML 檔案格式建立新的API Gateway end point,並使用新版本的API. 在 API 閘道器中將匯入到更新的操作合併到 API 模式中. 將新版API部署到生產階段。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：以 OpenAPI JSON 檔案格式建立新的API Gateway end point,並使用新的版本API. 在API Gateway中將覆蓋模式中的匯入至更新操作用於API. 將新版API部署到生產階段。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個帶有新版本API定義的新的API Gateway端點. 為新的API Gateway API建立自定義域名. 將"路由53"別名記錄到新的API Gateway API自定義域名。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #545

**題目**
一家公司希望將其使用者引導到一個備份(backup)靜態錯誤頁面,如果公司的主要網站沒有. 主要網站的DNS記錄以Amazon Route 53為主機. 域指應用程式負載平衡器(Application Load Balancer)(ALB). 公司需要一種解決辦法,儘量減少變化和基礎設施的間接費用。 哪種解決辦法能滿足這些要求?

**選項**
- A. 更新53路的記錄,使用延遲(latency)路由政策. 將Amazon S3桶內託管的靜態錯誤頁新增到記錄中,使流量傳送到最響應的端點.
- B. 設定53路活動被動故障配置. 當53路健康檢查確定ALB端點不健康時,直接流量會到達Amazon S3桶內託管的靜態錯誤頁.
- C. 設定一條帶有 ALB 的 Route 53 活動式配置, 以及一個 Amazon EC2 例項, 以一個靜態錯誤頁面作為端點。 在 ALB 健康檢查失敗的情況下, 配置53 路向例項傳送請求。
- D. 更新"路53"記錄使用多值解答路由政策. 建立健康檢查。 如果健康檢查透過,直接存取網站。 如果健康檢查沒有透過,直接存取Amazon S3中託管的靜態錯誤頁。

**答案**
B


**詳解**
正確答案是 **B**。
- B：設定53路活動被動故障配置. 當53路健康檢查確定ALB端點不健康時,直接流量會到達Amazon S3桶內託管的靜態錯誤頁。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：更新53路的記錄,使用延遲(latency)路由政策. 將Amazon S3桶內託管的靜態錯誤頁新增到記錄中,使流量傳送到最響應的端點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：設定一條帶有 ALB 的 Route 53 活動式配置, 以及一個 Amazon EC2 例項, 以一個靜態錯誤頁面作為端點。 在 ALB 健康檢查失敗的情況下, 配置53 路向例項傳送請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：更新"路53"記錄使用多值解答路由政策. 建立健康檢查。 如果健康檢查透過,直接存取網站。 如果健康檢查沒有透過,直接存取Amazon S3中託管的靜態錯誤頁。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #546

**題目**
最近對公司資訊科技開支的分析突出表明,有必要減少備份(backup)費用。 公司資訊長希望簡化上層備份(backup)基礎設施,並透過取消使用物理備份(backup)磁帶來降低成本. 公司必須保留現有對廠房備份(backup)應用軟體和工作檔案的投資。 一個解決方案設計師應該推薦什麼?

**選項**
- A. 設定AWS Storage Gateway,利用NFS介面與備份(backup)應用程式連線.
- B. 建立一個Amazon EFS檔案系統,利用NFS介面與備份(backup)應用程式連線.
- C. 建立Amazon EFS檔案系統,利用iSCSI介面與備份(backup)應用程式連線.
- D. 設定AWS Storage Gateway,使用iSCSI-虛擬磁帶庫(VTL)介面與備份(backup)應用程式連線.

**答案**
D


**詳解**
正確答案是 **D**。
- D：設定AWS Storage Gateway,使用iSCSI-虛擬磁帶庫(VTL)介面與備份(backup)應用程式連線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：設定AWS Storage Gateway,利用NFS介面與備份(backup)應用程式連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個Amazon EFS檔案系統,利用NFS介面與備份(backup)應用程式連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立Amazon EFS檔案系統,利用iSCSI介面與備份(backup)應用程式連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #547

**題目**
一家公司在不同地點設有資料收集感測器。 資料收集感測器向公司流出大量資料。 公司想在AWS上設計一個平臺,以攝取和處理大量流體資料. 解決辦法必須是可擴充套件的,並支援近實時收集資料。 公司必須將資料儲存在Amazon S3中,以便日後報告. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用Amazon Kinesis Data Firehose向Amazon S3傳送流資料.
- B. 使用AWS Glue向Amazon S3傳送流資料.
- C. 使用AWS Lambda傳送流資料,並將資料儲存到Amazon S3.
- D. 使用AWS 資料庫(Database) 遷移服務(AWS DS)向Amazon S3傳送流資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon Kinesis Data Firehose向Amazon S3傳送流資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS Glue向Amazon S3傳送流資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Lambda傳送流資料,並將資料儲存到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS 資料庫(Database) 遷移服務(AWS DS)向Amazon S3傳送流資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #548

**題目**
一家公司有獨立的AWS財務帳戶、資料分析帳戶和開發部門帳戶。 由於成本和安全問題,公司希望控制每個AWS帳戶可以使用的服務. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用AWS Systems Manager模板來控制AWS服務每個部門可以使用的.
- B. 在AWS Organizations中為每個部門建立組織單位(OU). 將服務控制政策(SCP)附在OU上.
- C. 使用AWS CloudFormation來自動僅提供每個部門可以使用的AWS服務.
- D. 在AWS帳戶中建立AWS服務目錄中的產品清單,以管理和控制特定AWS服務的使用.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在AWS Organizations中為每個部門建立組織單位(OU). 將服務控制政策(SCP)附在OU上。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS Systems Manager模板來控制AWS服務每個部門可以使用的。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS CloudFormation來自動僅提供每個部門可以使用的AWS服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS帳戶中建立AWS服務目錄中的產品清單,以管理和控制特定AWS服務的使用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #549

**題目**
一家公司為其電子商務網站建立了多層次應用程式。 該網站使用一個位於公共子網的應用程式負載平衡器(Application Load Balancer),公共子網的網路級,以及一個在Amazon EC2 執行個體中託管的私人子網的MySQL叢集. MySQL 資料庫(database)需要檢索由第三方供應商在網際網路上託管的產品目錄和定價資訊。 解決方案設計師必須設計一種戰略,在不增加營運開銷(operational overhead)的情況下,最大限度地加強安全。 解決方案設計師應如何滿足這些要求?

**選項**
- A. 在《萬那杜刑法典》中部署NAT案例。 透過NAT例項,
- B. 在公共子網設定NAT閘道器. 修改私家子網路由表,將所有網際網路的流量引導到NAT閘道器.
- C. 配置一個網際網路閘道器並附在VPModize私有子網路由表上,以引導網際網路閘道器的流量。
- D. 配置一個虛擬私有閘道(virtual private gateway)並附在VPC上. 修改私家子網路由表,引導網際網路接入虛擬私有閘道(virtual private gateway).

**答案**
B


**詳解**
正確答案是 **B**。
- B：在公共子網設定NAT閘道器. 修改私家子網路由表,將所有網際網路的流量引導到NAT閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在《萬那杜刑法典》中部署NAT案例。 透過NAT例項,。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個網際網路閘道器並附在VPModize私有子網路由表上,以引導網際網路閘道器的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個虛擬私有閘道(virtual private gateway)並附在VPC上. 修改私家子網路由表,引導網際網路接入虛擬私有閘道(virtual private gateway)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #550

**題目**
一家公司正在使用AWS Key Management Service(AWS KMS)金鑰加密AWS Lambda環境變數. 解決方案架構師需要確保所需的許可權到位,以解密和使用環境變數. 設計師必須採取什麼步驟來執行正確的授權?(選二.

**選項**
- A. 在Lambda資源政策中新增 AWS KMS 許可權.
- B. 在 Lambda 執行角色中新增 AWS KMS 許可權.
- C. 在 Lambda 函式策略中新增 AWS KMS 許可權。
- D. 在AWS KMS關鍵政策中允許Lambda執行角色.
- E. 在 AWS KMS 關鍵政策中允許蘭布達資源政策.

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：在 Lambda 執行角色中新增 AWS KMS 許可權。此選項符合題目條件，能有效滿足核心需求。
- D：在AWS KMS關鍵政策中允許Lambda執行角色。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在Lambda資源政策中新增 AWS KMS 許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Lambda 函式策略中新增 AWS KMS 許可權 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在 AWS KMS 關鍵政策中允許蘭布達資源政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #551

**題目**
一家公司有製作報告的財務應用程式。 報告的平均體積為50KB,儲存在Amazon S3中。 這些報告經常在製作後第一週查閱,必須儲存幾年。 報告必須在6小時內檢索。 哪種解決辦法符合這些要求?

**選項**
- A. 使用S3標準. 使用S3生命週期規則,在7天后將報告轉換為S3冰川.
- B. 使用S3標準. 使用S3生命週期規則在7天后將報告轉換為S3標準-不經常存取(S3 Standard-IA).
- C. 使用 S3 Intelligent-Tiering. 配置 S3 Intelligent-Tiering 將報告轉換為 S3 標準-不頻繁存取(S3 Standard-IA)和 S3 Glacier.
- D. 使用S3標準. 使用S3生命週期規則,在7天后將報告轉換為S3 Glacier Deep Archive。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用S3標準. 使用S3生命週期規則在7天后將報告轉換為S3標準-不經常存取(S3 Standard-IA)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用S3標準. 使用S3生命週期規則,在7天后將報告轉換為S3冰川。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 S3 Intelligent-Tiering. 配置 S3 Intelligent-Tiering 將報告轉換為 S3 標準-不頻繁存取(S3 Standard-IA)和 S3 Glacier。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用S3標準. 使用S3生命週期規則,在7天后將報告轉換為S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #552

**題目**
公司需要最佳化其Amazon EC2例項的成本. 公司還需要每2-3個月改變EC2 執行個體的型別和家庭. 公司應如何滿足這些要求?

**選項**
- A. 購買部分預留款,任期三年。
- B. 購買無前期計算儲蓄計劃,為期一年。
- C. 購買所有前期儲備基金,任期1年。
- D. 購買一個全先期EC2儲蓄計劃,為期一年。

**答案**
D


**詳解**
正確答案是 **D**。
- D：購買一個全先期EC2儲蓄計劃,為期一年。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：購買部分預留款,任期三年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：購買無前期計算儲蓄計劃,為期一年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：購買所有前期儲備基金,任期1年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #553

**題目**
一個解決方案架構師需要審查公司的Amazon S3桶,以發現個人識別資訊(PII). 公司將PII資料儲存在我們東-1區域(Region)和西-2區域(Region)中. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在每個 區域(Region) 中配置 Amazon Macie。 建立一個工作來分析Amazon S3中的資料.
- B. 配置所有區域的 AWS 安全中心。 建立一個 AWS Config 規則來分析 Amazon S3 中的資料.
- C. 配置 Amazon 督察 分析 Amazon S3 中的資料。
- D. 配置 Amazon GuardDuty 分析 Amazon S3 中的資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在每個 區域(Region) 中配置 Amazon Macie。 建立一個工作來分析Amazon S3中的資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置所有區域的 AWS 安全中心。 建立一個 AWS Config 規則來分析 Amazon S3 中的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon 督察 分析 Amazon S3 中的資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon GuardDuty 分析 Amazon S3 中的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #554

**題目**
一家公司的SAP應用軟體有一個後端的SQL Server 資料庫(database)在前提環境下. 公司希望將其在地上的應用和資料庫(database)伺服器遷移到AWS. 該公司需要一種滿足SAP 資料庫(database)的高要求的例項型別. On-presimes效能資料顯示,SAP應用程式和資料庫(database)的記憶體利用率都很高. 哪種解決辦法能滿足這些要求?

**選項**
- A. 應用時使用計算最佳化例項家族。 使用資料庫(database)的記憶體最佳化例項家族.
- B. 應用和資料庫(database)同時使用儲存最佳化例項家族.
- C. 應用和資料庫(database)同時使用記憶體最佳化例項家族.
- D. 為應用程式使用高效能運算(HPC)最佳化例項家族. 使用資料庫(database)的記憶體最佳化例項家族.

**答案**
C


**詳解**
正確答案是 **C**。
- C：應用和資料庫(database)同時使用記憶體最佳化例項家族。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：應用時使用計算最佳化例項家族。 使用資料庫(database)的記憶體最佳化例項家族。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：應用和資料庫(database)同時使用儲存最佳化例項家族。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為應用程式使用高效能運算(HPC)最佳化例項家族. 使用資料庫(database)的記憶體最佳化例項家族。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #555

**題目**
一家公司在一個具有公共和私人子網的VPC中執行一個應用程式. VPC跨越多個可用區(Availability Zones). 該應用程式執行在私人子網的Amazon EC2 執行個體上. 該應用程式使用亞馬遜簡易佇列服務(Amazon SQS)佇列. 一個解決方案架構師需要設計一個安全解決方案,在EC2例項和SQS佇列之間建立連線. 哪種解決辦法能滿足這些要求?

**選項**
- A. 為Amazon SQS實施介面VPC 端點(VPC endpoint). 配置使用私有子網的終點。 在端點外加一個安全群組(security group),它有一個入境進入規則,允許來自位於私人子網的EC2例項的流量.
- B. 為Amazon SQS實施介面VPC 端點(VPC endpoint). 配置使用公共子網的終點。 在介面端點上附加一個VPC 端點(VPC endpoint)政策,允許從私有子網中的EC2例項存取.
- C. 為Amazon SQS實施介面VPC 端點(VPC endpoint). 配置使用公共子網的終點。 在介面VPC 端點(VPC endpoint)上附加一個Amazon SQS存取政策,只允許特定VPC 端點(VPC endpoint)的請求.
- D. 為 Amazon SQS 執行閘道器終點. 在私有子網中新增一個NAT閘道器. 在允許存取 SQS 佇列的 EC2 例項中附加一個 IAM 角色。

**答案**
A


**詳解**
正確答案是 **A**。
- A：為Amazon SQS實施介面VPC 端點(VPC endpoint). 配置使用私有子網的終點。 在端點外加一個安全群組(security group),它有一個入境進入規則,允許來自位於私人子網的EC2例項的流量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為Amazon SQS實施介面VPC 端點(VPC endpoint). 配置使用公共子網的終點。 在介面端點上附加一個VPC 端點(VPC endpoint)政策,允許從私有子網中的EC2例項存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為Amazon SQS實施介面VPC 端點(VPC endpoint). 配置使用公共子網的終點。 在介面VPC 端點(VPC endpoint)上附加一個Amazon SQS存取政策,只允許特定VPC 端點(VPC endpoint)的請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 Amazon SQS 執行閘道器終點. 在私有子網中新增一個NAT閘道器. 在允許存取 SQS 佇列的 EC2 例項中附加一個 IAM 角色 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #556

**題目**
一個解決方案架構師正在使用一個AWS Cloud Formation模板來部署一個三級網路應用程式. 網路應用程式包括一個網路級和一個應用程式級,在Amazon DynamoDB表格中儲存和檢索使用者資料. 網路和應用級在Amazon EC2 執行個體中託管,資料庫(database)級不對外開放. 應用程式 EC2 例項需要存取 DynamoDB 表格而不在模板中披露 API 憑證. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立 IAM 角色以讀取 DynamoDB 表格。 將這一作用與應用例項聯絡起來,參照一個執行個體設定檔(instance profile)。
- B. 建立一個具有從DynamoDB表格讀寫所需許可權的IAM角色. 將該角色新增到EC2 執行個體設定檔(instance profile),並將執行個體設定檔(instance profile)與應用例項聯絡起來.
- C. 使用AWS CloudFormation模板中的引數部分,從已經建立的IAM使用者獲得使用者輸入存取和金鑰,該使用者擁有從DynamoDB表格讀寫所需的許可權.
- D. 在AWS CloudFormation模板中建立一個IAM使用者,該使用者擁有從DynamoDB表格讀寫所需的許可權. 使用 GetAtt 函式來獲取存取和金鑰,並透過使用者資料將其傳遞到應用程式例項.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個具有從DynamoDB表格讀寫所需許可權的IAM角色. 將該角色新增到EC2 執行個體設定檔(instance profile),並將執行個體設定檔(instance profile)與應用例項聯絡起來。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 IAM 角色以讀取 DynamoDB 表格。 將這一作用與應用例項聯絡起來,參照一個執行個體設定檔(instance profile)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS CloudFormation模板中的引數部分,從已經建立的IAM使用者獲得使用者輸入存取和金鑰,該使用者擁有從DynamoDB表格讀寫所需的許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS CloudFormation模板中建立一個IAM使用者,該使用者擁有從DynamoDB表格讀寫所需的許可權. 使用 GetAtt 函式來獲取存取和金鑰,並透過使用者資料將其傳遞到應用程式例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #557

**題目**
一個解決方案架構師管理一個分析應用程式. 應用程式將大量半結構資料儲存在Amazon S3桶中. 解決方案架構師希望使用並行的資料處理來更快地處理資料. 解決方案架構師還希望使用儲存在Amazon Redshift 資料庫(database)中的資訊來豐富資料. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon Athena處理S3資料. 使用AWS Glue與Amazon Redshift資料來豐富S3資料.
- B. 使用Amazon EMR處理S3資料. 使用Amazon EMR與Amazon Redshift資料來豐富S3資料.
- C. 使用Amazon EMR處理S3資料. 使用Amazon Kinesis Data Streams將S3資料移動到Amazon Redshift,以便資料能夠豐富.
- D. 使用AWS Glue處理S3資料. 使用帶有Amazon Redshift資料的AWS湖形成來豐富S3資料.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用AWS Glue處理S3資料. 使用帶有Amazon Redshift資料的AWS湖形成來豐富S3資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon Athena處理S3資料. 使用AWS Glue與Amazon Redshift資料來豐富S3資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon EMR處理S3資料. 使用Amazon EMR與Amazon Redshift資料來豐富S3資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon EMR處理S3資料. 使用Amazon Kinesis Data Streams將S3資料移動到Amazon Redshift,以便資料能夠豐富。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #558

**題目**
一家公司有兩個VPC位於我們西-2區域(Region)在同一AWS帳戶內. 公司需要允許這些VPC之間的網路交通. 每月約有500GB的資料在脆弱社群中心之間傳輸。 將這些脆弱產品連線起來的最符合成本效益的解決辦法是什麼?

**選項**
- A. 實施AWS Transit Gateway來連線VPC. 更新每個VPC的路由表,以使用中轉閘道器進行VPC間通訊.
- B. 實施VPC之間的AWS站點對站點VPN隧道. 更新每個VPC的路由表,使用VPN隧道進行VPC間通訊.
- C. 在VPC之間建立VPC對等連線. 更新每個VPC的路由表,使用VPC對等連線進行VPC間通訊.
- D. 在VPC之間建立1GB的AWS Direct Connect連線. 更新每個VPC的路由表,使用直接連線連線進行VPC間通訊.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在VPC之間建立VPC對等連線. 更新每個VPC的路由表,使用VPC對等連線進行VPC間通訊。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：實施AWS Transit Gateway來連線VPC. 更新每個VPC的路由表,以使用中轉閘道器進行VPC間通訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：實施VPC之間的AWS站點對站點VPN隧道. 更新每個VPC的路由表,使用VPN隧道進行VPC間通訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在VPC之間建立1GB的AWS Direct Connect連線. 更新每個VPC的路由表,使用直接連線連線進行VPC間通訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #559

**題目**
一個公司在AWS上為不同的產品線託管多個應用程式. 應用程式使用不同的計算資源,包括Amazon EC2例項和應用程式負載平衡器. 這些應用程式在AWS Organizations的同一個組織下的不同AWS帳戶中執行,跨越多個AWS區域. 每個產品線的團隊在單個帳戶中對每個計算資源進行了標記。 公司希望從組織綜合收費功能中更詳細地瞭解每個產品線的成本. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 在 AWS 計費控制檯中選擇一個特定的 AWS 生成標記。
- B. 在 AWS 計費控制檯中選擇一個特定的使用者定義標記。
- C. 在 AWS 資源組控制檯中選擇一個特定的使用者定義標籤。
- D. 從每個 AWS 帳戶啟用選中的標籤。
- E. 啟用組織管理帳戶中選定的標籤。

**答案**
B,E



**詳解**
正確答案是 **B, E**。
- B：在 AWS 計費控制檯中選擇一個特定的使用者定義標記 。此選項符合題目條件，能有效滿足核心需求。
- E：啟用組織管理帳戶中選定的標籤。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在 AWS 計費控制檯中選擇一個特定的 AWS 生成標記 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 AWS 資源組控制檯中選擇一個特定的使用者定義標籤 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：從每個 AWS 帳戶啟用選中的標籤 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #560

**題目**
一個公司的解決方案架構師正在設計一個使用AWS Organizations的AWS多帳戶解決方案. 解決方案架構師將公司的帳戶組織成組織單位(OUs). 解決方案架構師需要一個能夠識別OU等級結構的任何變化的解決方案. 解決方案還需要將任何變更通知公司的運營團隊. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 透過使用AWS控制塔提供AWS帳戶. 使用帳戶漂移通知來識別 OU 層級的更改。
- B. 透過使用AWS控制塔提供AWS帳戶. 使用 AWS Config 彙總規則來識別OU等級的改變.
- C. 使用 AWS 服務目錄在組織中建立帳戶. 使用 AWS CloudTrail 組織線索來識別OU等級的改變.
- D. 使用 AWS CloudFormation 模板在組織中建立帳戶. 使用堆疊上的漂移檢測操作來識別OU層次的改變.

**答案**
A


**詳解**
正確答案是 **A**。
- A：透過使用AWS控制塔提供AWS帳戶. 使用帳戶漂移通知來識別 OU 層級的更改 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：透過使用AWS控制塔提供AWS帳戶. 使用 AWS Config 彙總規則來識別OU等級的改變。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 服務目錄在組織中建立帳戶. 使用 AWS CloudTrail 組織線索來識別OU等級的改變。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS CloudFormation 模板在組織中建立帳戶. 使用堆疊上的漂移檢測操作來識別OU層次的改變。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #561

**題目**
一家公司的網站每天處理數百萬個請求,請求數量持續增加. 一個解決方案架構師需要改善網路應用程式的響應時間. 解決方案架構師確定,在從Amazon DynamoDB表中檢索產品細節時,應用程式需要減少延遲(latency). 哪個解決方案能滿足這些要求,LEAST數額是營運開銷(operational overhead)?

**選項**
- A. 建立DynamoDB加速器(DAX)叢集. 路線透過 DAX 全部讀取請求。
- B. 在DynamoDB表和網路應用程式之間為Redis設定Amazon ElastiCache. 路線透過 Redis 全部讀取請求。
- C. 在DynamoDB表格和網路應用程式之間為Memcached設定Amazon ElastiCache. 路線透過Memcached讀取請求。
- D. 在桌子上設定 Amazon DynamoDB 串流,並讓 AWS Lambda 從桌子上讀取,並填充 Amazon ElastiCache. 路線透過 ElastiCache 全部讀取請求。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立DynamoDB加速器(DAX)叢集. 路線透過 DAX 全部讀取請求 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在DynamoDB表和網路應用程式之間為Redis設定Amazon ElastiCache. 路線透過 Redis 全部讀取請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在DynamoDB表格和網路應用程式之間為Memcached設定Amazon ElastiCache. 路線透過Memcached讀取請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在桌子上設定 Amazon DynamoDB 串流,並讓 AWS Lambda 從桌子上讀取,並填充 Amazon ElastiCache. 路線透過 ElastiCache 全部讀取請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #562

**題目**
一個解決方案架構師需要確保API從Amazon EC2例項中呼叫Amazon DynamoDB, 設計師應採取哪些步驟來滿足這一要求?(選二.

**選項**
- A. 為終點建立路由表條目。
- B. 為 DynamoDB 建立閘道器終點。
- C. 為 Amazon EC2 建立介面端點.
- D. 為VPC每個子網的端點建立彈性網路介面.
- E. 在端點的安全群組(security group)中建立一個安全群組(security group)條目來提供存取.

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：為終點建立路由表條目。此選項符合題目條件，能有效滿足核心需求。
- B：為 DynamoDB 建立閘道器終點 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：為 Amazon EC2 建立介面端點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為VPC每個子網的端點建立彈性網路介面。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在端點的安全群組(security group)中建立一個安全群組(security group)條目來提供存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #563

**題目**
一家公司在Amazon Elastic Kubernetes Service(Amazon EKS)叢集和前提上的Kubernetes叢集上執行其應用. 公司希望從中央地點檢視所有叢集和工作量. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用 Amazon CloudWatch 容器透視儀來收集和分組資訊.
- B. 使用Amazon EKS聯結器來註冊和連線所有Kubernetes叢集.
- C. 使用AWS Systems Manager來收集和檢視叢集資訊.
- D. 使用 Amazon EKS 任何地方作為主叢集來檢視其他帶原生Kubernetes命令的叢集.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon EKS聯結器來註冊和連線所有Kubernetes叢集。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon CloudWatch 容器透視儀來收集和分組資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Systems Manager來收集和檢視叢集資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon EKS 任何地方作為主叢集來檢視其他帶原生Kubernetes命令的叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #564

**題目**
一家公司正在建立一個電子商務應用程式,需要儲存敏感的客戶資訊。 公司需要給予客戶在網站上完成購買交易的能力. 公司還需要確保敏感的客戶資料得到保護,甚至不受資料庫(database)管理員的保護. 哪種解決辦法符合這些要求?

**選項**
- A. 將敏感資料儲存在亞馬遜彈性塊儲存(Amazon EBS)的體積中. 使用EBS 加密(encryption)加密資料. 使用IAM例項角色來限制存取.
- B. 為MySQL在Amazon RDS中儲存敏感資料. 使用AWS Key Management Service(AWS KMS)客戶端-加密(encryption)加密資料.
- C. 在Amazon S3中儲存敏感資料. 使用AWS Key Management Service(AWS KMS)伺服器側加密(encryption)加密資料. 使用S3 儲存桶(S3 bucket)政策限制存取.
- D. 為Windows Server在Amazon FSx中儲存敏感資料. 在應用程式伺服器上掛載檔案共享。 使用Windows檔案許可權限制存取.

**答案**
B


**詳解**
正確答案是 **B**。
- B：為MySQL在Amazon RDS中儲存敏感資料. 使用AWS Key Management Service(AWS KMS)客戶端-加密(encryption)加密資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將敏感資料儲存在亞馬遜彈性塊儲存(Amazon EBS)的體積中. 使用EBS 加密(encryption)加密資料. 使用IAM例項角色來限制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon S3中儲存敏感資料. 使用AWS Key Management Service(AWS KMS)伺服器側加密(encryption)加密資料. 使用S3 儲存桶(S3 bucket)政策限制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為Windows Server在Amazon FSx中儲存敏感資料. 在應用程式伺服器上掛載檔案共享。 使用Windows檔案許可權限制存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #565

**題目**
一家公司有一個處理交易資料的promise MySQL 資料庫(database). 公司將資料庫(database)型機車遷移至AWS雲. 遷移的資料庫(database)必須與使用資料庫(database)的公司的應用程式保持相容性. 在需求增加期間,遷移的資料庫(database)也必須自動擴大規模。 哪種移徙解決辦法將滿足這些要求?

**選項**
- A. 使用本地的MySQL工具將資料庫(database)遷移到Amazon RDS用於MySQL. 配置彈性儲存縮放。
- B. 透過 Mysqldump 工具將 資料庫(database) 移動到 Amazon Redshift。 為 Amazon Redshift 叢集開啟自動縮放。
- C. 使用AWS 資料庫(Database)遷移服務(AWS DS)將資料庫(database)遷移到Amazon Aurora. 開啟Aurora自動放大器
- D. 使用AWS 資料庫(Database)遷移服務(AWS DS)將資料庫(database)遷移到Amazon DynamoDB. 配置自動縮放策略。

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用AWS 資料庫(Database)遷移服務(AWS DS)將資料庫(database)遷移到Amazon Aurora. 開啟Aurora自動放大器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用本地的MySQL工具將資料庫(database)遷移到Amazon RDS用於MySQL. 配置彈性儲存縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：透過 Mysqldump 工具將 資料庫(database) 移動到 Amazon Redshift。 為 Amazon Redshift 叢集開啟自動縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS 資料庫(Database)遷移服務(AWS DS)將資料庫(database)遷移到Amazon DynamoDB. 配置自動縮放策略 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #566

**題目**
一家公司在一個VPC中執行多個Amazon EC2 Linux例項,跨越兩個可用區(Availability Zones). 使用層次目錄結構的應用程式主機例項。 應用程式需要快速讀寫,並同時進行共享儲存. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立 Amazon S3 桶. 允許從 VPC 中的所有 EC2 例項存取。
- B. 建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 從每個EC2例項中掛載 EFS 檔案系統。
- C. 在一個備註的IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS 磁碟區上建立檔案系統. 在所有 EC2 例項中附加 EBS 磁碟區。
- D. 在每個EC2例項上附加的Amazon Elastic Block Store(Amazon EBS 磁碟區上建立檔案系統. 在不同的EC2例項中同步 EBS 磁碟區.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon S3 桶. 允許從 VPC 中的所有 EC2 例項存取 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 從每個EC2例項中掛載 EFS 檔案系統 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在一個備註的IOPS SSD(io2) Amazon Elastic Block Store(Amazon EBS 磁碟區上建立檔案系統. 在所有 EC2 例項中附加 EBS 磁碟區 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在每個EC2例項上附加的Amazon Elastic Block Store(Amazon EBS 磁碟區上建立檔案系統. 在不同的EC2例項中同步 EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #567

**題目**
一名解決方案架構師正在設計一個工作量,將商業租戶每小時的能源消耗儲存在一棟大樓中。 感測器將透過HTTP請求提供資料庫(database),這將增加每個租戶的使用量。 解決方案設計師必須儘可能使用管理服務。 由於解決方案設計師增加了獨立的元件,今後工作量將有更多特點。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用帶有AWS Lambda功能的Amazon API Gateway接收感測器的資料,處理資料,並將資料儲存在Amazon DynamoDB表中.
- B. 使用具有彈性的負載平衡器(Load Balancer),由Amazon EC2的Auto Scaling 群組(Auto Scaling group)例項支援,接收和處理感測器的資料。 使用 Amazon S3 桶儲存已處理的資料.
- C. 使用帶有AWS Lambda功能的Amazon API Gateway接收感測器的資料,處理資料,並在Amazon EC2例項上將資料儲存在Microsoft SQL Server Express 資料庫(database)中.
- D. 使用具有彈性的負載平衡器(Load Balancer),由Amazon EC2的Auto Scaling 群組(Auto Scaling group)例項支援,接收和處理感測器的資料。 使用亞馬遜彈性檔案系統(Amazon EFS)共享檔案系統來儲存已處理的資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用帶有AWS Lambda功能的Amazon API Gateway接收感測器的資料,處理資料,並將資料儲存在Amazon DynamoDB表中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用具有彈性的負載平衡器(Load Balancer),由Amazon EC2的Auto Scaling 群組(Auto Scaling group)例項支援,接收和處理感測器的資料。 使用 Amazon S3 桶儲存已處理的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用帶有AWS Lambda功能的Amazon API Gateway接收感測器的資料,處理資料,並在Amazon EC2例項上將資料儲存在Microsoft SQL Server Express 資料庫(database)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用具有彈性的負載平衡器(Load Balancer),由Amazon EC2的Auto Scaling 群組(Auto Scaling group)例項支援,接收和處理感測器的資料。 使用亞馬遜彈性檔案系統(Amazon EFS)共享檔案系統來儲存已處理的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #568

**題目**
一個解決方案架構師正在設計用於儲存和觀看工程圖紙的新網路應用程式的儲存架構. 所有應用元件都將部署在AWS基礎設施上. 應用程式設計必須支援快取以儘量減少使用者等待工程圖紙載入的時間. 應用程式必須能夠儲存 petabytes 資料. 解決方案設計師應該使用哪種儲存和快取的組合?

**選項**
- A. Amazon S3 帶Amazon CloudFront
- B. Amazon S3 冰川與Amazon ElastiCache
- C. Amazon Elastic Block Store(Amazon EBS)卷,配有Amazon CloudFront
- D. AWS Storage Gateway 帶Amazon ElastiCache

**答案**
A


**詳解**
正確答案是 **A**。
- A：Amazon S3 帶Amazon CloudFront。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：Amazon S3 冰川與Amazon ElastiCache。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：Amazon Elastic Block Store(Amazon EBS)卷,配有Amazon CloudFront。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：AWS Storage Gateway 帶Amazon ElastiCache。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #569

**題目**
Amazon EventBridge規則針對第三方API. 第三方API沒有收到任何來電流量. 一個解決方案架構師需要確定規則條件是否得到滿足,以及規則的目標是否被引用. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在 AWS/Events 名稱空間中檢查 Amazon CloudWatch 中的度量衡。
- B. 審查亞馬遜簡易佇列服務(Amazon SQS)中的事件死字佇列.
- C. 請檢查aWSERV0012中的事件.
- D. 請檢查access-date=中的日期值(幫助) AWS CloudTrail中事件線索.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 AWS/Events 名稱空間中檢查 Amazon CloudWatch 中的度量衡 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：審查亞馬遜簡易佇列服務(Amazon SQS)中的事件死字佇列。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：請檢查aWSERV0012中的事件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：請檢查access-date=中的日期值(幫助) AWS CloudTrail中事件線索。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #570

**題目**
一家公司的工作量很大,每週五傍晚都經營. 工作量為Amazon EC2 執行個體,在東-1區域(Region)為兩例。 通常情況下,該公司的經營時間不得超過兩次。 然而,該公司希望每星期五擴大6次,定期處理重複增加的工作量。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在 Amazon EventBridge 中建立提醒以縮放例項。
- B. 建立具有預定動作的Auto Scaling 群組(Auto Scaling group).
- C. 建立使用手動縮放的Auto Scaling 群組(Auto Scaling group).
- D. 建立使用自動縮放的Auto Scaling 群組(Auto Scaling group).

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 Amazon EventBridge 中建立提醒以縮放例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立具有預定動作的Auto Scaling 群組(Auto Scaling group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立使用手動縮放的Auto Scaling 群組(Auto Scaling group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立使用自動縮放的Auto Scaling 群組(Auto Scaling group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #571

**題目**
一家公司正在建立REST API. 該公司對TLS的使用有嚴格的要求. 公司在API端點上需要TLSv1.3. 公司還要求特定的公共第三方憑證當局(CA)簽署TLS憑證. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用本地機器建立憑證,由第三方Cimport將憑證籤入AWS Certificate Manager(ACM). 在 Amazon API Gateway 中建立一個帶有自定義域的 HTTP API。 配置使用憑證的自定義域。
- B. 在AWS Certificate Manager(ACM)中建立由第三方CA簽名的憑證. 在 Amazon API Gateway 中建立一個帶有自定義域的 HTTP API。 配置使用憑證的自定義域。
- C. 使用AWS Certificate Manager(ACM)建立第三方CA簽名的憑證. 將憑證匯入 AWS Certificate Manager(ACM). 建立帶有 Lambda 函式 URL的 AWS Lambda 函式. 配置 Lambda 函式 URL 以使用憑證。
- D. 在AWS Certificate Manager(ACM)中建立由第三方CA簽名的憑證. 建立帶有 Lambda 函式 URL的 AWS Lambda 函式. 配置 Lambda 函式 URL 以使用憑證。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用本地機器建立憑證,由第三方Cimport將憑證籤入AWS Certificate Manager(ACM). 在 Amazon API Gateway 中建立一個帶有自定義域的 HTTP API。 配置使用憑證的自定義域 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在AWS Certificate Manager(ACM)中建立由第三方CA簽名的憑證. 在 Amazon API Gateway 中建立一個帶有自定義域的 HTTP API。 配置使用憑證的自定義域 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Certificate Manager(ACM)建立第三方CA簽名的憑證. 將憑證匯入 AWS Certificate Manager(ACM). 建立帶有 Lambda 函式 URL的 AWS Lambda 函式. 配置 Lambda 函式 URL 以使用憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Certificate Manager(ACM)中建立由第三方CA簽名的憑證. 建立帶有 Lambda 函式 URL的 AWS Lambda 函式. 配置 Lambda 函式 URL 以使用憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #572

**題目**
一家公司在AWS上執行應用程式. 申請的使用量不一致。 該應用程式使用AWS Direct Connect連線到一個proposes MySQL相容的資料庫(database). 上部的資料庫(database)一致使用至少2GiB的記憶體. 公司希望將原創的資料庫(database)遷移到一個管理的AWS服務. 公司希望使用自動縮放能力來管理意想不到的工作量增加. LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 提供預設讀寫容量設定的 Amazon DynamoDB 資料庫(database)。
- B. 提供Amazon Aurora 資料庫(database),最低容量為1個Aurora容量單位。
- C. 提供Amazon Aurora無伺服器 v2 資料庫(database),最小容量為1Aurora容量單元(ACU).
- D. 為MySQL 資料庫(database)提供Amazon RDS,記憶體為2 GiB.

**答案**
C


**詳解**
正確答案是 **C**。
- C：提供Amazon Aurora無伺服器 v2 資料庫(database),最小容量為1Aurora容量單元(ACU)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：提供預設讀寫容量設定的 Amazon DynamoDB 資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：提供Amazon Aurora 資料庫(database),最低容量為1個Aurora容量單位。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為MySQL 資料庫(database)提供Amazon RDS,記憶體為2 GiB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #573

**題目**
一家公司希望使用AWS Lambda的由事件驅動的程式設計模式. 公司希望減少在Java 11上執行的Lambda功能的啟動延遲(latency). 該公司對這些應用沒有嚴格的延遲(latency)要求. 公司希望當某個功能升級時,減少冷的起步和超時的延後. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置 Lambda 提供貨幣。
- B. 增加Lambda功能的超時.
- C. 增加Lambda函式的記憶體.
- D. 配置 Lambda SnapStart。(笑聲)

**答案**
C


**詳解**
正確答案是 **C**。
- C：增加Lambda函式的記憶體。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Lambda 提供貨幣 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：增加Lambda功能的超時。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Lambda SnapStart。(笑聲)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #574

**題目**
一家金融服務公司推出了一個新的應用程式,為MySQL 資料庫(database)使用Amazon RDS. 公司使用該應用程式跟蹤股票市場趨勢. 公司每週末只需執行2小時的應用程式. 公司需要最佳化資料庫(database)型機車的執行成本. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 將MySQL 資料庫(database)的現有RDS遷移到一個Aurora Serverless v2 MySQL 資料庫(database)叢集.
- B. 將MySQL 資料庫(database)的現有RDS遷移到一個Aurora MySQL 資料庫(database)叢集.
- C. 將 MySQL 資料庫(database) 的現有 RDS 遷移到執行 MySQL 的 Amazon EC2 例項。 購買EC2 執行個體的保留。
- D. 將MySQL 資料庫(database)的現有RDS遷移到使用MySQL容器影象執行任務的Amazon彈性容器服務(Amazon ECS)叢集.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將MySQL 資料庫(database)的現有RDS遷移到一個Aurora Serverless v2 MySQL 資料庫(database)叢集。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將MySQL 資料庫(database)的現有RDS遷移到一個Aurora MySQL 資料庫(database)叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 MySQL 資料庫(database) 的現有 RDS 遷移到執行 MySQL 的 Amazon EC2 例項。 購買EC2 執行個體的保留。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將MySQL 資料庫(database)的現有RDS遷移到使用MySQL容器影象執行任務的Amazon彈性容器服務(Amazon ECS)叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #575

**題目**
一家公司在Amazon Elastic Kubernetes Service(Amazon EKS)上部署其應用,位於AWS 區域(Region)的應用程式負載平衡器(Application Load Balancer)後面. 該應用程式需要將資料儲存在PostgreSQL 資料庫(database)引擎中. 公司希望資料庫(database)中的資料能高度可用. 該公司還需要提高閱讀工作量的能力。 哪種辦法能滿足這些要求?

**選項**
- A. 建立配置全域性表格的 Amazon DynamoDB 資料庫(database) 表格。
- B. 建立一個具有多AZ部署的Amazon RDS 資料庫(database).
- C. 透過多AZ DB叢集部署,建立Amazon RDS 資料庫(database).
- D. 建立一個Amazon RDS 資料庫(database),配置為跨區域(Region)閱讀複製版.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個具有多AZ部署的Amazon RDS 資料庫(database)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立配置全域性表格的 Amazon DynamoDB 資料庫(database) 表格 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過多AZ DB叢集部署,建立Amazon RDS 資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個Amazon RDS 資料庫(database),配置為跨區域(Region)閱讀複製版。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #576

**題目**
一家公司正在透過使用Amazon API Gateway和AWS Lambda在AWS上建立一個RESTful伺服器無網路應用程式. 這個網路應用程式的使用者將按地域分佈,公司希望減少這些使用者的API請求中的延遲(latency). 解決方案設計師應使用何種終端來滿足這些要求?

**選項**
- A. 私人終點
- B. 區域終點
- C. 介面 VPC 端點(VPC endpoint)
- D. 邊緣最佳化終點

**答案**
D


**詳解**
正確答案是 **D**。
- D：邊緣最佳化終點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：私人終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：區域終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：介面 VPC 端點(VPC endpoint)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #577

**題目**
一家公司使用Amazon CloudFront發行,為其網站提供內容網頁. 公司需要確保客戶在存取公司網站時使用TLS憑證. 公司希望實現TLS憑證的建立和更新自動化. 哪種辦法能滿足這些要求?

**選項**
- A. 使用 CloudFront 安全政策建立憑證。
- B. 使用 CloudFront 原始碼 存取控制(access control)(OAC) 建立憑證。
- C. 使用 AWS Certificate Manager(ACM) 建立憑證. 對域使用DNS驗證.
- D. 使用 AWS Certificate Manager(ACM) 建立憑證. 對域使用電子郵件驗證。

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用 AWS Certificate Manager(ACM) 建立憑證. 對域使用電子郵件驗證 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 CloudFront 安全政策建立憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 CloudFront 原始碼 存取控制(access control)(OAC) 建立憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Certificate Manager(ACM) 建立憑證. 對域使用DNS驗證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #578

**題目**
一個連部署了一個沒有伺服器的應用程式,使用Amazon DynamoDB作為資料庫(database)層. 該應用程式的使用者大幅增加。 公司希望將資料庫(database)的響應時間從毫秒提高到微秒,並快取請求到資料庫(database). 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用DynamoDB加速器(DAX).
- B. 將資料庫(database)型機車遷移到Amazon Redshift型機車.
- C. 將資料庫(database)型機車遷移到Amazon RDS型機車.
- D. 使用Amazon ElastiCache用於Redis.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用DynamoDB加速器(DAX)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將資料庫(database)型機車遷移到Amazon Redshift型機車。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料庫(database)型機車遷移到Amazon RDS型機車。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon ElastiCache用於Redis。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #579

**題目**
一家公司執行一個使用Amazon RDS用於PostgreSQL的應用程式. 申請僅在工作時間的週日接受交通。 公司希望根據這種使用方式最佳化成本,減少營運開銷(operational overhead). 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS 上的例項排程器配置開始和停止排程。
- B. 關閉自動備份。 建立 資料庫(database) 的每週手動快照.
- C. 建立一個自定義的 AWS Lambda 函式,以啟動和停止基於最小CPU利用率的資料庫(database).
- D. 購買所有預留的 DB 例。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個自定義的 AWS Lambda 函式,以啟動和停止基於最小CPU利用率的資料庫(database)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 上的例項排程器配置開始和停止排程 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：關閉自動備份。 建立 資料庫(database) 的每週手動快照。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：購買所有預留的 DB 例。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #580

**題目**
一家公司使用當地附著的儲存器在房地上執行延遲(latency)敏感應用程式。 公司採用升降和轉向方式將應用程式移至AWS雲. 公司不想改變應用架構. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置帶有 Amazon EC2 例項的 Auto Scaling 群組(Auto Scaling group)。 為Lustre檔案系統使用Amazon FSx來執行應用程式.
- B. 在 Amazon EC2 例項中託管申請。 使用一個亞馬遜彈性塊儲存器(Amazon EBS)GP2捲來執行應用程式.
- C. 配置帶有 Amazon EC2 例項的 Auto Scaling 群組(Auto Scaling group)。 使用Amazon FSx用於OpenZFS檔案系統執行應用程式.
- D. 在 Amazon EC2 例項中託管申請。 使用一個Amazon彈性塊儲存器(Amazon EBS)GP3磁碟區來執行應用程式.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在 Amazon EC2 例項中託管申請。 使用一個亞馬遜彈性塊儲存器(Amazon EBS)GP2捲來執行應用程式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置帶有 Amazon EC2 例項的 Auto Scaling 群組(Auto Scaling group)。 為Lustre檔案系統使用Amazon FSx來執行應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置帶有 Amazon EC2 例項的 Auto Scaling 群組(Auto Scaling group)。 使用Amazon FSx用於OpenZFS檔案系統執行應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Amazon EC2 例項中託管申請。 使用一個Amazon彈性塊儲存器(Amazon EBS)GP3磁碟區來執行應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #581

**題目**
一家公司在Amazon EC2的事例中執行了實用的生產應用程式。 該應用程式要求至少兩個EC2例項總是執行. 一個解決方案架構師需要為應用程式設計一個高度可用和容錯的架構. 解決方案架構構建了EC2的Auto Scaling 群組(Auto Scaling group)例項. 設計師應採取哪些額外步驟來滿足這些要求?

**選項**
- A. 將Auto Scaling 群組(Auto Scaling group)最低容量設定為2架. 在1個可用區(Availability Zone)中部署1個現場,在2個可用區(Availability Zone)中部署1個現場。
- B. 設定Auto Scaling 群組(Auto Scaling group)最低容量為4架. 在1個可用區(Availability Zone)中部署2個現場,在2個可用區(Availability Zone)中部署2個現場。
- C. 將Auto Scaling 群組(Auto Scaling group)最低容量設定為2架. 在一個可用區(Availability Zone)中部署四個例項。
- D. 設定Auto Scaling 群組(Auto Scaling group)最低容量為4架. 在一個可用區(Availability Zone)中部署兩個現場例項,在第二個可用區(Availability Zone)中部署兩個現場例項。

**答案**
D


**詳解**
正確答案是 **D**。
- D：設定Auto Scaling 群組(Auto Scaling group)最低容量為4架. 在一個可用區(Availability Zone)中部署兩個現場例項,在第二個可用區(Availability Zone)中部署兩個現場例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將Auto Scaling 群組(Auto Scaling group)最低容量設定為2架. 在1個可用區(Availability Zone)中部署1個現場,在2個可用區(Availability Zone)中部署1個現場。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：設定Auto Scaling 群組(Auto Scaling group)最低容量為4架. 在1個可用區(Availability Zone)中部署2個現場,在2個可用區(Availability Zone)中部署2個現場。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將Auto Scaling 群組(Auto Scaling group)最低容量設定為2架. 在一個可用區(Availability Zone)中部署四個例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #582

**題目**
一家電子商務公司使用Amazon Route 53作為其DNS供應商. 該公司在其辦公場所和AWS雲中設有網站。 該公司的立面資料中心位於我們西-1區域(Region)附近. 公司使用eu-central-1 區域(Region)為網站主機. 公司希望儘可能減少網站的負荷時間. 哪種解決辦法能滿足這些要求?

**選項**
- A. 制定地理定位路線政策. 將臨近我們西-1的流量傳送到現場資料中心. 將臨近eu-central-1的交通傳送至eu-central-1.
- B. 建立一條簡單的路線政策,將所有接近eu-central-1的交通線路通向eu-central-1,並將所有靠近房地資料中心的交通線路通向promise資料中心.
- C. 制定延遲(latency)路線政策. 把政策和我們西一號聯絡起來
- D. 制定加權路由政策. 將eu-central-1和promesse資料中心的流量平分.

**答案**
A


**詳解**
正確答案是 **A**。
- A：制定地理定位路線政策. 將臨近我們西-1的流量傳送到現場資料中心. 將臨近eu-central-1的交通傳送至eu-central-1。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一條簡單的路線政策,將所有接近eu-central-1的交通線路通向eu-central-1,並將所有靠近房地資料中心的交通線路通向promise資料中心。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：制定延遲(latency)路線政策. 把政策和我們西一號聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：制定加權路由政策. 將eu-central-1和promesse資料中心的流量平分。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #583

**題目**
一家公司在物理磁帶上有5個PB的存檔資料. 公司需要為合規(compliance)目的再儲存10年磁帶上的資料. 公司希望在接下來的六個月內遷移到AWS. 儲存磁帶的資料中心有1Gbps上行連結網際網路連線. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 從現場的磁帶讀取資料 在本地的 NFS 儲存中預置資料。 使用AWS DataSync將資料遷移到Amazon S3 Glacier Flexible Retrieval.
- B. 使用promise 備份(backup)應用程式從磁帶中讀取資料,直接寫入Amazon S3 Glacier Deep Archive.
- C. 訂購多個具有磁帶閘道器的AWS Snowball裝置. 複製物理磁帶到雪球的虛擬磁帶. 向AWS運送雪球裝置. 建立一個生命週期政策(lifecycle policy),將磁帶移動到亞馬遜S3 Glacier Deep Archive.
- D. 配置磁帶閘道器。 在 AWS 雲中建立虛擬磁帶. 使用備份(backup)軟體將物理磁帶複製到虛擬磁帶.

**答案**
C


**詳解**
正確答案是 **C**。
- C：訂購多個具有磁帶閘道器的AWS Snowball裝置. 複製物理磁帶到雪球的虛擬磁帶. 向AWS運送雪球裝置. 建立一個生命週期政策(lifecycle policy),將磁帶移動到亞馬遜S3 Glacier Deep Archive。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：從現場的磁帶讀取資料 在本地的 NFS 儲存中預置資料。 使用AWS DataSync將資料遷移到Amazon S3 Glacier Flexible Retrieval。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用promise 備份(backup)應用程式從磁帶中讀取資料,直接寫入Amazon S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置磁帶閘道器。 在 AWS 雲中建立虛擬磁帶. 使用備份(backup)軟體將物理磁帶複製到虛擬磁帶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #584

**題目**
一家公司正在部署一個並行處理大量資料的應用程式。 該公司計劃利用Amazon EC2例項處理工作量。 網路架構必須可配置,以防止節點組共享相同的基礎硬體. 哪些聯網辦法符合這些要求?

**選項**
- A. 在分散式佈置組中執行EC2 執行個體.
- B. 將EC2例項分組到單獨的帳戶中。
- C. 配置 EC2 例項並指定租賃。
- D. 將EC2 例項配置為共享租賃。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在分散式佈置組中執行EC2 執行個體。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將EC2例項分組到單獨的帳戶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 EC2 例項並指定租賃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將EC2 例項配置為共享租賃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #585

**題目**
一個解決方案架構師正在設計一個災難復原(disaster recovery)(DR)戰略,在AWS 區域(Region)的故障中提供Amazon EC2容量. 業務要求指出,DR戰略必須滿足區域(Region)故障能力. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在區域(Region)號故障中購買現場證據。
- B. 在區域(Region)中購買EC2儲蓄計劃。
- C. 在區域(Region)的故障中購買區域儲備例項。
- D. 在區域(Region)故障中購買容量保留。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在區域(Region)的故障中購買區域儲備例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在區域(Region)號故障中購買現場證據。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在區域(Region)中購買EC2儲蓄計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在區域(Region)故障中購買容量保留。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #586

**題目**
一家公司在AWS Organizations有5個組織單位(OU)作為其組織的一部分. 每個OU與公司擁有的五個企業有關。 公司研發(R&D)業務正與公司分離,需要自己的組織. 解決方案設計師為此單獨設立了一個新的管理帳戶。 解決方案設計師下一步應在新的管理帳戶中做什麼?

**選項**
- A. 在過渡期間,使研發AWS帳戶成為兩個組織的一部分。
- B. 邀請研發AWS帳戶在研發AWS帳戶離開之前的組織後成為新組織的一部分.
- C. 在新組織中建立一個新的研發AWS帳戶. 將先前的研發AWS帳戶的資源遷移到新的研發AWS帳戶.
- D. 讓研發AWS帳戶加入新的組織. 使新的管理帳戶成為前一個組織的成員。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在新組織中建立一個新的研發AWS帳戶. 將先前的研發AWS帳戶的資源遷移到新的研發AWS帳戶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在過渡期間,使研發AWS帳戶成為兩個組織的一部分。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：邀請研發AWS帳戶在研發AWS帳戶離開之前的組織後成為新組織的一部分。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：讓研發AWS帳戶加入新的組織. 使新的管理帳戶成為前一個組織的成員。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #587

**題目**
一家公司正在設計一個解決方案,以獲取不同網路應用中的客戶活動,進行分析並作出預測. 網路應用程式中的客戶活動是不可預測的,可能會突然增加. 公司需要與其他網路應用程式整合的解決方案. 解決辦法必須包括為安全目的採取授權步驟。 哪種解決辦法能滿足這些要求?

**選項**
- A. 在Amazon彈性容器服務(Amazon ECS)容器例項前,在Amazon彈性檔案系統(Amazon EFS)中儲存公司收到的資訊。 授權由GWLB解決.
- B. 在Amazon Kinesis資料流前配置一個Amazon API Gateway端點,將公司收到的資訊儲存在Amazon S3桶中. 使用 AWS Lambda 函式解決授權.
- C. 在Amazon Kinesis Data Firehose前配置一個Amazon API Gateway端點,將公司收到的資訊儲存在Amazon S3桶中. 使用API Gateway Lambda授權程式解決授權問題.
- D. 在Amazon彈性集裝箱服務(Amazon ECS)集裝箱例項前,在Amazon彈性檔案系統(Amazon EFS)上儲存公司收到的資訊。 使用 AWS Lambda 函式解決授權.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在Amazon彈性集裝箱服務(Amazon ECS)集裝箱例項前,在Amazon彈性檔案系統(Amazon EFS)上儲存公司收到的資訊。 使用 AWS Lambda 函式解決授權。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Amazon彈性容器服務(Amazon ECS)容器例項前,在Amazon彈性檔案系統(Amazon EFS)中儲存公司收到的資訊。 授權由GWLB解決。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在Amazon Kinesis資料流前配置一個Amazon API Gateway端點,將公司收到的資訊儲存在Amazon S3桶中. 使用 AWS Lambda 函式解決授權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon Kinesis Data Firehose前配置一個Amazon API Gateway端點,將公司收到的資訊儲存在Amazon S3桶中. 使用API Gateway Lambda授權程式解決授權問題。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #588

**題目**
一家電子商務公司希望為其執行Microsoft SQL Server Entertainment Edition的Amazon RDS DB例項提供災難復原(disaster recovery)解決方案. 公司目前的恢復點目標(RPO)和恢復時間目標(RTO)為24小時. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立跨區域(Region)讀取複製品,並將讀取複製品推廣到初級例項.
- B. 使用 AWS 資料庫(Database) 遷移服務(AWS DS)建立 RDS 跨 區域(Region) 複寫(replication).
- C. 每24小時使用跨區域(Region) 複寫(replication),將本地備份複製到一個Amazon S3桶中.
- D. 每24小時將自動快照複製到另一個區域(Region).

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 AWS 資料庫(Database) 遷移服務(AWS DS)建立 RDS 跨 區域(Region) 複寫(replication)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立跨區域(Region)讀取複製品,並將讀取複製品推廣到初級例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：每24小時使用跨區域(Region) 複寫(replication),將本地備份複製到一個Amazon S3桶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：每24小時將自動快照複製到另一個區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #589

**題目**
一家公司在應用程式負載平衡器(Application Load Balancer)之後的Auto Scaling 群組(Auto Scaling group)中執行了Amazon EC2例項上的網路應用程式,該程式允許粘性會話. 網路伺服器目前託管使用者會話狀態。 公司希望確保高可用性(high availability),避免在網路伺服器中斷時出現使用者會話狀態損失. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Amazon ElastiCache 來儲存會話資料。 更新程式以使用 ElastiCache for Memcached 來儲存會話狀態。
- B. 使用 Amazon ElastiCache 來儲存會話狀態。 更新應用程式以使用 ElastiCache 用於 Redis 儲存會話狀態。
- C. 使用 AWS Storage Gateway 快取磁碟區儲存會話資料. 更新應用程式以使用 AWS Storage Gateway 快取磁碟區來儲存會話狀態。
- D. 使用Amazon RDS儲存會話狀態. 更新應用程式以使用 Amazon RDS 儲存會話狀態。

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用Amazon RDS儲存會話狀態. 更新應用程式以使用 Amazon RDS 儲存會話狀態 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon ElastiCache 來儲存會話資料。 更新程式以使用 ElastiCache for Memcached 來儲存會話狀態 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 Amazon ElastiCache 來儲存會話狀態。 更新應用程式以使用 ElastiCache 用於 Redis 儲存會話狀態 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Storage Gateway 快取磁碟區儲存會話資料. 更新應用程式以使用 AWS Storage Gateway 快取磁碟區來儲存會話狀態 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #590

**題目**
一家公司將一個MySQL 資料庫(database)從公司的立面資料中心遷移到一個用於MySQL DB例項的Amazon RDS. 公司為應付公司日常平均工作量,將RDS DB例項大小化. 每月一次,資料庫(database)在公司執行查詢報告時表現緩慢. 公司希望有能力執行報告,保持日常工作量的表現. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立資料庫(database)的讀取複製品. 引導查詢到讀取的複製品.
- B. 在資料庫(database)中建立一個備份(backup). 將 備份(backup) 恢復到另一個 DB 例項。 直接查詢新的資料庫(database).
- C. 將資料匯出至 Amazon S3. 使用Amazon Athena查詢S3 儲存桶(S3 bucket).
- D. 調整 DB 例項大小,以適應額外的工作量。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立資料庫(database)的讀取複製品. 引導查詢到讀取的複製品。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在資料庫(database)中建立一個備份(backup). 將 備份(backup) 恢復到另一個 DB 例項。 直接查詢新的資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料匯出至 Amazon S3. 使用Amazon Athena查詢S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：調整 DB 例項大小,以適應額外的工作量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #591

**題目**
一家公司透過使用Amazon Elastic Kubernetes Service(Amazon EKS)執行一個容器應用. 該應用程式包括管理客戶和下訂單的微服務. 公司需要將收到的請求傳送到適當的微服務機構。 哪種解決辦法能夠以符合成本效益的方式滿足這一要求?

**選項**
- A. 使用 AWS 負載平衡器(Load Balancer) 控制器提供 網路負載平衡器(Network Load Balancer).
- B. 使用 AWS 負載平衡器(Load Balancer) 控制器提供 應用程式負載平衡器(Application Load Balancer).
- C. 使用 AWS Lambda 函式將請求連線到 Amazon EKS.
- D. 使用Amazon API Gateway將請求連線到亞馬遜EKS.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用 AWS Lambda 函式將請求連線到 Amazon EKS。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 負載平衡器(Load Balancer) 控制器提供 網路負載平衡器(Network Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS 負載平衡器(Load Balancer) 控制器提供 應用程式負載平衡器(Application Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon API Gateway將請求連線到亞馬遜EKS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #592

**題目**
一家公司使用AWS並出售對版權影象的存取. 該公司的全球客戶基礎需要能夠快速存取這些影象. 該公司必須拒絕特定國家的使用者進入。 公司希望儘可能降低成本. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon S3儲存影象. 開啟多要素認證(MFA)和公共桶存取. 向客戶提供S3 儲存桶(S3 bucket)的連結.
- B. 使用Amazon S3儲存影象. 為每個客戶建立 IAM 使用者。 將使用者新增到擁有存取S3 儲存桶(S3 bucket)許可權的組中.
- C. 使用位於應用程式負載平衡器(ALB)後面的 Amazon EC2 例項來儲存影象。 只在公司服務的國家部署這些例項。 向客戶提供與ALB的連結,以瞭解其具體國家的情況。
- D. 使用Amazon S3儲存影象. 使用Amazon CloudFront以地理限制方式分發影象. 為每個客戶在 CloudFront 中存取資料提供簽名的 URL。

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用位於應用程式負載平衡器(ALB)後面的 Amazon EC2 例項來儲存影象。 只在公司服務的國家部署這些例項。 向客戶提供與ALB的連結,以瞭解其具體國家的情況。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon S3儲存影象. 開啟多要素認證(MFA)和公共桶存取. 向客戶提供S3 儲存桶(S3 bucket)的連結。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon S3儲存影象. 為每個客戶建立 IAM 使用者。 將使用者新增到擁有存取S3 儲存桶(S3 bucket)許可權的組中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon S3儲存影象. 使用Amazon CloudFront以地理限制方式分發影象. 為每個客戶在 CloudFront 中存取資料提供簽名的 URL 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #593

**題目**
一個解決方案架構師正在為基於Redis的解決方案設計一個非常可用的Amazon ElastiCache. 解決方案設計師需要確保故障不會在本地和AWS 區域(Region)範圍內造成效能退化或資料丟失。 該解決方案需要在節點級別和區域(Region)級別提供高可用性(high availability). 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用多AZ Redis 複寫(replication)組,帶有包含多個節點的硬碟.
- B. 使用包含多個節點的 Redis shards, 僅使用 Redis 附加檔案( AOF) 開啟的檔案。
- C. 使用一個多AZ Redis叢集,在複寫(replication)組中有一個以上的讀取複製.
- D. 使用包含多個節點的 Redis 硬塊, 並開啟自動縮放。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用多AZ Redis 複寫(replication)組,帶有包含多個節點的硬碟。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用包含多個節點的 Redis shards, 僅使用 Redis 附加檔案( AOF) 開啟的檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用一個多AZ Redis叢集,在複寫(replication)組中有一個以上的讀取複製。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用包含多個節點的 Redis 硬塊, 並開啟自動縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #594

**題目**
一家公司計劃向AWS遷移,並使用Amazon EC2 On-Demand Incents進行應用. 在遷移測試階段,一個技術小組觀察到應用程式需要很長時間才能啟動並裝入記憶體才能充分產生效果. 在下一個測試階段,哪一種解決辦法將縮短應用的發射時間?

**選項**
- A. 發射兩個或兩個以上的EC2 強制試驗。 開啟自動縮放功能,並在下一個測試階段提供EC2 On-Demand Incents.
- B. 啟動EC2 Spot 執行個體,支援應用並縮放應用,以便在下一個測試階段提供.
- C. 啟動EC2狀態 休眠開啟。 在下一個測試階段配置 EC2 自動放大熱池。
- D. 啟用EC2 附帶能力保留證。 在下一個測試階段開始額外的EC2例項.

**答案**
C


**詳解**
正確答案是 **C**。
- C：啟動EC2狀態 休眠開啟。 在下一個測試階段配置 EC2 自動放大熱池 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：發射兩個或兩個以上的EC2 強制試驗。 開啟自動縮放功能,並在下一個測試階段提供EC2 On-Demand Incents。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：啟動EC2 Spot 執行個體,支援應用並縮放應用,以便在下一個測試階段提供。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：啟用EC2 附帶能力保留證。 在下一個測試階段開始額外的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #595

**題目**
一個公司的應用程式執行在Auto Usization組的Amazon EC2 執行個體上. 公司注意到其應用程式在每週的隨機日中突然出現流量增加. 公司希望在突然流量增加時保持應用效能. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用人工縮放來改變Auto Scaling 群組(Auto Scaling group)的大小.
- B. 使用預測縮放來改變Auto Scaling 群組(Auto Scaling group)的大小.
- C. 使用動態縮放來改變Auto Scaling 群組(Auto Scaling group)的大小.
- D. 使用排程縮放來改變Auto Scaling 群組(Auto Scaling group)的大小.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用動態縮放來改變Auto Scaling 群組(Auto Scaling group)的大小。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用人工縮放來改變Auto Scaling 群組(Auto Scaling group)的大小。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用預測縮放來改變Auto Scaling 群組(Auto Scaling group)的大小。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用排程縮放來改變Auto Scaling 群組(Auto Scaling group)的大小。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #596

**題目**
電子商務應用程式使用一個執行在Amazon EC2例項上的PostgreSQL 資料庫(database)。 在每月一次的銷售活動中,資料庫(database)的使用量增加,並給應用造成資料庫(database)連線問題. 對隨後的每月銷售活動來說,流量是不可預測的,這影響了銷售預測。 公司需要在交通不可預測的增加時保持效能. 哪種解決辦法能以成本效益高的方式解決這個問題?

**選項**
- A. 將 PostgreSQL 資料庫(database) 移動到 Amazon Aurora 無伺服器 v2.
- B. 啟用 EC2 例項上的 PostgreSQL 資料庫(database) 的自動縮放,以適應增加的使用量。
- C. 為 PostgreSQL 將 PostgreSQL 資料庫(database) 遷移到 Amazon RDS , 並具有更大的例項型別。
- D. 將PostgreSQL 資料庫(database)遷移到Amazon Redshift,以適應增加的使用.

**答案**
C


**詳解**
正確答案是 **C**。
- C：為 PostgreSQL 將 PostgreSQL 資料庫(database) 遷移到 Amazon RDS , 並具有更大的例項型別 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將 PostgreSQL 資料庫(database) 移動到 Amazon Aurora 無伺服器 v2。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：啟用 EC2 例項上的 PostgreSQL 資料庫(database) 的自動縮放,以適應增加的使用量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將PostgreSQL 資料庫(database)遷移到Amazon Redshift,以適應增加的使用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #597

**題目**
一個公司透過使用Amazon API Gateway和AWS Lambda在AWS上託管一個內部無伺服器應用程式. 公司員工在每天開始使用延遲(latency)軟體時,都會報告高值的延遲(latency)出現問題. 公司希望減少延遲(latency). 哪種解決辦法能滿足這些要求?

**選項**
- A. 增加API閘道器節流限制。
- B. 在僱員開始每天使用該應用程式之前,設定一個計劃規模,以增加Lambda提供的貨幣。
- C. 建立一個 Amazon CloudWatch 提醒以啟動 Lambda 函式,作為每天開始時提醒的目標.
- D. 增加Lambda函式記憶體.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在僱員開始每天使用該應用程式之前,設定一個計劃規模,以增加Lambda提供的貨幣。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：增加API閘道器節流限制 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個 Amazon CloudWatch 提醒以啟動 Lambda 函式,作為每天開始時提醒的目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：增加Lambda函式記憶體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #598

**題目**
一家研究公司使用前提裝置生成資料進行分析。 公司希望使用AWS雲分析資料. 裝置生成 .csv 檔案並支援將資料寫入 SMB 檔案共享。 公司分析員必須能夠使用SQL命令查詢資料. 分析員將全天定期查詢。 哪些步驟的組合將以符合成本效益的方式滿足這些要求?(選三.

**選項**
- A. 在Amazon S3檔案閘道器模式的本地端部署一個AWS Storage Gateway。
- B. 在Amazon FSx檔案閘道器的本地端部署一個AWS Storage Gateway。
- C. 設定一個AWS Glue爬蟲,根據Amazon S3中的資料建立一個表格.
- D. 與EMR檔案系統(EMRFS)建立Amazon EMR叢集,以查詢Amazon S3中的資料. 提供接觸分析員的機會。
- E. 設定一個 Amazon Redshift 叢集來查詢 Amazon S3 中的資料. 提供接觸分析員的機會。
- F. 設定 Amazon Athena 查詢 Amazon S3中的資料. 提供接觸分析員的機會。

**答案**
C,E,F



**詳解**
正確答案是 **C, E**。
- C：設定一個AWS Glue爬蟲,根據Amazon S3中的資料建立一個表格。此選項符合題目條件，能有效滿足核心需求。
- E：設定一個 Amazon Redshift 叢集來查詢 Amazon S3 中的資料. 提供接觸分析員的機會。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在Amazon S3檔案閘道器模式的本地端部署一個AWS Storage Gateway。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在Amazon FSx檔案閘道器的本地端部署一個AWS Storage Gateway。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：與EMR檔案系統(EMRFS)建立Amazon EMR叢集,以查詢Amazon S3中的資料. 提供接觸分析員的機會。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #599

**題目**
一家公司希望使用亞馬遜彈性容器服務(Amazon ECS)叢集和Amazon RDS DB例項來構建和執行支付處理應用程式. 該公司將在其前提資料中心執行該應用程式,用於合規(compliance)目的. 一個解決方案架構師希望將AWS Outposts作為解決方案的一部分. 解決方案架構師正與公司的運營團隊合作,共同構建應用程式. 哪些活動是公司業務團隊的責任?(選三.

**選項**
- A. 向外站架提供彈性電源和網路連線
- B. 管理虛擬化超影片、儲存系統以及執行在外站的AWS服務
- C. 資料中心環境的實物安全和出入控制
- D. 提供外站基礎設施,包括電力供應、伺服器和外站架內的聯網裝置
- E. 外站部分的實際維修
- F. 為亞馬遜ECS叢集提供額外能力,以減輕伺服器故障和維護事件

**答案**
A,C,E



**詳解**
正確答案是 **A, C, E**。
- A：向外站架提供彈性電源和網路連線。此選項符合題目條件，能有效滿足核心需求。
- C：資料中心環境的實物安全和出入控制。此選項符合題目條件，能有效滿足核心需求。
- E：外站部分的實際維修。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：管理虛擬化超影片、儲存系統以及執行在外站的AWS服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：提供外站基礎設施,包括電力供應、伺服器和外站架內的聯網裝置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #600

**題目**
一個公司正計劃將基於TCP的應用程式遷移到公司的VPC. 該應用程式透過公司資料中心的硬體電器在非標準TCP埠上公開開放. 這個公共端點每秒可處理多達300萬個請求,低延遲(latency). 該公司要求AWS中新的公共端點具有同等水平的效能. 解決方案設計師建議如何滿足這一要求?

**選項**
- A. a 部署一個網路負載平衡器(Network Load Balancer)(NLB)。 配置在應用程式所需的TCP埠上可公開存取的NLB。
- B. 部署一架應用程式負載平衡器(Application Load Balancer)(ALB)。 配置 ALB 在應用程式需要的 TCP 埠上可公開存取。
- C. 部署一個 Amazon CloudFront 分佈,在應用程式所需的 TCP 埠上監聽。 使用 應用程式負載平衡器(Application Load Balancer) 作為原始碼。
- D. 部署一個安裝在應用程式所需的 TCP 埠的 Amazon API Gateway API。 配置 AWS Lambda 函式, 並配備處理請求的貨幣。

**答案**
A


**詳解**
正確答案是 **A**。
- A：a 部署一個網路負載平衡器(Network Load Balancer)(NLB)。 配置在應用程式所需的TCP埠上可公開存取的NLB。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：部署一架應用程式負載平衡器(Application Load Balancer)(ALB)。 配置 ALB 在應用程式需要的 TCP 埠上可公開存取 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署一個 Amazon CloudFront 分佈,在應用程式所需的 TCP 埠上監聽。 使用 應用程式負載平衡器(Application Load Balancer) 作為原始碼 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署一個安裝在應用程式所需的 TCP 埠的 Amazon API Gateway API。 配置 AWS Lambda 函式, 並配備處理請求的貨幣 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #601

**題目**
一家公司在PostgreSQL DB例項Amazon RDS上執行其關鍵的資料庫(database). 公司希望以最小的停機時間和資料損失遷移到Amazon Aurora PostgreSQL. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 為 PostgreSQL DB 例項建立一個 DB 快照(snapshot) 的 RDS , 以新增一個新的 Aurora PostgreSQL DB 叢集。
- B. 為 PostgreSQL DB 例項建立讀取的 RDS 的 Aurora 複製版。 將Aurora讀數複製到一個新的Aurora PostgreSQL DB叢集.
- C. 使用從Amazon S3匯入的資料將資料庫(database)遷移到一個Aurora PostgreSQL DB叢集.
- D. 使用 pg dump 工具支援 PostgreSQL 資料庫(database) 的 RDS。 將備份(backup)還原為新的Aurora PostgreSQL DB叢集.

**答案**
B


**詳解**
正確答案是 **B**。
- B：為 PostgreSQL DB 例項建立讀取的 RDS 的 Aurora 複製版。 將Aurora讀數複製到一個新的Aurora PostgreSQL DB叢集。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 PostgreSQL DB 例項建立一個 DB 快照(snapshot) 的 RDS , 以新增一個新的 Aurora PostgreSQL DB 叢集 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用從Amazon S3匯入的資料將資料庫(database)遷移到一個Aurora PostgreSQL DB叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 pg dump 工具支援 PostgreSQL 資料庫(database) 的 RDS。 將備份(backup)還原為新的Aurora PostgreSQL DB叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #602

**題目**
一家公司的基礎設施包括數百個使用亞馬遜彈性塊儲存器(Amazon EBS)的Amazon EC2例項. 解決方案設計師必須確保每個EC2例項在災難後都能恢復. 解決方案設計師應如何以大量努力滿足這一要求?

**選項**
- A. 取一個快照(snapshot)的EBS儲存器,該儲存器與每個EC2例項相連. 建立一個AWS CloudFormation模板,從EBS儲存中啟動新的EC2例項.
- B. 取一個快照(snapshot)的EBS儲存器,該儲存器與每個EC2例項相連. 使用AWS Elastic Beanstalk根據EC2模板設定環境,並附加EBS儲存器.
- C. 使用AWS Backup為整個EC2例項組制定備份(backup)計劃. 使用 AWS Backup API 或 AWS CLI 來加速多個 EC2 例項的恢復程序.
- D. 建立 AWS Lambda 函式,以獲取每個EC2例項所附帶的EBS儲存器的快照(snapshot)並複製亞馬遜機器影象(AMI). 建立另一個 Lambda 函式,用複製的 AMI 來進行恢復,並附加 EBS 儲存.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用AWS Backup為整個EC2例項組制定備份(backup)計劃. 使用 AWS Backup API 或 AWS CLI 來加速多個 EC2 例項的恢復程序。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：取一個快照(snapshot)的EBS儲存器,該儲存器與每個EC2例項相連. 建立一個AWS CloudFormation模板,從EBS儲存中啟動新的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：取一個快照(snapshot)的EBS儲存器,該儲存器與每個EC2例項相連. 使用AWS Elastic Beanstalk根據EC2模板設定環境,並附加EBS儲存器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 AWS Lambda 函式,以獲取每個EC2例項所附帶的EBS儲存器的快照(snapshot)並複製亞馬遜機器影象(AMI). 建立另一個 Lambda 函式,用複製的 AMI 來進行恢復,並附加 EBS 儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #603

**題目**
一家公司最近遷移到AWS雲。 公司想要一個無伺服器的解決方案,用於一個半結構資料集的大規模並行點播處理. 資料包括日誌,介質檔案,銷售交易,以及儲存在Amazon S3的IOT感測器資料. 公司希望解決方案能夠同步處理資料集中的數千項. 哪種辦法能滿足這些要求?

**選項**
- A. 使用Inline模式中的 AWS Step 函式對映狀態來並行處理資料.
- B. 使用分佈模式中的 AWS Step 函式對映狀態來並行處理資料.
- C. 使用AWS Glue並行處理資料.
- D. 使用數個AWS Lambda函式平行處理資料.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用分佈模式中的 AWS Step 函式對映狀態來並行處理資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Inline模式中的 AWS Step 函式對映狀態來並行處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Glue並行處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用數個AWS Lambda函式平行處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #604

**題目**
一個公司將在6周內將10個PB的資料遷移到Amazon S3. 目前的資料中心有一個500 Mbps上行連結到網際網路. 其他房地應用程式共用上行鏈路。 公司可以使用80%的網際網路頻寬來完成這一一次性遷移任務. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 AWS 資料同步將資料遷移到 Amazon S3 並自動驗證資料.
- B. 使用rsync將資料直接傳輸到Amazon S3.
- C. 使用AWS CLI和多個複製過程將資料直接傳送到Amazon S3.
- D. 訂購多個AWS Snowball裝置. 將資料複製到裝置中。 將裝置傳送給AWS,將資料複製到Amazon S3.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 AWS 資料同步將資料遷移到 Amazon S3 並自動驗證資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用rsync將資料直接傳輸到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS CLI和多個複製過程將資料直接傳送到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：訂購多個AWS Snowball裝置. 將資料複製到裝置中。 將裝置傳送給AWS,將資料複製到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #605

**題目**
一家公司擁有幾臺網際網路小計算機系統介面(ISCSI)網路儲存伺服器。 公司希望透過移動到AWS雲來減少這些伺服器的數量. 解決方案架構設計師必須提供低軌道導航衛星系統0001存取常用資料的機會,減少對虛擬伺服器的依賴,儘量減少基礎設施變化。 哪種解決辦法能滿足這些要求?

**選項**
- A. 部署一個Amazon S3檔案閘道器。
- B. 部署Amazon Elastic Block Store(Amazon EBS),備份為Amazon S3.
- C. 部署一個裝有儲存量的AWS Storage Gateway卷閘道器。
- D. 部署帶有快取卷的 AWS Storage Gateway 卷閘道器。

**答案**
C


**詳解**
正確答案是 **C**。
- C：部署一個裝有儲存量的AWS Storage Gateway卷閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：部署一個Amazon S3檔案閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：部署Amazon Elastic Block Store(Amazon EBS),備份為Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署帶有快取卷的 AWS Storage Gateway 卷閘道器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #606

**題目**
一個解決方案架構師正在設計一個應用程式,允許企業使用者將物件上傳到Amazon S3. 解決方案需要最大限度的物體耐久性. 物體還必須隨時隨時隨地提供。 使用者會在物件上傳後的頭30天內經常存取物件,但使用者存取超過30天的物件的可能性要小得多. 哪種解決辦法符合這些要求?

**選項**
- A. 在S3 Standard中儲存所有物件,並帶有S3壽命週期規則,在30天后將物件轉換為S3冰川.
- B. 在S3標準中儲存所有物件,並使用S3壽命週期規則,在30天后將物件過渡為S3標準-不頻繁存取(S3 Standard-IA).
- C. 在S3標準中儲存所有物件,並帶有S3生命週期規則,在30天后將物件過渡為S3 One Zone-不頻繁存取(S3 One Zone-IA).
- D. 在 S3 Intelligent-Tiering 中儲存所有物件,並帶有 S3 生命週期規則,以便在30天后將物件轉換為 S3 標準-不頻繁存取(S3 Standard-IA).

**答案**
B


**詳解**
正確答案是 **B**。
- B：在S3標準中儲存所有物件,並使用S3壽命週期規則,在30天后將物件過渡為S3標準-不頻繁存取(S3 Standard-IA)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在S3 Standard中儲存所有物件,並帶有S3壽命週期規則,在30天后將物件轉換為S3冰川。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在S3標準中儲存所有物件,並帶有S3生命週期規則,在30天后將物件過渡為S3 One Zone-不頻繁存取(S3 One Zone-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 S3 Intelligent-Tiering 中儲存所有物件,並帶有 S3 生命週期規則,以便在30天后將物件轉換為 S3 標準-不頻繁存取(S3 Standard-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #607

**題目**
一家公司已經將一個雙層的應用程式從它的立體資料中心遷移到AWS雲. 資料層是用於甲骨文的Amazon RDS的多AZ部署,具有12 TB的通用SSD Amazon彈性塊儲存器(Amazon EBS). 該應用程式旨在將資料庫(database)中的文件作為二進位制大物件(blobs)處理和儲存,平均文件大小為6 MB. 資料庫(database)的尺寸隨時間推移而增加,降低了效能,增加了儲存成本. 公司必須改進資料庫(database)的效能,需要一種高可用性和彈性的解決方案. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 減小 RDS DB 例項大小。 將儲存容量提高到24 TiB. 將儲存型別更改為磁性。
- B. 增加 RDS DB 例項大小。 將儲存容量提高到24 TiChange 儲存型別以提供 IOPS.
- C. 建立 Amazon S3 桶. 更新在 S3 儲存桶(S3 bucket) 中儲存文件的應用程式。 在現有的資料庫(database)中儲存物件後設資料.
- D. 建立 Amazon DynamoDB 表格。 更新應用程式以使用 DynamoDB。 使用AWS 資料庫(Database) 遷移服務(AWS DS)將資料從甲骨文資料庫(database)遷移到DynamoDB.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 Amazon S3 桶. 更新在 S3 儲存桶(S3 bucket) 中儲存文件的應用程式。 在現有的資料庫(database)中儲存物件後設資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：減小 RDS DB 例項大小。 將儲存容量提高到24 TiB. 將儲存型別更改為磁性 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：增加 RDS DB 例項大小。 將儲存容量提高到24 TiChange 儲存型別以提供 IOPS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon DynamoDB 表格。 更新應用程式以使用 DynamoDB。 使用AWS 資料庫(Database) 遷移服務(AWS DS)將資料從甲骨文資料庫(database)遷移到DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #608

**題目**
一家公司有一個應用程式,為部署在世界各地20 000多個零售店頭地點的客戶服務。 該應用程式包含在埠443上透過HTTPS曝光的後端網路服務. 該應用程式在應用程式負載平衡器(Application Load Balancer)(ALB)後面的Amazon EC2例項中託管. 零售地點透過公共網際網路與網路應用程式進行通訊。 公司允許每個零售地點註冊零售地點由其當地ISP分配的IP地址. 公司的安全團隊建議透過限制只存取零售地點註冊的IP地址來增強應用程式端點的安全性. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 將AWS WAF網路ACL與ALB聯絡起來. 使用ALB上的IP規則設定過濾流量. 更新規則中的IP地址以包含註冊的IP地址.
- B. 部署AWS 防火牆(Firewall) 管理者管理ALConsition 防火牆(firewall)規則,將流量限制在ALModify 防火牆(firewall)規則,以包含註冊的IP地址.
- C. 將IP地址儲存在 Amazon DynamoDB 表中。 在 ALB 上配置 AWS Lambda 授權功能,以驗證收到的請求來自注冊的IP地址.
- D. 在包含ALB公共介面的子網上配置網路 ACL(network ACL). 更新網路 ACL(network ACL)上的入侵規則,每個註冊的IP地址都有條目.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將AWS WAF網路ACL與ALB聯絡起來. 使用ALB上的IP規則設定過濾流量. 更新規則中的IP地址以包含註冊的IP地址。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：部署AWS 防火牆(Firewall) 管理者管理ALConsition 防火牆(firewall)規則,將流量限制在ALModify 防火牆(firewall)規則,以包含註冊的IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將IP地址儲存在 Amazon DynamoDB 表中。 在 ALB 上配置 AWS Lambda 授權功能,以驗證收到的請求來自注冊的IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在包含ALB公共介面的子網上配置網路 ACL(network ACL). 更新網路 ACL(network ACL)上的入侵規則,每個註冊的IP地址都有條目。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #609

**題目**
一家公司正在利用AWS湖形成系統,在AWS上建立一個資料分析平臺. 該平臺將接收不同來源的資料,如Amazon S3和Amazon RDS. 公司需要有一個安全的解決辦法,以防止獲取包含敏感資訊的部分資料。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立一個包含存取Lake Formation表格許可權的IAM角色.
- B. 建立資料過濾器以實施行級安全和單元格級安全.
- C. 建立 AWS Lambda 函式,在形成湖吸收資料之前刪除敏感資訊。
- D. 建立 AWS Lambda 函式,用於定期查詢和刪除湖形成表中的敏感資訊。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 AWS Lambda 函式,在形成湖吸收資料之前刪除敏感資訊。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個包含存取Lake Formation表格許可權的IAM角色。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立資料過濾器以實施行級安全和單元格級安全。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 AWS Lambda 函式,用於定期查詢和刪除湖形成表中的敏感資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #610

**題目**
一個連部署了在VPC中執行的Amazon EC2 執行個體. EC2例項將源資料載入到Amazon S3桶中,以便將來可以處理資料. 根據合規(compliance)法律,資料不得透過公共網際網路傳輸。 公司的premise資料中心中的伺服器會消耗執行在EC2例項上的應用程式的輸出. 哪種解決辦法能滿足這些要求?

**選項**
- A. 為Amazon EC2部署一個介面VPC 端點(VPC endpoint). 建立公司與VPC之間的AWS站點對站點VPN連線.
- B. 為Amazon S3部署一個閘道器VPC 端點(VPC endpoint). 搭建AWS Direct Connect連線在premise網路和VPC之間.
- C. 設定從VPC到S3桶的AWS Transit Gateway連線. 建立公司與VPC之間的AWS站點對站點VPN連線.
- D. 設定有通往NAT閘道器的路由的代理 EC2 例項。 配置代理 EC2 例項以獲取 S3 資料並反饋應用程式例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：為Amazon S3部署一個閘道器VPC 端點(VPC endpoint). 搭建AWS Direct Connect連線在premise網路和VPC之間。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為Amazon EC2部署一個介面VPC 端點(VPC endpoint). 建立公司與VPC之間的AWS站點對站點VPN連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：設定從VPC到S3桶的AWS Transit Gateway連線. 建立公司與VPC之間的AWS站點對站點VPN連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：設定有通往NAT閘道器的路由的代理 EC2 例項。 配置代理 EC2 例項以獲取 S3 資料並反饋應用程式例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #611

**題目**
一家公司擁有一個基於REST的介面的應用程式,允許第三方供應商在近實時接收資料. 一旦收到,應用程式將處理和儲存資料,供進一步分析。 該應用程式執行在 Amazon EC2 例項上。 第三方供應商在嚮應用程式傳送資料時收到了許多503件無法獲取的服務錯誤。 當資料量猛增時,計算能力達到最大極限,應用程式無法處理所有請求. 哪個解決方案設計師建議提供更可擴充套件的解決方案?

**選項**
- A. 使用 Amazon Kinesis 資料流來吸收資料. 使用 AWS Lambda 函式處理資料。
- B. 在現有應用程式之上使用 Amazon API Gateway。 為第三方供應商制定配額限制的使用計劃。
- C. 使用亞馬遜簡易通知服務(Amazon SNS)來攝取資料. 將EC2 執行個體放在Auto Scaling 群組(Auto Scaling group)後面。
- D. 將應用程式重新包裝為容器。 使用亞馬遜彈性容器服務(Amazon ECS),使用使用Auto Scaling 群組(Auto Scaling group)的EC2啟動類型部署該應用程式。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 Amazon Kinesis 資料流來吸收資料. 使用 AWS Lambda 函式處理資料 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在現有應用程式之上使用 Amazon API Gateway。 為第三方供應商制定配額限制的使用計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用亞馬遜簡易通知服務(Amazon SNS)來攝取資料. 將EC2 執行個體放在Auto Scaling 群組(Auto Scaling group)後面。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將應用程式重新包裝為容器。 使用亞馬遜彈性容器服務(Amazon ECS),使用使用Auto Scaling 群組(Auto Scaling group)的EC2啟動類型部署該應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #612

**題目**
一家公司有一個在一傢俬人子網中執行Amazon EC2 執行個體的應用程式. 應用程式需要處理Amazon S3桶的敏感資訊. 該應用程式不得使用網際網路連線S3 儲存桶(S3 bucket). 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置網際網路閘道器。 更新S3 儲存桶政策(bucket policy),允許從網際網路閘道器存取. 更新應用程式以使用新的網際網路閘道器。
- B. 配置 VPN 連線。 更新S3 儲存桶政策(bucket policy),允許從VPN連線存取. 更新應用程式以使用新的 VPN 連線。
- C. 配置 NAT 閘道器。 更新S3 儲存桶政策(bucket policy),允許從NAT閘道器存取. 更新應用程式以使用新的NAT閘道器。
- D. 配置一個VPC 端點(VPC endpoint). 更新S3 儲存桶政策(bucket policy),允許從VPC 端點(VPC endpoint)進入. 更新應用程式以使用新的 VPC 端點(VPC endpoint).

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置網際網路閘道器。 更新S3 儲存桶政策(bucket policy),允許從網際網路閘道器存取. 更新應用程式以使用新的網際網路閘道器 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置 VPN 連線。 更新S3 儲存桶政策(bucket policy),允許從VPN連線存取. 更新應用程式以使用新的 VPN 連線 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 NAT 閘道器。 更新S3 儲存桶政策(bucket policy),允許從NAT閘道器存取. 更新應用程式以使用新的NAT閘道器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個VPC 端點(VPC endpoint). 更新S3 儲存桶政策(bucket policy),允許從VPC 端點(VPC endpoint)進入. 更新應用程式以使用新的 VPC 端點(VPC endpoint)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #613

**題目**
一家公司使用Amazon Elastic Kubernetes Service(Amazon EKS)來執行一個容器應用程式. EKS叢集在Kubernetes秘密物件中儲存敏感資訊. 公司希望確保資訊加密. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用容器應用程式透過使用AWS Key Management Service(AWS KMS)加密資訊.
- B. 透過使用AWS Key Management Service(AWS KMS)在EKS叢集中啟用秘密加密(encryption).
- C. 執行 AWS Lambda 函式,透過使用 AWS Key Management Service(AWS KMS)加密資訊.
- D. 使用AWS Systems Manager引數儲存器透過使用AWS Key Management Service(AWS KMS)加密資訊.

**答案**
B


**詳解**
正確答案是 **B**。
- B：透過使用AWS Key Management Service(AWS KMS)在EKS叢集中啟用秘密加密(encryption)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用容器應用程式透過使用AWS Key Management Service(AWS KMS)加密資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：執行 AWS Lambda 函式,透過使用 AWS Key Management Service(AWS KMS)加密資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Systems Manager引數儲存器透過使用AWS Key Management Service(AWS KMS)加密資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #614

**題目**
一家公司正在設計一個新的多層網路應用程式,由下列元件組成: • 作為Auto Usization小組的一部分,在Amazon EC2例項上執行的網路和應用伺服器 一個用於資料儲存的Amazon RDS DB例項 A解決方案架構師需要限制對應用程式伺服器的存取,這樣只有網路伺服器才能存取. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在應用程式伺服器前部署 AWS PrivateLink。 配置網路 ACL(network ACL),只允許網頁伺服器存取應用程式伺服器.
- B. 在應用程式伺服器前部署一個VPC 端點(VPC endpoint)。 配置安全群組(security group),只允許網頁伺服器存取應用程式伺服器.
- C. 部署一個網路負載平衡器(Network Load Balancer),目標組包含應用程式伺服器的Auto Scaling 群組(Auto Scaling group). 配置網路 ACL(network ACL),只允許網路伺服器存取應用程式伺服器.
- D. 部署一個應用程式負載平衡器(Application Load Balancer),目標組包含應用程式伺服器的Auto Scaling 群組(Auto Scaling group). 配置安全群組(security group),只允許網路伺服器存取應用程式伺服器.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在應用程式伺服器前部署 AWS PrivateLink。 配置網路 ACL(network ACL),只允許網頁伺服器存取應用程式伺服器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在應用程式伺服器前部署一個VPC 端點(VPC endpoint)。 配置安全群組(security group),只允許網頁伺服器存取應用程式伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署一個網路負載平衡器(Network Load Balancer),目標組包含應用程式伺服器的Auto Scaling 群組(Auto Scaling group). 配置網路 ACL(network ACL),只允許網路伺服器存取應用程式伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署一個應用程式負載平衡器(Application Load Balancer),目標組包含應用程式伺服器的Auto Scaling 群組(Auto Scaling group). 配置安全群組(security group),只允許網路伺服器存取應用程式伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #615

**題目**
一家公司在Amazon Elastic Kubernetes Service(Amazon EKS)上執行一個關鍵的客戶化應用程式. 該應用程式有微服務架構. 公司需要實施一個在集中地點收集、彙總和總結應用程式的計量和日誌的解決方案。 哪種解決辦法符合這些要求?

**選項**
- A. 在現有的EKS叢集中執行Amazon CloudWatch代理. 檢視雲表控制檯的引數和日誌。
- B. 在現有 EKS 叢集中執行 AWS App Mesh。 檢視 App Mesh 控制檯中的引數和日誌。
- C. 配置 AWS CloudTrail 以獲取資料事件. 透過使用Amazon OpenSearch Service查詢雲軌.
- D. 在現有的EKS叢集中配置 Amazon CloudWatch 容器透視. 檢視雲表控制檯的引數和日誌。

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 AWS CloudTrail 以獲取資料事件. 透過使用Amazon OpenSearch Service查詢雲軌。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在現有的EKS叢集中執行Amazon CloudWatch代理. 檢視雲表控制檯的引數和日誌。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在現有 EKS 叢集中執行 AWS App Mesh。 檢視 App Mesh 控制檯中的引數和日誌 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在現有的EKS叢集中配置 Amazon CloudWatch 容器透視. 檢視雲表控制檯的引數和日誌。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #616

**題目**
一家公司在AWS上部署了最新產品. 該產品在網路負載平衡器(Network Load Balancer)後方的Auto Scaling 群組(Auto Scaling group)中執行. 公司將產品物品存放在Amazon S3桶中。 該公司最近經歷了對其系統的惡意攻擊。 公司需要一個解決方案,持續監控AWS帳戶中的惡意活動,工作量,以及S3 儲存桶(S3 bucket)的存取模式. 解決方案還必須報告可疑活動並在儀表板上顯示資訊。 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 Amazon Macie 監控結果並向 AWS Config 報告.
- B. 配置亞馬遜巡視器,以監控結果並向AWS CloudTrail報告.
- C. 配置 Amazon GuardDuty 監控結果並向 AWS 安全樞紐報告.
- D. 配置AWS Config,以監控結果並向Amazon EventBridge報告.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 Amazon Macie 監控結果並向 AWS Config 報告。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置亞馬遜巡視器,以監控結果並向AWS CloudTrail報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon GuardDuty 監控結果並向 AWS 安全樞紐報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置AWS Config,以監控結果並向Amazon EventBridge報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #617

**題目**
一個公司想將一個professes資料中心遷移到AWS. 資料中心託管一個儲存伺服器,將資料儲存在一個基於NFS的檔案系統中. 儲存伺服器持有200GB的資料. 公司需要不間斷地將資料遷移到現有的服務. AWS中的多種資源必須能夠透過使用NFS協議存取資料. 哪些步驟的組合將以符合成本效益的方式滿足這些要求?(選二.

**選項**
- A. 為 Lustre 檔案系統建立 Amazon FSx。
- B. 建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統.
- C. 建立 Amazon S3 桶接收資料.
- D. 手動使用作業系統複製命令將資料推向AWS目的地.
- E. 在預設資料中心安裝 AWS 資料同步代理。 使用預設位置和 AWS 之間的資料同步任務。

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：為 Lustre 檔案系統建立 Amazon FSx 。此選項符合題目條件，能有效滿足核心需求。
- B：建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：建立 Amazon S3 桶接收資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：手動使用作業系統複製命令將資料推向AWS目的地。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在預設資料中心安裝 AWS 資料同步代理。 使用預設位置和 AWS 之間的資料同步任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #618

**題目**
一家公司希望使用Amazon FSx作為Windows檔案伺服器,用於其Amazon EC2例項,這些例項將 SMB 檔案共享掛載在我們東-1 區域(Region) 的卷中. 公司對計劃系統維護或計劃外服務中斷的恢復點目標(RPO)為5分鐘. 公司需要複製檔案系統到我們-西-2 區域(Region). 任何使用者五年內不得刪除複製的資料。 哪種解決辦法能滿足這些要求?

**選項**
- A. 為Windows File Server檔案系統在我們-East-1建立一個具有單AZ 2部署型別的FSx. 使用 AWS Backup 建立每日 備份(backup) 計劃,其中包含 備份(backup) 規則,將 備份(backup) 複製到我們西-2. 以 合規(compliance) 模式配置 AWS Backup Vault Lock, 用於我們西-2 的目標金庫。 配置至少5 年。
- B. 為Windows File Server在 us-east-1中建立一個具有多AZ部署型別的FSx檔案系統. 使用 AWS Backup 建立每日 備份(backup) 計劃,其中包含 備份(backup) 規則,將 備份(backup) 複製到我們-西-2. 在治理模式中配置 AWS Backup Vault Lock, 用於我們-西-2 的目標金庫. 配置至少5年的長度。
- C. 為Windows File Server在 us-east-1中建立一個具有多AZ部署型別的FSx檔案系統. 使用 AWS Backup 建立每日 備份(backup) 計劃,其中包含 備份(backup) 規則,將 備份(backup) 複製到我們西-2. 以 合規(compliance) 模式配置 AWS Backup Vault Lock, 用於我們西-2 的目標金庫。 配置至少5 年。
- D. 為Windows File Server檔案系統在我們-East-1建立一個具有單AZ 2部署型別的FSx. 使用 AWS Backup 建立每日 備份(backup) 計劃,其中包含 備份(backup) 規則,將 備份(backup) 複製到我們-西-2. 在治理模式中配置 AWS Backup Vault Lock, 用於我們-西-2 的目標金庫. 配置至少5年的長度。

**答案**
C


**詳解**
正確答案是 **C**。
- C：為Windows File Server在 us-east-1中建立一個具有多AZ部署型別的FSx檔案系統. 使用 AWS Backup 建立每日 備份(backup) 計劃,其中包含 備份(backup) 規則,將 備份(backup) 複製到我們西-2. 以 合規(compliance) 模式配置 AWS Backup Vault Lock, 用於我們西-2 的目標金庫。 配置至少5 年 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為Windows File Server檔案系統在我們-East-1建立一個具有單AZ 2部署型別的FSx. 使用 AWS Backup 建立每日 備份(backup) 計劃,其中包含 備份(backup) 規則,將 備份(backup) 複製到我們西-2. 以 合規(compliance) 模式配置 AWS Backup Vault Lock, 用於我們西-2 的目標金庫。 配置至少5 年 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為Windows File Server在 us-east-1中建立一個具有多AZ部署型別的FSx檔案系統. 使用 AWS Backup 建立每日 備份(backup) 計劃,其中包含 備份(backup) 規則,將 備份(backup) 複製到我們-西-2. 在治理模式中配置 AWS Backup Vault Lock, 用於我們-西-2 的目標金庫. 配置至少5年的長度 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為Windows File Server檔案系統在我們-East-1建立一個具有單AZ 2部署型別的FSx. 使用 AWS Backup 建立每日 備份(backup) 計劃,其中包含 備份(backup) 規則,將 備份(backup) 複製到我們-西-2. 在治理模式中配置 AWS Backup Vault Lock, 用於我們-西-2 的目標金庫. 配置至少5年的長度 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #619

**題目**
一個解決方案架構師正在為一個希望透過AWS Organizations為開發者提供單個AWS帳戶的公司設計一個安全解決方案,同時保持標準的安全控制. 由於單個開發者會擁有AWS帳戶的根使用者級存取許可權,解決方案架構師希望確保適用於新開發者帳戶的強制AWS CloudTrail配置不會被修改. 哪些行動符合這些要求?

**選項**
- A. 建立禁止更改 CloudTrail 的 IAM 政策(IAM policy)。 並附在根使用者上。
- B. 在 CloudTrail 在開發者帳戶內建立新的線索, 並啟用組織線索選項。
- C. 建立服務控制政策(SCP),禁止更改CloudTrail,並附上開發商帳戶.
- D. 為 CloudTrail 建立一個服務連結的角色,其政策條件只允許從管理帳戶中的亞馬遜資源名稱(ARN)進行更改.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立服務控制政策(SCP),禁止更改CloudTrail,並附上開發商帳戶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立禁止更改 CloudTrail 的 IAM 政策(IAM policy)。 並附在根使用者上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 CloudTrail 在開發者帳戶內建立新的線索, 並啟用組織線索選項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 CloudTrail 建立一個服務連結的角色,其政策條件只允許從管理帳戶中的亞馬遜資源名稱(ARN)進行更改。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #620

**題目**
一個連正在計劃在AWS雲中部署一個業務關鍵應用程式. 該應用需要具有一致的低延遲(latency)效能的持久儲存. 哪種型別的儲存應是一個解決方案設計師建議滿足這些要求?

**選項**
- A. 例項儲存量
- B. Amazon ElastiCache 用於模擬叢集
- C. 提供 IOPS SSD 亞馬遜彈性塊儲存器(Amazon EBS)
- D. 吞吐量(Throughput) 最佳化HDD 亞馬遜彈性塊儲存器(Amazon EBS) 體積

**答案**
C


**詳解**
正確答案是 **C**。
- C：提供 IOPS SSD 亞馬遜彈性塊儲存器(Amazon EBS)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：例項儲存量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：Amazon ElastiCache 用於模擬叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：吞吐量(Throughput) 最佳化HDD 亞馬遜彈性塊儲存器(Amazon EBS) 體積。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #621

**題目**
一個線上照片分享公司將其照片儲存在Amazon S3 儲存桶中,該水桶存在於我們西-1 區域(Region). 公司需要將所有新照片的複製存放在我們東1區域(Region)上. 以何種辦法滿足這一要求?

**選項**
- A. 使用 S3 Cross-Region Replication 從現有的 S3 儲存桶(S3 bucket) 複製到第二個 S3 儲存桶(S3 bucket)。
- B. 建立現有S3 儲存桶(S3 bucket)的跨源資源共享配置. 在 CORS 規則的允許的Origin 元素中指定 us- east - 1。
- C. 建立第二個S3 儲存桶(S3 bucket),我們東-1跨多個可用區(Availability Zones). 建立 S3 生命週期規則,將照片儲存到第二個 S3 儲存桶(S3 bucket).
- D. 在 Our-east-1 中建立第二個 S3 儲存桶(S3 bucket)。 配置關於物件建立的 S3 事件通知並更新事件, 以引用 AWS Lambda 函式, 將現有的 S3 儲存桶(S3 bucket) 照片複製到第二個 S3 儲存桶(S3 bucket)。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 S3 Cross-Region Replication 從現有的 S3 儲存桶(S3 bucket) 複製到第二個 S3 儲存桶(S3 bucket) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立現有S3 儲存桶(S3 bucket)的跨源資源共享配置. 在 CORS 規則的允許的Origin 元素中指定 us- east - 1 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立第二個S3 儲存桶(S3 bucket),我們東-1跨多個可用區(Availability Zones). 建立 S3 生命週期規則,將照片儲存到第二個 S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Our-east-1 中建立第二個 S3 儲存桶(S3 bucket)。 配置關於物件建立的 S3 事件通知並更新事件, 以引用 AWS Lambda 函式, 將現有的 S3 儲存桶(S3 bucket) 照片複製到第二個 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #622

**題目**
一家公司正在為其使用者建立新的網路應用程式。 該應用程式將包括一個靜態的單頁和一個持久的資料庫(database)層. 該應用程式在凌晨4小時將有數百萬使用者,但其餘時間該應用程式只有幾千個使用者. 公司的資料架構師們要求有能力迅速發展他們的計劃. 哪些解決方案能滿足這些要求並提供MOST 可擴展性(scalability)?(選二.

**選項**
- A. 部署Amazon DynamoDB作為資料庫(database)解決方案. 提供需求能力。
- B. 部署Amazon Aurora作為資料庫(database)解決方案. 選擇無伺服器 DB 引擎模式。
- C. 部署Amazon DynamoDB作為資料庫(database)解決方案. 確保DynamoDB自動縮放啟用.
- D. 將靜態內容放入Amazon S3桶中. 提供以S3 儲存桶(S3 bucket)為原產地的Amazon CloudFront分銷.
- E. 在Auto Usization 組中的Amazon EC2例項中,為靜態內容部署網路伺服器。 配置例項, 以定期重新整理 Amazon 彈性檔案系統( Amazon EFS) 卷的內容。

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：部署Amazon DynamoDB作為資料庫(database)解決方案. 確保DynamoDB自動縮放啟用。此選項符合題目條件，能有效滿足核心需求。
- D：將靜態內容放入Amazon S3桶中. 提供以S3 儲存桶(S3 bucket)為原產地的Amazon CloudFront分銷。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：部署Amazon DynamoDB作為資料庫(database)解決方案. 提供需求能力。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：部署Amazon Aurora作為資料庫(database)解決方案. 選擇無伺服器 DB 引擎模式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在Auto Usization 組中的Amazon EC2例項中,為靜態內容部署網路伺服器。 配置例項, 以定期重新整理 Amazon 彈性檔案系統( Amazon EFS) 卷的內容 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #623

**題目**
一家公司使用Amazon API Gateway來管理第三方服務提供商獲取的REST API. 公司必須保護REST API免受SQL注射和跨場指令碼攻擊. 滿足這些要求的MOST業務效率解決方案是什麼?

**選項**
- A. 配置 AWS Shield.
- B. 配置 AWS WAF.
- C. 設定API Gateway,配有Amazon CloudFront發行版. 在 CloudFront 中配置 AWS Shield。
- D. 設定API Gateway,配有Amazon CloudFront發行版. 在 CloudFront 中配置 AWS WAF。

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 AWS Shield。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置 AWS WAF。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：設定API Gateway,配有Amazon CloudFront發行版. 在 CloudFront 中配置 AWS Shield 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：設定API Gateway,配有Amazon CloudFront發行版. 在 CloudFront 中配置 AWS WAF 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #624

**題目**
一家公司希望為使用者提供AWS資源的存取. 公司擁有1500個使用者,並透過公司網路上的Active Directory使用者組管理其存取promess資源. 然而,公司並不希望使用者必須保持另一個身份才能存取資源. 一個解決方案架構師必須管理使用者對AWS資源的存取,同時保留對現場資源的存取. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 為公司的每個使用者建立IAM使用者. 向每個使用者附上適當的政策。
- B. 使用 Amazon Cognitto 並有一個活動目錄使用者池. 以所附的適當政策建立作用。
- C. 界定交叉帳戶的作用,並附上適當的政策。 將角色對映到活動目錄組.
- D. 配置安全 Assertion 標定語言(SAML) 2 0 基於 Federation. 使用相關政策建立角色 將角色對映到活動目錄組。

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置安全 Assertion 標定語言(SAML) 2 0 基於 Federation. 使用相關政策建立角色 將角色對映到活動目錄組。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為公司的每個使用者建立IAM使用者. 向每個使用者附上適當的政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 Amazon Cognitto 並有一個活動目錄使用者池. 以所附的適當政策建立作用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：界定交叉帳戶的作用,並附上適當的政策。 將角色對映到活動目錄組。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #625

**題目**
一家公司在多個應用程式負載平衡器背後主持一個網站. 該公司在世界各地對其內容擁有不同的發行權. 一個解決方案架構師需要確保使用者得到正確的內容服務而不侵犯發行權. 解決方案設計師應選擇何種配置來滿足這些要求?

**選項**
- A. 配置 Amazon CloudFront 與 AWS WAF.
- B. 用 AWS WAF 配置應用程式負載平衡器
- C. 配置 Amazon Route 53 與地理定位策略
- D. 配置 Amazon Route 53 並配有地理近似路由政策

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 Amazon CloudFront 與 AWS WAF。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：用 AWS WAF 配置應用程式負載平衡器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon Route 53 與地理定位策略。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon Route 53 並配有地理近似路由政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #626

**題目**
一家公司將其資料儲存在房地。 資料數量正在超過公司現有能力。 公司希望將其資料從現場位置遷移到Amazon S3桶. 公司需要一種在傳輸後自動驗證資料完整性的解決方案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 訂購AWS Snowball Edge裝置. 配置 Snowball 邊緣裝置, 執行線上資料傳輸到 S3 儲存桶(S3 bucket)
- B. 在辦公地點部署AWS資料同步代理. 配置 DataSync 代理以進行線上資料傳輸到 S3 儲存桶(S3 bucket)。
- C. 在房地上建立 Amazon S3 檔案閘道器 配置 S3 檔案閘道器, 執行線上資料傳輸到 S3 儲存桶(S3 bucket)
- D. 在 Amazon 配置 S3 Transfer Acceleration 的加速器。 配置加速器進行線上資料傳輸到S3 儲存桶(S3 bucket).

**答案**
B


**詳解**
正確答案是 **B**。
- B：在辦公地點部署AWS資料同步代理. 配置 DataSync 代理以進行線上資料傳輸到 S3 儲存桶(S3 bucket) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：訂購AWS Snowball Edge裝置. 配置 Snowball 邊緣裝置, 執行線上資料傳輸到 S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在房地上建立 Amazon S3 檔案閘道器 配置 S3 檔案閘道器, 執行線上資料傳輸到 S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Amazon 配置 S3 Transfer Acceleration 的加速器。 配置加速器進行線上資料傳輸到S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #627

**題目**
一個公司想將兩個DNS伺服器遷移到AWS. 伺服器總共託管約200個區域,平均每天收到100萬個請求。 公司希望儘量擴大可用性,同時儘量減少與兩臺伺服器管理有關的營運開銷(operational overhead). 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 在 Amazon Route 53 控制檯匯入區檔案中新建200個主機區。
- B. 推出單一大型 Amazon EC2 例項匯入區牌. 配置 Amazon CloudWatch 提醒和通知以提醒公司任何停機時間.
- C. 透過使用AWS伺服器遷移服務(AWS SMS)將伺服器遷移到AWS. 配置 Amazon CloudWatch 提醒和通知以提醒公司任何停機時間.
- D. 在兩座可用區(Availability Zones)的Auto Scaling 群組(Auto Scaling group)發射一個Amazon EC2例項. 匯入區域檔案。 將Auto Scaling 群組(Auto Scaling group)的預期容量設定為1,最大容量設定為3. 根據 CPU 利用率配置縮放提醒。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 Amazon Route 53 控制檯匯入區檔案中新建200個主機區 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：推出單一大型 Amazon EC2 例項匯入區牌. 配置 Amazon CloudWatch 提醒和通知以提醒公司任何停機時間。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過使用AWS伺服器遷移服務(AWS SMS)將伺服器遷移到AWS. 配置 Amazon CloudWatch 提醒和通知以提醒公司任何停機時間。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在兩座可用區(Availability Zones)的Auto Scaling 群組(Auto Scaling group)發射一個Amazon EC2例項. 匯入區域檔案。 將Auto Scaling 群組(Auto Scaling group)的預期容量設定為1,最大容量設定為3. 根據 CPU 利用率配置縮放提醒。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #628

**題目**
一家全球性公司在AWS Organizations的多個AWS帳戶中執行其應用. 公司的應用程式使用多段上傳,將資料上傳到跨AWS區域的多個Amazon S3桶. 公司希望為成本合規(compliance)目的報告不完整的多段上傳. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 配置 AWS Config 以規則報告不完整的多段上傳物件計數。
- B. 建立服務控制策略( SCP) 來報告不完整的多段上傳物件計數。
- C. 配置 S3 Storage Lens 報告不完整的多段上傳物件計數。
- D. 建立 S3 Multi-Region Access Point 來報告不完整的多段上傳物件計數。

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 S3 Storage Lens 報告不完整的多段上傳物件計數 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 AWS Config 以規則報告不完整的多段上傳物件計數 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立服務控制策略( SCP) 來報告不完整的多段上傳物件計數 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 S3 Multi-Region Access Point 來報告不完整的多段上傳物件計數 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #629

**題目**
一家公司在Amazon RDS上為MySQL經營生產資料庫(database). 公司出於安全合規(compliance)的原因,希望升級資料庫(database)版本. 由於資料庫(database)包含關鍵資料,公司希望有一個快速的解決方案來升級和測試功能而不丟失任何資料. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立 RDS 手冊 快照(snapshot). 為MySQL升級到Amazon RDS的新版本.
- B. 使用本地備份(backup)並恢復. 將資料恢復到升級後的新版本Amazon RDS的MySQL.
- C. 使用AWS 資料庫(Database)遷移服務(AWS DS)將資料複製到升級版的Amazon RDS,用於MySQL.
- D. 使用Amazon RDS 藍色/綠色部署,部署並測試生產變化.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用Amazon RDS 藍色/綠色部署,部署並測試生產變化。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 RDS 手冊 快照(snapshot). 為MySQL升級到Amazon RDS的新版本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用本地備份(backup)並恢復. 將資料恢復到升級後的新版本Amazon RDS的MySQL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS 資料庫(Database)遷移服務(AWS DS)將資料複製到升級版的Amazon RDS,用於MySQL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #630

**題目**
一個解決方案架構師正在創造一個每天執行一次的資料處理工作,並且最多需要2小時才能完成. 如果工作中斷,它必須從一開始就重新開始. 解決方案設計師應如何以成本效益高的方式解決這一問題?

**選項**
- A. 建立一個在 Amazon EC2 保留例項上本地執行的指令碼, 由 cron 任務觸發。
- B. 建立一個由 Amazon EventBridge 計劃事件觸發的 AWS Lambda 函式.
- C. 使用亞馬遜彈性容器服務(Amazon ECS) 遠門任務,由Amazon EventBridge計劃活動引發.
- D. 使用在 Amazon EC2 上執行的亞馬遜彈性容器服務(Amazon ECS)任務,由 Amazon EventBridge 計劃事件觸發.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用亞馬遜彈性容器服務(Amazon ECS) 遠門任務,由Amazon EventBridge計劃活動引發。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個在 Amazon EC2 保留例項上本地執行的指令碼, 由 cron 任務觸發 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個由 Amazon EventBridge 計劃事件觸發的 AWS Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用在 Amazon EC2 上執行的亞馬遜彈性容器服務(Amazon ECS)任務,由 Amazon EventBridge 計劃事件觸發。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #631

**題目**
一家社交媒體公司希望將自己的資料庫(database)使用者簡介,關係和互動儲存在AWS雲中. 公司需要一個應用程式來監控資料庫(database)中的任何變化. 應用程式需要分析資料實體之間的關係,並向使用者提出建議。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用亞馬遜海王星儲存資訊. 使用 Amazon Kinesis 資料流處理 資料庫(database) 中的更改.
- B. 使用亞馬遜海王星儲存資訊. 使用海王星流處理資料庫(database)中的變化.
- C. 使用Amazon Quantum Ledger 資料庫(Database)(Amazon QLDB)儲存資訊. 使用 Amazon Kinesis 資料流處理 資料庫(database).
- D. 使用Amazon Quantum Ledger 資料庫(Database)(Amazon QLDB)儲存資訊. 使用海王星流處理資料庫(database)中的變化.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用亞馬遜海王星儲存資訊. 使用海王星流處理資料庫(database)中的變化。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用亞馬遜海王星儲存資訊. 使用 Amazon Kinesis 資料流處理 資料庫(database) 中的更改。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Quantum Ledger 資料庫(Database)(Amazon QLDB)儲存資訊. 使用 Amazon Kinesis 資料流處理 資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon Quantum Ledger 資料庫(Database)(Amazon QLDB)儲存資訊. 使用海王星流處理資料庫(database)中的變化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #632

**題目**
一個公司正在建立一個新的應用程式,它將儲存大量資料. 資料將按小時分析,並將由部署在多個可用區(Availability Zones)上的幾個Amazon EC2 Linux例項加以修改。 今後六個月所需的儲存空間將繼續增加。 哪個儲存解決方案應該由設計師建議滿足這些要求?

**選項**
- A. 在Amazon S3冰川中儲存資料. 更新 S3 Glacier 金庫政策, 允許存取應用程式例項。
- B. 將資料儲存在亞馬遜彈性塊儲存器(Amazon EBS)的體積中. 在應用程式例項上掛載 EBS 磁碟區。
- C. 資料儲存在亞馬遜彈性檔案系統(Amazon EFS)的檔案系統中. 在應用程式例項上掛載檔案系統。
- D. 將資料儲存在Amazon Elastic Block Store(Amazon EBS)中,提供了應用例項之間共享的IOPS量。

**答案**
C


**詳解**
正確答案是 **C**。
- C：資料儲存在亞馬遜彈性檔案系統(Amazon EFS)的檔案系統中. 在應用程式例項上掛載檔案系統 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Amazon S3冰川中儲存資料. 更新 S3 Glacier 金庫政策, 允許存取應用程式例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將資料儲存在亞馬遜彈性塊儲存器(Amazon EBS)的體積中. 在應用程式例項上掛載 EBS 磁碟區 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料儲存在Amazon Elastic Block Store(Amazon EBS)中,提供了應用例項之間共享的IOPS量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #633

**題目**
一家公司管理一個為PostgreSQL Multi-AZ DB例項儲存Amazon RDS資料的程式. 客流量增加造成效能問題. 公司認定資料庫(database)查詢是表現緩慢的主要原因. 一個解決方案設計師應該做些什麼來提高應用程式的效能?

**選項**
- A. 提供從多AZ備用複製品的流量
- B. 配置 DB 例項以使用傳輸加速。
- C. 從源 DB 例項建立已讀複製。 提供閱讀流量 從閱讀複製品。
- D. 使用應用程式和Amazon RDS之間的Amazon Kinesis Data Firehose來增加資料庫(database)請求的貨幣.

**答案**
C


**詳解**
正確答案是 **C**。
- C：從源 DB 例項建立已讀複製。 提供閱讀流量 從閱讀複製品。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：提供從多AZ備用複製品的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 DB 例項以使用傳輸加速 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用應用程式和Amazon RDS之間的Amazon Kinesis Data Firehose來增加資料庫(database)請求的貨幣。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #634

**題目**
一家公司每天從各種機器收集10GB的遙測資料. 公司將資料儲存在Amazon S3桶中,在一個源資料帳戶中. 公司聘請了多個諮詢機構使用這些資料進行分析. 每個機構都需要讀取其分析員的資料。 公司必須透過選擇一個能最大限度地提高安全性和可操作性的解決方案來分享來源資料帳戶的資料. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 S3 全球表格以複製每個機構的資料。
- B. 限時將S3 儲存桶(S3 bucket)公開. 只通知各機構。
- C. 配置S3 儲存桶(S3 bucket)對各機構擁有的帳戶的交叉帳戶存取。
- D. 在源資料帳戶中為每個分析師設定一個IAM使用者. 允許每個使用者存取S3 儲存桶(S3 bucket).

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置S3 儲存桶(S3 bucket)對各機構擁有的帳戶的交叉帳戶存取。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 S3 全球表格以複製每個機構的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：限時將S3 儲存桶(S3 bucket)公開. 只通知各機構。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在源資料帳戶中為每個分析師設定一個IAM使用者. 允許每個使用者存取S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #635

**題目**
一家公司在其初級AWS 區域(Region)中將Amazon FSx用於NetApp ONTAP用於CIFS和NFS檔案股份. 在 Amazon EC2 例項上執行的應用程式存取檔案共享。 該公司需要在二級區域(Region)中安裝儲存災難復原(disaster recovery)(DR)溶液. 二級區域(Region)中複製的資料需要使用與主區域(Region)相同的協議來存取. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立 AWS Lambda 函式將資料複製到 Amazon S3 桶中. 將S3 儲存桶(S3 bucket)複製到二級區域(Region).
- B. 透過使用AWS Backup為ONTAP卷建立備份(backup)FSx. 將卷子複製到二級區域(Region). 從 備份(backup) 為 ONTAP 例項建立新的 FSx。
- C. 在二級 區域(Region) 為 ONTAP 例項建立 FSx。 使用NetApp SnapMirror來複制主要區域(Region)到次要區域(Region)的資料.
- D. 建立亞馬遜彈性檔案系統(Amazon EFS)卷. 將當前資料移到磁碟區中。 將磁碟區複製到二級區域(Region).

**答案**
C


**詳解**
正確答案是 **C**。
- C：在二級 區域(Region) 為 ONTAP 例項建立 FSx。 使用NetApp SnapMirror來複制主要區域(Region)到次要區域(Region)的資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 AWS Lambda 函式將資料複製到 Amazon S3 桶中. 將S3 儲存桶(S3 bucket)複製到二級區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：透過使用AWS Backup為ONTAP卷建立備份(backup)FSx. 將卷子複製到二級區域(Region). 從 備份(backup) 為 ONTAP 例項建立新的 FSx 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立亞馬遜彈性檔案系統(Amazon EFS)卷. 將當前資料移到磁碟區中。 將磁碟區複製到二級區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #636

**題目**
一個開發團隊正在建立基於事件的應用程式,使用AWS Lambda功能. 當檔案被新增到 Amazon S3 桶中時, 將會生成事件。 開發團隊目前將亞馬遜簡易通知服務(Amazon SNS)配置為來自Amazon S3的事件目標. 一個解決方案設計師應該做些什麼來以可擴充套件的方式處理來自Amazon S3的事件?

**選項**
- A. 在Amazon Elastic Construction Services(Amazon ECS)中,
- B. 建立 SNS 訂閱, 在活動執行於 Lambda 之前在 Amazon Elastic Kubernetes Service(Amazon EKS) 處理此事件
- C. 建立一個 SNS 訂閱,將事件傳送到 Amazon 簡單佇列服務(Amazon SQS). 配置 SOS 佇列以觸發 Lambda 函式。
- D. 建立一個 SNS 訂閱,將事件傳送到 AWS 伺服器遷移服務(AWS SMS). 配置 Lambda 函式從短訊息事件進行民調。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個 SNS 訂閱,將事件傳送到 Amazon 簡單佇列服務(Amazon SQS). 配置 SOS 佇列以觸發 Lambda 函式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Amazon Elastic Construction Services(Amazon ECS)中,。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 SNS 訂閱, 在活動執行於 Lambda 之前在 Amazon Elastic Kubernetes Service(Amazon EKS) 處理此事件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個 SNS 訂閱,將事件傳送到 AWS 伺服器遷移服務(AWS SMS). 配置 Lambda 函式從短訊息事件進行民調 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #637

**題目**
一個解決方案架構師正在設計Amazon API Gateway背後的新服務. 服務的請求模式將無法預測,可能會突然從0個請求變為500多個每秒. 在後端資料庫(database)中需要堅持的資料總規模目前還不到1GB,未來增長無法預測. 可以透過簡單的金鑰值請求查詢資料. 哪些AWS服務能滿足這些要求?(選二.

**選項**
- A. AWS 遠門
- B. AWS Lambda.
- C. Amazon DynamoDB.
- D. Amazon EC2 自動放大
- E. MySQL 相容 Amazon Aurora

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：AWS Lambda。此選項符合題目條件，能有效滿足核心需求。
- C：Amazon DynamoDB。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：AWS 遠門。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon EC2 自動放大。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：MySQL 相容 Amazon Aurora。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #638

**題目**
一家公司與公司員工在世界各地收集並共享研究資料. 公司希望將資料收集和儲存在Amazon S3桶中,並在AWS雲中處理資料. 公司將與公司員工共享資料. 公司需要在AWS雲中找到安全解決方案,將營運開銷(operational overhead)最小化. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS Lambda 函式建立 S3 預先簽名的 URL。 指示員工使用URL.
- B. 為每個員工建立 IAM 使用者。 為每個員工建立IAM 政策(IAM policy),允許S3存取. 指示員工使用AWS管理控制檯.
- C. 建立 S3 檔案閘道器。 建立上傳共享和下載共享。 允許員工在本地計算機上掛載股票使用S3檔案閘道器.
- D. 配置 AWS 傳輸家族 SFTP 端點。 選擇自定義身份提供者選項。 使用AWS Secrets Manager管理使用者憑證 指示員工使用 Transfer Family.

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置 AWS 傳輸家族 SFTP 端點。 選擇自定義身份提供者選項。 使用AWS Secrets Manager管理使用者憑證 指示員工使用 Transfer Family。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS Lambda 函式建立 S3 預先簽名的 URL。 指示員工使用URL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為每個員工建立 IAM 使用者。 為每個員工建立IAM 政策(IAM policy),允許S3存取. 指示員工使用AWS管理控制檯。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 S3 檔案閘道器。 建立上傳共享和下載共享。 允許員工在本地計算機上掛載股票使用S3檔案閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #639

**題目**
一家公司正在建立一個新的傢俱庫存應用程式。 該公司在Amazon EC2的一次試驗中,在多個可用區(Availability Zones)上部署了該應用程式。 EC2例項在VPC中低於應用程式負載平衡器(Application Load Balancer)(ALB)。 一位解決方案設計師觀察到,進入的流量似乎傾向於一個EC2例項,導致一些請求出現延遲(latency)。 解決辦法設計師應如何解決這一問題?

**選項**
- A. 在 ALB 上禁用會話無限( 僵硬會話)
- B. 將ALB 替換為 網路負載平衡器(Network Load Balancer)
- C. 增加每個可用區(Availability Zone)的EC2 執行個體
- D. 調整ALB目標群體的健康檢查頻率

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 ALB 上禁用會話無限( 僵硬會話)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將ALB 替換為 網路負載平衡器(Network Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：增加每個可用區(Availability Zone)的EC2 執行個體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：調整ALB目標群體的健康檢查頻率。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #640

**題目**
一家公司有一個應用程式工作流,使用AWS Lambda功能從Amazon S3下載和解密檔案. 這些檔案使用AWS Key Management Service(AWS KMS)金鑰加密. 一個解決方案架構師需要設計一個解決方案,確保所需許可權的設定正確. 由何種行動組合完成這項工作?(選二.

**選項**
- A. 在 Lambda 函式的資源政策中附加 kms: 解密許可權
- B. 給Lambda IAM在 KMS 金鑰政策中的作用解密許可
- C. 授予KMS金鑰政策中的Lambda資源政策解密許可.
- D. 以 kms 建立新的 IAM 政策(IAM policy): 解密許可權, 並將策略附加到 Lambda 函式中。
- E. 用 kms 建立一個新的 IAM 角色: 解密許可權,並將執行角色附加到 Lambda 函式中.

**答案**
B,E



**詳解**
正確答案是 **B, E**。
- B：給Lambda IAM在 KMS 金鑰政策中的作用解密許可。此選項符合題目條件，能有效滿足核心需求。
- E：用 kms 建立一個新的 IAM 角色: 解密許可權,並將執行角色附加到 Lambda 函式中。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在 Lambda 函式的資源政策中附加 kms: 解密許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：授予KMS金鑰政策中的Lambda資源政策解密許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：以 kms 建立新的 IAM 政策(IAM policy): 解密許可權, 並將策略附加到 Lambda 函式中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #641

**題目**
一家公司希望監測其AWS的財務審查費用. 雲執行團隊正在AWS Organizations管理帳戶中設計一個架構,以查詢所有成員帳戶的AWS成本和使用報告. 團隊必須每月進行一次查詢,並對帳單進行詳細分析。 哪種解決辦法是滿足這些要求的現代化和成本效益高的方法?

**選項**
- A. 在管理帳戶中啟用成本和使用報告。 把報告交給Amazon Kinesis 使用Amazon EMR進行分析.
- B. 在管理帳戶中啟用成本和使用報告。 將報告送交Amazon S3,使用Amazon Athena進行分析.
- C. 啟用成員帳戶的成本和使用報告。 將報告送交Amazon S3,使用Amazon Redshift進行分析.
- D. 啟用成員帳戶的成本和使用報告。 把報告交給Amazon Kinesis 使用Amazon QuickSight托爾分析.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在管理帳戶中啟用成本和使用報告。 將報告送交Amazon S3,使用Amazon Athena進行分析。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在管理帳戶中啟用成本和使用報告。 把報告交給Amazon Kinesis 使用Amazon EMR進行分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：啟用成員帳戶的成本和使用報告。 將報告送交Amazon S3,使用Amazon Redshift進行分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：啟用成員帳戶的成本和使用報告。 把報告交給Amazon Kinesis 使用Amazon QuickSight托爾分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #642

**題目**
一家公司希望在Amazon EC2例項上執行一個遊戲應用程式,這是AWS雲中Auto Scaling 群組(Auto Scaling group)的一部分. 應用程式將使用 UDP 包傳輸資料。 公司希望確保應用程式能夠隨著流量的增加和減少而擴大並進入. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 在Auto Scaling 群組(Auto Scaling group)上附上一個網路負載平衡器(Network Load Balancer).
- B. 在Auto Scaling 群組(Auto Scaling group)上附加一個應用程式負載平衡器(Application Load Balancer).
- C. 部署一套Amazon Route 53記錄,並配有加權政策,適當安排路線交通。
- D. 在Auto Scaling 群組(Auto Scaling group)中部署一個配置為埠轉發到EC2的NAT例項。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在Auto Scaling 群組(Auto Scaling group)上附上一個網路負載平衡器(Network Load Balancer)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在Auto Scaling 群組(Auto Scaling group)上附加一個應用程式負載平衡器(Application Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署一套Amazon Route 53記錄,並配有加權政策,適當安排路線交通。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Auto Scaling 群組(Auto Scaling group)中部署一個配置為埠轉發到EC2的NAT例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #643

**題目**
一家公司為不同品牌在AWS上開設了多個網站. 每個網站每天生成數十千兆位元組的網路流量日誌. 一個解決方案架構師需要設計一個可擴充套件的解決方案,讓公司的開發者有能力分析公司所有網站的流量模式. 開發商的這種分析將在幾個月內每週一次按要求進行。 解決方案必須支援標準SQL的查詢. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在Amazon S3中儲存日誌. 使用Amazon Athena tor分析.
- B. 在Amazon RDS中儲存日誌. 使用資料庫(database)客戶端進行分析.
- C. 將日誌儲存在 Amazon OpenSearch Service. 使用 OpenSearch 服務進行分析.
- D. 在 Amazon EMR 叢集中儲存日誌 使用一個支援的基於 SQL 的開源框架進行分析.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在Amazon S3中儲存日誌. 使用Amazon Athena tor分析。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在Amazon RDS中儲存日誌. 使用資料庫(database)客戶端進行分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將日誌儲存在 Amazon OpenSearch Service. 使用 OpenSearch 服務進行分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Amazon EMR 叢集中儲存日誌 使用一個支援的基於 SQL 的開源框架進行分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #644

**題目**
國際公司為該公司在每個國家經營的子公司。 子域名格式化為example.com,country1.example.com和country2.example.com. 公司的工作量在應用程式負載平衡器(Application Load Balancer)之後. 公司希望加密正在傳輸的網站資料. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 使用 AWS Certificate Manager(ACM) 控制檯為頂端域名示例 com 請求公開憑證和 *.example.com 的萬用字元憑證.
- B. 使用 AWS Certificate Manager(ACM) 控制檯為頂級域例.com 請求私人憑證,為 *.example.com 請求通配憑證.
- C. 使用 AWS Certificate Manager(ACM) 控制檯為頂級域名示例.com 申請公憑證和私人憑證.
- D. 透過電子郵件地址驗證域名所有權。 切換到DNS驗證,將所需的DNS記錄新增到DNS提供者中.
- E. 透過將所需的DNS記錄新增到DNS提供者中來驗證域名的域名所有權.

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：使用 AWS Certificate Manager(ACM) 控制檯為頂端域名示例 com 請求公開憑證和 *.example.com 的萬用字元憑證。此選項符合題目條件，能有效滿足核心需求。
- E：透過將所需的DNS記錄新增到DNS提供者中來驗證域名的域名所有權。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：使用 AWS Certificate Manager(ACM) 控制檯為頂級域例.com 請求私人憑證,為 *.example.com 請求通配憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Certificate Manager(ACM) 控制檯為頂級域名示例.com 申請公憑證和私人憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過電子郵件地址驗證域名所有權。 切換到DNS驗證,將所需的DNS記錄新增到DNS提供者中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #645

**題目**
公司必須使用密碼金鑰進行其立面金鑰管理. 由於監管和合規(compliance)要求,關鍵經理在AWS雲之外. 公司希望透過使用在AWS雲外保留並且支援不同供應商的各種外部關鍵管理人員的密碼金鑰來管理加密(encryption)和解密(decryption). 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用由 CloudHSM 叢集支援的 AWS CloudHSM 金鑰儲存。
- B. 使用由外部金鑰管理器支援的 AWS Key Management Service(AWS KMS) 外部金鑰儲存器.
- C. 使用預設的 AWS Key Management Service(AWS KMS) 管理的金鑰儲存。
- D. 使用由 AWS CloudHSM 叢集支撐的自定義金鑰儲存。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用由外部金鑰管理器支援的 AWS Key Management Service(AWS KMS) 外部金鑰儲存器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用由 CloudHSM 叢集支援的 AWS CloudHSM 金鑰儲存 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用預設的 AWS Key Management Service(AWS KMS) 管理的金鑰儲存 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用由 AWS CloudHSM 叢集支撐的自定義金鑰儲存 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #646

**題目**
一個解決方案架構師需要在AWS雲中託管高效能運算工作量(HPC). 工作量將涉及數百個Amazon EC2 執行個體,需要並行使用共享檔案系統,以便能夠對大型資料集進行分散式處理。 資料集將同時用於多個例項。 工作量要求在1毫秒內進入延遲(latency)。 處理完成後,工程師將需要進入資料集進行人工後處理. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用亞馬遜彈性檔案系統(Amazon EFS)作為共享檔案系統. 從Amazon EFS存取資料集.
- B. 掛載一個 Amazon S3 桶作為共享檔案系統. 從S3 儲存桶(S3 bucket)直接進行後處理.
- C. 使用Amazon FSx作為Lustre共享檔案系統. 將檔案系統連結到一個Amazon S3桶進行後處理.
- D. 配置 AWS 資源存取管理器以共享一個 Amazon S3 桶,從而可以掛載到所有處理和後處理的場合.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用Amazon FSx作為Lustre共享檔案系統. 將檔案系統連結到一個Amazon S3桶進行後處理。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用亞馬遜彈性檔案系統(Amazon EFS)作為共享檔案系統. 從Amazon EFS存取資料集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：掛載一個 Amazon S3 桶作為共享檔案系統. 從S3 儲存桶(S3 bucket)直接進行後處理。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 AWS 資源存取管理器以共享一個 Amazon S3 桶,從而可以掛載到所有處理和後處理的場合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #647

**題目**
一個遊戲公司正在建設一個應用軟體,擁有Voice over IP能力. 該應用程式將為世界各地的使用者服務。 應用軟體需要全AWS區域自動故障的高度可用。 公司希望將使用者的延遲(latency)最小化,而不依賴使用者裝置上的IP地址快取. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用AWS Global Accelerator進行健康檢查.
- B. 使用Amazon Route 53並採用地理定位路由政策.
- C. 建立包含多個起源的 Amazon CloudFront 分佈.
- D. 建立使用路徑路由的應用程式負載平衡器(Application Load Balancer).

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS Global Accelerator進行健康檢查。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon Route 53並採用地理定位路由政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立包含多個起源的 Amazon CloudFront 分佈。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立使用路徑路由的應用程式負載平衡器(Application Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #648

**題目**
一個天氣預報公司需要用副毫秒延遲(latency)處理數百千兆位元組的資料. 公司在資料中心內擁有高效能運算(HPC)環境,希望擴大預測能力. 解決方案設計師必須確定一個可以處理大量持續吞吐量(throughput)的高度可用的雲端儲存解決方案. 儲存在解決方案中的檔案應該可以被數千個計算例項存取,這些例項將同時存取和處理整個資料集. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 使用Amazon FSx用於Lustre抓取檔案系統.
- B. 使用Amazon FSx用於Lustre持久檔案系統.
- C. 使用亞馬遜彈性檔案系統(Amazon EFS),使用Bursting 吞吐量(Throughput)模式.
- D. 使用亞馬遜彈性檔案系統(Amazon EFS),採用提供吞吐量(Throughput)模式.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon FSx用於Lustre持久檔案系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon FSx用於Lustre抓取檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用亞馬遜彈性檔案系統(Amazon EFS),使用Bursting 吞吐量(Throughput)模式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用亞馬遜彈性檔案系統(Amazon EFS),採用提供吞吐量(Throughput)模式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #649

**題目**
一家電子商務公司在房地經營一家PostgreSQL 資料庫(database)公司。 資料庫(database)透過使用高IOPS Amazon Elastic Block Store(Amazon EBS)儲存塊儲存來儲存資料. 每日I/O交易高峰每秒不超過15,000 IOPS. 公司希望將資料庫(database)遷移到Amazon RDS,用於PostgreSQL和提供磁碟IOPS的效能獨立於磁碟儲存能力. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置通用SSD(gp2)EBS容量儲存型別和15,000 IOPS.
- B. 配置所提供 IOPS SSD(io1) 的 EBS 磁碟區儲存型別和提供 15,000 IOPS.
- C. 配置通用SSD(gp3)EBS容量儲存型別和15,000 IOPS.
- D. 配置EBS磁量型別,實現最大IOPS.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置通用SSD(gp3)EBS容量儲存型別和15,000 IOPS。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置通用SSD(gp2)EBS容量儲存型別和15,000 IOPS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置所提供 IOPS SSD(io1) 的 EBS 磁碟區儲存型別和提供 15,000 IOPS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置EBS磁量型別,實現最大IOPS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #650

**題目**
一家公司希望將自己的premise Microsoft SQL Server Entertainment版資料庫(database)遷移到AWS. 公司的線上應用使用資料庫(database)處理交易. 資料分析組使用相同的生產資料庫(database)來執行報告進行分析處理. 公司希望儘可能將營運開銷(operational overhead)降低到管理服務. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 為微軟SOL伺服器移動到Amazon RDS. 為報告目的使用讀本
- B. 在Amazon EC2上遷移到微軟SQL伺服器. 總是使用 為報告目的閱讀複製品
- C. 遷居至Amazon DynamoDB. 使用 DynamomDB 點播複製件進行報告
- D. 遷移到Amazon Aurora MySQL. 為報告目的使用 Aurora 讀取複製件

**答案**
A


**詳解**
正確答案是 **A**。
- A：為微軟SOL伺服器移動到Amazon RDS. 為報告目的使用讀本。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在Amazon EC2上遷移到微軟SQL伺服器. 總是使用 為報告目的閱讀複製品。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：遷居至Amazon DynamoDB. 使用 DynamomDB 點播複製件進行報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：遷移到Amazon Aurora MySQL. 為報告目的使用 Aurora 讀取複製件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #651

**題目**
一家公司在一個Amazon S3桶中儲存了大量的影象檔案. 頭180天需要隨時提供影象。 在接下來的180天裡,影象很少存取. 360天后,影象需要存檔,但必須應要求立即提供。 5年後,只有審計員才能存取這些影象。 審計員必須在12小時內取回影象。 在此過程中無法丟失影象。 開發者將使用S3 Standard儲存頭180天. 開發者需要配置一個S3生命週期規則. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在180天后將物件過渡到S3 One Zone-不經常存取(S3 One Zone-IA)。 360天后為S3 Glacier Instant Retrieval,5年後為S3 Glacier Deep Archive.
- B. 在180天后將物件過渡到S3 One Zone-不經常存取(S3 One Zone-IA)。 360天后的S3 Glacier Flexible Retrieval,5年後的S3 Glacier Deep Archive.
- C. 180天后向S3標準-不頻繁存取(S3 Standard-IA)過渡,360天后向S3 Glacier Instant Retrieval過渡,5年後向S3 Glacier Deep Archive過渡.
- D. 在180天之後向S3標準-不頻繁存取(S3 Standard-IA)過渡,在360天之後向S3 Glacier Flexible Retrieval過渡,在5年後向S3 Glacier Deep Archive過渡。

**答案**
C


**詳解**
正確答案是 **C**。
- C：180天后向S3標準-不頻繁存取(S3 Standard-IA)過渡,360天后向S3 Glacier Instant Retrieval過渡,5年後向S3 Glacier Deep Archive過渡。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在180天后將物件過渡到S3 One Zone-不經常存取(S3 One Zone-IA)。 360天后為S3 Glacier Instant Retrieval,5年後為S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在180天后將物件過渡到S3 One Zone-不經常存取(S3 One Zone-IA)。 360天后的S3 Glacier Flexible Retrieval,5年後的S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在180天之後向S3標準-不頻繁存取(S3 Standard-IA)過渡,在360天之後向S3 Glacier Flexible Retrieval過渡,在5年後向S3 Glacier Deep Archive過渡。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #652

**題目**
一個公司的資料工作量很大,每天執行6小時. 公司不能在程序執行時丟失任何資料. 一個解決方案架構師正在設計一個Amazon EMR叢集配置,以支援這一重要的資料工作量. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置一個執行 On-Demand Incents 上的主節點和核心節點以及SpotIncents上的任務節點的遠端叢集.
- B. 配置一個執行 On-Demand Incents 上的主節點和核心節點的瞬態叢集以及SpotIncents上的任務節點.
- C. 配置一個在 On-Demand Incentral 上執行主節點的瞬態叢集,以及SpotIncentrals上的核心節點和任務節點.
- D. 配置一個執行 On-Demand Practors 上的主節點、 Spote Practors 上的核心節點和 Spote Practors 上的任務節點。

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置一個執行 On-Demand Incents 上的主節點和核心節點的瞬態叢集以及SpotIncents上的任務節點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置一個執行 On-Demand Incents 上的主節點和核心節點以及SpotIncents上的任務節點的遠端叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個在 On-Demand Incentral 上執行主節點的瞬態叢集,以及SpotIncentrals上的核心節點和任務節點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個執行 On-Demand Practors 上的主節點、 Spote Practors 上的核心節點和 Spote Practors 上的任務節點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #653

**題目**
一家公司維持一個Amazon RDS 資料庫(database),將使用者對映到成本中心. 該公司在AWS Organizations的一個組織設有帳戶. 公司需要一種解決方案,將組織中特定AWS帳戶中建立的所有資源標記. 解決方案必須用建立資源的使用者的成本中心ID標記每個資源. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將特定AWS帳戶從管理帳戶移至組織中一個新的組織單位。 建立服務控制政策(SCP),要求所有現有資源在建立資源前擁有正確的成本中心標記. 將 SCP 應用到新的 OU。
- B. 建立 AWS Lambda 函式,在 Lambda 函式從 RDS 資料庫(database) 檢視適當的成本中心後標記資源。 配置 Amazon EventBridge 規則,對 AWS CloudTrail 事件作出反應,以引用 Lambda 函式.
- C. 建立 AWS 雲陣堆疊以部署 AWS Lambda 函式。 配置 Lambda 函式從 RDS 資料庫(database) 中查詢適當的成本中心,並標記資源。 建立 Amazon EventBridge 計劃規則以引用 Cloud Formation 堆疊。
- D. 建立 AWS Lambda 函式,以預設值標記資源。 配置 Amazon EventBridge 規則,對 AWS CloudTrail 事件作出反應,在資源缺失成本中心標記時引用 Lambda 函式.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立 AWS Lambda 函式,在 Lambda 函式從 RDS 資料庫(database) 檢視適當的成本中心後標記資源。 配置 Amazon EventBridge 規則,對 AWS CloudTrail 事件作出反應,以引用 Lambda 函式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將特定AWS帳戶從管理帳戶移至組織中一個新的組織單位。 建立服務控制政策(SCP),要求所有現有資源在建立資源前擁有正確的成本中心標記. 將 SCP 應用到新的 OU 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS 雲陣堆疊以部署 AWS Lambda 函式。 配置 Lambda 函式從 RDS 資料庫(database) 中查詢適當的成本中心,並標記資源。 建立 Amazon EventBridge 計劃規則以引用 Cloud Formation 堆疊 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 AWS Lambda 函式,以預設值標記資源。 配置 Amazon EventBridge 規則,對 AWS CloudTrail 事件作出反應,在資源缺失成本中心標記時引用 Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #654

**題目**
一家公司最近將其網路應用程式遷移到AWS雲. 公司使用Amazon EC2例項執行多個程式來託管應用程式. 這些程序包括一個服務於靜態內容的Apache網路伺服器. Apache網路伺服器向一個使用本地Redis伺服器進行使用者會話的PHP應用程式提出請求. 公司希望重新設計該架構以備大量使用,並使用AWS管理的解決方案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS 彈性 Beanstalk 託管靜態內容和 PHP 應用程式。 配置 Elastic Beanstalk 將其 EC2 例項應用到公共子網中。 指定一個公共IP地址.
- B. 使用AWS Lambda託管靜態內容和PHP應用程式. 使用 Amazon API Gateway REST API來代理 Lambda 函式的請求. 設定 API 閘道器 CORS 配置以響應域名。 配置 Amazon ElastiCache 供 Redis 處理會話資訊。
- C. 保留EC2例項上的後端程式碼. 為已啟用多AZ的 Redis 叢集建立 Amazon ElastiCache。 在叢集模式下配置 Redis 叢集的 ElastiCache。 將前端資源複製到Amazon S3. 配置後端程式碼以引用 EC2 例項。
- D. 配置一個 Amazon CloudFront 分散式,並配有一個 Amazon S3 端點到一個S3 儲存桶(S3 bucket),該端點被配置為主機靜態內容. 配置一個應用程式負載平衡器(Application Load Balancer),目標為亞馬遜彈性容器服務(Amazon ECS)服務,為PHP應用程式執行AWS Fargate任務. 配置 PHP 應用程式,用於執行在多個 可用區(Availability Zones) 中的 Redis 叢集的 Amazon ElastiCache。

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置一個 Amazon CloudFront 分散式,並配有一個 Amazon S3 端點到一個S3 儲存桶(S3 bucket),該端點被配置為主機靜態內容. 配置一個應用程式負載平衡器(Application Load Balancer),目標為亞馬遜彈性容器服務(Amazon ECS)服務,為PHP應用程式執行AWS Fargate任務. 配置 PHP 應用程式,用於執行在多個 可用區(Availability Zones) 中的 Redis 叢集的 Amazon ElastiCache 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 彈性 Beanstalk 託管靜態內容和 PHP 應用程式。 配置 Elastic Beanstalk 將其 EC2 例項應用到公共子網中。 指定一個公共IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用AWS Lambda託管靜態內容和PHP應用程式. 使用 Amazon API Gateway REST API來代理 Lambda 函式的請求. 設定 API 閘道器 CORS 配置以響應域名。 配置 Amazon ElastiCache 供 Redis 處理會話資訊 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：保留EC2例項上的後端程式碼. 為已啟用多AZ的 Redis 叢集建立 Amazon ElastiCache。 在叢集模式下配置 Redis 叢集的 ElastiCache。 將前端資源複製到Amazon S3. 配置後端程式碼以引用 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #655

**題目**
一家公司在一個有目標群體的Auto Scaling 群組(Auto Scaling group)中執行一個Amazon EC2例項的網路應用程式. 公司設計該應用程式是為了配合會話的無限(貼上會話),以獲得更好的使用者體驗. 申請必須在因特網上公開提供,作為終點。 必須在終點處適用世界金融聯合會,以便增加安全。 會話無窮( sticky session)必須在結尾處配置。 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 建立公共網路負載平衡器(Network Load Balancer). 指定應用程式目標群體。
- B. 建立一個負載平衡器(Load Balancer)閘道器。 指定應用程式目標群體。
- C. 建立公共應用程式負載平衡器(Application Load Balancer). 指定應用程式目標群體。
- D. 建立第二個目標群體。 在 EC2 例項中新增彈性 IP 地址。
- E. 在AWS WAF中建立網路ACL. 將網路ACL與端點連線

**答案**
C,E



**詳解**
正確答案是 **C, E**。
- C：建立公共應用程式負載平衡器(Application Load Balancer). 指定應用程式目標群體。此選項符合題目條件，能有效滿足核心需求。
- E：在AWS WAF中建立網路ACL. 將網路ACL與端點連線。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：建立公共網路負載平衡器(Network Load Balancer). 指定應用程式目標群體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個負載平衡器(Load Balancer)閘道器。 指定應用程式目標群體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立第二個目標群體。 在 EC2 例項中新增彈性 IP 地址 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #656

**題目**
一家公司經營一個網站,儲存歷史事件的影象. 網站使用者需要有能力根據影象中的事件發生年份搜尋和檢視影象. 平均來說,使用者每年只請求每個影象一次或兩次. 公司希望有一個高度可用的解決方案來儲存和向使用者交付影象. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 將影象儲存在亞馬遜彈性塊儲存(Amazon EBS)中. 使用執行於Amazon EC2的網路伺服器.
- B. 在亞馬遜彈性檔案系統中儲存影象(Amazon EFS). 使用執行於Amazon EC2的網路伺服器.
- C. 在Amazon S3標準中儲存影象. 使用S3標準透過使用靜態網站直接傳送影象.
- D. 將影象儲存在 Amazon S3 標準-不頻繁存取（S3 Standard-IA）中. 使用S3 Standard-IA透過使用靜態網站直接傳送影象.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在Amazon S3標準中儲存影象. 使用S3標準透過使用靜態網站直接傳送影象。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將影象儲存在亞馬遜彈性塊儲存(Amazon EBS)中. 使用執行於Amazon EC2的網路伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在亞馬遜彈性檔案系統中儲存影象(Amazon EFS). 使用執行於Amazon EC2的網路伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將影象儲存在 Amazon S3 標準-不頻繁存取（S3 Standard-IA）中. 使用S3 Standard-IA透過使用靜態網站直接傳送影象。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #657

**題目**
一家公司在AWS Organizations的一個組織中有多個AWS帳戶,不同業務單位使用. 該公司在全球設有多個辦事處. 公司需要更新安全群組(security group)規則,以便允許新的辦公室CIDR範圍,或刪除整個組織的老的CIDR範圍. 公司希望集中管理安全群組(security group)規則,以儘量減少更新CIDR範圍所需的行政間接費用. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在組織管理帳戶中建立VPC安全小組. 需要更新 CIDR 範圍時更新安全小組。
- B. 建立一個 VPC 客戶端管理字首列表,其中包含 CIDR 列表。 使用AWS資源存取管理器(AWS RAM)在整個組織中共享字首列表. 在全組織的安全小組中使用字首列表.
- C. 建立 AWS 管理字首列表。 使用AWS安全樞紐政策在整個組織實施安全群組(security group)更新. 使用 AWS Lambda 函式在 CIDR 範圍變化時自動更新字首列表.
- D. 在中央行政AWS帳戶中建立安全小組. 為整個組織建立 AWS 防火牆(Firewall) 管理器通用 安全群組(security group) 政策. 在策略中選擇先前建立的安全組為主組。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個 VPC 客戶端管理字首列表,其中包含 CIDR 列表。 使用AWS資源存取管理器(AWS RAM)在整個組織中共享字首列表. 在全組織的安全小組中使用字首列表。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在組織管理帳戶中建立VPC安全小組. 需要更新 CIDR 範圍時更新安全小組。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS 管理字首列表。 使用AWS安全樞紐政策在整個組織實施安全群組(security group)更新. 使用 AWS Lambda 函式在 CIDR 範圍變化時自動更新字首列表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在中央行政AWS帳戶中建立安全小組. 為整個組織建立 AWS 防火牆(Firewall) 管理器通用 安全群組(security group) 政策. 在策略中選擇先前建立的安全組為主組 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #658

**題目**
一家公司使用一個附著在網路上的儲存(NAS)系統,為其高效能運算(HPC)工作量提供檔案股份. 公司希望將延遲(latency)敏感HPC工作量及其儲存量遷移到AWS雲. 公司必須能夠從檔案系統提供NFS和SMB多protocol存取. LEAST 延遲(latency)將滿足這些要求的解決方案是什麼?(選二.

**選項**
- A. 將計算最佳化的EC2例項安裝到叢集放置組中。
- B. 將計算最佳化的EC2例項安裝到分割槽放置組中。
- C. 將 EC2 例項附加到 Lustre 檔案系統的 Amazon FSx 上。
- D. 將 EC2 例項附加到 OpenZFS 檔案系統的 Amazon FSx 上。
- E. 將 EC2 例項附加到 NetApp ONTAP 檔案系統的 Amazon FSx 中。

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：將計算最佳化的EC2例項安裝到叢集放置組中。此選項符合題目條件，能有效滿足核心需求。
- E：將 EC2 例項附加到 NetApp ONTAP 檔案系統的 Amazon FSx 中。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：將計算最佳化的EC2例項安裝到分割槽放置組中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 EC2 例項附加到 Lustre 檔案系統的 Amazon FSx 上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 EC2 例項附加到 OpenZFS 檔案系統的 Amazon FSx 上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #659

**題目**
一家公司正在搬遷其資料中心,希望在兩週內安全地將50TB的資料傳輸給AWS. 現有的資料中心與AWS有站點對站點VPN連線,90%被使用. 哪個AWS服務應是一個解決方案設計師用來滿足這些要求?

**選項**
- A. AWS 資料同步與 VPC 端點(VPC endpoint)
- B. AWS Direct Connect.
- C. AWS Snowball Edge Storage Optimized.
- D. AWS Storage Gateway.

**答案**
C


**詳解**
正確答案是 **C**。
- C：AWS Snowball Edge Storage Optimized。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：AWS 資料同步與 VPC 端點(VPC endpoint)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：AWS Direct Connect。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：AWS Storage Gateway。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #660

**題目**
一家公司在一個Auto Scaling 群組(Auto Scaling group)中託管了Amazon EC2 On-Demand Incents上的應用程式. 申請高峰時數每天在同一時間出現. 應用程式使用者在高峰時段開始時報告應用效能緩慢. 申請通常在高峰時間開始後2-3小時進行。 公司希望確保應用程式在高峰時段開始時正常執行. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置一個 應用程式負載平衡器(Application Load Balancer) , 將流量正確分配到例項。
- B. 為Auto Scaling 群組(Auto Scaling group)配置動態縮放政策,以啟動基於記憶體利用率的新例項.
- C. 為Auto Scaling 群組(Auto Scaling group)配置動態縮放政策,以啟動基於CPU利用率的新例項.
- D. 配置 Auto Scaling 群組(Auto Scaling group) 的預定縮放政策,以便在高峰時段前啟動新例項。

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置 Auto Scaling 群組(Auto Scaling group) 的預定縮放政策,以便在高峰時段前啟動新例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置一個 應用程式負載平衡器(Application Load Balancer) , 將流量正確分配到例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為Auto Scaling 群組(Auto Scaling group)配置動態縮放政策,以啟動基於記憶體利用率的新例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為Auto Scaling 群組(Auto Scaling group)配置動態縮放政策,以啟動基於CPU利用率的新例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #661

**題目**
一家公司在AWS上執行應用程式,連線該公司的Amazon RDS 資料庫(database). 申請時間在週末和當年的高峰時間。 該公司希望更有效地擴大資料庫(database)的應用範圍,使其與資料庫(database)連線. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用 Amazon DynamoDB 與 資料庫(database) 的目標群體配置連線集合。 更改應用程式以使用 DynamoDB 端點。
- B. 使用 Amazon RDS 代用程式,為 資料庫(database) 目標組. 更改應用程式以使用 RDS 代理端點。
- C. 使用執行在Amazon EC2上的自定義代理作為資料庫(database)的中介. 更改應用程式以使用自定義代理端點。
- D. 使用 AWS Lambda 函式為 資料庫(database) 提供與目標群體配置的連線集合。 更改應用程式以使用 Lambda 函式。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 Amazon RDS 代用程式,為 資料庫(database) 目標組. 更改應用程式以使用 RDS 代理端點 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon DynamoDB 與 資料庫(database) 的目標群體配置連線集合。 更改應用程式以使用 DynamoDB 端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用執行在Amazon EC2上的自定義代理作為資料庫(database)的中介. 更改應用程式以使用自定義代理端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Lambda 函式為 資料庫(database) 提供與目標群體配置的連線集合。 更改應用程式以使用 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #662

**題目**
一家公司使用AWS Cost Explorer來監測其AWS的成本. 該公司注意到亞馬遜彈性區塊儲存(Amazon EBS)的儲存和快照(snapshot)的成本每月增加. 然而,公司並不每月購買額外的EBS儲存. 公司希望最佳化其當前儲存使用的每月成本. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在Amazon CloudWatch Logs中使用日誌來監控Amazon EBS的儲存利用率. 使用 Amazon EBS 彈性卷以減少EBS 磁碟區的大小.
- B. 使用自定義指令碼來監視空間使用。 使用 Amazon EBS 彈性卷以減少EBS 磁碟區的大小.
- C. 刪除所有過期和未使用的快照以減少快照(snapshot)成本.
- D. 刪除所有非必要的快照。 使用亞馬遜資料生命週期管理器根據公司的快照(snapshot)政策要求建立和管理快照.

**答案**
D


**詳解**
正確答案是 **D**。
- D：刪除所有非必要的快照。 使用亞馬遜資料生命週期管理器根據公司的快照(snapshot)政策要求建立和管理快照。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Amazon CloudWatch Logs中使用日誌來監控Amazon EBS的儲存利用率. 使用 Amazon EBS 彈性卷以減少EBS 磁碟區的大小。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用自定義指令碼來監視空間使用。 使用 Amazon EBS 彈性卷以減少EBS 磁碟區的大小。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：刪除所有過期和未使用的快照以減少快照(snapshot)成本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #663

**題目**
一家公司正在開發關於AWS的新應用程式。 該應用程式包括一個亞馬遜彈性容器服務(Amazon ECS)叢集,一個包含應用程式資產的Amazon S3桶,以及一個包含應用程式資料集的MySQL 資料庫(database)的Amazon RDS. 資料集包含敏感資訊. 公司希望確保只有ECS叢集才能存取MySQL 資料庫(database)的RDS中的資料和S3 儲存桶(S3 bucket)中的資料. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個新的 AWS Key Management Service(AWS KMS) 客戶端管理金鑰,為 MySQL 資料庫(database) 加密 S3 儲存桶(S3 bucket) 和 RDS. 確保 KMS 關鍵政策包括加密和解密ECS任務執行角色的許可權.
- B. 建立 AWS Key Management Service(AWS KMS) AWS 管理金鑰,為 MySQL 資料庫(database) 加密 S3 儲存桶(S3 bucket) 和 RDS. 確保S3 儲存桶政策(bucket policy)指定ECS任務執行角色為使用者.
- C. 建立一個S3 儲存桶政策(bucket policy),限制桶存取ECS任務執行角色. 為 MySQL 建立 Amazon RDS 的 VPC 端點(VPC endpoint)。 更新MySQL 安全群組(security group)的RDS,只允許從ECS叢集將生成任務的子網存取.
- D. 為 MySQL 建立 Amazon RDS 的 VPC 端點(VPC endpoint)。 更新MySQL 安全群組(security group)的RDS,只允許從ECS叢集將生成任務的子網存取. 為 Amazon S3 建立 VPC 端點(VPC endpoint)。 更新S3 儲存桶政策(bucket policy),只允許從S3 VPC 端點(VPC endpoint)進入.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個新的 AWS Key Management Service(AWS KMS) 客戶端管理金鑰,為 MySQL 資料庫(database) 加密 S3 儲存桶(S3 bucket) 和 RDS. 確保 KMS 關鍵政策包括加密和解密ECS任務執行角色的許可權。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立 AWS Key Management Service(AWS KMS) AWS 管理金鑰,為 MySQL 資料庫(database) 加密 S3 儲存桶(S3 bucket) 和 RDS. 確保S3 儲存桶政策(bucket policy)指定ECS任務執行角色為使用者。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個S3 儲存桶政策(bucket policy),限制桶存取ECS任務執行角色. 為 MySQL 建立 Amazon RDS 的 VPC 端點(VPC endpoint)。 更新MySQL 安全群組(security group)的RDS,只允許從ECS叢集將生成任務的子網存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 MySQL 建立 Amazon RDS 的 VPC 端點(VPC endpoint)。 更新MySQL 安全群組(security group)的RDS,只允許從ECS叢集將生成任務的子網存取. 為 Amazon S3 建立 VPC 端點(VPC endpoint)。 更新S3 儲存桶政策(bucket policy),只允許從S3 VPC 端點(VPC endpoint)進入。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #664

**題目**
一家公司有一個網路應用程式,執行在房地。 該應用在高峰時段經歷了延遲(latency)問題. 延遲(latency)號衛星每月發行兩次。 在延遲(latency)發行之初,應用程式的CPU利用率立即提高到正常數量的10倍. 公司希望將應用程式遷移到AWS,以改善延遲(latency). 公司還希望在應用程式需求增加時自動擴大應用規模. 公司將使用AWS Elastic Beanstalk進行應用部署. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置一個 Elastic Beanstalk 環境,以無限模式使用可爆效能例項。 根據請求配置環境以縮放。
- B. 配置一個 Elastic Beanstalk 環境來使用最佳化的計算例項。 根據請求配置環境以縮放。
- C. 配置一個 Elastic Beanstalk 環境來使用最佳化的計算例項。 配置環境以在一個排程中縮放。
- D. 配置一個 Elastic Beanstalk 環境,以無限模式使用可爆效能例項。 配置環境以在預測度量表上縮放.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置一個 Elastic Beanstalk 環境來使用最佳化的計算例項。 根據請求配置環境以縮放 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置一個 Elastic Beanstalk 環境,以無限模式使用可爆效能例項。 根據請求配置環境以縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個 Elastic Beanstalk 環境來使用最佳化的計算例項。 配置環境以在一個排程中縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個 Elastic Beanstalk 環境,以無限模式使用可爆效能例項。 配置環境以在預測度量表上縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #665

**題目**
一家公司在世界各地都有客戶。 公司希望使用自動化來保障其系統和網路基礎設施的安全. 該公司的安全團隊必須能夠跟蹤和稽核(audit)對基礎設施的所有增量變化。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用AWS Organizations設定基礎設施. 使用 AWS Config 跟蹤變化.
- B. 使用AWS CloudFormation來設定基礎設施. 使用 AWS Config 跟蹤變化.
- C. 使用AWS Organizations設定基礎設施. 使用 AWS 服務目錄來跟蹤變化.
- D. 使用AWS CloudFormation來設定基礎設施. 使用 AWS 服務目錄來跟蹤變化.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用AWS CloudFormation來設定基礎設施. 使用 AWS Config 跟蹤變化。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS Organizations設定基礎設施. 使用 AWS Config 跟蹤變化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Organizations設定基礎設施. 使用 AWS 服務目錄來跟蹤變化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS CloudFormation來設定基礎設施. 使用 AWS 服務目錄來跟蹤變化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #666

**題目**
一家創業公司正在以Amazon EC2例項為客戶託管一個網站。 該網站包括一個無狀態的Python應用程式和一個MySQL 資料庫(database). 該網站僅服務少量流量. 該公司對例項中的可靠性(reliability)感到關切,需要遷移到一個高度可用的建築. 公司不能修改申請程式碼. 一個設計師應該採取什麼綜合行動來實現網站的高可用性(high availability)?(選二.

**選項**
- A. 在使用的每個可用區(Availability Zone)中提供一個網際網路閘道器。
- B. 為 MySQL 多AZ DB 例項將 資料庫(database) 修改為 Amazon RDS。
- C. 將資料庫(database)型機車遷移到Amazon DynamoDB型機車,並啟用DynamoDB自動縮放.
- D. 使用AWS DataSync在多個EC2例項中同步資料庫(database)資料.
- E. 建立一個應用程式負載平衡器(Application Load Balancer),將流量分配到分佈在兩個可用區(Availability Zones)的EC2中的Auto Scaling 群組(Auto Scaling group).

**答案**
B,E



**詳解**
正確答案是 **B, E**。
- B：為 MySQL 多AZ DB 例項將 資料庫(database) 修改為 Amazon RDS 。此選項符合題目條件，能有效滿足核心需求。
- E：建立一個應用程式負載平衡器(Application Load Balancer),將流量分配到分佈在兩個可用區(Availability Zones)的EC2中的Auto Scaling 群組(Auto Scaling group)。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在使用的每個可用區(Availability Zone)中提供一個網際網路閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料庫(database)型機車遷移到Amazon DynamoDB型機車,並啟用DynamoDB自動縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS DataSync在多個EC2例項中同步資料庫(database)資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #667

**題目**
在多年移民專案期間,一家公司正在將其資料和應用轉移到AWS。 公司希望安全地從公司的AWS 區域(Region)和公司在前提位置獲取Amazon S3上的資料. 資料不能透過網際網路。 該公司在其區域(Region)和其辦公地點之間建立了AWS Direct Connect連線。 哪種解決辦法能滿足這些要求?

**選項**
- A. 為 Amazon S3 建立閘道器端點. 使用閘道器端點安全地存取來自區域(Region)的資料和站點位置.
- B. 在 AWS Transit Gateway 中建立一個閘道器,從 區域(Region) 安全地存取 Amazon S3 和 options 位置。
- C. 為Amazon S3建立介面端點. 使用介面端點安全地存取來自區域(Region)的資料和現場位置.
- D. 使用 AWS Key Management Service(AWS KMS) 金鑰從區域(Region) 安全地存取資料,並存取現場位置.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為 Amazon S3 建立閘道器端點. 使用閘道器端點安全地存取來自區域(Region)的資料和站點位置。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在 AWS Transit Gateway 中建立一個閘道器,從 區域(Region) 安全地存取 Amazon S3 和 options 位置 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為Amazon S3建立介面端點. 使用介面端點安全地存取來自區域(Region)的資料和現場位置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Key Management Service(AWS KMS) 金鑰從區域(Region) 安全地存取資料,並存取現場位置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #668

**題目**
一家公司在AWS Organizations創立了一個新的組織. 該組織為公司開發團隊設有多個帳戶. 開發團隊成員使用AWS IAM身份中心(AWS Single Sign-On)存取帳戶. 對於公司的每個應用程式,開發團隊必須使用預先定義的應用程式名稱來標記建立的資源. 一個解決方案架構師需要設計一個解決方案,讓開發團隊只有在應用程式名稱標籤有核定值的情況下才能建立資源. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 IAM 組,該組具有有條件的允許策略,需要為建立資源指定應用程式名稱標籤.
- B. 建立一個對有應用程式名標籤的任何資源有拒絕策略的交叉帳戶角色.
- C. 在 AWS 資源組中建立一個資源組來驗證標記是否適用於所有帳戶中的所有資源。
- D. 在擁有允許的應用程式名稱列表的組織中建立標籤政策。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在擁有允許的應用程式名稱列表的組織中建立標籤政策 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 IAM 組,該組具有有條件的允許策略,需要為建立資源指定應用程式名稱標籤。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個對有應用程式名標籤的任何資源有拒絕策略的交叉帳戶角色。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 AWS 資源組中建立一個資源組來驗證標記是否適用於所有帳戶中的所有資源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #669

**題目**
一家公司在Amazon RDS上為PostgreSQL執行資料庫. 公司希望透過每30天旋轉密碼來管理主使用者密碼的安全解決方案. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用Amazon EventBridge來安排自定義的AWS Lambda功能,每30天旋轉一次密碼.
- B. 使用AWS CLI中的修改-db-Intance命令來更改密碼.
- C. 將AWS Secrets Manager與Amazon RDS整合PostgreSQL,實現密碼自動輪換.
- D. 整合 AWS Systems Manager 引數儲存器與 Amazon RDS 用於 PostgreSQL 實現密碼自動輪換.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將AWS Secrets Manager與Amazon RDS整合PostgreSQL,實現密碼自動輪換。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon EventBridge來安排自定義的AWS Lambda功能,每30天旋轉一次密碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用AWS CLI中的修改-db-Intance命令來更改密碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：整合 AWS Systems Manager 引數儲存器與 Amazon RDS 用於 PostgreSQL 實現密碼自動輪換。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #670

**題目**
公司對使用Amazon DynamoDB表格的應用程式進行測試。 測試每週進行4小時。 公司知道應用程式在測試期間每秒對錶格進行多少次讀寫操作. 該公司目前沒有將DynamomDB用於任何其他用途案例. 一個解決方案架構師需要最佳化表格的成本. 哪種解決辦法能滿足這些要求?

**選項**
- A. 選擇點播模式。 適當更新讀寫容量單位.
- B. 選擇提供模式。 適當更新讀寫容量單位.
- C. 購買DynamoDB保留容量1年.
- D. 購買DynamoDB保留能力,任期3年.

**答案**
A


**詳解**
正確答案是 **A**。
- A：選擇點播模式。 適當更新讀寫容量單位。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：選擇提供模式。 適當更新讀寫容量單位。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：購買DynamoDB保留容量1年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：購買DynamoDB保留能力,任期3年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #671

**題目**
一家公司在Amazon EC2 執行個體中執行其應用程式。 該公司定期對其AWS費用進行財務評估。 該公司最近發現了不尋常的開支。 公司需要解決防止異常支出的問題. 解決方案必須監測成本,並在出現異常支出時通知負責的利益攸關方。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS 預算模板建立零支出預算。
- B. 在AWS計費和成本管理控制檯上建立一個AWS成本異常檢測顯示器.
- C. 建立當前執行工作量定價細節的 AWS 定價計算器估計。
- D. 使用Amazon CloudWatch來監控成本並識別異常支出.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立當前執行工作量定價細節的 AWS 定價計算器估計 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 預算模板建立零支出預算 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在AWS計費和成本管理控制檯上建立一個AWS成本異常檢測顯示器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon CloudWatch來監控成本並識別異常支出。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #672

**題目**
一個營銷公司從一次營銷活動中獲得了Amazon S3中的大量新點選流資料. 公司需要快速分析Amazon S3中的點選流資料. 然後公司需要決定是否在資料管道中進一步處理資料. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在 Spark 目錄中建立外部表格。 配置 AWS Glue 中的工作查詢資料.
- B. 配置 AWS Glue 爬蟲來爬行資料. 配置 Amazon Athena 查詢資料。
- C. 在蜂巢居中建立外部表格。 在 Amazon EMR 中配置 Spark 任務以查詢資料。
- D. 配置 AWS Glue 爬蟲來爬行資料. 配置 Amazon Kinesis Data Analytics使用 SQL 查詢資料.

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置 AWS Glue 爬蟲來爬行資料. 配置 Amazon Kinesis Data Analytics使用 SQL 查詢資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 Spark 目錄中建立外部表格。 配置 AWS Glue 中的工作查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 AWS Glue 爬蟲來爬行資料. 配置 Amazon Athena 查詢資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在蜂巢居中建立外部表格。 在 Amazon EMR 中配置 Spark 任務以查詢資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #673

**題目**
一家公司在其資料中心執行一個SMB檔案伺服器. 檔案伺服器儲存公司在檔案建立日期後經常存取的大型檔案,儲存時間最長為7天. 7天后,公司需要能夠存取檔案,最高檢索時間為24小時. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用AWS DataSync複製從SMB檔案伺服器到AWS超過7天的資料.
- B. 建立一個Amazon S3檔案閘道器以增加公司的儲存空間. 建立一個S3 生命週期政策(Lifecycle policy),在7天后將資料轉換為S3 Glacier Deep Archive.
- C. 建立一個Amazon FSx檔案閘道器以增加公司的儲存空間. 建立一個 Amazon S3 生命週期政策(Lifecycle policy),在7天后轉換資料.
- D. 為每個使用者配置Amazon S3存取許可權. 建立一個S3 生命週期政策(Lifecycle policy),在7天后將資料轉換為S3 Glacier Flexible Retrieval.

**答案**
D


**詳解**
正確答案是 **D**。
- D：為每個使用者配置Amazon S3存取許可權. 建立一個S3 生命週期政策(Lifecycle policy),在7天后將資料轉換為S3 Glacier Flexible Retrieval。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS DataSync複製從SMB檔案伺服器到AWS超過7天的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個Amazon S3檔案閘道器以增加公司的儲存空間. 建立一個S3 生命週期政策(Lifecycle policy),在7天后將資料轉換為S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個Amazon FSx檔案閘道器以增加公司的儲存空間. 建立一個 Amazon S3 生命週期政策(Lifecycle policy),在7天后轉換資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #674

**題目**
一家公司在Auto Scaling 群組(Auto Scaling group)中執行了Amazon EC2的網路應用程式. 該應用程式使用執行於Amazon RDS上的資料庫(database),用於PostgreSQL DB例項. 當流量增加時,應用程式會緩慢執行. 資料庫(database)型機車在高流量期間的閱讀負荷很大。 設計師應採取什麼行動來解決這些業績問題?(選二.

**選項**
- A. 為 DB 例項開啟自動縮放。
- B. 為 DB 例項建立讀副本。 配置將讀到的流量傳送到讀到的複製的應用程式。
- C. 將 DB 例項轉換為多 AZ DB 例項部署。 配置將讀到的流量傳送到備用 DB 例項的應用程式。
- D. 建立 Amazon ElastiCache 叢集。 在 ElastiCache 叢集中配置快取查詢結果的應用程式。
- E. 配置 Auto Scaling 群組(Auto Scaling group) 子網,以確保在與 DB 例項相同的 可用區(Availability Zone) 中提供 EC2 例項。

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：為 DB 例項開啟自動縮放 。此選項符合題目條件，能有效滿足核心需求。
- C：將 DB 例項轉換為多 AZ DB 例項部署。 配置將讀到的流量傳送到備用 DB 例項的應用程式 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：為 DB 例項建立讀副本。 配置將讀到的流量傳送到讀到的複製的應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon ElastiCache 叢集。 在 ElastiCache 叢集中配置快取查詢結果的應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：配置 Auto Scaling 群組(Auto Scaling group) 子網,以確保在與 DB 例項相同的 可用區(Availability Zone) 中提供 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #675

**題目**
一家公司使用Amazon EC2 執行個體和Amazon Elastic Block Store(Amazon EBS 磁碟區來執行一個應用程式. 該公司每天每EBS量創造一個快照(snapshot),以滿足合規(compliance)的要求. 公司希望實施一個防止意外刪除EBS 磁碟區快照的架構. 解決方案不得改變儲存管理器使用者的行政權利. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立有許可權刪除快照的 IAM 角色。 將角色附加到一個新的EC2例項中. 使用新 EC2 例項中的 AWS CLI 來刪除快照。
- B. 建立拒絕刪除 IAM 政策(IAM policy) 的 IAM 政策(IAM policy)。 將策略附加到儲存管理器使用者中。
- C. 在快照中新增標籤。 在 Recycle Bin 中為有標籤的 EBS 快照建立保留規則。
- D. 鎖定EBS快照以防止刪除.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在快照中新增標籤。 在 Recycle Bin 中為有標籤的 EBS 快照建立保留規則 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立有許可權刪除快照的 IAM 角色。 將角色附加到一個新的EC2例項中. 使用新 EC2 例項中的 AWS CLI 來刪除快照 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立拒絕刪除 IAM 政策(IAM policy) 的 IAM 政策(IAM policy)。 將策略附加到儲存管理器使用者中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：鎖定EBS快照以防止刪除。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #676

**題目**
一個公司的應用程式使用網路負載平衡器,自動放大組,Amazon EC2 執行個體,以及部署在Amazon VPC的資料庫. 公司希望在其Amazon VPC中以近實時的方式獲取網路介面往來流量資訊. 公司希望將資訊傳送給Amazon OpenSearch Service進行分析. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在 Amazon CloudWatch Logs 中建立一個日誌組。 配置 VPC 流程日誌將日誌資料傳送到日誌組. 使用 Amazon Kinesis 資料流將日誌從日誌組流到 OpenSearch Service.
- B. 在 Amazon CloudWatch Logs 中建立一個日誌組。 配置 VPC 流程日誌將日誌資料傳送到日誌組. 使用Amazon Kinesis Data Firehose將日誌從日誌組流到OpenSearch Service.
- C. 在AWS CloudTrail中建立線索. 配置 VPC 流程日誌將日誌資料傳送到線索中. 使用 Amazon Kinesis 資料流將日誌從線索流到OpenSearch Service.
- D. 在AWS CloudTrail中建立線索. 配置 VPC 流程日誌將日誌資料傳送到線索中. 使用Amazon Kinesis Data Firehose將日誌從線索流到OpenSearch Service.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在 Amazon CloudWatch Logs 中建立一個日誌組。 配置 VPC 流程日誌將日誌資料傳送到日誌組. 使用Amazon Kinesis Data Firehose將日誌從日誌組流到OpenSearch Service。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 Amazon CloudWatch Logs 中建立一個日誌組。 配置 VPC 流程日誌將日誌資料傳送到日誌組. 使用 Amazon Kinesis 資料流將日誌從日誌組流到 OpenSearch Service。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在AWS CloudTrail中建立線索. 配置 VPC 流程日誌將日誌資料傳送到線索中. 使用 Amazon Kinesis 資料流將日誌從線索流到OpenSearch Service。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS CloudTrail中建立線索. 配置 VPC 流程日誌將日誌資料傳送到線索中. 使用Amazon Kinesis Data Firehose將日誌從線索流到OpenSearch Service。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #677

**題目**
一家公司正在開發一個應用軟體,將在一個生產Amazon Elastic Kubernetes Service(Amazon EKS)叢集上執行。 EKS叢集管理了由On-Demand Incents提供節點組. 該公司需要專門的EKS叢集來從事發展工作. 公司將不經常使用開發叢集來測試應用程式的韌性. EKS叢集必須管理所有節點. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立只包含 SpotSpractors 的管理節點組。
- B. 建立兩個管理的節點組。 提供一個帶有現場例項的節點組。 提供第二節點組的 Spot 執行個體。
- C. 建立一個Auto Scaling 群組(Auto Scaling group),其發射配置使用Spot 執行個體. 配置使用者資料將節點新增到EKS叢集中.
- D. 建立只包含 On-Demand Incents 的節點組。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立只包含 On-Demand Incents 的節點組 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立只包含 SpotSpractors 的管理節點組 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立兩個管理的節點組。 提供一個帶有現場例項的節點組。 提供第二節點組的 Spot 執行個體 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個Auto Scaling 群組(Auto Scaling group),其發射配置使用Spot 執行個體. 配置使用者資料將節點新增到EKS叢集中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #678

**題目**
一家公司在Amazon S3儲存敏感資料. 一個解決方案架構師需要建立一個加密(encryption)解決方案. 公司需要完全控制使用者建立,旋轉和禁用加密(encryption)金鑰的能力,對任何必須加密的資料儘量不費力. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用預設的伺服器側加密(encryption)使用Amazon S3管理加密(encryption)金鑰(SSE-S3)來儲存敏感資料.
- B. 透過使用AWS Key Management Service(AWS KMS)建立客戶管理金鑰. 使用新金鑰加密S3物件,使用伺服器側式加密(encryption)與AWS KMS金鑰(SSE-KMS).
- C. 使用 AWS Key Management Service(AWS KMS) 建立 AWS 管理金鑰. 使用新金鑰加密S3物件,使用伺服器側式加密(encryption)與AWS KMS金鑰(SSE-KMS).
- D. 下載 S3 物件到 Amazon EC2 例項。 使用客戶管理的金鑰加密物件。 將加密物件上傳到 Amazon S3。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用預設的伺服器側加密(encryption)使用Amazon S3管理加密(encryption)金鑰(SSE-S3)來儲存敏感資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：透過使用AWS Key Management Service(AWS KMS)建立客戶管理金鑰. 使用新金鑰加密S3物件,使用伺服器側式加密(encryption)與AWS KMS金鑰(SSE-KMS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Key Management Service(AWS KMS) 建立 AWS 管理金鑰. 使用新金鑰加密S3物件,使用伺服器側式加密(encryption)與AWS KMS金鑰(SSE-KMS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：下載 S3 物件到 Amazon EC2 例項。 使用客戶管理的金鑰加密物件。 將加密物件上傳到 Amazon S3 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #679

**題目**
一家公司想將自己的虛擬機器(VMs)備份到AWS. 該公司的備份(backup)解決方案將備份出口到一個Amazon S3桶作為物品. S3備份必須保留30天,30天后必須自動刪除. 哪些步驟的組合將滿足這些要求?(選三.

**選項**
- A. 建立已啟用 S3 Object Lock 的 S3 儲存桶(S3 bucket)。
- B. 建立已啟用物件版本的 S3 儲存桶(S3 bucket)。
- C. 為物件配置30天的預設保留期。
- D. 配置一個 S3 生命週期政策(Lifecycle policy) 來保護物件30天。
- E. 配置一個 S3 生命週期政策(Lifecycle policy) 以在30天后過期。
- F. 配置 備份(backup) 解決方案, 以保留30天的時間標記物件

**答案**
C,E,F



**詳解**
正確答案是 **C, E**。
- C：為物件配置30天的預設保留期。此選項符合題目條件，能有效滿足核心需求。
- E：配置一個 S3 生命週期政策(Lifecycle policy) 以在30天后過期 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：建立已啟用 S3 Object Lock 的 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立已啟用物件版本的 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個 S3 生命週期政策(Lifecycle policy) 來保護物件30天 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #680

**題目**
一個解決方案架構師需要將檔案從一個Amazon S3桶複製到一個亞馬遜彈性檔案系統(Amazon EFS)和一個S3 儲存桶(S3 bucket). 檔案必須連續複製。 新的檔案被一致地新增到原來的S3 儲存桶(S3 bucket)中. 複製的檔案只有在原始檔更改時才會被覆蓋. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 為目的地S3 儲存桶(S3 bucket)和EFS檔案系統建立AWS資料同步位置. 為目的地S3 儲存桶(S3 bucket)和EFS檔案系統建立任務. 設定傳輸模式只傳輸已更改的資料。
- B. 建立 AWS Lambda 函式。 把檔案系統掛載到函式中。 在 Amazon S3 檔案建立和更改時設定 S3 事件通知以引用函式. 配置將檔案複製到檔案系統和目的地S3 儲存桶(S3 bucket)的功能.
- C. 為目的地S3 儲存桶(S3 bucket)和EFS檔案系統建立AWS資料同步位置. 為目的地S3 儲存桶(S3 bucket)和EFS檔案系統建立任務. 設定傳輸模式以傳輸所有資料。
- D. 在與檔案系統相同的 VPC 中啟動 Amazon EC2 例項。 掛載檔案系統。 建立一個指令碼,以例行同步起源S3 儲存桶(S3 bucket)中更改的所有物件到目的地S3 儲存桶(S3 bucket)和掛載的檔案系統.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在與檔案系統相同的 VPC 中啟動 Amazon EC2 例項。 掛載檔案系統。 建立一個指令碼,以例行同步起源S3 儲存桶(S3 bucket)中更改的所有物件到目的地S3 儲存桶(S3 bucket)和掛載的檔案系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為目的地S3 儲存桶(S3 bucket)和EFS檔案系統建立AWS資料同步位置. 為目的地S3 儲存桶(S3 bucket)和EFS檔案系統建立任務. 設定傳輸模式只傳輸已更改的資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS Lambda 函式。 把檔案系統掛載到函式中。 在 Amazon S3 檔案建立和更改時設定 S3 事件通知以引用函式. 配置將檔案複製到檔案系統和目的地S3 儲存桶(S3 bucket)的功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為目的地S3 儲存桶(S3 bucket)和EFS檔案系統建立AWS資料同步位置. 為目的地S3 儲存桶(S3 bucket)和EFS檔案系統建立任務. 設定傳輸模式以傳輸所有資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #681

**題目**
一家公司使用Amazon EC2 執行個體並儲存有關亞馬遜彈性塊儲存(Amazon EBS)卷的資料. 公司必須透過使用AWS Key Management Service(AWS KMS)確保所有資料在休息時加密. 公司必須能夠控制加密(encryption)鍵的旋轉. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立客戶管理金鑰。 使用金鑰加密 EBS 磁碟區。
- B. 使用 AWS 管理金鑰加密 EBS 磁碟區。 使用金鑰配置自動金鑰旋轉。
- C. 用匯入的金鑰材料建立外部 KMS 金鑰。 使用金鑰加密 EBS 磁碟區。
- D. 使用 AWS 擁有的金鑰加密 EBS 磁碟區。

**答案**
C


**詳解**
正確答案是 **C**。
- C：用匯入的金鑰材料建立外部 KMS 金鑰。 使用金鑰加密 EBS 磁碟區 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立客戶管理金鑰。 使用金鑰加密 EBS 磁碟區 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS 管理金鑰加密 EBS 磁碟區。 使用金鑰配置自動金鑰旋轉 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 擁有的金鑰加密 EBS 磁碟區 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #682

**題目**
一家公司需要一個解決方案,在Amazon EC2例項上強制資料靜態加密(encryption at rest). 解決辦法必須自動查明不符合要求的資源,並強制執行關於調查結果的合規(compliance)政策。 LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 使用一個IAM 政策(IAM policy),允許使用者只建立加密的Amazon Elastic Block Store(Amazon EBS)卷. 使用AWS Config和AWS Systems Manager自動檢測和補救未加密的EBS 磁碟區.
- B. 使用AWS Key Management Service(AWS KMS)管理加密的亞馬遜彈性塊儲存器(Amazon EBS)卷的存取許可權. 使用AWS Lambda和Amazon EventBridge自動檢測和補救未加密的EBS 磁碟區.
- C. 使用Amazon Macie檢測未加密的Amazon Elastic Block Store(Amazon EBS)卷. 使用AWS Systems Manager自動化規則自動加密已有和新的EBS 磁碟區.
- D. 使用Amazon檢查器檢測未加密的Amazon Elastic Block Store(Amazon EBS)卷. 使用AWS Systems Manager自動化規則自動加密已有和新的EBS 磁碟區.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用AWS Key Management Service(AWS KMS)管理加密的亞馬遜彈性塊儲存器(Amazon EBS)卷的存取許可權. 使用AWS Lambda和Amazon EventBridge自動檢測和補救未加密的EBS 磁碟區。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用一個IAM 政策(IAM policy),允許使用者只建立加密的Amazon Elastic Block Store(Amazon EBS)卷. 使用AWS Config和AWS Systems Manager自動檢測和補救未加密的EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Macie檢測未加密的Amazon Elastic Block Store(Amazon EBS)卷. 使用AWS Systems Manager自動化規則自動加密已有和新的EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon檢查器檢測未加密的Amazon Elastic Block Store(Amazon EBS)卷. 使用AWS Systems Manager自動化規則自動加密已有和新的EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #683

**題目**
一家公司正在將其多層次的前提應用程式轉移到AWS。 該應用程式包括一個單節點MySQL 資料庫(database)和一個多節點網路級. 公司必須在遷移期間儘量減少對申請的更改。 公司希望在遷移後提高應用程式的應變能力. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中,將網路級遷移到Amazon EC2。
- B. 在網路負載平衡器(Network Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中,將資料庫(database)遷移到Amazon EC2.
- C. 將資料庫(database)型機車調整為Amazon RDS型多AZ部署.
- D. 將網路級遷移到 AWS Lambda 函式。
- E. 將資料庫(database)移動到一個Amazon DynamoDB表.

**答案**
C,E



**詳解**
正確答案是 **C, E**。
- C：將資料庫(database)型機車調整為Amazon RDS型多AZ部署。此選項符合題目條件，能有效滿足核心需求。
- E：將資料庫(database)移動到一個Amazon DynamoDB表。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中,將網路級遷移到Amazon EC2。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在網路負載平衡器(Network Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)中,將資料庫(database)遷移到Amazon EC2。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將網路級遷移到 AWS Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #684

**題目**
一家公司希望將自己的網路應用程式從辦公樓遷移到AWS. 公司所在地靠近eu-central-1 區域(Region). 由於規定,公司無法在eu-central-1上推出部分應用. 公司希望實現1位數的毫秒延遲(latency). 哪種解決辦法能滿足這些要求?

**選項**
- A. 在eu-central-1中部署應用程式。將公司的VPC從eu-central-1擴充套件至Amazon CloudFront中的邊緣節點(edge location)。
- B. 透過將公司的VPC從eu-central-1擴充套件到選定的地方區,在AWS地方區部署應用.
- C. 在eu-central-1中部署應用程式。將公司的VPC從eu-central-1擴充套件至Amazon CloudFront中的區域邊緣快取。
- D. 在AWS波長區部署應用,將公司的VPC從eu-central-1擴充套件到選定的波長區。

**答案**
B


**詳解**
正確答案是 **B**。
- B：透過將公司的VPC從eu-central-1擴充套件到選定的地方區,在AWS地方區部署應用。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在eu-central-1中部署應用程式。將公司的VPC從eu-central-1擴充套件至Amazon CloudFront中的邊緣節點(edge location)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在eu-central-1中部署應用程式。將公司的VPC從eu-central-1擴充套件至Amazon CloudFront中的區域邊緣快取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS波長區部署應用,將公司的VPC從eu-central-1擴充套件到選定的波長區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #685

**題目**
公司電子商務網站的流量不可預測,使用AWS Lambda功能直接存取私人的Amazon RDS用於PostgreSQL DB例項. 公司希望保持可預測的資料庫(database)效能,並確保Lambda引證不會讓資料庫(database)的連線過多地超載. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 將客戶端驅動程式指向 RDS 自定義端點。 將Lambda派到VPC裡去
- B. 將客戶端驅動程式指向 RDS 代理端點。 將Lambda派到VPC裡去
- C. 將客戶端驅動程式指向 RDS 自定義端點。 將Lambda的職能部署在VPC之外。
- D. 將客戶端驅動程式指向 RDS 代理端點。 將Lambda的職能部署在VPC之外。

**答案**
B


**詳解**
正確答案是 **B**。
- B：將客戶端驅動程式指向 RDS 代理端點。 將Lambda派到VPC裡去。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將客戶端驅動程式指向 RDS 自定義端點。 將Lambda派到VPC裡去。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將客戶端驅動程式指向 RDS 自定義端點。 將Lambda的職能部署在VPC之外。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將客戶端驅動程式指向 RDS 代理端點。 將Lambda的職能部署在VPC之外。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #686

**題目**
一個公司正在建立一個應用程式。 公司將應用程式測試資料儲存在多個地點。 公司需要在AWS雲中的AWS 區域(Region)中將現場位置與VPC連線. 明年,帳戶和VPC的數量將增加。 網路架構必須簡化新連線的管理,必須提供規模化的能力. LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 在 VPC 之間建立對等連線。 建立 VPN 連線 VPC 和 promise 位置。
- B. 推出Amazon EC2 執行個體. 例如,包括VPN軟體,該軟體使用VPN連線連線所有VPC和辦公地點.
- C. 建立中轉閘道器。 為 VPC 連線建立 VPC 附件。 建立 VPN 連線的連線附件。
- D. 建立AWS Direct Connect連線,連線在原地位置和中央VPC之間. 透過使用對等連線將中心VPC連線到其他VPC.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立AWS Direct Connect連線,連線在原地位置和中央VPC之間. 透過使用對等連線將中心VPC連線到其他VPC。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 VPC 之間建立對等連線。 建立 VPN 連線 VPC 和 promise 位置 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：推出Amazon EC2 執行個體. 例如,包括VPN軟體,該軟體使用VPN連線連線所有VPC和辦公地點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立中轉閘道器。 為 VPC 連線建立 VPC 附件。 建立 VPN 連線的連線附件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #687

**題目**
一個使用AWS的公司需要一個解決方案來預測每個月製造工藝所需的資源. 解決方案必須使用目前儲存在Amazon S3桶中的歷史值. 公司沒有機器學習(ML)經驗,希望使用管理服務進行訓練和預測. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 部署Amazon SageMaker模型。 為推斷建立 SageMaker 端點。
- B. 使用Amazon SageMaker透過使用S3 儲存桶(S3 bucket)中的歷史資料來訓練一個模型.
- C. 配置一個 AWS Lambda 函式,其功能URL使用亞馬遜 SageMaker 端點來根據輸入建立預測.
- D. 配置一個 AWS Lambda 函式,其功能URL使用亞馬遜預測器根據輸入來建立預測.
- E. 透過使用S3 儲存桶(S3 bucket)中的歷史資料來訓練一個亞馬遜福塞卡斯預測器.

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：配置一個 AWS Lambda 函式,其功能URL使用亞馬遜 SageMaker 端點來根據輸入建立預測。此選項符合題目條件，能有效滿足核心需求。
- D：配置一個 AWS Lambda 函式,其功能URL使用亞馬遜預測器根據輸入來建立預測。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：部署Amazon SageMaker模型。 為推斷建立 SageMaker 端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon SageMaker透過使用S3 儲存桶(S3 bucket)中的歷史資料來訓練一個模型。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：透過使用S3 儲存桶(S3 bucket)中的歷史資料來訓練一個亞馬遜福塞卡斯預測器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #688

**題目**
一家公司管理AWS在AWS Organizations的帳戶. AWS IAM 身份識別中心和AWS控制 塔為帳戶配置。 公司希望管理所有帳戶的多個使用者許可權. 許可權會被多個IAM使用者使用,必須被開發者和管理員團隊分割. 每個團隊需要不同的許可權. 公司希望有一個解決方案,其中包括在兩支隊伍中僱用的新使用者. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在 IAM 身份中心為每個帳戶建立個人使用者。 在IAM身份中心建立單獨的開發者和管理者組. 將使用者分配到相應的組別. 為每個組建立自定義的 IAM 政策(IAM policy) 設定精細的許可權。
- B. 在 IAM 身份中心為每個帳戶建立個人使用者。 在IAM身份中心建立單獨的開發者和管理者組. 將使用者分配到相應的組別. 將 AWS 管理 IAM 政策附加給每個使用者,以獲得精細許可權。
- C. 在IAM身份中心建立個人使用者. 在IAM身份中心建立新的開發者和管理者組. 建立新的許可權集,其中包含每個組的適當IAM政策. 將新的小組劃入適當的帳戶。 將新許可權設定分配給新組。 聘用新使用者時,加入相應組別.
- D. 在IAM身份中心建立個人使用者. 建立新的許可權集,其中包含針對每個使用者的適當的IAM政策. 指定使用者進入適當的帳戶。 從具體帳戶中為使用者提供額外的IAM許可權. 當僱用新使用者時,將其新增到IAM身份中心,並分配給帳戶.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在 IAM 身份中心為每個帳戶建立個人使用者。 在IAM身份中心建立單獨的開發者和管理者組. 將使用者分配到相應的組別. 將 AWS 管理 IAM 政策附加給每個使用者,以獲得精細許可權。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 IAM 身份中心為每個帳戶建立個人使用者。 在IAM身份中心建立單獨的開發者和管理者組. 將使用者分配到相應的組別. 為每個組建立自定義的 IAM 政策(IAM policy) 設定精細的許可權 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在IAM身份中心建立個人使用者. 在IAM身份中心建立新的開發者和管理者組. 建立新的許可權集,其中包含每個組的適當IAM政策. 將新的小組劃入適當的帳戶。 將新許可權設定分配給新組。 聘用新使用者時,加入相應組別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在IAM身份中心建立個人使用者. 建立新的許可權集,其中包含針對每個使用者的適當的IAM政策. 指定使用者進入適當的帳戶。 從具體帳戶中為使用者提供額外的IAM許可權. 當僱用新使用者時,將其新增到IAM身份中心,並分配給帳戶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #689

**題目**
一家公司希望將其亞馬遜彈性塊儲存器(Amazon EBS)卷加密(encryption)策略標準化. 公司還希望將操作量產加密(encryption)檢查所需的成本和配置努力降到最低. 哪種解決辦法能滿足這些要求?

**選項**
- A. 寫API的電話來描述EBS 磁碟區,確認EBS 磁碟區是加密的. 使用Amazon EventBridge來安排一個AWS Lambda功能來執行API呼叫.
- B. 寫API的電話來描述EBS 磁碟區,確認EBS 磁碟區是加密的. 執行 API 呼叫 AWS 遠門任務。
- C. 建立一個AWS身份和存取管理(IAM)政策,要求使用EBS捲上的標記. 使用 AWS Cost Explorer 來顯示沒有正確標記的資源。 手動加密未標記的資源。
- D. 為 Amazon EBS 建立 AWS Config 規則,以評價一個磁碟區是否被加密,如果一個磁碟區沒有被加密,則可以虛構磁碟區.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個AWS身份和存取管理(IAM)政策,要求使用EBS捲上的標記. 使用 AWS Cost Explorer 來顯示沒有正確標記的資源。 手動加密未標記的資源 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：寫API的電話來描述EBS 磁碟區,確認EBS 磁碟區是加密的. 使用Amazon EventBridge來安排一個AWS Lambda功能來執行API呼叫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：寫API的電話來描述EBS 磁碟區,確認EBS 磁碟區是加密的. 執行 API 呼叫 AWS 遠門任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 Amazon EBS 建立 AWS Config 規則,以評價一個磁碟區是否被加密,如果一個磁碟區沒有被加密,則可以虛構磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #690

**題目**
一家公司定期上傳GB大小的檔案到Amazon S3. 公司上傳檔案後,公司使用Amazon EC2 Spot 執行個體的fieet來轉碼檔案格式. 公司需要將吞吐量(throughput)的尺度,當公司將資料從presimes資料中心上傳到Amazon S3,當公司將資料從Amazon S3下載到EC2例項時. 哪些解決辦法能滿足這些要求?(選二.

**選項**
- A. 使用S3 儲存桶(S3 bucket)存取點,而不是直接存取S3 儲存桶(S3 bucket).
- B. 上傳檔案到多個 S3 桶。
- C. 使用 S3 多段上傳。
- D. 獲取平行物件的多個位元組範圍。
- E. 上傳檔案時在每個物件中新增隨機字首.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：使用S3 儲存桶(S3 bucket)存取點,而不是直接存取S3 儲存桶(S3 bucket)。此選項符合題目條件，能有效滿足核心需求。
- C：使用 S3 多段上傳 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：上傳檔案到多個 S3 桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：獲取平行物件的多個位元組範圍。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：上傳檔案時在每個物件中新增隨機字首。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #691

**題目**
一個解決方案架構師正在為一個網路應用程式設計一個共享儲存解決方案,該應用程式部署在多個可用區(Availability Zones)上. 網路應用程式執行在Auto Scaling 群組(Auto Scaling group)中的Amazon EC2例項上. 公司計劃頻繁修改內容. 解決方案必須具有很強的連貫性,在變化發生後立即返回新內容. 哪些解決辦法符合這些要求?(選二.

**選項**
- A. 使用AWS Storage Gateway Volume Gateway Internet Small 計算機系統介面(iSCSI)塊儲存器,這些儲存器被安裝到單個EC2例項中.
- B. 建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 在單個EC2例項上掛載 EFS 檔案系統。
- C. 建立共享的亞馬遜彈性塊儲存器(Amazon EBS)磁碟區. 在單個EC2例項上掛載 EBS 磁碟區。
- D. 使用AWS DataSync在Auto Scaling 群組(Auto Scaling group)中實現EC2主機之間的資料連續同步.
- E. 建立 Amazon S3 桶儲存網頁內容。 將快取控制頭的後設資料設定為無快取。 使用Amazon CloudFront來傳送內容.

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：使用AWS Storage Gateway Volume Gateway Internet Small 計算機系統介面(iSCSI)塊儲存器,這些儲存器被安裝到單個EC2例項中。此選項符合題目條件，能有效滿足核心需求。
- D：使用AWS DataSync在Auto Scaling 群組(Auto Scaling group)中實現EC2主機之間的資料連續同步。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 在單個EC2例項上掛載 EFS 檔案系統 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立共享的亞馬遜彈性塊儲存器(Amazon EBS)磁碟區. 在單個EC2例項上掛載 EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立 Amazon S3 桶儲存網頁內容。 將快取控制頭的後設資料設定為無快取。 使用Amazon CloudFront來傳送內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #692

**題目**
一家公司正在使用應用程式負載平衡器(Application Load Balancer)在三個AWS區域部署一個應用程式。 Amazon Route 53將用於在這些區域之間分配交通。 哪個53路的配置應該是一個解決方案設計師來提供MOST高效能的經驗?

**選項**
- A. 使用 延遲(latency) 策略建立 A 記錄。
- B. 建立帶有地理定位政策的記錄。
- C. 以失敗策略建立 CNAME 記錄。
- D. 建立帶有地理近似政策的CNAME記錄.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立帶有地理近似政策的CNAME記錄。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 延遲(latency) 策略建立 A 記錄 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立帶有地理定位政策的記錄 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：以失敗策略建立 CNAME 記錄 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #693

**題目**
一家公司擁有一個網路應用程式,其中包括嵌入式的NoSQL 資料庫(database). 該應用程式執行在應用程式負載平衡器(Application Load Balancer)(ALB)後面的Amazon EC2例項上. 這些執行個體以Amazon EC2 Auto Scaling 群組(Auto Scaling group)在單一可用區(Availability Zone)中執行. 最近交通量的增加要求該應用軟體高度可用,並且資料庫(database)最終保持一致. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將ALB改為網路負載平衡器(Network Load Balancer)。 保持嵌入式 NoSQL 資料庫(database) 及其在 EC2 例項上的 複寫(replication) 服務.
- B. 將ALB改為網路負載平衡器(Network Load Balancer)。 透過使用AWS 資料庫(Database)遷移服務(AWS DS)將嵌入式的NoSQL 資料庫(database)遷移到Amazon DynamoDB.
- C. 修改Auto Scaling 群組(Auto Scaling group),在3個可用區(Availability Zones)中使用EC2例項. 維護嵌入式 NoSQL 資料庫(database) 及其在EC2 例項上的 複寫(replication) 服務.
- D. 修改Auto Scaling 群組(Auto Scaling group),在3個可用區(Availability Zones)中使用EC2例項. 透過使用AWS 資料庫(Database)遷移服務(AWS DS)將嵌入式的NoSQL 資料庫(database)遷移到Amazon DynamoDB.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將ALB改為網路負載平衡器(Network Load Balancer)。 保持嵌入式 NoSQL 資料庫(database) 及其在 EC2 例項上的 複寫(replication) 服務。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將ALB改為網路負載平衡器(Network Load Balancer)。 透過使用AWS 資料庫(Database)遷移服務(AWS DS)將嵌入式的NoSQL 資料庫(database)遷移到Amazon DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：修改Auto Scaling 群組(Auto Scaling group),在3個可用區(Availability Zones)中使用EC2例項. 維護嵌入式 NoSQL 資料庫(database) 及其在EC2 例項上的 複寫(replication) 服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改Auto Scaling 群組(Auto Scaling group),在3個可用區(Availability Zones)中使用EC2例項. 透過使用AWS 資料庫(Database)遷移服務(AWS DS)將嵌入式的NoSQL 資料庫(database)遷移到Amazon DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #694

**題目**
一家公司正在AWS上建立一個購物應用程式. 應用程式提供一個目錄,每個月都會改變一次,需要與流量相適應。 公司希望從應用程式中獲取儘可能低的延遲(latency). 每個使用者的購物車的資料需要高度可用. 使用者會話資料即使被斷開並重新連線,也必須可用. 解決方案設計師應該做什麼來確保購物車資料隨時儲存?

**選項**
- A. 配置一個 應用程式負載平衡器(Application Load Balancer) , 以啟用粘度會話特性( secret afinity) 存取 Amazon Aurora 中的目錄。
- B. 為 Redis 配置 Amazon ElastiCache 以快取 Amazon DynamoDB 的目錄資料以及使用者會話的購物車資料.
- C. 配置 Amazon OpenSearch Service 以快取 Amazon DynamoDB 的目錄資料和使用者會話的購物車資料.
- D. 配置 Amazon EC2 例項與 Amazon Elastic Block Store(Amazon EBS) 儲存目錄和購物車。 配置自動快照。

**答案**
B


**詳解**
正確答案是 **B**。
- B：為 Redis 配置 Amazon ElastiCache 以快取 Amazon DynamoDB 的目錄資料以及使用者會話的購物車資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置一個 應用程式負載平衡器(Application Load Balancer) , 以啟用粘度會話特性( secret afinity) 存取 Amazon Aurora 中的目錄 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon OpenSearch Service 以快取 Amazon DynamoDB 的目錄資料和使用者會話的購物車資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon EC2 例項與 Amazon Elastic Block Store(Amazon EBS) 儲存目錄和購物車。 配置自動快照 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #695

**題目**
一家公司正在建立一個基於微服務的應用程式,將部署在亞馬遜精英庫伯涅茨服務(Amazon EKS)上。 微服務會互相影響. 公司希望確保該應用程式能夠被觀察到,以識別未來的業績問題. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置使用 Amazon ElastiCache 的應用程式,以減少傳送給微服務的請求數量.
- B. 配置 Amazon CloudWatch 容器透視器,從EKS叢集中收集度量衡. 配置 AWS X-Ray 以追蹤微服務之間的請求.
- C. 配置 AWS CloudTrail 來審查 API 呼叫. 構建亞馬遜快速視儀表板,觀測微服務互動.
- D. 使用 AWS 信任顧問來理解應用程式的效能.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置使用 Amazon ElastiCache 的應用程式,以減少傳送給微服務的請求數量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置 Amazon CloudWatch 容器透視器,從EKS叢集中收集度量衡. 配置 AWS X-Ray 以追蹤微服務之間的請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 AWS CloudTrail 來審查 API 呼叫. 構建亞馬遜快速視儀表板,觀測微服務互動。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 信任顧問來理解應用程式的效能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #696

**題目**
公司需要向客戶提供安全查閱其資料的機會。 公司處理客戶資料,並將結果儲存在Amazon S3桶中. 所有資料都須遵守嚴格的條例和安全要求。 資料必須在休息時加密。 每個客戶必須能夠只從其AWS帳戶中獲取資料. 公司職工不得查閱資料. 哪種解決辦法能滿足這些要求?

**選項**
- A. 為每個客戶提供AWS Certificate Manager(ACM)憑證。 加密資料客戶端。 在私人憑證政策中,除客戶提供的IAM角色外,拒絕所有委託人獲得憑證.
- B. 為每個客戶提供單獨的AWS Key Management Service(AWS KMS)金鑰. 加密資料伺服器側。 在S3 儲存桶政策(bucket policy)中,除客戶提供的IAM角色外,拒絕提供解密(decryption)所有主資料.
- C. 為每個客戶提供單獨的AWS Key Management Service(AWS KMS)金鑰. 加密資料伺服器側。 在每一KMS關鍵政策中,除客戶提供的IAM作用外,拒絕提供解密(decryption)所有主資料。
- D. 為每個客戶提供AWS Certificate Manager(ACM)憑證。 加密資料客戶端。 在公共憑證政策中,除客戶提供的IAM角色外,拒絕所有負責人獲得憑證。

**答案**
D


**詳解**
正確答案是 **D**。
- D：為每個客戶提供AWS Certificate Manager(ACM)憑證。 加密資料客戶端。 在公共憑證政策中,除客戶提供的IAM角色外,拒絕所有負責人獲得憑證。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為每個客戶提供AWS Certificate Manager(ACM)憑證。 加密資料客戶端。 在私人憑證政策中,除客戶提供的IAM角色外,拒絕所有委託人獲得憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為每個客戶提供單獨的AWS Key Management Service(AWS KMS)金鑰. 加密資料伺服器側。 在S3 儲存桶政策(bucket policy)中,除客戶提供的IAM角色外,拒絕提供解密(decryption)所有主資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為每個客戶提供單獨的AWS Key Management Service(AWS KMS)金鑰. 加密資料伺服器側。 在每一KMS關鍵政策中,除客戶提供的IAM作用外,拒絕提供解密(decryption)所有主資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #697

**題目**
一個解決方案架構師建立了一個VPC,其中包括兩個公共子網和兩個私人子網. 公司安全任務要求解決方案架構師在私營子網推出所有Amazon EC2例項。 然而,當解決方案架構師在私人子網的埠80和443上推出執行網路伺服器的EC2例項時,任何外部網際網路流量都不能連線到伺服器. 解決辦法設計師應如何解決這一問題?

**選項**
- A. 在私人子網中將EC2例項附加到Auto Scaling 群組(Auto Scaling group)上。 確保網站的DNS記錄解決Auto Scaling 群組(Auto Scaling group)識別符號.
- B. 在公共子網中提供網際網路上網的應用程式負載平衡器(Application Load Balancer)(ALB)。 將EC2例項新增到與ALENSure相關的目標群體中,網站的DNS記錄解決了ALB.
- C. 在私人子網中啟動一個NAT閘道器. 更新私有子網的路由表,為NAT閘道器新增預設路由. 在NAT閘道器中附加一個公共彈性IP地址.
- D. 確保作為EC2例項的安全群組(security group)允許HTTP在80號口岸的流量和HTTPS在443號口岸的流量. 確保網站的DNS記錄解決EC2例項的公開IP地址.

**答案**
D


**詳解**
正確答案是 **D**。
- D：確保作為EC2例項的安全群組(security group)允許HTTP在80號口岸的流量和HTTPS在443號口岸的流量. 確保網站的DNS記錄解決EC2例項的公開IP地址。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在私人子網中將EC2例項附加到Auto Scaling 群組(Auto Scaling group)上。 確保網站的DNS記錄解決Auto Scaling 群組(Auto Scaling group)識別符號。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在公共子網中提供網際網路上網的應用程式負載平衡器(Application Load Balancer)(ALB)。 將EC2例項新增到與ALENSure相關的目標群體中,網站的DNS記錄解決了ALB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在私人子網中啟動一個NAT閘道器. 更新私有子網的路由表,為NAT閘道器新增預設路由. 在NAT閘道器中附加一個公共彈性IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #698

**題目**
一家公司正在向亞馬遜智慧Kubernetes Service(Amazon EKS)部署一個新的應用程式,其中有一個AWS Fargate叢集. 應用程式需要儲存資料永續性的解決方案. 解決辦法必須非常可行,而且有過失。 解決辦法也必須在多個應用容器之間共享。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在同一可用區(Availability Zones)中建立Amazon Elastic Block Store(Amazon EBS)卷,放置EKS工人節點. 在 EKS 叢集上的儲存類物件中註冊卷。 使用 EBS 多選項在容器之間共享資料.
- B. 建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 在 EKS 叢集上的儲存類物件中註冊檔案系統。 對所有容器使用相同的檔案系統。
- C. 建立一個亞馬遜彈性塊儲存器(Amazon EBS)磁碟區. 在 EKS 叢集上的儲存類物件中註冊磁碟區。 對所有容器使用相同的容量。
- D. 在相同的可用區(Availability Zones)中建立亞馬遜彈性檔案系統(Amazon EFS),將EKS工人節點放置在其中. 在 EKS 叢集上的儲存類物件中註冊檔案系統。 建立一個 AWS Lambda 函式,在檔案系統之間同步資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在同一可用區(Availability Zones)中建立Amazon Elastic Block Store(Amazon EBS)卷,放置EKS工人節點. 在 EKS 叢集上的儲存類物件中註冊卷。 使用 EBS 多選項在容器之間共享資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 在 EKS 叢集上的儲存類物件中註冊檔案系統。 對所有容器使用相同的檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個亞馬遜彈性塊儲存器(Amazon EBS)磁碟區. 在 EKS 叢集上的儲存類物件中註冊磁碟區。 對所有容器使用相同的容量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在相同的可用區(Availability Zones)中建立亞馬遜彈性檔案系統(Amazon EFS),將EKS工人節點放置在其中. 在 EKS 叢集上的儲存類物件中註冊檔案系統。 建立一個 AWS Lambda 函式,在檔案系統之間同步資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #699

**題目**
一家公司有一個在其本地資料中心使用Docker容器的應用程式. 該應用程式執行在一個容器主機上,將永續性資料儲存在主機的一卷中. 集裝箱例項使用儲存的永續性資料。 公司希望將應用程式移動到一個完全管理的服務,因為公司不想管理任何伺服器或儲存基礎設施. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon Elastic Kubernetes Service(Amazon EKS),並設有自控節點. 在 Amazon EC2 例項中建立一個 Amazon 彈性塊儲存器( Amazon EBS)。 使用EBS體積作為容器中掛載的永續性體積.
- B. 使用亞馬遜彈性容器服務(Amazon ECS),具有AWS Fargate發射型. 建立亞馬遜彈性檔案系統(Amazon EFS)卷. 新增EFS體積,作為容器中掛載的持久儲存體積.
- C. 使用亞馬遜彈性容器服務(Amazon ECS),具有AWS Fargate發射型. 建立 Amazon S3 桶. 將S3 儲存桶(S3 bucket)標註為安裝在容器中的持久儲存量。
- D. 使用帶有Amazon EC2發射型的亞馬遜彈性容器服務(Amazon ECS). 建立亞馬遜彈性檔案系統(Amazon EFS)卷. 新增EFS體積,作為容器中掛載的持久儲存體積.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用亞馬遜彈性容器服務(Amazon ECS),具有AWS Fargate發射型. 建立亞馬遜彈性檔案系統(Amazon EFS)卷. 新增EFS體積,作為容器中掛載的持久儲存體積。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon Elastic Kubernetes Service(Amazon EKS),並設有自控節點. 在 Amazon EC2 例項中建立一個 Amazon 彈性塊儲存器( Amazon EBS)。 使用EBS體積作為容器中掛載的永續性體積。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用亞馬遜彈性容器服務(Amazon ECS),具有AWS Fargate發射型. 建立 Amazon S3 桶. 將S3 儲存桶(S3 bucket)標註為安裝在容器中的持久儲存量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用帶有Amazon EC2發射型的亞馬遜彈性容器服務(Amazon ECS). 建立亞馬遜彈性檔案系統(Amazon EFS)卷. 新增EFS體積,作為容器中掛載的持久儲存體積。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #700

**題目**
一個遊戲公司想在多個AWS地區推出新的網際網路化應用. 該應用程式將使用TCP和UDP協議進行通訊. 該公司需要為全球使用者提供高可用性(high availability)和最低延遲(latency). 一個設計師應採取何種綜合行動來滿足這些要求?(選二.

**選項**
- A. 在每個 區域(Region) 中的應用程式前建立內部網路負載平衡器。
- B. 在每個 區域(Region) 中的應用程式前建立外部應用程式負載平衡器。
- C. 建立一個 AWS 全球加速器加速器,用於每個區域(Region)中向負載平衡器的路由流量.
- D. 配置 Amazon Route 53 使用地理定位路由政策分配流量.
- E. 配置 Amazon CloudFront 處理每個 區域(Region) 中應用程式的流量和線路請求

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：在每個 區域(Region) 中的應用程式前建立外部應用程式負載平衡器 。此選項符合題目條件，能有效滿足核心需求。
- C：建立一個 AWS 全球加速器加速器,用於每個區域(Region)中向負載平衡器的路由流量。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在每個 區域(Region) 中的應用程式前建立內部網路負載平衡器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon Route 53 使用地理定位路由政策分配流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：配置 Amazon CloudFront 處理每個 區域(Region) 中應用程式的流量和線路請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #701

**題目**
一個城市在應用程式負載平衡器(Application Load Balancer)(ALB)之後部署了一個執行在Amazon EC2例項上的網路應用程式. 該應用程式的使用者報告了零星的效能,這似乎與源於隨機IP地址的DDoS攻擊有關. 城市需要一個需要最小配置變化的解決方案,為DDoS源提供稽核(audit)線索. 哪種解決辦法符合這些要求?

**選項**
- A. 啟用 ALB 上的 AWS WAF 網路 ACL, 並配置規則以阻斷來自未知來源的流量。
- B. 訂閱亞馬遜督察. 與AWS DDoS響應團隊(DRT)接觸,將緩解控制整合到服務中.
- C. 訂閱至AWS Shield高階. 與AWS DDoS響應團隊(DRT)接觸,將緩解控制整合到服務中.
- D. 為應用程式建立 Amazon CloudFront 分佈,並將 ALB 設定為來源。 啟用關於發行的 AWS WAF 網頁 ACL, 並配置規則以阻斷來自未知來源的流量

**答案**
B


**詳解**
正確答案是 **B**。
- B：訂閱亞馬遜督察. 與AWS DDoS響應團隊(DRT)接觸,將緩解控制整合到服務中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：啟用 ALB 上的 AWS WAF 網路 ACL, 並配置規則以阻斷來自未知來源的流量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：訂閱至AWS Shield高階. 與AWS DDoS響應團隊(DRT)接觸,將緩解控制整合到服務中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為應用程式建立 Amazon CloudFront 分佈,並將 ALB 設定為來源。 啟用關於發行的 AWS WAF 網頁 ACL, 並配置規則以阻斷來自未知來源的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #702

**題目**
一家公司將最近海洋調查的200TB資料複製到AWS Snowball Edge Storage Optimized裝置上。 該公司有一個高效能運算(HPC)叢集,託管在AWS上尋找石油和天然氣礦藏. 一個解決方案架構師必須為叢集提供一致的次毫升延遲(latency)和高吞吐量(throughput)存取雪球邊緣儲存最佳化裝置的資料. 公司將裝置發回AWS. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 Amazon S3 桶. 將資料匯入S3 儲存桶(S3 bucket). 配置 AWS Storage Gateway 檔案閘道器使用 S3 儲存桶(S3 bucket). 從 HPC 叢集例項存取檔案閘道器。
- B. 建立 Amazon S3 桶. 將資料匯入S3 儲存桶(S3 bucket). 為Lustre檔案系統配置一個Amazon FSx,並將其與S3 儲存桶(S3 bucket)整合. 從 HPC 叢集例項存取 Lustre 檔案系統的 FSx。
- C. 建立一個Amazon S3桶和一個亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 將資料匯入S3 儲存桶(S3 bucket). 將S3 儲存桶(S3 bucket)的資料複製到EFS檔案系統. 從HPC叢集例項存取 EFS 檔案系統.
- D. 為 Lustre 檔案系統建立 Amazon FSx。 直接將資料匯入FSx用於Lustre檔案系統. 從 HPC 叢集例項存取 Lustre 檔案系統的 FSx。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個Amazon S3桶和一個亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 將資料匯入S3 儲存桶(S3 bucket). 將S3 儲存桶(S3 bucket)的資料複製到EFS檔案系統. 從HPC叢集例項存取 EFS 檔案系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon S3 桶. 將資料匯入S3 儲存桶(S3 bucket). 配置 AWS Storage Gateway 檔案閘道器使用 S3 儲存桶(S3 bucket). 從 HPC 叢集例項存取檔案閘道器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon S3 桶. 將資料匯入S3 儲存桶(S3 bucket). 為Lustre檔案系統配置一個Amazon FSx,並將其與S3 儲存桶(S3 bucket)整合. 從 HPC 叢集例項存取 Lustre 檔案系統的 FSx 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 Lustre 檔案系統建立 Amazon FSx。 直接將資料匯入FSx用於Lustre檔案系統. 從 HPC 叢集例項存取 Lustre 檔案系統的 FSx 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #703

**題目**
一家公司有一個NFS伺服器位於一個立面資料中心,需要定期向Amazon S3備份少量資料. 哪種解決辦法符合這些要求,並且最符合成本效益?

**選項**
- A. 設定AWS Glue,將預設伺服器的資料複製到Amazon S3.
- B. 在虛擬伺服器上設定一個AWS資料同步代理,並將資料同步到Amazon S3.
- C. 利用 AWS Transfer 為 SFTP 設定 SFTP 同步, 以同步 資料從場地到 Amazon S3。
- D. 搭建AWS Direct Connect連線於promise資料中心和一個VPC之間,並將資料複製到Amazon S3.

**答案**
D


**詳解**
正確答案是 **D**。
- D：搭建AWS Direct Connect連線於promise資料中心和一個VPC之間,並將資料複製到Amazon S3。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：設定AWS Glue,將預設伺服器的資料複製到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在虛擬伺服器上設定一個AWS資料同步代理,並將資料同步到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：利用 AWS Transfer 為 SFTP 設定 SFTP 同步, 以同步 資料從場地到 Amazon S3 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #704

**題目**
線上電子遊戲公司必須為其遊戲伺服器維護超低的延遲(latency). 遊戲伺服器執行在 Amazon EC2 例上. 公司需要一個解決方案,每秒可以處理數百萬UDP網際網路流量請求. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置一個應用程式負載平衡器(Application Load Balancer),配備所需的協議和網際網路流量的埠. 指定EC2例項為目標。
- B. 為網際網路流量配置一個負載平衡器(Load Balancer)閘道器。 指定EC2例項為目標。
- C. 配置一個網路負載平衡器(Network Load Balancer),配備所需的協議和網際網路流量的埠. 指定EC2例項為目標。
- D. 在單獨的AWS區域EC2例項上推出一套相同的遊戲伺服器. 將網際網路接入兩組EC2例項。

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置一個應用程式負載平衡器(Application Load Balancer),配備所需的協議和網際網路流量的埠. 指定EC2例項為目標。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為網際網路流量配置一個負載平衡器(Load Balancer)閘道器。 指定EC2例項為目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個網路負載平衡器(Network Load Balancer),配備所需的協議和網際網路流量的埠. 指定EC2例項為目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在單獨的AWS區域EC2例項上推出一套相同的遊戲伺服器. 將網際網路接入兩組EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #705

**題目**
一家公司在一個VPC中執行一個三級應用程式. 資料庫(database)級對 MySQL DB 例項使用 Amazon RDS。 公司計劃將MySQL DB例項的RDS遷移到Amazon Aurora PostgreSQL DB叢集. 公司需要一個解決方案,複製在向新的資料庫(database)遷移過程中發生的資料變化. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 使用 AWS 資料庫(Database) 遷移服務(AWS DSM) Schema 轉換來轉換 資料庫(database) 物件.
- B. 使用 AWS 資料庫(Database) 遷移服務(AWS DS) Schema 轉換以建立 Aurora PostgreSQL 在 RDS 上為 MySQL DB 例項讀取複製品.
- C. 配置一個 Aurora MySQL 為 MySQL DB 例項讀取 RDS 複製件。
- D. 定義 AWS 資料庫(Database) 遷移服務(AWS DMS)任務,並使用變化資料捕獲(CDC)來遷移資料.
- E. 推廣Aurora PostgreSQL在複製滯後為零時讀取複製品到一個獨立的Aurora PostgreSQL DB叢集.

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：使用 AWS 資料庫(Database) 遷移服務(AWS DSM) Schema 轉換來轉換 資料庫(database) 物件。此選項符合題目條件，能有效滿足核心需求。
- E：推廣Aurora PostgreSQL在複製滯後為零時讀取複製品到一個獨立的Aurora PostgreSQL DB叢集。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：使用 AWS 資料庫(Database) 遷移服務(AWS DS) Schema 轉換以建立 Aurora PostgreSQL 在 RDS 上為 MySQL DB 例項讀取複製品。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個 Aurora MySQL 為 MySQL DB 例項讀取 RDS 複製件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：定義 AWS 資料庫(Database) 遷移服務(AWS DMS)任務,並使用變化資料捕獲(CDC)來遷移資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #706

**題目**
一個公司有一個資料庫(database),執行在部署在多個可用區(Availability Zones)的Amazon RDS例項上. 該公司定期執行一個針對資料庫(database)的指令碼,以報告加入資料庫(database)的新條目. 與資料庫(database)相反的指令碼對關鍵應用程式的效能產生了負面影響. 公司需要以最低成本提高應用效能. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在指令碼中新增功能以識別活動連線最少的例項。 配置從該例項讀取的指令碼以報告全部新條目。
- B. 建立資料庫(database)的讀取複製品. 配置指令碼只查詢讀取的複製件以報告全部新條目。
- C. 指示開發團隊在每天結束時手動在資料庫(database)中匯出當天的新條目.
- D. 使用 Amazon ElastiCache 來快取指令碼執行於資料庫(database)的常見查詢.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立資料庫(database)的讀取複製品. 配置指令碼只查詢讀取的複製件以報告全部新條目。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在指令碼中新增功能以識別活動連線最少的例項。 配置從該例項讀取的指令碼以報告全部新條目 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：指示開發團隊在每天結束時手動在資料庫(database)中匯出當天的新條目。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Amazon ElastiCache 來快取指令碼執行於資料庫(database)的常見查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #707

**題目**
一家公司正在使用應用程式負載平衡器(Application Load Balancer)(ALB)向網際網路提交應用程式。 公司在整個應用中發現異常的交通通路模式. 一個解決方案架構師需要提高基礎設施的能見度,以幫助公司更好地理解這些異常. 滿足這些要求的MOST業務效率解決方案是什麼?

**選項**
- A. 在 Amazon Athena 中為 AWS CloudTrail 日誌建立表格。 為相關資訊建立查詢。
- B. 啟用 ALB 存取日誌到 Amazon S3。 在 Amazon Athena 中建立表格並查詢日誌。
- C. 啟用 ALB 存取日誌到 Amazon S3。 在文字編輯器中開啟每個檔案,並搜尋每行相關資訊.
- D. 在一個專門的Amazon EC2例項上使用Amazon EMR直接查詢ALB以獲取流量存取日誌資訊.

**答案**
C


**詳解**
正確答案是 **C**。
- C：啟用 ALB 存取日誌到 Amazon S3。 在文字編輯器中開啟每個檔案,並搜尋每行相關資訊。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 Amazon Athena 中為 AWS CloudTrail 日誌建立表格。 為相關資訊建立查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：啟用 ALB 存取日誌到 Amazon S3。 在 Amazon Athena 中建立表格並查詢日誌 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在一個專門的Amazon EC2例項上使用Amazon EMR直接查詢ALB以獲取流量存取日誌資訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #708

**題目**
公司希望在其AWS環境中使用NAT閘道器. 公司在私人子網中的Amazon EC2 執行個體必須能夠透過NAT閘道器連線到公共網際網路. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在與EC2例項相同的私有子網中建立公共NAT閘道器.
- B. 在與EC2例項相同的私有子網中建立私有的NAT閘道器.
- C. 在與EC2例項相同的VPC中,在公共子網中建立公共NAT閘道器.
- D. 在與EC2例項相同的VPC中,在公共子網中建立私有的NAT閘道器.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在與EC2例項相同的VPC中,在公共子網中建立私有的NAT閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在與EC2例項相同的私有子網中建立公共NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在與EC2例項相同的私有子網中建立私有的NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在與EC2例項相同的VPC中,在公共子網中建立公共NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #709

**題目**
一家公司在AWS Organizations有一個組織. 該公司在根組織單位(OU)的四個AWS帳戶中執行Amazon EC2 執行個體. 有3個非生產帳戶和一個生產帳戶。 公司希望禁止使用者在非生產帳戶中推出一定規模的EC2 執行個體. 該公司制訂了一項服務控制政策(SCP),禁止使用違禁型別的發射。 採用何種辦法部署安全程式將滿足這些要求?(選二.

**選項**
- A. 將 SCP 附加到根 OU 為組織.
- B. 將SCP附在三個非生產組織成員帳戶中。
- C. 將SCP附在各組織管理帳戶中。
- D. 為生產帳戶建立 OU。 將 SCP 附加到 OU 上. 將製作成員帳戶移至新的 OU。
- E. 為所需的帳戶建立 OU。 將 SCP 附加到 OU 上. 將非生產成員帳戶移至新的OU.

**答案**
D,E



**詳解**
正確答案是 **D, E**。
- D：為生產帳戶建立 OU。 將 SCP 附加到 OU 上. 將製作成員帳戶移至新的 OU 。此選項符合題目條件，能有效滿足核心需求。
- E：為所需的帳戶建立 OU。 將 SCP 附加到 OU 上. 將非生產成員帳戶移至新的OU。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：將 SCP 附加到根 OU 為組織。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將SCP附在三個非生產組織成員帳戶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將SCP附在各組織管理帳戶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #710

**題目**
在Amazon EC2例項上託管的一家公司網站處理儲存在Amazon S3的分類資料. 出於安全考慮,該公司需要在其EC2資源與Amazon S3之間建立私人和安全的聯絡。 哪種解決辦法符合這些要求?

**選項**
- A. 設定S3 儲存桶(S3 bucket)政策,允許從VPC 端點(VPC endpoint)進入.
- B. 設定一個IAM 政策(IAM policy),允許讀寫存取S3 儲存桶(S3 bucket).
- C. 設定一個NAT閘道器以存取私人子網以外的資源.
- D. 設定存取金鑰ID和秘密存取金鑰以存取S3 儲存桶(S3 bucket).

**答案**
A


**詳解**
正確答案是 **A**。
- A：設定S3 儲存桶(S3 bucket)政策,允許從VPC 端點(VPC endpoint)進入。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：設定一個IAM 政策(IAM policy),允許讀寫存取S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：設定一個NAT閘道器以存取私人子網以外的資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：設定存取金鑰ID和秘密存取金鑰以存取S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #711

**題目**
一家電子商務公司在AWS上執行其應用程式. 該應用程式為基礎資料庫(database)使用多AZ模式的Amazon Aurora PostgreSQL叢集. 在最近的一次宣傳活動中,應用程式經歷了沉重的閱讀負荷和書寫負荷。 使用者試圖存取應用程式時遇到超時問題。 一個解決方案架構師需要使應用架構更加可擴充套件,並且可以高度可用. LEAST故障時間將滿足這些要求的哪一個解決方案?

**選項**
- A. 建立一個以Aurora叢集為源的Amazon EventBridge規則. 建立一個 AWS Lambda 函式來記錄Aurora叢集的狀態變化事件. 新增 Lambda 函式作為 EventBridge 規則的目標. 新增額外的讀取節點以失敗到。
- B. 修改 Aurora 叢集並啟用零下時重啟(ZDR)特性. 使用資料庫(Database)活動流在叢集上跟蹤叢集狀態.
- C. 在 Aurora 叢集中新增額外的讀取例項。 為Aurora叢集建立一個Amazon RDS代理目標組.
- D. 為 Redis 快取建立 Amazon ElastiCache。 透過使用AWS 資料庫(Database) 遷移服務(AWS DS),採用迴轉方式將Aurora叢集的資料複製到Redis.

**答案**
B


**詳解**
正確答案是 **B**。
- B：修改 Aurora 叢集並啟用零下時重啟(ZDR)特性. 使用資料庫(Database)活動流在叢集上跟蹤叢集狀態。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個以Aurora叢集為源的Amazon EventBridge規則. 建立一個 AWS Lambda 函式來記錄Aurora叢集的狀態變化事件. 新增 Lambda 函式作為 EventBridge 規則的目標. 新增額外的讀取節點以失敗到 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Aurora 叢集中新增額外的讀取例項。 為Aurora叢集建立一個Amazon RDS代理目標組。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 Redis 快取建立 Amazon ElastiCache。 透過使用AWS 資料庫(Database) 遷移服務(AWS DS),採用迴轉方式將Aurora叢集的資料複製到Redis。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #712

**題目**
一家公司正在AWS上設計一個網路應用程式. 該應用程式將使用公司現有資料中心和公司VPC之間的VPN連線. 公司使用Amazon Route 53作為其DNS服務. 應用程式必須使用私有的DNS記錄與VPC的premess服務進行通訊. 哪種解決辦法能以安全的方式滿足這些要求?

**選項**
- A. 建立路由 53 解析器出入口。 建立解脫法則. 將解決者規則與VPC聯絡起來.
- B. 建立一條53路解碼器進入端點。 建立解脫法則. 將解決者規則與VPC聯絡起來.
- C. 建立53路私人託管區. 將私人託管區與VPC聯絡起來。
- D. 建立53路公共託管區. 為每個服務建立記錄以允許服務通訊

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立53路私人託管區. 將私人託管區與VPC聯絡起來。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立路由 53 解析器出入口。 建立解脫法則. 將解決者規則與VPC聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一條53路解碼器進入端點。 建立解脫法則. 將解決者規則與VPC聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立53路公共託管區. 為每個服務建立記錄以允許服務通訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #713

**題目**
一家公司正在我們東1區域(Region)進行攝影託管服務。 該服務使多國使用者能夠上傳和檢視照片。 一些照片被大量瀏覽數月,其他照片被瀏覽不到一週。 應用程式允許每張照片上傳最多20 MB. 該服務使用照片後設資料來確定要向每個使用者顯示哪些照片. 哪種解決辦法能以成本效益高的方式提供適當的使用者存取MOST?

**選項**
- A. 在Amazon DynamoDB中儲存照片. 開啟 DynamoDB 加速器( DAX) 以快取經常檢視的專案。
- B. 在亞馬遜S3 Intelligent-Tiering儲存類中儲存照片. 將照片後設資料及其S3位置儲存在DynamoDB.
- C. 在Amazon S3標準儲存類中儲存照片. 設定一個S3 生命週期政策(Lifecycle policy),將超過30天的照片移動到S3標準-不頻繁存取(S3 Standard-IA)儲存類. 使用物件標記來跟蹤後設資料。
- D. 在Amazon S3冰川儲存類中儲存照片. 設定一個S3 生命週期政策(Lifecycle policy),將超過30天的照片移動到S3 Glacier Deep Archive儲存類. 將照片後設資料及其S3位置儲存在 Amazon OpenSearch Service.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在Amazon S3冰川儲存類中儲存照片. 設定一個S3 生命週期政策(Lifecycle policy),將超過30天的照片移動到S3 Glacier Deep Archive儲存類. 將照片後設資料及其S3位置儲存在 Amazon OpenSearch Service。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Amazon DynamoDB中儲存照片. 開啟 DynamoDB 加速器( DAX) 以快取經常檢視的專案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在亞馬遜S3 Intelligent-Tiering儲存類中儲存照片. 將照片後設資料及其S3位置儲存在DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon S3標準儲存類中儲存照片. 設定一個S3 生命週期政策(Lifecycle policy),將超過30天的照片移動到S3標準-不頻繁存取(S3 Standard-IA)儲存類. 使用物件標記來跟蹤後設資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #714

**題目**
在Amazon EC2 執行個體中,一家公司在應用程式負載平衡器(Application Load Balancer)背後執行了一個非常可用的網路應用程式。 該公司使用Amazon CloudWatch 度量衡. 隨著網路應用程式的流量增加,一些EC2 執行個體由於許多未決請求而變得超載. " 雲表 " 的衡量標準顯示,處理的請求數量和從某些EC2例項得到答覆的時間都高於其他EC2例項。 該公司不希望向已經超負荷的EC2 執行個體提交新的請求。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用基於 RequestPerTarget 和 ActiveConnection Counter Cloud Watch 度量衡的圓 Robin 路由演算法.
- B. 使用基於 RequestContPerTerTarget 和 ActiveConnection Cound Cloud Watch 度量衡的最小未決請求演算法.
- C. 使用基於 RequestCount 和 目標響應時雲表測量的圓 Robin 路由演算法.
- D. 使用基於 RequestCount 和 GobjectResponseTime Cloud Watch 度量衡的最小未決請求演算法.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用基於 RequestCount 和 目標響應時雲表測量的圓 Robin 路由演算法。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用基於 RequestPerTarget 和 ActiveConnection Counter Cloud Watch 度量衡的圓 Robin 路由演算法。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用基於 RequestContPerTerTarget 和 ActiveConnection Cound Cloud Watch 度量衡的最小未決請求演算法。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用基於 RequestCount 和 GobjectResponseTime Cloud Watch 度量衡的最小未決請求演算法。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #715

**題目**
一家公司使用Amazon EC2,AWS Fargate,以及AWS Lambda在公司的AWS帳戶中執行多個工作量. 公司希望充分利用其計算儲蓄計劃. 公司希望當計算儲蓄計劃覆蓋率下降時收到通知. 哪種辦法能滿足這些要求?

**選項**
- A. 利用AWS預算為儲蓄計劃建立每日預算. 配置覆蓋閾值的預算, 以向適當的電子郵件訊息收件人傳送通知。
- B. 建立Lambda功能,根據儲蓄計劃進行覆蓋報告。 使用 Amazon Simple 電子郵件服務( Amazon SES) 將報告傳送給相應的電子郵件訊息收件人。
- C. 為儲蓄計劃預算編制一份澳大利亞婦女協會預算報告。 設定頻率為每日.
- D. 建立儲蓄計劃預告訂閱. 啟用所有通知選項。 輸入接收通知的電子郵件地址。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立Lambda功能,根據儲蓄計劃進行覆蓋報告。 使用 Amazon Simple 電子郵件服務( Amazon SES) 將報告傳送給相應的電子郵件訊息收件人 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：利用AWS預算為儲蓄計劃建立每日預算. 配置覆蓋閾值的預算, 以向適當的電子郵件訊息收件人傳送通知 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為儲蓄計劃預算編制一份澳大利亞婦女協會預算報告。 設定頻率為每日。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立儲蓄計劃預告訂閱. 啟用所有通知選項。 輸入接收通知的電子郵件地址 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #716

**題目**
一家公司在AWS上執行實時資料攝入解決方案. 該解決方案包括最新版本的亞馬遜管理流用於Apache Kafka(Amazon MSK). 該解決方案被部署在三個可用區(Availability Zones)的私人子網中的VPC中. 解決方案設計師需要重新設計資料攝入解決方案,以便在因特網上公開提供。 過境資料也必須加密。 哪種辦法能滿足這些要求?

**選項**
- A. 在現有的VPC中配置公共子網. 在公共子網中部署一個MSK叢集. 更新 MSK 叢集安全設定,以允許相互的 TLS 認證。
- B. 建立新的VPC,擁有公共子網. 在公共子網中部署一個MSK叢集. 更新 MSK 叢集安全設定,以允許相互的 TLS 認證。
- C. 部署使用私人子網的應用程式負載平衡器(Application Load Balancer)(ALB). 配置 ALB 安全群組(security group) 入境規則,允許從 VPC CIDR 塊進入HTTPS 協議。
- D. 部署一個使用私人子網的網路負載平衡器(Network Load Balancer)(NLB)。 為網際網路上的HTTPS通訊配置一個NLB聽眾。

**答案**
C


**詳解**
正確答案是 **C**。
- C：部署使用私人子網的應用程式負載平衡器(Application Load Balancer)(ALB). 配置 ALB 安全群組(security group) 入境規則,允許從 VPC CIDR 塊進入HTTPS 協議。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在現有的VPC中配置公共子網. 在公共子網中部署一個MSK叢集. 更新 MSK 叢集安全設定,以允許相互的 TLS 認證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立新的VPC,擁有公共子網. 在公共子網中部署一個MSK叢集. 更新 MSK 叢集安全設定,以允許相互的 TLS 認證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署一個使用私人子網的網路負載平衡器(Network Load Balancer)(NLB)。 為網際網路上的HTTPS通訊配置一個NLB聽眾。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #717

**題目**
一個公司想要將一個原創的遺留應用程式遷移到AWS. 應用程式從一個前提上的企業資源規劃系統(ERP)接收客戶訂單檔案。 應用程式然後將檔案上傳到 SFTP 伺服器. 應用程式使用一個計劃的工作,每小時檢查訂單檔案. 公司已經有一個AWS帳戶,可以連線到promess網路. AWS上的新應用程式必須支援與現有企業資源規劃系統的整合。 新的應用程式必須安全和具有復原力,必須利用SFTP協議立即處理企業資源規劃系統發出的訂單。 哪種解決辦法能滿足這些要求?

**選項**
- A. 在兩個可用區(Availability Zones)中建立一個 AWS Transfer Family SFTP 網際網路化伺服器. 使用Amazon S3儲存器. 建立 AWS Lambda 函式處理命令檔案。 使用 S3 事件通知傳送 s3: ObjectCreated: * 事件到 Lambda 函式。
- B. 在一個 可用區(Availability Zone) 中建立 AWS Transfer Family SFTP 網際網路化伺服器. 使用亞馬遜彈性檔案系統(Amazon EFS)儲存. 建立 AWS Lambda 函式處理命令檔案。 使用一個 Transfer Family 管理的 workfiow 來引用 Lambda 函式。
- C. 在兩個可用區(Availability Zones)中建立一個 AWS Transfer Family SFTP 內部伺服器. 使用亞馬遜彈性檔案系統(Amazon EFS)儲存. 建立 AWS Step 函式狀態機器處理命令檔案。 使用 Amazon EventBridge 排程器來引用狀態機器來定期檢查 Amazon EFS 命令檔案.
- D. 在兩個可用區(Availability Zones)中建立一個 AWS Transfer Family SFTP 內部伺服器. 使用Amazon S3儲存器. 建立 AWS Lambda 函式處理命令檔案。 使用一個 Transfer Family 管理的 workfiow 來引用 Lambda 函式。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在兩個可用區(Availability Zones)中建立一個 AWS Transfer Family SFTP 網際網路化伺服器. 使用Amazon S3儲存器. 建立 AWS Lambda 函式處理命令檔案。 使用 S3 事件通知傳送 s3: ObjectCreated: * 事件到 Lambda 函式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在一個 可用區(Availability Zone) 中建立 AWS Transfer Family SFTP 網際網路化伺服器. 使用亞馬遜彈性檔案系統(Amazon EFS)儲存. 建立 AWS Lambda 函式處理命令檔案。 使用一個 Transfer Family 管理的 workfiow 來引用 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在兩個可用區(Availability Zones)中建立一個 AWS Transfer Family SFTP 內部伺服器. 使用亞馬遜彈性檔案系統(Amazon EFS)儲存. 建立 AWS Step 函式狀態機器處理命令檔案。 使用 Amazon EventBridge 排程器來引用狀態機器來定期檢查 Amazon EFS 命令檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在兩個可用區(Availability Zones)中建立一個 AWS Transfer Family SFTP 內部伺服器. 使用Amazon S3儲存器. 建立 AWS Lambda 函式處理命令檔案。 使用一個 Transfer Family 管理的 workfiow 來引用 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #718

**題目**
一家公司的應用程式使用Apache Hadoop和Apache Spark處理房地資料。 現有基礎設施無法擴充套件,管理複雜。 一個解決方案架構師必須設計一個可縮放的解決方案,以減少營運複雜性(operational complexity). 解決辦法必須把資料處理留在房地。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS 站點對站點 VPN 存取 promises Hadoop 分佈檔案系統(HDFS)的資料和應用. 使用 Amazon EMR 叢集處理資料.
- B. 使用AWS DataSync連線到premises Hadoop分散式檔案系統(HDFS)叢集. 建立 Amazon EMR 群集處理資料.
- C. 將Apache Hadoop應用程式和Apache Spark應用程式遷移到Amazon EMR的AWS Outposits上. 使用EMR叢集處理資料.
- D. 使用AWS Snowball裝置將資料遷移到Amazon S3桶. 建立 Amazon EMR 群集處理資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 AWS 站點對站點 VPN 存取 promises Hadoop 分佈檔案系統(HDFS)的資料和應用. 使用 Amazon EMR 叢集處理資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS DataSync連線到premises Hadoop分散式檔案系統(HDFS)叢集. 建立 Amazon EMR 群集處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將Apache Hadoop應用程式和Apache Spark應用程式遷移到Amazon EMR的AWS Outposits上. 使用EMR叢集處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Snowball裝置將資料遷移到Amazon S3桶. 建立 Amazon EMR 群集處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #719

**題目**
一家公司正在將大量資料從現場儲存轉移到AWS。 Windows,Mac,和Linux基於Amazon EC2的例在同一AWS 區域(Region)中將使用SMB和NFS儲存協議存取資料. 該公司將定期查閱一部分資料。 該公司將不經常地獲取其餘資料。 公司需要設計一個解決方案來託管資料. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立使用 EFS Intelligent-Tiering 的 Amazon 彈性檔案系統(Amazon EFS)卷. 使用AWS DataSync將資料遷移到EFS卷.
- B. 為 ONTAP 例項建立 Amazon FSx。 為 ONTAP 檔案系統建立 FSx,其根卷使用自動分級策略. 將資料遷移到FSx,以獲取ONTAP磁碟區.
- C. 建立使用Amazon S3 儲存桶. 透過使用AWS Storage Gateway Amazon S3檔案閘道器將資料遷移到S3 儲存桶(S3 bucket).
- D. 為 OpenZFS 檔案系統建立 Amazon FSx. 將資料遷移到新卷.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立使用Amazon S3 儲存桶. 透過使用AWS Storage Gateway Amazon S3檔案閘道器將資料遷移到S3 儲存桶(S3 bucket)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立使用 EFS Intelligent-Tiering 的 Amazon 彈性檔案系統(Amazon EFS)卷. 使用AWS DataSync將資料遷移到EFS卷。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 ONTAP 例項建立 Amazon FSx。 為 ONTAP 檔案系統建立 FSx,其根卷使用自動分級策略. 將資料遷移到FSx,以獲取ONTAP磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 OpenZFS 檔案系統建立 Amazon FSx. 將資料遷移到新卷。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #720

**題目**
一家制造公司在AWS上執行其報告生成應用. 應用程式在大約20分鐘內生成每個報告. 應用程式是作為一個單層建築,執行在單一的Amazon EC2例項上. 應用程式需要經常更新其緊密結合的模組。 由於公司增加了新的特徵,應用程式變得難以維護. 公司每次補丁一個軟體模組,應用程式都會經歷故障時間. 報告生成必須在任何中斷後從頭重新開始。 公司希望重新設計應用程式,使應用程式可以虛構,可擴充套件,並逐步改進. 公司希望最大限度地減少應用程式的故障時間. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在 AWS Lambda 上執行應用程式作為單函式,並使用最大供給的貨幣.
- B. 在Amazon EC2 Spot 執行個體上執行應用程式,作為帶有Spot Fleet預設分配策略的微服務.
- C. 在亞馬遜彈性容器服務(Amazon ECS)上執行應用,作為帶有服務自動縮放的微服務.
- D. 在AWS Elastic Beanstalk上執行應用程式作為單一的應用環境,並採用全機部署策略.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在Amazon EC2 Spot 執行個體上執行應用程式,作為帶有Spot Fleet預設分配策略的微服務。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 AWS Lambda 上執行應用程式作為單函式,並使用最大供給的貨幣。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在亞馬遜彈性容器服務(Amazon ECS)上執行應用,作為帶有服務自動縮放的微服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Elastic Beanstalk上執行應用程式作為單一的應用環境,並採用全機部署策略。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #721

**題目**
一家公司希望將一個大規模網路應用程式重新配置到一個沒有伺服器的微服務架構. 該應用程式使用Amazon EC2 執行個體,並以Python書寫. 公司選擇了網路應用程式的一個元件作為微服務進行測試. 該元件支援每秒數百項請求. 公司希望在支援Python的AWS解決方案上建立並測試微服務. 解決辦法還必須自動擴大規模,需要最低限度的基礎設施和最低限度的業務支助。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Spot Fleet 自動縮放執行最新亞馬遜 Linux 作業系統的 EC2 例項.
- B. 使用配置了 高可用性(high availability) 的 AWS 彈性 Beanstalk 網路伺服器環境。
- C. 使用Amazon Elastic Kubernetes Service(亞馬遜 EKS). 啟動自動縮放自管理 EC2 例項組。
- D. 使用執行自定義開發程式碼的 AWS Lambda 函式.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用Amazon Elastic Kubernetes Service(亞馬遜 EKS). 啟動自動縮放自管理 EC2 例項組 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Spot Fleet 自動縮放執行最新亞馬遜 Linux 作業系統的 EC2 例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用配置了 高可用性(high availability) 的 AWS 彈性 Beanstalk 網路伺服器環境 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用執行自定義開發程式碼的 AWS Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #722

**題目**
一家公司有一個AWS Direct Connect連線,從它的前提位置到AWS帳戶. AWS帳戶在同一AWS 區域(Region)中有30個不同的VPC. VPC使用私人虛擬介面(VIFs). 每個VPC有一個CIDR塊,與公司控制下的其他網路不重疊. 公司希望集中管理網路架構,同時仍允許每個VPC與所有其他VPC和場內網路進行交流. 哪個解決方案能滿足這些要求,LEAST數額是營運開銷(operational overhead)?

**選項**
- A. 建立一箇中轉閘道器,並將直接連線連線到一個新的中轉VIF. 開啟中轉閘道器的路線傳播功能.
- B. 建立直接連線閘道器。 重建私人VIF以使用新的閘道器. 透過建立新的虛擬私人閘道器來聯絡每個VPC.
- C. 在區域(Region)中建立一箇中轉 VPConnect 直接連線連線到中轉 VPCreate 所有其他中轉 VPC之間的對等連線. 更新路由表。
- D. 建立 AWS 站點到站點的 VPN 連線從站點到每個 VPC。 確保每條連線的VPN隧道都通車. 開啟路線傳播功能

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 AWS 站點到站點的 VPN 連線從站點到每個 VPC。 確保每條連線的VPN隧道都通車. 開啟路線傳播功能。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一箇中轉閘道器,並將直接連線連線到一個新的中轉VIF. 開啟中轉閘道器的路線傳播功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立直接連線閘道器。 重建私人VIF以使用新的閘道器. 透過建立新的虛擬私人閘道器來聯絡每個VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在區域(Region)中建立一箇中轉 VPConnect 直接連線連線到中轉 VPCreate 所有其他中轉 VPC之間的對等連線. 更新路由表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #723

**題目**
一家公司有執行於Amazon EC2的應用程式. EC2例項與Amazon RDS資料庫連線,使用具有相關政策的IAM角色. 公司希望使用AWS Systems Manager在不干擾執行中的應用程式的情況下對EC2例項進行補丁. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個新的IAM角色. 將亞馬遜SSMManagedInstance Core政策附在新的IAM角色上. 將新的IAM角色附加到EC2例項和現有的IAM角色中.
- B. 建立 IAM 使用者。 將 AmazonSSMManaged Instance Core 政策附加到IAM 使用者中. 配置系統管理器,使用IAM使用者管理EC2例項.
- C. 啟用系統管理器中的預設主機配置管理來管理 EC2 例項。
- D. 從現有的IAM角色中刪除現有政策. 在現有的IAM角色中加入AmazonSSMManagedInstanceCore政策.

**答案**
C


**詳解**
正確答案是 **C**。
- C：啟用系統管理器中的預設主機配置管理來管理 EC2 例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個新的IAM角色. 將亞馬遜SSMManagedInstance Core政策附在新的IAM角色上. 將新的IAM角色附加到EC2例項和現有的IAM角色中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 IAM 使用者。 將 AmazonSSMManaged Instance Core 政策附加到IAM 使用者中. 配置系統管理器,使用IAM使用者管理EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：從現有的IAM角色中刪除現有政策. 在現有的IAM角色中加入AmazonSSMManagedInstanceCore政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #724

**題目**
一家公司透過使用Amazon Elstic Kubernetes Service(Amazon EKS)和Kubernetes 水平Pod Autoscale器執行集裝箱應用. 工作量在一天之內並不一致。 一個解決方案架構師注意到,當現有節點在叢集中達到最大容量時,節點的數量不會自動縮放,這引起了效能問題. 哪種解決辦法能用LEAST行政間接費用解決這個問題?

**選項**
- A. 透過跟蹤記憶體使用量來縮放節點.
- B. 使用Kubernetes叢集自動縮放器來管理叢集中的節點數.
- C. 使用 AWS Lambda 函式來自動調整EKS叢集的大小.
- D. 使用Amazon EC2 Auto Scaling 群組(Auto Scaling group)來分配工作量.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Kubernetes叢集自動縮放器來管理叢集中的節點數。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過跟蹤記憶體使用量來縮放節點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Lambda 函式來自動調整EKS叢集的大小。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon EC2 Auto Scaling 群組(Auto Scaling group)來分配工作量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #725

**題目**
一家公司每月在Amazon S3標準儲存中維持約300TB. S3物件的大小一般在50GB左右,並經常被全球應用的多段上傳所取代. S3物體的數量和大小保持不變,但公司的S3儲存成本每月都在增加. 在這種情況下,解決方案設計師應如何降低成本?

**選項**
- A. 從多段上傳到亞馬遜 S3 Transfer Acceleration.
- B. 啟用一個刪除不完整多段上傳的 S3 生命週期政策(Lifecycle policy)。
- C. 配置 S3 目錄, 防止物件被太快存檔。
- D. 配置Amazon CloudFront以減少儲存在Amazon S3中的物件數量.

**答案**
A


**詳解**
正確答案是 **A**。
- A：從多段上傳到亞馬遜 S3 Transfer Acceleration。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：啟用一個刪除不完整多段上傳的 S3 生命週期政策(Lifecycle policy) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 S3 目錄, 防止物件被太快存檔 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置Amazon CloudFront以減少儲存在Amazon S3中的物件數量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #726

**題目**
一個連為移動裝置部署了多人遊戲. 遊戲需要根據經緯度和經度對玩家進行現場定位跟蹤. 遊戲的資料庫必須支援快速更新和檢索位置. 遊戲使用Amazon RDS用於PostgreSQL DB例項,並帶有讀取的複製品來儲存位置資料. 在使用高峰期,資料庫(database)無法維持讀寫更新所需的效能. 遊戲的使用者基礎正在迅速增加. 解決方案設計師應如何改進資料層的效能?

**選項**
- A. 從現有的 DB 例項中選擇一個 快照(snapshot)。 啟用多AZ恢復快照(snapshot).
- B. 用OpenSearch Dashboards從Amazon RDS遷移到AWSERV008.
- C. 在現有的 DB 例項前部署 Amazon DynamoDB 加速器( DAX)。 修改遊戲使用DAX.
- D. 在現有的 DB 例項前為 Redis 叢集部署 Amazon ElastiCache。 修改遊戲以使用 Redis。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在現有的 DB 例項前為 Redis 叢集部署 Amazon ElastiCache。 修改遊戲以使用 Redis 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：從現有的 DB 例項中選擇一個 快照(snapshot)。 啟用多AZ恢復快照(snapshot)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：用OpenSearch Dashboards從Amazon RDS遷移到AWSERV008。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在現有的 DB 例項前部署 Amazon DynamoDB 加速器( DAX)。 修改遊戲使用DAX。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #727

**題目**
一家公司在公司AWS帳戶的Amazon DynamoDB表格中儲存關鍵資料. 一個IT管理員不慎刪除了一個DynamoDB表格. 刪減導致大量資料丟失,並中斷了公司的運營. 公司希望在未來防止這種型別的干擾. LEAST 營運開銷(operational overhead)將滿足這一要求的哪一種解決方案?

**選項**
- A. 配置 AWS CloudTrail 中的線索。 為刪除動作建立 Amazon EventBridge 規則。 建立 AWS Lambda 函式,以自動還原已刪除的 DynamoDB 表格。
- B. 建立 備份(backup) 並恢復 DynamoDB 表格的計劃。 手動回收DynamoDB表格.
- C. 在 DynamoDB 表格上配置刪除保護。
- D. 啟用 DynamoDB 表格上的時點恢復。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立 備份(backup) 並恢復 DynamoDB 表格的計劃。 手動回收DynamoDB表格。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 AWS CloudTrail 中的線索。 為刪除動作建立 Amazon EventBridge 規則。 建立 AWS Lambda 函式,以自動還原已刪除的 DynamoDB 表格 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 DynamoDB 表格上配置刪除保護 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：啟用 DynamoDB 表格上的時點恢復 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #728

**題目**
一家公司有一個儲存能力正在耗盡的儲存資料中心。 公司希望將其儲存基礎設施遷移到AWS,同時儘量減少頻寬成本. 解決辦法必須允許在不增加費用的情況下立即檢索資料。 如何滿足這些要求?

**選項**
- A. 部署Amazon S3冰川斷層,並能夠加速檢索。 允許為工作量提供檢索能力。
- B. 使用快取磁碟區部署 AWS Storage Gateway。 使用儲存閘道器在 Amazon S3 中儲存資料,同時保留本地常用資料子集的副本.
- C. 部署AWS Storage Gateway,使用儲存的卷以在當地儲存資料. 使用儲存閘道器同步備份時間點的快照到Amazon S3.
- D. 部署 AWS Direct Connect 連線到現場資料中心. 配置 AWS Storage Gateway 在本地儲存資料. 使用儲存閘道器同步備份時間點的快照到Amazon S3.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用快取磁碟區部署 AWS Storage Gateway。 使用儲存閘道器在 Amazon S3 中儲存資料,同時保留本地常用資料子集的副本。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：部署Amazon S3冰川斷層,並能夠加速檢索。 允許為工作量提供檢索能力。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署AWS Storage Gateway,使用儲存的卷以在當地儲存資料. 使用儲存閘道器同步備份時間點的快照到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署 AWS Direct Connect 連線到現場資料中心. 配置 AWS Storage Gateway 在本地儲存資料. 使用儲存閘道器同步備份時間點的快照到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #729

**題目**
一個公司在一個VPC中執行一個三級網路應用程式,跨越多個可用區(Availability Zones). Amazon EC2 例項在應用級的Auto Scaling 群組(Auto Scaling group)中執行。 公司需要制定自動化的縮放計劃,分析每個資源每天和每週的歷史工作量趨勢. 配置必須根據預測和使用情況的實際變化適當調整資源規模。 一個解決方案設計師應該建議採用何種規模戰略來滿足這些要求?

**選項**
- A. 根據EC2例項中的平均CPU利用率,實施動態縮放和步驟縮放。
- B. 啟用預測縮放到預測和縮放。 配置帶有目標跟蹤的動態縮放
- C. 根據網路應用程式的流量規律建立自動的預定縮放動作.
- D. 制定簡單的縮放政策. 根據EC2例項啟動時間增加冷卻期.

**答案**
D


**詳解**
正確答案是 **D**。
- D：制定簡單的縮放政策. 根據EC2例項啟動時間增加冷卻期。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：根據EC2例項中的平均CPU利用率,實施動態縮放和步驟縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：啟用預測縮放到預測和縮放。 配置帶有目標跟蹤的動態縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：根據網路應用程式的流量規律建立自動的預定縮放動作。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #730

**題目**
一個包裹交付公司有一個應用程式,使用Amazon EC2例項和一個Amazon Aurora MySQL DB叢集. 隨著應用程式越來越受歡迎,EC2例項使用量僅略有增加. DB叢集使用率以更快的速度增長. 公司增加了一個讀作複製品,在短時間內減少了DB叢集的使用. 然而,工作量繼續增加。 導致DB叢集使用量增加的操作都是重複讀取的語句,與交付細節有關. 公司需要減輕重複閱讀對DB叢集的影響. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在應用程式和 DB 叢集之間為 Redis 叢集執行 Amazon ElastiCache。
- B. 在 DB 叢集中新增一個額外的讀副本。
- C. 為 Aurora 配置 Aurora 自動縮放。
- D. 修改 DB 叢集,使其具有多個寫入例項。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在應用程式和 DB 叢集之間為 Redis 叢集執行 Amazon ElastiCache 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在 DB 叢集中新增一個額外的讀副本 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 Aurora 配置 Aurora 自動縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改 DB 叢集,使其具有多個寫入例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #731

**題目**
一個公司有一個應用程式,使用Amazon DynamoDB表進行儲存. 一個解決方案架構師發現,表格中的許多請求並沒有返回最新資料. 公司的使用者沒有報告資料庫(database)效能方面的任何其他問題. 延遲(Latency)在可接受的範圍內. 解決方案設計師建議修改哪些設計?

**選項**
- A. 在表格中新增閱讀複製品。
- B. 使用全域性二級指數(GSI).
- C. 請求非常一致。
- D. 請求最終一致為表格。

**答案**
C


**詳解**
正確答案是 **C**。
- C：請求非常一致。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在表格中新增閱讀複製品。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用全域性二級指數(GSI)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：請求最終一致為表格。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #732

**題目**
一家公司已將其應用到Amazon EC2的案例中,其應用為Amazon RDS 資料庫(database)。 公司使用最小權限(least privilege)的原則配置資料庫(database)存取憑證. 公司的安全團隊希望保護應用程式和資料庫(database)免受SQL注射和其他網路攻擊. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用安全小組和網路ACL來保障資料庫(database)和應用伺服器的安全.
- B. 使用AWS WAF來保護應用程式. 使用 RDS 引數組配置安全設定。
- C. 使用AWS網路防火牆(Firewall)來保護應用程式和資料庫(database).
- D. 在應用程式程式碼中為不同的功能使用不同的資料庫(database)帳戶. 避免給予資料庫(database)使用者過多的特權.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在應用程式程式碼中為不同的功能使用不同的資料庫(database)帳戶. 避免給予資料庫(database)使用者過多的特權。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用安全小組和網路ACL來保障資料庫(database)和應用伺服器的安全。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用AWS WAF來保護應用程式. 使用 RDS 引數組配置安全設定 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS網路防火牆(Firewall)來保護應用程式和資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #733

**題目**
一家電子商務公司在AWS帳戶中執行應用程式,這些應用程式是AWS Organizations中一個組織的一部分. 這些應用程式在所有帳戶的Amazon Aurora PostgreSQL資料庫上執行。 公司需要防止惡意活動,必須識別異常失敗和不完全登入資料庫的嘗試. 哪種解決辦法能以業務效率高的方式滿足這些要求?

**選項**
- A. 將服務控制策略(SCP)附加到組織的根上,以識別失敗的登入嘗試.
- B. 在Amazon GuardDuty為組織成員帳戶啟用Amazon RDS保護功能.
- C. 在Amazon CloudWatch Logs中將Aurora一般日誌釋出給一個日誌組. 將日誌資料匯出為中央 Amazon S3 桶.
- D. 將AWS CloudTrail中的所有Aurora PostgreSQL 資料庫(database)事件釋出給中央Amazon S3桶.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在Amazon GuardDuty為組織成員帳戶啟用Amazon RDS保護功能。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將服務控制策略(SCP)附加到組織的根上,以識別失敗的登入嘗試。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon CloudWatch Logs中將Aurora一般日誌釋出給一個日誌組. 將日誌資料匯出為中央 Amazon S3 桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將AWS CloudTrail中的所有Aurora PostgreSQL 資料庫(database)事件釋出給中央Amazon S3桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #734

**題目**
一家公司擁有AWS Direct Connect從公司資料中心到我們東-1區域(Region)的VPC的連線. 該公司最近收購了一家公司,該公司擁有幾個VPC,並且在其立面資料中心和eu-West-2 區域(Region)之間有直接連線。 該公司和該公司VPC的CIDR區塊沒有重疊。 該公司需要兩個地區與資料中心之間的連線。 公司需要一種既可伸縮又可減少營運開銷(operational overhead)的解決方案. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立區域(Region) VPC在我們東-1的VPC和eu-West-2的VPC之間的對等關係.
- B. 從我們-東-1的直通連線到eu-West-2的VPC建立私人虛擬介面.
- C. 在Amazon EC2主機的全網VPN網路中建立VPN電器. 使用AWS VPN CloudHub在資料中心和每個VPC之間傳送和接收資料.
- D. 把現有的直接連線連線連線到一個直接連線閘道器. 從每個區域(Region)中VPC的虛擬私人閘道器到直接連線閘道器的路線交通.

**答案**
D


**詳解**
正確答案是 **D**。
- D：把現有的直接連線連線連線到一個直接連線閘道器. 從每個區域(Region)中VPC的虛擬私人閘道器到直接連線閘道器的路線交通。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立區域(Region) VPC在我們東-1的VPC和eu-West-2的VPC之間的對等關係。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：從我們-東-1的直通連線到eu-West-2的VPC建立私人虛擬介面。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon EC2主機的全網VPN網路中建立VPN電器. 使用AWS VPN CloudHub在資料中心和每個VPC之間傳送和接收資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #735

**題目**
一家公司正在開發一款移動遊戲,該遊戲向後端處理器流出更新得分,然後在領導板上釋出結果. 一個解決方案架構師需要設計一個解決方案,可以處理大流量的突起,按接收順序處理移動遊戲更新,並將已處理的更新儲存在高可用資料庫(database)中. 公司還希望儘量減少維持解決方案所需的管理間接費用. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 按下分數更新到Amazon Kinesis Data Streams. 用 AWS Lambda 處理 Kinesis 資料流中的更新。 在Amazon DynamoDB中儲存處理過的更新.
- B. 按下分數更新到Amazon Kinesis Data Streams. 用為自動縮放設定的 Amazon EC2 例項處理更新。 在 Amazon Redshift 中儲存處理過的更新.
- C. 將分數更新推向一個亞馬遜簡易通知服務(Amazon SNS)話題. 向 SNS 主題訂閱一個 AWS Lambda 函式來處理更新. 將處理過的更新儲存在執行於Amazon EC2上的SQL 資料庫(database)中.
- D. 按下分數更新到亞馬遜簡易佇列服務佇列(Amazon SQS). 使用帶有 Auto 縮放的 Amazon EC2 例項來處理 SQS 佇列中的更新。 將處理過的更新儲存在 Amazon RDS 多AZ DB 例項中。

**答案**
C


**詳解**
正確答案是 **C**。
- C：將分數更新推向一個亞馬遜簡易通知服務(Amazon SNS)話題. 向 SNS 主題訂閱一個 AWS Lambda 函式來處理更新. 將處理過的更新儲存在執行於Amazon EC2上的SQL 資料庫(database)中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：按下分數更新到Amazon Kinesis Data Streams. 用 AWS Lambda 處理 Kinesis 資料流中的更新。 在Amazon DynamoDB中儲存處理過的更新。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：按下分數更新到Amazon Kinesis Data Streams. 用為自動縮放設定的 Amazon EC2 例項處理更新。 在 Amazon Redshift 中儲存處理過的更新。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：按下分數更新到亞馬遜簡易佇列服務佇列(Amazon SQS). 使用帶有 Auto 縮放的 Amazon EC2 例項來處理 SQS 佇列中的更新。 將處理過的更新儲存在 Amazon RDS 多AZ DB 例項中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #736

**題目**
一個連擁有多個AWS帳戶,其應用部署在我們西-2區域(Region). 應用程式日誌儲存在每個帳戶的Amazon S3桶內. 公司希望建立一個使用單一S3 儲存桶(S3 bucket)的集中日誌分析解決方案. 日誌不能離開我們 西部2, 公司想要 最低營運開銷(operational overhead)。 哪種解決辦法符合這些要求,並且最符合成本效益?

**選項**
- A. 建立一個 S3 生命週期政策(Lifecycle policy),從一個應用程式 S3 桶複製物件到集中的 S3 儲存桶(S3 bucket).
- B. 使用 S3 Same-Region Replication 從 S3 桶複製日誌到另一個 S3 儲存桶(S3 bucket)。 使用這個 S3 儲存桶(S3 bucket) 進行日誌分析。
- C. 寫入一個指令碼, 每天使用 Putobject API 操作將桶的全部內容複製到另一個 S3 儲存桶(S3 bucket) 的 us- West-2。 使用這個 S3 儲存桶(S3 bucket) 進行日誌分析。
- D. 在這些帳戶中寫 AWS Lambda 函式,每次向 S3 桶傳送日誌時都會觸發(s3:ObjectCreated:*事件). 將日誌複製到西-2 中的另一個 S3 儲存桶(S3 bucket)。 使用這個 S3 儲存桶(S3 bucket) 進行日誌分析。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 S3 Same-Region Replication 從 S3 桶複製日誌到另一個 S3 儲存桶(S3 bucket)。 使用這個 S3 儲存桶(S3 bucket) 進行日誌分析 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個 S3 生命週期政策(Lifecycle policy),從一個應用程式 S3 桶複製物件到集中的 S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：寫入一個指令碼, 每天使用 Putobject API 操作將桶的全部內容複製到另一個 S3 儲存桶(S3 bucket) 的 us- West-2。 使用這個 S3 儲存桶(S3 bucket) 進行日誌分析 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在這些帳戶中寫 AWS Lambda 函式,每次向 S3 桶傳送日誌時都會觸發(s3:ObjectCreated:*事件). 將日誌複製到西-2 中的另一個 S3 儲存桶(S3 bucket)。 使用這個 S3 儲存桶(S3 bucket) 進行日誌分析 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #737

**題目**
一家公司有一個應用程式,向世界各地的學生提供點播培訓影片。 該應用程式還允許授權的內容開發者上傳影片. 資料儲存在我們東-2 區域(Region)的Amazon S3桶中. 該公司在eu-West-2 區域(Region)中建立了S3 儲存桶(S3 bucket),在Ap-東南-1 區域(Region)中建立了S3 儲存桶(S3 bucket). 公司希望將資料複製到新的S3 儲存桶上. 公司需要將延遲(latency)最小化,適用於上傳影片的開發者和在eu-west-2和AP-Southeast-1附近流傳影片的學生. FEWEST修改應用程式後,哪些步驟組合將滿足這些要求?(選二.

**選項**
- A. 配置單向複寫(replication)從我們東-2S3 儲存桶(S3 bucket)到eu西-2S3 儲存桶(S3 bucket). 配置從我們東-2 S3 儲存桶(S3 bucket)到Ap-東南-1 S3 儲存桶(S3 bucket)的單向複寫(replication).
- B. 配置單向複寫(replication)從我們東-2S3 儲存桶(S3 bucket)到eu西-2S3 儲存桶(S3 bucket). 配置單向複寫(replication)從eu-west - 2 S3 儲存桶(S3 bucket)到AP-東南-1 S3 儲存桶(S3 bucket).
- C. 在所有三個大區的S3桶中配置雙向(雙向)複寫(replication)。
- D. 建立 S3 Multi-Region Access Point. 修改應用程式,以使用多區域(Region)存取點的亞馬遜資源名稱(ARN)進行影片流. 不修改影片上傳應用程式。
- E. 建立 S3 Multi-Region Access Point. 修改應用程式以使用多區域(Region)存取點的亞馬遜資源名稱(ARN)進行影片流和上傳.

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：配置單向複寫(replication)從我們東-2S3 儲存桶(S3 bucket)到eu西-2S3 儲存桶(S3 bucket). 配置從我們東-2 S3 儲存桶(S3 bucket)到Ap-東南-1 S3 儲存桶(S3 bucket)的單向複寫(replication)。此選項符合題目條件，能有效滿足核心需求。
- B：配置單向複寫(replication)從我們東-2S3 儲存桶(S3 bucket)到eu西-2S3 儲存桶(S3 bucket). 配置單向複寫(replication)從eu-west - 2 S3 儲存桶(S3 bucket)到AP-東南-1 S3 儲存桶(S3 bucket)。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：在所有三個大區的S3桶中配置雙向(雙向)複寫(replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 S3 Multi-Region Access Point. 修改應用程式,以使用多區域(Region)存取點的亞馬遜資源名稱(ARN)進行影片流. 不修改影片上傳應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立 S3 Multi-Region Access Point. 修改應用程式以使用多區域(Region)存取點的亞馬遜資源名稱(ARN)進行影片流和上傳。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #738

**題目**
一個公司有一個新的移動應用程式。 世界上任何地方的使用者都可以在自己選擇的主題上看到本地新聞. 使用者也可以在應用程式內部張貼照片和影片. 使用者經常在內容釋出後的第一分鐘存取內容. 新內容迅速取代了舊內容,然後舊內容就消失了. 新聞的本地性質意味著使用者在上傳的AWS 區域(Region)內消耗90%的內容. 透過提供內容上傳的LOWEST 延遲(latency),哪個解決方案將最佳化使用者體驗?

**選項**
- A. 上傳並儲存內容於Amazon S3. 上傳時使用Amazon CloudFront.
- B. 上傳並儲存內容於Amazon S3. 上傳時使用S3 Transfer Acceleration.
- C. 上傳內容到最接近使用者的區域(Region)中的 Amazon EC2 例. 將資料複製到Amazon S3.
- D. 在最接近使用者的區域(Region)中上傳並儲存Amazon S3中的內容. 使用Amazon CloudFront的多個分佈.

**答案**
A


**詳解**
正確答案是 **A**。
- A：上傳並儲存內容於Amazon S3. 上傳時使用Amazon CloudFront。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：上傳並儲存內容於Amazon S3. 上傳時使用S3 Transfer Acceleration。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：上傳內容到最接近使用者的區域(Region)中的 Amazon EC2 例. 將資料複製到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在最接近使用者的區域(Region)中上傳並儲存Amazon S3中的內容. 使用Amazon CloudFront的多個分佈。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #739

**題目**
一個公司正在建立一個使用無伺服器架構的新應用程式. 該架構將包括一個Amazon API Gateway REST API和AWS Lambda功能來管理收到的請求. 公司希望新增一個服務,可以將API Gateway REST API收到的資訊傳送到多個目標Lambda功能中進行處理. 服務必須提供訊息過濾,使目標Lambda函式能夠只接收到功能所需的訊息. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將API Gateway REST API的請求傳送給一個亞馬遜簡易通知服務(Amazon SNS)主題. 訂閱 Amazon 簡單佇列服務(Amazon SQS) 佇列到 SNS 主題. 配置目標 Lambda 函式以檢視不同的 SQS 佇列。
- B. 將API Gateway REST API的請求傳送到Amazon EventBridge. 配置 EventBridge 以引用目標 Lambda 函式。
- C. 將API Gateway REST API的請求傳送到亞馬遜管理流為Apache Kafka(Amazon MSK). 配置 Amazon MSK 以釋出訊息給目標 Lambda 函式.
- D. 將API Gateway REST API的請求傳送到多個亞馬遜簡易佇列服務(Amazon SQS)佇列. 配置目標 Lambda 函式以檢視不同的 SQS 佇列。

**答案**
D


**詳解**
正確答案是 **D**。
- D：將API Gateway REST API的請求傳送到多個亞馬遜簡易佇列服務(Amazon SQS)佇列. 配置目標 Lambda 函式以檢視不同的 SQS 佇列 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將API Gateway REST API的請求傳送給一個亞馬遜簡易通知服務(Amazon SNS)主題. 訂閱 Amazon 簡單佇列服務(Amazon SQS) 佇列到 SNS 主題. 配置目標 Lambda 函式以檢視不同的 SQS 佇列 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將API Gateway REST API的請求傳送到Amazon EventBridge. 配置 EventBridge 以引用目標 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將API Gateway REST API的請求傳送到亞馬遜管理流為Apache Kafka(Amazon MSK). 配置 Amazon MSK 以釋出訊息給目標 Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #740

**題目**
一家公司向Amazon S3轉移了數百萬檔案。 一個解決方案架構師需要實施一個解決方案,透過使用客戶提供的金鑰加密所有檔案資料. 解決方案必須加密現有的未加密物件和未來物件. 哪種解決辦法能滿足這些要求?

**選項**
- A. 透過過濾 Amazon S3 編目報告來建立未加密物件列表. 配置 S3 Batch Operations 任務,以伺服器側加密(encryption) 加密列表中的物件,並帶有客戶提供的金鑰(SSE-C). 配置 S3 預設的 加密(encryption) 特性,以使用伺服器側的 加密(encryption) 並帶有客戶提供的金鑰(SSE-C).
- B. 使用 S3 Storage Lens 度量衡來識別未加密的S3桶. 配置 S3 預設的 加密(encryption) 特性,以使用伺服器側的 加密(encryption) 與 AWS KMS 金鑰(SSE-KMS).
- C. 透過過濾Amazon S3的AWS使用報告,建立未加密物件列表. 配置 AWS 批次任務, 以伺服器側的 加密(encryption) 加密列表中的物件。 配置 S3 預設的 加密(encryption) 特性,以使用伺服器側的 加密(encryption) 並帶有 AWS KMS 金鑰(SSE-KMS).
- D. 透過過濾Amazon S3的AWS使用報告,建立未加密物件列表. 配置 S3 預設的 加密(encryption) 特性,使用伺服器側的 加密(encryption) 並帶有客戶提供的金鑰(SSE-C).

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 S3 Storage Lens 度量衡來識別未加密的S3桶. 配置 S3 預設的 加密(encryption) 特性,以使用伺服器側的 加密(encryption) 與 AWS KMS 金鑰(SSE-KMS)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過過濾 Amazon S3 編目報告來建立未加密物件列表. 配置 S3 Batch Operations 任務,以伺服器側加密(encryption) 加密列表中的物件,並帶有客戶提供的金鑰(SSE-C). 配置 S3 預設的 加密(encryption) 特性,以使用伺服器側的 加密(encryption) 並帶有客戶提供的金鑰(SSE-C)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過過濾Amazon S3的AWS使用報告,建立未加密物件列表. 配置 AWS 批次任務, 以伺服器側的 加密(encryption) 加密列表中的物件。 配置 S3 預設的 加密(encryption) 特性,以使用伺服器側的 加密(encryption) 並帶有 AWS KMS 金鑰(SSE-KMS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過過濾Amazon S3的AWS使用報告,建立未加密物件列表. 配置 S3 預設的 加密(encryption) 特性,使用伺服器側的 加密(encryption) 並帶有客戶提供的金鑰(SSE-C)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #741

**題目**
託管公司域名記錄的DNS供應商正在經歷對執行在AWS上的網站造成服務中斷的中斷. 公司需要遷移到一個更具彈性的有管理的DNS服務,並希望該服務能在AWS上執行. 一個解決方案設計師應該如何迅速遷移DNS託管服務?

**選項**
- A. 為域名建立 Amazon Route 53 公共主機區. 匯入包含上一個提供者託管的域記錄的區域檔案。
- B. 為域名建立 Amazon Route 53 私人主機區. 匯入包含上一個提供者託管的域記錄的區域檔案。
- C. 在 AWS 中建立簡單 AD 目錄。 啟用 DNS 提供者和 AWS 目錄服務之間的區域傳輸,用於 Microsoft Active 目錄的域記錄.
- D. 在 VPC 中建立 Amazon Route 53 解析器。 指定提供者的 DNS 將轉發 DNS 查詢的 IP 地址。 配置提供者的 DNS 將域名的 DNS 查詢轉發到 IP 地址, 指定於 入境端點。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 AWS 中建立簡單 AD 目錄。 啟用 DNS 提供者和 AWS 目錄服務之間的區域傳輸,用於 Microsoft Active 目錄的域記錄。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為域名建立 Amazon Route 53 公共主機區. 匯入包含上一個提供者託管的域記錄的區域檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為域名建立 Amazon Route 53 私人主機區. 匯入包含上一個提供者託管的域記錄的區域檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 VPC 中建立 Amazon Route 53 解析器。 指定提供者的 DNS 將轉發 DNS 查詢的 IP 地址。 配置提供者的 DNS 將域名的 DNS 查詢轉發到 IP 地址, 指定於 入境端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #742

**題目**
一家公司正在AWS上建立一個應用程式,連線Amazon RDS 資料庫(database). 公司希望管理應用程式配置,並安全儲存和檢索資料庫(database)和其他服務的憑證. LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 使用AWS AppConfig儲存和管理應用程式配置. 使用AWS Secrets Manager儲存和檢索憑證.
- B. 使用AWS Lambda儲存和管理應用程式配置. 使用 AWS Systems Manager 引數儲存器儲存並獲取憑證.
- C. 使用加密應用程式配置檔案。 為應用程式配置將檔案儲存在 Amazon S3 中. 建立另一個 S3 檔案來儲存和獲取憑證。
- D. 使用AWS AppConfig儲存和管理應用程式配置. 使用Amazon RDS儲存和檢索憑證.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用AWS Lambda儲存和管理應用程式配置. 使用 AWS Systems Manager 引數儲存器儲存並獲取憑證。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS AppConfig儲存和管理應用程式配置. 使用AWS Secrets Manager儲存和檢索憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用加密應用程式配置檔案。 為應用程式配置將檔案儲存在 Amazon S3 中. 建立另一個 S3 檔案來儲存和獲取憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS AppConfig儲存和管理應用程式配置. 使用Amazon RDS儲存和檢索憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #743

**題目**
為了滿足安全要求,一家公司需要在與Amazon RDS MySQL DB例項通訊時加密其所有在途應用資料. 最近的安全稽核(audit)顯示,靜態加密(encryption at rest)是使用AWS Key Management Service(AWS KMS)啟用的,但是在途資料沒有啟用. 解決方案設計師應如何滿足安全要求?

**選項**
- A. 在資料庫(database)上啟用IAM 資料庫(database)認證.
- B. 提供自簽名憑證。 在 RDS 例項的所有連線中使用憑證。
- C. 使用一個快照(snapshot) RDS例項. 將 快照(snapshot) 恢復為新例項, 啟用 加密(encryption)。
- D. 下載 AWS 提供的根憑證。 在 RDS 例項的所有連線中提供憑證。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在資料庫(database)上啟用IAM 資料庫(database)認證。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：提供自簽名憑證。 在 RDS 例項的所有連線中使用憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用一個快照(snapshot) RDS例項. 將 快照(snapshot) 恢復為新例項, 啟用 加密(encryption) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：下載 AWS 提供的根憑證。 在 RDS 例項的所有連線中提供憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #744

**題目**
一家公司正在設計一個新的網路服務,將在一個彈性負載平衡(ELB)負載平衡器(load balancer)後面執行。 然而,許多網路服務客戶端只能存取其防火牆上授權的IP地址. 解決方案設計師應該建議什麼來滿足客戶的需求?

**選項**
- A. 一個網路負載平衡器(Network Load Balancer)帶有關聯的彈性IP地址.
- B. 一個應用程式負載平衡器(Application Load Balancer)帶有相關的彈性IP地址.
- C. 一個在Amazon Route 53主機區的記錄,指向一個彈性IP地址.
- D. 在負載平衡器(load balancer)前以公共IP地址作為代理執行的EC2例項.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在負載平衡器(load balancer)前以公共IP地址作為代理執行的EC2例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：一個網路負載平衡器(Network Load Balancer)帶有關聯的彈性IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：一個應用程式負載平衡器(Application Load Balancer)帶有相關的彈性IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：一個在Amazon Route 53主機區的記錄,指向一個彈性IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #745

**題目**
一家公司建立了一個新的AWS帳戶. 該帳戶是新提供的,沒有修改預設設定。 公司擔心AWS帳戶根使用者的安全. 如何保證根使用者的安全?

**選項**
- A. 為日常行政任務建立IAM使用者. 禁用根使用者。
- B. 為日常行政任務建立IAM使用者. 在根使用者上啟用多要素認證。
- C. 為根使用者生成存取金鑰。 使用存取金鑰執行日常管理任務,而不是使用AWS管理控制檯.
- D. 向最高階的解決方案架構師提供根使用者憑證。 讓解決方案架構師使用根使用者執行日常管理任務.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為日常行政任務建立IAM使用者. 禁用根使用者 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為日常行政任務建立IAM使用者. 在根使用者上啟用多要素認證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為根使用者生成存取金鑰。 使用存取金鑰執行日常管理任務,而不是使用AWS管理控制檯。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：向最高階的解決方案架構師提供根使用者憑證。 讓解決方案架構師使用根使用者執行日常管理任務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #746

**題目**
一個公司正在部署一個應用程式,在近實時處理流資料。 該公司計劃利用Amazon EC2例項處理工作量。 網路架構必須能夠配置,以便在節點之間提供最低可能的延遲(latency). 哪些網路解決方案組合將滿足這些要求?(選二.

**選項**
- A. 啟用並配置每個EC2例項上增強的網路。
- B. 將EC2例項分組到單獨的帳戶中。
- C. 在叢集放置組中執行EC2 執行個體.
- D. 在每個EC2例項中附加多個彈性網路介面.
- E. 使用亞馬遜彈性塊儲存器(Amazon EBS)最佳化例項型別.

**答案**
B,E



**詳解**
正確答案是 **B, E**。
- B：將EC2例項分組到單獨的帳戶中。此選項符合題目條件，能有效滿足核心需求。
- E：使用亞馬遜彈性塊儲存器(Amazon EBS)最佳化例項型別。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：啟用並配置每個EC2例項上增強的網路。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在叢集放置組中執行EC2 執行個體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在每個EC2例項中附加多個彈性網路介面。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #747

**題目**
一家金融服務公司希望關閉兩個資料中心,將超過100TB的資料遷移到AWS. 資料有一個複雜的目錄結構,有數百萬個小檔案儲存在子資料夾的深層分層中. 大部分資料是無結構的,公司的檔案儲存由來自多個供應商的基於SMB的儲存型別組成. 公司不想在遷移後更改其存取資料的應用程式. 解決方案設計師應如何用LEAST 營運開銷(operational overhead)滿足這些要求?

**選項**
- A. 使用AWS Direct Connect將資料遷移到Amazon S3.
- B. 使用AWS DataSync將資料遷移到Lustre的Amazon FSx.
- C. 使用AWS DataSync將資料遷移到Windows檔案伺服器的Amazon FSx.
- D. 使用 AWS Direct Connect 將 primes 檔案儲存上的資料遷移到 AWS Storage Gateway 卷閘道器.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用AWS DataSync將資料遷移到Lustre的Amazon FSx。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS Direct Connect將資料遷移到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS DataSync將資料遷移到Windows檔案伺服器的Amazon FSx。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Direct Connect 將 primes 檔案儲存上的資料遷移到 AWS Storage Gateway 卷閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #748

**題目**
公司使用AWS Organizations中的組織管理包含應用程式的AWS帳戶. 公司在組織內設立了一個專門的監控(monitoring)成員帳戶. 公司希望透過使用Amazon CloudWatch來查詢和視覺化整個帳戶的可觀察性資料. 哪種解決辦法能滿足這些要求?

**選項**
- A. 啟用 監控(monitoring) 帳戶的 Cloud Watch 交叉帳戶可觀察性。 在每個AWS帳戶中部署監控(monitoring)帳戶提供的AWS CloudFormation模板,與監控(monitoring)帳戶共享資料.
- B. 制定服務控制政策,以便在組織根部組織單位下的監控(monitoring)帳戶中提供存取CloudWatch的機會。
- C. 在 監控(monitoring) 帳戶中配置一個新的 IAM 使用者。 在每個 AWS 帳戶中,配置一個 IAM 政策(IAM policy) 以存取查詢和視覺化帳戶中的 Cloud Watch 資料. 將新的IAM 政策(IAM policy)附加到新的IAM使用者中.
- D. 在監控(monitoring)帳戶中建立一個新的IAM使用者. 在每個AWS帳戶中建立交叉帳戶IAM政策. 將IAM政策附加到新的IAM使用者中.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 監控(monitoring) 帳戶中配置一個新的 IAM 使用者。 在每個 AWS 帳戶中,配置一個 IAM 政策(IAM policy) 以存取查詢和視覺化帳戶中的 Cloud Watch 資料. 將新的IAM 政策(IAM policy)附加到新的IAM使用者中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：啟用 監控(monitoring) 帳戶的 Cloud Watch 交叉帳戶可觀察性。 在每個AWS帳戶中部署監控(monitoring)帳戶提供的AWS CloudFormation模板,與監控(monitoring)帳戶共享資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：制定服務控制政策,以便在組織根部組織單位下的監控(monitoring)帳戶中提供存取CloudWatch的機會。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在監控(monitoring)帳戶中建立一個新的IAM使用者. 在每個AWS帳戶中建立交叉帳戶IAM政策. 將IAM政策附加到新的IAM使用者中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #749

**題目**
一個公司的網站被用來向公眾銷售產品. 該網站以Amazon EC2為例,執行在應用程式負載平衡器(Application Load Balancer)(ALB)後面的Auto Scaling 群組(Auto Scaling group). 另外還有Amazon CloudFront的發行,AWS WAF正被用於防範SQL注射攻擊. ALB是雲紋分佈的起源. 最近對安全日誌的審查顯示,一個外部惡意IP在存取該網站時需要被遮蔽. 解決方案設計師應如何保護應用程式?

**選項**
- A. 修改CloudFront發行版上的網路 ACL(network ACL),為惡意IP地址新增否定規則.
- B. 修改AWS WAF的配置,加入IP匹配條件,以遮蔽惡意IP地址.
- C. 修改ALB背後的目標群體中的EC2例項的網路 ACL(network ACL),以否認惡意IP地址.
- D. 修改ALB背後目標群體EC2事件的安全組,以否認惡意IP地址.

**答案**
A


**詳解**
正確答案是 **A**。
- A：修改CloudFront發行版上的網路 ACL(network ACL),為惡意IP地址新增否定規則。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：修改AWS WAF的配置,加入IP匹配條件,以遮蔽惡意IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：修改ALB背後的目標群體中的EC2例項的網路 ACL(network ACL),以否認惡意IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改ALB背後目標群體EC2事件的安全組,以否認惡意IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #750

**題目**
一家公司在AWS Organizations建立了一個包含10個AWS帳戶的組織. 一個解決方案架構師必須設計一個解決方案,為數千名僱員提供進入帳戶的機會。 公司現有身份提供商(IdP). 公司希望使用現有的IDP認證AWS. 哪種解決辦法能滿足這些要求?

**選項**
- A. 為所需AWS帳戶中的員工建立IAM使用者. 連線IAM使用者到現有的IDP. 配置IAM使用者的聯邦認證.
- B. 設定 AWS 帳戶根使用者,其使用者電子郵件地址和密碼與現有的IDP同步.
- C. 配置 AWS IAM 身份中心(AWS Single Sign-On). 連線IAM身份中心與現有的IDP. 提供使用者和來自現有IDP的組.
- D. 使用AWS資源存取管理器(AWS RAM)與現有IDP中的使用者共享對AWS帳戶的存取.

**答案**
B


**詳解**
正確答案是 **B**。
- B：設定 AWS 帳戶根使用者,其使用者電子郵件地址和密碼與現有的IDP同步。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為所需AWS帳戶中的員工建立IAM使用者. 連線IAM使用者到現有的IDP. 配置IAM使用者的聯邦認證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 AWS IAM 身份中心(AWS Single Sign-On). 連線IAM身份中心與現有的IDP. 提供使用者和來自現有IDP的組。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS資源存取管理器(AWS RAM)與現有IDP中的使用者共享對AWS帳戶的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #751

**題目**
一個解決方案架構師正在為一家公司的AWS帳戶設計AWS身份和存取管理(IAM)授權模型. 公司已指定5名具體員工在AWS帳戶中全面獲得AWS服務和資源. 解決方案架構師為五個指定的員工每人建立了IAM使用者,並建立了IAM使用者組. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將管理員Access基於資源的政策附加到IAM使用者組中. 將5名指定的員工IAM使用者各自放到IAM使用者組中.
- B. 將基於系統管理員身份的政策附加到IAM使用者組中. 將5名指定的員工IAM使用者各自放到IAM使用者組中.
- C. 將管理員Access基於身份的政策附加到IAM使用者組中. 將5名指定的員工IAM使用者各自放到IAM使用者組中.
- D. 將系統管理員基於資源的政策附加到IAM使用者組中. 將5名指定的員工IAM使用者各自放到IAM使用者組中.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將管理員Access基於身份的政策附加到IAM使用者組中. 將5名指定的員工IAM使用者各自放到IAM使用者組中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將管理員Access基於資源的政策附加到IAM使用者組中. 將5名指定的員工IAM使用者各自放到IAM使用者組中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將基於系統管理員身份的政策附加到IAM使用者組中. 將5名指定的員工IAM使用者各自放到IAM使用者組中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將系統管理員基於資源的政策附加到IAM使用者組中. 將5名指定的員工IAM使用者各自放到IAM使用者組中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #752

**題目**
公司擁有基於虛擬機器(VM)的多層次支付處理應用程式. 層之間的通訊透過第三方中間軟體的解決方案同步進行,該解決方案保證準確的即時交付。 公司需要一個需要最少基礎設施管理的解決辦法. 解決辦法必須保證及時傳送申請資訊。 哪些行動組合將滿足這些要求?(選二.

**選項**
- A. 架構中的計算層使用AWS Lambda.
- B. 對架構中的計算層使用 Amazon EC2 例項。
- C. 使用亞馬遜簡易通知服務(Amazon SNS)作為計算層之間的通訊元件.
- D. 使用亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列作為計算層之間的通訊元件.
- E. 使用基於Amazon Elastic Kubernetes Services(Amazon EKS)的容器,用於架構中的計算層.

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：架構中的計算層使用AWS Lambda。此選項符合題目條件，能有效滿足核心需求。
- D：使用亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列作為計算層之間的通訊元件。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：對架構中的計算層使用 Amazon EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用亞馬遜簡易通知服務(Amazon SNS)作為計算層之間的通訊元件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用基於Amazon Elastic Kubernetes Services(Amazon EKS)的容器,用於架構中的計算層。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #753

**題目**
一個公司有一個夜間批次處理的例行程式,分析一個proposes檔案系統每天透過SFTP接收的檔案. 公司希望將解決方案移至AWS雲. 解決辦法必須具有高度的可用性和彈性。 解決辦法還必須儘量減少業務努力。 哪種解決辦法符合這些要求?

**選項**
- A. 為 SFTP 部署 AWS 傳輸和 Amazon 彈性檔案系統(Amazon EFS) 檔案系統進行儲存. 在Auto Scaling 群組(Auto Scaling group)中使用一個Amazon EC2例項,並有預定的縮放政策來執行批次操作.
- B. 部署執行 Linux 和 SFTP 服務的 Amazon EC2 例項。 使用一個亞馬遜彈性塊儲存器(Amazon EBS)的容量進行儲存. 使用 Auto Scaling 群組(Auto Scaling group),最小例項數和理想例項數設定為 1。
- C. 部署執行 Linux 和 SFTP 服務的 Amazon EC2 例項。 使用亞馬遜彈性檔案系統(Amazon EFS)檔案系統進行儲存. 使用 Auto Scaling 群組(Auto Scaling group),最小例項數和理想例項數設定為 1。
- D. 部署用於 SFTP 的 AWS 傳輸器和一個 Amazon S3 桶儲存。 修改程式, 將批次檔案從 Amazon S3 拖動到 Amazon EC2 處理。 在Auto Scaling 群組(Auto Scaling group)中使用EC2例項,並帶有預定的縮放政策來執行批次操作.

**答案**
B


**詳解**
正確答案是 **B**。
- B：部署執行 Linux 和 SFTP 服務的 Amazon EC2 例項。 使用一個亞馬遜彈性塊儲存器(Amazon EBS)的容量進行儲存. 使用 Auto Scaling 群組(Auto Scaling group),最小例項數和理想例項數設定為 1 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 SFTP 部署 AWS 傳輸和 Amazon 彈性檔案系統(Amazon EFS) 檔案系統進行儲存. 在Auto Scaling 群組(Auto Scaling group)中使用一個Amazon EC2例項,並有預定的縮放政策來執行批次操作。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署執行 Linux 和 SFTP 服務的 Amazon EC2 例項。 使用亞馬遜彈性檔案系統(Amazon EFS)檔案系統進行儲存. 使用 Auto Scaling 群組(Auto Scaling group),最小例項數和理想例項數設定為 1 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署用於 SFTP 的 AWS 傳輸器和一個 Amazon S3 桶儲存。 修改程式, 將批次檔案從 Amazon S3 拖動到 Amazon EC2 處理。 在Auto Scaling 群組(Auto Scaling group)中使用EC2例項,並帶有預定的縮放政策來執行批次操作。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #754

**題目**
一家公司在世界各地的使用者都存取在Amazon EC2多個區域部署的基於HTTP的應用程式。 公司希望提高應用程式的可用性和效能. 公司還希望保護應用程式免受可能影響到可用性、損害安全或消耗過多資源的常見網路利用。 需要靜態IP地址. 解決方案設計師應該建議什麼來完成這個任務?

**選項**
- A. 將EC2例項放在每個區域(Region)的網路負載平衡器(NLB)後面。 在NLB部署AWS WAF。 使用 AWS 全球加速器建立加速器,並將NLB登記為終點.
- B. 在區域(Region)中,將EC2例項放在應用程式負載平衡器後面。 在ALBs上部署AWS WAF. 使用 AWS 全球加速器建立加速器,並將 ALB 註冊為端點。
- C. 將EC2例項放在每個區域(Region)的網路負載平衡器(NLB)後面。 在NLB部署AWS WAF。 建立 Amazon CloudFront 分佈,其來源使用基於 Amazon Route 53 延遲(latency) 的路由,用於前往NLB的路由請求.
- D. 在每個區域(Region)中,將EC2例項放在應用程式負載平衡器(ALBs)後面. 建立一個Amazon CloudFront分佈,其來源使用Amazon Route 53 延遲(latency)基於路由的路由,用於向ALB請求路由. 部署AWS WAF 在雲紋分佈。

**答案**
C


**詳解**
正確答案是 **C**。
- C：將EC2例項放在每個區域(Region)的網路負載平衡器(NLB)後面。 在NLB部署AWS WAF。 建立 Amazon CloudFront 分佈,其來源使用基於 Amazon Route 53 延遲(latency) 的路由,用於前往NLB的路由請求。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將EC2例項放在每個區域(Region)的網路負載平衡器(NLB)後面。 在NLB部署AWS WAF。 使用 AWS 全球加速器建立加速器,並將NLB登記為終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在區域(Region)中,將EC2例項放在應用程式負載平衡器後面。 在ALBs上部署AWS WAF. 使用 AWS 全球加速器建立加速器,並將 ALB 註冊為端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在每個區域(Region)中,將EC2例項放在應用程式負載平衡器(ALBs)後面. 建立一個Amazon CloudFront分佈,其來源使用Amazon Route 53 延遲(latency)基於路由的路由,用於向ALB請求路由. 部署AWS WAF 在雲紋分佈。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #755

**題目**
一公司的資料平臺使用Amazon Aurora MySQL 資料庫(database). 資料庫(database)有多個讀取複製品,多個DB例項跨越不同的可用區(Availability Zones). 使用者最近報告了資料庫(database)的錯誤,顯示連線過多. 公司希望當讀取副本晉升為主要節點時,將故障時間縮短20%. 哪種解決辦法能滿足這一要求?

**選項**
- A. 透過多AZ叢集部署從Aurora切換到Amazon RDS.
- B. 在Aurora 資料庫執行個體前方使用 Amazon RDS Proxy.
- C. 切換至 Amazon DynamoDB，並搭配 DynamoDB Accelerator (DAX) 用於讀取連線.
- D. 遷移至 Amazon Redshift.

**答案**
A


**詳解**
正確答案是 **A**。
- A：透過多AZ叢集部署從Aurora切換到Amazon RDS。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在Aurora 資料庫執行個體前方使用 Amazon RDS Proxy。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：切換至 Amazon DynamoDB，並搭配 DynamoDB Accelerator (DAX) 用於讀取連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：遷移至 Amazon Redshift。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #756

**題目**
一家公司在Amazon S3中儲存文字檔案. 文字檔案包括客戶聊天資訊,日期和時間資訊,以及客戶個人可識別資訊(PII). 公司需要一個解決方案,向外部服務提供商提供對話樣本,以進行質量控制。 外部服務提供商需要隨機抽取樣本對話,直到最近的對話. 公司不得將客戶PII與外部服務提供商共享. 當客戶對話次數增加時,解決方案必須規模化. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立物件 Lambda 存取點。 建立一個 AWS Lambda 函式,當函式讀取檔案時會編輯 PII。 指示外部服務提供商存取Object Lambda存取點.
- B. 在 Amazon EC2 例項上建立批次程序,定期讀取所有新檔案,從檔案中編輯PII,並將編輯的檔案寫入不同的S3 儲存桶(S3 bucket). 指示外部服務提供商存取不含PII的桶.
- C. 在 Amazon EC2 例項上建立網路應用程式,以顯示檔案列表,從檔案中編輯PII,並允許外部服務提供商下載已編輯PII的檔案的新版本.
- D. 建立 Amazon DynamoDB 表格。 建立 AWS Lambda 函式,只讀取檔案中不包含PII的資料. 配置 Lambda 函式,在向 Amazon S3 寫入新檔案時,將非 PII 資料儲存在 DynamoDB 表中. 允許外部服務提供商存取DynamomDB表格.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 Amazon DynamoDB 表格。 建立 AWS Lambda 函式,只讀取檔案中不包含PII的資料. 配置 Lambda 函式,在向 Amazon S3 寫入新檔案時,將非 PII 資料儲存在 DynamoDB 表中. 允許外部服務提供商存取DynamomDB表格。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立物件 Lambda 存取點。 建立一個 AWS Lambda 函式,當函式讀取檔案時會編輯 PII。 指示外部服務提供商存取Object Lambda存取點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 Amazon EC2 例項上建立批次程序,定期讀取所有新檔案,從檔案中編輯PII,並將編輯的檔案寫入不同的S3 儲存桶(S3 bucket). 指示外部服務提供商存取不含PII的桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Amazon EC2 例項上建立網路應用程式,以顯示檔案列表,從檔案中編輯PII,並允許外部服務提供商下載已編輯PII的檔案的新版本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #757

**題目**
一家公司正在一個Amazon EC2 執行個體上執行一個遺留系統。 應用程式程式碼不能修改,系統不能執行在一個以上的例項上. 一個解決方案架構師必須設計一個能夠改善系統恢復時間的彈性解決方案. 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 啟用EC2 例項的終止保護。
- B. 為多AZ部署配置EC2例項.
- C. 建立 Amazon CloudWatch 提醒,以便在失敗時恢復EC2 例項。
- D. 以兩個使用RAID配置進行儲存冗餘的亞馬遜彈性塊儲存器(Amazon EBS)啟動EC2例項.

**答案**
A


**詳解**
正確答案是 **A**。
- A：啟用EC2 例項的終止保護 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為多AZ部署配置EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon CloudWatch 提醒,以便在失敗時恢復EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：以兩個使用RAID配置進行儲存冗餘的亞馬遜彈性塊儲存器(Amazon EBS)啟動EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #758

**題目**
一家公司希望將其集裝箱化的應用工作量部署在三個可用區(Availability Zones)的VPC上。 公司需要一種在可用區(Availability Zones)上可以大量使用的解決方案. 解決辦法必須對應用程式進行最小程度的修改。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用亞馬遜彈性容器服務(Amazon ECS). 配置 Amazon ECS 服務自動縮放以使用目標跟蹤縮放. 設定最小容量為3. 設定任務佈置策略型別以 可用區(Availability Zone) 屬性展開。
- B. 使用Amazon Elastic Kubernetes Service(Amazon EKS) 自行管理的節點. 配置應用程式自動縮放以使用目標跟蹤縮放。 設定最小容量為3.
- C. 使用 Amazon EC2 保留例項。 在分散式安置組中推出三個EC2 執行個體. 配置 Auto Scaling 群組(Auto Scaling group) 以使用目標跟蹤縮放。 設定最小容量為3.
- D. 使用 AWS Lambda 函式. 配置 Lambda 函式以連線到 VPC。 配置應用程式自動縮放以使用 Lambda 作為可縮放的目標。 設定最小容量為3.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon Elastic Kubernetes Service(Amazon EKS) 自行管理的節點. 配置應用程式自動縮放以使用目標跟蹤縮放。 設定最小容量為3。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用亞馬遜彈性容器服務(Amazon ECS). 配置 Amazon ECS 服務自動縮放以使用目標跟蹤縮放. 設定最小容量為3. 設定任務佈置策略型別以 可用區(Availability Zone) 屬性展開 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon EC2 保留例項。 在分散式安置組中推出三個EC2 執行個體. 配置 Auto Scaling 群組(Auto Scaling group) 以使用目標跟蹤縮放。 設定最小容量為3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Lambda 函式. 配置 Lambda 函式以連線到 VPC。 配置應用程式自動縮放以使用 Lambda 作為可縮放的目標。 設定最小容量為3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #759

**題目**
一家媒體公司在Amazon S3中存放電影. 每部電影都儲存在單個影片檔案中,大小從1GB到10GB不等. 公司必須能夠在使用者購買後5分鐘內提供電影的流媒體內容. 20歲以下電影的需求高於20歲以上電影的需求。 公司希望根據需求儘量減少託管服務費用. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在Amazon S3中儲存所有媒體內容. 使用S3生命週期政策,當對電影的需求下降時,將媒體資料移動到不頻繁存取級.
- B. 在S3 Standard中儲存較新的電影影片檔案. 在S3 Standard-不經常存取(S3 Standard-IA)中儲存較老的電影影片檔案. 當使用者訂購更古老的電影時,透過使用標準檢索來檢索影片檔案.
- C. 在S3 Intelligent-Tiering中儲存較新的電影影片檔案. 在S3 Glacier Flexible Retrieval中儲存較舊的電影影片檔案. 當使用者訂購更古老的電影時,透過快速檢索來檢索影片檔案.
- D. 在S3 Standard中儲存較新的電影影片檔案. 在S3 Glacier Flexible Retrieval中儲存較舊的電影影片檔案. 當使用者訂購更古老的電影時,透過使用批次檢索來檢索影片檔案.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在Amazon S3中儲存所有媒體內容. 使用S3生命週期政策,當對電影的需求下降時,將媒體資料移動到不頻繁存取級。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在S3 Standard中儲存較新的電影影片檔案. 在S3 Standard-不經常存取(S3 Standard-IA)中儲存較老的電影影片檔案. 當使用者訂購更古老的電影時,透過使用標準檢索來檢索影片檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在S3 Intelligent-Tiering中儲存較新的電影影片檔案. 在S3 Glacier Flexible Retrieval中儲存較舊的電影影片檔案. 當使用者訂購更古老的電影時,透過快速檢索來檢索影片檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在S3 Standard中儲存較新的電影影片檔案. 在S3 Glacier Flexible Retrieval中儲存較舊的電影影片檔案. 當使用者訂購更古老的電影時,透過使用批次檢索來檢索影片檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #760

**題目**
一個解決方案架構師需要為供應商作為Docker容器影象提供的應用程式設計架構. 容器需要50 GB的儲存,可供臨時檔案使用. 基礎設施必須無伺服器。 LEAST 營運開銷(operational overhead)符合這些要求的解決方案是什麼?

**選項**
- A. 建立 AWS Lambda 函式,使用帶有 Amazon S3 掛載容量的 Docker 容器影象,其空間超過 50 GB。
- B. 建立一個AWS Lambda功能,使用帶有亞馬遜彈性塊儲存器(Amazon EBS)的多克容器影象,容量超過50GB的空間.
- C. 建立亞馬遜彈性容器服務(Amazon ECS)叢集,使用AWS Fargate發射型. 為帶有亞馬遜彈性檔案系統的容器影象建立任務定義(Amazon EFS)卷. 建立帶有任務定義的服務。
- D. 建立亞馬遜彈性容器服務(Amazon ECS)叢集,使用Amazon EC2發射型,其AVSERV0050容量超過50GB的空間. 為容器影象建立任務定義。 建立帶有任務定義的服務。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個AWS Lambda功能,使用帶有亞馬遜彈性塊儲存器(Amazon EBS)的多克容器影象,容量超過50GB的空間。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 AWS Lambda 函式,使用帶有 Amazon S3 掛載容量的 Docker 容器影象,其空間超過 50 GB 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立亞馬遜彈性容器服務(Amazon ECS)叢集,使用AWS Fargate發射型. 為帶有亞馬遜彈性檔案系統的容器影象建立任務定義(Amazon EFS)卷. 建立帶有任務定義的服務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立亞馬遜彈性容器服務(Amazon ECS)叢集,使用Amazon EC2發射型,其AVSERV0050容量超過50GB的空間. 為容器影象建立任務定義。 建立帶有任務定義的服務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #761

**題目**
公司需要使用其premise上的LDAP目錄服務來認證使用者到AWS管理控制檯. 目錄服務與安全Assertion Markup Language(SAML)不相容. 哪種解決辦法符合這些要求?

**選項**
- A. 啟用 AWS IAM 身份認證中心(AWS Single Sign-On)在 AWS 和 presimes LDAP 之間.
- B. 建立一個使用 AWS 憑證的 IAM 政策(IAM policy),並將策略整合到 LDAP 中.
- C. 設定一個程序,每當LDAP憑證更新時都會旋轉IAM憑證.
- D. 開發一個使用AWS安全託肯服務(AWS STS)獲取短命憑證的自定義身份中介應用程式或程序.

**答案**
C


**詳解**
正確答案是 **C**。
- C：設定一個程序,每當LDAP憑證更新時都會旋轉IAM憑證。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：啟用 AWS IAM 身份認證中心(AWS Single Sign-On)在 AWS 和 presimes LDAP 之間。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個使用 AWS 憑證的 IAM 政策(IAM policy),並將策略整合到 LDAP 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：開發一個使用AWS安全託肯服務(AWS STS)獲取短命憑證的自定義身份中介應用程式或程序。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #762

**題目**
一家公司將多個亞馬遜機器影象儲存在一個AWS帳戶中,以啟動其Amazon EC2 執行個體. AMI包含公司運營所必需的關鍵資料和配置. 公司希望實施一個能迅速高效地恢復意外刪除的AMIs的解決方案. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立Amazon Elastic Block Store(Amazon EBS) AMIs的快照. 將快照儲存在單獨的 AWS 帳戶中。
- B. 定期將所有 AMI 複製到另一個 AWS 帳戶。
- C. 在 Recycle Bin 中建立保留規則。
- D. 將AMIs上傳到一個擁有Cross-區域(Region) 複寫(Replication)的Amazon S3桶.

**答案**
D


**詳解**
正確答案是 **D**。
- D：將AMIs上傳到一個擁有Cross-區域(Region) 複寫(Replication)的Amazon S3桶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立Amazon Elastic Block Store(Amazon EBS) AMIs的快照. 將快照儲存在單獨的 AWS 帳戶中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：定期將所有 AMI 複製到另一個 AWS 帳戶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Recycle Bin 中建立保留規則 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #763

**題目**
一家公司有150 TB的存檔影象資料儲存在-promesses上,需要在下個月內移動到AWS雲. 該公司目前的網路連線只允許在夜間為此目的上傳多達100 Mbps。 移動這些資料和在移徙截止日期前完成遷移的 " 現代化技術 " 成本效益高的機制是什麼?

**選項**
- A. 使用AWS Snowmobile將資料傳送到AWS.
- B. 訂購多臺AWS Snowball裝置將資料運往AWS.
- C. 啟用Amazon S3 Transfer Acceleration並安全上傳資料.
- D. 建立一個Amazon S3 VPC 端點(VPC endpoint)並建立一個VPN上傳資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS Snowmobile將資料傳送到AWS。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：訂購多臺AWS Snowball裝置將資料運往AWS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：啟用Amazon S3 Transfer Acceleration並安全上傳資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個Amazon S3 VPC 端點(VPC endpoint)並建立一個VPN上傳資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #764

**題目**
一家公司希望將其三級申請從房地轉移到AWS。 網路級和應用程式級執行在第三方虛擬機器(VMs)上. 資料庫(database)級在MySQL上執行. 公司需要透過對架構進行儘可能少的修改來遷移應用程式. 公司還需要資料庫(database)解決方案,可以將資料恢復到特定的時間點. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在私人子網中將網路級和應用級遷移到Amazon EC2 執行個體. 在私人子網中將資料庫(database)級移動至Amazon RDS用於MySQL.
- B. 在公共子網中將網路級遷移到Amazon EC2 執行個體. 在私有子網中將應用程式級遷移到 EC2 例項。 在私人子網中將資料庫(database)級移動到Amazon Aurora MySQL.
- C. 在公共子網中將網路級遷移到Amazon EC2 執行個體. 在私有子網中將應用程式級遷移到 EC2 例項。 在私人子網中將資料庫(database)級移動至Amazon RDS用於MySQL.
- D. 在公共子網中將網路層級和應用層級遷移到Amazon EC2例項. 在公共子網中將資料庫(database)級移動到Amazon Aurora MySQL.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在私人子網中將網路級和應用級遷移到Amazon EC2 執行個體. 在私人子網中將資料庫(database)級移動至Amazon RDS用於MySQL。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在公共子網中將網路級遷移到Amazon EC2 執行個體. 在私有子網中將應用程式級遷移到 EC2 例項。 在私人子網中將資料庫(database)級移動到Amazon Aurora MySQL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在公共子網中將網路級遷移到Amazon EC2 執行個體. 在私有子網中將應用程式級遷移到 EC2 例項。 在私人子網中將資料庫(database)級移動至Amazon RDS用於MySQL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在公共子網中將網路層級和應用層級遷移到Amazon EC2例項. 在公共子網中將資料庫(database)級移動到Amazon Aurora MySQL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #765

**題目**
一個開發團隊正與另一家公司合作建立綜合產品. 另一家公司需要存取開發團隊帳戶中包含的亞馬遜簡易佇列服務(Amazon SQS)佇列. 另一家公司想在不放棄自己帳戶許可權的情況下對佇列進行投票. 一個解決方案架構設計師應該如何提供對 SQS 佇列的存取?

**選項**
- A. 建立一個執行個體設定檔(instance profile),提供另一家公司對SQS佇列的存取.
- B. 建立一個IAM 政策(IAM policy),提供另一家公司對SQS佇列的存取.
- C. 建立 SQS 存取策略,為另一家公司提供對 SQS 佇列的存取.
- D. 建立一個亞馬遜簡易通知服務(Amazon SNS)存取政策,為另一家公司提供對SQS佇列的存取.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個執行個體設定檔(instance profile),提供另一家公司對SQS佇列的存取。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個IAM 政策(IAM policy),提供另一家公司對SQS佇列的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 SQS 存取策略,為另一家公司提供對 SQS 佇列的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個亞馬遜簡易通知服務(Amazon SNS)存取政策,為另一家公司提供對SQS佇列的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #766

**題目**
一個公司的開發者希望有一個安全的方法,在公司執行最新版本亞馬遜Linux的Amazon EC2例項上獲得SSH存取. 開發商在公司辦公室遠端工作。 公司希望將AWS服務作為解決方案的一部分. EC2 執行個體以VPC的私人子網為主機,並透過部署在公共子網中的NAT閘道器接入網際網路. 一個解決方案設計師應該做什麼才能以成本效益高的方式滿足這些要求?

**選項**
- A. 與 EC2 例項在同一子網建立 bastion 主機。 授予開發者 ec2: CreateVpnConnection IAM 許可權. 安裝 EC2 例項連線, 以便開發者可以連線到 EC2 例項。
- B. 在公司網路和VPC之間建立AWS站點對站點VPN連線. 指示開發者在開發者在公司網路上時使用站點對站點VPN連線存取EC2例項. 指示開發者在遠端工作時為存取設定另一個VPN連線.
- C. 在 VPConfit 的公共子網中建立一個 bastion 主機, 安全組和 bastion 主機的 SSH 金鑰, 只允許從開發商的企業和遠端網路連線和 SSH 認證。 指示開發者透過bastion主機透過SSH連線到EC2例項.
- D. 將AmazonSSMManaged Instance Core IAM 政策(IAM policy)附加到與EC2例項相關的IAM角色中. 指示開發者使用 AWS Systems Manager 會話管理器存取 EC2 例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：在公司網路和VPC之間建立AWS站點對站點VPN連線. 指示開發者在開發者在公司網路上時使用站點對站點VPN連線存取EC2例項. 指示開發者在遠端工作時為存取設定另一個VPN連線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：與 EC2 例項在同一子網建立 bastion 主機。 授予開發者 ec2: CreateVpnConnection IAM 許可權. 安裝 EC2 例項連線, 以便開發者可以連線到 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 VPConfit 的公共子網中建立一個 bastion 主機, 安全組和 bastion 主機的 SSH 金鑰, 只允許從開發商的企業和遠端網路連線和 SSH 認證。 指示開發者透過bastion主機透過SSH連線到EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將AmazonSSMManaged Instance Core IAM 政策(IAM policy)附加到與EC2例項相關的IAM角色中. 指示開發者使用 AWS Systems Manager 會話管理器存取 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #767

**題目**
一家制藥公司正在研製一種新藥。 在過去幾個月裡,該公司生成的資料量成指數增長。 公司的研究者們經常要求整個資料集的子集以最小的滯後速度立即提供. 然而,整個資料集不需要每天存取. 目前所有資料都存於房地儲存陣列中,公司希望減少持續資本支出. 哪個儲存解決方案應該由設計師建議滿足這些要求?

**選項**
- A. 執行 AWS DataSync 作為預定的 cron 任務,持續將資料遷移到 Amazon S3 桶中.
- B. 部署AWS Storage Gateway檔案閘道器,以Amazon S3桶作為目標儲存. 將資料遷移到儲存閘道器的電器。
- C. 部署一個AWS Storage Gateway卷閘道器,以一個Amazon S3桶作為目標儲存器的快取卷. 將資料遷移到儲存閘道器的電器。
- D. 配置 AWS 站點到站點的 VPN 從站點環境到 AWS 連線。 將資料遷移到一個亞馬遜彈性檔案系統(Amazon EFS)的檔案系統.

**答案**
B


**詳解**
正確答案是 **B**。
- B：部署AWS Storage Gateway檔案閘道器,以Amazon S3桶作為目標儲存. 將資料遷移到儲存閘道器的電器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：執行 AWS DataSync 作為預定的 cron 任務,持續將資料遷移到 Amazon S3 桶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署一個AWS Storage Gateway卷閘道器,以一個Amazon S3桶作為目標儲存器的快取卷. 將資料遷移到儲存閘道器的電器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 AWS 站點到站點的 VPN 從站點環境到 AWS 連線。 將資料遷移到一個亞馬遜彈性檔案系統(Amazon EFS)的檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #768

**題目**
一家公司有一個業務關鍵應用程式,執行在Amazon EC2上。 應用程式將資料儲存在 Amazon DynamoDB 表中. 公司必須能夠在最近24小時內將表格折回到任何地點。 LEAST 營運開銷(operational overhead)符合這些要求的解決方案是什麼?

**選項**
- A. 為表格配置時間點恢復。
- B. 表格使用 AWS Backup。
- C. 使用一個 AWS Lambda 函式,每小時製作一個按需的 備份(backup) 表格.
- D. 開啟表上的流來捕捉過去24小時裡對錶的所有更改的日誌. 在Amazon S3桶中儲存流水副本.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用一個 AWS Lambda 函式,每小時製作一個按需的 備份(backup) 表格。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為表格配置時間點恢復。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：表格使用 AWS Backup 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：開啟表上的流來捕捉過去24小時裡對錶的所有更改的日誌. 在Amazon S3桶中儲存流水副本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #769

**題目**
一個公司託管一個用於上傳檔案到Amazon S3桶的應用程式. 一旦上傳,檔案會被處理以提取後設資料,這需要不到5秒的時間. 上傳的磁碟區和頻率從每小時幾個檔案到數百個同時上傳. 公司要求解決方案架構師設計符合這些要求的具有成本效益的建築. 解決方案設計師應該建議什麼?

**選項**
- A. 配置 AWS CloudTrail 線索以登入 S3 API 呼叫。 使用 AWS AppSync 處理檔案.
- B. 在 S3 儲存桶(S3 bucket) 內配置一個物件建立的事件通知,以引用 AWS Lambda 函式處理檔案.
- C. 配置 Amazon Kinesis 資料流處理併傳送資料給 Amazon S3. Invoke a AWS Lambda 函式處理檔案.
- D. 配置一個 Amazon 簡單通知服務(Amazon SNS) 主題處理上傳到 Amazon S3 的檔案. Invoke a AWS Lambda 函式處理檔案.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 Amazon Kinesis 資料流處理併傳送資料給 Amazon S3. Invoke a AWS Lambda 函式處理檔案。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 AWS CloudTrail 線索以登入 S3 API 呼叫。 使用 AWS AppSync 處理檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 S3 儲存桶(S3 bucket) 內配置一個物件建立的事件通知,以引用 AWS Lambda 函式處理檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個 Amazon 簡單通知服務(Amazon SNS) 主題處理上傳到 Amazon S3 的檔案. Invoke a AWS Lambda 函式處理檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #770

**題目**
Amazon EC2例項上部署了一個公司的應用程式,並且將AWS Lambda功能用於事件驅動架構. 公司使用不同AWS帳戶的非生產開發環境,在公司向生產部署這些特性之前測試新的特徵. 生產情況顯示,由於不同時區的客戶,使用率不斷。 該公司只在工作日的工作時間使用非生產情況。 公司在週末不使用非生產專案。 公司希望最佳化成本,在AWS上執行其應用. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 對生產例項使用現場例項。 僅在週末的非生產場合使用專用主機.
- B. 使用保留例項進行生產和非生產例項。 未使用時, 關閉非生產例項。
- C. 為生產例項使用計算儲蓄計劃。 對非生產例項使用現場例項。 未使用時, 關閉非生產例項。
- D. 生產例項使用專用主機。 對非生產情況採用EC2例項儲蓄計劃。

**答案**
D


**詳解**
正確答案是 **D**。
- D：生產例項使用專用主機。 對非生產情況採用EC2例項儲蓄計劃。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：對生產例項使用現場例項。 僅在週末的非生產場合使用專用主機。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用保留例項進行生產和非生產例項。 未使用時, 關閉非生產例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為生產例項使用計算儲蓄計劃。 對非生產例項使用現場例項。 未使用時, 關閉非生產例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #771

**題目**
一家公司在Oracle關係資料庫(database)上儲存資料. 公司需要提供Amazon Aurora PostgreSQL中的資料以供分析. 公司使用AWS站點對站點VPN連線,將其站點的網路連線到AWS. 公司必須捕捉來源資料庫(database)在遷移到Aurora PostgreSQL期間發生的變化. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 AWS Schema 轉換工具(AWS SCT)將甲骨文計劃轉換為Aurora PostgreSQL 計劃. 使用 AWS 資料庫(Database) 遷移服務(AWS DSM)全載遷移任務來遷移資料.
- B. 使用AWS DataSync將資料遷移到一個Amazon S3桶中. 透過使用Aurora PostgreSQL aws s3擴充套件將 S3 資料匯入到 Aurora PostgreSQL 中.
- C. 使用 AWS Schema 轉換工具(AWS SCT)將甲骨文計劃轉換為Aurora PostgreSQL 計劃. 使用 AWS 資料庫(Database) 遷移服務(AWS DS)遷移現有資料並複製正在進行的變化.
- D. 使用AWS Snowball裝置將資料遷移到Amazon S3桶. 透過使用Aurora PostgreSQL aws s3擴充套件將 S3 資料匯入到 Aurora PostgreSQL 中.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用AWS Snowball裝置將資料遷移到Amazon S3桶. 透過使用Aurora PostgreSQL aws s3擴充套件將 S3 資料匯入到 Aurora PostgreSQL 中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS Schema 轉換工具(AWS SCT)將甲骨文計劃轉換為Aurora PostgreSQL 計劃. 使用 AWS 資料庫(Database) 遷移服務(AWS DSM)全載遷移任務來遷移資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用AWS DataSync將資料遷移到一個Amazon S3桶中. 透過使用Aurora PostgreSQL aws s3擴充套件將 S3 資料匯入到 Aurora PostgreSQL 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Schema 轉換工具(AWS SCT)將甲骨文計劃轉換為Aurora PostgreSQL 計劃. 使用 AWS 資料庫(Database) 遷移服務(AWS DS)遷移現有資料並複製正在進行的變化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #772

**題目**
一家公司用Docker容器建造了一個應用程式,需要在AWS雲執行該應用程式. 公司希望使用管理服務託管應用程式. 解決辦法必須根據對單個集裝箱服務的需求適當擴大。 解決方案也不得導致增加營運開銷(operational overhead)或管理基礎設施。 哪些解決辦法能滿足這些要求?(選二.

**選項**
- A. 使用帶有AWS Fargate的亞馬遜彈性容器服務(Amazon ECS).
- B. 與 AWS Fargate 一同使用 Amazon Elastic Kubernetes Service(Amazon EKS).
- C. 提供Amazon API Gateway API。 連線API到AWS Lambda執行容器.
- D. 使用帶有Amazon EC2工人節點的亞馬遜彈性容器服務(Amazon ECS).
- E. 使用帶有Amazon EC2工人節點的Amazon Elastic Kubernetes Service(Amazon EKS).

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：使用帶有AWS Fargate的亞馬遜彈性容器服務(Amazon ECS)。此選項符合題目條件，能有效滿足核心需求。
- C：提供Amazon API Gateway API。 連線API到AWS Lambda執行容器。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：與 AWS Fargate 一同使用 Amazon Elastic Kubernetes Service(Amazon EKS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用帶有Amazon EC2工人節點的亞馬遜彈性容器服務(Amazon ECS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用帶有Amazon EC2工人節點的Amazon Elastic Kubernetes Service(Amazon EKS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #773

**題目**
一家電子商務公司正在進行季節性線上銷售。 該公司在Amazon EC2上設有網站,涵蓋多個可用區(Availability Zones)。 公司希望其網站在銷售期間管理突然的流量增加. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立一個Auto Scaling 群組(Auto Scaling group),規模足以處理高峰流量負載. 停止一半的 Amazon EC2 例。 配置 Auto Scaling 群組(Auto Scaling group) 以在流量增加時使用已停止的例來縮放。
- B. 為網站建立 Auto Scaling 群組(Auto Scaling group)。 設定Auto Scaling 群組(Auto Scaling group)型機車的最低尺寸,使其可以處理高流量而無需擴大.
- C. 使用Amazon CloudFront和Amazon ElastiCache來快取以Auto Scaling 群組(Auto Scaling group)設定為源的動態內容. 配置 Auto Scaling 群組(Auto Scaling group) 並配置 CloudFront 和 ElastiCache 所需的例項。 快取滿員後縮放。
- D. 配置一個 Auto Scaling 群組(Auto Scaling group) , 隨著流量的增加而擴大。 建立一個啟動模板,從預先配置的亞馬遜機器影象(AMI)開始新的例項.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個Auto Scaling 群組(Auto Scaling group),規模足以處理高峰流量負載. 停止一半的 Amazon EC2 例。 配置 Auto Scaling 群組(Auto Scaling group) 以在流量增加時使用已停止的例來縮放 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為網站建立 Auto Scaling 群組(Auto Scaling group)。 設定Auto Scaling 群組(Auto Scaling group)型機車的最低尺寸,使其可以處理高流量而無需擴大。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon CloudFront和Amazon ElastiCache來快取以Auto Scaling 群組(Auto Scaling group)設定為源的動態內容. 配置 Auto Scaling 群組(Auto Scaling group) 並配置 CloudFront 和 ElastiCache 所需的例項。 快取滿員後縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個 Auto Scaling 群組(Auto Scaling group) , 隨著流量的增加而擴大。 建立一個啟動模板,從預先配置的亞馬遜機器影象(AMI)開始新的例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #774

**題目**
解決方案架構師必須為公司的合規(compliance)政策提供自動化解決方案,規定安全小組不能包括允許SSH從0.0/0. 如果政策有任何違反,需要通知公司。 需要儘快找到解決辦法。 解決方案設計師應如何用LEAST 營運開銷(operational overhead)滿足這些要求?

**選項**
- A. 寫一個 AWS Lambda 指令碼,用於監視安全小組的SSH 開啟 0.0.0.0/0 地址,並在每次找到時建立一個通知.
- B. 啟用限制Ssh AWS Config管理規則,並在建立不符合規則時生成亞馬遜簡單通知服務(Amazon SNS)通知.
- C. 建立IAM角色,授權全球開放安全團體和網路ACL. 建立一個Amazon簡單通知服務(Amazon SNS)主題,每次由使用者承擔角色時生成通知.
- D. 配置服務控制政策(SCP),防止非行政使用者建立或編輯安全組. 當使用者請求需要管理員許可權的規則時,在售票系統中建立一個通知.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立IAM角色,授權全球開放安全團體和網路ACL. 建立一個Amazon簡單通知服務(Amazon SNS)主題,每次由使用者承擔角色時生成通知。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：寫一個 AWS Lambda 指令碼,用於監視安全小組的SSH 開啟 0.0.0.0/0 地址,並在每次找到時建立一個通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：啟用限制Ssh AWS Config管理規則,並在建立不符合規則時生成亞馬遜簡單通知服務(Amazon SNS)通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置服務控制政策(SCP),防止非行政使用者建立或編輯安全組. 當使用者請求需要管理員許可權的規則時,在售票系統中建立一個通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #775

**題目**
使用帶有Amazon EC2工人節點的Amazon Elastic Kubernetes Service(Amazon EKS). 一個連在AWS帳戶中部署了應用程式. 應用程式包括執行在AWS Lambda和亞馬遜彈性庫伯涅茨服務(Amazon EKS)上的微服務. 一個單獨的團隊支援每個微服務. 公司擁有多個AWS帳戶,希望為每個團隊提供自己的微服務帳戶. 一個解決方案架構師需要設計一個解決方案,在HTTPS(443號港)上提供服務對服務通訊. 解決方案還必須為發現服務提供一個服務登記處。 LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 建立檢查VPC. 部署AWS網路防火牆(Firewall)防火牆(firewall),用於檢查VPC. 將檢查VPC附加到一個新的中轉閘道器. 途徑VPC至VPC的交通前往檢查VPC. 應用防火牆(firewall)規則只允許HTTPS通訊.
- B. 建立VPC Lattice服務網路. 把微服務與服務網路聯絡起來。 為每項服務定義 HTTPS 聽器。 登記微服務計算資源為目標。 確定需要與服務機構進行溝通的VPC. 將這些自願人員與服務網路聯絡起來。
- C. 建立網路負載平衡器(Network Load Balancer)(NLB),每個微型服務都有HTTPS的聽眾和目標群體. 為每個微服務建立 AWS PrivateLink 端點服務。 在每個 VPC 中建立需要消耗該微服務的介面 VPC 端點(VPC endpoint)。
- D. 建立包含微服務的VPC之間的對等連線. 為每個需要連線客戶端的服務建立字首列表. 建立路由表,將路由流量傳送給相應的VPC. 建立安全組只允許 HTTPS 通訊。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立檢查VPC. 部署AWS網路防火牆(Firewall)防火牆(firewall),用於檢查VPC. 將檢查VPC附加到一個新的中轉閘道器. 途徑VPC至VPC的交通前往檢查VPC. 應用防火牆(firewall)規則只允許HTTPS通訊。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立VPC Lattice服務網路. 把微服務與服務網路聯絡起來。 為每項服務定義 HTTPS 聽器。 登記微服務計算資源為目標。 確定需要與服務機構進行溝通的VPC. 將這些自願人員與服務網路聯絡起來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立網路負載平衡器(Network Load Balancer)(NLB),每個微型服務都有HTTPS的聽眾和目標群體. 為每個微服務建立 AWS PrivateLink 端點服務。 在每個 VPC 中建立需要消耗該微服務的介面 VPC 端點(VPC endpoint) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立包含微服務的VPC之間的對等連線. 為每個需要連線客戶端的服務建立字首列表. 建立路由表,將路由流量傳送給相應的VPC. 建立安全組只允許 HTTPS 通訊 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #776

**題目**
一家公司有一個移動遊戲,從Amazon RDS DB例項讀取其大部分後設資料. 隨著遊戲受歡迎度的提高,開發者注意到與遊戲後設資料負載時間相關的減速. 業績衡量標準表明,僅僅擴大資料庫(database)將無濟於事。 一個解決方案架構師必須探索所有選項,包括快照、複寫(replication)和次微秒響應時間的能力。 解決方案設計師建議如何解決這些問題?

**選項**
- A. 將資料庫(database)型機車與Amazon Aurora型機車與Aurora複製機一起遷移.
- B. 用全域性表將資料庫(database)移動到Amazon DynamoDB.
- C. 在資料庫(database)前增加一個Amazon ElastiCache用於雷迪斯層.
- D. 在資料庫(database)前增加一個Amazon ElastiCache,用於疊加層.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在資料庫(database)前增加一個Amazon ElastiCache,用於疊加層。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料庫(database)型機車與Amazon Aurora型機車與Aurora複製機一起遷移。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：用全域性表將資料庫(database)移動到Amazon DynamoDB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在資料庫(database)前增加一個Amazon ElastiCache用於雷迪斯層。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #777

**題目**
一家公司使用AWS Organizations進行多帳戶AWS設定. 公司的安全組織單位(OU)需要與開發的OU共享經批准的Amazon Machine Images(AMI). AMI是使用AWS Key Management Service(AWS KMS)加密快照建立的. 哪種解決辦法能滿足這些要求?(選二.

**選項**
- A. 將開發團隊的OU Amazon資源名稱(ARN)加入AMIs的發射許可列表.
- B. 將根亞馬遜資源名稱(ARN)新增到AMIs的啟動許可權列表中.
- C. 更新關鍵策略,允許開發團隊的OU使用用於解密快照的AWS KMS金鑰.
- D. 將開發團隊帳戶Amazon資源名稱(ARN)加入AMIs的發射許可列表.
- E. 重新建立 AWS KMS 金鑰。 新增一個關鍵政策,允許根亞馬遜資源名稱(ARN)的組織使用 AWS KMS 金鑰.

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：將根亞馬遜資源名稱(ARN)新增到AMIs的啟動許可權列表中。此選項符合題目條件，能有效滿足核心需求。
- C：更新關鍵策略,允許開發團隊的OU使用用於解密快照的AWS KMS金鑰。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：將開發團隊的OU Amazon資源名稱(ARN)加入AMIs的發射許可列表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將開發團隊帳戶Amazon資源名稱(ARN)加入AMIs的發射許可列表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：重新建立 AWS KMS 金鑰。 新增一個關鍵政策,允許根亞馬遜資源名稱(ARN)的組織使用 AWS KMS 金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #778

**題目**
一個資料分析公司有80個辦事處分佈在全球。 每個辦公室都擁有1個PB資料,網際網路頻寬在1到2Gbps之間。 公司需要一次性將大量資料從辦公室遷移到Amazon S3. 公司必須在4周內完成遷移. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 新建10Gbps AWS Direct Connect與每個辦公室的連線. 資料轉移到Amazon S3.
- B. 使用多臺AWS Snowball Edge儲存最佳化裝置儲存資料並將其傳輸至Amazon S3.
- C. 使用AWS Snowmobile儲存資料並將其傳輸至Amazon S3.
- D. 建立AWS Storage Gateway卷閘道器,將資料傳輸到Amazon S3.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用AWS Snowmobile儲存資料並將其傳輸至Amazon S3。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：新建10Gbps AWS Direct Connect與每個辦公室的連線. 資料轉移到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用多臺AWS Snowball Edge儲存最佳化裝置儲存資料並將其傳輸至Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立AWS Storage Gateway卷閘道器,將資料傳輸到Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #779

**題目**
一家公司有一個亞馬遜彈性檔案系統(Amazon EFS)檔案系統,包含一個參考資料集. 該公司在Amazon EC2例項上有需要讀取資料集的應用程式. 然而,應用程式不能改變資料集。 公司希望使用IAM 存取控制(access control)來阻止應用程式能夠修改或刪除資料集. 哪種解決辦法能滿足這些要求?

**選項**
- A. 從 EC2 例項中以只讀模式掛載 EFS 檔案系統。
- B. 為 EFS 檔案系統建立資源政策, 拒絕彈性檔案系統: ClientWrite action to the IAM 角色附在 EC2 例項中.
- C. 為EFS檔案系統建立身份政策,拒絕彈性檔案系統:ClientWrite action on EFS檔案系統.
- D. 為每個應用程式建立 EFS 存取點。 使用可移植作業系統介面(POSIX)檔案許可權允許只讀存取根目錄中的檔案.

**答案**
A


**詳解**
正確答案是 **A**。
- A：從 EC2 例項中以只讀模式掛載 EFS 檔案系統 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為 EFS 檔案系統建立資源政策, 拒絕彈性檔案系統: ClientWrite action to the IAM 角色附在 EC2 例項中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為EFS檔案系統建立身份政策,拒絕彈性檔案系統:ClientWrite action on EFS檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為每個應用程式建立 EFS 存取點。 使用可移植作業系統介面(POSIX)檔案許可權允許只讀存取根目錄中的檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #780

**題目**
一家公司僱用了一家外部供應商在該公司的AWS帳戶工作。 供應商使用一個自動工具,由供應商擁有的AWS帳戶託管。 該供應商無法進入該公司的AWS帳戶。 公司需要允許供應商進入公司的AWS帳戶. 哪種解決辦法能夠最安全地滿足這些要求?

**選項**
- A. 在公司帳戶中設立IAM角色,授權供應商進入IAM角色. 將適當的IAM政策附在供應商需要的許可上。
- B. 在公司的帳戶中建立一個滿足密碼複雜要求的IAM使用者. 向使用者附上適當的IAM政策,以獲得供應商所需的許可。
- C. 在公司帳戶中建立一個IAM集團. 將自動工具的IAM使用者從供應商帳戶新增到集團中。 將適當的IAM政策附給集團,以獲得供應商所需的許可。
- D. 在公司的帳戶中建立一個具有允許供應商帳戶的許可界限的IAM使用者。 向使用者附上適當的IAM政策,以獲得供應商所需的許可。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在公司帳戶中設立IAM角色,授權供應商進入IAM角色. 將適當的IAM政策附在供應商需要的許可上。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在公司的帳戶中建立一個滿足密碼複雜要求的IAM使用者. 向使用者附上適當的IAM政策,以獲得供應商所需的許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在公司帳戶中建立一個IAM集團. 將自動工具的IAM使用者從供應商帳戶新增到集團中。 將適當的IAM政策附給集團,以獲得供應商所需的許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在公司的帳戶中建立一個具有允許供應商帳戶的許可界限的IAM使用者。 向使用者附上適當的IAM政策,以獲得供應商所需的許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #781

**題目**
一家公司想在AWS雲中執行實驗工作量. 公司有云支出預算. 公司CFO關注雲支出每個部門的責任. 首席財務幹事希望在支出門檻達到預算的60%時收到通知。 哪種解決辦法能滿足這些要求?

**選項**
- A. 在 AWS 資源上使用成本分配標記給標籤所有者。 在 AWS 預算中建立使用預算。 支出超過預算60%時,增加一個警戒門檻,以收到通知。
- B. 使用AWS Cost Explorer預測來確定資源所有者. 使用 AWS 成本異常檢測在支出超過預算60%時建立警戒閾值通知.
- C. 在 AWS 資源上使用成本分配標記給標籤所有者。 在 AWS 信任的顧問上使用 AWS 支援 API,在支出超過預算60%時建立提醒閾值通知.
- D. 使用AWS Cost Explorer預測來確定資源所有者. 在 AWS 預算中建立使用預算。 支出超過預算60%時,增加一個警戒門檻,以收到通知。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 AWS 資源上使用成本分配標記給標籤所有者。 在 AWS 預算中建立使用預算。 支出超過預算60%時,增加一個警戒門檻,以收到通知。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS Cost Explorer預測來確定資源所有者. 使用 AWS 成本異常檢測在支出超過預算60%時建立警戒閾值通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 AWS 資源上使用成本分配標記給標籤所有者。 在 AWS 信任的顧問上使用 AWS 支援 API,在支出超過預算60%時建立提醒閾值通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Cost Explorer預測來確定資源所有者. 在 AWS 預算中建立使用預算。 支出超過預算60%時,增加一個警戒門檻,以收到通知。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #782

**題目**
一個連想要在AWS上部署一個內部網路應用程式. 網路應用程式只能從公司的辦公室存取. 公司需要從網際網路下載網路應用程式的安全補丁. 公司建立了VPC,並配置了與公司辦公室的AWS Site-Site VPN連線. 解決方案架構師必須為網路應用程式設計安全架構. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在公共子網應用程式負載平衡器(Application Load Balancer)(ALB)背後的Amazon EC2例項上部署網路應用程式. 將一個網際網路閘道器附在VPC上. 將ALB的安全群組(security group)的入境源設定為0.0.0.0/0.
- B. 在內部應用程式負載平衡器(Application Load Balancer)(ALB)背後的私人子網中應用Amazon EC2例項的網路應用程式. 在公共子網中部署NAT閘道器. 將一個網際網路閘道器附在VPC上. 將ALB的安全群組(security group)的入境源設定為公司辦公網路CIDR塊.
- C. 在內部的應用程式負載平衡器(Application Load Balancer)(ALB)後面的公共子網中應用Amazon EC2例項的網路應用程式。 在私人子網中部署NAT閘道器. 將ALB的安全群組(security group)到公司辦公室網路CIDR塊。
- D. 在公共的應用程式負載平衡器(Application Load Balancer)(ALB)背後的私人子網中應用Amazon EC2例項的網路應用程式。 將一個網際網路閘道器附在VPC上. 將ALB的安全群組(security group)的出境目的地設定為0.0.0.0/0.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在內部應用程式負載平衡器(Application Load Balancer)(ALB)背後的私人子網中應用Amazon EC2例項的網路應用程式. 在公共子網中部署NAT閘道器. 將一個網際網路閘道器附在VPC上. 將ALB的安全群組(security group)的入境源設定為公司辦公網路CIDR塊。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在公共子網應用程式負載平衡器(Application Load Balancer)(ALB)背後的Amazon EC2例項上部署網路應用程式. 將一個網際網路閘道器附在VPC上. 將ALB的安全群組(security group)的入境源設定為0.0.0.0/0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在內部的應用程式負載平衡器(Application Load Balancer)(ALB)後面的公共子網中應用Amazon EC2例項的網路應用程式。 在私人子網中部署NAT閘道器. 將ALB的安全群組(security group)到公司辦公室網路CIDR塊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在公共的應用程式負載平衡器(Application Load Balancer)(ALB)背後的私人子網中應用Amazon EC2例項的網路應用程式。 將一個網際網路閘道器附在VPC上. 將ALB的安全群組(security group)的出境目的地設定為0.0.0.0/0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #783

**題目**
一家公司在Amazon EC2 執行個體中執行的定製應用程式中儲存會計記錄。 公司需要將資料遷移到一個AWS管理的服務,以開發和維護應用資料. 解決方案必須要求最低限度的業務支援,並提供不可改變的、可加密核實的資料變化日誌。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 將應用程式的記錄複製到 Amazon Redshift 叢集。
- B. 將應用中的記錄複製到亞馬遜海王星叢集中.
- C. 將應用中的記錄複製到亞馬遜時間流資料庫(database).
- D. 將應用程式的記錄複製到一個亞馬遜量子Ledger 資料庫(Database)(Amazon QLDB)分類賬中.

**答案**
D


**詳解**
正確答案是 **D**。
- D：將應用程式的記錄複製到一個亞馬遜量子Ledger 資料庫(Database)(Amazon QLDB)分類賬中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將應用程式的記錄複製到 Amazon Redshift 叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將應用中的記錄複製到亞馬遜海王星叢集中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將應用中的記錄複製到亞馬遜時間流資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #784

**題目**
一家公司的營銷資料從多個來源上傳到Amazon S3桶. 一系列資料編制工作將資料彙總成報告。 資料編制工作需要定期平行進行。 少數工作需要以後按具體順序進行。 公司希望刪除營運開銷(operational overhead)的工作錯誤處理,重試邏輯,以及狀態管理. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用一個 AWS Lambda 函式,在資料上傳到S3 儲存桶(S3 bucket)後立即處理資料. 按照定期的間隔啟動其他Lambda功能。
- B. 使用Amazon Athena處理資料. 使用 Amazon EventBridge 排程器在普通內部上引用雅典娜.
- C. 使用AWS Glue DataBrew處理資料. 使用 AWS Step 函式狀態機來執行 DataBrew 資料準備任務.
- D. 使用AWS資料管道處理資料. 安排資料管道在午夜處理資料一次.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用AWS Glue DataBrew處理資料. 使用 AWS Step 函式狀態機來執行 DataBrew 資料準備任務。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用一個 AWS Lambda 函式,在資料上傳到S3 儲存桶(S3 bucket)後立即處理資料. 按照定期的間隔啟動其他Lambda功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon Athena處理資料. 使用 Amazon EventBridge 排程器在普通內部上引用雅典娜。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS資料管道處理資料. 安排資料管道在午夜處理資料一次。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #785

**題目**
一個解決方案架構師正在設計一個付款處理應用程式,該應用程式透過多個可用區(Availability Zones)的私人子網執行在AWS Lambda上. 該應用程式使用多個Lambda功能,每天處理數百萬的交易. 該架構必須確保應用程式不會處理重複付款。 哪種解決辦法能滿足這些要求?

**選項**
- A. 用Lambda來收回所有應得的付款. 公佈應付給Amazon S3桶的款項。 配置 S3 儲存桶(S3 bucket) 並附帶事件通知以引用另一個 Lambda 函式處理到期付款。
- B. 用Lambda來收回所有應得的付款. 釋出應向 Amazon 簡單佇列服務( Amazon SQS) 佇列支付的款項。 配置另一個 Lambda 函式以檢視 SQS 佇列並處理到期付款。
- C. 用Lambda來收回所有應得的付款. 釋出到期支付給 Amazon 簡單佇列服務( Amazon SQS) FIFO 佇列。 配置另一個 Lambda 函式,以檢視 FIFO 佇列並處理到期支付.
- D. 用Lambda來收回所有應得的付款. 將應付款存入Amazon DynamoDB表。 配置 DynamoDB 表格上的流以引用另一個 Lambda 函式來處理到期支付。

**答案**
C


**詳解**
正確答案是 **C**。
- C：用Lambda來收回所有應得的付款. 釋出到期支付給 Amazon 簡單佇列服務( Amazon SQS) FIFO 佇列。 配置另一個 Lambda 函式,以檢視 FIFO 佇列並處理到期支付。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：用Lambda來收回所有應得的付款. 公佈應付給Amazon S3桶的款項。 配置 S3 儲存桶(S3 bucket) 並附帶事件通知以引用另一個 Lambda 函式處理到期付款 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：用Lambda來收回所有應得的付款. 釋出應向 Amazon 簡單佇列服務( Amazon SQS) 佇列支付的款項。 配置另一個 Lambda 函式以檢視 SQS 佇列並處理到期付款 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：用Lambda來收回所有應得的付款. 將應付款存入Amazon DynamoDB表。 配置 DynamoDB 表格上的流以引用另一個 Lambda 函式來處理到期支付 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #786

**題目**
一家公司在現場資料中心承擔多重工作量。 公司資料中心的規模不能迅速滿足公司不斷擴大的業務需求. 公司希望收集使用量和配置資料,以規劃向AWS的遷移. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在 AWS 遷移樞紐中設定家 AWS 區域(Region)。 使用AWS Systems Manager來收集關於presimes伺服器的資料.
- B. 在 AWS 遷移樞紐中設定家 AWS 區域(Region)。 使用 AWS 應用程式發現服務來收集關於premess伺服器的資料.
- C. 使用 AWS Schema 轉換工具(AWS SCT)來建立相關的模板. 使用AWS Trusted Advisor 來蒐集關於預設伺服器的資料.
- D. 使用 AWS Schema 轉換工具(AWS SCT)來建立相關的模板. 使用AWS 資料庫(Database) 遷移服務(AWS DS)來收集有關promes伺服器的資料.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在 AWS 遷移樞紐中設定家 AWS 區域(Region)。 使用 AWS 應用程式發現服務來收集關於premess伺服器的資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 AWS 遷移樞紐中設定家 AWS 區域(Region)。 使用AWS Systems Manager來收集關於presimes伺服器的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Schema 轉換工具(AWS SCT)來建立相關的模板. 使用AWS Trusted Advisor 來蒐集關於預設伺服器的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Schema 轉換工具(AWS SCT)來建立相關的模板. 使用AWS 資料庫(Database) 遷移服務(AWS DS)來收集有關promes伺服器的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #787

**題目**
一家公司在AWS Organizations有一個組織,它具有所有功能。 公司要求任何現有或新的AWS帳戶中的所有API呼叫和登入必須接受審計. 公司需要一種有管理的解決方案,以防止額外工作並儘量減少成本. 公司還需要知道任何AWS帳戶何時不符合AWS基礎安全最佳做法標準. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在組織管理帳戶中部署AWS控制塔環境. 在環境中啟用AWS安全樞紐和AWS控制塔帳戶工廠.
- B. 在專門的組織成員帳戶中部署一個AWS控制塔環境。 在環境中啟用AWS安全樞紐和AWS控制塔帳戶工廠.
- C. 使用AWS管理服務(AMS)加速建設多帳戶登陸區(MALZ). 向MALZ的Amazon GuardDuty提供自助服務。
- D. 使用AWS管理服務(AMS)加速建設多帳戶登陸區(MALZ). 將 RFC 提交到 MALZ 的 AWS 安全樞紐的自助服務中。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在組織管理帳戶中部署AWS控制塔環境. 在環境中啟用AWS安全樞紐和AWS控制塔帳戶工廠。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在專門的組織成員帳戶中部署一個AWS控制塔環境。 在環境中啟用AWS安全樞紐和AWS控制塔帳戶工廠。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS管理服務(AMS)加速建設多帳戶登陸區(MALZ). 向MALZ的Amazon GuardDuty提供自助服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS管理服務(AMS)加速建設多帳戶登陸區(MALZ). 將 RFC 提交到 MALZ 的 AWS 安全樞紐的自助服務中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #788

**題目**
一家公司以Apache Parquet格式用Amazon S3桶儲存了10個TB日誌檔案. 公司偶爾需要使用SQL來分析日誌檔案. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立 Amazon Aurora MySQL 資料庫(database). 透過使用AWS 資料庫(Database)遷移服務(AWS DS)將S3 儲存桶(S3 bucket)的資料遷移到Aurora. 向Aurora 資料庫(database)釋出SQL宣告.
- B. 建立 Amazon Redshift 叢集。 使用Redshift Spectrum直接執行S3 儲存桶(S3 bucket)中的資料上的SQL語句.
- C. 建立 AWS Glue 爬蟲,以儲存和檢索 S3 儲存桶(S3 bucket) 的表後設資料。 使用Amazon Athena直接在S3 儲存桶(S3 bucket)中的資料上執行SQL語句.
- D. 建立 Amazon EMR 叢集。 使用Apache Spark SQL直接執行S3 儲存桶(S3 bucket)中的資料上的SQL語句.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 AWS Glue 爬蟲,以儲存和檢索 S3 儲存桶(S3 bucket) 的表後設資料。 使用Amazon Athena直接在S3 儲存桶(S3 bucket)中的資料上執行SQL語句。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon Aurora MySQL 資料庫(database). 透過使用AWS 資料庫(Database)遷移服務(AWS DS)將S3 儲存桶(S3 bucket)的資料遷移到Aurora. 向Aurora 資料庫(database)釋出SQL宣告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon Redshift 叢集。 使用Redshift Spectrum直接執行S3 儲存桶(S3 bucket)中的資料上的SQL語句。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon EMR 叢集。 使用Apache Spark SQL直接執行S3 儲存桶(S3 bucket)中的資料上的SQL語句。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #789

**題目**
公司需要一個解決方案,防止AWS CloudFormation堆疊部署AWS身份和存取管理(IAM)資源,在語句中包含內建政策或"*". 解決方案還必須禁止部署帶有公共IP地址的Amazon EC2例項. 該公司在其AWS Organizations的組織中啟用了AWS控制塔. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用AWS控制塔的主動控制來阻止使用帶有公共IP地址的EC2例項,以及使用高接入或"*"的內建政策。
- B. 使用 AWS 控制塔檢測控制遮蔽部署 EC2 例項,其公共IP地址和內建政策具有更高的存取許可權或"*"。
- C. 使用AWS Config為EC2和IAM 合規(compliance)建立規則. 配置執行 AWS Systems Manager 會話管理器自動化的規則,以便在一個資源不符合時刪除.
- D. 使用服務控制政策(SCP)來阻止EC2例項和IAM資源的行動,如果這些行動導致不合規.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用服務控制政策(SCP)來阻止EC2例項和IAM資源的行動,如果這些行動導致不合規。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS控制塔的主動控制來阻止使用帶有公共IP地址的EC2例項,以及使用高接入或"*"的內建政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS 控制塔檢測控制遮蔽部署 EC2 例項,其公共IP地址和內建政策具有更高的存取許可權或"*" 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Config為EC2和IAM 合規(compliance)建立規則. 配置執行 AWS Systems Manager 會話管理器自動化的規則,以便在一個資源不符合時刪除。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #790

**題目**
一家公司在AWS雲中的網路應用最近越來越受歡迎。 網路應用程式目前存在於單一公共子網的Amazon EC2例項上. 網路應用無法滿足網路流量增加的需求. 該公司需要一個解決方案,提供高可用性(high availability)和可擴展性(scalability),以滿足使用者增加的需求,而無需重寫網路應用程式. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 用更大的計算最佳化例項取代EC2例項。
- B. 在私人子網中配置帶有多個可用區(Availability Zones)的Amazon EC2自動縮放.
- C. 在公共子網中配置一個NAT閘道器來處理網路請求.
- D. 用更大的記憶體最佳化例項取代EC2例項.
- E. 在公共子網中配置一個應用程式負載平衡器(Application Load Balancer),以分配網路流量.

**答案**
B,E



**詳解**
正確答案是 **B, E**。
- B：在私人子網中配置帶有多個可用區(Availability Zones)的Amazon EC2自動縮放。此選項符合題目條件，能有效滿足核心需求。
- E：在公共子網中配置一個應用程式負載平衡器(Application Load Balancer),以分配網路流量。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：用更大的計算最佳化例項取代EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在公共子網中配置一個NAT閘道器來處理網路請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：用更大的記憶體最佳化例項取代EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #791

**題目**
一家公司擁有使用環境變數的AWS Lambda功能. 公司不希望其開發者看到環境變數在平文字中. 哪種解決辦法能滿足這些要求?

**選項**
- A. 向 Amazon EC2 例部署程式碼, 而不是使用 Lambda 函式。
- B. 在Lambda函式上配置SSL 加密(encryption),以使用AWS CloudHSM儲存和加密環境變數.
- C. 在 AWS Certificate Manager(ACM) 中建立憑證. 配置 Lambda 函式以使用憑證加密環境變數。
- D. 建立 AWS Key Management Service(AWS KMS) 金鑰。 啟用 Lambda 函式上的 加密(encryption) 助手使用 KMS 金鑰儲存和加密環境變數。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 AWS Key Management Service(AWS KMS) 金鑰。 啟用 Lambda 函式上的 加密(encryption) 助手使用 KMS 金鑰儲存和加密環境變數 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：向 Amazon EC2 例部署程式碼, 而不是使用 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在Lambda函式上配置SSL 加密(encryption),以使用AWS CloudHSM儲存和加密環境變數。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 AWS Certificate Manager(ACM) 中建立憑證. 配置 Lambda 函式以使用憑證加密環境變數 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #792

**題目**
一個分析公司使用Amazon VPC來經營其多層次的服務. 公司希望使用RESTful API為數百萬使用者提供網路分析服務. 使用者必須透過使用認證服務進行驗證才能存取API. 哪種辦法能滿足這些要求?

**選項**
- A. 配置一個 Amazon Cognitto 使用者池用於使用者認證。 實施Amazon API Gateway REST API 並配有認知授權程式.
- B. 配置一個 Amazon Cognitto 身份池用於使用者認證。 實施Amazon API Gateway HTTP API,配有Cognito授權程式.
- C. 配置一個 AWS Lambda 函式來處理使用者認證. 使用Lambda授權程式實施Amazon API Gateway REST API.
- D. 配置一個 IAM 使用者來處理使用者認證。 使用IAM授權程式實施Amazon API Gateway HTTP API.

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置一個 IAM 使用者來處理使用者認證。 使用IAM授權程式實施Amazon API Gateway HTTP API。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置一個 Amazon Cognitto 使用者池用於使用者認證。 實施Amazon API Gateway REST API 並配有認知授權程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置一個 Amazon Cognitto 身份池用於使用者認證。 實施Amazon API Gateway HTTP API,配有Cognito授權程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個 AWS Lambda 函式來處理使用者認證. 使用Lambda授權程式實施Amazon API Gateway REST API。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #793

**題目**
一家公司擁有面向客戶的移動應用程式. 應用軟體的資料很敏感, 必須在休息時加密。 該公司使用AWS Key Management Service(AWS KMS). 公司需要一種防止意外刪除KMS金鑰的解決方案. 解決方案必須使用Amazon簡單通知服務(Amazon SNS)在使用者試圖刪除KMS金鑰時向管理員傳送電子郵件通知. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立一個 Amazon EventBridge 規則,當使用者試圖刪除 KMS 金鑰時該規則會作出反應. 配置 AWS Config 規則,取消 KMS 金鑰的任何刪除。 加入AWS Config規則作為事件布里奇規則的目標. 建立一個通知管理員的 SNS 主題。
- B. 建立一個具有自定義邏輯的 AWS Lambda 函式來防止 KMS 金鑰刪除。 建立一個 Amazon CloudWatch 提醒, 當使用者嘗試刪除 KMS 金鑰時啟用。 建立 Amazon EventBridge 規則,在進行 DedKey 操作時引用 Lambda 函式。 建立 SNS 話題。 配置 EventBridge 規則以釋出通知管理員的 SNS 訊息。
- C. 建立一個 Amazon EventBridge 規則,在 KMS 刪除Key 操作時反應. 配置規則啟動 AWS Systems Manager 自動化執行本。 配置刪除 KMS 金鑰的執行本。 建立 SNS 話題。 配置 EventBridge 規則以釋出通知管理員的 SNS 訊息。
- D. 建立 AWS CloudTrail 線索。 配置線索將日誌傳送給一個新的 Amazon CloudWatch 日誌組。 根據 Cloud Watch 日誌組的度量過濾器建立 Cloud Watch 提醒。 配置提醒以使用 Amazon SNS 在 KMS DeletKey 操作時通知管理員。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 AWS CloudTrail 線索。 配置線索將日誌傳送給一個新的 Amazon CloudWatch 日誌組。 根據 Cloud Watch 日誌組的度量過濾器建立 Cloud Watch 提醒。 配置提醒以使用 Amazon SNS 在 KMS DeletKey 操作時通知管理員 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個 Amazon EventBridge 規則,當使用者試圖刪除 KMS 金鑰時該規則會作出反應. 配置 AWS Config 規則,取消 KMS 金鑰的任何刪除。 加入AWS Config規則作為事件布里奇規則的目標. 建立一個通知管理員的 SNS 主題 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個具有自定義邏輯的 AWS Lambda 函式來防止 KMS 金鑰刪除。 建立一個 Amazon CloudWatch 提醒, 當使用者嘗試刪除 KMS 金鑰時啟用。 建立 Amazon EventBridge 規則,在進行 DedKey 操作時引用 Lambda 函式。 建立 SNS 話題。 配置 EventBridge 規則以釋出通知管理員的 SNS 訊息 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個 Amazon EventBridge 規則,在 KMS 刪除Key 操作時反應. 配置規則啟動 AWS Systems Manager 自動化執行本。 配置刪除 KMS 金鑰的執行本。 建立 SNS 話題。 配置 EventBridge 規則以釋出通知管理員的 SNS 訊息 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #794

**題目**
一家公司希望分析並生成報告,以跟蹤其移動應用程式的使用情況. 該應用程式很受歡迎,擁有全球使用者基礎. 公司使用自定義報告構建程式來分析應用使用情況. 該方案在每月的最後一週產生多份報告。 節目製作每份報告需要不到10分鐘. 公司很少在每月最後一週外使用程式生成報告 公司希望在收到報告要求時,在最少的時間內生成報告. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 透過使用Amazon EC2 On-Demand Incents執行程式. 建立 Amazon EventBridge 規則,以便在要求報告時啟動 EC2 例項。 每月最後一週連續執行EC2例項.
- B. 在AWS Lambda中執行程式. 建立 Amazon EventBridge 規則, 當需要報告時執行 Lambda 函式。
- C. 在亞馬遜彈性容器服務(Amazon ECS)中執行程式. 將 Amazon ECS 設定為在需要報告時執行程式。
- D. 透過使用Amazon EC2 Spot 執行個體執行程式. 建立一條 Amazon EventBndge 規則,以便在要求報告時啟動 EC2 例項。 每月最後一週連續執行EC2例項.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在AWS Lambda中執行程式. 建立 Amazon EventBridge 規則, 當需要報告時執行 Lambda 函式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過使用Amazon EC2 On-Demand Incents執行程式. 建立 Amazon EventBridge 規則,以便在要求報告時啟動 EC2 例項。 每月最後一週連續執行EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在亞馬遜彈性容器服務(Amazon ECS)中執行程式. 將 Amazon ECS 設定為在需要報告時執行程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過使用Amazon EC2 Spot 執行個體執行程式. 建立一條 Amazon EventBndge 規則,以便在要求報告時啟動 EC2 例項。 每月最後一週連續執行EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #795

**題目**
一家公司正在AWS雲設計一個緊密結合的高效能運算環境。 公司需要包含將最佳化HPC環境用於聯網和儲存的功能. 哪些解決方案組合將滿足這些要求?(選二.

**選項**
- A. 在 AWS 全球加速器中建立加速器。 為加速器配置自定義路由。
- B. 為 Lustre 檔案系統建立 Amazon FSx。 配置帶有抓取儲存的檔案系統。
- C. 建立 Amazon CloudFront 分佈。 配置檢視器協議策略為HTTP和HTTPS.
- D. 發射Amazon EC2 執行個體. 在例項中附加一個彈性適應器(EFA)。
- E. 建立 AWS 彈性 Beanstalk 部署來管理環境。

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：為 Lustre 檔案系統建立 Amazon FSx。 配置帶有抓取儲存的檔案系統 。此選項符合題目條件，能有效滿足核心需求。
- D：發射Amazon EC2 執行個體. 在例項中附加一個彈性適應器(EFA)。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在 AWS 全球加速器中建立加速器。 為加速器配置自定義路由 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon CloudFront 分佈。 配置檢視器協議策略為HTTP和HTTPS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立 AWS 彈性 Beanstalk 部署來管理環境 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #796

**題目**
公司需要一個解決方案,防止含有不想要內容的照片上傳到公司的網路應用程式. 解決辦法不得涉及培訓機器學習模式。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Amazon SageMaker 自動駕駛程式建立和部署一個模型。 建立網路應用程式在新照片上傳時引用的實時端點。
- B. 建立一個AWS Lambda功能,使用亞馬遜識別來檢測不想要的內容. 建立 Lambda 函式 URL,網路應用程式在上傳新照片時引用該函式。
- C. 建立一個Amazon CloudFront功能,使用Amazon Comprehend來檢測不想要的內容. 將該功能與網路應用程式關聯.
- D. 建立一個AWS Lambda功能,使用亞馬遜識別影片來檢測不想要的內容. 建立 Lambda 函式 URL,網路應用程式在上傳新照片時引用該函式。

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個AWS Lambda功能,使用亞馬遜識別來檢測不想要的內容. 建立 Lambda 函式 URL,網路應用程式在上傳新照片時引用該函式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon SageMaker 自動駕駛程式建立和部署一個模型。 建立網路應用程式在新照片上傳時引用的實時端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個Amazon CloudFront功能,使用Amazon Comprehend來檢測不想要的內容. 將該功能與網路應用程式關聯。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個AWS Lambda功能,使用亞馬遜識別影片來檢測不想要的內容. 建立 Lambda 函式 URL,網路應用程式在上傳新照片時引用該函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #797

**題目**
一家公司使用AWS執行其電子商務平臺. 該平臺對公司運營至關重要,擁有大量的流量和交易量. 公司配置一個多要素認證(MFA)裝置,以獲取其AWS帳戶根使用者憑證. 公司希望確保如果MFA裝置丟失不會失去對根使用者帳戶的存取. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個備份(backup)管理員帳戶,如果公司失去MFA裝置,公司可以使用該帳戶登入.
- B. 為根使用者帳戶新增多個 MFA 裝置來處理災情.
- C. 當公司無法存取根帳戶時建立一個新的管理員帳戶。
- D. 當公司無法存取根帳戶時,將管理員策略附加到另一個 IAM 使用者.

**答案**
B


**詳解**
正確答案是 **B**。
- B：為根使用者帳戶新增多個 MFA 裝置來處理災情。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個備份(backup)管理員帳戶,如果公司失去MFA裝置,公司可以使用該帳戶登入。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：當公司無法存取根帳戶時建立一個新的管理員帳戶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：當公司無法存取根帳戶時,將管理員策略附加到另一個 IAM 使用者。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #798

**題目**
一家社交媒體公司正在為使用者建立獎勵程式網站. 公司在使用者建立影片並將其上傳到網站時給使用者點. 使用者從公司的親信夥伴處贖回其分數,以換取禮物或折扣. 一個獨特的ID識別使用者. 合夥人使用此ID來驗證使用者獲得獎勵的資格. 當公司給使用者點時,合作伙伴希望透過HTTP端點收到使用者ID通知. 每天有數百個供應商有興趣成為親善夥伴。 公司希望設計一個架構,讓網站能夠快速以可擴充套件的方式新增合作伙伴. 哪些解決辦法將滿足這些要求?

**選項**
- A. 建立一個亞馬遜時間流資料庫(database),以保留一個親子夥伴列表. 執行 AWS Lambda 函式讀取列表。 配置 Lambda 函式,在公司給使用者點數時向每個合夥人傳送使用者ID.
- B. 建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 選擇一個端點協議。 訂閱該議題的夥伴。 當公司給使用者點數時,將使用者ID釋出到話題中.
- C. 建立 AWS 步驟函式狀態機器。 為每個親生伴侶建立任務. 當公司給使用者點數時,將使用使用者ID作為輸入的狀態機器注入.
- D. 在 Amazon Kinesis 資料流中建立資料流. 實施生產者和消費者應用。 在資料流中儲存親子夥伴列表. 當公司給予使用者點數時傳送使用者ID.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個亞馬遜時間流資料庫(database),以保留一個親子夥伴列表. 執行 AWS Lambda 函式讀取列表。 配置 Lambda 函式,在公司給使用者點數時向每個合夥人傳送使用者ID。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 選擇一個端點協議。 訂閱該議題的夥伴。 當公司給使用者點數時,將使用者ID釋出到話題中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS 步驟函式狀態機器。 為每個親生伴侶建立任務. 當公司給使用者點數時,將使用使用者ID作為輸入的狀態機器注入。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Amazon Kinesis 資料流中建立資料流. 實施生產者和消費者應用。 在資料流中儲存親子夥伴列表. 當公司給予使用者點數時傳送使用者ID。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #799

**題目**
一個公司需要從作為文字檔案儲存在Amazon S3桶中的食譜記錄中提取原料名稱. 一個網路應用程式將使用成分名稱查詢一個Amazon DynamoDB表,並確定營養分數. 該應用程式可以處理非食物記錄和錯誤. 公司沒有任何員工擁有機器學習知識來開發這種解決方案. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 當 Put Object 請求發生時, 使用 S3 事件通知來引用 AWS Lambda 函式。 程式設計 Lambda 函式透過使用 Amazon Comprehend 來分析物件並提取成分名稱. 將 Amazon Comprehend 輸出儲存在 DynamoDB 表格中.
- B. 在 PutObject 請求發生時,使用 Amazon EventBridge 規則來引用 AWS Lambda 函式。 程式設計Lambda函式,透過使用亞馬遜預測來提取成分名稱來分析物件. 將預測輸出儲存在 DynamoDB 表中。
- C. 當 Put Object 請求發生時, 使用 S3 事件通知來引用 AWS Lambda 函式。 使用Amazon Polly來建立食譜唱片的錄音. 儲存 S3 儲存桶(S3 bucket) 中的音訊檔案。 使用Amazon簡單通知服務(Amazon SNS)向員工傳送URL作為訊息. 指示員工聆聽音訊檔案,計算營養分數. 將成分名稱儲存在 DynamoDB 表格中.
- D. 當 Put Object 請求發生時,使用 Amazon EventBridge 規則引用 AWS Lambda 函式。 程式設計Lambda函式,透過使用Amazon SageMaker來分析物件並提取成分名稱. 將來自 SageMaker 端點的推論輸出儲存在 DynamoDB 表格中。

**答案**
D


**詳解**
正確答案是 **D**。
- D：當 Put Object 請求發生時,使用 Amazon EventBridge 規則引用 AWS Lambda 函式。 程式設計Lambda函式,透過使用Amazon SageMaker來分析物件並提取成分名稱. 將來自 SageMaker 端點的推論輸出儲存在 DynamoDB 表格中 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：當 Put Object 請求發生時, 使用 S3 事件通知來引用 AWS Lambda 函式。 程式設計 Lambda 函式透過使用 Amazon Comprehend 來分析物件並提取成分名稱. 將 Amazon Comprehend 輸出儲存在 DynamoDB 表格中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 PutObject 請求發生時,使用 Amazon EventBridge 規則來引用 AWS Lambda 函式。 程式設計Lambda函式,透過使用亞馬遜預測來提取成分名稱來分析物件. 將預測輸出儲存在 DynamoDB 表中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：當 Put Object 請求發生時, 使用 S3 事件通知來引用 AWS Lambda 函式。 使用Amazon Polly來建立食譜唱片的錄音. 儲存 S3 儲存桶(S3 bucket) 中的音訊檔案。 使用Amazon簡單通知服務(Amazon SNS)向員工傳送URL作為訊息. 指示員工聆聽音訊檔案,計算營養分數. 將成分名稱儲存在 DynamoDB 表格中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #800

**題目**
一個公司需要建立一個AWS Lambda功能,該功能將在公司初級AWS帳戶中的VPC中執行. Lambda功能需要存取公司在一個亞馬遜彈性檔案系統(Amazon EFS)中儲存的檔案. EFS檔案系統位於一個二級AWS帳戶. 由於公司向檔案系統新增檔案,解決方案必須縮放以滿足需求. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在主帳戶中建立一個新的 EFS 檔案系統。 使用AWS DataSync將原始EFS檔案系統的內容複製到新的EFS檔案系統.
- B. 在主帳戶和第二帳戶中建立 VPC 對等連線。
- C. 在二級帳戶中建立第二個 Lambda 函式, 該函式有一個為檔案系統配置的掛載。 使用主帳戶的Lambda函式來引用副帳戶的Lambda函式.
- D. 將檔案系統的內容移動到 Lambda 層。 配置Lambda層的許可權,允許公司的二級帳戶使用Lambda層.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在主帳戶中建立一個新的 EFS 檔案系統。 使用AWS DataSync將原始EFS檔案系統的內容複製到新的EFS檔案系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在主帳戶和第二帳戶中建立 VPC 對等連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在二級帳戶中建立第二個 Lambda 函式, 該函式有一個為檔案系統配置的掛載。 使用主帳戶的Lambda函式來引用副帳戶的Lambda函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將檔案系統的內容移動到 Lambda 層。 配置Lambda層的許可權,允許公司的二級帳戶使用Lambda層。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #801

**題目**
一個金融公司需要處理高度敏感的資料. 公司將把資料儲存在Amazon S3桶中. 公司需要確保資料在中轉和休息時加密. 公司必須管理AWS雲外的加密(encryption)鍵. 哪種解決辦法能滿足這些要求?

**選項**
- A. 用伺服器側式的加密(encryption)(SSE)加密S3 儲存桶(S3 bucket)中使用AWS Key Management Service(AWS KMS)客戶端管理的金鑰的資料.
- B. 用伺服器側的加密(encryption)(SSE)加密S3 儲存桶(S3 bucket)中使用AWS Key Management Service(AWS KMS)AWS管理的金鑰的資料.
- C. 用預設伺服器側加密(encryption)(SSE)加密S3 儲存桶(S3 bucket)中的資料.
- D. 在S3 儲存桶(S3 bucket)中儲存資料之前先加密公司資料中心的資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：用伺服器側式的加密(encryption)(SSE)加密S3 儲存桶(S3 bucket)中使用AWS Key Management Service(AWS KMS)客戶端管理的金鑰的資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：用伺服器側的加密(encryption)(SSE)加密S3 儲存桶(S3 bucket)中使用AWS Key Management Service(AWS KMS)AWS管理的金鑰的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：用預設伺服器側加密(encryption)(SSE)加密S3 儲存桶(S3 bucket)中的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在S3 儲存桶(S3 bucket)中儲存資料之前先加密公司資料中心的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #802

**題目**
一個公司想在AWS上執行它的支付應用程式. 該申請從移動裝置收到付款通知。 付款通知在送交進一步處理之前,需要經過基本驗證。 後端處理應用程式執行很長,需要計算和記憶體調整. 公司不想管理基礎設施。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將佇列與 Amazon EventBridge 規則整合,以接收移動裝置的付款通知。 配置規則以驗證付款通知,並將通知傳送給後端應用程式。 在Amazon Elastic Kubernetes Service(Amazon EKS)任何地方部署後端應用程式. 建立獨立的叢集。
- B. 建立 Amazon API Gateway API. 將 API 與 AWS Step 函式狀態機整合,以接收移動裝置的付款通知。 啟動國家機器驗證支付通知,並將通知傳送給後端應用程式。 在Amazon Elastic Kubernetes Service(Amazon EKS)上部署後端應用程式. 配置帶有自控節點的EKS叢集.
- C. 建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將佇列與 Amazon EventBridge 規則整合,以接收移動裝置的付款通知。 配置規則以驗證付款通知,並將通知傳送給後端應用程式。 在Amazon EC2 Spot 執行個體上部署後端應用程式. 配置帶有預設配置策略的 Spot Fleet。
- D. 建立 Amazon API Gateway API. 將API與AWS Lambda整合,從移動裝置接收付款通知. Invoke a Lambda 函式以驗證付款通知並將通知傳送給後端應用程式. 在亞馬遜彈性容器服務(Amazon ECS)上部署後端應用程式。 配置 Amazon ECS ,具有 AWS Fargate 發射型別.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將佇列與 Amazon EventBridge 規則整合,以接收移動裝置的付款通知。 配置規則以驗證付款通知,並將通知傳送給後端應用程式。 在Amazon EC2 Spot 執行個體上部署後端應用程式. 配置帶有預設配置策略的 Spot Fleet 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將佇列與 Amazon EventBridge 規則整合,以接收移動裝置的付款通知。 配置規則以驗證付款通知,並將通知傳送給後端應用程式。 在Amazon Elastic Kubernetes Service(Amazon EKS)任何地方部署後端應用程式. 建立獨立的叢集 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon API Gateway API. 將 API 與 AWS Step 函式狀態機整合,以接收移動裝置的付款通知。 啟動國家機器驗證支付通知,並將通知傳送給後端應用程式。 在Amazon Elastic Kubernetes Service(Amazon EKS)上部署後端應用程式. 配置帶有自控節點的EKS叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon API Gateway API. 將API與AWS Lambda整合,從移動裝置接收付款通知. Invoke a Lambda 函式以驗證付款通知並將通知傳送給後端應用程式. 在亞馬遜彈性容器服務(Amazon ECS)上部署後端應用程式。 配置 Amazon ECS ,具有 AWS Fargate 發射型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #803

**題目**
一個解決方案架構師正在為公司設計一個使用者認證解決方案. 解決方案必須針對從不一致的地理位置、IP地址或裝置登入的使用者援引兩個要素認證。 解決方案還必須能夠擴大,以容納數百萬使用者。 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 Amazon Cognitto 使用者池進行使用者認證. 啟用基於風險的具有多要素認證(MFA)的適應認證功能.
- B. 配置 Amazon Cognitto 身份池用於使用者認證. 啟用多要素認證( MFA)。
- C. 配置 AWS 身份和存取管理(IAM)使用者進行使用者認證. 附加一個允許允許管理OwnUserMFA動作的 IAM 政策(IAM policy)。
- D. 為使用者認證配置 AWS IAM 身份認證中心(AWS Single Sign-On)認證. 配置許可權集以要求多要素認證(MFA).

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 AWS 身份和存取管理(IAM)使用者進行使用者認證. 附加一個允許允許管理OwnUserMFA動作的 IAM 政策(IAM policy) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Amazon Cognitto 使用者池進行使用者認證. 啟用基於風險的具有多要素認證(MFA)的適應認證功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 Amazon Cognitto 身份池用於使用者認證. 啟用多要素認證( MFA) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為使用者認證配置 AWS IAM 身份認證中心(AWS Single Sign-On)認證. 配置許可權集以要求多要素認證(MFA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #804

**題目**
一家公司有一個Amazon S3 資料湖(data lake). 公司需要一個解決方案,將資料湖(data lake)的資料轉換,每天將資料裝入資料倉儲. 資料倉必須具有巨大的平行處理能力。 然後資料分析員需要透過在資料上使用SQL命令來建立和訓練機器學習(ML)模型. 解決方案必須儘可能使用無伺服器的AWS服務. 哪種解決辦法能滿足這些要求?

**選項**
- A. 執行每日Amazon EMR任務,將資料轉換並載入到Amazon Redshift. 使用Amazon Redshift ML來建立和訓練ML模型.
- B. 執行每天的Amazon EMR任務,將資料轉換並載入到Amazon Aurora無伺服器中. 使用Amazon Aurora ML來建立和訓練ML模型.
- C. 執行每天的AWS Glue任務,將資料轉換並載入到Amazon Redshift無伺服器中. 使用Amazon Redshift ML來建立和訓練ML模型.
- D. 執行每天的AWS Glue任務,將資料轉換並載入到Amazon Athena表格中. 使用Amazon Athena ML來建立和訓練ML模型.

**答案**
B


**詳解**
正確答案是 **B**。
- B：執行每天的Amazon EMR任務,將資料轉換並載入到Amazon Aurora無伺服器中. 使用Amazon Aurora ML來建立和訓練ML模型。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：執行每日Amazon EMR任務,將資料轉換並載入到Amazon Redshift. 使用Amazon Redshift ML來建立和訓練ML模型。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：執行每天的AWS Glue任務,將資料轉換並載入到Amazon Redshift無伺服器中. 使用Amazon Redshift ML來建立和訓練ML模型。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：執行每天的AWS Glue任務,將資料轉換並載入到Amazon Athena表格中. 使用Amazon Athena ML來建立和訓練ML模型。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #805

**題目**
一家公司在該公司當地資料中心的Kubernetes環境中經營集裝箱。 公司希望使用Amazon Elastic Kubernetes Service(英語:Amazon EKS)和其他AWS管理的服務. 資料必須留在公司資料中心的區域性,不能儲存在任何遠端站點或雲中以維護合規(compliance). 哪種解決辦法能滿足這些要求?

**選項**
- A. 在公司資料中心部署AWS區域性區域.
- B. 在公司的資料中心使用AWS Snowmobile.
- C. 在公司的資料中心安裝一個AWS出站架.
- D. 在資料中心安裝 AWS Snowball Edge Storage Optimized 節點。

**答案**
B


**詳解**
正確答案是 **B**。
- B：在公司的資料中心使用AWS Snowmobile。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在公司資料中心部署AWS區域性區域。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在公司的資料中心安裝一個AWS出站架。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在資料中心安裝 AWS Snowball Edge Storage Optimized 節點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #806

**題目**
一家社交媒體公司有收集和處理資料的工作量。 工作量將資料儲存在NFS儲存的前提上. 資料儲存的速度無法滿足公司不斷擴大的業務需求。 公司希望將當前資料庫遷移到AWS. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 設立AWS Storage Gateway卷閘道器. 使用Amazon S3 生命週期政策(Lifecycle policy)將資料轉換到適當的儲存類.
- B. 建立AWS Storage Gateway Amazon S3檔案閘道器. 使用Amazon S3 生命週期政策(Lifecycle policy)將資料轉換到適當的儲存類.
- C. 使用亞馬遜彈性檔案系統(Amazon EFS)標準-不經常存取(Standard-IA)儲存級. 啟用不經常存取的生命週期政策(lifecycle policy)。
- D. 使用亞馬遜彈性檔案系統(Amazon EFS) One Zone-不經常存取(One Zone-IA)儲存級. 啟用不經常存取的生命週期政策(lifecycle policy)。

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用亞馬遜彈性檔案系統(Amazon EFS) One Zone-不經常存取(One Zone-IA)儲存級. 啟用不經常存取的生命週期政策(lifecycle policy)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：設立AWS Storage Gateway卷閘道器. 使用Amazon S3 生命週期政策(Lifecycle policy)將資料轉換到適當的儲存類。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立AWS Storage Gateway Amazon S3檔案閘道器. 使用Amazon S3 生命週期政策(Lifecycle policy)將資料轉換到適當的儲存類。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用亞馬遜彈性檔案系統(Amazon EFS)標準-不經常存取(Standard-IA)儲存級. 啟用不經常存取的生命週期政策(lifecycle policy)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #807

**題目**
一個公司使用高通量的AWS Lambda功能,在營銷活動期間處理資訊佇列中數量不斷增加的資訊. Lambda函式使用CPU集約碼處理訊息. 公司希望降低計算成本,為其客戶維持延遲(latency)服務. 哪種解決辦法能滿足這些要求?

**選項**
- A. 為 Lambda 函式配置保留貨幣。 減少分配給 Lambda 函式的記憶體。
- B. 為 Lambda 函式配置保留貨幣。 根據AWS計算最佳化建議增加記憶體.
- C. 配置 Lambda 函式的提供貨幣。 減少分配給 Lambda 函式的記憶體。
- D. 配置 Lambda 函式的提供貨幣。 根據AWS計算最佳化建議增加記憶體.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 Lambda 函式的提供貨幣。 減少分配給 Lambda 函式的記憶體 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 Lambda 函式配置保留貨幣。 減少分配給 Lambda 函式的記憶體 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 Lambda 函式配置保留貨幣。 根據AWS計算最佳化建議增加記憶體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Lambda 函式的提供貨幣。 根據AWS計算最佳化建議增加記憶體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #808

**題目**
一家公司負責亞馬遜彈性容器服務公司的工作量。 ECS任務定義使用的容器影象需要掃描,以瞭解常見脆弱性和接觸。 新的容器影象也需要掃描。 隨著EWEST對工作量的改變,哪一種解決辦法能滿足這些要求?

**選項**
- A. 使用亞馬遜彈性容器註冊(Amazon ECR)作為私人影象儲存庫來儲存容器影象. 為 ECR 基本掃描指定按鍵過濾器的掃描。
- B. 在Amazon S3桶中儲存容器影象. 使用Amazon Macie掃描影象. 使用 S3 事件通知啟動 Macie 掃描, 用於 s3: ObjectCreated 的每次事件 : 設定事件型別。
- C. 向Amazon Elastic Kubernetes Service(Amazon EKS)部署工作量。 使用亞馬遜彈性容器註冊(Amazon ECR)作為私人影象儲存器. 為 ECR 增強的掃描指定按壓過濾器的掃描。
- D. 將容器影象儲存在已啟用版本的 Amazon S3 桶中。 為 s3 配置 S3 事件通知: ObjectCreated: * 事件以引用 AWS Lambda 函式。 配置 Lambda 函式啟動 Amazon 檢查員掃描。

**答案**
C


**詳解**
正確答案是 **C**。
- C：向Amazon Elastic Kubernetes Service(Amazon EKS)部署工作量。 使用亞馬遜彈性容器註冊(Amazon ECR)作為私人影象儲存器. 為 ECR 增強的掃描指定按壓過濾器的掃描。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用亞馬遜彈性容器註冊(Amazon ECR)作為私人影象儲存庫來儲存容器影象. 為 ECR 基本掃描指定按鍵過濾器的掃描。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在Amazon S3桶中儲存容器影象. 使用Amazon Macie掃描影象. 使用 S3 事件通知啟動 Macie 掃描, 用於 s3: ObjectCreated 的每次事件 : 設定事件型別 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將容器影象儲存在已啟用版本的 Amazon S3 桶中。 為 s3 配置 S3 事件通知: ObjectCreated: * 事件以引用 AWS Lambda 函式。 配置 Lambda 函式啟動 Amazon 檢查員掃描 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #809

**題目**
一家公司使用AWS批次工作來執行其末日銷售流程. 公司需要一種無伺服器的解決方案,當AWS批次工作成功時,會引用第三方報告應用程式. 報告應用程式有一個使用使用者名稱和密碼認證的HTTP API介面. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 Amazon EventBridge 規則,以匹配即將到來的 AWS Batch 任務 SUCCEDED 事件。 配置第三方 API 作為 EventBridge API 目的地,並帶有使用者名稱和密碼. 設定 API 目的地為 EventBridge 規則目標。
- B. 配置 Amazon EventBridge 排程器,以匹配即將到來的 AWS 批次任務 SUCCEDED 事件。 配置 AWS Lambda 函式,透過使用使用者名稱和密碼來引用第三方 API. 設定 Lambda 函式為 EventBridge 規則目標。
- C. 配置 AWS 批次工作以釋出任務 SUCCEEDED 事件到 Amazon API Gateway REST API。 在API Gateway REST API上配置 HTTP 代理整合,透過使用使用者名稱和密碼來引用第三方API.
- D. 配置 AWS 批次工作以釋出任務 SUCCEEDED 事件到 Amazon API Gateway REST API。 配置 API Gateway REST API 上的代理整合到 AWS Lambda 函式中. 配置 Lambda 函式以使用使用者名稱和密碼來引用第三方 API。

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置 AWS 批次工作以釋出任務 SUCCEEDED 事件到 Amazon API Gateway REST API。 配置 API Gateway REST API 上的代理整合到 AWS Lambda 函式中. 配置 Lambda 函式以使用使用者名稱和密碼來引用第三方 API 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Amazon EventBridge 規則,以匹配即將到來的 AWS Batch 任務 SUCCEDED 事件。 配置第三方 API 作為 EventBridge API 目的地,並帶有使用者名稱和密碼. 設定 API 目的地為 EventBridge 規則目標 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 Amazon EventBridge 排程器,以匹配即將到來的 AWS 批次任務 SUCCEDED 事件。 配置 AWS Lambda 函式,透過使用使用者名稱和密碼來引用第三方 API. 設定 Lambda 函式為 EventBridge 規則目標 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 AWS 批次工作以釋出任務 SUCCEEDED 事件到 Amazon API Gateway REST API。 在API Gateway REST API上配置 HTTP 代理整合,透過使用使用者名稱和密碼來引用第三方API。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #810

**題目**
公司收集並處理供應商提供的資料。 該供應商將其資料儲存在Amazon RDS中,用於銷售商自己的AWS帳戶中的MySQL 資料庫(database)。 公司VPC沒有網際網路閘道器、AWS Direct Connect連線或AWS站點對站點VPN連線。 公司需要存取銷售商資料庫(database)中的資料. 哪種解決辦法能滿足這一要求?

**選項**
- A. 指示供應商報名AWS託管連線直接連線程式. 使用VPC對等連線公司VPC和供應商VPC.
- B. 配置公司VPC與供應商VPC之間的客戶VPN連線. 使用VPC對等連線公司VPC和供應商VPC.
- C. 指示供應商建立網路負載平衡器(Network Load Balancer)(NLB)。 將NLB置於Amazon RDS前,供MySQL 資料庫(database)使用. 使用AWS PrivateLink整合公司的VPC和供應商的VPC.
- D. 使用AWS Transit Gateway整合公司的VPC和供應商的VPC. 使用VPC對等連線公司的VPC和供應商的VPC.

**答案**
A


**詳解**
正確答案是 **A**。
- A：指示供應商報名AWS託管連線直接連線程式. 使用VPC對等連線公司VPC和供應商VPC。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置公司VPC與供應商VPC之間的客戶VPN連線. 使用VPC對等連線公司VPC和供應商VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：指示供應商建立網路負載平衡器(Network Load Balancer)(NLB)。 將NLB置於Amazon RDS前,供MySQL 資料庫(database)使用. 使用AWS PrivateLink整合公司的VPC和供應商的VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Transit Gateway整合公司的VPC和供應商的VPC. 使用VPC對等連線公司的VPC和供應商的VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #811

**題目**
一家公司希望將亞馬遜管理Grafana作為其視覺化工具. 公司希望將來自其Amazon RDS資料庫(database)的資料視覺化為一個資料來源. 公司需要安全的解決辦法, 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個沒有VPC的亞馬遜管理Grafana工作空間. 為 RDS 資料庫(database) 建立公共終點。 配置公共端點作為亞馬遜管理Grafana的資料來源.
- B. 在VPC中建立亞馬遜管理Grafana工作空間. 為 RDS 資料庫(database) 建立私人端點。 配置私人端點作為亞馬遜管理Grafana的資料來源.
- C. 建立一個沒有VPCreate的亞馬遜管理Grafana工作空間AWS私人Link端點,建立亞馬遜管理Grafana和Amazon RDS之間的連線. 將Amazon RDS設定為亞馬遜管理Grafana的資料來源.
- D. 在VPC中建立亞馬遜管理Grafana工作空間. 為 RDS 資料庫(database) 建立公共終點。 配置公共端點作為亞馬遜管理Grafana的資料來源.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在VPC中建立亞馬遜管理Grafana工作空間. 為 RDS 資料庫(database) 建立私人端點。 配置私人端點作為亞馬遜管理Grafana的資料來源。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個沒有VPC的亞馬遜管理Grafana工作空間. 為 RDS 資料庫(database) 建立公共終點。 配置公共端點作為亞馬遜管理Grafana的資料來源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個沒有VPCreate的亞馬遜管理Grafana工作空間AWS私人Link端點,建立亞馬遜管理Grafana和Amazon RDS之間的連線. 將Amazon RDS設定為亞馬遜管理Grafana的資料來源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在VPC中建立亞馬遜管理Grafana工作空間. 為 RDS 資料庫(database) 建立公共終點。 配置公共端點作為亞馬遜管理Grafana的資料來源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #812

**題目**
一家公司在Amazon S3上擁有一臺資料湖(data lake). 資料湖(data lake)從各種資料來源以Apache Parquet格式吸收資料. 公司使用多個變換步驟來準備攝入的資料. 這些步驟包括過濾異常現象,使資料正常化,使之達到標準日期和時間值,以及產生分析所需的總量。 公司必須將轉換後的資料儲存在資料分析師存取的S3桶中. 公司需要預先構建一個不需要程式碼的資料轉換解決方案. 解決方案必須提供資料序列和資料剖析。 公司需要與全公司員工共享資料轉換步驟. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 AWS Glue Studio 視覺畫布來轉換資料. 透過使用AWS Glue崗位與員工共享轉型步驟.
- B. 配置 Amazon EMR 無伺服器轉換資料. 透過使用EMR無伺服器的工作與員工共享轉換步驟.
- C. 配置 AWS Glue DataBrew 以轉換資料. 透過使用Databrew配方與員工共享轉換步驟.
- D. 為資料建立 Amazon Athena 表格。 寫入雅典娜SQL查詢以轉換資料. 與員工共享雅典娜SQL查詢.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置 Amazon EMR 無伺服器轉換資料. 透過使用EMR無伺服器的工作與員工共享轉換步驟。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 AWS Glue Studio 視覺畫布來轉換資料. 透過使用AWS Glue崗位與員工共享轉型步驟。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 AWS Glue DataBrew 以轉換資料. 透過使用Databrew配方與員工共享轉換步驟。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為資料建立 Amazon Athena 表格。 寫入雅典娜SQL查詢以轉換資料. 與員工共享雅典娜SQL查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #813

**題目**
一個解決方案架構師在多個Amazon EC2例項上執行一個網路應用程式,這些例項位於應用程式負載平衡器(Application Load Balancer)(ALB)背後的單個目標群體中. 使用者可以透過公共網站到達應用程式. 解決方案架構師希望讓工程師使用網站的開發版存取一個特定的開發EC2例項來測試應用程式的新功能. 解決方案架構師希望使用一個Amazon Route 53主機區,讓工程師可以存取開發例項. 即使發展例項被取代,解決方案也必須自動通往發展例項。 哪種解決辦法能滿足這些要求?

**選項**
- A. 為開發網站建立一個具有 ALB 設定值的記錄。 在 ALB 上建立一個聽眾規則,將開發網站的請求轉發給包含開發例項的目標群體.
- B. 用公開的IP地址重新建立開發例項. 為開發網站建立一個記錄,該記錄對開發例項的公開IP地址具有設定的價值.
- C. 為開發網站建立一個具有 ALB 設定值的記錄。 在 ALB 上建立一個聽眾規則,將開發網站的請求重定向到開發例項的公共IP地址.
- D. 將所有例項放在同一個目標群體中。 為開發網站建立記錄。 設定值為 ALB。 在 ALB 上建立一個聽眾規則,將開發網站的請求轉發給目標群體.

**答案**
C


**詳解**
正確答案是 **C**。
- C：為開發網站建立一個具有 ALB 設定值的記錄。 在 ALB 上建立一個聽眾規則,將開發網站的請求重定向到開發例項的公共IP地址。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為開發網站建立一個具有 ALB 設定值的記錄。 在 ALB 上建立一個聽眾規則,將開發網站的請求轉發給包含開發例項的目標群體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：用公開的IP地址重新建立開發例項. 為開發網站建立一個記錄,該記錄對開發例項的公開IP地址具有設定的價值。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將所有例項放在同一個目標群體中。 為開發網站建立記錄。 設定值為 ALB。 在 ALB 上建立一個聽眾規則,將開發網站的請求轉發給目標群體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #814

**題目**
一家公司在該公司資料中心的Kubernetes叢集上執行一個集裝箱應用程式. 應用程式使用高階訊息排隊協議(AMQP)與訊息佇列進行通訊. 資料中心的規模無法迅速滿足公司不斷擴大的業務需求. 公司希望將工作量轉移到AWS. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將集裝箱應用轉移到亞馬遜彈性容器服務公司(Amazon ECS)。 使用 Amazon 簡單佇列服務(Amazon SQS)來檢索訊息.
- B. 將容器應用遷移到Amazon Elastic Kubernetes Service(Amazon EKS). 使用 Amazon MQ 檢索訊息。
- C. 使用大量可用的 Amazon EC2 例項來執行應用程式。 使用 Amazon MQ 檢索訊息。
- D. 使用 AWS Lambda 函式執行應用程式. 使用 Amazon 簡單佇列服務(Amazon SQS)來檢索訊息.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將集裝箱應用轉移到亞馬遜彈性容器服務公司(Amazon ECS)。 使用 Amazon 簡單佇列服務(Amazon SQS)來檢索訊息。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將容器應用遷移到Amazon Elastic Kubernetes Service(Amazon EKS). 使用 Amazon MQ 檢索訊息 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用大量可用的 Amazon EC2 例項來執行應用程式。 使用 Amazon MQ 檢索訊息 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Lambda 函式執行應用程式. 使用 Amazon 簡單佇列服務(Amazon SQS)來檢索訊息。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #815

**題目**
一家線上遊戲公司在Amazon EC2公司網路負載平衡器(NLB)背後的多個AWS區域設有其平臺。 NLB可透過網際網路向目標傳送請求。 公司希望透過減少其全球客戶基礎的端到端負載時間來改進客戶的遊戲體驗. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在每個區域(Region)中建立應用程式負載平衡器(ALB),以取代現有的NLB. 將現有的EC2例項登記為每個區域(Region)中ALB的目標。
- B. 配置 Amazon Route 53,在每個區域(Region)中將同樣加權的交通線路通往NLB.
- C. 在公司擁有大型客戶基地的其他區域建立更多的NLB和EC2例項。
- D. 在 AWS 全球加速器中建立標準加速器。 將現有的NLB配置為目標終點。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在每個區域(Region)中建立應用程式負載平衡器(ALB),以取代現有的NLB. 將現有的EC2例項登記為每個區域(Region)中ALB的目標。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置 Amazon Route 53,在每個區域(Region)中將同樣加權的交通線路通往NLB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在公司擁有大型客戶基地的其他區域建立更多的NLB和EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 AWS 全球加速器中建立標準加速器。 將現有的NLB配置為目標終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #816

**題目**
一家公司擁有一個使用SFTP從多個供應商收集財務資料的professions應用程式. 公司遷移到AWS雲. 公司建立了一個應用程式,使用Amazon S3 API上傳供應商的檔案. 一些供應商使用不支援S3 API的遺留應用程式執行自己的系統。 供應商希望繼續使用基於SFTP的應用程式上傳資料. 公司希望利用管理服務滿足使用遺留應用程式的供應商的需要。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立AWS 資料庫(Database)移民服務(AWS DMS)例項,將使用遺留應用程式的供應商儲存的資料複製到Amazon S3。 向供應商提供進入AWS DMS例項的憑證。
- B. 為使用遺留應用程式的供應商建立 AWS 傳輸家庭端點。
- C. 配置 Amazon EC2 例項來執行 SFTP 伺服器。 指示使用遺留應用程式的供應商使用SFTP伺服器上傳資料.
- D. 配置一個 Amazon S3 檔案閘道器,供使用遺留應用程式上傳檔案到 SMB 檔案共享的供應商使用.

**答案**
B


**詳解**
正確答案是 **B**。
- B：為使用遺留應用程式的供應商建立 AWS 傳輸家庭端點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立AWS 資料庫(Database)移民服務(AWS DMS)例項,將使用遺留應用程式的供應商儲存的資料複製到Amazon S3。 向供應商提供進入AWS DMS例項的憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon EC2 例項來執行 SFTP 伺服器。 指示使用遺留應用程式的供應商使用SFTP伺服器上傳資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個 Amazon S3 檔案閘道器,供使用遺留應用程式上傳檔案到 SMB 檔案共享的供應商使用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #817

**題目**
一個營銷團隊希望為即將到來的多體育賽事建立一場運動. 該小組有過去五年的PDF格式的新聞報道。 團隊需要一個解決方案,以獲取對新聞報道內容和情緒的深刻見解. 解決方案必須使用Amazon Textract處理新聞報道. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 向Amazon Athena提供所提取的見解以供分析。 在Amazon S3桶中儲存所提取的洞察力和分析.
- B. 在Amazon DynamoDB表格中儲存所提取的見解. 使用Amazon SageMaker來建立情感模型.
- C. 向亞馬遜康普雷亨德提供所提取的真知灼見進行分析。 將分析儲存為 Amazon S3 桶。
- D. 在Amazon S3 儲存桶中儲存所提取的洞見. 使用Amazon QuickSight視覺化分析資料.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在Amazon DynamoDB表格中儲存所提取的見解. 使用Amazon SageMaker來建立情感模型。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：向Amazon Athena提供所提取的見解以供分析。 在Amazon S3桶中儲存所提取的洞察力和分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：向亞馬遜康普雷亨德提供所提取的真知灼見進行分析。 將分析儲存為 Amazon S3 桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon S3 儲存桶中儲存所提取的洞見. 使用Amazon QuickSight視覺化分析資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #818

**題目**
一家公司的應用程式執行於Amazon EC2的多個可用區(Availability Zones)例. 應用程式需要吸收第三方應用程式的實時資料. 公司需要資料攝入溶液,將攝入的原始資料放入Amazon S3桶中. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 Amazon Kinesis 資料流用於資料攝入. 建立 Amazon Kinesis 資料 Firehose 傳送流以消耗 Kinesis 資料流. 指定 S3 儲存桶(S3 bucket) 為傳送流的目的地。
- B. 在 AWS 資料庫(Database) 遷移服務(AWS DSMS)中建立 資料庫(database) 遷移任務. 指定 EC2 的 複寫(replication) 例項為源端。 指定S3 儲存桶(S3 bucket)為目標終點。 設定遷移型別以遷移現有資料並複製正在進行的變化。
- C. 在 EC2 例項上建立和配置 AWS 資料同步代理。 配置資料同步任務,將資料從EC2例項傳輸到S3 儲存桶(S3 bucket).
- D. 建立與資料攝入應用程式的 AWS Direct Connect 連線。 建立 Amazon Kinesis 資料 Firehose 傳送流,從應用程式中直接消耗 PUT 操作. 指定 S3 儲存桶(S3 bucket) 為傳送流的目的地。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon Kinesis 資料流用於資料攝入. 建立 Amazon Kinesis 資料 Firehose 傳送流以消耗 Kinesis 資料流. 指定 S3 儲存桶(S3 bucket) 為傳送流的目的地 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在 AWS 資料庫(Database) 遷移服務(AWS DSMS)中建立 資料庫(database) 遷移任務. 指定 EC2 的 複寫(replication) 例項為源端。 指定S3 儲存桶(S3 bucket)為目標終點。 設定遷移型別以遷移現有資料並複製正在進行的變化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 EC2 例項上建立和配置 AWS 資料同步代理。 配置資料同步任務,將資料從EC2例項傳輸到S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立與資料攝入應用程式的 AWS Direct Connect 連線。 建立 Amazon Kinesis 資料 Firehose 傳送流,從應用程式中直接消耗 PUT 操作. 指定 S3 儲存桶(S3 bucket) 為傳送流的目的地 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #819

**題目**
一家公司的應用程式正在接收來自多個資料來源的資料。 資料的規模各不相同,預計隨著時間的推移還會增加。 目前最大尺寸為700KB. 隨著資料來源的增加,資料量和資料規模繼續增加。 公司決定將Amazon DynamoDB作為該應用的主要資料庫(database). 一個解決方案架構師需要找出一個能處理大資料大小的解決方案. 哪種解決辦法能以業務效率高的方式滿足這些要求?

**選項**
- A. 建立一個 AWS Lambda 函式來過濾超過 DynatomDB 專案大小限制的資料. 將更大的資料儲存在亞馬遜文件DB(與MongoDB相容)資料庫(database)中.
- B. 將大資料作為物件儲存在 Amazon S3 桶中。 在 DynamoDB 表格中,建立一個具有指向資料 S3 URL 屬性的專案.
- C. 將所有輸入的大資料分割為擁有相同分割槽金鑰的專案集合. 使用 BatchWrite 專案 API 操作,將資料寫入單個操作中的 DynamoDB 表格。
- D. 建立一個 AWS Lambda 函式,使用 gzip 壓縮來壓縮大物件,因為它們被寫入一個 DynamoDB 表.

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立一個 AWS Lambda 函式,使用 gzip 壓縮來壓縮大物件,因為它們被寫入一個 DynamoDB 表。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個 AWS Lambda 函式來過濾超過 DynatomDB 專案大小限制的資料. 將更大的資料儲存在亞馬遜文件DB(與MongoDB相容)資料庫(database)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將大資料作為物件儲存在 Amazon S3 桶中。 在 DynamoDB 表格中,建立一個具有指向資料 S3 URL 屬性的專案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將所有輸入的大資料分割為擁有相同分割槽金鑰的專案集合. 使用 BatchWrite 專案 API 操作,將資料寫入單個操作中的 DynamoDB 表格 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #820

**題目**
一家公司正在將一個遺留的應用程式從一個現場資料中心轉移到AWS。 申請依賴於數百份工作,這些工作每天持續1至20分鐘,並有不同的經常性時間安排。 公司想要一個解決方案來安排和執行 AWS 上的 cron 工作,並進行最小的重構. 解決方案必須支援針對未來事件的執行 cron 工作。 哪種解決辦法能滿足這些要求?

**選項**
- A. 為 cron 任務建立容器影象。 使用 Amazon EventBridge 排程器來建立經常性排程. 以 AWS Lambda 函式執行 cron 任務。
- B. 為 cron 任務建立容器影象。 在亞馬遜彈性容器服務(Amazon ECS)上使用 AWS 批次,並附帶一個排程政策來執行 cron 任務.
- C. 為 cron 任務建立容器影象。 使用 Amazon EventBridge 排程器來建立經常性排程. 執行 AWS Fargate 上的 cron 任務。
- D. 為 cron 任務建立容器影象。 在 AWS Step 函式中建立工作fiow, 使用 Wait 狀態在特定時間執行 cron 任務。 使用執行任務動作執行 AWS Fargate 上的 cron 任務。

**答案**
C


**詳解**
正確答案是 **C**。
- C：為 cron 任務建立容器影象。 使用 Amazon EventBridge 排程器來建立經常性排程. 執行 AWS Fargate 上的 cron 任務 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為 cron 任務建立容器影象。 使用 Amazon EventBridge 排程器來建立經常性排程. 以 AWS Lambda 函式執行 cron 任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 cron 任務建立容器影象。 在亞馬遜彈性容器服務(Amazon ECS)上使用 AWS 批次,並附帶一個排程政策來執行 cron 任務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 cron 任務建立容器影象。 在 AWS Step 函式中建立工作fiow, 使用 Wait 狀態在特定時間執行 cron 任務。 使用執行任務動作執行 AWS Fargate 上的 cron 任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #821

**題目**
一家公司使用銷售力量。 公司需要載入現有的資料和正在進行的資料變化,從銷售部隊到Amazon Redshift進行分析. 公司不希望資料透過公共網際網路。 在LEAST的開發努力下,哪一種解決辦法能滿足這些要求?

**選項**
- A. 建立VPN連線 從VPC到 Salesforce. 使用AWS Glue DataBrew傳輸資料.
- B. 建立從VPC到銷售力量的AWS Direct Connect連線. 使用AWS Glue DataBrew傳輸資料.
- C. 在 VPC 到 Salesforce 中建立 AWS 私人連結。 使用Amazon AppFlow傳輸資料.
- D. 與 Salesforce 建立 VPC 對等連線。 使用Amazon AppFlow傳輸資料.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 VPC 到 Salesforce 中建立 AWS 私人連結。 使用Amazon AppFlow傳輸資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立VPN連線 從VPC到 Salesforce. 使用AWS Glue DataBrew傳輸資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立從VPC到銷售力量的AWS Direct Connect連線. 使用AWS Glue DataBrew傳輸資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：與 Salesforce 建立 VPC 對等連線。 使用Amazon AppFlow傳輸資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #822

**題目**
一家公司最近將其應用程式遷移到AWS。 該應用程式執行在Amazon EC2 Linux例項上,在Auto Scaling 群組(Auto Scaling group)中跨越多個可用區(Availability Zones). 應用程式將資料儲存在使用EFS標準-不頻繁存取儲存的亞馬遜彈性檔案系統(Amazon EFS)中. 應用程式索引了公司的文件。 該索引儲存於Amazon RDS 資料庫(database). 公司需要透過一些應用和服務變化來最佳化儲存成本. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立一個Amazon S3 儲存桶,該水桶使用智慧-輪胎生命週期政策(lifecycle policy). 將所有檔案複製到 S3 儲存桶(S3 bucket)。 更新應用程式以使用Amazon S3 API來儲存和檢索檔案.
- B. 為 Windows 檔案伺服器檔案共享部署 Amazon FSx。 更新應用程式以使用 CIFS 協議儲存和檢索檔案。
- C. 為 OpenZFS 檔案系統共享部署 Amazon FSx。 更新應用程式以使用新的掛載點儲存和檢索檔案。
- D. 建立使用 S3 Glacier Flexible Retrieval 的 Amazon S3 桶. 將所有檔案複製到 S3 儲存桶(S3 bucket)。 更新應用程式,以使用Amazon S3 API儲存和檢索檔案作為標準檢索.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個Amazon S3 儲存桶,該水桶使用智慧-輪胎生命週期政策(lifecycle policy). 將所有檔案複製到 S3 儲存桶(S3 bucket)。 更新應用程式以使用Amazon S3 API來儲存和檢索檔案。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為 Windows 檔案伺服器檔案共享部署 Amazon FSx。 更新應用程式以使用 CIFS 協議儲存和檢索檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 OpenZFS 檔案系統共享部署 Amazon FSx。 更新應用程式以使用新的掛載點儲存和檢索檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立使用 S3 Glacier Flexible Retrieval 的 Amazon S3 桶. 將所有檔案複製到 S3 儲存桶(S3 bucket)。 更新應用程式,以使用Amazon S3 API儲存和檢索檔案作為標準檢索。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #823

**題目**
一個機器人公司正在設計醫療手術的解決方案。 機器人將使用先進的感測器,相機,和AI演算法來感知其環境並完成手術. 公司需要在AWS雲中公開負載平衡器(load balancer),確保與後端服務無縫通訊. 負載平衡器(load balancer)必須能夠根據查詢字串對不同的目標群體進行路由流量. 流量也必須加密. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用帶有AWS Certificate Manager(ACM)憑證的網路負載平衡器(Network Load Balancer). 使用基於查詢引數的路由.
- B. 使用負載平衡器(Load Balancer)號閘道器。 在 AWS 身份和存取管理( IAM) 中匯入生成的憑證。 將憑證附在負載平衡器(load balancer)上. 使用基於HTTP路徑的路由.
- C. 使用帶有AWS Certificate Manager(ACM)憑證的應用程式負載平衡器(Application Load Balancer). 使用基於查詢引數的路由.
- D. 使用網路負載平衡器(Network Load Balancer).. 在 AWS 身份和存取管理( IAM) 中匯入生成的憑證。 將憑證附在負載平衡器(load balancer)上. 使用基於查詢引數的路由.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用帶有AWS Certificate Manager(ACM)憑證的應用程式負載平衡器(Application Load Balancer). 使用基於查詢引數的路由。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用帶有AWS Certificate Manager(ACM)憑證的網路負載平衡器(Network Load Balancer). 使用基於查詢引數的路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用負載平衡器(Load Balancer)號閘道器。 在 AWS 身份和存取管理( IAM) 中匯入生成的憑證。 將憑證附在負載平衡器(load balancer)上. 使用基於HTTP路徑的路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用網路負載平衡器(Network Load Balancer).. 在 AWS 身份和存取管理( IAM) 中匯入生成的憑證。 將憑證附在負載平衡器(load balancer)上. 使用基於查詢引數的路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #824

**題目**
一家公司有一個在單一的Amazon EC2例項上執行的應用程式. 該應用程式使用一個執行在同一EC2例項上的MySQL 資料庫(database). 公司需要高度可用和自動可擴充套件的解決方案來處理增加的流量. 哪種解決辦法能滿足這些要求?

**選項**
- A. 應用到執行在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)的EC2例項中. 建立一個具有多個MySQL相容節點的Amazon Redshift叢集.
- B. 應用到EC2例項中,這些例項被配置為應用程式負載平衡器(Application Load Balancer)背後的目標群體。 為 MySQL 叢集建立具有多個例項的 Amazon RDS。
- C. 應用到執行在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)的EC2例項中. 為資料庫(database)層建立Amazon Aurora無伺服器 MySQL叢集.
- D. 應用到EC2例項中,這些例項被配置為應用程式負載平衡器(Application Load Balancer)背後的目標群體。 為 Redis 叢集建立使用 MySQL 聯結器的 Amazon ElastiCache。

**答案**
B


**詳解**
正確答案是 **B**。
- B：應用到EC2例項中,這些例項被配置為應用程式負載平衡器(Application Load Balancer)背後的目標群體。 為 MySQL 叢集建立具有多個例項的 Amazon RDS 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：應用到執行在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)的EC2例項中. 建立一個具有多個MySQL相容節點的Amazon Redshift叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：應用到執行在應用程式負載平衡器(Application Load Balancer)後面的Auto Scaling 群組(Auto Scaling group)的EC2例項中. 為資料庫(database)層建立Amazon Aurora無伺服器 MySQL叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：應用到EC2例項中,這些例項被配置為應用程式負載平衡器(Application Load Balancer)背後的目標群體。 為 Redis 叢集建立使用 MySQL 聯結器的 Amazon ElastiCache 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #825

**題目**
一個公司正計劃將資料遷移到一個Amazon S3桶. 資料必須在S3 儲存桶(S3 bucket)範圍內進行加密。 加密(encryption) 鍵必須每年自動輪換. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將資料遷移到S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption)配有Amazon S3管理金鑰(SSE-S3). 使用SSE-S3 加密(encryption)鍵的內建金鑰旋轉行為.
- B. 建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 啟用自動金鑰旋轉。 設定 S3 儲存桶(S3 bucket) 預設的 加密(encryption) 行為使用客戶管理的 KMS 金鑰. 將資料遷移到S3 儲存桶(S3 bucket).
- C. 建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 設定 S3 儲存桶(S3 bucket) 預設的 加密(encryption) 行為使用客戶管理的 KMS 金鑰. 將資料遷移到S3 儲存桶(S3 bucket). 每年手動旋轉KMS金鑰.
- D. 使用客戶金鑰材料加密資料. 將資料遷移到S3 儲存桶(S3 bucket). 建立一個AWS Key Management Service(AWS KMS)金鑰,不包含金鑰材料. 將客戶關鍵材料匯入 KMS 金鑰. 啟用自動金鑰旋轉。

**答案**
A


**詳解**
正確答案是 **A**。
- A：將資料遷移到S3 儲存桶(S3 bucket). 使用伺服器側式加密(encryption)配有Amazon S3管理金鑰(SSE-S3). 使用SSE-S3 加密(encryption)鍵的內建金鑰旋轉行為。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 啟用自動金鑰旋轉。 設定 S3 儲存桶(S3 bucket) 預設的 加密(encryption) 行為使用客戶管理的 KMS 金鑰. 將資料遷移到S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS Key Management Service(AWS KMS) 客戶端管理金鑰。 設定 S3 儲存桶(S3 bucket) 預設的 加密(encryption) 行為使用客戶管理的 KMS 金鑰. 將資料遷移到S3 儲存桶(S3 bucket). 每年手動旋轉KMS金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用客戶金鑰材料加密資料. 將資料遷移到S3 儲存桶(S3 bucket). 建立一個AWS Key Management Service(AWS KMS)金鑰,不包含金鑰材料. 將客戶關鍵材料匯入 KMS 金鑰. 啟用自動金鑰旋轉 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #826

**題目**
一家公司正在將公司管理的微軟活動目錄上的應用程式遷移到AWS。 公司在多個AWS帳戶中部署應用程式. 公司使用AWS Organizations集中管理帳戶. 公司的安全團隊需要單一的簽註解決方案,覆蓋公司所有AWS帳戶. 公司必須繼續管理在現場活躍目錄中的使用者和團體. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在 AWS 目錄服務中為微軟活動目錄建立企業版活動目錄. 配置活動目錄作為AWS IAM身份中心的身份源.
- B. 啟用 AWS IAM 身份中心. 配置雙向森林信託關係,透過對微軟活動目錄使用AWS目錄服務,將公司自主管理的活動目錄與IAM身份中心連線.
- C. 使用AWS目錄服務,與公司自主管理的活動目錄建立雙向信任關係.
- D. 在Amazon EC2上部署身份提供者。 將IDP作為AWS IAM身份中心內部的身份源連結.

**答案**
B


**詳解**
正確答案是 **B**。
- B：啟用 AWS IAM 身份中心. 配置雙向森林信託關係,透過對微軟活動目錄使用AWS目錄服務,將公司自主管理的活動目錄與IAM身份中心連線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 AWS 目錄服務中為微軟活動目錄建立企業版活動目錄. 配置活動目錄作為AWS IAM身份中心的身份源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS目錄服務,與公司自主管理的活動目錄建立雙向信任關係。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon EC2上部署身份提供者。 將IDP作為AWS IAM身份中心內部的身份源連結。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #827

**題目**
一個公司正計劃在Amazon Aurora PostgreSQL Serverless v2叢集上部署其應用. 申請會收到大量流量. 公司希望隨著應用程式負荷的增加,最佳化叢集的儲存效能. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置叢集以使用 Aurora 標準儲存配置。
- B. 配置叢集儲存型別為提供IOPS.
- C. 配置叢集儲存型別為通用。
- D. 配置叢集以使用Aurora I/O-O-optimized儲存配置.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置叢集儲存型別為通用 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置叢集以使用 Aurora 標準儲存配置 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置叢集儲存型別為提供IOPS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置叢集以使用Aurora I/O-O-optimized儲存配置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #828

**題目**
一家在AWS運營的金融服務公司設計了符合行業標準的安保控制. 行業標準包括國家標準和技術研究所和支付卡行業資料安全標準。 公司第三方審計人員需要證明設計出的監控措施已經實施,執行正常. 該公司在AWS Organizations的單一組織中擁有數百個AWS帳戶. 公司需要監控各帳戶控制的現狀. 哪種解決辦法能滿足這些要求?

**選項**
- A. 指定一個帳戶為亞馬遜檢查員從各組織管理帳戶中委派的管理人帳戶。 將檢查員與各組織整合,發現和掃描所有AWS帳戶的資源。 啟用NIST和PCI DSS的監察行業標準。
- B. 從各組織管理帳戶中指定一個帳戶為亞馬遜衛士代管帳戶。 在指定的GuardDuty管理員帳戶中,使GuardDuty能夠保護所有成員帳戶. 啟用NIST和PCIDS的GuardDuty行業標準.
- C. 在組織管理帳戶中配置AWS CloudTrail組織線索。 指定一個帳戶為合規(compliance)帳戶。 在合規(compliance)帳戶中為NIST和PCIDS啟用CloudTrail安全標準.
- D. 從各組織管理帳戶指定一個帳戶為AWS安全中心授權管理人帳戶。 在指定的安全中心管理員帳戶中,啟用所有成員帳戶的安全中心。 啟用NIST和PCI DSS的安全中心標準.

**答案**
D


**詳解**
正確答案是 **D**。
- D：從各組織管理帳戶指定一個帳戶為AWS安全中心授權管理人帳戶。 在指定的安全中心管理員帳戶中,啟用所有成員帳戶的安全中心。 啟用NIST和PCI DSS的安全中心標準。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：指定一個帳戶為亞馬遜檢查員從各組織管理帳戶中委派的管理人帳戶。 將檢查員與各組織整合,發現和掃描所有AWS帳戶的資源。 啟用NIST和PCI DSS的監察行業標準。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：從各組織管理帳戶中指定一個帳戶為亞馬遜衛士代管帳戶。 在指定的GuardDuty管理員帳戶中,使GuardDuty能夠保護所有成員帳戶. 啟用NIST和PCIDS的GuardDuty行業標準。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在組織管理帳戶中配置AWS CloudTrail組織線索。 指定一個帳戶為合規(compliance)帳戶。 在合規(compliance)帳戶中為NIST和PCIDS啟用CloudTrail安全標準。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #829

**題目**
一家公司使用Amazon S3桶作為資料湖(data lake)儲存平臺. S3 儲存桶(S3 bucket)包含大量資料,被多個團隊和數百個應用程式隨機存取. 公司希望降低S3儲存成本,併為頻繁存取的物體提供即時可用. 滿足這些要求的MOST業務效率解決方案是什麼?

**選項**
- A. 建立一個S3壽命週期規則,向 S3 Intelligent-Tiering 儲存類物件過渡.
- B. 在Amazon S3冰川中儲存物件. 使用 S3 選擇提供應用程式存取資料。
- C. 使用來自S3儲存類分析的資料來建立S3壽命週期規則,以自動向S3標準-不頻繁存取(S3 Standard-IA)儲存級轉換物件.
- D. 轉換物件為S3標準-不頻繁存取(S3 Standard-IA)儲存類. 建立 AWS Lambda 函式,以便在應用程式存取物件時將物件轉換為 S3 標準儲存類.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個S3壽命週期規則,向 S3 Intelligent-Tiering 儲存類物件過渡。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在Amazon S3冰川中儲存物件. 使用 S3 選擇提供應用程式存取資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用來自S3儲存類分析的資料來建立S3壽命週期規則,以自動向S3標準-不頻繁存取(S3 Standard-IA)儲存級轉換物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：轉換物件為S3標準-不頻繁存取(S3 Standard-IA)儲存類. 建立 AWS Lambda 函式,以便在應用程式存取物件時將物件轉換為 S3 標準儲存類。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #830

**題目**
一家公司擁有5TB資料集. 資料集包括100萬使用者簡介和1000萬連線. 使用者配置檔案的連線與眾多的關係一樣多. 公司需要一種高效的效能方法來尋找高達五個層次的相互連線. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon S3桶儲存資料集. 使用 Amazon Athena 執行 SQL JOIN 查詢以查詢連線。
- B. 使用亞馬遜海王星來儲存帶有邊緣和頂點的資料集. 查詢資料查詢連線。
- C. 使用Amazon S3桶儲存資料集. 使用Amazon QuickSight視覺化連線.
- D. 使用Amazon RDS儲存多表的資料集. 執行 SQL JOIN 查詢以查詢連線。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用亞馬遜海王星來儲存帶有邊緣和頂點的資料集. 查詢資料查詢連線 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon S3桶儲存資料集. 使用 Amazon Athena 執行 SQL JOIN 查詢以查詢連線 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon S3桶儲存資料集. 使用Amazon QuickSight視覺化連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon RDS儲存多表的資料集. 執行 SQL JOIN 查詢以查詢連線 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #831

**題目**
公司需要在其前提環境與AWS之間安全連線. 這種連線不需要高頻寬,將處理少量流量. 連線應迅速建立. 建立這種聯絡的最符合成本效益的方法是什麼?

**選項**
- A. 執行客戶端 VPN.
- B. 實施AWS Direct Connect.
- C. 在Amazon EC2上安裝一個堡壘主機.
- D. 實施AWS站點對站點VPN連線.

**答案**
D


**詳解**
正確答案是 **D**。
- D：實施AWS站點對站點VPN連線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：執行客戶端 VPN。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：實施AWS Direct Connect。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon EC2上安裝一個堡壘主機。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #832

**題目**
一家公司擁有一個基於前提的SFTP檔案傳輸解決方案. 公司正在向AWS雲遷移,透過使用Amazon S3來放大檔案傳輸解決方案並最佳化成本. 公司員工將使用他們對於promess Microsoft Active Directory(AD)的憑證存取新解決方案. 公司希望保留當前認證和檔案存取機制. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 配置 S3 檔案閘道器。 在檔案閘道器上建立使用現有活動目錄認證的 SMB 檔案共享。
- B. 配置帶有 Amazon EC2 例項的 Auto Scaling 群組(Auto Scaling group) 來執行 SFTP 解決方案。 配置組以 60% 的 CPU 利用率 進行擴充套件。
- C. 建立一個帶有 SFTP 端點的 AWS 傳輸家族伺服器。 選擇 AWS 目錄服務選項為身份提供者。 使用 AD 聯結器來連線預設活動目錄。
- D. 建立 AWS 傳輸家族 SFTP 端點。 配置端點以使用 AWS 目錄服務選項作為身份提供者連線到現有的活動目錄.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個帶有 SFTP 端點的 AWS 傳輸家族伺服器。 選擇 AWS 目錄服務選項為身份提供者。 使用 AD 聯結器來連線預設活動目錄 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 S3 檔案閘道器。 在檔案閘道器上建立使用現有活動目錄認證的 SMB 檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置帶有 Amazon EC2 例項的 Auto Scaling 群組(Auto Scaling group) 來執行 SFTP 解決方案。 配置組以 60% 的 CPU 利用率 進行擴充套件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 AWS 傳輸家族 SFTP 端點。 配置端點以使用 AWS 目錄服務選項作為身份提供者連線到現有的活動目錄。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #833

**題目**
一家公司正在設計一個事件驅動的訂單處理系統. 每個命令在命令建立後需要多個驗證步驟. 一個像樣的 AWS Lambda 函式執行每個驗證步驟. 每個驗證步驟獨立於其他驗證步驟. 單個驗證步驟只需要命令事件資訊的子集. 公司希望確保每個驗證步驟Lambda函式只能從功能所需要的訂單事件獲取資訊. 訂單處理系統的各個組成部分應鬆散地組合在一起,以適應未來的業務變化。 哪種解決辦法能滿足這些要求?

**選項**
- A. 為每個驗證步驟建立亞馬遜簡易佇列服務(Amazon SQS)佇列. 建立一個新的 Lambda 函式,將命令資料轉換為每個驗證步驟所需的格式,並將訊息釋出到相應的SQS佇列. 訂閱每個驗證步驟 Lambda 函式為相應的 SQS 佇列。
- B. 建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 將驗證步驟 Lambda 函式訂閱到 SNS 主題. 使用訊息正文過濾,只向每個已訂閱的Lambda函式傳送所需的資料.
- C. 建立 Amazon EventBridge 事件匯流排。 為每個驗證步驟建立事件規則。 配置輸入變壓器,只向每個目標驗證步驟Lambda函式傳送所需的資料.
- D. 建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 建立一個新的 Lambda 函式來訂閱 SQS 佇列,並將命令資料轉換為每個驗證步驟所需的格式. 使用新的 Lambda 函式在單獨的執行緒上平行執行同步引用驗證步驟 Lambda 函式.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 Amazon EventBridge 事件匯流排。 為每個驗證步驟建立事件規則。 配置輸入變壓器,只向每個目標驗證步驟Lambda函式傳送所需的資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為每個驗證步驟建立亞馬遜簡易佇列服務(Amazon SQS)佇列. 建立一個新的 Lambda 函式,將命令資料轉換為每個驗證步驟所需的格式,並將訊息釋出到相應的SQS佇列. 訂閱每個驗證步驟 Lambda 函式為相應的 SQS 佇列 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個亞馬遜簡單通知服務(Amazon SNS)主題. 將驗證步驟 Lambda 函式訂閱到 SNS 主題. 使用訊息正文過濾,只向每個已訂閱的Lambda函式傳送所需的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon 簡單佇列服務( Amazon SQS) 佇列。 建立一個新的 Lambda 函式來訂閱 SQS 佇列,並將命令資料轉換為每個驗證步驟所需的格式. 使用新的 Lambda 函式在單獨的執行緒上平行執行同步引用驗證步驟 Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #834

**題目**
一家公司正在向AWS遷移一個三級應用程式。 該應用程式需要MySQL 資料庫(database). 過去,應用程式使用者在建立新條目時報告應用程式效能不佳. 這些業績問題是由使用者在工作時間從應用程式中生成不同的實時報告造成的。 當應用程式被移動到 AWS 時,哪一種解決方案會提高應用程式的效能?

**選項**
- A. 將資料匯入具有提供容量的Amazon DynamoDB表格. 重構用於報表的 DynamoDB 應用程式。
- B. 在計算最佳化的 Amazon EC2 例項上建立 資料庫(database)。 確保計算資源超過辦公場所的資料庫(database)。
- C. 建立一個Amazon Aurora MySQL Multi-AZ DB叢集,具有多個讀取複製品. 配置應用程式用於報表的讀者端點。
- D. 建立一個 Amazon Aurora MySQL 多AZ DB叢集. 配置應用程式, 將叢集的 備份(backup) 例項用作報告的終點。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個Amazon Aurora MySQL Multi-AZ DB叢集,具有多個讀取複製品. 配置應用程式用於報表的讀者端點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料匯入具有提供容量的Amazon DynamoDB表格. 重構用於報表的 DynamoDB 應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在計算最佳化的 Amazon EC2 例項上建立 資料庫(database)。 確保計算資源超過辦公場所的資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個 Amazon Aurora MySQL 多AZ DB叢集. 配置應用程式, 將叢集的 備份(backup) 例項用作報告的終點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #835

**題目**
一家公司正在透過使用AWS Direct Connect的連線,將一個安全的前提網路擴充套件至AWS雲. 現場網路沒有直接的網際網路接入。 一個執行在premise網路上的應用程式需要使用Amazon S3桶. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立公共虛擬介面(VIF). 路由AWS交通透過公共VIF.
- B. 建立 VPC 和 NAT 閘道器。 將AWS流量從premies網路到NAT閘道器.
- C. 建立一個VPC和一個Amazon S3介面端點. 將AWS的流量從premies網路到S3介面端點.
- D. 在premise網路和直接連線之間建立VPC對等連線. 把AWS的交通線路透過對等連線.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個VPC和一個Amazon S3介面端點. 將AWS的流量從premies網路到S3介面端點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立公共虛擬介面(VIF). 路由AWS交通透過公共VIF。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 VPC 和 NAT 閘道器。 將AWS流量從premies網路到NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在premise網路和直接連線之間建立VPC對等連線. 把AWS的交通線路透過對等連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #836

**題目**
一家公司透過使用一個AWS 區域(Region)中的Amazon EC2的Auto Scaling 群組(Auto Scaling group)為網站服務. 網站不需要資料庫(database). 公司正在擴大,公司的工程團隊將網站部署到第二個區域(Region). 該公司希望在整個兩個大區進行運輸,以適應增長和災難復原(disaster recovery)的目的。 解決方案不應服務於網站不健康的區域(Region)的流量. 公司應使用何種政策或資源來滿足這些要求?

**選項**
- A. Amazon Route 53 簡單路線政策
- B. Amazon Route 53 多值答案路由政策
- C. 1個區域(Region)中的應用程式負載平衡器(Application Load Balancer),目標組指定來自兩個區域的EC2例項標識
- D. 應用程式負載平衡器(Application Load Balancer) 在一個區域(Region)中有一個目標組,指定兩個區域EC2例項的IP地址

**答案**
B


**詳解**
正確答案是 **B**。
- B：Amazon Route 53 多值答案路由政策。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：Amazon Route 53 簡單路線政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：1個區域(Region)中的應用程式負載平衡器(Application Load Balancer),目標組指定來自兩個區域的EC2例項標識。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：應用程式負載平衡器(Application Load Balancer) 在一個區域(Region)中有一個目標組,指定兩個區域EC2例項的IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #837

**題目**
一家公司在Amazon EC2 執行個體中執行其應用程式,由亞馬遜彈性區塊儲存(Amazon EBS)支援. EC2例項執行最近的Amazon Linux釋出. 當公司的員工儲存和檢索25GB或更大的檔案時,應用程式的可用性出現問題. 公司需要一個不要求公司在EC2例項之間傳輸檔案的解決方案. 在許多EC2和多個可用區(Availability Zones)的案例中都必須有這些檔案。 哪種解決辦法能滿足這些要求?

**選項**
- A. 把所有檔案都移到一個Amazon S3桶上. 指示員工查閱S3 儲存桶(S3 bucket)的文件.
- B. 取一個快照(snapshot) 現有的EBS磁碟區. 將快照(snapshot)作為EBS的體積掛載,橫跨EC2例項. 指示僱員查閱EC2 執行個體的檔案。
- C. 在所有 EC2 例項中掛載一個 Amazon 彈性檔案系統(Amazon EFS) 檔案系統。 指示僱員查閱EC2 執行個體的檔案。
- D. 從 EC2 例項建立 Amazon 機器影象( AMI)。 配置使用例項儲存量的 AMI 中的新 EC2 例項。 指示僱員查閱EC2 執行個體的檔案。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在所有 EC2 例項中掛載一個 Amazon 彈性檔案系統(Amazon EFS) 檔案系統。 指示僱員查閱EC2 執行個體的檔案。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：把所有檔案都移到一個Amazon S3桶上. 指示員工查閱S3 儲存桶(S3 bucket)的文件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：取一個快照(snapshot) 現有的EBS磁碟區. 將快照(snapshot)作為EBS的體積掛載,橫跨EC2例項. 指示僱員查閱EC2 執行個體的檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：從 EC2 例項建立 Amazon 機器影象( AMI)。 配置使用例項儲存量的 AMI 中的新 EC2 例項。 指示僱員查閱EC2 執行個體的檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #838

**題目**
一家公司正在Amazon EC2上執行一個高度敏感的應用程式,由Amazon RDS 資料庫(database)支援. 合規(Compliance)條例規定,所有個人可識別資訊都應在休息時加密。 哪個解決方案設計師應該建議滿足這一要求,對基礎設施進行 " LEAST " 數額的改變?

**選項**
- A. 部署 AWS Certificate Manager 來生成憑證。 使用憑證加密 資料庫(database) 卷。
- B. 部署AWS CloudHSM,生成加密(encryption)金鑰,並使用金鑰加密資料庫(database)卷.
- C. 使用 AWS Key Management Service(AWS KMS) 金鑰配置 SSL 加密(encryption) 加密 資料庫(database) 卷.
- D. 配置Amazon Elastic Block Store(Amazon EBS) 加密(encryption)和Amazon RDS 加密(encryption) 帶有加密例項和資料庫(database)卷的AWS Key Management Service(AWS KMS)金鑰.

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置Amazon Elastic Block Store(Amazon EBS) 加密(encryption)和Amazon RDS 加密(encryption) 帶有加密例項和資料庫(database)卷的AWS Key Management Service(AWS KMS)金鑰。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：部署 AWS Certificate Manager 來生成憑證。 使用憑證加密 資料庫(database) 卷 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：部署AWS CloudHSM,生成加密(encryption)金鑰,並使用金鑰加密資料庫(database)卷。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Key Management Service(AWS KMS) 金鑰配置 SSL 加密(encryption) 加密 資料庫(database) 卷。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #839

**題目**
一家公司在一個VPC的私人子網中執行一個AWS Lambda功能. 這些子網透過一個Amazon EC2 NAT例項,有一條預設的網際網路路線. Lambda函式處理輸入資料,並將其輸出儲存為Amazon S3的物件. 間歇性地,Lambda在嘗試上傳物件時,由於NAT例項的網路上流量飽和,其功能時間會超時. 公司想進入Amazon S3而不翻轉網際網路. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將 EC2 NAT 例項替換為 AWS 管理的NAT 閘道器。
- B. 將VPC中EC2 NAT例項的大小擴大為網路最佳化例項型別.
- C. 在 VPUpdate 中為 Amazon S3 提供閘道器端點 子網的路由表。
- D. 提供過境通道。 在 Lambda 函式執行的私有子網中放置中轉閘道器附件。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 VPUpdate 中為 Amazon S3 提供閘道器端點 子網的路由表 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將 EC2 NAT 例項替換為 AWS 管理的NAT 閘道器 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將VPC中EC2 NAT例項的大小擴大為網路最佳化例項型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：提供過境通道。 在 Lambda 函式執行的私有子網中放置中轉閘道器附件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #840

**題目**
一個擁有世界各地記者的新聞公司正在AWS上主持其廣播系統. 記者向廣播系統傳送直播. 記者在手機上使用軟體透過實時通訊協議(RTMP)傳送直播流. 解決方案架構師必須設計一個解決方案,讓記者能夠傳送質量最高的溪流. 解決方案必須提供加速TCP連線回廣播系統. 解決方案設計師應該用什麼來滿足這些要求?

**選項**
- A. Amazon CloudFront.
- B. AWS 全球加速器
- C. AWS 客戶端 VPN
- D. Amazon EC2 例項和 AWS 彈性IP地址

**答案**
A


**詳解**
正確答案是 **A**。
- A：Amazon CloudFront。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：AWS 全球加速器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：AWS 客戶端 VPN。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon EC2 例項和 AWS 彈性IP地址。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #841

**題目**
一家公司使用Amazon EC2 執行個體和亞馬遜彈性板塊商店(Amazon EBS)來執行其自行管理的資料庫(database). 公司擁有350TB的資料分佈在EBS所有卷. 公司每天拍攝EBS快照,並將快照儲存1個月. 每日變動率為EBS 磁碟區的5%. 由於新的規定,公司需要將每月的快照儲存7年. 公司需要改變其備份(backup)戰略,以遵守新的條例,並確保以最低限度的行政努力獲得資料。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 將每日快照(snapshot)在EBS 快照(snapshot)標準等級保持1個月. 將每月快照(snapshot)複製到亞馬遜S3 Glacier Deep Archive,保留期為7年.
- B. 繼續現行EBS 快照(snapshot)政策. 新增政策將月度快照(snapshot)移動至Amazon EBS Snapshots Archive,保留期為7年.
- C. 將每日快照(snapshot)在EBS 快照(snapshot)標準等級保持1個月. 將每月快照(snapshot)在標準等級中保留7年. 使用遞增快照.
- D. 將每日快照(snapshot)保留在EBS 快照(snapshot)標準等級. 使用EBS直接API每月拍攝所有EBS 磁碟區的快照. 將快照存放在Amazon S3 儲存桶中,在不頻繁存取層中儲存7年.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將每日快照(snapshot)在EBS 快照(snapshot)標準等級保持1個月. 將每月快照(snapshot)複製到亞馬遜S3 Glacier Deep Archive,保留期為7年。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：繼續現行EBS 快照(snapshot)政策. 新增政策將月度快照(snapshot)移動至Amazon EBS Snapshots Archive,保留期為7年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將每日快照(snapshot)在EBS 快照(snapshot)標準等級保持1個月. 將每月快照(snapshot)在標準等級中保留7年. 使用遞增快照。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將每日快照(snapshot)保留在EBS 快照(snapshot)標準等級. 使用EBS直接API每月拍攝所有EBS 磁碟區的快照. 將快照存放在Amazon S3 儲存桶中,在不頻繁存取層中儲存7年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #842

**題目**
一家公司執行一個應用程式,在亞馬遜彈性檔案系統(Amazon EFS)上儲存持續資料的若干Amazon EC2例項。 公司需要透過使用AWS管理服務解決方案將資料複製到另一個AWS 區域(Region). 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用EFS-to-EFS 備份(backup)解決方案將資料複製到另一個區域(Region)中的EFS檔案系統.
- B. 執行一個夜間指令碼,將EFS檔案系統的資料複製到一個Amazon S3桶. 啟用 S3 儲存桶(S3 bucket) 上的 S3 Cross-Region Replication。
- C. 在另一個區域(Region)中建立一個 VPC. 建立跨區域(Region) VPC對等系統. 執行一個夜間的rsync,將原區域(Region)的資料複製到新的區域(Region).
- D. 使用AWS Backup來建立備份(backup)計劃,其規則是每天使用備份(backup)並複製到另一個區域(Region). 將EFS檔案系統資源指派給備份(backup)計劃.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用AWS Backup來建立備份(backup)計劃,其規則是每天使用備份(backup)並複製到另一個區域(Region). 將EFS檔案系統資源指派給備份(backup)計劃。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用EFS-to-EFS 備份(backup)解決方案將資料複製到另一個區域(Region)中的EFS檔案系統。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：執行一個夜間指令碼,將EFS檔案系統的資料複製到一個Amazon S3桶. 啟用 S3 儲存桶(S3 bucket) 上的 S3 Cross-Region Replication 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在另一個區域(Region)中建立一個 VPC. 建立跨區域(Region) VPC對等系統. 執行一個夜間的rsync,將原區域(Region)的資料複製到新的區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #843

**題目**
一家電子商務公司正在將其房地工作量轉移到AWS雲。 目前的工作量包括一個網路應用程式和一個用於儲存的後端Microsoft SQL 資料庫(database). 公司預計在促銷活動期間會有大批客戶. AWS雲中的新基礎設施必須非常可用和可擴充套件。 LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 在應用程式負載平衡器(Application Load Balancer)後,將網路應用移動到兩個可用區(Availability Zones)的Amazon EC2例項. 為微軟SQL伺服器將資料庫(database)修改為Amazon RDS,同時在兩個可用區(Availability Zones)中都有讀取的複製品.
- B. 將網路應用程式移動到一個Amazon EC2例項中,該例項以Auto Scaling 群組(Auto Scaling group)執行於應用程式負載平衡器(Application Load Balancer)後面的兩個可用區(Availability Zones). 用資料庫(database)複寫(replication)將資料庫(database)在不同的AWS地區遷移到兩個EC2級.
- C. 將網路應用程式遷移到在應用程式負載平衡器(Application Load Balancer)後面兩個可用區(Availability Zones)執行的Amazon EC2 執行個體中. 透過多AZ部署將資料庫(database)型機車遷移到Amazon RDS型機車.
- D. 在應用程式負載平衡器(Application Load Balancer)之後,將網路應用移動到三個可用區(Availability Zones)上的3個Amazon EC2例項. 在3個可用區(Availability Zones)中將資料庫(database)遷移到3個EC2.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將網路應用程式遷移到在應用程式負載平衡器(Application Load Balancer)後面兩個可用區(Availability Zones)執行的Amazon EC2 執行個體中. 透過多AZ部署將資料庫(database)型機車遷移到Amazon RDS型機車。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在應用程式負載平衡器(Application Load Balancer)後,將網路應用移動到兩個可用區(Availability Zones)的Amazon EC2例項. 為微軟SQL伺服器將資料庫(database)修改為Amazon RDS,同時在兩個可用區(Availability Zones)中都有讀取的複製品。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將網路應用程式移動到一個Amazon EC2例項中,該例項以Auto Scaling 群組(Auto Scaling group)執行於應用程式負載平衡器(Application Load Balancer)後面的兩個可用區(Availability Zones). 用資料庫(database)複寫(replication)將資料庫(database)在不同的AWS地區遷移到兩個EC2級。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在應用程式負載平衡器(Application Load Balancer)之後,將網路應用移動到三個可用區(Availability Zones)上的3個Amazon EC2例項. 在3個可用區(Availability Zones)中將資料庫(database)遷移到3個EC2。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #844

**題目**
一家公司擁有一個promession業務應用程式,每天生成數百個檔案. 這些檔案被儲存在SMB檔案共享上,需要低水平的延遲(latency)連線到應用程式伺服器. 新公司政策規定所有應用程式生成的檔案必須複製到AWS. 已有 VPN 連線到 AWS。 應用程式開發團隊沒有時間進行必要的程式碼修改,將應用程式移動到AWS. 一個解決方案架構師應該建議哪個服務允許應用程式將檔案複製到AWS?

**選項**
- A. 亞馬遜彈性檔案系統(Amazon EFS)
- B. Windows 檔案伺服器的 Amazon FSx
- C. AWS Snowball.
- D. AWS Storage Gateway.

**答案**
D


**詳解**
正確答案是 **D**。
- D：AWS Storage Gateway。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：亞馬遜彈性檔案系統(Amazon EFS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：Windows 檔案伺服器的 Amazon FSx。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：AWS Snowball。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #845

**題目**
一家公司有15名員工. 公司在Amazon DynamoDB表格中儲存僱員開始日期. 公司希望在員工工作紀念日當天向每位員工傳送電子郵件資訊. 哪種辦法能滿足這些要求?

**選項**
- A. 建立一個掃描DynamoDB表格的指令碼,並使用Amazon簡單通知服務(Amazon SNS)在必要時向員工傳送電子郵件訊息. 在 Amazon EC2 例項中每天使用一個 cron 任務來執行此指令碼。
- B. 建立一個指令碼掃描DynamoDB表格,並使用Amazon Simple Quue Service(Amazon SQS)在必要時向員工傳送電子郵件訊息. 在 Amazon EC2 例項中每天使用一個 cron 任務來執行此指令碼。
- C. 建立一個AWS Lambda功能,掃描DynamoDB表,必要時使用Amazon簡單通知服務(Amazon SNS)向員工傳送電子郵件訊息. 安排此 Lambda 函式每天執行。
- D. 建立一個AWS Lambda功能,掃描DynamoDB表格,並使用Amazon Simple Quue Service(Amazon SQS)在必要時向員工傳送電子郵件訊息. 安排此 Lambda 函式每天執行。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個AWS Lambda功能,掃描DynamoDB表,必要時使用Amazon簡單通知服務(Amazon SNS)向員工傳送電子郵件訊息. 安排此 Lambda 函式每天執行 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個掃描DynamoDB表格的指令碼,並使用Amazon簡單通知服務(Amazon SNS)在必要時向員工傳送電子郵件訊息. 在 Amazon EC2 例項中每天使用一個 cron 任務來執行此指令碼 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個指令碼掃描DynamoDB表格,並使用Amazon Simple Quue Service(Amazon SQS)在必要時向員工傳送電子郵件訊息. 在 Amazon EC2 例項中每天使用一個 cron 任務來執行此指令碼 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個AWS Lambda功能,掃描DynamoDB表格,並使用Amazon Simple Quue Service(Amazon SQS)在必要時向員工傳送電子郵件訊息. 安排此 Lambda 函式每天執行 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #846

**題目**
一家公司的應用程式執行在Amazon EC2型Auto Scaling 群組(Auto Scaling group)型負載平衡器(load balancer)型後方彈性負載平衡(ELB). 根據申請的歷史,該公司預計每年節假日的交通會激增。 一個解決方案架構師必須設計一種戰略,以確保Auto Scaling 群組(Auto Scaling group)主動提高能力,儘量減少對應用程式使用者的任何效能影響. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 Amazon CloudWatch 提醒, 以在 CPU 利用率超過 90% 時擴大 EC2 例項。
- B. 在預期需求高峰期之前,建立經常性的預定行動,擴大Auto Scaling 群組(Auto Scaling group)。
- C. 在需求高峰期增加Auto Scaling 群組(Auto Scaling group)中EC2 執行個體的最低和最高數量。
- D. 配置一個 Amazon 簡單通知服務( Amazon SNS) 通知, 當有自動縮放: EC2 INSTANCE LAUNCH 事件時傳送提醒。

**答案**
B


**詳解**
正確答案是 **B**。
- B：在預期需求高峰期之前,建立經常性的預定行動,擴大Auto Scaling 群組(Auto Scaling group)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon CloudWatch 提醒, 以在 CPU 利用率超過 90% 時擴大 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在需求高峰期增加Auto Scaling 群組(Auto Scaling group)中EC2 執行個體的最低和最高數量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個 Amazon 簡單通知服務( Amazon SNS) 通知, 當有自動縮放: EC2 INSTANCE LAUNCH 事件時傳送提醒 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #847

**題目**
一家公司使用Amazon RDS作為其資料級的PostgreSQL資料庫. 公司必須對資料庫實施密碼旋轉。 LEAST 營運開銷(operational overhead)符合這一要求的解決方案是什麼?

**選項**
- A. 在AWS Secrets Manager中儲存密碼. 在金鑰上啟用自動輪換。
- B. 在 AWS Systems Manager 引數儲存器中儲存密碼。 啟用引數上的自動輪換。
- C. 在 AWS Systems Manager 引數儲存器中儲存密碼。 寫入一個旋轉密碼的 AWS Lambda 函式。
- D. 在AWS Key Management Service(AWS KMS)中儲存密碼. 在 AWS KMS 金鑰上啟用自動輪換。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在AWS Secrets Manager中儲存密碼. 在金鑰上啟用自動輪換 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在 AWS Systems Manager 引數儲存器中儲存密碼。 啟用引數上的自動輪換 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 AWS Systems Manager 引數儲存器中儲存密碼。 寫入一個旋轉密碼的 AWS Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Key Management Service(AWS KMS)中儲存密碼. 在 AWS KMS 金鑰上啟用自動輪換 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #848

**題目**
一家公司在Oracle 資料庫(Database) Entertainment Edition上執行其應用程式. 公司需要將應用程式和資料庫(database)遷移到AWS. 公司在遷移到AWS時可以使用Bring Your Own License(BYOL)模式. 該應用程式使用第三方的資料庫(database)特性,這些特性需要優先存取. 一個解決方案設計師必須為資料庫(database)遷移設計一個解決方案. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 透過使用本土工具將資料庫(database)遷移到Amazon RDS用於甲骨文. 第三方特性替換為AWS Lambda.
- B. 透過使用本地工具將資料庫(database)修改為Amazon RDS Custom for Oracle. 自定義新的 資料庫(database) 設定以支援第三方特性。
- C. 透過使用AWS 資料庫(Database)遷移服務(AWS DS)將資料庫(database)遷移到Amazon DynamoDB. 自定義新的 資料庫(database) 設定以支援第三方特性。
- D. 透過使用AWS 資料庫(Database)遷移服務(AWS DS),將資料庫(database)遷移到Amazon RDS用於PostgreSQL. 重寫應用程式程式碼,以消除對第三方特性的依賴.

**答案**
B


**詳解**
正確答案是 **B**。
- B：透過使用本地工具將資料庫(database)修改為Amazon RDS Custom for Oracle. 自定義新的 資料庫(database) 設定以支援第三方特性 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過使用本土工具將資料庫(database)遷移到Amazon RDS用於甲骨文. 第三方特性替換為AWS Lambda。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過使用AWS 資料庫(Database)遷移服務(AWS DS)將資料庫(database)遷移到Amazon DynamoDB. 自定義新的 資料庫(database) 設定以支援第三方特性 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過使用AWS 資料庫(Database)遷移服務(AWS DS),將資料庫(database)遷移到Amazon RDS用於PostgreSQL. 重寫應用程式程式碼,以消除對第三方特性的依賴。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #849

**題目**
一所大型國際大學在AWS雲中部署所有計算服務. 這些服務包括Amazon EC2,Amazon RDS和Amazon DynamoDB. 該大學目前依靠許多定製指令碼支撐其基礎設施. 然而,大學希望透過使用AWS本土選項,儘可能集中管理並實現資料備份自動化. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用第三方備份(backup)軟體,並配有AWS Storage Gateway磁帶閘道器虛擬磁帶庫.
- B. 使用 AWS Backup 配置並監視所有正在使用的服務的備份.
- C. 使用 AWS Config 設定生命週期管理,以便在一個排程中拍攝所有資料來源的快照.
- D. 使用AWS Systems Manager狀態管理器管理備份(backup)任務的配置和監控(monitoring).

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 AWS Backup 配置並監視所有正在使用的服務的備份。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用第三方備份(backup)軟體,並配有AWS Storage Gateway磁帶閘道器虛擬磁帶庫。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS Config 設定生命週期管理,以便在一個排程中拍攝所有資料來源的快照。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Systems Manager狀態管理器管理備份(backup)任務的配置和監控(monitoring)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #850

**題目**
一家公司希望繪製其資訊科技基礎設施的地圖,以確定和執行對構成安全風險的資源的政策。 公司的安全團隊必須能夠查詢IT基礎設施地圖中的資料,並迅速識別安全風險. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用Amazon RDS儲存資料. 使用SQL查詢資料以識別安全風險.
- B. 使用亞馬遜海王星儲存資料. 使用SPARQL查詢資料以識別安全風險.
- C. 使用Amazon Redshift儲存資料. 使用SQL查詢資料以識別安全風險.
- D. 使用Amazon DynamoDB儲存資料. 使用PartiQL查詢資料以識別安全風險.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用亞馬遜海王星儲存資料. 使用SPARQL查詢資料以識別安全風險。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon RDS儲存資料. 使用SQL查詢資料以識別安全風險。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Redshift儲存資料. 使用SQL查詢資料以識別安全風險。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon DynamoDB儲存資料. 使用PartiQL查詢資料以識別安全風險。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #851

**題目**
一個大公司希望提供其位於全球的開發商為開發目的單獨,有限規模,管理的PostgreSQL資料庫. 資料庫的容量將很低。 開發者只有在積極工作時才需要資料庫. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 賦予開發人員單獨發射Amazon Aurora例項的能力. 設定一個程序,在工作日結束時關閉Aurora例項,並在下一個工作日開始時啟動Aurora例項.
- B. 開發一個AWS Service Catalog產品,用於執行發射Amazon Aurora例項的尺寸限制. 當開發者需要開發資料庫(database)時,給予他們啟動產品的機會.
- C. 建立 Amazon Aurora 無伺服器叢集。 開發一個 AWS Service Catalog 產品,在叢集中啟動帶有預設容量設定的資料庫. 允許開發者存取產品.
- D. 監視AWS信任的顧問檢查閒置的Amazon RDS資料庫. 建立終止已識別閒置的 RDS 資料庫的程序。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 Amazon Aurora 無伺服器叢集。 開發一個 AWS Service Catalog 產品,在叢集中啟動帶有預設容量設定的資料庫. 允許開發者存取產品。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：賦予開發人員單獨發射Amazon Aurora例項的能力. 設定一個程序,在工作日結束時關閉Aurora例項,並在下一個工作日開始時啟動Aurora例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：開發一個AWS Service Catalog產品,用於執行發射Amazon Aurora例項的尺寸限制. 當開發者需要開發資料庫(database)時,給予他們啟動產品的機會。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：監視AWS信任的顧問檢查閒置的Amazon RDS資料庫. 建立終止已識別閒置的 RDS 資料庫的程序 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #852

**題目**
一個公司正在建立一個網路應用程式,為內容管理系統服務。 內容管理系統執行於一個應用程式負載平衡器(Application Load Balancer)(ALB)後面的Amazon EC2 執行個體. EC2 執行個體以Auto Scaling 群組(Auto Scaling group)執行,跨越多個可用區(Availability Zones). 使用者不斷在內容管理系統中新增和更新檔案、部落格和其他網站資產。 解決方案架構設計師必須實施一個解決方案,即所有EC2例項都共享最新網站內容,儘可能少的滯後時間。 哪種解決辦法符合這些要求?

**選項**
- A. 更新Auto Scaling 群組(Auto Scaling group)生命週期政策(lifecycle policy)中的EC2使用者資料,從最近啟動的EC2例項複製網站資產. 配置 ALB 僅在最新的 EC2 例項中更改網站資產。
- B. 將網站資產複製到一個亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 配置每個 EC2 例項以在本地掛載 EFS 檔案系統。 配置網站託管應用程式以引用儲存在EFS檔案系統中的網站資產.
- C. 將網站資產複製到 Amazon S3 桶。 確保每個EC2例項將網站資產從S3 儲存桶(S3 bucket)下載到所附的Amazon Elastic Block Store(Amazon EBS)卷. 每小時執行一次 S3 同步命令以保持檔案的更新.
- D. 以網站資產恢復一個亞馬遜彈性塊商店(Amazon EBS 快照(snapshot)). 當啟動新的EC2例項時,將EBS 快照(snapshot)作為次要的EBS 磁碟區附後. 配置網站託管應用程式,以引用儲存在二級EBS 磁碟區中的網站資產.

**答案**
B


**詳解**
正確答案是 **B**。
- B：將網站資產複製到一個亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 配置每個 EC2 例項以在本地掛載 EFS 檔案系統。 配置網站託管應用程式以引用儲存在EFS檔案系統中的網站資產。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：更新Auto Scaling 群組(Auto Scaling group)生命週期政策(lifecycle policy)中的EC2使用者資料,從最近啟動的EC2例項複製網站資產. 配置 ALB 僅在最新的 EC2 例項中更改網站資產 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將網站資產複製到 Amazon S3 桶。 確保每個EC2例項將網站資產從S3 儲存桶(S3 bucket)下載到所附的Amazon Elastic Block Store(Amazon EBS)卷. 每小時執行一次 S3 同步命令以保持檔案的更新。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：以網站資產恢復一個亞馬遜彈性塊商店(Amazon EBS 快照(snapshot)). 當啟動新的EC2例項時,將EBS 快照(snapshot)作為次要的EBS 磁碟區附後. 配置網站託管應用程式,以引用儲存在二級EBS 磁碟區中的網站資產。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #853

**題目**
一個公司的網路應用包括多個Amazon EC2例項,它們執行在一個VPC中的應用程式負載平衡器(Application Load Balancer)之後. MySQL DB 例項的 Amazon RDS 包含資料。 公司需要有能力在其AWS環境中自動檢測和應對可疑或意外的行為. 公司已經在其建築中增加了AWS WAF. 解決方案設計師下一步應如何防範威脅?

**選項**
- A. 使用Amazon GuardDuty進行威脅檢測. 配置 Amazon EventBridge 用於過濾 GuardDuty 發現,並引用 AWS Lambda 函式來調整 AWS WAF 規則.
- B. 使用 AWS 防火牆(Firewall) 管理器進行威脅檢測. 配置 Amazon EventBridge 用於過濾 防火牆(Firewall) 管理器發現,並引用 AWS Lambda 函式來調整 AWS WAF 網路ACL.
- C. 使用亞馬遜巡視器進行威脅檢測,並更新AWS WAF規則. 建立 VPC 網路 ACL(network ACL) 以限制對網路應用程式的存取.
- D. 使用Amazon Macie進行威脅檢測,並更新AWS WAF規則. 建立 VPC 網路 ACL(network ACL) 以限制對網路應用程式的存取.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon GuardDuty進行威脅檢測. 配置 Amazon EventBridge 用於過濾 GuardDuty 發現,並引用 AWS Lambda 函式來調整 AWS WAF 規則。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 AWS 防火牆(Firewall) 管理器進行威脅檢測. 配置 Amazon EventBridge 用於過濾 防火牆(Firewall) 管理器發現,並引用 AWS Lambda 函式來調整 AWS WAF 網路ACL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用亞馬遜巡視器進行威脅檢測,並更新AWS WAF規則. 建立 VPC 網路 ACL(network ACL) 以限制對網路應用程式的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon Macie進行威脅檢測,並更新AWS WAF規則. 建立 VPC 網路 ACL(network ACL) 以限制對網路應用程式的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #854

**題目**
一家公司正計劃運營一組連線Amazon EC2的Amazon Aurora 資料庫(database)的例. 公司已經建立了一個AWS Cloud Formation模板,以部署EC2例項和Aurora DB叢集. 公司希望允許例項以安全的方式認證為資料庫(database). 公司不想維持靜止的資料庫(database)憑證. 哪些解決辦法符合這些要求?

**選項**
- A. 建立 資料庫(database) 使用者名稱和密碼。 在CloudFormation模板中新增資料庫(database)使用者名稱和密碼引數. 啟動時將引數傳遞給EC2例項.
- B. 建立 資料庫(database) 使用者名稱和密碼。 在 AWS Systems Manager 引數儲存器中儲存使用者名稱和密碼。 配置 EC2 例項從引數儲存器獲取 資料庫(database) 憑證。
- C. 配置使用IAM 資料庫(database)認證的DB叢集. 建立一個資料庫(database)使用者,用於IAM認證. 與EC2例項相關聯,允許例項上的應用程式存取資料庫(database)。
- D. 配置 DB 叢集以使用 IAM 資料庫(database) 認證與 IAM 使用者. 建立一個資料庫(database)使用者,其名稱與IAM使用者匹配. 將IAM使用者與EC2例項聯絡起來,允許例項上的應用程式存取資料庫(database)。

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置使用IAM 資料庫(database)認證的DB叢集. 建立一個資料庫(database)使用者,用於IAM認證. 與EC2例項相關聯,允許例項上的應用程式存取資料庫(database)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 資料庫(database) 使用者名稱和密碼。 在CloudFormation模板中新增資料庫(database)使用者名稱和密碼引數. 啟動時將引數傳遞給EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 資料庫(database) 使用者名稱和密碼。 在 AWS Systems Manager 引數儲存器中儲存使用者名稱和密碼。 配置 EC2 例項從引數儲存器獲取 資料庫(database) 憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 DB 叢集以使用 IAM 資料庫(database) 認證與 IAM 使用者. 建立一個資料庫(database)使用者,其名稱與IAM使用者匹配. 將IAM使用者與EC2例項聯絡起來,允許例項上的應用程式存取資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #855

**題目**
一家公司希望配置其Amazon CloudFront發行,以使用SSL/TLS憑證. 公司不願使用預設域名進行發行. 相反,公司希望使用不同的域名進行發行. 哪種解決辦法將部署憑證而不引起任何額外費用?

**選項**
- A. 請求獲得AWS Certificate Manager(ACM)在東-1 區域(Region)中頒發的私人憑證.
- B. 請求提供來自AWS Certificate Manager(ACM)在西-1 區域(Region)的私人憑證.
- C. 請求獲得AWS Certificate Manager(ACM)在我們東-1 區域(Region)中釋出的公憑證.
- D. 請求提供亞馬遜從我們西-1 區域(Region)的AWS Certificate Manager(ACM)頒發的公開憑證.

**答案**
A


**詳解**
正確答案是 **A**。
- A：請求獲得AWS Certificate Manager(ACM)在東-1 區域(Region)中頒發的私人憑證。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：請求提供來自AWS Certificate Manager(ACM)在西-1 區域(Region)的私人憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：請求獲得AWS Certificate Manager(ACM)在我們東-1 區域(Region)中釋出的公憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：請求提供亞馬遜從我們西-1 區域(Region)的AWS Certificate Manager(ACM)頒發的公開憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #856

**題目**
一家公司建立運營資料,並將資料儲存在Amazon S3桶中. 對於該公司的年度稽核(audit),一名外部顧問需要存取一份儲存在S3 儲存桶(S3 bucket)中的年度報告. 外部顧問需要查閱報告7天。 公司必須實施一項解決辦法,允許外部顧問只查閱報告。 哪種辦法能滿足這些要求?

**選項**
- A. 建立一個新的S3 儲存桶(S3 bucket),配置為主機公共靜態網站. 將運算元據遷移到新的S3 儲存桶(S3 bucket). 與外部顧問共享S3網站URL.
- B. 允許公眾存取S3 儲存桶(S3 bucket),持續7天. 外部顧問完成稽核(audit)後,取消對S3 儲存桶(S3 bucket)的存取.
- C. 建立一個新的IAM使用者,在S3 儲存桶(S3 bucket)中存取報告. 向外部顧問提供存取鑰匙。 7天后撤銷存取金鑰.
- D. 生成一個預簽名的URL,該URL可按規定存取S3 儲存桶(S3 bucket)上的報告位置. 與外部顧問共享預先簽名的 URL。

**答案**
D


**詳解**
正確答案是 **D**。
- D：生成一個預簽名的URL,該URL可按規定存取S3 儲存桶(S3 bucket)上的報告位置. 與外部顧問共享預先簽名的 URL 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個新的S3 儲存桶(S3 bucket),配置為主機公共靜態網站. 將運算元據遷移到新的S3 儲存桶(S3 bucket). 與外部顧問共享S3網站URL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：允許公眾存取S3 儲存桶(S3 bucket),持續7天. 外部顧問完成稽核(audit)後,取消對S3 儲存桶(S3 bucket)的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個新的IAM使用者,在S3 儲存桶(S3 bucket)中存取報告. 向外部顧問提供存取鑰匙。 7天后撤銷存取金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #857

**題目**
一家公司計劃對Amazon EC2例項進行高效能運算。 工作量需要低水平的延遲(latency)網路效能和高水平的網路吞吐量(throughput)與節點對節點通訊緊密結合. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 EC2 例項,使其成為叢集放置組的一部分。
- B. 啟動EC2 執行個體與專門案例租賃。
- C. 啟動 EC2 例項為 Spot 執行個體。
- D. 當啟動 EC2 例項時配置一個即時能力保留。

**答案**
D


**詳解**
正確答案是 **D**。
- D：當啟動 EC2 例項時配置一個即時能力保留 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 EC2 例項,使其成為叢集放置組的一部分。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：啟動EC2 執行個體與專門案例租賃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：啟動 EC2 例項為 Spot 執行個體 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #858

**題目**
一家公司擁有500英里(804.7公里)的一級和二級資料中心,與高速光纖電纜相連。 該公司需要在其資料中心和關於AWS的VPC之間建立高度可用和安全的網路連線,以便完成關鍵的任務。 解決方案架構師必須選擇提供最大彈性的連線解決方案. 哪種解決辦法符合這些要求?

**選項**
- A. 主資料中心的兩個AWS Direct Connect連線在兩個獨立的裝置上終止於兩個直接連線地點
- B. 每個主資料中心和二級資料中心的單一AWS Direct Connect連線在同一裝置上的一個直接連線地點終止
- C. 每個主資料中心和二級資料中心的2個AWS Direct Connect連線在兩個獨立的裝置上終止於兩個直接連線地點
- D. 每一個主資料中心和二級資料中心的單一AWS Direct Connect連線在兩個獨立裝置上的直接連線地點終止

**答案**
C


**詳解**
正確答案是 **C**。
- C：每個主資料中心和二級資料中心的2個AWS Direct Connect連線在兩個獨立的裝置上終止於兩個直接連線地點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：主資料中心的兩個AWS Direct Connect連線在兩個獨立的裝置上終止於兩個直接連線地點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：每個主資料中心和二級資料中心的單一AWS Direct Connect連線在同一裝置上的一個直接連線地點終止。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：每一個主資料中心和二級資料中心的單一AWS Direct Connect連線在兩個獨立裝置上的直接連線地點終止。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #859

**題目**
一家公司為高利用率的Oracle On-Demand DB公司經營若干Amazon RDS。 RDS DB例項在AWS Organizations組織的成員帳戶中執行。 公司財務團隊可以進入組織管理帳戶和成員帳戶. 財務團隊希望透過使用AWS信任顧問來尋找最佳化成本的方法. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 在管理帳戶中使用受託顧問的建議。
- B. 在 RDS 資料庫例項執行時使用成員帳戶中的受託顧問建議。
- C. 審查受託顧問對Amazon RDS保留例項最佳化的檢查。
- D. 審查對Amazon RDS Idle DB Incentres的受託顧問檢查。
- E. 審查受託顧問的核查,以最佳化計算。 使用 AWS 計算最佳化器交叉檢查結果。

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：在 RDS 資料庫例項執行時使用成員帳戶中的受託顧問建議 。此選項符合題目條件，能有效滿足核心需求。
- C：審查受託顧問對Amazon RDS保留例項最佳化的檢查。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在管理帳戶中使用受託顧問的建議。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：審查對Amazon RDS Idle DB Incentres的受託顧問檢查。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：審查受託顧問的核查,以最佳化計算。 使用 AWS 計算最佳化器交叉檢查結果 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #860

**題目**
一個解決方案架構師正在建立一個應用程式. 該應用程式將在一個VPC中執行於跨越多個可用區(Availability Zones)的私人子網中的Amazon EC2 執行個體. EC2例項將經常查閱載有機密資訊的大型檔案。 這些檔案被儲存在Amazon S3桶中進行處理. 解決方案架構師必須最佳化網路架構,以儘量減少資料傳輸成本. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 在 VPC 中建立 Amazon S3 的閘道器端點。 在私有子網的路由表中,新增一個閘道器端點的條目.
- B. 在公共子網建立單一的NAT閘道器. 在私有子網的路由表中,新增一條指向NAT閘道器的預設路由.
- C. 在 VP 中為 Amazon S3 建立 AWS PrivateLink 介面端點 在私有子網的路由表中,為介面端點新增一個條目.
- D. 在公共子網中為每個可用區(Availability Zone)建立一個NAT閘道器. 在私有子網的每個路由表中,都新增一個預設路由,在同一個可用區(Availability Zone)中指向NAT閘道器.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 VP 中為 Amazon S3 建立 AWS PrivateLink 介面端點 在私有子網的路由表中,為介面端點新增一個條目。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 VPC 中建立 Amazon S3 的閘道器端點。 在私有子網的路由表中,新增一個閘道器端點的條目。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在公共子網建立單一的NAT閘道器. 在私有子網的路由表中,新增一條指向NAT閘道器的預設路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在公共子網中為每個可用區(Availability Zone)建立一個NAT閘道器. 在私有子網的每個路由表中,都新增一個預設路由,在同一個可用區(Availability Zone)中指向NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #861

**題目**
一家公司希望將它的promise MySQL 資料庫(database)遷移到AWS. 資料庫(database)接受客戶端應用程式的定期進口,這造成了大量寫作業務. 公司擔心流量可能在申請中引起效能問題. 一個解決方案架構師應該如何在AWS上設計建築?

**選項**
- A. 為 MySQL DB 例項提供 Amazon RDS , 並配置 IOPS SSD 儲存。 透過使用Amazon CloudWatch來監視寫入操作度量. 必要時調整所提供的綜合業務政策。
- B. 為具有通用SSD儲存功能的 MySQL DB 例項提供 Amazon RDS。 在 DB 例項前放置 Amazon ElastiCache 叢集。 配置用於查詢 ElastiCache 的應用程式。
- C. 提供 Amazon 文件DB(帶有 MongoDB 相容性) 例項, 記憶體最佳化例項型別。 監測Amazon CloudWatch的效能相關問題. 必要時更改例項類。
- D. 以通用效能模式提供亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 監控Amazon CloudWatch為IOPS瓶頸. 必要時改為提供吞吐量(Throughput)效能模式.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為 MySQL DB 例項提供 Amazon RDS , 並配置 IOPS SSD 儲存。 透過使用Amazon CloudWatch來監視寫入操作度量. 必要時調整所提供的綜合業務政策。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為具有通用SSD儲存功能的 MySQL DB 例項提供 Amazon RDS。 在 DB 例項前放置 Amazon ElastiCache 叢集。 配置用於查詢 ElastiCache 的應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：提供 Amazon 文件DB(帶有 MongoDB 相容性) 例項, 記憶體最佳化例項型別。 監測Amazon CloudWatch的效能相關問題. 必要時更改例項類 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：以通用效能模式提供亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 監控Amazon CloudWatch為IOPS瓶頸. 必要時改為提供吞吐量(Throughput)效能模式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #862

**題目**
一個公司在AWS Cloud執行一個應用程式,生成敏感的檔案資料檔案. 公司希望重新配置應用程式的資料儲存. 公司希望加密資料檔案,並確保第三方在資料加密併傳送給AWS之前無法存取資料. 該公司已經建立了Amazon S3 儲存桶. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置S3 儲存桶(S3 bucket)使用客戶端的加密(encryption),並配有Amazon S3管理的加密(encryption)金鑰. 配置使用 S3 儲存桶(S3 bucket) 儲存歸檔檔案的應用程式。
- B. 配置S3 儲存桶(S3 bucket),使用伺服器側式的加密(encryption),使用AWS KMS金鑰(SSE-KMS). 配置使用 S3 儲存桶(S3 bucket) 儲存歸檔檔案的應用程式。
- C. 配置S3 儲存桶(S3 bucket),使用帶有AWS KMS金鑰(SSE-KMS)的雙層伺服器側式加密(encryption). 配置使用 S3 儲存桶(S3 bucket) 儲存歸檔檔案的應用程式。
- D. 配置使用客戶端的加密(encryption)的應用程式,其金鑰儲存於AWS Key Management Service(AWS KMS). 配置將檔案檔案儲存在 S3 儲存桶(S3 bucket) 中的應用程式。

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置使用客戶端的加密(encryption)的應用程式,其金鑰儲存於AWS Key Management Service(AWS KMS). 配置將檔案檔案儲存在 S3 儲存桶(S3 bucket) 中的應用程式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置S3 儲存桶(S3 bucket)使用客戶端的加密(encryption),並配有Amazon S3管理的加密(encryption)金鑰. 配置使用 S3 儲存桶(S3 bucket) 儲存歸檔檔案的應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置S3 儲存桶(S3 bucket),使用伺服器側式的加密(encryption),使用AWS KMS金鑰(SSE-KMS). 配置使用 S3 儲存桶(S3 bucket) 儲存歸檔檔案的應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置S3 儲存桶(S3 bucket),使用帶有AWS KMS金鑰(SSE-KMS)的雙層伺服器側式加密(encryption). 配置使用 S3 儲存桶(S3 bucket) 儲存歸檔檔案的應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #863

**題目**
一家公司使用預設備份(backup)設定的Amazon RDS為其資料庫(database)級. 公司需要每天製造備份(backup)資料庫(database),以滿足監管要求. 公司必須保留備份30天. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 寫入 AWS Lambda 函式,每天建立 RDS 快照(snapshot)。
- B. 修改RDS 資料庫(database),使自動備份保留期為30天.
- C. 使用AWS Systems Manager維護視窗修改RDS 備份(backup)保留期.
- D. 每天使用 AWS CLI 建立手動 快照(snapshot)。 修改RDS 備份(backup)保留期.

**答案**
B


**詳解**
正確答案是 **B**。
- B：修改RDS 資料庫(database),使自動備份保留期為30天。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：寫入 AWS Lambda 函式,每天建立 RDS 快照(snapshot) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Systems Manager維護視窗修改RDS 備份(backup)保留期。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：每天使用 AWS CLI 建立手動 快照(snapshot)。 修改RDS 備份(backup)保留期。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #864

**題目**
一個在AWS上執行其應用的公司使用Amazon Aurora DB叢集作為其資料庫(database). 在多個使用者存取和讀取資料時使用高峰時段,監控(monitoring)系統顯示資料庫(database)對寫查詢的效能退化. 公司希望增加該應用程式的可擴展性(scalability),以滿足峰值使用需求. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立第二個 Aurora DB 叢集。 配置複製任務,將使用者的資料複製到新的資料庫(database)。 更新應用程式以使用第二個資料庫(database)讀取資料.
- B. 在現有的Aurora DB叢集前建立Amazon DynamoDB加速器(DAX)叢集. 更新應用程式以使用 DAX 叢集進行只讀查詢。 直接將資料寫入Aurora DB叢集.
- C. 在現有的 Aurora DB 叢集中建立 Aurora 讀取的複製品。 更新應用程式以使用複製端點進行只讀查詢,並使用叢集端點進行寫查詢.
- D. 建立 Amazon Redshift 叢集。 將使用者的資料複製到 Redshift 叢集。 更新應用程式以連線到 Redshift 叢集,並在 Redshift 叢集上執行只讀查詢.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在現有的 Aurora DB 叢集中建立 Aurora 讀取的複製品。 更新應用程式以使用複製端點進行只讀查詢,並使用叢集端點進行寫查詢。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立第二個 Aurora DB 叢集。 配置複製任務,將使用者的資料複製到新的資料庫(database)。 更新應用程式以使用第二個資料庫(database)讀取資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在現有的Aurora DB叢集前建立Amazon DynamoDB加速器(DAX)叢集. 更新應用程式以使用 DAX 叢集進行只讀查詢。 直接將資料寫入Aurora DB叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon Redshift 叢集。 將使用者的資料複製到 Redshift 叢集。 更新應用程式以連線到 Redshift 叢集,並在 Redshift 叢集上執行只讀查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #865

**題目**
一個公司的近實時流線應用正在AWS上執行. 由於資料被攝入,一個工作執行在資料上,需要30分鐘完成. 由於收到大量資料,工作量經常出現高水平的延遲(latency)。 一個解決方案架構師需要設計一個可伸縮且無伺服器的解決方案,以提高效能. 設計師應該採取什麼樣的步驟?(選二.

**選項**
- A. 使用Amazon Kinesis Data Firehose來攝取資料.
- B. 使用帶有AWS Step函式的AWS Lambda處理資料.
- C. 使用 AWS 資料庫(Database) 遷移服務(AWS DS)來攝取資料.
- D. 在 Auto Scaling 群組(Auto Scaling group) 中使用 Amazon EC2 例處理資料。
- E. 使用AWS Fargate與亞馬遜彈性容器服務(Amazon ECS)處理資料.

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：使用Amazon Kinesis Data Firehose來攝取資料。此選項符合題目條件，能有效滿足核心需求。
- B：使用帶有AWS Step函式的AWS Lambda處理資料。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：使用 AWS 資料庫(Database) 遷移服務(AWS DS)來攝取資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Auto Scaling 群組(Auto Scaling group) 中使用 Amazon EC2 例處理資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用AWS Fargate與亞馬遜彈性容器服務(Amazon ECS)處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #866

**題目**
一家公司在VPC的多個Amazon EC2 執行個體中執行一個網路應用程式. 該應用程式需要將敏感資料寫入一個Amazon S3桶. 這些資料不能透過公共網際網路傳送。 哪種解決辦法能滿足這些要求?

**選項**
- A. 為Amazon S3建立閘道器VPC 端點(VPC endpoint). 在 VPC 路由表中建立到終點的路由。
- B. 建立以S3 儲存桶(S3 bucket)為目標的內部網路負載平衡器(Network Load Balancer).
- C. 在VPC內部部署S3 儲存桶(S3 bucket),將VPC路由表中的一條路由設定到桶中.
- D. 建立VPC和S3區域端點之間的AWS Direct Connect連線.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為Amazon S3建立閘道器VPC 端點(VPC endpoint). 在 VPC 路由表中建立到終點的路由 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立以S3 儲存桶(S3 bucket)為目標的內部網路負載平衡器(Network Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在VPC內部部署S3 儲存桶(S3 bucket),將VPC路由表中的一條路由設定到桶中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立VPC和S3區域端點之間的AWS Direct Connect連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #867

**題目**
一家公司以Amazon EC2的Amazon EC2生產量為主,擁有Amazon Elastic Block Store(Amazon EBS)卷。 一個解決方案架構師需要分析目前的EBS體積成本,並建議最佳化. 建議需要包括每月估計的儲蓄機會。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用亞馬遜檢查員報告生成 EBS 磁碟區建議進行最佳化.
- B. 使用 AWS Systems Manager 報告,確定 EBS 磁碟區建議最佳化.
- C. 使用 Amazon CloudWatch 度量衡來決定 EBS 體積建議最佳化.
- D. 使用AWS計算最佳化器生成EBS磁碟區建議進行最佳化.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用AWS計算最佳化器生成EBS磁碟區建議進行最佳化。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用亞馬遜檢查員報告生成 EBS 磁碟區建議進行最佳化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS Systems Manager 報告,確定 EBS 磁碟區建議最佳化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon CloudWatch 度量衡來決定 EBS 體積建議最佳化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #868

**題目**
一個全球性公司在AWS上承擔其工作量. 該公司的應用使用跨AWS區域的Amazon S3桶進行敏感資料儲存和分析. 該公司每天在多個S3桶中儲存數百萬個物品. 公司希望識別所有沒有版本化的S3桶. 哪種解決辦法能滿足這些要求?

**選項**
- A. 設定一個 AWS CloudTrail 事件,該事件有一條規則來識別所有沒有版本啟用跨區域的S3桶.
- B. 使用Amazon S3 Storage Lens識別所有沒有跨區域版本化的S3桶.
- C. 啟用 S3 的 IAM 存取分析器, 以識別所有沒有跨區域版本的 S3 桶。
- D. 建立 S3 Multi-Region Access Point , 以識別所有沒有跨區域版本的 S3 桶。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon S3 Storage Lens識別所有沒有跨區域版本化的S3桶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：設定一個 AWS CloudTrail 事件,該事件有一條規則來識別所有沒有版本啟用跨區域的S3桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：啟用 S3 的 IAM 存取分析器, 以識別所有沒有跨區域版本的 S3 桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 S3 Multi-Region Access Point , 以識別所有沒有跨區域版本的 S3 桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #869

**題目**
一家公司希望加強其部署在AWS上的電子商務訂單處理應用程式. 應用程式必須在不可預測的流量激增期間處理每個訂單一次,而不影響客戶的經驗。 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列. 將所有命令放在 SQS 佇列中。 配置 AWS Lambda 函式作為處理命令的目標.
- B. 建立一個亞馬遜簡易通知服務(Amazon SNS)標準主題. 釋出SNS標準主題的所有命令. 將應用程式配置為通知目標。
- C. 使用 Amazon AppFlow 建立 filow. 傳令至佛. 配置 AWS Lambda 函式作為處理命令的目標.
- D. 在應用程式中配置 AWS X-Ray 以跟蹤命令請求。 透過從Amazon CloudWatch中提取訂單來配置處理訂單的應用程式.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立亞馬遜簡易佇列服務(Amazon SQS) FIFO佇列. 將所有命令放在 SQS 佇列中。 配置 AWS Lambda 函式作為處理命令的目標。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個亞馬遜簡易通知服務(Amazon SNS)標準主題. 釋出SNS標準主題的所有命令. 將應用程式配置為通知目標 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon AppFlow 建立 filow. 傳令至佛. 配置 AWS Lambda 函式作為處理命令的目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在應用程式中配置 AWS X-Ray 以跟蹤命令請求。 透過從Amazon CloudWatch中提取訂單來配置處理訂單的應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #870

**題目**
一家公司有兩個AWS帳戶:生產與發展. 公司要將開發帳戶程式碼變更推向生產帳戶. 在α階段,開發團隊中只有兩名高階開發人員需要存取Production帳戶. 在β階段,更多的開發者需要存取才能進行測試. 哪種解決辦法能滿足這些要求?

**選項**
- A. 透過在每個帳戶中使用 AWS 管理控制檯來建立兩個政策檔案。 將政策指定給需要存取的開發者.
- B. 在發展帳戶中建立IAM角色. 允許IAM角色進入生產帳戶. 允許開發人員承擔角色.
- C. 在生產帳戶中建立IAM角色. 確定指定發展帳戶的信任政策。 允許開發人員承擔角色.
- D. 在生產帳戶中建立一個IAM組。 在規定生產帳戶的信託政策中,增加該組作為本金。 將開發者新增到組中。

**答案**
C


**詳解**
正確答案是 **C**。
- C：在生產帳戶中建立IAM角色. 確定指定發展帳戶的信任政策。 允許開發人員承擔角色。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過在每個帳戶中使用 AWS 管理控制檯來建立兩個政策檔案。 將政策指定給需要存取的開發者。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在發展帳戶中建立IAM角色. 允許IAM角色進入生產帳戶. 允許開發人員承擔角色。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在生產帳戶中建立一個IAM組。 在規定生產帳戶的信託政策中,增加該組作為本金。 將開發者新增到組中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #871

**題目**
一家公司希望限制對其網路應用內容的存取. 公司需要使用AWS上可用的授權技術來保護內容. 公司還希望實施無伺服器架構,用於授權和認證,該架構的登入率低的延遲(latency). 解決方案必須融入網路應用程式,併為全球網路內容服務。 目前應用程式的使用者基礎較小,但公司預計應用程式的使用者基礎會增加. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 Amazon Cognitto 認證。 執行 Lambda@Edge 以獲得授權。 配置 Amazon CloudFront 為全球網路應用程式服務.
- B. 為微軟活動目錄配置 AWS 目錄服務進行認證. 實施AWS Lambda授權. 使用應用程式負載平衡器(Application Load Balancer)為全球網路應用服務.
- C. 配置 Amazon Cognitto 認證。 實施AWS Lambda授權. 使用Amazon S3 Transfer Acceleration在全球服務網路應用.
- D. 為微軟活動目錄配置 AWS 目錄服務進行認證. 執行 Lambda@Edge 以獲得授權。 使用 AWS 彈性 Beanstalk 為全球網路應用程式服務.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 Amazon Cognitto 認證。 執行 Lambda@Edge 以獲得授權。 配置 Amazon CloudFront 為全球網路應用程式服務。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為微軟活動目錄配置 AWS 目錄服務進行認證. 實施AWS Lambda授權. 使用應用程式負載平衡器(Application Load Balancer)為全球網路應用服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon Cognitto 認證。 實施AWS Lambda授權. 使用Amazon S3 Transfer Acceleration在全球服務網路應用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為微軟活動目錄配置 AWS 目錄服務進行認證. 執行 Lambda@Edge 以獲得授權。 使用 AWS 彈性 Beanstalk 為全球網路應用程式服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #872

**題目**
開發團隊在開發、中轉和生產環境方面使用多個AWS帳戶。 小組成員一直在推出大量未充分利用的Amazon EC2例項。 一個解決方案設計師必須防止在所有帳戶中出現大事件。 LEAST 營運開銷(operational overhead)的解決方案架構如何滿足這一要求?

**選項**
- A. 更新IAM政策,拒絕啟動大型EC2 執行個體. 對所有使用者應用這些政策。
- B. 在 AWS 資源存取管理器中定義一個防止啟動大型 EC2 例項的資源。
- C. 在每個帳戶中建立IAM角色,拒絕啟動大型EC2例項. 授權開發人員IAM組存取該角色.
- D. 在AWS Organizations管理帳戶中建立一個帶有預設政策的組織. 建立服務控制政策(SCP),拒絕啟動大型EC2例項,並將其應用於AWS帳戶.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在AWS Organizations管理帳戶中建立一個帶有預設政策的組織. 建立服務控制政策(SCP),拒絕啟動大型EC2例項,並將其應用於AWS帳戶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：更新IAM政策,拒絕啟動大型EC2 執行個體. 對所有使用者應用這些政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 AWS 資源存取管理器中定義一個防止啟動大型 EC2 例項的資源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在每個帳戶中建立IAM角色,拒絕啟動大型EC2例項. 授權開發人員IAM組存取該角色。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #873

**題目**
一家公司將數百臺虛擬虛擬機器遷移到Amazon EC2。 例項會執行不同版本的Windows Server版本,以及多個Linux發行版. 公司希望有一個解決方案,將作業系統的庫存和更新自動化. 該公司還需要對每個案例的共同脆弱性進行總結,以便每月定期進行審查。 解決方案設計師建議如何滿足這些要求?

**選項**
- A. 設定 AWS Systems Manager 補丁管理器來管理所有EC2例項. 配置 AWS 安全樞紐以生成月報。
- B. 設定 AWS Systems Manager 補丁管理器來管理所有EC2例項. 部署亞馬遜檢查員,並配置月度報告。
- C. 設定 AWS Shield 高階,並配置月報。 部署AWS Config,使EC2上的補丁裝置自動化。
- D. 在帳戶中設定Amazon GuardDuty來監控所有EC2例項. 部署AWS Config,使EC2上的補丁裝置自動化。

**答案**
A


**詳解**
正確答案是 **A**。
- A：設定 AWS Systems Manager 補丁管理器來管理所有EC2例項. 配置 AWS 安全樞紐以生成月報 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：設定 AWS Systems Manager 補丁管理器來管理所有EC2例項. 部署亞馬遜檢查員,並配置月度報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：設定 AWS Shield 高階,並配置月報。 部署AWS Config,使EC2上的補丁裝置自動化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在帳戶中設定Amazon GuardDuty來監控所有EC2例項. 部署AWS Config,使EC2上的補丁裝置自動化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #874

**題目**
一個公司在AWS雲中託管其應用. 該應用程式執行在Auto Scaling 群組(Auto Scaling group)的Amazon EC2例項中,位於一個彈性負載平衡(ELB)負載平衡器(load balancer)之後. 該應用程式連線到一個Amazon DynamoDB表格. 就災難復原(disaster recovery)(DR)而言,公司希望確保從另一個AWS 區域(Region)中獲取該應用程式,且故障時間最小. LEAST故障時間將滿足這些要求的哪一個解決方案?

**選項**
- A. 在DR 區域(Region)中建立一個Auto Scaling 群組(Auto Scaling group)和一個ELB. 配置 DynamoDB 表格為全域性表。 配置 DNS 失敗翻轉指向新的 DR 區域(Region) 的 ELB.
- B. 建立一個 AWS CloudFormation 模板,以建立EC2 例項,ELBs,以及在必要時啟動的DynamoDB 表格. 配置 DNS 失敗翻轉以指向新的 DR 區域(Region) 的 ELB.
- C. 建立 AWS CloudFormation 模板以建立 EC2 例項,並在必要時啟動 ELB。 配置 DynamoDB 表格為全域性表。 配置 DNS 失敗翻轉以指向新的 DR 區域(Region) 的 ELB.
- D. 在DR 區域(Region)中建立一個Auto Scaling 群組(Auto Scaling group)和一個ELB. 配置 DynamoDB 表格為全域性表。 建立 Amazon CloudWatch 提醒,評價週期為 10 分鐘,以引用 AWS Lambda 函式,更新 Amazon Route 53 指向 DR 區域(Region) 的 ELB.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在DR 區域(Region)中建立一個Auto Scaling 群組(Auto Scaling group)和一個ELB. 配置 DynamoDB 表格為全域性表。 配置 DNS 失敗翻轉指向新的 DR 區域(Region) 的 ELB。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個 AWS CloudFormation 模板,以建立EC2 例項,ELBs,以及在必要時啟動的DynamoDB 表格. 配置 DNS 失敗翻轉以指向新的 DR 區域(Region) 的 ELB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS CloudFormation 模板以建立 EC2 例項,並在必要時啟動 ELB。 配置 DynamoDB 表格為全域性表。 配置 DNS 失敗翻轉以指向新的 DR 區域(Region) 的 ELB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在DR 區域(Region)中建立一個Auto Scaling 群組(Auto Scaling group)和一個ELB. 配置 DynamoDB 表格為全域性表。 建立 Amazon CloudWatch 提醒,評價週期為 10 分鐘,以引用 AWS Lambda 函式,更新 Amazon Route 53 指向 DR 區域(Region) 的 ELB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #875

**題目**
一家公司在一個私人子網中執行Amazon EC2例項上的應用程式. 該應用程式需要在Amazon S3桶中儲存和檢索資料. 根據監管要求,資料不得穿越公共網際網路。 一個解決方案設計師應該做什麼才能以成本效益高的方式滿足這些要求?

**選項**
- A. 部署一個NAT閘道器進入S3 儲存桶.
- B. 部署AWS Storage Gateway進入S3 儲存桶.
- C. 部署 S3 介面端點以存取 S3 桶。
- D. 部署一個S3閘道器端點進入S3桶.

**答案**
D


**詳解**
正確答案是 **D**。
- D：部署一個S3閘道器端點進入S3桶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：部署一個NAT閘道器進入S3 儲存桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：部署AWS Storage Gateway進入S3 儲存桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：部署 S3 介面端點以存取 S3 桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #876

**題目**
一家公司在Amazon EC2例項上託管一個應用程式,執行在一個單一的可用區(Availability Zone). 該應用程式透過使用Open SystemsInterconnection(OSI)模型的運輸層可以存取. 公司需要應用架構來擁有高可用性(high availability). 哪些步驟的組合將以符合成本效益的方式滿足這些要求?(選二.

**選項**
- A. 在不同的可用區(Availability Zone)中配置新的EC2例項. 使用 Amazon Route 53 到所有例項的線路流量。
- B. 在 EC2 例項前配置 網路負載平衡器(Network Load Balancer)。
- C. 為 TCP 傳輸到例項配置 網路負載平衡器(Network Load Balancer)。 為 HTTP 和 HTTPS 對例項的流量配置 應用程式負載平衡器(Application Load Balancer)。
- D. 為 EC2 例項建立 Auto Scaling 群組(Auto Scaling group)。 配置 Auto Scaling 群組(Auto Scaling group) 使用多個 可用區(Availability Zones). 配置 Auto Scaling 群組(Auto Scaling group) 對例項進行應用健康檢查。
- E. 建立 Amazon CloudWatch 提醒。 配置提醒以重新啟動向停止狀態過渡的 EC2 例項。

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：為 TCP 傳輸到例項配置 網路負載平衡器(Network Load Balancer)。 為 HTTP 和 HTTPS 對例項的流量配置 應用程式負載平衡器(Application Load Balancer) 。此選項符合題目條件，能有效滿足核心需求。
- D：為 EC2 例項建立 Auto Scaling 群組(Auto Scaling group)。 配置 Auto Scaling 群組(Auto Scaling group) 使用多個 可用區(Availability Zones). 配置 Auto Scaling 群組(Auto Scaling group) 對例項進行應用健康檢查。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在不同的可用區(Availability Zone)中配置新的EC2例項. 使用 Amazon Route 53 到所有例項的線路流量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 EC2 例項前配置 網路負載平衡器(Network Load Balancer) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立 Amazon CloudWatch 提醒。 配置提醒以重新啟動向停止狀態過渡的 EC2 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #877

**題目**
一家公司使用Amazon S3託管其靜態網站. 公司希望在網頁上新增聯絡表. 聯絡表將有動態伺服器側元件供使用者輸入自己的名字,電子郵件地址,電話號碼,以及使用者訊息. 該公司預計每月不到100次現場存取。 當客戶填寫表格時,聯絡表必須透過電子郵件通知公司. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在亞馬遜彈性容器服務(Amazon ECS)中託管動態聯絡表。 設定Amazon Simple電子郵件服務(Amazon SES)連線第三方電子郵件提供商.
- B. 建立一個 Amazon API Gateway 端點,從 AWS Lambda 函式返回聯絡表. 在 API 閘道器上配置另一個 Lambda 功能, 向 Amazon 簡單通知服務( Amazon SNS) 專題釋出訊息。
- C. 網站主機使用 AWS 放大主機進行靜態內容和動態內容. 使用伺服器側指令碼構建聯絡人表單. 配置 Amazon 簡單佇列服務(Amazon SQS)向公司傳送訊息.
- D. 將網站從Amazon S3遷移到執行Windows伺服器的Amazon EC2 執行個體. 使用Internet Information Server(IIS)為Windows Server託管網頁. 使用客戶端指令碼構建聯絡人表單. 將窗體與Amazon WorkMail整合.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立一個 Amazon API Gateway 端點,從 AWS Lambda 函式返回聯絡表. 在 API 閘道器上配置另一個 Lambda 功能, 向 Amazon 簡單通知服務( Amazon SNS) 專題釋出訊息 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在亞馬遜彈性容器服務(Amazon ECS)中託管動態聯絡表。 設定Amazon Simple電子郵件服務(Amazon SES)連線第三方電子郵件提供商。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：網站主機使用 AWS 放大主機進行靜態內容和動態內容. 使用伺服器側指令碼構建聯絡人表單. 配置 Amazon 簡單佇列服務(Amazon SQS)向公司傳送訊息。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將網站從Amazon S3遷移到執行Windows伺服器的Amazon EC2 執行個體. 使用Internet Information Server(IIS)為Windows Server託管網頁. 使用客戶端指令碼構建聯絡人表單. 將窗體與Amazon WorkMail整合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #878

**題目**
一家公司在AWS Organizations為其業務單位設立專門的AWS帳戶. 最近,向一個業務單位帳戶的根使用者電子郵件地址發出了重要的通知,而不是指定的帳戶所有者。 公司希望確保所有未來的通知都能根據帳單、業務或擔保的通知類別傳送給不同的僱員。 哪種解決辦法能夠最安全地滿足這些要求?

**選項**
- A. 配置每個 AWS 帳戶以使用公司管理的單一電子郵件地址。 確保所有帳戶所有者可以存取電子郵件帳戶以接收通知。 配置每個AWS帳戶的替代聯絡人,並附有相應的計費團隊,安全團隊,以及每個業務單位的操作團隊的分發列表.
- B. 配置每個 AWS 帳戶,為公司管理的每個業務單位使用不同的電子郵件分發列表. 配置每個可響應提醒的管理員電子郵件地址的分發列表。 配置每個AWS帳戶的替代聯絡人,並附有相應的計費團隊,安全團隊,以及每個業務單位的操作團隊的分發列表.
- C. 配置每個 AWS 帳戶根使用者電子郵件地址,成為每個業務單位一人的單個公司管理的電子郵件地址. 配置每個AWS帳戶的替代聯絡人,並附有相應的計費團隊,安全團隊,以及每個業務單位的操作團隊的分發列表.
- D. 配置每個 AWS 帳戶根使用者,以使用進入中央郵箱的電子郵件別名。 透過使用單個業務管理的電子郵件分發列表來配置每個帳戶的替代聯絡人,每個列表用於計費團隊,安全團隊,以及操作團隊.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置每個 AWS 帳戶,為公司管理的每個業務單位使用不同的電子郵件分發列表. 配置每個可響應提醒的管理員電子郵件地址的分發列表。 配置每個AWS帳戶的替代聯絡人,並附有相應的計費團隊,安全團隊,以及每個業務單位的操作團隊的分發列表。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置每個 AWS 帳戶以使用公司管理的單一電子郵件地址。 確保所有帳戶所有者可以存取電子郵件帳戶以接收通知。 配置每個AWS帳戶的替代聯絡人,並附有相應的計費團隊,安全團隊,以及每個業務單位的操作團隊的分發列表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置每個 AWS 帳戶根使用者電子郵件地址,成為每個業務單位一人的單個公司管理的電子郵件地址. 配置每個AWS帳戶的替代聯絡人,並附有相應的計費團隊,安全團隊,以及每個業務單位的操作團隊的分發列表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置每個 AWS 帳戶根使用者,以使用進入中央郵箱的電子郵件別名。 透過使用單個業務管理的電子郵件分發列表來配置每個帳戶的替代聯絡人,每個列表用於計費團隊,安全團隊,以及操作團隊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #879

**題目**
一家公司在AWS上執行電子商務應用程式. Amazon EC2 執行個體處理購買,並將購買細節儲存在Amazon Aurora PostgreSQL DB叢集中. 在使用高峰期,客戶的應用暫停。 一個解決方案架構師需要重新配置應用程式,以便應用程式能夠縮放以滿足峰值使用需求. 哪些行動組合將以符合成本效益的方式滿足這些要求?(選二.

**選項**
- A. 配置一個 Auto Scaling 群組(Auto Scaling group) 新的 EC2 例項來重試購買,直到處理完成。 使用 Amazon RDS 代理伺服器更新連線到 DB 叢集的應用程式.
- B. 配置應用程式,以便在Aurora PostgreSQL DB叢集前使用 Amazon ElastiCache 叢集.
- C. 更新應用程式, 將購買請求傳送到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 配置從 SQS 佇列讀取的 Auto Scaling 群組(Auto Scaling group) 新的 EC2 例項。
- D. 配置一個 AWS Lambda 功能來重試購票,直到處理完成.
- E. 配置亞馬遜AP! 有使用計劃的閘道器 REST API.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：配置一個 Auto Scaling 群組(Auto Scaling group) 新的 EC2 例項來重試購買,直到處理完成。 使用 Amazon RDS 代理伺服器更新連線到 DB 叢集的應用程式。此選項符合題目條件，能有效滿足核心需求。
- C：更新應用程式, 將購買請求傳送到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 配置從 SQS 佇列讀取的 Auto Scaling 群組(Auto Scaling group) 新的 EC2 例項 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：配置應用程式,以便在Aurora PostgreSQL DB叢集前使用 Amazon ElastiCache 叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個 AWS Lambda 功能來重試購票,直到處理完成。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：配置亞馬遜AP! 有使用計劃的閘道器 REST API。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #880

**題目**
一家使用AWS Organizations的公司在30個不同的AWS帳戶中執行150個應用程式. 該公司使用AWS Cost and Usage Report在管理帳戶中建立了新報告. 報告送交一個Amazon S3桶,複製到資料收集帳戶的桶中。 公司高層領導希望從本月初開始, 哪種解決辦法能滿足這些要求?

**選項**
- A. 共享包含要求的表格視覺功能的Amazon QuickSight儀表盤. 配置 QuickSight 以使用 AWS 資料同步查詢新報告。
- B. 共享包含要求的表格視覺功能的Amazon QuickSight儀表盤. 配置QuickSight以使用Amazon Athena查詢新報告.
- C. 共享包含要求的表格視覺功能的 Amazon CloudWatch 儀表板。 配置雲表以使用 AWS 資料同步查詢新報表。
- D. 共享包含要求的表格視覺功能的 Amazon CloudWatch 儀表板。 配置 Cloud Watch 以使用 Amazon Athena 查詢新報表。

**答案**
B


**詳解**
正確答案是 **B**。
- B：共享包含要求的表格視覺功能的Amazon QuickSight儀表盤. 配置QuickSight以使用Amazon Athena查詢新報告。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：共享包含要求的表格視覺功能的Amazon QuickSight儀表盤. 配置 QuickSight 以使用 AWS 資料同步查詢新報告 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：共享包含要求的表格視覺功能的 Amazon CloudWatch 儀表板。 配置雲表以使用 AWS 資料同步查詢新報表 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：共享包含要求的表格視覺功能的 Amazon CloudWatch 儀表板。 配置 Cloud Watch 以使用 Amazon Athena 查詢新報表 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #881

**題目**
一家公司正在Amazon S3上託管一個高流量靜態網站,其Amazon CloudFront發行量為預設TTL0秒. 公司希望實施快取以提高網站的效能. 然而,公司也希望確保在部署後幾分鐘內不提供陳舊內容。 一個解決方案設計師應該採用何種混合的快取方法來滿足這些要求?(選二.

**選項**
- A. 將CloudFront預設TTL設定為2分鐘.
- B. 在S3 儲存桶(S3 bucket)上設定2分鐘的預設TTL.
- C. 在 Amazon S3 中的物件中新增快取控制私人指令。
- D. 建立一個 AWS Lambda@ Edge 函式,以便在 HTTP 回覆中新增一個過期頭。 配置在檢視器響應上執行的功能。
- E. 向 Amazon S3 中的物件新增24小時的快取控制最大年齡指令。 部署時, 建立 CloudFront 無效, 以清除邊緣快取中任何更改的檔案。

**答案**
A,E



**詳解**
正確答案是 **A, E**。
- A：將CloudFront預設TTL設定為2分鐘。此選項符合題目條件，能有效滿足核心需求。
- E：向 Amazon S3 中的物件新增24小時的快取控制最大年齡指令。 部署時, 建立 CloudFront 無效, 以清除邊緣快取中任何更改的檔案 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在S3 儲存桶(S3 bucket)上設定2分鐘的預設TTL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 Amazon S3 中的物件中新增快取控制私人指令 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個 AWS Lambda@ Edge 函式,以便在 HTTP 回覆中新增一個過期頭。 配置在檢視器響應上執行的功能 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #882

**題目**
一家公司透過使用Amazon EC2例項和AWS Lambda功能執行其應用. EC2 執行個體在一個VPC的私人子網中執行. Lambda功能需要直接進入EC2例項的網路才能執行。 申請有效期為1年。 應用程式使用的Lambda功能數量將在1年內增加。 公司必須儘量減少所有應用資源的費用。 哪種解決辦法能滿足這些要求?

**選項**
- A. 購買EC2例項儲蓄計劃。 連線 Lambda 函式到包含 EC2 例項的私有子網。
- B. 購買EC2例項儲蓄計劃。 在EC2例項執行的同一VPC中將Lambda功能連線到新的公共子網.
- C. 購買計算儲蓄計劃。 連線 Lambda 函式到包含 EC2 例項的私有子網。
- D. 購買計算儲蓄計劃。 在Lambda服務VPC中保留Lambda功能.

**答案**
C


**詳解**
正確答案是 **C**。
- C：購買計算儲蓄計劃。 連線 Lambda 函式到包含 EC2 例項的私有子網 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：購買EC2例項儲蓄計劃。 連線 Lambda 函式到包含 EC2 例項的私有子網 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：購買EC2例項儲蓄計劃。 在EC2例項執行的同一VPC中將Lambda功能連線到新的公共子網。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：購買計算儲蓄計劃。 在Lambda服務VPC中保留Lambda功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #883

**題目**
一個連透過使用AWS控制塔對AWS採用了多帳戶策略. 公司向每個開發商提供了單獨的AWS帳戶. 公司希望實施控制,以限制開發人員發生的AWS資源成本. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 指示每個開發者用帶有CostCenter金鑰和開發者名稱值的標籤標記其所有資源. 使用需要的標籤 AWS Config 管理規則來檢查標記。 建立 AWS Lambda 函式以終止沒有標記的資源。 配置 AWS Cost Explorer 向每個開發者傳送每日報告以監控其支出.
- B. 使用 AWS 預算為每個開發者帳戶建立預算. 設定實際和預測值的預算提示,以便在開發者超過或預期超過指定預算時通知他們. 使用 AWS 預算動作對開發者的 IAM 角色應用 DenyAll 政策,以防止在分配的預算達到後啟動額外資源.
- C. 使用 AWS 成本探索器來監測和報告每個開發商帳戶的成本. 配置 Cost Explorer 向每個開發者傳送每日報告以監控其支出. 使用 AWS 成本異常檢測來檢測異常支出,並提供警報.
- D. 使用AWS Service Catalog允許開發者在有限的成本範圍內啟動資源. 在每個 AWS 帳戶中建立 AWS Lambda 功能,以便在每個工作日結束時停止執行資源. 配置 Lambda 函式, 在每個工作日開始時恢復資源。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 AWS 預算為每個開發者帳戶建立預算. 設定實際和預測值的預算提示,以便在開發者超過或預期超過指定預算時通知他們. 使用 AWS 預算動作對開發者的 IAM 角色應用 DenyAll 政策,以防止在分配的預算達到後啟動額外資源。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：指示每個開發者用帶有CostCenter金鑰和開發者名稱值的標籤標記其所有資源. 使用需要的標籤 AWS Config 管理規則來檢查標記。 建立 AWS Lambda 函式以終止沒有標記的資源。 配置 AWS Cost Explorer 向每個開發者傳送每日報告以監控其支出。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 成本探索器來監測和報告每個開發商帳戶的成本. 配置 Cost Explorer 向每個開發者傳送每日報告以監控其支出. 使用 AWS 成本異常檢測來檢測異常支出,並提供警報。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Service Catalog允許開發者在有限的成本範圍內啟動資源. 在每個 AWS 帳戶中建立 AWS Lambda 功能,以便在每個工作日結束時停止執行資源. 配置 Lambda 函式, 在每個工作日開始時恢復資源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #884

**題目**
一個解決方案架構師正在設計一個三級網路應用程式. 該架構包括一個網際網路化的應用程式負載平衡器(Application Load Balancer)(ALB)和一個在Amazon EC2 執行個體中在私人子網託管的網路級. 具有商業邏輯的應用程式級別在私有子網的EC2例項上執行. 資料庫(database)級由微軟SQL伺服器組成,在私人子網中執行EC2例項. 安保是該公司的高度優先事項。 安全群組(security group)配置的哪一種組合應使用解決方案架構師?(選三.

**選項**
- A. 為網路級配置安全群組(security group),允許從安全群組(security group)輸入的HTTPS流量用於ALB.
- B. 為網路級配置安全群組(security group),允許輸出HTTPS流量為0.0.0.0/0.
- C. 為 資料庫(database) 級配置 安全群組(security group) ,允許從 安全群組(security group) 的 Microsoft SQL 伺服器傳輸到應用級。
- D. 配置安全群組(security group)用於資料庫(database)級,允許輸出HTTPS流量,Microsoft SQL 伺服器用於安全群組(security group)的網路流量.
- E. 配置用於應用級的安全群組(security group),允許從安全群組(security group)進入網路級的HTTPS流量.
- F. 配置應用級的安全群組(security group),允許輸出HTTPS流量和Microsoft SQL 伺服器流量到安全群組(security group)的網路級.

**答案**
A,C,E



**詳解**
正確答案是 **A, C, E**。
- A：為網路級配置安全群組(security group),允許從安全群組(security group)輸入的HTTPS流量用於ALB。此選項符合題目條件，能有效滿足核心需求。
- C：為 資料庫(database) 級配置 安全群組(security group) ,允許從 安全群組(security group) 的 Microsoft SQL 伺服器傳輸到應用級 。此選項符合題目條件，能有效滿足核心需求。
- E：配置用於應用級的安全群組(security group),允許從安全群組(security group)進入網路級的HTTPS流量。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：為網路級配置安全群組(security group),允許輸出HTTPS流量為0.0.0.0/0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置安全群組(security group)用於資料庫(database)級,允許輸出HTTPS流量,Microsoft SQL 伺服器用於安全群組(security group)的網路流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #885

**題目**
一家公司釋出了其生產應用的新版本. 公司的工作量使用Amazon EC2,AWS Lambda,AWS Fargate,和亞馬遜賽格邁克. 公司希望最佳化工作量,因為使用狀況穩定。 公司希望以最少的儲蓄計劃來支付大多數的服務. 哪些儲蓄計劃將滿足這些要求?(選二.

**選項**
- A. 為Amazon EC2和SageMaker購買EC2例項儲蓄計劃。
- B. 為Amazon EC2、Lambda和SageMaker購買計算儲蓄計劃。
- C. 購買SageMaker儲蓄計劃。
- D. 為Lambda、Fargate和Amazon EC2購買計算儲蓄計劃。
- E. 為Amazon EC2和Fargate購買EC2例項儲蓄計劃。

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：為Amazon EC2、Lambda和SageMaker購買計算儲蓄計劃。此選項符合題目條件，能有效滿足核心需求。
- D：為Lambda、Fargate和Amazon EC2購買計算儲蓄計劃。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：為Amazon EC2和SageMaker購買EC2例項儲蓄計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：購買SageMaker儲蓄計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：為Amazon EC2和Fargate購買EC2例項儲蓄計劃。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #886

**題目**
一家公司使用微軟SQL伺服器資料庫(database). 該公司的應用與資料庫執行個體相連. 公司希望遷移到一個Amazon Aurora PostgreSQL 資料庫(database),對應用程式碼進行最小的修改. 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 使用 AWS Schema 轉換工具(AWS SCT)來重寫應用程式中的 SQL 查詢.
- B. 啟用 Aurora PostgreSQL 上的 Babelfish 來執行應用程式中的 SQL 查詢。
- C. 透過使用AWS Schema轉換工具(AWS SCT)和AWS 資料庫(Database)遷移服務(AWS DS)來移動資料庫(database)的計劃和資料.
- D. 使用 Amazon RDS 代理連線應用程式到 Aurora PostgreSQL.
- E. 使用 AWS 資料庫(Database) 遷移服務(AWS DS)來重寫應用程式中的SQL查詢.

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：透過使用AWS Schema轉換工具(AWS SCT)和AWS 資料庫(Database)遷移服務(AWS DS)來移動資料庫(database)的計劃和資料。此選項符合題目條件，能有效滿足核心需求。
- D：使用 Amazon RDS 代理連線應用程式到 Aurora PostgreSQL。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用 AWS Schema 轉換工具(AWS SCT)來重寫應用程式中的 SQL 查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：啟用 Aurora PostgreSQL 上的 Babelfish 來執行應用程式中的 SQL 查詢 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用 AWS 資料庫(Database) 遷移服務(AWS DS)來重寫應用程式中的SQL查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #887

**題目**
一家公司計劃對Amazon EC2使用亞馬遜彈性塊儲存器(Amazon EBS)作為附加儲存器的應用程式重新託管. 一個解決方案架構師必須設計一個解決方案,以確保所有新建立的Amazon EBS 磁碟區預設加密. 解決方案還必須防止建立未加密的EBS 磁碟區. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 EC2 帳戶屬性以總是加密新的 EBS 磁碟區。
- B. 使用AWS Config. 配置加密卷識別符號。 應用預設的 AWS Key Management Service(AWS KMS) 金鑰.
- C. 配置 AWS Systems Manager 建立 EBS 磁碟區的加密複製. 重新配置 EC2 例項以使用加密卷。
- D. 在AWS Key Management Service(AWS KMS)中建立客戶管理金鑰. 配置 AWS 遷移樞紐在公司遷移工作量時使用金鑰.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 EC2 帳戶屬性以總是加密新的 EBS 磁碟區 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS Config. 配置加密卷識別符號。 應用預設的 AWS Key Management Service(AWS KMS) 金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 AWS Systems Manager 建立 EBS 磁碟區的加密複製. 重新配置 EC2 例項以使用加密卷 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Key Management Service(AWS KMS)中建立客戶管理金鑰. 配置 AWS 遷移樞紐在公司遷移工作量時使用金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #888

**題目**
一家電子商務公司希望從公司網站收集使用者點選流資料進行實時分析. 網站在全天的交通模式上都充滿了迷惑。 公司需要一個可以適應不同流量水平的可伸縮解決方案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在Amazon Kinesis資料流中使用點播模式的資料流來捕捉點選流資料. 使用AWS Lambda實時處理資料.
- B. 使用Amazon Kinesis Data Firehose來捕獲點選流資料. 使用AWS Glue實時處理資料.
- C. 使用 Amazon Kinesis 影片流獲取點選流資料. 使用AWS Glue實時處理資料.
- D. 使用亞馬遜管理服務來獲取Apache Flink(以前稱為Amazon Kinesis Data Analytics)的點選流資料. 使用AWS Lambda實時處理資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在Amazon Kinesis資料流中使用點播模式的資料流來捕捉點選流資料. 使用AWS Lambda實時處理資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用Amazon Kinesis Data Firehose來捕獲點選流資料. 使用AWS Glue實時處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon Kinesis 影片流獲取點選流資料. 使用AWS Glue實時處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用亞馬遜管理服務來獲取Apache Flink(以前稱為Amazon Kinesis Data Analytics)的點選流資料. 使用AWS Lambda實時處理資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #889

**題目**
一個全球性公司在AWS上承擔其工作量. 該公司的應用使用跨AWS區域的Amazon S3桶進行敏感資料儲存和分析. 該公司每天在多個S3桶中儲存數百萬個物品. 公司希望識別所有沒有版本化的S3桶. 哪種解決辦法能滿足這些要求?

**選項**
- A. 設定一個 AWS CloudTrail 事件,該事件有一條規則來識別所有沒有版本啟用跨區域的S3桶.
- B. 使用Amazon S3 Storage Lens識別所有沒有跨區域版本化的S3桶.
- C. 啟用 S3 的 IAM 存取分析器, 以識別所有沒有跨區域版本的 S3 桶。
- D. 建立 S3 Multi-Region Access Point , 以識別所有沒有跨區域版本的 S3 桶。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon S3 Storage Lens識別所有沒有跨區域版本化的S3桶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：設定一個 AWS CloudTrail 事件,該事件有一條規則來識別所有沒有版本啟用跨區域的S3桶。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：啟用 S3 的 IAM 存取分析器, 以識別所有沒有跨區域版本的 S3 桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 S3 Multi-Region Access Point , 以識別所有沒有跨區域版本的 S3 桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #890

**題目**
公司需要最佳化其Amazon S3儲存成本,用於生成許多無法重現的檔案的應用程式. 每個檔案大約為5 MB,並儲存在Amazon S3標準儲存中. 公司必須在檔案被刪除前儲存4年. 這些檔案必須可以立即查閱。 這些檔案在物件建立的前30天經常存取,但在前30天之後很少存取. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立一個 S3 生命週期政策(Lifecycle policy),在物件建立30天后將檔案移動到 S3 Glacier Instant Retrieval。 刪除物件建立4年後的檔案。
- B. 建立一個 S3 生命週期政策(Lifecycle policy),在物件建立30天后將檔案移動到 S3 One Zone-In頻繁存取(S3 One Zone-IA). 刪除物件建立4年後的檔案。
- C. 建立一個 S3 生命週期政策(Lifecycle policy),在物件建立30天后將檔案移動到 S3標準-不頻繁存取(S3 Standard-IA). 刪除物件建立4年後的檔案。
- D. 建立一個 S3 生命週期政策(Lifecycle policy),在物件建立30天后將檔案移動到 S3標準-不頻繁存取(S3 Standard-IA). 在物件建立4年後將檔案移動到 S3 Glacier Flexible Retrieval。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立一個 S3 生命週期政策(Lifecycle policy),在物件建立30天后將檔案移動到 S3標準-不頻繁存取(S3 Standard-IA). 在物件建立4年後將檔案移動到 S3 Glacier Flexible Retrieval 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個 S3 生命週期政策(Lifecycle policy),在物件建立30天后將檔案移動到 S3 Glacier Instant Retrieval。 刪除物件建立4年後的檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個 S3 生命週期政策(Lifecycle policy),在物件建立30天后將檔案移動到 S3 One Zone-In頻繁存取(S3 One Zone-IA). 刪除物件建立4年後的檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個 S3 生命週期政策(Lifecycle policy),在物件建立30天后將檔案移動到 S3標準-不頻繁存取(S3 Standard-IA). 刪除物件建立4年後的檔案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #891

**題目**
一家公司在AWS雲執行其關鍵儲存應用程式. 該應用程式在兩個AWS地區使用Amazon S3. 公司希望應用程式將遠端使用者資料傳送到最近的S3 儲存桶(S3 bucket),沒有公共網路擁堵. 公司還希望Amazon S3的管理量最小的應用程式失敗. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在兩個大區之間實施積極的設計。 配置應用程式以使用最接近使用者的區域 S3 端點。
- B. 使用S3 Multi-Region Access Points的主動被動配置. 為每個區域建立一個全球終點。
- C. 將使用者資料傳送給最接近使用者的區域S3端點. 配置 S3 跨帳戶 複寫(replication) 規則,使 S3 桶保持同步。
- D. 設定Amazon S3,使用多區域(Region)Access Points在具有單一全域性終點的活性配置中. 配置 S3 跨 區域(Region) 複寫(Replication).

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用S3 Multi-Region Access Points的主動被動配置. 為每個區域建立一個全球終點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在兩個大區之間實施積極的設計。 配置應用程式以使用最接近使用者的區域 S3 端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將使用者資料傳送給最接近使用者的區域S3端點. 配置 S3 跨帳戶 複寫(replication) 規則,使 S3 桶保持同步 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：設定Amazon S3,使用多區域(Region)Access Points在具有單一全域性終點的活性配置中. 配置 S3 跨 區域(Region) 複寫(Replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #892

**題目**
一家公司正在將一個資料中心從原址遷移到AWS。 公司擁有多個遺留的應用程式,託管在單個虛擬伺服器上. 無法更改應用程式設計。 每個單個虛擬伺服器目前作為自己的EC2例項執行. 解決方案設計師需要確保應用程式在向AWS遷移後是可靠和可容錯的。 應用程式將執行在 Amazon EC2 例上。 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個Auto Scaling 群組(Auto Scaling group),最少一個,最多一個. 建立每個應用程式例項的亞馬遜機器影象( AMI)。 使用 AMI 在 Auto Scaling 群組(Auto Scaling group) 中建立 EC2 例項 在 Auto Scaling 群組(Auto Scaling group) 前配置 應用程式負載平衡器(Application Load Balancer)。
- B. 使用 AWS Backup 建立每個應用程式主機的 EC2 例項中的小時 備份(backup)。 將備份(backup)存放在Amazon S3中,單獨存放可用區(Availability Zone). 配置一個災難復原(disaster recovery)程序,從最近的備份(backup)中恢復每個應用程式的EC2例項.
- C. 建立每個應用程式例項的亞馬遜機器影象( AMI)。 從AMI推出兩個新的EC2例項. 把每個EC2例項放在單獨的可用區(Availability Zone)中. 配置一個以EC2例項為目標的網路負載平衡器(Network Load Balancer)。
- D. 使用 AWS 緩解中心重構空間將每個應用程式移出EC2 例項。 將每個應用程式的功能細分為單個元件. 每個應用程式在亞馬遜彈性容器服務(Amazon ECS)上主機,其啟動類型為AWS Fargate.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立每個應用程式例項的亞馬遜機器影象( AMI)。 從AMI推出兩個新的EC2例項. 把每個EC2例項放在單獨的可用區(Availability Zone)中. 配置一個以EC2例項為目標的網路負載平衡器(Network Load Balancer)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個Auto Scaling 群組(Auto Scaling group),最少一個,最多一個. 建立每個應用程式例項的亞馬遜機器影象( AMI)。 使用 AMI 在 Auto Scaling 群組(Auto Scaling group) 中建立 EC2 例項 在 Auto Scaling 群組(Auto Scaling group) 前配置 應用程式負載平衡器(Application Load Balancer) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS Backup 建立每個應用程式主機的 EC2 例項中的小時 備份(backup)。 將備份(backup)存放在Amazon S3中,單獨存放可用區(Availability Zone). 配置一個災難復原(disaster recovery)程序,從最近的備份(backup)中恢復每個應用程式的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 緩解中心重構空間將每個應用程式移出EC2 例項。 將每個應用程式的功能細分為單個元件. 每個應用程式在亞馬遜彈性容器服務(Amazon ECS)上主機,其啟動類型為AWS Fargate。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #893

**題目**
一家公司希望透過為每個工作量建立一個AWS帳戶來隔離其工作量. 公司需要一個解決方案,集中管理網路部分,以應付工作量。 解決辦法還必須建立自動安全控制帳戶(護欄)。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用AWS控制塔來部署帳戶. 建立網路帳戶,該帳戶擁有一個VPC,擁有私人子網和公共子網. 使用 AWS 資源存取管理器(AWS RAM)與工作量帳戶共享子網.
- B. 使用AWS Organizations來部署帳戶. 建立網路帳戶,該帳戶擁有一個VPC,擁有私人子網和公共子網. 使用 AWS 資源存取管理器(AWS RAM)與工作量帳戶共享子網.
- C. 使用AWS控制塔來部署帳戶. 在每個工作量帳戶中部署一個VPC。 透過使用中轉閘道器附件來配置每個透過檢查的VPC路由的VPC.
- D. 使用AWS Organizations來部署帳戶. 在每個工作量帳戶中部署一個VPC。 透過使用中轉閘道器附件來配置每個透過檢查的VPC路由的VPC.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用AWS控制塔來部署帳戶. 建立網路帳戶,該帳戶擁有一個VPC,擁有私人子網和公共子網. 使用 AWS 資源存取管理器(AWS RAM)與工作量帳戶共享子網。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS Organizations來部署帳戶. 建立網路帳戶,該帳戶擁有一個VPC,擁有私人子網和公共子網. 使用 AWS 資源存取管理器(AWS RAM)與工作量帳戶共享子網。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS控制塔來部署帳戶. 在每個工作量帳戶中部署一個VPC。 透過使用中轉閘道器附件來配置每個透過檢查的VPC路由的VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Organizations來部署帳戶. 在每個工作量帳戶中部署一個VPC。 透過使用中轉閘道器附件來配置每個透過檢查的VPC路由的VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #894

**題目**
一家公司在應用程式負載平衡器(Application Load Balancer)(ALB)背後設有關於Amazon EC2例項的網站。 該網站服務於靜態內容. 網站流量在增加。 公司希望儘量減少網站託管費用. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將網站移至Amazon S3桶. 配置 S3 儲存桶(S3 bucket) 的 Amazon CloudFront 分佈。
- B. 將網站移至Amazon S3桶. 為 S3 儲存桶(S3 bucket) 配置 Amazon ElastiCache 叢集。
- C. 將網站移至 AWS 擴充套件。 配置 ALB 以解析到 Amplify 網站。
- D. 將網站移至 AWS 擴充套件。 配置 EC2 例項以快取網站。

**答案**
A


**詳解**
正確答案是 **A**。
- A：將網站移至Amazon S3桶. 配置 S3 儲存桶(S3 bucket) 的 Amazon CloudFront 分佈 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將網站移至Amazon S3桶. 為 S3 儲存桶(S3 bucket) 配置 Amazon ElastiCache 叢集 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將網站移至 AWS 擴充套件。 配置 ALB 以解析到 Amplify 網站 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將網站移至 AWS 擴充套件。 配置 EC2 例項以快取網站 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #895

**題目**
一家公司正在對該公司在AWS上託管的媒體應用程式實施共享儲存解決方案. 公司需要具備使用SMB客戶端存取儲存資料的能力. LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 建立 AWS Storage Gateway 卷式閘道器. 建立使用所需客戶協議的檔案共享。 連線應用程式伺服器到檔案共享。
- B. 建立 AWS Storage Gateway 磁帶閘道器。 配置使用 Amazon S3 的磁帶. 連線應用程式伺服器到磁帶閘道器.
- C. 建立 Amazon EC2 Windows 例項。 安裝和配置例項上的 Windows 檔案共享角色。 連線應用程式伺服器到檔案共享。
- D. 為Windows檔案伺服器檔案系統建立Amazon FSx. 連線應用程式伺服器到檔案系統.

**答案**
D


**詳解**
正確答案是 **D**。
- D：為Windows檔案伺服器檔案系統建立Amazon FSx. 連線應用程式伺服器到檔案系統。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 AWS Storage Gateway 卷式閘道器. 建立使用所需客戶協議的檔案共享。 連線應用程式伺服器到檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS Storage Gateway 磁帶閘道器。 配置使用 Amazon S3 的磁帶. 連線應用程式伺服器到磁帶閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon EC2 Windows 例項。 安裝和配置例項上的 Windows 檔案共享角色。 連線應用程式伺服器到檔案共享 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #896

**題目**
一家公司正在設計其生產應用的災難復原(disaster recovery)(DR)戰略。 該應用程式由Amazon Aurora叢集上的MySQL 資料庫(database)支援,位於我們東-1區域(Region). 該公司選擇了我們西-1區域(Region)作為它的DR區域(Region). 公司目標恢復點目標(RPO)為5分鐘,目標恢復時間目標(RTO)為20分鐘. 公司希望儘量減少配置變化. 哪種辦法能滿足這些要求?

**選項**
- A. 建立一個Aurora讀取的複製件在我們-West-1的大小上類似於生產應用程式的Aurora MySQL叢集編譯例項.
- B. 將Aurora叢集轉換為Aurora全球資料庫(database). 配置管理失敗。
- C. 在西一區建立一個新的Aurora叢集,擁有Cross-區域(Region) 複寫(Replication).
- D. 使用 AWS 資料庫(Database) 遷移服務( AWS DSMS) 來同步兩個叢集。

**答案**
B


**詳解**
正確答案是 **B**。
- B：將Aurora叢集轉換為Aurora全球資料庫(database). 配置管理失敗 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個Aurora讀取的複製件在我們-West-1的大小上類似於生產應用程式的Aurora MySQL叢集編譯例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在西一區建立一個新的Aurora叢集,擁有Cross-區域(Region) 複寫(Replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 資料庫(Database) 遷移服務( AWS DSMS) 來同步兩個叢集 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #897

**題目**
在工作周第一天之前,一家公司每週都開展一項關鍵資料分析工作。 這項工作至少需要1小時才能完成分析. 工作狀態良好,無法容忍中斷。 公司需要在AWS上執行這項工作需要解決方案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 為任務建立容器。 使用 Amazon EventBridge 排程器來安排在亞馬遜彈性容器服務(Amazon ECS)叢集上作為 AWS Fargate 任務執行的任務.
- B. 配置在 AWS Lambda 函式中執行的任務。 在 Amazon EventBridge 中建立一個預定規則來引用 Lambda 函式.
- C. 配置執行亞馬遜 Linux 的 Amazon EC2 Spot 執行個體 的 Auto Scaling 群組(Auto Scaling group)。 配置例項上的 crontab 項來執行分析。
- D. 配置 AWS 資料同步任務來執行此任務。 配置一個 cron 表示式以在日程中執行任務。

**答案**
A


**詳解**
正確答案是 **A**。
- A：為任務建立容器。 使用 Amazon EventBridge 排程器來安排在亞馬遜彈性容器服務(Amazon ECS)叢集上作為 AWS Fargate 任務執行的任務。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置在 AWS Lambda 函式中執行的任務。 在 Amazon EventBridge 中建立一個預定規則來引用 Lambda 函式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置執行亞馬遜 Linux 的 Amazon EC2 Spot 執行個體 的 Auto Scaling 群組(Auto Scaling group)。 配置例項上的 crontab 項來執行分析 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 AWS 資料同步任務來執行此任務。 配置一個 cron 表示式以在日程中執行任務 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #898

**題目**
一家公司在AWS雲執行工作量. 公司希望集中收集安全資料,以評估整個公司的安全,並改善工作量保護. 在LEAST的開發努力下,哪一種解決辦法能滿足這些要求?

**選項**
- A. 在 AWS 湖形成中配置一個 資料湖(data lake)。 使用AWS Glue爬蟲將安全資料攝入資料湖(data lake).
- B. 配置 AWS Lambda 函式,以.csv格式收集安全資料. 上傳資料到 Amazon S3 桶中。
- C. 在 Amazon 安全配置 資料湖(data lake) 湖來收集安全資料. 上傳資料到 Amazon S3 桶中。
- D. 配置 AWS 資料庫(Database) 遷移服務(AWS DMS) 複寫(replication) 例項,將安全資料載入到 Amazon RDS 叢集中.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 Amazon 安全配置 資料湖(data lake) 湖來收集安全資料. 上傳資料到 Amazon S3 桶中 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 AWS 湖形成中配置一個 資料湖(data lake)。 使用AWS Glue爬蟲將安全資料攝入資料湖(data lake)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 AWS Lambda 函式,以.csv格式收集安全資料. 上傳資料到 Amazon S3 桶中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 AWS 資料庫(Database) 遷移服務(AWS DMS) 複寫(replication) 例項,將安全資料載入到 Amazon RDS 叢集中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #899

**題目**
一家公司正在向AWS雲中的VPC遷移5個前提應用. 每個應用程式目前部署在房地的孤立虛擬網路中,應同樣部署在AWS雲中。 應用需要達到共享服務 VPC. 所有申請必須能夠相互溝通. 如果遷移成功,公司將重複遷移過程,申請超過100項. LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 在應用VPC和共享服務VPC之間部署軟體VPN隧道. 在其子網中的應用VPC之間新增路由到共享服務VPC.
- B. 在應用軟體VPC和共享服務VPC之間部署VPC對等連線. 透過對等連線,將應用程式VPC在子網中的路由加入共享服務VPC.
- C. 在應用程式VPC和從應用程式VPC在其子網中的共享服務VPAdd路由到共享服務VPC和應用程式VPC之間的AWS Direct Connect上架連線. 將共享服務VPC子網的路由新增到應用程式VPC.
- D. 在過境閘道器和應用程式VPC以及共享服務VPC之間部署一個與協會的過境閘道器. 在其子網中的應用程式VPC和應用程式VPC之間增加透過中轉閘道器共享服務的路由.

**答案**
D


**詳解**
正確答案是 **D**。
- D：在過境閘道器和應用程式VPC以及共享服務VPC之間部署一個與協會的過境閘道器. 在其子網中的應用程式VPC和應用程式VPC之間增加透過中轉閘道器共享服務的路由。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在應用VPC和共享服務VPC之間部署軟體VPN隧道. 在其子網中的應用VPC之間新增路由到共享服務VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在應用軟體VPC和共享服務VPC之間部署VPC對等連線. 透過對等連線,將應用程式VPC在子網中的路由加入共享服務VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在應用程式VPC和從應用程式VPC在其子網中的共享服務VPAdd路由到共享服務VPC和應用程式VPC之間的AWS Direct Connect上架連線. 將共享服務VPC子網的路由新增到應用程式VPC。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #900

**題目**
一家公司希望使用亞馬遜彈性容器服務公司(Amazon ECS)在混合環境中執行其立體應用. 該應用程式目前執行在房地的集裝箱上。 公司需要一種單一的容器溶液,可以在一個上層,混合,或雲層環境中進行規模化. 公司必須在AWS雲執行新的應用容器,必須使用負載平衡器(load balancer)進行HTTP流量. 哪些行動組合將滿足這些要求?(選二.

**選項**
- A. 建立使用AWS Fargate發射型別的雲應用容器的ECS叢集. 使用 Amazon ECS 任何外部發射型別, 用於預設應用容器。
- B. 為雲端ECS服務設定應用程式負載平衡器(Application Load Balancer).
- C. 為雲端ECS服務設定網路負載平衡器(Network Load Balancer).
- D. 建立使用AWSFargate 啟動類型別的ECS叢集. 使用Fargate進行雲應用容器和前提應用容器.
- E. 建立使用Amazon EC2發射型別的雲應用容器ECS叢集. 使用 Amazon ECS AWS Fargate 啟動類型的任何地方,用於裝設應用容器.

**答案**
A,B



**詳解**
正確答案是 **A, B**。
- A：建立使用AWS Fargate發射型別的雲應用容器的ECS叢集. 使用 Amazon ECS 任何外部發射型別, 用於預設應用容器 。此選項符合題目條件，能有效滿足核心需求。
- B：為雲端ECS服務設定應用程式負載平衡器(Application Load Balancer)。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- C：為雲端ECS服務設定網路負載平衡器(Network Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立使用AWSFargate 啟動類型別的ECS叢集. 使用Fargate進行雲應用容器和前提應用容器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立使用Amazon EC2發射型別的雲應用容器ECS叢集. 使用 Amazon ECS AWS Fargate 啟動類型的任何地方,用於裝設應用容器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #901

**題目**
一家公司正在將其工作量轉移到AWS。 該公司在SQL Server例項上執行的關於前提關聯式資料庫中有敏感和關鍵的資料. 公司希望使用AWS雲來增加安全性,減少資料庫的營運開銷(operational overhead). 哪種解決辦法能滿足這些要求?

**選項**
- A. 將資料庫遷移到 Amazon EC2 例項。 為加密(encryption)使用 AWS Key Management Service(AWS KMS) AWS管理金鑰.
- B. 將資料庫遷移到 SQL 伺服器 DB 例項的多 AZ Amazon RDS。 為加密(encryption)使用 AWS Key Management Service(AWS KMS) AWS管理金鑰.
- C. 將資料移動到一個Amazon S3桶. 使用Amazon Macie來確保資料安全.
- D. 將資料庫遷移到 Amazon DynamoDB 表格。 使用Amazon CloudWatch Logs來確保資料安全.

**答案**
B


**詳解**
正確答案是 **B**。
- B：將資料庫遷移到 SQL 伺服器 DB 例項的多 AZ Amazon RDS。 為加密(encryption)使用 AWS Key Management Service(AWS KMS) AWS管理金鑰。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料庫遷移到 Amazon EC2 例項。 為加密(encryption)使用 AWS Key Management Service(AWS KMS) AWS管理金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料移動到一個Amazon S3桶. 使用Amazon Macie來確保資料安全。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料庫遷移到 Amazon DynamoDB 表格。 使用Amazon CloudWatch Logs來確保資料安全。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #902

**題目**
公司想將一個應用程式遷移到AWS. 公司希望增加當前應用程式的可用性. 公司希望在應用程式的架構中使用AWS WAF. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個Auto Scaling 群組(Auto Scaling group),包含多個 Amazon EC2 例項,在兩個可用區(Availability Zones)上託管應用程式. 配置一個應用程式負載平衡器(Application Load Balancer)(ALB),並將Auto Scaling 群組(Auto Scaling group)設定為目標. 連線一個WAF到 ALB.
- B. 建立包含多個 Amazon EC2 例項的叢集放置組,託管應用程式。 配置 應用程式負載平衡器(Application Load Balancer) 並設定 EC2 例項為目標。 連線一個WAF到放置組.
- C. 建立兩個 Amazon EC2 例項,透過兩個 可用區(Availability Zones) 託管應用程式。 配置EC2例項作為應用程式負載平衡器(Application Load Balancer)(ALB)的目標. 連線一個WAF到 ALB.
- D. 建立一個Auto Scaling 群組(Auto Scaling group),包含多個 Amazon EC2 例項,在兩個可用區(Availability Zones)上託管應用程式. 配置一個應用程式負載平衡器(Application Load Balancer)(ALB),並將Auto Scaling 群組(Auto Scaling group)設定為目標. 連線一個WAF到Auto Scaling 群組(Auto Scaling group).

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個Auto Scaling 群組(Auto Scaling group),包含多個 Amazon EC2 例項,在兩個可用區(Availability Zones)上託管應用程式. 配置一個應用程式負載平衡器(Application Load Balancer)(ALB),並將Auto Scaling 群組(Auto Scaling group)設定為目標. 連線一個WAF到 ALB。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立包含多個 Amazon EC2 例項的叢集放置組,託管應用程式。 配置 應用程式負載平衡器(Application Load Balancer) 並設定 EC2 例項為目標。 連線一個WAF到放置組。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立兩個 Amazon EC2 例項,透過兩個 可用區(Availability Zones) 託管應用程式。 配置EC2例項作為應用程式負載平衡器(Application Load Balancer)(ALB)的目標. 連線一個WAF到 ALB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個Auto Scaling 群組(Auto Scaling group),包含多個 Amazon EC2 例項,在兩個可用區(Availability Zones)上託管應用程式. 配置一個應用程式負載平衡器(Application Load Balancer)(ALB),並將Auto Scaling 群組(Auto Scaling group)設定為目標. 連線一個WAF到Auto Scaling 群組(Auto Scaling group)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #903

**題目**
一家公司在眾多應用程式存取的Amazon S3桶中管理一臺資料湖(data lake). S3 儲存桶(S3 bucket)包含每個應用程式獨有的字首. 公司希望將每個應用程式限制在自己的特定字首,並對每個字首下的物件進行顆粒控制. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 為每個應用程式建立專門的S3存取點和存取點政策.
- B. 建立一個 S3 Batch Operations 任務,為 S3 儲存桶(S3 bucket) 中的每個物件設定 ACL 許可權。
- C. 每個應用程式將 S3 儲存桶(S3 bucket) 中的物件複製到新的 S3 桶。 透過字首建立複寫(replication)規則.
- D. 每個應用程式將 S3 儲存桶(S3 bucket) 中的物件複製到新的 S3 桶。 為每個應用程式建立專門的S3存取點.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為每個應用程式建立專門的S3存取點和存取點政策。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個 S3 Batch Operations 任務,為 S3 儲存桶(S3 bucket) 中的每個物件設定 ACL 許可權 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：每個應用程式將 S3 儲存桶(S3 bucket) 中的物件複製到新的 S3 桶。 透過字首建立複寫(replication)規則。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：每個應用程式將 S3 儲存桶(S3 bucket) 中的物件複製到新的 S3 桶。 為每個應用程式建立專門的S3存取點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #904

**題目**
一家公司有一個客戶用來將影象上傳到Amazon S3桶的應用程式. 每天晚上,公司都會推出一個Amazon EC2 Spot Fleet,處理公司當天收到的所有影象. 每個影象的處理需要2分鐘,需要512 MB的記憶體. 一個解決方案架構師需要修改應用程式,在影象上傳時處理影象. 哪些變化將以符合成本效益的方式滿足這些要求?

**選項**
- A. 使用 S3 事件通知將帶有影象細節的訊息寫入一個亞馬遜簡單佇列服務(Amazon SQS)佇列. 配置 AWS Lambda 函式以讀取佇列中的訊息並處理影象。
- B. 使用 S3 事件通知將帶有影象細節的訊息寫入一個亞馬遜簡單佇列服務(Amazon SQS)佇列. 配置 EC2 保留例項從佇列中讀取訊息並處理影象。
- C. 使用 S3 事件通知釋出包含影象細節的郵件到一個亞馬遜簡單通知服務(Amazon SNS)主題. 在亞馬遜彈性容器服務(Amazon ECS)中配置一個集裝箱例項,以訂閱該話題並處理影象。
- D. 使用 S3 事件通知釋出包含影象細節的郵件到一個亞馬遜簡單通知服務(Amazon SNS)主題. 配置一個 AWS 彈性 Beanstalk 應用程式來訂閱話題並處理影象。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 S3 事件通知將帶有影象細節的訊息寫入一個亞馬遜簡單佇列服務(Amazon SQS)佇列. 配置 AWS Lambda 函式以讀取佇列中的訊息並處理影象 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 S3 事件通知將帶有影象細節的訊息寫入一個亞馬遜簡單佇列服務(Amazon SQS)佇列. 配置 EC2 保留例項從佇列中讀取訊息並處理影象 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 S3 事件通知釋出包含影象細節的郵件到一個亞馬遜簡單通知服務(Amazon SNS)主題. 在亞馬遜彈性容器服務(Amazon ECS)中配置一個集裝箱例項,以訂閱該話題並處理影象。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 S3 事件通知釋出包含影象細節的郵件到一個亞馬遜簡單通知服務(Amazon SNS)主題. 配置一個 AWS 彈性 Beanstalk 應用程式來訂閱話題並處理影象 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #905

**題目**
一家公司希望改進其混合應用的可用性和效能. 申請包括不同AWS地區基於Amazon EC2 執行個體的基於TCP的可靠工作量,以及基於房地的基於UDP的無狀態工作量。 設計師應該採取何種綜合行動來改進可用性和效能?(選二.

**選項**
- A. 使用 AWS 全球加速器建立加速器。 新增負載平衡器作為終點.
- B. 建立 Amazon CloudFront 分佈,其來源使用基於 Amazon Route 53 延遲(latency) 的路由來向負載平衡器請求路由.
- C. 在每個區域(Region)中配置兩個應用程式負載平衡器. 第一條將通向EC2端點,第二條將通向館內端點.
- D. 在每個區域(Region)中配置一個網路負載平衡器(Network Load Balancer),以解決EC2端點. 在每個 區域(Region) 中配置一個 網路負載平衡器(Network Load Balancer) , 將它通向預設終點。
- E. 在每個區域(Region)中配置一個網路負載平衡器(Network Load Balancer),以解決EC2端點. 在每個 區域(Region) 中配置一個 應用程式負載平衡器(Application Load Balancer) , 將它通向預設終點。

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：使用 AWS 全球加速器建立加速器。 新增負載平衡器作為終點。此選項符合題目條件，能有效滿足核心需求。
- D：在每個區域(Region)中配置一個網路負載平衡器(Network Load Balancer),以解決EC2端點. 在每個 區域(Region) 中配置一個 網路負載平衡器(Network Load Balancer) , 將它通向預設終點 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：建立 Amazon CloudFront 分佈,其來源使用基於 Amazon Route 53 延遲(latency) 的路由來向負載平衡器請求路由。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在每個區域(Region)中配置兩個應用程式負載平衡器. 第一條將通向EC2端點,第二條將通向館內端點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在每個區域(Region)中配置一個網路負載平衡器(Network Load Balancer),以解決EC2端點. 在每個 區域(Region) 中配置一個 應用程式負載平衡器(Application Load Balancer) , 將它通向預設終點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #906

**題目**
一家公司在Amazon EC2 執行個體和Amazon Elastic Block Store(Amazon EBS)上經營一個自我管理的微軟SQL伺服器. 每天拍攝EBS各卷的快照. 最近,公司的所有EBS快照在執行快照(snapshot)清理指令碼,刪除所有過期的EBS快照時意外被刪除. 一個解決方案架構師需要更新架構,以防止資料丟失,而不無限期保留EBS快照. 在LEAST的開發努力下,哪一種解決辦法能滿足這些要求?

**選項**
- A. 更改使用者的IAM 政策(IAM policy),拒絕EBS 快照(snapshot)刪除.
- B. 每天完成快照後,將EBS快照複製到另一個AWS 區域(Region).
- C. 在Recycle Bin中建立一條7天的EBS 快照(snapshot)保留規則,並對所有快照應用該規則.
- D. 將EBS快照複製到Amazon S3標準-不經常存取(S3 Standard-IA).

**答案**
A


**詳解**
正確答案是 **A**。
- A：更改使用者的IAM 政策(IAM policy),拒絕EBS 快照(snapshot)刪除。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：每天完成快照後,將EBS快照複製到另一個AWS 區域(Region)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Recycle Bin中建立一條7天的EBS 快照(snapshot)保留規則,並對所有快照應用該規則。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將EBS快照複製到Amazon S3標準-不經常存取(S3 Standard-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #907

**題目**
公司希望使用AWS CloudFormation堆疊在測試環境中應用. 公司將Cloud Formation模板儲存在Amazon S3桶中,阻礙公眾存取. 公司希望根據特定使用者建立測試環境的要求,允許CloudFormation存取S3 儲存桶(S3 bucket)中的模板. 解決辦法必須遵循安全最佳做法。 哪種解決辦法能滿足這些要求?

**選項**
- A. 為Amazon S3建立閘道器VPC 端點(VPC endpoint). 配置 CloudFormation 堆疊以使用 S3 物件 URL。
- B. 建立一個以S3 儲存桶(S3 bucket)為目標的Amazon API Gateway REST API. 配置 CloudFormation 堆疊以使用 API Gateway URL。
- C. 為模板物件建立預先簽名的 URL。 配置 CloudFormation 堆疊以使用預先簽名的 URL。
- D. 允許公眾存取S3 儲存桶(S3 bucket)中的模板物件. 在建立測試環境後遮蔽公眾存取.

**答案**
C


**詳解**
正確答案是 **C**。
- C：為模板物件建立預先簽名的 URL。 配置 CloudFormation 堆疊以使用預先簽名的 URL 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為Amazon S3建立閘道器VPC 端點(VPC endpoint). 配置 CloudFormation 堆疊以使用 S3 物件 URL 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個以S3 儲存桶(S3 bucket)為目標的Amazon API Gateway REST API. 配置 CloudFormation 堆疊以使用 API Gateway URL 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：允許公眾存取S3 儲存桶(S3 bucket)中的模板物件. 在建立測試環境後遮蔽公眾存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #908

**題目**
一家公司在AWS Organizations的一個組織內有執行的應用程式. 公司將應用程式的業務支援外包. 公司需要在不損害安全的情況下為外部支援工程師提供准入. 外部支援工程師需要存取AWS管理控制檯. 外部支援工程師還需要作業系統存取公司在私人子網中執行Amazon Linux的fieet SERV0042例項. 哪種解決辦法能夠最安全地滿足這些要求?

**選項**
- A. 確認在所有情況下安裝了 AWS Systems Manager 代理(SSM Agent)。 指定一個執行個體設定檔(instance profile),配有連線系統管理器的必要策略. 使用AWS IAM身份中心提供外部支援工程師控制檯存取. 使用系統管理器會話管理器來指定所需的許可權。
- B. 確認在所有情況下安裝了 AWS Systems Manager 代理(SSM Agent)。 指定一個執行個體設定檔(instance profile),配有連線系統管理器的必要策略. 使用系統管理器會話管理器,在每個AWS帳戶中向外部支援工程師提供IAM本地使用者憑證,用於控制檯存取.
- C. 確認所有例項都有一個安全群組(security group),只允許SSH從外部支援工程師的源 IP 地址範圍存取. 向外部支援工程師提供每個AWS帳戶的本地IAM使用者憑證,以便控制檯存取. 向每個外部支援工程師提供 SSH 金鑰對以登入應用程式例項。
- D. 在公共子網建立 bastion 主機. 設定 bastion 主機 安全群組(security group) 允許從外部工程師的 IP 地址範圍存取。 確保所有例項都有安全群組(security group)允許SSH從bastion主機存取. 向每個外部支援工程師提供 SSH 金鑰對以登入應用程式例項。 向工程師提供IAM本地帳戶使用者憑證,以便使用控制檯。

**答案**
A


**詳解**
正確答案是 **A**。
- A：確認在所有情況下安裝了 AWS Systems Manager 代理(SSM Agent)。 指定一個執行個體設定檔(instance profile),配有連線系統管理器的必要策略. 使用AWS IAM身份中心提供外部支援工程師控制檯存取. 使用系統管理器會話管理器來指定所需的許可權 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：確認在所有情況下安裝了 AWS Systems Manager 代理(SSM Agent)。 指定一個執行個體設定檔(instance profile),配有連線系統管理器的必要策略. 使用系統管理器會話管理器,在每個AWS帳戶中向外部支援工程師提供IAM本地使用者憑證,用於控制檯存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：確認所有例項都有一個安全群組(security group),只允許SSH從外部支援工程師的源 IP 地址範圍存取. 向外部支援工程師提供每個AWS帳戶的本地IAM使用者憑證,以便控制檯存取. 向每個外部支援工程師提供 SSH 金鑰對以登入應用程式例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在公共子網建立 bastion 主機. 設定 bastion 主機 安全群組(security group) 允許從外部工程師的 IP 地址範圍存取。 確保所有例項都有安全群組(security group)允許SSH從bastion主機存取. 向每個外部支援工程師提供 SSH 金鑰對以登入應用程式例項。 向工程師提供IAM本地帳戶使用者憑證,以便使用控制檯。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #909

**題目**
一家公司使用Amazon RDS用於PostgreSQL在我們東-1區域(Region)執行其應用. 公司還使用機器學習(ML)模型,根據近實時報告預測年度收入. 這些報告是透過PostgreSQL 資料庫(database)使用相同的RDS生成的。 資料庫(database)的效能在營業時間緩慢. 公司需要提高資料庫(database)的效能. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立跨區域(Region)讀取複製版. 配置從讀取的複製件生成的報告。
- B. 為 PostgreSQL 啟動多AZ DB例項部署 RDS。 配置將從備用資料庫(database)生成的報告。
- C. 使用 AWS 資料遷移服務(AWS DSMS),邏輯上覆制資料到一個新的資料庫(database). 配置將從新的資料庫(database)生成的報告。
- D. 在 us-east - 1 中建立一個可讀複製件。 配置將從可讀複製件生成的報告。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在 us-east - 1 中建立一個可讀複製件。 配置將從可讀複製件生成的報告 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立跨區域(Region)讀取複製版. 配置從讀取的複製件生成的報告 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為 PostgreSQL 啟動多AZ DB例項部署 RDS。 配置將從備用資料庫(database)生成的報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS 資料遷移服務(AWS DSMS),邏輯上覆制資料到一個新的資料庫(database). 配置將從新的資料庫(database)生成的報告。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #910

**題目**
一家公司在AWS雲中託管其多層次,公開的網路應用程式. 網路應用程式執行於Amazon EC2 執行個體,其資料庫(database)執行於Amazon RDS. 該公司預計,在即將到來的週末節日期間,銷售額將大幅增加。 解決方案架構師需要構建一個解決方案,以分析網路應用程式的效能,顆粒性不超過2分鐘. 解決方案設計師應如何滿足這一要求?

**選項**
- A. 傳送Amazon CloudWatch日誌至Amazon Redshift. 使用Amazon QuickS ght進行進一步的分析.
- B. 在所有 EC2 例項上啟用詳細的 監控(monitoring)。 使用Amazon CloudWatch度量衡進行進一步分析.
- C. 建立 AWS Lambda 函式從 Amazon CloudWatch Logs 獲取 EC2 日誌。 使用Amazon CloudWatch度量衡進行進一步分析.
- D. 將EC2日誌傳送到Amazon S3. 使用Amazon Redshift從S3 儲存桶(S3 bucket)獲取日誌處理原始資料,以便與Amazon QuickSight進行進一步分析.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在所有 EC2 例項上啟用詳細的 監控(monitoring)。 使用Amazon CloudWatch度量衡進行進一步分析。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：傳送Amazon CloudWatch日誌至Amazon Redshift. 使用Amazon QuickS ght進行進一步的分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS Lambda 函式從 Amazon CloudWatch Logs 獲取 EC2 日誌。 使用Amazon CloudWatch度量衡進行進一步分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將EC2日誌傳送到Amazon S3. 使用Amazon Redshift從S3 儲存桶(S3 bucket)獲取日誌處理原始資料,以便與Amazon QuickSight進行進一步分析。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #911

**題目**
一家公司執行一個儲存和分享照片的應用程式. 使用者將照片上傳到Amazon S3桶. 每天,使用者上傳大約150張照片. 公司希望設計一個解決方案,建立每張新照片的縮圖,並將縮圖儲存在第二張S3 儲存桶(S3 bucket)中. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置一個 Amazon EventBridge 預定規則,以便在一個長期執行的 Amazon EMR 叢集上每分鐘引用一個指令碼. 配置指令碼為沒有縮圖的照片生成縮圖。 配置指令碼將縮圖上傳到第二個 S3 儲存桶(S3 bucket)。
- B. 配置 Amazon EventBridge 預定規則,在總是在執行的記憶體最佳化的 Amazon EC2 例項上每分鐘引用一個指令碼. 配置指令碼為沒有縮圖的照片生成縮圖。 配置指令碼將縮圖上傳到第二個 S3 儲存桶(S3 bucket)。
- C. 配置 S3 事件通知以引用 AWS Lambda 函式,每次使用者嚮應用程式上傳新照片. 配置 Lambda 函式生成縮圖並將縮圖上傳到第二個 S3 儲存桶(S3 bucket)。
- D. 配置 S3 Storage Lens 以引用 AWS Lambda 函式,每次使用者嚮應用程式上傳新照片. 配置 Lambda 函式生成縮圖,並將縮圖上傳到第二個 S3 儲存桶(S3 bucket)。

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置 S3 事件通知以引用 AWS Lambda 函式,每次使用者嚮應用程式上傳新照片. 配置 Lambda 函式生成縮圖並將縮圖上傳到第二個 S3 儲存桶(S3 bucket) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置一個 Amazon EventBridge 預定規則,以便在一個長期執行的 Amazon EMR 叢集上每分鐘引用一個指令碼. 配置指令碼為沒有縮圖的照片生成縮圖。 配置指令碼將縮圖上傳到第二個 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 Amazon EventBridge 預定規則,在總是在執行的記憶體最佳化的 Amazon EC2 例項上每分鐘引用一個指令碼. 配置指令碼為沒有縮圖的照片生成縮圖。 配置指令碼將縮圖上傳到第二個 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 S3 Storage Lens 以引用 AWS Lambda 函式,每次使用者嚮應用程式上傳新照片. 配置 Lambda 函式生成縮圖,並將縮圖上傳到第二個 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #912

**題目**
一家公司透過使用亞馬遜S3 Glacier Deep Archive儲存類,在Amazon S3桶中儲存了跨越多個字首的數百萬個物件. 公司需要刪除所有3年以上的資料,但必須保留的一個資料子集除外. 公司已經確定了必須保留的資料,並希望實施無伺服器解決方案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 S3 庫存來列出所有物件。 使用 AWS CLI 建立一個執行在 Amazon EC2 例項上的指令碼,從目錄列表中刪除物件.
- B. 使用 AWS 批次刪除3 年以上的物件, 但必須保留的資料除外。
- C. 提供一臺AWS Glue爬蟲,用於查詢3年以上的物體。 儲存舊物件的列表檔案。 建立指令碼以刪除表單中的物件。
- D. 啟用 S3 編目。 建立 AWS Lambda 函式來過濾和刪除物件。 用 S3 Batch Operations 啟動 Lambda 函式,透過使用目錄報告刪除物件。

**答案**
D


**詳解**
正確答案是 **D**。
- D：啟用 S3 編目。 建立 AWS Lambda 函式來過濾和刪除物件。 用 S3 Batch Operations 啟動 Lambda 函式,透過使用目錄報告刪除物件。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 S3 庫存來列出所有物件。 使用 AWS CLI 建立一個執行在 Amazon EC2 例項上的指令碼,從目錄列表中刪除物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS 批次刪除3 年以上的物件, 但必須保留的資料除外 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：提供一臺AWS Glue爬蟲,用於查詢3年以上的物體。 儲存舊物件的列表檔案。 建立指令碼以刪除表單中的物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #913

**題目**
一家公司正在AWS上建立一個應用程式. 該應用程式使用多個AWS Lambda功能,從一個單一的Amazon S3桶中獲取敏感資料進行處理. 公司必須確保只有經授權的Lambda功能才能存取資料. 解決辦法必須符合最小權限(least privilege)原則。 哪種解決辦法能滿足這些要求?

**選項**
- A. 透過一個共享的IAM角色,給予所有LOSS0001功能的全部存取許可權.
- B. 配置 Lambda 函式在一個 VPC 內執行。 配置一個儲存桶政策(bucket policy),以根據Lambda函式的VPC 端點(VPC endpoint) IP地址授予存取許可權.
- C. 為每個Lambda函式建立單個IAM角色. 允許IAM角色進入S3 儲存桶(S3 bucket). 將每個IAM角色指定為Lambda執行角色,用於相應的Lambda功能.
- D. 配置一個 儲存桶政策(bucket policy), 根據其功能 ARNs 允許存取 Lambda 函式。

**答案**
C


**詳解**
正確答案是 **C**。
- C：為每個Lambda函式建立單個IAM角色. 允許IAM角色進入S3 儲存桶(S3 bucket). 將每個IAM角色指定為Lambda執行角色,用於相應的Lambda功能。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過一個共享的IAM角色,給予所有LOSS0001功能的全部存取許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置 Lambda 函式在一個 VPC 內執行。 配置一個儲存桶政策(bucket policy),以根據Lambda函式的VPC 端點(VPC endpoint) IP地址授予存取許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個 儲存桶政策(bucket policy), 根據其功能 ARNs 允許存取 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #914

**題目**
一家公司開發了非生產應用軟體,由公司每個業務單位的多個微服務組成. 單一的開發團隊維持所有微服務. 當前架構使用靜態網路前端和基於Java的後端,包含應用程式邏輯. 該架構還使用了公司在Amazon EC2例項上主機的MySQL 資料庫(database). 公司需要確保該應用程式是安全的,在全球都可以使用。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用Amazon CloudFront和AWS Amplify來託管靜態網路前端. 重置微服務使用AWS Lambda功能,微服務使用Amazon API Gateway存取. 將 MySQL 資料庫(database) 移動到 Amazon EC2 保留例項。
- B. 使用Amazon CloudFront和Amazon S3託管靜態網路前端. 重置微服務使用AWS Lambda功能,微服務使用Amazon API Gateway存取. 將 MySQL 資料庫(database) 移動到 Amazon RDS 用於 MySQL.
- C. 使用Amazon CloudFront和Amazon S3託管靜態網路前端. 重置微服務,以使用在網路負載平衡器(Network Load Balancer)後面的目標群體中的AWS Lambda功能. 將MySQL 資料庫(database)遷移到Amazon RDS,用於MySQL.
- D. 使用Amazon S3託管靜態網路前端. 重置微服務,以使用在應用程式負載平衡器(Application Load Balancer)後面的目標群體中的AWS Lambda功能. 將 MySQL 資料庫(database) 移動到一個 Amazon EC2 保留例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用Amazon CloudFront和Amazon S3託管靜態網路前端. 重置微服務使用AWS Lambda功能,微服務使用Amazon API Gateway存取. 將 MySQL 資料庫(database) 移動到 Amazon RDS 用於 MySQL。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用Amazon CloudFront和AWS Amplify來託管靜態網路前端. 重置微服務使用AWS Lambda功能,微服務使用Amazon API Gateway存取. 將 MySQL 資料庫(database) 移動到 Amazon EC2 保留例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon CloudFront和Amazon S3託管靜態網路前端. 重置微服務,以使用在網路負載平衡器(Network Load Balancer)後面的目標群體中的AWS Lambda功能. 將MySQL 資料庫(database)遷移到Amazon RDS,用於MySQL。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon S3託管靜態網路前端. 重置微服務,以使用在應用程式負載平衡器(Application Load Balancer)後面的目標群體中的AWS Lambda功能. 將 MySQL 資料庫(database) 移動到一個 Amazon EC2 保留例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #915

**題目**
一個電子遊戲公司正在向其全球使用者部署一個新的遊戲應用程式。 公司需要一個解決方案,提供接近實時的評審和對玩家的排名. 一個解決方案架構師必須設計一個解決方案,以提供快速存取資料的機會. 解決方案還必須確保在公司重新啟動應用程式時,資料在磁碟上持續存在。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 配置一個 Amazon CloudFront 分散式,以 Amazon S3 桶作為來源. 在S3 儲存桶(S3 bucket)中儲存玩家資料.
- B. 在多個 AWS 區域建立 Amazon EC2 例項。 在 EC2 例項中儲存玩家資料。 配置帶有地理定位記錄的Amazon Route 53,以引導使用者到最近的EC2例項.
- C. 部署一個Amazon ElastiCache 為雷迪斯塵埃器。 將玩家資料儲存在 ElastiCache 叢集中。
- D. 部署一臺Amazon ElastiCache型噴霧器 將玩家資料儲存在 ElastiCache 叢集中。

**答案**
C


**詳解**
正確答案是 **C**。
- C：部署一個Amazon ElastiCache 為雷迪斯塵埃器。 將玩家資料儲存在 ElastiCache 叢集中 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置一個 Amazon CloudFront 分散式,以 Amazon S3 桶作為來源. 在S3 儲存桶(S3 bucket)中儲存玩家資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在多個 AWS 區域建立 Amazon EC2 例項。 在 EC2 例項中儲存玩家資料。 配置帶有地理定位記錄的Amazon Route 53,以引導使用者到最近的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署一臺Amazon ElastiCache型噴霧器 將玩家資料儲存在 ElastiCache 叢集中 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #916

**題目**
一家公司正在AWS上設計一個處理敏感資料的應用程式. 應用程式為多個客戶儲存和處理財務資料。 為了滿足合規(compliance)的要求,每個客戶的資料必須在休息時單獨加密,使用安全集中的金鑰管理解決方案. 公司希望使用AWS Key Management Service(AWS KMS)來實施加密(encryption). 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 為每個客戶生成一個獨特的加密(encryption)金鑰. 把鑰匙放在Amazon S3桶裡 啟用伺服器側 加密(encryption)。
- B. 在AWS環境中部署硬體安全裝置,安全儲存客戶提供的加密(encryption)金鑰. 將安全器械與AWS KMS整合,以加密應用程式中的敏感資料.
- C. 建立一個單獨的 AWS KMS 金鑰來加密整個應用程式的所有敏感資料.
- D. 為每個客戶的資料建立單獨的 AWS KMS 金鑰,這些金鑰具有顆粒存取控制(access control) 和登入功能.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為每個客戶生成一個獨特的加密(encryption)金鑰. 把鑰匙放在Amazon S3桶裡 啟用伺服器側 加密(encryption) 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在AWS環境中部署硬體安全裝置,安全儲存客戶提供的加密(encryption)金鑰. 將安全器械與AWS KMS整合,以加密應用程式中的敏感資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個單獨的 AWS KMS 金鑰來加密整個應用程式的所有敏感資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為每個客戶的資料建立單獨的 AWS KMS 金鑰,這些金鑰具有顆粒存取控制(access control) 和登入功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #917

**題目**
公司需要設計一個具有彈性的網路應用程式來處理客戶訂單. 網路應用程式必須自動處理網路流量和應用程式使用量的增加而不影響客戶體驗或失去客戶訂單. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用NAT閘道器管理網路流量. 使用 Amazon EC2 自動縮放組接收,處理和儲存已處理的客戶訂單. 使用 AWS Lambda 函式捕獲和儲存未處理的命令.
- B. 使用網路負載平衡器(Network Load Balancer)(NLB)管理網路流量。 使用應用程式負載平衡器(Application Load Balancer)接收來自NLUS Amazon Redshift的客戶訂單,並配有多AZ部署以儲存未經處理和處理的客戶訂單.
- C. 使用一個Gateway 負載平衡器(Load Balancer)(GWLB)來管理網路流量. 使用亞馬遜彈性容器服務(Amazon ECS)接收和處理客戶訂單. 使用GWLB捕捉和儲存未處理的命令. 使用Amazon DynamoDB儲存已處理的客戶訂單.
- D. 使用應用程式負載平衡器(Application Load Balancer)管理網路流量. 使用 Amazon EC2 自動縮放組來接收和處理客戶訂單. 使用亞馬遜簡易佇列服務(Amazon SQS)儲存未處理的命令. 使用帶有多AZ部署的Amazon RDS儲存已處理的客戶訂單.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用應用程式負載平衡器(Application Load Balancer)管理網路流量. 使用 Amazon EC2 自動縮放組來接收和處理客戶訂單. 使用亞馬遜簡易佇列服務(Amazon SQS)儲存未處理的命令. 使用帶有多AZ部署的Amazon RDS儲存已處理的客戶訂單。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用NAT閘道器管理網路流量. 使用 Amazon EC2 自動縮放組接收,處理和儲存已處理的客戶訂單. 使用 AWS Lambda 函式捕獲和儲存未處理的命令。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用網路負載平衡器(Network Load Balancer)(NLB)管理網路流量。 使用應用程式負載平衡器(Application Load Balancer)接收來自NLUS Amazon Redshift的客戶訂單,並配有多AZ部署以儲存未經處理和處理的客戶訂單。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用一個Gateway 負載平衡器(Load Balancer)(GWLB)來管理網路流量. 使用亞馬遜彈性容器服務(Amazon ECS)接收和處理客戶訂單. 使用GWLB捕捉和儲存未處理的命令. 使用Amazon DynamoDB儲存已處理的客戶訂單。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #918

**題目**
一家公司正在使用AWS DataSync將數百萬個檔案從一個premies系統遷移到AWS. 檔案平均大小為10 KB. 公司希望使用Amazon S3進行檔案儲存. 遷移後的第一年,將一兩次查閱這些檔案,必須立即提供。 1年後,檔案必須至少存檔7年. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用歸檔工具將檔案分組為大物件。 使用資料同步來遷移物件。 將物件儲存在 S3 Glacier Instant Retrieval 中第一年。 使用生命週期配置在1年後將檔案轉換為S3 Glacier Deep Archive,保留期為7年.
- B. 使用歸檔工具將檔案分組為大物件。 使用DataSync將物件複製到S3標準-不經常存取(S3 Standard-IA). 使用生命週期配置在1年後將檔案轉換為S3 Glacier Instant Retrieval,保留期為7年.
- C. 配置檔案的目的地儲存類為 S3 Glacier Instant Retrieval. 使用生命週期政策(lifecycle policy)在1年後將檔案轉換為S3 Glacier Flexible Retrieval,保留期為7年.
- D. 配置一個資料同步任務,將檔案傳輸到 S3 標準-不頻繁存取(S3 Standard-IA). 使用生命週期配置在1年後將檔案轉換為S3 Deep Archive,保留期為7年.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用歸檔工具將檔案分組為大物件。 使用DataSync將物件複製到S3標準-不經常存取(S3 Standard-IA). 使用生命週期配置在1年後將檔案轉換為S3 Glacier Instant Retrieval,保留期為7年。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用歸檔工具將檔案分組為大物件。 使用資料同步來遷移物件。 將物件儲存在 S3 Glacier Instant Retrieval 中第一年。 使用生命週期配置在1年後將檔案轉換為S3 Glacier Deep Archive,保留期為7年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置檔案的目的地儲存類為 S3 Glacier Instant Retrieval. 使用生命週期政策(lifecycle policy)在1年後將檔案轉換為S3 Glacier Flexible Retrieval,保留期為7年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置一個資料同步任務,將檔案傳輸到 S3 標準-不頻繁存取(S3 Standard-IA). 使用生命週期配置在1年後將檔案轉換為S3 Deep Archive,保留期為7年。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #919

**題目**
一家公司最近進行了Amazon EC2記憶體最佳化Linux例項的升降和轉移遷移,以完成Oracle 資料庫(database)工作。 EC2 Linux例項使用1 TB 提供 IOPS SSD(io1) EBS 容積 64,000 IOPS. 遷移後的資料庫(database)儲存效能比上層的資料庫(database)的效能要慢. 哪個解決方案能改善儲存效能?

**選項**
- A. 增加更多IOPS SSD(io1)的EBS 磁碟區. 使用OS命令建立邏輯卷管理(LVM)條紋.
- B. 將提供IOPS SSD(io1)的EBS體積增加到超過64,000 IOPS.
- C. 將"提供IOPS SSD(io1)"的EBS 磁碟區增加到2 TB.
- D. 將 EC2 Linux 例項改為儲存最佳化例項型別。 不要更改 IOPS SSD(io1) 的 EBS 磁碟區。

**答案**
A


**詳解**
正確答案是 **A**。
- A：增加更多IOPS SSD(io1)的EBS 磁碟區. 使用OS命令建立邏輯卷管理(LVM)條紋。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將提供IOPS SSD(io1)的EBS體積增加到超過64,000 IOPS。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將"提供IOPS SSD(io1)"的EBS 磁碟區增加到2 TB。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 EC2 Linux 例項改為儲存最佳化例項型別。 不要更改 IOPS SSD(io1) 的 EBS 磁碟區 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #920

**題目**
一家公司正在從一個單一的架構遷移到一個在Amazon EC2上託管的網路應用程式,一個沒有伺服器的微服務架構. 公司希望使用支援事件驅動,鬆散組合的架構的AWS服務. 公司希望使用出版/訂閱(pub/sub)模式. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置 Amazon API Gateway REST API 以引用 AWS Lambda 函式,將事件釋出給亞馬遜簡易佇列服務(Amazon SQS)佇列. 配置一個或多個訂閱者從 SQS 佇列讀取事件。
- B. 配置 Amazon API Gateway REST API 以引用 AWS Lambda 函式,將事件釋出給亞馬遜簡單通知服務(Amazon SNS)主題. 配置一個或多個訂閱者接收來自 SNS 主題的事件.
- C. 配置一個 Amazon API Gateway WebSocket API ,用於寫入 Amazon Kinesis Data Streams 中的資料流,並帶有增強的扇形輸出. 配置一個或多個使用者接收資料流中的事件。
- D. 配置 Amazon API Gateway HTTP API 以引用 AWS Lambda 函式,該函式釋出事件給亞馬遜簡易通知服務(Amazon SNS)主題. 配置一個或多個訂閱者以接收來自該主題的事件。

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置 Amazon API Gateway REST API 以引用 AWS Lambda 函式,將事件釋出給亞馬遜簡單通知服務(Amazon SNS)主題. 配置一個或多個訂閱者接收來自 SNS 主題的事件。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 Amazon API Gateway REST API 以引用 AWS Lambda 函式,將事件釋出給亞馬遜簡易佇列服務(Amazon SQS)佇列. 配置一個或多個訂閱者從 SQS 佇列讀取事件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個 Amazon API Gateway WebSocket API ,用於寫入 Amazon Kinesis Data Streams 中的資料流,並帶有增強的扇形輸出. 配置一個或多個使用者接收資料流中的事件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon API Gateway HTTP API 以引用 AWS Lambda 函式,該函式釋出事件給亞馬遜簡易通知服務(Amazon SNS)主題. 配置一個或多個訂閱者以接收來自該主題的事件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #921

**題目**
一家公司最近將單體申請遷移到Amazon EC2和Amazon RDS。 該應用程式有緊密結合的模組. 應用程式的現有設計使應用程式只能執行在單一EC2例項上. 在使用高峰期,該公司注意到EC2的CPU利用率很高。 CPU的高利用率對應Amazon RDS上對讀請求的退化效能. 公司希望降低CPU的高利用率,提高閱讀請求效能. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將 EC2 例項縮放為 EC2 例項型別, 其CPU 容量更大。 配置一個最小和最大尺寸為1的Auto Scaling 群組(Auto Scaling group). 配置讀取請求的 RDS 複製件。
- B. 將 EC2 例項縮放為 EC2 例項型別, 其CPU 容量更大。 配置一個最小和最大尺寸為1的Auto Scaling 群組(Auto Scaling group). 新增一個讀取的RDS複製,並將所有讀取/寫入流量重定向到複製.
- C. 配置一個最小尺寸為1,最大尺寸為2的Auto Scaling 群組(Auto Scaling group). 將 RDS DB 例項調整為具有更多 CPU 能力的例項型別。
- D. 將 EC2 例項縮放為 EC2 例項型別, 其CPU 容量更大。 配置一個最小和最大尺寸為1的Auto Scaling 群組(Auto Scaling group). 將 RDS DB 例項調整為具有更多 CPU 能力的例項型別。

**答案**
B


**詳解**
正確答案是 **B**。
- B：將 EC2 例項縮放為 EC2 例項型別, 其CPU 容量更大。 配置一個最小和最大尺寸為1的Auto Scaling 群組(Auto Scaling group). 新增一個讀取的RDS複製,並將所有讀取/寫入流量重定向到複製。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將 EC2 例項縮放為 EC2 例項型別, 其CPU 容量更大。 配置一個最小和最大尺寸為1的Auto Scaling 群組(Auto Scaling group). 配置讀取請求的 RDS 複製件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個最小尺寸為1,最大尺寸為2的Auto Scaling 群組(Auto Scaling group). 將 RDS DB 例項調整為具有更多 CPU 能力的例項型別 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將 EC2 例項縮放為 EC2 例項型別, 其CPU 容量更大。 配置一個最小和最大尺寸為1的Auto Scaling 群組(Auto Scaling group). 將 RDS DB 例項調整為具有更多 CPU 能力的例項型別 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #922

**題目**
公司需要允許一組開發人員進入公司的AWS資源. 公司必須保持資源高度安全. 該公司需要一個存取控制(access control)解決方案,防止未經授權存取敏感資料. 哪種解決辦法能滿足這些要求?

**選項**
- A. 與團隊其他成員共享每個開發團隊成員的IAM使用者資格,簡化存取管理,精簡開發工作流程.
- B. 根據最小權限(least privilege)原則定義具有精細許可權的IAM角色. 向每個開發者指派一個IAM角色.
- C. 建立IAM存取金鑰,以授予程式存取 AWS 資源. 僅允許開發者透過使用存取金鑰的API呼叫與AWS資源互動.
- D. 建立 AWS 認知使用者池。 使用使用者池授權開發者存取 AWS 資源。

**答案**
B


**詳解**
正確答案是 **B**。
- B：根據最小權限(least privilege)原則定義具有精細許可權的IAM角色. 向每個開發者指派一個IAM角色。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：與團隊其他成員共享每個開發團隊成員的IAM使用者資格,簡化存取管理,精簡開發工作流程。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立IAM存取金鑰,以授予程式存取 AWS 資源. 僅允許開發者透過使用存取金鑰的API呼叫與AWS資源互動。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 AWS 認知使用者池。 使用使用者池授權開發者存取 AWS 資源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #923

**題目**
一家公司在Amazon EC2例項上託管了獨家網路應用程式. 應用程式使用者最近報告在特定時間表現不佳。 對Amazon CloudWatch度量衡的分析表明,CPU在效能不佳期間的利用率為100%. 公司希望解決這一效能問題,改善應用程式的可用性. 哪些步驟的組合將以符合成本效益的方式滿足這些要求?(選二.

**選項**
- A. 使用 AWS 計算最佳化器獲取例項型別垂直縮放的推薦。
- B. 從網路伺服器建立一個亞馬遜機器影象(AMI). 在新的發射模板中參考AMI.
- C. 建立 Auto Scaling 群組(Auto Scaling group) 和 應用程式負載平衡器(Application Load Balancer) 垂直縮放。
- D. 使用 AWS 計算最佳化器以獲得對例項型別進行水平縮放的推薦。
- E. 建立 Auto Scaling 群組(Auto Scaling group) 和 應用程式負載平衡器(Application Load Balancer) 橫向縮放。

**答案**
B,E



**詳解**
正確答案是 **B, E**。
- B：從網路伺服器建立一個亞馬遜機器影象(AMI). 在新的發射模板中參考AMI。此選項符合題目條件，能有效滿足核心需求。
- E：建立 Auto Scaling 群組(Auto Scaling group) 和 應用程式負載平衡器(Application Load Balancer) 橫向縮放 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用 AWS 計算最佳化器獲取例項型別垂直縮放的推薦 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Auto Scaling 群組(Auto Scaling group) 和 應用程式負載平衡器(Application Load Balancer) 垂直縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 計算最佳化器以獲得對例項型別進行水平縮放的推薦 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #924

**題目**
一家公司在AWS雲執行其所有的業務應用. 公司使用AWS Organizations管理多個AWS帳戶. 一個解決方案架構師需要審查給予IAM使用者的所有許可權,以確定哪些IAM使用者擁有比要求更多的許可權. LEAST的行政間接費用將滿足這些要求的哪一種解決辦法?

**選項**
- A. 使用網路存取分析器來審查公司AWS帳戶中的所有存取許可權.
- B. 建立 AWS 雲表提醒, 當 IAM 使用者在 AWS 帳戶中建立或修改資源時啟用。
- C. 使用 AWS 身份和存取管理(IAM)存取分析器來審查公司的所有資源和帳戶.
- D. 利用亞馬遜巡視員發現現有IAM政策中的弱點.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用 AWS 身份和存取管理(IAM)存取分析器來審查公司的所有資源和帳戶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用網路存取分析器來審查公司AWS帳戶中的所有存取許可權。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS 雲表提醒, 當 IAM 使用者在 AWS 帳戶中建立或修改資源時啟用 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：利用亞馬遜巡視員發現現有IAM政策中的弱點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #925

**題目**
一家公司需要為監管合規(compliance)實施新的資料保留政策(retention policy). 作為這項政策的一部分,必須保護存放在Amazon S3桶中的敏感檔案在固定時間內不被刪除或修改。 哪種解決辦法能滿足這些要求?

**選項**
- A. 在所需的物件上啟用S3 Object Lock,並啟用治理模式.
- B. 在所需的物件上啟用S3 Object Lock,並啟用合規(compliance)模式.
- C. 在S3 儲存桶(S3 bucket)上啟用版本. 設定一個 生命週期政策(lifecycle policy) 來刪除指定週期後的物件。
- D. 在保留期內配置一個S3 生命週期政策(Lifecycle policy)來轉換物件到S3 Glacier Flexible Retrieval.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在所需的物件上啟用S3 Object Lock,並啟用合規(compliance)模式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在所需的物件上啟用S3 Object Lock,並啟用治理模式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在S3 儲存桶(S3 bucket)上啟用版本. 設定一個 生命週期政策(lifecycle policy) 來刪除指定週期後的物件 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在保留期內配置一個S3 生命週期政策(Lifecycle policy)來轉換物件到S3 Glacier Flexible Retrieval。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #926

**題目**
一家公司在集裝箱上執行其客戶網上應用程式。 工作量在AWS Fargate上使用亞馬遜彈性容器服務(Amazon ECS). 網路應用是資源密集型的. 網路應用程式需要每週7天、每天24小時供客戶使用。 該公司預計該應用程式將經歷高速流量的短暫暴發。 工作量必須很大。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置帶有 Fargate 的 ECS 容量提供者。 使用第三方工具進行負載測試。 在Amazon CloudWatch中正確處理遠門任務.
- B. 配置一個裝有 Fargate 的 ECS 容量提供者,用於穩定狀態和 Fargate Spot 用於爆破流量。
- C. 配置一個帶有 Fargate Spot 的ECS 容量提供者,用於穩定狀態和 Fargate 用於爆破流量.
- D. 配置帶有 Fargate 的 ECS 容量提供者。 使用 AWS 計算最佳化器對遠門任務進行正確化。

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置一個帶有 Fargate Spot 的ECS 容量提供者,用於穩定狀態和 Fargate 用於爆破流量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置帶有 Fargate 的 ECS 容量提供者。 使用第三方工具進行負載測試。 在Amazon CloudWatch中正確處理遠門任務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：配置一個裝有 Fargate 的 ECS 容量提供者,用於穩定狀態和 Fargate Spot 用於爆破流量 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置帶有 Fargate 的 ECS 容量提供者。 使用 AWS 計算最佳化器對遠門任務進行正確化 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #927

**題目**
一家公司正在AWS雲建造一個應用程式. 該應用程式在應用程式負載平衡器(Application Load Balancer)(ALB)後面的Amazon EC2例項中託管. 公司使用Amazon Route 53用於DNS. 該公司需要一個有管理的解決方案,主動參與,以發現DDoS襲擊。 哪種解決辦法能滿足這些要求?

**選項**
- A. 啟用 AWS Config。 配置一個檢測 DDoS 攻擊的 AWS Config 管理規則。
- B. 在ALCreate上啟用 AWS WAF 的 AWS WAF 網路ACL,其規則用於檢測和防止 DDoS 攻擊. 將ACL網路與ALB聯絡.
- C. 在Amazon S3桶中儲存ALB存取日誌. 配置 Amazon GuardDuty 來檢測和採取針對 DDoS 攻擊的自動預防行動.
- D. 訂閱至AWS Shield高階. 配置53路的託管區域. 新增 ALB 資源作為保護資源.

**答案**
D


**詳解**
正確答案是 **D**。
- D：訂閱至AWS Shield高階. 配置53路的託管區域. 新增 ALB 資源作為保護資源。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：啟用 AWS Config。 配置一個檢測 DDoS 攻擊的 AWS Config 管理規則 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在ALCreate上啟用 AWS WAF 的 AWS WAF 網路ACL,其規則用於檢測和防止 DDoS 攻擊. 將ACL網路與ALB聯絡。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon S3桶中儲存ALB存取日誌. 配置 Amazon GuardDuty 來檢測和採取針對 DDoS 攻擊的自動預防行動。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #928

**題目**
一個公司在一個VPC中託管一個影片流網路應用程式. 公司使用網路負載平衡器(Network Load Balancer)(NLB)處理TCP流量進行實時資料處理. 有人擅自試圖查閱申請。 公司希望透過最小的建築改變來改善應用安全,以防止未經授權的嘗試存取應用. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在NLB直接實施一系列AWS WAF規則,以過濾未經授權的流量。
- B. 以 安全群組(security group) 重新建立NLB, 只允許信任的 IP 地址。
- C. 與現有NLB平行部署第二個NLB,配置一個嚴格的IP地址,允許列表。
- D. 使用 AWS Shield 高階可以提供強化的DDoS保護,防止未經授權的存取嘗試.

**答案**
B


**詳解**
正確答案是 **B**。
- B：以 安全群組(security group) 重新建立NLB, 只允許信任的 IP 地址 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在NLB直接實施一系列AWS WAF規則,以過濾未經授權的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：與現有NLB平行部署第二個NLB,配置一個嚴格的IP地址,允許列表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS Shield 高階可以提供強化的DDoS保護,防止未經授權的存取嘗試。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #929

**題目**
一個保健公司正在開發一個AWS Lambda功能,向加密的亞馬遜簡易通知服務(Amazon SNS)釋出通知。 通知載有受保護的健康資訊(PHI)。 SNS主題使用AWS Key Management Service(AWS KMS)客戶管理加密(encryption)的金鑰. 公司必須確保申請獲得安全釋出SNS主題資訊的必要許可. 哪些步驟的組合將滿足這些要求?(選三.

**選項**
- A. 為 SNS 主題建立資源政策,允許 Lambda 函式釋出該主題的資訊.
- B. 使用伺服器側加密(encryption)使用AWS KMS金鑰(SSE-KMS)用於SNS話題,而不是客戶管理的金鑰.
- C. 為 SNS 主題使用的具有 AWS KMS 必要許可權的 加密(encryption) 鍵建立資源政策。
- D. 在 SNS 主題的資源政策中指定 Lambda 函式的 Amazon 資源名稱(ARN)。
- E. 將Amazon API Gateway HTTP API與SNS主題聯絡起來,透過使用API Gateway資源政策來控制對主題的存取.
- F. 配置 Lambda 執行角色, 該角色具有使用 AWS KMS 中客戶管理的金鑰所需的 IAM 許可權。

**答案**
A,D,F



**詳解**
正確答案是 **A, D**。
- A：為 SNS 主題建立資源政策,允許 Lambda 函式釋出該主題的資訊。此選項符合題目條件，能有效滿足核心需求。
- D：在 SNS 主題的資源政策中指定 Lambda 函式的 Amazon 資源名稱(ARN) 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：使用伺服器側加密(encryption)使用AWS KMS金鑰(SSE-KMS)用於SNS話題,而不是客戶管理的金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 SNS 主題使用的具有 AWS KMS 必要許可權的 加密(encryption) 鍵建立資源政策 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：將Amazon API Gateway HTTP API與SNS主題聯絡起來,透過使用API Gateway資源政策來控制對主題的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #930

**題目**
一家公司設有員工網路門戶. 員工登入到門戶檢視工資單細節. 公司正在開發一個新的系統,使僱員能夠上傳掃描檔案,以償還費用。 該公司執行一個程式,從檔案中提取基於文字的資料,並將所提取的資訊附在每位僱員的報銷身份證上,以供處理。 員工網路門戶需要100%的更新時間. 文件提取程式全天不經常按需執行. 公司希望建立一個可擴充套件和成本效益高的新系統,對現有入口網站進行最小的修改。 公司不想做任何程式碼修改. 哪些解決辦法將滿足這些要求?

**選項**
- A. 在Auto Scaling 群組(Auto Scaling group)中執行Amazon EC2 On-Demand Events,用於網路門戶. 使用 AWS Lambda 函式來執行文件提取程式. 當員工上傳新的報銷檔案時, 請啟動 Lambda 功能。
- B. 在Auto Scaling 群組(Auto Scaling group)中執行Amazon EC2 Spot 執行個體,用於網路門戶. 在 EC2 Spot 執行個體 上執行文件提取程式。 當員工上傳新的償還檔案時, 啟動文件提取程式例項。
- C. 購買一個執行網頁門戶和檔案提取程式的儲蓄計劃。 在Auto Scaling 群組(Auto Scaling group)中執行網路門戶和文件提取程式.
- D. 建立 Amazon S3 桶以託管網路門戶. 對現有功能使用Amazon API Gateway和AWS Lambda功能. 使用 Lambda 函式來執行文件提取程式. 在呼叫與新文件上傳關聯的API時, 啟動 Lambda 函式。

**答案**
A


**詳解**
正確答案是 **A**。
- A：在Auto Scaling 群組(Auto Scaling group)中執行Amazon EC2 On-Demand Events,用於網路門戶. 使用 AWS Lambda 函式來執行文件提取程式. 當員工上傳新的報銷檔案時, 請啟動 Lambda 功能 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在Auto Scaling 群組(Auto Scaling group)中執行Amazon EC2 Spot 執行個體,用於網路門戶. 在 EC2 Spot 執行個體 上執行文件提取程式。 當員工上傳新的償還檔案時, 啟動文件提取程式例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：購買一個執行網頁門戶和檔案提取程式的儲蓄計劃。 在Auto Scaling 群組(Auto Scaling group)中執行網路門戶和文件提取程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon S3 桶以託管網路門戶. 對現有功能使用Amazon API Gateway和AWS Lambda功能. 使用 Lambda 函式來執行文件提取程式. 在呼叫與新文件上傳關聯的API時, 啟動 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #931

**題目**
一家媒體公司在我們東-1區域(Region)擁有多帳戶AWS環境. 該公司在一個釋出效能度量的製作帳戶中有一個亞馬遜簡易通知服務(Amazon SNS)的主題. 公司在一個管理員帳戶中有一個AWS Lambda功能,用於處理和分析日誌資料. 管理員帳戶中的Lambda功能,在報告重要度量衡時,必須被生產帳戶中SNS專題的資訊所引用。 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 為Lambda函式建立IAM資源政策,允許Amazon SNS引用該函式.
- B. 在管理員帳戶中執行一個亞馬遜簡單佇列服務(Amazon SQS)佇列,以緩衝來自生產帳戶中SNS主題的資訊. 配置 SQS 佇列以引用 Lambda 函式。
- C. 為 SNS 主題建立 IAM 政策(IAM policy),允許 Lambda 函式訂閱該主題.
- D. 在生產帳戶中使用一個Amazon EventBridge規則來捕捉SNS主題通知. 配置 EventBridge 規則將通知轉發給管理員帳戶中的 Lambda 函式。
- E. 將效能指標儲存在生產帳戶中的Amazon S3桶中。 使用 Amazon Athena 來分析管理員帳戶中的度量衡.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：為Lambda函式建立IAM資源政策,允許Amazon SNS引用該函式。此選項符合題目條件，能有效滿足核心需求。
- C：為 SNS 主題建立 IAM 政策(IAM policy),允許 Lambda 函式訂閱該主題。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在管理員帳戶中執行一個亞馬遜簡單佇列服務(Amazon SQS)佇列,以緩衝來自生產帳戶中SNS主題的資訊. 配置 SQS 佇列以引用 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在生產帳戶中使用一個Amazon EventBridge規則來捕捉SNS主題通知. 配置 EventBridge 規則將通知轉發給管理員帳戶中的 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：將效能指標儲存在生產帳戶中的Amazon S3桶中。 使用 Amazon Athena 來分析管理員帳戶中的度量衡。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #932

**題目**
一家公司正在將一個應用程式從原地遷移到Amazon Elastic Kubernetes Service(Amazon EKS)。 公司必須使用自定義的子網,用於公司VPC中的艙位,以達到要求. 公司還需要確保播客能夠安全地在播客的VPC內部進行交流. 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 AWS Transit Gateway 直接管理亞馬遜 EKS 中Pod的自定義子網配置.
- B. 從公司的IP地址上建立AWS Direct Connect連線到EKS的 Pod.
- C. 為Kubernetes使用Amazon VPC CNI外掛. 在 VPC 叢集中定義自定義子網, 供Pod使用。
- D. 實施Kubernetes網路政策,該政策具有rob反無限規則,將rob放置限制在自定義子網內的特定節點.

**答案**
B


**詳解**
正確答案是 **B**。
- B：從公司的IP地址上建立AWS Direct Connect連線到EKS的 Pod。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 AWS Transit Gateway 直接管理亞馬遜 EKS 中Pod的自定義子網配置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為Kubernetes使用Amazon VPC CNI外掛. 在 VPC 叢集中定義自定義子網, 供Pod使用 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：實施Kubernetes網路政策,該政策具有rob反無限規則,將rob放置限制在自定義子網內的特定節點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #933

**題目**
一個公司託管一個電子商務應用程式,該應用程式將所有資料儲存在一個單一的Amazon RDS中,用於完全由AWS管理的MySQL DB例項. 公司需要降低單一故障點的風險. 哪些解決辦法將滿足這些要求?

**選項**
- A. 修改 RDS DB 例項以使用多AZ 部署。 在下一個維護視窗中應用修改。
- B. 將目前的資料庫(database)調整為新的Amazon DynamoDB多AZ部署. 使用具有多樣遷移策略的 AWS 資料庫(Database) 遷移服務(AWS DS),將當前 RDS DB 例項遷移到 DynamoDB 表格中.
- C. 在多AZ部署中建立一個新的 RDS DB 例項。 從最近的快照(snapshot)手動恢復來自現有RDS DB例項的資料.
- D. 在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 中配置 DB 例項,最小組大小為 3。 使用 Amazon Route 53 簡單路由來向所有 DB 例項分發請求。

**答案**
A


**詳解**
正確答案是 **A**。
- A：修改 RDS DB 例項以使用多AZ 部署。 在下一個維護視窗中應用修改 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將目前的資料庫(database)調整為新的Amazon DynamoDB多AZ部署. 使用具有多樣遷移策略的 AWS 資料庫(Database) 遷移服務(AWS DS),將當前 RDS DB 例項遷移到 DynamoDB 表格中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在多AZ部署中建立一個新的 RDS DB 例項。 從最近的快照(snapshot)手動恢復來自現有RDS DB例項的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 Amazon EC2 Auto Scaling 群組(Auto Scaling group) 中配置 DB 例項,最小組大小為 3。 使用 Amazon Route 53 簡單路由來向所有 DB 例項分發請求 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #934

**題目**
一家公司擁有多個Microsoft Windows SMB檔案伺服器和Linux NFS檔案伺服器,用於在promise環境下進行檔案共享. 作為公司AWS遷移計劃的一部分,公司希望整合AWS雲中的檔案伺服器. 公司需要管理好的AWS儲存服務,支援NFS和SMB的存取. 解決辦法必須能夠在協議之間共享。 該解決方案必須具有可用區(Availability Zone)級冗餘. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon FSx用於NetApp ONTAP儲存. 配置多程式存取。
- B. 建立兩個 Amazon EC2 例項。 對Windows SMB檔案伺服器存取使用一個EC2例項,對Linux NFS檔案伺服器存取使用一個EC2例項.
- C. Amazon FSx用於NetApp ONTAP用於SMB存取. 使用Amazon FSx用於Lustre用於NFS存取.
- D. 使用Amazon S3儲存器. 透過一個Amazon S3檔案閘道器存取Amazon S3.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon FSx用於NetApp ONTAP儲存. 配置多程式存取 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立兩個 Amazon EC2 例項。 對Windows SMB檔案伺服器存取使用一個EC2例項,對Linux NFS檔案伺服器存取使用一個EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：Amazon FSx用於NetApp ONTAP用於SMB存取. 使用Amazon FSx用於Lustre用於NFS存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用Amazon S3儲存器. 透過一個Amazon S3檔案閘道器存取Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #935

**題目**
一個軟體公司需要升級一個關鍵的網路應用程式. 該應用程式目前執行在公司在公共子網中託管的Amazon EC2單一例項上. EC2例項執行一個 MySQL 資料庫(database). 該應用程式的DNS記錄釋出在Amazon Route 53區. 一個解決方案架構設計師必須重新配置應用程式,使其具有可擴充套件性和高度可用性。 解決方案架構師還必須將 MySQL 改為 延遲(latency). 哪些解決方案組合將滿足這些要求?(選二.

**選項**
- A. 在第二個AWS 區域(Region)中啟動第二個EC2例項. 使用一條53路的故障路由政策,將交通轉向第二EC2 執行個體.
- B. 建立和配置一個Auto Scaling 群組(Auto Scaling group),在多個可用區(Availability Zones)中啟動私人EC2例項. 將例項新增到一個新的應用程式負載平衡器(Application Load Balancer)背後的目標群體中。
- C. 將資料庫(database)遷移到一個Amazon Aurora MySQL叢集. 在單獨的 可用區(Availability Zones) 中建立初級 DB 例項和閱讀器 DB 例項。
- D. 建立和配置一個 Auto Scaling 群組(Auto Scaling group) ,以便在多個 AWS 區域啟動私人 EC2 例項。 將例項新增到一個新的應用程式負載平衡器(Application Load Balancer)背後的目標群體中。
- E. 將資料庫(database)遷移到一個帶有跨區域(Region)的Amazon Aurora MySQL叢集讀取複製品.

**答案**
D,E



**詳解**
正確答案是 **D, E**。
- D：建立和配置一個 Auto Scaling 群組(Auto Scaling group) ,以便在多個 AWS 區域啟動私人 EC2 例項。 將例項新增到一個新的應用程式負載平衡器(Application Load Balancer)背後的目標群體中。此選項符合題目條件，能有效滿足核心需求。
- E：將資料庫(database)遷移到一個帶有跨區域(Region)的Amazon Aurora MySQL叢集讀取複製品。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在第二個AWS 區域(Region)中啟動第二個EC2例項. 使用一條53路的故障路由政策,將交通轉向第二EC2 執行個體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立和配置一個Auto Scaling 群組(Auto Scaling group),在多個可用區(Availability Zones)中啟動私人EC2例項. 將例項新增到一個新的應用程式負載平衡器(Application Load Balancer)背後的目標群體中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料庫(database)遷移到一個Amazon Aurora MySQL叢集. 在單獨的 可用區(Availability Zones) 中建立初級 DB 例項和閱讀器 DB 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #936

**題目**
一家公司運營著數千個AWS Lambda功能. 公司需要一個解決方案來安全地儲存所有Lambda功能使用的敏感資訊. 解決方案還必須管理敏感資訊的自動輪換。 哪些步驟與 " LEAST 營運開銷(operational overhead) " 組合可滿足這些要求?(選二.

**選項**
- A. 透過使用 Lambda@ Edge 檢索和建立敏感資訊來建立 HTTP 安全頭
- B. 建立獲取敏感資訊的 Lambda 層
- C. 在 AWS Secrets Manager 中儲存敏感資訊
- D. 在 AWS Systems Manager 引數儲存中儲存敏感資訊
- E. 建立一個具有吞吐量(throughput)專用功能的Lambda消費者,以檢索敏感資訊和建立環境變數

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：在 AWS Secrets Manager 中儲存敏感資訊。此選項符合題目條件，能有效滿足核心需求。
- D：在 AWS Systems Manager 引數儲存中儲存敏感資訊。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：透過使用 Lambda@ Edge 檢索和建立敏感資訊來建立 HTTP 安全頭。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立獲取敏感資訊的 Lambda 層。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立一個具有吞吐量(throughput)專用功能的Lambda消費者,以檢索敏感資訊和建立環境變數。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #937

**題目**
一家公司有一個內部應用程式,執行在Auto Scaling 群組(Auto Scaling group)的Amazon EC2 執行個體中。 EC2例項進行最佳化計算,並使用Amazon Elastic Block Store(Amazon EBS)卷. 該公司希望確定EC2、Auto Scaling 群組(Auto Scaling group)和EBS 磁碟區的各種成本最佳化。 哪種辦法能滿足這些要求?

**選項**
- A. 建立新的 AWS 成本和使用報告。 尋找EC2的成本建議報告,例如Auto Scaling 群組(Auto Scaling group)和EBS 磁碟區。
- B. 新建 Amazon CloudWatch 計費提示. 檢查EC2、Auto Scaling 群組(Auto Scaling group)和EBS 磁碟區的費用建議警戒狀態。
- C. 為EC2、Auto Scaling 群組(Auto Scaling group)和EBS 磁碟區的費用建議配置AWS計算最佳化器。
- D. 為 EC2 例項的成本建議配置 AWS 計算最佳化器。 建立新的 AWS 成本和使用報告。 搜尋報告以瞭解Auto Scaling 群組(Auto Scaling group)和EBS 磁碟區的費用建議。

**答案**
C


**詳解**
正確答案是 **C**。
- C：為EC2、Auto Scaling 群組(Auto Scaling group)和EBS 磁碟區的費用建議配置AWS計算最佳化器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立新的 AWS 成本和使用報告。 尋找EC2的成本建議報告,例如Auto Scaling 群組(Auto Scaling group)和EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：新建 Amazon CloudWatch 計費提示. 檢查EC2、Auto Scaling 群組(Auto Scaling group)和EBS 磁碟區的費用建議警戒狀態。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為 EC2 例項的成本建議配置 AWS 計算最佳化器。 建立新的 AWS 成本和使用報告。 搜尋報告以瞭解Auto Scaling 群組(Auto Scaling group)和EBS 磁碟區的費用建議。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #938

**題目**
一家公司正在經營一家媒體商店,該商店遍佈多個Amazon EC2公司,分佈在多個可用區(Availability Zones)公司的一家VPC公司。 公司希望有一個高效能的解決方案,在所有EC2例項之間共享資料,更傾向於將資料儲存在VPC內部. 一個解決方案設計師應該推薦什麼?

**選項**
- A. 建立 Amazon S3 桶並呼叫每個例項應用程式的服務 API
- B. 建立 Amazon S3 桶並配置所有例項以掛載磁碟區存取
- C. 配置一個 Amazon 彈性塊儲存器( Amazon EBS) 磁碟區並掛載到所有例項中
- D. 配置 Amazon 彈性檔案系統( Amazon EFS) 檔案系統, 並在所有情況下掛載

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置 Amazon 彈性檔案系統( Amazon EFS) 檔案系統, 並在所有情況下掛載。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon S3 桶並呼叫每個例項應用程式的服務 API。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon S3 桶並配置所有例項以掛載磁碟區存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個 Amazon 彈性塊儲存器( Amazon EBS) 磁碟區並掛載到所有例項中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #939

**題目**
一家公司使用Amazon RDS作為MySQL例項. 為了準備年終處理,公司增加了一個讀取的複製件,以容納公司報告工具的額外只讀查詢. 讀取的複製CPU使用率為60%,首例CPU使用率為60%. 年終活動完成後,讀取的複製品具有25%的恆定CPU使用率. 初級案例仍然有60%的CPU使用率。 公司希望正確使用資料庫(database),仍能為未來增長提供足夠的效能. 哪種解決辦法能滿足這些要求?

**選項**
- A. 刪除已讀的複製件 不更改初級
- B. 將已讀複製件大小調整到較小例項大小, 不更改初級例項
- C. 將已讀複製件大小調整為較大的例項大小 將主例項大小調整為較小例項大小
- D. 刪除讀取的複製件 將主例項縮放到更大的例項

**答案**
B


**詳解**
正確答案是 **B**。
- B：將已讀複製件大小調整到較小例項大小, 不更改初級例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：刪除已讀的複製件 不更改初級。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將已讀複製件大小調整為較大的例項大小 將主例項大小調整為較小例項大小。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：刪除讀取的複製件 將主例項縮放到更大的例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #940

**題目**
一家公司正在將其資料庫遷移到Amazon RDS,用於PostgreSQL。 該公司正在將其應用轉移到Amazon EC2 執行個體中。 公司希望最佳化長期工作量成本. 哪種解決辦法能夠以符合成本效益的方式滿足這一要求?

**選項**
- A. 用於 PostgreSQL 工作量的 Amazon RDS 的 On-Demand 例項。 購買1年的儲蓄計劃,不預留EC2方案。
- B. 採購保留例項,為期一年,對PostgreSQL工作量的Amazon RDS沒有預先選擇。 購買為期1年的EC2例項儲蓄計劃,但不預選EC2例項。
- C. PostgreSQL工作量的 " Amazon RDS " 部分前期選擇,為期1年。 購買為期一年的EC2 執行個體儲蓄計劃,同時為EC2 執行個體提供部分前期選擇。
- D. PostgreSQL工作量的 " Amazon RDS " 預先選擇,為期3年。 購買為期3年的EC2例項儲蓄計劃,並預留EC2例項。

**答案**
B


**詳解**
正確答案是 **B**。
- B：採購保留例項,為期一年,對PostgreSQL工作量的Amazon RDS沒有預先選擇。 購買為期1年的EC2例項儲蓄計劃,但不預選EC2例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：用於 PostgreSQL 工作量的 Amazon RDS 的 On-Demand 例項。 購買1年的儲蓄計劃,不預留EC2方案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：PostgreSQL工作量的 " Amazon RDS " 部分前期選擇,為期1年。 購買為期一年的EC2 執行個體儲蓄計劃,同時為EC2 執行個體提供部分前期選擇。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：PostgreSQL工作量的 " Amazon RDS " 預先選擇,為期3年。 購買為期3年的EC2例項儲蓄計劃,並預留EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #941

**題目**
一家公司正在使用Amazon Elastic Kubernetes Service(Amazon EKS)叢集. 公司必須確保Kubernetes服務帳戶在EKS叢集中,透過使用IAM角色進行服務帳戶(IRSA),可以安全地和顆粒地存取特定的AWS資源. 哪些解決方案組合將滿足這些要求?(選二.

**選項**
- A. 建立定義所需許可權的 IAM 政策(IAM policy) 將策略直接附加到EKS節點的IAM角色上.
- B. 在EKS叢集內實施網路政策,以防止Kubernetes服務帳戶存取特定的AWS服務.
- C. 修改 EKS 叢集的 IAM 角色,以包含每個 Kubernetes 服務帳戶的許可權。 確保IAM角色和Kubernetes角色之間的一對一對映.
- D. 定義包含必要許可權的IAM角色. 用IAM角色的Amazon資源Name(ARN)註釋Kubernetes服務帳戶.
- E. 在服務帳戶的IAM角色和OpenID連線(OIDC)身份提供者之間建立信任關係.

**答案**
D,E



**詳解**
正確答案是 **D, E**。
- D：定義包含必要許可權的IAM角色. 用IAM角色的Amazon資源Name(ARN)註釋Kubernetes服務帳戶。此選項符合題目條件，能有效滿足核心需求。
- E：在服務帳戶的IAM角色和OpenID連線(OIDC)身份提供者之間建立信任關係。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：建立定義所需許可權的 IAM 政策(IAM policy) 將策略直接附加到EKS節點的IAM角色上。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在EKS叢集內實施網路政策,以防止Kubernetes服務帳戶存取特定的AWS服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：修改 EKS 叢集的 IAM 角色,以包含每個 Kubernetes 服務帳戶的許可權。 確保IAM角色和Kubernetes角色之間的一對一對映。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #942

**題目**
一家公司定期向Amazon S3桶上傳機密資料進行分析. 公司的安全政策規定,物體必須加密到休養狀態。 公司每年必須自動輪換加密(encryption)鍵. 公司必須能夠透過使用AWS CloudTrail跟蹤金鑰旋轉. 該公司還必須儘量減少加密(encryption)鑰匙的成本。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用伺服器側的 加密(encryption) 與客戶提供的金鑰( SSE- C)
- B. 使用帶有 Amazon S3 管理的金鑰( SSE- S3) 的伺服器側 加密(encryption)
- C. 使用帶有 AWS KMS 金鑰( SSE- KMS) 的伺服器側 加密(encryption)
- D. 與客戶管理 AWS KMS 金鑰使用伺服器側 加密(encryption)

**答案**
D


**詳解**
正確答案是 **D**。
- D：與客戶管理 AWS KMS 金鑰使用伺服器側 加密(encryption)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用伺服器側的 加密(encryption) 與客戶提供的金鑰( SSE- C)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用帶有 Amazon S3 管理的金鑰( SSE- S3) 的伺服器側 加密(encryption)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用帶有 AWS KMS 金鑰( SSE- KMS) 的伺服器側 加密(encryption)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #943

**題目**
在過去3個月裡,一家公司向AWS轉移了幾個應用程式。 公司想知道每份申請的費用細目。 該公司希望收到一份定期報告,其中包括這一資訊。 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用 AWS 預算將過去三個月的資料下載到 .csv 檔案。 查查想要的資料
- B. 將 AWS 成本和使用報告裝入 Amazon RDS DB 例項。 執行 SQL 查詢以獲取想要的資訊。
- C. 標記所有 AWS 資源, 標記成本和應用程式名稱值的金鑰。 啟用成本分配標籤。 使用 Cost Explorer 獲取想要的資訊。
- D. 標記所有 AWS 資源, 標記成本和應用程式名稱值的金鑰。 使用 AWS 計費和成本管理控制檯 下載帳單 在過去三個月。 查查想要的資料

**答案**
C


**詳解**
正確答案是 **C**。
- C：標記所有 AWS 資源, 標記成本和應用程式名稱值的金鑰。 啟用成本分配標籤。 使用 Cost Explorer 獲取想要的資訊 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS 預算將過去三個月的資料下載到 .csv 檔案。 查查想要的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將 AWS 成本和使用報告裝入 Amazon RDS DB 例項。 執行 SQL 查詢以獲取想要的資訊 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：標記所有 AWS 資源, 標記成本和應用程式名稱值的金鑰。 使用 AWS 計費和成本管理控制檯 下載帳單 在過去三個月。 查查想要的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #944

**題目**
一家電子商務公司正在準備在AWS上部署一個網路應用程式,以確保為客戶提供持續服務。 該架構包括公司在Amazon EC2例項上主機的網路應用程式,Amazon RDS中關係型資料庫(database),以及公司在Amazon S3中儲存的靜態資產. 公司希望為應用程式設計一個堅固而具有彈性的架構. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在單一的可用區(Availability Zone)中部署Amazon EC2 執行個體。 在同一可用區(Availability Zone)中部署 RDS DB 例項。 使用 Amazon S3 並啟用版本以儲存靜態資產。
- B. 在Auto Scaling 群組(Auto Scaling group)中部署Amazon EC2 執行個體,跨越多個可用區(Availability Zones). 部署一個多AZ RDS DB例項。 使用Amazon CloudFront分配靜態資產.
- C. 在單一的可用區(Availability Zone)中部署Amazon EC2 執行個體。 在第二個可用區(Availability Zone)中部署 RDS DB 例項,用於跨AZ冗餘. 直接從EC2例項提供靜態資產。
- D. 使用AWS Lambda功能為網路應用程式服務. 使用 Amazon Aurora 無伺服器 v2 為 資料庫(database). 將靜態資產儲存在亞馬遜彈性檔案系統(Amazon EFS) One Zone-不經常存取(One Zone-IA)中.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在Auto Scaling 群組(Auto Scaling group)中部署Amazon EC2 執行個體,跨越多個可用區(Availability Zones). 部署一個多AZ RDS DB例項。 使用Amazon CloudFront分配靜態資產。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在單一的可用區(Availability Zone)中部署Amazon EC2 執行個體。 在同一可用區(Availability Zone)中部署 RDS DB 例項。 使用 Amazon S3 並啟用版本以儲存靜態資產 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在單一的可用區(Availability Zone)中部署Amazon EC2 執行個體。 在第二個可用區(Availability Zone)中部署 RDS DB 例項,用於跨AZ冗餘. 直接從EC2例項提供靜態資產。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Lambda功能為網路應用程式服務. 使用 Amazon Aurora 無伺服器 v2 為 資料庫(database). 將靜態資產儲存在亞馬遜彈性檔案系統(Amazon EFS) One Zone-不經常存取(One Zone-IA)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #945

**題目**
一家電子商務公司在多個AWS帳戶中執行多個內部應用程式. 公司使用AWS Organizations管理其AWS帳戶. 公司網路帳戶中的安全裝置必須檢查跨AWS帳戶的應用程式之間的相互作用。 哪種解決辦法能滿足這些要求?

**選項**
- A. 在網路帳戶中部署一個網路負載平衡器(Network Load Balancer)(NLB),向安全裝置傳送流量。 配置應用程式帳戶,透過在應用程式帳戶中使用一個介面VPC 端點(VPC endpoint)向NLB傳送流量.
- B. 在應用程式帳戶中部署一個應用程式負載平衡器(Application Load Balancer)(ALB),直接向安全裝置傳送流量。
- C. 在網路帳戶中部署一個負載平衡器(Load Balancer)閘道器(GWLB),向安全裝置傳送流量。 配置應用程式帳戶,透過在應用程式帳戶中使用介面GWLB端點向GWLB傳送流量.
- D. 在應用程式帳戶中部署一個介面VPC 端點(VPC endpoint),將流量直接傳送到安全應用程式.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在網路帳戶中部署一個負載平衡器(Load Balancer)閘道器(GWLB),向安全裝置傳送流量。 配置應用程式帳戶,透過在應用程式帳戶中使用介面GWLB端點向GWLB傳送流量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在網路帳戶中部署一個網路負載平衡器(Network Load Balancer)(NLB),向安全裝置傳送流量。 配置應用程式帳戶,透過在應用程式帳戶中使用一個介面VPC 端點(VPC endpoint)向NLB傳送流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在應用程式帳戶中部署一個應用程式負載平衡器(Application Load Balancer)(ALB),直接向安全裝置傳送流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在應用程式帳戶中部署一個介面VPC 端點(VPC endpoint),將流量直接傳送到安全應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #946

**題目**
一家公司在Amazon Aurora MySQL DB叢集(包括六個Aurora複製品)上進行生產。 公司希望其一個部門的近實時報告查詢自動分佈在Aurora複製品的3個部門. 這三個複製品的計算和記憶體規格與DB叢集的其餘部分不同. 哪種解決辦法符合這些要求?

**選項**
- A. 建立和使用自定義的工作量終點
- B. 建立三節點叢集克隆並使用讀取器端點
- C. 對選定的三個節點使用任意例項終點
- D. 使用閱讀器端點自動分配只讀工作量

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立和使用自定義的工作量終點。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立三節點叢集克隆並使用讀取器端點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：對選定的三個節點使用任意例項終點。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用閱讀器端點自動分配只讀工作量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #947

**題目**
一個公司在其promess資料中心的伺服器上執行一個節點js功能. 資料中心將資料儲存在PostgreSQL 資料庫(database)中. 公司在伺服器上的環境變數中儲存連線字串中的憑證. 公司希望將其應用程式遷移到AWS,並以AWS Lambda取代Node.js應用程式伺服器. 公司還希望為PostgreSQL遷移到Amazon RDS,並確保資料庫(database)憑證的安全管理. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將資料庫(database)憑證作為引數儲存在AWS Systems Manager引數儲存器配置引數儲存器中,每隔30天自動輪換這些秘密. 更新 Lambda 函式以從引數中獲取憑證。
- B. 將資料庫(database)憑證作為秘密存放在AWS Secrets Manager. 配置機密管理器, 每30天自動輪換憑證。 更新 Lambda 函式以從金鑰中獲取憑證。
- C. 將資料庫(database)憑證儲存為加密的Lambda環境變數. 寫入自定義的 Lambda 函式來輪換憑證。 安排Lambda功能每30天執行一次.
- D. 將資料庫(database)憑證作為金鑰儲存在AWS Key Management Service(AWS KMS)中. 為金鑰配置自動輪換。 更新 Lambda 函式以從 KMS 金鑰中重新獲取憑證。

**答案**
B


**詳解**
正確答案是 **B**。
- B：將資料庫(database)憑證作為秘密存放在AWS Secrets Manager. 配置機密管理器, 每30天自動輪換憑證。 更新 Lambda 函式以從金鑰中獲取憑證 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料庫(database)憑證作為引數儲存在AWS Systems Manager引數儲存器配置引數儲存器中,每隔30天自動輪換這些秘密. 更新 Lambda 函式以從引數中獲取憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將資料庫(database)憑證儲存為加密的Lambda環境變數. 寫入自定義的 Lambda 函式來輪換憑證。 安排Lambda功能每30天執行一次。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將資料庫(database)憑證作為金鑰儲存在AWS Key Management Service(AWS KMS)中. 為金鑰配置自動輪換。 更新 Lambda 函式以從 KMS 金鑰中重新獲取憑證 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #948

**題目**
一家公司希望複製現有和持續的資料變化,從Oracle上的Oracle 資料庫(database)到Oracle的Amazon RDS. 每天覆制的資料數量各不相同。 該公司希望使用AWS 資料庫(Database) 遷移服務(AWS DSMS)作為複寫(replication)的資料. 解決方案必須只分配複寫(replication)例項所需的能力。 哪種解決辦法能滿足這些要求?

**選項**
- A. 配置 AWS 的 DMS 複寫(replication) 例項, 並配置多AZ 配置, 用於跨多個 可用區(Availability Zones) 的提供例項。
- B. 建立一個AWS DMS 無伺服器 複寫(replication)任務,在提供所需能力的同時分析和複製資料.
- C. 使用 Amazon EC2 自動縮放以根據資料複製量上下縮放 AWS DS MS 複寫(replication) 例項大小。
- D. 透過使用亞馬遜彈性容器服務(Amazon ECS)提供AWS DMS 複寫(replication)容量,具有AWS Fargate發射型,在提供所需容量的同時分析和複製資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 AWS 的 DMS 複寫(replication) 例項, 並配置多AZ 配置, 用於跨多個 可用區(Availability Zones) 的提供例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：建立一個AWS DMS 無伺服器 複寫(replication)任務,在提供所需能力的同時分析和複製資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Amazon EC2 自動縮放以根據資料複製量上下縮放 AWS DS MS 複寫(replication) 例項大小 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過使用亞馬遜彈性容器服務(Amazon ECS)提供AWS DMS 複寫(replication)容量,具有AWS Fargate發射型,在提供所需容量的同時分析和複製資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #949

**題目**
一家公司擁有多層次的網路應用. 該應用程式的內部服務元件部署在Amazon EC2上。 內部服務元件需要作為AWS上託管的服務(SaaS)API存取第三方軟體. 公司需要提供從應用程式的內部服務到第三方SaaS應用程式的安全及私人連線. 公司需要確保公共網際網路的曝光量最小。 哪種解決辦法能滿足這些要求?

**選項**
- A. 實施AWS站點對站點VPN,與第三方SaaS供應商建立安全連線.
- B. 部署 AWS Transit Gateway 管理應用程式的 VPC 和第三方 SaaS 供應商之間的交通和線路往來.
- C. 配置 AWS PrivateLink ,只允許從 VPC 中輸出流量,而不允許第三方 SaaS 提供者建立.
- D. 使用AWS PrivateLink在應用程式的VPC和第三方SaaS供應商之間建立私人連線.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用AWS PrivateLink在應用程式的VPC和第三方SaaS供應商之間建立私人連線。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：實施AWS站點對站點VPN,與第三方SaaS供應商建立安全連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：部署 AWS Transit Gateway 管理應用程式的 VPC 和第三方 SaaS 供應商之間的交通和線路往來。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 AWS PrivateLink ,只允許從 VPC 中輸出流量,而不允許第三方 SaaS 提供者建立。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #950

**題目**
一個解決方案架構師需要將公司的企業網路與它的VPC連線起來,以便允許現場存取其AWS資源. 解決方案必須提供加密(encryption)在網路層和會話層中公司網路和VPC之間的所有流量. 解決辦法還必須提供安全控制,防止AWS與現場系統之間不受限制的接觸。 哪種解決辦法符合這些要求?

**選項**
- A. 配置 AWS Direct Connect 連線到 VPC. 配置 VPC 路由表, 允許並拒絕 AWS 之間和根據需要在辦公場所的交通。
- B. 建立一個IAM 政策(IAM policy),只允許從一組定義的企業IP地址存取AWS管理控制檯. 使用IAM 政策(IAM policy)和角色限制使用者基於工作責任的存取.
- C. 配置 AWS 配置 站點對站點的VPN連線到VPContiph路由表條目,引導從站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站:
- D. 配置 AWS 過渡閘道器以連線到 VPC。 配置路由表條目,將線路流量從辦公場所直達VPC. 配置例項安全小組和網路控制控制列表,只允許從辦公地點進行所需的流量。

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置 AWS 過渡閘道器以連線到 VPC。 配置路由表條目,將線路流量從辦公場所直達VPC. 配置例項安全小組和網路控制控制列表,只允許從辦公地點進行所需的流量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 AWS Direct Connect 連線到 VPC. 配置 VPC 路由表, 允許並拒絕 AWS 之間和根據需要在辦公場所的交通 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個IAM 政策(IAM policy),只允許從一組定義的企業IP地址存取AWS管理控制檯. 使用IAM 政策(IAM policy)和角色限制使用者基於工作責任的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 AWS 配置 站點對站點的VPN連線到VPContiph路由表條目,引導從站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站點對站:。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #951

**題目**
一家公司有一個帶有嵌入式資質的自定義應用程式,為MySQL DB叢集從Amazon RDS的資料庫(database)中檢索資訊. 公司需要以最小的程式設計努力使應用程式更加安全. 公司在RDS上為應用程式使用者建立了MySQL 資料庫(database)的憑證. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在AWS Key Management Service(AWS KMS)中儲存憑證. 在 AWS KMS 中建立金鑰。 配置從 AWS KMS 裝入 資料庫(database) 憑證的應用程式。 啟用自動金鑰旋轉
- B. 將憑證儲存在加密本地儲存中。 配置從本地儲存中裝入 資料庫(database) 憑證的應用程式。 透過建立 cron 工作來設定憑證輪換時間表.
- C. 在AWS Secrets Manager中儲存憑證. 配置應用程式以從保密管理器裝入 資料庫(database) 憑證。 透過為保密管理器建立 AWS Lambda 功能來設定憑證旋轉時間表.
- D. 在 AWS Systems Manager 引數儲存器中儲存憑證。 配置從引數儲存器裝入 資料庫(database) 憑證的應用程式。 在RDS中透過使用引數儲存器為MySQL 資料庫(database)設定憑證旋轉時間表.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在AWS Secrets Manager中儲存憑證. 配置應用程式以從保密管理器裝入 資料庫(database) 憑證。 透過為保密管理器建立 AWS Lambda 功能來設定憑證旋轉時間表。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在AWS Key Management Service(AWS KMS)中儲存憑證. 在 AWS KMS 中建立金鑰。 配置從 AWS KMS 裝入 資料庫(database) 憑證的應用程式。 啟用自動金鑰旋轉。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將憑證儲存在加密本地儲存中。 配置從本地儲存中裝入 資料庫(database) 憑證的應用程式。 透過建立 cron 工作來設定憑證輪換時間表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 AWS Systems Manager 引數儲存器中儲存憑證。 配置從引數儲存器裝入 資料庫(database) 憑證的應用程式。 在RDS中透過使用引數儲存器為MySQL 資料庫(database)設定憑證旋轉時間表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #952

**題目**
一個公司想要將其應用程式移動到一個沒有伺服器的解決方案. 無伺服器解決方案需要透過使用SQL分析現有資料和新資料. 公司將資料儲存在Amazon S3桶中. 資料必須在休息時加密,並複製到不同的AWS 區域(Region). 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立一個新的S3 儲存桶(S3 bucket),使用伺服器側式的加密(encryption),配有AWS KMS多區域(Region)鍵(SSE-KMS). 配置跨區域(Region) 複寫(Replication)(CRR). 將資料裝入新的S3 儲存桶(S3 bucket). 使用Amazon Athena查詢資料.
- B. 使用 Amazon S3 管理的金鑰(SSE-S3)使用伺服器側式的 加密(encryption) 建立新的 S3 儲存桶(S3 bucket)。 配置跨區域(Region) 複寫(Replication)(CRR). 將資料裝入新的S3 儲存桶(S3 bucket). 使用Amazon RDS查詢資料.
- C. 在現有的S3 儲存桶(S3 bucket)上配置跨區域(Region) 複寫(Replication)(CRR). 使用伺服器側式的加密(encryption)與 Amazon S3 管理金鑰(SSE-S3). 使用Amazon Athena查詢資料.
- D. 在現有的S3 儲存桶(S3 bucket)上配置 S3 Cross-Region Replication(CRR). 使用伺服器側式加密(encryption)與AWS KMS多區域(Region)鍵(SSE-KMS). 使用Amazon RDS查詢資料.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個新的S3 儲存桶(S3 bucket),使用伺服器側式的加密(encryption),配有AWS KMS多區域(Region)鍵(SSE-KMS). 配置跨區域(Region) 複寫(Replication)(CRR). 將資料裝入新的S3 儲存桶(S3 bucket). 使用Amazon Athena查詢資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 Amazon S3 管理的金鑰(SSE-S3)使用伺服器側式的 加密(encryption) 建立新的 S3 儲存桶(S3 bucket)。 配置跨區域(Region) 複寫(Replication)(CRR). 將資料裝入新的S3 儲存桶(S3 bucket). 使用Amazon RDS查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在現有的S3 儲存桶(S3 bucket)上配置跨區域(Region) 複寫(Replication)(CRR). 使用伺服器側式的加密(encryption)與 Amazon S3 管理金鑰(SSE-S3). 使用Amazon Athena查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在現有的S3 儲存桶(S3 bucket)上配置 S3 Cross-Region Replication(CRR). 使用伺服器側式加密(encryption)與AWS KMS多區域(Region)鍵(SSE-KMS). 使用Amazon RDS查詢資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #953

**題目**
一家公司擁有一個擁有數千個使用者的網路應用程式. 該應用程式使用8-10使用者載入的影象生成AI影象. 使用者可以每6小時下載一次生成的AI影象. 公司還擁有一個溢價使用者選項,使使用者能夠隨時下載生成的AI影象. 公司使用使用者載入的影象,每年執行AI模型培訓兩次. 公司需要儲存解決方案來儲存影象. 哪些儲存解決方案符合這些要求?

**選項**
- A. 將上傳的影象移動到 Amazon S3 Glacier Deep Archive. 將溢價使用者生成的AI影象移至 S3 標準。 將非溢價使用者生成的AI影象移至S3標準-不頻繁存取(S3 Standard-IA).
- B. 將上傳的影象移到亞馬遜 S3 Glacier Deep Archive 將所有生成的AI影象移到 S3 Glacier Flexible Retrieval.
- C. 將上傳的影象移動到 Amazon S3 一個區-不頻繁存取(S3 One Zone-IA). 將溢價使用者生成的AI影象移至 S3 標準。 將非Premium使用者生成的AI影象移動到S3標準-不頻繁存取(S3 Standard-IA).
- D. 將上傳的影象移動到 Amazon S3 一個區-不頻繁存取(S3 One Zone-IA). 將所有生成的AI影象移動到 S3 Glacier Flexible Retrieval.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將上傳的影象移動到 Amazon S3 Glacier Deep Archive. 將溢價使用者生成的AI影象移至 S3 標準。 將非溢價使用者生成的AI影象移至S3標準-不頻繁存取(S3 Standard-IA)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將上傳的影象移到亞馬遜 S3 Glacier Deep Archive 將所有生成的AI影象移到 S3 Glacier Flexible Retrieval。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將上傳的影象移動到 Amazon S3 一個區-不頻繁存取(S3 One Zone-IA). 將溢價使用者生成的AI影象移至 S3 標準。 將非Premium使用者生成的AI影象移動到S3標準-不頻繁存取(S3 Standard-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將上傳的影象移動到 Amazon S3 一個區-不頻繁存取(S3 One Zone-IA). 將所有生成的AI影象移動到 S3 Glacier Flexible Retrieval。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #954

**題目**
一家公司正在開發關於AWS的機器學習模型。 該公司正在開發ML模型作為獨立的微服務. 微服務在啟動時從Amazon S3獲取大約1GB的模型資料,並將資料裝入記憶體. 使用者透過同步API存取ML模型. 使用者可以傳送請求或批次請求. 公司向數百個使用者提供ML模型. 這些模型的使用模式不規則。 一些模型在數日或數週內不使用. 其他型號一次收到數以千計的請求。 哪種解決辦法能滿足這些要求?

**選項**
- A. 將API的請求導向網路負載平衡器(Network Load Balancer)(NLB)。 將ML模型用作AWS Lambda功能,供NLB使用。 根據NLB收到的流量,使用自動縮放來縮放Lambda功能。
- B. 將API的請求導向應用程式負載平衡器(Application Load Balancer)(ALB). 將ML模型用作ALB將援用的Amazon彈性集裝箱服務(Amazon ECS)服務。 根據ALB收到的流量,使用自動縮放來縮放ECS叢集例項.
- C. 將 API 的請求引導到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將 ML 模型應用為 SQS 事件將引用的 AWS Lambda 函式。 根據SQS佇列的大小,使用自動縮放來增加Lambda函式的vCPU數量.
- D. 將 API 的請求引導到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將ML模型作為從佇列讀取的亞馬遜彈性容器服務(Amazon ECS)服務。 使用Amazon ECS的自動縮放來根據SQS佇列的大小對叢集能力和服務數量進行比例化.

**答案**
D


**詳解**
正確答案是 **D**。
- D：將 API 的請求引導到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將ML模型作為從佇列讀取的亞馬遜彈性容器服務(Amazon ECS)服務。 使用Amazon ECS的自動縮放來根據SQS佇列的大小對叢集能力和服務數量進行比例化。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將API的請求導向網路負載平衡器(Network Load Balancer)(NLB)。 將ML模型用作AWS Lambda功能,供NLB使用。 根據NLB收到的流量,使用自動縮放來縮放Lambda功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將API的請求導向應用程式負載平衡器(Application Load Balancer)(ALB). 將ML模型用作ALB將援用的Amazon彈性集裝箱服務(Amazon ECS)服務。 根據ALB收到的流量,使用自動縮放來縮放ECS叢集例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將 API 的請求引導到 Amazon 簡單佇列服務( Amazon SQS) 佇列。 將 ML 模型應用為 SQS 事件將引用的 AWS Lambda 函式。 根據SQS佇列的大小,使用自動縮放來增加Lambda函式的vCPU數量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #955

**題目**
在應用程式負載平衡器(Application Load Balancer)(ALB)後面的Auto Scaling 群組(Auto Scaling group)中,一家公司在Amazon EC2例項上執行一個網路應用程式. 應用程式將資料儲存在一個Amazon Aurora MySQL DB叢集中. 公司需要建立災難復原(disaster recovery)(DR)解決方案. DR解決方案可接受的恢復時間為30分鐘. DR解決方案不需要在初級基礎設施健康時支援客戶使用. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在第二個AWS 區域(Region)中部署DR基礎設施,配有ALB和Auto Scaling 群組(Auto Scaling group). 將Auto Scaling 群組(Auto Scaling group)的預期容量和最大容量設定為最低值. 將Aurora MySQL DB叢集轉換為Aurora全球資料庫(database). 配置 Amazon Route 53 用於與 ALB 端點的主動被動故障。
- B. 將DR基礎設施部署在第二個AWS 區域(Region)中,並配有一個ALUpdate Auto Scaling 群組(Auto Scaling group),以包括第二個區域(Region)的EC2例項. 使用 Amazon Route 53 配置主動活動故障。 將Aurora MySQL DB叢集轉換為Aurora全球資料庫(database).
- C. 透過使用AWS Backup備份Aurora MySQL DB叢集資料. 在第二個AWS 區域(Region)中部署DR基礎設施,配備ALB. 更新Auto Scaling 群組(Auto Scaling group),以包括第二個區域(Region)的EC2例項. 使用 Amazon Route 53 配置主動活動故障。 在第二個區域(Region)中建立一個Aurora MySQL DB叢集,恢復備份(backup)的資料.
- D. 透過使用AWS Backup支援基礎設施配置. 使用備份(backup)在第二個AWS 區域(Region)中建立所需的基礎設施. 將Auto Scaling 群組(Auto Scaling group)的預期容量設定為零. 使用 Amazon Route 53 配置主動被動故障。 將Aurora MySQL DB叢集轉換為Aurora全球資料庫(database).

**答案**
A


**詳解**
正確答案是 **A**。
- A：在第二個AWS 區域(Region)中部署DR基礎設施,配有ALB和Auto Scaling 群組(Auto Scaling group). 將Auto Scaling 群組(Auto Scaling group)的預期容量和最大容量設定為最低值. 將Aurora MySQL DB叢集轉換為Aurora全球資料庫(database). 配置 Amazon Route 53 用於與 ALB 端點的主動被動故障。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將DR基礎設施部署在第二個AWS 區域(Region)中,並配有一個ALUpdate Auto Scaling 群組(Auto Scaling group),以包括第二個區域(Region)的EC2例項. 使用 Amazon Route 53 配置主動活動故障。 將Aurora MySQL DB叢集轉換為Aurora全球資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過使用AWS Backup備份Aurora MySQL DB叢集資料. 在第二個AWS 區域(Region)中部署DR基礎設施,配備ALB. 更新Auto Scaling 群組(Auto Scaling group),以包括第二個區域(Region)的EC2例項. 使用 Amazon Route 53 配置主動活動故障。 在第二個區域(Region)中建立一個Aurora MySQL DB叢集,恢復備份(backup)的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過使用AWS Backup支援基礎設施配置. 使用備份(backup)在第二個AWS 區域(Region)中建立所需的基礎設施. 將Auto Scaling 群組(Auto Scaling group)的預期容量設定為零. 使用 Amazon Route 53 配置主動被動故障。 將Aurora MySQL DB叢集轉換為Aurora全球資料庫(database)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #956

**題目**
一家公司正在將其資料處理應用程式遷移到AWS雲。 應用程式處理若干無法中斷的短命批次工作。 資料在每批任務完成後生成. 資料可存取30天,保留2年。 公司希望儘可能降低AWS雲中應用程式執行成本. 哪種解決辦法能滿足這些要求?

**選項**
- A. 將資料處理應用程式遷移到 Amazon EC2 Spotexits。 在Amazon S3標準中儲存資料. 將資料移至Amazon S3冰川瞬間. 三十日後取還. 設定在2年後刪除資料的過期值。
- B. 將資料處理應用程式遷移到 Amazon EC2 On-Demand Events。 資料儲存於亞馬遜 S3 Glacier Instant Retrieval. 30天后將資料移至S3 Glacier Deep Archive. 設定在2年後刪除資料的過期值。
- C. 部署Amazon EC2 Spotsexits來管理批次作業. 在Amazon S3標準中儲存資料. 30天后將資料移至亞馬遜S3 Glacier Flexible Retrieval. 設定在2年後刪除資料的過期值。
- D. 部署Amazon EC2 現場調查組來進行批次工作。 在Amazon S3標準中儲存資料. 30天后將資料移至亞馬遜S3 Glacier Deep Archive. 設定在2年後刪除資料的過期值。

**答案**
C


**詳解**
正確答案是 **C**。
- C：部署Amazon EC2 Spotsexits來管理批次作業. 在Amazon S3標準中儲存資料. 30天后將資料移至亞馬遜S3 Glacier Flexible Retrieval. 設定在2年後刪除資料的過期值 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將資料處理應用程式遷移到 Amazon EC2 Spotexits。 在Amazon S3標準中儲存資料. 將資料移至Amazon S3冰川瞬間. 三十日後取還. 設定在2年後刪除資料的過期值 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將資料處理應用程式遷移到 Amazon EC2 On-Demand Events。 資料儲存於亞馬遜 S3 Glacier Instant Retrieval. 30天后將資料移至S3 Glacier Deep Archive. 設定在2年後刪除資料的過期值 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署Amazon EC2 現場調查組來進行批次工作。 在Amazon S3標準中儲存資料. 30天后將資料移至亞馬遜S3 Glacier Deep Archive. 設定在2年後刪除資料的過期值 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #957

**題目**
一個公司需要設計一個混合網路架構. 公司的工作量目前儲存在AWS雲和現場資料中心。 工作量需要一位數的延遲才能溝通。 該公司使用一個AWS Transit Gateway transit cateve來連線多個VPC. 哪些步驟的組合將以符合成本效益的方式滿足這些要求?(選二.

**選項**
- A. 建立與每個VPC的AWS站點對站點VPN連線.
- B. 將AWS Direct Connect閘道器與附屬於VPC的中轉閘道器聯絡起來.
- C. 建立AWS站點對站點VPN連線到AWS Direct Connect閘道器.
- D. 建立AWS Direct Connect連線. 建立中轉虛擬介面(VIF)到直接連線閘道器.
- E. 聯絡AWS Site-Site VPN與附屬於VPC的中轉閘道器連線.

**答案**
B,D



**詳解**
正確答案是 **B, D**。
- B：將AWS Direct Connect閘道器與附屬於VPC的中轉閘道器聯絡起來。此選項符合題目條件，能有效滿足核心需求。
- D：建立AWS Direct Connect連線. 建立中轉虛擬介面(VIF)到直接連線閘道器。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：建立與每個VPC的AWS站點對站點VPN連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立AWS站點對站點VPN連線到AWS Direct Connect閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：聯絡AWS Site-Site VPN與附屬於VPC的中轉閘道器連線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #958

**題目**
一家全球電子商務公司在AWS上承擔著重要的工作量。 工作量使用Amazon RDS用於PostgreSQL DB例項,該例項是為多AZ部署配置的。 客戶報告,當公司發生資料庫(database)故障時,應用暫停。 公司需要彈性解決方案來減少故障時間. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 Amazon RDS 代理伺服器。 指定代理給 DB 例項。
- B. 為 DB 例項建立讀副本。 將讀流量移至讀副本.
- C. 啟用效能透視。 監視CPU負載以識別超時.
- D. 常規自動快照. 複製自動快照到多個 AWS 區域。

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon RDS 代理伺服器。 指定代理給 DB 例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：為 DB 例項建立讀副本。 將讀流量移至讀副本。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：啟用效能透視。 監視CPU負載以識別超時。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：常規自動快照. 複製自動快照到多個 AWS 區域 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #959

**題目**
一家公司擁有多個Amazon RDS DB例項,在開發的AWS帳戶中執行. 所有例項都有標記,可將其確定為發展資源。 公司需要開發DB例項,只在營業時間按期執行. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立 Amazon CloudWatch 提醒以識別需要停止的 RDS 例項。 建立 AWS Lambda 函式以啟動和停止 RDS 例項。
- B. 建立 AWS 信任的顧問報告,以確定要開始和停止的 RDS 例項。 建立 AWS Lambda 函式以啟動和停止 RDS 例項。
- C. 建立AWS Systems Manager州經理協會,以啟動和阻止RDS例項.
- D. 建立 Amazon EventBridge 規則,以引用 AWS Lambda 函式開始和停止 RDS 例項。

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立 Amazon EventBridge 規則,以引用 AWS Lambda 函式開始和停止 RDS 例項 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon CloudWatch 提醒以識別需要停止的 RDS 例項。 建立 AWS Lambda 函式以啟動和停止 RDS 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 AWS 信任的顧問報告,以確定要開始和停止的 RDS 例項。 建立 AWS Lambda 函式以啟動和停止 RDS 例項 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立AWS Systems Manager州經理協會,以啟動和阻止RDS例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #960

**題目**
一家消費者調查公司從特定的地理區域(region)收集了幾年的資料。 公司在AWS 區域(Region)的Amazon S3桶中儲存了這些資料. 該公司已經開始與一家營銷公司在一個新的地理區域(region)中分享這一資料. 公司已准許該公司的AWS帳戶進入S3 儲存桶(S3 bucket). 當營銷公司要求S3 儲存桶(S3 bucket)號資料時,公司希望將資料傳輸成本降到最低. 哪種解決辦法能滿足這些要求?

**選項**
- A. 在公司的S3 儲存桶(S3 bucket)上配置請求者付費功能.
- B. 配置S3 Cross-Region Replication(CRR)從公司的S3 儲存桶(S3 bucket)到銷售公司的S3桶之一.
- C. 配置AWS資源存取管理器,與營銷公司AWS帳戶共享S3 儲存桶(S3 bucket).
- D. 配置公司的S3 儲存桶(S3 bucket)使用S3 Intelligent-Tiering同步S3 儲存桶(S3 bucket)到銷售公司的S3桶之一.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置S3 Cross-Region Replication(CRR)從公司的S3 儲存桶(S3 bucket)到銷售公司的S3桶之一。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在公司的S3 儲存桶(S3 bucket)上配置請求者付費功能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置AWS資源存取管理器,與營銷公司AWS帳戶共享S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置公司的S3 儲存桶(S3 bucket)使用S3 Intelligent-Tiering同步S3 儲存桶(S3 bucket)到銷售公司的S3桶之一。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #961

**題目**
一家公司使用AWS託管其公共電子商務網站. 該網站使用AWS Global Accelerator加速器進行網際網路流量. 全球加速器加速器將流量推進到應用程式負載平衡器(Application Load Balancer)(ALB),這是Auto Scaling 群組(Auto Scaling group)的切入點. 該公司最近在網站上發現了一起DDoS攻擊事件. 公司需要解決方案來緩解未來的攻擊. 哪些解決辦法將滿足這些要求?

**選項**
- A. 配置一個 AWS WAF 網路 ACL, 用於全球加速器加速器, 透過基於速率的規則來阻斷流量
- B. 配置一個 AWS Lambda 函式來讀取 ALB 度量符, 透過更新 VPC 網路 ACL(network ACL) 來阻止攻擊
- C. 在 ALB 上配置 AWS WAF 網路 ACL, 透過使用基於費率的規則來阻斷流量
- D. 在全球加速器前配置 Amazon CloudFront 分散式

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置一個 AWS WAF 網路 ACL, 用於全球加速器加速器, 透過基於速率的規則來阻斷流量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：配置一個 AWS Lambda 函式來讀取 ALB 度量符, 透過更新 VPC 網路 ACL(network ACL) 來阻止攻擊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 ALB 上配置 AWS WAF 網路 ACL, 透過使用基於費率的規則來阻斷流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在全球加速器前配置 Amazon CloudFront 分散式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #962

**題目**
一家公司使用Amazon DynamoDB表儲存公司從裝置接收的資料. DynamomDB表格支援一個面向客戶的網站,在客戶裝置上顯示最近的活動. 公司將表格配置為提供吞吐量(throughput)用於寫作和閱讀. 公司希望每天為客戶裝置資料計算效能指標. 解決方案必須對錶格提供的讀寫能力產生最小效果. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用Amazon Athena SQL查詢與Amazon Athena DynamoDB聯結器,在一次經常性的日程上計算效能指標.
- B. 使用AWS Glue任務與AWS Glue DynamomDB匯出聯結器,在一次重複的計時錶中計算效能指標.
- C. 使用一個 Amazon Redshift COPY 命令來計算一個經常性時間表上的效能指標.
- D. 使用帶有Apache Hive外部表格的 Amazon EMR 任務,在經常性的排程表中計算效能指標.

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用Amazon Athena SQL查詢與Amazon Athena DynamoDB聯結器,在一次經常性的日程上計算效能指標。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用AWS Glue任務與AWS Glue DynamomDB匯出聯結器,在一次重複的計時錶中計算效能指標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用一個 Amazon Redshift COPY 命令來計算一個經常性時間表上的效能指標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用帶有Apache Hive外部表格的 Amazon EMR 任務,在經常性的排程表中計算效能指標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #963

**題目**
一個解決方案架構師正在設計一個新的無狀態應用程式的雲結構,將在AWS上部署. 解決方案架構師為應用程式建立了一個亞馬遜機器影象(AMI)並推出模板. 根據需要處理的工作數量,處理必須平行進行,同時根據需要增加和刪除應用程式Amazon EC2。 申請必須鬆綁。 工作專案必須長期儲存。 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個亞馬遜簡單通知服務(Amazon SNS)主題,以傳送需要處理的工作. 透過使用帶有縮放策略集的發射模板來建立Auto Scaling 群組(Auto Scaling group),以根據CPU的使用來新增和刪除EC2例項.
- B. 建立一個 Amazon 簡單佇列服務( Amazon SQS) 佇列以持有需要處理的工作。 透過使用帶有縮放策略集的發射模板來建立Auto Scaling 群組(Auto Scaling group),以根據網路使用情況新增和刪除EC2例項.
- C. 建立一個 Amazon 簡單佇列服務( Amazon SQS) 佇列以持有需要處理的工作。 使用帶有縮放策略集的發射模板建立 Auto Scaling 群組(Auto Scaling group),根據SQS佇列中的專案數量新增和刪除EC2例項.
- D. 建立一個亞馬遜簡單通知服務(Amazon SNS)主題,以傳送需要處理的工作. 透過使用帶有縮放策略集的發射模板來建立Auto Scaling 群組(Auto Scaling group),根據釋出到SNS主題的資訊數量來新增和刪除EC2例項.

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立一個 Amazon 簡單佇列服務( Amazon SQS) 佇列以持有需要處理的工作。 使用帶有縮放策略集的發射模板建立 Auto Scaling 群組(Auto Scaling group),根據SQS佇列中的專案數量新增和刪除EC2例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個亞馬遜簡單通知服務(Amazon SNS)主題,以傳送需要處理的工作. 透過使用帶有縮放策略集的發射模板來建立Auto Scaling 群組(Auto Scaling group),以根據CPU的使用來新增和刪除EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立一個 Amazon 簡單佇列服務( Amazon SQS) 佇列以持有需要處理的工作。 透過使用帶有縮放策略集的發射模板來建立Auto Scaling 群組(Auto Scaling group),以根據網路使用情況新增和刪除EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個亞馬遜簡單通知服務(Amazon SNS)主題,以傳送需要處理的工作. 透過使用帶有縮放策略集的發射模板來建立Auto Scaling 群組(Auto Scaling group),根據釋出到SNS主題的資訊數量來新增和刪除EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #964

**題目**
一家全球電子商務公司採用單體建築. 公司需要解決方案來管理不斷增長的產品資料量. 解決方案必須具有可擴充套件性,並具有模組化的服務架構. 公司需要保持其結構化的資料庫(database)計劃. 公司還需要一個儲存解決方案來儲存產品資料和產品影象. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 在Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2例項來部署一個集裝箱化的應用程式. 使用應用程式負載平衡器(Application Load Balancer)來分配網路流量. 使用 Amazon RDS DB 例項儲存產品資料和產品影象.
- B. 使用 AWS Lambda 函式來管理現有的單體應用程式. 使用Amazon DynamoDB儲存產品資料和產品影象. 使用Amazon簡單通知服務(Amazon SNS)進行Lambda函式之間的事件驅動通訊.
- C. 使用Amazon Elastic Kubernetes Service(Amazon EKS),並部署Amazon EC2,以部署一個容器化的應用程式. 使用Amazon Aurora叢集儲存產品資料. 使用 AWS Step 函式來管理 workfiows。 將產品影象儲存在亞馬遜S3 Glacier Deep Archive.
- D. 使用帶有AWS Fargate的亞馬遜彈性容器服務(Amazon ECS)部署一個集裝箱化應用. 使用帶有多AZ部署的Amazon RDS儲存產品資料. 在Amazon S3桶中儲存產品影象.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用帶有AWS Fargate的亞馬遜彈性容器服務(Amazon ECS)部署一個集裝箱化應用. 使用帶有多AZ部署的Amazon RDS儲存產品資料. 在Amazon S3桶中儲存產品影象。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2例項來部署一個集裝箱化的應用程式. 使用應用程式負載平衡器(Application Load Balancer)來分配網路流量. 使用 Amazon RDS DB 例項儲存產品資料和產品影象。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 AWS Lambda 函式來管理現有的單體應用程式. 使用Amazon DynamoDB儲存產品資料和產品影象. 使用Amazon簡單通知服務(Amazon SNS)進行Lambda函式之間的事件驅動通訊。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Elastic Kubernetes Service(Amazon EKS),並部署Amazon EC2,以部署一個容器化的應用程式. 使用Amazon Aurora叢集儲存產品資料. 使用 AWS Step 函式來管理 workfiows。 將產品影象儲存在亞馬遜S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #965

**題目**
一家公司正在將一個應用程式從前提環境轉移到AWS。 該應用程式將在Amazon S3中儲存敏感資料. 公司必須在Amazon S3中儲存資料之前加密資料. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用客戶端的加密(encryption)用客戶端管理的金鑰加密資料.
- B. 使用伺服器側加密(encryption)使用AWS KMS金鑰(SSE-KMS)加密資料.
- C. 透過使用伺服器側加密(encryption)用客戶提供的金鑰(SSE-C)加密資料.
- D. 透過使用客戶端的加密(encryption)使用Amazon S3管理金鑰加密資料.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用伺服器側加密(encryption)使用AWS KMS金鑰(SSE-KMS)加密資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用客戶端的加密(encryption)用客戶端管理的金鑰加密資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：透過使用伺服器側加密(encryption)用客戶提供的金鑰(SSE-C)加密資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：透過使用客戶端的加密(encryption)使用Amazon S3管理金鑰加密資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #966

**題目**
一家公司希望建立一個多個團隊會使用的Amazon EMR叢集. 公司希望確保每個團隊的大資料工作量只能存取每個團隊需要互動的AWS服務. 該公司不希望工作量能夠查閱群組基本EC2例項的"例項後設資料服務版本2(IMDSv2)。 哪種解決辦法能滿足這些要求?

**選項**
- A. 為團隊所需的每個AWS服務配置介面 VPC 端點. 利用所需介面VPC端點提交大資料工作量.
- B. 建立EMR執行時角色. 配置叢集以使用執行時間角色。 利用執行時間角色提交大資料工作量.
- C. 建立一個EC2 IAM 執行個體設定檔(instance profile),每個團隊都有所需的許可權. 使用執行個體設定檔(instance profile)提交大資料工作量.
- D. 建立 EMR 安全配置, 設定 EublicApplicationScopediaMRole 選項為假。 利用安全配置提交大資料工作量.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立EMR執行時角色. 配置叢集以使用執行時間角色。 利用執行時間角色提交大資料工作量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為團隊所需的每個AWS服務配置介面 VPC 端點. 利用所需介面VPC端點提交大資料工作量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立一個EC2 IAM 執行個體設定檔(instance profile),每個團隊都有所需的許可權. 使用執行個體設定檔(instance profile)提交大資料工作量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 EMR 安全配置, 設定 EublicApplicationScopediaMRole 選項為假。 利用安全配置提交大資料工作量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #967

**題目**
一個解決方案架構師正在設計一個應用程式,幫助使用者填寫和提交登錄檔. 解決方案架構師計劃使用雙層架構,包括網路應用程式伺服器級和工人級. 申請需要快速處理提交的表格。 應用程式需要處理每個表格一次。 解決辦法必須確保不丟失任何資料。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Amazon 簡單佇列服務(Amazon SQS) FIFO 佇列在網路應用伺服器級別和工人級別之間儲存和轉發格式資料.
- B. 使用網路應用程式伺服器級和工人級之間的Amazon API Gateway HTTP API來儲存和轉發格式資料.
- C. 在網路應用程式伺服器級和工人級之間使用一個亞馬遜簡易佇列服務(Amazon SQS)的標準佇列來儲存和轉發格式資料.
- D. 使用 AWS 步函式工作符。 在網路應用程式伺服器層和儲存和轉發資料的工人層之間建立一個同步的工作空間。

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 Amazon 簡單佇列服務(Amazon SQS) FIFO 佇列在網路應用伺服器級別和工人級別之間儲存和轉發格式資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用網路應用程式伺服器級和工人級之間的Amazon API Gateway HTTP API來儲存和轉發格式資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在網路應用程式伺服器級和工人級之間使用一個亞馬遜簡易佇列服務(Amazon SQS)的標準佇列來儲存和轉發格式資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS 步函式工作符。 在網路應用程式伺服器層和儲存和轉發資料的工人層之間建立一個同步的工作空間。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #968

**題目**
一家金融公司使用premises搜尋應用程式從各生產商收集流資料. 該應用程式為搜尋和視覺化功能提供實時更新. 公司計劃向AWS遷移,希望使用AWS本地解決方案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Amazon EC2 例項來攝取和處理資料流到 Amazon S3 桶的托爾儲存。 使用Amazon Athena搜尋資料. 使用亞馬遜管理Grafana來建立視覺化.
- B. 使用Amazon EMR來攝取和處理資料流到Amazon Redshift進行儲存. 使用Amazon Redshift光譜搜尋資料. 使用Amazon QuickSight建立視覺化.
- C. 使用Amazon Elastic Kubernetes Service(Amazon EKS)來攝取和處理資料流到Amazon DynamoDB進行儲存. 使用Amazon CloudWatch建立圖形儀表板搜尋和視覺化資料.
- D. 使用Amazon Kinesis資料流來攝取和處理資料流到Amazon OpenSearch Service. 使用 OpenSearch 服務搜尋資料. 使用Amazon QuickSight建立視覺化.

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用Amazon Kinesis資料流來攝取和處理資料流到Amazon OpenSearch Service. 使用 OpenSearch 服務搜尋資料. 使用Amazon QuickSight建立視覺化。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon EC2 例項來攝取和處理資料流到 Amazon S3 桶的托爾儲存。 使用Amazon Athena搜尋資料. 使用亞馬遜管理Grafana來建立視覺化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon EMR來攝取和處理資料流到Amazon Redshift進行儲存. 使用Amazon Redshift光譜搜尋資料. 使用Amazon QuickSight建立視覺化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用Amazon Elastic Kubernetes Service(Amazon EKS)來攝取和處理資料流到Amazon DynamoDB進行儲存. 使用Amazon CloudWatch建立圖形儀表板搜尋和視覺化資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #969

**題目**
一家公司目前執行一個在Linux機器上使用ASP.NET的promess應用程式. 該應用程式需要大量資源,直接為客戶服務。 公司希望將應用程式現代化到.NET. 公司希望在集裝箱上執行該應用程式,並根據Amazon CloudWatch 度量衡進行規模化. 公司還希望縮短用於運營維護活動的時間. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用 AWS App2 容器來容器化應用程式. 使用AWS CloudFormation模板在AWS Fargate上向亞馬遜彈性容器服務(Amazon ECS)部署應用程式.
- B. 使用 AWS App2 容器來容器化應用程式. 使用AWS CloudFormation模板在Amazon EC2例項上將應用程式部署到亞馬遜彈性容器服務(Amazon ECS).
- C. 使用 AWS App Runner 來容器化應用程式。 使用App Runner在AWS Fargate上向亞馬遜彈性容器服務(Amazon ECS)部署應用程式.
- D. 使用 AWS App Runner 來容器化應用程式。 使用 App Runner 在 Amazon EC2 個例上將應用程式部署到 Amazon Elastic Kubernetes Service(Amazon EKS).

**答案**
A


**詳解**
正確答案是 **A**。
- A：使用 AWS App2 容器來容器化應用程式. 使用AWS CloudFormation模板在AWS Fargate上向亞馬遜彈性容器服務(Amazon ECS)部署應用程式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 AWS App2 容器來容器化應用程式. 使用AWS CloudFormation模板在Amazon EC2例項上將應用程式部署到亞馬遜彈性容器服務(Amazon ECS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 AWS App Runner 來容器化應用程式。 使用App Runner在AWS Fargate上向亞馬遜彈性容器服務(Amazon ECS)部署應用程式。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS App Runner 來容器化應用程式。 使用 App Runner 在 Amazon EC2 個例上將應用程式部署到 Amazon Elastic Kubernetes Service(Amazon EKS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #970

**題目**
一家公司正在AWS雲中設計一個新的內部網路應用程式. 新應用程式必須安全地檢索和儲存來自AWS管理的服務的多個員工使用者名稱和密碼. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 將僱員憑證存放在AWS Systems Manager引數商店。 使用AWS CloudFormation和BatchGetSecretValue API從引數儲存器獲取使用者名稱和密碼.
- B. 將僱員憑證存於AWS Secrets Manager。 使用帶有 BatchGetSecretValue API 的 AWS CloudFormation 和 AWS 批次,從密件管理器獲取使用者名稱和密碼.
- C. 將僱員憑證存放在AWS Systems Manager引數商店。 使用帶有 BatchGetSecretValue API 的 AWS CloudFormation 和 AWS 批次從引數儲存器中獲取使用者名稱和密碼.
- D. 將僱員憑證存於AWS Secrets Manager。 使用AWS CloudFormation和BatchGetSecretValue API從密件管理器獲取使用者名稱和密碼.

**答案**
D


**詳解**
正確答案是 **D**。
- D：將僱員憑證存於AWS Secrets Manager。 使用AWS CloudFormation和BatchGetSecretValue API從密件管理器獲取使用者名稱和密碼。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將僱員憑證存放在AWS Systems Manager引數商店。 使用AWS CloudFormation和BatchGetSecretValue API從引數儲存器獲取使用者名稱和密碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將僱員憑證存於AWS Secrets Manager。 使用帶有 BatchGetSecretValue API 的 AWS CloudFormation 和 AWS 批次,從密件管理器獲取使用者名稱和密碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將僱員憑證存放在AWS Systems Manager引數商店。 使用帶有 BatchGetSecretValue API 的 AWS CloudFormation 和 AWS 批次從引數儲存器中獲取使用者名稱和密碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #971

**題目**
一家位於Ap-東北-1區域(Region)的公司擁有數千個AWS外站伺服器. 公司在世界各地的偏遠地點部署了伺服器。 所有伺服器都定期下載包含100個檔案的新軟體版本. 在所有伺服器執行新軟體版本之前,有顯著的延遲(latency). 公司必須減少新軟體版本的延遲(latency)部署. LEAST 營運開銷(operational overhead)將滿足這一要求的哪一種解決方案?

**選項**
- A. 在 AP- 東北-1 中建立 Amazon S3 桶。 在 AP- 東北-1 中設定 Amazon CloudFront 分佈,其中包括 CachingDisabled 快取策略。 配置 S3 儲存桶(S3 bucket) 為源。 使用簽名的 URL 下載軟體。
- B. 在 AP- 東北-1 中建立 Amazon S3 桶。 在 區域(Region) 中建立第二個 S3 儲存桶(S3 bucket)。 在桶之間配置 複寫(replication)。 建立Amazon CloudFront分佈,以東北-1為主源,我們東-1為次源. 使用簽名的 URL 下載軟體。
- C. 在 AP- 東北-1 中建立 Amazon S3 桶。 配置 Amazon S3 Transfer Acceleration. 透過使用S3 Transfer Acceleration端點下載軟體.
- D. 在 AP- 東北 1 中建立 Amazon S3 桶. 設定 Amazon CloudFront 分佈。 配置 S3 儲存桶(S3 bucket) 為源。 使用簽名的 URL 下載軟體。

**答案**
D


**詳解**
正確答案是 **D**。
- D：在 AP- 東北 1 中建立 Amazon S3 桶. 設定 Amazon CloudFront 分佈。 配置 S3 儲存桶(S3 bucket) 為源。 使用簽名的 URL 下載軟體 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在 AP- 東北-1 中建立 Amazon S3 桶。 在 AP- 東北-1 中設定 Amazon CloudFront 分佈,其中包括 CachingDisabled 快取策略。 配置 S3 儲存桶(S3 bucket) 為源。 使用簽名的 URL 下載軟體 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在 AP- 東北-1 中建立 Amazon S3 桶。 在 區域(Region) 中建立第二個 S3 儲存桶(S3 bucket)。 在桶之間配置 複寫(replication)。 建立Amazon CloudFront分佈,以東北-1為主源,我們東-1為次源. 使用簽名的 URL 下載軟體 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 AP- 東北-1 中建立 Amazon S3 桶。 配置 Amazon S3 Transfer Acceleration. 透過使用S3 Transfer Acceleration端點下載軟體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #972

**題目**
一家公司目前透過使用Microsoft Windows Server來執行一個基於前提的股票交易應用程式. 公司希望將應用程式遷移到AWS雲. 公司需要設計一個高度可用的解決方案,為跨多個可用區(Availability Zones)的區塊儲存提供低延遲(latency)存取. 哪些解決辦法將滿足這些要求?

**選項**
- A. 在 Amazon EC2 例項上配置一個跨兩個 可用區(Availability Zones) 的 Windows 伺服器叢集。 在兩個叢集節點上安裝應用程式。 在Windows檔案伺服器中使用Amazon FSx作為兩個叢集節點之間的共享儲存.
- B. 在 Amazon EC2 例項上配置一個跨兩個 可用區(Availability Zones) 的 Windows 伺服器叢集。 在兩個叢集節點上安裝應用程式。 使用亞馬遜彈性塊儲存器(Amazon EBS)通用SSD(gp3)卷作為EC2例項的附加儲存. 設定應用級複寫(replication),將可用區(Availability Zone)中一個EBS磁碟區的資料同步到第二個可用區(Availability Zone)中的另一個EBS磁碟區.
- C. 在兩個可用區(Availability Zones)中使用Amazon EC2的應用程式。 將一個 EC2 例項配置為活動例項, 將第二個 EC2 例項配置為備用模式。 使用Amazon FSx用於NetApp ONTAP多AZ檔案系統,透過使用Internet Small計算機系統介面(iSCSI)協議存取資料.
- D. 在兩個可用區(Availability Zones)中使用Amazon EC2的應用程式。 將一個 EC2 例項配置為活動例項, 將第二個 EC2 例項配置為備用模式。 使用 Amazon 彈性塊儲存器(Amazon EBS)提供 IOPS SSD(io2) 卷作為EC2 例項的附加儲存. 設定 Amazon EBS 級 複寫(replication) ,將 可用區(Availability Zone) 中一個io2 磁碟區的資料同步到第二個可用區(Availability Zone)中的另一個io2磁碟區.

**答案**
A


**詳解**
正確答案是 **A**。
- A：在 Amazon EC2 例項上配置一個跨兩個 可用區(Availability Zones) 的 Windows 伺服器叢集。 在兩個叢集節點上安裝應用程式。 在Windows檔案伺服器中使用Amazon FSx作為兩個叢集節點之間的共享儲存。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在 Amazon EC2 例項上配置一個跨兩個 可用區(Availability Zones) 的 Windows 伺服器叢集。 在兩個叢集節點上安裝應用程式。 使用亞馬遜彈性塊儲存器(Amazon EBS)通用SSD(gp3)卷作為EC2例項的附加儲存. 設定應用級複寫(replication),將可用區(Availability Zone)中一個EBS磁碟區的資料同步到第二個可用區(Availability Zone)中的另一個EBS磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在兩個可用區(Availability Zones)中使用Amazon EC2的應用程式。 將一個 EC2 例項配置為活動例項, 將第二個 EC2 例項配置為備用模式。 使用Amazon FSx用於NetApp ONTAP多AZ檔案系統,透過使用Internet Small計算機系統介面(iSCSI)協議存取資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在兩個可用區(Availability Zones)中使用Amazon EC2的應用程式。 將一個 EC2 例項配置為活動例項, 將第二個 EC2 例項配置為備用模式。 使用 Amazon 彈性塊儲存器(Amazon EBS)提供 IOPS SSD(io2) 卷作為EC2 例項的附加儲存. 設定 Amazon EBS 級 複寫(replication) ,將 可用區(Availability Zone) 中一個io2 磁碟區的資料同步到第二個可用區(Availability Zone)中的另一個io2磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #973

**題目**
一家公司正在設計一個網路應用軟體,並配有因特網的應用程式負載平衡器(Application Load Balancer)(ALB)。 該公司需要ALB接收來自公共網際網路的HTTPS網路流量. ALB只必須將HTTPS流量傳送到埠443上託管於Amazon EC2 執行個體的網路應用伺服器. ALB必須在8443埠的HTTPS上對網路應用伺服器進行健康檢查. 與ALB相關的安全群組(security group)的組合將滿足這些要求?(選三.

**選項**
- A. 允許HTTPS從0.0.0.0/0進入港口443.
- B. 允許港口443的所有出港流量達到0.0/0.
- C. 允許 HTTPS 輸出到埠 443 的網路應用例項。
- D. 允許HTTPS從網路應用程式例項中輸入埠443的流量.
- E. 允許HTTPS在8443號埠的健康檢查中存取網路應用例項。
- F. 允許HTTPS從網路應用例項進入8443埠健康檢查。

**答案**
A,C,E



**詳解**
正確答案是 **A, C, E**。
- A：允許HTTPS從0.0.0.0/0進入港口443。此選項符合題目條件，能有效滿足核心需求。
- C：允許 HTTPS 輸出到埠 443 的網路應用例項 。此選項符合題目條件，能有效滿足核心需求。
- E：允許HTTPS在8443號埠的健康檢查中存取網路應用例項。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：允許港口443的所有出港流量達到0.0/0。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：允許HTTPS從網路應用程式例項中輸入埠443的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #974

**題目**
一家公司在AWS上託管一個應用程式. 該應用程式使使用者能夠上傳照片,並將照片儲存在Amazon S3桶中. 公司希望使用Amazon CloudFront和自定義域名,在eu-West-1 區域(Region)上傳照片檔案至S3 儲存桶(S3 bucket). 哪種解決辦法能滿足這些要求?(選二.

**選項**
- A. 使用AWS Certificate Manager(ACM)在我們東-1區域(Region)中建立公開憑證. 在 CloudFront 中使用憑證。
- B. 使用 AWS Certificate Manager(ACM) 在 eu-west-1 建立公開憑證,使用 CloudFront 中的憑證.
- C. 配置 Amazon S3 允許從 CloudFront 上傳. 配置 S3 Transfer Acceleration.
- D. 配置 Amazon S3 允許從 CloudFront 起源 存取控制(access control)(OAC) 上傳.
- E. 配置 Amazon S3 允許從 CloudFront 上傳. 配置 Amazon S3 網站端點。

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：使用AWS Certificate Manager(ACM)在我們東-1區域(Region)中建立公開憑證. 在 CloudFront 中使用憑證 。此選項符合題目條件，能有效滿足核心需求。
- D：配置 Amazon S3 允許從 CloudFront 起源 存取控制(access control)(OAC) 上傳。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：使用 AWS Certificate Manager(ACM) 在 eu-west-1 建立公開憑證,使用 CloudFront 中的憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon S3 允許從 CloudFront 上傳. 配置 S3 Transfer Acceleration。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：配置 Amazon S3 允許從 CloudFront 上傳. 配置 Amazon S3 網站端點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #975

**題目**
天氣預報公司不斷從各種感測器收集溫度讀數。 一個現有的資料攝入過程收集讀數,並將讀數彙總為更大的Apache Parquet檔案. 之後的過程透過使用客戶端的加密(encryption)與KMS管理的金鑰(CSE-KMS)加密檔案. 最後,這一過程將檔案寫到一個Amazon S3桶上,每個日曆日都有單獨的字首. 公司希望偶爾對資料進行SQL查詢,為特定日曆日採集樣本移動平均值. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置 Amazon Athena 讀取加密檔案。 在Amazon S3中直接執行資料上的SQL查詢.
- B. 使用 Amazon S3 選擇在 Amazon S3 中直接執行資料上的 SQL 查詢.
- C. 配置 Amazon Redshift 讀取加密檔案。 使用 Redshift Spectrum 和 Redshift 查詢編輯器 v2 直接在 Amazon S3 中執行資料上的 SQL 查詢.
- D. 配置 Amazon EMR 無伺服器讀取加密檔案. 使用Apache SparkeSQL直接在Amazon S3中執行資料上的SQL查詢.

**答案**
A


**詳解**
正確答案是 **A**。
- A：配置 Amazon Athena 讀取加密檔案。 在Amazon S3中直接執行資料上的SQL查詢。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：使用 Amazon S3 選擇在 Amazon S3 中直接執行資料上的 SQL 查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置 Amazon Redshift 讀取加密檔案。 使用 Redshift Spectrum 和 Redshift 查詢編輯器 v2 直接在 Amazon S3 中執行資料上的 SQL 查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置 Amazon EMR 無伺服器讀取加密檔案. 使用Apache SparkeSQL直接在Amazon S3中執行資料上的SQL查詢。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #976

**題目**
一家公司正在對AWS實施新的應用程式。 該公司將在多個AWS區域跨多個可用區(Availability Zones)的多個Amazon EC2例項上執行該應用程式. 該應用程式將透過網際網路提供。 使用者將從世界各地存取該應用程式。 公司希望確保每個存取應用程式的使用者被髮送到最接近使用者位置的EC2例項. 哪種解決辦法能滿足這些要求?

**選項**
- A. 執行Amazon Route 53地理路線政策。 使用網易的應用程式負載平衡器(Application Load Balancer)在同一個區域(Region)範圍內分配所有可用區(Availability Zones)的流量.
- B. 實施Amazon Route 53地理近距離路線政策. 使用網易的網路負載平衡器(Network Load Balancer)在同一個區域(Region)範圍內分配所有可用區(Availability Zones)的流量.
- C. 實施Amazon Route 53多值答案路由政策. 使用網易的應用程式負載平衡器(Application Load Balancer)在同一個區域(Region)範圍內分配所有可用區(Availability Zones)的流量.
- D. 執行Amazon Route 53加權路線政策。 使用網易的網路負載平衡器(Network Load Balancer)在同一個區域(Region)範圍內分配所有可用區(Availability Zones)的流量.

**答案**
B


**詳解**
正確答案是 **B**。
- B：實施Amazon Route 53地理近距離路線政策. 使用網易的網路負載平衡器(Network Load Balancer)在同一個區域(Region)範圍內分配所有可用區(Availability Zones)的流量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：執行Amazon Route 53地理路線政策。 使用網易的應用程式負載平衡器(Application Load Balancer)在同一個區域(Region)範圍內分配所有可用區(Availability Zones)的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：實施Amazon Route 53多值答案路由政策. 使用網易的應用程式負載平衡器(Application Load Balancer)在同一個區域(Region)範圍內分配所有可用區(Availability Zones)的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：執行Amazon Route 53加權路線政策。 使用網易的網路負載平衡器(Network Load Balancer)在同一個區域(Region)範圍內分配所有可用區(Availability Zones)的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #977

**題目**
一家金融服務公司計劃在AWS上推出新的應用程式,處理敏感的金融交易. 該公司將在Amazon EC2 執行個體中部署該應用程式。 公司將為MySQL使用Amazon RDS作為資料庫(database). 公司的安全政策規定,資料必須在休息和過境時加密。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 透過使用 AWS KMS 管理的金鑰,為 MySQL 配置 Amazon RDS 的 靜態加密(encryption at rest)。 為傳輸中加密(encryption in transit)配置 AWS Certificate Manager(ACM) SSL/TLS憑證.
- B. 透過使用 AWS KMS 管理的金鑰,為 MySQL 配置 Amazon RDS 的 靜態加密(encryption at rest)。 為傳輸中加密(encryption in transit)配置 IPsec 隧道.
- C. 在為MySQL儲存Amazon RDS中的資料之前,先實施第三方應用級別資料加密(encryption). 為傳輸中加密(encryption in transit)配置 AWS Certificate Manager(ACM) SSL/TLS憑證.
- D. 使用 AWS KMS 管理的金鑰為 MySQL 配置 Amazon RDS 的 靜態加密(encryption at rest)。 配置一個 VPN 連線, 使私人連線能夠在中轉中加密資料。

**答案**
A


**詳解**
正確答案是 **A**。
- A：透過使用 AWS KMS 管理的金鑰,為 MySQL 配置 Amazon RDS 的 靜態加密(encryption at rest)。 為傳輸中加密(encryption in transit)配置 AWS Certificate Manager(ACM) SSL/TLS憑證。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：透過使用 AWS KMS 管理的金鑰,為 MySQL 配置 Amazon RDS 的 靜態加密(encryption at rest)。 為傳輸中加密(encryption in transit)配置 IPsec 隧道。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在為MySQL儲存Amazon RDS中的資料之前,先實施第三方應用級別資料加密(encryption). 為傳輸中加密(encryption in transit)配置 AWS Certificate Manager(ACM) SSL/TLS憑證。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 AWS KMS 管理的金鑰為 MySQL 配置 Amazon RDS 的 靜態加密(encryption at rest)。 配置一個 VPN 連線, 使私人連線能夠在中轉中加密資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #978

**題目**
一家公司正在將原創Oracle 資料庫(database) 遷移到一個Amazon RDS,用於Oracle 資料庫(database). 公司需要保留資料90天,以滿足監管要求. 公司還必須能夠將資料庫(database)恢復到特定的時間點,最長可達14天. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立 Amazon RDS 自動備份. 將保留期定為90天。
- B. 每天建立Amazon RDS手冊快照(snapshot). 刪除超過90天的手動快照。
- C. 使用甲骨文的Amazon Aurora Clone特性建立時點恢復. 刪除超過90天的克隆。
- D. 建立一個備份(backup)計劃,使用AWS Backup為Amazon RDS保留期為90天.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon RDS 自動備份. 將保留期定為90天。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：每天建立Amazon RDS手冊快照(snapshot). 刪除超過90天的手動快照。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用甲骨文的Amazon Aurora Clone特性建立時點恢復. 刪除超過90天的克隆。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個備份(backup)計劃,使用AWS Backup為Amazon RDS保留期為90天。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #979

**題目**
一家公司正在開發一個新的應用程式,使用關係資料庫(database)儲存使用者資料和應用配置. 公司期望該應用程式有穩定的使用者增長. 該公司預計資料庫(database)的用法是可變的和讀重的,偶爾也有寫作. 公司希望以成本最佳化資料庫(database)解決方案. 公司希望使用AWS管理的資料庫(database)解決方案來提供必要的效能. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在Amazon RDS上部署資料庫(database). 使用提供IOPS SSD儲存,以確保讀寫操作的一致效能.
- B. 在Amazon Aurora上部署資料庫(database),根據實際使用情況自動擴大資料庫(database)容量以適應工作量.
- C. 在Amazon DynamoDB上部署資料庫(database)型. 使用點播容量模式自動縮放吞吐量(throughput),以適應工作量.
- D. 在Amazon RDS上部署資料庫(database). 使用磁儲存,並使用讀取複製件,以適應工作量.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在Amazon Aurora上部署資料庫(database),根據實際使用情況自動擴大資料庫(database)容量以適應工作量。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Amazon RDS上部署資料庫(database). 使用提供IOPS SSD儲存,以確保讀寫操作的一致效能。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Amazon DynamoDB上部署資料庫(database)型. 使用點播容量模式自動縮放吞吐量(throughput),以適應工作量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon RDS上部署資料庫(database). 使用磁儲存,並使用讀取複製件,以適應工作量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #980

**題目**
一家公司在VPC內的若干Amazon EC2例項上託管其應用程式。 該公司為每個客戶建立了專用的Amazon S3桶,將相關資訊儲存在Amazon S3中. 公司希望確保執行在EC2例項上的應用程式只能安全地存取屬於公司AWS帳戶的S3桶. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 為附在VPC上的Amazon S3建立一個閘道器端點. 更新IAM 執行個體設定檔(instance profile)政策,只提供對應用程式需要的特定桶的存取.
- B. 在公共子網中建立一個NAT閘道器,其安全群組(security group)只允許存取Amazon S3. 更新路由表以使用 NAT Gateway。
- C. 為 Amazon S3 建立一個閘道器端點,該端點附在 VPUpdate IAM 執行個體設定檔(instance profile) 政策上,帶有拒絕動作和以下條件金鑰:
- D. 在公共子網中建立一個NAT Gateway. 更新路由表以使用NAT Gateway. 為所有桶指定桶保單,並帶有拒絕動作和下列條件:

**答案**
A


**詳解**
正確答案是 **A**。
- A：為附在VPC上的Amazon S3建立一個閘道器端點. 更新IAM 執行個體設定檔(instance profile)政策,只提供對應用程式需要的特定桶的存取。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在公共子網中建立一個NAT閘道器,其安全群組(security group)只允許存取Amazon S3. 更新路由表以使用 NAT Gateway 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為 Amazon S3 建立一個閘道器端點,該端點附在 VPUpdate IAM 執行個體設定檔(instance profile) 政策上,帶有拒絕動作和以下條件金鑰:。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在公共子網中建立一個NAT Gateway. 更新路由表以使用NAT Gateway. 為所有桶指定桶保單,並帶有拒絕動作和下列條件:。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #981

**題目**
一家公司正在AWS上建立一個基於雲的應用程式,它將處理敏感的客戶資料. 該應用程式使用Amazon RDS用於資料庫(database),Amazon S3用於物件儲存,以及S3事件通知,引用AWS Lambda用於無伺服器處理. 公司使用AWS IAM身份中心管理使用者憑證. 開發,測試,運營團隊需要安全存取Amazon RDS和Amazon S3,同時確保敏感客戶資料的保密性. 解決辦法必須符合最小權限(least privilege)原則。 LEAST 營運開銷(operational overhead)符合這些要求的解決方案是什麼?

**選項**
- A. 使用與最小權限(least privilege)的IAM角色,允許所有隊伍進入. 將IAM角色指派給每個團隊,並配有定製的IAM政策,根據團隊職責確定Amazon RDS和S3物件存取的具體許可.
- B. 啟用帶有身份中心目錄的 IAM 身份中心。 建立和配置許可權集,顆粒式存取Amazon RDS和Amazon S3. 將所有團隊指派給擁有特定許可權的團體。
- C. 為所有團隊中每個成員建立基於角色許可權的單個IAM使用者. 根據使用者需求,為每個使用者指定IAM角色,並預設RDS和S3存取的政策. 採用IAM存取分析器進行定期的憑證評估。
- D. 使用AWS Organizations為每個團隊建立單獨的帳戶. 與最小權限(least privilege)實施跨帳戶IAM角色. 根據團隊角色和責任給予RDS和S3存取特定許可.

**答案**
B


**詳解**
正確答案是 **B**。
- B：啟用帶有身份中心目錄的 IAM 身份中心。 建立和配置許可權集,顆粒式存取Amazon RDS和Amazon S3. 將所有團隊指派給擁有特定許可權的團體。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用與最小權限(least privilege)的IAM角色,允許所有隊伍進入. 將IAM角色指派給每個團隊,並配有定製的IAM政策,根據團隊職責確定Amazon RDS和S3物件存取的具體許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為所有團隊中每個成員建立基於角色許可權的單個IAM使用者. 根據使用者需求,為每個使用者指定IAM角色,並預設RDS和S3存取的政策. 採用IAM存取分析器進行定期的憑證評估。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Organizations為每個團隊建立單獨的帳戶. 與最小權限(least privilege)實施跨帳戶IAM角色. 根據團隊角色和責任給予RDS和S3存取特定許可。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #982

**題目**
一個公司有一個Amazon S3桶,裡面裝有敏感的資料檔案. 公司擁有一個在虛擬機器上執行的應用程式,位於一個premess資料中心. 該公司目前使用AWS IAM身份中心. 該應用程式需要臨時存取S3 儲存桶(S3 bucket)中的檔案. 公司希望讓應用程式安全地存取S3 儲存桶(S3 bucket)中的檔案. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立一個 S3 儲存桶政策(bucket policy), 允許從公司在虛擬資料中心的公共IP地址範圍存取桶。
- B. 任何地方使用IAM角色來獲取IAM身份中心允許存取S3 儲存桶(S3 bucket)的安全憑證. 配置虛擬機器,透過使用AWS CLI來承擔角色.
- C. 在虛擬機器上安裝 AWS CLI。 配置 AWS CLI , 並配有存取桶的 IAM 使用者的存取金鑰。
- D. 建立一個IAM使用者和政策,允許存取水桶. 在AWS Secrets Manager中為IAM使用者儲存存取金鑰和金鑰. 配置應用程式以在啟動時獲取存取金鑰和金鑰。

**答案**
B


**詳解**
正確答案是 **B**。
- B：任何地方使用IAM角色來獲取IAM身份中心允許存取S3 儲存桶(S3 bucket)的安全憑證. 配置虛擬機器,透過使用AWS CLI來承擔角色。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個 S3 儲存桶政策(bucket policy), 允許從公司在虛擬資料中心的公共IP地址範圍存取桶 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在虛擬機器上安裝 AWS CLI。 配置 AWS CLI , 並配有存取桶的 IAM 使用者的存取金鑰 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立一個IAM使用者和政策,允許存取水桶. 在AWS Secrets Manager中為IAM使用者儲存存取金鑰和金鑰. 配置應用程式以在啟動時獲取存取金鑰和金鑰 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #983

**題目**
一家公司將它的核心網路服務,包括目錄服務和DNS,託管在它的前提資料中心. 資料中心使用AWS Direct Connect(DX)與AWS雲連線. 計劃增加AWS帳戶,需要快速、具有成本效益和連貫一致地獲得這些網路服務。 解決方案設計師應採用何種方法滿足這些要求,其中的LEAST金額為營運開銷(operational overhead)?

**選項**
- A. 在每個新帳戶中建立 DX 連線。 將網路流量排到現場伺服器
- B. 在DX VPC中配置所有所需服務的VPC端點. 將網路流量排到現場伺服器
- C. 在每個新帳戶和DX VPRoute之間建立一個 VPN 連線,網路流量可以連線到預設伺服器。
- D. 配置帳戶之間的 AWS 過渡閘道器。 將DX指定為過境閘道器,將路由網路流量指定為前提伺服器.

**答案**
D


**詳解**
正確答案是 **D**。
- D：配置帳戶之間的 AWS 過渡閘道器。 將DX指定為過境閘道器,將路由網路流量指定為前提伺服器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在每個新帳戶中建立 DX 連線。 將網路流量排到現場伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：在DX VPC中配置所有所需服務的VPC端點. 將網路流量排到現場伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在每個新帳戶和DX VPRoute之間建立一個 VPN 連線,網路流量可以連線到預設伺服器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #984

**題目**
一家公司在一個AWS 區域(Region)中託管其主要公共網路應用,跨越多個可用區(Availability Zones). 該應用使用Amazon EC2 Auto Scaling 群組(Auto Scaling group)和應用程式負載平衡器(Application Load Balancer)(ALB). 網路開發團隊需要一個成本最佳化的計算解決方案,以提高公司在全球向數百萬客戶提供動態內容的能力. 哪種解決辦法能滿足這些要求?

**選項**
- A. 建立 Amazon CloudFront 分佈。 配置已有的 ALB 為源。
- B. 根據每個客戶的地理位置,使用Amazon Route 53為ALB和EC2的流量提供服務.
- C. 建立 Amazon S3 桶, 並啟用公開讀取許可權。 將網路應用程式遷移到 S3 儲存桶(S3 bucket)。 為網站託管配置 S3 儲存桶(S3 bucket)。
- D. 使用AWS Direct Connect直接服務內容從網路應用程式到每個客戶的所在地.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立 Amazon CloudFront 分佈。 配置已有的 ALB 為源 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：根據每個客戶的地理位置,使用Amazon Route 53為ALB和EC2的流量提供服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 Amazon S3 桶, 並啟用公開讀取許可權。 將網路應用程式遷移到 S3 儲存桶(S3 bucket)。 為網站託管配置 S3 儲存桶(S3 bucket) 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Direct Connect直接服務內容從網路應用程式到每個客戶的所在地。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #985

**題目**
一家公司在AWS儲存使用者資料. 資料在工作時間內隨高峰期使用而持續使用。 存取模式各有不同,有些資料一次幾個月都沒有使用. 解決方案設計師必須選擇成本效益高的解決方案,在維持高可用性(high availability)的同時保持最高耐久性. 哪些儲存解決方案符合這些要求?

**選項**
- A. Amazon S3標準
- B. 亞馬遜 S3 Intelligent-Tiering
- C. 亞馬遜 S3 Glacier Deep Archive
- D. Amazon S3 一個區-不經常存取(S3 One Zone-IA)

**答案**
B


**詳解**
正確答案是 **B**。
- B：亞馬遜 S3 Intelligent-Tiering。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：Amazon S3標準。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：亞馬遜 S3 Glacier Deep Archive。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon S3 一個區-不經常存取(S3 One Zone-IA)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #986

**題目**
一個公司正在測試一個執行在 Amazon EC2 Linux 例項上的應用程式. EC2例項附有一個單500GB亞馬遜彈性塊儲存器(Amazon EBS)通用SSO(gp2)卷. 該公司將在Auto Scaling 群組(Auto Scaling group)的多個EC2 執行個體中部署該應用程式。 所有例項都要求存取儲存在EBS 磁碟區中的資料. 公司需要一個高度可用且具有彈性的解決方案,不會對應用程式的程式碼進行重大修改. 哪種解決辦法能滿足這些要求?

**選項**
- A. 提供使用NFS伺服器軟體的EC2例項. 在例項中附加單500GB gp2 EBS 磁碟區.
- B. 為Windows檔案伺服器系統提供Amazon FSx. 在單一的可用區(Availability Zone)內將檔案系統配置為SMB檔案儲存器.
- C. 提供兩個250GB的IOPS SSD EBS 磁碟區的EC2例項。
- D. 提供亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 配置檔案系統以使用通用效能模式.

**答案**
D


**詳解**
正確答案是 **D**。
- D：提供亞馬遜彈性檔案系統(Amazon EFS)檔案系統. 配置檔案系統以使用通用效能模式。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：提供使用NFS伺服器軟體的EC2例項. 在例項中附加單500GB gp2 EBS 磁碟區。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為Windows檔案伺服器系統提供Amazon FSx. 在單一的可用區(Availability Zone)內將檔案系統配置為SMB檔案儲存器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：提供兩個250GB的IOPS SSD EBS 磁碟區的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #987

**題目**
一家公司最近為其客戶推出了新的應用程式。 該應用程式執行在兩個可用區(Availability Zones)的多個Amazon EC2例項上. 終端使用者使用TCP與應用程式通訊. 應用程式必須高度可用,必須隨著使用者數量的增加而自動縮放. 哪些步驟的組合將以符合成本效益的方式滿足這些要求?(選二.

**選項**
- A. 在EC2 執行個體前新增一個網路負載平衡器(Network Load Balancer).
- B. 為 EC2 例項配置 Auto Scaling 群組(Auto Scaling group)。
- C. 在EC2 執行個體前新增一個 應用程式負載平衡器(Application Load Balancer)。
- D. 手動為應用程式新增更多的EC2 執行個體.
- E. 在EC2 執行個體前新增一個負載平衡器(Load Balancer)閘道器.

**答案**
B,C



**詳解**
正確答案是 **B, C**。
- B：為 EC2 例項配置 Auto Scaling 群組(Auto Scaling group) 。此選項符合題目條件，能有效滿足核心需求。
- C：在EC2 執行個體前新增一個 應用程式負載平衡器(Application Load Balancer) 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：在EC2 執行個體前新增一個網路負載平衡器(Network Load Balancer)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：手動為應用程式新增更多的EC2 執行個體。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在EC2 執行個體前新增一個負載平衡器(Load Balancer)閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #988

**題目**
一個公司正在設計一個使用AWS雲的新移動應用程式的架構. 公司使用AWS Organizations中的組織單位(OUs)管理其帳戶. 公司希望透過使用敏感和非敏感值來標記具有資料敏感性的Amazon EC2例項. IAM 身份不能刪除標籤或建立沒有標籤的例項。 哪些步驟的組合將滿足這些要求?(選二.

**選項**
- A. 在組織中,建立新的標記政策,規定資料靈敏度標記鍵和所需的值. 執行 EC2 例項的標記值。 將標籤策略附加到相應的 OU 上。
- B. 在組織中,建立新的服務控制政策(SCP),規定資料靈敏度標記鍵和所需的標記值. 執行 EC2 例項的標記值。 將 SCP 附加到相應的 OU。
- C. 建立標籤策略以拒絕未指定標籤金鑰時執行的事件。 建立另一個防止身份刪除標籤的標籤策略。 在相應的 OU 上附加標籤策略。
- D. 建立服務控制策略( SCP) 以拒絕在未指定標籤金鑰時建立例項。 建立另一個防止身份刪除標記的 SCP。 將SCP附在相應的OU上.
- E. 建立 AWS Config 規則,以檢查EC2 例項是否使用資料靈敏度標記和指定的值。 配置 AWS Lambda 函式,以便在找到不符合要求的資源時刪除資源。

**答案**
A,D



**詳解**
正確答案是 **A, D**。
- A：在組織中,建立新的標記政策,規定資料靈敏度標記鍵和所需的值. 執行 EC2 例項的標記值。 將標籤策略附加到相應的 OU 上 。此選項符合題目條件，能有效滿足核心需求。
- D：建立服務控制策略( SCP) 以拒絕在未指定標籤金鑰時建立例項。 建立另一個防止身份刪除標記的 SCP。 將SCP附在相應的OU上。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：在組織中,建立新的服務控制政策(SCP),規定資料靈敏度標記鍵和所需的標記值. 執行 EC2 例項的標記值。 將 SCP 附加到相應的 OU 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立標籤策略以拒絕未指定標籤金鑰時執行的事件。 建立另一個防止身份刪除標籤的標籤策略。 在相應的 OU 上附加標籤策略 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：建立 AWS Config 規則,以檢查EC2 例項是否使用資料靈敏度標記和指定的值。 配置 AWS Lambda 函式,以便在找到不符合要求的資源時刪除資源 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #989

**題目**
一家公司在AWS上執行資料庫(database)工作量,這是該公司客戶門戶的後端. 該公司在Amazon RDS上為PostgreSQL經營一個多AZ 資料庫(database)叢集. 公司需要實施30天的備份(backup)保留政策(retention policy). 該公司目前同時擁有自動RDS備份和手動RDS備份. 公司希望維持兩種時間不到30天的現有RDS備份. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 使用 AWS Backup 配置 RDS 備份(backup) 保留政策(retention policy) 至 30 天的自動備份. 手動刪除超過30天的手動備份.
- B. 禁用 RDS 自動備份。 刪除超過30天的自動備份和人工備份. 配置RDS 備份(backup) 保留政策(retention policy)至30天的自動備份.
- C. 配置RDS 備份(backup) 保留政策(retention policy)至30天的自動備份. 手動刪除超過30天的手動備份.
- D. 禁用 RDS 自動備份。 透過使用AWS Cloud Formation自動刪除超過30天的自動備份和手動備份. 配置RDS 備份(backup) 保留政策(retention policy)至30天的自動備份.

**答案**
C


**詳解**
正確答案是 **C**。
- C：配置RDS 備份(backup) 保留政策(retention policy)至30天的自動備份. 手動刪除超過30天的手動備份。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 AWS Backup 配置 RDS 備份(backup) 保留政策(retention policy) 至 30 天的自動備份. 手動刪除超過30天的手動備份。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：禁用 RDS 自動備份。 刪除超過30天的自動備份和人工備份. 配置RDS 備份(backup) 保留政策(retention policy)至30天的自動備份。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：禁用 RDS 自動備份。 透過使用AWS Cloud Formation自動刪除超過30天的自動備份和手動備份. 配置RDS 備份(backup) 保留政策(retention policy)至30天的自動備份。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #990

**題目**
一家公司正計劃將遺留的應用程式遷移到AWS. 該應用程式目前使用NFS通訊到一個premess儲存解決方案,以儲存應用程式資料. 應用程式不能被修改為為此目的使用NFS以外的任何其他通訊協議. 遷移後應該建議使用哪種儲存解決方案?

**選項**
- A. AWS 資料同步
- B. 亞馬遜彈性區塊儲存(Amazon EBS)
- C. 亞馬遜彈性檔案系統(Amazon EFS)
- D. Amazon EMR 檔案系統(Amazon EMRFS)

**答案**
C


**詳解**
正確答案是 **C**。
- C：亞馬遜彈性檔案系統(Amazon EFS)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：AWS 資料同步。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：亞馬遜彈性區塊儲存(Amazon EBS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：Amazon EMR 檔案系統(Amazon EMRFS)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #991

**題目**
一家公司使用GPS追蹤器記錄數千只海龜的遷徙模式. 追蹤者每5分鐘檢查一次,看看一隻海龜是否移動了100多碼(91.4米). 如果龜類已經移動,其跟蹤器會將新的座標傳送到執行在3個Amazon EC2的網路應用上,在1個AWS 區域(Region)的多個可用區(Availability Zones)中執行. 最近,Web應用程式在處理一個出乎意料的追蹤器資料量時被淹沒. 資料丟失 無法重播事件。 解決方案設計師必須防止這個問題再次發生,並且需要至少使用營運開銷(operational overhead)的解決方案. 解決方案設計師應如何滿足這些要求?

**選項**
- A. 建立 Amazon S3 桶儲存資料。 配置應用程式掃描桶中的新資料進行處理。
- B. 建立 Amazon API Gateway 端點處理傳輸位置座標. 使用 AWS Lambda 函式來同時處理每個專案。
- C. 建立 Amazon 簡單佇列 服務( Amazon SQS) 佇列以儲存收到的資料。 配置用於對新訊息進行處理的民意測驗的應用程式。
- D. 建立 Amazon DynamoDB 表格以儲存傳輸位置座標。 配置用於查詢表格的新資料處理的應用程式。 使用 TTL 刪除已處理的資料。

**答案**
C


**詳解**
正確答案是 **C**。
- C：建立 Amazon 簡單佇列 服務( Amazon SQS) 佇列以儲存收到的資料。 配置用於對新訊息進行處理的民意測驗的應用程式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立 Amazon S3 桶儲存資料。 配置應用程式掃描桶中的新資料進行處理 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立 Amazon API Gateway 端點處理傳輸位置座標. 使用 AWS Lambda 函式來同時處理每個專案 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立 Amazon DynamoDB 表格以儲存傳輸位置座標。 配置用於查詢表格的新資料處理的應用程式。 使用 TTL 刪除已處理的資料 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #992

**題目**
一個公司的軟體開發團隊需要一個Amazon RDS多AZ叢集. RDS叢集將作為部署在房地的桌面客戶端的後端。 桌面客戶端需要直接連線到RDS叢集. 公司必須賦予開發團隊與叢集連線的能力,在團隊在辦公室時使用客戶端. 哪種解決方案能夠安全地提供所需的連線?

**選項**
- A. 建立VPC和兩個公共子網. 在公共子網建立 RDS 叢集。 使用AWS站點對站點VPN,在公司辦公室設有客戶閘道器.
- B. 建立 VPC 和兩個私有子網. 在私有子網中建立 RDS 叢集。 使用AWS站點對站點VPN,在公司辦公室設有客戶閘道器.
- C. 建立 VPC 和兩個私有子網. 在私有子網中建立 RDS 叢集。 使用RDS安全組允許公司的辦公室IP範圍存取叢集.
- D. 建立VPC和兩個公共子網. 在公共子網建立 RDS 叢集。 為每個開發者建立叢集使用者。 使用RDS安全組允許使用者存取叢集.

**答案**
B


**詳解**
正確答案是 **B**。
- B：建立 VPC 和兩個私有子網. 在私有子網中建立 RDS 叢集。 使用AWS站點對站點VPN,在公司辦公室設有客戶閘道器。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立VPC和兩個公共子網. 在公共子網建立 RDS 叢集。 使用AWS站點對站點VPN,在公司辦公室設有客戶閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 VPC 和兩個私有子網. 在私有子網中建立 RDS 叢集。 使用RDS安全組允許公司的辦公室IP範圍存取叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：建立VPC和兩個公共子網. 在公共子網建立 RDS 叢集。 為每個開發者建立叢集使用者。 使用RDS安全組允許使用者存取叢集。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #993

**題目**
一個解決方案架構師正在建立一個應用程式,將處理大量資料的批次處理. 輸入資料將儲存在Amazon S3中,輸出資料將儲存在不同的S3 儲存桶(S3 bucket)中. 為了處理,應用程式將在多個Amazon EC2例項之間透過網路傳輸資料. 解決方案設計師應如何降低資料傳輸總成本?

**選項**
- A. 將全部EC2 例項放在 Auto Scaling 群組(Auto Scaling group) 中。
- B. 將所有EC2 例項放在 AWS 區域(Region) 中。
- C. 將所有EC2例項放在相同的可用區(Availability Zone)中。
- D. 在多個可用區(Availability Zones)的私人子網中放置所有EC2例項.

**答案**
C


**詳解**
正確答案是 **C**。
- C：將所有EC2例項放在相同的可用區(Availability Zone)中。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將全部EC2 例項放在 Auto Scaling 群組(Auto Scaling group) 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：將所有EC2 例項放在 AWS 區域(Region) 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在多個可用區(Availability Zones)的私人子網中放置所有EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #994

**題目**
一個公司託管一個多級網路應用程式,使用Amazon Aurora MySQL DB叢集進行儲存. 應用程式級別以 Amazon EC2 為主機。 該公司的IT安全準則授權資料庫(database)憑證加密,每14天輪換一次. 一個解決方案設計師應該如何透過 " LEAST " 業務努力滿足這一要求?

**選項**
- A. 建立一個新的 AWS Key Management Service(AWS KMS) 加密(encryption) 鍵. 使用 AWS Secrets Manager 來建立一個新的秘密,使用 KMS 金鑰並配有適當的憑證. 把這個秘密與AuroraDB叢集聯絡起來. 配置自定義旋轉期14天.
- B. 在 AWS Systems Manager 引數儲存器中建立兩個引數:一個是使用者名稱作為字串引數,另一個是使用SafeString型別進行密碼. 為密碼引數選擇AWS Key Management Service(AWS KMS)加密(encryption),並將這些引數載入到應用級. 執行AWS Lambda功能,每14天旋轉密碼.
- C. 在AWS Key Management Service(AWS KMS)加密的亞馬遜彈性檔案系統(Amazon EFS)檔案系統中儲存一個包含憑證的檔案. 在應用程式級的所有 EC2 例項中掛載 EFS 檔案系統。 限制對檔案系統中檔案的存取,以便應用程式能夠讀取檔案,只有超級使用者可以修改檔案. 執行AWS Lambda功能,每14天在Aurora旋轉一次金鑰,並將新的憑證寫入檔案.
- D. 在AWS Key Management Service(AWS KMS)加密的Amazon S3桶中儲存包含憑證的檔案,應用程式用來載入憑證. 定期嚮應用程式下載檔案,以確保使用正確的憑證。 實施AWS Lambda功能,每14天旋轉一次Aurora憑證,並將這些憑證上傳到S3 儲存桶(S3 bucket)中的檔案.

**答案**
A


**詳解**
正確答案是 **A**。
- A：建立一個新的 AWS Key Management Service(AWS KMS) 加密(encryption) 鍵. 使用 AWS Secrets Manager 來建立一個新的秘密,使用 KMS 金鑰並配有適當的憑證. 把這個秘密與AuroraDB叢集聯絡起來. 配置自定義旋轉期14天。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在 AWS Systems Manager 引數儲存器中建立兩個引數:一個是使用者名稱作為字串引數,另一個是使用SafeString型別進行密碼. 為密碼引數選擇AWS Key Management Service(AWS KMS)加密(encryption),並將這些引數載入到應用級. 執行AWS Lambda功能,每14天旋轉密碼。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在AWS Key Management Service(AWS KMS)加密的亞馬遜彈性檔案系統(Amazon EFS)檔案系統中儲存一個包含憑證的檔案. 在應用程式級的所有 EC2 例項中掛載 EFS 檔案系統。 限制對檔案系統中檔案的存取,以便應用程式能夠讀取檔案,只有超級使用者可以修改檔案. 執行AWS Lambda功能,每14天在Aurora旋轉一次金鑰,並將新的憑證寫入檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在AWS Key Management Service(AWS KMS)加密的Amazon S3桶中儲存包含憑證的檔案,應用程式用來載入憑證. 定期嚮應用程式下載檔案,以確保使用正確的憑證。 實施AWS Lambda功能,每14天旋轉一次Aurora憑證,並將這些憑證上傳到S3 儲存桶(S3 bucket)中的檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #995

**題目**
一家流媒體公司正在重建其基礎設施,以適應使用者每天消費的日益增長的影片內容需求。 公司需要處理terabyte大小的影片,以遮蔽影片中的一些內容. 影片處理可長達20分鐘. 該公司需要一種能夠隨需求而擴大並保持成本效益的解決辦法。 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用AWS Lambda功能處理影片. 在Amazon DynamoDB中儲存影片後設資料. 在亞馬遜S3 Intelligent-Tiering儲存影片內容.
- B. 使用亞馬遜彈性容器服務(Amazon ECS)和AWS Fargate來實施微服務處理影片. 在Amazon Aurora中儲存影片後設資料. 在亞馬遜S3 Intelligent-Tiering儲存影片內容.
- C. 在應用程式負載平衡器(Application Load Balancer)(ALB)後面的Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體處理影片. 以Amazon S3標準儲存影片內容. 使用亞馬遜簡易佇列服務(Amazon SQS)進行排隊和解析處理任務.
- D. 在Amazon EC2上的Amazon Elastic Kubernetes Service(Amazon EKS)上部署一個集裝箱化的影片處理應用程式. 將影片後設資料儲存於 Amazon RDS 在一個單獨的 可用區(Availability Zone). 在亞馬遜S3 Glacier Deep Archive儲存影片內容.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用亞馬遜彈性容器服務(Amazon ECS)和AWS Fargate來實施微服務處理影片. 在Amazon Aurora中儲存影片後設資料. 在亞馬遜S3 Intelligent-Tiering儲存影片內容。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用AWS Lambda功能處理影片. 在Amazon DynamoDB中儲存影片後設資料. 在亞馬遜S3 Intelligent-Tiering儲存影片內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在應用程式負載平衡器(Application Load Balancer)(ALB)後面的Auto Scaling 群組(Auto Scaling group)中使用Amazon EC2 執行個體處理影片. 以Amazon S3標準儲存影片內容. 使用亞馬遜簡易佇列服務(Amazon SQS)進行排隊和解析處理任務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon EC2上的Amazon Elastic Kubernetes Service(Amazon EKS)上部署一個集裝箱化的影片處理應用程式. 將影片後設資料儲存於 Amazon RDS 在一個單獨的 可用區(Availability Zone). 在亞馬遜S3 Glacier Deep Archive儲存影片內容。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #996

**題目**
一家公司在一個Kubernetes叢集上執行一個基於前提的應用程式. 公司最近增加了數百萬新客戶. 該公司現有的房地基礎設施無法應付大量新客戶。 公司需要將前置應用程式遷移到AWS雲. 公司將遷移到亞馬遜智慧Kubernetes Service(Amazon EKS)叢集. 公司不想管理AWS上新架構的基本計算基礎設施. 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用自控節點提供計算容量. 向新的 EKS 叢集部署應用程式。
- B. 使用管理節點組來提供計算能力. 向新的 EKS 叢集部署應用程式。
- C. 使用AWS Fargate來提供計算能力. 建立 Fargate 簡介。 使用 Fargate 配置檔案來部署應用程式。
- D. 使用帶卡彭特爾的有管理的節點組來提供計算能力. 向新的 EKS 叢集部署應用程式。

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用AWS Fargate來提供計算能力. 建立 Fargate 簡介。 使用 Fargate 配置檔案來部署應用程式 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用自控節點提供計算容量. 向新的 EKS 叢集部署應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用管理節點組來提供計算能力. 向新的 EKS 叢集部署應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用帶卡彭特爾的有管理的節點組來提供計算能力. 向新的 EKS 叢集部署應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #997

**題目**
一家公司正在推出一個新的應用程式,需要結構化的資料庫(database)來儲存使用者簡介,應用程式設定和交易資料. 資料庫(database)必須隨應用流量而可擴充套件,並必須提供備份. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 透過使用開源軟體在Amazon EC2例項上部署自控的資料庫(database). 使用 Spot 執行個體 來最佳化成本。 配置自動備份到 Amazon S3.
- B. 使用Amazon RDS. 在通用SSD儲存的資料庫(database)中使用點播容量模式. 配置保留期為7天的自動備份。
- C. 使用Amazon Aurora 伺服器為資料庫(database). 使用無伺服器容量縮放。 配置自動備份到 Amazon S3.
- D. 在Amazon EC2 執行個體中部署一個自行管理的NoSQL 資料庫(database)。 使用保留例項來最佳化成本。 配置自動備份直接到亞馬遜 S3 Glacier Flexible Retrieval.

**答案**
C


**詳解**
正確答案是 **C**。
- C：使用Amazon Aurora 伺服器為資料庫(database). 使用無伺服器容量縮放。 配置自動備份到 Amazon S3。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：透過使用開源軟體在Amazon EC2例項上部署自控的資料庫(database). 使用 Spot 執行個體 來最佳化成本。 配置自動備份到 Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon RDS. 在通用SSD儲存的資料庫(database)中使用點播容量模式. 配置保留期為7天的自動備份。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在Amazon EC2 執行個體中部署一個自行管理的NoSQL 資料庫(database)。 使用保留例項來最佳化成本。 配置自動備份直接到亞馬遜 S3 Glacier Flexible Retrieval。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #998

**題目**
一家公司在AWS上執行其遺留的網路應用程式. 網路應用程式伺服器在一個VPC的公共子網中執行在Amazon EC2例項上. 網路應用伺服器收集客戶的影象,並將影象檔案儲存在本地附屬的亞馬遜彈性塊儲存器(Amazon EBS)卷中. 影象檔案每晚都會上傳到備份(backup)的Amazon S3桶. 一個解決方案架構師發現影象檔案正在透過公共端點上傳到Amazon S3. 解決方案架構師需要確保到Amazon S3的流量不使用公共端點. 哪種解決辦法能滿足這些要求?

**選項**
- A. 為S3 儲存桶(S3 bucket)建立閘道器VPC 端點(VPC endpoint),具有VPC的必要許可權. 配置子網路由表以使用閘道器 VPC 端點(VPC endpoint).
- B. 將S3 儲存桶(S3 bucket)移動到VPC內部. 配置子網路由表透過私人IP地址存取S3 儲存桶(S3 bucket).
- C. 在 VPConfit 內為 Amazon EC2 例項建立 Amazon S3 存取點,透過使用 Amazon S3 存取點上傳.
- D. 配置具有Amazon EC2例項的VPC和Amazon S3之間的AWS Direct Connect連線,以提供專用的網路路徑.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為S3 儲存桶(S3 bucket)建立閘道器VPC 端點(VPC endpoint),具有VPC的必要許可權. 配置子網路由表以使用閘道器 VPC 端點(VPC endpoint)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將S3 儲存桶(S3 bucket)移動到VPC內部. 配置子網路由表透過私人IP地址存取S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在 VPConfit 內為 Amazon EC2 例項建立 Amazon S3 存取點,透過使用 Amazon S3 存取點上傳。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置具有Amazon EC2例項的VPC和Amazon S3之間的AWS Direct Connect連線,以提供專用的網路路徑。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #999

**題目**
一家公司正在AWS上建立電子商務網站的原型. 該網站包括一個應用程式負載平衡器(Application Load Balancer),一個用於網路伺服器的Amazon EC2例項的Auto Scaling 群組(Auto Scaling group),以及一個用於執行於單AZ配置的MySQL DB例項的Amazon RDS. 網站搜尋產品目錄時反應緩慢. 產品目錄是MySQL 資料庫(database)中的一組表格,公司不經常更新. 一個解決方案架構師確定,當產品目錄搜尋發生時,DB例項上的CPU利用率較高. 解決方案設計師建議在搜尋產品目錄時如何改善網站的效能?

**選項**
- A. 將產品目錄修改為Amazon Redshift 資料庫(database). 使用COPY命令載入產品目錄表.
- B. 為 Redis 叢集執行 Amazon ElastiCache 以快取產品目錄。 使用懶惰的載入來填充快取。
- C. 在Auto Scaling 群組(Auto Scaling group)中新增額外的縮放政策,在資料庫(database)響應緩慢時啟動額外的EC2例項.
- D. 開啟 DB 例項的多 AZ 配置。 配置 EC2 例項以拖動傳送到 資料庫(database) 的產品目錄查詢。

**答案**
B


**詳解**
正確答案是 **B**。
- B：為 Redis 叢集執行 Amazon ElastiCache 以快取產品目錄。 使用懶惰的載入來填充快取 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：將產品目錄修改為Amazon Redshift 資料庫(database). 使用COPY命令載入產品目錄表。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在Auto Scaling 群組(Auto Scaling group)中新增額外的縮放政策,在資料庫(database)響應緩慢時啟動額外的EC2例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：開啟 DB 例項的多 AZ 配置。 配置 EC2 例項以拖動傳送到 資料庫(database) 的產品目錄查詢 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1000

**題目**
一家公司目前將5 TB的資料儲存在地殼區塊儲存系統中. 該公司目前的儲存解決方案為額外資料提供了有限的空間. 該公司在必須能夠以低水平的延遲(latency)檢索經常存取資料的房地執行應用程式。 公司需要基於雲的儲存解決方案. 哪種辦法能滿足這些要求?

**選項**
- A. 使用 Amazon S3 檔案閘道器. 將 S3 檔案閘道器與promise 應用程式整合,透過使用 SMB 檔案系統儲存和直接檢索檔案.
- B. 使用帶有快取卷的 AWS Storage Gateway 卷閘道器作為 ISSCSI 目標.
- C. 使用AWS Storage Gateway卷閘道器,以儲存的卷作為iSCSI目標.
- D. 使用AWS Storage Gateway磁帶閘道器. 將磁帶閘道器與虛擬磁帶儲存在Amazon S3的promess應用程式整合.

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用帶有快取卷的 AWS Storage Gateway 卷閘道器作為 ISSCSI 目標。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon S3 檔案閘道器. 將 S3 檔案閘道器與promise 應用程式整合,透過使用 SMB 檔案系統儲存和直接檢索檔案。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Storage Gateway卷閘道器,以儲存的卷作為iSCSI目標。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS Storage Gateway磁帶閘道器. 將磁帶閘道器與虛擬磁帶儲存在Amazon S3的promess應用程式整合。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1001

**題目**
一家公司經營食品運送服務. 由於近期的增長,該公司的訂單處理系統在高峰交通時段遇到了縮放問題. 目前的架構包括Amazon EC2例項在Auto Scaling 群組(Auto Scaling group)中收集應用程式命令. 在Auto Scaling 群組(Auto Scaling group)中第二組EC2 執行個體完成訂單. 訂單收集過程迅速發生,但訂單實現過程可能需要更長的時間. 資料不能因為一個縮放事件而丟失。 解決方案設計師必須確保訂單收集過程和訂單實現過程在高峰交通時段都能適當規模化. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Amazon CloudWatch 來監視兩個自動縮放組中的每個例項的 CPUUtiliation 度量衡。 配置每個Auto Scaling 群組(Auto Scaling group)的最低容量,以滿足其高峰工作量值.
- B. 使用 Amazon CloudWatch 來監視兩個自動縮放組中的每個例項的 CPUUtiliation 度量衡。 配置 Cloud Watch 提醒以引用 Amazon 簡單通知服務( Amazon SNS) 主題, 以便根據需要建立額外的 Auto 縮放組。
- C. 提供兩個亞馬遜簡易佇列服務(Amazon SQS)佇列. 用一個 SQS 佇列來收集命令。 使用第二個 SQS 佇列實現命令。 配置 EC2 例項以檢視各自的佇列。 根據佇列傳送的通知來縮放自動縮放組。
- D. 提供兩個亞馬遜簡易佇列服務(Amazon SQS)佇列. 用一個 SQS 佇列來收集命令。 使用第二個 SQS 佇列實現命令。 配置 EC2 例項以檢視各自的佇列。 根據每個佇列中的訊息數量來縮放自動縮放組。

**答案**
D


**詳解**
正確答案是 **D**。
- D：提供兩個亞馬遜簡易佇列服務(Amazon SQS)佇列. 用一個 SQS 佇列來收集命令。 使用第二個 SQS 佇列實現命令。 配置 EC2 例項以檢視各自的佇列。 根據每個佇列中的訊息數量來縮放自動縮放組。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon CloudWatch 來監視兩個自動縮放組中的每個例項的 CPUUtiliation 度量衡。 配置每個Auto Scaling 群組(Auto Scaling group)的最低容量,以滿足其高峰工作量值。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 Amazon CloudWatch 來監視兩個自動縮放組中的每個例項的 CPUUtiliation 度量衡。 配置 Cloud Watch 提醒以引用 Amazon 簡單通知服務( Amazon SNS) 主題, 以便根據需要建立額外的 Auto 縮放組 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：提供兩個亞馬遜簡易佇列服務(Amazon SQS)佇列. 用一個 SQS 佇列來收集命令。 使用第二個 SQS 佇列實現命令。 配置 EC2 例項以檢視各自的佇列。 根據佇列傳送的通知來縮放自動縮放組 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1002

**題目**
一個線上遊戲公司正在將使用者資料儲存轉換到Amazon DynamoDB,以支援該公司日益增長的使用者基礎. 當前的架構包括包含使用者配置,成就,以及遊戲中交易的DynamomDB表格. 公司需要設計一個堅固,持續可用,具有彈性的DynamoDB架構,為使用者保持無縫的遊戲體驗. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 在單一的 AWS 區域(Region) 中建立 DynamoDB 表格。 使用點播容量模式. 使用全球表格在多個區域複製資料。
- B. 使用 DynamoDB 加速器(DAX)來快取經常存取的資料. 在一個 AWS 區域(Region) 中部署表格,並允許自動縮放。 手動配置跨區域(Region) 複寫(Replication)到額外的區域.
- C. 在多個 AWS 區域建立 DynamoDB 表格。 使用點播容量模式. 使用DynamoDB流用於跨區域間跨區域(Region) 複寫(Replication).
- D. 使用DynamomDB全域性表用於自動多區域(Region) 複寫(replication). 在多個AWS地區部署表格. 使用提供容量模式。 啟用自動縮放。

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用DynamomDB全域性表用於自動多區域(Region) 複寫(replication). 在多個AWS地區部署表格. 使用提供容量模式。 啟用自動縮放 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在單一的 AWS 區域(Region) 中建立 DynamoDB 表格。 使用點播容量模式. 使用全球表格在多個區域複製資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用 DynamoDB 加速器(DAX)來快取經常存取的資料. 在一個 AWS 區域(Region) 中部署表格,並允許自動縮放。 手動配置跨區域(Region) 複寫(Replication)到額外的區域。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：在多個 AWS 區域建立 DynamoDB 表格。 使用點播容量模式. 使用DynamoDB流用於跨區域間跨區域(Region) 複寫(Replication)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1003

**題目**
一家公司經營其媒體在房地上提交申請。 公司希望降低儲存成本,並將所有資料移至Amazon S3. 內建渲染應用程式需要低度延遲(latency)存取儲存. 公司需要為應用程式設計儲存解決方案. 儲存解決方案必須保持預期的應用效能. 哪種儲存解決方案能夠以成本效益高的成本效益方式滿足這些要求?

**選項**
- A. 在Amazon S3上使用掛載點來存取Amazon S3中的資料,用於provises應用.
- B. 配置一個 Amazon S3 檔案閘道器,為premes 應用程式提供儲存.
- C. 將Amazon S3的資料複製到Windows檔案伺服器的Amazon FSx. 配置一個 Amazon FSx 檔案閘道器,為premes 應用程式提供儲存.
- D. 配置預設檔案伺服器。 使用Amazon S3 API連線到S3儲存器. 配置從預設檔案伺服器存取儲存的應用程式。

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置一個 Amazon S3 檔案閘道器,為premes 應用程式提供儲存。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：在Amazon S3上使用掛載點來存取Amazon S3中的資料,用於provises應用。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將Amazon S3的資料複製到Windows檔案伺服器的Amazon FSx. 配置一個 Amazon FSx 檔案閘道器,為premes 應用程式提供儲存。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：配置預設檔案伺服器。 使用Amazon S3 API連線到S3儲存器. 配置從預設檔案伺服器存取儲存的應用程式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1004

**題目**
一家公司將企業資源規劃系統設在我們東-1區域(Region)。 該系統執行於Amazon EC2 執行個體. 客戶使用EC2系統託管的公共API與企業資源規劃系統交換資訊。 國際客戶報告其資料中心的API響應時間緩慢。 哪種解決辦法能以成本效益高的方式改善國際客戶的反應時間?

**選項**
- A. 建立一個具有公共虛擬介面(VIF)的AWS Direct Connect連線,提供從每個客戶資料中心到我們-東-1的連線. 路由客戶API透過使用直接連線閘道器向ERP系統API提出請求.
- B. 在API前設定Amazon CloudFront分佈. 配置 CachingOptimized 管理快取策略,以提供更好的快取易用性。
- C. 設定 AWS 全球加速器. 為必要的埠配置收聽器。 為相應的區域配置端點組來分配流量. 為 API 在組中建立一個終點。
- D. 使用AWS站點對站點VPN在區域與客戶網路之間建立專用VPN隧道. 途經VPN連線線通往API.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在API前設定Amazon CloudFront分佈. 配置 CachingOptimized 管理快取策略,以提供更好的快取易用性 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立一個具有公共虛擬介面(VIF)的AWS Direct Connect連線,提供從每個客戶資料中心到我們-東-1的連線. 路由客戶API透過使用直接連線閘道器向ERP系統API提出請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：設定 AWS 全球加速器. 為必要的埠配置收聽器。 為相應的區域配置端點組來分配流量. 為 API 在組中建立一個終點 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用AWS站點對站點VPN在區域與客戶網路之間建立專用VPN隧道. 途經VPN連線線通往API。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1005

**題目**
一家公司利用公司在其網站上主持的調查來跟蹤客戶滿意度. 調查有時每個小時有數千名顧客參加。 調查結果目前以電子郵件方式傳送給公司,以便公司僱員能夠手動審查結果和評估客戶情緒。 公司希望實現客戶調查過程自動化. 過去12個月的調查結果必須提供。 哪種解決辦法能夠以最現代的可擴充套件方式滿足這些要求?

**選項**
- A. 將調查結果資料傳送到連線到亞馬遜簡易佇列服務的Amazon API Gateway端點(Amazon SQS)佇列. 建立一個 AWS Lambda 函式,以檢視 SQS 佇列,呼叫 Amazon Comprehend 進行情緒分析,並將結果儲存到 Amazon DynamoDB 表格中. 將所有記錄的TTL設定為未來365天.
- B. 將調查結果資料傳送給一個正在執行於Amazon EC2例項的API。 配置API將調查結果儲存為Amazon DynamoDB表格中的新記錄,呼叫Amazon Comprehend進行情緒分析,並將結果儲存在第二個DynamoDB表格中. 將所有記錄的TTL設定為未來365天.
- C. 將調查結果資料寫入Amazon S3桶。 使用 S3 事件通知來引用一個 AWS Lambda 函式來讀取資料並呼叫 Amazon Rekindition 進行情緒分析. 將情緒分析結果儲存在第二個S3 儲存桶(S3 bucket)中. 使用每桶的S3壽命週期政策在365天后過期物件.
- D. 將調查結果資料傳送到連線到亞馬遜簡易佇列服務的Amazon API Gateway端點(Amazon SQS)佇列. 配置 SQS 佇列以引用 AWS Lambda 函式呼叫 Amazon Lex 進行情緒分析,並將結果儲存到 Amazon DynamoDB 表格中. 將所有記錄的TTL設定為未來365天.

**答案**
A


**詳解**
正確答案是 **A**。
- A：將調查結果資料傳送到連線到亞馬遜簡易佇列服務的Amazon API Gateway端點(Amazon SQS)佇列. 建立一個 AWS Lambda 函式,以檢視 SQS 佇列,呼叫 Amazon Comprehend 進行情緒分析,並將結果儲存到 Amazon DynamoDB 表格中. 將所有記錄的TTL設定為未來365天。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：將調查結果資料傳送給一個正在執行於Amazon EC2例項的API。 配置API將調查結果儲存為Amazon DynamoDB表格中的新記錄,呼叫Amazon Comprehend進行情緒分析,並將結果儲存在第二個DynamoDB表格中. 將所有記錄的TTL設定為未來365天。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：將調查結果資料寫入Amazon S3桶。 使用 S3 事件通知來引用一個 AWS Lambda 函式來讀取資料並呼叫 Amazon Rekindition 進行情緒分析. 將情緒分析結果儲存在第二個S3 儲存桶(S3 bucket)中. 使用每桶的S3壽命週期政策在365天后過期物件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：將調查結果資料傳送到連線到亞馬遜簡易佇列服務的Amazon API Gateway端點(Amazon SQS)佇列. 配置 SQS 佇列以引用 AWS Lambda 函式呼叫 Amazon Lex 進行情緒分析,並將結果儲存到 Amazon DynamoDB 表格中. 將所有記錄的TTL設定為未來365天。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1006

**題目**
一家公司使用AWS Systems Manager進行例行管理和補丁Amazon EC2 執行個體. EC2 執行個體位於應用程式負載平衡器(Application Load Balancer)(ALB)背後的IP地址型別目標群體. 新的安全協議要求公司在補丁期間刪除EC2例項. 當公司試圖在下一個補丁中遵循安全協議時,公司在補丁視窗中接收錯誤. 哪些解決方案組合可以解決錯誤?(選二.

**選項**
- A. 將目標群體的目標型別從IP地址型別改為例項型別.
- B. 繼續使用現有的系統管理器文件而無需修改,因為它已經最佳化處理在 ALB 後面的 IP 地址型別目標組中的事件.
- C. 實施AWSEC2-PatchLoadBalanacerInstance系統管理器自動化文件來管理補丁過程.
- D. 使用系統管理器維護 Windows 自動刪除服務中的例項來補丁例項。
- E. 配置系統管理器狀態管理器將例項從服務中刪除並管理補丁排程. 使用ALB健康檢查來調整交通路線.

**答案**
C,D



**詳解**
正確答案是 **C, D**。
- C：實施AWSEC2-PatchLoadBalanacerInstance系統管理器自動化文件來管理補丁過程。此選項符合題目條件，能有效滿足核心需求。
- D：使用系統管理器維護 Windows 自動刪除服務中的例項來補丁例項 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：將目標群體的目標型別從IP地址型別改為例項型別。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：繼續使用現有的系統管理器文件而無需修改,因為它已經最佳化處理在 ALB 後面的 IP 地址型別目標組中的事件。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：配置系統管理器狀態管理器將例項從服務中刪除並管理補丁排程. 使用ALB健康檢查來調整交通路線。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1007

**題目**
一個醫療公司想在來自幾個客戶的大量臨床試驗資料上進行轉化. 公司必須從包含客戶資料的關聯資料庫(database)中提取資料. 之後公司將使用一系列複雜的規則來轉換資料. 公司將在改造完成後將資料載入到Amazon S3. 在公司將資料儲存在Amazon S3之前,所有資料必須加密處理。 所有資料都必須透過使用客戶特定金鑰加密. 用LEAST的業務努力滿足這些要求的辦法是什麼?

**選項**
- A. 為每個客戶建立一個 AWS Glue 工作. 在每個任務中附加一個安全配置,使用伺服器側的加密(encryption)與Amazon S3管理的金鑰(SSE-S3)加密資料.
- B. 為每個客戶建立一個Amazon EMR叢集. 在每個叢集中附加一個安全配置,使用客戶端側加密(encryption),並帶有自定義客戶端側根鍵(CSE-Custom)來加密資料.
- C. 為每個客戶建立一個 AWS Glue 工作. 在使用客戶端的加密(encryption)與AWS KMS管理的金鑰(CSE-KMS)加密資料的每個任務中附加安全配置.
- D. 為每個客戶建立一個Amazon EMR叢集. 在每個叢集中附加一個安全配置,使用伺服器側式加密(encryption)使用AWS KMS金鑰(SSE-KMS)加密資料.

**答案**
D


**詳解**
正確答案是 **D**。
- D：為每個客戶建立一個Amazon EMR叢集. 在每個叢集中附加一個安全配置,使用伺服器側式加密(encryption)使用AWS KMS金鑰(SSE-KMS)加密資料。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為每個客戶建立一個 AWS Glue 工作. 在每個任務中附加一個安全配置,使用伺服器側的加密(encryption)與Amazon S3管理的金鑰(SSE-S3)加密資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為每個客戶建立一個Amazon EMR叢集. 在每個叢集中附加一個安全配置,使用客戶端側加密(encryption),並帶有自定義客戶端側根鍵(CSE-Custom)來加密資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：為每個客戶建立一個 AWS Glue 工作. 在使用客戶端的加密(encryption)與AWS KMS管理的金鑰(CSE-KMS)加密資料的每個任務中附加安全配置。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1008

**題目**
一家公司在單一的Amazon EC2 On-Demand Incentry上主持一個網站分析應用程式. 分析應用具有很高的韌性,設計上以無狀態模式執行. 公司注意到應用程式在繁忙時期顯示效能退化的跡象,並出現5xx錯誤. 公司要使應用規模無縫. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 建立網路應用程式的亞馬遜機器影象(AMI). 利用AMI推出第二架EC2 強制實驗. 使用一個 應用程式負載平衡器(Application Load Balancer) 來在兩個EC2 例項中分配負載。
- B. 建立網路應用程式的亞馬遜機器影象(AMI). 利用AMI推出第二架EC2 強制實驗. 使用 Amazon Route 53 加權路由,在兩個EC2 例項中分配負載.
- C. 建立 AWS Lambda 函式來停止EC2 例項並更改例項型別。 當CPU利用率超過75%時,建立 Amazon CloudWatch 提醒以引用 Lambda 函式。
- D. 建立網路應用程式的亞馬遜機器影象(AMI). 將AMI應用到發射模板中. 建立包含發射模板的Auto Scaling 群組(Auto Scaling group). 配置發射模板以使用 Spot Fleet. 在Auto Scaling 群組(Auto Scaling group)上附加一架應用程式負載平衡器(Application Load Balancer).

**答案**
D


**詳解**
正確答案是 **D**。
- D：建立網路應用程式的亞馬遜機器影象(AMI). 將AMI應用到發射模板中. 建立包含發射模板的Auto Scaling 群組(Auto Scaling group). 配置發射模板以使用 Spot Fleet. 在Auto Scaling 群組(Auto Scaling group)上附加一架應用程式負載平衡器(Application Load Balancer)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立網路應用程式的亞馬遜機器影象(AMI). 利用AMI推出第二架EC2 強制實驗. 使用一個 應用程式負載平衡器(Application Load Balancer) 來在兩個EC2 例項中分配負載 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：建立網路應用程式的亞馬遜機器影象(AMI). 利用AMI推出第二架EC2 強制實驗. 使用 Amazon Route 53 加權路由,在兩個EC2 例項中分配負載。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：建立 AWS Lambda 函式來停止EC2 例項並更改例項型別。 當CPU利用率超過75%時,建立 Amazon CloudWatch 提醒以引用 Lambda 函式 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1009

**題目**
一家公司經營一個將資料儲存在Amazon S3桶內的環境. 物體每天經常被存取。 該公司對儲存在S3 儲存桶(S3 bucket)的資料有嚴格的data 加密(encryption)要求. 該公司目前使用AWS Key Management Service(AWS KMS)用於加密(encryption). 公司希望在不給AWS KMS打額外電話的情況下,最佳化與加密S3物件相關的成本. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用伺服器側式加密(encryption)配有Amazon S3管理金鑰(SSE-S3).
- B. 在新物件上使用S3 Bucket Key用於伺服器側加密(encryption)的AWS KMS金鑰(SSE-KMS).
- C. 使用客戶端的加密(encryption),由AWS KMS客戶端管理金鑰.
- D. 使用伺服器側式加密(encryption)與客戶提供的金鑰(SSE-C)儲存在AWS KMS中.

**答案**
B


**詳解**
正確答案是 **B**。
- B：在新物件上使用S3 Bucket Key用於伺服器側加密(encryption)的AWS KMS金鑰(SSE-KMS)。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用伺服器側式加密(encryption)配有Amazon S3管理金鑰(SSE-S3)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用客戶端的加密(encryption),由AWS KMS客戶端管理金鑰。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用伺服器側式加密(encryption)與客戶提供的金鑰(SSE-C)儲存在AWS KMS中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1010

**題目**
一家公司在虛擬機器(VMs)上執行多個工作量,位於一個promesse資料中心. 公司發展迅速. 現場資料中心無法迅速擴大規模以滿足業務需要。 公司希望將工作量轉移到AWS. 遷移時間敏感。 公司希望對非關鍵工作量採用升班戰略. 哪些步驟的組合將滿足這些要求?(選三.

**選項**
- A. 使用 AWS Schema 轉換工具(AWS SCT)來收集關於VMs的資料.
- B. 使用 AWS 應用程式遷移服務。 在 VM 上安裝 AWS 複寫(Replication) 代理。
- C. 完成VMs最初的複寫(replication). 在VMs上進行驗收試驗的發射試驗例項。
- D. 停止VM上的所有操作. 啟動切換例項。
- E. 使用AWS App2Container(A2C)來收集關於VMs的資料.
- F. 使用 AWS 資料庫(Database) 遷移服務(AWS DS)來遷移 VM.

**答案**
B,C,D



**詳解**
正確答案是 **B, C, D**。
- B：使用 AWS 應用程式遷移服務。 在 VM 上安裝 AWS 複寫(Replication) 代理 。此選項符合題目條件，能有效滿足核心需求。
- C：完成VMs最初的複寫(replication). 在VMs上進行驗收試驗的發射試驗例項。此選項符合題目條件，能有效滿足核心需求。
- D：停止VM上的所有操作. 啟動切換例項 。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：使用 AWS Schema 轉換工具(AWS SCT)來收集關於VMs的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：使用AWS App2Container(A2C)來收集關於VMs的資料。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1011

**題目**
一家公司在一個私人子網中託管一個應用程式. 該公司已經將該應用與亞馬遜·科尼託整合. 公司使用Amazon Cognitto使用者池認證使用者. 公司需要修改應用程式,以便應用程式能夠安全地將使用者檔案儲存在Amazon S3桶中. 哪些步驟的組合將安全地將Amazon S3與應用程式整合?(選二.

**選項**
- A. 建立一個Amazon Cognitto身份池,為使用者成功登入時生成安全的Amazon S3存取令牌.
- B. 使用現有的Amazon Cognitto使用者池為使用者成功登入時生成Amazon S3存取令牌.
- C. 在公司託管應用程式的同一VPC中建立一個Amazon S3 VPC 端點(VPC endpoint).
- D. 在 VPC 中建立一個 NAT 閘道器, 由公司託管應用程式。 向S3 儲存桶(S3 bucket)指定一項政策,拒絕亞馬遜·科尼奧托未啟動的任何請求.
- E. 在S3 儲存桶(S3 bucket)上附加一個只允許從使用者的IP地址存取的政策.

**答案**
A,C



**詳解**
正確答案是 **A, C**。
- A：建立一個Amazon Cognitto身份池,為使用者成功登入時生成安全的Amazon S3存取令牌。此選項符合題目條件，能有效滿足核心需求。
- C：在公司託管應用程式的同一VPC中建立一個Amazon S3 VPC 端點(VPC endpoint)。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- B：使用現有的Amazon Cognitto使用者池為使用者成功登入時生成Amazon S3存取令牌。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在 VPC 中建立一個 NAT 閘道器, 由公司託管應用程式。 向S3 儲存桶(S3 bucket)指定一項政策,拒絕亞馬遜·科尼奧托未啟動的任何請求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- E：在S3 儲存桶(S3 bucket)上附加一個只允許從使用者的IP地址存取的政策。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1012

**題目**
一家公司有一個三級網路應用程式,處理客戶的訂單. 網路層級包括一個應用程式負載平衡器(Application Load Balancer)背後的Amazon EC2例項. 處理層級由EC2例項組成. 公司透過使用Amazon Simple Quue Service(Amazon SQS)來解開網路層級和處理層級. 儲存層使用Amazon DynamoDB. 在高峰期,一些使用者報告訂單處理延遲和大廳. 公司注意到在這些延誤期間,EC2例項以100%的CPU使用率執行,SQS佇列填充. 高峰時期多變,不可預測. 公司要提高應用效能. 哪種解決辦法能滿足這些要求?

**選項**
- A. 使用 Amazon EC2 的預定縮放 自動縮放 , 在使用高峰期間縮小處理級例項。 使用 CPU 利用度量度來確定何時縮放。
- B. 使用Amazon ElastiCache在DynamoDB後端級前為Redis. 使用目標利用率作為衡量尺度來確定何時進行規模化.
- C. 新增 Amazon CloudFront 分佈以快取網路級的響應。 使用HTTP 延遲(latency)作為度量衡來確定何時縮放.
- D. 使用 Amazon EC2 自動縮放目標跟蹤策略來放大處理級例. 使用" 近似數偏差" 屬性來確定何時縮放。

**答案**
D


**詳解**
正確答案是 **D**。
- D：使用 Amazon EC2 自動縮放目標跟蹤策略來放大處理級例. 使用" 近似數偏差" 屬性來確定何時縮放 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用 Amazon EC2 的預定縮放 自動縮放 , 在使用高峰期間縮小處理級例項。 使用 CPU 利用度量度來確定何時縮放 。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：使用Amazon ElastiCache在DynamoDB後端級前為Redis. 使用目標利用率作為衡量尺度來確定何時進行規模化。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：新增 Amazon CloudFront 分佈以快取網路級的響應。 使用HTTP 延遲(latency)作為度量衡來確定何時縮放。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1013

**題目**
一家公司的生產環境由Amazon EC2On-Demand Incents組成,每週一至週六持續執行. 這些事件必須在星期天持續12小時,不能容忍中斷。 公司希望以成本最佳化生產環境. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 每週日僅持續12小時的EC2 執行個體的預定儲備採購。 每週一至週六之間經常出現的EC2採購標準保留例項。
- B. 每週日僅持續12小時的EC2採購可轉換儲備例項。 每週一至週六之間經常出現的EC2採購標準保留例項。
- C. 使用 Spot Ectorys 為每週日僅執行12小時的 EC2 例項。 每週一至週六之間經常出現的EC2採購標準保留例項。
- D. 使用 Spot Ectorys 為每週日僅執行12小時的 EC2 例項。 每週一至週六之間經常出現的EC2採購可轉換儲備例項。

**答案**
A


**詳解**
正確答案是 **A**。
- A：每週日僅持續12小時的EC2 執行個體的預定儲備採購。 每週一至週六之間經常出現的EC2採購標準保留例項。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：每週日僅持續12小時的EC2採購可轉換儲備例項。 每週一至週六之間經常出現的EC2採購標準保留例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用 Spot Ectorys 為每週日僅執行12小時的 EC2 例項。 每週一至週六之間經常出現的EC2採購標準保留例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：使用 Spot Ectorys 為每週日僅執行12小時的 EC2 例項。 每週一至週六之間經常出現的EC2採購可轉換儲備例項。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1014

**題目**
一個數字影象處理公司想將它的獨白應用程式遷移到AWS雲. 該公司處理數千幅影象,並生成大檔案,作為處理workfiow的一部分. 公司需要一個解決方案來管理越來越多的影象處理工作. 解決方案還必須減少影象處理workfiow中的手工任務. 公司不想管理解決方案的基本基礎設施。 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 使用亞馬遜彈性容器服務(Amazon ECS)與Amazon EC2 Spot 執行個體處理影象. 配置 Amazon 簡單佇列服務( Amazon SQS) 來協調 workfiow。 將已處理的檔案儲存在亞馬遜彈性檔案系統(Amazon EFS)中.
- B. 使用 AWS 批次任務處理影象。 使用 AWS Step 函式來協調 workfiow。 在Amazon S3桶中儲存已處理的檔案.
- C. 使用AWS Lambda函式和Amazon EC2 Spot 執行個體處理影象. 將已處理的檔案儲存在 Amazon FSx 中.
- D. 部署一組 Amazon EC2 例項處理影象。 使用 AWS Step 函式來協調 workfiow。 將已處理的檔案儲存在亞馬遜彈性塊儲存器(Amazon EBS)中。

**答案**
B


**詳解**
正確答案是 **B**。
- B：使用 AWS 批次任務處理影象。 使用 AWS Step 函式來協調 workfiow。 在Amazon S3桶中儲存已處理的檔案。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：使用亞馬遜彈性容器服務(Amazon ECS)與Amazon EC2 Spot 執行個體處理影象. 配置 Amazon 簡單佇列服務( Amazon SQS) 來協調 workfiow。 將已處理的檔案儲存在亞馬遜彈性檔案系統(Amazon EFS)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：使用AWS Lambda函式和Amazon EC2 Spot 執行個體處理影象. 將已處理的檔案儲存在 Amazon FSx 中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：部署一組 Amazon EC2 例項處理影象。 使用 AWS Step 函式來協調 workfiow。 將已處理的檔案儲存在亞馬遜彈性塊儲存器(Amazon EBS)中。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1015

**題目**
一家公司的影象託管網站讓世界各地的使用者能夠從他們的移動裝置上載,檢視和下載影象. 該公司目前以Amazon S3桶託管靜態網站. 由於網站的受歡迎程度不斷提高,網站的表現也有所下降. 使用者在上傳和下載影象時報告了延遲(latency)期. 公司必須提高網站的效能. 哪些解決辦法將滿足這些要求?

**選項**
- A. 為S3 儲存桶(S3 bucket)配置一個Amazon CloudFront發行版本,以提高下載效能. 啟用 S3 Transfer Acceleration 以提高上傳效能.
- B. 在多個 AWS 區域配置合適的 Amazon EC2 例項。 將應用程式移至 EC2 例項。 使用應用程式負載平衡器(Application Load Balancer)在EC2例項中平均分配網站流量. 配置 AWS 全球加速器,以低延遲(latency)滿足全球需求.
- C. 配置一個使用S3 儲存桶(S3 bucket)作為來源的Amazon CloudFront發行,以提高下載效能. 配置使用 CloudFront 上傳影象的應用程式,以提高上傳效能. 在多個 AWS 區域建立 S3 桶。 為桶配置複寫(replication)規則,以複製使用者基於使用者位置的資料. 將下載重定向到最接近每個使用者位置的S3 儲存桶(S3 bucket).
- D. 為S3 儲存桶(S3 bucket)配置AWS Global Accelerator,以提高網路效能. 為應用程式建立一個端點,用於使用S3 儲存桶(S3 bucket)的Global加速器.

**答案**
A


**詳解**
正確答案是 **A**。
- A：為S3 儲存桶(S3 bucket)配置一個Amazon CloudFront發行版本,以提高下載效能. 啟用 S3 Transfer Acceleration 以提高上傳效能。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- B：在多個 AWS 區域配置合適的 Amazon EC2 例項。 將應用程式移至 EC2 例項。 使用應用程式負載平衡器(Application Load Balancer)在EC2例項中平均分配網站流量. 配置 AWS 全球加速器,以低延遲(latency)滿足全球需求。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個使用S3 儲存桶(S3 bucket)作為來源的Amazon CloudFront發行,以提高下載效能. 配置使用 CloudFront 上傳影象的應用程式,以提高上傳效能. 在多個 AWS 區域建立 S3 桶。 為桶配置複寫(replication)規則,以複製使用者基於使用者位置的資料. 將下載重定向到最接近每個使用者位置的S3 儲存桶(S3 bucket)。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為S3 儲存桶(S3 bucket)配置AWS Global Accelerator,以提高網路效能. 為應用程式建立一個端點,用於使用S3 儲存桶(S3 bucket)的Global加速器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1016

**題目**
一家公司在一個VPC的應用程式負載平衡器(Application Load Balancer)(ALB)背後的私人子網中執行一個應用程式. VPC有一個NAT閘道器和一個網際網路閘道器. 該應用程式將Amazon S3 API稱為儲存物件. 根據公司的安全政策,應用程式的流量不得穿越網際網路. 哪種解決辦法能夠以成本效益高的方式滿足這些要求?

**選項**
- A. 配置 S3 介面端點。 建立安全群組(security group),允許外出流量至Amazon S3.
- B. 配置 S3 閘道器端點。 更新 VPC 路由表以使用端點。
- C. 配置一個S3 儲存桶政策(bucket policy),允許從分配給NAT閘道器的彈性IP地址的流量.
- D. 在部署遺留應用程式的同一子網中建立第二個NAT閘道器。 更新 VPC 路由表以使用第二個NAT閘道器.

**答案**
B


**詳解**
正確答案是 **B**。
- B：配置 S3 閘道器端點。 更新 VPC 路由表以使用端點 。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：配置 S3 介面端點。 建立安全群組(security group),允許外出流量至Amazon S3。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：配置一個S3 儲存桶政策(bucket policy),允許從分配給NAT閘道器的彈性IP地址的流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：在部署遺留應用程式的同一子網中建立第二個NAT閘道器。 更新 VPC 路由表以使用第二個NAT閘道器。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1017

**題目**
一家公司有一個應用程式,執行在Amazon EC2 執行個體上的Amazon Elastic Kubernetes Service(Amazon EKS)叢集上. 該應用程式有一個UI,它使用Amazon DynamoDB以及使用Amazon S3的資料服務作為應用程式部署的一部分. 公司必須確保為UI提供的EKS Pods只能存取Amazon DynamoDB,為資料服務提供的EKS Pods只能存取Amazon S3. 公司使用AWS身份和存取管理(IAM). 哪一種辦法滿足這些要求?

**選項**
- A. 為Amazon S3和DynamoDB存取建立單獨的IAM政策,並有所需的許可權. 在EC2 執行個體設定檔(instance profile)中附上IAM政策。 使用基於角色的存取控制(access control)(RBAC)來控制對Amazon S3或DynamoDB的存取,用於相應的EKS Pods.
- B. 為Amazon S3和DynamoDB存取建立單獨的IAM政策,並有所需的許可權. 將Amazon S3 IAM 政策(IAM policy)直接附加到EKS Pods中,用於資料服務和DynamoDB政策,加入EKS Pods中的UI.
- C. 為UI和資料服務建立單獨的Kubernetes服務帳戶,以承擔IAM的作用. 將 AmazonS3FullAccess 政策附入資料服務帳戶,並將 AmazonDynamoDBFullAccess 政策附入 UI 服務帳戶.
- D. 為UI和資料服務建立單獨的Kubernetes服務帳戶,以承擔IAM的作用. 使用IAM作用服務帳戶(IRSA)為UI提供EKS Pods對Amazon S3的存取,為DynamoDB提供資料服務.

**答案**
C


**詳解**
正確答案是 **C**。
- C：為UI和資料服務建立單獨的Kubernetes服務帳戶,以承擔IAM的作用. 將 AmazonS3FullAccess 政策附入資料服務帳戶,並將 AmazonDynamoDBFullAccess 政策附入 UI 服務帳戶。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：為Amazon S3和DynamoDB存取建立單獨的IAM政策,並有所需的許可權. 在EC2 執行個體設定檔(instance profile)中附上IAM政策。 使用基於角色的存取控制(access control)(RBAC)來控制對Amazon S3或DynamoDB的存取,用於相應的EKS Pods。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為Amazon S3和DynamoDB存取建立單獨的IAM政策,並有所需的許可權. 將Amazon S3 IAM 政策(IAM policy)直接附加到EKS Pods中,用於資料服務和DynamoDB政策,加入EKS Pods中的UI。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：為UI和資料服務建立單獨的Kubernetes服務帳戶,以承擔IAM的作用. 使用IAM作用服務帳戶(IRSA)為UI提供EKS Pods對Amazon S3的存取,為DynamoDB提供資料服務。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1018

**題目**
公司需要讓全球分散式開發團隊以符合安全政策的方式安全地獲取公司AWS資源. 公司目前使用proposes Active Directory進行內部認證. 公司使用AWS Organizations管理多個支援多個專案的AWS帳戶. 公司需要與現有基礎設施整合的解決方案,以提供集中身份管理和存取控制(access control). 哪個解決方案能以最少的營運開銷達成這些要求？

**選項**
- A. 建立AWS目錄服務,在AWS上建立一個AWS管理的微軟活動目錄. 與館內活動名錄建立信託關係. 使用分配給 Active Directory 組的 IAM 旋律存取公司AWS 帳戶內的 AWS 資源.
- B. 為每個開發者建立 IAM 使用者。 根據每個使用者參與每個專案的情況,人工管理每個IAM使用者的許可權. 強制多要素認證(MFA)作為額外的安全層.
- C. 在 AWS 目錄服務中使用 AD 聯結器來連線到profess Active 目錄. 整合AD聯結器與AWS IAM身份中心. 配置許可權集,讓每個AD組存取特定的AWS帳戶和資源.
- D. 利用亞馬遜·科尼託部署身份聯邦解決方案. 將身份聯合會解決方案與現場活動目錄整合。 使用Amazon Cognito為開發者提供存取符,以存取AWS帳戶和資源.

**答案**
C


**詳解**
正確答案是 **C**。
- C：在 AWS 目錄服務中使用 AD 聯結器來連線到profess Active 目錄. 整合AD聯結器與AWS IAM身份中心. 配置許可權集,讓每個AD組存取特定的AWS帳戶和資源。此選項最直接符合題目的需求與限制，通常能在效能、可用性、安全性、成本與維運複雜度之間取得最佳平衡。
- 其餘選項比較：
- A：建立AWS目錄服務,在AWS上建立一個AWS管理的微軟活動目錄. 與館內活動名錄建立信託關係. 使用分配給 Active Directory 組的 IAM 旋律存取公司AWS 帳戶內的 AWS 資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- B：為每個開發者建立 IAM 使用者。 根據每個使用者參與每個專案的情況,人工管理每個IAM使用者的許可權. 強制多要素認證(MFA)作為額外的安全層。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：利用亞馬遜·科尼託部署身份聯邦解決方案. 將身份聯合會解決方案與現場活動目錄整合。 使用Amazon Cognito為開發者提供存取符,以存取AWS帳戶和資源。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。

## Question #1019

**題目**
一家公司正在AWS雲開發一個應用程式。 該應用程式的HTTP API包含在Amazon API Gateway中釋出的關鍵資訊. 關鍵資訊必須只能從屬於公司內部網路的有限一組可信賴的IP地址獲取. 哪種解決辦法能滿足這些要求?

**選項**
- A. 設定一個API Gateway私人整合,以限制對一組預定義的IP地址的存取.
- B. 為API建立資源政策,拒絕存取任何未特別允許的IP地址.
- C. 直接在私人子網中部署API. 建立 網路 ACL(network ACL). 設定規則允許從特定的IP地址進行流量.
- D. 修改附在API Gateway上的安全群組(security group),允許僅從信任的IP地址進入流量.

**答案**
B


**詳解**
正確答案是 **B**。
- B：為API建立資源政策,拒絕存取任何未特別允許的IP地址。此選項符合題目條件，能有效滿足核心需求。
- 其餘選項比較：
- A：設定一個API Gateway私人整合,以限制對一組預定義的IP地址的存取。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- C：直接在私人子網中部署API. 建立 網路 ACL(network ACL). 設定規則允許從特定的IP地址進行流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。
- D：修改附在API Gateway上的安全群組(security group),允許僅從信任的IP地址進入流量。此做法可行性較低、成本或維運複雜度較高，或不完全符合題目限制。


