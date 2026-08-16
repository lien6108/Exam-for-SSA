'use strict';

// ── 題庫檔案清單（相對路徑）────────────────────────────────────────
const QUESTION_FILES = [
  'saa_003_zh-TW.md',
];

const TOTAL_SCORE = 1000;
const WRONG_BANK_STORAGE_KEY = 'aws-saa-wrong-bank-v1';
const WRONG_BANK_MAX_RECORDS = 50;

const MODES = {
  exam: {
    name: '模擬考',
    size: 65,
    timeLimit: null,
    weighted: true,
    hasReview: true,
    hasMark: true,
    passScore: 700,
    rules: [
      '每次從題庫隨機抽取 65 題（題號越大，抽中機率越高）',
      '單選題選擇一個答案，複選題需選擇所有正確答案',
      '可標記題目並隨時切換上一題 / 下一題',
      '全部作答完成後，進入答題列表確認後才可送出批改',
      '滿分 1000 分，及格門檻 700 分，送出後立即顯示成績與領域分析',
    ],
  },
  quiz: {
    name: '小考',
    size: 10,
    timeLimit: 15 * 60,
    weighted: false,
    hasReview: false,
    hasMark: false,
    passScore: null,
    rules: [
      '隨機抽取 10 題快速測驗',
      '作答時間 15 分鐘（倒數計時）',
      '無及格分數限制，送出後立即檢視每題解析與答案',
    ],
  },
  chapter: {
    name: '章節測驗',
    size: 20,
    timeLimit: 30 * 60,
    weighted: false,
    hasReview: true,
    hasMark: true,
    passScore: null,
    rules: [
      '依選定章節主題隨機抽取 20 題',
      '作答時間 30 分鐘（倒數計時）',
      '無及格分數限制，適合針對特定領域集中特訓',
      '支援標記題號與答題列表檢查，送出後即時呈現正確率與全題解析',
    ],
  },
};

let currentMode = 'exam';
let selectedChapterId = 'compute';

// ── 章節領域定義 ──────────────────────────────────────────────────
const CHAPTER_DOMAINS = [
  {
    id: 'compute',
    icon: '💻',
    title: 'Compute & Containers',
    label: '運算與容器',
    desc: 'EC2, Lambda, ECS, EKS, Fargate, Serverless, Batch',
    rawCategories: ['運算', '容器', '無伺服器'],
  },
  {
    id: 'storage',
    icon: '📦',
    title: 'Storage & Transfer',
    label: '儲存與傳輸',
    desc: 'S3, EBS, EFS, FSx, DataSync, Snowball, Storage Gateway',
    rawCategories: ['儲存', '移轉和傳輸'],
  },
  {
    id: 'database',
    icon: '🗄️',
    title: 'Database & Analytics',
    label: '資料庫與分析',
    desc: 'RDS, Aurora, DynamoDB, ElastiCache, Redshift, Athena, EMR',
    rawCategories: ['資料庫', '分析'],
  },
  {
    id: 'networking',
    icon: '🌐',
    title: 'Networking & CDN',
    label: '網路與內容傳遞',
    desc: 'VPC, CloudFront, Route 53, ALB/NLB, Direct Connect, VPN',
    rawCategories: ['網路連結和內容交付'],
  },
  {
    id: 'security',
    icon: '🛡️',
    title: 'Security & Governance',
    label: '安全與治理',
    desc: 'IAM, Organizations, KMS, CloudTrail, Config, Cost Management',
    rawCategories: ['安全、身分與合規', '管理與控管', 'AWS Cost Management'],
  },
  {
    id: 'integration',
    icon: '🔄',
    title: 'Integration & Others',
    label: '應用整合與其他',
    desc: 'SQS, SNS, EventBridge, Step Functions, ML, Media Services',
    rawCategories: ['應用程式整合', '機器學習', '前端網頁和行動裝置', '媒體服務'],
  },
  {
    id: 'all',
    icon: '📚',
    title: 'All Domains Mixed',
    label: '全章節綜合隨機',
    desc: '從全部領域隨機抽取 20 題綜合特訓',
    rawCategories: [],
  },
];

