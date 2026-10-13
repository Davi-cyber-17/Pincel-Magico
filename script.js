'use strict';

/* =========================================================
   DESENHOS
   '.' = vazio. Cada letra é uma cor da paleta do desenho.
   Para criar um desenho novo, é só adicionar um item em LEVELS.
   ========================================================= */

function heartLevel() {
  const mask = [
    '..###...###..',
    '.#####.#####.',
    '#############',
    '#############',
    '#############',
    '.###########.',
    '..#########..',
    '...#######...',
    '....#####....',
    '.....###.....',
    '......#......'
  ];
  const colors = ['#9b1f8f', '#c02fc0', '#f01c4a', '#ff4a14', '#ff8a00', '#f8d90f', '#8fd400', '#00b8b8', '#16c6ee', '#3f66d6'];
  let max = 0;
  mask.forEach((r, y) => [...r].forEach((c, x) => { if (c === '#') max = Math.max(max, x + y); }));
  const rows = mask.map((r, y) => [...r].map((c, x) => {
    if (c !== '#') return '.';
    const band = Math.min(colors.length - 1, Math.floor(((x + y) / (max + 1)) * colors.length));
    return String.fromCharCode(97 + band);
  }).join(''));
  const palette = {};
  colors.forEach((c, i) => { palette[String.fromCharCode(97 + i)] = c; });
  return { id: 'coracao', name: 'Coração Arco-íris', rows, palette };
}

