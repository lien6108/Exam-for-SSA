'use strict';

// ── 題庫檔案清單（相對路徑）────────────────────────────────────────
const QUESTION_FILES = [
  'AWS_SAA_前50題_繁中翻譯.md',
  'AWS_SAA_第51到100題_繁中翻譯.md',
  'AWS_SAA_第101到150題_繁中翻譯.md',
  'AWS_SAA_第151到200題_繁中翻譯_跳過165_最新版.md',
  'AWS_SAA_第200到250題_繁中翻譯.md',
  'AWS_SAA_第251到300題_繁中翻譯.md',
  'AWS_SAA_第301到350題_繁中翻譯.md',
  'AWS_SAA_第351到400題_繁中翻譯.md',
  'AWS_SAA_第401到450題_繁中翻譯.md',
  'aws_451_500_zh.md',
  'AWS_SAA_pages_501_600_zh.md',
  'AWS_SAA_pages_601_700_zh.md',
  'aws_saa_pages_701_800_zh.md',
];

const EXAM_SIZE   = 65;
const TOTAL_SCORE = 1000;
const PASS_SCORE  = 700;

// ── 領域關鍵字規則 ────────────────────────────────────────────────
const DOMAIN_RULES = [
  {
    id: 'compute',
    label: 'Compute & Containers / 運算與容器',
    keywords: ['ec2','lambda','fargate','ecs','eks','elastic beanstalk','auto scaling',
               'instance','container','kubernetes','batch','lightsail','outposts',
               'graviton','spot instance','reserved instance','dedicated host',
               '執行個體','容器','運算','自動擴展'],
  },
  {
    id: 'storage',
    label: 'Storage / 儲存',
    keywords: ['s3','ebs','efs','fsx','glacier','storage gateway','snowball','snowcone',
               'datasync','backup','instance store','object storage','archive',
               '儲存','備份','封存','快照','volume','snapshot'],
  },
  {
    id: 'database',
    label: 'Database / 資料庫',
    keywords: ['rds','aurora','dynamodb','elasticache','redshift','documentdb','neptune',
               'keyspaces','timestream','dax','memcached','redis','mysql','postgresql',
               'mariadb','oracle','sql server','nosql',
               '資料庫','資料表','快取','分析','倉儲'],
  },
  {
    id: 'networking',
    label: 'Networking & Content Delivery / 網路與內容傳遞',
    keywords: ['vpc','cloudfront','route 53','direct connect','vpn','transit gateway',
               'api gateway','global accelerator','nat gateway','load balancer','alb','nlb','elb',
               'network firewall','waf','shield','subnet','security group','nacl',
               'peering','endpoint','dns','bandwidth','cdn',
               '網路','負載平衡','防火牆','加速','流量','頻寬'],
  },
  {
    id: 'appintegration',
    label: 'Application Integration / 應用程式整合',
    keywords: ['sqs','sns','eventbridge','step functions','appflow','mq','kinesis',
               'firehose','data streams','kafka','msk','queue','topic','event',
               'workflow','orchestration','notification','message','pub/sub',
               '佇列','訊息','事件','通知','工作流程','串流','解耦'],
  },
  {
    id: 'management',
    label: 'Management & Governance / 管理與監控',
    keywords: ['cloudwatch','cloudtrail','config','systems manager','trusted advisor',
               'organizations','control tower','service catalog','cost explorer','budgets',
               'iam','sso','cognito','secrets manager','parameter store','kms',
               'inspector','guardduty','macie','detective','security hub',
               'logging','monitoring','compliance','audit','patch',
               '管理','監控','稽核','治理','合規','安全','權限','憑證','加密','成本'],
  },
];

// ── 應用狀態 ─────────────────────────────────────────────────────
let allQuestions  = [];   // 全部解析完的題目
let examQuestions = [];   // 本次抽到的 65 題
let userAnswers   = {};   // { examIndex: Set<string> }
let markedSet     = new Set();
let currentIndex  = 0;
let timerInterval = null;
let startTime     = null;
let examElapsed   = 0;   // 秒

