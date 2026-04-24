import * as THREE from 'three';

function makeCanvas(size = 128) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  return c;
}

function pixelTex(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function fillBg(ctx, color, w, h) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, w, h);
}

function paintFace(opts) {
  const { skin, hair, beard, eyes = '#1b1b1b', mouth = '#3a1f1f',
    shades = false, hat, hatText, label, beardStyle = 'none', glasses = false } = opts;
  const c = makeCanvas(128);
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  fillBg(ctx, skin, 128, 128);

  if (hair) {
    ctx.fillStyle = hair;
    ctx.fillRect(0, 0, 128, 36);
    ctx.fillRect(0, 0, 18, 80);
    ctx.fillRect(110, 0, 18, 80);
  }

  if (beardStyle === 'full') {
    ctx.fillStyle = beard || '#202020';
    ctx.fillRect(20, 70, 88, 40);
    ctx.fillRect(34, 60, 60, 18);
  } else if (beardStyle === 'goatee') {
    ctx.fillStyle = beard || '#202020';
    ctx.fillRect(48, 86, 32, 18);
  } else if (beardStyle === 'wild') {
    ctx.fillStyle = beard || '#e8e8e8';
    ctx.fillRect(8, 64, 112, 56);
    ctx.fillRect(20, 50, 88, 18);
  } else if (beardStyle === 'mustache') {
    ctx.fillStyle = beard || '#202020';
    ctx.fillRect(38, 78, 52, 8);
  }

  if (shades) {
    ctx.fillStyle = '#000';
    ctx.fillRect(20, 50, 38, 18);
    ctx.fillRect(70, 50, 38, 18);
    ctx.fillStyle = '#222';
    ctx.fillRect(58, 56, 12, 6);
  } else if (glasses) {
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 4;
    ctx.strokeRect(22, 52, 32, 22);
    ctx.strokeRect(74, 52, 32, 22);
    ctx.beginPath();
    ctx.moveTo(54, 60);
    ctx.lineTo(74, 60);
    ctx.stroke();
    ctx.fillStyle = '#cfe8ff';
    ctx.fillRect(26, 56, 24, 14);
    ctx.fillRect(78, 56, 24, 14);
    ctx.fillStyle = eyes;
    ctx.fillRect(34, 60, 8, 8);
    ctx.fillRect(86, 60, 8, 8);
  } else {
    ctx.fillStyle = eyes;
    ctx.fillRect(28, 56, 14, 14);
    ctx.fillRect(86, 56, 14, 14);
    ctx.fillStyle = '#fff';
    ctx.fillRect(30, 58, 6, 6);
    ctx.fillRect(88, 58, 6, 6);
  }

  if (beardStyle !== 'full' && beardStyle !== 'wild') {
    ctx.fillStyle = mouth;
    ctx.fillRect(46, 92, 36, 6);
  }

  if (hat) {
    ctx.fillStyle = hat;
    ctx.fillRect(0, 0, 128, 28);
    ctx.fillRect(0, 24, 128, 10);
    if (hatText) {
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 18px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(hatText, 64, 20);
    }
  }

  if (label) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 110, 128, 18);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(label, 64, 124);
  }

  return pixelTex(c);
}

function paintTalebFace() {
  const c = makeCanvas(128);
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  fillBg(ctx, '#d8b193', 128, 128);

  ctx.fillStyle = '#3a2a1f';
  ctx.fillRect(0, 0, 128, 22);
  ctx.fillRect(0, 0, 14, 50);
  ctx.fillRect(114, 0, 14, 50);
  ctx.fillStyle = '#d8b193';
  ctx.fillRect(20, 14, 88, 14);

  ctx.fillStyle = '#888';
  ctx.fillRect(28, 64, 18, 14);
  ctx.fillRect(82, 64, 18, 14);
  ctx.fillStyle = '#000';
  ctx.fillRect(32, 68, 10, 8);
  ctx.fillRect(86, 68, 10, 8);

  ctx.fillStyle = '#5a4030';
  ctx.fillRect(34, 90, 60, 8);
  ctx.fillRect(38, 96, 52, 6);

  ctx.fillStyle = '#7a1010';
  ctx.fillRect(50, 108, 28, 6);

  ctx.fillStyle = '#fff';
  ctx.font = 'bold 9px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('TALEB', 64, 124);

  return pixelTex(c);
}

function paintPenguinFace(opts = {}) {
  const c = makeCanvas(128);
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  fillBg(ctx, '#1a1a1a', 128, 128);
  ctx.fillStyle = '#fff';
  ctx.fillRect(20, 30, 88, 80);

  ctx.fillStyle = '#1a1a1a';
  ctx.fillRect(36, 50, 14, 14);
  ctx.fillRect(78, 50, 14, 14);
  ctx.fillStyle = '#fff';
  ctx.fillRect(40, 54, 4, 4);
  ctx.fillRect(82, 54, 4, 4);

  ctx.fillStyle = '#ff9a1f';
  ctx.beginPath();
  ctx.moveTo(50, 78);
  ctx.lineTo(78, 78);
  ctx.lineTo(64, 96);
  ctx.closePath();
  ctx.fill();

  if (opts.hat) {
    ctx.fillStyle = opts.hat;
    ctx.fillRect(0, 0, 128, 24);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(opts.hatText || 'FSU', 64, 18);
  }

  return pixelTex(c);
}

