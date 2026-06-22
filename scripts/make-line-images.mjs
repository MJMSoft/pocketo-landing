// Builds the Eventos and Mayor section images from the product photos, since we
// don't have catering/wholesale-specific photography yet.
//   - Eventos: 3-up "elige tu menú" selection on a warm coral-lit navy field.
//   - Mayor:   6-up "catálogo completo" grid on a cool navy field.
// Replace these with real photos (a catered table / stacked product) when available.
// Run: node scripts/make-line-images.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const P = (f) => join(__dirname, '..', 'src', 'assets', 'products', f);
const OUT = (f) => join(__dirname, '..', 'src', 'assets', f);

const W = 1200;
const H = 900;

function bg(warm) {
  const glow = warm
    ? `<radialGradient id="g" cx="78%" cy="18%" r="75%">
         <stop offset="0" stop-color="#F4A47C" stop-opacity="0.42"/>
         <stop offset="0.45" stop-color="#E8714A" stop-opacity="0.12"/>
         <stop offset="1" stop-color="#E8714A" stop-opacity="0"/>
       </radialGradient>`
    : `<radialGradient id="g" cx="82%" cy="14%" r="70%">
         <stop offset="0" stop-color="#F4A47C" stop-opacity="0.20"/>
         <stop offset="0.5" stop-color="#F4A47C" stop-opacity="0.05"/>
         <stop offset="1" stop-color="#F4A47C" stop-opacity="0"/>
       </radialGradient>`;
  return Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#0A1428"/>
          <stop offset="1" stop-color="#0D1A2E"/>
        </linearGradient>
        ${glow}
      </defs>
      <rect width="${W}" height="${H}" fill="url(#b)"/>
      <rect width="${W}" height="${H}" fill="url(#g)"/>
    </svg>`);
}

async function tile(file, size) {
  const r = Math.round(size * 0.085);
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" ry="${r}"/></svg>`
  );
  const border = Buffer.from(
    `<svg width="${size}" height="${size}"><rect x="0.75" y="0.75" width="${size - 1.5}" height="${size - 1.5}" rx="${r}" ry="${r}" fill="none" stroke="#1F2D45" stroke-width="1.5"/></svg>`
  );
  return sharp(P(file))
    .resize(size, size, { fit: 'cover' })
    .composite([
      { input: mask, blend: 'dest-in' },
      { input: border, blend: 'over' },
    ])
    .png()
    .toBuffer();
}

async function compose(out, files, cols, size, gap, warm) {
  const rows = Math.ceil(files.length / cols);
  const gridW = cols * size + (cols - 1) * gap;
  const gridH = rows * size + (rows - 1) * gap;
  const x0 = Math.round((W - gridW) / 2);
  const y0 = Math.round((H - gridH) / 2);
  const tiles = await Promise.all(files.map((f) => tile(f, size)));
  const layers = tiles.map((input, i) => ({
    input,
    left: x0 + (i % cols) * (size + gap),
    top: y0 + Math.floor(i / cols) * (size + gap),
  }));
  await sharp(bg(warm)).composite(layers).png().toFile(OUT(out));
  console.log('wrote', out);
}

// Eventos: a curated 3-up selection, warm.
await compose(
  'line-eventos.png',
  ['chuleta-cerdo-especial.png', 'pizza-pepperoni.png', 'camarones-apanados.png'],
  3,
  330,
  40,
  true
);

// Mayor: the full lineup, cool.
await compose(
  'line-mayor.png',
  [
    'chuleta-cerdo-especial.png',
    'chuleta-cerdo-tradicional.png',
    'chuleta-pollo-especial.png',
    'chuleta-pollo-tradicional.png',
    'camarones-apanados.png',
    'pizza-hawaiana.png',
  ],
  3,
  328,
  28,
  false
);
