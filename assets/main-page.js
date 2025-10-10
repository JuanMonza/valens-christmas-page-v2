document.addEventListener('DOMContentLoaded', function () {

    // ================== CONTADOR REGRESIVO NAVIDEÑO ==================
    (function initChristmasCountdown() {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        const container = document.getElementById('countdown-timer');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !container) {
            console.warn("Elementos del contador no encontrados. El contador no se iniciará.");
            return;
        }

        function getTargetDate() {
            const now = new Date();
            const currentYear = now.getFullYear();
            let target = new Date(currentYear, 11, 25, 0, 0, 0, 0); // 25 Dic
            if (now > target) {
                target = new Date(currentYear + 1, 11, 25, 0, 0, 0, 0);
            }
            return target;
        }

        let targetDate = getTargetDate();
        let finished = false;

        function pad(n) { return n.toString().padStart(2, '0'); }

        function update() {
            if (finished) return;
            const now = new Date();
            let diff = targetDate - now;

            if (diff <= 0) {
                finished = true;
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                const msg = document.createElement('div');
                msg.textContent = '¡Feliz Navidad!';
                msg.className = 'countdown-finished-message'; // Asignamos una clase
                msg.setAttribute('role', 'status');
                container.appendChild(msg);
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const sec = Math.floor((diff % (1000 * 60)) / 1000);

            daysEl.textContent = pad(days);
            hoursEl.textContent = pad(hrs);
            minutesEl.textContent = pad(min);
            secondsEl.textContent = pad(sec);
        }
        update();
        setInterval(update, 1000);
    })();

    // ================== CONTROL DE MÚSICA NAVIDEÑA ==================
    (function initChristmasMusic() {
        try {
            const audio = document.getElementById('christmas-audio');
            const btn = document.getElementById('play-music');
            const muteBtn = document.getElementById('mute-music');
            const iconPlay = document.getElementById('icon-play');
            const iconPause = document.getElementById('icon-pause');
            const iconMute = document.getElementById('icon-mute');
            const iconUnmute = document.getElementById('icon-unmute');

            if (!audio || !btn || !muteBtn || !iconPlay || !iconPause || !iconMute || !iconUnmute) {
                 console.warn("Elementos del reproductor de música no encontrados en la página principal.");
                return;
            }
            
            function updatePlayIcon() {
                iconPlay.style.display = audio.paused ? 'block' : 'none';
                iconPause.style.display = audio.paused ? 'none' : 'block';
            }

            function updateMuteIcon() {
                iconMute.style.display = audio.muted ? 'block' : 'none';
                iconUnmute.style.display = audio.muted ? 'none' : 'block';
            }

            btn.addEventListener('click', function () {
                if (audio.paused) {
                    audio.play().catch(e => console.error("Error al reproducir audio:", e));
                } else {
                    audio.pause();
                }
            });

            muteBtn.addEventListener('click', function () {
                audio.muted = !audio.muted;
            });

            audio.addEventListener('play', updatePlayIcon);
            audio.addEventListener('pause', updatePlayIcon);
            audio.addEventListener('volumechange', updateMuteIcon);
            
            // Actualizar iconos al cargar la página por si el estado viene de music-persistence.js
            updatePlayIcon();
            updateMuteIcon();

        } catch (e) {
            console.error('Error al inicializar el reproductor de música:', e);
        }
    })();

    // ================== INICIALIZAR CARRUSELES (SWIPER) ==================
    (function initSwipers() {
        if (typeof Swiper === 'undefined') {
            console.warn('Swiper library not loaded.');
            return;
        }

        const commonConfig = {
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 800,
            loop: true,
            autoplay: { 
                delay: 2500, 
                disableOnInteraction: false 
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            }
        };

        // Si tienes sliders en tu index.html, inicialízalos aquí.
        // new Swiper('#productos-swiper', commonConfig);
        // new Swiper('#categorias-swiper', commonConfig);
    })();

    // ================== LIGHTBOX PARA IMÁGENES DE SECCIÓN ==================
    (function initLightbox() {
        const lightboxOverlay = document.getElementById('lightbox-overlay');
        const lightboxImage = document.querySelector('.lightbox-image');
        const lightboxClose = document.querySelector('.lightbox-close');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

        if (!lightboxOverlay || !lightboxImage || !lightboxClose || !lightboxTriggers.length) {
            console.warn("Elementos del lightbox no encontrados. El lightbox no se iniciará.");
            return;
        }

        lightboxTriggers.forEach(trigger => {
            trigger.addEventListener('click', function (e) {
                e.preventDefault(); // Evita cualquier acción por defecto si la imagen estuviera dentro de un enlace
                lightboxImage.src = this.src;
                lightboxImage.alt = this.alt;
                lightboxCaption.textContent = this.alt; // Usa el alt como caption
                lightboxOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Evita el scroll del body
            });
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxOverlay.addEventListener('click', function (e) {
            if (e.target === lightboxOverlay) { // Cierra solo si se hace clic en el overlay, no en la imagen
                closeLightbox();
            }
        });
        function closeLightbox() {
            lightboxOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restaura el scroll del body
        }
    })();
});