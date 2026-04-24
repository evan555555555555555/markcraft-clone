import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { World } from './world';
import { Player } from './player';
import { Physics } from './physics';
import { setupUI } from './ui';
import { ModelLoader } from './modelLoader';
import { EntityManager } from './entities.js';
import { initAudio, playMusic, toggleMusic } from './audio.js';
import { buildLoadingScreen } from './loadingScreen.js';
import { buildMusicPlayer } from './musicPlayer.js';

function showFatal(msg, debug) {
  const div = document.createElement('div');
  div.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#1a0a05;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px;text-align:center;font-family:monospace;overflow:auto;';
  const debugBlock = debug
    ? `<details style="margin-top:18px;max-width:760px;text-align:left;background:#000;border:2px solid #ffd54a;padding:10px;font-size:11px;color:#9ad8ff;"><summary style="cursor:pointer;color:#ffd54a;font-size:13px;">show diagnostic (${debug.length} attempts)</summary><pre style="white-space:pre-wrap;word-break:break-all;margin:8px 0 0;">${debug.map((s,i)=>`#${i+1}  ${s}`).join('\n')}</pre></details>`
    : '';
  div.innerHTML = `
    <h1 style="color:#ffd54a;font-size:36px;margin:0 0 12px;">MARKCRAFT</h1>
    <p style="color:#ff5252;font-size:18px;max-width:680px;">${msg}</p>
    <p style="color:#7af07a;font-size:13px;max-width:680px;margin-top:18px;line-height:1.5;">
      <b>FIX (Chrome):</b> Settings → System → enable "Use hardware acceleration when available" → relaunch Chrome.<br/>
      Then visit <span style="color:#9ad8ff;">chrome://gpu</span> — "WebGL" + "WebGL2" should be green.
    </p>
    <p style="color:#7af07a;font-size:13px;max-width:680px;margin-top:8px;">
      <b>FIX (Safari):</b> Develop menu → Experimental Features → enable WebGL 2.0.
    </p>
    <button onclick="location.reload()" style="margin-top:20px;font-family:monospace;font-size:18px;padding:12px 24px;background:#ffd54a;border:4px solid #000;cursor:pointer;">RETRY</button>
    ${debugBlock}
  `;
  document.body.appendChild(div);
}

// Some sandboxed iframes lie about WebGL on the pre-flight canvas but the
// real WebGLRenderer still works. So we only hard-fail if the global symbol
// itself is missing — otherwise we let THREE try and catch the real error.
function webglSymbolPresent() {
  return !!(window.WebGLRenderingContext || window.WebGL2RenderingContext);
}

if (!webglSymbolPresent()) {
  showFatal('WebGL is not available in this browser. MarkCraft requires WebGL to run.');
  throw new Error('WebGL unsupported');
}

const stats = new Stats();
document.body.appendChild(stats.dom);

// Try every reasonable renderer configuration before giving up. Some browsers
// (especially sandboxed previews and integrated GPUs) refuse one configuration
// but accept another — looping through fallbacks turns one false-fatal into a
// working game. We also pre-create the canvas so we can manually request the
// context with progressively-relaxed flags as a last resort.
// 12-strategy WebGL boot with full diagnostic surface. Each strategy is wrapped
// independently so one throwing never stops the next from running. We try
// no-args, multiple THREE config combos, then manual context creation with
// progressively-stripped attributes.
window.MARKCRAFT_WEBGL_DEBUG = [];
function createRenderer() {
  const attempted = window.MARKCRAFT_WEBGL_DEBUG;
  const log = (label, info) => attempted.push(`${label} → ${info}`);

  const sharedSetup = (r, label) => {
    try {
      r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      r.setSize(window.innerWidth, window.innerHeight);
      r.setClearColor(0x80a0e0);
      r.shadowMap.enabled = true;
      r.shadowMap.type = THREE.PCFSoftShadowMap;
      log(label, 'OK');
      return r;
    } catch (e) {
      log(label, 'setup-failed: ' + e.message);
      return null;
    }
  };

  // Three.js auto-context — try a wide spread of attribute combos.
  const threeConfigs = [
    ['no-args', undefined],
    ['default', { antialias: false, powerPreference: 'default', failIfMajorPerformanceCaveat: false }],
    ['low-power', { antialias: false, powerPreference: 'low-power', failIfMajorPerformanceCaveat: false }],
    ['high-perf', { antialias: false, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: false }],
    ['antialias-on', { antialias: true, powerPreference: 'default', failIfMajorPerformanceCaveat: false }],
    ['alpha-on', { antialias: false, alpha: true, failIfMajorPerformanceCaveat: false }],
    ['no-stencil', { antialias: false, stencil: false, depth: true, failIfMajorPerformanceCaveat: false }],
    ['no-depth', { antialias: false, stencil: false, depth: false, failIfMajorPerformanceCaveat: false }]
  ];
  for (const [label, cfg] of threeConfigs) {
    try {
      const r = sharedSetup(new THREE.WebGLRenderer(cfg), `THREE ${label}`);
      if (r) return r;
    } catch (e) { log(`THREE ${label}`, e.message); }
  }

  // Manual getContext — strip attributes to absolute minimum.
  const ctxAttrSets = [
    ['default', { antialias: false, failIfMajorPerformanceCaveat: false }],
    ['minimal', { antialias: false, alpha: false, depth: true, stencil: false, premultipliedAlpha: false, preserveDrawingBuffer: false, failIfMajorPerformanceCaveat: false }],
    ['bare', {}],
    ['no-perf-caveat', { failIfMajorPerformanceCaveat: false }]
  ];
  for (const [aLabel, attrs] of ctxAttrSets) {
    for (const ctxType of ['webgl2', 'webgl', 'experimental-webgl']) {
      try {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext(ctxType, attrs);
        if (!context) { log(`manual ${ctxType} ${aLabel}`, 'returned null'); continue; }
        const r = sharedSetup(new THREE.WebGLRenderer({ canvas, context }), `manual ${ctxType} ${aLabel}`);
        if (r) return r;
      } catch (e) { log(`manual ${ctxType} ${aLabel}`, e.message); }
    }
  }

  console.error('[MarkCraft] all WebGL strategies failed:', attempted);
  return null;
}

