# Page 601

獲得 1 次讚同  
 awsgeek75 6 個月 2 週前
請問，為什麼 Lambda 會比 B，甚至 A，還更省事？
獲得 2 次讚同  
 nileeka97 10 個月 2 週前
選擇答案：B
Parquet 格式 ========> Amazon Glue
獲得 3 次讚同  
 Guru4Cloud 10 個月 3 週前
選擇答案：B
B. 建立 AWS Glue crawler 來探索資料。建立 AWS Glue extract, transform, and load (ETL) job 來轉換資料。在輸出步驟中指定轉換後資料的 bucket。
獲得 2 次讚同  
 markw92 1 年 1 個月前
如果要最少的開發工作量，就表示用 Lambda。Glue 也能做到，但有更高的額外負擔與成本。像這樣簡單的 lambda：
https://github.com/ayshaysha/aws-csv-to-parquet-converter/blob/main/csv-parquet-converter.py  
只要在 s3 bucket 中看到檔案時就能用來進行轉換。
獲得 3 次讚同  
 achevez85 1 年 5 個月前
選擇答案：B
https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/three-aws-glue-etl-job-types-for-converting-data-to-apache-parquet.html
獲得 2 次讚同  
 Training4aBetterLife 1 年 6 個月前
選擇答案：B
S3 提供單一控制項，可自動使用 SSE-S3 或 SSE-KMS 加密 bucket 中所有新物件。不幸的是，這些控制只會影響新物件。如果你的 bucket 已經包含數百萬個未加密物件，那麼開啟自動加密並不會讓 bucket 變得安全，因為未加密物件仍然存在。  
 
對於含有大量物件（數百萬到數十億）的 S3 bucket，可使用 Amazon S3 Inventory 取得未加密物件的清單，再使用 Amazon S3 Batch Operations 來加密大量舊的未加密檔案。
獲得 2 次讚同  
 Training4aBetterLife 1 年 6 個月前
請刪除這則留言。我本來是要把這個回覆貼到另一題。
獲得 1 次讚同  
 Training4aBetterLife 1 年 6 個月前
Versioning：
 
當你覆寫一個 S3 物件時，bucket 中會產生該物件的新版本。不過，這不會移除舊的未加密版本。如果你沒有刪除新加密物件的舊版本，就會同時被收取兩個版本的儲存費用。  
 
S3 Lifecycle  
 
如果你想移除這些未加密版本，請使用 S3 Lifecycle 讓物件的舊版本到期。當你將 Lifecycle 組態加入 bucket 後，組態規則會同時套用到既有物件與之後新增的物件。C 缺少這個步驟，我認為這就是 B 更好的原因。B 包含透過 Batch Operations 加密舊未加密物件的功能，而 Versioning 無法處理舊的未加密物件。
獲得 1 次讚同  
 Training4aBetterLife 1 年 6 個月前
請刪除這則留言。我本來是要把這個回覆貼到另一題。
獲得 2 次讚同  
 Rudraman 1 年 6 個月前
ETL = Glue
獲得 3 次讚同  
 Aninina 1 年 6 個月前
選擇答案：B
B 是正確答案
獲得 1 次讚同  
 techhb 1 年 6 個月前
選擇答案：B
AWS Glue Crawler 是用於 ETL
獲得 1 次讚同  


# Page 602

 kbaruu 1 年 6 個月前
選擇答案：B
正確答案是 B
獲得 1 次讚同  
 Mamiololo 1 年 6 個月前
B 就是答案
獲得 2 次讚同  
 swolfgang 1 年 6 個月前
選擇答案：B
應該是 b
獲得 1 次讚同  
 marcioicebr 1 年 6 個月前
選擇答案：B
根據文件，正確答案是 B。 
 
https://docs.aws.amazon.com/pt_br/prescriptive-guidance/latest/patterns/three-aws-glue-etl-job-types-for-converting-data-to-apache-parquet.html
獲得 1 次讚同  


# Page 603

Topic 1
Question #215
某公司在其資料中心的 network attached storage (NAS) 中儲存了 700 TB 的備份資料。這些備份資料必須能夠因應不頻繁的法規查核需求而被存取，且必須保留 7 年。公司已決定將這些備份資料從資料中心遷移到 AWS。遷移必須在 1 個月內完成。公司在公用網際網路連線上有 500 Mbps 的專用頻寬可用於資料傳輸。
解決方案架構師應該怎麼做，才能以最低成本遷移並儲存這些資料？
A. 訂購 AWS Snowball 裝置來傳輸資料。使用 lifecycle policy 將檔案轉換到 Amazon S3 Glacier Deep Archive。
B. 在資料中心與 Amazon VPC 之間部署 VPN 連線。使用 AWS CLI 將資料從地端複製到 Amazon S3 Glacier。
C. 佈建 500 Mbps 的 AWS Direct Connect 連線，並將資料傳輸到 Amazon S3。使用 lifecycle policy 將檔案轉換到 Amazon S3 Glacier Deep Archive。
D. 使用 AWS DataSync 傳輸資料，並在地端部署 DataSync agent。使用 DataSync task 將檔案從地端 NAS 儲存體複製到 Amazon S3 Glacier。
正確答案：A  
 voccer 高票回答  1 年前
選擇答案：A
數百個 TB => 一律用 Snowball
獲得 11 次讚同  
 TariqKipkemei 高票回答  10 個月 2 週前
選擇答案：A
TB 等級、低成本、時間有限 = AWS Snowball 裝置
獲得 8 次讚同  
 awsgeek75 最新  7 個月前
我花了一些時間心算，才發現資料根本沒辦法在 30 天內傳完。另外要注意是 MBps（Megabits），不是 Megabytes。500Mbps 大概是 60MBps。這種連線速度根本傳不了多少東西！
獲得 5 次讚同  
 lofzee 2 個月 1 週前
嗯……標準網路連線通常是用 Mbps 來表示，老實說 500 Mbps 算相當不錯了（以英國標準來說）。
即使如此，以這個速度上傳 700 TB 也大概要 4 個月。所以這裡唯一的選項就是使用 snowball。
答案是 A
獲得 2 次讚同  
 pentium75 7 個月 1 週前
選擇答案：A
B 與 D 都會使用現有的 500 mbps 網際網路連線，一個月最多只能傳大約 160 TB。C 成本很高，還要花數週交付，而且也不會提供更高的頻寬。因此 A 其實是唯一可行的選項，也因此是「最低成本」的選項。
獲得 2 次讚同  
 Guru4Cloud 10 個月 3 週前
