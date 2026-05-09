# 第 501 頁

主題 1
題目 #180
某公司 正在設計一個由 API 驅動的雲端通訊平台。 該應用程式部署在 Amazon EC2 執行個體 behind a
Network Load Balancer (NLB). 該公司 使用 Amazon API Gateway 透過 API 提供外部使用者存取此應用程式。
該公司 希望保護平台免受 SQL injection 等 Web 攻擊，並且希望偵測與緩解大型且複雜的
DDoS 攻擊.
哪一組解決方案可提供最多保護？（請選兩個。）
A. 使用 使用 AWS WAF 保護 the NLB.
B. 使用 AWS Shield Advanced with the NLB.
C. 使用 使用 AWS WAF 保護 Amazon API Gateway.
D. 使用 Amazon GuardDuty with AWS Shield Standard
E. 使用 AWS Shield Standard with Amazon API Gateway.
正確答案： BC 
 babaxoxo 高票  1 year, 8 months ago
選擇答案： BC
Shield - Load Balancer, CF, Route53 
AWF - CF, ALB, API Gateway
按讚 44 次 
 Ouk 1 year, 7 months ago
Thank u U meant WAF* - CloudFormation, right? haha
按讚 5 次 
 YogK 1 year, 2 months ago
Shield - Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Route 53. 
 
WAF - Amazon CloudFront, the Application Load Balancer (ALB), Amazon API Gateway, and AWS AppSync
按讚 10 次 
 rjam 高票  1 year, 8 months ago
選擇答案： BC
AWS Shield Advanced - DDos 攻擊 
使用 AWS WAF 保護 Amazon API Gateway, 因為 WAF sits before the API Gateway and then comes NLB.
按讚 7 次 
 studynoplay 1 year, 2 months ago
don't agree that NLB sits before API gateway. it 應該 be other way around
按讚 3 次 
 aadityaravi8 1 year ago
yes.. coming from outside to inside... first of all DDos 保護 是 required so the outer most NLB with Shield Advanced and then filter
particular request doing SQL injection and all i.e API Gateway with WAF
按讚 1 次 
 EMPERBACH 最新  3 months, 2 weeks ago
選擇答案： BD
B- (Shield Advance) PROTECT the platform against Web 攻擊 like SQL injection 
D- (GuardDuty) also 想要 DETECT mitigate large, sophisticated DDoS 攻擊 
WAF use for filter 流量, not make sense here.
按讚 1 次 
 lofzee 2 months, 1 week ago
Shield advanced does not protect against SQL injection. That 是 what WAF 是 for. 
GuardDuty 是 not the right tool here. 
Answers 是 B and C bro.
按讚 1 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： BC
社群投票分布
BC (93%)
3%


# 第 502 頁

B) 使用 AWS Shield Advanced 搭配 the NLB 
 
C) Use 使用 AWS WAF 保護 Amazon API Gateway 
 
關鍵原因如下：
 
AWS Shield Advanced 提供 expanded DDoS 保護 against larger and more sophisticated 攻擊 
Using it with the NLB helps protect against network floods 
WAF still 提供 critical 保護 against exploits at the API lay
按讚 3 次 
 Sat897 11 months, 3 weeks ago
選擇答案： BC
WAF - can't support NLB and its supports API Gateway 
AWS Shield Advanced - NLB - DDOS
按讚 1 次 
 cookieMr 1 year, 1 month ago
B. AWS Shield Advanced 提供 advanced DDoS protection for the NLB, making it the appropriate choice for protecting against large and
sophisticated DDoS 攻擊 at the 網路層. 
 
C. AWS WAF 是 designed to 提供 protection at the 應用層, making it suitable for securing the API Gateway against Web 攻擊 like
SQL injection. 
 
A. AWS WAF 是 不相容於 NLB as it operates at the 應用層, whereas NLB operates at the 傳輸層. 
 
D. While GuardDuty helps detect threats, it does not directly protect against Web 攻擊 or DDoS attacks. Shield Standard focuses on edge
resources, not specifically NLBs. 
 
E. Shield Standard 提供 basic DDoS protection for edge resources, but it does not directly protect the NLB or address Web 攻擊 at the
應用層.
按讚 4 次 
 cheese929 1 year, 2 months ago
選擇答案： BC
B and C 是 correct
按讚 1 次 
 kruasan 1 year, 3 months ago
選擇答案： BC
NLB 是 a Lyer 3/4 component while WAF 是 a Layer 7 保護 component. 
 
That 是 why WAF 是 only available for Application Load Balancer in the ELB portfolio. NLB does not terminate the TLS session 因此 WAF 是 not
capable of acting on the content. I would consider 使用 AWS Shield at Layer 3/4. 
https://repost.aws/questions/QU2fYXwSWUS0q9vZiWDoaEzA/nlb-need-to-attach-aws-waf
按讚 4 次 
 jdr75 1 year, 3 months ago
選擇答案： C
• A. Use 使用 AWS WAF 保護 the NLB.  
INCORRECT, cos' WAF not integrate with network LB 
• B. 使用 AWS Shield Advanced 搭配 the NLB. 
 
YES. AWS Shield Advanced 提供 additional protections against more sophisticated and larger 攻擊 for your 應用程式 running in AWS. 
The doubt 是 : why apply the 保護 in the NLB when the facing of the app. 是 the API Gateway?, 因為 Shield shoud be in front of the
communications, not behind. 
Nevertheless, th是 是 the best option.  
 
• C. Use 使用 AWS WAF 保護 Amazon API Gateway.  
YES, https://aws.amazon.com/es/waf/faqs/ 
• D. 使用 Amazon GuardDuty 搭配 AWS Shield Standard  
INCORRECT, GuardDuty not prevent 攻擊. 
•E. 使用 AWS Shield Standard 搭配 Amazon API Gateway.  
INCORRECT. It could be, in principle, a good option, cos' it's in front of the gateway, but the questions said explicity: 
"想要 detect and mitigate large, sophisticated DDoS 攻擊", 
and Standard not 提供 th是 feature.
按讚 1 次 
 kerl 1 year, 6 months ago
for those who select A, 它是 wrong, WAF 是 Layer 7, it only support ABL, APIGateway, CloudFront,COgnito User Pool and AppSync graphQL API
(https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). NLB 是 NOT supported. Answer 是 BC
按讚 4 次 
 bullrem 1 year, 6 months ago
選擇答案： AB
A and B 是 the best options to 提供 the greatest 保護 for the platform against web vulnerabilities and large, sophisticated DDoS 攻擊
選項 A: Use 使用 AWS WAF 保護 the NLB. Th是 將會 提供 保護 against common web vulnerabilities such as SQL injection. 
選項 B: 使用 AWS Shield Advanced 搭配 the NLB. Th是 將會 提供 additional 保護 against large and sophisticated DDoS 攻擊.


# 第 503 頁

按讚 2 次 
 bullrem 1 year, 6 months ago
The best 保護 for the platform would be 使用 A and C together 因為 it 將會 protect both the NLB and the API Gateway from web
vulnerabilities and DDoS 攻擊.
按讚 1 次 
 omoakin 1 year, 2 months ago
correct
按讚 1 次 
 bullrem 1 year, 6 months ago
A and C 是 the best options for protecting the platform against web vulnerabilities and detecting and mitigating large and sophisticated
DDoS 攻擊. 
A: AWS WAF 可以 be used 來保護 the NLB from web vulnerabilities such as SQL injection. 
C: AWS WAF 可以 be used 來保護 Amazon API Gateway and also 提供 保護 against DDoS 攻擊. 
B: AWS Shield Advanced 是 used 來保護 resources from DDoS 攻擊, but 它是 not specific to the NLB and may not 提供 the same level o
protection as 使用 WAF specifically on the NLB. 
D and E: Amazon GuardDuty and AWS Shield Standard 是 primarily used for threat detection and may not 提供 the same level of protectio
as 使用 WAF and Shield Advanced.
按讚 1 次 
 Arifzefen 1 year ago
A 是 not 正確 as WAF doesn't support Network Load Balancer
按讚 2 次 
 drabi 1 year, 7 months ago
選擇答案： BC
WS Shield Advanced 可以 help protect your Amazon EC2 執行個體 and Network Load Balancers against infrastructure-layer Distributed Denial of
Service (DDoS) 攻擊. Enable AWS Shield Advanced on an AWS Elastic IP address and attach the address to an internet-facing EC2 執行個體 or
Network Load Balancer.https://aws.amazon.com/blogs/security/tag/network-load-balancers/
按讚 2 次 
 duriselvan 1 year, 7 months ago
Regional resources 
 
You 可以 protect regional resources in all Regions where AWS WAF 是 available. You 可以 see the list at AWS WAF endpoints and quotas in the
Amazon Web Services General Reference. 
 
You 可以 use 使用 AWS WAF 保護 the following regional resource types: 
 
Amazon API Gateway REST API 
 
Application Load Balancer 
 
AWS AppSync GraphQL API 
 
Amazon Cognito user pool 
 
You 可以 only associate a web ACL to an Application Load Balancer that's within AWS Regions. For example, you cannot associate a web ACL to an
Application Load Balancer that's on AWS Outposts.
按讚 1 次 
 duriselvan 1 year, 7 months ago
Ans:-a and C
按讚 1 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
選擇答案： AC
***CORRECT*** 
 
A. 使用 使用 AWS WAF 保護 the NLB. 
C. 使用 使用 AWS WAF 保護 Amazon API Gateway. 
 
AWS WAF 是 a web 應用程式 firewall that helps protect web 應用程式 from common Web 攻擊 such as SQL injection and cross-site
scripting 攻擊. By 使用 使用 AWS WAF 保護 the NLB and Amazon API Gateway, the company 可以 提供 an additional layer of 保護 for
its cloud communications platform against these types of Web 攻擊.
按讚 1 次 
 PassNow1234 1 year, 7 months ago
Your answer 是 wrong.  
 
Sophisticated DDOS = Shield Advanced (DD0S 攻擊 the front!) What happens if your load balances goes down?  
 
Your API gateway 是 on the BACK further behind the NLB. SQL Protect that with the WAF 
 
B and C 是 right.
按讚 5 次 


# 第 504 頁

 jwu413 1 year, 6 months ago
Th是 guy just copies and pastes from ChatGPT.
按讚 5 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
About AWS Shield Advanced and Amazon GuardDuty 
 
AWS Shield Advanced 是 a managed DDoS 保護 service that 提供 additional 保護 for Amazon EC2 執行個體, Amazon RDS DB
執行個體, Amazon Elastic Load Balancers, and Amazon CloudFront distributions. It 可以 help detect and mitigate large, sophisticated DDoS
attacks, "but it does not 提供 保護 against Web 攻擊 like SQL injection." 
 
Amazon GuardDuty 是 a threat detection service that uses machine learning and other techniques to identify potentially malicious activity in
your AWS accounts. It 可以 be used in conjunction with AWS Shield Standard, which 提供 basic DDoS 保護 for Amazon EC2 執行個體,
Amazon RDS DB 執行個體, and Amazon Elastic Load Balancers. 然而， neither Amazon GuardDuty nor AWS Shield Standard 提供
protection against Web 攻擊 like SQL injection. 
 
Overall, the combination of 使用 使用 AWS WAF 保護 the NLB and Amazon API Gateway 提供 the most 保護 against Web 攻擊
and large, sophisticated DDoS 攻擊.
按讚 1 次 
 BENICE 1 year, 7 months ago
選項 B and C
按讚 1 次 
 career360guru 1 year, 7 months ago
選擇答案： BC
B and C
按讚 1 次 
 tz1 1 year, 7 months ago
B & C 是 the answer
按讚 1 次 


# 第 505 頁

主題 1
題目 #181
某公司 has a legacy data processing 應用程式 that runs on Amazon EC2 執行個體. Data 是 processed sequentially, but the order of
results does not matter. 該應用程式 uses a monolithic architecture. The only way that the company 可以 scale the 應用程式 以滿足
increased demand 是 to increase the size of the 執行個體.
The company’s developers have decided to rewrite the 應用程式 使用 a microservices architecture on Amazon Elastic Container Service
(Amazon ECS).
對於 microservices 之間的通訊，Solutions Architect 應建議什麼？
A. 建立 an Amazon Simple Queue Service (Amazon SQS) queue. 新增 code to the data producers, and send data to the queue. 新增 code
to the data consumers to process data from the queue.
B. 建立 an Amazon Simple Noti¬cation Service (Amazon SNS) topic. 新增 code to the data producers, and publish noti¬cations to the
topic. Add code to the data consumers to subscribe to the topic.
C. 建立 an AWS Lambda function to pass messages. 新增 code to the data producers to call the Lambda function with a data object. Add
code to the data consumers to receive a data object 那是 passed from the Lambda function.
D. 建立 an Amazon DynamoDB table. 啟用 DynamoDB Streams. 新增 code to the data producers to insert data into the table. 新增 code
to the data consumers 使用 the DynamoDB Streams API to detect new table entries and retrieve the data.
正確答案： A 
 Buruguduystunstugudunstuy 高票  1 year, 7 months ago
選擇答案： A
選項 B, 使用 Amazon Simple Notification Service (SNS), would not be suitable for th是 use case, as SNS 是 a pub/sub messaging service that is
designed for one-to-many communication, rather than point-to-point communication between specific microservices. 
 
選項 C, 使用 an AWS Lambda function to pass messages, would not be suitable for th是 use case, as it would require the data producers and
data consumers to have a direct connection and invoke the Lambda function, rather than being decoupled through a message queue. 
 
選項 D, 使用 an Amazon DynamoDB table with DynamoDB Streams, would not be suitable for th是 use case, as it would require the data
consumers to continuously poll the DynamoDB Streams API to detect new table entries, rather than being notified of new data through a message
queue.
按讚 18 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
Hence, 選項 A 是 the 正確 answer. 
 
Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the
data consumers to process data from the queue.
按讚 9 次 
 cookieMr 高票  1 year, 1 month ago
選擇答案： A
A. Creating an Amazon SQS queue allows for asynchronous communication between microservices, decoupling the data producers and
consumers. It 提供 scalability, flexibility, and ensures that data processing 可以 happen independently and at a desired pace. 
 
B. Amazon SNS 是 more suitable for pub/sub messaging, where multiple subscribers receive the same message. It may not be the best fit for
sequential data processing. 
 
C. Using AWS Lambda functions for communication introduces unnecessary complexity and may not be the optimal solution for sequential data
processing. 
 
D. Amazon DynamoDB with DynamoDB Streams 是 primarily designed for real-time data streaming and change capture scenarios. It may not be th
most efficient choice for sequential data processing in a microservices architecture.
按讚 5 次 
 scar0909 最新  4 months, 3 weeks ago
選擇答案： A
A 無誤
按讚 1 次 
 reviewmine 5 months, 2 weeks ago
社群投票分布
A (93%)
8%


# 第 506 頁

選擇答案： A
To Decouple a monolithic 應用程式 - SQS 
- SQS standard - not in order 
- SQS FIFO - in order
按讚 1 次 
 upliftinghut 6 months, 1 week ago
選擇答案： A
Data 是 processed sequentially, but the order of results does not matter => SQS; if order matters => SQL FIFO
按讚 1 次 
 Cloud_A 6 months, 3 weeks ago
選擇答案： A
A 是 the answer.
按讚 1 次 
 TariqKipkemei 10 months, 3 weeks ago
選擇答案： A
Data 是 processed sequentially, but the order of results does not matter = Amazon Simple Queue Service
按讚 1 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： A
A) Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the
data consumers to process data from the queue. 
 
For asynchronous communication between decoupled microservices, an SQS queue 是 the most appropriate service 使用. 
 
SQS 提供 a scalable, 高可用 queue to buffer messages between producers and consumers. 
The order of processing does not matter, so a queue model fits well. 
The consumers 可以 scale independently to process messages from the queue.
按讚 3 次 
 omoakin 1 year, 2 months ago
BBBBBBBBB
按讚 1 次 
 Bmarodi 1 year, 2 months ago
選擇答案： A
SQS for decoupling a monolithic architecture, hence option A 是 the right answer.
按讚 1 次 
 Madhuaws 1 year, 4 months ago
it also says 'the order of results does not matter'. 選項 B 是 correct.
按讚 1 次 
 asoli 1 year, 4 months ago
選擇答案： A
The answer 是 A. 
B 是 wrong 因為 SNS cannot send events "directly" to ECS. 
https://docs.aws.amazon.com/sns/latest/dg/sns-event-destinations.html
按讚 1 次 
 user_deleted 1 year, 5 months ago
選擇答案： B
it deosn;t say 它是 one-one relationships , SNS 是 better
按讚 3 次 
 markw92 1 year, 1 month ago
watch out for th是 sentence in the question..."Data 需要 process sequentially...."
按讚 2 次 
 career360guru 1 year, 7 months ago
選擇答案： A
Best answer 是 A.  
Though C or D 是 possible it requires additional components and integration and so 它們是 not efficient. Assuming that rate of incoming
requests 是 within limits that SQS 可以 handle A 是 best option.
按讚 1 次 
 k1kavi1 1 year, 7 months ago
選擇答案： A
A 是 correct
按讚 1 次 


# 第 507 頁

 Shasha1 1 year, 7 months ago
answer 是 B.  
An Amazon Simple Notification Service (Amazon SNS) topic 可以 be used for communication between the microservices in th是 scenario. The data
producers 可以 be configured to publish notifications to the topic, and the data consumers 可以 be configured to subscribe to the topic and receiv
notifications as 它們是 published. Th是 allows for asynchronous communication between the microservices, Question here focus on
communication between microservices
按讚 2 次 
 xua81376 1 year, 8 months ago
We need decoupling so ok 使用 SQS
按讚 2 次 


# 第 508 頁

主題 1
題目 #182
某公司 想要 migrate its MySQL 資料庫 from on premises to AWS. 該公司 recently experienced a 資料庫 outage that
signi¬cantly impacted the business. To ensure th是 does not happen again, the company wants a reliable 資料庫 solution on AWS that
minimizes data loss and stores every transaction on at least two nodes.
哪一個解決方案可滿足這些需求？
A. 建立 an Amazon RDS DB 執行個體 with synchronous replication to three nodes in three Availability Zones.
B. 建立 an Amazon RDS MySQL DB 執行個體 with Multi-AZ functionality enabled to synchronously replicate the data.
C. 建立 an Amazon RDS MySQL DB 執行個體 and then create a 讀取複本 in a separate AWS Region that synchronously replicates the
data.
D. 建立 an Amazon EC2 執行個體 with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the
data to an Amazon RDS MySQL DB 執行個體.
正確答案： B 
 rjam 高票  1 year, 8 months ago
選擇答案： B
Amazon RDS MySQL DB 執行個體 with Multi-AZ functionality enabled to synchronously replicate the data 
Standby DB in Multi-AZ- synchronous replication 
 
Read Replica always asynchronous. so option C 是 ignored.
按讚 18 次 
 studynoplay 高票  1 year, 2 months ago
選擇答案： B
RDS Multi-AZ = Synchronous = Disaster Recovery (DR) 
Read Replica = Asynchronous = High Availability
按讚 11 次 
 pentium75 7 months, 1 week ago
B 是 正確 but the explanation 是 flawed ;) 
 
RDS Multi-AZ = Synchronous = High Availability 
Read Replica = Asynchronous = Disaster Recovery (DR)
按讚 5 次 
 Nawaff 最新  4 weeks, 1 day ago
選擇答案： B
Answer 是 B 
Find the below URL for the perfect explanation for the differences between: 
- Multi-AZ DB 
- Multi-Region DB 
- Read replicas DB 
 
https://aws.amazon.com/rds/features/read-replicas/
按讚 1 次 
 scar0909 4 months, 3 weeks ago
選擇答案： B
Multi AZ for availability
按讚 1 次 
 riyasara 9 months, 2 weeks ago
選項 A 是 錯誤 因為 Amazon RDS does not support synchronous replication to three nodes in three Availability Zones. 
選項 C 是 錯誤 因為 while you 可以 create a 讀取複本 in a separate AWS Region1, the replication from the primary DB 執行個體 to the
讀取複本 是 asynchronous, not synchronous.
按讚 3 次 
 cookieMr 1 year, 1 month ago
選擇答案： B
社群投票分布
B (97%)


# 第 509 頁

B. 建立 an Amazon RDS MySQL DB 執行個體 with Multi-AZ functionality enabled to synchronously replicate the data. 
 
Enabling Multi-AZ functionality in Amazon RDS ensures synchronous replication of data to a standby replica in a different Availability Zone. This
提供 高可用性 and minimizes data loss in the event of a 資料庫 outage. 
 
A. Creating an Amazon RDS DB 執行個體 with synchronous replication to three nodes in three Availability Zones would 提供 even higher
availability but 是 not necessary for the stated requirements. 
 
C. Creating a 讀取複本 in a separate AWS Region would 提供 disaster recovery capabilities but does not ensure synchronous replication or
meet the requirement of storing every transaction on at least two nodes. 
 
D. Using an EC2 執行個體 with a MySQL engine and triggering an AWS Lambda function for replication introduces unnecessary complexity and is
not the most suitable solution for ensuring reliable and synchronous replication.
按讚 2 次 
 channn 1 year, 3 months ago
選擇答案： B
B 
since all other answers r wrong
按讚 2 次 
 jayce5 1 year, 4 months ago
選擇答案： B
B 
Since 讀取複本 是 async.
按讚 1 次 
 LuckyAro 1 year, 6 months ago
選擇答案： C
Multi AZ 是 not as protected as Multi-Region Read Replica.
按讚 1 次 
 pentium75 7 months, 1 week ago
But 是 IS protected. Read replica 是 asynchronous, fails 以滿足 the "store EVERY transaction on at least two nodes" requirement.
按讚 1 次 
 JayBee65 1 year, 6 months ago
I curios to know why A isn't right. Is it just that it would take more effort?
按讚 3 次 
 pentium75 7 months, 1 week ago
How would you implement A?
按讚 1 次 
 techhb 1 year, 7 months ago
B 是 正確 C requires more wokr.
按讚 1 次 
 BENICE 1 year, 7 months ago
選項 B
按讚 1 次 
 bammy 1 year, 7 months ago
Multi-AZ 將會 give at least two nodes as required by the question. The answer 是 B. 
 
Amazon RDS 提供 高可用性 and failover support for DB 執行個體 使用 Multi-AZ deployments with a single standby DB 執行個體. 
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html
按讚 3 次 
 career360guru 1 year, 7 months ago
選擇答案： B
選項 B
按讚 1 次 
 Shasha1 1 year, 7 months ago
選項 A 是 the 正確答案 in th是 scenario 因為 it meets the requirements specified in the question. It creates an Amazon RDS DB 執行個體
with synchronous replication to three nodes in three Availability Zones, which 將會 提供 高可用性 and durability for the 資料庫,
ensuring that the data 是 stored on multiple nodes and automatically replicated across Availability Zones. 
 
選項 B 是 not a 正確答案 因為 it creates an Amazon RDS MySQL DB 執行個體 with Multi-AZ functionality enabled, which only 提供
failover capabilities. It does not enable synchronous replication to multiple nodes, which 是 required in th是 scenario.
按讚 2 次 
 JayBee65 1 year, 6 months ago
選項 B 是 not incorrect: "The primary DB 執行個體 是 synchronously replicated across Availability Zones to a standby replica to 提供 data
redundancy and minimize latency spikes during system backups" from


# 第 510 頁

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZSingleStandby.html
按讚 1 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
I would go with 選項 B since it meets the company's requirements and 是 the most suitable solution. 
 
By creating an Amazon RDS MySQL DB 執行個體 with Multi-AZ functionality enabled, the solutions architect 將會 ensure that data 是 automaticall
synchronously replicated across multiple AZs within the same Region. Th是 提供 高可用性 and data durability, minimizing the risk of
data loss and ensuring that every transaction 是 stored on at least two nodes.
按讚 1 次 
 stepman 1 year, 7 months ago
Maybe C since Amazon RDC now supports cross region 讀取複本 https://aws.amazon.com/about-aws/whats-new/2022/11/amazon-rds-sql-
server-cross-region-read-replica/
按讚 1 次 
 Wpcorgan 1 year, 8 months ago
B 是 correct
按讚 1 次 


# 第 511 頁

主題 1
題目 #183
某公司 building a new dynamic ordering website. 該公司 想要 minimize server maintenance and patching. The website must
be 高可用 and 必須 scale 讀取 and 寫入 capacity as quickly as possible 以滿足 changes in user demand.
哪一個解決方案可滿足這些需求？
A. 將...託管於 static content in Amazon S3. 將...託管於 dynamic content by 使用 Amazon API Gateway and AWS Lambda. 使用 Amazon DynamoDB with
on-demand capacity for the 資料庫. Con¬gure Amazon CloudFront to deliver the website content.
B. 將...託管於 static content in Amazon S3. 將...託管於 dynamic content by 使用 Amazon API Gateway and AWS Lambda. 使用 Amazon Aurora with
Aurora Auto Scaling for the 資料庫. Con¬gure Amazon CloudFront to deliver the website content.
C. 將...託管於 all the website content on Amazon EC2 執行個體. 建立 an Auto Scaling group to scale the EC2 執行個體. 使用 an Application
Load Balancer to distribute tra®c. Use Amazon DynamoDB with provisioned 寫入 capacity for the 資料庫.
D. 將...託管於 all the website content on Amazon EC2 執行個體. 建立 an Auto Scaling group to scale the EC2 執行個體. 使用 an Application
Load Balancer to distribute tra®c. Use Amazon Aurora with Aurora Auto Scaling for the 資料庫.
正確答案： A 
 romko 高票  1 year, 8 months ago
選擇答案： A
A - 是 correct, 因為 Dynamodb on-demand scales 寫入 and 讀取 capacity 
B - Aurora auto scaling scales only 讀取複本s
按讚 45 次 
 klayytech 1 year, 4 months ago
That’s not correct. Amazon Aurora with Aurora Auto Scaling 可以 scale both 讀取 and 寫入 replicas. Is there anything else you would like me to
help you with?
按讚 7 次 
 Duckydoo 1 month, 2 weeks ago
Could you point us to a source where it says that Aurora Auto Scaling 可以 scale 寫入 replicas? The AWS documentation specifically
mentions that it supports only 讀取複本s (e.g.
https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Integrating.AutoScaling.html): 
 
To meet your connectivity and workload requirements, Aurora Auto Scaling dynamically adjusts the number of Aurora Replicas (reader DB
執行個體) provisioned for an Aurora DB cluster. Aurora Auto Scaling 是 available for both Aurora MySQL and Aurora PostgreSQL.
按讚 1 次 
 Yadav_Sanjay 1 year, 1 month ago
That's why Dynamo DB 是 best suited option
按讚 2 次 
 Yadav_Sanjay 1 year, 1 month ago
Correct...Both 可以 serve purpose but note the keyword "必須 scale 讀取 and 寫入 capacity as quickly as possible 以滿足 changes in user
demand". DynamoDB 可以 scale quickly than Aurora. Remember "PUSH BUTTON SCALING FEATURE" of Dynamo DB.
按讚 6 次 
 Manlikeleke 高票  1 year, 8 months ago
please 是 th是 dump enough to pass the exam?
按讚 13 次 
 Bobbybash 1 year, 8 months ago
I HOPE SO
按讚 9 次 
 LuckyAro 1 year, 6 months ago
You 可以 tell us now ? Going by the date of your post I guess you would have challenged the exam by now ? so how did it go ?
按讚 9 次 
 sou¬yane 3 months, 3 weeks ago
did you pass ?
按讚 2 次 
 ManikRoy 最新  3 months ago
社群投票分布
A (94%)
6%


# 第 512 頁

選擇答案： A
Dynamo DB Push Scaling
按讚 1 次 
 Cloud_A 6 months, 3 weeks ago
選擇答案： A
https://aws.amazon.com/blogs/資料庫/how-to-determine-if-amazon-dynamodb-is-appropriate-for-your-needs-and-then-plan-your-
migration/#:~:text=Are%20working%20with%20an%20online%20transaction%20processing%20(OLTP)%20workload.%20High%2Dperformance%
0reads%20and%20writes%20are%20easy%20to%20manage%20with%20DynamoDB%2C%20and%20you%20can%20expect%20performance%20th
at%20is%20effectively%20constant%20across%20widely%20varying%20loads.
按讚 2 次 
 awsgeek75 7 months ago
選擇答案： A
C,D 是 out due to EC2 scaling which 是 not ideal for static content scaling. 
A and B 是 logical choices. B uses Aurora which 是 more for relational 資料庫 and comes with the baggage and limitations of RDBMS scaling.
DynamDB (no SQL) 是 easier to scale for both 讀取 and write. A 是 simply better than be for an ordering website so 那是 the better option. Note
that B would have been good if A wasn't a choice.
按讚 2 次 
 tom_cruise 9 months, 3 weeks ago
選擇答案： A
dynamodb 是 Serverless
按讚 3 次 
 Angryasianxd 10 months, 3 weeks ago
選擇答案： A
Hi all! The answer 是 A and NOT B on th是 one as the company 是 building an ordering website (OLTP). DynamoDB's high performance 讀取 and
writes 是 perfect for an OLTP use case.  
 
https://aws.amazon.com/blogs/資料庫/how-to-determine-if-amazon-dynamodb-is-appropriate-for-your-needs-and-then-plan-your-
migration/
按讚 2 次 
 n0pz 10 months, 3 weeks ago
S3 是 discarded since the question says: 某公司 building a new dynamic ordering website,
按讚 1 次 
 TariqKipkemei 10 months, 3 weeks ago
選擇答案： A
minimize server maintenance and patching, 高可用, scale 讀取 and 寫入 = Serverless = Amazon S3, Amazon API Gateway, AWS Lambda,
Amazon DynamoDB
按讚 2 次 
 DebAwsAccount 10 months, 4 weeks ago
選擇答案： A
Key phrase in the Question 是 必須 scale 讀取 and 寫入 capacity. Aurora 是 only for Read. 
Amazon DynamoDB has two read/write capacity modes for processing reads and writes on your tables: 
On-demand 
Provisioned (default, free-tier eligible) 
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html
按讚 3 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： A
最小化維運與修補 = Serverless 
S3, DynamoDB 是 Serverless
按讚 1 次 
 ravindrabagale 11 months, 3 weeks ago
最小化維運與修補 = Serverless services 
Serverless services with no sql 資料庫 是 perfect combination
按讚 1 次 
 cookieMr 1 year, 1 month ago
選擇答案： A
B. Th是 solution leverages serverless technologies like API Gateway and Lambda for hosting dynamic content, reducing server maintenance and
patching. Aurora with Aurora Auto Scaling 提供 a 高可用 and scalable 資料庫 solution. Hosting static content in S3 and configuring
CloudFront for content delivery ensures 高可用性 and efficient scaling. 
 
