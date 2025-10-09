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
          <button id="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="primary-menu" class="menu-toggle">
            <span class="hamburger"></span>
          </button>
          <ul id="primary-menu" class="main-menu" role="menubar">
            <li role="none"><a role="menuitem" href="index.html">Inicio</a></li>
            <li role="none"><a role="menuitem" href="tendencias.html">Tendencias</a></li>
            <li role="none"><a role="menuitem" href="colecciones.html">Colecciones</a></li>
            <li role="none"><a role="menuitem" href="inspiracion.html">Inspiración</a></li>
            <li role="none"><a role="menuitem" href="calculadora.html">Calculadora</a></li>
            <li role="none"><a role="menuitem" href="encuentranos.html">Encuéntranos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

export function navbarScript() {

  // Ejemplo:
  // <div id="navbar-container"></div>
  // <script src="assets/navbar.js"></script>
  // <script>
  //   document.getElementById('navbar-container').innerHTML = renderNavbar();
  //   navbarScript();
  // </script>

  // Navbar hamburguesa y efectos visuales
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('primary-menu');

    if (menuToggle && mainMenu) {
      // Función para gestionar el menú móvil
      const handleMobileMenu = () => {
        // Nos aseguramos de que el menú tenga la clase 'mobile' para las animaciones
        mainMenu.classList.add('mobile');

        // Alternamos la clase 'active' en el botón para la animación (X)
        menuToggle.classList.toggle('active');
        // Alternamos la clase 'open' en el menú para mostrarlo/ocultarlo
        mainMenu.classList.toggle('open');
        
        // Evitamos que se pueda hacer scroll en el body cuando el menú está abierto
        document.body.style.overflow = mainMenu.classList.contains('open') ? 'hidden' : '';
      };

      // Asignamos el evento al botón
      menuToggle.addEventListener('click', handleMobileMenu);
    }

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