選擇答案：A
A. 訂購 AWS Snowball 裝置來傳輸資料。使用 lifecycle policy 將檔案轉換到 Amazon S3 Glacier Deep Archive。
獲得 1 次讚同  
 gosai90786 1 年 1 個月前
一個 DataSync agent 可以使用 10GBps，並且可以設定頻寬。 
所以總時間 = (700X1000)GB/10GBps = 70000 秒 = 19.4 天。 
使用多個 Snowball 裝置則會牽涉向 AWS 訂購、在資料中心完成設定與複製，並產生來回 AWS 雲端的運送費用。 
如果時間限制非常嚴格，例如 1 週，那 Snowball 才會比較適合。但這裡有 30 天，所以 DataSync 成本會更低（需要 19 天）
獲得 2 次讚同  
 slackbot 11 個月 2 週前
你的數學算錯了，而且題目給的是 0.5Gbps，不是 10GBps。 
500Mpbs 大約等於 60MBps。
社群投票分布
A (100%)


# Page 604

30x24x3600x0.06TB = 約 155TB 
這遠低於 700TB
獲得 5 次讚同  
 cookieMr 1 年 1 個月前
選擇答案：A
透過訂購 Snowball 裝置，公司可以將 700 TB 的備份資料從資料中心傳輸到 AWS。資料傳到 S3 之後，可以套用 lifecycle policy，自動將檔案從 S3 Standard storage class 轉換到具成本效益的 Amazon S3 Glacier Deep Archive storage class。 
 
選項 B 需要透過公用網際網路持續進行資料傳輸，考量資料量龐大，可能既耗時又昂貴，也可能需要大量頻寬配置。 
 
選項 C 會產生額外成本來佈建與維護專線連線，對一次性資料遷移來說未必必要。 
 
選項 D 可能也是可行方案，但它可能會產生部署與管理 DataSync agent 的額外成本。 
 
因此，建議選項 A，因為它透過 Snowball 裝置提供安全且有效率的資料傳輸方式，並可藉由 lifecycle policy 將資料轉換到 S3 Glacier Deep Archive 以進行長期儲存，達到成本最佳化。
獲得 2 次讚同  
 arjundevops 1 年 3 個月前
A 是正確答案。 
雖然他們有 500mbps 的網路速度，但把資料從地端傳到 AWS 大約要 130 天。 
 
所以他們只有 1 個選項，就是 Snowball 裝置。
獲得 2 次讚同  
 Paras043 1 年 3 個月前
選擇答案：A
A 才是正確的
獲得 1 次讚同  
 CapJackSparrow 1 年 4 個月前
問：什麼是 AWS Snowball Edge？ 
 
AWS Snowball Edge 是 AWS Snowball 服務提供的 edge computing 與資料傳輸裝置。它具備內建儲存與運算能力，可在 edge locations 使用特定 AWS 服務。Snowball Edge 提供 Storage Optimized 與 Compute Optimized 兩種選項，可支援如船舶、風車與偏遠工廠等斷線環境中的本地資料處理與蒐集。可在此進一步了解其功能。 
 
問：原本的 50 TB 與 80 TB AWS Snowball 裝置發生了什麼事？ 
 
原始的 Snowball 裝置已停止服務，目前資料傳輸主要使用 Snowball Edge Storage Optimized 裝置。 
 
問：我現在還可以訂購原本的 Snowball 50 TB 與 80 TB 裝置嗎？ 
 
不行。現在若有資料傳輸需求，請選擇 Snowball Edge Storage Optimized 裝置。
獲得 1 次讚同  
 vherman 1 年 5 個月前
選擇答案：A
Snowball
獲得 1 次讚同  
 KZM 1 年 5 個月前
遷移 700TB 的資料需要 9 台 Snowball 裝置。
獲得 2 次讚同  
 KZM 1 年 5 個月前
700TB 的資料無法透過 500Mbps 的連線在一個月內傳輸完成。 
 
一個月內可傳輸的總資料量 = 頻寬 x 時間 
= (500 Mbps / 8 bits per byte) x (30 天 x 24 小時 x 3600 秒/小時) 
= 648,000 GB 或 648 TB 
這是理論上的最大值計算。由於多種因素，實際可傳輸的總資料量可能會低於 645 TB。
獲得 3 次讚同  
 mandragon 1 年 2 個月前
想法不錯。我同意這個解法。但計算有誤，結果應該是 162tb。
獲得 3 次讚同  
 Rudraman 1 年 6 個月前
Snow ball Devices，答案就是 AAAAA。
獲得 2 次讚同  


# Page 605
 wmp7039 1 年 6 個月前
A 不正確，因為 DC 是昂貴的選項。正確答案應該是 C，因為公司已經有可用於資料傳輸的 500Mbps。只要吃滿所有可用網際網路頻寬，資料傳輸可在 3 小時 6 分內完成 - https://www.omnicalculator.com/other/data-transfer
獲得 1 次讚同  
 wmp7039 1 年 6 個月前
請忽略，我算錯了傳輸時間，實際上需要 129 天，會超過 1 個月限制。A 才是正確答案。
獲得 5 次讚同  
 kbaruu 1 年 6 個月前
選擇答案：A
A 是正確的
獲得 1 次讚同  
 swolfgang 1 年 6 個月前
A 是正確的，但不是最便宜。我覺得應該是 D。
獲得 1 次讚同  
 pentium75 7 個月 1 週前
一個月內做不到。
獲得 1 次讚同  
 Parsons 1 年 6 個月前
選擇答案：A
A 是正確的。 
 
不能直接用 DataSync 把檔案從地端複製到 S3 Glacier。應該先放到 S3 Standard，再透過 S3 Lifecycle 轉到 Glacier => 排除 D。
獲得 1 次讚同  
 PDR 1 年 6 個月前
其實可以 - https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes
獲得 1 次讚同  


# Page 606

