# Pocketo Landing

Landing page de Pocketo: comida caleña congelada, lista en 8 minutos.
Astro + Tailwind CSS v4 + Motion. SSG puro (cero JavaScript de servidor), modo
oscuro fijo, un solo acento coral.

## Correr local

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build y preview

```bash
npm run build      # genera /dist
npm run preview    # sirve el build local
```

## Imagen para compartir (Open Graph)

La tarjeta de compartir vive en `public/og-image.png`. Si cambias el copy o los
colores, regénerala con:

```bash
node scripts/make-og.mjs
```

## Deploy (Netlify)

```bash
npm install -g netlify-cli
netlify login
netlify init        # crear nuevo site; build: npm run build; publish: dist
netlify deploy --prod
```

La config de build ya está en `netlify.toml` (incluye los redirects
`/menu` y `/pedir` hacia OlaClick).

## Formulario de cotización

Usa **Netlify Forms** (sin backend). El form se llama `cotizacion` y al enviarse
redirige a `/gracias`. Para recibir las solicitudes por correo: en el dashboard de
Netlify, **Forms -> cotizacion -> Settings/Notifications -> Add notification ->
Email notification**, y pon tu correo.

## Placeholders que debes reemplazar

Casi todo lo editable vive en `src/consts.ts`:

| Qué | Dónde | Valor actual (placeholder) |
| --- | --- | --- |
| Número de WhatsApp | `src/consts.ts` -> `WHATSAPP.number` / `.display` | `573000000000` / `+57 300 000 0000` |
| Correo de contacto | `src/consts.ts` -> `SITE.email` | `hola@pocketo.store` |
| Precios de productos | `src/consts.ts` -> `PRODUCTS[].price` | `$XX.XXX COP` |
| Fotos de producto | componente `Placeholder.astro` (ver abajo) | placeholders editoriales |
| Logo | `public/logo.png` | ver `public/LOGO_AQUI.txt` |

### Fotos

Hoy cada foto es un placeholder editorial diseñado (`src/components/Placeholder.astro`).
Cuando tengas las fotos reales (AVIF o WebP), reemplaza cada `<Placeholder ... />`
por un `<img>` en: `Hero.astro`, `Featured.astro`, `About.astro`, `Lines.astro`.

## Dominio custom (pocketo.store en GoDaddy)

1. En Netlify: **Site configuration -> Domain management -> Add a domain ->**
   `pocketo.store`.
2. Netlify te muestra los registros DNS. En GoDaddy (DNS del dominio):
   - Registro **A** para `@` (raíz) apuntando a `75.2.60.5`.
   - Registro **CNAME** para `www` apuntando a `<tu-site>.netlify.app`.
   (Usa siempre los valores exactos que muestre tu panel de Netlify; pueden variar.)
3. Espera la propagación DNS y deja que Netlify emita el certificado HTTPS
   (Let's Encrypt, automático).

> Alternativa más simple: cambiar los nameservers de GoDaddy a los de Netlify DNS
> y dejar que Netlify maneje todo el DNS.

## Notas técnicas

- Tailwind v4 se configura por CSS (`@theme` en `src/styles/global.css`), no hay
  `tailwind.config.mjs`.
- Animaciones con Motion; respetan `prefers-reduced-motion` y no usan
  `window.addEventListener('scroll')`.
- Fuentes self-hosted vía Fontsource (Bricolage Grotesque + Pacifico), subset y
  `font-display: swap`.
- Lighthouse local: Performance 100 (móvil) / 99 (desktop), Accessibility,
  Best Practices y SEO en 100.