const LEVELS = [
  heartLevel(),
  {
    id: 'sushi',
    name: 'Sushi',
    palette: { O: '#ff7a00', L: '#ffb870', D: '#f4510a', W: '#ffffff', G: '#b9d3f2', N: '#1f3a8a', K: '#0c1633' },
    rows: [
      '.....OOOOOOO......',
      '...OOOLOOOOOOO..NNN',
      '..OOLOOOLOOOOOOO.KNN',
      '.OOLOOOLOOLOOOOOOKKN',
      '.ODDOOOLOODOOLOOOOOO',
      '.DDDDDDOODDOOOLOOOO.',
      '..GWWWDDDDDDOOOOOO..',
      '..GWWWWWWGGDDDKNNOO.',
      '...GWWWWWWWGKNNNKOO.',
      '....GGWWWWGKNNK.OOO.',
      '......GGGGKK...GWW..'
    ]
  },
  {
    id: 'hamburguer',
    name: 'Hambúrguer',
    palette: { K: '#111111', O: '#ff9422', Y: '#e8e80f', G: '#35a63a', B: '#53370e' },
    rows: [
      '....KKKKKK....',
      '..KKOOOOOOKK..',
      '.KOOOOYOOOOOK.',
      'KOOYOOOOOOYOOK',
      'KOOOOOOYOOOOOK',
      'KOOOOYOOOOOOOK',
      '.KGGGGGGGGGGK.',
      'KGGGGGGGGGGGGK',
      '.KYYYYYYYYYYK.',
      '.KBBBBBBBBBBK.',
      '.KBBBBBBBBBBK.',
      '.KOOOOOOOOOOK.',
      '..KOOOOOOOOK..',
      '...KKKKKKKK...'
    ]
  },
  {
    id: 'morango',
    name: 'Morango',
    palette: { D: '#3d0a18', R: '#f5003c', O: '#ff6a30', Y: '#ff9f2e', G: '#2f9e12', L: '#4de64d', T: '#0e2a10' },
    rows: [
      '....TLLTTT....',
      '..TLGGGGTGLT..',
      '..TGGLGGGGGT..',
      '....TGGGGT....',
      '..DDRRRRRRDD..',
      '.DRRRRRRRRRRD.',
      '.DRRYRRRRYRRD.',
      'DRRRROOORRRRRD',
      'DRRYOOOOOORYRD',
      'DRRRROOOOORRRD',
      '.DRRRROOORRRD.',
      '.DRRRRRRYRRRD.',
      '..DRRRRRRRRD..',
      '...DRRRRRRD...',
      '....DDRRDD....',
      '......DD......'
    ]
  },
  {
    id: 'dragao',
    name: 'Dragão',
    palette: { G: '#3fae49', D: '#1d6b2f', L: '#ffe08a', Y: '#f5c518', W: '#ffffff', K: '#111111', R: '#e53935', P: '#8e44ad' },
    rows: [
      '..Y...........Y..',
      '..YY.........YY..',
      '...YGGGGGGGGGY...',
      '..GGGGGGGGGGGGG..',
      '.GGGGGGGGGGGGGGG.',
      '.GGWKGGGGGGGKWGG.',
      '.GGGGGGGGGGGGGGG.',
      '..GGGGGDGDGGGGG..',
      '..GGGGGGRGGGGGG..',
      '...GGGGGRGGGGG...',
      '....GGGGGGGGG....',
      '.P..GGGGGGGGG..P.',
      'PPP.GGLLLLLGG.PPP',
      'PPPPGLLLLLLLGPPPP',
      'PPPPGLLLLLLLGPPPP',
      '.PPPGLLLLLLLGPPP.',
      '..PPGLLLLLLLGPP..',
      '....GGLLLLLGG....',
      '...GGGGGGGGGGG...',
      '..GGG.GGGGG.GGG..'
    ]
  },
  {
    id: 'casa',
    name: 'Casinha',
    palette: { R: '#d9453a', r: '#8e2a20', W: '#f3e2b3', F: '#ffffff', B: '#5ec2ff', D: '#7a4a21', K: '#f5c518', C: '#a14a3a', G: '#4caf50' },
    rows: [
      '..............CC....',
      '..............CC....',
      '.........rr...CC....',
      '........rRRr..CC....',
      '.......rRRRRr.CC....',
      '......rRRRRRRrCC....',
      '.....rRRRRRRRRr.....',
      '....rRRRRRRRRRRr....',
      '...rRRRRRRRRRRRRr...',
      '..rRRRRRRRRRRRRRRr..',
      '..WWWWWWWWWWWWWWWW..',
      '..WWFFFFWWWWFFFFWW..',
      '..WWFBBFWWWWFBBFWW..',
      '..WWFBBFWDDWFBBFWW..',
      '..WWFFFFWDDWFFFFWW..',
      '..WWWWWWWDKWWWWWWW..',
      '..WWWWWWWDDWWWWWWW..',
      'GGGGGGGGGGGGGGGGGGGG'
    ]
  },
  {
    id: 'gatinho',
    name: 'Gatinho',
    palette: { O: '#ff9a3c', D: '#d9691b', P: '#ff8fa3', G: '#4cd964', K: '#1b1b1b', W: '#ffffff' },
    rows: [
      '.O.............O.',
      '.OO...........OO.',
      '.OPO.........OPO.',
      '.OPPOOOOOOOOOPPO.',
      '.OOOOOOOOOOOOOOO.',
      'OOOODOOODOOODOOOO',
      'OOOOOOOOOOOOOOOOO',
      'OOGKGOOOOOOOGKGOO',
      'OOGKGOOOOOOOGKGOO',
      'OOOOOOOPPPOOOOOOO',
      'OOOOOWOKOKOWOOOOO',
      'WOOOOOOOOOOOOOOOW',
      '.OOOOOOOOOOOOOOO.',
      '..OOOOOOOOOOOOO..',
      '....OOOOOOOOO....'
    ]
  },
  {
    id: 'peixe',
    name: 'Peixinho',
    palette: { O: '#ff8a3d', Y: '#ffc857', B: '#2e86de', W: '#ffffff', K: '#111111' },
    rows: [
      '...........BBBBBBB......',
      '............BBBBB.......',
      'B............BBB........',
      'BBB.........BBBB........',
      'BBBB.....OOOOWOOOWOO....',
      'BBBBB...OOOOOWOOOWOOW...',
      'BBBBBBBOOOOOOWOOOWOOKO..',
      'BBBBBBBOOOOOOWOOOWOOOOO.',
      'BBBBBBBOOOOOOWOOOWOOOO..',
      'BBBBB...YYYYYWBBYWYYY...',
      'BBBB.....YYYYBBBYWYY....',
      'BBB...........Y.........',
      'B.......................'
    ]
  },
  {
    id: 'borboleta',
    name: 'Borboleta',
    palette: { M: '#e84393', P: '#9b59b6', Y: '#f9ca24', B: '#54a0ff', K: '#2d2d3a' },
    rows: [
      '......K...K......',
      '.......K.K.......',
      '.MMM...KKK...MMM.',
      'MMYMM..KKK..MMYMM',
      'MMYYMMMKKKMMMYYMM',
      'MMMMMMMKKKMMMMMMM',
      'PMMMMMMKKKMMMMMMP',
      'PPMMMMMKKKMMMMMPP',
      '.PPBBB.KKK.BBBPP.',
      '..PBBBBKKKBBBBP..',
      '..PBYBBKKKBBYBP..',
      '...PBB.KKK.BBP...',
      '....P..KKK..P....',
      '.......K.K.......'
    ]
  },
  {
    id: 'foguete',
    name: 'Foguete',
    palette: { R: '#e53935', W: '#f5f7fa', D: '#37474f', B: '#4fc3f7', G: '#b0bec5', O: '#ff9800', Y: '#ffeb3b' },
    rows: [
      '........R........',
      '.......RRR.......',
      '......RRRRR......',
      '.....RRRRRRR.....',
      '.....WWWWWWW.....',
      '....WWWWWWWWW....',
      '....WDDDDDDDW....',
      '....WDBBBBBDW....',
      '....WDBBBBBDW....',
      '....WDDDDDDDW....',
      '....WWWWWWWWW....',
      '...RWWWWWWWWWR...',
      '..RRWWWWWWWWWRR..',
      '.RRRWWGGGGGWWRRR.',
      '.RRRGGGGGGGGGRRR.',
      '.RR.GGGGGGGGG.RR.',
      '.....OOYYYOO.....',
      '......OOYOO......',
      '.......OYO.......'
    ]
  },
  {
    id: 'flor',
    name: 'Flor',
    palette: { P: '#ff6fa5', p: '#ffb0cf', O: '#ff9f1c', Y: '#ffd23f', G: '#3fae49', D: '#2a7d36', N: '#6b4a2b' },
    rows: [
      '...................',
      '.......PPPPP.......',
      '....PPPPpppPPPP....',
      '...PPPPPpppPPPPP...',
      '...PPppPPpPPppPP...',
      '...PPppPOOOPppPP...',
      '..PPPPPOYYYOPPPPP..',
      '..PppPOYYYYYOPppP..',
      '..PpppOYYYYYOpppP..',
      '..PppPOYYYYYOPppP..',
      '..PPPPPOYYYOPPPPP..',
      '...PPppPOOOPppPP...',
      '...PPppPPpPPppPP...',
      '...PPPPPpppPPPPP...',
      '....PPPPGGGPPPP....',
      '.......PGGGP.......',
      '........GGG........',
      '........GGG........',
      '....DDD.GGG........',
      '.....DDDGGG........',
      '.......DGGG.DDD....',
      '........GGGDDD.....',
      '........GGGD.......',
      '........GGG........',
      '........GGG........',
      'NNNNNNNNNNNNNNNNNNN'
    ]
  },
  {
    id: 'coruja',
    name: 'Coruja',
    palette: { B: '#8d5a2b', C: '#f6e7c1', L: '#c58b4e', Y: '#ffd23f', K: '#161616', O: '#ff9800' },
    rows: [
      '.BB...........BB.',
      '.BBBBBBBBBBBBBBB.',
      'BBBBBBBBBBBBBBBBB',
      'BBCCCCBBBBBCCCCBB',
      'BCCYYCCBBBCCYYCCB',
      'BCYKKYCOOOCYKKYCB',
      'BBCYYCCBOBCCYYCBB',
      'BBBBBBBBBBBBBBBBB',
      'BBBCCCCCCCCCCCBBB',
      'BBBCCLCCCCCLCCBBB',
      'BBBCCCCLCLCCCCBBB',
      'BBBCCLCCCCCLCCBBB',
      'BBBBCCCCCCCCCBBBB',
      '.BBBBBBBBBBBBBBB.',
      '..BBBBBBBBBBBBB..',
      '..OOO.......OOO..'
    ]
  },
  {
    id: 'castelo',
    name: 'Castelo',
    palette: { R: '#e74c3c', S: '#b0b7c3', K: '#2c3e50', B: '#6d4c2f', G: '#4caf50' },
    rows: [
      '.RR.....R.....RR.',
      'RRRR...RRR...RRRR',
      'RRRR..RRRRR..RRRR',
      'SSSS..SSSSS..SSSS',
      'SKSS..SKSKS..SSKS',
      'SKSS..SSSSS..SSKS',
      'SSSS..SKSKS..SSSS',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSBBBBBBBSSSSS',
      'SSSSBBBBBBBBBSSSS',
      'SSSSBBBBBBBBBSSSS',
      'GGGGBBBBBBBBBGGGG'
    ]
  },
  {
    id: 'pinguim',
    name: 'Pinguim',
    palette: { K: '#2c3e50', W: '#f5f7fa', O: '#ff9800' },
    rows: [
      '....KKKKKKKKK....',
      '..KKKKKKKKKKKKK..',
      '.KKKKKKKKKKKKKKK.',
      '.KKKKKKKKKKKKKKK.',
      '.KKWKKKKKKKKKWKK.',
      '.KKKKKKOOOKKKKKK.',
      '.KKKKKKKOKKKKKKK.',
      '.KKKWWWWWWWWWKKK.',
      'KKKWWWWWWWWWWWKKK',
      'KKKWWWWWWWWWWWKKK',
      'KKKWWWWWWWWWWWKKK',
      '.KKWWWWWWWWWWWKK.',
      '.KKKWWWWWWWWWKKK.',
      '..KKKWWWWWWWKKK..',
      '...KKKKKKKKKKK...',
      '..OOOO.....OOOO..'
    ]
  }
];

