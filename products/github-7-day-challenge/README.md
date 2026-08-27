# The GitHub 7-Day Challenge — product assets

Everything needed to run **"The GitHub 7-Day Challenge: Zero to Portfolio-Ready"**
on Nas.io as a Code Crumbs product: 7 redesigned section PDFs, a square logo for
the Nas.io profile/product image, and a challenge listing thumbnail.

All three are generated from **one shared design system** so the PDFs, the logo,
and the thumbnail read as a single brand.

```
products/github-7-day-challenge/
├── pdfs/            7 section PDFs — v1, gradient-rich (reference only)
├── pdfs-v2/         7 section PDFs — v2, flat & fast   ← SHIP THIS
├── logo/            codecrumbs-logo.svg + -512.png + -1024.png  ← deliverable
├── thumbnail/       github-7-day-challenge-thumbnail.png (1600×900)  ← deliverable
└── src/             design system + generator (edit here, then rebuild)
    ├── theme.css        brand tokens (colours, gradient, glow, fonts)
    ├── fonts.css        @font-face for the self-hosted woff2 files
    ├── pdf.css          section-PDF layout — v1 (cover + body components)
    ├── pdf-v2.css       section-PDF layout — v2 (same components, flat fills)
    ├── content/
    │   └── challenge.mjs  all Day 1–7 copy (verbatim from the content pass)
    ├── templates.mjs    HTML/SVG templates (logo mark, PDF, thumbnail)
    ├── build.mjs        the generator (headless Chrome — no npm install)
    └── assets/fonts/    Inter + JetBrains Mono woff2 (latin, variable)
```

## Brand tokens (from the codecrumbs.in repo, not the old PDF cover)

Extracted in "Step 0" from the live site source, so the design is grounded in the
real brand:

| Token | Value | Source in repo |
|---|---|---|
| Background | `#0a0a0a` | `src/index.css` → `body` |
| Text | `#f5f5f5` | `src/index.css` → `body` |
| Orange | `#F97316` | `src/index.css` → `--color-orange` |
| Pink | `#EC4899` | `src/index.css` → `--color-pink` |
| Purple | `#8B5CF6` | `src/index.css` → `--color-purple` |
| Yellow | `#FCD34D` | `src/index.css` → `--color-yellow` |
| Signature gradient | `#F97316 → #EC4899 → #8B5CF6` (≈120°) | `src/components/Hero.jsx` headline |
| Ambient glow | orange / purple / pink blur blobs | `src/components/Hero.jsx` |
| Font (text) | **Inter**, `system-ui` fallback | `src/index.css` → `font-family` |
| Font (code) | **JetBrains Mono** (added for command blocks) | — |
| Logo mark | rounded square `#0a0a0a` + `#F97316` "C" | `public/favicon.svg` |
| Wordmark | `Code` in orange + `Crumbs` in white, bold | `src/components/Nav.jsx` |

The site declares Inter but does not ship it, so `src/assets/fonts/` carries the
`latin` variable woff2 slices (Inter + JetBrains Mono) for offline, reproducible
rendering. `build.mjs` rewrites the `@font-face` URLs to absolute `file://` paths.

## PDF v1 vs v2 (performance)

v1 (`pdf.css` → `pdfs/`) leaned on CSS gradients and translucency everywhere:
the signature 3-colour gradient on every rule / bar / bullet / progress segment,
`background-clip: text` on the cover title, translucent `linear-gradient` fills on
the callout and checkpoint cards, and a 3-layer full-page radial-gradient ambient
glow on every cover. Chrome's `--print-to-pdf` can't express those as plain
vector fills, so each became a **shading pattern** or a **soft-masked image
XObject** — ~10 shadings, ~30 patterns, ~30 images and ~34 transparency groups
*per 2-page file*. PDF viewers re-composite all of that on every repaint, so
**scrolling and zooming stuttered**, and files ran ~490–530 KB.