Topic 1
Question #216
某公司有一個 serverless 網站，包含數百萬個物件，存放在 Amazon S3 bucket 中。公司將該 S3 bucket 作為 Amazon CloudFront distribution 的 origin。公司在物件載入前並未對 S3 bucket 設定加密。解決方案架構師需要為所有既有物件，以及未來加入到 S3 bucket 的所有物件啟用加密。
哪個解法能以最少的工作量滿足這些需求？
A. 建立新的 S3 bucket。為新 S3 bucket 開啟預設加密設定。將所有既有物件下載到暫時的本地儲存體，再重新上傳到新 S3 bucket。
B. 為 S3 bucket 開啟預設加密設定。使用 S3 Inventory 功能建立列出未加密物件的 .csv 檔。執行使用 copy 命令的 S3 Batch Operations job 來加密這些物件。
C. 使用 AWS Key Management Service (AWS KMS) 建立新的加密金鑰。變更 S3 bucket 設定，改為使用 AWS KMS managed encryption keys (SSE-KMS) 的 server-side encryption。並為 S3 bucket 開啟 versioning。
D. 到 AWS Management Console 的 Amazon S3。瀏覽 S3 bucket 內的物件。依 encryption 欄位排序。選取每個未加密物件。使用 Modify 按鈕將預設加密設定套用到 bucket 中每個未加密物件。
正確答案：B  
 Parsons 高票回答  1 年 6 個月前
選擇答案：B
步驟 1：使用 S3 inventory 取得物件清單  
步驟 2（如有需要）：使用 S3 Select 篩選  
步驟 3：使用 S3 object operations 加密未加密物件。 
 
對於後續新進物件，則使用預設加密。
獲得 16 次讚同  
 Parsons 1 年 6 個月前
參考連結： https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/
獲得 9 次讚同  
 cookieMr 高票回答  1 年 1 個月前
選擇答案：B
在 S3 啟用預設加密設定後，所有新加入的物件都會自動被加密。要加密既有物件，可使用 S3 Inventory 產生未加密物件清單，接著執行 S3 Batch Operations job，在複製這些物件的同時套用加密。 
 
A. 這個方案需要建立新的 S3，並手動下載與重新上傳所有既有物件。傳輸數百萬個物件需要大量時間與工作量，因此效率不高。 
 
C. 雖然在 S3 中啟用使用 AWS KMS 的 SSE 是有效的加密作法，但它無法處理加密既有物件的需求。它只會套用到之後新增到 bucket 的新物件。 
 
D. 手動修改 S3 中的每個物件來套用預設加密，是高度勞力密集且容易出錯的流程。這需要逐一選取並修改每個未加密物件，對大量物件而言並不實際。
獲得 11 次讚同  
 lofzee 最新  2 個月 1 週前
選擇答案：B
老實說，這些選項全都很麻煩，但我認為工作量最少的還是 B。 
https://aws.amazon.com/blogs/storage/encrypting-objects-with-amazon-s3-batch-operations/
獲得 3 次讚同  
 pentium75 7 個月 1 週前
選擇答案：B
A - 工作量非常大  
B - 應該可行  
C - 相較於 SSE-S3，SSE-KMS 並不是「最少工作量」；而且開啟 versioning 對達成結果並非必要，反而會導致未加密檔案在未來加密後仍以舊版本保留。  
D - 比 A 還更費工
獲得 1 次讚同  

社群投票分布
B (90%)
8%


# Page 607

 foha2012 6 個月 2 週前
數百萬個物件要用 .csv ?? C 看起來比較簡單。
獲得 1 次讚同  
 foha2012 6 個月 2 週前
B 看起來不像是工作量最少。
獲得 1 次讚同  
 CapJackSparrow 1 年 4 個月前
選擇答案：B
B... 
 
https://catalog.us-east-1.prod.workshops.aws/workshops/05f16f1a-0bbf-45a7-a304-4fcd7fca3d1f/en-US/s3-track/module-2 
 
 
不客氣
獲得 3 次讚同  
 bdp123 1 年 5 個月前
選擇答案：B
Amazon S3 現在會為所有既有未加密 bucket 設定預設加密，對上傳到這些 bucket 的新物件套用使用 S3 managed keys 的 server-side encryption (SSE-S3) 作為基礎加密層級。已存在於未加密 bucket 中的物件不會自動被加密。 
https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-encryption-faq.html
獲得 3 次讚同  
 Yelizaveta 1 年 5 個月前
選擇答案：B
https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-copy-example-bucket-key.html
獲得 1 次讚同  
 aakashkumar1999 1 年 6 個月前
選擇答案：B
B 是正確答案
獲得 1 次讚同  
 Val182 1 年 6 個月前
選擇答案：B
B 100%  
https://spin.atomicobject.com/2020/09/15/aws-s3-encrypt-existing-objects/
獲得 1 次讚同  
 LuckyAro 1 年 6 個月前
選擇答案：A
為什麼都沒有人討論 A？我覺得 A 也可以達成需求。不過 B 的確是更合適的答案。
獲得 1 次讚同  
 pentium75 7 個月 1 週前
「數百萬個物件」重新下載再上傳，顯然不是「最少工作量」，因此不符合需求。
獲得 1 次讚同  
 Training4aBetterLife 1 年 6 個月前
選擇答案：B
S3 提供單一控制項，可自動使用 SSE-S3 或 SSE-KMS 加密 bucket 中所有新物件。不幸的是，這些控制只會影響新物件。如果你的 bucket 已經包含數百萬個未加密物件，那麼開啟自動加密並不會讓 bucket 變得安全，因為未加密物件仍然存在。 
 
對於含有大量物件（數百萬到數十億）的 S3 bucket，可使用 Amazon S3 Inventory 取得未加密物件清單，再使用 Amazon S3 Batch Operations 來加密大量舊的未加密檔案。
獲得 3 次讚同  
 Training4aBetterLife 1 年 6 個月前
Versioning：
 
當你覆寫一個 S3 物件時，bucket 中會產生該物件的新版本。不過，這不會移除舊的未加密版本。如果你沒有刪除新加密物件的舊版本，就會同時被收取兩個版本的儲存費用。  
 
S3 Lifecycle  
 
如果你想移除這些未加密版本，請使用 S3 Lifecycle 讓物件的舊版本到期。當你將 Lifecycle 組態加入 bucket 後，組態規則會同時套用到既有物件與之後新增的物件。C 缺少這個步驟，我認為這就是 B 更好的原因。B 包含透過 Batch Operations 加密舊未加密物件的功能，而 Versioning 無法處理舊的未加密物件。
獲得 1 次讚同  


# Page 608

 Training4aBetterLife 1 年 6 個月前
