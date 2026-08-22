"""
Refactor and generate accurate explanations for the 236 consensus questions.
"""
import json
import re
from pathlib import Path

ROOT = Path(r"e:\Vide code side project\模擬考")
TARGET_FILE = ROOT / "saa_003_zh-TW.md"
CONSENSUS_FILE = ROOT / "tools" / "explanation-rewrite" / "consensus_236_questions.json"

with open(CONSENSUS_FILE, "r", encoding="utf-8") as f:
    questions_data = json.load(f)

print(f"Loaded {len(questions_data)} questions.")
