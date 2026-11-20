# Mar Flower Truck (marflowertruck.com) — Estado del proyecto
_Última actualización: 20/11/2026_

- Repo GitHub `shucleleon-spec/marflowertruck` (rama `main`). Se publica solo con cada push (worker `marflowertruck`, solo archivos, sin servidor). Ya no está en GitHub Pages.
- PC: `C:\Users\Clement\Documents\web marflower\` (actualizada el 20/11/2026 con el rediseño).
- **Diseño actual** (rediseño aprobado): verde menta con toldo del truck, letra Bricolage Grotesque, foto en arco. Archivos: `index.html`, `style.css`, `app.js`, imágenes en `img/`. `/nuevo` redirige a `/`.
- Idiomas: español, inglés y portugués (se guarda en `localStorage` `mft-lang`).
- Tienda: enlaces a Square (`mar-flower-truck.square.site`); pedidos por WhatsApp.
- Firma "Diseñado por LDX" con el logo en el pie (con espacio para que el botón de WhatsApp no la tape).
- **Seguridad (20/11/2026):** `_headers` con CSP, HSTS y anti-iframe. Si se agrega un servicio externo nuevo, hay que permitirlo en la CSP.

## Reglas del dueño (aplican a todas las webs de LDX)
- Hablarle en español sencillo. Siempre "sin romper nada": probar en local y revisar en vivo antes y después de publicar.
- Las claves (secrets) las pone el dueño con `npx wrangler secret put …` en su CMD. Nunca pedirlas ni escribirlas en el chat o en archivos.
- Cuentas de negocio: leondigitalexperience@gmail.com. Pagos: solo Stripe.
- No pulsar "Comenzar gratis" (Google Cloud) ni "Upgrade" (Workers). Todo debe quedar dentro del plan gratis.
- Firma "Diseñado por LDX" solo con permiso del dueño del negocio, y con el logo de LDX.
- GitHub (rama `main`) es la versión buena. La carpeta de la PC (`C:\Users\Clement\Documents\web …`) es una copia: al cambiar algo, copiarlo también allí.
- Nada de bloquear clic derecho, F12 o arrastrar imágenes: no protege nada y molesta (se quitó de todas el 20/11/2026).

## Seguridad común (revisada el 20/11/2026 con una prueba de ataque)
- Dominio en Cloudflare: HTTPS siempre, TLS mínimo 1.2, HSTS, bloqueo de bots (Bot Fight Mode), DMARC.
- Paneles: solo contraseña (sin usuario), verificación anti-robots Turnstile, sesión firmada que vence sola, bloqueo por intentos fallidos.
- Las direcciones técnicas `*.workers.dev` de las webs están apagadas (solo responden en su dominio).
- Resultado del ataque: no se pudo entrar a paneles, ver datos, falsificar pagos ni inyectar código. Riesgo aceptado: alguien muy insistente que resuelva Turnstile a mano podría ocupar horarios con citas falsas (hay límites por IP y por persona).