S3 提供單一控制項，可自動使用 SSE-S3 或 SSE-KMS 加密 bucket 中所有新物件。不幸的是，這些控制只會影響新物件。如果你的 bucket 已經包含數百萬個未加密物件，那麼開啟自動加密並不會讓 bucket 變得安全，因為未加密物件仍然存在。  
 
對於含有大量物件（數百萬到數十億）的 S3 bucket，可使用 Amazon S3 Inventory 取得未加密物件清單，再使用 Amazon S3 Batch Operations 來加密大量舊的未加密檔案。
獲得 1 次讚同  
 Training4aBetterLife 1 年 6 個月前
Versioning：
 
當你覆寫一個 S3 物件時，bucket 中會產生該物件的新版本。不過，這不會移除舊的未加密版本。如果你沒有刪除新加密物件的舊版本，就會同時被收取兩個版本的儲存費用。  
 
S3 Lifecycle  
 
如果你想移除這些未加密版本，請使用 S3 Lifecycle 讓物件的舊版本到期。當你將 Lifecycle 組態加入 bucket 後，組態規則會同時套用到既有物件與之後新增的物件。C 缺少這個步驟，我認為這就是 B 更好的原因。B 包含透過 Batch Operations 加密舊未加密物件的功能，而 Versioning 無法處理舊的未加密物件。
獲得 1 次讚同  
 Training4aBetterLife 1 年 6 個月前
請移除重複回覆，我本來是要提交投票留言。
獲得 1 次讚同  
 John_Zhuang 1 年 6 個月前
選擇答案：B
C 是錯的。即使你用新金鑰開啟 SSE-KMS，既有物件仍然還沒被加密，還是需要用 AWS batch 手動加密。
獲得 2 次讚同  
 pentium75 7 個月 1 週前
而且在 C 中如果你「開啟 versioning」，舊的未加密物件仍會被保留。
獲得 1 次讚同  
 LuckyAro 1 年 6 個月前
選擇答案：B
https://spin.atomicobject.com/2020/09/15/aws-s3-encrypt-existing-objects/
獲得 1 次讚同  
 Aninina 1 年 6 個月前
選擇答案：C
C 才是答案
獲得 1 次讚同  
 pentium75 7 個月 1 週前
為什麼？這個選項沒有包含加密既有物件的步驟，而且一旦開啟 versioning，你會永久保留未加密版本。
獲得 1 次讚同  
 techhb 1 年 6 個月前
選擇答案：B
同意 Parsons
獲得 1 次讚同  
 Lilibell 1 年 6 個月前
答案是 C 
而且題目要求 bucket 中未來物件也要加密 = VERSIONING
獲得 1 次讚同  
 pentium75 7 個月 1 週前
蛤？「未來物件加密 = versioning」??????
獲得 1 次讚同  
 pentium75 7 個月 1 週前
實際上正好相反。Versioning 會把未加密物件保留成舊版本，即使之後你把它們加密了也是一樣。
獲得 1 次讚同  


# Page 609

Topic 1
Question #217
某公司在 Application Load Balancer 後方的 Amazon EC2 instances 上執行全球 Web 應用程式。應用程式將資料儲存在 Amazon Aurora。公司需要建立災難復原方案，並且可容忍最多 30 分鐘停機與潛在資料遺失。當主要基礎設施健康時，該方案不需要處理流量負載。
解決方案架構師應該怎麼做來滿足這些需求？
A. 在所需基礎設施元件就位的情況下部署應用程式。使用 Amazon Route 53 設定 active-passive failover。在第二個 AWS Region 建立 Aurora Replica。
B. 在第二個 AWS Region 託管縮小版部署的應用程式。使用 Amazon Route 53 設定 active-active failover。在第二個 Region 建立 Aurora Replica。
C. 在第二個 AWS Region 複寫主要基礎設施。使用 Amazon Route 53 設定 active-active failover。建立由最新 snapshot 還原的 Aurora database。
D. 使用 AWS Backup 備份資料。利用備份在第二個 AWS Region 建立所需基礎設施。使用 Amazon Route 53 設定 active-passive failover。在第二個 Region 建立 Aurora second primary instance。
正確答案：D  
 Parsons 高票回答  1 年 6 個月前
選擇答案：A
A 是正確的。 
- 「The solution does not need to handle the load when the primary infrastructure is healthy.」=> 應使用 Route 53 Active-Passive ==> 排除 B、C  
- D 不正確，因為「Create an Aurora second primary instance in the second Region.」，我們其實只需要建立 Aurora Replica 即可。
獲得 29 次讚同  
 Parsons 1 年 6 個月前
參考連結： https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html
獲得 5 次讚同  
 diabloexodia 高票回答  1 年前
選擇答案：A
凡是不是即時復原的，都屬於 active-passive。 
在 active-passive 中有： 
1. Aws Backup（最低營運負擔）- RTO/RPO = 小時級  
2. Pilot Light（基本基礎設施已部署，但需再完整建置）- RTO/RPO = 數十分鐘  
3. Warm Standby（基本基礎設施 + 執行小量負載，可能需加 Auto Scaling）- RTO/RPO = 分鐘級  
4.（ACTIVE-ACTIVE）：Multi AZ 選項：即時  
 
這裡可容忍 30 分鐘  
因此 B、D 不正確。AWS backup 是小時級，所以 D 不正確。  
因此選 A
獲得 18 次讚同  
 pentium75 6 個月 4 週前
A 並沒有在 DR Region 建立基礎設施。
獲得 1 次讚同  
 jatric 最新  3 週 4 天前
選擇答案：D
我在 A 和 D 之間猶豫，但因為題目說主要基礎設施健康時不需要承載負載，所以 D 看起來更合理。
獲得 1 次讚同  
 lofzee 2 個月 1 週前
選擇答案：D
我選 D，因為 A 的描述很奇怪…… 
D 看起來比較合理
獲得 1 次讚同  
 Jazz888 2 個月 1 週前
A  
對於選 D 的各位，我有個問題。你要如何保證透過 AWS Backup 進行資源佈建會在 30 分鐘內完成？
社群投票分布
A (70%)
D (30%)


# Page 610

AWS Backup?
獲得 1 次讚同  
 ManikRoy 3 個月前
透過排除其他選項可以選 A，但這個選項並不完整，因為它沒有提到在次要 Region 部署/復原應用程式。
獲得 1 次讚同  
 MrPCarrot 5 個月 3 週前
A 很完整 - Active-Passive Failover：當你希望主要資源群組在大多數時間都可用，而希望次要資源群組在主要資源全部不可用時作為待命時，就使用這種 failover 組態。
獲得 1 次讚同  
 MrPCarrot 5 個月 3 週前
