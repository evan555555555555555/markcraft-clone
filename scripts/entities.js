import * as THREE from 'three';
import { skins } from './skins.js';
import { buildHumanoid, buildPenguin, buildTalebDragon } from './characters.js';
import { makeSpeechBubble, makeNameTag } from './speechBubble.js';
import { buildHarvardCampus, buildTallahasseeCapitol, buildFsuCampus, buildColumbiaLaw } from './harvard.js';

const NWA_NAMES = ['EAZY-E', 'ICE CUBE', 'DR. DRE', 'MC REN', 'DJ YELLA'];
const TLC_NAMES = ['LUKE', 'FRESH KID ICE', 'MR. MIXX', 'BROTHER MARQ'];

const QUOTES = {
  unc: [
    { t: 'figure it out', bg: '#fff', fg: '#000' },
    { t: 'open your books', bg: '#fff', fg: '#000' },
    { t: 'this is on the exam', bg: '#fff', fg: '#a01818' },
    { t: 'GET LINUX INSTALLED', bg: '#fff', fg: '#1a6a2a' },
    { t: 'office hours by appt', bg: '#fff', fg: '#000' },
    { t: 'bash assignment due', bg: '#fff', fg: '#000' },
    { t: 'see the syllabus', bg: '#fff', fg: '#a01818' }
  ],
  uncJr: [
    { t: 'hi dad', bg: '#fff', fg: '#000' },
    { t: 'i love bash', bg: '#fff', fg: '#1a6a2a' },
    { t: 'sudo make me a sandwich', bg: '#fff', fg: '#000' },
    { t: 'when i grow up i want a PhD', bg: '#fff', fg: '#a01818' }
  ],
  taleb: [
    { t: 'haha get blocked', bg: '#fff', fg: '#000' },
    { t: 'you are FRAGILE', bg: '#1a1a2a', fg: '#ff5252' },
    { t: 'I tweeted this in 2007', bg: '#fff', fg: '#1da1f2' },
    { t: 'read my book', bg: '#fff', fg: '#000' },
    { t: 'IYI detected', bg: '#1a1a2a', fg: '#ffd54a' },
    { t: 'skin in the game?', bg: '#fff', fg: '#a01818' }
  ],
  nwa_lead: [
    { t: 'STR8 OUTTA COMPTON', bg: '#000', fg: '#fff' },
    { t: 'GANGSTA GANGSTA', bg: '#000', fg: '#ffd54a' },
    { t: 'EXPRESS YOURSELF', bg: '#000', fg: '#fff' },
    { t: 'F THA POLICE', bg: '#000', fg: '#ff5252' },
    { t: 'TODAY WAS A GOOD DAY', bg: '#000', fg: '#ffd54a' },
    { t: 'IT WAS A GOOD DAY', bg: '#fff', fg: '#000' }
  ],
  nwa_eazy: [
    { t: 'EAZY DOES IT', bg: '#fff', fg: '#000' },
    { t: 'BOYZ-N-THE-HOOD', bg: '#000', fg: '#ffd54a' },
    { t: 'CRUISIN DOWN THE STREET', bg: '#fff', fg: '#000' },
    { t: 'JHERI CURL ON FLEEK', bg: '#000', fg: '#ffd54a' }
  ],
  nwa_cube: [
    { t: 'TODAY WAS A GOOD DAY', bg: '#000', fg: '#ffd54a' },
    { t: 'I AM ICE CUBE', bg: '#1f4dff', fg: '#fff' },
    { t: 'CHECK YOSELF', bg: '#000', fg: '#fff' },
    { t: 'WICKED', bg: '#000', fg: '#ff5252' }
  ],
  tlc: [
    { t: 'BANNED IN THE USA', bg: '#a01818', fg: '#fff' },
    { t: 'AS NASTY AS THEY WANNA BE', bg: '#fff', fg: '#a01818' },
    { t: 'ME SO HORNY', bg: '#000', fg: '#ff80ff' },
    { t: 'MOVE SOMETHIN', bg: '#1a1a8a', fg: '#fff' }
  ],
  marx: [
    { t: 'seize the means', bg: '#7a1818', fg: '#fff' },
    { t: 'workers of the world', bg: '#7a1818', fg: '#fff' },
    { t: 'Rawr ADA Compliance', bg: '#fff', fg: '#a01818' },
    { t: 'unionize the zombies', bg: '#7a1818', fg: '#fff' }
  ],
  smith: [
    { t: 'invisible hand', bg: '#fff', fg: '#000' },
    { t: 'wealth of nations', bg: '#fff', fg: '#000' },
    { t: 'Rawr ADA Compliance', bg: '#fff', fg: '#a01818' },
    { t: 'free market braiiins', bg: '#fff', fg: '#7a1010' }
  ],
  linus: [
    { t: 'supported by Linux Foundation', bg: '#1a6a2a', fg: '#fff' },
    { t: 'I do not tolerate bad code', bg: '#1a6a2a', fg: '#ffd54a' },
    { t: 'use git, not svn', bg: '#000', fg: '#fff' },
    { t: 'rewrite it in C', bg: '#1a6a2a', fg: '#fff' },
    { t: 'just a hobby, won\u2019t be big', bg: '#1a6a2a', fg: '#fff' },
    { t: 'GNU GPL v3', bg: '#000', fg: '#ffd54a' }
  ],
  fsu: [
    { t: 'GO NOLES', bg: '#a52525', fg: '#ffd54a' },
    { t: 'tomahawk chop', bg: '#a52525', fg: '#fff' },
    { t: 'LIS3353 represent', bg: '#a52525', fg: '#ffd54a' },
    { t: 'unconquered', bg: '#a52525', fg: '#ffd54a' }
  ],
  fsuJr: [
    { t: 'mini noles', bg: '#a52525', fg: '#ffd54a' },
    { t: 'i nibble at the establishment', bg: '#a52525', fg: '#fff' }
  ],
  tux: [
    { t: 'kernel panic', bg: '#1a1a1a', fg: '#fff' },
    { t: 'sudo apt update && get it together', bg: '#1a1a1a', fg: '#ffd54a' },
    { t: 'I AM the founder mascot', bg: '#1a1a1a', fg: '#fff' },
    { t: 'free as in freedom', bg: '#1a1a1a', fg: '#ffd54a' }
  ],
  uncWalk: [
    { t: 'where is my coffee', bg: '#fff', fg: '#000' },
    { t: 'I HAVE OFFICE HOURS', bg: '#fff', fg: '#a01818' },
    { t: 'someone fix Steve\u2019s bash script', bg: '#fff', fg: '#1a6a2a' },
    { t: 'the syllabus is on canvas', bg: '#fff', fg: '#000' },
    { t: 'no extensions', bg: '#fff', fg: '#a01818' },
    { t: 'attendance is mandatory', bg: '#fff', fg: '#000' }
  ],
  talebTroll: [
    { t: 'haha get blocked', bg: '#fff', fg: '#000' },
    { t: 'IYI detected', bg: '#1a1a2a', fg: '#ffd54a' },
    { t: 'you have NO skin in the game', bg: '#fff', fg: '#a01818' },
    { t: 'I called this in 2007', bg: '#fff', fg: '#1da1f2' },
    { t: 'read my BOOK', bg: '#fff', fg: '#000' },
    { t: 'fragility detected', bg: '#1a1a2a', fg: '#ff5252' },
    { t: 'tweeting from a burner', bg: '#fff', fg: '#1da1f2' },
    { t: 'you are an academic clown', bg: '#fff', fg: '#a01818' }
  ],
  ta: [
    { t: 'I have not slept since Monday', bg: '#fff', fg: '#000' },
    { t: 'this bash script\u2026 why', bg: '#fff', fg: '#a01818' },
    { t: 'half marks for missing semicolons', bg: '#fff', fg: '#000' },
    { t: 'office hours are NOT 24/7', bg: '#fff', fg: '#1a3a6a' },
    { t: 'who pipes ls into bash?', bg: '#fff', fg: '#a01818' },
    { t: 'curve? lol no', bg: '#fff', fg: '#000' }
  ],
  dean: [
    { t: 'NO RUNNING IN THE QUAD', bg: '#a01818', fg: '#fff' },
    { t: 'is that a BOOMBOX?', bg: '#a01818', fg: '#ffd54a' },
    { t: 'who let the dragon in', bg: '#fff', fg: '#a01818' },
    { t: 'where is your STUDENT ID', bg: '#a01818', fg: '#fff' },
    { t: 'I am writing you UP', bg: '#fff', fg: '#a01818' }
  ],
  y2k: [
    { t: 'THE END IS NIGH', bg: '#5a3010', fg: '#ffd54a' },
    { t: 'PLANES WILL FALL FROM THE SKY', bg: '#5a3010', fg: '#fff' },
    { t: 'BUY CANNED BEANS', bg: '#fff', fg: '#7a1010' },
    { t: 'two-digit dates were a MISTAKE', bg: '#5a3010', fg: '#fff' },
    { t: '12/31/99 = 12/31/1899??', bg: '#fff', fg: '#000' }
  ],
  // 1999 dorm friends — pre-internet college energy
  dorm: [
    { t: 'yo the modem is screaming again', bg: '#fff', fg: '#000' },
    { t: 'AOL trial CD #47, baby', bg: '#0a1a4a', fg: '#fff' },
    { t: 'someone is on the phone\u2014can\u2019t dial in', bg: '#fff', fg: '#a01818' },
    { t: 'TGIF is on, shut up', bg: '#fff', fg: '#1a1a8a' },
    { t: 'pass me the boombox', bg: '#000', fg: '#ffd54a' },
    { t: 'who has Goldeneye?', bg: '#a01818', fg: '#fff' },
    { t: 'taping this off the radio', bg: '#fff', fg: '#000' },
    { t: 'Y2K bug? mainframe problem.', bg: '#1a1a8a', fg: '#fff' },
    { t: 'the library closes at midnight', bg: '#fff', fg: '#1a6a2a' },
    { t: 'rewinding the VHS', bg: '#fff', fg: '#000' },
    { t: 'who took my Discman', bg: '#000', fg: '#5ad8e0' },
    { t: 'mark just bought another book', bg: '#fff', fg: '#a01818' },
    { t: 'no email past 9pm — long distance', bg: '#fff', fg: '#000' },
    { t: 'BULLS IN \'96 BABY', bg: '#a01818', fg: '#fff' }
  ]
};