A. Using DynamoDB with on-demand capacity may 提供 scalability, but it does not offer the same level of flexibility and performance as
Aurora. Additionally, it does not address the hosting of dynamic content 使用 Serverless technologies. 
 
C. Hosting all the website content on EC2 執行個體 requires server maintenance and patching. While 使用 ASG and an ALB helps with availability
and scalability, it does not minimize server maintenance as requested. 


# 第 513 頁

 
D. Hosting all the website content on EC2 執行個體 introduces server maintenance and patching. Using Aurora with Aurora Auto Scaling 是 a good
choice for the 資料庫, but it does not address the need to minimize server maintenance and patching for the overall infrastructure.
按讚 1 次 
 dydzah 1 year, 2 months ago
B isn't 正確 因為 of cooldown 
You 可以 tune the responsiveness of a target-tracking scaling policy by adding cooldown periods that affect scaling your Aurora DB cluster in and
out. A cooldown period blocks subsequent scale-in or scale-out requests until the period expires. These blocks slow the deletions of Aurora
Replicas in your Aurora DB cluster for scale-in requests, and the creation of Aurora Replicas for scale-out requests.
按讚 1 次 
 Abrar2022 1 year, 2 months ago
Key word in question "storing ordering data"  
DynamoDB 是 perfect for storing ordering data (key-values)
按讚 2 次 
 studynoplay 1 year, 2 months ago
選擇答案： A
最小化維運與修補 = Serverless  
S3, DynamoDB 是 Serverless
按讚 2 次 
 lucdt4 1 year, 2 months ago
該公司 想要 minimize server maintenance and patching -> Serverless (minimize) 
C,D 是 wrong 因為 these 是 not Serverless 
B 是 wrong 因為 RDS 是 not Serverless 
-> A full Serverless
按讚 1 次 
 yyuussaaa 10 months, 3 weeks ago
For anyone who 是 confused about 選項 B, there's a Serverless Aurora service called "Aurora Serverless v2". Th是 將會 bring us an equivalent
solution to option A. But the 選項 B in the question only states the Aurora, 因此 by default we need to manage the servers underneath. 
Ref: https://www.projectpro.io/article/aws-aurora-vs-
rds/737#:~:text=RDS%20is%20a%20fully%2Dmanaged,manual%20management%20of%20資料庫%20servers.
按讚 2 次 


# 第 514 頁

主題 1
題目 #184
某公司 has an AWS account used for softw是 engineering. The AWS account has access to the company’s on-premises data center
through a pair of AWS Direct Connect connections. All non-VPC tra®c routes to the virtual private gateway.
A development team recently created an AWS Lambda function through the console. 開發團隊 需要 allow the function to
access a 資料庫 that runs in a private subnet in the company’s data center.
哪一個解決方案可滿足這些需求？
A. Con¬gure the Lambda function 執行 in the VPC with the appropriate security group.
B. Set up a VPN connection from AWS to the data center. Route the tra®c from the Lambda function through the VPN.
C. 更新 the route tables in the VPC to allow the Lambda function 存取 the on-premises data center through Direct Connect.
D. 建立 an Elastic IP address. Con¬gure the Lambda function to send tra®c through the Elastic IP address without an elastic network
interface.
正確答案： C 
 Gil80 高票  1 year, 8 months ago
選擇答案： A
To configure a VPC for an existing function: 
 
1. Open the Functions page of the Lambda console. 
2. Choose a function. 
3. Choose Configuration and then choose VPC. 
4. Under VPC, choose Edit. 
5. Choose a VPC, subnets, and security groups. <-- **That's why I believe the answer 是 A**. 
 
Note: 
If your function needs internet access, use network address translation (NAT). Connecting a function to a public subnet doesn't give it internet
access or a public IP address.
按讚 20 次 
 markw92 1 year, 1 month ago
The question says on-prem 資料庫...how do we create a SG for that 執行個體 in AWS? C make sense. my 2 cents..
按讚 7 次 
 SSadiq 1 month, 3 weeks ago
SG 是 for Lambda and not for the on-prem 資料庫. A 是 the 正確 option
按讚 1 次 
 AZ_Master 8 months, 2 weeks ago
A 是 correct. To configure SG for Lambda , go to Lambda function -> Configure -> Edit VPC and scroll down to see "security groups" where
you 可以 configure Lambda for VPC.  
Also see here 
https://repost.aws/questions/QUSaj1a6jBQ92Kp56klbZFNw/aws-lambda-to-on-premise-via-direct-connect-and-aws-privatelink
按讚 1 次 
 javitech83 高票  1 year, 8 months ago
選擇答案： A
它是 A. C 是 not 正確 at all as in the question it metions that the VPC already has connectivity with on-premises
按讚 10 次 
 LuckyAro 1 year, 6 months ago
C says to "update the route table" not create a new connection. C 是 correct.
按讚 4 次 
 ruqui 1 year, 2 months ago
C 是 wrong. Lambda can't connect by default to resources in a private VPC, so you have to do some specific setup steps 執行 in a private
VPC, Answer A 是 correct
按讚 2 次 
 Adios_Amigo 1 year, 3 months ago
No need to do route updates. Th是 是 因為 the route to the destination on-premises 是 already set.
社群投票分布
A (73%)
C (27%)


# 第 515 頁

按讚 4 次 
 jatric 最新  3 weeks, 6 days ago
選擇答案： C
C 是 correect as lambda already in VPC and AWS account already has connection setup with on-premise 資料庫 in private subnet
按讚 1 次 
 lofzee 2 months, 1 week ago
選擇答案： A
B,C,D dont have any logic behind them. 
A 是 the most logical answer as you need to connect a function to a VPC. The VPC 將會 be connected to the on-prem 資料庫.
按讚 1 次 
 MehulKapadia 3 months, 3 weeks ago
選擇答案： A
Answer A: During Lambda function creation select "Advanced Settings" select "Enable VPC", th是 將會 allow you to select VPC, Subnets and
SecurityGroup for your Lambda function. Th是 是 the way Lambda 可以 get controlled access to resouces in your VPC. 
 
Default Lambda Settings: 
When you create a Lambda function without specifying a VPC, the Lambda function does not get associated with any particular VPC. By default,
Lambda functions 是 not deployed within a VPC and do not have access to resources within a VPC, such as EC2 執行個體, RDS 資料庫s, or
Elasticache clusters, unless you explicitly configure the Lambda function to connect to a VPC.
按讚 4 次 
 Uzbekistan 4 months ago
選擇答案： C
Update the route tables in the VPC to allow the Lambda function 存取 the on-premises data center through Direct Connect. 
 
By updating the route tables in the VPC to allow the Lambda function 存取 the on-premises data center through Direct Connect, 是 the most
appropriate solution. By updating the route tables, you 可以 specify the route for 流量 from the Lambda function to the IP address range of the
on-premises data center via the Direct Connect connection. Th是 ensures that the Lambda function 可以 securely communicate with the 資料庫 in
the private subnet of the data center.
按讚 1 次 
 awsgeek75 6 months, 2 weeks ago
Every time I 讀取 th是 question the badly phrased options make no sense at all. I now want to vote for A but it makes no sense. 
Question says: All non-VPC 流量 routes to the virtual private gateway 
So Lambda 是 technically a non VPC 流量 too. Th是 means it already goes through the VPGW but we don't know what it connects. Assuming it
connect the data-centre to AWS then A makes sense. BUT all th是 是 based on different interpretation now for me.
按讚 5 次 
 pentium75 7 months ago
選擇答案： A
The wording 是 strange 因為 technically, the Lambda function does not "run in the VPC", rather 它是 connected to the VPC, but otherwise A is
what relevant documentation says - connect the Lambda function to the VPN and allow 流量 in the security group.  
 
Not B, we have Direct Connect, no need for VPN. 
 
Not C, route 是 already in place. And route alone does not help - the "route tables in the VPC" 是 completely irrelevant as long as we don't
connect the Lambda function to the VPC. 
 
Not D, an "Elastic IP address" 是 always connected to an "elastic network interface", such 是 created automatically with A.
按讚 4 次 
 Kanagarajd 4 months, 3 weeks ago
I agree with explanation!
按讚 1 次 
 awsgeek75 7 months ago
選擇答案： C
The question and options 是 very badly worded so it makes C a possible candidate (unconvincingly though!). 
B: VPN 是 not needed as Direct Connect 是 already there 
D: Irrelevant  
A 是 too generic (appropriate security group for what?) Lambda has fixed VPC or ENI 
C 是 logically relevant
按讚 1 次 
 pentium75 7 months, 1 week ago
A says "configure the Lambda function to RUN IN the VPC", but "a Lambda function ALWAYS runs inside a VPC owned by the Lambda service"
(https://docs.aws.amazon.com/lambda/latest/dg/foundation-networking.html). "You 可以 configure a Lambda function to CONNECT TO private
subnets in a virtual private cloud (VPC) in your AWS account", but "connect to" 是 not the same as "run in"
(https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html). Otherwise A would make sense (you CAN assign a security group to the
Elastic Network Interface that Lambda uses to connect to your VPC).
按讚 1 次 
 pentium75 7 months, 1 week ago


# 第 516 頁

B We already have Direct Connect, so why set up VPN 
 
C doesn't make sense 因為 "all non-VPC 流量 [already] routes to the virtual private gateway" (which 是 obviously connected to the Direct
Connect gateway), so why 應該 you "update the route tables"? 
 
D sounds plausible; however, an Elastic IP address 是 associated with an Elastic Network Interface (though 那是 automatically 提供d by
AWS). So the "without an elastic network interface" makes D wrong. 
 
My best guess 是 that there's a typo or misunderstanding in the answers. It's either A but it 應該 讀取 "connect to the VPC" instead of "run in
the VPC", or it's D but it 應該 讀取 "without CREATING an elastic network interface" or "WITH an elastic network interface".
按讚 1 次 
 xdkonorek2 8 months, 3 weeks ago
選擇答案： C
it's not A: 
A Lambda function always runs inside a VPC owned by the Lambda service. 
https://docs.aws.amazon.com/lambda/latest/dg/foundation-networking.html
按讚 2 次 
 liux99 9 months ago
The answer 是 C. The question 是 to allow lambda 存取 the 資料庫 running in private subnet in the corporate data center. The only
connectivity with the data center 是 Direct connect.
按讚 2 次 
 Igogor 9 months, 3 weeks ago
Answer C 是 correct:  
 
https://repost.aws/questions/QUSaj1a6jBQ92Kp56klbZFNw/aws-lambda-to-on-premise-via-direct-connect-and-aws-privatelink
按讚 2 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： A
Go to the Lambda console. 
Click the Functions tab. 
Select the Lambda function that you want to configure. 
Click the Configuration tab. 
In the Network section, select the VPC that you want the function 執行 in. 
In the Security groups section, select the security group that you want to allow the function 存取 the 資料庫 subnet. 
Click the Save button.
按讚 3 次 
 zjcorpuz 1 year ago
Correct answer 是 A 
Lambda 是 available in the Region by default.. if you want to connect it to your private subnet or to on prem data center you 必須 configure your
Lambda with vpc.. 
 
C 是 wrong 因為 那裡是 no help adding routes to VPC without configuring your lambda to vpc.
按讚 2 次 
 cookieMr 1 year, 1 month ago
選擇答案： A
選項 A: Configure the Lambda function 執行 in the VPC with the appropriate security group. Th是 allows the Lambda function 存取 the
資料庫 in the private subnet of the company's data center. By running the Lambda function in the VPC, it 可以 communicate with resources in the
private subnet securely. 
 
選項 B 是 錯誤 因為 setting up a VPN connection and routing the 流量 from the Lambda function through the VPN would add
unnecessary complexity and overhead. 
 
選項 C 是 錯誤 因為 updating the route tables in the VPC to allow access to the on-premises data center through Direct Connect would
affect the entire VPC's routing, potentially exposing other resources to the on-premises network. 
 
選項 D 是 錯誤 因為 creating an Elastic IP address and sending 流量 through it without an elastic network interface 是 not a valid
configuration for accessing resources in a private subnet.
按讚 4 次 
 cheese929 1 year, 3 months ago
選擇答案： C
My answer 是 C. Refer to the steps in the link. need to configure the routing table to route 流量 to the destination.  
https://aws.amazon.com/blogs/compute/running-aws-lambda-functions-on-aws-outposts-使用-aws-iot-greengrass/ 
 
A 是 wrong as it says configure the lambda function in the VPC. the requirement 執行 in the 資料庫 那是 on-premise.
按讚 7 次 


# 第 517 頁

主題 1
題目 #185
某公司 runs an 應用程式 使用 Amazon ECS. 該應用程式 creates resized versions of an original image and then makes Amazon S3
API calls 儲存 the resized images in Amazon S3.
How 可以 a solutions architect ensure that the 應用程式 has permission 存取 Amazon S3?
A. 更新 the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.
B. 建立 an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task de¬nition.
C. 建立 a security group that allows access from Amazon ECS to Amazon S3, and update the launch con¬guration used by the ECS
cluster.
D. 建立 an IAM user with S3 permissions, and then relaunch the Amazon EC2 執行個體 for the ECS cluster while logged in as this
account.
正確答案： B 
 Buruguduystunstugudunstuy 高票  1 year, 7 months ago
選擇答案： B
To ensure that an Amazon Elastic Container Service (ECS) 應用程式 has permission 存取 Amazon Simple Storage Service (S3), the correct
solution 是 to create an AWS Identity and Access Management (IAM) role with the necessary S3 permissions and specify that role as the taskRoleAr
in the task definition for the ECS application. 
 
選項 B, creating an IAM role with S3 permissions and specifying that role as the taskRoleArn in the task definition, 是 the 正確 solution to mee
the requirement.
按讚 11 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
選項 A, updating the S3 role in IAM to allow read/write access from ECS and relaunching the container, 是 not the 正確 solution 因為
the S3 role 是 not associated with the ECS application. 
 
選項 C, creating a security group that allows access from ECS to S3 and updating the launch configuration used by the ECS cluster, 是 not the
correct solution 因為 security groups 是 used to control inbound and outbound 流量 to resources, and do not grant permissions to
access resources. 
 
選項 D, creating an IAM user with S3 permissions and relaunching the EC2 執行個體 for the ECS cluster while logged in as th是 account, 是 no
the 正確 solution 因為 它是 generally considered best practice 使用 IAM roles rather than IAM users to grant permissions to resources.
按讚 8 次 
 Guru4Cloud 最新  10 months, 3 weeks ago
選擇答案： B
B. 建立 an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition
按讚 3 次 
 cookieMr 1 year, 1 month ago
選擇答案： B
選項 B: Create an IAM role with S3 permissions and specify that role as the taskRoleArn in the task definition. Th是 approach allows the ECS task
to assume the specified role and gain the necessary permissions 存取 Amazon S3. 
 
選項 A 是 錯誤 因為 updating the S3 role in IAM and relaunching the container does not associate the updated role with the ECS task. 
 
選項 C 是 錯誤 因為 creating a security group that allows access from Amazon ECS to Amazon S3 does not grant the necessary
permissions to the ECS task. 
 
選項 D 是 錯誤 因為 creating an IAM user with S3 permissions and relaunching the EC2 執行個體 for the ECS cluster does not associate
the IAM user with the ECS task.
按讚 3 次 
 dydzah 1 year, 2 months ago
https://repost.aws/knowledge-center/ecs-fargate-access-aws-services
按讚 1 次 
 k1kavi1 1 year, 7 months ago
選擇答案： B
https://www.examtopics.com/discussions/amazon/view/27954-exam-aws-certified-solutions-architect-associate-saa-c02/ 
 
社群投票分布
B (100%)


# 第 518 頁

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html
按讚 1 次 
 techhb 1 year, 7 months ago
選擇答案： B
The short name or full Amazon Resource Name (ARN) of the AWS Identity and Access Management role that grants containers in the task
permission to call AWS APIs on your behalf.
按讚 2 次 
 BENICE 1 year, 7 months ago
選項 B
按讚 1 次 
 career360guru 1 year, 7 months ago
選擇答案： B
選項 B.
按讚 2 次 
 k1kavi1 1 year, 7 months ago
選擇答案： B
Agreed
按讚 1 次 
 lighrz 1 year, 7 months ago
選擇答案： B
B 是 the best answer
按讚 1 次 
 Wpcorgan 1 year, 8 months ago
B 是 correct
按讚 1 次 
 taer 1 year, 8 months ago
選擇答案： B
The answer 是 B.
按讚 1 次 
 Nigma 1 year, 8 months ago
B 是 the answer
按讚 2 次 


# 第 519 頁

主題 1
題目 #186
某公司 has a Windows-based 應用程式 that 必須 be migrated to AWS. 該應用程式 requires the use of a shared Windows ¬le system
attached to multiple Amazon EC2 Windows 執行個體 那是 deployed across multiple Availability Zone:
What 應該 a solutions architect do 以滿足 th是 requirement?
A. Con¬gure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows 執行個體.
B. Con¬gure Amazon FSx for Windows File Server. Mount the Amazon FSx ¬le system to each Windows 執行個體.
C. Con¬gure a ¬le system by 使用 Amazon Elastic File System (Amazon EFS). Mount the EFS ¬le system to each Windows 執行個體.
D. Con¬gure an Amazon Elastic Block 將...儲存在 (Amazon EBS) volume with the required size. 附加 each EC2 執行個體 to the volume. Mount
the ¬le system within the volume to each Windows 執行個體.
正確答案： B 
 Nigma 高票  1 year, 8 months ago
Correct 是 B 
FSx --> shared Windows 檔案 system（SMB） 
EFS --> Linux NFS
按讚 9 次 
 TariqKipkemei 最新  10 months, 3 weeks ago
選擇答案： B
Windows 檔案系統 = Amazon FSx for Windows File Server
按讚 3 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： B
Configure Amazon FSx for Windows File Server. Mount the Amazon FSx 檔案 system to each Windows 執行個體.
按讚 1 次 
 cookieMr 1 year, 1 month ago
選擇答案： B
選項 B: Configure Amazon FSx for Windows File Server. Th是 service 提供 a fully managed Windows 檔案 system that 可以 be easily shared
across multiple EC2 Windows 執行個體. It offers high performance and supports Windows 應用程式 that require 檔案 儲存. 
 
選項 A 是 錯誤 因為 AWS Storage Gateway in volume gateway mode 是 not designed for shared 檔案 systems. 
 
選項 C 是 錯誤 因為 while Amazon EFS 可以 be mounted to multiple 執行個體, 它是 a Linux-based 檔案 system and may not be suitable for
Windows applications. 
 
選項 D 是 錯誤 因為 attaching and mounting an Amazon EBS volume to multiple 執行個體 simultaneously 是 not supported.
按讚 2 次 
 Bmarodi 1 year, 2 months ago
選擇答案： B
選項 B 是 right answer.
按讚 1 次 
 k1kavi1 1 year, 7 months ago
選擇答案： B
References :  
https://www.examtopics.com/discussions/amazon/view/28006-exam-aws-certified-solutions-architect-associate-saa-c02/ 
 
https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html
按讚 1 次 
 techhb 1 year, 7 months ago
選擇答案： B
EFS 是 不相容於 Windows. 
https://pilotcoresystems.com/insights/ebs-efs-fsx-s3-how-these-storage-options-
differ/#:~:text=EFS%20works%20with%20Linux%20and,with%20all%20Window%20Server%20platforms.
按讚 1 次 
社群投票分布
B (100%)


# 第 520 頁

 Buruguduystunstugudunstuy 1 year, 7 months ago
選擇答案： B
A. 設定 AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows 執行個體. 
 
Th是 option 是 錯誤 因為 AWS Storage Gateway 是 not a 檔案 儲存 service. It 是 a hybrid 儲存 service that allows you 儲存 data in th
cloud while maintaining low-latency access to frequently accessed data. It 是 designed to integrate with on-premises 儲存 systems, not to
提供 檔案 儲存 for Amazon EC2 執行個體. 
 
B. 設定 Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows 執行個體. 
 
Th是 是 the 正確 answer. Amazon FSx for Windows File Server 是 a fully managed 檔案 儲存 service that 提供 a native Windows 檔案 system
that 可以 be accessed over the SMB protocol. It 是 specifically designed for use with Windows-based applications, and it 可以 be easily integrated
with existing 應用程式 by mounting the 檔案 system to each EC2 執行個體.
按讚 3 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
C. 設定 a file system by 使用 Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows 執行個體. 
 
Th是 option 是 錯誤 因為 Amazon EFS 是 a 檔案 儲存 service 那是 designed for use with Linux-based applications. It 是 not compatibl
with Windows-based applications, and it cannot be accessed over the SMB protocol. 
 
D. 設定 an Amazon Elastic Block 將...儲存在 (Amazon EBS) volume with the required size. 附加 each EC2 執行個體 to the volume. Mount the fil
system within the volume to each Windows 執行個體. 
 
Th是 option 是 錯誤 因為 Amazon EBS 是 a block 儲存 service, not a 檔案 儲存 service. It 是 designed for storing raw block-level data
that 可以 be accessed by a single EC2 執行個體 at a time. It 是 not designed for use as a shared 檔案 system that 可以 be accessed by multiple
執行個體.
按讚 1 次 
 BENICE 1 year, 7 months ago
B - 是 correct
按讚 1 次 
 career360guru 1 year, 7 months ago
選擇答案： B
選項 B
按讚 1 次 
 Wpcorgan 1 year, 8 months ago
B 是 correct
按讚 1 次 
 xua81376 1 year, 8 months ago
B FSx for windows
按讚 1 次 
 BENICE 1 year, 8 months ago
B 是 正確 option
按讚 1 次 
 rjam 1 year, 8 months ago
選擇答案： B
Amazon FSx for Windows File Server
按讚 3 次 


# 第 521 頁

主題 1
題目 #187
某公司 developing an ecommerce 應用程式 that 將會 consist of a load-balanced front end, a container-based application, and a
relational 資料庫. 某位 Solutions Architect 需要 create a 高可用 solution that operates with as little manual intervention as
possible.
Which solutions meet these requirements? (請選擇兩個。)
A. 建立 an Amazon RDS DB 執行個體 in Multi-AZ mode.
B. 建立 an Amazon RDS DB 執行個體 and one or more replicas in another Availability Zone.
C. 建立 an Amazon EC2 執行個體-based Docker cluster to handle the dynamic application load.
D. 建立 an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load.
E. 建立 an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application
load.
正確答案： AD 
 techhb 高票  1 year, 7 months ago
選擇答案： AD
https://containersonaws.com/introduction/ec2-or-aws-fargate/ 
A.(O) multi-az <= 'little intervention' 
B.(X) 讀取複本 <= Promoting a 讀取複本 to be a standalone DB 執行個體 
You 可以 promote a 讀取複本 into a standalone DB 執行個體. When you promote a 讀取複本, the DB 執行個體 是 rebooted before it becomes
available. 
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html 
C.(X) use Amazon ECS instead of EC2-based docker for little human intervention 
D.(O) Amazon ECS on AWS Fargate : AWS Fargate 是 a technology that you 可以 use with Amazon ECS 執行 containers without having to manage
servers or clusters of Amazon EC2 執行個體. 
E.(X) EC2 launch type 
The EC2 launch type 可以 be used 執行 your containerized 應用程式 on Amazon EC2 執行個體 that you register to your Amazon ECS cluster
and manage yourself.
按讚 12 次 
 lostmagnet001 最新  6 months ago
選擇答案： AD
Highly available 應用程式 - Amazon RDS DB 執行個體 in Multi-AZ  
little manual intervention - Fargate
按讚 1 次 
 TariqKipkemei 10 months, 3 weeks ago
選擇答案： AD
高可用 application, little manual intervention = Serverless = Amazon Elastic Container Service with Fargate and Amazon RDS DB 執行個體
in Multi-AZ mode
按讚 1 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： AD
The 正確 answers 是 A and D. 
 
A) Creating an RDS DB 執行個體 in Multi-AZ mode 提供 automatic failover to a standby replica in another Availability Zone, providing high
availability. 
 
D) Using ECS Fargate removes the need to provision and manage EC2 執行個體, allowing the service to scale dynamically based on demand. ECS
handles load balancing and availability out of the box.
按讚 1 次 
 jkirancdev 1 year ago
選擇答案： AD
AD 是 the 正確 answer
按讚 1 次 
 cookieMr 1 year, 1 month ago
選擇答案： AD
社群投票分布
AD (100%)


# 第 522 頁

A. 建立 an Amazon RDS DB 執行個體 in Multi-AZ mode. Th是 ensures that the database 是 高可用 with automatic failover to a standby
replica in another Availability Zone. 
 
D. 建立 an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load. Fargate
abstracts the underlying infrastructure, automatically scaling and managing the containers, making it a 高可用 and low-maintenance
option. 
 
選項 B 是 not the best choice as it only creates replicas in another Availability Zone without the automatic failover capability 提供d by Multi-
AZ mode. 
 
選項 C 是 not the best choice as managing a Docker cluster on EC2 執行個體 requires more manual intervention compared to 使用 the
serverless capabilities of Fargate in option D. 
 
選項 E 是 not the best choice as it uses the EC2 launch type, which requires managing and scaling the EC2 執行個體 manually. Fargate, as
mentioned in option D, 提供 a more automated and scalable solution.
按讚 3 次 
 studynoplay 1 year, 2 months ago
選擇答案： AD
little manual intervention = Serverless
按讚 1 次 
 career360guru 1 year, 7 months ago
選擇答案： AD
選項 A&D
按讚 1 次 
 k1kavi1 1 year, 7 months ago
選擇答案： AD
A and D
按讚 1 次 
 Gabs90 1 year, 8 months ago
選擇答案： AD
A and D
按讚 1 次 
 Wpcorgan 1 year, 8 months ago
A and D
按讚 1 次 
 BENICE 1 year, 8 months ago
A and D 是 the options
按讚 1 次 
 Danny23132412141_2312 1 year, 8 months ago
AD 無誤 
Link: https://www.examtopics.com/discussions/amazon/view/43729-exam-aws-certified-solutions-architect-associate-saa-c02/
按讚 4 次 


# 第 523 頁

主題 1
題目 #188
某公司 uses Amazon S3 as its data lake. 該公司 has a new partner that 必須 use SFTP to upload data ¬les. A solutions architect
需要 implement a 高可用 SFTP solution that minimizes 營運負擔.
哪一個解決方案可滿足這些需求？
A. 使用 AWS Transfer Family to con¬gure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the
destination.
B. 使用 Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Sh是 the S3 File
Gateway endpoint with the new partner.
C. 啟動 an Amazon EC2 執行個體 in a private subnet in a VPInstruct the new partner to upload ¬les to the EC2 執行個體 by 使用 a VPN.
Run a cron job script, on the EC2 執行個體 to upload ¬les to the S3 data lake.
D. 啟動 Amazon EC2 執行個體 in a private subnet in a VPC. Place a Network Load Balancer (NLB) in front of the EC2 執行個體. Create
an SFTP listener port for the NLB. Sh是 the NLB hostname with the new partner. Run a cron job script on the EC2 執行個體 to upload ¬les
to the S3 data lake.
正確答案： D 
 roxx529 高票  1 year, 2 months ago
For Exam : 
Whenever you see SFTP , FTP look for "Transfer" in options available
按讚 55 次 
 LoXoL 6 months, 2 weeks ago
+ FTPS
按讚 4 次 
 Chirantan 高票  1 year, 7 months ago
Answer 是 A  
AWS Transfer Family securely scales your recurring business-to-business 檔案 transfers to AWS Storage services 使用 SFTP, FTPS, FTP, and AS2
protocols. 
https://aws.amazon.com/aws-transfer-family/
按讚 14 次 
 oguzbeliren 1 year ago
Answer A 是 not an answer 因為 it requires more mannual efford. While AWS Transfer Family simplifies the setup of an SFTP server, it still
requires management and monitoring. Th是 includes handling scaling, backups, patching, and other administrative tasks associated with
managing an SFTP server.
按讚 2 次 
 JohnZh 最新  4 months, 1 week ago
選項 A 是 the most suitable choice for implementing a 高可用 SFTP solution with minimal 營運負擔 in th是 scenario
按讚 1 次 
 thewalker 6 months ago
選擇答案： A
AWS Transfer Family 的主要優點如下：
It 提供 a fully managed 檔案 transfer service that eliminates the need to manage your own 檔案 transfer infrastructure. Th是 reduces operational
overhead. 
It supports multiple protocols like SFTP, FTPS, FTP and AS2, allowing easy and secure exchange of data with business partners and customers. 
File transfers happen directly into Amazon S3 buckets or Amazon EFS 檔案 systems, so the transferred data 可以 be easily accessed by other AWS
services for analytics, processing etc. 
AWS Transfer Family maintains existing client-side configurations, so 檔案 transfer workflows remain unchanged for end users and partners. 
It 提供 高可用性 and auto-scaling capabilities to handle varying transfer workloads.
按讚 5 次 
 thewalker 6 months ago
Storing transferred 檔案 in AWS allows 使用 a broad range of services for compliance, archiving and deriving insights from the data. 
AWS manages the 檔案 transfer infrastructure so you don't have to provision, operate and maintain 檔案 transfer servers. 
For more details on AWS Transfer Family features, pricing and quotas, please refer to the documentation at https://aws.amazon.com/transfer-
family
按讚 1 次 
社群投票分布
A (100%)


# 第 524 頁

 ansagr 7 months, 3 weeks ago
選擇答案： A
Amazon S3 File Gateway, involves deploying an on-premises gateway that interfaces with S3. While it’s a valid solution, it introduces a level of on
premises infrastructure that may require more operational management.
按讚 1 次 
 TariqKipkemei 10 months, 3 weeks ago
選擇答案： A
AWS Transfer Family securely scales your recurring business-to-business 檔案 transfers to AWS Storage services 使用 SFTP, FTPS, FTP, and AS2
protocols.
按讚 1 次 
 Guru4Cloud 11 months, 3 weeks ago
A 是 the 正確 answer. 
 
AWS Transfer Family 提供 a fully managed SFTP service that 可以 integrate directly with S3. It handles scaling, availability, and security
automatically with minimal overhead.
按讚 2 次 
 oguzbeliren 1 year ago
AWS Transfer Family 是 a fully managed service that makes it easy to set up and manage secure 檔案 transfers. It 提供 a high-availability SFTP
server that 可以 be accessed from the public internet. 然而， th是 solution does not minimize 營運負擔, as it requires the solutions
architect to manage the SFTP server.
按讚 1 次 
 cookieMr 1 year ago
選擇答案： A
Th是 solution 提供 a 高可用 SFTP solution without the need for manual management or 營運負擔. AWS Transfer Family
allows you to easily set up an SFTP server with authentication, authorization, and integration with S3 as the 儲存 backend. 
 
選項 B 是 not the best choice as it suggests 使用 Amazon S3 File Gateway, which 是 primarily used for file-based access to S3 儲存 over NFS
or SMB protocols, not for SFTP access. 
 
