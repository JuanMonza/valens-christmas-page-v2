# Valens Christmas - Sitio Web de Decoración Navideña

Este es el repositorio del sitio web para "Valens Christmas", una página de presentación y catálogo diseñada para mostrar colecciones, tendencias y productos de decoración navideña. El sitio está construido con HTML, CSS y JavaScript puro, enfocado en crear una experiencia de usuario inmersiva y festiva.

## ✨ Características Principales

*   **Diseño Totalmente Responsivo:** Adaptado para una visualización óptima en dispositivos de escritorio, tabletas y móviles.
*   **Navegación de Página Única (Single-Page):** El menú principal dirige a diferentes secciones dentro de la página de inicio (`index.html`) para una navegación fluida y sin recargas.
*   **Música de Fondo Persistente:** La música navideña mantiene su estado (reproduciendo/pausado, tiempo actual, silencio) al navegar entre las diferentes páginas gracias al uso de `sessionStorage`.
*   **Efecto de Nieve Animado:** Un `canvas` de JavaScript genera una animación de nieve cayendo constantemente en todo el sitio para mejorar la atmósfera.
*   **Menú Móvil Circular Animado:** Un menú hamburguesa moderno que se despliega con una animación de círculo expansivo y muestra los enlaces con un efecto de cascada.
*   **Contador Regresivo para Navidad:** Un contador en tiempo real que muestra los días, horas, minutos y segundos que faltan para el 25 de diciembre.
*   **Lightbox para Imágenes:** Al hacer clic en las imágenes de las secciones principales, estas se abren en una vista de pantalla completa (modal/lightbox).
*   **Componentes Modulares con JS:** El `navbar` y el `footer` se generan dinámicamente usando módulos de JavaScript (`navbar.js`, `footer.js`), lo que facilita su mantenimiento en todo el sitio.
*   **Integración de Redes Sociales:** Incluye una sección para mostrar publicaciones de Instagram y enlaces a perfiles sociales.
*   **Página Especial de "Calculadora Mágica":** Una herramienta interactiva (`calculadora.html`) para que los usuarios calculen la cantidad de adornos que necesitan para su árbol.

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera para mantener el código limpio y escalable.

```
Valents-Christmas/
├── assets/
│   ├── styles.css            # Hoja de estilos principal
│   ├── navbar.js             # Módulo para generar la barra de navegación
│   ├── footer.js             # Módulo para generar el pie de página
│   ├── main-page.js          # Lógica de la página de inicio (contador, lightbox)
│   ├── music-persistence.js  # Script para la persistencia de la música
│   └── snow-effect.js        # Script para la animación de nieve
│
├── medios/
│   ├── logo valents.PNG      # Logo principal
│   ├── video.mp4             # Video de fondo
│   ├── audio.mp3             # Archivo de música
│   └── ...                   # Resto de imágenes y recursos
│
├── index.html                # Página principal y de aterrizaje
├── calculadora.html          # Página de la calculadora de adornos
├── colecciones.html          # Página de muestra para colecciones
├── tendencias.html           # Página de muestra para tendencias
├── inspiracion.html          # Página de muestra para inspiración
├── encuentranos.html         # Página de muestra para contacto
└── README.md                 # Este archivo
```

## ⚙️ ¿Cómo Funciona?

### 1. Renderizado de Componentes

Las páginas HTML (como `index.html`, `calculadora.html`, etc.) no contienen el código del `navbar` o `footer` directamente. En su lugar, tienen contenedores vacíos (`<div id="navbar"></div>`).

Un script de tipo `module` importa las funciones `renderNavbar()` y `renderFooter()` desde sus respectivos archivos JS y las usa para inyectar el HTML en estos contenedores. Esto asegura que si se necesita un cambio en el menú, solo se modifica `assets/navbar.js` y el cambio se refleja en todo el sitio.

```html
<script type="module">
    import { renderNavbar, navbarScript } from './assets/navbar.js';
    import { renderFooter } from './assets/footer.js';
    document.getElementById('navbar').innerHTML = renderNavbar();
    document.getElementById('footer').innerHTML = renderFooter();
    navbarScript(); // Inicializa la lógica del menú (ej. el botón hamburguesa)
</script>
```

### 2. Persistencia de la Música

El archivo `assets/music-persistence.js` utiliza `sessionStorage` del navegador para guardar el estado del reproductor de audio (`<audio>`).

*   **`beforeunload`:** Antes de que el usuario abandone una página, el script guarda el `currentTime`, si está pausado (`paused`) y si está silenciado (`muted`).
*   **`DOMContentLoaded`:** Al cargar una nueva página, el script busca estos datos en `sessionStorage` y los aplica al elemento de audio de la nueva página, creando una experiencia auditiva continua.

### 3. Navegación por Anclas

El menú principal en `navbar.js` está configurado para que sus enlaces apunten a IDs de secciones dentro de `index.html`.

*   `href="index.html#productos-destacados"`

Esto permite que, sin importar en qué página se encuentre el usuario, al hacer clic en un enlace del menú, siempre será redirigido a la sección correspondiente de la página de inicio.

## 🚀 Cómo Ejecutar Localmente

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/valents-christmas.git
    ```
2.  **Navegar a la carpeta:**
    ```bash
    cd valents-christmas
    ```
3.  **Abrir en el navegador:**
    *   La forma más sencilla es abrir el archivo `index.html` directamente en tu navegador.
    *   **Recomendado:** Para asegurar que los módulos de JavaScript (`import`/`export`) funcionen correctamente sin errores de CORS, es mejor usar un servidor local. Si usas Visual Studio Code, puedes instalar la extensión **"Live Server"** y hacer clic en "Go Live" en la esquina inferior derecha.

## 🎨 Personalización

*   **Menú:** Para cambiar los elementos del menú, edita los `<li>` dentro de la función `renderNavbar()` en `assets/navbar.js`.
*   **Colores y Fuentes:** Los colores principales, fuentes y estilos generales se pueden modificar en la parte superior de `assets/styles.css`.
*   **Imágenes y Contenido:** Reemplaza las imágenes en la carpeta `medios/` y actualiza las rutas y textos directamente en los archivos `.html` correspondientes.
*   **Fecha del Contador:** La fecha objetivo del contador se puede cambiar en `assets/main-page.js` dentro de la función `getTargetDate()`.