A 很完美
獲得 1 次讚同  
 farnamjam 6 個月 2 週前
選擇答案：A
以下是其他選項較不適合的原因： 
 
B. Active-active failover：因為同時執行兩套基礎設施而導致更高成本，也增加流量分配管理的複雜度。 
C. 從 snapshot 還原：復原時間可能超過 30 分鐘，超過公司的停機容忍度。 
D. AWS Backup：依賴備份與還原時間，可能超過 30 分鐘的恢復時間窗口。
獲得 1 次讚同  
 pentium75 6 個月 4 週前
選擇答案：D
不是 A - 沒有提到在第二個 region 建立基礎設施元件。另外，除非使用 Aurora Global Database（題目沒有提），否則你其實不能在第二個 AWS Region 建立「Aurora Replica」，因為 replicas 必須位於同一個 region。  
不是 B - 會把一半流量導到 DR region  
不是 C - 即使主要環境健康，也可能把流量送到 DR instance  
D - 「Aurora second primary instance」這個說法有點奇怪，但在另一個 region 我們的確需要一個「primary instance」。我們仍然需要建立資料庫之間的複寫（像是 binlog），或在 failover 前還原 snapshot，但整體來說這個選項可能符合 30 分鐘的 RTO/RPO 要求。
獲得 4 次讚同  
 lofzee 2 個月 1 週前
題目沒有寫 Aurora MySQL，但你可以為 Aurora MySQL 建立 cross-region replicas，Aurora PostgreSQL 則不行。題目只寫 Amazon Aurora，所以有點模糊，因為 Aurora 可能是 MySQL 或 PostgreSQL。這裡也沒提到使用 Global Database。 
老實說，我覺得這題和選項都寫得不太好……畢竟這是 dump。
獲得 1 次讚同  
 awsgeek75 7 個月前
選擇答案：D
我同意 D，因為需求是可接受 30 分鐘停機與潛在資料遺失，而且主要執行個體健康時不需要考慮負載。這讓 D 比 A 更可行。Aurora-Replica 通常用於 active-active failover。要精打細算！
獲得 3 次讚同  
 Jeffab 9 個月 1 週前
如果考試題目的品質是這樣，那我們就慘了！我認為其實沒有任何選項完全正確。A 可能是最接近正確的，但有個大問題。「Deploy the application with the required infrastructure elements in place.」到底是部署到哪裡？如果你假設是另一個 region/AZ 也說得通，但題目沒寫，而且只提到 Aurora replica，沒提到 Web/app servers 等等。
獲得 10 次讚同  
 awsgeek75 6 個月 2 週前
我真的希望正式考試的文字會比較好。選項 A 很像「做任何需要做的事讓解法成立」……那如果這樣，預設它就會是對的，直到後半段又讓它變成錯的。唉。
獲得 1 次讚同  
 TariqKipkemei 10 個月 2 週前
選擇答案：A
「Can tolerate up to 30 minutes of downtime and potential data loss」排除了任何 active-active 的選項。只剩 D 和 A。D 太繞了。
所以選 A。
獲得 5 次讚同  
 cookieMr 1 年 1 個月前
選擇答案：A
A. 包含在主要 Region 部署應用程式與基礎設施元件，並在第二個 Region 建立 Aurora Replica 作為待命資料庫。Route 53 設定為 active-passive failover，預設把流量導到主要 Region。發生災難時，Route 53 可以自動把流量導到待命 Region，將停機時間降到最低。資料遺失可能發生在最後一次複寫到待命 Region 的時間點之前，但可控制在題目定義的 30 分鐘容忍範圍內。 
 
選項 B 在此情境下沒有必要，因為主要基礎設施健康時不需要讓另一邊承擔負載，而且它也會帶來更高的複雜度與成本。 


# Page 611

 
選項 C 可能帶來額外複雜度與潛在資料遺失，因為待命資料庫可能不是主要資料庫的最新狀態。 
 
選項 D 雖然可能適合備份與還原情境，但未必能提供題目要求的 failover 與停機容忍度。
獲得 2 次讚同  
 antropaws 1 年 2 個月前
選擇答案：D
我投 D，因為選項 A 並不算高可用。在 A 中，你無法設定 active-passive failover，因為你沒有建立備援基礎設施。
獲得 2 次讚同  
 kraken21 1 年 4 個月前
選擇答案：A
這是 cross region DR 策略。你需要在另一個 region 中有 read replica 與應用程式，才算是合理的 DR 方案。read replica 可以在幾分鐘內提升為 Active，而應用程式也會可用。選項 D 對應用程式的描述不清楚，而且從 Backup 還原可能需要時間。
獲得 2 次讚同  
 Yelizaveta 1 年 5 個月前
選擇答案：A
根據涉及的 Regions 與需複製的資料量不同，cross-Region snapshot copy 可能需要數小時完成，這會成為 RPO 需求估算時必須考慮的因素。 
 
如果你對 RTO 與 RPO 有嚴格要求，應考慮其他 DR 策略，例如 Amazon Aurora Global Database。 
https://aws.amazon.com/blogs/database/cost-effective-disaster-recovery-for-amazon-aurora-databases-using-aws-backup/
獲得 1 次讚同  


# Page 612

Topic 1
Question #218
某公司有一台 Web server 執行在 public subnet 中、具備 Elastic IP address 的 Amazon EC2 instance 上。此 EC2 instance 被指派預設 security group。預設 network ACL 已被修改為封鎖所有流量。解決方案架構師需要讓這台 Web server 可從任何地方透過 443 port 存取。
哪一組步驟可以完成這項任務？（選兩項）
A. 建立一個 security group，加入允許來源 0.0.0.0/0 存取 TCP port 443 的規則。
B. 建立一個 security group，加入允許目的地 0.0.0.0/0 使用 TCP port 443 的規則。
C. 更新 network ACL，允許來源 0.0.0.0/0 存取 TCP port 443。
D. 更新 network ACL，允許來自 0.0.0.0/0 且目的地為 0.0.0.0/0 的 inbound/outbound TCP port 443。
E. 更新 network ACL，允許來源 0.0.0.0/0 的 inbound TCP port 443，以及目的地 0.0.0.0/0 的 outbound TCP port 32768-65535。
正確答案：AE  
 Parsons 高票回答  1 年 6 個月前
