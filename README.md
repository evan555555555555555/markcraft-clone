# MarkCraft

A voxel rescue mission, built in Three.js. Save the professor, fight the Taleb dragon, watch N.W.A. and 2 Live Crew perform on twin neon stages, and tour Harvard Yard \u2014 now with Columbia Law School and LIS3353 posters scattered across the quad.

## Run it locally (zero hassle)

You need [Node.js 18 or newer](https://nodejs.org/). After that:

```bash
npm install
npm start
```

Then open the URL it prints (usually <http://localhost:5173>).

## Or build a static site

```bash
npm run build
```

The built site lands in `dist/`. Because `vite.config.js` uses a relative base, you can open `dist/index.html` directly in a browser \u2014 no server required. You can zip the whole `dist/` folder and email it.

## Controls

| Key | Action |
| --- | --- |
| `WASD` | Move |
| `SHIFT` | Sprint |
| `SPACE` | Jump |
| `1`-`8` | Select block |
| `0` | Pickaxe |
| `M` | Toggle music |
| `N` | Next track |
| `R` | Reset camera |
| `U` | Toggle dev panel |
| `F1` / `F2` | Save / load |
| `F10` | Spectator (orbit) camera |

Click anywhere on the world to grab the mouse. If pointer lock is blocked (mobile, certain corporate browsers, etc.), the game stays in spectator mode and you can still see the scene.

## Add more music

Drop new `.mp3` files into `public/audio/` and add them to the `TRACKS` array at the top of [`scripts/audio.js`](scripts/audio.js):

```js
export const TRACKS = [
  { title: 'Straight Outta Compton', artist: 'N.W.A.', src: './audio/straight-outta-compton.mp3' },
  { title: 'Your New Track',         artist: 'Artist', src: './audio/your-new-track.mp3' }
];
```

The album switcher in the top-left corner will pick them up automatically. Use the prev / play / next buttons or hit `N` to skip tracks.

## Troubleshooting

- **Static / black screen on boot**: the loader detects WebGL and shows a friendly error if it's missing or disabled. Try a different browser (Chrome / Firefox), update graphics drivers, or hit the "RETRY" button.
- **Stuck on "click to play"**: that overlay needs a single click to grab the mouse. If pointer lock is blocked entirely, press `F10` for spectator camera.
- **No sound**: most browsers require a user gesture before audio plays \u2014 the loading screen's `[ ENTER MARKCRAFT ]` button counts. If music still doesn't play, hit `M` to retry, or use the play button in the corner.
- **Slow on a big map**: open the dev panel with `U` and lower `Draw Distance` under World.

## Credits

Built on top of [dgreenheck/minecraft-threejs-clone](https://github.com/dgreenheck/minecraft-threejs-clone). Voxel characters, Harvard / Columbia campus, dragon, stages, fireworks, music switcher, and bulletproof boot all custom.
