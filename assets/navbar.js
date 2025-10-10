// navbar.js
export function renderNavbar() {
  return `
    <header id="masthead" class="site-header">
      <div class="header-content">
        <div class="site-branding">
          <a href="index.html" class="custom-logo-link" rel="home" aria-label="Ir al inicio">
            <img src="medios/logo valents.PNG" alt="Valens Christmas" class="custom-logo">
          </a>
        </div>
        <nav id="site-navigation" class="main-navigation" aria-label="Menú principal">
          <!-- Menú para Escritorio -->
          <ul class="main-menu">
            <li><a href="index.html#inicio">Inicio</a></li>
            <li><a href="index.html#categorias">Tendencias</a></li>
            <li><a href="index.html#magia">Colecciones</a></li>
            <li><a href="index.html#productos-destacados">Inspiración</a></li>
            <li><a href="index.html#sobre-nosotros">Calculadora</a></li>
            <li><a href="index.html#encuentranos-comercializa">Encuéntranos</a></li>
          </ul>
          <!-- Menú para Móvil -->
          <div id="menu">
            <div id="menu-bar" onclick="menuOnClick()">
              <div id="bar1" class="bar"></div>
              <div id="bar2" class="bar"></div>
              <div id="bar3" class="bar"></div>
            </div>
            <ul class="nav" id="nav">
              <li><a href="index.html#inicio"><i class="fas fa-sleigh"></i> Inicio</a></li>
              <li><a href="index.html#categorias"><i class="fas fa-star"></i> Tendencias</a></li>
              <li><a href="index.html#magia"><i class="fas fa-gifts"></i> Colecciones</a></li>
              <li><a href="index.html#productos-destacados"><i class="fas fa-lightbulb"></i> Inspiración</a></li>
              <li><a href="index.html#sobre-nosotros"><i class="fas fa-building"></i> Nuestra Empresa</a></li>
              <li><a href="index.html#encuentranos-comercializa"><i class="fas fa-map-marker-alt"></i> Encuéntranos</a></li>
            </ul>
          </div>
          <div class="menu-bg" id="menu-bg"></div>
        </nav>
      </div>
    </header>
  `;
}

export function navbarScript() {

  // Hacemos la función global para que el `onclick` funcione
  window.menuOnClick = function() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  // Ejemplo:
  // <div id="navbar-container"></div>
  // <script src="assets/navbar.js"></script>
  // <script>
  //   document.getElementById('navbar-container').innerHTML = renderNavbar();
  //   navbarScript();
  // </script>

  // Navbar hamburguesa y efectos visuales
  document.addEventListener('DOMContentLoaded', function() {
    // Lógica para la cabecera de la página de inicio (solo scroll, sin ocultar)
    if (document.body.classList.contains('home')) {
      const header = document.getElementById('masthead');
      if(header) {
        header.classList.add('home');
        window.addEventListener('scroll', function() {
          if (window.pageYOffset > 50) {
            header.classList.add('header-scrolled');
          } else {
            header.classList.remove('header-scrolled');
          }
        }, false);
      }
    }
  });
}

// Lógica para el navbar que aparece y desaparece al hacer scroll
export function stickyNavScript() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScrollTop = 0;
    const delta = 5; // Pequeño margen para evitar activaciones erráticas
    const navbarHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        const st = window.scrollY;

        // Asegurarse de que el scroll sea mayor que la altura del navbar
        if (Math.abs(lastScrollTop - st) <= delta) return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll hacia abajo -> Ocultar navbar
            header.classList.add('header-hidden');
        } else {
            // Scroll hacia arriba -> Mostrar navbar
            if (st + window.innerHeight < document.documentElement.scrollHeight) {
                header.classList.remove('header-hidden');
            }
        }

        lastScrollTop = st;
    });
}
