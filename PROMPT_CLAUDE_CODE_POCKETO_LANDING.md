# Pocketo Landing — Brief para Claude Code

Copia y pega TODO este documento como tu primer mensaje en una sesión nueva de Claude Code (desde una carpeta vacía donde quieras vivir el proyecto, ej. `~/code/pocketo-landing`).

---

## 0. Modo de trabajo

Eres mi ingeniero de diseño. Vas a construir, validar localmente, y desplegar una landing page a producción. No me pidas confirmación entre pasos: ejecuta de corrido, y al final dame un resumen con la URL en vivo.

Si necesitas tomar una decisión de diseño que no esté explícita en este brief, decide tú aplicando los skills que vas a instalar abajo. No me preguntes por preferencias de color, layout, o copy — el brief tiene todo lo necesario para inferir.

Stack obligatorio: **Astro + Tailwind CSS + Motion (motion.dev) para animaciones**. SSG puro (cero JavaScript del lado servidor). Si alguna parte específica del brief requiere otra cosa, explícamelo y propón alternativa.

---

## 1. Instalar skills primero (antes de tocar código)

Ejecuta estos comandos en orden, en la raíz del proyecto:

```bash
# 1. Inicializar Astro
npm create astro@latest . -- --template minimal --typescript strict --install --no-git --skip-houston

# 2. Instalar Tailwind, Motion, y plugins necesarios
npx astro add tailwind --yes
npm install motion @astrojs/sitemap

# 3. Instalar skills de diseño (lee la documentación de cada uno antes de empezar)
npx skills add Leonxlnx/taste-skill
npx skills add emilkowalski/skill
```

**Después de instalar, LEE los siguientes archivos `SKILL.md` antes de escribir cualquier componente o estilo:**

- `.claude/skills/design-taste-frontend/SKILL.md` (o donde el primer comando los haya puesto)
- `.claude/skills/emil-design-eng/SKILL.md`

Aplica las reglas de ambos durante todo el build. En particular:
- Taste Skill v2: respeta los "locks" (color, shape, theme), las reglas de hero discipline, y la ban list completa (sin em-dashes, sin section-numbering eyebrows, sin scroll cues, sin pills sobre imágenes, sin three-equal-card rows, sin AI-purple/mesh blob gradients, sin `window.addEventListener('scroll')` — usa Motion `useScroll` o IntersectionObserver).
- Emil's skill: úsalo para tomar decisiones de motion (timing, easing, qué animar y qué no). Cuando termines, corre mentalmente el "review-animations" check.

Si los comandos `npx skills add` fallan, descarga manualmente los archivos `SKILL.md` desde:
- https://github.com/Leonxlnx/taste-skill/blob/main/skills/design-taste-frontend/SKILL.md
- https://github.com/emilkowalski/skill/blob/main/skills/emil-design-eng/SKILL.md

Y guárdalos en `.claude/skills/` dentro del proyecto.

---

## 2. Brief de marca

### Qué es Pocketo
Pocketo es una marca caleña (Cali, Colombia) de comida artesanal congelada y experiencias gastronómicas. Producto estrella: **chuleta valluna apanada sin hueso** lista para freír en casa, hecha como las hacía la abuela pero porcionada y empacada para que cualquiera la prepare en 8 minutos.

Hay cuatro líneas de negocio bajo el mismo paraguas. Cada una debe quedar **claramente diferenciada** en la landing:

1. **Pocketo Home** — Comida artesanal congelada con domicilio en Cali. Pedidos por WhatsApp y por nuestra tienda en línea (OlaClick). Días de entrega: **jueves y sábado**. CTA principal de toda la landing.
2. **Pocketo Street** — Punto físico en Cali: **Cra. 37 #10-171, barrio Olímpico**. Atención **jueves a sábado, 5pm–11pm**. Vibe street food, comida recién hecha.
3. **Pocketo Eventos** — Catering y servicio de comida para eventos privados, cumpleaños, reuniones. Cotización personalizada.
4. **Pocketo Al Por Mayor** — Distribución mayorista de nuestros productos congelados (chuleta valluna, etc.) a restaurantes, tiendas, distribuidores. Cotización personalizada.

