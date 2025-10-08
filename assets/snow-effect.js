document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('snow-canvas');
    if (!canvas) {
        // Si el canvas no existe en la página, crearlo dinámicamente
        const newCanvas = document.createElement('canvas');
        newCanvas.id = 'snow-canvas';
        newCanvas.style.position = 'fixed';
        newCanvas.style.top = '0';
        newCanvas.style.left = '0';
        newCanvas.style.width = '100vw';
        newCanvas.style.height = '100vh';
        newCanvas.style.pointerEvents = 'none';
        newCanvas.style.zIndex = '99999';
        newCanvas.style.opacity = '0.7';
        document.body.insertBefore(newCanvas, document.body.firstChild);
        initSnow(newCanvas);
    } else {
        initSnow(canvas);
    }

    function initSnow(canvasElement) {
        const ctx = canvasElement.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvasElement.width = width;
        canvasElement.height = height;

        const numFlakes = 100;
        const flakes = [];

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        for (let i = 0; i < numFlakes; i++) {
            flakes.push({
                x: random(0, width),
                y: random(0, height),
                radius: random(1, 3.5),
                speed: random(1, 3),
                opacity: random(0.5, 1)
            });
        }

        function drawFlakes() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = `rgba(255, 255, 255, ${flakes[0].opacity})`;
            ctx.beginPath();
            for (let i = 0; i < numFlakes; i++) {
                const flake = flakes[i];
                ctx.moveTo(flake.x, flake.y);
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
            }
            ctx.fill();
            moveFlakes();
        }

        function moveFlakes() {
            for (let i = 0; i < numFlakes; i++) {
                const flake = flakes[i];
                flake.y += flake.speed;
                if (flake.y > height) {
                    flake.x = random(0, width);
                    flake.y = -5;
                }
            }
        }

        setInterval(drawFlakes, 30);

        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvasElement.width = width;
            canvasElement.height = height;
        });
    }
});
