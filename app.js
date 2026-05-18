'use strict';

// ── 題庫檔案清單（相對路徑）────────────────────────────────────────
const QUESTION_FILES = [
  'saa_003_zh-TW.md',
];

const TOTAL_SCORE = 1000;

const MODES = {
  exam: {
    size: 65,
    timeLimit: null,
    weighted: true,
    hasReview: true,
    hasMark: true,
    passScore: 700,
  },
  quiz: {
    size: 10,
    timeLimit: 15 * 60,
    weighted: false,
    hasReview: false,
    hasMark: false,
    passScore: null,
  },
};

let currentMode = 'exam';

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
    // 答案（支援 "A"、"A,B" 與 "AB" 三種格式）
    const anMatch = block.match(/\*\*答案\*\*\s*\n([A-Za-z,]+)/);

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

    // 複選 or 單選：逗號分隔 "A,B" 或連寫 "AB"
    const answers = answerRaw.includes(',')
      ? answerRaw.split(',').map(a => a.trim()).filter(a => /^[A-Z]$/.test(a))
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
// 6. switchMode — 切換模式並更新首頁 meta
// ═══════════════════════════════════════════════════════════════════
function switchMode(mode) {
  currentMode = mode;
  const cfg = MODES[mode];

  document.querySelectorAll('.mode-tab').forEach(btn => {
    const isActive = btn.dataset.mode === mode;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  $('meta-size').textContent = `${cfg.size} 題`;

  if (cfg.timeLimit) {
    $('meta-time-label').textContent = '限制時間';
    $('meta-time').textContent = `${cfg.timeLimit / 60} 分鐘`;
  } else {
    $('meta-time-label').textContent = '建議時間';
    $('meta-time').textContent = '130 分鐘';
  }

  $('meta-pass-item').style.display = cfg.passScore ? '' : 'none';
}

// ═══════════════════════════════════════════════════════════════════
// 7. startExam
// ═══════════════════════════════════════════════════════════════════
function startExam() {
  const cfg = MODES[currentMode];

  if (cfg.weighted) {
    examQuestions = sampleWeightedQuestions(allQuestions, cfg.size);
    examQuestions.sort((a, b) => a.id - b.id);
  } else {
    const pool = [...allQuestions];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    examQuestions = pool.slice(0, cfg.size);
  }

  userAnswers  = {};
  markedSet    = new Set();
  currentIndex = 0;
  examElapsed  = 0;
  startTime    = Date.now();

  if (cfg.weighted) {
    examQuestions.forEach(q => { q.domain = classifyDomain(q); });
  }

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

  const cfg = MODES[currentMode];

  // 徽章
  $('q-num-badge').textContent = `Q${q.id}`;
  const typeBadge = $('q-type-badge');
  typeBadge.textContent = isMulti ? '複選題' : '單選題';
  typeBadge.className = 'q-type-badge' + (isMulti ? ' multi' : '');
  $('q-domain-badge').textContent = q.domain ? q.domain.label.split('/')[0].trim() : '未分類';
  $('q-domain-badge').style.display = cfg.weighted ? '' : 'none';

  // 標記
  const markBtn = $('btn-mark');
  markBtn.style.display = cfg.hasMark ? '' : 'none';
  if (cfg.hasMark) {
    const isMarked = markedSet.has(idx);
    markBtn.setAttribute('aria-pressed', isMarked);
    markBtn.querySelector('.mark-text').textContent = isMarked ? '已標記' : '標記';
  }

  // 答題列表按鈕
  $('btn-review').style.display = cfg.hasReview ? '' : 'none';

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
  const isLast = idx === examQuestions.length - 1;
  $('btn-prev').disabled = idx === 0;

  if (!cfg.hasReview && isLast) {
    $('btn-next').textContent = '送出批改 ✔';
    $('btn-next').disabled = false;
    $('btn-next').dataset.submitMode = 'true';
  } else {
    $('btn-next').textContent = '下一題 →';
    $('btn-next').disabled = isLast;
    delete $('btn-next').dataset.submitMode;
  }
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
  const cfg = MODES[currentMode];
  const { score, correctCount, wrongItems, domainStats } = result;
  const wrongCnt = examQuestions.length - correctCount;

  if (currentMode === 'quiz') {
    renderQuizResult(correctCount, wrongItems);
    return;
  }

  const passed = score >= cfg.passScore;

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
  const circ = 2 * Math.PI * 52;
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
  const timeLimit = MODES[currentMode].timeLimit;
  const timerEl = $('exam-timer');

  timerInterval = setInterval(() => {
    const elapsed = examElapsed + Math.floor((Date.now() - startTime) / 1000);

    if (timeLimit) {
      const remaining = timeLimit - elapsed;
      if (remaining <= 0) {
        stopTimer();
        const result = gradeExam();
        renderResultPage(result);
        return;
      }
      const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
      const ss = String(remaining % 60).padStart(2, '0');
      timerEl.textContent = `${mm}:${ss}`;
      timerEl.classList.toggle('timer-warning', remaining <= 60);
    } else {
      timerEl.textContent = formatTime(elapsed);
      timerEl.classList.remove('timer-warning');
    }
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

// ── Quiz Result ───────────────────────────────────────────────────
function renderQuizResult(correctCount, wrongItems) {
  const resultContainer = document.querySelector('.result-container');

  // 隱藏模擬考專用區塊
  $('result-hero').style.display = 'none';
  document.querySelector('.result-domains').style.display = 'none';
  document.querySelector('.result-wrong-list').style.display = 'none';

  // 移除舊的小考結果（避免重複）
  const old = document.getElementById('quiz-result-section');
  if (old) old.remove();

  const section = document.createElement('div');
  section.id = 'quiz-result-section';
  section.className = 'quiz-result-section';

  // 摘要
  const summary = document.createElement('div');
  summary.className = 'quiz-summary';
  summary.innerHTML = `
    <div class="quiz-summary-score">${correctCount} <span>/ ${examQuestions.length}</span></div>
    <div class="quiz-summary-label">答對題數</div>
    <div class="quiz-summary-time">作答時間 ${formatTime(examElapsed)}</div>
  `;
  section.appendChild(summary);

  // 全題對錯清單
  const listTitle = document.createElement('h2');
  listTitle.className = 'section-title';
  listTitle.textContent = '每題結果';
  section.appendChild(listTitle);

  examQuestions.forEach((q, i) => {
    const selected = userAnswers[i] ? [...userAnswers[i]].sort() : [];
    const correct  = [...q.answers].sort();
    const isCorrect = selected.length === correct.length && correct.every(a => selected.includes(a));

    const item = document.createElement('div');
    item.className = `quiz-result-item ${isCorrect ? 'correct' : 'wrong'}`;

    const statusIcon = isCorrect ? '✅' : '❌';
    const yourText = selected.length === 0
      ? '（未作答）'
      : selected.map(k => { const o = q.options.find(x => x.key === k); return `${k}. ${o ? o.text : ''}`; }).join('　');
    const corrText = correct.map(k => { const o = q.options.find(x => x.key === k); return `${k}. ${o ? o.text : ''}`; }).join('　');

    item.innerHTML = `
      <div class="qri-header">
        <span class="qri-icon">${statusIcon}</span>
        <span class="qri-num">Q${i + 1}</span>
        <span class="qri-type">${q.answers.length >= 2 ? '複選' : '單選'}</span>
      </div>
      <div class="qri-answers">
        <div class="qri-row"><span class="answer-label your">你的答案：</span><span class="answer-val">${yourText}</span></div>
        ${isCorrect ? '' : `<div class="qri-row"><span class="answer-label correct">正確答案：</span><span class="answer-val">${corrText}</span></div>`}
      </div>
    `;
    section.appendChild(item);
  });

  resultContainer.insertBefore(section, $('btn-restart'));
  showScreen('screen-result');

  // 再次挑戰後恢復模擬考專用區塊
  $('btn-restart').onclick = () => {
    $('result-hero').style.display = '';
    document.querySelector('.result-domains').style.display = '';
    document.querySelector('.result-wrong-list').style.display = '';
    const s = document.getElementById('quiz-result-section');
    if (s) s.remove();
    stopTimer();
    showScreen('screen-start');
  };
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

  document.querySelectorAll('.mode-tab').forEach(btn => {
    btn.addEventListener('click', () => switchMode(btn.dataset.mode));
  });

  $('btn-prev').addEventListener('click', () => {
    if (currentIndex > 0) renderQuestionPage(currentIndex - 1);
  });
  $('btn-next').addEventListener('click', () => {
    if ($('btn-next').dataset.submitMode) {
      stopTimer();
      const result = gradeExam();
      renderResultPage(result);
      return;
    }
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
    // 模擬考模式還原（小考模式的 btn-restart 由 renderQuizResult 覆寫 onclick）
    if (currentMode !== 'quiz') {
      stopTimer();
      showScreen('screen-start');
    }
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
