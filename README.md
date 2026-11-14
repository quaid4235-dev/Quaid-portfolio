# Quaid Khan — Web Developer Portfolio

A lightweight, responsive, multi-page portfolio for Quaid Khan, a Web Developer focused on frontend web development and practical web applications.

## Pages

- `index.html` — Home and featured work
- `about.html` — About Quaid and development approach
- `services.html` — Six website development services
- `portfolio.html` — Projects and illustrative CSS previews
- `contact.html` — Contact options and validated email-preparation form

Every page uses the shared `css/style.css` and `js/script.js`. Navigation and footer links point to the five standalone HTML documents. The project is framework-free and has no package dependencies or build step.

## Run locally

Open `index.html` directly, or serve the project root using any static server, for example:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Contact form behavior

The form uses browser validation and opens a prefilled `mailto:` message to `quaid4235@gmail.com`. This static site does not send or store form submissions; visitors must send the prepared email from their own email application.

## Images and project previews

The existing personal portrait remains in the project root and is used only as Quaid's profile image. Project preview panels are CSS illustrations rather than representations of actual application screenshots. See `assets/IMAGE_CREDITS.md` for asset notes and the supplied stock-image references that were reviewed but not used.

## Deployment

This is a static site and can be deployed from the repository root on Vercel or another static host without a build command. No `vercel.json`, package manifest, framework, or dependency lockfile was present in the inspected repository root; no deployment configuration was removed or changed. Update the canonical links in HTML and the sitemap if the production domain changes.
