# CLAUDE.md — products/github-7-day-challenge

Persistent context for this product folder. See `README.md` for how to regenerate.

## What this is

Design-system + generator for the Nas.io product **"The GitHub 7-Day Challenge:
Zero to Portfolio-Ready"**. Outputs: 7 section PDFs, a square logo (SVG + 512/1024
PNG), 1600×900 challenge thumbnails (one titled + 5 title-free alternates, since
the Nas.io listing overlays its own title card), and 5 square 1080×1080 ad
images for paid social. Not part of the website build — this folder is
self-contained and never imported by `src/`.

## PDF versions

- `pdfs/`    — v1, `src/pdf.css`. Gradient-rich original (kept for reference).
- `pdfs-v2/` — **v2, `src/pdf-v2.css`. Ship this one.** Flat performance pass:
  v1 made Chrome `--print-to-pdf` emit ~10 shading dictionaries, ~30 tiling
  patterns and ~30 soft-masked image XObjects per file — the cover alone
  painted 3 full-page radial-gradient patterns with alpha. PDF viewers
  re-composite all of that on every repaint, so scrolling stuttered. v2 flattens
  every gradient/translucent fill to a solid colour → **0 patterns / 0 shadings /
  0 images**, ~½ the bytes, smooth scroll. Brand still reads (orange "C",
  wordmark, orange accents on `#0a0a0a`).
- `sectionPdfHtml(day, css, { flat })` — `flat: true` also swaps the gradient
  check badge SVG for a solid one. Same templates + content for both versions;
  only the stylesheet (and that one flag) differ.

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
- `src/pdf.css` — v1 section-PDF layout. Components: `.cover`, `.body`, `.rhead`,
  `.callout`, `.tasklist`, `.terminal`, `.checkpoint`, `.progress`.
- `src/pdf-v2.css` — v2 layout (ship). Same components/selectors as `pdf.css`
  with every gradient/translucent fill flattened to a solid colour and
  `.cover__glow` dropped. Keep the two structurally parallel.
- `src/content/challenge.mjs` — all Day 1–7 copy, verbatim from the content pass
  (`~/Downloads/github-challenge-nas-io.md`). `challenge` meta + `days[]`.
- `src/templates.mjs` — `markSvg()` (logo), `githubMarkSvg()` (GitHub Invertocat,
  monochrome), `sectionPdfHtml()`, `logoMasterSvg()`, `logoPngHtml()`,
  `thumbnailHtml()` (titled 16:9), `challengeThumbHtml()` + `CHALLENGE_THUMBS`
  (title-free 16:9 alts — Nas.io covers any baked-in headline; these use the
  GitHub mark + a challenge motif instead), `adImageHtml()` + `AD_IMAGES`
  (square 1080×1080 paid-social ads — these DO carry a headline + CTA; colour is
  free-range per variant, `adGrid()` builds the mock contribution grids).
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
- The `challengeThumbHtml` alternates must stay **title-free** (the Nas.io listing
  covers a baked-in headline). Short challenge slogans are fine; do not add back
  "The GitHub 7-Day Challenge: Zero to Portfolio-Ready". Keep `githubMarkSvg`
  monochrome and unwarped per GitHub's logo guidance.
- `adImageHtml` is the opposite case — these are paid ads, so headline + CTA are
  wanted. Keep them square (1080), keep the Code Crumbs wordmark + GitHub mark,
  and keep the `@your-username` profile mock a clear placeholder (never a real
  handle). Deliverables live in `ads/`.
- Deliverables (`pdfs/`, `pdfs-v2/`, `logo/`, `thumbnail/`, `ads/`) are committed.
  `build/` is scratch and git-ignored.
- When editing PDF layout, change `pdf.css` and `pdf-v2.css` together so v1/v2
  stay in sync — but never reintroduce gradients, `background-clip: text`,
  translucent `linear-gradient` fills, `filter: blur`, or full-page radial
  gradients in `pdf-v2.css`: those are exactly what made v1 lag.

## Regenerate

```bash
node src/build.mjs [all|pdfs|pdfs-v2|logo|thumbnail|ads]
```

`thumbnail` renders the titled thumbnail **and** the 5 title-free alternates.
`ads` renders the 5 square 1080×1080 paid-social images into `ads/`.
