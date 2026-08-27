# CLAUDE.md — products/github-7-day-challenge

Persistent context for this product folder. See `README.md` for how to regenerate.

## What this is

Design-system + generator for the Nas.io product **"The GitHub 7-Day Challenge:
Zero to Portfolio-Ready"**. Outputs: 7 section PDFs, a square logo (SVG + 512/1024
PNG), and a 1600×900 challenge thumbnail. Not part of the website build — this
folder is self-contained and never imported by `src/`.

## Brand tokens (source of truth = the codecrumbs.in site, mirrored in `src/theme.css`)

- Background `#0a0a0a` · text `#f5f5f5`
- Orange `#F97316` · Pink `#EC4899` · Purple `#8B5CF6` · Yellow `#FCD34D`
  (from `../../src/index.css` `@layer base :root`)
- Signature gradient: `#F97316 → #EC4899 → #8B5CF6`, ≈120° (from `../../src/components/Hero.jsx`)
- Ambient glow: soft orange/purple/pink radial gradients (Hero blur blobs, rebuilt
  without `filter: blur` because it rasterises badly in print-to-pdf)
- Text font: **Inter** (site declares it, doesn't ship it)
- Code font: **JetBrains Mono** (added here for command blocks)
- Fonts self-hosted at `src/assets/fonts/*.woff2` (latin variable slices)
- Logo: rounded `#0a0a0a` square + `#F97316` open-ring "C" — vector-faithful to
  `../../public/favicon.svg`; brand-gradient hairline edge added

## File roles

- `src/theme.css` — tokens only. Shared by PDFs, logo, thumbnail.
- `src/fonts.css` — `@font-face`; `build.mjs` rewrites `url()` → absolute `file://`.
- `src/pdf.css` — section-PDF layout. Components: `.cover`, `.body`, `.rhead`,
  `.callout`, `.tasklist`, `.terminal`, `.checkpoint`, `.progress`.
- `src/content/challenge.mjs` — all Day 1–7 copy, verbatim from the content pass
  (`~/Downloads/github-challenge-nas-io.md`). `challenge` meta + `days[]`.
- `src/templates.mjs` — `markSvg()` (logo), `sectionPdfHtml()`, `logoMasterSvg()`,
  `logoPngHtml()`, `thumbnailHtml()`.
- `src/build.mjs` — orchestrator. Renders via **headless Google Chrome**
  (`--print-to-pdf` / `--screenshot`). No npm deps. `CHROME_BIN` overrides path.

## Structural rules

- Each section PDF is **exactly 2 pages**: cover + one body page. Keep per-day
  content within one body page — if `build.mjs` reports a page count ≠ 2, tighten
  copy or spacing rather than letting it reflow.
- `.cover__glow` / `.thumb__glow` MUST stay `position: absolute; z-index: 0` and be
  declared AFTER the `.cover > * { position: relative }` rule (equal specificity —
  source order decides), or the glow layer collapses into flow.
- `commands` in `challenge.mjs` only render the canonical command for a step the
  prose already describes. Do not add lessons/concepts not in the content pass.
- Deliverables (`pdfs/`, `logo/`, `thumbnail/`) are committed. `build/` is scratch
  and git-ignored.

## Regenerate

```bash
node src/build.mjs [all|pdfs|logo|thumbnail]
```