// ── DOM 快取 ──────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

// ═══════════════════════════════════════════════════════════════════
// 1. loadQuestionBanks — fetch 所有 MD 檔案
// ═══════════════════════════════════════════════════════════════════
async function loadQuestionBanks() {
  const results = await Promise.allSettled(
    QUESTION_FILES.map(f => fetch(f).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}: ${f}`);
      return r.text();
    }))
  );
  const texts = [];
  const errors = [];
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') texts.push(r.value);
    else errors.push(QUESTION_FILES[i]);
  });
  if (errors.length) console.warn('無法載入:', errors.join(', '));
  return texts;
}

// ═══════════════════════════════════════════════════════════════════
// 2. parseMarkdownQuestions — 解析 MD 文字成題目物件陣列
// ═══════════════════════════════════════════════════════════════════
function parseMarkdownQuestions(mdText) {
  const questions = [];
  // 以 ## Question # 分割
  const blocks = mdText.split(/^## Question\s*#\d+/m).slice(1);
  const headers = [...mdText.matchAll(/^## Question\s*#(\d+)/gm)];

  blocks.forEach((block, i) => {
    const idMatch = headers[i] ? headers[i][1] : null;
    const id = idMatch ? parseInt(idMatch, 10) : null;
    if (!id) return;

    // 題目
    const qMatch  = block.match(/\*\*題目\*\*\s*\n([\s\S]*?)(?=\*\*選項\*\*)/);
    // 選項
    const opMatch = block.match(/\*\*選項\*\*\s*\n([\s\S]*?)(?=\*\*答案\*\*)/);
    // 答案
    const anMatch = block.match(/\*\*答案\*\*\s*\n([A-Za-z]+)/);

    if (!qMatch || !opMatch || !anMatch) return;

    const questionText = qMatch[1].trim();
    const optionsRaw   = opMatch[1].trim();
    const answerRaw    = anMatch[1].trim().toUpperCase();

    // 解析選項 "- A. 文字"
    const options = [];
    const optLines = optionsRaw.split('\n').filter(l => l.trim().match(/^-\s+[A-Z]\./));
    optLines.forEach(line => {
      const m = line.trim().match(/^-\s+([A-Z])\.\s*(.*)/);
      if (m) options.push({ key: m[1], text: m[2].trim() });
    });

    if (options.length < 2) return;

    // 複選 or 單選
    const answers = answerRaw.length === 1
      ? [answerRaw]
      : answerRaw.split('').filter(c => /[A-Z]/.test(c));

    questions.push({ id, questionText, options, answers });
  });

  return questions;
}

// ═══════════════════════════════════════════════════════════════════
// 3. validateQuestions
// ═══════════════════════════════════════════════════════════════════
function validateQuestions(questions) {
  return questions.filter(q => {
    if (!q.id || !q.questionText || q.options.length < 2 || q.answers.length < 1) return false;
    const keys = q.options.map(o => o.key);
    return q.answers.every(a => keys.includes(a));
  });
}

// ═══════════════════════════════════════════════════════════════════
// 4. sampleWeightedQuestions — 加權抽題，不重複
// ═══════════════════════════════════════════════════════════════════
function sampleWeightedQuestions(pool, n) {
  if (pool.length <= n) return [...pool];
  const selected = [];
  const remaining = [...pool];
  while (selected.length < n && remaining.length > 0) {
    const totalWeight = remaining.reduce((s, q) => s + q.id, 0);
    let r = Math.random() * totalWeight;
    let idx = 0;
    for (let i = 0; i < remaining.length; i++) {
      r -= remaining[i].id;
      if (r <= 0) { idx = i; break; }
    }
    selected.push(remaining.splice(idx, 1)[0]);
  }
  return selected;
}

// ═══════════════════════════════════════════════════════════════════
// 5. classifyDomain — 依關鍵字判斷領域
// ═══════════════════════════════════════════════════════════════════
function classifyDomain(question) {
  const corpus = [
    question.questionText,
    ...question.options.map(o => o.text),
    ...question.answers.map(a => {
      const opt = question.options.find(o => o.key === a);
      return opt ? opt.text : '';
    }),
  ].join(' ').toLowerCase();

  let best = null, bestScore = 0;
  for (const domain of DOMAIN_RULES) {
    const score = domain.keywords.filter(k => corpus.includes(k)).length;
    if (score > bestScore) { bestScore = score; best = domain; }
  }
  return best || DOMAIN_RULES[DOMAIN_RULES.length - 1];
}

// ═══════════════════════════════════════════════════════════════════
// 6. startExam
// ═══════════════════════════════════════════════════════════════════
function startExam() {
  examQuestions = sampleWeightedQuestions(allQuestions, EXAM_SIZE);
  // 依題號遞增排序方便閱讀
  examQuestions.sort((a, b) => a.id - b.id);
  userAnswers  = {};
  markedSet    = new Set();
  currentIndex = 0;
  examElapsed  = 0;
  startTime    = Date.now();

  // 預先分類領域
  examQuestions.forEach(q => { q.domain = classifyDomain(q); });

  showScreen('screen-question');
  renderQuestionPage(currentIndex);
  startTimer();
}

// ═══════════════════════════════════════════════════════════════════
// 7. renderQuestionPage
// ═══════════════════════════════════════════════════════════════════
function renderQuestionPage(idx) {
  const q = examQuestions[idx];
  const isMulti = q.answers.length >= 2;
  currentIndex = idx;

  // 題號 / 進度
  $('q-current').textContent = idx + 1;
  $('q-total').textContent   = examQuestions.length;
  updateProgressBar();

  // 徽章
  $('q-num-badge').textContent = `Q${q.id}`;
  const typeBadge = $('q-type-badge');
  typeBadge.textContent = isMulti ? '複選題' : '單選題';
  typeBadge.className = 'q-type-badge' + (isMulti ? ' multi' : '');
  $('q-domain-badge').textContent = q.domain ? q.domain.label.split('/')[0].trim() : '未分類';

  // 標記
  const markBtn = $('btn-mark');
  const isMarked = markedSet.has(idx);
  markBtn.setAttribute('aria-pressed', isMarked);
  markBtn.querySelector('.mark-text').textContent = isMarked ? '已標記' : '標記';

  // 題目文字（安全）
  $('q-text').textContent = q.questionText;

  // 選項
  const container = $('options-container');
  container.innerHTML = '';
  const selected = userAnswers[idx] || new Set();

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (selected.has(opt.key) ? ' selected' : '');
    btn.setAttribute('data-key', opt.key);
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-pressed', selected.has(opt.key) ? 'true' : 'false');

    const keySpan  = document.createElement('span');
    keySpan.className = 'option-key';
    keySpan.textContent = opt.key;

    const textSpan = document.createElement('span');
    textSpan.className = 'option-text';
    textSpan.textContent = opt.text;

    btn.appendChild(keySpan);
    btn.appendChild(textSpan);
    btn.addEventListener('click', () => handleOptionClick(idx, opt.key, isMulti));
    container.appendChild(btn);
  });

  // 導覽按鈕
  $('btn-prev').disabled = idx === 0;
  $('btn-next').disabled = idx === examQuestions.length - 1;
}

function handleOptionClick(idx, key, isMulti) {
  if (!userAnswers[idx]) userAnswers[idx] = new Set();
  const sel = userAnswers[idx];
  if (isMulti) {
    if (sel.has(key)) sel.delete(key); else sel.add(key);
  } else {
    sel.clear(); sel.add(key);
  }
  renderQuestionPage(idx);
  updateProgressBar();
}

function updateProgressBar() {
  const answered = Object.keys(userAnswers).filter(k => userAnswers[k].size > 0).length;
  const pct = (answered / examQuestions.length) * 100;
  $('exam-progress-bar').style.width = pct + '%';
  $('exam-answered-count').textContent = `${answered} / ${examQuestions.length} 已作答`;
}

// ═══════════════════════════════════════════════════════════════════
// 8. renderReviewPage
// ═══════════════════════════════════════════════════════════════════
function renderReviewPage() {
  stopTimer(); // accumulates examElapsed and sets startTime = null

  const grid = $('review-grid');
  grid.innerHTML = '';

  let answeredCount = 0, markedCount = 0;

  examQuestions.forEach((q, i) => {
    const isAnswered = userAnswers[i] && userAnswers[i].size > 0;
    const isMarked   = markedSet.has(i);
    const isMulti    = q.answers.length >= 2;
    if (isAnswered) answeredCount++;
    if (isMarked)   markedCount++;

    const item = document.createElement('div');
    item.className = 'review-item' + (isAnswered ? ' answered' : '') + (isMarked ? ' marked' : '');
    item.setAttribute('role', 'listitem');
    item.setAttribute('tabindex', '0');
    item.title = `前往第 ${i + 1} 題`;

    const numSpan = document.createElement('span');
    numSpan.className = 'ri-num';
    numSpan.textContent = i + 1;

    const info = document.createElement('div');
    info.className = 'ri-info';

    const typeSpan = document.createElement('span');
    typeSpan.className = 'ri-type';
    typeSpan.textContent = isMulti ? '複選' : '單選';

    const statusSpan = document.createElement('span');
    statusSpan.className = 'ri-status';
    statusSpan.textContent = isAnswered ? '✔ 已作答' : '○ 未作答';

    info.appendChild(typeSpan);
    info.appendChild(statusSpan);
    if (isMarked) {
      const markSpan = document.createElement('span');
      markSpan.className = 'ri-mark';
      markSpan.textContent = '🚩 已標記';
      info.appendChild(markSpan);
    }

    item.appendChild(numSpan);
    item.appendChild(info);

    const goTo = () => {
      showScreen('screen-question');
      startTimer();
      renderQuestionPage(i);
    };
    item.addEventListener('click', goTo);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') goTo(); });
    grid.appendChild(item);
  });

  const unanswered = examQuestions.length - answeredCount;
  $('review-answered').textContent   = answeredCount;
  $('review-unanswered').textContent = unanswered;
  $('review-marked').textContent     = markedCount;

  const submitBtn = $('btn-submit');
  submitBtn.disabled = unanswered > 0;

  showScreen('screen-review');
}

// ═══════════════════════════════════════════════════════════════════
// 9. gradeExam
// ═══════════════════════════════════════════════════════════════════
function gradeExam() {
  let correctCount = 0;
  const wrongItems = [];
  const domainStats = {}; // domain.id -> { correct, total }

  DOMAIN_RULES.forEach(d => { domainStats[d.id] = { correct: 0, total: 0, label: d.label }; });

  examQuestions.forEach((q, i) => {
    const domainId = q.domain ? q.domain.id : 'management';
    domainStats[domainId].total++;

    const selected = userAnswers[i] ? [...userAnswers[i]].sort() : [];
    const correct  = [...q.answers].sort();
    const isCorrect = selected.length === correct.length && correct.every(a => selected.includes(a));

    if (isCorrect) {
      correctCount++;
      domainStats[domainId].correct++;
    } else {
      wrongItems.push({ q, i, selected, correct });
    }
  });

  const score = Math.round((correctCount / examQuestions.length) * TOTAL_SCORE);
  return { score, correctCount, wrongItems, domainStats };
}

// ═══════════════════════════════════════════════════════════════════
// 10. renderResultPage
// ═══════════════════════════════════════════════════════════════════
function renderResultPage(result) {
  stopTimer();
  const { score, correctCount, wrongItems, domainStats } = result;
  const passed   = score >= PASS_SCORE;
  const wrongCnt = examQuestions.length - correctCount;

  // Hero
  const hero = $('result-hero');
  hero.className = 'result-hero ' + (passed ? 'pass' : 'fail');
  $('result-icon').textContent = passed ? '🏆' : '📖';
  $('result-status-text').textContent = passed ? `恭喜通過！ (${score} 分)` : `未達及格 (${score} 分)`;

  $('result-score').textContent = score;
  $('stat-time').textContent    = formatTime(examElapsed);
  $('stat-correct').textContent = `${correctCount} / ${examQuestions.length}`;
  $('stat-wrong').textContent   = wrongCnt;

  // Score ring
  const circ = 2 * Math.PI * 52; // ≈327
  const pct  = score / TOTAL_SCORE;
  const ring = $('ring-progress');
  ring.style.strokeDashoffset = circ * (1 - pct);
  ring.setAttribute('class', 'ring-progress ' + (passed ? 'pass' : 'fail'));

  // Domain breakdown
  const domainEl = $('domain-breakdown');
  domainEl.innerHTML = '';
  DOMAIN_RULES.forEach(d => {
    const st  = domainStats[d.id];
    if (st.total === 0) return;
    const pct = Math.round((st.correct / st.total) * 100);
    const tier = pct >= 70 ? 'high' : pct >= 40 ? 'mid' : 'low';
    const row  = document.createElement('div');
    row.className = 'domain-row';

    const top = document.createElement('div');
    top.className = 'domain-row-top';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'domain-name';
    nameSpan.textContent = d.label;

    const pctSpan = document.createElement('span');
    pctSpan.className = `domain-pct ${tier}`;
    pctSpan.textContent = `${pct}%`;

    top.appendChild(nameSpan);
    top.appendChild(pctSpan);

    const barWrap = document.createElement('div');
    barWrap.className = 'domain-bar-wrap';
    const bar = document.createElement('div');
    bar.className = `domain-bar ${tier}`;
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = pct + '%'; }, 100);
    barWrap.appendChild(bar);

    const sub = document.createElement('div');
    sub.className = 'domain-sub';
    sub.textContent = `${st.correct} / ${st.total} 題正確`;

    row.appendChild(top);
    row.appendChild(barWrap);
    row.appendChild(sub);
    domainEl.appendChild(row);
  });

  // Wrong list
  const wrongEl = $('wrong-list');
  wrongEl.innerHTML = '';
  if (wrongItems.length === 0) {
    const p = document.createElement('p');
    p.style.cssText = 'color:var(--green);text-align:center;padding:1rem;';
    p.textContent = '🎉 全部答對！';
    wrongEl.appendChild(p);
  } else {
    wrongItems.forEach(({ q, i, selected, correct }) => {
      const item = document.createElement('div');
      item.className = 'wrong-item';

      const header = document.createElement('div');
      header.className = 'wrong-item-header';

      const numBadge = document.createElement('span');
      numBadge.className = 'wrong-num';
      numBadge.textContent = `Q${i + 1} (ID:${q.id})`;

      const typeSpan = document.createElement('span');
      typeSpan.className = 'wrong-type';
      typeSpan.textContent = q.answers.length >= 2 ? '複選題' : '單選題';

      const domainSpan = document.createElement('span');
      domainSpan.className = 'wrong-domain';
      domainSpan.textContent = q.domain ? q.domain.label.split('/')[0].trim() : '';

      header.appendChild(numBadge);
      header.appendChild(typeSpan);
      header.appendChild(domainSpan);

      const qText = document.createElement('p');
      qText.className = 'wrong-q-text';
      qText.textContent = q.questionText;

      const answers = document.createElement('div');
      answers.className = 'wrong-answers';

      // 你的答案
      const yourRow = document.createElement('div');
      yourRow.className = 'wrong-answer-row';
      const yourLabel = document.createElement('span');
      yourLabel.className = 'answer-label your';
      yourLabel.textContent = '你的答案：';
      const yourVal = document.createElement('span');
      yourVal.className = 'answer-val';
      if (selected.length === 0) {
        yourVal.textContent = '（未作答）';
      } else {
        yourVal.textContent = selected.map(k => {
          const o = q.options.find(x => x.key === k);
          return `${k}. ${o ? o.text : ''}`;
        }).join('　');
      }
      yourRow.appendChild(yourLabel);
      yourRow.appendChild(yourVal);

      // 正確答案
      const corrRow = document.createElement('div');
      corrRow.className = 'wrong-answer-row';
      const corrLabel = document.createElement('span');
      corrLabel.className = 'answer-label correct';
      corrLabel.textContent = '正確答案：';
      const corrVal = document.createElement('span');
      corrVal.className = 'answer-val';
      corrVal.textContent = correct.map(k => {
        const o = q.options.find(x => x.key === k);
        return `${k}. ${o ? o.text : ''}`;
      }).join('　');
      corrRow.appendChild(corrLabel);
      corrRow.appendChild(corrVal);

      answers.appendChild(yourRow);
      answers.appendChild(corrRow);

      item.appendChild(header);
      item.appendChild(qText);
      item.appendChild(answers);
      wrongEl.appendChild(item);
    });
  }

  showScreen('screen-result');
}

// ── Timer ─────────────────────────────────────────────────────────
function startTimer() {
  if (timerInterval) return;
  if (!startTime) startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = examElapsed + Math.floor((Date.now() - startTime) / 1000);
    $('exam-timer').textContent = formatTime(elapsed);
  }, 1000);
}
function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  if (startTime) examElapsed += Math.floor((Date.now() - startTime) / 1000);
  startTime = null;
}
function formatTime(s) {
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${h}:${m}:${sec}`;
}

// ── Screen helper ─────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = $(id);
  if (el) { el.classList.add('active'); el.scrollTop = 0; }
}