/* =========================================================
   UTILIDADES
   ========================================================= */

const $ = (s) => document.querySelector(s);
const STORE_KEY = 'jogo-de-pintar:v1';

function parseLevel(lvl) {
  if (lvl._p) return lvl._p;
  const h = lvl.rows.length;
  const w = Math.max(...lvl.rows.map((r) => r.length));
  const grid = lvl.rows.map((r) => r.padEnd(w, '.').split(''));
  const used = Object.keys(lvl.palette).filter((ch) => grid.some((r) => r.includes(ch)));
  const num = {};
  used.forEach((ch, i) => { num[ch] = i + 1; });
  const cells = grid.map((r) => r.map((ch) => num[ch] || 0));
  const counts = used.map(() => 0);
  let total = 0;
  cells.forEach((r) => r.forEach((n) => { if (n) { counts[n - 1]++; total++; } }));
  lvl._p = { w, h, cells, colors: used.map((ch) => lvl.palette[ch]), counts, total };
  return lvl._p;
}

function loadStore() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
}
function saveStore(data) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (e) { /* sem armazenamento */ }
}

function decodeFilled(str, p) {
  const f = [];
  for (let y = 0; y < p.h; y++) {
    f.push([]);
    for (let x = 0; x < p.w; x++) f[y].push(str && str[y * p.w + x] === '1' && p.cells[y][x] ? 1 : 0);
  }
  return f;
}
function encodeFilled(f) { return f.map((r) => r.join('')).join(''); }

