# CLAUDE.md

Context for Claude Code when working in this repo.

## What this is

Static landing page for codecrumbs.in. Single-page React app, no routing, no backend, no auth.

## Commands

```bash
npm run dev       # dev server on :5173
npm run build     # production build → dist/
npm run preview   # preview production build
```

## Tech

- **Vite** build tool, `vite.config.js` at root
- **React 19** — function components only, no class components
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — write utilities directly, no config file needed
- No state management library — this page has no dynamic state beyond what HTML/CSS handles

## Styling rules

- Dark background `#0a0a0a`, white text
- Brand palette: orange `#F97316`, pink `#EC4899`, purple `#8B5CF6`, yellow `#FCD34D`
- Use Tailwind utilities; avoid inline styles except for dynamic accent colors driven by data
- No `tailwind.config.js` — v4 reads CSS directly

## File layout

- `src/components/` — one file per section (Nav, Hero, About, Projects, Footer)
- `public/assets/` — logo PNGs/SVGs served statically; reference as `/assets/filename`
- `index.html` — Vite entry point

## What to avoid

- Don't add a router — this is intentionally single-page
- Don't add analytics, tracking scripts, or cookies — privacy is a stated feature
- Don't add a backend or API calls
- Don't introduce a CSS-in-JS library
