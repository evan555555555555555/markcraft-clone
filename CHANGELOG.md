# Changelog

All notable changes to MarkCraft are documented here. This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html) loosely and [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) formatting.

## [Unreleased]

## [1.0.0] — 2026-04-24

### Added
- Harvard Yard campus with VERITAS shield, Columbia Law posters, LIS3353 signs
- Nassim Taleb dragon boss
- Adam Smith zombies that respawn as Karl Marx
- Unc Marks (player character), Dean, 2 Live Crew, N.W.A., Linus Torvalds, FSU Penguin NPCs
- Voxel character system with swappable skins ([`scripts/characters.js`](scripts/characters.js), [`scripts/skins.js`](scripts/skins.js))
- Speech bubble system ([`scripts/speechBubble.js`](scripts/speechBubble.js))
- In-game music player with track list ([`scripts/audio.js`](scripts/audio.js), [`scripts/musicPlayer.js`](scripts/musicPlayer.js)) — ships with "Straight Outta Compton"
- Loading screen with WebGL detection and lore intro ([`scripts/loadingScreen.js`](scripts/loadingScreen.js))
- Dev panel toggle (`U` key) for tweaking physics, biomes, draw distance
- Fireworks, snow particles, neon stages
- `npm run deploy` — one-command redeploy to the `gh-pages` branch
- GitHub Pages serving the live site from the `gh-pages` branch
- Docker support (`Dockerfile`, `docker-compose.yml`)
- Full contributor docs (`CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`)
- Issue and PR templates
- Dependabot for weekly dependency updates

### Based on
- [dgreenheck/minecraft-threejs-clone](https://github.com/dgreenheck/minecraft-threejs-clone) — voxel engine, chunking, physics, biomes, save/load