function textOn(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) > 150 ? '#1d1a3a' : '#ffffff';
}

function fmtTime(s) {
  const m = Math.floor(s / 60);
  return String(m).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
}

function drawArt(canvas, lvl, filled, onlyFilled) {
  const p = parseLevel(lvl);
  const ctx = canvas.getContext('2d');
  const size = Math.min(canvas.width, canvas.height);
  const px = Math.floor(size / Math.max(p.w, p.h));
  const ox = Math.floor((canvas.width - px * p.w) / 2);
  const oy = Math.floor((canvas.height - px * p.h) / 2);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let y = 0; y < p.h; y++) {
    for (let x = 0; x < p.w; x++) {
      const n = p.cells[y][x];
      if (!n) continue;
      if (filled[y][x]) ctx.fillStyle = p.colors[n - 1];
      else if (onlyFilled) ctx.fillStyle = '#1b2442';
      else ctx.fillStyle = p.colors[n - 1];
      ctx.fillRect(ox + x * px, oy + y * px, px, px);
    }
  }
}

/* =========================================================
   SOM
   ========================================================= */

let audioCtx = null;
let soundOn = true;

function beep(freq, dur, type, vol) {
  if (!soundOn) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type || 'sine';
    o.frequency.value = freq;
    g.gain.value = vol || 0.05;
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + dur);
  } catch (e) { /* sem áudio */ }
}
const sfx = {
  fill: () => beep(620 + Math.random() * 120, 0.08, 'triangle', 0.04),
  wrong: () => beep(160, 0.15, 'square', 0.04),
  color: () => { beep(660, 0.1, 'sine', 0.06); setTimeout(() => beep(880, 0.15, 'sine', 0.06), 90); },
  win: () => [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, 0.25, 'triangle', 0.07), i * 130))
};