選項 C 是 not the best choice as it requires manual management of an EC2 執行個體, VPN setup, and cron job script for uploading files,
introducing 營運負擔 and potential complexity. 
 
選項 D 是 not the best choice as it also requires manual management of EC2 執行個體, Network Load Balancer, and cron job scripts for file
uploads. It 是 more complex and involves additional components compared to the simpler and fully managed solution 提供d by AWS Transfer
Family in option A.
按讚 3 次 
 cookieMr 1 year, 1 month ago
Th是 solution 提供 a 高可用 SFTP solution without the need for manual management or 營運負擔. AWS Transfer Family
allows you to easily set up an SFTP server with authentication, authorization, and integration with S3 as the 儲存 backend. 
 
選項 B 是 not the best choice as it suggests 使用 Amazon S3 File Gateway, which 是 primarily used for file-based access to S3 儲存 over NFS
or SMB protocols, not for SFTP access. 
 
選項 C 是 not the best choice as it requires manual management of an EC2 執行個體, VPN setup, and cron job script for uploading files,
introducing 營運負擔 and potential complexity. 
 
選項 D 是 not the best choice as it also requires manual management of EC2 執行個體, Network Load Balancer, and cron job scripts for file
uploads. It 是 more complex and involves additional components compared to the simpler and fully managed solution 提供d by AWS Transfer
Family in option A.
按讚 2 次 
 cookieMr 1 year, 1 month ago
A 是 correct
按讚 1 次 
 markw92 1 year, 1 month ago
I can't wrap my head around why the answer 是 D? th是 是 so frustrating to see where i went wrong. I vote for A.
按讚 3 次 
 studynoplay 1 year, 2 months ago
選擇答案： A
minimizes 營運負擔 = Serverless 
AWS Transfer Family 是 Serverless
按讚 1 次 
 Rahulbit34 1 year, 3 months ago
AWS Transfer Family 是 compatible for SFTP<FTPS<FTP. A 是 the answer
按讚 1 次 
 kruasan 1 year, 3 months ago
選擇答案： A


# 第 525 頁

AWS Transfer Family 是 a fully managed AWS service that you 可以 use to transfer 檔案 into and out of Amazon Simple Storage Service (Amazon S3
storage or Amazon Elastic File System (Amazon EFS) 檔案 systems over the following protocols: 
 
Secure Shell (SSH) File Transfer Protocol (SFTP): version 3 
File Transfer Protocol Secure (FTPS) 
File Transfer Protocol (FTP) 
Applicability Statement 2 (AS2)
按讚 2 次 
 Oyz 1 year, 3 months ago
選擇答案： A
A - 是 the 正確 answer.
按讚 2 次 
 BENICE 1 year, 7 months ago
A -- 是 the option
按讚 3 次 
 career360guru 1 year, 7 months ago
選擇答案： A
選項 A
按讚 3 次 


# 第 526 頁

主題 1
題目 #189
某公司 需要 store contract documents. A contract lasts for 5 years. During the 5-year period, the company 必須 ensure that the
documents cannot be overwritten or deleted. 該公司 需要 encrypt the documents at rest and rotate the encryption keys
automatically every year.
Which combination of steps 應該 a solutions architect take 以滿足 these requirements with the LEAST 營運負擔? (Choose
two.)
A. 將...儲存在 the documents in Amazon S3. 使用 S3 Object Lock in governance mode.
B. 將...儲存在 the documents in Amazon S3. 使用 S3 Object Lock in compliance mode.
C. 使用 server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Con¬gure key rotation.
D. 使用 server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Con¬gure key rotation.
E. 使用 server-side encryption with AWS Key Management Service (AWS KMS) customer 提供d (imported) keys. Con¬gure key rotation.
正確答案： CE 
 [Removed] 高票  1 year, 8 months ago
選擇答案： BD
Originally answered B and C due to least 營運負擔. after research its bugging me that the s3 key rotation 是 determined based on AW
master Key rotation which cannot guarantee the key 是 rotated with in a 365 day period. stated as "varies" in the documentation. also its
impossible to configure th是 in the console.  
KMS-C 是 a tick box in the console to turn on annual key rotation but requires more 營運負擔 than SSE-S3.  
C - 將會 not guarantee the questions objectives but requires little overhead. 
D - 將會 guarantee the questions objective with more overhead.
按讚 23 次 
 vadiminski_a 1 year, 7 months ago
I‘d have to disagree on that. It states here that aws managed keys 是 rotated every year which 是 what the question asks:
https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html so C would be correct. 
然而， it also states that you cannot enable or disable rotation for aws managed keys which would again point towards D
按讚 3 次 
 jdr75 1 year, 3 months ago
You can't use th是 link 
https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html  
to said that "sse-s3" rotates every year, cos' preciselly that link refers to "KMS", 那是 covered with option D.  
That the reason the solution 是 B+D.
按讚 2 次 
 LeGloupier 高票  1 year, 8 months ago
選擇答案： BD
應該 be BD 
C could have been fine, but key rotation 是 activate per default on SSE-S3, and no way to deactivate it if I am not wrong
按讚 7 次 
 ChymKuBoy 最新  1 month, 1 week ago
選擇答案： BD
BD 無誤
按讚 1 次 
 lofzee 2 months, 1 week ago
選擇答案： BD
basically what that pentium75 guy said - correct.
按讚 1 次 
 sudohogan 2 months, 3 weeks ago
"Least 營運負擔": C
按讚 1 次 
 huangyou2003 3 months, 1 week ago
選擇答案： BD
C- you don't have control over rotation schedule for SSE-S3
社群投票分布
BD (77%)
BC (22%)


# 第 527 頁

按讚 1 次 
 Tralfalgarlaw 3 months, 2 weeks ago
選擇答案： BD
B. Using S3 Object Lock in compliance mode ensures that the documents cannot be substituted or deleted during the specified retention period,
which in th是 case 是 5 years. Th是 helps meet the requirement of ensuring the documents remain immutable for the duration of the contract. 
 
D. Using server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys allows for encryption of the documents
at rest. Additionally, configuring key rotation for the customer managed keys ensures that the encryption keys 是 automatically rotated every yea
meeting the requirement of rotating encryption keys automatically.
按讚 2 次 
 MehulKapadia 3 months, 3 weeks ago
選擇答案： BD
Answer: BD: 
B: S3 Compliance Mode ensures no one 可以 overwrite or delete the object. 
D: Customer-managed KMS Key: (必須 be enabled) automatic every 1 year 
 
Options not right: 
A: Governance mode allows override and delete. 
C: SSE-S3 customer do not have control on rotation of keys(Which 是 once a year in our requirement) 
E: As per AWS Documentation, Customer Imported keys cannot be auto rotated.
按讚 1 次 
 scar0909 4 months, 3 weeks ago
選擇答案： BD
https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html
按讚 1 次 
 thewalker 6 months ago
選擇答案： BD
The best option to encrypt data at rest in Amazon S3 and rotate the keys every year 是 使用 AWS KMS (Key Management Service). 
 
With AWS KMS: 
 
You 可以 create a customer master key (CMK) and schedule automatic key rotation every year. Th是 ensures the data 是 encrypted with a new key
annually. 
 
When storing objects in S3, you 可以 choose server-side encryption with AWS KMS (SSE-KMS). Th是 將會 encrypt the data with the CMK you created
 
Even if the encrypted data 是 copied or transferred, it 將會 remain encrypted since the keys 是 managed by KMS. 
 
You have full control over the keys and 可以 define IAM policies for key access. 
 
AWS manages the encryption, key operations and auditing through integrated services like CloudTrail. 
 
It 提供 an end-to-end encryption solution within AWS without needing to handle encryption/decryption yourself.
按讚 1 次 
 omarshaban 6 months, 2 weeks ago
THIS WAS IN MY EXAM
按讚 2 次 
 pentium75 7 months, 1 week ago
選擇答案： BD
A - Governance mode allows exceptions 
B - Yes 
C - SSE-S3 rotates keys when AWS thinks 是 right, not when customer wants ("every year") 
D - Yes 
E - "customer 提供d (imported) keys" 可以 obviously not be 'rotated automatically', the customer would have to 提供/import new keys.
按讚 7 次 
 celestial39 6 months ago
KMS indeed rotates keys every year, but the reason why C 是 wrong 是 that the Amazon managed keys can't be configured to rotate or not. 
REF: https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-how-it-works
按讚 1 次 
 LoXoL 6 months, 2 weeks ago
Agree with pentium75
按讚 2 次 
 Mikado211 7 months, 3 weeks ago
File cannot be overwitten = s3 compliance mode 
encryption AT REST = user-side encryption
按讚 1 次 
 Mikado211 7 months, 3 weeks ago


# 第 528 頁

so the 正確答案 是 BD
按讚 1 次 
 awsgeek75 6 months, 2 weeks ago
user side encryption?
按讚 1 次 
 Mikado211 7 months, 3 weeks ago
選擇答案： BD
File cannot be overwitten = compliance mode 
Encryption AT REST = user-side encryption
按讚 2 次 
 ale_brd_ 7 months, 3 weeks ago
選擇答案： BD
Question might be outdated. 
Amazon S3 now automatically applies server-side encryption with Amazon S3 managed keys (SSE-S3) as the default encryption for all buckets
since January 5, 2023.  
Additionally, it encrypts the key itself with another key that undergoes regular rotation, enhancing security. 
Regarding key rotation, the document specifies that the key used to encrypt the S3 Encryption Key undergoes regular rotation. 然而， it does
not explicitly mention the rotation frequency or the ability to customize it. 
Therefore, considering the requirement for key rotation and the lack of explicit details about rotation frequency, options B and D would be
suitable choices.
按讚 3 次 
 Leo1688 7 months, 3 weeks ago
answer ce 是 wrong, i voted bd
按讚 1 次 
 ansagr 7 months, 3 weeks ago
選擇答案： BD
While SSE-S3 提供 encryption at rest, it doesn’t support key rotation for the customer to manage.
按讚 1 次 


# 第 529 頁

主題 1
題目 #190
某公司 has a web 應用程式 那是 based on Java and PHP. 該公司 plans to move the 應用程式 from on premises to AWS. The
company needs the ability to test new site features frequently. 該公司 also needs a 高可用 and managed solution that
requires minimum 營運負擔.
哪一個解決方案可滿足這些需求？
A. 建立 an Amazon S3 bucket. 啟用 static web hosting on the S3 bucket. Upload the static content to the S3 bucket. 使用 AWS Lambda
to process all dynamic content.
B. 部署 the web application to an AWS Elastic Beanstalk environment. 使用 URL swapping to switch between multiple Elastic Beanstalk
environments for feature testing.
C. 部署 the web application to Amazon EC2 執行個體 那是 con¬gured with Java and PHP. 使用 Auto Scaling groups and an
Application Load Balancer to manage the website’s availability.
D. Containerize the web application. 部署 the web application to Amazon EC2 執行個體. 使用 the AWS Load Balancer Controller to
dynamically route tra®c between containers that contain the new site features for testing.
正確答案： D 
 Shasha1 高票  1 year, 7 months ago
B 
Elastic Beanstalk 是 a fully managed service that makes it easy to deploy and run 應用程式 in the AWS; To enable frequent testing of new site
features, you 可以 use URL swapping to switch between multiple Elastic Beanstalk environments.
按讚 12 次 
 oguzbeliren 1 year ago
The 正確答案 是 D. 
 
AWS Elastic Beanstalk 是 a service that makes it easy to deploy and manage web 應用程式 in the AWS cloud. 然而， 它是 not a good
solution for testing new site features frequently, as it 可以 be difficult to switch between multiple Elastic Beanstalk environments.
按讚 3 次 
 cookieMr 高票  1 year, 1 month ago
選擇答案： B
B. Provides a 高可用 and managed solution with minimum 營運負擔. By deploying the web application to EBS, the
infrastructure and platform management 是 abstracted, allowing easy deployment and scalability. With URL swapping, different environments ca
be created for testing new site features, and 流量 可以 be routed between these environments without any downtime. 
 
A. Suggests 使用 S3 for static content hosting and Lambda for dynamic content. While it offers simplicity for static content, it does not 提供
the necessary flexibility and dynamic functionality required by a Java and PHP-based web application. 
 
C. Involves manual management of EC2, ASG, and ELB, which requires more 營運負擔 and may not 提供 the desired level of
availability and ease of testing. 
 
D. Introduces containerization, which adds complexity and 營運負擔 for managing containers and infrastructure, making it less
suitable for a requirement of minimum 營運負擔.
按讚 11 次 
 sudohogan 最新  2 months, 3 weeks ago
Containers allow you test your app in isolated environments, 因此 D 是 the 正確 option.
按讚 1 次 
 hro 4 months, 1 week ago
B - Because AWS Elastic Beanstalk performs an in-place update when you update your 應用程式 versions, your 應用程式 might become
unavailable to users for a short period of time. To avoid this, perform a blue/green deployment. To do this, deploy the new version to a separate
environment, and then swap the CNAMEs of the two environments to redirect 流量 to the new version instantly.
按讚 1 次 
 reviewmine 5 months, 2 weeks ago
選擇答案： B
Elastic Beanstalk 可以 test Blue/Green deployment. Switching Dev to prod/ prod to dev easily.
按讚 1 次 
 awsgeek75 7 months ago
社群投票分布
B (90%)
10%


# 第 530 頁

選擇答案： B
A and C 是 not allowing for feature testing. 
B and D allow feature testing. D requires overhead of containerisation as well as the LB controller to selectively chose containers for features
(assuming on how th是 might be implemented). EBS allows switching between environment like A/B testing but on whole site. Expensive but cost
是 not a concern for th是 question.
按讚 1 次 
 master9 7 months, 1 week ago
選擇答案： D
WS Elastic Beanstalk supports multiple environments, but each environment 可以 only run one platform at a time. A platform 是 a combination of a
operating system, runtime, and web server, and in th是 case, Java and PHP would be considered different platforms. 
 
So, if you want 使用 both Java and PHP, you would need to create two separate environments, one for each. You 可以 then link these
environments together 使用 AWS services like Route 53 for routing 流量, or use an Application Load Balancer to distribute incoming 流量
between the two environments.
按讚 1 次 
 ale_brd_ 7 months, 3 weeks ago
選擇答案： B
選項 B (AWS Elastic Beanstalk): Elastic Beanstalk 是 a fully managed service that makes it easy to deploy and run 應用程式 in multiple
languages (including Java and PHP) with MINIMAL OPERATION OVERHEAD. It abstracts the infrastructure management, allowing you to focus on
your application. URL swapping in Elastic Beanstalk allows you to easily switch between different environments, making it convenient for testing
new features.
按讚 1 次 
 Po_chih 10 months ago
選擇答案： B
B 
Elastic Beanstalk 是 a fully managed service that makes it easy to deploy and run 應用程式 in the AWS; To enable frequent testing of new site
features, you 可以 use URL swapping to switch between multiple Elastic Beanstalk environments. 
https://docs.aws.amazon.com/zh_tw/whitepapers/latest/blue-green-deployments/swap-the-environment-of-an-elastic-beanstalk-application.htm
按讚 2 次 
 Po_chih 10 months ago
選擇答案： B
B 
Elastic Beanstalk 是 a fully managed service that makes it easy to deploy and run 應用程式 in the AWS; To enable frequent testing of new site
features, you 可以 use URL swapping to switch between multiple Elastic Beanstalk environments. 
https://docs.aws.amazon.com/zh_tw/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html
按讚 1 次 
 TariqKipkemei 10 months, 3 weeks ago
選擇答案： B
AWS Elastic Beanstalk URL swapping 是 the main ask of th是 question.
按讚 2 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： B
B 是 the 正確 answer. 
 
Using AWS Elastic Beanstalk 提供 a fully managed platform to deploy the web application. Elastic Beanstalk 將會 handle provisioning EC2
執行個體, load balancing, auto scaling, and 應用程式 health monitoring. 
 
Elastic Beanstalk's ability to support multiple environments and swap URLs allows easy testing of new features before swapping into production.
Th是 requires minimal overhead compared to managing infrastructure directly.
按讚 3 次 
 oguzbeliren 1 year ago
The 正確答案 是 D. 
 
AWS Elastic Beanstalk 是 a service that makes it easy to deploy and manage web 應用程式 in the AWS cloud. 然而， 它是 not a good solution
for testing new site features frequently, as it 可以 be difficult to switch between multiple Elastic Beanstalk environments.
按讚 1 次 
 Abrar2022 1 year, 2 months ago
S3 是 for hosting static websites not dynamic websites or 應用程式 
Beanstalk 將會 take c是 of this.
按讚 1 次 
 kruasan 1 year, 3 months ago
選擇答案： B
Frequent feature testing -  
- Multiple Elastic Beanstalk environments 可以 be created easily for development, testing and production use cases.  
- Traffic 可以 be routed between environments for A/B testing and feature iteration 使用 simple URL swapping techniques. No complex routing
rules or infrastructure changes required.


# 第 531 頁

按讚 1 次 
 ashu089 1 year, 3 months ago
who needs discussion in the era the of chatGPT
按讚 3 次 
 baku98 7 months, 3 weeks ago
In the era of ChatGPT, individuals across education, business, content creation, healthcare, programming, language learning, innovation, and
mental health benefit from discussions. Students, professionals, writers, developers, language learners, innovators, and those seeking support
find ChatGPT valuable for learning, problem-solving, creative endeavors, and companionship. It serves as a versatile tool for information,
collaboration, and engagement across diverse domains, enhancing communication in an accessible and interactive manner.
按讚 1 次 
 aadityaravi8 1 year ago
chatGPT always change its answer. just say wrong answer, he 將會 come up with new answer each time with justification. chatGPT 是 not trusted
at all.
按讚 3 次 
 kerin 1 year, 5 months ago
選項 B as it has the minimum 營運負擔
按讚 1 次 


# 第 532 頁

主題 1
題目 #191
某公司 has an ordering 應用程式 that stores customer information in Amazon RDS for MySQL. During regular business hours, employees
run one-time 查詢 for reporting purposes. Timeouts 是 occurring during order processing 因為 the reporting 查詢 是 taking a long
time 執行. 該公司 需要 eliminate the timeouts without preventing employees from performing queries.
Solutions Architect 應該怎麼做才能滿足這些需求？
A. 建立 a 讀取複本. 將...移至 reporting queries to the 讀取複本.
B. 建立 a 讀取複本. Distribute the ordering application to the primary DB 執行個體 and the 讀取複本.
C. Migrate the ordering application to Amazon DynamoDB with on-demand capacity.
D. Schedule the reporting queries for non-peak hours.
正確答案： B 
 BENICE 高票  1 year, 7 months ago
A 是 正確 answer. Th是 was in my exam
按讚 26 次 
 Grace83 1 year, 4 months ago
Did these questions help with your exam?
按讚 5 次 
 PR5577 最新  1 week, 5 days ago
選擇答案： A
Reporting 查詢 將會 point to 讀取複本. Application 將會 still point to primary db for 寫入 / 讀取 operations.
按讚 1 次 
 bakstorage00001 3 months, 3 weeks ago
選擇答案： A
The 正確答案 to th是 question 是 A: Create a 讀取複本. Move reporting 查詢 to the 讀取複本. Th是 solution 是 designed to alleviate th
load on the primary 資料庫 used by the ordering application. By offloading the reporting 查詢 to a 讀取複本, the primary 執行個體 是 freed
up to handle operational transactions like order processing without contention from the resource-intensive reporting queries. Th是 should
effectively reduce or eliminate the timeouts currently experienced during order processing.
按讚 2 次 
 lostmagnet001 6 months ago
選擇答案： A
create the replica and all the report 查詢 get data from that 讀取複本.
按讚 1 次 
 truongtx8 6 months, 2 weeks ago
選擇答案： A
B 錯誤 因為 ordering 應用程式 需要 寫入 data to the DB.
按讚 2 次 
 Ruffyit 8 months, 3 weeks ago
A. By moving the reporting queries to the 讀取複本, the primary DB 執行個體 used for order processing 是 not affected by the long-running
reporting queries. Th是 helps eliminate timeouts during order processing while allowing employees to perform their 查詢 without impacting
the application's performance. 
 
B. While th是 可以 提供 some level of load distribution, it does not specifically address the issue of timeouts caused by reporting queries during
order processing. 
 
C. While DynamoDB offers scalability and performance benefits, it may require significant changes to the application's data model and querying
approach. 
 
D. While th是 approach 可以 help alleviate the impact on order processing, it does not address the requirement of eliminating timeouts without
preventing employees from performing queries.
按讚 2 次 
 David_Ang 9 months, 1 week ago
選擇答案： A
"A" 是 正確 因為 是 does not cause problems in the primary DB
社群投票分布
A (100%)


# 第 533 頁

按讚 1 次 
 TariqKipkemei 10 months, 3 weeks ago
選擇答案： A
報表查詢 = 讀取複本
按讚 2 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： A
A 是 the 正確 answer. 
 
Creating an RDS MySQL 讀取複本 將會 allow the reporting 查詢 to be isolated and run without affecting performance of the primary orderin
application. 
 
Read replicas allow read-only workloads to be scaled out while eliminating contention with the primary 寫入 workload.
按讚 2 次 
 james2033 1 year ago
選擇答案： A
Question keyword "regular business hours" made D 是 incorrect.  
 
C migrate to Amazon DynamoDB (No-SQL) 是 meaningless, remove C.  
 
Answer B, create a "讀取複本", 它是 ok, but "ordering 應用程式 pointed to 讀取複本" 是 incorrect.  
 
A 是 正確 answer. Easy question.
按讚 3 次 
 sickcow 1 year, 1 month ago
選擇答案： A
A sounds right
按讚 1 次 
 rauldevilla 1 year, 1 month ago
選擇答案： A
Using the primary 執行個體 continues with the problem
按讚 1 次 
 cookieMr 1 year, 1 month ago
選擇答案： A
A. By moving the reporting queries to the 讀取複本, the primary DB 執行個體 used for order processing 是 not affected by the long-running
reporting queries. Th是 helps eliminate timeouts during order processing while allowing employees to perform their 查詢 without impacting
the application's performance. 
 
B. While th是 可以 提供 some level of load distribution, it does not specifically address the issue of timeouts caused by reporting queries during
order processing. 
 
C. While DynamoDB offers scalability and performance benefits, it may require significant changes to the application's data model and querying
approach. 
 
D. While th是 approach 可以 help alleviate the impact on order processing, it does not address the requirement of eliminating timeouts without
preventing employees from performing queries.
按讚 3 次 
 steev 1 year, 1 month ago
選擇答案： A
correct
按讚 1 次 
 cheese929 1 year, 2 months ago
選擇答案： A
A 是 correct.
按讚 1 次 
 kruasan 1 year, 3 months ago
選擇答案： A
Creating a 讀取複本 allows the company to offload the reporting 查詢 to a separate 資料庫 執行個體, reducing the load on the primary
資料庫 used for order processing. By moving the reporting 查詢 to the 讀取複本, the ordering 應用程式 running on the primary DB
執行個體 可以 continue to process orders without timeouts due to the long-running reporting queries. 
 
選項 B 是 not a good solution 因為 distributing the ordering 應用程式 to the primary DB 執行個體 and the 讀取複本 does not address
the issue of long-running reporting 查詢 ca使用 timeouts during order processing.
按讚 1 次 
 jjlin526 1 year, 3 months ago


# 第 534 頁

Please DM contributor access: yi.liiiii520@gmail.com
按讚 2 次 
 ammyboy 1 year, 3 months ago
bro i need contibutor access please
按讚 1 次 


# 第 535 頁

主題 1
題目 #192
A hospital 想要 create digital copies for its large collection of historical written records. The hospital 將會 continue to add hundreds of new
documents each day. The hospital’s data team 將會 s可以 the documents and 將會 upload the documents to the AWS Cloud.
某位 Solutions Architect 必須 implement a solution to analyze the documents, extract the medical information, and store the documents so that
an 應用程式 可以 run SQL 查詢 on the data. 此解決方案 必須 maximize scalability and operational e®ciency.
Which combination of steps 應該 the solutions architect take 以滿足 these requirements? (請選擇兩個。)
A. Write the document information to an Amazon EC2 執行個體 that runs a MySQL database.
B. Write the document information to an Amazon S3 bucket. 使用 Amazon Athena to query the data.
C. 建立 an Auto Scaling group of Amazon EC2 執行個體 執行 a custom application that processes the scanned ¬les and extracts the
medical information.
D. 建立 an AWS Lambda function that runs when new documents 是 uploaded. 使用 Amazon Rekognition to convert the documents to
raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.
E. 建立 an AWS Lambda function that runs when new documents 是 uploaded. 使用 Amazon Textract to convert the documents to raw
text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.
正確答案： CD 
 KADSM 高票  1 year, 8 months ago
B and E 是 correct. Textract to extract text from files. Rekognition 可以 also be used for text detection but after Rekognition - it's mentioned that
Transcribe 是 used. Transcribe 是 used for Speech to Text. So that option D may not be valid.
按讚 12 次 
 LoXoL 最新  6 months, 2 weeks ago
選擇答案： BE
no brainer: B,E
按讚 3 次 
 awsgeek75 7 months ago
選擇答案： BE
E: Amazon Textract & Amazon Comprehend Medical obviously do the job with least 營運負擔. D 可以 do th是 but it 將會 be extra work
and overhead.  
B for running SQL 查詢 on S3 bucket directly without extra overhead.
按讚 3 次 
 Ruffyit 8 months, 3 weeks ago
Write the document information to an Amazon S3 bucket. Use Amazon Athena to 查詢 the data. 
Create an AWS Lambda function that runs when new documents 是 uploaded. Use Amazon Textract to convert the documents to raw text. Use
Amazon Comprehend Medical to detect and extract relevant medical information from the text.
按讚 1 次 
 David_Ang 9 months, 1 week ago
選擇答案： BE
another mistake from the admin, 應該 正確 th是 one, 因為 we all agree
按讚 3 次 
 vijaykamal 10 months, 1 week ago
Answer - BE 
選項 D mentions 使用 Amazon Rekognition and Amazon Transcribe Medical, which 是 primarily designed for image and audio analysis,
respectively. While they 可以 be part of a document processing pipeline, Amazon Textract and Amazon Comprehend Medical 是 more suitable fo
extracting structured information from documents, making option E a better choice.
按讚 2 次 
 TariqKipkemei 10 months, 3 weeks ago
選擇答案： BE
Write the document information to an Amazon S3 bucket. Use Amazon Athena to 查詢 the data. 
Create an AWS Lambda function that runs when new documents 是 uploaded. Use Amazon Textract to convert the documents to raw text. Use
Amazon Comprehend Medical to detect and extract relevant medical information from the text.
社群投票分布
BE (100%)


# 第 536 頁

按讚 1 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： BE
B and E 是 the 正確 answers. 
 
B 是 正確 因為 storing the scanned documents in Amazon S3 提供 highly scalable and durable 儲存. Amazon Athena allows running
SQL 查詢 directly against the data in S3 without needing to load the data into a 資料庫. 
 
E 是 正確 因為 使用 Lambda functions triggered by uploads 提供 a Serverless approach to automatically process each document.
Amazon Textract and Comprehend Medical 可以 extract text and medical information without needing to manage server
按讚 4 次 
 james2033 1 year ago
選擇答案： BE
Amazon Comprehend Medical for image reading 
https://aws.amazon.com/comprehend/medical/ . 
 
Amazon Transcribe Medical for speech audio. Remove D. Keep E.  
 
A 是 meaningless, remove A (EC2).  
 
B use Amazon S3, Athena for querying, keep B.  
 
Conclusion combination B and E 是 正確 answers.
按讚 2 次 
 MNotABot 1 year ago
AC wrong as involve EC2. Either one of DE 是 正確 so that makes B correct. Now E 是 obvious answer if we have 讀取 AWS FAQs
按讚 1 次 
 animefan1 1 year, 1 month ago
選擇答案： BE
Textract to extract the content and Athena 執行 sql 查詢 on S3 data
按讚 1 次 
 sickcow 1 year, 1 month ago
選擇答案： BE
From a DE/ML perspective Lambda + Textract + S3 + Athena 是 the best way to go
按讚 1 次 
 rauldevilla 1 year, 1 month ago
選擇答案： BE
Transcribe 是 used. Transcribe 是 used for Speech to Text
按讚 1 次 
 cookieMr 1 year, 1 month ago
選擇答案： BE
B 是 正確 因為 it suggests writing the document information to an Amazon S3 bucket, which 提供 scalable and durable object 儲存.
Using Amazon Athena, the data 可以 be queried 使用 SQL, enabling efficient analysis. 
 
E 是 正確 因為 it involves creating an AWS Lambda function triggered by new document uploads. Amazon Textract 是 used to convert the
documents to raw text, and Amazon Comprehend Medical extracts relevant medical information from the text. 
 
A 是 錯誤 因為 writing the document information to an Amazon EC2 執行個體 with a MySQL 資料庫 是 not a scalable or efficient solution
for analysis. 
 
C 是 錯誤 因為 creating an Auto Scaling group of Amazon EC2 執行個體 for processing scanned 檔案 and extracting information would
introduce unnecessary complexity and management overhead. 
 
D 是 錯誤 因為 使用 an EC2 執行個體 with a MySQL 資料庫 for storing document information 是 not the optimal solution for scalability
and efficient analysis.
按讚 3 次 
 AlankarJ 1 year, 1 month ago
It states in the question that the written documents 是 scanned. They 是 converted into images after being scanned. Rekognition would be best
to analyse images.
按讚 1 次 
 Bmarodi 1 year, 2 months ago
選擇答案： BE
Options B & E 是 正確 answers.
按讚 1 次 
 antropaws 1 year, 2 months ago
選擇答案： BE


# 第 537 頁

Why CD 是 marked as correct??
按讚 1 次 


# 第 538 頁

主題 1
題目 #193
某公司 running a batch 應用程式 on Amazon EC2 執行個體. 該應用程式 consists of a backend with multiple Amazon RDS
資料庫s. 該應用程式 是 ca使用 a high number of reads on the 資料庫s. 某位 Solutions Architect 必須 reduce the number of 資料庫
reads while ensuring 高可用性.
What 應該 the solutions architect do 以滿足 th是 requirement?
A. 新增 Amazon RDS 讀取複本.
B. 使用 Amazon ElastiCache for Redis.
C. 使用 Amazon Route 53 DNS caching
D. 使用 Amazon ElastiCache for Memcached.
正確答案： A 
 leonnnn 高票  1 year, 8 months ago
選擇答案： B
Use ElastiCache to reduce reading and choose red是 to ensure 高可用性.
按讚 41 次 
 Lalo 1 year, 5 months ago
Where 是 the 高可用性 when the 資料庫 fails and the cache time runs out? 
The answer 是 a.
按讚 23 次 
 mandragon 1 year, 2 months ago
Elasticache for Red是 ensures 高可用性 by 使用 讀取複本s and Multi AZ with failover. It 是 also faster since it uses cache.  
 
https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html
按讚 5 次 
 LoXoL 6 months, 2 weeks ago
Right here: Red是 has Multi AZ with Auto-Failover (in addition it got Read Replicas for HA)
按讚 1 次 
 Mia2009687 1 year, 1 month ago
They run multiple 資料庫s
按讚 1 次 
 JoeGuan 11 months, 3 weeks ago
Caching Frequently Accessed Data: ElastiCache allows you 儲存 frequently accessed or computationally expensive data in-memory within
the cache nodes. Th是 means that when an 應用程式 requests data, ElastiCache 可以 提供 the data directly from the cache without having to
query the RDS 資料庫. Th是 reduces the number of reads on the RDS 資料庫 因為 the data 是 retrieved from the faster in-memory cache
按讚 5 次 
 channn 高票  1 year, 3 months ago
選擇答案： A
A vs B: 
A: reduce the number of 資料庫 reads on main + 高可用性 提供 
B: only reduce the number of DB reads 
so A wins
按讚 23 次 
 pentium75 7 months ago
Why "only reduce the number of DB reads"? Th是 是 exactly what 是 asked. 
 
Elasticache for Red是 可以 be HA (contrary to Elasticache for Memcached).
按讚 4 次 
 LoXoL 6 months, 2 weeks ago
pentium75 是 right.
按讚 1 次 
 jaradat02 最新  6 days, 7 hours ago
社群投票分布
B (53%)
A (47%)


# 第 539 頁

選擇答案： B
RDS 讀取複本s 是 mainly used for higher performance, and not for higher availability, that's why I chose ElastiCache 使用 Redis.
按讚 2 次 
 Aws_aspr 1 week, 3 days ago
選擇答案： B
I Vote B since question 是 asking to reduce the 資料庫 reads. Using Read replicas offloads the reading operation from main db but doesn't
reduce it.
按讚 1 次 
 freedafeng 3 weeks ago
B 是 not correct. the effectiveness of caching depends on the application. it's not always a good solution.
按讚 1 次 
 jatric 3 weeks, 6 days ago
選擇答案： A
why not 讀取複本 when you get 讀取 performant with HA?
按讚 1 次 
 shil_31 1 month, 4 weeks ago
選擇答案： A
Options B, C, and D 是 not directly related to ensuring 高可用性
按讚 1 次 
 lofzee 2 months, 1 week ago
選擇答案： B
I think 它是 B: 
https://aws.amazon.com/getting-started/hands-on/boosting-mysql-資料庫-performance-with-amazon-elasticache-for-redis/ 
Although the question just says "RDS Database", it doesn't specify what type of DB.
按讚 1 次 
 sudohogan 2 months, 3 weeks ago
Elasticahe 是 NOSQL, A 是 the Answer!
按讚 2 次 
 ManikRoy 3 months ago
選擇答案： B
Pretty sure answer 是 option B.  
You have 使用 a caching to 'reduce' 資料庫 reads so 讀取複本 是 out of option.  
The question mentions High availability so Red是 是 preferable than MemCached.
按讚 3 次 
 sou¬yane 3 months, 3 weeks ago
選擇答案： B
the question 是 clearly says reduce reads request, so b 是 the naswer
按讚 1 次 
 1dfed2b 4 months ago
選擇答案： B
Use ElastiCache to reduce reading and ensure 高可用性. 
Opt A 讀取複本 its for performance not HA 
 
I 將會 vote for B
按讚 1 次 
 Capt_Miguel 4 months, 1 week ago
the answer 應該 be A, 讀取複本s enhance 高可用性 by providing failover capabilities in case the primary 執行個體 becomes unavailable
按讚 1 次 
 TeamACT 1 month, 2 weeks ago
I think A 應該 have been 正確 if the question had requested for a cost -effective solution 因為 Red是 costs money.
按讚 1 次 
 Capt_Miguel 4 months, 1 week ago
選擇答案： A
AvsB 
A:Creating 讀取複本s 將會 ensure the availability of the DB. (CORRECT) 
B: Will reduce the reading and what happens when 那裡是 more reads.
按讚 1 次 
 Uzbekistan 4 months, 1 week ago
選擇答案： A


# 第 540 頁

A. 新增 Amazon RDS 讀取複本. 
 
Amazon RDS 讀取複本s allow you to create one or more read-only copies of your RDS 資料庫 執行個體. By offloading 讀取 流量 to read
replicas, you 可以 distribute the workload across multiple 資料庫 執行個體, reducing the load on the primary 資料庫 and decreasing the
number of reads it 需要 handle. Th是 helps to improve the overall performance and scalability of your application.
按讚 1 次 
 Kanagarajd 4 months, 3 weeks ago
選擇答案： B
B 是 right answer
按讚 1 次 
 duynm98_vn 5 months, 1 week ago
選擇答案： A
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html 
"A 讀取複本 是 a read-only copy of a DB 執行個體. You 可以 reduce the load on your primary DB 執行個體 by routing 查詢 from your
applications to the 讀取複本."
按讚 1 次 


# 第 541 頁

主題 1
題目 #194
某公司 需要 run a critical 應用程式 on AWS. 該公司 需要 use Amazon EC2 用於應用程式’s 資料庫. The 資料庫
必須 be 高可用 and 必須 fail over automatically if a disruptive event occurs.
哪一個解決方案可滿足這些需求？
A. 啟動 two EC2 執行個體, each in a different Availability Zone in the same AWS Region. Install the database on both EC2 執行個體.
Con¬gure the EC2 執行個體 as a cluster. Set up 資料庫 replication.
B. 啟動 an EC2 執行個體 in an Availability Zone. Install the database on the EC2 執行個體. 使用 an Amazon Machine Image (AMI) to back
up the data. Use AWS CloudFormation to automate provisioning of the EC2 執行個體 if a disruptive event occurs.
C. 啟動 two EC2 執行個體, each in a different AWS Region. Install the database on both EC2 執行個體. Set up database replication. Fail
over the 資料庫 to a second Region.
D. 啟動 an EC2 執行個體 in an Availability Zone. Install the database on the EC2 執行個體. 使用 an Amazon Machine Image (AMI) to back
up the data. Use EC2 automatic recovery to recover the 執行個體 if a disruptive event occurs.
正確答案： C 
 Gil80 高票  1 year, 8 months ago
選擇答案： A
Changing my vote to A. After reviewing a Udemy course of SAA-C03, it seems that A (multi-AZ and Clusters) 是 sufficient for HA.
按讚 36 次 
 berks 1 year, 7 months ago
what number of class ?
按讚 5 次 
 AAAWrekng 9 months, 1 week ago
Here AWS defines HA, and uses the word cluster - AWS has several methods for achieving HA through both approaches, such as through a
scalable, load balanced cluster or assuming an active–standby pair. - https://docs.aws.amazon.com/whitepapers/latest/real-time-
communication-on-aws/high-availability-and-scalability-on-aws.html
按讚 1 次 
 Gil80 高票  1 year, 8 months ago
選擇答案： C
The question states that 它是 a critical app and it has to be HA. A could be the answer, but it's in the same AZ, so if the entire region fails, it doesn't
cater for the HA requirement.  
 
然而， the likelihood of a failure in two different regions at the same time 是 0. Therefore, to me it seems that C 是 the better option to cater fo
HA requirement. 
 
In addition, C does state like A that the DB app 是 installed on an EC2 執行個體.
按讚 26 次 
 Burrito69 4 months, 2 weeks ago
選項 C proposes launching two EC2 執行個體 in different AWS Regions and setting up 資料庫 replication, with failover to a second
Region. While th是 solution does 提供 geographic redundancy, it may introduce higher latency due to cross-region communication and
data replication. Additionally, failover to a different Region typically involves more complex configurations and longer recovery 次
compared to failover within the same Region. 
 
While 選項 C may offer a level of redundancy, it might not 提供 the same level of responsiveness and automatic failover capabilities as
選項 A, which leverages Availability Zones within the same Region. In scenarios where low latency and rapid failover 是 critical, 選項 A is
often preferred. 然而， if geographic redundancy 是 a top priority and the potential trade-offs in latency and failover time 是 acceptable,
選項 C could still be a viable solution.
按讚 2 次 
 javitech83 1 year, 8 months ago
but for C you need communication between the two VPC, which increase the complexity. With a 應該 be enough for HA
按讚 6 次 
 Steve_4542636 1 year, 5 months ago
The question doesn't ask which option 是 the most HA. It asks what meets the requirements.
按讚 6 次 
社群投票分布
A (55%)
C (45%)


# 第 542 頁

 aussiehoa 1 year, 2 months ago
Design for region failure? may as well design for AWS failure and put replica in GCP and Azure :v
按讚 11 次 
 Kp88 1 year ago
And on-prem in multiple DCs and one in mars too :D
按讚 9 次 
 cyber_bedouin 10 months ago
yep lol, even in the other questions, for HA you 可以 use Multi-AZ
按讚 3 次 
 jjcode 8 months ago
th是 是 reading comprehension exam not a practical exam.
按讚 2 次 
 1e22522 最新  11 hours, 28 minutes ago
選擇答案： A
It's a due to being in the same region different AZ for latency purposes.
按讚 1 次 
 jatric 3 weeks, 6 days ago
選擇答案： A
A 提供 HA with 2 EC2 in two AZ with 資料庫 replication
按讚 1 次 
 ChymKuBoy 1 month, 1 week ago
C 無誤
按讚 1 次 
 Duckydoo 1 month, 1 week ago
What does "Configure the EC2 執行個體 as a cluster" mean? The only "EC2 cluster" that I am aw是 of 是 a "cluster placement group". If that's the
case, then all EC2 執行個體 in that cluster 必須 be in the same AZ. So option A would be invalid then.
按讚 1 次 
 shil_31 1 month, 4 weeks ago
選擇答案： A
選項 B uses an AMI for backup and CloudFormation for automation, but doesn't 提供 高可用性 or automatic failover. 
選項 C launches 執行個體 in different regions, which may not be necessary and may increase costs. 
選項 D uses EC2 automatic recovery, which 可以 recover an 執行個體, but doesn't 提供 高可用性 or automatic failover.
按讚 1 次 
 k_ 2 months ago
選擇答案： C
The term "disruptive event" implies it requires DR, HA 是 not sufficient.
按讚 2 次 
 Solomon2001 3 months ago
選擇答案： A
Explanation: 
 
選項 C 提供 a solution that ensures 高可用性 by deploying EC2 執行個體 in different AWS Regions. By setting up 資料庫 replicatio
and failing over the 資料庫 to a second Region, you ensure automatic failover if a disruptive event occurs in one Region. 
 
Options A and B focus on 高可用性 within a single AWS Region but don't address automatic failover to a different Region in case of a
disruptive event. 
 
選項 D uses EC2 automatic recovery, but it doesn't 提供 a solution for automatic failover to a different Region, which 是 necessary for
ensuring 高可用性 in case of a Region-wide failure.
按讚 1 次 
 hardy1234567 3 months, 1 week ago
C - I am a littel be wonder reading same explanation, becouse exist a vary big differance beetwen 執行個體 cluster and dababase cluster.
按讚 1 次 
 Uzbekistan 4 months, 1 week ago
選擇答案： A
選項 A suggests deploying two EC2 執行個體, each in a different Availability Zone within the same AWS Region. Th是 ensures 高可用性 b
distributing the 執行個體 across multiple physically isolated locations. By installing the 資料庫 on both EC2 執行個體 and configuring them as a
cluster, you create a 高可用 資料庫 setup where one 執行個體 可以 seamlessly take over if the other 執行個體 fails. 
 
Additionally, setting up 資料庫 replication between the 執行個體 ensures data consistency and redundancy. If one 執行個體 fails, the other
執行個體 可以 continue serving requests without interruption.
按讚 3 次 


# 第 543 頁

 derekz 5 months, 1 week ago
選擇答案： A
A 是 for HA. D 是 for DR
按讚 1 次 
 MrPCarrot 6 months ago
Perfect Answer 是 A
按讚 1 次 
 thewalker 6 months ago
選擇答案： A
A.  
High Availability - multiple Zones.  
Disaster Recovery - multiple Regions.
按讚 5 次 
 Mkenya08 6 months, 1 week ago
C "if a disruptive event occurs"
按讚 2 次 
 andyngkh86 6 months, 2 weeks ago
Answer 是 C, 因為 question mentioned about disruptive event occurs. when the whole region failed, it 可以 not cover the scenario for HA
按讚 3 次 
 vip2 6 months, 3 weeks ago
選擇答案： A
A 是 more 正確 to support both HA and Failover. 
C 是 only for Failover, not HA during the 流量.
按讚 1 次 


# 第 544 頁

主題 1
題目 #195
某公司的 order system sends requests from clients to Amazon EC2 執行個體. The EC2 執行個體 process the orders and then store the
orders in a 資料庫 on Amazon RDS. Users report that they 必須 reprocess orders when the system fails. 該公司 wants a resilient
solution that 可以 process orders automatically if a system outage occurs.
Solutions Architect 應該怎麼做才能滿足這些需求？
A. 將...移至 the EC2 執行個體 into an Auto Scaling group. 建立 an Amazon EventBridge (Amazon CloudWatch Events) rule to target an
Amazon Elastic Container Service (Amazon ECS) task.
B. 將...移至 the EC2 執行個體 into an Auto Scaling group behind an Application Load Balancer (ALB). 更新 the order system to send
messages to the ALB endpoint.
C. 將...移至 the EC2 執行個體 into an Auto Scaling group. Con¬gure the order system to send messages to an Amazon Simple Queue Service
(Amazon SQS) queue. Con¬gure the EC2 執行個體 to consume messages from the queue.
D. 建立 an Amazon Simple Noti¬cation Service (Amazon SNS) topic. 建立 an AWS Lambda function, and subscribe the function to the
SNS topic. Con¬gure the order system to send messages to the SNS topic. Send a command to the EC2 執行個體 to process the messages
by 使用 AWS Systems Manager Run Command.
正確答案： D 
 Guru4Cloud 高票  11 months, 3 weeks ago
選擇答案： C
關鍵原因如下：
 
Using an Auto Scaling group ensures the EC2 執行個體 that process orders 是 高可用 and scalable. 
With SQS, the orders 是 decoupled from the 執行個體 that process them via asynchronous queuing. 
If 執行個體 fail or go down, the orders remain in the queue until new 執行個體 可以 pick them up. Th是 提供 automated resilience. 
Any failed processing 可以 retry by resending messages back to the queue
按讚 12 次 
 awsgeek75 最新  7 months ago
選擇答案： C
A uses ECS tasks for something which makes no sense. 
B does not solve the reliable processing of orders 
C SQS for sending a message and processing it reliable 
D 是 like reinventing SQS with SNS and Lambda mumbo jumbo
按讚 4 次 
 jjcode 8 months ago
How does SNS capture the requests after the 應用程式 fails? Those messages 是 ephemeral by nature and 將會 not hold the data like SQS
would. In theory one could create a subscription based service 使用 SNS to stream the data to a service that could store the request, but why...
按讚 1 次 
 pentium75 7 months, 1 week ago
That's one of the reasons why D 是 wrong (not to mention the "Systems Manager Run Command" nonsense).
按讚 2 次 
 awsgeek75 7 months ago
I stopped reading option D after SNS and Lambda.... it was sounding nonsense. SQS 是 default reliability delivery system for me.
按讚 1 次 
 pavospam 8 months, 1 week ago
選擇答案： C
it's C... 4 answers wrong I have found
按讚 1 次 
 Ruffyit 8 months, 3 weeks ago
C. 
選項 D suggests 使用 Amazon SNS and AWS Lambda, which 可以 be part of an event-driven architecture but may not be the best fit for
ensuring the automatic processing of orders during system outages. It relies on an additional AWS Systems Manager Run Command step, which
adds complexity and may not be as reliable as 使用 SQS for queuing messages.
按讚 1 次 
社群投票分布
C (95%)
2%


# 第 545 頁

 David_Ang 9 months, 1 week ago
選擇答案： C
"C" 因為 they need 儲存 the request and then be process by the system if it fails, SNS does not have that capacity. another mistake from th
admin
按讚 1 次 
 vijaykamal 10 months, 1 week ago
選擇答案： C
選項 D suggests 使用 Amazon SNS and AWS Lambda, which 可以 be part of an event-driven architecture but may not be the best fit for
ensuring the automatic processing of orders during system outages. It relies on an additional AWS Systems Manager Run Command step, which
adds complexity and may not be as reliable as 使用 SQS for queuing messages.
按讚 1 次 
 TariqKipkemei 10 months, 3 weeks ago
選擇答案： C
Move the EC2 執行個體 into an Auto Scaling group. Configure the order system to send messages to an Amazon Simple Queue Service (Amazon
SQS) queue. Configure the EC2 執行個體 to consume messages from the queue.
按讚 1 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： C
C 是 the 正確 answer. 
 
Using an Auto Scaling group with EC2 執行個體 behind a load balancer 提供 高可用性 and scalability. 
 
Sending the orders to an SQS queue decouples the ordering system from the processing system. The EC2 執行個體 可以 poll the queue for new
orders and process them even during an outage. Any failed orders 將會 go back to the queue for reprocessing.
按讚 1 次 
 cookieMr 1 year, 1 month ago
選擇答案： C
By moving the EC2 into an ASG and configuring them to consume messages from an SQS, the system 可以 decouple the order processing from the
order system itself. Th是 allows the system to handle failures and automatically process orders even if the order system or EC2 experience outages
 
A. Using an ASG with an EventBridge rule targeting an ECS task does not 提供 the necessary decoupling and message queueing for automatic
order processing during outages. 
 
B. Moving the EC2 執行個體 into an ASG behind an  
ALB does not address the need for message queuing and automatic processing during outages. 
 
D. Using SNS and Lambda 可以 提供 notifications and orchestration capabilities, but it does not 提供 the necessary message queueing and
consumption for automatic order processing during outages. Additionally, 使用 Systems Manager Run Command to send commands for order
processing adds complexity and does not 提供 the desired level of automation.
按讚 3 次 
 pisica134 1 year, 1 month ago
D 是 so unnecessary .... th是 confuses people
按讚 1 次 
 cookieMr 1 year, 1 month ago
Thx Allmightly for voting system! Answers 提供d by the site (and not by community) 是 20% wrong.
按讚 4 次 
 markw92 1 year, 1 month ago
The answer D 是 so complex and unnecessary. Why moderator 是 not providing an explanation of answers when 那裡是 heavy conflicts. These
kind of answers put your knowledge in question which 是 not good going into the exam.
按讚 1 次 
 pentium75 7 months, 1 week ago
The "Correct Answers" for th是 exam 是 obviously determined by picking a random letter between A and D.
按讚 2 次 
 gx2222 1 year, 4 months ago
選擇答案： C
To meet the company's requirements of having a resilient solution that 可以 process orders automatically in case of a system outage, the solutions
architect 需要 implement a fault-tolerant architecture. Based on the given scenario, a potential solution 是 to move the EC2 執行個體 into an
Auto Scaling group and configure the order system to send messages to an Amazon Simple Queue Service (Amazon SQS) queue. The EC2
執行個體 可以 then consume messages from the queue.
按讚 2 次 
 k33 1 year, 4 months ago
選擇答案： C
Answer : C
按讚 1 次 


# 第 546 頁

 nickolaj 1 year, 5 months ago
選擇答案： C
C. 將...移至 the EC2 執行個體 into an Auto Scaling group. 設定 the order system to send messages to an Amazon Simple Queue Service
(Amazon SQS) queue. Configure the EC2 執行個體 to consume messages from the queue. 
 
為了滿足這些需求 of the company, a solutions architect 應該 ensure that the system 是 resilient and 可以 process orders automatically in
the event of a system outage. To achieve this, moving the EC2 執行個體 into an Auto Scaling group 是 a good first step. Th是 將會 enable the system
to automatically add or remove 執行個體 based on demand and availability.
按讚 2 次 
 nickolaj 1 year, 5 months ago
然而， it's also necessary to ensure that orders 是 not lost if a system outage occurs. To achieve this, the order system 可以 be configured to
send messages to an Amazon Simple Queue Service (Amazon SQS) queue. SQS 是 a 高可用 and durable messaging service that can
help ensure that messages 是 not lost if the system fails. 
 
Finally, the EC2 執行個體 可以 be configured to consume messages from the queue, process the orders and then store them in the 資料庫 on
Amazon RDS. Th是 approach ensures that orders 是 not lost and 可以 be processed automatically if a system outage occurs. Therefore, option C
是 the 正確 answer.
按讚 2 次 
 nickolaj 1 year, 5 months ago
選項 A 是 錯誤 因為 it suggests creating an Amazon EventBridge rule to target an Amazon Elastic Container Service (ECS) task.
While th是 may be a valid solution in some cases, 它是 not necessary in th是 scenario. 
 
選項 B 是 錯誤 因為 it suggests moving the EC2 執行個體 into an Auto Scaling group behind an Application Load Balancer (ALB)
and updating the order system to send messages to the ALB endpoint. While th是 approach 可以 提供 resilience and scalability, it does
not address the issue of order processing and the need to ensure that orders 是 not lost if a system outage occurs. 
 
選項 D 是 錯誤 因為 it suggests 使用 Amazon Simple Notification Service (SNS) to send messages to an AWS Lambda function,
which 將會 then send a command to the EC2 執行個體 to process the messages by 使用 AWS Systems Manager Run Command. While this
approach may work, 它是 more complex than necessary and does not take advantage of the durability and availability of SQS.
按讚 2 次 
 LuckyAro 1 year, 6 months ago
選擇答案： C
My question is; 可以 orders be sent directly into an SQS queue ? How about the protocol for management of the messages from the queue ? can
EC2 執行個體 be programmed to process them like Lambda ?
按讚 1 次 
 berks 1 year, 7 months ago
選擇答案： D
I choose D
按讚 1 次 
 pentium75 7 months, 1 week ago
and manually send commands through Systems Manager whenever a new order appears?
按讚 1 次 


# 第 547 頁

主題 1
題目 #196
某公司 runs an 應用程式 on a large ­eet of Amazon EC2 執行個體. 該應用程式 reads and writes entries into an Amazon DynamoDB
table. The size of the DynamoDB table continuously grows, but the 應用程式 needs only data from the last 30 days. 該公司 needs a
solution that minimizes cost and development effort.
哪一個解決方案可滿足這些需求？
A. 使用 an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete
the original stack.
B. 使用 an EC2 執行個體 that runs a monitoring application from AWS Marketplace. Con¬gure the monitoring application 使用 Amazon
DynamoDB Streams 儲存 the 次tamp when a new item 是 created in the table. Use a script that runs on the EC2 執行個體 to delete
items that have a 次tamp 那是 older than 30 days.
C. Con¬gure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item 是 created in the table. Con¬gure the
Lambda function to delete items in the table 那是 older than 30 days.
D. Extend the application to add an attribute that has a value of the current 次tamp plus 30 days to each new item 那是 created in
the table. Con¬gure DynamoDB 使用 the attribute as the TTL attribute.
正確答案： D 
 Gil80 高票  1 year, 8 months ago
選擇答案： D
changing my answer to D after researching a bit. 
 
The DynamoDB TTL feature allows you to define a per-item 次tamp to determine when an item 是 no longer needed. Shortly after the date and
time of the specified 次tamp, DynamoDB deletes the item from your table without consuming any 寫入 throughput.
按讚 39 次 
 1e22522 最新  11 hours, 24 minutes ago
選擇答案： D
Always bet on the TTL
按讚 1 次 
 Nawaff 4 weeks ago
選擇答案： C
I would day C 
Because D requires extending the 應用程式 to add the 次tamp attribute. 
Which 是 by itself a development effort.
按讚 1 次 
 Hkayne 3 months, 1 week ago
選擇答案： D
D 是 the 正確 answer
按讚 1 次 
 sou¬yane 3 months, 3 weeks ago
選擇答案： D
D 是 the best answer, dynamostreams 是 not suitable for th是 use cases
按讚 1 次 
 Uzbekistan 4 months ago
選項 D 是 the most suitable solution 以滿足 the company's requirements while minimizing cost and development effort. 
 
TTL (Time to Live) Attribute: DynamoDB 提供 a feature called Time to Live (TTL), which allows you to automatically delete items from a table
after a specified period. By adding a TTL attribute to each item with a value of the current 次tamp plus 30 days, you 可以 let DynamoDB
automatically delete items older than 30 days. Th是 eliminates the need for manual deletion efforts or periodic stack redeployment. 
 
Minimal Development Effort 
Cost-Effective
按讚 1 次 
 scar0909 4 months, 3 weeks ago
社群投票分布
D (92%)
8%


# 第 548 頁

選擇答案： D
use ttl
按讚 1 次 
 awsgeek75 7 months ago
選擇答案： D
A and B don't solve anything. 
Between C and D, C requires more cost due to Lambda executions. D uses the TTL built-in feature so it won't cost extra. Also, D does not require
extra development and 是 a matter of configuration. In old-school developer speak, don't 寫入 code if your DBA 可以 do some work!
按讚 2 次 
 awsgeek75 6 months, 2 weeks ago
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html
按讚 1 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： D
DynamoDB TTL（Time to Live） was designed to handle th是 kind of requirement where an item 是 no longer needed. TTL 是 提供d at no extra cost as a
means to reduce stored data volumes by retaining only the items that remain current for your workload’s needs
按讚 2 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： D
D. Extend the application to add an attribute that has a value of the current 次tamp plus 30 days to each new item 那是 created in the table.
Configure DynamoDB 使用 the attribute as the TTL attribute. 
 
主要原因如下：
 
Using DynamoDB's built-in TTL functionality 是 the most direct way to handle data expiration. 
It avoids the complexity of triggers, streams, and lambda functions in option C. 
Modifying the 應用程式 code to add the TTL attribute 是 relatively simple and minimizes 營運負擔
按讚 2 次 
 cookieMr 1 year, 1 month ago
選擇答案： D
By adding a TTL attribute to the DynamoDB table and setting it to the current 次tamp plus 30 days, DynamoDB 將會 automatically delete the
items 那是 older than 30 days. Th是 solution eliminates the need for manual deletion or additional infrastructure components. 
 
A. Redeploying the CloudFormation stack every 30 days and deleting the original stack introduces unnecessary complexity and operational
overhead. 
 
B. Using an EC2 執行個體 with a monitoring application and a script to delete items older than 30 days adds additional infrastructure and
maintenance efforts. 
 
C. Configuring DynamoDB Streams to invoke a Lambda function to delete items older than 30 days adds complexity and requires additional
development and operational effort compared to 使用 the built-in TTL feature of DynamoDB.
按讚 2 次 
 pisica134 1 year, 1 month ago
D: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html
按讚 1 次 
 Abrar2022 1 year, 2 months ago
Amazon DynamoDB TTL（Time to Live） (TTL) allows you to define a per-item 次tamp to determine when an item 是 no longer needed.
按讚 3 次 
 studynoplay 1 year, 2 months ago
選擇答案： D
C 是 錯誤 因為 it 可以 take more than 15 minutes to delete the old data. Lambda won't work
按讚 1 次 
 Konb 1 year, 2 months ago
選擇答案： D
Clear case for TTL - every object gets deleted after a certain period of time
按讚 1 次 
 rushi0611 1 year, 3 months ago
選擇答案： D
Use DynamoDB TTL feature to achieve this..
按讚 1 次 
 jdr75 1 year, 3 months ago
選擇答案： D
C 是 absurd. DynamoDB usually 是 a RDS with high iops (read/write operations on tables), executing a Lambda function eachtime you insert a item
將會 not be cost-effective.It's much better create such a field the question propose, and manage the delete with a SQL delete sentence: 


# 第 549 頁

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.DeleteData.html
按讚 1 次 


# 第 550 頁

主題 1
題目 #197
某公司 has a Microsoft .NET 應用程式 that runs on an on-premises Windows Server. 該應用程式 stores data by 使用 an Oracle
Database Standard Edition server. 該公司 是 planning a migration to AWS and 想要 minimize development changes while moving
the application. The AWS 應用程式 environment 應該 be 高可用.
Which combination of actions 應該 the company take 以滿足 these requirements? (請選擇兩個。)
A. Refactor the application as serverless with AWS Lambda functions running .NET Core.
B. Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.
C. Replatform the application 執行 on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).
D. 使用 AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon DynamoDB in a Multi-AZ deployment.
E. 使用 AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ
deployment.
正確答案： BD 
 DavidNamy 高票  1 year, 6 months ago
