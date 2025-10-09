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
    var menuToggle = document.getElementById('menu-toggle');
    var mainMenu = document.getElementById('primary-menu');
    var hamburger = menuToggle.querySelector('.hamburger');
    
    // Animación hamburguesa
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    hamburger.style.display = 'inline-block';
    hamburger.style.width = '28px';
    hamburger.style.height = '22px';
    hamburger.style.position = 'relative';
    Array.from(hamburger.children).forEach(function(bar,i){
      bar.style.position = 'absolute';
      bar.style.left = '0';
      bar.style.width = '100%';
      bar.style.height = '4px';
      bar.style.background = '#fff'; // Color blanco para contraste
      bar.style.borderRadius = '2px';
      bar.style.transition = 'all .4s';
      bar.style.top = (i*9)+'px';
    });

    menuToggle.addEventListener('click', function() {
      const isOpen = mainMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      
      if (isOpen) {
        // Animación hamburguesa abierta
        hamburger.children[0].style.transform = 'translateY(9px) rotate(45deg)';
        hamburger.children[1].style.opacity = '0';
        hamburger.children[2].style.transform = 'translateY(-9px) rotate(-45deg)';
      } else {
        // Animación hamburguesa cerrada
        hamburger.children[0].style.transform = '';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = '';
      }
    });

    // Gestionar visibilidad al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
      if (window.innerWidth > 900) {
        mainMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        hamburger.children[0].style.transform = '';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = '';
      }
    });

    // Cerrar menú al hacer clic en un enlace
    var menuLinks = mainMenu.querySelectorAll('a');
    menuLinks.forEach(function(link){
      link.addEventListener('click', function(){
        if(window.innerWidth <= 900){
          mainMenu.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          hamburger.children[0].style.transform = '';
          hamburger.children[1].style.opacity = '1';
          hamburger.children[2].style.transform = '';
        }
      });
    });

    // Lógica para la cabecera de la página de inicio
    if (document.body.classList.contains('home')) {
      const header = document.getElementById('masthead');
      
      // Asignar clase 'home' al header para estilos específicos
      header.classList.add('home');

      // Cambiar el fondo del header al hacer scroll
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }, false);
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

