/*
 * HTML / SVG templates for the Code Crumbs product system.
 * One template set drives all 7 section PDFs, the exported logo, and the
 * Nas.io thumbnail so everything shares the same brand tokens (see theme.css).
 */

import { challenge } from './content/challenge.mjs';

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

/* inline {code}…{/code} tokens in prose -> <code> */
const rich = (s) => esc(s).replace(/\{code\}(.*?)\{\/code\}/g, '<code>$1</code>');

/* command line tokens -> coloured spans */
const cmd = (line) =>
  esc(line)
    .replace(/\{p\}(.*?)\{\/p\}/g, '<span class="p">$1</span>')
    .replace(/\{k\}(.*?)\{\/k\}/g, '<span class="k">$1</span>')
    .replace(/\{c\}(.*?)\{\/c\}/g, '<span class="c">$1</span>');

/* ── Logo mark: rounded square + geometric "C" ring ───────────────────────
 * Faithful vector version of public/favicon.svg (square #0a0a0a + orange C).
 * `frame` draws the rounded square; omit it when placing the mark on an
 * already-dark surface (header / cover). */
export function markSvg({ px = 64, frame = true, id = 'm' } = {}) {
  return `<svg class="cc-mark" width="${px}" height="${px}" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Code Crumbs">
  <defs>
    <linearGradient id="${id}-edge" x1="0" y1="0" x2="1024" y2="1024" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F97316"/><stop offset="0.52" stop-color="#EC4899"/><stop offset="1" stop-color="#8B5CF6"/>
    </linearGradient>
  </defs>
  ${frame ? `<rect x="6" y="6" width="1012" height="1012" rx="228" fill="#0A0A0A"/>
  <rect x="13" y="13" width="998" height="998" rx="221" fill="none" stroke="url(#${id}-edge)" stroke-opacity="0.7" stroke-width="7"/>` : ''}
  <path d="M 681.7 681.7 A 240 240 0 1 1 681.7 342.3" stroke="#F97316" stroke-width="134" stroke-linecap="round"/>
</svg>`;
}

const wordmark = (cls = '') =>
  `<span class="cc-wordmark ${cls}"><span class="a">Code</span><span class="b">Crumbs</span></span>`;

/* ── GitHub mark (the "Invertocat") ──────────────────────────────────────
 * Official GitHub logo path, viewBox 0 0 98 96, recoloured monochrome —
 * GitHub's brand guidelines allow a solid one-colour version. Used on the
 * alternative challenge thumbnails so the listing image reads "GitHub"
 * without the covered-up title. */
export function githubMarkSvg({ px = 96, fill = '#f5f5f5' } = {}) {
  return `<svg width="${px}" height="${px}" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GitHub"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.127 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="${fill}"/></svg>`;
}

const sparkSvg = `<svg class="spark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c.6 4.4 2.9 6.9 7 8-4.1 1.1-6.4 3.6-7 8-.6-4.4-2.9-6.9-7-8 4.1-1.1 6.4-3.6 7-8Z" fill="#F97316"/></svg>`;

const checkBadgeSvg = `<svg class="checkpoint__badge" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cbg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#F97316"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient></defs><circle cx="12" cy="12" r="11" fill="url(#cbg)"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#0A0A0A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/* Flat variant (v2) — solid orange, no <linearGradient> so print-to-pdf emits
   a plain vector fill instead of a shading pattern. */
const checkBadgeSvgFlat = `<svg class="checkpoint__badge" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" fill="#F97316"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#0A0A0A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const lockSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10.5" width="16" height="11" rx="2.5" stroke="#8B5CF6" stroke-width="1.8"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="#8B5CF6" stroke-width="1.8" stroke-linecap="round"/></svg>`;

/* ── One section PDF (cover page + body page) ────────────────────────────
 * `opts.flat` (v2 build) swaps the gradient check badge for a solid one so
 * the rendered PDF carries no shading patterns at all. Everything else is
 * driven by the stylesheet passed in `css` (pdf.css vs pdf-v2.css). */
