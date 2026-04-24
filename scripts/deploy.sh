#!/usr/bin/env bash
# Redeploy MarkCraft to GitHub Pages (gh-pages branch).
# Requires: git, npm, push access to the myrepo remote.
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

REMOTE="${MARKCRAFT_REMOTE:-myrepo}"
if ! git remote get-url "$REMOTE" >/dev/null 2>&1; then
  REMOTE=origin
fi

echo "→ Building production bundle..."
npm run build

echo "→ Publishing dist/ to $REMOTE gh-pages..."
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

cp -R dist/. "$TMP/"
touch "$TMP/.nojekyll"

REMOTE_URL="$(git remote get-url "$REMOTE")"
cd "$TMP"
git init -b gh-pages -q
git add -A
git -c user.email="deploy@markcraft.local" -c user.name="MarkCraft Deploy" commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git remote add target "$REMOTE_URL"
git push -f target gh-pages

echo "✓ Deployed. Site: https://evan555555555555555.github.io/markcraft-clone/"
