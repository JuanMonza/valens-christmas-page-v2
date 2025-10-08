
// --- EFECTO NIEVE ---
window.addEventListener('DOMContentLoaded', function() {
	const canvas = document.getElementById('snow-canvas');
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	let W = window.innerWidth;
	let H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	window.addEventListener('resize', function() {
		W = window.innerWidth;
		H = window.innerHeight;
		canvas.width = W;
		canvas.height = H;
	});
	// Parámetros de copos
	const mp = 120; // cantidad de copos
	const flakes = [];
	for(let i=0;i<mp;i++){
		flakes.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: 2+Math.random()*4,
			d: Math.random()*mp,
		});
	}
	// Dibuja y actualiza
	function drawSnow() {
		ctx.clearRect(0,0,W,H);
		ctx.fillStyle = 'rgba(255,255,255,0.85)';
		ctx.beginPath();
		for(let i=0;i<mp;i++){
			const f = flakes[i];
			ctx.moveTo(f.x, f.y);
			ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
		}
		ctx.fill();
		updateSnow();
	}
	let angle = 0;
	function updateSnow() {
		angle += 0.01;
		for(let i=0;i<mp;i++){
			const f = flakes[i];
			f.y += Math.cos(angle+f.d)+1+f.r/2;
			f.x += Math.sin(angle)*2;
			// Si sale de pantalla, reinicia arriba
			if(f.x > W+5 || f.x < -5 || f.y > H){
				flakes[i] = {
					x: Math.random()*W,
					y: -10,
					r: f.r,
					d: f.d
				};
			}
		}
	}
	setInterval(drawSnow, 33);
});