// ── 領域關鍵字規則（模擬考雷達/分析使用）───────────────────────────
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
let examQuestions = [];   // 本次抽到的題目
let userAnswers   = {};   // { examIndex: Set<string> }
let markedSet     = new Set();
let currentIndex  = 0;
let timerInterval = null;
let startTime     = null;
let examElapsed   = 0;   // 秒
let wrongBankRecords = [];
let activeWrongRecordId = null;
let currentAttemptSaved = false;

// ── DOM 快取 ──────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

// ═══════════════════════════════════════════════════════════════════
// Wrong Bank — 錯題庫保存與瀏覽
// ═══════════════════════════════════════════════════════════════════
function loadWrongBank() {
  try {
    const raw = localStorage.getItem(WRONG_BANK_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    wrongBankRecords = Array.isArray(parsed) ? parsed.filter(record => (
      record && record.id && record.createdAt && Array.isArray(record.items)
    )) : [];
  } catch (err) {
    console.warn('錯題庫讀取失敗:', err);
    wrongBankRecords = [];
  }
  updateWrongBankEntry();
}

function saveWrongBank() {
  try {
    localStorage.setItem(WRONG_BANK_STORAGE_KEY, JSON.stringify(wrongBankRecords));
  } catch (err) {
    console.warn('錯題庫保存失敗:', err);
  }
  updateWrongBankEntry();
}

function getDateKey(date = new Date()) {
  return `${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
}

function getAttemptTitle() {
  if (currentMode === 'chapter') {
    const chapter = CHAPTER_DOMAINS.find(c => c.id === selectedChapterId) || CHAPTER_DOMAINS[0];
    return chapter.title;
  }
  return currentMode === 'quiz' ? '小考 · 隨機練習' : '模擬考 · 綜合題型';
}

function getAttemptIcon(record) {
  if (record.mode === 'chapter') {
    const chapter = CHAPTER_DOMAINS.find(c => c.id === record.chapterId);
    return chapter ? chapter.icon : '🏷️';
  }
  return record.mode === 'quiz' ? '⚡' : '📝';
}

function formatRecordTime(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
}

function updateWrongBankEntry() {
  const countEl = $('wrong-bank-count');
  if (!countEl) return;
  const wrongCount = wrongBankRecords.reduce((total, record) => total + record.items.length, 0);
  countEl.innerHTML = `${wrongBankRecords.length} 次測驗 <span aria-hidden="true">·</span> ${wrongCount} 題 →`;
}

function saveAttemptToWrongBank(result) {
  if (currentAttemptSaved || !result.wrongItems.length) return;
  currentAttemptSaved = true;

  const now = new Date();
  const record = {
    id: `${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: now.toISOString(),
    dateKey: getDateKey(now),
    mode: currentMode,
    chapterId: currentMode === 'chapter' ? selectedChapterId : null,
    title: getAttemptTitle(),
    score: result.score,
    correctCount: result.correctCount,
    total: examQuestions.length,
    elapsed: examElapsed,
    items: result.wrongItems.map(({ q, i, selected, correct }) => ({
      questionNumber: i + 1,
      questionId: q.id,
      type: q.answers.length >= 2 ? '複選題' : '單選題',
      domain: q.domain ? q.domain.label.split('/')[0].trim() : '',
      questionText: q.questionText,
      options: q.options,
      selected,
      correct,
      explanation: q.explanation || '',
    })),
  };

  wrongBankRecords = [record, ...wrongBankRecords].slice(0, WRONG_BANK_MAX_RECORDS);
  saveWrongBank();
}

function createAnswerText(options, keys, emptyText = '（未作答）') {
  if (!keys || keys.length === 0) return emptyText;
  return keys.map(key => {
    const option = options.find(item => item.key === key);
    return `${key}. ${option ? option.text : ''}`;
  }).join('　');
}

function createWrongDetailItem(item, index) {
  const card = document.createElement('article');
  card.className = 'wrong-item wrong-detail-item';
  card.style.animationDelay = `${Math.min(index * 45, 360)}ms`;

  const header = document.createElement('div');
  header.className = 'wrong-item-header';
  const number = document.createElement('span');
  number.className = 'wrong-num';
  number.textContent = `Q${item.questionNumber} (ID:${item.questionId})`;
  const type = document.createElement('span');
  type.className = 'wrong-type';
  type.textContent = item.type || '題目';
  const domain = document.createElement('span');
  domain.className = 'wrong-domain';
  domain.textContent = item.domain || '未分類';
  header.append(number, type, domain);

  const question = document.createElement('p');
  question.className = 'wrong-q-text';
  question.textContent = item.questionText;

  const answers = document.createElement('div');
  answers.className = 'wrong-answers';
  const yourRow = document.createElement('div');
  yourRow.className = 'wrong-answer-row';
  const yourLabel = document.createElement('span');
  yourLabel.className = 'answer-label your';
  yourLabel.textContent = '你的答案：';
  const yourValue = document.createElement('span');
  yourValue.className = 'answer-val';
  yourValue.textContent = createAnswerText(item.options || [], item.selected || []);
  yourRow.append(yourLabel, yourValue);

  const correctRow = document.createElement('div');
  correctRow.className = 'wrong-answer-row';
  const correctLabel = document.createElement('span');
  correctLabel.className = 'answer-label correct';
  correctLabel.textContent = '正確答案：';
  const correctValue = document.createElement('span');
  correctValue.className = 'answer-val';
  correctValue.textContent = createAnswerText(item.options || [], item.correct || []);
  correctRow.append(correctLabel, correctValue);
  answers.append(yourRow, correctRow);

  card.append(header, question, answers);

  const explanation = document.createElement('div');
  explanation.className = 'explanation';
  const explanationLabel = document.createElement('span');
  explanationLabel.className = 'explanation-label';
  explanationLabel.textContent = '詳解';
  const explanationText = document.createElement('p');
  explanationText.className = 'explanation-text';
  explanationText.textContent = item.explanation || '題庫目前沒有提供這題的詳解。';
  explanation.append(explanationLabel, explanationText);
  card.appendChild(explanation);

  return card;
}

function renderWrongBank() {
  const grid = $('wrong-bank-grid');
  const empty = $('wrong-bank-empty');
  const summary = $('wrong-bank-summary');
  if (!grid || !empty || !summary) return;

  grid.innerHTML = '';
  const totalWrong = wrongBankRecords.reduce((total, record) => total + record.items.length, 0);
  summary.innerHTML = `<strong>${wrongBankRecords.length} 次</strong>累積 ${totalWrong} 題錯題`;
  empty.classList.toggle('hidden', wrongBankRecords.length > 0);

  wrongBankRecords.forEach((record, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'wrong-bank-card';
    card.style.animation = `fadeUp .4s ease ${Math.min(index * 45, 360)}ms both`;

    const top = document.createElement('div');
    top.className = 'wrong-bank-card-top';
    const date = document.createElement('span');
    date.className = 'wrong-bank-date';
    date.textContent = record.dateKey || getDateKey(new Date(record.createdAt));
    const mode = document.createElement('span');
    mode.className = 'wrong-bank-mode';
    mode.textContent = `${getAttemptIcon(record)} ${record.mode === 'chapter' ? '章節測驗' : record.mode === 'quiz' ? '小考' : '模擬考'}`;
    top.append(date, mode);

    const title = document.createElement('span');
    title.className = 'wrong-bank-card-title';
    title.textContent = record.title;
    const meta = document.createElement('span');
    meta.className = 'wrong-bank-card-meta';
    meta.innerHTML = `<strong>${record.items.length}</strong> 題錯題 <span aria-hidden="true">·</span> ${record.correctCount}/${record.total} 題答對`;
    const time = document.createElement('span');
    time.className = 'wrong-bank-card-time';
    time.textContent = `${formatRecordTime(record.createdAt)} 建立紀錄`;

    card.append(top, title, meta, time);
    card.addEventListener('click', () => renderWrongDetail(record.id));
    grid.appendChild(card);
  });
}

function renderWrongDetail(recordId) {
  const record = wrongBankRecords.find(item => item.id === recordId);
  if (!record) return;
  activeWrongRecordId = recordId;

  const heading = $('wrong-detail-heading');
  const summary = $('wrong-detail-summary');
  const list = $('wrong-detail-list');
  if (!heading || !summary || !list) return;

  heading.innerHTML = '';
  const kicker = document.createElement('span');
  kicker.className = 'archive-kicker';
  kicker.textContent = `${record.dateKey} · ${record.mode === 'chapter' ? 'CHAPTER REVIEW' : 'QUIZ REVIEW'}`;
  const title = document.createElement('h1');
  title.className = 'archive-title';
  title.textContent = record.title;
  const subtitle = document.createElement('p');
  subtitle.className = 'archive-subtitle';
  subtitle.textContent = `${formatRecordTime(record.createdAt)} 建立 · 作答 ${formatTime(record.elapsed || 0)}`;
  heading.append(kicker, title, subtitle);
  summary.innerHTML = `<strong>${record.items.length} 題</strong>需要重新理解<br>答對 ${record.correctCount} / ${record.total} 題`;

  list.innerHTML = '';
  record.items.forEach((item, index) => list.appendChild(createWrongDetailItem(item, index)));
  showScreen('screen-wrong-detail');
}

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

    // 詳解（選填）
    const exMatch = block.match(/\*\*詳解\*\*\s*\n([\s\S]*?)(?=\n\*\*分類|$)/);
    const explanation = exMatch ? exMatch[1].trim() : '';

    // 分類標籤
    const catMatch = block.match(/\*\*分類[：:]\*\*\s*([^\n\r]+)/);
    const category = catMatch ? catMatch[1].trim() : '';

    questions.push({ id, questionText, options, answers, explanation, category });
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
// 5. classifyDomain & getQuestionChapter
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

function getQuestionChapter(q) {
  if (q.category) {
    const found = CHAPTER_DOMAINS.find(c => c.id !== 'all' && c.rawCategories.includes(q.category));
    if (found) return found;
  }
  const d = classifyDomain(q);
  const map = {
    compute: 'compute',
    storage: 'storage',
    database: 'database',
    networking: 'networking',
    appintegration: 'integration',
    management: 'security',
  };
  const targetId = map[d.id] || 'compute';
  return CHAPTER_DOMAINS.find(c => c.id === targetId) || CHAPTER_DOMAINS[0];
}

function getQuestionsByChapter(chapterId) {
  if (chapterId === 'all') return allQuestions;
  const chapter = CHAPTER_DOMAINS.find(c => c.id === chapterId);
  if (!chapter) return allQuestions;
  return allQuestions.filter(q => {
    if (q.category && chapter.rawCategories.includes(q.category)) return true;
    const assigned = getQuestionChapter(q);
    return assigned.id === chapterId;
  });
}

// ═══════════════════════════════════════════════════════════════════
// 6. renderChapterSelector
// ═══════════════════════════════════════════════════════════════════
function renderChapterSelector() {
  const grid = $('chapter-grid');
  if (!grid) return;
  grid.innerHTML = '';

  CHAPTER_DOMAINS.forEach(ch => {
    const count = getQuestionsByChapter(ch.id).length;
    const isSelected = ch.id === selectedChapterId;

    const card = document.createElement('button');
    card.type = 'button';
    card.className = `chapter-card ${isSelected ? 'selected' : ''}`;
    card.setAttribute('data-chapter-id', ch.id);
    card.setAttribute('aria-pressed', isSelected ? 'true' : 'false');

    card.innerHTML = `
      <div class="chapter-card-top">
        <span class="chapter-card-icon">${ch.icon}</span>
        <span class="chapter-card-badge">${count} 題</span>
      </div>
      <div class="chapter-card-title">${ch.title}</div>
      <div class="chapter-card-label">${ch.label}</div>
      <div class="chapter-card-desc">${ch.desc}</div>
    `;

    card.addEventListener('click', () => {
      selectedChapterId = ch.id;
      document.querySelectorAll('.chapter-card').forEach(c => {
        const active = c.getAttribute('data-chapter-id') === selectedChapterId;
        c.classList.toggle('selected', active);
        c.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      updateBankCountDisplay();
    });

    grid.appendChild(card);
  });
}

function updateBankCountDisplay() {
  const bankCountEl = $('bank-count');
  const bankLabelEl = $('meta-bank-label');
  if (!bankCountEl) return;

  if (currentMode === 'chapter') {
    const count = getQuestionsByChapter(selectedChapterId).length;
    if (bankLabelEl) bankLabelEl.textContent = '該章題數';
    bankCountEl.textContent = `${count} 題`;
  } else {
    if (bankLabelEl) bankLabelEl.textContent = '題庫數量';
    bankCountEl.textContent = `${allQuestions.length} 題`;
  }
}

// ═══════════════════════════════════════════════════════════════════
// 7. switchMode — 切換模式並更新首頁 meta 與規則
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

  // 章節選擇器顯示與隱藏
  const chapterWrap = $('chapter-select-wrap');
  if (chapterWrap) {
    chapterWrap.classList.toggle('hidden', mode !== 'chapter');
    if (mode === 'chapter') {
      renderChapterSelector();
    }
  }

  updateBankCountDisplay();

  // 更新規則清單
  const rulesList = $('rules-list');
  if (rulesList && cfg.rules) {
    rulesList.innerHTML = cfg.rules.map(r => `<li>${r}</li>`).join('');
  }
}

// ═══════════════════════════════════════════════════════════════════
// 8. startExam
// ═══════════════════════════════════════════════════════════════════
function startExam() {
  const cfg = MODES[currentMode];

  if (currentMode === 'chapter') {
    const pool = [...getQuestionsByChapter(selectedChapterId)];
    // Fisher-Yates 隨機打散
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    examQuestions = pool.slice(0, cfg.size);
    examQuestions.forEach(q => {
      q.domain = classifyDomain(q);
      q.chapterInfo = getQuestionChapter(q);
    });
  } else if (cfg.weighted) {
    examQuestions = sampleWeightedQuestions(allQuestions, cfg.size);
    examQuestions.sort((a, b) => a.id - b.id);
    examQuestions.forEach(q => {
      q.domain = classifyDomain(q);
      q.chapterInfo = getQuestionChapter(q);
    });
  } else {
    const pool = [...allQuestions];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    examQuestions = pool.slice(0, cfg.size);
    examQuestions.forEach(q => {
      q.domain = classifyDomain(q);
      q.chapterInfo = getQuestionChapter(q);
    });
  }

  userAnswers  = {};
  markedSet    = new Set();
  currentIndex = 0;
  examElapsed  = 0;
  startTime    = Date.now();
  currentAttemptSaved = false;

  showScreen('screen-question');
  renderQuestionPage(currentIndex);
  startTimer();
}

// ═══════════════════════════════════════════════════════════════════
// 9. renderQuestionPage
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

  const domainBadge = $('q-domain-badge');
  if (currentMode === 'chapter') {
    domainBadge.textContent = q.chapterInfo ? q.chapterInfo.title : '章節主題';
    domainBadge.style.display = '';
  } else if (cfg.weighted) {
    domainBadge.textContent = q.domain ? q.domain.label.split('/')[0].trim() : '未分類';
    domainBadge.style.display = '';
  } else {
    domainBadge.style.display = 'none';
  }

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
// 10. renderReviewPage
// ═══════════════════════════════════════════════════════════════════
function renderReviewPage() {
  stopTimer();

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
// 11. gradeExam
// ═══════════════════════════════════════════════════════════════════
function gradeExam() {
  let correctCount = 0;
  const wrongItems = [];
  const domainStats = {};

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
// 12. renderResultPage
// ═══════════════════════════════════════════════════════════════════
function renderResultPage(result) {
  stopTimer();
  saveAttemptToWrongBank(result);
  const cfg = MODES[currentMode];
  const { score, correctCount, wrongItems, domainStats } = result;
  const wrongCnt = examQuestions.length - correctCount;

  if (currentMode === 'quiz') {
    renderQuizResult(correctCount, wrongItems);
    return;
  }

  if (currentMode === 'chapter') {
    renderChapterResult(correctCount, wrongItems);
    return;
  }

  const passed = score >= cfg.passScore;

  // Hero
  const hero = $('result-hero');
  hero.style.display = '';
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
  const domainsEl = document.querySelector('.result-domains');
  domainsEl.style.display = '';
  const domainEl = $('domain-breakdown');
  domainEl.innerHTML = '';
  DOMAIN_RULES.forEach(d => {
    const st  = domainStats[d.id];
    if (st.total === 0) return;
    const pctVal = Math.round((st.correct / st.total) * 100);
    const tier = pctVal >= 70 ? 'high' : pctVal >= 40 ? 'mid' : 'low';
    const row  = document.createElement('div');
    row.className = 'domain-row';

    const top = document.createElement('div');
    top.className = 'domain-row-top';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'domain-name';
    nameSpan.textContent = d.label;

    const pctSpan = document.createElement('span');
    pctSpan.className = `domain-pct ${tier}`;
    pctSpan.textContent = `${pctVal}%`;

    top.appendChild(nameSpan);
    top.appendChild(pctSpan);

    const barWrap = document.createElement('div');
    barWrap.className = 'domain-bar-wrap';
    const bar = document.createElement('div');
    bar.className = `domain-bar ${tier}`;
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = pctVal + '%'; }, 100);
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
  const wrongListEl = document.querySelector('.result-wrong-list');
  wrongListEl.style.display = '';
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

      if (q.explanation) {
        const expEl = document.createElement('div');
        expEl.className = 'explanation';
        const expLabel = document.createElement('span');
        expLabel.className = 'explanation-label';
        expLabel.textContent = '詳解';
        const expText = document.createElement('p');
        expText.className = 'explanation-text';
        expText.textContent = q.explanation;
        expEl.appendChild(expLabel);
        expEl.appendChild(expText);
        item.appendChild(expEl);
      }

      wrongEl.appendChild(item);
    });
  }

  // 清除自訂結果區塊
  const oldQuiz = document.getElementById('quiz-result-section');
  if (oldQuiz) oldQuiz.remove();
  const oldChap = document.getElementById('chapter-result-section');
  if (oldChap) oldChap.remove();

  showScreen('screen-result');
}

// ── Chapter Result (無及格限制，全題解析與章節正確率) ───────────────
function renderChapterResult(correctCount, wrongItems) {
  const resultContainer = document.querySelector('.result-container');

  // 隱藏模擬考專屬區塊
  $('result-hero').style.display = 'none';
  document.querySelector('.result-domains').style.display = 'none';
  document.querySelector('.result-wrong-list').style.display = 'none';

  // 移除舊結果區塊
  const oldQuiz = document.getElementById('quiz-result-section');
  if (oldQuiz) oldQuiz.remove();
  const oldChap = document.getElementById('chapter-result-section');
  if (oldChap) oldChap.remove();

  const currentChapter = CHAPTER_DOMAINS.find(c => c.id === selectedChapterId) || CHAPTER_DOMAINS[0];
  const pct = Math.round((correctCount / examQuestions.length) * 100);

  const section = document.createElement('div');
  section.id = 'chapter-result-section';
  section.className = 'quiz-result-section';

  // 摘要卡片
  const summary = document.createElement('div');
  summary.className = 'quiz-summary chapter-summary';
  summary.innerHTML = `
    <div class="chapter-summary-badge">${currentChapter.icon} ${currentChapter.title}</div>
    <div class="quiz-summary-score">${pct}%</div>
    <div class="quiz-summary-label">答對 ${correctCount} / ${examQuestions.length} 題（正確率）</div>
    <div class="quiz-summary-time">作答時間 ${formatTime(examElapsed)}</div>
  `;
  section.appendChild(summary);

  // 每題結果列表
  const listTitle = document.createElement('h2');
  listTitle.className = 'section-title';
  listTitle.textContent = '每題結果與解析';
  section.appendChild(listTitle);

  examQuestions.forEach((q, i) => {
    const selected = userAnswers[i] ? [...userAnswers[i]].sort() : [];
    const correct  = [...q.answers].sort();
    const isCorrect = selected.length === correct.length && correct.every(a => selected.includes(a));

    const item = document.createElement('div');
    item.className = `quiz-result-item ${isCorrect ? 'correct' : 'wrong'}`;

    const statusIcon = isCorrect ? '✅' : '❌';

    const optionsHtml = q.options.map(opt => {
      const isCorrectOpt  = q.answers.includes(opt.key);
      const isSelectedOpt = selected.includes(opt.key);
      let cls = 'opt-neutral';
      if (isCorrectOpt) cls = 'opt-correct';
      else if (isSelectedOpt) cls = 'opt-wrong';
      const t = opt.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<div class="qri-option ${cls}"><span class="opt-key">${opt.key}</span><span class="opt-text">${t}</span></div>`;
    }).join('');

    const expHtml = q.explanation
      ? `<div class="explanation"><span class="explanation-label">詳解</span><p class="explanation-text">${q.explanation.replace(/</g, '&lt;')}</p></div>`
      : '';

    const qTextEscaped = q.questionText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    item.innerHTML = `
      <div class="qri-header">
        <span class="qri-icon">${statusIcon}</span>
        <span class="qri-num">Q${i + 1} (ID:${q.id})</span>
        <span class="qri-type">${q.answers.length >= 2 ? '複選' : '單選'}</span>
      </div>
      <p class="qri-q-text">${qTextEscaped}</p>
      <div class="qri-options">${optionsHtml}</div>
      ${expHtml}
    `;
    section.appendChild(item);
  });

  resultContainer.insertBefore(section, $('btn-restart'));
  showScreen('screen-result');

  // 再次挑戰按鈕綁定
  $('btn-restart').onclick = () => {
    $('result-hero').style.display = '';
    document.querySelector('.result-domains').style.display = '';
    document.querySelector('.result-wrong-list').style.display = '';
    const oldC = document.getElementById('chapter-result-section');
    if (oldC) oldC.remove();
    const oldQ = document.getElementById('quiz-result-section');
    if (oldQ) oldQ.remove();
    stopTimer();
    showScreen('screen-start');
  };
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

  // 移除舊結果
  const old = document.getElementById('quiz-result-section');
  if (old) old.remove();
  const oldChap = document.getElementById('chapter-result-section');
  if (oldChap) oldChap.remove();

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

    const optionsHtml = q.options.map(opt => {
      const isCorrectOpt  = q.answers.includes(opt.key);
      const isSelectedOpt = selected.includes(opt.key);
      let cls = 'opt-neutral';
      if (isCorrectOpt) cls = 'opt-correct';
      else if (isSelectedOpt) cls = 'opt-wrong';
      const t = opt.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `<div class="qri-option ${cls}"><span class="opt-key">${opt.key}</span><span class="opt-text">${t}</span></div>`;
    }).join('');

    const expHtml = q.explanation
      ? `<div class="explanation"><span class="explanation-label">詳解</span><p class="explanation-text">${q.explanation.replace(/</g, '&lt;')}</p></div>`
      : '';

    const qTextEscaped = q.questionText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    item.innerHTML = `
      <div class="qri-header">
        <span class="qri-icon">${statusIcon}</span>
        <span class="qri-num">Q${i + 1}</span>
        <span class="qri-type">${q.answers.length >= 2 ? '複選' : '單選'}</span>
      </div>
      <p class="qri-q-text">${qTextEscaped}</p>
      <div class="qri-options">${optionsHtml}</div>
      ${expHtml}
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
    const oldC = document.getElementById('chapter-result-section');
    if (oldC) oldC.remove();
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

function showWrongBank() {
  stopTimer();
  renderWrongBank();
  showScreen('screen-wrong-bank');
}

// ── Event Wiring ──────────────────────────────────────────────────
function wireEvents() {
  $('btn-start').addEventListener('click', startExam);

  $('btn-wrong-bank').addEventListener('click', showWrongBank);
  $('btn-back-home').addEventListener('click', () => showScreen('screen-start'));
  $('btn-detail-back').addEventListener('click', showWrongBank);
  $('btn-empty-start').addEventListener('click', () => showScreen('screen-start'));

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
    stopTimer();
    showScreen('screen-start');
  });
}

// ── Init ──────────────────────────────────────────────────────────
async function init() {
  wireEvents();
  loadWrongBank();
  try {
    const texts    = await loadQuestionBanks();
    const parsed   = texts.flatMap(t => parseMarkdownQuestions(t));
    allQuestions   = validateQuestions(parsed);

    if (allQuestions.length === 0) throw new Error('沒有解析到任何題目，請確認 MD 格式是否正確。');

    updateBankCountDisplay();
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