選擇答案：AE
A、E 是最完整的組合。更精確地說，因為 NACL 是 stateless，我們還需要把「outbound TCP port 32768-65535 to destination 0.0.0.0/0」加上，作為 ephemeral port。
獲得 16 次讚同  
 oguzbeliren 1 年前
你使用 TCP port 32768-65535 的主要原因是什麼？題目裡並沒有要求這一點。
獲得 5 次讚同  
 MohammadTo¬c8787 10 個月 3 週前
我覺得是 AD，因為 acl 是 stateless，所以 inbound 與 outbound 都要開；選項 C 只開了 inbound 的 443。
獲得 2 次讚同  
 MohammadTo¬c8787 10 個月 3 週前
我覺得是 AD，因為 acl 是 stateless，所以 inbound 與 outbound 都要開；選項 E 只開了 inbound 的 443。
獲得 3 次讚同  
 pentium75 高票回答  7 個月 1 週前
選擇答案：E
對我來說，D 與 E 中的「port 443」和「port 32768-65535」在文法上不清楚到底是指 outbound traffic 的來源埠還是目的埠。如果是來源埠，那會是 D；如果是目的埠（看起來比較合理），那就是 E。 
 
「在 Windows 上，ephemeral port range 通常是 49152 到 65535。 
在 Linux 上，通常是 32768 到 61000。」 
 
因此 32768-65535 可以同時涵蓋 Windows 與 Linux。
獲得 10 次讚同  
 ChinthaGurumurthi 最新  1 週 4 天前
選擇答案：AD
AD  
E 怎麼會是答案？我們怎麼保證選項 E 給的 port range 一定正確？
獲得 1 次讚同  
 lofzee 2 個月 1 週前
選擇答案：AE
Security group 只需要 inbound 規則。 
ACL 需要 inbound 與 outbound。Outbound 流量會使用動態埠。答案是 A 和 E。
獲得 2 次讚同  
 sidharthwader 4 個月 4 週前
AE  
 
Security group 是 stateful 資源，所以只要允許來源 0.0.0.0/0 進入 443 即可；但 ACL 是 stateless，因此允許進來的流量也要設定對應的出去規則。
社群投票分布
AE (69%)
E (18%)
11%


# Page 613

獲得 1 次讚同  
 awsgeek75 7 個月前
選擇答案：AE
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html#nacl-basics 
「NACL 是 stateless，表示不會保存先前已傳送或接收流量的資訊。例如，如果你建立一條 NACL 規則，允許特定 inbound 流量進入 subnet，對應的回應流量不會自動被允許。這與 security groups 不同。Security groups 是 stateful，表示會保存先前已傳送或接收流量的資訊。例如，如果 security group 允許 inbound 流量進入 EC2 instance，則回應流量會自動被允許，而不受 outbound security group 規則影響。」 
A 滿足 security group 的要求。 
E 是唯一明確涵蓋 outbound 流量與埠號的選項。  
D 只涵蓋 outbound destination，但題目說所有流量都被封鎖，所以這樣行不通。
獲得 3 次讚同  
 [Removed] 8 個月 2 週前
選擇答案：AC
對典型 Web server 情境，例如透過 HTTPS（port 443）提供內容，通常不需要在 network ACL (NACL) 中明確開啟 outbound ports 來允許回應流量。
獲得 1 次讚同  
 pentium75 7 個月 1 週前
但 NACL 是 stateless。「The default network ACL has been modified to block all traffic」；如果你不允許任何 outbound 流量，web server 就無法回應用戶端。
獲得 2 次讚同  
 TariqKipkemei 10 個月 2 週前
選擇答案：AE
ACL 是 stateless，你必須同時定義 inbound 與 outbound 規則。
獲得 2 次讚同  
 MohammadTo¬c8787 10 個月 3 週前
我覺得是 AD，因為 acl 是 stateless，所以 inbound 與 outbound 都要開；選項 C 只開了 inbound 的 443。
獲得 2 次讚同  
 MohammadTo¬c8787 10 個月 3 週前
我覺得是 AD，因為 acl 是 stateless，所以 inbound 與 outbound 都要開；選項 D 只開了 inbound 的 443。
獲得 1 次讚同  
 MohammadTo¬c8787 10 個月 3 週前
管理員請刪除這則，抱歉。
獲得 1 次讚同  
 MohammadTo¬c8787 10 個月 3 週前
管理員請刪除這則，抱歉。
獲得 1 次讚同  
 Guru4Cloud 10 個月 3 週前
選擇答案：AE
A、E 是最完整的組合。更精確地說，因為 NACL 是 stateless，我們需要把「outbound TCP port 32768-65535 to destination 0.0.0.0/0」加上，作為 ephemeral port。
獲得 3 次讚同  
 beginnercloud 11 個月 1 週前
選擇答案：AE
AE 是這題最好的答案，但實際上 E 仍不夠完整。這裡是由 client 決定 ephemeral port，而且它可以從 1024 開始；只有 Linux client 的 range 會從 32768 開始。 https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html#nacl-ephemeral-ports 
除非目的端會宣告 ephemeral ports，但我不認為這裡是這種情況。
獲得 1 次讚同  
 pentium75 7 個月 1 週前
「在 Windows 上，ephemeral port range 通常是 49152 到 65535。 
在 Linux 上，通常是 32768 到 61000。」 
合起來就是：32768 - 65535 ...
獲得 2 次讚同  
 Thornessen 1 年前
選擇答案：AE
AE 是這題最好的答案，但實際上 E 仍不夠完整。 
這裡提到是由 client 選擇 ephemeral port，而且它可以從 1024 開始。只有 Linux client 的 range 才是從 32768 開始： https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html#nacl-ephemeral-ports 
除非 destination 會宣告 ephemeral ports，但我不認為這裡會這樣。
獲得 2 次讚同  


# Page 614

 Abrar2022 1 年 2 個月前
32768-65535 這段 ports 可讓 subnet 中的 Web servers 對網際網路上的 clients 回送 outbound IPv4 回應（例如提供網頁給造訪網站的人）。
獲得 1 次讚同  
 WherecanIstart 1 年 4 個月前
選擇答案：AE
NACL 會阻擋 outbound 流量，因為它本質上是 stateless。選項 E 允許 ephemeral ports 的 outbound 流量離開 VPC 回到 Web 端。
獲得 2 次讚同  
 Brak 1 年 5 個月前
