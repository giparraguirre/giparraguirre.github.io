# Pixel Terminal Portfolio

A Vite + React + TypeScript portfolio with a pixel-art server-room hero.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Make it yours

- **Content:** edit `src/data.ts` (name, school, projects, skills, links). Anything in `[BRACKETS]` is a placeholder.
- **Colors and fonts:** the tokens at the top of `src/styles.css`.
- **Hero scene:** `src/components/ServerRoom.tsx` (a 160×80 SVG grid; one unit = one pixel).

## Deploy

`dist/` is static and uses relative paths, so it works on GitHub Pages, Netlify or Vercel as is.