const renderer = createRenderer();
if (!renderer) {
  showFatal('Could not create a WebGL renderer after trying every fallback configuration.', window.MARKCRAFT_WEBGL_DEBUG);
  throw new Error('WebGL renderer creation failed');
}
document.body.appendChild(renderer.domElement);

renderer.domElement.addEventListener('webglcontextlost', (e) => {
  e.preventDefault();
  console.warn('[MarkCraft] WebGL context lost, attempting to recover…');
}, false);
renderer.domElement.addEventListener('webglcontextrestored', () => {
  console.log('[MarkCraft] WebGL context restored.');
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x80a0e0);
}, false);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x80a0e0, 80, 130);

const world = new World();
world.generate();
scene.add(world);

const player = new Player(scene, world);
const physics = new Physics(scene);

const modelLoader = new ModelLoader((models) => {
  player.setTool(models.pickaxe);
});

let sun;
function setupLights() {
  sun = new THREE.DirectionalLight();
  sun.intensity = 1.5;
  sun.position.set(50, 50, 50);
  sun.castShadow = true;
  sun.shadow.camera.left = -40;
  sun.shadow.camera.right = 40;
  sun.shadow.camera.top = 40;
  sun.shadow.camera.bottom = -40;
  sun.shadow.camera.near = 0.1;
  sun.shadow.camera.far = 200;
  sun.shadow.bias = -0.0001;
  sun.shadow.mapSize = new THREE.Vector2(2048, 2048);
  scene.add(sun);
  scene.add(sun.target);

  const ambient = new THREE.AmbientLight();
  ambient.intensity = 0.2;
  scene.add(ambient);
}

const entityManager = new EntityManager(scene, world, player);
let entitiesSpawned = false;
let spawnAttemptStartedAt = 0;

function trySpawnEntities() {
  if (entitiesSpawned) return;
  if (!spawnAttemptStartedAt) spawnAttemptStartedAt = performance.now();

  if (entityManager.chunksReady()) {
    entityManager.spawnAll();
    entitiesSpawned = true;
    return;
  }
  if (performance.now() - spawnAttemptStartedAt > 12000) {
    console.warn('[MarkCraft] Chunk load timeout — force-spawning entities anyway.');
    entityManager.spawnAll();
    entitiesSpawned = true;
  }
}

// === First-person controls ===
// We always render in first-person from the player's camera. There is no
// orbit/spectator mode — the user wanted exactly one mode (Minecraft-style
// walk and look).
//
// Pointer lock is the primary look controller. When pointer lock is blocked
// (sandboxed iframe, mobile, etc.) we fall back to a "drag-to-look" handler
// that listens for raw mouse drag on the canvas and rotates the camera
// directly. Either way, the camera always follows the player.
let gameStarted = false;
let pointerLockTried = false;
let dragLook = { active: false, lastX: 0, lastY: 0, yaw: 0, pitch: 0 };
let usingDragLook = false;
const LOOK_SENSITIVITY = 0.0028;

function startGame() {
  if (gameStarted) return;
  gameStarted = true;
  tryLockPointer();
  showLookHint();
}

function showLookHint() {
  if (document.getElementById('mc-look-hint')) return;
  const hint = document.createElement('div');
  hint.id = 'mc-look-hint';
  hint.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:60;background:rgba(20,10,4,0.92);color:#ffd54a;border:4px solid #ffd54a;padding:14px 24px;font-family:monospace;font-size:18px;text-align:center;pointer-events:none;letter-spacing:1px;';
  hint.innerHTML = 'CLICK TO LOOK AROUND';
  document.body.appendChild(hint);
}
function hideLookHint() {
  const h = document.getElementById('mc-look-hint');
  if (h) h.remove();
}
document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement) hideLookHint();
  else if (gameStarted && !usingDragLook) showLookHint();
});

function tryLockPointer() {
  if (!player || !player.controls || player.controls.isLocked) return;
  pointerLockTried = true;
  try {
    const result = player.controls.lock();
    if (result && typeof result.catch === 'function') {
      result.catch(() => enableDragLook());
    }
  } catch (e) {
    enableDragLook();
  }
}

