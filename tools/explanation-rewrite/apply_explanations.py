"""
Merge generated AWS SAA question explanations back into saa_003_zh-TW.md.

Usage:
    python apply_explanations.py <remaining_questions.json> <generated_explanations.json>

Inputs:
    remaining_questions.json - array of {n, q, opts, ans, cat} for questions that
        still have the templated placeholder explanation (source-of-truth content,
        extracted fresh from the current file; do not hand-edit).

    generated_explanations.json - array of:
        {
          "n": 684,
          "options": [
            {"letter": "A", "correct": false, "explanation": "..."},
            {"letter": "B", "correct": true,  "explanation": "..."},
            ...
          ]
        }
        One entry per question you have finished writing. Partial files are fine
        (only covered questions get rewritten) - rerun after generating more.

Behavior:
    - Only the **詳解** section (between "**詳解**" and "**分類：**") is replaced.
    - **題目** / **選項** / **答案** / **社群投票** / **分類** are left byte-identical.
    - The "correct" answer letters used in the output header/ordering come from
      remaining_questions.json's "ans" field (ground truth from the question bank),
      NOT from the "correct" flags in generated_explanations.json - those flags are
      only used for logging/sanity, so a model mistake there can't corrupt the
      answer key.
    - Question positions are rescanned from the CURRENT file on every run (not
      cached), so this script is safe to run multiple times as you generate more
      explanations incrementally, and safe even if earlier runs shifted line
      numbers (they will, slightly, since generated text rarely matches the
      original template's line count exactly).
    - Idempotent: running it twice with the same inputs produces byte-identical
      output.

Validation to run after each pass (see HANDOFF.md for full checklist):
    grep -c "此選項最直接符合題目的需求與限制" saa_003_zh-TW.md   # should shrink toward 0
    grep -c "此做法可行性較低、成本或維運複雜度較高" saa_003_zh-TW.md  # should shrink toward 0
    grep -c "此選項符合題目條件，能有效滿足核心需求" saa_003_zh-TW.md  # should shrink toward 0
    grep -c "^## Question #" saa_003_zh-TW.md   # must stay 1018
"""
import json
import re
import sys
from pathlib import Path

REPO_FILE = Path(__file__).resolve().parents[2] / "saa_003_zh-TW.md"


def load_remaining(path):
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    return {d["n"]: d for d in data}


def load_generated(path):
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    merged = {}
    for item in data:
        n = item["n"]
        opts = {o["letter"].strip().upper(): o for o in item["options"]}
        merged[n] = opts
    return merged


def parse_options(opts_text):
    """Parse the raw **選項** block text into ordered [(letter, text), ...]."""
    out = []
    for line in opts_text.split("\n"):
        line = line.strip()
        m = re.match(r"^- ([A-F])\.\s*(.*)$", line)
        if m:
            out.append((m.group(1), m.group(2).strip()))
    return out


def punctuate(text):
    text = text.rstrip()
    if not text:
        return text
    if text[-1] == ".":
        return text[:-1] + "。"
    if text[-1] not in "。！？":
        return text + "。"
    return text


def build_explanation_block(qdata, gen_opts, warnings, n):
    opts = parse_options(qdata["opts"])
    if not opts:
        warnings.append(f"Q{n}: 選項解析失敗（0 個選項），略過")
        return None

    ans_letters = [a.strip().upper() for a in qdata["ans"].split(",") if a.strip()]
    all_letters = [l for l, _ in opts]
    opt_text = dict(opts)

    missing_letters = [l for l in all_letters if l not in gen_opts]
    if missing_letters:
        warnings.append(f"Q{n}: 生成結果缺少選項 {missing_letters}，略過整題")
        return None

    lines = []
    lines.append(f"正確答案是 **{', '.join(ans_letters)}**。")
    for letter in ans_letters:
        if letter not in opt_text:
            warnings.append(f"Q{n}: 答案字母 {letter} 不在選項清單中，略過整題")
            return None
        expl = gen_opts[letter]["explanation"].strip()
        lines.append(f"- {letter}：{punctuate(opt_text[letter])}{expl}")

    remaining = [l for l in all_letters if l not in ans_letters]
    if remaining:
        lines.append("- 其餘選項比較：")
        for letter in remaining:
            expl = gen_opts[letter]["explanation"].strip()
            lines.append(f"- {letter}：{punctuate(opt_text[letter])}{expl}")

    return "\n".join(lines)


def scan_question_positions(lines):
    """Find current (dynamic) 0-indexed [start, end) line ranges per question number."""
    starts = []
    for i, l in enumerate(lines):
        m = re.match(r"^## Question #(\d+)", l)
        if m:
            starts.append((int(m.group(1)), i))
    positions = {}
    for idx, (n, start0) in enumerate(starts):
        end0 = starts[idx + 1][1] if idx + 1 < len(starts) else len(lines)
        positions[n] = (start0, end0)
    return positions


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)

    remaining = load_remaining(sys.argv[1])
    generated = load_generated(sys.argv[2])

    print(f"remaining_questions entries: {len(remaining)}")
    print(f"generated entries: {len(generated)}")

    with open(REPO_FILE, encoding="utf-8") as f:
        lines = f.read().split("\n")

    positions = scan_question_positions(lines)

    warnings = []
    applied = []

    targets = [(n, remaining[n]) for n in generated.keys() if n in remaining and n in positions]
    # Descending order: edits at higher line numbers never shift the positions
    # of not-yet-processed (lower) entries within this same pass.
    targets.sort(key=lambda x: positions[x[0]][0], reverse=True)

    for n, qdata in targets:
        gen_opts = generated[n]
        new_block = build_explanation_block(qdata, gen_opts, warnings, n)
        if new_block is None:
            continue

        start0, end0 = positions[n]
        block_lines = lines[start0:end0]

        expl_idx = None
        cat_idx = None
        for i, l in enumerate(block_lines):
            if l.strip() == "**詳解**":
                expl_idx = i
            if l.strip().startswith("**分類："):
                cat_idx = i
        if expl_idx is None or cat_idx is None or cat_idx <= expl_idx:
            warnings.append(f"Q{n}: 找不到 **詳解**/**分類** 邊界，略過")
            continue

        new_block_lines = new_block.split("\n") + [""]
        rebuilt = block_lines[: expl_idx + 1] + new_block_lines + block_lines[cat_idx:]

        lines[start0:end0] = rebuilt
        applied.append(n)

    print(f"applied: {len(applied)}")
    print(f"warnings: {len(warnings)}")
    for w in warnings[:50]:
        print("  WARN:", w)

    with open(REPO_FILE, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(lines))

    print("done. wrote", REPO_FILE)


if __name__ == "__main__":
    main()