export function sectionPdfHtml(day, css, opts = {}) {
  const { totalDays, brandTagline, title: cName } = challenge;
  const badge = opts.flat ? checkBadgeSvgFlat : checkBadgeSvg;

  const cover = `
  <section class="page cover">
    <div class="cover__glow"></div>
    <div class="cover__brand">${markSvg({ px: 34, frame: false })}${wordmark()}</div>
    <div class="cover__body">
      <span class="cover__eyebrow"><span class="dot"></span>${esc(cName)} · Beginner</span>
      <p class="cover__day">Day ${day.n} of ${totalDays}</p>
      <h1 class="cover__title"><span class="grad">${esc(day.title)}</span></h1>
      <p class="cover__lede">${rich(day.why)}</p>
      <div class="cover__rule"></div>
      <div class="progress">
        <span class="progress__label">Day ${day.n} of ${totalDays}</span>
        <span class="progress__track">${Array.from({ length: totalDays }, (_, i) => `<span class="progress__seg${i < day.n ? ' on' : ''}"></span>`).join('')}</span>
      </div>
    </div>
    <div class="cover__foot">
      <span>codecrumbs.in</span>
      <span class="tag">${esc(brandTagline)}</span>
    </div>
  </section>`;

  const commands = day.commands
    ? `<div class="terminal">
        <div class="terminal__bar"><i></i><i></i><i></i><span>${esc(day.termLabel || 'terminal')}</span></div>
        <pre>${day.commands.map(cmd).join('\n')}</pre>
      </div>`
    : '';

  const unlock = day.unlock
    ? `<div class="checkpoint__unlock">${lockSvg}<span><b>Unlocked today</b> &nbsp;·&nbsp; ${rich(day.unlock).replace(/^Bonus unlocked today:\s*/i, '')}</span></div>`
    : '';

  const body = `
  <section class="page body">
    <header class="rhead">
      <div class="rhead__left">${markSvg({ px: 20, frame: false })}${wordmark()}</div>
      <div class="rhead__right">Day <b>${day.n}</b> / ${totalDays} &nbsp;·&nbsp; ${esc(day.nav)}</div>
    </header>
    <div class="rhead__accent"></div>

    <div class="content">
      <h2 class="h-sec">${esc(day.title)}</h2>
      <div class="callout">
        <p class="callout__label">${sparkSvg}Why this matters</p>
        <p>${rich(day.why)}</p>
      </div>

      <p class="kicker" style="margin-top:9mm">What you'll do</p>
      <ul class="tasklist">
        ${day.todo.map((t) => `<li>${rich(t)}</li>`).join('\n        ')}
      </ul>

      ${commands}

      <div class="checkpoint">
        <p class="checkpoint__head">${badge}Day ${day.n} Checkpoint</p>
        <p>${rich(day.checkpoint)}</p>
        <p class="checkpoint__done"><span class="box"></span>Mark complete in the Challenge Feed${day.n < totalDays ? ` to unlock Day ${day.n + 1}` : ' to finish the challenge'}</p>
        ${unlock}
      </div>
    </div>

    <div class="body__bottom">
      <div class="progress">
        <span class="progress__label">Day ${day.n} of ${totalDays}</span>
        <span class="progress__track">${Array.from({ length: totalDays }, (_, i) => `<span class="progress__seg${i < day.n ? ' on' : ''}"></span>`).join('')}</span>
      </div>
      <footer class="rfoot">
        <span>${esc(cName)}</span>
        <span>Day ${day.n} of ${totalDays} &nbsp;·&nbsp; Page 2</span>
      </footer>
    </div>
  </section>`;

  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(cName)} — Day ${day.n}: ${esc(day.title)}</title>
<style>${css}</style></head><body>${cover}${body}</body></html>`;
}

/* ── Standalone master logo SVG (for Nas.io upload / future use) ─────────*/
export function logoMasterSvg() {
  return `<?xml version="1.0" encoding="UTF-8"?>
${markSvg({ px: 1024, frame: true, id: 'logo' }).replace('class="cc-mark" ', '')}
`;
}

/* HTML wrapper to rasterise the logo at an exact pixel size */
export function logoPngHtml(pxSize) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0}
  html,body{width:${pxSize}px;height:${pxSize}px;background:transparent;overflow:hidden}
  svg{display:block;width:${pxSize}px;height:${pxSize}px}
</style></head><body>${markSvg({ px: pxSize, frame: true, id: 'png' })}</body></html>`;
}

/* ── Nas.io challenge thumbnail (16:9) ──────────────────────────────────*/
export function thumbnailHtml(css, { w = 1600, h = 900 } = {}) {
  const { titleFull, tagline, brandTagline } = challenge;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(challenge.title)} — thumbnail</title>