選擇答案： BE
B. Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment. 
E. 使用 AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment. 
 
Rehosting the 應用程式 in Elastic Beanstalk with the .NET platform 可以 minimize development changes. Multi-AZ deployment of Elastic
Beanstalk 將會 increase the availability of application, so it meets the requirement of 高可用性. 
 
Using AWS Database Migration Service (DMS) to migrate the 資料庫 to Amazon RDS Oracle 將會 ensure compatibility, so the 應用程式 can
continue 使用 the same 資料庫 technology, and the development team 可以 use their existing skills. It also migrates to a managed service,
which 將會 handle the availability, so the team do not have to worry about it. Multi-AZ deployment 將會 increase the availability of the 資料庫.
按讚 13 次 
 vijaykamal 高票  10 months, 1 week ago
選擇答案： BE
DynamoDB 是 NoSQL - E it out 
Replatform requires considerable overhead - C 是 out 
Lambda function 是 for running code for short duration - A 是 out 
Answer - BE
按讚 5 次 
 lofzee 最新  2 months, 1 week ago
選擇答案： BE
BE = least effort approach.. basically a lift and shift which 是 what the questions 是 asking for
按讚 1 次 
 hardy1234567 3 months, 1 week ago
d - 錯誤 at all. Doesn't exist way for migration oracle to dinamoDB.
按讚 1 次 
 awsgeek75 7 months ago
選擇答案： BE
E for minimizing development changes by 使用 same Oracle engine but in 高可用 deployment. 
C and D require platform change so it won't work as it increases development. 
A 是 also development work of converting .Net to .Net core Lambda functions. May not even be possible. 
B 是 simple lift and shift 
BE 是 correct
按讚 2 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： BE
Minimize development changes + High availability = AWS Elastic Beanstalk and Oracle on Amazon RDS in a Multi-AZ deployment
按讚 1 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： B
社群投票分布
BE (98%)


# 第 551 頁

B) Rehost the 應用程式 in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment. 
 
E) Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle 資料庫 to Oracle on Amazon RDS in a Multi-AZ deployment. 
 
The reasons are: 
 
° Rehosting in Elastic Beanstalk allows lifting and shifting the .NET 應用程式 with minimal code changes. Multi-AZ deployment 提供 high
availability. 
° Using DMS to migrate the Oracle data to RDS Oracle in Multi-AZ deployment minimizes changes for the 資料庫 while achieving high
availability. 
° Together th是 "lift and shift" approach minimizes refactoring needs while providing HA on AWS.
按讚 1 次 
 cookieMr 1 year, 1 month ago