v2 (`pdf-v2.css` → `pdfs-v2/`) is a flat pass over the *same* layout and content:
every gradient/translucent fill → a solid brand colour, the glow layer dropped,
the gradient check-badge → solid. Result per file: **0 shadings, 0 patterns,
0 images**, ~230–270 KB, and smooth scrolling. It still reads as the same brand —
orange "C", CodeCrumbs wordmark, orange accents on `#0a0a0a`. **Ship `pdfs-v2/`.**

## Design system

**PDF (`pdf.css` / `pdf-v2.css`)** — every section PDF is exactly two A4 pages:

1. **Cover** — full-bleed `#0a0a0a`, ambient glow, logo mark + wordmark, eyebrow
   pill, `Day X of 7`, gradient-clipped title, the day's "why this matters" lede,
   gradient rule, and a 7-segment day-progress rail.
2. **Body** — reusable content components:
   - running **header** (mark + wordmark · `Day X / 7 · section`) with a gradient accent rule
   - **section heading** with a gradient bar accent
   - **callout box** — orange left border + spark icon, holds the "why this matters" framing
   - **task list** — "what you'll do", gradient-dash bullets, inline `code` chips
   - **terminal block** — JetBrains Mono, traffic-light bar, orange `$` prompt, purple `git`, dimmed `# comments`
   - **checkpoint card** — gradient check badge, the day's checkpoint, a tick box, and (Day 4 / Day 6) the "unlocked today" bonus note
   - running **footer** + day-progress rail

**Logo (`templates.mjs` → `markSvg`)** — a vector-faithful version of
`public/favicon.svg`: rounded `#0a0a0a` square, brand-gradient hairline edge, bold
`#F97316` open-ring "C". Exported transparent so it drops onto any Nas.io surface.

**Thumbnail (`templates.mjs` → `thumbnailHtml`)** — 16:9, same glow + gradient +
wordmark + progress rail as the covers, with the challenge title and full tagline
baked in and a large translucent "C" watermark.

## Regenerate

Requires **Node** and **Google Chrome** (auto-detected; override with `CHROME_BIN`).
No `npm install` — `build.mjs` uses only Node built-ins + headless Chrome.

```bash
cd products/github-7-day-challenge
node src/build.mjs            # everything (v1 + v2 PDFs, logo, thumbnail)
node src/build.mjs pdfs       # just the 7 section PDFs — v1 (pdf.css → pdfs/)
node src/build.mjs pdfs-v2    # just the 7 section PDFs — v2 (pdf-v2.css → pdfs-v2/)
node src/build.mjs logo       # just codecrumbs-logo .svg / -512 / -1024
node src/build.mjs thumbnail  # just the thumbnail PNG
```

### Change a section's content
Edit `src/content/challenge.mjs` (one object per day: `why`, `todo`, `commands`,
`checkpoint`, optional `unlock`), then `node src/build.mjs pdfs-v2` (and `pdfs` if
you still maintain v1).

### Change the look for all deliverables
Edit `src/theme.css` (tokens) or the PDF layout (`src/pdf-v2.css`, and
`src/pdf.css` to keep v1 in sync) and rebuild. The logo and thumbnail share
`theme.css`, so a token change flows everywhere. Keep `pdf-v2.css` free of
gradients / `background-clip: text` / translucent `linear-gradient` fills /
`filter: blur` — that styling is what made the v1 PDFs lag on scroll.

### Add an 8th section / reuse for a new product
Append to `days` in `challenge.mjs` (or copy the folder, swap `challenge.mjs`).
The template system is content-agnostic.

## Notes

- PDFs are designed for **screen** (dark, full-bleed). They print, but use ink.
- `commands` blocks show the canonical one-line Git command for a step the content
  pass already describes in words — no new lesson material is introduced.
- Fonts: Inter is OFL, JetBrains Mono is OFL. Safe to redistribute in this repo.