### Brand voice
- Inspirada en el Instagram **@pocketo.co** — cercana, caleña, sin pretensiones, orgullosamente local
- Español neutro con sazón caleña ocasional, sin caer en cliché
- Tono confiado pero cálido, como recomendación de amigo, nunca corporativo
- Honest, directo, sin verborrea
- **NO** uses em-dashes (—) en ninguna parte del copy. Tampoco en-dashes (–). Usa guiones simples (-) o reestructura la frase
- **NO** uses lenguaje genérico de "experiencia gastronómica única" o "los mejores sabores". Habla concreto: "chuleta valluna apanada lista en 8 minutos", "como la hacía tu abuela", "porcionada y empacada para freezer"

### Audiencia
Mamás trabajadoras, profesionales jóvenes, parejas sin tiempo, en Cali. Quieren comer rico en casa sin cocinar desde cero. No quieren comida ultra-procesada de supermercado.

---

## 3. Paleta de colores

Inferir desde el logo y la presencia visual de la marca:

```
--color-bg: #0A1428          (navy profundo, fondo principal modo oscuro)
--color-surface: #122036     (navy un tono más claro, para cards/secciones)
--color-text: #F5E6D8        (off-white cálido, NO blanco puro)
--color-text-muted: #B8A99A  (off-white desaturado para subtítulos)
--color-accent: #F4A47C      (coral/peach del logo "Pocketo", color de marca)
--color-accent-warm: #E8714A (naranja cálido del gradiente del logo)
--color-divider: #1F2D45     (líneas sutiles)
```

**Page Theme Lock**: modo oscuro fijo. UN solo accent (`--color-accent`) en toda la página. UN solo radius system (recomiendo `rounded-2xl` / 16px en todos los elementos interactivos, `rounded-3xl` / 24px en cards grandes).

Si decides que un modo claro queda mejor para gastronomía, justifícalo en un comentario al principio del código y úsalo consistentemente. Pero el default es dark.

---

## 4. Logo

Voy a poner el archivo del logo en `/public/logo.png` y `/public/logo.svg` si lo tienes (en mi versión, es la palabra "Pocketo" en script handwritten color coral sobre fondo gradient navy→teal→orange).

Para el header de la landing, evalúa dos opciones y escoge la que mejor encaje con la estética limpia:

A) Usar el logo completo con el gradiente de fondo (el archivo tal cual)
B) Re-renderizar **solo el texto "Pocketo"** en una fuente script similar (sugerencias: *Caveat Brush*, *Pacifico*, *Lobster*, *Sacramento* — escoge la más cercana al original), color `--color-accent`, sin el gradiente de fondo, sobre el fondo de la página

Mi preferencia es **B** para el header (más limpio y se integra mejor con el resto del diseño), pero si el script de Google Fonts no se acerca al original, usa **A** con el PNG.

En el footer y el OG image puedes usar A (el logo completo con gradiente).

---

## 5. Estructura de la landing (single page con anchors)

Una sola página con secciones ancladas. Navegación sticky con scroll suave.

### 5.1 Hero
- Headline máximo 2 líneas, directo al producto principal. Sugerencia (refínala si encuentras algo mejor): **"Comida caleña congelada. Lista en 8 minutos."**
- Subtext máximo 20 palabras: algo como **"Chuleta valluna y más, hechos como en casa. Pedidos por WhatsApp, entregas en Cali los jueves y sábados."**
- Dos CTAs visibles sin scroll:
  - **Primario**: "Ver la carta" → `https://pocketo.ola.click/products`
  - **Secundario**: "Pedir ahora" → `https://pocketo.ola.click/`
- Sin scroll cues, sin pills sobre imágenes, sin version labels
- Background: composición sutil. Puede ser una foto editorial del producto (chuleta valluna emplatada) con tratamiento oscuro y gradiente del navy → un toque de coral arriba a la derecha. O un loop de video sutil (muy ligero, <500kb) si encuentras uno apropiado. Si no, una composición de tipografía + un elemento gráfico (no SVG decorativo hand-rolled — usa fotografía de producto)

### 5.2 Sección de destacados (productos hero)
Grid asimétrico (no tres tarjetas iguales). Muestra 4–5 productos destacados con:
- Foto del producto
- Nombre
- Precio (ponlos como placeholders por ahora: `$XX.XXX COP`, le diré que actualice después)
- CTA pequeño "Pedir" que abre el producto en `https://pocketo.ola.click/products`

Si no tienes fotos, deja placeholders bien diseñados (no `<div>` con texto, usa un sistema de placeholder con el accent color y el nombre del producto en tipografía grande, estilo editorial).

