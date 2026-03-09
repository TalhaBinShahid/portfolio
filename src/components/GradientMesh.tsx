import { useEffect, useRef } from 'react';

export function GradientMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let scrollProgress = 0;

    const blobs = [
      { x: 0.2, y: 0.3, r: 0.35, hue: 187, sat: 100, light: 50, speed: 0.0003, phaseX: 0, phaseY: 0.5 },
      { x: 0.7, y: 0.2, r: 0.3, hue: 262, sat: 83, light: 58, speed: 0.0004, phaseX: 1.2, phaseY: 0 },
      { x: 0.5, y: 0.7, r: 0.4, hue: 220, sat: 70, light: 40, speed: 0.00025, phaseX: 2.5, phaseY: 1.8 },
      { x: 0.8, y: 0.8, r: 0.3, hue: 187, sat: 80, light: 45, speed: 0.00035, phaseX: 0.8, phaseY: 3.0 },
      { x: 0.15, y: 0.75, r: 0.25, hue: 280, sat: 60, light: 50, speed: 0.0005, phaseX: 3.5, phaseY: 1.2 },
    ];

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'hsl(240, 15%, 4%)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Scroll shifts hue by up to 120 degrees across the full page
      const hueShift = scrollProgress * 120;

      blobs.forEach((blob) => {
        const cx = (blob.x + Math.sin(time * blob.speed + blob.phaseX) * 0.15) * canvas.width;
        const cy = (blob.y + Math.cos(time * blob.speed * 0.8 + blob.phaseY) * 0.12) * canvas.height;
        const radius = blob.r * Math.max(canvas.width, canvas.height);

        const hue = (blob.hue + hueShift) % 360;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0, `hsla(${hue}, ${blob.sat}%, ${blob.light}%, 0.08)`);
        grad.addColorStop(0.4, `hsla(${hue}, ${blob.sat}%, ${blob.light}%, 0.04)`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
