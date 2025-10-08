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
      bar.style.background = '#E63946';
      bar.style.borderRadius = '2px';
      bar.style.transition = 'all .4s';
      bar.style.top = (i*9)+'px';
    });
    menuToggle.addEventListener('click', function() {
      mainMenu.classList.toggle('open');
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !expanded);
      if(mainMenu.classList.contains('open')){
        mainMenu.style.display = 'flex';
        // Animación hamburguesa abierta
        hamburger.children[0].style.transform = 'translateY(9px) rotate(45deg)';
        hamburger.children[1].style.opacity = '0';
        hamburger.children[2].style.transform = 'translateY(-9px) rotate(-45deg)';
      } else {
        mainMenu.style.display = '';
        hamburger.children[0].style.transform = '';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = '';
      }
    });
    // Responsive: ocultar menú en móvil
    function checkMenu(){
      if(window.innerWidth <= 900){
        mainMenu.style.display = 'none';
      }else{
        mainMenu.style.display = 'flex';
        mainMenu.classList.remove('open');
        hamburger.children[0].style.transform = '';
        hamburger.children[1].style.opacity = '1';
        hamburger.children[2].style.transform = '';
      }
    }
    window.addEventListener('resize', checkMenu);
    checkMenu();
    // Cerrar menú hamburguesa al hacer clic en una opción
    var menuLinks = mainMenu.querySelectorAll('a');
    menuLinks.forEach(function(link){
      link.addEventListener('click', function(){
        if(window.innerWidth <= 900){
          mainMenu.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', false);
          menuToggle.disabled = true;
          mainMenu.style.display = 'none';
          hamburger.children[0].style.transform = '';
          hamburger.children[1].style.opacity = '1';
          hamburger.children[2].style.transform = '';
          setTimeout(function(){ menuToggle.disabled = false; }, 700);
        }
      });
    });
    // Hover efecto en links con CSS. Este código ya no es necesario.
    /*
    menuLinks.forEach(function(link){
      link.addEventListener('mouseenter',function(){
        link.style.background = '#E63946';
        link.style.color = '#fff';
        link.style.textDecoration = 'underline';
      });
      link.addEventListener('mouseleave',function(){
        link.style.background = '';
        link.style.color = '#2D6A4F';
        link.style.textDecoration = 'none';
      });
    });
    */
  });
}