### 5.3 Quiénes somos
Párrafo corto (máximo 80 palabras). Pocketo es una marca caleña que rescata recetas tradicionales (chuleta valluna, etc.) y las hace accesibles para hogares modernos. Hechas artesanalmente, empacadas para freezer, listas para terminar en casa.

Una foto editorial al lado o debajo. NO una stock photo genérica de "happy family eating". Algo con personalidad: la cocina, las manos preparando, el producto en proceso.

### 5.4 Nuestras líneas (Home, Street, Eventos, Al Por Mayor)
Layout asimétrico, NO tres/cuatro tarjetas iguales. Puede ser:
- Zig-zag de 4 bloques alternados (texto izquierda / imagen derecha, luego invertido)
- O un layout tipo "magazine" con anchors

Cada línea con:
- Nombre (ej. "Pocketo Home")
- Descripción 1-2 líneas
- CTA específico:
  - **Home**: "Pedir por WhatsApp" / "Ver carta" → `https://pocketo.ola.click/`
  - **Street**: "Ver ubicación" → Google Maps link a Cra. 37 #10-171, Cali (constrúyelo: `https://www.google.com/maps/search/?api=1&query=Cra.+37+%2310-171,+Cali`)
  - **Eventos**: "Cotizar para mi evento" → scroll suave al formulario
  - **Al Por Mayor**: "Cotizar al por mayor" → scroll suave al formulario

### 5.5 Sección "Por qué Pocketo" (social proof / valores)
3 puntos máximo. Posibles ángulos (escoge los 3 más fuertes):
- Sin conservantes, hecho artesanalmente
- Porciones individuales, listo para freezer
- Recetas caleñas tradicionales
- Listo en menos de 10 minutos

NO uses íconos genéricos de Lucide tipo "check / clock / heart". Si vas a usar íconos, que sean custom y simples (líneas finas, mismo grosor consistente). Mejor aún: usa números grandes (01, 02, 03) en tipografía editorial como ancla visual, sin íconos.

### 5.6 Formulario de cotización (Eventos + Al Por Mayor)
**Esta es la única sección con form. UN solo formulario que sirve para ambos casos.**

Campos:
- Nombre completo (requerido)
- Número de WhatsApp con código de país (requerido, default +57)
- Email (opcional)
- ¿Para qué necesitas cotización? (radio: "Evento privado" / "Distribución al por mayor")
- Cuéntanos más (textarea, requerido): para eventos pide fecha tentativa, número de personas, ubicación; para mayor pide tipo de negocio, volumen estimado mensual
- Botón: "Enviar solicitud"

Usa **Netlify Forms** (es gratis y no requiere backend). En el HTML del form:
```html
<form name="cotizacion" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="cotizacion" />
  <p class="hidden"><label>No llenar: <input name="bot-field" /></label></p>
  <!-- resto de campos -->
</form>
```

Después del submit, redirige a `/gracias` con un mensaje corto: "Recibido. Te escribimos por WhatsApp en menos de 24 horas."

Las notificaciones de submissions las configuraré después en Netlify dashboard (form notifications → email).