/* =========================================================
   ESTADO DO JOGO
   ========================================================= */

const S = {
  idx: 0, lvl: null, p: null,
  filled: [], els: [],
  sel: 1, remaining: [], left: 0,
  errors: 0, elapsed: 0, timer: null,
  zoom: 1, moveMode: false, painting: false, won: false
};

let store = loadStore();

/* ---------- MENU ---------- */

function renderMenu() {
  store = loadStore();
  const grid = $('#levelGrid');
  grid.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const p = parseLevel(lvl);
    const saved = store[lvl.id];
    const filled = decodeFilled(saved && saved.f, p);
    const done = filled.flat().reduce((a, b) => a + b, 0);
    const pct = Math.round((done / p.total) * 100);

    const card = document.createElement('button');
    card.className = 'level-card' + (pct === 100 ? ' done' : '');
    const cv = document.createElement('canvas');
    cv.width = 160; cv.height = 160;
    drawArt(cv, lvl, filled, true);
    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = lvl.name;
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = pct === 100 ? 'Completo ✓ ' + fmtTime((saved && saved.t) || 0) : (pct ? pct + '% pintado' : p.colors.length + ' cores');
    card.append(cv, name, meta);
    card.addEventListener('click', () => startLevel(i));
    grid.appendChild(card);
  });
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach((s) => s.classList.toggle('active', s.id === id));
}

/* ---------- INICIAR DESENHO ---------- */

function startLevel(i, fresh) {
  S.idx = i;
  S.lvl = LEVELS[i];
  S.p = parseLevel(S.lvl);
  const saved = fresh ? null : store[S.lvl.id];
  S.filled = decodeFilled(saved && saved.f, S.p);
  S.errors = (saved && saved.e) || 0;
  S.elapsed = (saved && saved.t) || 0;
  S.won = false;
  S.zoom = 1;
  S.moveMode = false;
  $('#btnMove').setAttribute('aria-pressed', 'false');

  S.remaining = S.p.counts.slice();
  S.filled.forEach((r, y) => r.forEach((v, x) => { if (v) S.remaining[S.p.cells[y][x] - 1]--; }));
  S.left = S.remaining.reduce((a, b) => a + b, 0);

  if (S.left === 0) { // já estava completo: recomeça
    S.filled = decodeFilled('', S.p);
    S.remaining = S.p.counts.slice();
    S.left = S.p.total;
    S.errors = 0; S.elapsed = 0;
  }

  $('#levelName').textContent = S.lvl.name;
  showScreen('game');
  buildPalette();
  const first = S.remaining.findIndex((n) => n > 0);
  selectColor(first + 1);
  requestAnimationFrame(() => { buildBoard(); updateStats(); });

  clearInterval(S.timer);
  S.timer = setInterval(() => {
    if (!S.won && $('#game').classList.contains('active')) { S.elapsed++; updateStats(); }
  }, 1000);
}

/* ---------- TABULEIRO ---------- */

function cellSize() {
  const wrap = $('#boardWrap');
  const aw = wrap.clientWidth - 18;
  const ah = wrap.clientHeight - 18;
  const base = Math.floor(Math.min(aw / S.p.w, ah / S.p.h));
  return Math.max(14, Math.min(46, base)) * S.zoom;
}

function buildBoard() {
  const board = $('#board');
  const { w, h, cells, colors } = S.p;
  board.innerHTML = '';
  board.style.setProperty('--size', cellSize() + 'px');
  board.style.gridTemplateColumns = `repeat(${w}, var(--size))`;
  S.els = [];
  for (let y = 0; y < h; y++) {
    S.els.push([]);
    for (let x = 0; x < w; x++) {
      const n = cells[y][x];
      const d = document.createElement('div');
      if (!n) {
        d.className = 'cell void';
      } else {
        d.className = 'cell';
        d.dataset.x = x; d.dataset.y = y;
        d.style.setProperty('--c', colors[n - 1]);
        if (S.filled[y][x]) d.classList.add('filled');
        else d.textContent = n;
      }
      board.appendChild(d);
      S.els[y].push(d);
    }
  }
  updateHighlight();
}

