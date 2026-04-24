import { skins } from './skins.js';

function gradient(ctx, w, h, stops) {
  const g = ctx.createLinearGradient(0, 0, 0, h);
  stops.forEach(([p, c]) => g.addColorStop(p, c));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}

function drawBlock(ctx, x, y, s, fill, stroke = '#1a1a1a') {
  ctx.fillStyle = fill;
  ctx.fillRect(x, y, s, s);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = Math.max(1, s * 0.04);
  ctx.strokeRect(x, y, s, s);
}

function drawHumanoid(ctx, cx, cy, scale, palette) {
  const s = scale;
  ctx.fillStyle = palette.skin;
  ctx.fillRect(cx - 1.2 * s, cy - 4.2 * s, 2.4 * s, 2.4 * s);
  ctx.strokeStyle = '#0a0a0a';
  ctx.lineWidth = 2;
  ctx.strokeRect(cx - 1.2 * s, cy - 4.2 * s, 2.4 * s, 2.4 * s);

  if (palette.hat) {
    ctx.fillStyle = palette.hat;
    ctx.fillRect(cx - 1.3 * s, cy - 4.5 * s, 2.6 * s, 0.8 * s);
  }

  ctx.fillStyle = '#000';
  ctx.fillRect(cx - 0.8 * s, cy - 3.4 * s, 0.4 * s, 0.4 * s);
  ctx.fillRect(cx + 0.4 * s, cy - 3.4 * s, 0.4 * s, 0.4 * s);

  if (palette.shades) {
    ctx.fillStyle = '#000';
    ctx.fillRect(cx - 1.0 * s, cy - 3.6 * s, 2.0 * s, 0.7 * s);
  }

  if (palette.beard) {
    ctx.fillStyle = palette.beard;
    ctx.fillRect(cx - 1.0 * s, cy - 2.6 * s, 2.0 * s, 0.8 * s);
  }

  ctx.fillStyle = palette.body;
  ctx.fillRect(cx - 1.5 * s, cy - 1.8 * s, 3.0 * s, 3.0 * s);
  ctx.strokeRect(cx - 1.5 * s, cy - 1.8 * s, 3.0 * s, 3.0 * s);

  ctx.fillStyle = palette.skin;
  ctx.fillRect(cx - 2.4 * s, cy - 1.8 * s, 0.9 * s, 2.6 * s);
  ctx.fillRect(cx + 1.5 * s, cy - 1.8 * s, 0.9 * s, 2.6 * s);

  ctx.fillStyle = palette.legs;
  ctx.fillRect(cx - 1.4 * s, cy + 1.2 * s, 1.2 * s, 2.4 * s);
  ctx.fillRect(cx + 0.2 * s, cy + 1.2 * s, 1.2 * s, 2.4 * s);
}

function drawDragon(ctx, cx, cy) {
  ctx.fillStyle = '#0d0d18';
  ctx.fillRect(cx - 36, cy - 12, 72, 24);
  ctx.fillRect(cx - 70, cy - 30, 50, 6);
  ctx.fillRect(cx + 20, cy - 30, 50, 6);
  ctx.fillStyle = '#1a1a28';
  ctx.beginPath();
  ctx.moveTo(cx - 70, cy - 30);
  ctx.lineTo(cx - 100, cy - 8);
  ctx.lineTo(cx - 60, cy);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx + 70, cy - 30);
  ctx.lineTo(cx + 100, cy - 8);
  ctx.lineTo(cx + 60, cy);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#d8b193';
  ctx.fillRect(cx - 18, cy - 36, 36, 30);
  ctx.fillStyle = '#3a2a1f';
  ctx.fillRect(cx - 18, cy - 36, 36, 6);
  ctx.fillStyle = '#000';
  ctx.fillRect(cx - 12, cy - 24, 6, 6);
  ctx.fillRect(cx + 6, cy - 24, 6, 6);
  ctx.fillStyle = '#5a4030';
  ctx.fillRect(cx - 8, cy - 14, 16, 4);
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 8px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('TALEB', cx, cy + 4);
}