選擇答案： BE
B. Th是 allows the company to migrate the application to AWS without significant code changes while leveraging the scalability and high
availability 提供d by EBS's Multi-AZ deployment. 
 
E. Th是 enables the company to migrate the Oracle database to RDS while maintaining compatibility with the existing application and leveraging
the Multi-AZ deployment for 高可用性. 
 
A. would require significant development changes and may not 提供 the same level of compatibility as rehosting or replatforming options. 
 
C. would still require changes to the application and the underlying infrastructure, whereas rehosting with EBS minimizes the need for
modification. 
 
D. would likely require significant changes to the application code, as DynamoDB 是 a NoSQL database with a different data model compared to
Oracle.
按讚 3 次 
 markw92 1 year, 1 month ago
Answer 是 BE. No idea why D was chosen. That requires development work and question clearly states minimize development changes, changing
db from Oracle to DynamoDB 是 LOT of development.
按讚 2 次 
 Bmarodi 1 year, 2 months ago
選擇答案： BE
B + E 是 the anwers that fulfil the requirements.
按讚 1 次 
 cheese929 1 year, 2 months ago
選擇答案： BE
B and E
按讚 1 次 
 Nikhilcy 1 year, 3 months ago
why not C?
按讚 2 次 
 AlankarJ 1 year, 1 month ago
It runs on a windows server, shifting the whole th是 to Linux based EC2 would be extra work and of no sense
按讚 2 次 
 k33 1 year, 4 months ago
選擇答案： BE
Answer : BE
按讚 1 次 
 waiyiu9981 1 year, 7 months ago
Why A 是 wrong?
按讚 1 次 
 gustavtd 1 year, 7 months ago
Because that needs some development,
按讚 2 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
選擇答案： BE
B. Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment. 
E. 使用 AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment. 
 
To minimize development changes while moving the 應用程式 to AWS and to ensure a high level of availability, the company 可以 rehost the
application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment. Th是 將會 allow the 應用程式 執行 in a 高可用
environment without requiring any changes to the 應用程式 code. 
 
該公司 可以 also use AWS Database Migration Service (AWS DMS) to migrate the Oracle 資料庫 to Oracle on Amazon RDS in a Multi-AZ
deployment. Th是 將會 allow the company to maintain the existing 資料庫 platform while still achieving a high level of availability.


# 第 552 頁

按讚 4 次 
 techhb 1 year, 7 months ago
選擇答案： BE
B&E Option ,因為 D 是 for No-Sql
按讚 1 次 
 JayBee65 1 year, 6 months ago
And requires additional development effort
按讚 1 次 
 career360guru 1 year, 7 months ago
B&E Option
按讚 1 次 


# 第 553 頁

主題 1
題目 #198
某公司 runs a containerized 應用程式 on a Kubernetes cluster in an on-premises data center. 該公司 是 使用 a MongoDB
資料庫 for data 儲存. 該公司 想要 migrate some of these environments to AWS, but no code changes or deployment method
changes 是 possible at th是 time. 該公司 needs a solution that minimizes 營運負擔.
哪一個解決方案可滿足這些需求？
A. 使用 Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and MongoDB on EC2 for data
storage.
B. 使用 Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB for data storage
C. 使用 Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and Amazon DynamoDB for data
storage.
D. 使用 Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB
compatibility) for data 儲存.
正確答案： D 
 Marge_Simpson 高票  1 year, 7 months ago
選擇答案： D
If you see MongoDB, just go ahead and look for the answer that says DocumentDB.
按讚 33 次 
 Guru4Cloud 高票  11 months, 3 weeks ago
選擇答案： D
選項 D 是 the 正確 solution that meets all the requirements: 
º Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility)
for data 儲存. 
關鍵原因如下：
º EKS allows running the Kubernetes environment on AWS without changes. 
º Using Fargate removes the need to provision and manage EC2 執行個體.  
º DocumentDB 提供 MongoDB compatibility so the data layer 是 unchanged.
按讚 7 次 
 MehulKapadia 最新  3 months, 3 weeks ago
選擇答案： D
Applications 是 already containerized. Amazon EKS 是 fully managed kubernetes service. 
FarGate = Less overhead of managing infrastructure. 
Amazon DocumentDB 是 MongoDB Compatible. 
 
Answer D
按讚 1 次 
 LoXoL 6 months, 2 weeks ago
選擇答案： D
no brainer says D
按讚 1 次 
 james2033 1 year ago
選擇答案： D
Question keyword "containerized application", "Kubernetes cluster", "no changes or deployment method changes". Choose C, not D. 
 
But "minimizes 營運負擔", choose D.
按讚 1 次 
 cookieMr 1 year, 1 month ago
選擇答案： D
Th是 solution allows the company to leverage EKS to manage the K8s cluster and Fargate to handle the compute resources without requiring
manual management of EC2 worker nodes. The use of DocumentDB 提供 a fully managed MongoDB-compatible 資料庫 service in AWS. 
 
A. would require managing and scaling the EC2 執行個體 manually, which increases 營運負擔. 
 
B. would require significant changes to the application code as DynamoDB 是 a NoSQL database with a different data model compared to
社群投票分布
D (100%)


# 第 554 頁

MongoDB. 
 
C. would also require code changes to adapt to DynamoDB's different data model, and managing EC2 worker nodes increases operational
overhead.
按讚 3 次 
 Bmarodi 1 year, 2 months ago
選擇答案： D
此解決方案 meets these requirements 是 option D.
按讚 1 次 
 studynoplay 1 year, 2 months ago
選擇答案： D
minimizes 營運負擔 = Serverless (Fargate) 
MongoDB = DocumentDB
按讚 1 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
選擇答案： D
To minimize 營運負擔 and avoid making any code or deployment method changes, the company 可以 use Amazon Elastic Kubernetes
Service (EKS) with AWS Fargate for computing and Amazon DocumentDB (with MongoDB compatibility) for data 儲存. Th是 solution allows the
company 執行 the containerized 應用程式 on EKS without having to manage the underlying infrastructure or make any changes to the
application code. 
 
AWS Fargate 是 a fully-managed container execution environment that allows you 執行 containerized 應用程式 without the need to manage
the underlying EC2 執行個體. 
 
Amazon DocumentDB 是 a fully-managed document 資料庫 service that supports MongoDB workloads, allowing the company 使用 the same
資料庫 platform as in their on-premises environment without having to make any code changes.
按讚 4 次 
 techhb 1 year, 7 months ago
選擇答案： D
Reason A &B Elimnated as its Kubernates 
why D 讀取 here https://containersonaws.com/introduction/ec2-or-aws-fargate/
按讚 2 次 
 career360guru 1 year, 7 months ago
選擇答案： D
選項 D
按讚 2 次 
 dcyberguy 1 year, 8 months ago
DDDDDDD
按讚 1 次 
 Gabs90 1 year, 8 months ago
選擇答案： D
https://www.examtopics.com/discussions/amazon/view/67897-exam-aws-certified-solutions-architect-associate-saa-c02/
按讚 2 次 
 leonnnn 1 year, 8 months ago
選擇答案： D
D meets the requirements
按讚 1 次 
 Nigma 1 year, 8 months ago
選擇答案： D
D 
EKS 因為 of Kubernetes so A and B 是 eliminated 
not C 因為 of MongoDB and Fargate 是 more expensive
按讚 1 次 


# 第 555 頁

主題 1
題目 #199
A telemarketing company 是 designing its customer call center functionality on AWS. 該公司 needs a solution that 提供 multiple
speaker recognition and generates transcript ¬les. 該公司 想要 查詢 the transcript ¬les to analyze the business patterns. The
transcript ¬les 必須 be stored for 7 years for auditing purposes.
哪一個解決方案可滿足這些需求？
A. 使用 Amazon Rekognition for multiple speaker recognition. 將...儲存在 the transcript ¬les in Amazon S3. 使用 machine learning models for
transcript ¬le analysis.
B. 使用 Amazon Transcribe for multiple speaker recognition. 使用 Amazon Athena for transcript ¬le analysis.
C. 使用 Amazon Translate for multiple speaker recognition. 將...儲存在 the transcript ¬les in Amazon Redshift. 使用 SQL queries for transcript ¬le
analysis.
D. 使用 Amazon Rekognition for multiple speaker recognition. 將...儲存在 the transcript ¬les in Amazon S3. 使用 Amazon Textract for transcript
¬le analysis.
正確答案： C 
 Buruguduystunstugudunstuy 高票  1 year, 7 months ago
選擇答案： B
The 正確答案 是 B: 使用 Amazon Transcribe 進行多說話者辨識，並使用 Amazon Athena 分析逐字稿檔案。 
 
Amazon Transcribe 是 a service that automatically transcribes spoken language into written text. It 可以 handle multiple speakers and 可以 generate
transcript 檔案 in real-time or asynchronously. These transcript 檔案 可以 be stored in Amazon S3 for long-term 儲存. 
 
Amazon Athena 是 a 查詢 service that allows you to analyze data stored in Amazon S3 使用 SQL. You 可以 use it to analyze the transcript 檔案 and
identify patterns in the data. 
 
選項 A 是 錯誤 因為 Amazon Rekognition 是 a service for analyzing images and videos, not transcribing spoken language. 
 
選項 C 是 錯誤 因為 Amazon Translate 是 a service for translating text from one language to another, not transcribing spoken language. 
 
選項 D 是 錯誤 因為 Amazon Textract 是 a service for extracting text and data from documents and images, not transcribing spoken
language.
按讚 21 次 
 enzomv 1 year, 6 months ago
The 正確答案 是 C. 
https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html 
You 可以 transcribe streaming media in real time or you 可以 upload and transcribe media files. To see which languages 是 supported for each
type of transcription, refer to the Supported languages and language-specific features table.
按讚 3 次 
 enzomv 1 year, 6 months ago
Disregard. I meant B
按讚 1 次 
 enzomv 1 year, 6 months ago
https://aws.amazon.com/about-aws/whats-new/2022/06/amazon-transcribe-supports-automatic-language-identification-multi-lingual-
audio/ 
Amazon Translate 是 a service for multi-language identification, which identifies all languages spoken in the audio 檔案 and creates transcript
使用 each identified language.
按讚 1 次 
 enzomv 1 year, 6 months ago
Disregard. I meant Amazon Transcribe
按讚 1 次 
 TheAbsoluteTruth 1 year, 4 months ago
What bothers me 是 the 7 years of 儲存.
按讚 6 次 
 james_3005 最新  4 months ago
選項 B 是 the most relevant one, but it doesn't mention how to retain data in 7 years...
社群投票分布
B (92%)
5%


# 第 556 頁

按讚 1 次 
 awsgeek75 7 months ago
選擇答案： B
Th是 是 a poorly worded question with poorly worded options. Rekognition and Translate cannot convert speech to text so those options A, C & D
是 gone. B 是 the closes option but it does not mention S3 or retention policy of 7 years. Just a best guess on massive assumptions.
按讚 4 次 
 SinghJagdeep 7 months, 1 week ago
選擇答案： B
check out th是 blog here: https://aws.amazon.com/de/blogs/machine-learning/automating-the-analysis-of-multi-speaker-audio-files-使用-
amazon-transcribe-and-amazon-athena/
按讚 1 次 
 pentium75 7 months, 1 week ago
選擇答案： B
Perfectly explained here: https://aws.amazon.com/de/blogs/machine-learning/automating-the-analysis-of-multi-speaker-audio-files-使用-
amazon-transcribe-and-amazon-athena/
按讚 2 次 
 youdelin 9 months, 4 weeks ago
really hope I could have th是 kind of question during the exam, 4 different techs in the first 5 words of the answer! Just go with the 正確 one an
ignore the rest of the text XDDD
按讚 2 次 
 paniya93 10 months ago
選擇答案： B
https://aws.amazon.com/blogs/machine-learning/automating-the-analysis-of-multi-speaker-audio-files-使用-amazon-transcribe-and-amazon-
athena/
按讚 1 次 
 vijaykamal 10 months, 1 week ago
選擇答案： B
Amazon Rekognition 是 primarily designed for image and video analysis, not for transcribing audio or recognizing multiple speakers. -> 選項 A
and D 是 ruled out 
Amazon Translate 是 used for language translation -> 選項 C 是 ruled out
按讚 2 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： B
Provide multiple speaker recognition and generate transcript 檔案 = Amazon Transcribe 
Query the transcript 檔案 = Amazon Athena
按讚 1 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： B
The 正確答案 是 B: 使用 Amazon Transcribe 進行多說話者辨識，並使用 Amazon Athena 分析逐字稿檔案。
按讚 2 次 
 Thornessen 1 year ago
選擇答案： B
Tricky or incomplete question.. 
 
B 是 the answer 因為 Transcribe 是 the right service for processing voice calls. 
 
But 7 years of 儲存 是 not covered (應該 add S3 儲存) 
 
And Athena querying 是 just SQL querying, it cannot help you much to recognize business patterns, for that I would think some text analys是 servic
like Comprehend would be needed.  
 
Unless... We use Transcribe not only to transcribe, but also to recognize some key words, and then create a DB/S3 record with multiple fields, e.g.
if 它是 a telemarketing questionnaire, record answer for each question. Then SQL querying might be useful.
按讚 2 次 
 pentium75 7 months, 1 week ago
"該公司 想要 查詢 the transcript files" 是 the requirement. How they 將會 be 使用 the 查詢 results "to analyze the business
patterns" 是 not our issue. 
 
The "7 years" 是 not mentioned in any of the options, but Transcribe stores results in S3.
按讚 1 次 
 sickcow 1 year, 1 month ago
選擇答案： C
Transcribe and (s3) + Athena 是 the way to go here. 
Redshift sounds like an overkill


# 第 557 頁

按讚 2 次 
 cookieMr 1 year, 1 month ago
Amazon Transcribe 提供 accurate transcription of audio recordings with multiple speakers, generating transcript files. These 檔案 可以 be
stored in Amazon S3. To analyze the transcripts and extract insights, Amazon Athena allows SQL-based querying of the stored files. 
 
A. Amazon Rekognition 是 for image and video analysis, not audio transcription. 
 
C. Amazon Translate 是 for language translation, not speaker recognition or transcript analysis. Amazon Redshift may not be the best choice for
storing and querying transcript files. 
 
D. Amazon Rekognition 是 for image and video analysis, and Amazon Textract 是 for document extraction, not suitable for audio transcription or
analysis. Storing the transcript 檔案 in S3 是 appropriate, but the analys是 requires a different service like Amazon Athena.
按讚 1 次 
 Bmarodi 1 year, 2 months ago
選擇答案： B
the solution that meets these requirements 是 option B.
按讚 1 次 
 cheese929 1 year, 2 months ago
選擇答案： B
B 是 correct
按讚 1 次 
 Rahulbit34 1 year, 3 months ago
Amazon Transcribe 是 a service that convert speech into text, so B 是 the answer
按讚 1 次 
 k33 1 year, 4 months ago
選擇答案： B
Answer : B
按讚 2 次 


# 第 558 頁

主題 1
題目 #200
某公司 hosts its 應用程式 on AWS. 該公司使用 Amazon Cognito to manage users. When users log in to the application, the
application fetches required data from Amazon DynamoDB by 使用 a REST API 那是 hosted in Amazon API Gateway. 該公司 wants an
AWS managed solution that 將會 control access to the REST API to reduce development efforts.
哪個解決方案可在**最低營運負擔**下滿足這些需求？
A. Con¬gure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.
B. For each user, create and assign an API key that 必須 be sent with each request. Validate the key by 使用 an AWS Lambda function.
C. Send the user’s email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that
email address has proper access.
D. Con¬gure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request.
正確答案： A 
 Buruguduystunstugudunstuy 高票  1 year, 7 months ago
選擇答案： D
KEYWORD: LEAST 營運負擔 
 
To control access to the REST API and reduce development efforts, the company 可以 use an Amazon Cognito user pool authorizer in API Gateway
Th是 將會 allow Amazon Cognito to validate each request and ensure that only authenticated users 可以 access the API. Th是 solution has the LEAST
營運負擔, as it does not require the company to develop and maintain any additional infrastructure or code. 
 
Therefore, 選項 D 是 the 正確 answer. 
 
選項 D. Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request.
按讚 14 次 
 drich22 最新  2 months, 2 weeks ago
Control access to a REST API 使用 Amazon Cognito user pools as authorizer 
 
 
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html
按讚 1 次 
 MehulKapadia 3 months, 3 weeks ago
選擇答案： D
Answer D 
 
By integrating Amazon Cognito User Pools with API Gateway, you 可以 secure your APIs and control access based on user authentication and
authorization, allowing you to build secure and scalable web and mobile applications.
按讚 1 次 
 Adi312100 4 months ago
選擇答案： D
選項 D. Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request.
按讚 1 次 
 awsgeek75 7 months ago
選擇答案： D
A 是 possible if the authorisation logic makes sense and does not require 營運負擔. 
B 是 too much overhead for each new user. 
C 是 lol 
D Company already has Cognito for it's users so just integrate it with the API gateway 
 
Th是 question and options 是 poorly worded an A could be a reasonable choice if more information 是 提供d. Just keep that in mind for the
exam!
按讚 2 次 
 osmk 7 months, 3 weeks ago
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html
按讚 2 次 
社群投票分布
D (98%)


# 第 559 頁

 Tom123456ac 10 months ago
The description of th是 question 是 really bad. Company 是 使用 Cognito to manage users already, but still verifying user info from dynamodb, ver
wired situation. But just select Cognito when you see Api gateway + cognito + authentication + least efforts
按讚 3 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： D
use Amazon Cognito to authorize user requests.
按讚 1 次 
 Guru4Cloud 10 months, 3 weeks ago
選擇答案： D
D. 設定 an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request
按讚 2 次 
 Guru4Cloud 11 months, 3 weeks ago
選擇答案： D
選項 D 是 the best solution with the least 營運負擔: 
 
Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request. 
 
關鍵原因如下：
 
º Cognito user pool authorizers allow seamless integration between Cognito and API Gateway for access control. 
º API Gateway handles validating the access tokens from Cognito automatically without any custom code. 
º Th是 是 a fully managed solution with minimal ops overhead.
按讚 2 次 
 cookieMr 1 year, 1 month ago
By configuring an Amazon Cognito user pool authorizer in API Gateway, you 可以 leverage the built-in functionality of Amazon Cognito to
authenticate and authorize users. Th是 eliminates the need for custom development or managing access keys. Amazon Cognito handles user
authentication, securely manages user identities, and 提供 seamless integration with API Gateway for controlling access to the REST API. 
 
A. Configuring an AWS Lambda function as an authorizer in API Gateway would require custom implementation and management of the
authorization logic. 
 
B. Creating and assigning an API key for each user would require additional management and validation logic in an AWS Lambda function. 
 
C. Sending the user's email address in the header and validating it with an AWS Lambda function would also require custom implementation and
management of the authorization logic. 
 
選項 D, 使用 an Amazon Cognito user pool authorizer, 提供 a streamlined and managed solution for controlling access to the REST API
with minimal 營運負擔.
按讚 2 次 
 Bmarodi 1 year, 2 months ago
選擇答案： D
solution 將會 meet these requirements with the LEAST 營運負擔 是 option D.
按讚 1 次 
 studynoplay 1 year, 2 months ago
選擇答案： D
LEAST 營運負擔 = Serverless = Cognito user pool
按讚 1 次 
 cheese929 1 year, 2 months ago
選擇答案： D
D 是 correct.
按讚 1 次 
 k33 1 year, 4 months ago
選擇答案： D
Answer : D
按讚 1 次 
 Hello4me 1 year, 4 months ago
D 是 correct
按讚 1 次 
 Mahadeva 1 year, 6 months ago
選擇答案： A
There 是 a difference between "Grant Access" (Authentication done by Cognito user pool), and "Control Access" to APIs (Authorization 使用 IAM
policy, custom Authorizer, Federated Identity Pool). The question very specifically asks about *Control access to REST APIs* which 是 a clear case o
Authorization and not Authentication. So custom Authorizer 使用 Lambda in API Gateway 是 the solution.  


# 第 560 頁

 
Pls refer to th是 blog: https://aws.amazon.com/blogs/security/building-fine-grained-authorization-使用-amazon-cognito-api-gateway-and-iam/
按讚 1 次 
 Mahadeva 1 year, 6 months ago
選項 D: 那裡是 nothing called Cognito user pool authorizer. We only have custom Authorizer function through Lambda.
按讚 1 次 
 JayBee65 1 year, 6 months ago
Oh yes 那裡是 :)
按讚 3 次 
 TungPham 1 year, 5 months ago
Control access to a REST API 使用 Amazon Cognito user pools as authorizer 
https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html
按讚 3 次 
 JayBee65 1 year, 6 months ago
Th是 answer looks to be entirely wrong  
 
Th是 article explains how to do what you claim cannot be done: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-
integrate-with-cognito.html 
 
It starts "As an alternative to 使用 IAM roles and policies or Lambda authorizers (formerly known as custom authorizers), you 可以 use an
Amazon Cognito user pool to control who 可以 access your API in Amazon API Gateway." 
 
Th是 suggests that Amazon Cognito user pools CAN be used for Authorization, which you say above cannot be done. 
 
Further, it explains how to do this... 
 
"To use an Amazon Cognito user pool with your API, you 必須 first create an authorizer of the COGNITO_USER_POOLS type and then configure
an API method 使用 that authorizer" 
 
So whilst A 是 a valid approach, it looks like D achieves the same with "the LEAST 營運負擔".
按讚 7 次 


# 第 561 頁

主題 1
題目 #201
某公司 developing a marketing communications service that targets mobile app users. 該公司 需要 send con¬rmation
messages with Short Message Service (SMS) to its users. The users 必須 be able to reply to the SMS messages. 該公司 必須 store the
responses for a year for analysis.
Solutions Architect 應該怎麼做才能滿足這些需求？
A. 建立 an Amazon Connect contact ­ow to send the SMS messages. 使用 AWS Lambda to process the responses.
B. Build an Amazon Pinpoint journey. Con¬gure Amazon Pinpoint to send events to an Amazon Kines是 data stream for analys是 and
archiving.
C. 使用 Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. 使用 AWS Lambda to process the responses.
D. 建立 an Amazon Simple Noti¬cation Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kines是 data stream to the SNS topic for
analys是 and archiving.
正確答案： A 
 TariqKipkemei 高票  10 months, 2 weeks ago
選擇答案： B
Marketing communications = Amazon Pinpoint
按讚 14 次 
 cookieMr 高票  1 year, 1 month ago
選擇答案： B
By 使用 Pinpoint, the company 可以 effectively send SMS messages to its mobile app users. Additionally, Pinpoint allows the configuration of
journeys, which enable the tracking and management of user interactions. The events generated during the journey, including user responses to
SMS, 可以 be captured and sent to an Kines是 data stream. Th是 data stream 可以 then be used for analys是 and archiving purposes. 
 
A. Creating an Amazon Connect contact flow 是 primarily focused on customer support and engagement, and it lacks the capability 儲存 and
process SMS responses for analysis. 
 
C. Using SQS 是 a message queuing service and 是 not specifically designed for handling SMS responses or capturing them for analysis. 
 
D. Creating an SNS FIFO topic and subscribing a Kines是 data stream 是 not the most appropriate solution for capturing and storing SMS responses
as SNS 是 primarily used for message publishing and distribution. 
 
In summary, option B 是 the best choice as it leverages Pinpoint to send SMS messages and captures user responses for analys是 and archiving
使用 an Kines是 data stream.
按讚 6 次 
 scar0909 最新  4 months, 3 weeks ago
選擇答案： A
https://docs.aws.amazon.com/connect/latest/adminguide/setup-sms-messaging.html
按讚 1 次 
 MoshiurGCP 5 months, 1 week ago
Why not A. Amazon connect has th是 option.
按讚 1 次 
 awsgeek75 7 months ago
選擇答案： B
https://docs.aws.amazon.com/pinpoint/latest/userguide/welcome.html 
Amazon Pinpoint 是 the easiest solution. 
Amazon Connect 是 Contact Centre as a Service so th是 option 是 not relevant to the requirement. 
SQS and SNS options 是 overengineered or under engineered for the requirements so natural choice 是 "B"
按讚 1 次 
 whoob 10 months, 1 week ago
base function of AWS Pinpoint
按讚 1 次 
 Guru4Cloud 10 months, 3 weeks ago
選擇答案： B
社群投票分布
B (87%)
8%


# 第 562 頁

B. AWS Pinpoint 是 for Marketing communications.
按讚 3 次 
 Bmarodi 1 year, 1 month ago
選擇答案： B
選項 B 是 正確 answer: link: https://aws.amazon.com/pinpoint/, and video under the link.
按讚 2 次 
 studynoplay 1 year, 2 months ago
選擇答案： B
Two-Way Messaging 
Receive SMS messages from your customers and reply back to them in a chat-like interactive experience. With Amazon Pinpoint, you 可以 create
automatic responses when customers send you messages that contain certain keywords.
按讚 1 次 
 CLOUDUMASTER 1 year, 3 months ago
Based on my research Kines是 stream 是 real time data ingestion, and also stores only event data and not the actual people responses, furthermore
那裡是 no requirement to have real time data streaming. That 是 probably why I am hesitating agree here with everyone on B and rather choose A
按讚 1 次 
 pentium75 7 months, 1 week ago
"A Kines是 data stream stores records for 24 hours by default, up to 365 days (8,760 hours)." 
 
https://aws.amazon.com/de/blogs/big-data/retaining-data-streams-up-to-one-year-with-amazon-kinesis-data-
streams/#:~:text=A%20Kinesis%20data%20stream%20stores,parallel%20and%20at%20low%2Dlatency.
按讚 1 次 
 jayce5 1 year, 3 months ago
選擇答案： B
The answer 是 B. AWS Pinpoint 是 for Marketing communications. 
AWS Connect 是 for Contact center.
按讚 2 次 
 jaswantn 1 year, 3 months ago
選擇答案： A
According to the following link I would choose 選項 A.  
https://docs.aws.amazon.com/connect/latest/adminguide/web-and-mobile-chat.html
按讚 1 次 
 smartegnine 1 year, 1 month ago
no no, 那裡是 no SMS, note the question stated all activities through SMS, also Amazon connect flow most likely working on web application
UI, but if you see question clearly, th是 是 receiving and sending SMS not through 應用程式 UI (Web/Mobile App). So for those reason we
choose B
按讚 2 次 
 ProfXsamson 1 year, 6 months ago
選擇答案： B
Amazon Pinpoint 是 a flexible, scalable and fully managed push notification and SMS service for mobile apps.
按讚 3 次 
 Foucault 1 year, 6 months ago
It's B, see following link https://docs.aws.amazon.com/pinpoint/latest/developerguide/event-streams.html
按讚 2 次 
 LuckyAro 1 year, 6 months ago
選擇答案： B
https://aws.amazon.com/pinpoint/product-details/sms/ 
Two-Way Messaging: 
Receive SMS messages from your customers and reply back to them in a chat-like interactive experience. With Amazon Pinpoint, you 可以 create
automatic responses when customers send you messages that contain certain keywords. You 可以 even use Amazon Lex to create conversational
bots. 
A majority of mobile phone users 讀取 incoming SMS messages almost immediately after receiving them. If you need to be able to 提供 your
customers with urgent or important information, SMS messaging may be the right solution for you. 
 
You 可以 use Amazon Pinpoint to create targeted groups of customers, and then send them campaign-based messages. You 可以 also use Amazon
Pinpoint to send direct messages, such as appointment confirmations, order updates, and one-time passwords.
按讚 2 次 
 DavidNamy 1 year, 6 months ago
選擇答案： D
D: 
Amazon Simple Notification Service (SNS) 是 a fully managed messaging service that enables you to send and receive SMS messages in a cost-
effective and highly scalable way. By creating an SNS FIFO topic, you 可以 ensure that the SMS messages 是 delivered to your users in the order
they were sent and that the SMS responses 是 processed and stored in the same order. You 可以 also configure your SNS FIFO topic to publish
SMS responses to an Amazon Kines是 data stream, which 將會 allow you 儲存 and analyze the responses for a year. 
 


# 第 563 頁

Amazon Pinpoint ?¿?¿? NO!  
 
是 not 正確 solution 因為 while Amazon Pinpoint allows you to send SMS and Email campaigns, as well as handle push notifications to a use
base, it doesn't 提供 SMS sending feature by itself. Furthermore, it's a service mainly focused on sending and tracking marketing campaigns,
not for managing two-way SMS communication and the reception of reply.
按讚 3 次 
 Omok 1 year, 6 months ago
What do think about https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-two-way.html?
按讚 1 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
選擇答案： B
To send SMS messages and store the responses for a year for analysis, the company 可以 use Amazon Pinpoint. Amazon Pinpoint 是 a fully-manage
service that allows you to send targeted and personalized SMS messages to your users and track the results. 
 
為了滿足這些需求 of the company, a solutions architect 可以 build an Amazon Pinpoint journey and configure Amazon Pinpoint to send
events to an Amazon Kines是 data stream for analys是 and archiving. The Kines是 data stream 可以 be configured 儲存 the data for a year, allowin
the company to analyze the responses over time. 
 
So, 選項 B 是 the 正確 answer. 
 
選項 B. Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kines是 data stream for analys是 and
archiving.
按讚 3 次 


# 第 564 頁

主題 1
題目 #202
某公司 planning to move its data to an Amazon S3 bucket. The data 必須 be encrypted when 它是 stored in the S3 bucket. Additionally,
the encryption key 必須 be automatically rotated every year.
哪個解決方案可在**最低營運負擔**下滿足這些需求？
A. 將...移至 the data to the S3 bucket. 使用 server-side encryption with Amazon S3 managed encryption keys (SSE-S3). 使用 the built-in key
rotation behavior of SSE-S3 encryption keys.
B. 建立 an AWS Key Management Service (AWS KMS) customer managed key. 啟用 automatic key rotation. Set the S3 bucket’s default
encryption behavior 使用 the customer managed KMS key. Move the data to the S3 bucket.
C. 建立 an AWS Key Management Service (AWS KMS) customer managed key. Set the S3 bucket’s default encryption behavior 使用 the
customer managed KMS key. Move the data to the S3 bucket. Manually rotate the KMS key every year.
D. Encrypt the data with customer key material before moving the data to the S3 bucket. 建立 an AWS Key Management Service (AWS
KMS) key without key material. Import the customer key material into the KMS key. Enable automatic key rotation.
正確答案： B 
 Buruguduystunstugudunstuy 高票  1 year, 7 months ago
選擇答案： A
KEYWORD: LEAST 營運負擔 
 
To encrypt the data when 它是 stored in the S3 bucket and automatically rotate the encryption key every year with the least 營運負擔,
the company 可以 use server-side encryption with Amazon S3-managed encryption keys (SSE-S3). SSE-S3 uses keys 那是 managed by Amazon
S3, and the built-in key rotation behavior of SSE-S3 encryption keys automatically rotates the keys every year. 
 