function updateHighlight() {
  const { w, h, cells } = S.p;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const el = S.els[y] && S.els[y][x];
      if (!el || !cells[y][x]) continue;
      el.classList.toggle('hl', !S.filled[y][x] && cells[y][x] === S.sel);
    }
  }
}

function setZoom(z) {
  S.zoom = Math.max(0.6, Math.min(3, z));
  $('#board').style.setProperty('--size', cellSize() + 'px');
}

/* ---------- PALETA ---------- */

function buildPalette() {
  const pal = $('#palette');
  pal.innerHTML = '';
  S.p.colors.forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'swatch';
    b.style.setProperty('--c', c);
    b.style.color = textOn(c);
    b.dataset.n = i + 1;
    b.setAttribute('aria-label', 'Cor ' + (i + 1));
    b.innerHTML = `${i + 1}<span class="badge"></span>`;
    b.addEventListener('click', () => { selectColor(i + 1); beep(500, 0.05, 'sine', 0.04); });
    pal.appendChild(b);
  });
  S.remaining.forEach((_, i) => refreshSwatch(i + 1));
}

function refreshSwatch(n) {
  const b = $(`.swatch[data-n="${n}"]`);
  if (!b) return;
  const r = S.remaining[n - 1];
  b.classList.toggle('done', r === 0);
  b.querySelector('.badge').textContent = r === 0 ? '✓' : r;
}

function selectColor(n) {
  S.sel = n;
  document.querySelectorAll('.swatch').forEach((b) => b.classList.toggle('sel', +b.dataset.n === n));
  const b = $(`.swatch[data-n="${n}"]`);
  if (b && b.scrollIntoView) b.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  if (S.els.length) updateHighlight();
}

/* ---------- PINTAR ---------- */

function paintCell(el, strict) {
  if (!el || !el.classList.contains('cell') || el.classList.contains('void')) return;
  const x = +el.dataset.x, y = +el.dataset.y;
  if (S.filled[y][x] || S.won) return;
  const need = S.p.cells[y][x];

  if (need !== S.sel) {
    if (strict) {
      S.errors++;
      el.classList.remove('wrong'); void el.offsetWidth;
      el.classList.add('wrong');
      setTimeout(() => el.classList.remove('wrong'), 320);
      sfx.wrong();
      if (navigator.vibrate) navigator.vibrate(30);
    }
    return;
  }

  S.filled[y][x] = 1;
  el.classList.remove('hl', 'hint');
  el.classList.add('filled');
  el.textContent = '';
  S.remaining[need - 1]--;
  S.left--;
  refreshSwatch(need);
  updateStats();
  sfx.fill();

  if (S.remaining[need - 1] === 0) colorFinished(need);
  persist();
  if (S.left === 0) win();
}

function colorFinished(n) {
  if (S.left === 0) return;
  sfx.color();
  const total = S.remaining.length;
  for (let k = 1; k <= total; k++) {
    const next = ((n - 1 + k) % total) + 1;
    if (S.remaining[next - 1] > 0) { selectColor(next); return; }
  }
}

function eventCell(e) {
  const el = document.elementFromPoint(e.clientX, e.clientY);
  return el && el.classList && el.classList.contains('cell') ? el : null;
}

