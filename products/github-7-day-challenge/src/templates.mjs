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

const sparkSvg = `<svg class="spark" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c.6 4.4 2.9 6.9 7 8-4.1 1.1-6.4 3.6-7 8-.6-4.4-2.9-6.9-7-8 4.1-1.1 6.4-3.6 7-8Z" fill="#F97316"/></svg>`;

const checkBadgeSvg = `<svg class="checkpoint__badge" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cbg" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#F97316"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient></defs><circle cx="12" cy="12" r="11" fill="url(#cbg)"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#0A0A0A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const lockSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10.5" width="16" height="11" rx="2.5" stroke="#8B5CF6" stroke-width="1.8"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" stroke="#8B5CF6" stroke-width="1.8" stroke-linecap="round"/></svg>`;

/* ── One section PDF (cover page + body page) ────────────────────────────*/
export function sectionPdfHtml(day, css) {
  const { totalDays, brandTagline, title: cName } = challenge;

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
        <p class="checkpoint__head">${checkBadgeSvg}Day ${day.n} Checkpoint</p>
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