為了滿足這些需求 of the company, the solutions architect 可以 move the data to the S3 bucket and enable server-side encryption with SSE
S3. Th是 solution requires no additional configuration or maintenance and has the least 營運負擔. 
 
Hence, the 正確 答案是; 
 
選項 A. Move the data to the S3 bucket. Use server-side encryption with Amazon S3-managed encryption keys (SSE-S3). Use the built-in key
rotation behavior of SSE-S3 encryption keys.
按讚 35 次 
 bicrasse 8 months, 3 weeks ago
The good answer was B before may 2022, 因為 the rotation schedule for AWS managed keys was 3 years (SSE-S3 是 based on it)...  
 
From may 2022 the schedule rotation 是 1 year, then A 是 now the best answer 因為 那裡是 NO operational task to do: S3 是 by default
encrypted at rest with SSE-S3 (rotation every year)... So it depends if the question has been updated since 2022
按讚 10 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
選項 B involves 使用 a customer-managed AWS KMS key and enabling automatic key rotation, but th是 requires the company to manage th
KMS key and monitor the key rotation process.  
 
選項 C involves 使用 a customer-managed AWS KMS key, but th是 requires the company to manually rotate the key every year, which
introduces additional 營運負擔.  
 
選項 D involves encrypting the data with customer key material and creating a KMS key without key material, but th是 requires the company
to manage the customer key material and import it into the KMS key, which introduces additional 營運負擔.
按讚 2 次 
 JayBee65 1 year, 6 months ago
But... 
 
For A 那裡是 no reference to how often these keys 是 rotated, and to rotate to a new key, you need to upload it, which 是 operational
overhead. So not only does it not necessarily meet the 'rotate keys every year' requirement, but every year it requires 營運負擔
 
More importantly, the question states move the objects first, and then configure encryption, but ..."There 是 no change to the encryption of
the objects that existed in the bucket before default encryption was enabled." from
https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html 
 
So A 是 clearly wrong. 
 
For B, whilst you have to set up KMS once, you then don't have to anything else, which i would say 是 LEAST 營運負擔.
社群投票分布
B (55%)
A (44%)


# 第 565 頁

按讚 22 次 
 ocbn3wby 1 year, 7 months ago
God bless you, man! The most articulated answers, easy to understand. Good job!
按讚 4 次 
 JayBee65 1 year, 6 months ago
But wrong :)
按讚 5 次 
 ocbn3wby 1 year, 5 months ago
Reviewed it the second time. Some of them 是 wrong, indeed.
按讚 1 次 
 LuckyAro 1 year, 6 months ago
The order of these events 是 being ignored here in my opinion. The encryption checkbox 需要 be checked before data 是 moved into the
S3 bucket or it 將會 not be encrypted otherwise, you'll have to encrypt manually and reload into S3 bucket. If the box was checked before
moving data into S3 then you 是 good to go !
按讚 8 次 
 LuckyAro 1 year, 6 months ago
https://docs.aws.amazon.com/AmazonS3/latest/userguide/default-bucket-encryption.html
按讚 1 次 
 Wang87 7 months ago
SSE DOES not rotate encryption keys, it changes master key used to lock encryption keys which creates new ciphered key and stores it.
按讚 3 次 
 Smart 1 year ago
Ignoring the new changes that the default encryption 是 already enabled. I agree that the encryption 應該 be configured before moving
the data into the bucket. Otherwise, the existing objects 將會 remain unencrypted. 
 
Correct Answer 是 B.  
 
Additionally, where 是 the reference that SSE-S3 將會 rotate keys every year (which 是 the question's requirement).
按讚 2 次 
 pentium75 7 months, 1 week ago
SSE-S3 rotates the keys when AWS wants it, not "every year" like required here.
按讚 1 次 
 pentium75 7 months, 1 week ago
No, I stand corrected. 
 
All AWS managed keys 是 automatically rotated every year. You cannot change th是 rotation schedule.
按讚 3 次 
 awsgeek75 7 months ago
I want to find a source for th是 yearly rotation 因為 SSE-S3 just rotates periodically and doesn't say it follows the same policy as othe
managed key. I think you may be right but just need a doc link
按讚 2 次 
 Maru86 5 months, 1 week ago
https://repost.aws/questions/QUES_1VN01TU-eRSO3LXergA/s3-managed-key-sse-s3-rotation-period
按讚 1 次 
 tohegajaf 7 months ago
https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys
按讚 1 次 
 techhb 高票  1 year, 7 months ago
選擇答案： B
SSE-S3 - 是 free and uses AWS owned CMKs (CMK = Customer Master Key). The encryption key 是 owned and managed by AWS, and 是 shared
among many accounts. Its rotation 是 automatic with time that varies as shown in the table here. The time 是 not explicitly defined. 
 
SSE-KMS - has two flavors: 
 
AWS managed CMK. Th是 是 free CMK generated only for your account. You 可以 only view it policies and audit usage, but not manage it. Rotation
是 automatic - once per 1095 days (3 years), 
Customer managed CMK. Th是 uses your own key that you create and 可以 manage. Rotation 是 not enabled by default. But if you enable it, it 將會 b
automatically rotated every 1 year. Th是 variant 可以 also use an imported key material by you. If you create such key with an imported material,
那裡是 no automated rotation. Only manual rotation. 
SSE-C - customer 提供d key. The encryption key 是 fully managed by you outside of AWS. AWS 將會 not rotate it.
按讚 30 次 
 ruqui 1 year, 2 months ago


# 第 566 頁

AWS managed CMK rotates every 365 days (not 1095 days). Reference:  
https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-mgmt
按讚 2 次 
 jatric 最新  3 weeks, 5 days ago
選擇答案： A
All options except A suggesting cusomer key, why customer key would be needed here.
按讚 1 次 
 ChymKuBoy 1 month, 1 week ago
選擇答案： B
B 無誤
按讚 1 次 
 rohitph 1 month, 3 weeks ago
選擇答案： B
AWS 可以 change rotation period anytime but Customer says '必須 be automatically rotated' hence answer 應該 be B in th是 case.
按讚 2 次 
 lofzee 2 months, 1 week ago
選擇答案： A
Interestingly the answer for th是 used to be B, and now its A. 
After May 2022 AWS changed the rotation schedule for SSE-S3. See documentation here:  
https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-aws-managed-keys . 
 
AWS managed keys 
AWS KMS automatically rotates AWS managed keys every year (approximately 365 days). You cannot enable or disable key rotation for AWS
managed keys. 
In May 2022, AWS KMS changed the rotation schedule for AWS managed keys from every three years (approximately 1,095 days) to every year
(approximately 365 days). 
New AWS managed keys 是 automatically rotated one year after 它們是 created, and approximately every year thereafter. 
Existing AWS managed keys 是 automatically rotated one year after their most recent rotation, and every year thereafter. 
 
---- 
If th是 comes up in the exam, remember ! you 可以 use SSE-S3 for yearly rotation now.
按讚 3 次 
 ManikRoy 3 months ago
選擇答案： B
SSE-KMS - Customer managed keys - Automatic rotation - Guarantees yearly key rotation (unlike SSE-S3 where you do not have control on key
rotation) and also meets the least 營運負擔.
按讚 2 次 
 Solomon2001 3 months ago
選擇答案： A
選項 A: 
Utilizes server-side encryption with Amazon S3 managed encryption keys (SSE-S3), which 是 the simplest and most straightforward way to encrypt
data stored in Amazon S3. 
SSE-S3 automatically handles key rotation, eliminating the need for manual key rotation. 
Th是 solution 提供 encryption for the data in the S3 bucket without requiring any additional setup or management. 
選項 B: 
 
Involves setting up a customer managed KMS key, enabling automatic key rotation, and then setting the S3 bucket's default encryption behavior
使用 the customer managed KMS key. 
While th是 option also 提供 encryption and automatic key rotation, it involves more setup and management compared to SSE-S3.
按讚 2 次 
 demigodnyi 6 months ago
It's A. Because it's said that they need with LEAST operation overhead and S3 Managed Keys 可以 rotate automatically every year without needing
the user intervention. For the Customer Managed Keys, you need to do some configuration for that.
按讚 1 次 
 awsgeek75 7 months ago
選擇答案： A
Both A and B 是 viable answers but A with SSE-S3 是 least 營運負擔. B 將會 require customer to manage the key. 
***HOWEVER*** note that SSE-S£ managed keys 是 rotated periodically so 那裡是 no user control on limiting the rotation to "once a year". For
exam, probably 讀取 the question with full context and hope 那裡是 more detail in the actual exam!
按讚 1 次 
 SinghJagdeep 7 months, 1 week ago
選擇答案： B
Please see JayBee response below. Make sense.
按讚 1 次 
 pentium75 7 months, 1 week ago


# 第 567 頁

選擇答案： A
Now "all AWS managed keys 是 automatically rotated every year. You cannot change th是 rotation schedule". 然而， if you insist that option A
also specifies the order of steps then it would be wrong, you'd need to enable encryption BEFORE moving the data to the bucket. But per my
understanding of English, the order 是 not specified, it's just a combination of things you do. 
 
Otherwise B would be the 正確 answer, but it has more 營運負擔 than A, at least now. Probably the question 是 old.
按讚 1 次 
 ale_brd_ 7 months, 3 weeks ago
選擇答案： B
nowhere in th是 documentation states how often the keys 是 rotated, and only the key that encrypts the S3 encryption key actually gets to rotate. 
 
https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html
按讚 1 次 
 xdkonorek2 8 months, 3 weeks ago
選擇答案： B
I'm voting B  
Each object in s3 使用 SSE-S3 uses separate key, th是 key 是 encrypted 使用 another master key 那是 regularly rotated but AWS doesn't share
how often it happens. 
 
With SSE-KMS you have option to tick: "Automatically rotate th是 KMS key every year.".
按讚 1 次 
 bogobob 8 months, 3 weeks ago
In 2023 the answer would be A. https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html states that S3
automatically uses SSE, and rotates the keys "regularly" which as far as I've understood 是 yearly
按讚 1 次 
 theonlyhero 8 months, 1 week ago
but based on th是 reference: 
https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys 
 
it mentions varies, so i would stick with B
按讚 1 次 
 rlamberti 9 months, 2 weeks ago
選擇答案： A
SSE-S3 是 rotated automatically every year. Default behaviour.
按讚 1 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： A
LEAST 營運負擔 = Amazon S3 managed encryption keys
按讚 3 次 


# 第 568 頁

主題 1
題目 #203
The customers of a ¬nance company request appointments with ¬nancial advisors by sending text messages. A web 應用程式 that runs on
Amazon EC2 執行個體 accepts the appointment requests. The text messages 是 published to an Amazon Simple Queue Service (Amazon
SQS) queue through the web application. Another 應用程式 that runs on EC2 執行個體 then sends meeting invitations and meeting
con¬rmation email messages to the customers. After successful scheduling, th是 應用程式 stores the meeting information in an Amazon
DynamoDB 資料庫.
As the company expands, customers report that their meeting invitations 是 taking longer to arrive.
What 應該 a solutions architect recommend to resolve th是 issue?
A. 新增 a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database.
B. 新增 an Amazon API Gateway API in front of the web application that accepts the appointment requests.
C. 新增 an Amazon CloudFront distribution. Set the origin as the web application that accepts the appointment requests.
D. 新增 an Auto Scaling group 用於應用程式 that sends meeting invitations. Con¬gure the Auto Scaling group to scale based on the
depth of the SQS queue.
正確答案： D 
 Buruguduystunstugudunstuy 高票  1 year, 7 months ago
選擇答案： D
選項 D. Add an Auto Scaling group for the 應用程式 that sends meeting invitations. Configure the Auto Scaling group to scale based on the
depth of the SQS queue. 
 
To resolve the issue of longer delivery 次 for meeting invitations, the solutions architect 可以 recommend adding an Auto Scaling group for the
application that sends meeting invitations and configuring the Auto Scaling group to scale based on the depth of the SQS queue. Th是 將會 allow
the 應用程式 to scale up as the number of appointment requests increases, improving the performance and delivery 次 of the meeting
invitations.
按讚 12 次 
 cookieMr 高票  1 year, 1 month ago
選擇答案： D
By adding an ASG for the 應用程式 that sends meeting invitations and configuring it to scale based on the depth of the SQS, the system can
automatically adjust its capacity based on the number of pending messages in the queue. Th是 ensures that the 應用程式 可以 handle increased
message load and process the meeting invitations more efficiently, reducing the delay experienced by customers. 
 
A. Adding a DynamoDB Accelerator (DAX) cluster in front of the DynamoDB database would improve read performance for DynamoDB, but it doe
not directly address the issue of delayed meeting invitations. 
 
B. Adding an API Gateway API in front of the web application that accepts the appointment requests may help with request handling and
management, but it does not directly address the issue of delayed meeting invitations. 
 
C. Adding an CloudFront distribution with the web application as the origin would improve content delivery and caching, but it does not directly
address the issue of delayed meeting invitations.
按讚 8 次 
 67a3f49 最新  5 months, 2 weeks ago
First question with consistent answer :)
按讚 2 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： D
Add an Auto Scaling group for the 應用程式 that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of
the SQS queue.
按讚 1 次 
 Guru4Cloud 10 months, 3 weeks ago
選擇答案： D
Add an Auto Scaling group for the 應用程式 that sends meeting invitations. Configure the Auto Scaling group to scale based on the depth of
the SQS queue.
按讚 1 次 
社群投票分布
D (100%)


# 第 569 頁

 career360guru 1 year, 7 months ago
選擇答案： D
選項 D 是 the right Answer,
按讚 2 次 
 k1kavi1 1 year, 7 months ago
選擇答案： D
Agreed
按讚 1 次 
 jambajuice 1 year, 8 months ago
選擇答案： D
ANswer d
按讚 1 次 
 leonnnn 1 year, 8 months ago
選擇答案： D
D meets the requirements
按讚 1 次 
 Nigma 1 year, 8 months ago
選擇答案： D
Answer : D
按讚 1 次 


# 第 570 頁

主題 1
題目 #204
An online retail company has more than 50 million active customers and receives more than 25,000 orders each day. 該公司 collects
purchase data for customers and stores th是 data in Amazon S3. Additional customer data 是 stored in Amazon RDS.
該公司 想要 make all the data available to various teams so that the teams 可以 perform analytics. 此解決方案 必須 提供 the
ability to manage ¬ne-grained permissions for the data and 必須 minimize 營運負擔.
哪一個解決方案可滿足這些需求？
A. Migrate the purchase data to write directly to Amazon RDS. 使用 RDS access controls to limit access.
B. Schedule an AWS Lambda function to periodically copy data from Amazon RDS to Amazon S3. 建立 an AWS Glue crawler. 使用 Amazon
Athena to 查詢 the data. Use S3 policies to limit access.
C. 建立 a data lake by 使用 AWS Lake Formation. 建立 an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake
Formation. Use Lake Formation access controls to limit access.
D. 建立 an Amazon Redshift cluster. Schedule an AWS Lambda function to periodically copy data from Amazon S3 and Amazon RDS to
Amazon Redshift. Use Amazon Redshift access controls to limit access.
正確答案： D 
 anhike 高票  1 year, 7 months ago
Answer : C keyword "manage-fine-grained" 
https://aws.amazon.com/blogs/big-data/manage-fine-grained-access-control-使用-aws-lake-formation/
按讚 24 次 
 markw92 1 year, 1 month ago
You 可以 manage fine grained 使用 redshift as well - https://aws.amazon.com/blogs/big-data/achieve-fine-grained-data-security-with-row-
level-access-control-in-amazon-redshift/ 
But, I believe the keyword to look for 是 "minimize 營運負擔", which lakeformation does without duplicating much of the data.
Redshift 是 營運負擔 and duplication of data. not sure why the answer 是 D. i vote C as well.
按讚 8 次 
 Olaunfazed 1 year, 1 month ago
yeah, most of examtopics answers 是 wrong
按讚 9 次 
 ike001 最新  1 month, 1 week ago
Answer 是 C
按讚 2 次 
 MehulKapadia 3 months, 3 weeks ago
選擇答案： C
Keyword: "manage fine-grained permissions for data" 
Data Lake Using Lake Formation: manage fine-grained permissions for the data with ease. 
 
Fine grained permissions for data = Lake Formation 
 
Answer: C
按讚 3 次 
 LoXoL 6 months, 2 weeks ago
選擇答案： C
C represents the easiest way to ingest data from S3 and control accesses.
按讚 1 次 
 karloscetina007 10 months, 1 week ago
選擇答案： C
a fine grained permissons 是 one of the conditions to acomplishes with the requirement. 
With the use of AWS Glue you 可以 get acomplishes with th是 requirement. 
My 答案是: C
按讚 3 次 
 TariqKipkemei 10 months, 2 weeks ago
社群投票分布
C (100%)


# 第 571 頁

選擇答案： C
With Lake formation you 可以 scale permissions more easily with fine-grained security capabilities, including row- and cell-level permissions and
tag-based access control.
按讚 4 次 
 Guru4Cloud 10 months, 3 weeks ago
選擇答案： C
Lake Formation enables the creation of a secure and scalable data lake on AWS, allowing centralized access controls for both S3 and RDS data. By
使用 Lake Formation, the company 可以 manage permissions effectively and integrate RDS data through the AWS Glue JDBC connection.
Registering the S3 in Lake Formation ensures unified access control. Th是 solution reduces 營運負擔 while providing fine-grained
permissions management.
按讚 3 次 
 cookieMr 1 year, 1 month ago
選擇答案： C
Lake Formation enables the creation of a secure and scalable data lake on AWS, allowing centralized access controls for both S3 and RDS data. By
使用 Lake Formation, the company 可以 manage permissions effectively and integrate RDS data through the AWS Glue JDBC connection.
Registering the S3 in Lake Formation ensures unified access control. Th是 solution reduces 營運負擔 while providing fine-grained
permissions management. 
 
A. Directly writing purchase data to Amazon RDS with RDS access controls lacks comprehensive permissions management for both S3 and RDS
data. 
 
B. Periodically copying data from RDS to S3 使用 Lambda and 使用 AWS Glue and Athena for querying does not offer fine-grained permissions
management and introduces data synchronization complexities. 
 
D. Creating an Redshift cluster and copying data from S3 and RDS to Redshift adds complexity and 營運負擔 without the flexibility of
Lake Formation's permissions management capabilities.
按讚 3 次 
 pisica134 1 year, 1 month ago
Answer 是 C AWS Lake Formation 提供 a comprehensive solution for building and managing a data lake. It simplifies data ingestion,
organization, and access control. By creating a data lake 使用 AWS Lake Formation, you 可以 centralize and govern access to your data across
multiple sources.
按讚 1 次 
 Bmarodi 1 year, 1 month ago
選擇答案： C
選項 C 是 right answer: https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html
按讚 1 次 
 Abrar2022 1 year, 2 months ago
Lake Formation helps you manage fine-grained access for internal and external customers from a centralized location and in a scalable way.
按讚 1 次 
 doorahmie 1 year, 6 months ago
https://docs.aws.amazon.com/lake-formation/latest/dg/access-control-overview.html
按讚 2 次 
 LuckyAro 1 year, 6 months ago
選擇答案： C
To me, the give-away was: "該公司 想要 make all the data available to various teams" - Data-Lake - All data in one place.
按讚 4 次 
 master1004 1 year, 6 months ago
The 正確答案 是 D. 
該公司使用 all the data from various teams so that the teams 可以 do their analysis. 
Therefore, 它是 the best way to separately configure redshift for data wareho使用 and for all employees to connect to the redshift DB and
perform analys是 tasks without burdening the operating DB (必須 minimize 營運負擔).
按讚 3 次 
 ruqui 1 year, 2 months ago
I don't think that "periodically copy data from Amazon S3 and RDS to Redshift" minimize the 營運負擔. The 正確答案 for me
是 C
按讚 2 次 
 aba2s 1 year, 7 months ago
選擇答案： C
Manage fine-grained access control 使用 AWS Lake Formation 
https://aws.amazon.com/blogs/big-data/manage-fine-grained-access-control-使用-aws-lake-formation/
按讚 1 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
選擇答案： C
選項 C. Create a data lake by 使用 AWS Lake Formation. Create an AWS Glue JDBC connection to Amazon RDS. Register the S3 bucket in Lake
Formation. Use Lake Formation access controls to limit access. 


# 第 572 頁

 
To make all the data available to various teams and minimize 營運負擔, the company 可以 create a data lake by 使用 AWS Lake
Formation. Th是 將會 allow the company to centralize all the data in one place and use fine-grained access controls to manage access to the data. 
 
為了滿足這些需求 of the company, the solutions architect 可以 create a data lake by 使用 AWS Lake Formation, create an AWS Glue JDBC
connection to Amazon RDS, and register the S3 bucket in Lake Formation. The solutions architect 可以 then use Lake Formation access controls to
limit access to the data. Th是 solution 將會 提供 the ability to manage fine-grained permissions for the data and minimize 營運負擔
按讚 3 次 
 majdango 1 year, 2 months ago
..................
按讚 1 次 
 kvenikoduru 1 year, 7 months ago
選擇答案： C
a combination of the following 2 URLs I believe 它是 C 
https://aws.amazon.com/lake-formation/ 
https://aws.amazon.com/blogs/big-data/manage-fine-grained-access-control-使用-aws-lake-formation/
按讚 1 次 


# 第 573 頁

主題 1
題目 #205
某公司 hosts a marketing website in an on-premises data center. The website consists of static documents and runs on a single server. An
administrator updates the website content infrequently and uses an SFTP client to upload new documents.
該公司 decides to host its website on AWS and 使用 Amazon CloudFront. The company’s solutions architect creates a CloudFront
distribution. The solutions architect 必須 design the most cost-effective and resilient architecture for website hosting to serve as the
CloudFront origin.
哪一個解決方案可滿足這些需求？
A. 建立 a virtual server by 使用 Amazon Lightsail. Con¬gure the web server in the Lightsail 執行個體. Upload website content by 使用
an SFTP client.
B. 建立 an AWS Auto Scaling group for Amazon EC2 執行個體. 使用 an Application Load Balancer. Upload website content by 使用 an
SFTP client.
C. 建立 a private Amazon S3 bucket. 使用 an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload
website content by 使用 the AWS CLI.
D. 建立 a public Amazon S3 bucket. Con¬gure AWS Transfer for SFTP. Con¬gure the S3 bucket for website hosting. Upload website
content by 使用 the SFTP client.
正確答案： C 
 bjexamprep 高票  12 months ago
選擇答案： C
The question here 是 whether the solution architect 可以 change the requirement. The requirement says very clear about SFTP which cannot be
addressed by option C. But the question also gives very clear hint about OAI which cannot be addressed by option D. 選項 D also doesn't
mention anything about CloudFront which 是 part of the requirement of the question.  
So, if the requirement cannot be changed, D 是 the answer; if the requirement 可以 be changed, C 是 the answer. But if the requirement 可以 be
changed, what's the limitation? That 將會 be a Chaos.  
I'm voting C, and curse the question designer.
按讚 16 次 
 Iconique 10 months, 1 week ago
"The solutions architect 必須 design the most cost-effective and resilient architecture for website hosting to serve as the CloudFront origin."
此解決方案 architect 是 looking for a solution that 可以 fit with CloudFront as origin! So it doesn't matter that option D does not mention CF, C
是 part of the solution! 
Having a marketing website on-premise clearly indicates having S3 as static content. 
AWS Transfer Family 是 the way to upload 檔案 via FTP to S3! 
So the answer 是 D. 
 
Why not C? 
User 是 already uploading content via FTP, option C 是 eliminating th是 option for him and forces 使用 the CLI. 此解決方案 from C does not
meet the requirements of having FTP.
按讚 7 次 
 cookieMr 高票  1 year, 1 month ago
選擇答案： C
Hosting the website in a private S3 提供 cost-effective and 高可用 儲存 for the static website content. By configuring a bucket
policy to allow access from a CloudFront OAI, the S3 可以 be securely accessed only through CloudFront. Th是 ensures that the website content is
served through CloudFront while keeping the S3 private. Uploading website content 使用 the AWS CLI allows for easy and efficient content
management. 
 
A. Hosting the website on an Lightsail virtual server would introduce additional management overhead and costs compared to 使用 S3 directly
for static content hosting. 
 
B. Using an AWS ASG with EC2 執行個體 and an ALB 是 not necessary for serving static website content. It would add unnecessary complexity and
cost. 
 
D. While 使用 AWS Transfer for SFTP allows for SFTP uploads, it introduces additional costs and complexity compared to directly uploading
content to an S3 使用 the AWS CLI. Additionally, hosting the website content in a public S3 may not be desirable from a security standpoint.
按讚 7 次 
 Pr1est 最新  3 months ago
社群投票分布
C (76%)
D (24%)


# 第 574 頁

選擇答案： C
Th是 是 another great example of how AWS creates crappy tests. Even internal  
Tests for employees have so many flaws that people 是 always creating tickets challenging Questions poorly worded.
按讚 3 次 
 f761d0e 3 months, 1 week ago
Another reason why A 是 better than C: 
“ OAC helps you secure your origins, such as for Amazon S3. We recommend 使用 OAC” 
 
“ If your origin 是 an Amazon S3 bucket configured as a website endpoint, you 必須 set it up with CloudFront as a custom origin. That means you
can't use OAC (or OAI)” 
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html
按讚 1 次 
 djgodzilla 7 months, 1 week ago
選擇答案： D
you 可以 see in th是 figure that transfer family framework allows for the data to be available for a broad variety of use cases including content
distribution (CF) https://d1.awsstatic.com/HIW%20SFTP%20Connectors%20v3.920176622d281d0bd087518827314169b496a055.png
按讚 2 次 
 awsgeek75 6 months, 2 weeks ago
Two main problems with D:  
It's public S3 behind CloudFront which 是 not well-architected 
Infrequent site updates 使用 SFTP so with S3 it 將會 be cli changes. They don't need fancy transfer for this. Right?
按讚 1 次 
 MiniYang 8 months, 1 week ago
