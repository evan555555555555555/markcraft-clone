// Drop new mp3s into /public/audio/ and add an entry here.
// Order = play order. The first track plays on game start.
export const TRACKS = [
  { title: 'Straight Outta Compton', artist: 'N.W.A.', src: './audio/straight-outta-compton.mp3' }
];

let audio = null;
let currentIdx = 0;
const listeners = new Set();

function notify() {
  for (const fn of listeners) {
    try { fn(getState()); } catch {}
  }
}

function loadCurrent() {
  if (!audio) {
    audio = new Audio();
    audio.loop = false;
    audio.volume = 0.45;
    audio.preload = 'auto';
    audio.addEventListener('ended', () => {
      next(true);
    });
    audio.addEventListener('error', () => {
      console.warn('[MarkCraft] audio failed to load:', audio.src);
    });
  }
  const t = TRACKS[currentIdx];
  if (!t) return;
  if (audio.src && audio.src.endsWith(t.src.replace('./', '/'))) return;
  audio.src = t.src;
}

export function initAudio() {
  loadCurrent();
  return audio;
}

export function playMusic() {
  loadCurrent();
  if (!audio) return;
  const p = audio.play();
  if (p && p.catch) p.catch(() => {});
  notify();
}

export function pauseMusic() {
  if (audio) audio.pause();
  notify();
}

export function toggleMusic() {
  if (!audio) {
    playMusic();
    return;
  }
  if (audio.paused) audio.play().catch(() => {});
  else audio.pause();
  notify();
}

export function next(autoplay = true) {
  if (TRACKS.length === 0) return;
  currentIdx = (currentIdx + 1) % TRACKS.length;
  loadCurrent();
  if (autoplay && audio) audio.play().catch(() => {});
  notify();
}

export function prev(autoplay = true) {
  if (TRACKS.length === 0) return;
  currentIdx = (currentIdx - 1 + TRACKS.length) % TRACKS.length;
  loadCurrent();
  if (autoplay && audio) audio.play().catch(() => {});
  notify();
}

export function setVolume(v) {
  if (audio) audio.volume = Math.max(0, Math.min(1, v));
  notify();
}

export function getState() {
  return {
    track: TRACKS[currentIdx] || null,
    index: currentIdx,
    total: TRACKS.length,
    paused: !audio || audio.paused,
    volume: audio ? audio.volume : 0.45
  };
}

export function onChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
