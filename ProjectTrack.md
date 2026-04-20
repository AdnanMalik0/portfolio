# Project Track

This file is the running handoff log for the portfolio project.

Rule:
- Update this file after every meaningful project change.
- Keep the latest status, latest change, and known gaps clear enough for another AI tool to continue from here without re-discovery.

## Current Project State

- Project type: static portfolio website
- Main files: `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/js/project-note-content.js`
- Version control status: Git is initialised locally on `main`, the first commits exist, the GitHub remote is configured, and the branch has now been pushed to GitHub at `https://github.com/AdnanMalik0/portfolio`
- Current site status: portfolio structure is built and populated with real content
- Resume status: `resume.pdf` exists in project root and is linked in the site
- Photo status: `assets/images/photo.jpg` exists and is linked in the site
- Certificates status: local certificate files exist in `assets/certificates/`
- Project screenshots status: `assets/images/projects/` is still empty, so project preview images currently fall back when missing
- Masarif status: GitHub and live demo links are now present in the project card and spotlight flow
- Project spotlight status: project cards now open a centered single-column popup/modal with inline markdown content, external links, and internal popup scrolling
- Note-loading status: popup notes now have an embedded-content fallback via `assets/js/project-note-content.js`, so they do not rely only on browser markdown file loading
- Note quality status: current project-note content has been strengthened against the master resume, GitHub repos, and local source documents so the popup text reflects stronger outcomes, methods, and standout details

## Latest Confirmed Changes Before This File

- `2026-04-20 13:31:38`: `index.html` updated with the project spotlight/details section and current project-card structure
- `2026-04-20 13:32:13`: `assets/css/style.css` updated with styling for the project spotlight and related UI
- `2026-04-20 13:33:26`: `project-details/*.md` GitHub-backed project note files were added/updated
- `2026-04-20 13:34:50`: `assets/js/main.js` updated to power the project spotlight, `Open Details` buttons, and markdown-note linking
- `2026-04-20`: `index.html`, `assets/css/style.css`, and `assets/js/main.js` updated so project cards open the spotlight directly, show inline markdown note content, and surface live-app links such as Masarif

## GitHub Coverage Check For Portfolio Projects

Projects listed in the portfolio that currently do **not** have a GitHub link in `index.html`:

- Image Caption Generation
- Image Classification with Convolutional Neural Networks
- Mushroom Classification: Edible or Poisonous
- IoT EV Fault Detection & Battery Monitoring
- Workplace Reasoning Knowledge Base in Prolog

Projects listed in the portfolio that still **do not have matching local note coverage from the currently available source docs**:
- None at the moment

Projects already covered by local GitHub-derived markdown notes:

- ML for Solubility Prediction of Chemical Compounds
- MLP Classification with PyTorch (MNIST)
- Mobile Phone Price-Range Prediction
- Analysis of NHS Dental Statistics
- Statistical Analysis of "Age at First Kill" of Serial Killers
- Effects of Gender Distribution on School Performance
- Hotel Revenue & Customer Analysis
- Walmart Sales & Customer Analysis
- Masarif - Personal Expense Tracker
- Image Caption Generation
- Image Classification with Convolutional Neural Networks
- Mushroom Classification: Edible or Poisonous
- IoT EV Fault Detection & Battery Monitoring
- Workplace Reasoning Knowledge Base in Prolog

Additional local source-note files created from documents currently present in `Resumes & Certs/Project with no GitHub links/`, but **not mapped to current portfolio cards**:

- Olympic Medal Prediction With Statistical Learning
- Brexit Vote Analysis With Logistic Regression

## Source-Mapping Notes