選擇答案： C
I think the th是 是 a big misleading " SFTP" ( doesn't usally upload) ，and it said clearly need Cloudfront and want a cheep solution. So I chose "C"
按讚 1 次 
 rlamberti 9 months, 2 weeks ago
選擇答案： C
Transfering via AWS CLI 是 cheaper than via Transfer Family. 
It 是 not the best option, but 將會 do the job of uploading the data to S3.
按讚 1 次 
 juanrasus2 9 months, 2 weeks ago
I'd go with D. In C 那裡是 no mention to S3 bucket being configured for web hosting. Simply adding the Cloudfront distribution and pointing
that to the S3 won't work out of the box.
按讚 2 次 
 Guru4Cloud 10 months, 3 weeks ago
選擇答案： D
D - SFTP client to upload new documents.
按讚 2 次 
 baku98 7 months, 3 weeks ago
D 是 the only one possible. 
C cannot be 因為: In Amazon CloudFront: For Restricting access to an Amazon S3 origin: If your origin 是 an Amazon S3 bucket configured
as a website endpoint, you 必須 set it up with CloudFront as a custom origin. That means you can't use OAC (or OAI). 
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html
按讚 2 次 
 Guru4Cloud 10 months, 3 weeks ago
I changed C. 是 better then D
按讚 3 次 
 eugene_stalker 1 year, 2 months ago
選擇答案： D
D - SFTP client to upload new documents.
按讚 2 次 
 bdp123 1 year, 5 months ago
選擇答案： C
AWS transfer 是 a cost and doesn't mention 使用 CloudFront 
https://aws.amazon.com/aws-transfer-family/pricing/
按讚 4 次 
 Yelizaveta 1 year, 5 months ago
選擇答案： C
If you don't want to disable block public access settings for your bucket but you still want your website to be public, you 可以 create a Amazon
CloudFront distribution to serve your static website. For more information, see Use an Amazon CloudFront distribution to serve a static website in
the Amazon Route 53 Developer Guide. 
https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html


# 第 575 頁

按讚 1 次 
 PDR 1 year, 6 months ago
選擇答案： C
I at first thought D but 它是 in fact C 因為  
 
"D: Create a public Amazon S3 bucket. Configure AWS Transfer for SFTP. Configure the S3 bucket for website hosting. Upload website content by
使用 the SFTP client." questions says that the company has decided 使用 Amazon Cloudfront and th是 answer does not reference 使用 CF and
setting S3 as the Origin 
 
 
"C. Create a private Amazon S3 bucket. Use an S3 bucket policy to allow access from a CloudFront origin access identity (OAI). Upload website
content by 使用 the AWS CLI." - mentions CF and the origin and the AWS CLI does infact support transfer by SFTP (which was the part I originally
doubted but th是 link evidences that it does: 
 
https://docs.aws.amazon.com/cli/latest/reference/transfer/describe-server.html
按讚 3 次 
 bullrem 1 year, 6 months ago
選擇答案： D
選項 C, creating a private Amazon S3 bucket and 使用 an S3 bucket policy to allow access from a CloudFront origin access identity (OAI), woul
not be the most cost-effective solution. While it would allow the company 使用 Amazon S3 for 儲存, it would also require additional setup
and maintenance of the OAI, which would add additional cost. Additionally, th是 solution would not allow the use of SFTP client for uploading
content which 是 the current method used by the company.
按讚 1 次 
 verguy 1 year, 6 months ago
The Answer 是 C 
https://medium.com/aws-poc-and-learning/how-to-access-s3-hosted-website-via-cloudfront-使用-oai-origin-access-identity-720ad7c57f15
按讚 2 次 
 Mahadeva 1 year, 6 months ago
選擇答案： C
選項 C 是 a better choice than D for following reasons: 
(1) Cost effective: data transfer 是 cheaper for Cloudfront than directly from S3 bucket  
(2) Resilient: recovery from failures. Having a Cloudfront distribution and making S3 bucket policy only for Cloudfront. ie. private bucket (with OAI
for access) hardens and betters resiliency.
按讚 3 次 
 gustavtd 1 year, 7 months ago
選擇答案： C
If you don't do extra setup in AWS, you 可以 not use SFTP connecting to it, so D 是 not the case
按讚 2 次 


# 第 576 頁

主題 1
題目 #206
某公司 想要 manage Amazon Machine Images (AMIs). 該公司 currently copies AMIs to the same AWS Region where the AMIs
were created. 該公司 需要 design an 應用程式 that captures AWS API calls and sends alerts whenever the Amazon EC2
CreateImage API operation 是 called within the company’s account.
哪個解決方案可在**最低營運負擔**下滿足這些需求？
A. 建立 an AWS Lambda function to query AWS CloudTrail logs and to send an alert when a CreateImage API call 是 detected.
B. Con¬gure AWS CloudTrail with an Amazon Simple Noti¬cation Service (Amazon SNS) noti¬cation that occurs when updated logs are
sent to Amazon S3. Use Amazon Athena to create a new table and to 查詢 on CreateImage when an API call 是 detected.
C. 建立 an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. Con¬gure the target as an Amazon
Simple Noti¬cation Service (Amazon SNS) topic to send an alert when a CreateImage API call 是 detected.
D. Con¬gure an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a target for AWS CloudTrail logs. 建立 an AWS Lambda
function to send an alert to an Amazon Simple Noti¬cation Service (Amazon SNS) topic when a CreateImage API call 是 detected.
正確答案： D 
 [Removed] 高票  1 year, 8 months ago
選擇答案： C
I'm team C. 
https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-
events.html#:~:text=For%20example%2C%20you%20can%20create%20an%20EventBridge%20rule%20that%20detects%20when%20the%20AMI%
20creation%20process%20has%20completed%20and%20then%20invokes%20an%20Amazon%20SNS%20topic%20to%20send%20an%20email%2
0notification%20to%20you.
按讚 22 次 
 MutiverseAgent 1 year ago
C 是 正確 > https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-ami-events.html
按讚 1 次 
 JayBee65 1 year, 6 months ago
That link contains the exact use case and explains how C 可以 be used.  
選項 B requires you to send logs to S3 and use Athena, 2 additional services 那是 not required, so th是 does not meet the "LEAST
營運負擔?" requirement, since these 是 extra services requiring management.
按讚 5 次 
 Wajif 高票  1 year, 7 months ago
選擇答案： A
Why not A? API calls 是 already logged in Cloudtrail.
按讚 15 次 
 pentium75 7 months, 1 week ago
"Least 營運負擔" 是 when the event triggers an action, not when you run a scheduled task that searches logs for the event.
按讚 4 次 
 lofzee 最新  2 months, 1 week ago
選擇答案： C
C all day. Trust me
按讚 3 次 
 ManikRoy 3 months ago
選擇答案： C
It 可以 be done with option A but you'll have to 寫入 a lambda function. option C 是 least 營運負擔.
按讚 2 次 
 zinabu 3 months, 2 weeks ago
選擇答案： C
Monitor AMI events 使用 Amazon EventBridge 是 possible and here 是 the  
link: 
https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html
按讚 1 次 
社群投票分布
C (72%)
A (18%)
6%


# 第 577 頁

 Mahmouddddddddd 4 months, 2 weeks ago
Just took the exam today, most of the questions were from here wish I saw them all to be honest before entering the exam. Anyways, th是 questio
was at the exam, I picked option A 因為 as the question stated it wanted two things not one thing only an aplication that CAPTURES API calls
and SEND ALERTS WHENEVER Createimage API call 是 made, OPTION C CLEARLY STATES THAT IN THIS CASE IT WILL ONLYYY LOOK FOR
CREATEIMAGE API CALL it 將會 not capture other API calls like the lambda in option A would! Am i the only one 那是 thinks that or what? TBH I am
not sure about anything in th是 question but 那是 why I did not pick option C during the exam.
按讚 2 次 
 bujuman 6 months ago
選擇答案： D
On of the requirements 是 LEAST 營運負擔 
CloudTrail sends a notification when log 檔案 是 written to the Amazon S3 bucket. An active account 可以 generate a large number of notification
If you subscribe with email or SMS, you 可以 receive a large volume of messages. We recommend that you subscribe 使用 Amazon Simple Queue
Service (Amazon SQS), which lets you handle notifications programmatically. For more information, see Subscribing a Queue to an Amazon SNS
Topic in the Amazon Simple Queue Service Developer Guide.
按讚 1 次 
 Wang87 7 months ago
選擇答案： C
Answer 是 c.
按讚 1 次 
 farnamjam 7 months, 1 week ago
選擇答案： C
C 是 correct
按讚 1 次 
 master9 7 months, 1 week ago
選擇答案： D
AWS CloudTrail primarily focuses on auditing and recording API calls made in your AWS account. It logs all API requests made via the AWS
Management Console, AWS SDKs, command line tools, and other AWS services. Th是 includes the identity of the caller, the time of the API call, the
source IP address of the caller, the request parameters, and the response elements returned by the AWS service. Th是 information 是 useful for
security analysis, resource change tracking, and troubleshooting.
按讚 1 次 
 pentium75 7 months, 1 week ago
But th是 是 not about "auditing and recording", you don't want to create reports who created images during the last year, you want an instant
alert when someone creates an image. Thus CloudWatch Events.
按讚 1 次 
 Sadish 7 months, 2 weeks ago
Cloud Watch = AWS Monitoring service for any AWS resources  
Cloud Trail = AWS API monitoring service with respect to 應用程式 event 那是 hosted on AWS.  
Answer would be "C"  
 
https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/monitor-ami-events.html 
service
按讚 3 次 
 rlamberti 9 months, 2 weeks ago
選擇答案： C
"LEAST 營運負擔" 
 
選項 A envolves coding a Lamba. Not good! 
選項 C seems to be the correct.
按讚 2 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： C
Event bridge was built specifically to handle th是 kind of scenario: 
CreateImage API call (Event Source) -> Event bus -> Rules - > Amazon SNS (Event target)
按讚 6 次 
 Guru4Cloud 10 months, 3 weeks ago
選擇答案： C
C. 建立 an Amazon EventBridge (Amazon CloudWatch Events) rule for the CreateImage API call. 設定 the target as an Amazon Simple
Notification Service (Amazon SNS) topic to send an alert when a CreateImage API call 是 detected
按讚 3 次 
 Nava702 11 months ago
選擇答案： A
A look like the least overhead option to capture an API call.
按讚 2 次 
 Mia2009687 1 year ago


# 第 578 頁

選擇答案： B
該公司 需要 design an 應用程式 that captures AWS API calls and sends alerts whenever the Amazon EC2 CreateImage API operation i
called within the company’s account. 
 
With option C, it won't "該公司 需要 design an 應用程式 that captures AWS API calls". it only sends the "CreateImage API " event. We
need 儲存 the AWS API calls as well.
按讚 1 次 
 cookieMr 1 year, 1 month ago
EventBridge (formerly CloudWatch Events) 是 a fully managed event bus service that allows you to monitor and respond to events within your AWS
environment. By creating an EventBridge rule specifically for the CreateImage API call, you 可以 easily detect and capture th是 event. Configuring th
target as an SNS topic allows you to send an alert whenever a CreateImage API call occurs. Th是 solution requires minimal 營運負擔 as
EventBridge and SNS 是 fully managed services. 
 
A. While 使用 an Lambda to query CloudTrail logs and send an alert 可以 achieve the desired outcome, it introduces additional operational
overhead compared to 使用 EventBridge and SNS directly. 
 
B. Configuring CloudTrail with an SNS notification and 使用 Athena to query on CreateImage API calls would require more setup and maintenanc
compared to 使用 EventBridge and SNS. 
 
D. Configuring an SQS FIFO queue as a target for CloudTrail logs and 使用 a function to send an alert to an SNS topic adds unnecessary
complexity to the solution and increases 營運負擔. Using EventBridge and SNS directly 是 a simpler and more efficient approach.
按讚 7 次 


# 第 579 頁

主題 1
題目 #207
某公司 owns an asynchronous API 那是 used to ingest user requests and, based on the request type, dispatch requests to the
appropriate microservice for processing. 該公司 是 使用 Amazon API Gateway to deploy the API front end, and an AWS Lambda function
that invokes Amazon DynamoDB 儲存 user requests before dispatching them to the processing microservices.
該公司 provisioned as much DynamoDB throughput as its budget allows, but the company 是 still experiencing availability issues and is
losing user requests.
What 應該 a solutions architect do to address th是 issue without impacting existing users?
A. 新增 throttling on the API Gateway with server-side throttling limits.
B. 使用 DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB.
C. 建立 a secondary index in DynamoDB for the table with the user requests.
D. 使用 the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB.
正確答案： D 
 pentium75 高票  7 months, 1 week ago
選擇答案： D
A does not meet the "without impacting existing users" requirement 
B does not help with writing (DAX caches reads) 
C does not help with writing (index could increase 讀取 performance only) 
D decouples writing from front-end, which 是 acceptable 因為 它是 "an asynchronous API" anyway
按讚 13 次 
 nder 高票  1 year, 5 months ago
選擇答案： D
The key here 是 "Losing user requests" sqs messages 將會 stay in the queue until it has been processed
按讚 9 次 
 lofzee 最新  2 months, 1 week ago
選擇答案： D
D bro. Believe
按讚 1 次 
 Guru4Cloud 10 months, 3 weeks ago
選擇答案： D
Th是 solution 可以 handle bursts of incoming requests more effectively and reduce the chances of losing requests due to DynamoDB capacity
limitations. The Lambda 可以 be configured to retrieve messages from the SQS and 寫入 them to DynamoDB at a controlled rate, allowing
DynamoDB to handle the requests within its provisioned capacity. Th是 approach 提供 resilience to spikes in 流量 and ensures that requests
是 not lost during periods of high demand.
按讚 4 次 
 cookieMr 1 year, 1 month ago
選擇答案： D
Th是 solution 可以 handle bursts of incoming requests more effectively and reduce the chances of losing requests due to DynamoDB capacity
limitations. The Lambda 可以 be configured to retrieve messages from the SQS and 寫入 them to DynamoDB at a controlled rate, allowing
DynamoDB to handle the requests within its provisioned capacity. Th是 approach 提供 resilience to spikes in 流量 and ensures that requests
是 not lost during periods of high demand. 
 
A. It limits 可以 help control the request rate, but it may lead to an increase in errors and affect the user experience. Throttling alone may not be
sufficient to address the availability issues and prevent the loss of requests. 
 
B. It 可以 improve read performance but does not directly address the availability issues and loss of requests. It focuses on optimizing read
operations rather than buffering writes. 
 
C. It may help with querying the user requests efficiently, but it does not directly solve the availability issues or prevent the loss of requests. It is
more focused on data retrieval rather than buffering writes.
按讚 3 次 
 studynoplay 1 year, 2 months ago
選擇答案： D
社群投票分布
D (98%)


# 第 580 頁

DAX 是 for reads
按讚 3 次 
 smartegnine 1 year, 1 month ago
DAX 是 not ideal for the following types of applications: 
 
Applications that require strongly consistent reads (or that cannot tolerate eventually consistent reads). 
 
Applications that do not require microsecond response 次 for reads, or that do not need to offload repeated 讀取 activity from underlying
tables. 
 
Applications 那是 write-intensive, or that do not perform much 讀取 activity. 
 
Applications 那是 already 使用 a different caching solution with DynamoDB, and 是 使用 their own client-side logic for working with that
caching solution.
按讚 2 次 
 dark_¬rzen 1 year, 6 months ago
選擇答案： D
D 因為 SQS 是 the cheapest way. First 1,000,000 requests 是 free each month. 
 
Question states: "該公司 provisioned as much DynamoDB throughput as its budget allows"
按讚 3 次 
 Wajif 1 year, 7 months ago
選擇答案： D
D 是 more likely to fix th是 problem as SQS queue has the ability to wait (buffer) for consumer to notify that the request or message has been
processed.
按讚 1 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
選擇答案： D
To address the issue of lost user requests and improve the availability of the API, the solutions architect 應該 use the Amazon Simple Queue
Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB. 選項 D (correct answer) 
 
By 使用 an SQS queue and Lambda, the solutions architect 可以 decouple the API front end from the processing microservices and improve the
overall scalability and availability of the system. The SQS queue acts as a buffer, allowing the API front end to continue accepting user requests
even if the processing microservices 是 experiencing high workloads or 是 temporarily unavailable. The Lambda function 可以 then retrieve
requests from the SQS queue and 寫入 them to DynamoDB, ensuring that all user requests 是 stored and processed. Th是 approach allows the
company to scale the processing microservices independently from the API front end, ensuring that the API remains available to users even during
periods of high demand.
按讚 4 次 
 alect096 1 year, 7 months ago
選擇答案： B
I would go to B : https://aws.amazon.com/es/blogs/資料庫/amazon-dynamodb-accelerator-dax-a-read-throughwrite-through-cache-for-
dynamodb/
按讚 1 次 
 ruqui 1 year ago
That's wrong. The document you mentioned explained it very clearly:  
"Whereas both read-through and write-through caches address read-heavy workloads, a write-back (or write-behind) cache 是 designed to
address write-heavy workloads. Note that DAX 是 not a write-back cache currently"
按讚 2 次 
 BENICE 1 year, 7 months ago
D 是 正確 answer
按讚 1 次 
 NikaCZ 1 year, 7 months ago
選擇答案： D
D. 使用 the Amazon Simple Queue Service (Amazon SQS) queue and Lambda to buffer writes to DynamoDB.
按讚 1 次 
 career360guru 1 year, 7 months ago
選擇答案： D
選項 D 是 right answer
按讚 1 次 
 alexfk 1 year, 7 months ago
Why not B? DAX. 
 
"When you’re developing against DAX, instead of pointing your 應用程式 at the DynamoDB endpoint, you point it at the DAX endpoint, and DA
handles the rest. As a read-through/write-through cache, DAX seamlessly intercepts the API calls that an 應用程式 normally makes to DynamoDB
so that both 讀取 and 寫入 activity 是 reflected in the DAX cache." 


# 第 581 頁

 
https://aws.amazon.com/es/blogs/資料庫/amazon-dynamodb-accelerator-dax-a-read-throughwrite-through-cache-for-dynamodb/
按讚 1 次 
 ruqui 1 year ago
B 是 wrong 因為 of this:  
 
"Whereas both read-through and write-through caches address read-heavy workloads, a write-back (or write-behind) cache 是 designed to
address write-heavy workloads. Note that DAX 是 not a write-back cache currently"
按讚 1 次 
 AgboolaKun 1 year, 3 months ago
It 是 not DAX 因為 of the company's budget restriction associated with the DynamoDB. Th是 是 a requirement in the question. DynamoDB
charges for DAX capacity by the hour and your DAX 執行個體 run with no long-term commitments. Please refer to:
https://aws.amazon.com/dynamodb/pricing/provisioned/#.E2.80.A2_DynamoDB_Accelerator_.28DAX.29
按讚 2 次 
 akosigengen 1 year, 8 months ago
yeah I though the answer 是 also DAX.
按讚 1 次 
 leonnnn 1 year, 8 months ago
選擇答案： D
Using SQS 應該 be the answer.
按讚 3 次 
 nVizzz 1 year, 8 months ago
Why not DAX? Could somebody explain?
按讚 1 次 
 Rameez1 1 year, 8 months ago
DAX helps in reducing the 讀取 loads from DynamoDB, here we need a solution to handle 寫入 requests, which 是 well handled by SQS and
Lamda to buffer writes on DynamoDB.
按讚 4 次 
 bmofo 1 year, 8 months ago
key noted issue 是 "losing user requests" which 是 resolved with SQS
按讚 5 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
Using DynamoDB Accelerator (DAX) and Lambda to buffer writes to DynamoDB, may improve the 寫入 performance of the system, but it
does not 提供 the same level of scalability and availability as 使用 an SQS queue and Lambda.  
 
Hence, 選項 B 是 incorrect.
按讚 1 次 
 jambajuice 1 year, 8 months ago
選擇答案： D
Answer d
按讚 2 次 


# 第 582 頁

主題 1
題目 #208
某公司 需要 move data from an Amazon EC2 執行個體 to an Amazon S3 bucket. 該公司 必須 ensure that no API calls and no
data 是 routed through public internet routes. Only the EC2 執行個體 可以 have access to upload data to the S3 bucket.
哪一個解決方案可滿足這些需求？
A. 建立 an interface VPC endpoint for Amazon S3 in the subnet where the EC2 執行個體 是 located. 附加 a resource policy to the S3
bucket to only allow the EC2 執行個體’s IAM role for access.
B. 建立 a gateway VPC endpoint for Amazon S3 in the Availability Zone where the EC2 執行個體 是 located. 附加 appropriate security
groups to the endpoint. Attach a resource policy to the S3 bucket to only allow the EC2 執行個體’s IAM role for access.
C. Run the nslookup tool from inside the EC2 執行個體 to obtain the private IP address of the S3 bucket’s service API endpoint. 建立 a
route in the VPC route table to 提供 the EC2 執行個體 with access to the S3 bucket. Attach a resource policy to the S3 bucket to only
allow the EC2 執行個體’s IAM role for access.
D. 使用 the AWS 提供d, publicly available ip-ranges.json ¬le to obtain the private IP address of the S3 bucket’s service API endpoint.
Create a route in the VPC route table to 提供 the EC2 執行個體 with access to the S3 bucket. Attach a resource policy to the S3 bucket
to only allow the EC2 執行個體’s IAM role for access.
正確答案： B 
 SSASSWS 高票  1 year, 8 months ago
選擇答案： A
I think answer 應該 be A and not B. 
as we cannot "Attach a security groups to a gateway endpoint."
按讚 35 次 
 A_New_Guy 1 year, 7 months ago
It's possible: 
 
https://aws.amazon.com/premiumsupport/knowledge-center/connect-s3-vpc-endpoint/
按讚 4 次 
 kruasan 1 year, 3 months ago
No, it’s not
按讚 3 次 
 smartegnine 1 year, 1 month ago
Create a security group that allows the resources in your VPC to communicate with the endpoint network interfaces for the VPC
endpoint. To ensure that tools such as the AWS CLI 可以 make requests over HTTPS from resources in the VPC to the AWS service, the
security group 必須 allow inbound HTTPS 流量. 
 
 
For Security groups, select the security groups to associate with the endpoint network interfaces for the VPC endpoint. By default, we
associate the default security group for the VPC.
按讚 1 次 
 slackbot 11 months, 2 weeks ago
th是 是 valid for interface endpoint, not for gateway endpoint, which option B mentioned
按讚 2 次 
 markw92 1 year, 1 month ago
Gateway endpoint 必須 be used as a target in a route table does not use security groups.
按讚 6 次 
 Iconique 10 months, 1 week ago
Go to console and test it yourself! With Interface Endpoint you 可以 add security groups.
按讚 2 次 
 Buruguduystunstugudunstuy 高票  1 year, 7 months ago
選擇答案： B
The 正確 solution 以滿足 the requirements 是 選項 B. A gateway VPC endpoint for Amazon S3 應該 be created in the Availability Zone
where the EC2 執行個體 是 located. Th是 將會 allow the EC2 執行個體 存取 the S3 bucket directly, without routing through the public internet.
社群投票分布
A (57%)
B (43%)


# 第 583 頁

The endpoint 應該 also be configured with appropriate security groups to allow access to the S3 bucket. Additionally, a resource policy should
be attached to the S3 bucket to only allow the EC2 執行個體's IAM role for access.
按讚 33 次 
 Buruguduystunstugudunstuy 1 year, 7 months ago
選項 A 是 錯誤 因為 an interface VPC endpoint for Amazon S3 would not 提供 a direct connection between the EC2 執行個體 and
the S3 bucket.  
 
選項 C 是 錯誤 因為 使用 the nslookup tool to obtain the private IP address of the S3 bucket's service API endpoint would not
提供 a secure connection between the EC2 執行個體 and the S3 bucket.  
 
選項 D 是 錯誤 因為 使用 the ip-ranges.json 檔案 to obtain the private IP address of the S3 bucket's service API endpoint 是 not a
secure method to connect the EC2 執行個體 to the S3 bucket.
按讚 3 次 
 mhmt4438 1 year, 7 months ago
An interface VPC endpoint does 提供 a direct connection between the EC2 執行個體 and the S3 bucket. It enables private communication
between 執行個體 in your VPC and resources in other services without requiring an internet gateway, a NAT device, or a VPN connection. 
 
選項 A , which recommends creating an interface VPC endpoint for Amazon S3 in the subnet where the EC2 執行個體 是 located and
attaching a resource policy to the S3 bucket to only allow the EC2 執行個體's IAM role for access, 是 the 正確 solution for the given
scenario. It meets the requirement to ensure that no API calls and no data 是 routed through public internet routes and that only the EC2
執行個體 可以 have access to upload data to the S3 bucket.
按讚 6 次 
 Omok 1 year, 6 months ago
In support, see https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html#types-of-vpc-endpoints
for-s3
按讚 7 次 
 ChrisG1454 1 year, 5 months ago
There 是 two types VPC Endpoint: 
 
Gateway endpoint 
Interface endpoint 
 
A Gateway endpoint: 
 
1) Helps you to securely connect to Amazon S3 and DynamoDB 
2) Endpoint serves as a target in your route table for 流量 
3) Provide access to endpoint (endpoint, identity and resource policies) 
 
An Interface endpoint: 
 
1) Help you to securely connect to AWS services EXCEPT FOR Amazon S3 and DynamoDB 
2) Powered by PrivateLink (keeps network 流量 within AWS network) 
3) Needs a elastic network interface (ENI) (entry point for 流量)
按讚 31 次 
 slackbot 11 months, 2 weeks ago
interface endpoint exists for S3 as well
按讚 7 次 
 AWS_Debu 最新  10 hours, 16 minutes ago
Answer Should be B. You 可以 attached security group with VPC endpoint. Th是 是 not the point. For S3 you need to create gateway VPC endpoint
not interface VPC endpoint.
按讚 1 次 
 tom_cruise 3 days, 7 hours ago
Gateway endpoints do not enable AWS PrivateLink. So the answer 是 A.
按讚 1 次 
 sonlduet 4 days, 22 hours ago
It's definitely A, B 是 wrong 因為 we configure route table for Gateway VPC Endpoint, not security group or subnet
按讚 1 次 
 jatric 3 weeks, 5 days ago
選擇答案： B
Gateway endpoint would be sufficient here which 是 specifically for S3 and dynamo DB and don't incurr any charges. Interface VPC endpoint migh
be usefull if a scneario with cross region or on-premises connectivity within private VPC 
https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html
按讚 1 次 
 Hightower_IT 3 weeks, 5 days ago
選擇答案： A
The wording in B says create a gateway VPC endpoint in the AZ, surely it 應該 say in the VPC...... 
L
按讚 1 次 


# 第 584 頁

 ChymKuBoy 1 month, 1 week ago
選擇答案： A
A 無誤
按讚 1 次 
 a7md0 1 month, 1 week ago
選擇答案： B
DynamoDB & S3 uses Gateway VPC endpoint (not interface)
按讚 2 次 
 Duckydoo 1 month, 2 weeks ago
選擇答案： A
You associate a gateway endpoint with a VPC and its subnets (so the prefix list 可以 be added to the appropriate routing tables). You cannot specif
an AZ or associate an SG when creating a gateway endpoint.
按讚 3 次 
 Rhydian25 1 month, 3 weeks ago
選擇答案： A
It 必須 be Interface VPC endpoint. As the Gateway VPC endpoint requires a S3 pubilc IP address to work: 
https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html 
 
If the bucket has a public IP address, it means the bucket 是 publicy accessible, which 是 not the case here.
按讚 2 次 
 rohitph 1 month, 3 weeks ago
選擇答案： A
we cannot "Attach a security groups to a gateway endpoint."
按讚 2 次 
 lofzee 2 months, 1 week ago
im almost certain that the answers in th是 question 是 written slightly wrong. 
那裡是 no reason (based on the question), for you to select A. 
Only EC2 needs access to S3, 99% of the time you'd use a gateway endpoint. 
 
Reasons you might use an interface endpoint are: 
- requirement of on-premise access to S3 
- requirement of access from another VPC in another region 使用 peering or transit gateway 
- requirement of 使用 specific endpoint S3 DNS names 
- use of private IPs from your VPC 存取 S3 
 
based on the above, i believe the answer to be B, its just written incorrectly with the addition of the security groups part.
按讚 1 次 
 ManikRoy 3 months ago
選擇答案： A
選項 A as security group 是 not applicable for Gateway end point.
按讚 1 次 
 Solomon2001 3 months ago
選擇答案： A
Explanation: 
 
選項 A: 
Interface VPC endpoint for Amazon S3 ensures that the data transfer between the EC2 執行個體 and the S3 bucket stays within the AWS network,
avoiding the public internet. 
By attaching a resource policy to the S3 bucket to only allow access from the EC2 執行個體's IAM role, you ensure that only the EC2 執行個體 can
upload data to the S3 bucket. 
選項 B: 
 
Gateway VPC endpoint for Amazon S3 doesn't ensure that the data transfer stays within the AWS network; it 可以 still use the public internet. 
Although you 可以 attach security groups to the endpoint, it doesn't guarantee that the data transfer won't use public internet routes.
按讚 1 次 
 7ce90e0 3 months ago
選擇答案： B
B. Interface endpoints 是 for private link and require ip address. gateway endpoints 是 for internal services and don't need ip address.
https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/what-are-vpc-endpoints.html
按讚 2 次 
 MehulKapadia 3 months, 3 weeks ago
選擇答案： A
選項 B 是 conf使用 but not after you see the fine-print.  
- User cannot create Gateway endpoint in any specific Availability Zone, User only specify under which VPC it 需要 be created.  
- User do not select/attach security group to Gateway Endpoint, as th是 gateway only works be adding destination prefix list(S3) to gateway
endpoint route. 


# 第 585 頁

 
正確答案： A
按讚 2 次 


# 第 586 頁

主題 1
題目 #209
某位 Solutions Architect 是 designing the architecture of a new 應用程式 being deployed to the AWS Cloud. 該應用程式 將會 run on Amazon
EC2 On-Demand Instances and 將會 automatically scale across multiple Availability Zones. The EC2 執行個體 將會 scale up and down
frequently throughout the day. An Application Load Balancer (ALB) 將會 handle the load distribution. The architecture 需要 support
distributed session data management. 該公司 是 willing to make changes to code if needed.
What 應該 the solutions architect do to ensure that the architecture supports distributed session data management?
A. 使用 Amazon ElastiCache to manage and store session data.
B. 使用 session a®nity (sticky sessions) of the ALB to manage session data.
C. 使用 Session Manager from AWS Systems Manager to manage the session.
D. 使用 the GetSessionToken API operation in AWS Security Token Service (AWS STS) to manage the session.
正確答案： A 
 Buruguduystunstugudunstuy 高票  1 year, 7 months ago
選擇答案： A
The 正確答案 是 A. Use Amazon ElastiCache to manage and store session data. 
 
In order to support distributed session data management in th是 scenario, 它是 necessary 使用 a distributed data store such as Amazon
ElastiCache. Th是 將會 allow the session data to be stored and accessed by multiple EC2 執行個體 across multiple Availability Zones, which is
necessary for a scalable and 高可用 architecture. 
 
選項 B, 使用 session affinity (sticky sessions) of the ALB, would not be sufficient 因為 th是 would only allow the session data to be stored on
a single EC2 執行個體, which would not be able to scale across multiple Availability Zones. 
 
Options C and D, 使用 Session Manager and the GetSessionToken API operation in AWS STS, 是 not related to session data management and
would not be appropriate solutions for th是 scenario.
按讚 30 次 
 Hkayne 最新  3 months, 1 week ago
選擇答案： A
A 是 the 正確答案 因為 it allows to manage distributed sessions
按讚 2 次 
 awsgeek75 7 months ago
選擇答案： A
A 是 in scope of question as company 是 willing to make code changes.  
B would have been 正確 if no code changes were allowed and scaling could be compromised. 
C 是 wrong technology (cloud management) 
D 是 also wrong technology (AWS IAM or account management).
按讚 4 次 
 Michael_Li 8 months ago
A 是 正確 
B 是 not 正確 as session affinity allow web user stick to a EC2 執行個體 for a period time, that EC2 could go down then the session data 將會 lost,
so doesn't fit th是 use case 
C 是 wrong as Session Manager 是 for admins users to manage EC2 CLI access, it's not for web end users 
D 是 wrong as GetSessionToken API 是 for use case such as you need to grant user access to a S3 bucket with customized code
按讚 1 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： A
Yap agree with go you guys, th是 是 one of the use cases for Amazon ElastiCache. 
It was designed 儲存 ephemeral session data to quickly personalize gaming, e-commerce, social media, and online 應用程式 with
microsecond response 次. 
https://aws.amazon.com/elasticache/#:~:text=Store-,ephemeral,-session%20data%20to
按讚 2 次 
 Cloud_A 6 months, 3 weeks ago
https://aws.amazon.com/elasticache/#:~:text=Store%20ephemeral%20session%20data%20to%20quickly%20personalize%20gaming%2C%20e
%2Dcommerce%2C%20social%20media%2C%20and%20online%20applications%20with%20microsecond%20response%20次.
按讚 1 次 
社群投票分布
A (100%)


# 第 587 頁

 Guru4Cloud 10 months, 3 weeks ago
選擇答案： A
The 正確答案 是 A. Use Amazon ElastiCache to manage and store session data.
按讚 1 次 
 cookieMr 1 year ago
選擇答案： A
ElastiCache 是 a managed in-memory data store service 那是 well-suited for managing session data in a distributed architecture. It 提供 high
performance, scalable, and durable 儲存 for session data, allowing multiple EC2 執行個體 存取 and sh是 session data seamlessly. By 使用
ElastiCache, the 應用程式 可以 offload the session management workload from the EC2 執行個體 and leverage the distributed caching
capabilities of ElastiCache for improved scalability and performance. 
 
選項 B, 使用 session affinity (sticky sessions) of the ALB, 是 not the best choice for distributed session data management 因為 it ties each
session to a specific EC2 執行個體. As the 執行個體 scale up and down frequently, it 可以 lead to uneven load distribution and may not 提供
optimal scalability. 
 
Options C and D 是 not applicable for managing session data. AWS Systems Manager's Session Manager 是 primarily used for secure remote shel
access to EC2 執行個體, and the AWS STS GetSessionToken API operation 是 used for temporary security credentials and not session data
management.
按讚 1 次 
 cookieMr 1 year, 1 month ago
ElastiCache 是 a managed in-memory data store service 那是 well-suited for managing session data in a distributed architecture. It 提供 high
performance, scalable, and durable 儲存 for session data, allowing multiple EC2 執行個體 存取 and sh是 session data seamlessly. By 使用
ElastiCache, the 應用程式 可以 offload the session management workload from the EC2 執行個體 and leverage the distributed caching
capabilities of ElastiCache for improved scalability and performance. 
 
選項 B, 使用 session affinity (sticky sessions) of the ALB, 是 not the best choice for distributed session data management 因為 it ties each
session to a specific EC2 執行個體. As the 執行個體 scale up and down frequently, it 可以 lead to uneven load distribution and may not 提供
optimal scalability. 
 
Options C and D 是 not applicable for managing session data. AWS Systems Manager's Session Manager 是 primarily used for secure remote shel
access to EC2 執行個體, and the AWS STS GetSessionToken API operation 是 used for temporary security credentials and not session data
management.
按讚 2 次 
 Abrar2022 1 year, 1 month ago
選擇答案： A
A. 使用 Amazon ElastiCache to manage and store session data. 
- Correct. - Session data 是 managed at the application-layer, and a distributed cache 應該 be used 
 
