#!/usr/bin/env node
/**
 * Generate all favicon/icon variants from a single SVG source.
 * Usage: node generate-favicons.mjs <input.svg> [output-dir]
 *
 * Requires: npm install sharp png-to-ico (or install globally)
 */

import sharp from 'sharp';
import { writeFile, mkdir } from 'fs/promises';
import { join, resolve } from 'path';

const input = process.argv[2];
const outDir = resolve(process.argv[3] || './public');

if (!input) {
  console.error('Usage: node generate-favicons.mjs <input.svg> [output-dir]');
  process.exit(1);
}

const sizes = [
  // Standard favicons
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon-128.png', size: 128 },
  { name: 'favicon-196x196.png', size: 196 },

  // Apple touch icons (precomposed)
  { name: 'apple-touch-icon-57x57.png', size: 57 },
  { name: 'apple-touch-icon-60x60.png', size: 60 },
  { name: 'apple-touch-icon-72x72.png', size: 72 },
  { name: 'apple-touch-icon-76x76.png', size: 76 },
  { name: 'apple-touch-icon-114x114.png', size: 114 },
  { name: 'apple-touch-icon-120x120.png', size: 120 },
  { name: 'apple-touch-icon-144x144.png', size: 144 },
  { name: 'apple-touch-icon-152x152.png', size: 152 },
  { name: 'apple-touch-icon-180x180.png', size: 180 },

  // Generic apple-touch-icon (browsers request this by convention)
  { name: 'apple-touch-icon.png', size: 180 },

  // MS tiles
  { name: 'mstile-70x70.png', size: 70 },
  { name: 'mstile-144x144.png', size: 144 },
  { name: 'mstile-150x150.png', size: 150 },
  { name: 'mstile-310x150.png', w: 310, h: 150 },
  { name: 'mstile-310x310.png', size: 310 },

  // PWA / webmanifest
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

await mkdir(outDir, { recursive: true });

console.log(`Generating favicons from ${input} into ${outDir}\n`);

for (const entry of sizes) {
  const w = entry.w || entry.size;
  const h = entry.h || entry.size;

  // For non-square tiles, resize to fit within bounds, centred on transparent bg
  if (entry.w && entry.h && entry.w !== entry.h) {
    await sharp(input, { density: 300 })
      .resize(entry.h, entry.h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .extend({
        left: Math.floor((entry.w - entry.h) / 2),
        right: Math.ceil((entry.w - entry.h) / 2),
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(join(outDir, entry.name));
  } else {
    await sharp(input, { density: 300 })
      .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(join(outDir, entry.name));
  }

  console.log(`  ${entry.name} (${w}x${h})`);
}

// Generate favicon.ico (multi-size: 16, 32, 48)
// .ico via sharp: create individual PNGs, then bundle with png-to-ico
try {
  const { default: pngToIco } = await import('png-to-ico');
  const icoPngs = await Promise.all(
    [16, 32, 48].map((s) =>
      sharp(input, { density: 300 })
        .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );
  const ico = await pngToIco(icoPngs);
  await writeFile(join(outDir, 'favicon.ico'), ico);
  console.log('  favicon.ico (16+32+48)');
} catch {
  console.log('\n  Skipped favicon.ico (install png-to-ico for .ico generation)');
}

console.log('\nDone.');
