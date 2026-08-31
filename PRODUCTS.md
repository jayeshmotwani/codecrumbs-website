# PRODUCTS.md — building a Code Crumbs brand product

Guide for Claude (and future me) when asked to build a **product** under
`products/` — a Nas.io / Nas.com offer with its own brand deliverables (PDFs,
thumbnails, ad images, landing page, scripts). This file is the **only
git-tracked artifact about products**: every `products/<slug>/` folder is
`.gitignore`d (`products/**`) and lives on disk only, regenerated from its own
`src/` generator.

## Reference builds on disk (not in git)

| Folder | Nas.io type | Deliverables |
|---|---|---|
| `products/github-7-day-challenge/` | **Challenge** | 7 section PDFs (v1 gradient + v2 flat), logo, titled + 5 title-free thumbnails, 5 square ads, checkpoint video scripts, full generator |
| `products/code-crumbs-debug-sprint/` | **1:1 Session** | `PRODUCT.md` copy pack, logo, titled + 5 title-free thumbnails, 5 square ads, generator. **No PDFs, no scripts** — a 1:1 Session is just a Nas.io Description + registration questions + emails |

Both share one design system: brand tokens + logo come from
`github-7-day-challenge/src/theme.css` (a mirror of the codecrumbs.in site).
Reuse it verbatim in any new product.

---

## STEP 1 — Run the intake. Do not assume.

Before writing any generator or copy, ask me these and wait for answers:

1. **Nas.io product type?** It changes everything downstream:
   - **1:1 Session** — a booked call. Needs: Description (≤5000 chars),
     registration questions, confirmation + reminder email copy, single price,
     duration. No multi-page PDF.
   - **Challenge** — multi-day habit program. Needs: one section PDF per day,
     checkpoint copy, optional video scripts, a titled thumbnail + title-free
     alternates (Nas.io overlays its own title card on the listing).
   - **Course** — lessons/modules. Needs: module outline, per-lesson PDF or
     slides, a cover.
   - **Digital Product** — a downloadable (template pack, checklist, ebook).
     Needs: the artifact itself + a product cover.
   - **Event** — one-off live session. Needs: event description, registration
     questions, reminder copy.
   - **Coaching / cohort** or **Community / subscription** — recurring. Needs:
     programme outline, onboarding copy.
2. **PDF?** One **minimalist** PDF only, *no PDF at all*, or the full
   gradient-rich v1 + flat v2 split (only the Challenge product carries that —
   don't repeat it elsewhere unless asked).
3. **A landing page instead of / as well as** the Nas.io page? If yes, it's a
   standalone static page, not part of the Vite site build.
4. **Scripts?** Outreach posts, video scripts, a call run-of-show — yes/no.
5. **Images: now or later?** Generate thumbnails + ad images immediately, or
   wait until the product copy is finalised and only build images at the end
   (default: wait — copy churn wastes image regens).
6. **Ad set** — how many variants, which audiences / emotional angles.
7. **Pricing** — one single global price in USD (default), or country-adjusted.
8. **Registration questions** — needed for 1:1 Session / Event. Draft them.

---

## STEP 2 — Collect the standard copy pack

Every product must end up with **all** of the following, filled in, kept in the
product folder as `PRODUCT.md` and mirrored by the generator's content file
(`src/content/*.mjs`). Ask for anything missing — don't invent prices, names,
or guarantees.

### Identity
- **Product title** — short, benefit- or outcome-coded
- **Subtitle / tagline** — one line
- **Nas.io description** — benefit-led, buyer's-moment-of-pain voice, ≤5000 chars
- **What's included** — concrete bullet list of deliverables
- **Price** — the number **and exactly what it buys** (duration, deliverables,
  turnaround)
- **Guarantee / risk-reversal** — or explicitly "none"

### 1:1 Session / Event extras
- **Registration questions** — the exact pre-booking questions the buyer answers
  (so the session starts on the work, not on discovery)
- **Booking confirmation email** — subject + body. Nas.io variables: `{name}`,
  `{session_title}`, `{community_name}`
- **Reminder email** (1 day before) — subject + body
- **Duration** + **location** (Zoom / Google Meet / Teams / in-person)
- **Min notice period**, **booking window** (Nas.io caps at a rolling 30 days)

### Per ad variant (one row each)
- **Ad headline**
- **Primary text / body** — 2–3 sentences
- **CTA button label** — e.g. "Book My Session"
- **Tagline by the sign-up button** — the short line shown next to the CTA
  (e.g. "$90 · 60 min · recap in 24h")
- **Audience / angle** — who it targets, which emotion (urgency vs. relief …)

### Listing image text
- **Thumbnail overlay text** — or "title-free" if the platform overlays its own
  title card (Challenge listings do)

### Landing page (only if in scope)
- **Hero headline + subhead + CTA**
- **Section headings** in order

---

## STEP 3 — Build

- Put everything in `products/<kebab-slug>/`. Self-contained: its own `src/`,
  `README.md`, `CLAUDE.md`, `PRODUCT.md`. Never imported by the site's `src/`.
- Generator pattern: `src/content/*.mjs` (copy, verbatim from the approved copy
  pack) + `src/templates.mjs` + `src/build.mjs` (headless Chrome, no npm deps).
  Copy `theme.css` / `fonts.css` / `assets/fonts/` verbatim from
  `github-7-day-challenge/src/`.
- Keep the logo output identical across products (`markSvg` → `codecrumbs-logo`
  .svg / -512 / -1024).
- If images are in scope now: titled thumbnail + title-free alternates + square
  1080×1080 ads. Ads carry headline + CTA + the sign-up tagline; thumbnails for
  platforms that overlay their own title stay title-free.

## Git

`products/**` is fully ignored — product folders are local, regenerated from
`src/`. Nothing under `products/` is committed. Only this `PRODUCTS.md` (and any
other top-level brief you deliberately place at the repo root) is tracked.
