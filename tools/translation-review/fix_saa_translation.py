from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
TARGET = ROOT / "saa_003_zh-TW.md"


def normalize_answer(value: str) -> str:
    letters = re.findall(r"[A-F]", value.upper())
    seen: list[str] = []
    for letter in letters:
        if letter not in seen:
            seen.append(letter)
    return ",".join(seen)


def fix_answer_consistency(block: str) -> str:
    explanation = re.search(r"(?m)^正確答案是 \*\*([^*]+)\*\*", block)
    if not explanation:
        return block

    answer = normalize_answer(explanation.group(1))
    if not answer:
        return block

    block = re.sub(
        r"(?ms)^\*\*答案\*\*\s*\r?\n[^\r\n]+",
        f"**答案**\n{answer}",
        block,
        count=1,
    )
    block = re.sub(
        r"(?m)^正確答案是 \*\*[^*]+\*\*",
        f"正確答案是 **{answer}**",
        block,
        count=1,
    )
    return block


def replace_terms(text: str) -> str:
    # Repair broken product/service names before applying generic wording fixes.
    replacements = [
        ("EublicApplicationScopediaMRole", "EnableApplicationScopedIAMRole"),
        ("Cognitto", "Cognito"),
        ("DynamomDB", "DynamoDB"),
        ("DynamotB", "DynamoDB"),
        ("DynatomDB", "DynamoDB"),
        ("SUCCEDED", "SUCCEEDED"),
        ("Amadon ECS", "Amazon ECS"),
        ("secret afinity", "session affinity"),
        ("transit cateve", "transit gateway"),
        ("ALConsition", "ALB"),
        ("ALModify", "ALB"),
        ("ALENSure", "ALB"),
        ("ALUS", "ALB"),
        ("Ofioad", "offload"),
        ("professes", "on-premises"),
        ("professions", "on-premises"),
        ("presimes", "premises"),
        ("promess", "on-premises"),
        ("proposes", "on-premises"),
        ("filow", "flow"),
        ("Rekcognition", "Rekognition"),
        ("CPUUtili化", "CPUUtilization"),
        ("ASGAverageCPUtili化", "ASGAverageCPUUtilization"),
        ("DeletKey", "DeleteKey"),
        ("DedKey", "DeleteKey"),
        ("RequestContPerTerTarget", "RequestCountPerTarget"),
        ("ActiveConnection Cound", "ActiveConnectionCount"),
        ("GobjectResponseTime", "TargetResponseTime"),
        ("AWSERV0012", "Amazon CloudWatch Logs"),
        ("aWSERV0012", "Amazon CloudWatch Logs"),
        ("AWSERV008", "Amazon OpenSearch Service"),
        ("Amazon Translatic Medical", "Amazon Transcribe Medical"),
        ("幷", "並"),
        ("試光", "精簡待命"),
        (
            "由第三方Cimport將憑證籤入",
            "由第三方 CA 簽署後，將憑證匯入",
        ),
        (
            "AWS 資料庫(Database) 遷移服務(AWS DS)",
            "AWS Database Migration Service (AWS DMS)",
        ),
        ("AWS DSM", "AWS DMS"),
        ("AWS DS", "AWS DMS"),
        (
            "Microsoft SQL 伺服器 Entertainment 與 Always On 可用性組,在 options 伺服器和 AWS 之間配置多站點活動/活動設定",
            "Microsoft SQL Server Enterprise 與 Always On availability groups，在地端伺服器與 AWS 之間設定多站點主動/主動架構",
        ),
        (
            "將ECS服務設定為Amadon ECS中的資料NLProcess的目標",
            "將 ECS 服務設定為 NLB 的目標。在 Amazon ECS 中處理資料",
        ),
        (
            "Amazon DynamoD 使用 DynamoDB Streams",
            "Amazon DynamoDB。使用 DynamoDB Streams",
        ),
        (
            '查閱群組基本EC2例項的"例項後設資料服務版本2(IMDSv2)',
            "存取基礎 EC2 執行個體的 Instance Metadata Service Version 2 (IMDSv2)",
        ),
        (
            '查閱群組基本EC2執行個體的"執行個體後設資料服務版本2(IMDSv2)',
            "存取基礎 EC2 執行個體的 Instance Metadata Service Version 2 (IMDSv2)",
        ),
        ("Amazon S3檔案閘道器", "Amazon S3 File Gateway"),
        ("S3 檔案閘道器", "S3 File Gateway"),
        ("Amazon Elastic檔案系統", "Amazon Elastic File System"),
        ("Amazon 簡單佇列服務", "Amazon Simple Queue Service"),
        ("Amazon 簡單通知服務", "Amazon Simple Notification Service"),
        ("Amazon Simple電子郵件服務", "Amazon Simple Email Service"),
        ("Amazon 簡單電子郵件服務", "Amazon Simple Email Service"),
        ("Amazon 簡單佇列 服務", "Amazon Simple Queue Service"),
        ("Amazon 簡單的佇列服務", "Amazon Simple Queue Service"),
        ("Amazon簡單佇列服務", "Amazon Simple Queue Service"),
        ("Amazon簡單排隊服務", "Amazon Simple Queue Service"),
        ("Amazon簡單通知服務", "Amazon Simple Notification Service"),
        ("Amazon簡易通知服務", "Amazon Simple Notification Service"),
        ("Amazon Simple Quue Service", "Amazon Simple Queue Service"),
        ("Amazon 彈性容器服務", "Amazon Elastic Container Service"),
        ("Amazon 彈性檔案系統", "Amazon Elastic File System"),
        ("Amazon 彈性塊儲存器", "Amazon Elastic Block Store"),
        ("Amazon 彈性塊儲存", "Amazon Elastic Block Store"),
        ("Amazon 彈性塊 Store", "Amazon Elastic Block Store"),
        ("Amazon彈性容器服務公司", "Amazon Elastic Container Service"),
        ("Amazon彈性集裝箱服務公司", "Amazon Elastic Container Service"),
        ("Amazon彈性容器服務", "Amazon Elastic Container Service"),
        ("Amazon彈性集裝箱服務", "Amazon Elastic Container Service"),
        ("Amazon彈性檔案系統", "Amazon Elastic File System"),
        ("Amazon彈性塊儲存器", "Amazon Elastic Block Store"),
        ("Amazon 機器影象", "Amazon Machine Image"),
        ("Amazon機器圖片", "Amazon Machine Image"),
        ("AWS 全球加速器", "AWS Global Accelerator"),
        ("AWS 防火牆(Firewall) 管理器", "AWS Firewall Manager"),
        ("AWS 防火牆(Firewall)管理器", "AWS Firewall Manager"),
        ("AWS 防火牆(Firewall) 管理者", "AWS Firewall Manager"),
        ("AWS 防火牆(Firewall)管理者", "AWS Firewall Manager"),
        ("AWS 批次", "AWS Batch"),
        ("AWS 遠門", "AWS Outposts"),
        ("AWS 單一簽名", "AWS Single Sign-On"),
        ("AWS 目錄服務", "AWS Directory Service"),
        ("AWS Elastic 災難復原(Disaster Recovery)", "AWS Elastic Disaster Recovery"),
        ("AWSERV007(AWS KMS)", "AWS KMS"),
        ("Amazon 簡單儲存服務", "Amazon Simple Storage Service"),
        ("Amazon 督察", "Amazon Inspector"),
        ("Amazon 檢查器", "Amazon Inspector"),
        ("Amazon檢查器", "Amazon Inspector"),
        ("Amazon 檢查員", "Amazon Inspector"),
        ("Amazon檢查員", "Amazon Inspector"),
        ("Amazon 資料生命週期管理器", "Amazon Data Lifecycle Manager"),
        ("Amazon資料生命週期管理器", "Amazon Data Lifecycle Manager"),
        ("Amazon 轉錄工作", "Amazon Transcribe 工作"),
        ("Amazon 文件DB", "Amazon DocumentDB"),
        ("Amazon 安全設定", "Amazon Security Lake"),
        ("Amazon 雲表事件", "Amazon CloudWatch Events"),
        ("AWS 資源存取管理器", "AWS Resource Access Manager"),
        ("AWS資源存取管理器", "AWS Resource Access Manager"),
        ("AWS 服務目錄", "AWS Service Catalog"),
        ("AWS服務目錄", "AWS Service Catalog"),
        ("AWS 系統管理器", "AWS Systems Manager"),
        ("AWS系統管理器", "AWS Systems Manager"),
        ("AWS 彈性 Beanstalk", "AWS Elastic Beanstalk"),
        ("AWS彈性 Beanstalk", "AWS Elastic Beanstalk"),
        ("AWS 彈性IP地址", "Elastic IP address"),
        ("AWS彈性IP地址", "Elastic IP address"),
        ("Amazon 資源名稱", "Amazon Resource Name"),
        ("Amazon資源名稱", "Amazon Resource Name"),
        ("Amazon資源Name", "Amazon Resource Name"),
        ("Cloud Watch", "CloudWatch"),
        ("API閘道器", "API Gateway"),
        ("AWS站點對站點VPN", "AWS Site-to-Site VPN"),
        ("AWS站點對站點的VPN", "AWS Site-to-Site VPN"),
        ("AWS 站點對站點 VPN", "AWS Site-to-Site VPN"),
        ("53號公路", "Route 53"),
        ("路53", "Route 53"),
        ("API 閘道器", "API Gateway"),
        ("應用程式負載平衡器(Application Load Balancer)(ALB)", "Application Load Balancer (ALB)"),
        ("網路負載平衡器(Network Load Balancer)(NLB)", "Network Load Balancer (NLB)"),
        ("彈性負載平衡器(Load Balancer)(ELB)", "Elastic Load Balancing (ELB)"),
        ("Amazon Route 53", "Amazon Route 53"),
        # Taiwan terminology and recurring translationese.
        ("例項商店", "執行個體存放區"),
        ("案例商店", "執行個體存放區"),
        ("例項", "執行個體"),
        ("解決辦法", "解決方案"),
        ("全域性", "全域"),
        ("影象檔案", "圖片檔案"),
        ("影象", "圖片"),
        ("體積", "磁碟區"),
        ("度量衡", "指標"),
        ("物體", "物件"),
        ("原產地", "來源"),
        ("工作量", "工作負載"),
        ("配置", "設定"),
        ("引用", "呼叫"),
        ("接入", "存取"),
        ("進入", "存取"),
        ("許可權", "權限"),
        ("身份", "身分"),
        ("控制檯", "主控台"),
        ("資料庫(database)", "資料庫"),
        ("區域(Region)", "區域"),
        ("可用區(Availability Zones)", "可用區"),
        ("可用區(Availability Zone)", "可用區"),
        ("延遲(latency)", "延遲"),
        ("可擴展性(scalability)", "可擴展性"),
        ("營運開銷(operational overhead)", "營運開銷"),
        ("營運複雜性(operational complexity)", "營運複雜性"),
        ("(backup)", ""),
        ("(snapshot)", ""),
        ("(Replication)", ""),
        ("(encryption)", ""),
    ]

    for old, new in replacements:
        text = text.replace(old, new)

    text = text.replace(
        "Amazon ECS中的資料NLProcess的目標",
        "NLB 的目標。在 Amazon ECS 中處理資料",
    )
    text = text.replace(
        "AWS Firewall Manager 管理ALB 防火牆(firewall)規則，將流量限制在ALB 防火牆(firewall)規則，以包含註冊的IP地址",
        "AWS Firewall Manager 管理 ALB 的防火牆規則，將流量限制為註冊的 IP 位址",
    )
    text = re.sub(r"資料庫\s*\(\s*[Dd]atabase\s*\)", "資料庫", text)
    text = re.sub(r"區域\s*\(\s*Region\s*\)", "區域", text)

    # Normalize punctuation only where it is clearly sentence punctuation;
    # leave decimals, file extensions, identifiers, URLs, and AWS names intact.
    text = re.sub(r"(?<=[\u4e00-\u9fff)])\.(?=(?:\s|[\u4e00-\u9fff]|$))", "。", text)
    text = re.sub(r"(?<=[\u4e00-\u9fff)])[,](?=(?:\s|[\u4e00-\u9fff]|$))", "，", text)
    text = re.sub(r"(?<=[A-Za-z0-9)])\.(?=\s[\u4e00-\u9fff])", "。", text)
    text = re.sub(r"(?<=[A-Za-z0-9)])[,](?=[\u4e00-\u9fff])", "，", text)
    text = re.sub(r"(?<=[\u4e00-\u9fff])\?(?=\s*$)", "？", text, flags=re.MULTILINE)
    text = re.sub(r"[ \t]+([，。！？])", r"\1", text)
    return text


def main() -> None:
    text = TARGET.read_text(encoding="utf-8")
    matches = list(re.finditer(r"(?m)^## Question #(\d+)\s*$", text))
    if len(matches) != 1019:
        raise RuntimeError(f"Expected 1019 question headings, found {len(matches)}")

    chunks: list[str] = []
    for index, match in enumerate(matches):
        start = match.start()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        chunks.append(text[start:end])

    fixed = "".join(fix_answer_consistency(chunk) for chunk in chunks)
    fixed = replace_terms(fixed)
    TARGET.write_text(fixed, encoding="utf-8", newline="")


if __name__ == "__main__":
    main()