// ── Event Wiring ──────────────────────────────────────────────────
function wireEvents() {
  $('btn-start').addEventListener('click', startExam);

  $('btn-prev').addEventListener('click', () => {
    if (currentIndex > 0) renderQuestionPage(currentIndex - 1);
  });
  $('btn-next').addEventListener('click', () => {
    if (currentIndex < examQuestions.length - 1) renderQuestionPage(currentIndex + 1);
  });
  $('btn-review').addEventListener('click', renderReviewPage);
  $('btn-mark').addEventListener('click', () => {
    if (markedSet.has(currentIndex)) markedSet.delete(currentIndex);
    else markedSet.add(currentIndex);
    renderQuestionPage(currentIndex);
  });

  $('btn-back-exam').addEventListener('click', () => {
    startTime = Date.now();
    showScreen('screen-question');
    startTimer();
    renderQuestionPage(currentIndex);
  });

  $('btn-submit').addEventListener('click', () => {
    const unanswered = examQuestions.filter((_, i) => !userAnswers[i] || userAnswers[i].size === 0).length;
    if (unanswered > 0) {
      const w = $('submit-warning');
      w.classList.remove('hidden');
      setTimeout(() => w.classList.add('hidden'), 3000);
      return;
    }
    stopTimer();
    const result = gradeExam();
    renderResultPage(result);
  });

  $('btn-restart').addEventListener('click', () => {
    stopTimer();
    showScreen('screen-start');
  });
}

// ── Init ──────────────────────────────────────────────────────────
async function init() {
  wireEvents();
  try {
    const texts    = await loadQuestionBanks();
    const parsed   = texts.flatMap(t => parseMarkdownQuestions(t));
    allQuestions   = validateQuestions(parsed);

    if (allQuestions.length === 0) throw new Error('沒有解析到任何題目，請確認 MD 格式是否正確。');

    $('bank-count').textContent = `${allQuestions.length} 題`;
    $('btn-start').disabled = false;
  } catch (err) {
    console.error(err);
    $('bank-count').textContent = '載入失敗';
    const errEl = $('start-error');
    errEl.textContent = '⚠️ 題庫載入失敗：' + err.message;
    errEl.classList.remove('hidden');
  }
}

document.addEventListener('DOMContentLoaded', init);