function paintLogo(text, bg = '#000', fg = '#fff') {
  const c = makeCanvas(128);
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  fillBg(ctx, bg, 128, 128);
  ctx.fillStyle = fg;
  ctx.font = 'bold 20px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const lines = text.split('\n');
  const lh = 22;
  lines.forEach((line, i) => {
    ctx.fillText(line, 64, 64 - ((lines.length - 1) * lh) / 2 + i * lh);
  });
  return pixelTex(c);
}

export const skins = {
  uncMarks: () => ({
    face: paintFace({
      skin: '#7a4a2a', hair: '#1a1a1a', eyes: '#1a0f08',
      mouth: '#3a1f1f', beardStyle: 'mustache', beard: '#1a1a1a',
      label: 'UNC MARKS'
    }),
    body: '#2a2a2a',
    legs: '#1a1a1a',
    arms: '#7a4a2a',
    chest: paintLogo('HARVARD\nECON', '#8b1a1a', '#f4e3b2')
  }),

  taleb: () => ({
    face: paintTalebFace(),
    body: '#1a1a2a',
    legs: '#0a0a1a',
    arms: '#d8b193',
    chest: paintLogo('FRAGILE?', '#1a1a2a', '#ff4444')
  }),

  nwa: (member) => {
    const hats = {
      eazy: { hat: '#d4af37', hatText: 'COMPTON', label: 'EAZY-E', skin: '#5a3520' },
      cube: { hat: '#1f4dff', hatText: 'L.A.', label: 'ICE CUBE', skin: '#4a2a18' },
      dre:  { hat: '#000', hatText: 'RUTHLESS', label: 'DR. DRE', skin: '#3a2010' },
      ren:  { hat: '#a52525', hatText: 'RAIDERS', label: 'MC REN', skin: '#5a3520' },
      yella:{ hat: '#222', hatText: 'N.W.A.', label: 'DJ YELLA', skin: '#4a2a18' }
    };
    const opts = hats[member];
    return {
      face: paintFace({
        skin: opts.skin, eyes: '#1a0f08', shades: true,
        beardStyle: member === 'dre' ? 'full' : 'goatee', beard: '#1a1a1a',
        hat: opts.hat, hatText: opts.hatText, label: opts.label
      }),
      body: '#0a0a0a',
      legs: '#1a1a2a',
      arms: opts.skin,
      chest: paintLogo('N.W.A', '#000', '#fff')
    };
  },

  twoLive: (member) => {
    const variants = {
      luke:  { label: 'LUKE',  skin: '#5a3520', shirt: '#a01818', shirtText: 'BANNED' },
      fresh: { label: 'FRESH KID',  skin: '#4a2a18', shirt: '#1a1a8a', shirtText: '2 LIVE' },
      mr:    { label: 'MR. MIXX',   skin: '#6a3a20', shirt: '#1a8a1a', shirtText: 'CREW' },
      brother:{label: 'BROTHER MARQ', skin: '#4a2a18', shirt: '#a01818', shirtText: 'NASTY' }
    };
    const o = variants[member];
    return {
      face: paintFace({
        skin: o.skin, hair: '#1a1a1a', eyes: '#1a0f08',
        beardStyle: 'goatee', beard: '#1a1a1a',
        hat: '#222', hatText: '2 LIVE', label: o.label
      }),
      body: o.shirt,
      legs: '#1f2a4a',
      arms: o.skin,
      chest: paintLogo(o.shirtText, o.shirt, '#fff')
    };
  },

  marxZombie: () => ({
    face: paintFace({
      skin: '#a8c89a', hair: '#e8e8e8', eyes: '#7a1010',
      mouth: '#1a1a1a', beardStyle: 'wild', beard: '#e8e8e8',
      label: 'KARL MARX'
    }),
    body: '#7a1818',
    legs: '#3a1010',
    arms: '#a8c89a',
    chest: paintLogo('SEIZE\nMEANS', '#7a1818', '#f4e3b2')
  }),

  smithZombie: () => ({
    face: paintFace({
      skin: '#a8c89a', hair: '#e8e8e8', eyes: '#7a1010',
      mouth: '#1a1a1a', beardStyle: 'none',
      label: 'A.SMITH'
    }),
    body: '#7a1818',
    legs: '#3a1010',
    arms: '#a8c89a',
    chest: paintLogo('INVISIBLE\nHAND', '#7a1818', '#f4e3b2')
  }),

  linus: () => ({
    face: paintFace({
      skin: '#e8c8a8', hair: '#a87a40', eyes: '#1a3a7a',
      beardStyle: 'mustache', beard: '#7a5020',
      glasses: true, label: 'LINUS T.'
    }),
    body: '#1a6a2a',
    legs: '#202028',
    arms: '#e8c8a8',
    chest: paintLogo('LINUX', '#1a6a2a', '#fff')
  }),

  fsuPenguin: () => ({
    face: paintPenguinFace({ hat: '#a52525', hatText: 'FSU' }),
    body: '#a52525',
    legs: '#ff9a1f',
    arms: '#1a1a1a',
    chest: paintLogo('FSU', '#a52525', '#f4e3b2')
  }),

  tux: () => ({
    face: paintPenguinFace(),
    body: '#1a1a1a',
    legs: '#ff9a1f',
    arms: '#1a1a1a',
    chest: paintLogo('TUX', '#1a1a1a', '#fff')
  }),

  // Walking-around (humanoid) Nassim Taleb — separate from the dragon. Same
  // greying scholar look as on the dragon's head but in human form, trolling.
  talebHuman: () => ({
    face: paintFace({
      skin: '#d8b193', hair: '#3a2a1f', eyes: '#1a1a1a',
      beardStyle: 'goatee', beard: '#4a3a2a',
      glasses: false, label: 'N. TALEB'
    }),
    body: '#1a1a2a',
    legs: '#0a0a1a',
    arms: '#d8b193',
    chest: paintLogo('FRAGILE?', '#1a1a2a', '#ff4444')
  }),

  // TA who grades bash assignments — sleep-deprived, holding a clipboard
  ta: () => ({
    face: paintFace({
      skin: '#e8c8a8', hair: '#1a1a1a', eyes: '#3a3a55',
      beardStyle: 'mustache', beard: '#1a1a1a',
      glasses: true, label: 'TA · OVERWORKED'
    }),
    body: '#1a3a6a',
    legs: '#222',
    arms: '#e8c8a8',
    chest: paintLogo('GRADING', '#1a3a6a', '#fff')
  }),

  // Dean of Discipline — chasing students with a tie and clipboard
  dean: () => ({
    face: paintFace({
      skin: '#f0d8b8', hair: '#a8a8a8', eyes: '#1a3a7a',
      beardStyle: 'none',
      glasses: true, label: 'DEAN'
    }),
    body: '#222222',
    legs: '#1a1a1a',
    arms: '#f0d8b8',
    chest: paintLogo('DEAN', '#a01818', '#fff')
  }),

  // Y2K doomsday-sign-holder — wild beard, frayed shirt
  y2k: () => ({
    face: paintFace({
      skin: '#e8c8a8', hair: '#a8a8a8', eyes: '#7a1010',
      beardStyle: 'wild', beard: '#dadada',
      label: 'Y2K PROPHET'
    }),
    body: '#5a3010',
    legs: '#3a2010',
    arms: '#e8c8a8',
    chest: paintLogo('Y2K\nDOOM', '#5a3010', '#ffd54a')
  }),

  // 1999 Harvard dorm crew — Unc Marks's college friends. Pre-internet vibes:
  // varsity jackets, FUBU-era hoodies, do-rags, fade haircuts. Unnamed by
  // request, just labeled "DORM FRIEND" so the scene reads as ambient lore.
  dormFriend: (idx = 0) => {
    const variants = [
      // Varsity jacket guy
      { skin: '#5a3520', hair: '#0a0a0a', shirt: '#8b1a1a', shirtText: 'HARVARD',
        chestBg: '#8b1a1a', chestFg: '#f4e3b2', legs: '#1a1a2a',
        beardStyle: 'goatee', hat: null },
      // Hoodie + Bulls cap (1996 dynasty era)
      { skin: '#4a2a18', hair: '#0a0a0a', shirt: '#1a1a1a', shirtText: 'BULLS',
        chestBg: '#a01818', chestFg: '#fff', legs: '#3a3a44',
        beardStyle: 'none', hat: '#a01818', hatText: 'BULLS' },
      // FUBU-era polo
      { skin: '#6a3a20', hair: '#1a1a1a', shirt: '#1a1a8a', shirtText: 'FUBU',
        chestBg: '#1a1a8a', chestFg: '#ffd54a', legs: '#1f2a4a',
        beardStyle: 'mustache', hat: null },
      // Crimson sweatshirt + headphones look
      { skin: '#3a2010', hair: '#0a0a0a', shirt: '#a01818', shirtText: 'CRIMSON',
        chestBg: '#a01818', chestFg: '#fff', legs: '#1a1a1a',
        beardStyle: 'goatee', hat: '#1a1a1a', hatText: '\'99' }
    ];
    const o = variants[idx % variants.length];
    return {
      face: paintFace({
        skin: o.skin, hair: o.hair, eyes: '#1a0f08',
        beardStyle: o.beardStyle, beard: '#1a1a1a',
        hat: o.hat, hatText: o.hatText, label: 'DORM FRIEND'
      }),
      body: o.shirt,
      legs: o.legs,
      arms: o.skin,
      chest: paintLogo(o.shirtText, o.chestBg, o.chestFg)
    };
  }
};