// === Mini-Me Mode ===
// Toggle for parents whose kid is watching: swaps the spicier rap-era quotes
// for kid-friendly versions. Stored on window so the music player + entity
// loop can both read it.
const KID_SAFE_QUOTES = {
  nwa_lead: [
    { t: 'STR8 OUTTA HOMEWORK', bg: '#000', fg: '#fff' },
    { t: 'GOOD VIBES ONLY', bg: '#000', fg: '#ffd54a' },
    { t: 'EXPRESS YOURSELF', bg: '#000', fg: '#fff' },
    { t: 'RESPECT THE POLICE', bg: '#000', fg: '#5ad8e0' },
    { t: 'TODAY WAS A GOOD DAY', bg: '#000', fg: '#ffd54a' },
    { t: 'BE NICE OUT THERE', bg: '#fff', fg: '#000' }
  ],
  nwa_eazy: [
    { t: 'EAZY DOES IT', bg: '#fff', fg: '#000' },
    { t: 'BOYZ-N-THE-BOOKSHOP', bg: '#000', fg: '#ffd54a' },
    { t: 'CRUISIN TO THE LIBRARY', bg: '#fff', fg: '#000' },
    { t: 'NICE HAIRCUT YOU GOT', bg: '#000', fg: '#ffd54a' }
  ],
  nwa_cube: [
    { t: 'TODAY WAS A GOOD DAY', bg: '#000', fg: '#ffd54a' },
    { t: 'I AM ICE CUBE', bg: '#1f4dff', fg: '#fff' },
    { t: 'CHECK YOSELF', bg: '#000', fg: '#fff' },
    { t: 'TIME TO STUDY', bg: '#000', fg: '#5ad8e0' }
  ],
  tlc: [
    { t: 'BANNED FROM RECESS', bg: '#a01818', fg: '#fff' },
    { t: 'AS NICE AS THEY WANNA BE', bg: '#fff', fg: '#1a6a2a' },
    { t: 'EAT YOUR VEGGIES', bg: '#000', fg: '#ff80ff' },
    { t: 'MOVE SOMETHIN', bg: '#1a1a8a', fg: '#fff' }
  ],
  taleb: [
    { t: 'haha get blocked', bg: '#fff', fg: '#000' },
    { t: 'you are FRAGILE', bg: '#1a1a2a', fg: '#ff5252' },
    { t: 'I tweeted this in 2007', bg: '#fff', fg: '#1da1f2' },
    { t: 'read my book', bg: '#fff', fg: '#000' },
    { t: 'IYI detected', bg: '#1a1a2a', fg: '#ffd54a' },
    { t: 'be antifragile', bg: '#fff', fg: '#1a6a2a' }
  ],
  talebTroll: [
    { t: 'haha get blocked', bg: '#fff', fg: '#000' },
    { t: 'IYI detected', bg: '#1a1a2a', fg: '#ffd54a' },
    { t: 'I called this in 2007', bg: '#fff', fg: '#1da1f2' },
    { t: 'read my BOOK', bg: '#fff', fg: '#000' },
    { t: 'be antifragile, child', bg: '#fff', fg: '#1a6a2a' },
    { t: 'tweeting from a burner', bg: '#fff', fg: '#1da1f2' }
  ]
};

function pick(pool, idx) {
  return pool[idx % pool.length];
}

// Resolves a quote pool against Mini-Me Mode. If MM is on and a kid-safe
// pool exists for this key, return that; otherwise the original.
function resolvePool(poolKey) {
  const mm = !!(typeof window !== 'undefined' && window.MARKCRAFT_MINI_ME);
  if (mm && KID_SAFE_QUOTES[poolKey]) return KID_SAFE_QUOTES[poolKey];
  return QUOTES[poolKey];
}

// Initialize Mini-Me preference from storage so it persists across reloads
if (typeof window !== 'undefined' && window.MARKCRAFT_MINI_ME === undefined) {
  try {
    window.MARKCRAFT_MINI_ME = localStorage.getItem('markcraft.miniMe') === '1';
  } catch (_) { window.MARKCRAFT_MINI_ME = false; }
}