function bindBoard() {
  const board = $('#board');
  board.addEventListener('pointerdown', (e) => {
    if (S.moveMode) return;
    S.painting = true;
    paintCell(eventCell(e), true);
  });
  board.addEventListener('pointermove', (e) => {
    if (S.painting && !S.moveMode) paintCell(eventCell(e), false);
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach((t) => board.addEventListener(t, () => { S.painting = false; }));
}

/* ---------- STATUS / SALVAR ---------- */

function updateStats() {
  const pct = Math.round(((S.p.total - S.left) / S.p.total) * 100);
  $('#progressBar').style.width = pct + '%';
  $('#stats').textContent = `${pct}% · ${fmtTime(S.elapsed)}` + (S.errors ? ` · ${S.errors} erro${S.errors > 1 ? 's' : ''}` : '');
}

function persist(done) {
  store = loadStore();
  store[S.lvl.id] = { f: encodeFilled(S.filled), t: S.elapsed, e: S.errors, done: !!done };
  saveStore(store);
}

/* ---------- DICA ---------- */

function hint() {
  if (S.won) return;
  let n = S.sel;
  if (S.remaining[n - 1] === 0) {
    n = S.remaining.findIndex((r) => r > 0) + 1;
    selectColor(n);
  }
  const options = [];
  S.p.cells.forEach((r, y) => r.forEach((v, x) => { if (v === n && !S.filled[y][x]) options.push(S.els[y][x]); }));
  if (!options.length) return;
  const el = options[Math.floor(Math.random() * options.length)];
  el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });
  el.classList.remove('hint'); void el.offsetWidth;
  el.classList.add('hint');
  setTimeout(() => el.classList.remove('hint'), 2000);
}

/* ---------- VITÓRIA ---------- */

function win() {
  S.won = true;
  persist(true);
  sfx.win();
  drawArt($('#preview'), S.lvl, S.filled, false);
  $('#winStats').textContent = `Tempo ${fmtTime(S.elapsed)} · ${S.errors} erro${S.errors === 1 ? '' : 's'}`;
  setTimeout(() => { $('#modal').hidden = false; confetti(); }, 450);
}

function confetti() {
  const cv = $('#confetti');
  const ctx = cv.getContext('2d');
  cv.width = innerWidth; cv.height = innerHeight;
  const colors = S.p.colors.concat(['#ffffff']);
  const parts = Array.from({ length: 140 }, () => ({
    x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.5,
    vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 4,
    s: 5 + Math.random() * 7, c: colors[Math.floor(Math.random() * colors.length)],
    r: Math.random() * 6
  }));
  let frames = 0;
  (function tick() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    parts.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.r += 0.15;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      ctx.restore();
    });
    if (++frames < 220) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, cv.width, cv.height);
  })();
}

/* ---------- BOTÕES ---------- */

function bindUI() {
  $('#btnBack').addEventListener('click', () => {
    if (!S.won) persist();
    clearInterval(S.timer);
    renderMenu();
    showScreen('menu');
  });

  $('#btnSound').addEventListener('click', (e) => {
    soundOn = !soundOn;
    e.currentTarget.textContent = soundOn ? '🔊' : '🔇';
  });

  $('#btnZoomIn').addEventListener('click', () => setZoom(S.zoom + 0.3));
  $('#btnZoomOut').addEventListener('click', () => setZoom(S.zoom - 0.3));

  $('#btnMove').addEventListener('click', (e) => {
    S.moveMode = !S.moveMode;
    e.currentTarget.setAttribute('aria-pressed', String(S.moveMode));
    $('#board').classList.toggle('move-mode', S.moveMode);
  });

  $('#btnHint').addEventListener('click', hint);

  $('#btnReset').addEventListener('click', () => { $('#confirm').hidden = false; });
  $('#btnConfirmNo').addEventListener('click', () => { $('#confirm').hidden = true; });
  $('#btnConfirmYes').addEventListener('click', () => {
    $('#confirm').hidden = true;
    startLevel(S.idx, true);
    persist();
  });

  $('#btnNext').addEventListener('click', () => {
    $('#modal').hidden = true;
    startLevel((S.idx + 1) % LEVELS.length, true);
  });
  $('#btnMenu').addEventListener('click', () => {
    $('#modal').hidden = true;
    clearInterval(S.timer);
    renderMenu();
    showScreen('menu');
  });

  // Teclas 1-9 escolhem a cor (computador)
  document.addEventListener('keydown', (e) => {
    if (!$('#game').classList.contains('active')) return;
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= S.p.colors.length) selectColor(n);
  });

  window.addEventListener('resize', () => {
    if ($('#game').classList.contains('active') && S.p) $('#board').style.setProperty('--size', cellSize() + 'px');
  });

  document.addEventListener('visibilitychange', () => { if (document.hidden && S.lvl && !S.won) persist(); });
}

bindBoard();
bindUI();
renderMenu();
