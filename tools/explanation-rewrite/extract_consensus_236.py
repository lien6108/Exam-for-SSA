import json
import re
from pathlib import Path

ROOT = Path(r"e:\Vide code side project\模擬考")
TARGET_FILE = ROOT / "saa_003_zh-TW.md"
REPORT_FILE = ROOT / "docs" / "fixed_consensus_answers_report.json"

with open(REPORT_FILE, "r", encoding="utf-8") as f:
    fixed_records = json.load(f)

fixed_q_nums = {r["q_num"] for r in fixed_records}

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

questions = re.split(r"(?=\n## Question #)", content)

extracted = []

for block in questions:
    if not block.strip().startswith("## Question #") and not block.strip().startswith("\n## Question #"):
        continue
    
    q_num_match = re.search(r"## Question #(\d+)", block)
    if not q_num_match:
        continue
    q_num = int(q_num_match.group(1))
    
    if q_num not in fixed_q_nums:
        continue
        
    q_match = re.search(r"\*\*題目\*\*\s*\n(.*?)\n\s*\*\*選項\*\*", block, re.DOTALL)
    opts_match = re.search(r"\*\*選項\*\*\s*\n(.*?)\n\s*\*\*答案\*\*", block, re.DOTALL)
    ans_match = re.search(r"\*\*答案\*\*\s*\n([^\n]+)", block)
    vote_match = re.search(r"\*\*社群投票：?\*\*\s*([^\n]+)", block)
    cat_match = re.search(r"\*\*分類：?\*\*\s*([^\n]+)", block)
    
    extracted.append({
        "n": q_num,
        "q": q_match.group(1).strip() if q_match else "",
        "opts": opts_match.group(1).strip() if opts_match else "",
        "ans": ans_match.group(1).strip() if ans_match else "",
        "vote": vote_match.group(1).strip() if vote_match else "",
        "cat": cat_match.group(1).strip() if cat_match else ""
    })

extracted.sort(key=lambda x: x["n"])

out_path = ROOT / "tools" / "explanation-rewrite" / "consensus_236_questions.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(extracted, f, ensure_ascii=False, indent=2)

print(f"成功擷取 {len(extracted)} 題至 {out_path}")
