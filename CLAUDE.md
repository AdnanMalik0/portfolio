# CLAUDE.md - Portfolio Project

## Start of every session

Read `ProjectTrack.md` before doing anything else. It is the running handoff log for this project and contains:

- Current project state (files, deployment, content status)
- Latest confirmed changes with timestamps
- Known gaps and missing assets
- Next likely work items

Treat `ProjectTrack.md` the way you would treat a senior engineer's handoff note - it is the authoritative source of truth for what has been done and what still needs doing.

## After meaningful changes

Update `ProjectTrack.md` at the end of every session that changes the site. A meaningful change is anything that affects the deployed site, content, structure, or behaviour. Append a dated entry under `## Latest Change Log` and keep `## Current Project State` and `## Next Likely Work Items` accurate.

## Deployment rule

Never run `git push` automatically. Commit locally and wait for the user to approve and push manually.

## Stack

- Static site: `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/js/project-note-content.js`
- Project popup notes: `project-details/*.md` (source) and embedded in `project-note-content.js` (runtime)
- Deployed via GitHub Pages from `main` branch root: `https://adnanmalik0.github.io/portfolio`
- Git remote: `git@github.com:AdnanMalik0/portfolio.git`

## Current working context

- The hero section no longer has an "Open to Opportunities" label/badge — it was removed on 2026-06-22 along with its CSS (`.hero-label`, `.hero-label-dot`, `@keyframes pulse`)
- Certificates were expanded on 2026-04-22 with new local files in `assets/certificates/`
- The site now has a dedicated social preview image at `assets/images/og-preview.png`
- The certificates section now uses filter chips in `index.html`
- The top navigation now includes a `Recognition` item that links to the awards/recognition section via `#awards`
- Three recognition cards now include local evidence links: `Certificate of Commendation`, `Certificate of Merit — Best Project`, and `Certificate of Appreciation`
- Filter order is: `All`, `Recognition`, `Machine Learning & AI`, `BI & Visualisation`, `Data & Tools`
- Default certificate landing state is intentionally curated: when `All` is selected and collapsed, show these three first:
  - `Certificate of Commendation - MSc Poster Session`
  - `Data Scientist with Python Track`
  - `Applied Machine Learning: Foundations`
- When the visitor expands `Show all certificates`, the full list should follow the agreed ranking logic in `assets/js/main.js`
- Certificate ordering is currently enforced in JavaScript, not only by HTML order. Check `certOrderRank` and `certFeaturedRank` before changing certificate cards.

## Certificate link rules

- Prefer issuer verification links only when they are confirmed working
- As of 2026-04-22:
  - `Claude 101` uses a working Skilljar verification link
  - The old LinkedIn Learning verification URLs for `Advanced SQL for Data Scientists` and `Applied Machine Learning: Foundations` were failing and were replaced with local PDFs
  - The Stanford SQL verification hostname did not resolve during the live check and was replaced with the local PDF
- If a verification link breaks again, fall back to the local PDF in `assets/certificates/`

## Share preview rules

- Do not rely on the favicon for WhatsApp or social link previews
- The favicon and the share image are intentionally different assets with different purposes:
  - browser tab icon: inline favicon in `index.html`
  - social preview card: `assets/images/og-preview.png`
- `og:url`, `og:image`, `og:image:*`, canonical URL, and `twitter:image` should always use absolute GitHub Pages URLs
- If link previews break again, check the deployed HTML first and confirm it is not still serving a relative `og:image` path

## Known follow-up items

- Add `Encore Award` certificate file and link it into the site when available
- Add `Reward of Excellence` certificate file and link it into the site when available
- If certificate ordering changes, update both the visible filter order in `index.html` and the ranking logic in `assets/js/main.js`
