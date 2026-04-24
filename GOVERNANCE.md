# MarkCraft Governance & Repo Protection

How the repo is locked down and what contributors need to know. **Read this before your first PR.**

## Who can do what

| Action                              | Anyone (fork) | Contributor (PR) | Maintainer | Owner |
| ----------------------------------- | :-----------: | :--------------: | :--------: | :---: |
| Read code                           | ✅            | ✅               | ✅         | ✅    |
| Fork the repo                       | ✅            | ✅               | ✅         | ✅    |
| Open an issue                       | ✅            | ✅               | ✅         | ✅    |
| Open a PR from a fork               | ✅            | ✅               | ✅         | ✅    |
| Comment on issues / PRs             | ✅            | ✅               | ✅         | ✅    |
| Push to a feature branch            | ❌            | ❌ (fork only)   | ✅         | ✅    |
| Push directly to `main`             | ❌            | ❌               | ❌         | ❌*   |
| Approve PRs                         | ❌            | ❌               | ✅         | ✅    |
| Merge PRs to `main`                 | ❌            | ❌               | ✅         | ✅    |
| Force-push `main`                   | ❌            | ❌               | ❌         | ❌    |
| Delete `main` / `gh-pages`          | ❌            | ❌               | ❌         | ❌    |
| Release (tag a version)             | ❌            | ❌               | ✅         | ✅    |
| Change repo settings                | ❌            | ❌               | ❌         | ✅    |

_\* The owner has admin override, but the default flow is "all changes go through a PR." See "branch protection" below for exactly what the rules enforce._

## Branch protection

### `main` branch

**The live rules (enforced by GitHub):**

- 🔒 **No force-pushes.** History is append-only. No rewriting, no losing commits.
- 🔒 **No deletion.** The branch can't be deleted by anyone.
- 🔒 **Linear history required.** Merge commits are not allowed — only rebase or squash merges. Keeps the log readable.
- 🔒 **Pull requests required.** All changes must land via a PR, even maintainer changes. No bypass for direct pushes from the CLI.
- 🔒 **Code owner review.** Anything that touches a file in [CODEOWNERS](.github/CODEOWNERS) requires that owner's approval. The owner gets a review request automatically.
- 🔒 **Conversation resolution required.** Every PR review comment must be resolved before merge. Nothing gets "quietly merged over objections."
- 🔒 **Stale approvals dismissed.** If a PR is approved, then a new commit is pushed, the approval is dismissed — reviewers re-check the latest code.

### `gh-pages` branch

This branch is the live deployment. It's **overwritten on every deploy** by `npm run deploy`, so force-pushes are allowed there (intentionally). What's locked:

- 🔒 **No deletion.** The branch can't be removed.
- ⚠️ Force-pushes allowed (deploy script needs it). If this were a concern, we'd generate the branch with a workflow and lock it fully.

## Security features enabled

Repo-wide protections shipped by GitHub, now turned on:

- 🛡️ **Secret scanning** — scans every commit and PR for leaked credentials (API keys, tokens, passwords). Any match is flagged.
- 🛡️ **Secret scanning push protection** — if you try to push a commit containing a secret, GitHub **blocks the push**. You can't accidentally leak a key.
- 🛡️ **Dependabot alerts** — notifies maintainers of CVEs in our dependencies (three.js, vite).
- 🛡️ **Dependabot security updates** — auto-opens PRs to upgrade dependencies with known vulnerabilities.
- 🛡️ **Weekly dependency PRs** ([`.github/dependabot.yml`](.github/dependabot.yml)) — even without a CVE, dependencies get weekly update PRs so we don't fall behind.
- 🛡️ **Private vulnerability reporting** — security researchers can report issues privately via [this form](https://github.com/evan555555555555555/markcraft-clone/security/advisories/new) instead of opening a public issue. See [SECURITY.md](SECURITY.md).
- 🛡️ **GitHub Actions GITHUB_TOKEN is read-only by default** — if we ever add CI workflows, they can't modify the repo without an explicit permissions grant. Principle of least privilege.
- 🛡️ **Actions can't approve PRs** — prevents a compromised workflow from self-approving a malicious PR.

## The threat model

What this setup protects against:

- ✅ **A compromised collaborator account** — can't force-push over good code, can't delete main, can't merge without a PR.
- ✅ **Accidental mistakes** — no "oops I force-pushed main" recovery stories. GitHub rejects the push.
- ✅ **Leaked secrets** — push protection blocks a key from leaving your machine.
- ✅ **Unreviewed code hitting main** — impossible. PRs are required.
- ✅ **Vulnerable dependencies** — flagged and auto-patched.
- ✅ **Malicious PR from a stranger** — they can open a PR, but nothing merges without a maintainer click.

What it does **not** protect against:

- ❌ A maintainer who approves bad code. Human judgment is still the last line of defense.
- ❌ A compromised maintainer-owner account with 2FA disabled. **Keep 2FA on your GitHub account.**
- ❌ Malicious code in a dependency we already trust. Dependabot helps, but doesn't replace reading changelogs.
- ❌ A fork that pretends to be the official project. Trademark law, not branch protection, handles that.

## If something goes wrong

- **A bad commit landed on `main`.** Don't panic, don't force-push. Open a PR that reverts it. Linear history + protected main means the original bad commit stays in the log but the code is fixed.
- **A secret was accidentally committed.** Rotate the secret immediately (the fix is on your side, not in the repo). Open a PR to remove the secret from the current file. The commit history will still contain it — GitHub offers [secret revocation tools](https://docs.github.com/en/code-security/secret-scanning) and in extreme cases you can [contact support for history rewrite](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).
- **A maintainer account is compromised.** The owner revokes their access in Settings → Collaborators → remove. Enable 2FA immediately on the compromised account.
- **The live site shows something unexpected.** `gh-pages` branch — check `git log` on that branch. Last good commit can be redeployed via `npm run deploy` from any checkout.

## How to become a maintainer

Maintainers can merge PRs. Right now it's just the owner. Path to maintainer:

1. Ship several useful PRs (fixes, features, docs — quality over quantity)
2. Demonstrate good taste in reviews on other people's PRs
3. Get invited by the owner

There's no formal "apply to be a maintainer" process. If the project grows enough to need one, we'll add it here.

## Questions

Open a [Discussion](https://github.com/evan555555555555555/markcraft-clone/discussions) or DM the owner.
