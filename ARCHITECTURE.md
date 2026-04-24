# MarkCraft Architecture

A guide to the codebase for contributors. Read this before your first PR.

## High-level picture

```
┌───────────────────────────────────────────────────────────────┐
│  index.html                                                   │
│    ↓ loads                                                    │
│  scripts/main.js  ── boots everything, owns the render loop   │
│    ├─ loadingScreen.js  ── splash, WebGL detection, gate      │
│    ├─ ModelLoader       ── loads .glb assets (pickaxe)        │
│    ├─ World             ── voxel world, chunked               │
│    │   └─ WorldChunk    ── 16×N×16 block grid, meshing        │
│    ├─ Player            ── camera rig, movement, input        │
│    ├─ Physics           ── collision, gravity, step response  │
│    ├─ EntityManager     ── NPCs, dragon, speech bubbles       │
│    │   └─ characters.js ── humanoid / penguin / dragon meshes │
│    │   └─ skins.js      ── procedural face / body textures   │
│    │   └─ speechBubble  ── billboard text bubbles             │
│    │   └─ harvard.js    ── Harvard Yard, FSU, Columbia        │
│    ├─ audio / musicPlayer  ── HUD music player, track list    │
│    └─ ui.js             ── dev panel, HUD wiring              │
└───────────────────────────────────────────────────────────────┘
```

## Directory layout

```
markcraft-clone/
├── index.html                HTML shell — toolbar, status, root div
├── style.css                 global styles — HUD, loading screen, bubbles
├── vite.config.js            Vite config — relative base for portable dist
├── package.json              deps, scripts (start / build / deploy)
├── Dockerfile                multi-stage build → nginx static image
├── docker-compose.yml        one-command Docker run on port 8080
│
├── scripts/                  game source (plain ES modules, no bundler tricks)
├── public/                   static assets copied as-is into dist/
│   ├── audio/                .mp3 tracks for the music player
│   ├── fonts/                Minecraft.ttf — HUD font
│   ├── models/               pickaxe.glb — first-person tool model
│   ├── textures/             block textures (dirt, grass, stone, ores, leaves)
│   └── screenshot.png / .jpg README hero and gallery images
│
├── .github/                  issue templates, PR template, dependabot
├── dist/                     built output (gitignored)
└── docs                      this file, CONTRIBUTING, SECURITY, etc.
```

## The scripts, one by one

### Boot & top-level

**[`main.js`](scripts/main.js)** — the game's entry point. Creates the Three.js renderer, scene, camera, lighting, sky. Wires up `World`, `Player`, `Physics`, `EntityManager`, the UI panels, and the main `requestAnimationFrame` loop. Also handles the "WebGL not available" fatal error screen. When you're adding a new global system, this is where you hook it in.

**[`loadingScreen.js`](scripts/loadingScreen.js)** — the splash screen you see on boot. Detects WebGL support, renders the lore intro, the controls table, the **[ ENTER MARKCRAFT ]** button, and the "MINI-ME MODE" toggle. Returns a promise that resolves when the user clicks enter — `main.js` waits for it before starting the render loop. If you want to change the first-run experience, this is the file.

### World generation

**[`world.js`](scripts/world.js)** — the `World` class. Owns all active chunks, handles `addChunk` / `removeChunk` based on player position, runs the block generation pass (terrain + resources + trees), and exposes `getBlock` / `setBlock` for gameplay code.

**[`worldChunk.js`](scripts/worldChunk.js)** — a single 16×N×16 chunk. Runs terrain generation using simplex noise (via `rng.js`), places resources (coal, iron), plants trees, handles save/load to `dataStore`, and builds the optimized `InstancedMesh` for rendering. This is the biggest file in the project and the heart of the voxel engine.

**[`blocks.js`](scripts/blocks.js)** — the block type table. Each entry defines an ID, name, color / textures, whether it's solid, and whether it generates as a resource. **Adding a new block type? Start here.** Also load the texture into `public/textures/` and reference it in the entry.

**[`rng.js`](scripts/rng.js)** — tiny seedable RNG used by `worldChunk` so world generation is deterministic for a given seed.

**[`dataStore.js`](scripts/dataStore.js)** — in-memory map of `chunk → { modified blocks }`. Used for save/load (`F1` / `F2`) so that player-placed / player-broken blocks survive a chunk unload.

### Player & physics

**[`player.js`](scripts/player.js)** — the `Player` class. Camera rig, pointer-lock input, WASD movement, sprint (shift), jump (space), block selection (1-8, 0), spectator mode (F10). Picks the block in front of the crosshair for break/place.

**[`physics.js`](scripts/physics.js)** — gravity, collision detection, step-up, bounding-box world query. Takes the player's candidate position and resolves it against voxel boundaries each frame.

### Entities (the good stuff)

