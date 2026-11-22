import { chromium } from 'playwright-core';
import { mkdirSync, statSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, 'assets');
mkdirSync(outDir, { recursive: true });

function findChromium() {
  const home = process.env.HOME || '/home/hatch';
  const base = join(home, '.cache', 'ms-playwright');
  if (!existsSync(base)) return undefined;
  for (const entry of readdirSync(base)) {
    if (!entry.startsWith('chromium-')) continue;
    const candidate = join(base, entry, 'chrome-linux', 'chrome');
    if (existsSync(candidate)) return candidate;
  }
  return undefined;
}

const executablePath = process.env.CHROME_PATH || findChromium();
const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto('file://' + join(root, 'entry.html'), { waitUntil: 'load' });
await page.waitForTimeout(400);
const target = join(outDir, 'news.png');
await page.screenshot({ path: target });
await browser.close();

const size = statSync(target).size;
console.log('rendered', target, size, 'bytes');
if (size > 1024 * 1024) {
  console.error('ERROR: PNG exceeds 1 MiB');
  process.exit(1);
}
