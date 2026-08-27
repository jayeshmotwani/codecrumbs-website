/*
 * Build script — regenerates every deliverable in this product folder.
 *
 *   node src/build.mjs            # everything: 7 PDFs + logo + thumbnail
 *   node src/build.mjs pdfs       # just the 7 section PDFs
 *   node src/build.mjs logo       # just the logo (SVG + 512 + 1024 PNG)
 *   node src/build.mjs thumbnail  # just the Nas.io thumbnail PNG
 *
 * Rendering engine: headless Google Chrome (no npm install needed).
 * Set CHROME_BIN to override the auto-detected Chrome path.
 */

import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, mkdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { days } from './content/challenge.mjs';
import {
  sectionPdfHtml,
  logoMasterSvg,
  logoPngHtml,
  thumbnailHtml,
} from './templates.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = __dirname;
const ROOT = resolve(SRC, '..');
const OUT = {
  pdfs: join(ROOT, 'pdfs'),
  logo: join(ROOT, 'logo'),
  thumb: join(ROOT, 'thumbnail'),
};

/* ── locate Chrome ─────────────────────────────────────────────────────*/
function findChrome() {
  if (process.env.CHROME_BIN) return process.env.CHROME_BIN;
  const candidates = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    process.env.LOCALAPPDATA
      ? join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe')
      : null,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  for (const c of candidates) {
    try {
      readFileSync(c);
      return c;
    } catch {}
  }
  throw new Error('Chrome not found — set CHROME_BIN to the Chrome executable.');
}
const CHROME = findChrome();
const work = mkdtempSync(join(tmpdir(), 'cc-build-'));
const CHROME_FLAGS = [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--force-color-profile=srgb',
  '--hide-scrollbars',
  `--user-data-dir=${join(work, 'profile')}`,
];

/* ── bundle CSS: concat theme + fonts + layout, inline font file:// urls ─*/
function bundleCss(...files) {
  return files
    .map((f) => readFileSync(join(SRC, f), 'utf8'))
    .join('\n')
    .replace(/url\('\.\/assets\/fonts\/([^']+)'\)/g, (_, name) => {
      const u = pathToFileURL(join(SRC, 'assets', 'fonts', name)).href;
      return `url('${u}')`;
    });
}

function render(html, args) {
  const page = join(work, `page-${Math.random().toString(36).slice(2)}.html`);
  writeFileSync(page, html);
  execFileSync(CHROME, [...CHROME_FLAGS, ...args, pathToFileURL(page).href], {
    stdio: ['ignore', 'ignore', 'inherit'],
  });
}

/* ── PDFs ─────────────────────────────────────────────────────────────*/
function buildPdfs() {
  mkdirSync(OUT.pdfs, { recursive: true });
  const css = bundleCss('theme.css', 'fonts.css', 'pdf.css');
  for (const day of days) {
    const file = join(OUT.pdfs, `day-${day.n}-${day.slug}.pdf`);
    render(sectionPdfHtml(day, css), [
      '--no-pdf-header-footer',
      '--print-to-pdf-no-header',
      `--print-to-pdf=${file}`,
    ]);
    console.log('pdf  ->', file.replace(ROOT + '\\', '').replace(ROOT + '/', ''));
  }
}

/* ── Logo ─────────────────────────────────────────────────────────────*/
function buildLogo() {
  mkdirSync(OUT.logo, { recursive: true });
  const svg = join(OUT.logo, 'codecrumbs-logo.svg');
  writeFileSync(svg, logoMasterSvg());
  console.log('logo ->', 'logo/codecrumbs-logo.svg');
  for (const size of [512, 1024]) {
    const png = join(OUT.logo, `codecrumbs-logo-${size}.png`);
    render(logoPngHtml(size), [
      `--screenshot=${png}`,
      `--window-size=${size},${size}`,
      '--default-background-color=00000000',
    ]);
    console.log('logo ->', `logo/codecrumbs-logo-${size}.png`);
  }
}

/* ── Thumbnail ───────────────────────────────────────────────────────*/
function buildThumbnail() {
  mkdirSync(OUT.thumb, { recursive: true });
  const css = bundleCss('theme.css', 'fonts.css');
  const png = join(OUT.thumb, 'github-7-day-challenge-thumbnail.png');
  render(thumbnailHtml(css, { w: 1600, h: 900 }), [
    `--screenshot=${png}`,
    '--window-size=1600,900',
  ]);
  console.log('thumb->', 'thumbnail/github-7-day-challenge-thumbnail.png');
}

/* ── main ───────────────────────────────────────────────────────────*/
const task = process.argv[2] || 'all';
try {
  if (task === 'all' || task === 'pdfs') buildPdfs();
  if (task === 'all' || task === 'logo') buildLogo();
  if (task === 'all' || task === 'thumbnail') buildThumbnail();
  console.log('\ndone. Chrome:', CHROME);
} finally {
  rmSync(work, { recursive: true, force: true });
}
