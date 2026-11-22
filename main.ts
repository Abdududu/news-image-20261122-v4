import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const source = join(root, 'assets', 'news.png');

if (!existsSync(source)) {
  throw new Error('missing assets/news.png — run `npm run render` first');
}

const bytes = readFileSync(source);
const size = statSync(source).size;
if (size > 1024 * 1024) {
  throw new Error('news.png exceeds 1 MiB');
}

const signature = bytes.subarray(0, 8);
const expected = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!signature.equals(expected)) {
  throw new Error('news.png is not a PNG file');
}

const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`image is ${width}x${height}, larger than 1024x1024`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(root, 'out');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

const manifest = {
  title: 'The World in One Day — Sunday 22 November 2026',
  date: '2026-11-22',
  stories: 35,
  regions: 7,
  image: 'entry.png',
  width,
  height,
  bytes: size,
};
writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

console.log(`wrote entry.png (${width}x${height}, ${size} bytes) and manifest.json to ${outDir}`);
