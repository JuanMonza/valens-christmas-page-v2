export function renderFooter() {
  return `
  <footer id="colophon" class="site-footer">
        <div class="footer-content">

            <!-- Columna 1: Sobre Nosotros -->
            <div class="footer-column">
                <h3 class="footer-title">Valent's Christmas</h3>
                <p>Llevando la magia de la Navidad a tu hogar con decoraciones únicas y de alta
                    calidad. Tu tienda de confianza para crear recuerdos inolvidables.</p>
            </div>

            <!-- Columna 2: Contacto -->
            <div class="footer-column">
                <h3 class="footer-title">Información de Contacto</h3>
                <ul class="contact-list">
                    <li><strong>Dirección:</strong> Av. Principal, Ciudad Navidad, 12345</li>
                    <li><strong>Teléfono:</strong> <a href="https://wa.me/573052290583" target="_blank">+57 305 2290583 (WhatsApp)</a></li>
                    <li><strong>Email:</strong> <a href="mailto:casacontable@gmail.com">casacontable@gmail.com</a></li>
                </ul>
            </div>

            <!-- Columna 3: Redes Sociales -->
            <div class="footer-column footer-social">
                <h3 class="footer-title">Síguenos</h3>
                <div class="footer-icons">
                    <a href="https://facebook.com/" target="_blank" title="Facebook">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" class="social-icon-img" style="--shadow-color: #0033ff;">
                    </a>
                    <a href="https://instagram.com/valent.s_christmas/" target="_blank" title="Instagram">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" class="social-icon-img" style="--shadow-color: #f315dd;">
                    </a>
                    <a href="https://wa.me/34644717399" target="_blank" title="WhatsApp">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" class="social-icon-img" style="--shadow-color: #047200;">
                    </a>
                    <a href="https://youtube.com/" target="_blank" title="YouTube">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube" class="social-icon-img" style="--shadow-color: #ff0000;">
                    </a>
                </div>
            </div>
        </div>
        <div class="site-info">
            <p>
                &copy; 2025 <strong>Valent's Christmas</strong> | Todos los derechos reservados.<br>
                Desarrollado por <a href="https://github.com/JuanMonza" target="_blank" rel="noopener">Juan Monsalve</a> | Versión 2.5.3
            </p>
        </div>
    </footer>
    `;
}
