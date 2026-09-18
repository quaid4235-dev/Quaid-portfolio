# Quaid Khan — portfolio

A lightweight, accessible static portfolio for Quaid Khan, a Computer Science graduate and software developer focused on Python, Flask, web systems, SQL, and applied computer vision.

## Stack

- Semantic HTML
- CSS with custom properties, Grid, Flexbox, and responsive media queries
- Small, dependency-free JavaScript for the mobile menu and reveal transitions
- No build step or framework required

## Project structure

- `index.html` — portfolio content and semantic structure
- `css/style.css` — design system and responsive styles
- `js/script.js` — accessible menu and progressive enhancement
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `vercel.json` — deployment and metadata files

## Run locally

Open `index.html` directly in a browser, or use any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Vercel

Import this repository in Vercel. Leave the framework preset as **Other**, use the repository root as the project root, and leave the build command empty. Vercel serves `index.html` as a static site.

## Updating the portfolio

- Replace the profile image URL in `index.html` with a local optimized image in `assets/images/` when one is available.
- Add a CV at `assets/cv.pdf` and add a download link to the hero if the document is ready to publish.
- Update the text, links, and project details directly in `index.html`.
- Update the canonical URL in `index.html`, `robots.txt`, and `sitemap.xml` if the deployment domain changes.

No secrets or API keys are required.