export class EntityManager {
  constructor(scene, world, player) {
    this.scene = scene;
    this.world = world;
    this.player = player;
    this.entities = [];
    this.bubbles = [];
    this.dragon = null;
    this.fireGroup = null;
    this.fireParticles = [];
    this.fireworks = [];
    this.fireworkPool = [];
    this.spotLights = [];
    this.discoLights = [];
    this.markcraftSign = null;
    this.spawnCenter = new THREE.Vector3(32, 0, 32);
    this.arenaRadius = 22;
    this.arenaCleared = false;
    this.lastFireworkAt = 0;
    // Harvard campus footprint, centered north of the spawn arena
    this.harvardCenter = new THREE.Vector3(32, 0, -8);
    this.harvardHalf = new THREE.Vector2(40, 22); // half-extents (x, z) — wider to fit Columbia Law
    // FSU campus — south of the arena (z high)
    this.fsuCenter = new THREE.Vector3(32, 0, 70);
    this.fsuHalf = new THREE.Vector2(20, 14);
    // Tallahassee Capitol — west of the arena (x low)
    this.capitolCenter = new THREE.Vector3(-18, 0, 32);
    this.capitolHalf = new THREE.Vector2(12, 10);
    // Columbia Law — east of the arena, completing the 4-way ring
    this.columbiaCenter = new THREE.Vector3(82, 0, 32);
    this.columbiaHalf = new THREE.Vector2(12, 8);
  }

  surfaceY(x, z) {
    const wx = Math.floor(x);
    const wz = Math.floor(z);
    let sawAny = false;
    for (let y = 40; y >= 0; y--) {
      const b = this.world.getBlock?.(wx, y, wz);
      if (b === null) continue;
      sawAny = true;
      if (b && b.id !== 0 && b.id !== undefined) return y + 1;
    }
    return sawAny ? 1 : -1;
  }

  chunksReady() {
    const cx = this.spawnCenter.x;
    const cz = this.spawnCenter.z;
    const r = this.arenaRadius;
    for (const [dx, dz] of [[-r, -r], [r, -r], [-r, r], [r, r], [0, 0]]) {
      if (this.surfaceY(cx + dx, cz + dz) < 0) return false;
    }
    // Also probe Harvard footprint corners
    const hx = this.harvardCenter.x;
    const hz = this.harvardCenter.z;
    const hw = this.harvardHalf.x;
    const hd = this.harvardHalf.y;
    for (const [dx, dz] of [[-hw, -hd], [hw, -hd], [-hw, hd], [hw, hd]]) {
      if (this.surfaceY(hx + dx, hz + dz) < 0) return false;
    }
    // FSU campus corners
    const fx = this.fsuCenter.x;
    const fz = this.fsuCenter.z;
    const fw = this.fsuHalf.x;
    const fd = this.fsuHalf.y;
    for (const [dx, dz] of [[-fw, -fd], [fw, -fd], [-fw, fd], [fw, fd]]) {
      if (this.surfaceY(fx + dx, fz + dz) < 0) return false;
    }
    // Capitol corners
    const px = this.capitolCenter.x;
    const pz = this.capitolCenter.z;
    const pw = this.capitolHalf.x;
    const pd = this.capitolHalf.y;
    for (const [dx, dz] of [[-pw, -pd], [pw, -pd], [-pw, pd], [pw, pd]]) {
      if (this.surfaceY(px + dx, pz + dz) < 0) return false;
    }
    // Columbia corners
    const colx = this.columbiaCenter.x;
    const colz = this.columbiaCenter.z;
    const colw = this.columbiaHalf.x;
    const cold = this.columbiaHalf.y;
    for (const [dx, dz] of [[-colw, -cold], [colw, -cold], [-colw, cold], [colw, cold]]) {
      if (this.surfaceY(colx + dx, colz + dz) < 0) return false;
    }
    return true;
  }

  clearRect(cx, baseY, cz, hw, hd, height = 28, trim = 4) {
    for (let dx = -hw; dx <= hw; dx++) {
      for (let dz = -hd; dz <= hd; dz++) {
        const x = cx + dx;
        const z = cz + dz;
        for (let y = baseY; y < baseY + height; y++) {
          const b = this.world.getBlock?.(x, y, z);
          if (b && b.id !== 0) this.world.removeBlock?.(x, y, z);
        }
      }
    }
    // Trim canopies leaning in
    for (let dx = -hw - trim; dx <= hw + trim; dx++) {
      for (let dz = -hd - trim; dz <= hd + trim; dz++) {
        const inside = Math.abs(dx) <= hw && Math.abs(dz) <= hd;
        if (inside) continue;
        const x = cx + dx;
        const z = cz + dz;
        for (let y = baseY + 4; y < baseY + height; y++) {
          const b = this.world.getBlock?.(x, y, z);
          if (b && b.id !== 0) this.world.removeBlock?.(x, y, z);
        }
      }
    }
  }

