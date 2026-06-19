// Rasterizes the Pocketo Open Graph card to a real PNG (1200x630).
// Meta / WhatsApp / Twitter do not reliably render SVG OG images, so we ship PNG.
// Run: node scripts/make-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A1428"/>
      <stop offset="1" stop-color="#0D1A2E"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.82" cy="0.16" r="0.6">
      <stop offset="0" stop-color="#F4A47C" stop-opacity="0.40"/>
      <stop offset="0.5" stop-color="#E8714A" stop-opacity="0.10"/>
      <stop offset="1" stop-color="#E8714A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="word" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#F4A47C"/>
      <stop offset="1" stop-color="#E8714A"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <text x="90" y="250" font-family="Georgia, 'Times New Roman', serif" font-style="italic"
        font-size="150" font-weight="700" fill="url(#word)">Pocketo</text>

  <text x="96" y="350" font-family="Helvetica, Arial, sans-serif" font-size="50"
        font-weight="700" fill="#F5E6D8">Comida caleña congelada.</text>
  <text x="96" y="420" font-family="Helvetica, Arial, sans-serif" font-size="50"
        font-weight="700" fill="#F4A47C">Lista en 8 minutos.</text>

  <text x="96" y="520" font-family="Helvetica, Arial, sans-serif" font-size="32"
        fill="#B8A99A">Cali. Entregas jueves y sábado. Pedidos por WhatsApp.</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
