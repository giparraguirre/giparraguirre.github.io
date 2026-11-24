# Gianmarco Iparraguirre — Portfolio

Live site: https://giparraguirre.github.io

A pixel-art, terminal-themed personal portfolio built with Vite, React, and TypeScript. It showcases my software engineering projects, skills, and contact links.

## Built with

- React + TypeScript
- Vite
- Custom pixel-art SVG icons and hero scene (no image assets)
- GitHub Actions + GitHub Pages for automatic deployment

## Run locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Project structure

- `src/data.ts`: site content (projects, skills, links)
- `src/components/`: UI components, including the pixel-art hero scene
- `src/styles.css`: colors and font tokens

## Deployment

Every push to `main` runs the workflow in `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.