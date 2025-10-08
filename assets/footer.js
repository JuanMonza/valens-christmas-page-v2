export function renderFooter() {
  return `
  <footer id="colophon" class="site-footer"
        style="background: #2D6A4F; color: #fff; padding: 60px 20px; text-align: center; position: relative;">
        <div
            style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; text-align: left;">

            <!-- Columna 1: Sobre Nosotros -->
            <div>
                <h3 style="color: var(--color-gold); margin-bottom: 15px;">Valent's Christmas</h3>
                <p style="color: #f1faee;">Llevando la magia de la Navidad a tu hogar con decoraciones únicas y de alta
                    calidad. Tu tienda de confianza para crear recuerdos inolvidables.</p>
            </div>

            <!-- Columna 2: Contacto -->
            <div>
                <h3 style="color: var(--color-gold); margin-bottom: 15px;">Información de Contacto</h3>
                <ul style="list-style: none; padding: 0; color: #f1faee;">
                    <li style="margin-bottom: 10px;"><strong>Dirección:</strong> Av. Principal, Ciudad Navidad, 12345
                    </li>
                    <li style="margin-bottom: 10px;"><strong>Teléfono:</strong> <a href="https://wa.me/573052290583" target="_blank" style="color:#fff;text-decoration:underline;">+57 305 2290583 (WhatsApp)</a></li>
                    <li style="margin-bottom: 10px;"><strong>Email:</strong> <a
                            href="mailto:casacontable@gmail.com"
                            style="color: #fff;">casacontable@gmail.com</a></li>
                </ul>
            </div>

            <!-- Columna 3: Redes Sociales -->
            <div>
                <h3 style="color: var(--color-gold); margin-bottom: 15px;">Síguenos</h3>
                <div class="footer-icons" style="display: flex; justify-content: flex-start; gap: 20px;">
                    <a href="https://facebook.com/" target="_blank" title="Facebook" style="display:inline-block;">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                            alt="Facebook"
                            style="width:36px;height:36px;filter: invert(1) drop-shadow(0 1px 4px #ff0000);">
                    </a>
                    <a href="https://instagram.com/" target="_blank" title="Instagram" style="display:inline-block;">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                            alt="Instagram"
                            style="width:36px;height:36px;filter: invert(1) drop-shadow(0 1px 4px #ff0000);">
                    </a>
                    <a href="https://youtube.com/" target="_blank" title="YouTube" style="display:inline-block;">
                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg" alt="YouTube"
                            style="width:36px;height:36px;filter: invert(1) drop-shadow(0 1px 4px #ff0000);">
                    </a>
                </div>
            </div>

        </div>
        <div class="site-info"
            style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2);">
            <p style="font-size: 0.9rem;">
                &copy; 2025 <strong>Valens Christmas</strong> | Todos los derechos reservados.<br>
                Desarrollado por <a href="https://github.com/JuanMonza" target="_blank" rel="noopener"
                    style="color: #fff; text-decoration: underline;">Juan Monsalve</a>
            </p>
        </div>
    </footer>
  `;
}
