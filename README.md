# Adnan Malik Portfolio

Static portfolio website prepared for GitHub Pages deployment.

## Stack

- HTML
- CSS
- JavaScript
- Local markdown-backed project notes rendered inside the project popup

## Local Structure

- `index.html`: main site entry
- `assets/css/style.css`: styling
- `assets/js/main.js`: site interactions and project popup logic
- `assets/js/project-note-content.js`: embedded fallback copy of project notes
- `project-details/`: markdown source notes for project popups

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Push this folder to the repository on the `main` branch.
3. In the GitHub repository, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Source: GitHub Actions`.
5. Push to `main` and let the `Deploy Portfolio to GitHub Pages` workflow publish the site.

The workflow file is:

- `.github/workflows/deploy-pages.yml`

## Before Sharing with Employers

- Confirm the final GitHub Pages URL is correct.
- If desired, add a custom domain later.
- Add any missing project screenshots in `assets/images/projects/`.
- Optionally update `index.html` meta tags such as `og:url`, `canonical`, and preview image URLs once the final public URL is known.

## Notes

- `.nojekyll` is included so GitHub Pages serves the site exactly as a static project.
- `404.html` redirects visitors back to `index.html`.
