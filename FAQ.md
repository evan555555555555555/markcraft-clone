# MarkCraft FAQ

## Is this really named after a professor?

Yes. Professor Marks. This is a rescue mission. If you beat the Taleb dragon, he gets unblocked on Twitter. That's the whole story.

## Do I need to install anything to play?

No. Click **[▶ Play it now](https://evan555555555555555.github.io/markcraft-clone/)** — it runs entirely in your browser. Requires a modern browser with WebGL (Chrome, Firefox, Safari, Edge — anything from the last ~5 years).

## It's stuck on "click to look around" / nothing moves

Click once on the game window. Browsers require a user gesture to grab the mouse for pointer lock. If pointer lock is blocked in your browser (some corporate setups, mobile), press `F10` for spectator / orbit camera mode instead.

## Why can I hear N.W.A. but not save a cursor position?

Short answer: there's no login system. Long answer: save (F1) and load (F2) write your world to the browser's `localStorage`, which is per-domain and survives browser restarts but not a cleared cache. There's no server.

## Can I add my own music?

Yes — it's one line of code. Drop an `.mp3` into `public/audio/` and add it to the `TRACKS` array in [`scripts/audio.js`](scripts/audio.js). The HUD picks it up automatically.

## Can I add a new NPC / block / campus?

Yes. See [ARCHITECTURE.md](ARCHITECTURE.md) for the "where to add things" table — it takes you straight to the file you need to edit.

## Why does the game say "FSU CAMPUS" when the README says Harvard?

Because it's both. The world has Harvard Yard (with the VERITAS shield) *and* the FSU campus (with the dean yelling "NO RUNNING IN THE QUAD"). Your spawn point just happens to be near FSU. Walk east, find Harvard. Or fly around in spectator mode (`F10`).

## Is this really open source? Can I fork it?

Yes. MIT licensed. Fork it, modify it, ship your own weird academic-rescue-mission voxel game. A link back is nice but not required.

## How do I contribute?

Read [CONTRIBUTING.md](CONTRIBUTING.md). Short version: fork, branch, `npm start` to test, `npm run build` to make sure CI won't fail, open a PR. First PR is usually adding a music track or a new speech bubble — easy wins.

## Is multiplayer coming?

Not right now. The pitch mentioned it, but it's not in this repo. If you want to build it, open an issue first — that's a big scope change that needs discussion before a PR lands.

## Why Three.js and not Babylon / Unity / Godot?

This started as a fork of [dgreenheck's Three.js Minecraft clone](https://github.com/dgreenheck/minecraft-threejs-clone), which is a tutorial project. Three.js keeps the code short and readable, which is half the point. Ports to other engines are welcome as *separate* projects.

## Can I run this on my phone?

It loads on mobile, but pointer lock doesn't work there, so you get spectator mode only. A proper touch-control scheme would be a great contribution — [open a feature request](https://github.com/evan555555555555555/markcraft-clone/issues/new?template=feature_request.yml).

## Who wrote this?

Evan, Mehdi, and Amadou, with heavy assistance from Claude Code. The base voxel engine is from [dgreenheck](https://github.com/dgreenheck). See [CHANGELOG.md](CHANGELOG.md) for the full credit list.

## My question isn't here

[Start a discussion](https://github.com/evan555555555555555/markcraft-clone/discussions) or open a [question issue](https://github.com/evan555555555555555/markcraft-clone/issues/new). Someone will get to it.
