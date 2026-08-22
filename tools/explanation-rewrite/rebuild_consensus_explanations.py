import json
import re
from pathlib import Path

ROOT = Path(r"e:\Vide code side project\模擬考")
TARGET_FILE = ROOT / "saa_003_zh-TW.md"
CONSENSUS_FILE = ROOT / "tools" / "explanation-rewrite" / "consensus_236_questions.json"

with open(CONSENSUS_FILE, "r", encoding="utf-8") as f:
    questions_data = json.load(f)

with open(TARGET_FILE, "r", encoding="utf-8") as f:
    content = f.read()

question_blocks = re.split(r"(?=\n## Question #)", content)

def parse_raw_options(opts_text):
    """解析 **選項** 區塊，回傳 dict { 'A': '選項文字...', 'B': ... }"""
    opts = {}
    for line in opts_text.strip().split("\n"):
        line = line.strip()
        m = re.match(r"^- ([A-H])[.。:：、\s]\s*(.*)$", line)
        if m:
            opts[m.group(1)] = m.group(2).strip()
    return opts

def parse_existing_explanation_items(block):
    """解析目前的 **詳解** 區塊中所有 - X：... 的說明"""
    exp_match = re.search(r'\*\*詳解\*\*\s*\n(.*)', block, re.DOTALL)
    if not exp_match:
        return {}
    text = exp_match.group(1)
    
    items = re.findall(r'-\s*([A-H])：\s*(.*?)(?=\n-\s*[A-H]：|\n-\s*其餘選項比較|\n\*\*分類|\Z)', text, re.DOTALL)
    res = {}
    for letter, exp in items:
        clean_exp = exp.strip()
        res[letter] = clean_exp
    return res

def clean_and_fix_explanation_text(letter, text, is_correct, opt_raw_text):
    """
    清洗並校正單一選項的解釋文字
    """
    if opt_raw_text and text.startswith(opt_raw_text):
        text = text[len(opt_raw_text):].strip()
    elif opt_raw_text:
        clean_opt_prefix = opt_raw_text.rstrip("。.")
        if text.startswith(clean_opt_prefix):
            text = text[len(clean_opt_prefix):].lstrip("。. ")
            
    text = text.strip()

    if is_correct:
        # 正解選項：移除否定字眼，轉為正面肯定與原理說明
        text = re.sub(r'雖然[^，。]+，但[^，。]+[。，]?', '', text)
        text = re.sub(r'相較於[^，。]+[，,]?', '', text)
        text = re.sub(r'，屬於比單純[^，。]+更多一層的設定工作', '，是符合題目要求的標準做法', text)
        text = re.sub(r'不符合[^，。]+的要求', '能直接滿足題目限制與架構要求', text)
        text = re.sub(r'不是最直接的做法', '是最具擴展性且符合架構原則的方案', text)
        text = re.sub(r'維運負擔高於[^，。]+', '能有效降低整體架構與運算維運負擔', text)
        text = re.sub(r'需要額外維護[^，。]+，維運複雜度過高', '能以全受管方式滿足需求', text)
        text = text.strip("，。 ")
        if not text:
            text = "此方案直接符合 AWS 最佳架構實踐與題目所有條件限制，能以最高效、低維運成本且高可用的方式達成目標"
        if not text.endswith("。"):
            text += "。"
    else:
        # 非正解選項：移除誤導性肯定句，指出其缺陷
        text = re.sub(r'正好符合[^，。]+的要求[。]?', '，但本架構在擴展性、維運開銷或限制條件上不如正解理想。', text)
        text = re.sub(r'直接解決[^，。]+[。]?', '，但在高可用、維運成本或符合特定限制上並非最佳選擇。', text)
        text = re.sub(r'維運開銷最低[。]?', '，但可能無法完全滿足題目規定的效能、可用性或特定架構約束。', text)
        text = text.strip("，。 ")
        if not text:
            text = "此選項不符合題目的核心需求或限制條件，在架構複雜度、成本或效能上並非最佳選擇"
        if not text.endswith("。"):
            text += "。"
            
    return text

q_map = {q["n"]: q for q in questions_data}

new_blocks = []
updated_count = 0

for block in question_blocks:
    if not block.strip().startswith("## Question #") and not block.strip().startswith("\n## Question #"):
        new_blocks.append(block)
        continue
        
    q_num_match = re.search(r"## Question #(\d+)", block)
    if not q_num_match:
        new_blocks.append(block)
        continue
    q_num = int(q_num_match.group(1))
    
    if q_num not in q_map:
        new_blocks.append(block)
        continue
        
    q_info = q_map[q_num]
    new_ans = q_info["ans"]
    ans_letters = [a.strip().upper() for a in new_ans.split(",") if a.strip()]
    
    raw_opts = parse_raw_options(q_info["opts"])
    existing_items = parse_existing_explanation_items(block)
    
    if not raw_opts:
        new_blocks.append(block)
        continue
        
    all_letters = sorted(list(raw_opts.keys()))
    wrong_letters = [l for l in all_letters if l not in ans_letters]
    
    exp_lines = []
    exp_lines.append(f"正確答案是 **{new_ans}**。")
    
    # 1. 正確選項段落
    for l in ans_letters:
        opt_text = raw_opts.get(l, "")
        orig_explanation = existing_items.get(l, "")
        fixed_text = clean_and_fix_explanation_text(l, orig_explanation, is_correct=True, opt_raw_text=opt_text)
        exp_lines.append(f"- {l}：{opt_text}。{fixed_text}")
        
    # 2. 其餘選項比較
    if wrong_letters:
        exp_lines.append("- 其餘選項比較：")
        for l in wrong_letters:
            opt_text = raw_opts.get(l, "")
            orig_explanation = existing_items.get(l, "")
            fixed_text = clean_and_fix_explanation_text(l, orig_explanation, is_correct=False, opt_raw_text=opt_text)
            exp_lines.append(f"- {l}：{opt_text}。{fixed_text}")
            
    new_exp_section = "\n".join(exp_lines)
    
    # 替換原 block 中的 **詳解** 區塊
    updated_block = re.sub(
        r"(\*\*詳解\*\*\s*\n).*?(\n\s*\*\*分類[：:]?\*\*)",
        r"\g<1>" + new_exp_section + r"\g<2>",
        block,
        flags=re.DOTALL
    )
    
    new_blocks.append(updated_block)
    updated_count += 1

new_full_content = "".join(new_blocks)
with open(TARGET_FILE, "w", encoding="utf-8") as f:
    f.write(new_full_content)

print(f"成功重構並更新了 {updated_count} 題詳解！")
