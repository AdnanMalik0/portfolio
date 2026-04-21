# CLAUDE.md — Portfolio Project

## Start of every session

Read `ProjectTrack.md` before doing anything else. It is the running handoff log for this project and contains:

- Current project state (files, deployment, content status)
- Latest confirmed changes with timestamps
- Known gaps and missing assets
- Next likely work items

Treat `ProjectTrack.md` the way you would treat a senior engineer's handoff note — it is the authoritative source of truth for what has been done and what still needs doing.

## After meaningful changes

Update `ProjectTrack.md` at the end of every session that changes the site. A meaningful change is anything that affects the deployed site, content, structure, or behaviour. Append a dated entry under `## Latest Change Log` and keep `## Current Project State` and `## Next Likely Work Items` accurate.

## Deployment rule

Never run `git push` automatically. Commit locally and wait for the user to approve and push manually.

## Stack

- Static site: `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/js/project-note-content.js`
- Project popup notes: `project-details/*.md` (source) and embedded in `project-note-content.js` (runtime)
- Deployed via GitHub Pages from `main` branch root: `https://adnanmalik0.github.io/portfolio`
- Git remote: `git@github.com:AdnanMalik0/portfolio.git`
