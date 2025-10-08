document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('christmas-audio');

    if (!audio) {
        console.warn("Elemento de audio no encontrado en esta página.");
        return;
    }

    // Función para guardar el estado de la música
    function saveMusicState() {
        const musicState = {
            time: audio.currentTime,
            paused: audio.paused,
            muted: audio.muted
        };
        sessionStorage.setItem('musicState', JSON.stringify(musicState));
    }

    // Guardar estado antes de que la página se cierre o navegue
    window.addEventListener('beforeunload', saveMusicState);

    // Restaurar el estado de la música al cargar la página
    const savedStateJSON = sessionStorage.getItem('musicState');
    if (savedStateJSON) {
        const savedState = JSON.parse(savedStateJSON);
        
        // Aplicar el estado guardado
        audio.currentTime = savedState.time || 0;
        audio.muted = savedState.muted || false;

        // Si la música no estaba pausada, intentar reproducirla
        if (!savedState.paused) {
            audio.play().catch(e => {
                console.warn("La reproducción automática fue bloqueada por el navegador. Se requiere interacción del usuario.", e);
                // Si falla, nos aseguramos de que el estado refleje que está pausado
                audio.pause();
                saveMusicState(); 
            });
        }
    }

    // Asegurarse de que el estado se guarde si el usuario interactúa con el audio directamente
    audio.addEventListener('play', saveMusicState);
    audio.addEventListener('pause', saveMusicState);
    audio.addEventListener('volumechange', saveMusicState);
});