不可能是 C，因為目前的 NACL 會封鎖所有流量，包含 outbound。你必須透過 NACL 允許 outbound 流量。 
但 E 也不是好答案，因為 ephemeral ports 是從 1024 開始，不是 32768。
獲得 2 次讚同  
 neosis91 1 年 5 個月前
選擇答案：AC
A 和 C，不是 E。 
選項 E 表示允許所有 IP 位址（0.0.0.0/0）的 inbound TCP 443，以及 outbound 32768-65535。這個選項只允許 outbound ports，無法保證 443 的 inbound connection 一定允許。它不符合讓 web server 能從任何地方透過 443 被存取的需求。因此，描述從所有 IP 位址開放 inbound 443 的選項 C，才是最符合需求的答案。
獲得 5 次讚同  
 Deepak_k 1 年 5 個月前
答案：AE - 進來的流量走 443，但 server 回應時可以使用任意 port。
獲得 2 次讚同  
 JoeGuan 11 個月 2 週前
這類題目常常是在問最低需求，因此額外加上其他東西有時反而不對。我不太確定這題，但我會選 C。E 增加了模糊性。假如你其實只需要為 Lambda 開 port，那就是不同的 port 範圍。我覺得 E 對題目做了額外假設。基於某些假設去開一些 ports、又基於其他假設去關閉另外一些 ports，我認為不正確。最好的假設應該是題目只在問如何開 443。
獲得 1 次讚同  
 slackbot 11 個月 2 週前
E 至少還保證某些情況能運作。C 則肯定無法運作，因為你根本沒有允許任何 egress 流量。
獲得 2 次讚同  
 slackbot 11 個月 2 週前
看起來不是你沒看清楚自己寫的「Option E states to allow incoming TCP ports on 443 and outgoing on 32768-65535 to all IP addresses (0.0.0.0/0).」（因為句子前半就已經允許 inbound 443），就是你根本不懂 ACL 的工作方式——它們是 STATELESS，表示你必須同時允許 IN 和 OUT，而不是像 SG 那樣只允許 IN，因為 SG 是 stateful。若兩者一樣，那 ACL 還有什麼意義？
獲得 1 次讚同  
 Aninina 1 年 6 個月前
選擇答案：AE
AE 正確
獲得 3 次讚同  


# Page 615

Topic 1
Question #219
某公司的應用程式出現效能問題。該應用程式是 stateful，且需要在 Amazon EC2 instances 上完成 in-memory tasks。公司使用 AWS CloudFormation 部署基礎設施，並使用 M5 EC2 instance family。隨著流量增加，應用程式效能開始下降。使用者在存取應用程式時回報延遲。
哪個解法能以最高的營運效率解決這些問題？
A. 將 EC2 instances 更換為在 Auto Scaling group 中執行的 T3 EC2 instances，並使用 AWS Management Console 完成變更。
B. 修改 CloudFormation templates，讓 EC2 instances 在 Auto Scaling group 中執行。需要增加容量時，手動提高 Auto Scaling group 的 desired capacity 與 maximum capacity。
C. 修改 CloudFormation templates。將 EC2 instances 更換為 R5 EC2 instances。使用 Amazon CloudWatch 內建的 EC2 memory metrics 來追蹤未來容量規劃所需的應用程式效能。
D. 修改 CloudFormation templates。將 EC2 instances 更換為 R5 EC2 instances。在 EC2 instances 上部署 Amazon CloudWatch agent，以產生自訂的 application latency metrics，供未來容量規劃使用。
正確答案：D  
 Parsons 高票回答  1 年 6 個月前
選擇答案：D
D 是正確答案。 
 
「in-memory tasks」=> 需要「R」系列 EC2 instance type 來做 memory optimization。所以應該聚焦在 C 與 D。  
因為 EC2 instances 預設並不會把 memory metrics 提供給 CloudWatch，所以必須安裝 CW agent 才能達成目的。
獲得 33 次讚同  
 Babba 高票回答  1 年 6 個月前
選擇答案：D
就是 D。EC2 預設不會提供 memory metrics 給 CloudWatch，必須在被監控的 instances 上安裝 CloudWatch Agent： https://aws.amazon.com/premiumsupport/knowledge-center/cloudwatch-memory-metrics-ec2/
獲得 12 次讚同  
 jatric 最新  3 週 4 天前
選擇答案：A
未來容量規劃跟單純做垂直擴展要怎麼改善效能？題目也沒寫這些 EC2 是否在 Auto Scaling 後面，所以代表不是。在所有選項中，A 反而最接近解答。
獲得 1 次讚同  
 a7md0 1 個月 1 週前
選擇答案：B
B 會降低營運負擔，而且比一直換 instance family 更好。我也不覺得考試會要求你記住像 M5 和 R5 這種 instance families。
獲得 1 次讚同  
 lofzee 2 個月 1 週前
選擇答案：D
D .....
獲得 1 次讚同  
 Guru4Cloud 10 個月 3 週前
選擇答案：D
R5 instances 比 M5 更適合 in-memory workload。 
單靠 Auto Scaling 並不適合處理 stateful applications，仍會需要手動調整容量。 
自訂 latency metrics 比內建 metrics 更能提供容量規劃所需的可視性。
獲得 4 次讚同  
 cookieMr 1 年 1 個月前
選擇答案：D
把 M5 instances 換成適合 memory-intensive workloads 的 R5 instances 後，應用程式可受益於更高的記憶體容量與效能。 
 
社群投票分布
D (97%)


# Page 616

此外，在 EC2 instances 上部署 CloudWatch agent，可以產生自訂的 application latency metrics，進而提供對應用程式效能的寶貴洞察。 
 
這個方案透過使用適合的 instance type，並收集自訂應用程式 metrics，以更有效率的方式解決效能問題，也更利於後續監控與容量規劃。 
 
A. 換成 T3 instances 可能無法為 in-memory tasks 提供足夠的記憶體容量。 
 
B. 手動增加 ASG 容量無法直接解決目前的效能問題。 
 
C. 只依賴內建的 EC2 memory metrics，可能無法提供足夠細緻度來優化 in-memory tasks。 
 
最有效率的解法是修改 CloudFormation templates、將 instances 換成 R5，並部署 CloudWatch agent 來產生自訂 metrics。
獲得 4 次讚同  
 Bmarodi 1 年 2 個月前
選擇答案：D
選項 D 是正確答案。
獲得 1 次讚同  
 BABU97 1 年 4 個月前