<style>${css}
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${w}px;height:${h}px;overflow:hidden}
  .thumb{position:relative;width:${w}px;height:${h}px;background:var(--cc-bg);
    font-family:var(--cc-font);color:var(--cc-text);padding:92px 104px;display:flex;flex-direction:column;overflow:hidden}
  .thumb > *{position:relative;z-index:1}
  .thumb__glow{position:absolute;inset:0;z-index:0;background:var(--cc-glow)}
  .thumb__watermark{position:absolute;right:-160px;top:50%;transform:translateY(-50%);width:720px;height:720px;opacity:.07;z-index:0}
  .thumb__watermark svg{width:100%;height:100%}
  .thumb__brand{display:flex;align-items:center;gap:16px}
  .thumb__brand .cc-wordmark{font-size:26px}
  .thumb__eyebrow{margin-top:auto;display:inline-flex;align-items:center;gap:11px;align-self:flex-start;
    padding:9px 18px;border:1px solid var(--cc-hairline-strong);border-radius:999px;
    font-size:15px;letter-spacing:.22em;text-transform:uppercase;color:var(--cc-text-2)}
  .thumb__eyebrow .dot{width:8px;height:8px;border-radius:999px;background:var(--cc-orange)}
  .thumb__title{margin-top:26px;font-size:82px;line-height:1.02;font-weight:800;letter-spacing:-.02em;max-width:1180px}
  .thumb__title .grad{background:var(--cc-gradient);-webkit-background-clip:text;background-clip:text;color:transparent}
  .thumb__tag{margin-top:30px;font-size:23px;line-height:1.55;color:var(--cc-text-2);max-width:1040px}
  .thumb__rail{margin-top:34px;display:flex;align-items:center;gap:14px;font-size:15px;color:var(--cc-text-3);letter-spacing:.12em;text-transform:uppercase}
  .thumb__rail .seg{width:44px;height:4px;border-radius:999px;background:var(--cc-hairline-strong)}
  .thumb__rail .seg.on{background:var(--cc-gradient)}
  .thumb__foot{margin-top:26px;display:flex;justify-content:space-between;align-items:baseline;font-size:15px;color:var(--cc-text-3)}
  .thumb__foot .tag{font-style:italic}
</style></head><body>
  <div class="thumb">
    <div class="thumb__glow"></div>
    <div class="thumb__watermark">${markSvg({ px: 760, frame: false, id: 'thw' })}</div>
    <div class="thumb__brand">${markSvg({ px: 52, frame: true, id: 'th' })}${wordmark()}</div>
    <span class="thumb__eyebrow"><span class="dot"></span>7-Day Challenge · Zero experience needed</span>
    <h1 class="thumb__title">The GitHub 7-Day Challenge:<br><span class="grad">Zero to Portfolio-Ready</span></h1>
    <p class="thumb__tag">${esc(tagline)}</p>
    <div class="thumb__rail">
      <span>Day 1</span><span class="seg on"></span><span class="seg on"></span><span class="seg on"></span><span class="seg on"></span><span class="seg on"></span><span class="seg on"></span><span class="seg on"></span><span>Day 7</span>
    </div>
    <div class="thumb__foot"><span>codecrumbs.in</span><span class="tag">${esc(brandTagline)}</span></div>
  </div>