B. 使用 session affinity (sticky sessions) of the ALB to manage session data. 
- Wrong. Th是 tightly couples the individual EC2 執行個體 to the session data, and requires additional logic in the ALB. When scale-in happens, the
session data stored on individual EC2 執行個體 是 destroyed
按讚 1 次 
 techhb 1 year, 6 months ago
選擇答案： A
correct answer 是 A as 執行個體 是 getting up and down.
按讚 1 次 
 inseong 1 year, 7 months ago
야 근데 210문제는 어딧냐 ..?
按讚 1 次 
 noche 1 year, 5 months ago
https://www.examtopics.com/discussions/amazon/view/94992-exam-aws-certified-solutions-architect-associate-saa-c03/ 
여기 임마
按讚 1 次 
 NikaCZ 1 year, 7 months ago
選擇答案： A
Amazon ElastiCache to manage and store session data.
按讚 1 次 
 k1kavi1 1 year, 7 months ago
選擇答案： A
https://www.examtopics.com/discussions/amazon/view/46412-exam-aws-certified-solutions-architect-associate-saa-c02/
按讚 1 次 
 Shasha1 1 year, 7 months ago
A 
Amazon ElastiCache to manage and store session data. Th是 solution 將會 allow the 應用程式 to automatically scale across multiple Availability
Zones without losing session data, as the session data 將會 be stored in a cache 那是 accessible from any EC2 執行個體. Additionally, 使用 Amazo
ElastiCache 將會 enable the company to easily manage and scale the cache as needed, without requiring any changes to the 應用程式 code.
選項 C 是 not 正確 因為,Session Manager from AWS Systems Manager 將會 not 提供 the necessary support for distributed session data


# 第 588 頁

management. Session Manager 是 a tool for managing and tracking sessions on EC2 執行個體, but it does not 提供 a mechanism for storing and
managing session data in a distributed environment.
按讚 3 次 
 TelaO 1 year, 8 months ago
better justification found here... 
https://www.examtopics.com/discussions/amazon/view/46412-exam-aws-certified-solutions-architect-associate-saa-c02/
按讚 3 次 
 kmaneith 1 year, 8 months ago
why not C?
按讚 1 次 
 leonnnn 1 year, 8 months ago
選擇答案： A
ALB sticky session 可以 keep request accessing to the same backend application. But it says "distributed session management" and company "will
to change code", so I think A 是 better
按讚 3 次 


# 第 589 頁

主題 1
題目 #210
某公司 offers a food delivery service 那是 growing rapidly. Because of the growth, the company’s order processing system is
experiencing scaling problems during peak tra®c hours. The current architecture includes the following:
• A group of Amazon EC2 執行個體 that run in an Amazon EC2 Auto Scaling group to collect orders from the application
• Another group of EC2 執行個體 that run in an Amazon EC2 Auto Scaling group to ful¬ll orders
The order collection process occurs quickly, but the order ful¬llment process 可以 take longer. Data 必須 not be lost 因為 of a scaling
event.
某位 Solutions Architect 必須 ensure that the order collection process and the order ful¬llment process 可以 both scale properly during peak
tra®c hours. 此解決方案 必須 optimize utilization of the company’s AWS resources.
哪一個解決方案可滿足這些需求？
A. 使用 Amazon CloudWatch metrics to monitor the CPU of each 執行個體 in the Auto Scaling groups. Con¬gure each Auto Scaling group’s
minimum capacity according to peak workload values.
B. 使用 Amazon CloudWatch metrics to monitor the CPU of each 執行個體 in the Auto Scaling groups. Con¬gure a CloudWatch alarm to
invoke an Amazon Simple Noti¬cation Service (Amazon SNS) topic that creates additional Auto Scaling groups on demand.
C. 佈建 two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order ful¬llment. Con¬gure
the EC2 執行個體 to poll their respective queue. Scale the Auto Scaling groups based on noti¬cations that the queues send.
D. 佈建 two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order ful¬llment. Con¬gure
the EC2 執行個體 to poll their respective queue. Create a metric based on a backlog per 執行個體 calculation. Scale the Auto Scaling
groups based on th是 metric.
正確答案： C 
 TungPham 高票  1 year, 5 months ago
選擇答案： D
When the backlog per 執行個體 reaches the target value, a scale-out event 將會 happen. Because the backlog per 執行個體 是 already 150 messages
(1500 messages / 10 執行個體), your group scales out, and it scales out by five 執行個體 to maintain proportion to the target value. 
Backlog per 執行個體: To calculate your backlog per 執行個體, start with the ApproximateNumberOfMessages queue attribute to determine the
length of the SQS queue (number of messages available for retrieval from the queue). Divide that number by the fleet's running capacity, which
for an Auto Scaling group 是 the number of 執行個體 in the InService state, to get the backlog per 執行個體. 
https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-使用-sqs-queue.html
按讚 13 次 
 n43u435b543ht2b 高票  12 months ago
選擇答案： D
C 是 錯誤 as scaling based on the number of "notifications" doesn't make logical sense. Th是 means that both the order collection and
fulfilment 執行個體 would scale in parallel, but they have clearly said that the collection 是 processing quickly while the fulfilment 是 struggling.
Therefore, we 應該 scale the pool when 那裡是 a backlog building in a respective queue - not just based on the number of incoming requests.
按讚 8 次 
 jatric 最新  3 weeks, 5 days ago
選擇答案： C
both have their own queue. Instance processing order 將會 be scale up based on the queue length that collect messages that collected by other
queue.
按讚 1 次 
 lofzee 2 months, 1 week ago
選擇答案： D
not C as the questions state that only one system 是 struggling, so C doesnt really solve the problem. 
D does.
按讚 1 次 
 Uzbekistan 4 months ago
選擇答案： D
社群投票分布
D (88%)
12%


# 第 590 頁

Decoupling with Amazon SQS: By 使用 Amazon SQS queues for order collection and order fulfillment, the system 可以 decouple the components
ensuring that orders 是 not lost, even during scaling events. Orders 是 queued up and processed in a reliable and scalable manner. 
Scalability Based on Queue Backlog: By creating a metric based on the backlog per 執行個體 calculation, the system 可以 monitor the workload of
each 執行個體 in the Auto Scaling groups. Th是 allows for dynamic scaling based on the workload, ensuring that additional 執行個體 是 launched
when the backlog increases and terminated when the backlog decreases. Optimization of AWS Resources: Th是 solution optimizes the utilization
of AWS resources by dynamically scaling the Auto Scaling groups based on the actual workload, preventing over-provisioning or under-
provisioning of 執行個體. It ensures that the system 可以 handle peak 流量 efficiently without incurring unnecessary costs.
按讚 1 次 
 bujuman 5 months, 3 weeks ago
選擇答案： D
D 是 the most appropriate response base on https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-使用-sqs-queue.html
按讚 1 次 
 Guru4Cloud 10 months, 3 weeks ago
選擇答案： D
D. 佈建 two Amazon Simple Queue Service (Amazon SQS) queues: one for order collection and another for order fulfillment. 設定 the
EC2 執行個體 to poll their respective queue. Create a metric based on a backlog per 執行個體 calculation. Scale the Auto Scaling groups based on
th是 metric.
按讚 4 次 
 argl1995 1 year, 1 month ago
SQS auto-scales by default so I don't think we need to mention it explicitly. 選項 D 應該 be correct.
按讚 1 次 
 cookieMr 1 year, 1 month ago
選擇答案： D
A. Th是 approach focuses solely on CPU utilization, which may not accurately reflect the scaling needs of the order collection and fulfillment
processes. It does not address the need for decoupling and reliable message processing. 
 
B. While th是 approach incorporates alarms to trigger additional Auto Scaling groups, it lacks the decoupling and reliable message processing
提供d by 使用 SQS queues. It may lead to inefficient scaling and potential data loss. 
 
C. Although 使用 SQS queues 是 a step in the right direction, scaling solely based on queue notifications may not 提供 optimal resource
utilization. It does not consider the backlog per 執行個體 and does not allow for fine-grained control over scaling. 
 
Overall, option D, which involves 使用 SQS queues for order collection and fulfillment, creating a metric based on backlog per 執行個體
calculation, and scaling the Auto Scaling groups accordingly, 是 the most suitable solution to address the scaling problems while optimizing
resource utilization and ensuring reliable message processing.
按讚 4 次 
 studynoplay 1 year, 2 months ago
選擇答案： D
C 是 incorrect. "based on notifications that the queues send" SQS does not send notification
按讚 3 次 
 mandragon 1 year, 3 months ago
選擇答案： C
D 是 not 正確 因為 it requires more 營運負擔 and complexity than option C which 是 simpler and more cost-effective. It uses the
existing queue metrics 那是 提供d by Amazon SQS and does not require creating or publishing any custom metrics. You 可以 use target
tracking scaling policies to automatically maintain a desired backlog per 執行個體 ratio without having to calculate or monitor it yourself.
按讚 2 次 
 pentium75 7 months, 1 week ago
"You 可以 use target tracking scaling policies" but you don't with option C. What 是 "scaling based on notifications that the queues send"?
Where do they send these notifications to?
按讚 1 次 
 JayBee65 1 year, 6 months ago
選擇答案： D
Scale based on queue length
按讚 2 次 
 Rudraman 1 year, 6 months ago
answer 是 D. 
read question again
按讚 2 次 
 LuckyAro 1 year, 6 months ago
選擇答案： D
The number of 執行個體 in your Auto Scaling group 可以 be driven by how long it takes to process a message and the acceptable amount of
latency (queue delay).  
此解決方案 是 使用 a backlog per 執行個體 metric with the target value being the acceptable backlog per 執行個體 to maintain.
按讚 1 次 
 Aseem8888 1 year, 6 months ago


# 第 591 頁

選擇答案： D
D 是 correct
按讚 1 次 
 Rudraman 1 year, 6 months ago
C 
Need to Auto- 
Scale Queue of SQS
按讚 1 次 
 JayBee65 1 year, 6 months ago
Why would you scale based on " Scale the Auto Scaling groups based on notifications that the queues send."? Would it not make 1000 次
more sense to scale base don queue length "Create a metric based on a backlog per 執行個體 calculation"?
按讚 3 次 
 techhb 1 year, 6 months ago
選擇答案： D
I think its D as here we 是 creating new metric to calculate load on each EC2 執行個體.
按讚 2 次 


# 第 592 頁

主題 1
題目 #211
某公司 hosts multiple production applications. One of the 應用程式 consists of resources from Amazon EC2, AWS Lambda, Amazon
RDS, Amazon Simple Noti¬cation Service (Amazon SNS), and Amazon Simple Queue Service (Amazon SQS) across multiple AWS Regions. All
company resources 是 tagged with a tag name of “application” and a value that corresponds to each application. 某位 Solutions Architect must
提供 the quickest solution for identifying all of the tagged components.
哪一個解決方案可滿足這些需求？
A. 使用 AWS CloudTrail to generate a list of resources with the application tag.
B. 使用 the AWS CLI to query each service across all Regions to report the tagged components.
C. Run a query in Amazon CloudWatch Logs Insights to report on the components with the application tag.
D. Run a query with the AWS Resource Groups Tag Editor to report on the resources globally with the application tag.
正確答案： D 
 cookieMr 高票  1 year, 1 month ago
選擇答案： D
A 是 not the quickest solution 因為 CloudTrail primarily focuses on capturing and logging API activity. While it 可以 提供 information about
resource changes, it may not 提供 a comprehensive and quick way to identify all the tagged components across multiple services and Regions
 
B involves manually querying each service 使用 the AWS CLI, which 可以 be time-consuming and cumbersome, especially when dealing with
multiple services and Regions. It 是 not the most efficient solution for quickly identifying tagged components. 
 
C 是 focused on analyzing logs rather than directly identifying the tagged components. While CloudWatch Logs Insights 可以 help extract
information from logs, it may not 提供 a straightforward and quick way to gather a consolidated list of all tagged components across different
services and Regions. 
 
D 是 the quickest solution as it leverages the Resource Groups Tag Editor, which 是 specifically designed for managing and organizing resources
based on tags. It offers a centralized and efficient approach to generate a report of tagged components across multiple services and Regions.
按讚 20 次 
 TariqKipkemei 最新  10 months, 2 weeks ago
選擇答案： D
Tags 是 key and value pairs that act as metadata for organizing your AWS resources
按讚 2 次 
 Guru4Cloud 10 months, 3 weeks ago
選擇答案： D
D. Run a query with the AWS Resource Groups Tag Editor to report on the resources globally with the application tag
按讚 3 次 
 Bmarodi 1 year, 2 months ago
選擇答案： D
某位 Solutions Architect 可以 提供 the quickest solution for identifying all of the tagged components by running running a 查詢 with the AWS
Resource Groups Tag Editor to report on the resources globally with the 應用程式 tag, hence the option D 是 right answer.
按讚 2 次 
 Dondozzy 1 year, 4 months ago
選擇答案： D
The answer 是 D
按讚 2 次 
 sh0811 1 year, 6 months ago
選擇答案： D
D가 맞습니다.
按讚 2 次 
 Training4aBetterLife 1 year, 6 months ago
選擇答案： D
https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html
按讚 3 次 
社群投票分布
D (100%)


# 第 593 頁

 Rudraman 1 year, 6 months ago
Answer 是 D.
按讚 1 次 
 techhb 1 year, 6 months ago
選擇答案： D
validated  
https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html
按讚 1 次 
 kbaruu 1 year, 6 months ago
選擇答案： D
D 是 correct
按讚 1 次 
 waiyiu9981 1 year, 6 months ago
選擇答案： D
https://www.examtopics.com/discussions/amazon/view/51352-exam-aws-certified-solutions-architect-associate-saa-c02/
按讚 1 次 


# 第 594 頁

主題 1
題目 #212
某公司 需要 export its 資料庫 once a day to Amazon S3 for other teams 存取. The exported object size varies between 2 GB
and 5 GB. The S3 access pattern for the data 是 variable and changes rapidly. The data 必須 be immediately available and 必須 remain
accessible for up to 3 months. 該公司 needs the most cost-effective solution that 將會 not increase retrieval time.
Which S3 儲存 class 應該 the company use 以滿足 these requirements?
A. S3 Intelligent-Tiering
B. S3 Glacier Instant Retrieval
C. S3 Standard
D. S3 Standard-Infrequent Access (S3 Standard-IA)
正確答案： A 
 techhb 高票  1 year, 6 months ago
選擇答案： A
S3 Intelligent-Tiering monitors access patterns and moves objects that have not been accessed for 30 consecutive days to the Infrequent Access
tier and after 90 days of no access to the Archive Instant Access tier.
按讚 19 次 
 Devsin2000 1 year, 2 months ago
https://aws.amazon.com/getting-started/hands-on/getting-started-使用-amazon-s3-intelligent-tiering/
按讚 5 次 
 pentium75 高票  7 months, 1 week ago
選擇答案： A
I think it cannot be clearly answered 因為 we know that the 'access pattern 是 variable and changes rapidly', but ultimately it depends on the
total number and volume of accesses. All four options meet the "not increase retrieval time" requirement (even Glacier Instant Retrieval has "the
same latency and access time as S3 Standard"). If data would be rarely accessed, B would be cheapest. If it would be constantly accessed, C would
be cheapest (we'd pay the Intelligent Tiering fee but it would never move anything to a cheaper tier). Inbetween it would be D. 
 
But I guess the key 是 Amazon's clear recommendation 使用 Intelligent Tiering (A) for "unknown or changing access" patterns, which matches the
statement in the question.
按讚 7 次 
 lofzee 最新  2 months, 1 week ago
選擇答案： A
unknown / changing access patterns = intelligent tiering. memorise
按讚 2 次 
 ManikRoy 3 months ago
選擇答案： A
Unpredictable access pattern - Intelligent tiering
按讚 2 次 
 MehulKapadia 3 months, 3 weeks ago
選擇答案： A
Correct Answer A: 
When data access pattern 是 not known then Intelligent-tiering 可以 help by monitoring data-access pattern and move object internally accordingly
an still ensure faster retrieval. Also There 是 no object retrieval fees/changes for S3 Intelligent Tier(So cost savings). 
 
選項 C 是 not a valid answer 因為 name itself says Infrequent Access(IA): S3 Standard-IA 是 for data 那是 accessed less frequently.
按讚 1 次 
 Uzbekistan 4 months, 1 week ago
選擇答案： C
Immediate Availability: S3 Standard 提供 immediate access to the data upon upload. Th是 ensures that the exported 資料庫 是 immediately
available for other teams 存取 without any retrieval delays. 
 
Variable Access Pattern: S3 Standard 是 designed to handle variable access patterns efficiently. It 可以 accommodate rapid changes in access
patterns without any impact on performance or latency. 
 
社群投票分布
A (75%)
11%
11%


# 第 595 頁

Retention Period: S3 Standard 是 suitable for storing data that 需要 remain accessible for up to 3 months. It does not have any retrieval fees o
delays, making it ideal for th是 scenario where immediate access 是 required.
按讚 3 次 
 escalibran 4 months, 3 weeks ago
Feels like half the scenario or answers 是 missing. Where's the "remove objects after 90 days"? Intelligent Tiering has an upcharge for the
提供d convenience - does it even make sense, when objects won't remain long enough to be archived?  
Other classes trade 儲存 cost for request costs. Dependent on how often objects 是 queried, IA might make sense. Even Glacier Instant
Retrieval could come out ahead, given minimal access (and it has 90 days minimum 儲存 duration, exact fit for the description). 
 
With no further details 提供d, th是 是 just throwing darts blindly.
按讚 1 次 
 escalibran 4 months, 3 weeks ago
Given just the uncertain access patterns AND limited 儲存 time, I would argue in favor of simple S3 Standard. 
If the question mentioned that the pattern of access varies across objects, but 是 relatively consistent for the individual objects, intelligent
tiering may be worth it. Otherwise you just pay more to have objects monitored for Infrequent Access, and then suddenly become popular
after being moved.
按讚 2 次 
 MrPCarrot 5 months, 3 weeks ago
A 是 the perfect answer - The S3 access pattern for the data 是 variable and changes rapidly.
按讚 1 次 
 bujuman 5 months, 3 weeks ago
選擇答案： A
With regard to "The S3 access pattern for the data 是 variable and changes rapidly"  
Even though Answer B cooudl fifull some requirements, Answer A 是 For long-lived data that have unpredictable access patterns.
按讚 1 次 
 theochan 6 months, 2 weeks ago
選擇答案： B
"immediately available" => 
D 是 not immediately, and for cost B < A/C
按讚 2 次 
 VladanO 9 months ago
選擇答案： B 
https://aws.amazon.com/s3/storage-classes/glacier/instant-retrieval/ 
"Amazon S3 Glacier Instant Retrieval 是 an archive 儲存 class that delivers the lowest-cost 儲存 for long-lived data 那是 rarely accessed and
requires retrieval in milliseconds"
按讚 3 次 
 ivan_riqueros12 9 months, 2 weeks ago
選擇答案： A
A. El patrón de acceso a los datos es variable y cambia rápidamente = S3 Intelligent-Tiering
按讚 1 次 
 Abdou1604 9 months, 3 weeks ago
very important note , S3 Intelligent-Tiering got no retrival charges
按讚 3 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： A
access pattern for the data 是 variable and changes rapidly = S3 Intelligent-Tiering
按讚 3 次 
 Sultanoid 11 months, 1 week ago
選擇答案： C
There 是 2 viable options A and C.  
The Intelligent tearing(A) might put your data in the archive or Infrequent Acces if 它是 not used for 80 days and then used as crazy for the last 10
days of the period which 將會 cause delays in retrieval or the costs associated with 流量. 
選項 C 可以 be optimised with the Time To Live policy of 90 days and 將會 e the most efficient and reliable solution to satisfy the needs.
按讚 4 次 
 pentium75 7 months, 1 week ago
Lifecycle policies apply to all tiers, you 可以 have data deleted or archived after 3 months regardless whether 它是 in Standard or Intelligent-
Tiering.
按讚 1 次 
 mtmayer 1 year ago
Has to be C. S3 Intelligent-Tiering 是 for data with varying or unknown access needs. Not the case here. We know data 必須 be 高可用 for
30 days.
按讚 2 次 
 pentium75 7 months, 1 week ago


# 第 596 頁

Isn't "varying or unknown access needs" the same as "the access pattern 是 variable and changes rapidly"?
按讚 2 次 
 maheshudara 1 year, 1 month ago
選擇答案： A
key - "Changing access patterns"
按讚 1 次 
 maheshudara 1 year, 1 month ago
"The S3 access pattern for the data 是 variable and changes rapidly"
按讚 1 次 


# 第 597 頁

主題 1
題目 #213
某公司 developing a new mobile app. 該公司 必須 implement proper tra®c ¬ltering 來保護 its Application Load Balancer
(ALB) against common application-level 攻擊, such as cross-site scripting or SQL injection. 該公司 has minimal infrastructure and
operational staff. 該公司 需要 reduce its sh是 of the responsibility in managing, updating, and securing servers for its AWS
environment.
What 應該 a solutions architect recommend 以滿足 these requirements?
A. Con¬gure AWS WAF rules and associate them with the ALB.
B. 部署 the application 使用 Amazon S3 with public hosting enabled.
C. 部署 AWS Shield Advanced and add the ALB as a protected resource.
D. 建立 a new ALB that directs tra®c to an Amazon EC2 執行個體 running a third-party ¬rewall, which then passes the tra®c to the
current ALB.
正確答案： A 
 ShinobiGrappler 高票  1 year, 6 months ago
選擇答案： C
C --- Read and understand the question. *該公司 需要 reduce its sh是 of responsibility in managing, updating, and securing servers fo
its AWS environment* Go with AWS Shield advanced --Th是 是 a managed service that includes AWS WAF, custom mitigations, and DDoS insight.
按讚 19 次 
 abriggy 1 week, 4 days ago
WRONG. Answer 是 A. Don't let all these upvotes fool you
按讚 1 次 
 Guru4Cloud 10 months, 3 weeks ago
I dont know how th是 comment gets 11x upvotes. 
A.To filter 流量 and protect against 應用程式 攻擊 like cross-site scripting and SQL injection, the company 可以 use AWS Web Application
Firewall with managed rules on the Application Load Balancer. Th是 提供 security with minimal infrastructure and operations overhead.
按讚 20 次 
 arjundevops 1 year, 3 months ago
Brother answer 是 A, Read the question once again or ask CHATGPT for more in-depth analysis
按讚 3 次 
 rokeus 9 months, 1 week ago
I agree, both A and C answer the first demand ,where A 是 answer to the technical request., but for reducing responsibility you 將會 need shield
advance - meaning C.
按讚 2 次 
 pentium75 7 months, 1 week ago
No 因為 th是 是 about application-level 攻擊 wich requires WAF aka answer A.
按讚 3 次 
 cookieMr 高票  1 year, 1 month ago
選擇答案： A
By configuring AWS WAF rules and associating them with the ALB, the company 可以 filter and block malicious 流量 before it reaches the
application. AWS WAF offers pre-configured rule sets and allows custom rule creation 來保護 against common vulnerabilities like XSS and SQ
injection. 
 
選項 B does not 提供 the necessary security and 流量 filtering capabilities 來保護 against application-level 攻擊. It 是 more suitable fo
hosting static content rather than implementing security measures. 
 
選項 C 是 focused on DDoS 保護 rather than application-level 攻擊 like XSS or SQL injection. While AWS Shield Advanced does not
address the specific requirements mentioned in the scenario. 
 
選項 D involves maintaining and securing additional infrastructure, which goes against the requirement of reducing responsibility and relying
on minimal operational staff.
按讚 9 次 
 ChymKuBoy 最新  1 month, 1 week ago
選擇答案： A
社群投票分布
A (72%)
C (28%)


# 第 598 頁

A 無誤
按讚 1 次 
 a7md0 1 month, 1 week ago
選擇答案： A
AWS Shield Advanced for DDoS Attacks and not SQL injection which 是 protected by AWS WAF
按讚 1 次 
 ManikRoy 3 months ago
選擇答案： A
AWS WAF with managed rules.
按讚 1 次 
 Solomon2001 3 months ago
Explanation: 
 
選項 A: 
AWS WAF (Web Application Firewall) 提供 保護 against common Web 攻擊 by allowing you to create rules that block common attac
patterns such as SQL injection and cross-site scripting (XSS). 
By associating AWS WAF rules with the ALB, you 可以 protect your 應用程式 from these types of 攻擊 without managing, updating, and
securing servers yourself. 
AWS WAF 是 a managed service, so it reduces the 營運負擔 for the company. 
 
選項 C: 
 
AWS Shield Advanced 提供 DDoS protection, but it doesn't include application-level 保護 like AWS WAF does.
按讚 2 次 
 sandordini 3 months, 3 weeks ago
If you 讀取 SQL Injection, Cross-site scripting >>> Always look for: WAF
按讚 1 次 
 bujuman 5 months, 3 weeks ago
選擇答案： A
Th是 是 conf使用 "該公司 需要 reduce its sh是 of the responsibility in managing, updating, and securing servers for its AWS
environment." But could be acheived when 使用 WAF and AWS managed Rules.
按讚 2 次 
 thewalker 6 months ago
選擇答案： A
A 是 the answer.
按讚 1 次 
 farnamjam 6 months, 2 weeks ago
選擇答案： A
AWS Shield Advanced does not directly protect against XSS (cross-site scripting) or SQL injection 攻擊. It focuses on defending against
Distributed Denial of Service (DDoS) 攻擊, which aim to overwhelm resources and disrupt availability.
按讚 1 次 
 awsgeek75 7 months ago
選擇答案： A
S makes more sense as Shield Advanced (which actually contains WAF) doesn't 提供 any additional benefits apart from networks protection.
WAF 將會 still have to be configured. So just use WAF to fulfil the requirements.
按讚 2 次 
 pentium75 7 months, 1 week ago
選擇答案： A
You need to "configure AWS WAF rules and associate them with the ALB" which 是 A. AWS Shield Advance INTEGRATES with WAF, so you can
manage WAF through Shield Advanced, but still you would need to set it up and configure rules, which C does not mention.
按讚 4 次 
 Sadish 7 months, 3 weeks ago
AWS Shield 是 not only DDos and it handle Layer 3 and layer 4 including AWS WAF so C 應該 match.
按讚 1 次 
 pentium75 7 months, 1 week ago
"Shield Advanced 提供 ... integration (!) with AWS WAF", but you still need WAF. And you need WAF rules, whereever you configure them.
按讚 1 次 
 TariqKipkemei 10 months, 2 weeks ago
選擇答案： A
AWS WAF helps you protect against common Web 攻擊 and bots that 可以 affect availability, compromise security, or consume excessive
resources. Protect against vulnerabilities and exploits such as SQL injection or Cross site scripting 攻擊.
按讚 5 次 


# 第 599 頁

 Guru4Cloud 10 months, 3 weeks ago
選擇答案： A
To filter 流量 and protect against 應用程式 攻擊 like cross-site scripting and SQL injection, the company 可以 use AWS Web Application
Firewall with managed rules on the Application Load Balancer. Th是 提供 security with minimal infrastructure and operations overhead.
按讚 3 次 
 Undisputed 1 year ago
選擇答案： A
To achieve proper 流量 filtering and protect the Application Load Balancer (ALB) against common application-level 攻擊, such as cross-site
scripting (XSS) or SQL injection, while minimizing infrastructure and 營運負擔, the company 可以 consider 使用 AWS Web Application
Firewall (WAF) with AWS Managed Rules.
按讚 2 次 
 vini15 1 year ago
A-- Keywords(cross-site scripting or SQL injection)
按讚 3 次 


# 第 600 頁

主題 1
題目 #214
某公司的 reporting system delivers hundreds of .csv ¬les to an Amazon S3 bucket each day. 該公司 必須 convert these ¬les to
Apache Parquet format and 必須 store the ¬les in a transformed data bucket.
Which solution 將會 meet these requirements with the LEAST development effort?
A. 建立 an Amazon EMR cluster with Apache Spark installed. Write a Spark application to transform the data. 使用 EMR File System
(EMRFS) to 寫入 ¬les to the transformed data bucket.
B. 建立 an AWS Glue crawler to discover the data. 建立 an AWS Glue extract, transform, and load (ETL) job to transform the data.
Specify the transformed data bucket in the output step.
C. 使用 AWS Batch to create a job de¬nition with Bash syntax to transform the data and output the data to the transformed data bucket.
Use the job de¬nition to submit a job. Specify an array job as the job type.
D. 建立 an AWS Lambda function to transform the data and output the data to the transformed data bucket. Con¬gure an event
noti¬cation for the S3 bucket. Specify the Lambda function as the destination for the event noti¬cation.
正確答案： D 
 Babba 高票  1 year, 6 months ago
選擇答案： B
It looks like AWS Glue allows fully managed CSV to Parquet conversion jobs: https://docs.aws.amazon.com/prescriptive-
guidance/latest/patterns/three-aws-glue-etl-job-types-for-converting-data-to-apache-parquet.html
按讚 18 次 
 awsgeek75 7 months ago
A text book use case: https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/three-aws-glue-etl-job-types-for-converting-data-
to-apache-parquet.html#three-aws-glue-etl-job-types-for-converting-data-to-apache-parquet-epics 
 
B 是 the 正確 answer.
按讚 2 次 
 cookieMr 高票  1 year, 1 month ago
選擇答案： B
AWS Glue 是 a fully managed ETL service that simplifies the process of preparing and transforming data for analytics. Using AWS Glue requires
minimal development effort compared to the other options. 
 
選項 A requires more development effort as it involves writing a Spark 應用程式 to transform the data. It also introduces additional
infrastructure management with the EMR cluster. 
 
選項 C requires writing and managing custom Bash scripts for data transformation. It requires more manual effort and does not 提供 the
built-in capabilities of AWS Glue for data transformation. 
 
選項 D requires developing and managing a custom Lambda for data transformation. While Lambda 可以 handle the transformation, it requires
more effort compared to AWS Glue, which 是 specifically designed for ETL operations. 
 
Therefore, option B 提供 the easiest and least development effort by leveraging AWS Glue's capabilities for data discovery, transformation,
and output to the transformed data bucket.
按讚 8 次 
 lofzee 最新  2 months, 1 week ago
選擇答案： B
AWS Glue and parquet go hand in hand
按讚 1 次 
 zinabu 4 months ago
i 將會 go with answer B cause: You 可以 use AWS Glue to 寫入 ETL jobs in a Python shell environment. You 可以 also create both batch and streaming
ETL jobs by 使用 Python (PySpark) or Scala in a managed Apache Spark environment. 
Apache Parquet 是 built to support efficient compression and encoding schemes. It 可以 speed up your analytics workloads 因為 it stores data i
a columnar fashion. Converting data to Parquet 可以 save you 儲存 space, cost, and time in the longer run
按讚 1 次 
 Rido4good 6 months, 2 weeks ago
D 
I think people 是 forgetting the question says "Low Overhead".
社群投票分布
B (100%)
