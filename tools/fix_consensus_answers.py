import os
import re
import json
import shutil
from datetime import datetime
from pathlib import Path

ROOT = Path(r"e:\Vide code side project\模擬考")
TARGET_FILE = ROOT / "saa_003_zh-TW.md"
BK_DIR = ROOT / "bk"
BK_DIR.mkdir(parents=True, exist_ok=True)

# 1. 建立備份
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
bk_file = BK_DIR / f"saa_003_zh-TW.backup_{timestamp}.md"
shutil.copy2(TARGET_FILE, bk_file)
print(f"備份建立完成: {bk_file}")

# 2. 讀取與解析題目
with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 使用正則按題目分割，保留分隔線
question_blocks = re.split(r"(?=\n## Question #)", content)

fixed_records = []
new_blocks = []
total_questions = 0

for block in question_blocks:
    if not block.strip().startswith("## Question #") and not block.strip().startswith("\n## Question #"):
        new_blocks.append(block)
        continue
    
    total_questions += 1
    q_num_match = re.search(r"## Question #(\d+)", block)
    q_num = int(q_num_match.group(1)) if q_num_match else total_questions

    # 提取答案
    ans_match = re.search(r"(\*\*答案\*\*\s*\n+)([^\n]+)", block)
    if not ans_match:
        new_blocks.append(block)
        continue
    
    ans_prefix = ans_match.group(1)
    original_ans = ans_match.group(2).strip()

    # 提取社群投票
    vote_match = re.search(r"\*\*社群投票：?\*\*\s*([^\n]+)", block)
    vote_raw = vote_match.group(1).strip() if vote_match else ""

    if not vote_raw or vote_raw.lower() in ["none", "n/a", "無"]:
        new_blocks.append(block)
        continue

    norm_orig_ans = "".join(sorted([c for c in original_ans.upper() if c in "ABCDEFGH"]))

    # 解析社群投票
    vote_items = re.findall(r"([A-H,\s]+?)\s*\(?(\d+)%?\)?", vote_raw)
    parsed_votes = []
    for opt_str, pct in vote_items:
        clean_opt = "".join(sorted([c for c in opt_str.upper() if c in "ABCDEFGH"]))
        if clean_opt:
            # 格式化顯示，多選如 "B, E"
            formatted_opt = ", ".join(list(clean_opt))
            parsed_votes.append((clean_opt, int(pct), formatted_opt))

    should_fix = False
    new_ans_formatted = ""
    new_ans_clean = ""
    top_pct = 0

    if parsed_votes:
        parsed_votes.sort(key=lambda x: x[1], reverse=True)
        max_pct = parsed_votes[0][1]
        top_candidates = [v for v in parsed_votes if v[1] == max_pct]
        
        # 判斷是否為單一最高票且 >= 80% 且與原答案不同
        if len(top_candidates) == 1 and max_pct >= 80:
            top_opt_clean, top_pct, top_opt_formatted = top_candidates[0]
            if norm_orig_ans != top_opt_clean:
                should_fix = True
                new_ans_clean = top_opt_clean
                new_ans_formatted = top_opt_formatted

    if should_fix:
        # 執行替換
        # 1. 替換 **答案**
        updated_block = re.sub(
            r"(\*\*答案\*\*\s*\n+)[^\n]+",
            r"\g<1>" + new_ans_formatted,
            block,
            count=1
        )
        
        # 2. 替換 **詳解** 首行 正確答案是 **...**。
        updated_block = re.sub(
            r"(\*\*詳解\*\*\s*\n+正確答案是\s*\*\*)[^\*]+(\*\*)",
            r"\g<1>" + new_ans_formatted + r"\g<2>",
            updated_block,
            count=1
        )

        fixed_records.append({
            "q_num": q_num,
            "original_ans": original_ans,
            "new_ans": new_ans_formatted,
            "vote_pct": f"{top_pct}%",
            "vote_raw": vote_raw
        })
        new_blocks.append(updated_block)
    else:
        new_blocks.append(block)

# 寫回檔案
new_content = "".join(new_blocks)
with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"總處理題數: {total_questions}")
print(f"成功修正題數: {len(fixed_records)}")

# 儲存對照清單 JSON
report_file = ROOT / "docs" / "fixed_consensus_answers_report.json"
report_file.parent.mkdir(parents=True, exist_ok=True)
with open(report_file, "w", encoding="utf-8") as f:
    json.dump(fixed_records, f, ensure_ascii=False, indent=2)

print(f"修正紀錄已輸出至: {report_file}")