function enableDragLook() {
  if (usingDragLook) return;
  usingDragLook = true;
  // Sync drag-look initial yaw/pitch to current camera so flipping in mid-game
  // doesn't snap.
  dragLook.yaw = player.camera.rotation.y;
  dragLook.pitch = player.camera.rotation.x;
  // Replace controls.lock so onKeyDown stops hammering the failing API.
  if (player && player.controls) {
    player.controls.lock = () => {};
  }
  showDragLookHint();
}

function showDragLookHint() {
  if (document.getElementById('mc-drag-hint')) return;
  const hint = document.createElement('div');
  hint.id = 'mc-drag-hint';
  hint.style.cssText = 'position:fixed;top:84px;right:16px;z-index:60;background:rgba(20,10,4,0.85);color:#ffd54a;border:3px solid #ffd54a;padding:8px 14px;font-family:monospace;font-size:13px;max-width:260px;line-height:1.4;pointer-events:none;';
  hint.innerHTML = '<b>FIRST-PERSON MODE</b><br/><span style="color:#fff;font-size:11px;opacity:0.9;">click + drag to look · WASD to walk · run locally for mouse-lock</span>';
  document.body.appendChild(hint);
  setTimeout(() => { hint.style.transition = 'opacity 1s'; hint.style.opacity = '0'; setTimeout(() => hint.remove(), 1100); }, 6000);
}

renderer.domElement.addEventListener('mousedown', (e) => {
  if (!gameStarted) return;
  if (player.controls.isLocked) return;
  // Always re-attempt pointer lock on every click while not locked.
  if (!usingDragLook) tryLockPointer();
  dragLook.active = true;
  dragLook.lastX = e.clientX;
  dragLook.lastY = e.clientY;
});
// Catch clicks anywhere on the page (UI overlays, fog) — the user expects
// "click anywhere → mouse looks around" like Minecraft.
document.addEventListener('mousedown', (e) => {
  if (!gameStarted || player.controls.isLocked || usingDragLook) return;
  // Ignore clicks on form controls so the right panel stays usable.
  const tag = e.target.tagName;
  if (tag === 'INPUT' || tag === 'BUTTON' || tag === 'SELECT') return;
  tryLockPointer();
});
window.addEventListener('mouseup', () => { dragLook.active = false; });
window.addEventListener('mousemove', (e) => {
  if (!gameStarted || !usingDragLook || !dragLook.active) return;
  const dx = e.clientX - dragLook.lastX;
  const dy = e.clientY - dragLook.lastY;
  dragLook.lastX = e.clientX;
  dragLook.lastY = e.clientY;
  dragLook.yaw -= dx * LOOK_SENSITIVITY;
  dragLook.pitch -= dy * LOOK_SENSITIVITY;
  const pmax = Math.PI / 2 - 0.05;
  if (dragLook.pitch > pmax) dragLook.pitch = pmax;
  if (dragLook.pitch < -pmax) dragLook.pitch = -pmax;
  // Apply directly to the camera using YXZ order so yaw/pitch don't roll.
  player.camera.rotation.order = 'YXZ';
  player.camera.rotation.y = dragLook.yaw;
  player.camera.rotation.x = dragLook.pitch;
});

let previousTime = performance.now();
function animate() {
  requestAnimationFrame(animate);

  try {
    const currentTime = performance.now();
    const dt = (currentTime - previousTime) / 1000;

    if (!entitiesSpawned) trySpawnEntities();

    // Always run physics + player update once the game has started, regardless
    // of whether pointer lock holds. Drag-look controls camera rotation
    // separately.
    if (gameStarted) {
      physics.update(dt, player, world);
      player.update(world);
      world.update(player);

      if (sun) {
        sun.position.copy(player.camera.position);
        sun.position.sub(new THREE.Vector3(-50, -50, -50));
        sun.target.position.copy(player.camera.position);
      }
    }

    if (entitiesSpawned) entityManager.update(dt, currentTime);

    // Single camera. Always first-person.
    renderer.render(scene, player.camera);
    stats.update();

    previousTime = currentTime;
  } catch (err) {
    console.error('[MarkCraft] frame error:', err);
  }
}

window.addEventListener('resize', () => {
  player.camera.aspect = window.innerWidth / window.innerHeight;
  player.camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyM') toggleMusic();
});

window.addEventListener('error', (e) => {
  console.error('[MarkCraft] uncaught error:', e.error || e.message);
});
window.addEventListener('unhandledrejection', (e) => {
  const msg = (e.reason && e.reason.message) || String(e.reason || '');
  if (/pointer lock/i.test(msg)) {
    enableDragLook();
    e.preventDefault();
    return;
  }
  console.error('[MarkCraft] unhandled rejection:', e.reason);
});

try {
  setupUI(world, player, physics, scene);
  setupLights();
  animate();
  initAudio();
  buildMusicPlayer();
  buildLoadingScreen(() => {
    playMusic();
    trySpawnEntities();
    startGame();
  });
} catch (err) {
  showFatal(`Failed to start: ${err.message}`);
  throw err;
}