我會選 C
獲得 1 次讚同  
 Aninina 1 年 6 個月前
選擇答案：D
我會選 D
獲得 1 次讚同  
 mhmt4438 1 年 6 個月前
選擇答案：D
我認為是 D
獲得 1 次讚同  


# Page 617

Topic 1
Question #220
某位 solutions architect 正在設計一個新的 API，將使用 Amazon API Gateway 接收使用者請求。請求量變動非常大；有時可能好幾個小時都沒有任何請求。資料處理將以非同步方式進行，但在收到請求後幾秒內就應完成。
為了以最低成本滿足需求，solutions architect 應讓 API 呼叫哪種 compute service？
A. AWS Glue job
B. AWS Lambda function
C. 部署在 Amazon Elastic Kubernetes Service (Amazon EKS) 上的 containerized service
D. 部署在 Amazon ECS with Amazon EC2 上的 containerized service
正確答案：B  
 Parsons 高票回答  1 年 6 個月前
選擇答案：B
B 是正確答案。 
API Gateway + Lambda 是現代 serverless architecture 應用程式的完美組合。
獲得 11 次讚同  
 a7md0 最新  1 個月 1 週前
選擇答案：B
這題就是 Lambda
獲得 1 次讚同  
 TariqKipkemei 10 個月 2 週前
選擇答案：B
資料處理必須在幾秒內完成 = AWS Lambda function
獲得 1 次讚同  
 Guru4Cloud 10 個月 3 週前
選擇答案：B
B. AWS Lambda function
獲得 1 次讚同  
 ukivanlamlpi 11 個月 2 週前
選擇答案：D
lambda 比在 EC2 上跑 ECS 還貴
獲得 1 次讚同  
 pentium75 7 個月 1 週前
「Several hours can pass without receiving a single request」，在這段期間 Lambda 的成本是 0.00。
獲得 3 次讚同  
 Undisputed 1 年前
選擇答案：B
Lambda 一路到底。
獲得 1 次讚同  
 cookieMr 1 年 1 個月前
選擇答案：B
Lambda 是一種 serverless compute service，可由 API Gateway 觸發，以非同步方式處理請求。它會依據進入的請求量自動擴展，並透過只針對實際運算時間收費的方式達到成本最佳化。 
 
A. Glue 是 fully managed ETL service，設計目的是資料處理與轉換，而不是提供 API 請求服務。它不一定適合處理變動的請求量，且也不符合幾秒內完成回應的需求。 
 
C. 雖然 EKS 提供擴展性與彈性，但若要處理變動型 API 請求量，管理與擴展其基礎設施會帶來額外複雜度與負擔。 
 
D. 與前一個選項類似，使用 ECS with EC2 需要額外投入基礎設施管理與擴展工作，對這種間歇且變動型 API 請求量來說未必必要。
社群投票分布
B (96%)
4%


# Page 618

獲得 3 次讚同  
 Bmarodi 1 年 2 個月前
選擇答案：B
選項 B 符合需求。
獲得 1 次讚同  
 Aninina 1 年 6 個月前
選擇答案：B
Lambda！
獲得 3 次讚同  
 mhmt4438 1 年 6 個月前
選擇答案：B
https://www.examtopics.com/discussions/amazon/view/43780-exam-aws-certified-solutions-architect-associate-saa-c02/
獲得 1 次讚同  


# Page 619

Topic 1
Question #221
某公司在一組 Amazon Linux EC2 instances 上執行應用程式。出於合規原因，公司必須保留所有 application log files 7 年。這些 log files 將由報表工具分析，而該工具必須能同時存取所有檔案。
哪種 storage solution 能以最具成本效益的方式滿足這些需求？
A. Amazon Elastic Block Store (Amazon EBS)
B. Amazon Elastic File System (Amazon EFS)
C. Amazon EC2 instance store
D. Amazon S3
正確答案：D  
 cookieMr 高票回答  1 年 1 個月前
選擇答案：D
A. EBS 為 EC2 instances 提供 block-level storage volumes。雖然具備耐久性與持久性，但它不是長期保留 log files 最具成本效益的方案。此外，它不提供檔案的 concurrent access，而這正是此情境的需求。 
 
B. EFS 是可擴展的 file storage service，可同時掛載到多個 EC2 instances。雖然它提供 concurrent access，但和 S3 相比，因為定價較高，未必是長期保留資料最具成本效益的方案。 
 
C. instance store 是一種直接附加在 EC2 instance 上的暫時性儲存方案。它無法提供合規所需的耐久性與長期保留能力。此外，instance store 只能由其所附加的特定 EC2 instance 存取，因此報表工具也無法對其進行 concurrent access。 
 
因此，考量長期保留、concurrent access 與成本效益等需求，S3 是最合適且最具成本效益的儲存方案。
獲得 13 次讚同  
 Ruffyit 最新  8 個月 2 週前
A. EBS 為 EC2 instances 提供 block-level storage volumes。雖然具備耐久性與持久性，但它不是長期保留 log files 最具成本效益的方案。此外，它不提供檔案的 concurrent access，而這正是此情境的需求。 
 
B. EFS 是可擴展的 file storage service，可同時掛載到多個 EC2 instances。雖然它提供 concurrent access，但和 S3 相比，因為定價較高，未必是長期保留資料最具成本效益的方案。 
 
C. instance store 是一種直接附加在 EC2 instance 上的暫時性儲存方案。它無法提供合規所需的耐久性與長期保留能力。此外，instance store 只能由其所附加的特定 EC2 instance 存取，因此報表工具也無法對其進行 concurrent access。
獲得 1 次讚同  
 Chiquitabandita 10 個月 1 週前
這聽起來像是昂貴的方案，但如果有必要，S3 仍會是最好的。
獲得 1 次讚同  
 TariqKipkemei 10 個月 2 週前
最具成本效益 = Amazon S3
獲得 1 次讚同  
 Guru4Cloud 10 個月 3 週前
選擇答案：D
D. Amazon S3
獲得 1 次讚同  
 kapit 1 年 1 個月前
s3<efs<ebs
獲得 1 次讚同  
 Iconique 10 個月 1 週前
其實是 S3 < EBS < EFS，但 EBS 還需要為底層 provisioned GB 付費。 
如果只比較 1 GB，那是 S3 < EBS < EFS；但如果 EBS 開到 100GB，EBS 就會更貴。
獲得 1 次讚同  
