

1. Análisis de Lighthouse

Performance: 86

First Contentful Paint: 0.9s - Valor positivo, la página responde rápidamente.

Largest Contentful Paint: 1.0s - Dentro del umbral óptimo (<2.5s).

Total Blocking Time: 280ms - Puede optimizarse.

Observaciones y mejoras sugeridas:

Enable text compression: Se puede ahorrar hasta 543 KiB aplicando GZIP o Brotli en el servidor para archivos JavaScript y JSON.

Eliminate render-blocking resources: Bloqueo de renderizado por CSS o scripts.

Reduce unused JavaScript y CSS: Se detecta código no utilizado (−197 KiB JS y −149 KiB CSS). Esto se debe en parte a librerías de Angular o estilos de terceros no usados.

Image elements do not have explicit width and height: Las imágenes deberían tener definidos los atributos width y height para evitar movimientos de layout.

Serve static assets with an efficient cache policy: Lighthouse detecta que 155 recursos estáticos podrían tener una política de caché más estricta.

Avoid long main-thread tasks: Hay 3 tareas que bloquean el hilo principal más de 50ms. Esto puede deberse a operaciones complejas de JS, estas podrían derivarse en Web Workers para no bloquear el hilo princiapl.

Avoid large layout shifts: Se encontró un movimiento de layout, probablemente por falta de width/height en imágenes como hemos mencionado.

Avoid chaining critical requests: 6 cadenas críticas detectadas. Se podría mejorar usando preload o reduciendo dependencias.


2. Configuración del Service Worker

La configuración del Service Worker ha seguido los principios fundamentales para el desarrollo de una PWA con Angular:

Precaching habilitado: Se ha configurado el ngsw-config.json para almacenar en caché estáticamente los archivos críticos como index.html, main.js, styles.css, assets/*, lo cual garantiza que la aplicación pueda cargarse sin conexión a internet. Se ha probado activando la casilla "Offline" en la pestaña "Application" en las herramientas de desarrollo.

Actualización de recursos: El service worker está preparado para comprobar cambios en segundo plano mediante el uso de updateMode: "prefetch", permitiendo así una actualización suave de la app.

Configuración de estrategias de caché: Se ha especificado una estrategia para dataGroups que permite cachear peticiones a la API de Pokémon con una política de expiración y de revalidación automática cada cierto tiempo siguiendo la teoría explicada.

Soporte de navegadores: La activación del Service Worker se restringe a entornos de producción, y se asegura compatibilidad con navegadores modernos que soportan la API de service workers.



Enlace repositorio: https://ivax7.github.io/pwa-poke-api/
Enlace web: https://ivax7.github.io/pwa-poke-api/