  clearArena() {
    if (this.arenaCleared) return;
    const cx = this.spawnCenter.x;
    const cz = this.spawnCenter.z;
    const r = this.arenaRadius;
    let baseY = this.surfaceY(cx, cz);
    // If the spawn chunk somehow isn't loaded, use a safe default ABOVE max
    // terrain so nothing ends up underground. We still skip the clear loop
    // since there's nothing to remove, but spawnCenter.y must be valid for
    // every downstream entity placement.
    if (baseY <= 1) {
      this.spawnCenter.y = 14;
      return;
    }
    this.spawnCenter.y = baseY;

    for (let dx = -r; dx <= r; dx++) {
      for (let dz = -r; dz <= r; dz++) {
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist > r) continue;
        const x = cx + dx;
        const z = cz + dz;
        for (let y = baseY; y < baseY + 28; y++) {
          const b = this.world.getBlock?.(x, y, z);
          if (b && b.id !== 0) this.world.removeBlock?.(x, y, z);
        }
      }
    }
    const trim = r + 4;
    for (let dx = -trim; dx <= trim; dx++) {
      for (let dz = -trim; dz <= trim; dz++) {
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist <= r || dist > trim) continue;
        const x = cx + dx;
        const z = cz + dz;
        for (let y = baseY + 4; y < baseY + 28; y++) {
          const b = this.world.getBlock?.(x, y, z);
          if (b && b.id !== 0) this.world.removeBlock?.(x, y, z);
        }
      }
    }
    this.arenaCleared = true;
  }

  attach(mesh, x, z, opts = {}) {
    // surfaceY returns first AIR block above the topmost solid. -1 means the
    // chunk hasn't loaded yet — fall back to spawnCenter.y (or a safe 14)
    // so characters never get buried at y=0 when terrain probes fail.
    let y = opts.y ?? this.surfaceY(x, z);
    if (y < 1) y = (this.spawnCenter.y > 1 ? this.spawnCenter.y : 14);
    mesh.position.set(x, y + 0.5 + (opts.yOffset || 0), z);
    if (opts.faceCenter !== false) {
      const dx = this.spawnCenter.x - x;
      const dz = this.spawnCenter.z - z;
      mesh.rotation.y = Math.atan2(dx, dz);
    }
    this.scene.add(mesh);
    return mesh;
  }

  addLabel(mesh, text, color = '#ffd54a', yOffset = 3.4) {
    const tag = makeNameTag(text, color);
    tag.position.set(0, yOffset, 0);
    mesh.add(tag);
    return tag;
  }

  addBubble(mesh, poolOrKey, opts = {}) {
    // poolKey enables Mini-Me Mode swapping; legacy callers can still pass an array.
    let poolKey = null;
    let pool;
    if (typeof poolOrKey === 'string') {
      poolKey = poolOrKey;
      pool = resolvePool(poolKey);
    } else {
      pool = poolOrKey;
    }
    const first = pool[0];
    const bub = makeSpeechBubble(first.t, { fg: first.fg, bg: first.bg });
    bub.position.set(opts.x || 0, opts.y || 4.6, 0);
    mesh.add(bub);
    const record = {
      sprite: bub,
      poolKey,
      pool,
      idx: 0,
      next: performance.now() + 1500 + Math.random() * 4000
    };
    this.bubbles.push(record);
    return record;
  }

  buildSpeakerStack(x, y, z) {
    const group = new THREE.Group();
    const cabMat = new THREE.MeshLambertMaterial({ color: 0x0a0a0a });
    const grilleMat = new THREE.MeshLambertMaterial({ color: 0x222222 });
    const coneMat = new THREE.MeshBasicMaterial({ color: 0xff8c1a });

    for (let i = 0; i < 3; i++) {
      const cab = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.6, 1.4), cabMat);
      cab.position.y = 0.8 + i * 1.7;
      cab.castShadow = true;
      group.add(cab);

      const grille = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 0.05), grilleMat);
      grille.position.set(0, 0.8 + i * 1.7, 0.72);
      group.add(grille);

      const cone1 = new THREE.Mesh(new THREE.CircleGeometry(0.32, 12), coneMat);
      cone1.position.set(-0.4, 0.95 + i * 1.7, 0.74);
      group.add(cone1);
      const cone2 = new THREE.Mesh(new THREE.CircleGeometry(0.32, 12), coneMat);
      cone2.position.set(0.4, 0.95 + i * 1.7, 0.74);
      group.add(cone2);
      const woof = new THREE.Mesh(new THREE.CircleGeometry(0.5, 12), coneMat);
      woof.position.set(0, 0.45 + i * 1.7, 0.74);
      group.add(woof);
    }
    group.position.set(x, y, z);
    return group;
  }

  buildStage(cx, cy, cz, w, d, accentColor) {
    const group = new THREE.Group();

    const platMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    const plat = new THREE.Mesh(new THREE.BoxGeometry(w, 0.4, d), platMat);
    plat.position.set(cx, cy + 0.2, cz);
    plat.receiveShadow = true;
    plat.castShadow = true;
    this.scene.add(plat);
    group.add(plat);

    // Neon trim around the front edge
    const stripMat = new THREE.MeshBasicMaterial({ color: accentColor });
    const stripFront = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, 0.08), stripMat);
    stripFront.position.set(cx, cy + 0.45, cz + d / 2);
    this.scene.add(stripFront);
    const stripBack = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, 0.08), stripMat);
    stripBack.position.set(cx, cy + 0.45, cz - d / 2);
    this.scene.add(stripBack);
    const stripL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, d), stripMat);
    stripL.position.set(cx - w / 2, cy + 0.45, cz);
    this.scene.add(stripL);
    const stripR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, d), stripMat);
    stripR.position.set(cx + w / 2, cy + 0.45, cz);
    this.scene.add(stripR);

    return cy + 0.4;
  }

  makeFireSprite() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 4, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255,255,200,1)');
    grad.addColorStop(0.35, 'rgba(255,180,40,0.9)');
    grad.addColorStop(0.7, 'rgba(255,80,20,0.6)');
    grad.addColorStop(1, 'rgba(120,10,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return new THREE.SpriteMaterial({
      map: tex, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending
    });
  }

  spawnFireBurst(time) {
    if (!this.dragon) return;
    const head = this.dragon.userData.head;
    if (!head) return;
    const mat = this.fireMat || (this.fireMat = this.makeFireSprite());

    const headWorld = new THREE.Vector3();
    head.getWorldPosition(headWorld);
    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(this.dragon.quaternion);

    for (let i = 0; i < 5; i++) {
      const s = new THREE.Sprite(mat);
      const off = forward.clone().multiplyScalar(1.6 + i * 0.6);
      off.x += (Math.random() - 0.5) * 0.6;
      off.y += (Math.random() - 0.3) * 0.4;
      off.z += (Math.random() - 0.5) * 0.6;
      s.position.copy(headWorld).add(off);
      const sz = 1.4 + Math.random() * 1.2;
      s.scale.set(sz, sz, 1);
      s.renderOrder = 900;
      this.scene.add(s);
      this.fireParticles.push({
        sprite: s,
        born: time,
        life: 700 + Math.random() * 500,
        vx: forward.x * 0.012 + (Math.random() - 0.5) * 0.004,
        vy: 0.005 + Math.random() * 0.005,
        vz: forward.z * 0.012 + (Math.random() - 0.5) * 0.004
      });
    }
  }

  makeFireworkSprite(color) {
    const c = document.createElement('canvas');
    c.width = c.height = 32;
    const ctx = c.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 1, 16, 16, 14);
    grad.addColorStop(0, '#fff');
    grad.addColorStop(0.4, color);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return new THREE.SpriteMaterial({
      map: tex, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending
    });
  }

  spawnFirework(time) {
    const colors = ['#ffd54a', '#ff5252', '#5ad8e0', '#7af07a', '#ff80ff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const mat = this.makeFireworkSprite(color);
    const cx = this.spawnCenter.x + (Math.random() - 0.5) * 14;
    const cz = this.spawnCenter.z + (Math.random() - 0.5) * 14;
    const cy = (this.spawnCenter.y || 12) + 18 + Math.random() * 4;

    for (let i = 0; i < 22; i++) {
      const s = new THREE.Sprite(mat);
      s.position.set(cx, cy, cz);
      s.scale.set(0.8, 0.8, 1);
      s.renderOrder = 850;
      this.scene.add(s);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const speed = 0.012 + Math.random() * 0.008;
      this.fireworks.push({
        sprite: s,
        born: time,
        life: 1200 + Math.random() * 600,
        vx: Math.sin(phi) * Math.cos(theta) * speed,
        vy: Math.cos(phi) * speed * 0.6,
        vz: Math.sin(phi) * Math.sin(theta) * speed
      });
    }
  }

  buildPodium(cx, cy, cz) {
    const stoneGeo = new THREE.BoxGeometry(4, 1, 4);
    const stoneMat = new THREE.MeshLambertMaterial({ color: 0x6a6a6a });
    const base = new THREE.Mesh(stoneGeo, stoneMat);
    base.position.set(cx, cy + 0.5, cz);
    base.castShadow = true;
    base.receiveShadow = true;
    this.scene.add(base);

    const woodGeo = new THREE.BoxGeometry(2.4, 1.2, 2.4);
    const woodMat = new THREE.MeshLambertMaterial({ color: 0x8b6020 });
    const top = new THREE.Mesh(woodGeo, woodMat);
    top.position.set(cx, cy + 1.6, cz);
    top.castShadow = true;
    top.receiveShadow = true;
    this.scene.add(top);

    const beaconGeo = new THREE.BoxGeometry(0.6, 12, 0.6);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: 0xfff2a8, transparent: true, opacity: 0.55
    });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(cx, cy + 10, cz);
    this.scene.add(beacon);
    this.beacon = beacon;

    // Spotlight glow rings around the podium
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffd54a, transparent: true, opacity: 0.35, side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(2.6, 3.0, 32), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(cx, cy + 0.05, cz);
    this.scene.add(ring);
    this.podiumRing = ring;

    // Two spotlight cones angled at the podium
    const spot1 = new THREE.SpotLight(0xffd54a, 6, 30, Math.PI / 7, 0.4, 1);
    spot1.position.set(cx - 8, cy + 14, cz - 8);
    spot1.target.position.set(cx, cy + 2, cz);
    this.scene.add(spot1);
    this.scene.add(spot1.target);
    this.spotLights.push(spot1);
    const spot2 = new THREE.SpotLight(0x5ad8e0, 6, 30, Math.PI / 7, 0.4, 1);
    spot2.position.set(cx + 8, cy + 14, cz - 8);
    spot2.target.position.set(cx, cy + 2, cz);
    this.scene.add(spot2);
    this.scene.add(spot2.target);
    this.spotLights.push(spot2);

    const signCanvas = document.createElement('canvas');
    signCanvas.width = 512; signCanvas.height = 128;
    const sx = signCanvas.getContext('2d');
    sx.fillStyle = '#1a1a1a'; sx.fillRect(0, 0, 512, 128);
    sx.fillStyle = '#d4a040';
    sx.fillRect(8, 8, 496, 112);
    sx.fillStyle = '#1a0a05';
    sx.font = 'bold 56px monospace';
    sx.textAlign = 'center';
    sx.textBaseline = 'middle';
    sx.fillText('MARKCRAFT', 256, 50);
    sx.font = 'bold 18px monospace';
    sx.fillText('a rescue mission', 256, 96);
    const signTex = new THREE.CanvasTexture(signCanvas);
    signTex.magFilter = THREE.NearestFilter;
    signTex.colorSpace = THREE.SRGBColorSpace;
    const signMat = new THREE.SpriteMaterial({ map: signTex, depthTest: false });
    const sign = new THREE.Sprite(signMat);
    sign.scale.set(5, 1.25, 1);
    sign.position.set(cx, cy + 14, cz);
    sign.renderOrder = 997;
    this.scene.add(sign);
    this.markcraftSign = sign;

    return cy + 1.2 + 1.6;
  }

  buildBoombox(cx, cy, cz) {
    const group = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(4.0, 1.6, 1.0),
      new THREE.MeshLambertMaterial({ color: 0x111111 })
    );
    body.position.y = 0.8;
    body.castShadow = true;
    group.add(body);

    const speakerMat = new THREE.MeshLambertMaterial({ color: 0xff8c1a });
    for (const x of [-1.2, 1.2]) {
      const sp = new THREE.Mesh(new THREE.CircleGeometry(0.55, 16), speakerMat);
      sp.position.set(x, 0.8, 0.51);
      group.add(sp);
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.55, 0.65, 16),
        new THREE.MeshBasicMaterial({ color: 0xd4a040 })
      );
      ring.position.set(x, 0.8, 0.52);
      group.add(ring);
    }

    const tape = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.5, 0.05),
      new THREE.MeshBasicMaterial({ color: 0x5ad8e0 })
    );
    tape.position.set(0, 1.35, 0.52);
    group.add(tape);

    // Carry handle
    const handle = new THREE.Mesh(
      new THREE.TorusGeometry(0.6, 0.06, 8, 24, Math.PI),
      new THREE.MeshLambertMaterial({ color: 0x222 })
    );
    handle.position.set(0, 1.65, 0);
    handle.rotation.x = Math.PI;
    group.add(handle);

    group.position.set(cx, cy, cz);
    return group;
  }

  spawnAll() {
    if (this.arenaCleared && this.entities.length > 0) return;
    this.clearArena();
    if (!this.arenaCleared) return;

    const cx = this.spawnCenter.x;
    const cz = this.spawnCenter.z;
    const baseY = this.spawnCenter.y;

    // Harvard campus — north of arena
    const hx = this.harvardCenter.x;
    const hz = this.harvardCenter.z;
    const hw = this.harvardHalf.x;
    const hd = this.harvardHalf.y;
    this.clearRect(hx, baseY, hz, hw, hd, 32, 4);
    this.harvardCenter.y = baseY;
    buildHarvardCampus(this.scene, hx, baseY, hz);

    // FSU campus — south of arena, completing the ring
    const fx = this.fsuCenter.x;
    const fz = this.fsuCenter.z;
    const fw = this.fsuHalf.x;
    const fd = this.fsuHalf.y;
    this.clearRect(fx, baseY, fz, fw, fd, 28, 4);
    this.fsuCenter.y = baseY;
    buildFsuCampus(this.scene, fx, baseY, fz);

    // Tallahassee Capitol — west of arena, completing the ring
    const px = this.capitolCenter.x;
    const pz = this.capitolCenter.z;
    const pw = this.capitolHalf.x;
    const pd = this.capitolHalf.y;
    this.clearRect(px, baseY, pz, pw, pd, 36, 4);
    this.capitolCenter.y = baseY;
    buildTallahasseeCapitol(this.scene, px, baseY, pz);

    // Columbia Law — east of arena, completing the 4-corner ring
    const colx = this.columbiaCenter.x;
    const colz = this.columbiaCenter.z;
    const colw = this.columbiaHalf.x;
    const cold = this.columbiaHalf.y;
    this.clearRect(colx, baseY, colz, colw, cold, 24, 4);
    this.columbiaCenter.y = baseY;
    buildColumbiaLaw(this.scene, colx, baseY, colz);

    const podiumTopY = this.buildPodium(cx, baseY, cz);

    // Unc Marks — center, on podium
    const unc = buildHumanoid(skins.uncMarks(), { holdBook: true, scale: 0.95 });
    unc.position.set(cx, podiumTopY + 1.4, cz);
    unc.rotation.y = -Math.PI / 4;
    this.scene.add(unc);
    this.addLabel(unc, 'UNC MARKS · PROFESSOR', '#ffd54a', 3.4);
    this.addBubble(unc, QUOTES.unc, { y: 4.5 });
    this.entities.push({ mesh: unc, kind: 'unc' });

    // Mini Unc Marks Jr — tiny clone next to Dad on the podium
    const uncJr = buildHumanoid(skins.uncMarks(), { holdBook: true, scale: 0.42 });
    uncJr.position.set(cx + 1.6, podiumTopY + 0.1, cz + 0.8);
    uncJr.rotation.y = -Math.PI / 4;
    this.scene.add(uncJr);
    this.addLabel(uncJr, 'UNC MARKS JR · MINI ME', '#ffd54a', 2.4);
    this.addBubble(uncJr, QUOTES.uncJr, { y: 3.3 });
    this.entities.push({ mesh: uncJr, kind: 'uncJr', baseY: uncJr.position.y, phase: Math.random() * Math.PI * 2 });

    // Taleb dragon
    this.dragon = buildTalebDragon(skins.taleb());
    this.dragon.position.set(cx, baseY + 14, cz - 6);
    this.scene.add(this.dragon);
    this.addLabel(this.dragon, 'NASSIM TALEB DRAGON · FINAL BOSS', '#ff5252', 4.0);
    this.addBubble(this.dragon, 'taleb', { y: 5.6 });

    // NWA stage — left
    const nwaStageX = cx - 11;
    const nwaStageZ = cz + 2;
    const nwaStageTop = this.buildStage(nwaStageX, baseY, nwaStageZ, 12, 5, 0xffd54a);
    const lSpeaker = this.buildSpeakerStack(nwaStageX - 6.2, nwaStageTop, nwaStageZ);
    this.scene.add(lSpeaker);
    const rSpeaker = this.buildSpeakerStack(nwaStageX + 6.2, nwaStageTop, nwaStageZ);
    this.scene.add(rSpeaker);
    const boombox = this.buildBoombox(nwaStageX, nwaStageTop, nwaStageZ + 2.0);
    this.scene.add(boombox);

    // Disco lights above NWA stage
    for (let i = 0; i < 3; i++) {
      const colors = [0xff5252, 0x5ad8e0, 0xffd54a];
      const dl = new THREE.PointLight(colors[i], 4, 18, 2);
      dl.position.set(nwaStageX + (i - 1) * 4, nwaStageTop + 7, nwaStageZ);
      this.scene.add(dl);
      this.discoLights.push({ light: dl, base: dl.position.clone(), phase: i * 1.7 });
    }

    const nwa = ['eazy', 'cube', 'dre', 'ren', 'yella'];
    nwa.forEach((m, i) => {
      const c = buildHumanoid(skins.nwa(m), { holdMic: i % 2 === 0, scale: 0.78 });
      const x = nwaStageX + (i - 2) * 2.2;
      const z = nwaStageZ;
      c.position.set(x, nwaStageTop + 2.0, z);
      c.rotation.y = Math.atan2(cx - x, cz - z);
      this.scene.add(c);
      this.addLabel(c, NWA_NAMES[i], '#ffd54a');
      // Bubble each member with their own pool — Ice Cube gets his own.
      if (m === 'cube') this.addBubble(c, 'nwa_cube', { y: 4.5 });
      else if (m === 'eazy') this.addBubble(c, 'nwa_eazy', { y: 4.5 });
      else if (m === 'dre') this.addBubble(c, 'nwa_lead', { y: 4.5 });
      this.entities.push({ mesh: c, kind: 'nwa', baseY: c.position.y });
    });

    // 2 Live Crew stage — right
    const tlcStageX = cx + 11;
    const tlcStageZ = cz + 2;
    const tlcStageTop = this.buildStage(tlcStageX, baseY, tlcStageZ, 11, 5, 0xff80ff);
    const lSpk2 = this.buildSpeakerStack(tlcStageX - 5.7, tlcStageTop, tlcStageZ);
    this.scene.add(lSpk2);
    const rSpk2 = this.buildSpeakerStack(tlcStageX + 5.7, tlcStageTop, tlcStageZ);
    this.scene.add(rSpk2);
    for (let i = 0; i < 3; i++) {
      const colors = [0xff80ff, 0xa01818, 0x1f4dff];
      const dl = new THREE.PointLight(colors[i], 4, 18, 2);
      dl.position.set(tlcStageX + (i - 1) * 4, tlcStageTop + 7, tlcStageZ);
      this.scene.add(dl);
      this.discoLights.push({ light: dl, base: dl.position.clone(), phase: i * 1.3 + 0.5 });
    }

    const tlc = ['luke', 'fresh', 'mr', 'brother'];
    tlc.forEach((m, i) => {
      const c = buildHumanoid(skins.twoLive(m), { holdMic: true, scale: 0.78 });
      const x = tlcStageX + (i - 1.5) * 2.2;
      const z = tlcStageZ;
      c.position.set(x, tlcStageTop + 2.0, z);
      c.rotation.y = Math.atan2(cx - x, cz - z);
      this.scene.add(c);
      this.addLabel(c, TLC_NAMES[i], '#ff80ff');
      if (i === 0 || i === 2) this.addBubble(c, 'tlc', { y: 4.5 });
      this.entities.push({ mesh: c, kind: 'twolive', baseY: c.position.y });
    });

    // Zombie horde — front arc
    const zombieCount = 16;
    for (let i = 0; i < zombieCount; i++) {
      const t = i / (zombieCount - 1);
      const angle = Math.PI / 2 + (t - 0.5) * Math.PI * 0.85;
      const r = 13 + (i % 3) * 1.5;
      const x = cx + Math.cos(angle) * r;
      const z = cz + Math.sin(angle) * r;
      const isMarx = i % 2 === 0;
      const skin = isMarx ? skins.marxZombie() : skins.smithZombie();
      const c = buildHumanoid(skin, { scale: 0.7 + (i % 3) * 0.04 });
      this.attach(c, x, z);
      this.addLabel(c, isMarx ? 'KARL MARX' : 'A. SMITH', isMarx ? '#ff5252' : '#a8c89a', 3.2);
      if (i === 1 || i === 7) this.addBubble(c, QUOTES.smith, { y: 4.4 });
      if (i === 4 || i === 12) this.addBubble(c, QUOTES.marx, { y: 4.4 });
      this.entities.push({
        mesh: c, kind: 'zombie',
        baseX: c.position.x, baseY: c.position.y, baseZ: c.position.z,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Linus Torvalds — walking patrol on the east side
    const linus = buildHumanoid(skins.linus(), { holdSword: true, scale: 0.78 });
    const linusCx = cx + 9;
    const linusCz = cz - 7;
    const linusR = 5.5;
    this.attach(linus, linusCx + linusR, linusCz, { faceCenter: false });
    this.addLabel(linus, 'LINUS TORVALDS', '#7af07a');
    this.addBubble(linus, QUOTES.linus, { y: 4.5 });
    this.entities.push({
      mesh: linus, kind: 'walker',
      cx: linusCx, cz: linusCz, radius: linusR,
      baseY: linus.position.y,
      speed: 0.0004, phase: 0
    });

    // Tux — also walking, chasing Linus around the patrol loop
    const tux = buildPenguin(skins.tux(), { scale: 0.82 });
    const tuxCx = cx + 9;
    const tuxCz = cz - 7;
    const tuxR = 5.5;
    this.attach(tux, tuxCx + tuxR, tuxCz, { faceCenter: false });
    this.addLabel(tux, 'TUX · LINUX MASCOT', '#fff', 3.4);
    this.addBubble(tux, QUOTES.tux, { y: 4.4 });
    this.entities.push({
      mesh: tux, kind: 'walker',
      cx: tuxCx, cz: tuxCz, radius: tuxR,
      baseY: tux.position.y,
      speed: 0.0004, phase: -0.9   // trailing Linus
    });

    // Walking Nassim Taleb troll — humanoid form, separate from the dragon.
    // Patrols a wide loop around the arena tweeting "haha get blocked".
    const taleb = buildHumanoid(skins.talebHuman(), { scale: 0.82 });
    const talebCx = cx;
    const talebCz = cz;
    const talebR = 16;
    this.attach(taleb, talebCx + talebR, talebCz, { faceCenter: false });
    this.addLabel(taleb, 'NASSIM TALEB · TROLLING', '#ff5252', 3.4);
    this.addBubble(taleb, 'talebTroll', { y: 4.6 });
    this.entities.push({
      mesh: taleb, kind: 'walker',
      cx: talebCx, cz: talebCz, radius: talebR,
      baseY: taleb.position.y,
      speed: 0.00022, phase: 1.5
    });

    // Overworked TA — patrolling a tighter loop near the podium grading bash
    const ta = buildHumanoid(skins.ta(), { holdBook: true, scale: 0.78 });
    const taCx = cx - 4;
    const taCz = cz + 8;
    const taR = 3.5;
    this.attach(ta, taCx + taR, taCz, { faceCenter: false });
    this.addLabel(ta, 'TA · OVERWORKED', '#9ad8ff', 3.2);
    this.addBubble(ta, QUOTES.ta, { y: 4.4 });
    this.entities.push({
      mesh: ta, kind: 'walker',
      cx: taCx, cz: taCz, radius: taR,
      baseY: ta.position.y,
      speed: 0.0006, phase: 0.4
    });

    // Dean of Discipline — chasing students across the front of the stage
    const dean = buildHumanoid(skins.dean(), { holdBook: true, scale: 0.85 });
    const deanCx = cx + 4;
    const deanCz = cz + 9;
    const deanR = 4;
    this.attach(dean, deanCx + deanR, deanCz, { faceCenter: false });
    this.addLabel(dean, 'DEAN · WRITING YOU UP', '#ff5252', 3.4);
    this.addBubble(dean, QUOTES.dean, { y: 4.6 });
    this.entities.push({
      mesh: dean, kind: 'walker',
      cx: deanCx, cz: deanCz, radius: deanR,
      baseY: dean.position.y,
      speed: 0.0007, phase: 2.1
    });

    // Y2K prophet — wandering between the Capitol and the arena holding a sign
    const y2k = buildHumanoid(skins.y2k(), { holdBook: true, scale: 0.8 });
    const y2kCx = (this.capitolCenter.x + cx) / 2;
    const y2kCz = cz;
    const y2kR = 4;
    this.attach(y2k, y2kCx + y2kR, y2kCz, { faceCenter: false });
    this.addLabel(y2k, 'Y2K PROPHET · END IS NIGH', '#ffd54a', 3.4);
    this.addBubble(y2k, QUOTES.y2k, { y: 4.6 });
    this.entities.push({
      mesh: y2k, kind: 'walker',
      cx: y2kCx, cz: y2kCz, radius: y2kR,
      baseY: y2k.position.y,
      speed: 0.0005, phase: 0.8
    });

    // FSU penguin
    const fsu = buildPenguin(skins.fsuPenguin(), { scale: 0.75 });
    this.attach(fsu, cx - 9, cz - 8);
    this.addLabel(fsu, 'FSU PENGUIN', '#ffd54a');
    this.addBubble(fsu, QUOTES.fsu, { y: 3.8 });
    this.entities.push({ mesh: fsu, kind: 'fsu' });

    // Mini FSU penguin — tiny mini-me waddling next to the big one
    const fsuJr = buildPenguin(skins.fsuPenguin(), { scale: 0.38 });
    this.attach(fsuJr, cx - 7.6, cz - 7.4);
    this.addLabel(fsuJr, 'MINI NOLE', '#ffd54a', 2.0);
    this.addBubble(fsuJr, QUOTES.fsuJr, { y: 2.6 });
    this.entities.push({ mesh: fsuJr, kind: 'fsuJr', baseY: fsuJr.position.y, phase: Math.random() * Math.PI * 2 });

    // Second Unc Marks — patrolling the Harvard quad on a slow circular path
    const uncWalker = buildHumanoid(skins.uncMarks(), { holdBook: true, scale: 0.85 });
    const uncRouteCx = this.harvardCenter.x;
    const uncRouteCz = this.harvardCenter.z + 4;
    const uncStartX = uncRouteCx + 10;
    const uncStartZ = uncRouteCz;
    this.attach(uncWalker, uncStartX, uncStartZ, { faceCenter: false });
    this.addLabel(uncWalker, 'UNC MARKS · ON PATROL', '#ffd54a', 3.4);
    this.addBubble(uncWalker, QUOTES.uncWalk, { y: 4.5 });
    this.entities.push({
      mesh: uncWalker, kind: 'uncWalk',
      cx: uncRouteCx, cz: uncRouteCz, radius: 10,
      baseY: uncWalker.position.y,
      speed: 0.00018,
      phase: 0
    });

    // 1999 Harvard dorm — 4 unnamed Black Harvard student friends hanging out
    // inside Unc Marks's dorm. Pre-internet vibes: posters, CRT, dial-up modem.
    // Dorm center matches the (cx-28, cz-14) offset in buildDorm1999.
    const dormCx = this.harvardCenter.x - 28;
    const dormCz = this.harvardCenter.z - 14;
    // Fixed dorm-floor Y so friends stand on the floor regardless of terrain.
    const dormY = baseY + 0.3;
    const friendSpots = [
      { dx: -2.2, dz: 1.1, ry: 0 },          // sitting on lower bunk left
      { dx: 2.2, dz: 1.1, ry: -0.2 },        // sitting on lower bunk right
      { dx: -1.4, dz: 2.4, ry: -1.6 },       // by the boombox/CRT
      { dx: 1.6, dz: 2.4, ry: 1.6 }          // by the AOL monitor
    ];
    friendSpots.forEach((spot, i) => {
      const friend = buildHumanoid(skins.dormFriend(i), { scale: 0.72 });
      friend.position.set(dormCx + spot.dx, dormY, dormCz + spot.dz);
      friend.rotation.y = spot.ry;
      this.scene.add(friend);
      this.addLabel(friend, 'DORM FRIEND', '#ffd54a', 3.0);
      this.addBubble(friend, QUOTES.dorm, { y: 4.0 });
      this.entities.push({
        mesh: friend, kind: 'dormFriend',
        baseY: friend.position.y, baseRy: spot.ry,
        phase: Math.random() * Math.PI * 2
      });
    });

    // Extra disco lights above the podium for that unmistakable LIT factor
    for (let i = 0; i < 4; i++) {
      const colors = [0xff5252, 0x5ad8e0, 0xffd54a, 0xff80ff];
      const dl = new THREE.PointLight(colors[i], 5, 22, 2);
      const angle = (i / 4) * Math.PI * 2;
      dl.position.set(cx + Math.cos(angle) * 6, baseY + 18, cz + Math.sin(angle) * 6);
      this.scene.add(dl);
      this.discoLights.push({ light: dl, base: dl.position.clone(), phase: i * 1.1 + 0.7 });
    }

    // Teleport the player onto the cleared arena floor so they spawn at
    // proper eye-height instead of mid-air or buried under terrain.
    if (this.player && this.player.position) {
      // Stand the player INSIDE the cleared arena (a few blocks south of the
      // podium, facing the stage). Read surface at their actual spawn x/z so
      // we never put them under terrain — and lift the camera enough above
      // ground that the head clears the grass plane.
      const px = this.spawnCenter.x;
      const pz = this.spawnCenter.z + 6;
      const surf = this.surfaceY(px, pz);
      const safeSurf = surf > 1 ? surf : (this.spawnCenter.y > 1 ? this.spawnCenter.y : 14);
      // +3.5 leaves margin for physics to settle without snapping into terrain.
      this.player.position.set(px, safeSurf + 3.5, pz);
      if (this.player.velocity) this.player.velocity.set(0, 0, 0);
      if (this.player.camera) {
        this.player.camera.rotation.order = 'YXZ';
        this.player.camera.rotation.y = Math.PI;
        this.player.camera.rotation.x = -0.05;
      }
    }

    console.log(`[MarkCraft] spawned ${this.entities.length} entities + dragon + stages + 1999 dorm`);
  }

  update(dt, time) {
    // Dragon flight
    if (this.dragon) {
      const cx = this.spawnCenter.x;
      const cz = this.spawnCenter.z;
      const baseY = this.spawnCenter.y || 12;
      const t = time * 0.0005;
      const r = 18;
      this.dragon.position.x = cx + Math.cos(t) * r;
      this.dragon.position.z = cz + Math.sin(t) * r;
      this.dragon.position.y = baseY + 13 + Math.sin(time * 0.0018) * 1.5;
      this.dragon.rotation.y = -t + Math.PI / 2;
      const wings = this.dragon.userData.wings;
      if (wings) {
        const flap = Math.sin(time * 0.012) * 0.6;
        wings[0].rotation.x = flap;
        wings[1].rotation.x = -flap;
      }
      // Breathe fire ~every 1.4s
      if (!this.lastFireAt || time - this.lastFireAt > 1400) {
        this.spawnFireBurst(time);
        this.lastFireAt = time;
      }
    }

    // Update fire particles
    for (let i = this.fireParticles.length - 1; i >= 0; i--) {
      const p = this.fireParticles[i];
      const age = time - p.born;
      if (age > p.life) {
        this.scene.remove(p.sprite);
        this.fireParticles.splice(i, 1);
        continue;
      }
      p.sprite.position.x += p.vx * dt * 1000;
      p.sprite.position.y += p.vy * dt * 1000;
      p.sprite.position.z += p.vz * dt * 1000;
      const k = 1 - age / p.life;
      p.sprite.material.opacity = k;
      const sz = p.sprite.scale.x * 1.005;
      p.sprite.scale.set(sz, sz, 1);
    }

    // Fireworks every ~1.6s + an occasional double-pop for chaos
    if (time - this.lastFireworkAt > 1600) {
      this.spawnFirework(time);
      if (Math.random() < 0.45) this.spawnFirework(time);
      this.lastFireworkAt = time;
    }
    for (let i = this.fireworks.length - 1; i >= 0; i--) {
      const p = this.fireworks[i];
      const age = time - p.born;
      if (age > p.life) {
        this.scene.remove(p.sprite);
        this.fireworks.splice(i, 1);
        continue;
      }
      p.sprite.position.x += p.vx * dt * 1000;
      p.sprite.position.y += p.vy * dt * 1000;
      p.sprite.position.z += p.vz * dt * 1000;
      p.vy -= 0.00002 * dt * 1000; // gravity
      const k = 1 - age / p.life;
      p.sprite.material.opacity = k;
    }

    // Disco lights
    for (const dl of this.discoLights) {
      dl.light.intensity = 3 + Math.sin(time * 0.005 + dl.phase) * 2.5 + 1.5;
      dl.light.position.x = dl.base.x + Math.sin(time * 0.001 + dl.phase) * 1.2;
      dl.light.position.z = dl.base.z + Math.cos(time * 0.001 + dl.phase) * 1.2;
    }

    // Spotlights swing across the podium
    if (this.spotLights.length === 2) {
      const cx = this.spawnCenter.x;
      const cz = this.spawnCenter.z;
      const baseY = this.spawnCenter.y || 12;
      const sweep = Math.sin(time * 0.0008) * 1.5;
      this.spotLights[0].target.position.set(cx + sweep, baseY + 2, cz);
      this.spotLights[1].target.position.set(cx - sweep, baseY + 2, cz);
    }

    // Podium ring + sign pulse
    if (this.podiumRing) {
      const k = 0.25 + 0.15 * Math.sin(time * 0.004);
      this.podiumRing.material.opacity = k + 0.1;
      this.podiumRing.scale.setScalar(1 + Math.sin(time * 0.003) * 0.08);
    }
    if (this.markcraftSign) {
      this.markcraftSign.position.y = (this.spawnCenter.y || 12) + 14 + Math.sin(time * 0.002) * 0.5;
      const s = 1 + Math.sin(time * 0.003) * 0.05;
      this.markcraftSign.scale.set(5 * s, 1.25 * s, 1);
    }
    if (this.beacon) {
      this.beacon.material.opacity = 0.45 + Math.sin(time * 0.005) * 0.2;
    }

    // Cycle bubble text — re-resolve pool every tick so Mini-Me Mode toggling
    // takes effect immediately on the next bubble flip.
    for (const b of this.bubbles) {
      if (time >= b.next) {
        if (b.poolKey) {
          const fresh = resolvePool(b.poolKey);
          if (fresh !== b.pool) { b.pool = fresh; b.idx = 0; }
        }
        b.idx = (b.idx + 1) % b.pool.length;
        const q = b.pool[b.idx];
        b.sprite.userData.setText?.(q.t, { fg: q.fg, bg: q.bg });
        b.next = time + 3500 + Math.random() * 2500;
      }
    }

    // Entity sway/bob
    for (const e of this.entities) {
      if (e.kind === 'zombie') {
        const sway = Math.sin(time * 0.003 + e.phase);
        e.mesh.rotation.y = sway * 0.5 + Math.PI;
        const bob = Math.abs(Math.sin(time * 0.005 + e.phase)) * 0.15;
        e.mesh.position.y = e.baseY + bob;
      } else if (e.kind === 'nwa' || e.kind === 'twolive') {
        const bob = Math.sin(time * 0.012 + (e.mesh.position.x % 7)) * 0.15;
        e.mesh.position.y = e.baseY + bob;
        e.mesh.rotation.y = Math.atan2(
          this.spawnCenter.x - e.mesh.position.x,
          this.spawnCenter.z - e.mesh.position.z
        ) + Math.sin(time * 0.004 + e.mesh.position.x) * 0.15;
      } else if (e.kind === 'uncWalk' || e.kind === 'walker') {
        // Slow patrol around a fixed center point
        const t = time * e.speed + e.phase;
        const x = e.cx + Math.cos(t) * e.radius;
        const z = e.cz + Math.sin(t) * e.radius;
        e.mesh.position.x = x;
        e.mesh.position.z = z;
        e.mesh.position.y = e.baseY + Math.abs(Math.sin(time * 0.008 + e.phase)) * 0.15;
        // Face direction of motion
        e.mesh.rotation.y = Math.atan2(
          -Math.sin(t) * e.radius, Math.cos(t) * e.radius
        ) + Math.PI / 2;
      } else if (e.kind === 'dormFriend') {
        // Subtle idle bob + occasional head-bob to the music
        const bob = Math.sin(time * 0.003 + e.phase) * 0.04;
        e.mesh.position.y = e.baseY + bob;
        e.mesh.rotation.y = e.baseRy + Math.sin(time * 0.0015 + e.phase) * 0.18;
      } else if (e.kind === 'uncJr' || e.kind === 'fsuJr') {
        const bob = Math.abs(Math.sin(time * 0.006 + e.phase)) * 0.12;
        e.mesh.position.y = e.baseY + bob;
      }
    }
  }
}