</body></html>`;
}

/* ── Alternative Nas.io thumbnails (16:9, NO product title) ─────────────
 * The Nas.io product page lays its own title card over the listing
 * thumbnail, so any headline baked into the image gets covered. These
 * variants drop the title, lean on the GitHub mark + a "challenge" motif,
 * and keep only the Code Crumbs brand lock-up + a Day 1→7 rail.
 * build.mjs renders one PNG per slug in CHALLENGE_THUMBS. */
export const CHALLENGE_THUMBS = ['octocat', 'streak', 'terminal', 'ascend', 'badge'];

const ctBaseCss = (w, h) => `
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${w}px;height:${h}px;overflow:hidden}
  .t{position:relative;width:${w}px;height:${h}px;background:var(--cc-bg);
    font-family:var(--cc-font);color:var(--cc-text);overflow:hidden;display:flex}
  .t__glow{position:absolute;inset:0;z-index:0;background:var(--cc-glow)}
  .t__in{position:relative;z-index:1;flex:1;display:flex;flex-direction:column;padding:76px 96px}
  .t svg{display:block}
  .cc{display:flex;align-items:center;gap:14px}
  .cc-wordmark{font-size:23px;font-weight:700}
  .cc-wordmark .a{color:var(--cc-orange)}.cc-wordmark .b{color:#fff}
  .brandrow{display:flex;align-items:center;justify-content:space-between}
  .octo-sm{opacity:.9}
  .cc-foot{font-size:15px;color:var(--cc-text-3)}
  .foot{display:flex;justify-content:space-between;align-items:baseline;font-size:15px;color:var(--cc-text-3)}
  .foot .tag{font-style:italic}
  .pill{display:inline-flex;align-items:center;gap:10px;padding:9px 18px;border:1px solid var(--cc-hairline-strong);
    border-radius:999px;font-size:14px;letter-spacing:.2em;text-transform:uppercase;color:var(--cc-text-2);white-space:nowrap}
  .pill .dot{width:8px;height:8px;border-radius:999px;background:var(--cc-orange)}
  .grad{background:var(--cc-gradient);-webkit-background-clip:text;background-clip:text;color:transparent}
  .stage{flex:1;display:flex;align-items:center;justify-content:center}
  .rail{display:flex;align-items:center;gap:12px;font-size:13px;color:var(--cc-text-3);
    letter-spacing:.14em;text-transform:uppercase}
  .rail .seg{width:44px;height:5px;border-radius:999px;background:var(--cc-hairline-strong)}
  .rail .seg.on{background:var(--cc-gradient)}

  /* octocat: hero mark + oversized 7 */
  .v-octocat .stage{gap:72px}
  .v-octocat .octo{opacity:.94}
  .v-octocat .lock{display:flex;align-items:center;gap:30px}
  .v-octocat .seven{font-size:440px;font-weight:800;line-height:.76;letter-spacing:-.05em}
  .v-octocat .unit{display:flex;flex-direction:column}
  .v-octocat .unit b{font-size:66px;font-weight:800;letter-spacing:.03em}
  .v-octocat .unit i{font-style:normal;font-size:19px;letter-spacing:.18em;text-transform:uppercase;color:var(--cc-text-2);margin-top:10px}
  .v-octocat .rail{margin:0 0 22px}

  /* streak: contribution-style row of 7 */
  .v-streak .stage{flex-direction:column;align-items:flex-start;justify-content:center;gap:38px}
  .v-streak .head{font-size:58px;font-weight:800;letter-spacing:-.02em;line-height:1.08}
  .v-streak .cells{display:grid;grid-template-columns:repeat(7,1fr);gap:16px;width:100%}
  .v-streak .cell{height:184px;border-radius:22px;background:var(--cc-gradient);padding:20px;
    display:flex;flex-direction:column;justify-content:space-between}
  .v-streak .cell .d{font-size:15px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:rgba(10,10,10,.78)}
  .v-streak .cell .ck{align-self:flex-end}
  .v-streak .sub{font-size:21px;color:var(--cc-text-2)}
  .v-streak .sub b{color:var(--cc-text);font-weight:700}
  .v-streak .brandrow+.stage{margin-top:6px}

  /* terminal: streak in progress */
  .v-terminal .win{width:1120px;border-radius:16px;background:#0c0c0c;border:1px solid var(--cc-hairline-strong);
    overflow:hidden;box-shadow:0 40px 130px rgba(0,0,0,.55)}
  .v-terminal .wbar{display:flex;align-items:center;gap:9px;padding:15px 20px;background:#151515;border-bottom:1px solid var(--cc-hairline)}
  .v-terminal .wbar i{width:12px;height:12px;border-radius:50%;background:#2b2b2b}
  .v-terminal .wbar span{margin-left:12px;font-family:var(--cc-mono);font-size:14px;color:var(--cc-text-3)}
  .v-terminal pre{margin:0;padding:28px 34px 34px;font-family:var(--cc-mono);font-size:23px;line-height:1.8;white-space:pre}
  .v-terminal .p{color:var(--cc-orange)}
  .v-terminal .k{color:var(--cc-purple)}
  .v-terminal .fl{color:var(--cc-text-3)}
  .v-terminal .num{color:var(--cc-yellow)}
  .v-terminal .ok{color:var(--cc-orange);font-weight:700}
  .v-terminal .cur{color:var(--cc-pink)}
  .v-terminal .mut{color:var(--cc-text-3)}

  /* ascend: climb 7 bars */
  .v-ascend .stage{position:relative;align-items:flex-end}
  .v-ascend .bars{display:flex;align-items:flex-end;gap:26px}
  .v-ascend .col{display:flex;flex-direction:column;align-items:center;gap:14px}
  .v-ascend .bar{width:116px;border-radius:14px 14px 4px 4px;background:var(--cc-gradient)}
  .v-ascend .col span{font-size:15px;font-weight:700;letter-spacing:.1em;color:var(--cc-text-3)}
  .v-ascend .octo-top{position:absolute;right:66px;bottom:456px;opacity:.92}
  .v-ascend .asc-cap{font-size:25px;color:var(--cc-text-2);margin:28px 0 22px;letter-spacing:-.01em}

  /* badge: achievement crest */
  .v-badge .medal{position:relative;width:478px;height:478px;border-radius:50%}
  .v-badge .ring{position:absolute;inset:0;border-radius:50%;padding:5px;background:var(--cc-gradient);
    -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
  .v-badge .inner{position:absolute;inset:16px;border-radius:50%;background:#101010;border:1px solid var(--cc-hairline);
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px}
  .v-badge .inner .octo{opacity:.96}
  .v-badge .tier{font-size:18px;letter-spacing:.26em;text-transform:uppercase;color:var(--cc-text-2)}
  .v-badge .ticks{position:absolute;inset:0}
  .v-badge .ticks span{position:absolute;left:50%;top:50%;width:7px;height:26px;margin:-13px 0 0 -3.5px;
    border-radius:4px;background:var(--cc-gradient);transform-origin:center}
  .v-badge .rail{margin-top:8px}
  .v-badge .foot{margin-top:16px}
`;

export function challengeThumbHtml(css, variant, { w = 1600, h = 900 } = {}) {
  const { brandTagline } = challenge;
  const brand = `<div class="cc">${markSvg({ px: 46, frame: true, id: `ct-${variant}` })}${wordmark()}</div>`;
  const foot = `<div class="foot"><span>codecrumbs.in</span><span class="tag">${esc(brandTagline)}</span></div>`;
  const seg7 = Array.from({ length: 7 }, () => '<span class="seg on"></span>').join('');
  const railFull = `<div class="rail"><span>Day 1</span>${seg7}<span>Day 7</span></div>`;
  const cellCheck = `<svg class="ck" width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4 4L19 7" stroke="#0A0A0A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const V = {
    octocat: `
      <div class="brandrow">${brand}<span class="pill"><span class="dot"></span>7-Day Challenge</span></div>
      <div class="stage">
        <div class="octo">${githubMarkSvg({ px: 420 })}</div>
        <div class="lock"><span class="seven grad">7</span><span class="unit"><b>DAYS</b><i>commit every day</i></span></div>
      </div>
      ${railFull}
      ${foot}`,

    streak: `
      <div class="brandrow">${brand}<div class="octo-sm">${githubMarkSvg({ px: 92 })}</div></div>
      <div class="stage">
        <p class="head">Seven days.<br><span class="grad">One unbroken streak.</span></p>
        <div class="cells">${Array.from({ length: 7 }, (_, i) => `<div class="cell"><span class="d">Day ${i + 1}</span>${cellCheck}</div>`).join('')}</div>
        <p class="sub">One small Git skill a day &mdash; <b>show up seven times</b> and you finish.</p>
      </div>
      <div class="brandrow"><span class="pill"><span class="dot"></span>The challenge · Commit daily</span><span class="cc-foot">codecrumbs.in</span></div>`,

    terminal: `
      <div class="brandrow">${brand}<div class="octo-sm">${githubMarkSvg({ px: 88 })}</div></div>
      <div class="stage">
        <div class="win">
          <div class="wbar"><i></i><i></i><i></i><span>challenge — zsh</span></div>
          <pre><span class="p">$</span> <span class="k">gh</span> challenge start <span class="fl">--days</span> <span class="num">7</span>

<span class="ok">&#10004;</span> day 1   commit pushed
<span class="ok">&#10004;</span> day 2   commit pushed
<span class="ok">&#10004;</span> day 3   commit pushed
<span class="cur">&#9646;</span> day 4   your move&#8230;
<span class="mut">&#183;   day 5   locked</span>
<span class="mut">&#183;   day 6   locked</span>
<span class="mut">&#183;   day 7   locked</span></pre>
        </div>
      </div>
      <div class="brandrow"><span class="pill"><span class="dot"></span>7-Day Challenge</span><span class="cc-foot">codecrumbs.in</span></div>`,

    ascend: `
      <div class="brandrow">${brand}<span class="pill"><span class="dot"></span>Level up · 7 days</span></div>
      <div class="stage">
        <div class="octo-top">${githubMarkSvg({ px: 128 })}</div>
        <div class="bars">${[92, 148, 204, 262, 320, 382, 446].map((ht, i) => `<div class="col"><div class="bar" style="height:${ht}px"></div><span>D${i + 1}</span></div>`).join('')}</div>
      </div>
      <p class="asc-cap">Seven days. Seven skills. <span class="grad">One climb.</span></p>
      ${foot}`,

    badge: `
      <div class="brandrow">${brand}<span class="pill"><span class="dot"></span>Unlock the badge</span></div>
      <div class="stage">
        <div class="medal">
          <div class="ticks">${Array.from({ length: 7 }, (_, i) => `<span style="transform:rotate(${(i * 360) / 7}deg) translateY(-258px)"></span>`).join('')}</div>
          <div class="ring"></div>
          <div class="inner"><div class="octo">${githubMarkSvg({ px: 188 })}</div><span class="tier">7-Day Challenge</span></div>
        </div>
      </div>
      ${railFull}
      ${foot}`,
  };

  const inner = V[variant] || V.octocat;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(challenge.title)} — thumbnail (${esc(variant)})</title>
<style>${css}
${ctBaseCss(w, h)}</style></head><body>
  <div class="t v-${variant}"><div class="t__glow"></div><div class="t__in">${inner}</div></div>
</body></html>`;
}

/* ── Square ad images (1080×1080, Instagram-post) ─────────────────────
 * Unlike the thumbnails these DO carry a headline + CTA — they are paid
 * social ads, not the Nas.io listing image. Colour is free-range here:
 * each variant sets its own local palette, but every one keeps the Code
 * Crumbs wordmark + the GitHub mark so the product still reads.
 * build.mjs renders one PNG per slug in AD_IMAGES. */
export const AD_IMAGES = ['gradient', 'transform', 'checklist', 'seven', 'profile'];

/* deterministic mock contribution grid */
const adGrid = (cols, rows, density, seed) => {
  let out = '';
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const v = ((c * 7 + r * 13 + seed * 5) % 10) / 10;
      out += v < density ? `<i class="on l${Math.min(3, Math.floor(v * 6))}"></i>` : '<i></i>';
    }
  return out;
};

const adBaseCss = (s) => `
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${s}px;height:${s}px;overflow:hidden}
  .ad{position:relative;width:${s}px;height:${s}px;overflow:hidden;
    font-family:var(--cc-font);color:#fff;display:flex;flex-direction:column;padding:78px}
  .ad>*{position:relative;z-index:1}
  .ad svg{display:block}
  .ad__bg{position:absolute;inset:0;z-index:0}
  .arow{display:flex;align-items:center;justify-content:space-between}
  .cc{display:flex;align-items:center;gap:13px}
  .cc-wordmark{font-size:25px;font-weight:700}
  .cc-wordmark .a{color:var(--cc-orange)}.cc-wordmark .b{color:#fff}
  .ad .pill{display:inline-flex;align-items:center;gap:10px;padding:10px 19px;border-radius:999px;
    font-size:14px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;
    border:1px solid rgba(255,255,255,.24);color:rgba(255,255,255,.9);white-space:nowrap}
  .ad .pill .dot{width:8px;height:8px;border-radius:50%;background:var(--cc-orange)}
  .grad-txt{background:var(--cc-gradient);-webkit-background-clip:text;background-clip:text;color:transparent}
  .mid{flex:1;display:flex;flex-direction:column;justify-content:center}
  .cta{display:inline-flex;align-items:center;gap:12px;padding:19px 30px;border-radius:15px;
    font-size:23px;font-weight:800;letter-spacing:-.01em;color:#0a0a0a;background:#fff;align-self:flex-start}
  .cta svg{width:22px;height:22px}
  .adfoot{display:flex;justify-content:space-between;align-items:baseline;font-size:16px;opacity:.62;margin-top:24px}
  .grid{display:grid;gap:5px}
  .grid i{aspect-ratio:1;border-radius:3px;background:rgba(255,255,255,.07)}
  .grid i.on{background:var(--cc-gradient)}
  .grid i.on.l0{opacity:.42}.grid i.on.l1{opacity:.64}.grid i.on.l2{opacity:.82}.grid i.on.l3{opacity:1}

  /* 1 · gradient — hook + CTA */
  .v-gradient .ad__bg{background:
    radial-gradient(58% 52% at 10% 6%,rgba(249,115,22,.34),transparent 70%),
    radial-gradient(60% 60% at 94% 96%,rgba(139,92,246,.38),transparent 72%),
    radial-gradient(74% 52% at 62% 52%,rgba(236,72,153,.18),transparent 74%),#0a0a0a}
  .v-gradient .octo{position:absolute;right:-90px;bottom:-90px;opacity:.08}
  .v-gradient h1{font-size:76px;line-height:1.05;font-weight:800;letter-spacing:-.025em}
  .v-gradient p{margin-top:30px;font-size:25px;line-height:1.52;color:rgba(255,255,255,.72);max-width:760px}
  .v-gradient .cta{margin-top:46px;background:var(--cc-gradient)}

  /* 2 · transform — before / after */
  .v-transform .ad__bg{background:radial-gradient(60% 60% at 88% 92%,rgba(139,92,246,.26),transparent 70%),
    radial-gradient(50% 50% at 8% 8%,rgba(249,115,22,.16),transparent 72%),#0a0a0a}
  .v-transform h1{font-size:48px;font-weight:800;letter-spacing:-.02em;line-height:1.12;margin-top:30px}
  .v-transform .cmp{display:flex;align-items:center;gap:22px;margin:auto 0 0}
  .v-transform .sell{text-align:center;font-size:22px;color:rgba(255,255,255,.66);margin:24px 0 0}
  .v-transform .sell b{color:#fff;font-weight:700}
  .v-transform .cta{margin-top:auto;background:var(--cc-gradient)}
  .v-transform .card{flex:1;border-radius:22px;padding:30px;border:1px solid rgba(255,255,255,.1);
    background:rgba(255,255,255,.03);display:flex;flex-direction:column;gap:20px}
  .v-transform .card h2{font-size:19px;letter-spacing:.16em;text-transform:uppercase}
  .v-transform .card.before h2{color:rgba(255,255,255,.42)}
  .v-transform .card.after h2{background:var(--cc-gradient);-webkit-background-clip:text;background-clip:text;color:transparent}
  .v-transform .card .grid{grid-template-columns:repeat(12,1fr)}
  .v-transform .card.before .grid i.on{background:rgba(255,255,255,.15);opacity:1}
  .v-transform .card p{font-size:17px;line-height:1.45;color:rgba(255,255,255,.62)}
  .v-transform .arrow{color:rgba(255,255,255,.5)}
  .v-transform .arrow svg{width:46px;height:46px}

  /* 3 · checklist — the syllabus, teal accent */
  .v-checklist .ad__bg{background:
    radial-gradient(66% 56% at 12% 8%,rgba(34,211,238,.18),transparent 70%),
    radial-gradient(58% 58% at 92% 96%,rgba(249,115,22,.16),transparent 72%),#0a0d16}
  .v-checklist h1{font-size:45px;font-weight:800;letter-spacing:-.02em;line-height:1.12}
  .v-checklist ul{list-style:none;margin:34px 0 0;display:flex;flex-direction:column;gap:14px}
  .v-checklist li{display:flex;align-items:center;gap:17px;font-size:22px;font-weight:500;color:rgba(255,255,255,.92)}
  .v-checklist .n{flex:none;width:38px;height:38px;border-radius:10px;display:flex;align-items:center;
    justify-content:center;font-size:16px;font-weight:800;background:rgba(34,211,238,.14);color:#22d3ee}
  .v-checklist .cta{margin-top:40px;background:#22d3ee}

  /* 4 · seven — bold electric gradient bg */
  .v-seven .ad__bg{background:linear-gradient(150deg,#2563eb 0%,#7c3aed 52%,#db2777 100%)}
  .v-seven .mid{flex-direction:row;align-items:center;gap:34px}
  .v-seven .big{font-size:400px;font-weight:800;line-height:.74;letter-spacing:-.06em;color:#fff}
  .v-seven .stack{font-size:58px;font-weight:800;line-height:1.04;letter-spacing:-.02em;text-transform:uppercase}
  .v-seven .octo{position:absolute;right:-40px;top:-30px;opacity:.16}
  .v-seven .cta{background:#facc15}
  .v-seven .pill{border-color:rgba(255,255,255,.45)}
  .v-seven .adfoot{opacity:.85}

  /* 5 · profile — GitHub-dark mock card, green accent */
  .v-profile .ad__bg{background:radial-gradient(58% 52% at 86% 10%,rgba(46,160,67,.24),transparent 70%),
    radial-gradient(46% 46% at 6% 96%,rgba(88,166,255,.14),transparent 74%),#0a0a0a}
  .v-profile h1{font-size:40px;font-weight:800;letter-spacing:-.02em;line-height:1.18;margin-top:26px}
  .v-profile h1 .g{color:#3fb950}
  .v-profile .pcard{margin-top:26px;border-radius:20px;background:#0d1117;border:1px solid #30363d;
    padding:26px;display:flex;flex-direction:column;gap:16px}
  .v-profile .phead{display:flex;align-items:center;gap:16px}
  .v-profile .phead svg{margin-left:auto}
  .v-profile .pav{width:66px;height:66px;border-radius:50%;background:var(--cc-gradient)}
  .v-profile .pname{font-size:22px;font-weight:700}
  .v-profile .pname span{display:block;font-size:15px;font-weight:400;color:#8b949e;margin-top:3px}
  .v-profile .repos{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  .v-profile .repo{border:1px solid #30363d;border-radius:11px;padding:14px 16px;font-size:16px;color:#58a6ff;font-weight:600}
  .v-profile .repo span{display:block;font-size:13px;color:#8b949e;font-weight:400;margin-top:4px}
  .v-profile .grid{grid-template-columns:repeat(20,1fr);gap:4px}
  .v-profile .grid i.on{background:#2ea043}
  .v-profile .cta{margin-top:26px;background:#3fb950}
`;

export function adImageHtml(css, variant, { size = 1080 } = {}) {
  const brand = `<div class="cc">${markSvg({ px: 44, frame: true, id: `ad-${variant}` })}${wordmark()}</div>`;
  const arrow = `<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const items = [
    'Set up Git & GitHub the right way',
    'The handful of commands devs really use',
    'Create & manage your first repository',
    'Put a real project online — with a README',
    'Branching, without the confusion',
    'Fork & open your first pull request',
    'A profile that recruiters trust',
  ];
  const repos = [
    ['portfolio-site', 'Personal site'],
    ['weather-cli', 'First Python project'],
    ['recipe-box', 'React practice'],
    ['your-username', 'Profile README'],
  ];

  const V = {
    gradient: `
      <div class="arow">${brand}<span class="pill"><span class="dot"></span>Free &middot; 7 days</span></div>
      <div class="octo">${githubMarkSvg({ px: 620 })}</div>
      <div class="mid">
        <h1>Zero to a GitHub profile<br>that gets you <span class="grad-txt">hired</span>.</h1>
        <p>One small Git skill a day. By Day 7 &mdash; real projects, a clean commit history, and a profile README you can put on your resume.</p>
        <div class="cta">Start the free challenge ${arrow}</div>
      </div>
      <div class="adfoot"><span>codecrumbs.in</span><span>The GitHub 7-Day Challenge</span></div>`,

    transform: `
      <div class="arow">${brand}<span class="pill"><span class="dot"></span>7-day glow-up</span></div>
      <h1>Seven days. Same you.<br><span class="grad-txt">A GitHub that gets noticed.</span></h1>
      <div class="cmp">
        <div class="card before">
          <h2>Day 1</h2>
          <div class="grid">${adGrid(12, 7, 0.12, 3)}</div>
          <p>Empty profile. Nothing pinned. One &ldquo;test&rdquo; repo.</p>
        </div>
        <span class="arrow">${arrow}</span>
        <div class="card after">
          <h2>Day 7</h2>
          <div class="grid">${adGrid(12, 7, 0.82, 6)}</div>
          <p>Real projects pinned. Green streak. Profile README.</p>
        </div>
      </div>
      <p class="sell">Same effort. A profile that finally <b>looks the part</b>.</p>
      <div class="cta">Take the challenge ${arrow}</div>
      <div class="adfoot"><span>codecrumbs.in</span><span>Free &middot; 10&ndash;20 min a day</span></div>`,

    checklist: `
      <div class="arow">${brand}<span class="pill"><span class="dot"></span>The syllabus</span></div>
      <div class="mid">
        <h1>What you&rsquo;ll actually<br>learn in <span class="grad-txt">7 days</span></h1>
        <ul>${items.map((t, i) => `<li><span class="n">${i + 1}</span>${esc(t)}</li>`).join('')}</ul>
        <div class="cta">Join free ${arrow}</div>
      </div>
      <div class="adfoot"><span>codecrumbs.in</span><span>The GitHub 7-Day Challenge</span></div>`,

    seven: `
      <div class="arow">${brand}<span class="pill"><span class="dot"></span>Zero experience needed</span></div>
      <div class="octo">${githubMarkSvg({ px: 380, fill: '#fff' })}</div>
      <div class="mid">
        <span class="big">7</span>
        <span class="stack">Days to<br>portfolio-<br>ready</span>
      </div>
      <div class="cta">Start today &mdash; it&rsquo;s free ${arrow}</div>
      <div class="adfoot"><span>codecrumbs.in</span><span>One Git skill a day</span></div>`,

    profile: `
      <div class="arow">${brand}<span class="pill"><span class="dot"></span>Before / after</span></div>
      <div class="mid">
        <h1>Most beginners have a messy GitHub.<br><span class="g">In one week, yours won&rsquo;t.</span></h1>
        <div class="pcard">
          <div class="phead"><div class="pav"></div><div class="pname">Your Name<span>@your-username &middot; 7-day streak</span></div>${githubMarkSvg({ px: 38, fill: '#8b949e' })}</div>
          <div class="repos">${repos.map(([a, b]) => `<div class="repo">${esc(a)}<span>${esc(b)}</span></div>`).join('')}</div>
          <div class="grid">${adGrid(20, 6, 0.62, 4)}</div>
        </div>
        <div class="cta">Start the challenge ${arrow}</div>
      </div>
      <div class="adfoot"><span>codecrumbs.in</span><span>Free &middot; 10&ndash;20 min a day</span></div>`,
  };

  const inner = V[variant] || V.gradient;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(challenge.title)} — ad (${esc(variant)})</title>
<style>${css}
${adBaseCss(size)}</style></head><body>
  <div class="ad v-${variant}"><div class="ad__bg"></div>${inner}</div>
</body></html>`;
}
