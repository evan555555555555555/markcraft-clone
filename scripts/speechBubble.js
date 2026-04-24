import * as THREE from 'three';

function paintBubble(c, text, fg, bg) {
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0, 0, c.width, c.height);

  ctx.fillStyle = bg;
  ctx.fillRect(8, 8, 496, 120);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 512, 8);
  ctx.fillRect(0, 128, 512, 8);
  ctx.fillRect(0, 0, 8, 136);
  ctx.fillRect(504, 0, 8, 136);

  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.moveTo(60, 128);
  ctx.lineTo(110, 128);
  ctx.lineTo(80, 160);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(60, 128);
  ctx.lineTo(80, 160);
  ctx.lineTo(110, 128);
  ctx.stroke();

  ctx.fillStyle = fg;
  // Auto-shrink long text
  const lines = String(text).split('\n');
  let fontSize = 48;
  ctx.font = `bold ${fontSize}px monospace`;
  let widest = Math.max(...lines.map(l => ctx.measureText(l).width));
  while (widest > 460 && fontSize > 18) {
    fontSize -= 2;
    ctx.font = `bold ${fontSize}px monospace`;
    widest = Math.max(...lines.map(l => ctx.measureText(l).width));
  }
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const lh = fontSize * 1.05;
  const startY = 68 - ((lines.length - 1) * lh) / 2;
  lines.forEach((line, i) => ctx.fillText(line, 256, startY + i * lh));
}

export function makeSpeechBubble(text, opts = {}) {
  const fg = opts.fg || '#000';
  const bg = opts.bg || '#fff';

  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 160;
  paintBubble(c, text, fg, bg);

  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.colorSpace = THREE.SRGBColorSpace;

  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(2.4, 0.75, 1);
  sprite.renderOrder = 999;

  sprite.userData.setText = (newText, newOpts = {}) => {
    paintBubble(c, newText, newOpts.fg || fg, newOpts.bg || bg);
    tex.needsUpdate = true;
  };
  return sprite;
}

export function makeNameTag(text, color = '#ffeb3b') {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(0,0,0,0.55)';
  ctx.fillRect(0, 0, 512, 64);
  ctx.fillStyle = color;
  ctx.font = 'bold 40px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 34);

  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const s = new THREE.Sprite(mat);
  s.scale.set(2.0, 0.25, 1);
  s.renderOrder = 998;
  return s;
}
