# Contributing to MarkCraft

Hey. You want to make Unc Marks' rescue mission weirder, faster, or less broken. Welcome.

## Quick start

```bash
git clone https://github.com/evan555555555555555/markcraft-clone.git
cd markcraft-clone
npm install
npm start
```

Then open <http://localhost:5173>. Hit **[ ENTER MARKCRAFT ]**, click to grab the mouse, and you're in.

## How to contribute

1. **Fork** this repo.
2. **Branch** off `main`: `git checkout -b your-feature-name`.
3. **Code.** Keep changes focused — one feature or fix per PR.
4. **Test it locally.** Run `npm start`, click around, break blocks, fight zombies, make sure nothing regressed.
5. **Build to make sure it ships.** `npm run build` — if this fails, CI will fail too.
6. **Open a PR** against `main`. Describe what you changed and why. Screenshots welcome.

## Good first issues

- **More music tracks.** Drop an `.mp3` into `public/audio/` and add it to the `TRACKS` array in [`scripts/audio.js`](scripts/audio.js). That's it.
- **More NPCs / characters.** Add a voxel character in [`scripts/characters.js`](scripts/characters.js) or [`scripts/skins.js`](scripts/skins.js) and spawn it from [`scripts/entities.js`](scripts/entities.js).
- **Speech bubbles.** Funnier lines in [`scripts/speechBubble.js`](scripts/speechBubble.js) welcome. Keep it PG-13-ish.
- **New blocks.** Add textures to `public/textures/`, wire them up in [`scripts/blocks.js`](scripts/blocks.js).
- **Bug fixes.** Check the issues tab. Anything with `bug` is fair game.

## Code style

- Plain ES modules. No TypeScript. No bundler config changes unless you really need them.
- Two-space indent, single quotes.
- Keep files under ~500 lines when you can — split when they grow.
- No `console.log` in committed code unless it's behind a dev flag.

## What counts as out of scope

- **Rewriting the engine.** Three.js is fine. If you want to swap to Babylon, open an issue first.
- **Adding a backend / multiplayer server.** Cool idea, big scope — discuss in an issue first.
- **Removing the jokes.** The jokes are load-bearing.

## Questions

Open an issue. Tag it `question`. Someone on the team (or another contributor) will pick it up.

## License

By contributing, you agree your changes will be released under the [MIT License](LICENSE) — same as the rest of the project.