**[`entities.js`](scripts/entities.js)** — the `EntityManager`. Spawns and updates all NPCs and set pieces: Unc Marks (the professor), Adam Smith zombies that respawn as Karl Marx, the Taleb dragon boss, N.W.A. and 2 Live Crew on their neon stages, Linus Torvalds, the FSU Penguin, Tux. Owns all the campus builders (`buildHarvardCampus`, `buildFsuCampus`, `buildColumbiaLaw`, `buildTallahasseeCapitol`). Defines the quote tables that drive speech bubbles. **If you want to add a new character or change what they say, this is the file.**

**[`characters.js`](scripts/characters.js)** — mesh builders. `buildHumanoid` makes a voxel person from a skin. `buildPenguin` makes the FSU penguin. `buildTalebDragon` builds the dragon with segmented body and wings. Think of this file as "how voxels turn into people and monsters."

**[`skins.js`](scripts/skins.js)** — procedural face and body textures. Draws each NPC's face on a canvas (Unc Marks' glasses, Dean's frown, Karl Marx's beard, Linus' smirk) and returns textures that `characters.js` consumes. Self-contained — add a new face here, then reference it from `entities.js`.

**[`speechBubble.js`](scripts/speechBubble.js)** — the billboard text bubbles floating above NPCs. Paints text to a canvas, wraps it in a `Sprite`, and positions it above the character's head. Also handles name tags.

**[`harvard.js`](scripts/harvard.js)** — campus builders. Harvard Yard (with the VERITAS shield and posters), FSU campus, Columbia Law, Tallahassee Capitol. Mostly procedural brick / stone / window generation at the Three.js level. Long file but highly repetitive — copy an existing campus function to add a new one.

### HUD, audio, UI

**[`audio.js`](scripts/audio.js)** — the track list and playback engine. Exports `TRACKS`, `playMusic`, `pauseMusic`, `next`, `prev`, `onChange`. **Drop an .mp3 in `public/audio/` and add an entry here to get a new track.**

**[`musicPlayer.js`](scripts/musicPlayer.js)** — the top-left HUD player widget. Subscribes to `audio.js` state changes and renders prev / play / next buttons, title, and track counter.

**[`ui.js`](scripts/ui.js)** — the right-hand dev panel (`U` toggles). Wires `lil-gui` sliders to `World`, `Player`, and `Physics` parameters so you can tweak biome weights, fog, draw distance, and jump speed at runtime.

**[`modelLoader.js`](scripts/modelLoader.js)** — thin wrapper around Three.js `GLTFLoader` for loading `.glb` assets. Currently only the pickaxe.

## Build / deploy pipeline

- **Dev:** `npm start` → Vite dev server with HMR on port 5173.
- **Prod bundle:** `npm run build` → optimized `dist/` folder. Vite's `base: './'` keeps all asset paths relative so the bundle runs from any subdirectory (GitHub Pages, a zip, a file:// URL, whatever).
- **Deploy:** `npm run deploy` ([`scripts/deploy.sh`](scripts/deploy.sh)) → builds, then force-pushes `dist/` + a `.nojekyll` file to the `gh-pages` branch. GitHub Pages is configured to serve from that branch.
- **Docker:** `docker compose up --build` → multi-stage `node:20-alpine` build → `nginx:1.27-alpine` serving the `dist/` folder on port 8080.

## Design notes (aka why it's built this way)

- **No bundler config wizardry.** Vite out of the box. If you find yourself editing `vite.config.js`, ask in an issue first.
- **Plain ES modules, no TypeScript.** The point is a readable voxel tutorial. Don't add a type layer unless the community asks for it.
- **No backend.** Everything runs in the browser. Save/load uses `localStorage` via `dataStore.js`. If you want multiplayer, open an issue — big scope.
- **Procedural textures over image files.** Faces, bricks, and bubble backgrounds are drawn on `<canvas>` at boot, not loaded as PNGs. It keeps the repo light and makes it trivial to tweak a face.
- **Relative base path.** You can open `dist/index.html` directly in a browser with no server. Zip-and-email works. Don't break this.

## Where to add things

| You want to add…        | Go here                                                         |
| ----------------------- | --------------------------------------------------------------- |
| A music track           | [`public/audio/`](public/audio) + [`scripts/audio.js`](scripts/audio.js) |
| A new NPC               | [`scripts/skins.js`](scripts/skins.js) + [`scripts/entities.js`](scripts/entities.js) |
| A new block type        | [`public/textures/`](public/textures) + [`scripts/blocks.js`](scripts/blocks.js) |
| A new campus / building | [`scripts/harvard.js`](scripts/harvard.js) + register in [`entities.js`](scripts/entities.js) |
| A new speech quote      | `QUOTES` table in [`scripts/entities.js`](scripts/entities.js) |
| A dev-panel slider      | [`scripts/ui.js`](scripts/ui.js)                                |
| A new loading-screen feature | [`scripts/loadingScreen.js`](scripts/loadingScreen.js)     |
| A new keybinding        | [`scripts/player.js`](scripts/player.js) (input handling)       |

Questions? [Open a discussion](https://github.com/evan555555555555555/markcraft-clone/discussions).
