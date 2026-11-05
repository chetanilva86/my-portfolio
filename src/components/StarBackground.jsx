import { useRef, useEffect } from "react";

const STAR_COLORS = [
  "rgba(255, 255, 255, ",  // Pure white
  "rgba(224, 238, 255, ",  // Ice blue
  "rgba(255, 244, 214, ",  // Warm yellow
  "rgba(255, 222, 200, ",  // Soft orange
  "rgba(235, 245, 255, ",  // Light blue
];

function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let stars = [];
    let shootingStars = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateStars();
    }

    function generateStars() {
      const count = 250;
      stars = Array.from({ length: count }, () => {
        // 85% tiny background stars, 15% larger foreground stars
        const size = Math.random() < 0.85
          ? Math.random() * 0.7 + 0.3
          : Math.random() * 1.0 + 1.0;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          opacity: Math.random() * 0.6 + 0.4,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          twinkleDelay: Math.random() * 5000,
          twinkleDuration: Math.random() * 3000 + 2000,
        };
      });
    }

    const startTime = Date.now();

    function draw() {
      const currentTime = Date.now() - startTime;

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        const cycleTime = (currentTime + star.twinkleDelay) % star.twinkleDuration;
        const twinkleProgress = cycleTime / star.twinkleDuration;
        const amplitude = star.size > 1.0 ? 0.5 : 0.15;
        const twinkle = Math.sin(twinkleProgress * Math.PI * 2) * amplitude + (1 - amplitude);

        ctx.fillStyle = `${star.color}${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Spawn shooting stars
      if (shootingStars.length < 2 && Math.random() < 0.0015) {
        const angle = Math.PI / 6 + Math.random() * (Math.PI / 12);
        shootingStars.push({
          x: Math.random() * canvas.width * 0.8,
          y: Math.random() * canvas.height * 0.5,
          dx: Math.cos(angle),
          dy: Math.sin(angle),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          opacity: 1.0,
          decay: Math.random() * 0.015 + 0.01,
        });
      }

      // Draw shooting stars
      shootingStars.forEach((s) => {
        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - s.dx * s.length,
          s.y - s.dy * s.length
        );
        grad.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.dx * s.length, s.y - s.dy * s.length);
        ctx.stroke();

        s.x += s.dx * s.speed;
        s.y += s.dy * s.speed;
        s.opacity -= s.decay;
      });

      shootingStars = shootingStars.filter((s) => s.opacity > 0);
      animationId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

export default StarBackground;