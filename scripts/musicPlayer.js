import { TRACKS, getState, onChange, playMusic, pauseMusic, next, prev } from './audio.js';

export function buildMusicPlayer() {
  const root = document.createElement('div');
  root.id = 'mc-music-player';
  root.innerHTML = `
    <div class="mc-mp-row">
      <button class="mc-mp-btn" data-act="prev" title="Previous track">\u23EE</button>
      <button class="mc-mp-btn mc-mp-play" data-act="toggle" title="Play / Pause">\u25B6</button>
      <button class="mc-mp-btn" data-act="next" title="Next track (N)">\u23ED</button>
    </div>
    <div class="mc-mp-track">
      <div class="mc-mp-title">\u2014</div>
      <div class="mc-mp-artist">\u2014</div>
    </div>
    <div class="mc-mp-counter">0 / 0</div>
  `;
  document.body.appendChild(root);

  const titleEl = root.querySelector('.mc-mp-title');
  const artistEl = root.querySelector('.mc-mp-artist');
  const counterEl = root.querySelector('.mc-mp-counter');
  const playBtn = root.querySelector('.mc-mp-play');

  function render(s) {
    if (!s.track) {
      titleEl.textContent = 'no tracks';
      artistEl.textContent = 'add mp3s to /audio/';
      counterEl.textContent = '0 / 0';
      playBtn.textContent = '\u25B6';
      return;
    }
    titleEl.textContent = s.track.title;
    artistEl.textContent = s.track.artist;
    counterEl.textContent = `${s.index + 1} / ${s.total}`;
    playBtn.textContent = s.paused ? '\u25B6' : '\u275A\u275A';
  }

  root.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const act = btn.dataset.act;
    if (act === 'prev') prev();
    else if (act === 'next') next();
    else if (act === 'toggle') {
      const s = getState();
      if (s.paused) playMusic();
      else pauseMusic();
    }
    e.stopPropagation();
  });

  document.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.code === 'KeyN') next();
  });

  onChange(render);
  render(getState());

  buildMiniMeBadge();

  return root;
}

// Floating Mini-Me Mode toggle so parents can flip it mid-game without
// reloading. Lives in the corner; clicking swaps spicy lyrics/quotes for
// kid-safe versions instantly on the next bubble cycle.
function buildMiniMeBadge() {
  const badge = document.createElement('button');
  badge.id = 'mc-mini-me-badge';
  badge.type = 'button';
  badge.style.cssText = 'position:fixed;left:16px;bottom:96px;z-index:55;background:rgba(20,10,4,0.85);color:#ffd54a;border:3px solid #ffd54a;padding:8px 12px;font-family:monospace;font-size:12px;cursor:pointer;line-height:1.3;text-align:left;';
  function render() {
    const on = !!window.MARKCRAFT_MINI_ME;
    badge.innerHTML = `<b>MINI-ME MODE</b><br/>${on ? '<span style="color:#7af07a;">ON · clean</span>' : '<span style="color:#fff;opacity:0.7;">OFF · explicit</span>'}`;
  }
  badge.addEventListener('click', (e) => {
    e.stopPropagation();
    window.MARKCRAFT_MINI_ME = !window.MARKCRAFT_MINI_ME;
    try { localStorage.setItem('markcraft.miniMe', window.MARKCRAFT_MINI_ME ? '1' : '0'); } catch (_) {}
    render();
  });
  document.body.appendChild(badge);
  render();
}