- `CW 2 AI - David Hogg.html` maps cleanly to `Image Caption Generation`
- `CW 1 AI - David Hogg.html` maps cleanly to `Image Classification with Convolutional Neural Networks`
- `CW 1 Statistical Learning - Seppo.pdf` maps cleanly to `Mushroom Classification: Edible or Poisonous`
- `IOT BASED REALTIME FAULT DETECTION AND TRANSMISSION OF ELECTRIC VEHICLE.pdf` maps cleanly to `IoT EV Fault Detection & Battery Monitoring`
- `KRR - Brandon Benette.pdf` maps cleanly to `Workplace Reasoning Knowledge Base in Prolog`
- `CW 2 Statistical Learning - Seppo.pdf` is an Olympic medal prediction assignment brief and does **not** match any current project card title in `index.html`
- `CW 3 Statistical Learning - Seppo.pdf` is a Brexit logistic-regression assignment brief and does **not** match any current project card title in `index.html`
- All current no-GitHub project cards now have matching local source documents and markdown notes

## Requested Next Steps

- Replace the current inline project-details panel with a real popup/modal that opens from clicking a project card
- Keep the full markdown content inside that popup so visitors can read it without leaving the site
- Make the popup itself scrollable so long markdown notes can be read all the way through
- Keep GitHub and live-app links visible inside the popup wherever they exist, while also preserving links on the cards themselves
- Leave the popup structure flexible so images and richer note content can be added later through code updates

Chunked implementation plan:

- Chunk 1: update `ProjectTrack.md` and lock the requirement to a popup-modal direction
- Chunk 2: convert the current `project-spotlight` markup and CSS into a centered popup with backdrop
- Chunk 3: update `assets/js/main.js` so clicking a card opens and closes the popup correctly
- Chunk 4: keep markdown rendering and external links working inside the popup
- Chunk 5: verify the updated JavaScript and modal hooks

## Latest Change Log

### 2026-04-20

- Created `ProjectTrack.md` as the persistent project handoff log for future AI sessions
- Recorded the current portfolio status based on the live workspace
- Recorded which listed portfolio projects do not currently have GitHub links
- Recorded the original gap that `Masarif` had a GitHub link but no local markdown note at the time this tracker was first created
- Added `project-details/masarif.md` as a local copy of the current GitHub `README.md`
- Added local project-detail notes for `Image Caption Generation`, `IoT EV Fault Detection & Battery Monitoring`, and `Workplace Reasoning Knowledge Base in Prolog`
- Added source-summary notes for `Olympic Medal Prediction With Statistical Learning` and `Brexit Vote Analysis With Logistic Regression` because those documents are present in the source folder even though they do not match current portfolio card titles
- Re-checked the source folder after new files were added
- Added `project-details/cnn-image-classification.md` from `CW 1 AI - David Hogg.html`
- Added `project-details/mushroom-classification.md` from `CW 1 Statistical Learning - Seppo.pdf`
- Updated `project-details/README.md` to reflect the expanded note coverage
- Updated this file to record that all current no-GitHub portfolio cards now have matching local notes
- Extended `assets/js/main.js` so all 14 current portfolio cards now have spotlight metadata and note-file mapping
- Updated the spotlight to fetch and render project markdown notes inline instead of only linking out to the `.md` files
- Enabled card-level click and keyboard opening for the project spotlight
- Enabled the Masarif live demo link in the card and spotlight link flow
- Recorded the next requested UI direction: replace the current inline spotlight with a popup/modal reader for project markdown content
- Converted the project-details UI from an inline panel into a centered popup/modal with backdrop
- Removed the auto-open behaviour so project details only appear when a visitor clicks a card
- Kept markdown notes loading inline inside the popup and kept GitHub/live-app links visible inside it
- Added `assets/js/project-note-content.js` as an embedded copy of the project note files for popup fallback rendering
- Simplified the popup to a cleaner single-column reading layout with no left-side screenshot area
- Updated `assets/js/main.js` to prefer embedded note content first, with direct markdown-file loading only as a fallback path
- Rewrote `project-details/masarif.md` into the same portfolio-note style used for the other projects
- Removed the separate markdown-file link from the popup because the note content is already rendered inside it
- Standardised project-facing wording so `GitHub Repository` is used instead of plain `repository`
- Hardened the popup for long-note reading by restoring focus to the clicked card on close, trapping keyboard focus inside the modal, and resetting modal scroll to the top on open
- Added small scrollbar and scrolling refinements to make long project notes feel cleaner inside the popup
- Added GitHub Pages deployment support files: `.nojekyll`, `404.html`, and `README.md`
- Prepared the project for GitHub Pages publishing as a static site from the `main` branch root
- Initialised Git locally in this folder with the `main` branch so it is ready to connect to a GitHub remote
- Extracted and reviewed the master resume source `Resumes & Certs/Adnan Malik Resume GCC - Master.docx` to capture project details that were stronger than the older markdown notes
- Re-read current portfolio projects against all available sources: GitHub repos where applicable, the master resume, and local PDF/HTML source documents for non-GitHub projects
- Rewrote the current `project-details/*.md` notes so each project popup better highlights scope, methods, outcomes, and standout portfolio value
- Explicitly corrected the solubility project note to include the consensus-of-crowd / top-performing-models consensus approach that had previously been missing from the popup content
- Strengthened the mobile price-range note to include the repo's statistical-testing angle, especially ANOVA, so the popup reflects both exploration and validation
- Rebuilt `assets/js/project-note-content.js` from the latest markdown files so the popup reader now serves the updated stronger note content
- Reworked popup wording so employer-facing evidence is shown instead of repo-style or local file-inventory language
- Renamed the popup section label from `Project Assets` to `Evidence Included`
- Renamed the popup note section label from `Portfolio Note` to `Project Overview`
- Removed internal local-path phrasing from the non-GitHub project notes where that wording was not useful to a portfolio viewer
- Connected the local repository to `https://github.com/AdnanMalik0/portfolio`
- Created the first local Git commit: `Initial portfolio site`
- Removed the GitHub Actions Pages workflow after GitHub rejected workflow-file push permissions for this account context
- Switched the deployment plan to standard GitHub Pages branch publishing from `main` root, which is sufficient for this static site
- Pushed the `main` branch successfully to GitHub

