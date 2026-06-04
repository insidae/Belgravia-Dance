# Belgravia Dance

An elegant two-page Astro website for Belgravia Dance, featuring:

- an adult lessons landing page
- a children's lessons landing page
- a simple booking page with a static email-based enquiry flow

## Local development

```bash
nvm use
npm install
npm run dev
```

This project expects Node `22.20.0` (see `.nvmrc`).

## GitHub Pages

This repo is configured to deploy as a GitHub Pages project site from the `main` branch using GitHub Actions.

For a repository named `belgravia-dance`, the published URL will normally be:

```text
https://<your-github-username>.github.io/belgravia-dance/
```

What is already set up:

- [.github/workflows/deploy.yml](/Users/matt/Projects/belgravia-dance/.github/workflows/deploy.yml) builds and deploys on every push to `main`
- [astro.config.mjs](/Users/matt/Projects/belgravia-dance/astro.config.mjs) reads `ASTRO_SITE` and `ASTRO_BASE`
- internal links are base-aware, so they work correctly when served from `/belgravia-dance/`

To publish on GitHub Pages:

1. Push this repo to GitHub.
2. In the repository settings, open `Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` and GitHub will deploy automatically.

If you later move to a custom domain, you can remove the repo base path by changing the deployment environment variables and Astro `site` setting.