### 5.7 Footer
- Logo Pocketo
- Líneas de negocio (links a anchors de la misma página)
- Dirección Pocketo Street + horario
- WhatsApp (link directo a wa.me/57XXXXXXXX — déjalo como placeholder `+57 300 000 0000` y te lo cambio yo)
- Instagram: @pocketo.co (https://instagram.com/pocketo.co)
- **Links a `/privacy` y `/data-deletion`** (las páginas legales de abajo, son requisito de Meta)
- Copyright "© 2026 Pocketo. Hecho en Cali."

---

## 6. Páginas legales (requisito de Meta para aprobación de WhatsApp Business API)

Dos páginas adicionales, sencillas, con el mismo header/footer y tipografía consistente:

### `/privacy` — Política de Privacidad
Contenido base (ajusta el lenguaje, no es legal advice profesional, es para cumplir el requisito de Meta — al final menciona que para temas legales contactar al email de Pocketo):

```
Política de Privacidad — Pocketo

Última actualización: [fecha de hoy]

En Pocketo respetamos tu privacidad. Esta política explica qué información recolectamos cuando interactúas con nosotros por WhatsApp, nuestro sitio web, o nuestra tienda en línea, y cómo la usamos.

1. Información que recolectamos
- Nombre, número de WhatsApp, dirección de entrega y datos de contacto que nos compartes para procesar tu pedido o cotización.
- Mensajes que intercambias con nuestro chatbot o nuestro equipo en WhatsApp.
- Información básica de navegación en nuestro sitio web (cookies técnicas).

2. Cómo usamos tu información
- Para procesar y entregar tus pedidos.
- Para responder a tus solicitudes de cotización.
- Para enviarte información sobre tu pedido en curso por WhatsApp.
- Para mejorar nuestro servicio.

3. Con quién compartimos tu información
No vendemos ni alquilamos tu información personal. La compartimos únicamente con:
- Plataformas que usamos para operar (Meta/WhatsApp, OlaClick, servicios de domicilio).
- Autoridades cuando la ley lo exija.

4. Tus derechos
Puedes pedir acceso, corrección, o eliminación de tus datos personales escribiéndonos a hola@pocketo.store (o el email correcto, ajústalo).

5. Cambios a esta política
Podemos actualizar esta política. La fecha de última actualización aparece arriba.

6. Contacto
Para cualquier pregunta sobre esta política, escríbenos a hola@pocketo.store.
```

### `/data-deletion` — Política de Eliminación de Datos
```
Política de Eliminación de Datos — Pocketo

Si quieres que eliminemos los datos personales que tenemos asociados a tu número de WhatsApp o tus pedidos en Pocketo, sigue estos pasos:

1. Envíanos un mensaje a nuestro WhatsApp [+57 300 000 0000] con el texto: "Solicito eliminación de mis datos personales".
2. O escríbenos a hola@pocketo.store con el mismo mensaje y el número de WhatsApp con el que has interactuado con nosotros.
3. Procesaremos tu solicitud en un máximo de 30 días hábiles.

Qué eliminamos:
- Tu historial de conversaciones con nuestro chatbot
- Tu información de contacto (nombre, dirección, email)
- Tu historial de pedidos asociado

Qué podemos conservar (por obligaciones legales o fiscales):
- Registros de transacciones por el periodo que exija la ley colombiana (típicamente 5 años para soportes fiscales).

Si tienes preguntas, escríbenos a hola@pocketo.store.
```

Ambas páginas deben verse coherentes con la landing (misma tipografía, colores, header, footer), pero más sobrias: tipografía tipo blog, max-width estrecho (~640px), buena legibilidad, sin animaciones distractoras.

---

## 7. Requisitos técnicos

### Performance
- Lighthouse Performance >= 95 en mobile
- LCP < 2.0s
- Imágenes en formato AVIF/WebP con fallback, lazy load excepto el hero
- Fuentes con `font-display: swap`, subset latino si usas Google Fonts, máximo 2 familias

### SEO
- `<title>` y `<meta name="description">` por página, optimizados para "comida congelada Cali", "chuleta valluna domicilio Cali", "comida caleña a domicilio"
- Open Graph + Twitter cards con imagen del logo o del producto
- `sitemap.xml` (usa `@astrojs/sitemap`)
- `robots.txt` permitiendo todo, apuntando al sitemap
- JSON-LD `LocalBusiness` schema para Pocketo Street con la dirección, horarios, y `Restaurant` type
- HTML semántico (`<header>`, `<main>`, `<section>`, `<footer>`, `<h1>` único por página)
- Idioma `lang="es-CO"` en el `<html>`

### Accesibilidad
- Contraste WCAG AA en todo el copy
- Focus states visibles en todos los interactivos
- `aria-label` en links que solo tienen icon
- `<button>` para acciones, `<a>` para navegación
- Respeta `prefers-reduced-motion`: si está activo, desactiva todas las animaciones

### Animaciones (aplica las reglas de Emil's skill)
- Sutiles, no llamativas. Las usamos para guiar atención, no para alardear.
- Hero: fade-in + slide-up corto (12px → 0) del headline, subtext y CTAs, escalonado por 80ms. Duración 600ms, easing `[0.16, 1, 0.3, 1]` (out-expo style).
- Scroll reveal en secciones: fade + slide-up muy sutil (16px → 0) al entrar al viewport. Usa Motion `useInView` con margin negativo para anticipar.
- Hover en CTAs: scale 1.0 → 1.02 con transición 200ms, NO scale agresivo. Cambio sutil de color de fondo.
- Cards de productos: hover lift suave (translate-y -4px) + sombra apenas más marcada.
- NUNCA `window.addEventListener('scroll')`. Usa `useScroll` de Motion o IntersectionObserver.

### Vibe gastronomía / Colombia (Rappi/UberEats reference)
- Sí a fotografía editorial de comida bien fotografiada y bien cropeada
- Sí a tipografía expresiva en headlines (escoge una display font: *Instrument Serif*, *Fraunces*, *Editorial New (alternativa: PP Editorial)*, o algo similar con personalidad)
- Sí a microinteracciones cálidas (Motion suave, easings naturales)
- NO a íconos estilo "delivery app boilerplate" (motos, casquitos, relojitos)
- NO a gradients tipo "promo banner agresivo"
- NO a stickers/emojis decorativos
- SÍ a copy con sabor, NO a copy con jerga corporativa

---

## 8. Estructura del proyecto

```
pocketo-landing/
├── public/
│   ├── logo.png
│   ├── logo.svg (si existe)
│   ├── og-image.jpg
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── layouts/
│   │   └── Base.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Featured.astro
│   │   ├── About.astro
│   │   ├── Lines.astro (Home, Street, Eventos, Mayor)
│   │   ├── Why.astro
│   │   ├── ContactForm.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   ├── data-deletion.astro
│   │   └── gracias.astro
│   └── styles/
│       └── global.css (variables CSS + reset mínimo)
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── netlify.toml
└── README.md
```

`netlify.toml` con:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/menu"
  to = "https://pocketo.ola.click/products"
  status = 302

[[redirects]]
  from = "/pedir"
  to = "https://pocketo.ola.click/"
  status = 302
```

`README.md` con instrucciones cortas: cómo correr local, cómo deployar, dónde están los placeholders que tengo que reemplazar (teléfono, email, fotos).

---

## 9. Validación antes de deploy

Antes de hacer deploy, ejecuta y corrige hasta que pasen:

```bash
npm run build
npx serve dist
```

Y mentalmente corre el **pre-flight check de Taste Skill v2 (Section 14)**: revisa cada item de la ban list y confirma honestamente que no estás violando ninguno. Si encuentras una violación, arréglala antes de seguir.

Hazme un report rápido del Lighthouse local con `npx lighthouse http://localhost:3000 --view` (o el puerto que use serve) y comparte los scores.

---

## 10. Deploy a Netlify (gratis)

Después de que el build local pase:

```bash
# 1. Instalar Netlify CLI si no la tengo
npm install -g netlify-cli

# 2. Login (abre el navegador para autenticar)
netlify login

# 3. Inicializar el sitio (link a un nuevo site de mi cuenta)
netlify init
# Cuando pregunte: crear nuevo site, escoger nombre "pocketo-landing" (o pocketo-co, o lo que esté disponible)
# Build command: npm run build
# Publish directory: dist
# No conectar a GitHub por ahora (deploy manual)

# 4. Deploy a producción
netlify deploy --prod
```

Al terminar, dame:
1. La URL de Netlify (algo tipo `pocketo-landing.netlify.app`)
2. Un resumen de qué hiciste
3. La lista exacta de placeholders que tengo que reemplazar yo (teléfono WhatsApp, email, fotos de producto, precios)
4. Los pasos para conectar el dominio custom `pocketo.store` en Netlify (qué A record y CNAME debo poner en GoDaddy)
5. Cómo activar las notificaciones de Netlify Forms para que me lleguen las cotizaciones por email

---

## 11. Lo que NO quiero ver

- Em-dashes ni en-dashes en ninguna parte (—, –) — usa guiones simples
- "Experiencia única", "los mejores sabores", "calidad premium", "tradición y sabor" y cualquier cliché de copy gastronómico
- Stock photos genéricas de "happy family" o "chef sonriendo"
- Íconos de Lucide tipo check/star/heart como decoración
- Three-equal-card feature rows
- AI-purple gradients, mesh blobs decorativos
- Section eyebrows tipo "01 · SERVICIOS" o "// CAPABILITIES"
- Pills flotando sobre fotos
- "Scroll to explore" o flechitas de scroll
- Localization strips tipo "Cali · 25°C · 14:23"
- Decorative status dots verdes parpadeando
- Texto que diga "Lorem ipsum" en ningún lado del entregable final

---

Adelante. Empieza por instalar Astro y los skills, luego lee los SKILL.md, y construye de corrido. Cuando termines el deploy, dame el reporte final.