## Deployment Status

- **Live URL**: `https://adnanmalik0.github.io/portfolio`
- **Deployment method**: GitHub Pages branch publishing from `main` root
- **Last confirmed live check**: 2026-04-20 — site loads fully, all sections visible (hero, about, experience, 14 project cards, education, certifications, awards, contact), navigation anchors intact, no broken elements detected

## Next Likely Work Items

- Add project screenshots to `assets/images/projects/`
- Test the popup/modal reading flow in a browser, especially the longer `project-details/masarif.md` note and mobile scrolling
- Add manual images only to selected projects later if needed, now that the popup layout is intentionally text-first

## Recent Changes — 2026-04-20 (latest+)

- **Project card order**: First 3 cards (default visible) are now: ML Solubility → Serial Killers Age Analysis (R) → Masarif

## Recent Changes — 2026-04-20 (latest)

- **About section title**: Changed to "BI & Data Analyst · ML Practitioner & Engineer"
- **Projects heading**: Updated to "A Glimpse of My Work" with copy that communicates these are a curated selection from a broader body of work
- **Projects initial cards**: Reduced from 6 to 3 cards shown before "Show all" button

## Recent Changes — 2026-04-20 (continued)

- **Mobile nav overhaul**: Removed hamburger/dropdown entirely on mobile. Nav links now display as a horizontally scrollable always-visible pill row below the logo — no tap required to reveal navigation
- **Show more on all screens**: Removed mobile-only gate; Projects (>6), Certificates (>6), Awards (>4) now collapse and show a "Show all" button on both desktop and mobile
- **Projects section heading**: Updated to "Explore My Projects" with more inviting copy that prompts visitors to click cards

## Recent Changes — 2026-04-20 (this session)

- **Mobile section collapse**: Projects (>4), Certificates (>4), Awards (>3) now collapse on mobile (≤768px) with a "Show more" button — prevents excessively long scroll on phone
- **Sticky nav on mobile**: Removed the `header { position: relative }` override that was disabling sticky behaviour on mobile; header now stays pinned at top on all screen sizes
- **Scrollspy**: Added `IntersectionObserver`-based scrollspy that highlights the active nav link as the user scrolls through each section (works on both desktop and mobile)