function drawScene(canvas) {
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const w = canvas.width;
  const h = canvas.height;

  gradient(ctx, w, h, [[0, '#0b0b22'], [0.45, '#3a1a4a'], [0.7, '#7a2018'], [1, '#1a0a0a']]);

  for (let i = 0; i < 80; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.7})`;
    const sz = Math.random() * 2 + 1;
    ctx.fillRect(Math.random() * w, Math.random() * h * 0.55, sz, sz);
  }

  ctx.fillStyle = '#1a1a2a';
  for (let x = 0; x < w; x += 64) {
    const peak = h * 0.55 + Math.sin(x * 0.01) * 30;
    ctx.beginPath();
    ctx.moveTo(x, h);
    ctx.lineTo(x + 32, peak);
    ctx.lineTo(x + 64, h);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillStyle = '#3a1010';
  ctx.fillRect(0, h * 0.78, w, h * 0.22);
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = `rgba(255,${100 + Math.random() * 100},20,0.6)`;
    const x = Math.random() * w;
    const y = h * 0.78 + Math.random() * 30;
    ctx.fillRect(x, y, 8, 8);
  }

  const baseY = h * 0.78;
  ctx.fillStyle = '#8b6020';
  ctx.fillRect(w / 2 - 60, baseY, 120, 40);
  ctx.strokeStyle = '#3a2010';
  ctx.lineWidth = 3;
  ctx.strokeRect(w / 2 - 60, baseY, 120, 40);

  drawHumanoid(ctx, w / 2, baseY - 10, 14, {
    skin: '#7a4a2a', hat: null, body: '#2a2a2a', legs: '#1a1a1a', beard: '#1a1a1a'
  });

  ctx.fillStyle = '#8b1a1a';
  ctx.fillRect(w / 2 + 14, baseY - 50, 28, 20);
  ctx.fillStyle = '#f4e3b2';
  ctx.font = 'bold 10px serif';
  ctx.textAlign = 'center';
  ctx.fillText('HARVARD', w / 2 + 28, baseY - 36);

  drawDragon(ctx, w * 0.5, h * 0.18);

  const nwaPalettes = [
    { skin: '#5a3520', hat: '#d4af37', shades: true, beard: '#1a1a1a', body: '#0a0a0a', legs: '#1a1a2a' },
    { skin: '#4a2a18', hat: '#1f4dff', shades: true, beard: '#1a1a1a', body: '#0a0a0a', legs: '#1a1a2a' },
    { skin: '#3a2010', hat: '#000', shades: true, beard: '#1a1a1a', body: '#0a0a0a', legs: '#1a1a2a' },
    { skin: '#5a3520', hat: '#a52525', shades: true, beard: '#1a1a1a', body: '#0a0a0a', legs: '#1a1a2a' },
    { skin: '#4a2a18', hat: '#222', shades: true, beard: '#1a1a1a', body: '#0a0a0a', legs: '#1a1a2a' }
  ];
  nwaPalettes.forEach((p, i) => {
    drawHumanoid(ctx, w * 0.18 + i * 64, baseY + 10, 9, p);
  });
  ctx.fillStyle = '#000';
  ctx.fillRect(w * 0.14, baseY + 60, 290, 18);
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 14px monospace';
  ctx.fillText('N.W.A. — STR8 OUTTA COMPTON', w * 0.14 + 145, baseY + 73);

  const tlcPalettes = [
    { skin: '#5a3520', hat: '#222', body: '#a01818', legs: '#1f2a4a', beard: '#1a1a1a' },
    { skin: '#4a2a18', hat: '#222', body: '#1a1a8a', legs: '#1f2a4a', beard: '#1a1a1a' },
    { skin: '#6a3a20', hat: '#222', body: '#1a8a1a', legs: '#1f2a4a', beard: '#1a1a1a' },
    { skin: '#4a2a18', hat: '#222', body: '#a01818', legs: '#1f2a4a', beard: '#1a1a1a' }
  ];
  tlcPalettes.forEach((p, i) => {
    drawHumanoid(ctx, w * 0.62 + i * 64, baseY + 10, 9, p);
  });
  ctx.fillStyle = '#000';
  ctx.fillRect(w * 0.60, baseY + 60, 250, 18);
  ctx.fillStyle = '#fff';
  ctx.fillText('2 LIVE CREW — BANNED IN THE USA', w * 0.60 + 125, baseY + 73);

  for (let i = 0; i < 4; i++) {
    drawHumanoid(ctx, w * 0.06 + i * 36, baseY - 4, 6, {
      skin: '#a8c89a', body: '#7a1818', legs: '#3a1010', beard: '#e8e8e8'
    });
  }
  ctx.fillStyle = '#fff';
  ctx.fillRect(w * 0.04, baseY - 70, 180, 22);
  ctx.fillStyle = '#a01818';
  ctx.font = 'bold 13px monospace';
  ctx.textAlign = 'left';
  ctx.fillText('Rawr ADA Compliance', w * 0.04 + 6, baseY - 54);

  drawHumanoid(ctx, w * 0.92, baseY - 4, 8, {
    skin: '#e8c8a8', body: '#1a6a2a', legs: '#202028', beard: '#7a5020'
  });
  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(w * 0.94, baseY + 16, 18, 22);
  ctx.fillStyle = '#fff';
  ctx.fillRect(w * 0.94 + 4, baseY + 22, 10, 8);
  ctx.fillStyle = '#ff9a1f';
  ctx.beginPath();
  ctx.moveTo(w * 0.94 + 6, baseY + 30);
  ctx.lineTo(w * 0.94 + 12, baseY + 30);
  ctx.lineTo(w * 0.94 + 9, baseY + 36);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#fff';
  ctx.fillRect(w * 0.66, baseY - 84, 200, 22);
  ctx.fillStyle = '#000';
  ctx.font = 'bold 13px monospace';
  ctx.fillText('haha get blocked', w * 0.66 + 8, baseY - 68);

  ctx.fillStyle = '#5ad8e0';
  ctx.fillRect(w * 0.46, baseY - 30, 8, 60);
  ctx.fillStyle = '#8b6020';
  ctx.fillRect(w * 0.45, baseY + 30, 12, 18);

  ctx.fillStyle = '#000';
  ctx.fillRect(w * 0.66, baseY + 92, 200, 24);
  ctx.fillStyle = '#5ad8e0';
  ctx.font = 'bold 14px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('ADA COMPLIANCE +999', w * 0.66 + 100, baseY + 109);

  const title = 'MARKCRAFT';
  ctx.font = 'bold 110px monospace';
  ctx.textAlign = 'center';
  ctx.lineWidth = 8;
  ctx.strokeStyle = '#000';
  ctx.strokeText(title, w / 2, 110);
  const tg = ctx.createLinearGradient(0, 40, 0, 130);
  tg.addColorStop(0, '#f4e3b2');
  tg.addColorStop(0.5, '#d4a040');
  tg.addColorStop(1, '#7a3010');
  ctx.fillStyle = tg;
  ctx.fillText(title, w / 2, 110);

  ctx.font = 'bold 22px monospace';
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 4;
  ctx.strokeText('a rescue mission for our professor', w / 2, 152);
  ctx.fillText('a rescue mission for our professor', w / 2, 152);
}

export function buildLoadingScreen(onStart) {
  const overlay = document.createElement('div');
  overlay.id = 'mc-loading';
  overlay.innerHTML = `
    <canvas id="mc-loading-bg"></canvas>
    <div id="mc-loading-content">
      <div id="mc-story">
        <h2>THE LORE</h2>
        <p>Steve got fired for a bash assignment he forgot to grade. You are <b class="hl">UNC MARKS</b>, the only Harvard economist with the moral fortitude to rescue him. Also you have a pickaxe.</p>
        <p>The zombies are <b class="hl">Adam Smith</b>. Hit one — it drops a pamphlet on the <b class="hl">invisible hand</b>. Collect 100 to unlock a <b class="hl">Harvard Economics degree</b>. It does nothing. Welcome to economics.</p>
        <p>Kill enough and they respawn as <b class="hl red">Karl Marx</b>. Now they're hitting <i>you</i>. They scream <b class="hl">"Rawr ADA Compliance"</b> while seizing your means of production.</p>
        <p>The final boss is the <b class="hl red">Nassim Taleb dragon</b>. He attacks anyone who prepared for the fight. He sets you on fire. He tweets about it from a burner. He says <b class="hl">"haha get blocked"</b> while you're literally on fire.</p>
        <p>Your allies: <b class="hl gold">N.W.A.</b> on the boombox, <b class="hl gold">2 Live Crew</b> on backup vocals, <b class="hl green">Linus Torvalds</b> wielding the <b class="hl cyan">ADA Compliance</b> sword (+999 to lawsuits), the <b class="hl">FSU Penguin</b>, and one (1) Tux for moral support.</p>
        <p class="mission"><b class="hl red">MISSION:</b> Slay the dragon. Get Unc Marks unblocked on Twitter. <b class="hl">Pass economics.</b></p>
        <div id="mc-credits">held together by Docker, ngrok, and prayer · supported by the Linux Foundation · syllabus pending IRB review</div>
      </div>
      <div id="mc-controls">
        <div id="mc-keys">
          <div><kbd>WASD</kbd> Move</div>
          <div><kbd>SHIFT</kbd> Sprint</div>
          <div><kbd>SPACE</kbd> Jump</div>
          <div><kbd>1-8</kbd> Block · <kbd>0</kbd> Pickaxe</div>
          <div><kbd>M</kbd> Mute music</div>
          <div><kbd>R</kbd> Reset camera</div>
        </div>
        <button id="mc-start-btn">[ ENTER MARKCRAFT ]</button>
        <label id="mc-mini-me" style="display:flex;align-items:center;gap:10px;justify-content:center;margin-top:14px;font-family:monospace;color:#ffd54a;cursor:pointer;font-size:14px;">
          <input type="checkbox" id="mc-mini-me-toggle" style="width:18px;height:18px;cursor:pointer;" />
          <span>MINI-ME MODE <span style="color:#fff;opacity:0.75;font-size:12px;">(kid is watching — clean lyrics &amp; quotes)</span></span>
        </label>
        <div id="mc-music-hint">click to start with N.W.A. — Straight Outta Compton</div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const miniMe = overlay.querySelector('#mc-mini-me-toggle');
  try { miniMe.checked = localStorage.getItem('markcraft.miniMe') === '1'; } catch (_) {}
  window.MARKCRAFT_MINI_ME = !!miniMe.checked;
  miniMe.addEventListener('change', () => {
    window.MARKCRAFT_MINI_ME = !!miniMe.checked;
    try { localStorage.setItem('markcraft.miniMe', miniMe.checked ? '1' : '0'); } catch (_) {}
  });

  const canvas = overlay.querySelector('#mc-loading-bg');
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawScene(canvas);
  }
  resize();
  window.addEventListener('resize', resize);

  const btn = overlay.querySelector('#mc-start-btn');
  function start() {
    overlay.style.transition = 'opacity 0.6s ease';
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.remove(); }, 650);
    onStart && onStart();
  }
  btn.addEventListener('click', start);

  return overlay;
}
