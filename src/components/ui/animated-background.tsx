import { useEffect, useRef } from 'react';

const AnimatedBackground = ({ fullScreen = true }: { fullScreen?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  const columnsRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let resizeObserver: ResizeObserver | null = null;

    const setupSize = () => {
      const dpr = window.devicePixelRatio || 1;

      if (fullScreen) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        canvas.width = Math.max(1, Math.floor(w * dpr));
        canvas.height = Math.max(1, Math.floor(h * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      } else {
        const parent = canvas.parentElement;
        if (parent) {
          const rect = parent.getBoundingClientRect();
          const w = Math.max(1, Math.floor(rect.width));
          const h = Math.max(1, Math.floor(rect.height));
          canvas.style.width = `${w}px`;
          canvas.style.height = `${h}px`;
          canvas.width = Math.max(1, Math.floor(w * dpr));
          canvas.height = Math.max(1, Math.floor(h * dpr));
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
      }

      // recompute columns and drops based on visual (CSS) width
      const cssWidth = parseInt(canvas.style.width || '0', 10) || canvas.clientWidth;
      const cols = Math.max(1, Math.floor(cssWidth / 20));
      columnsRef.current = cols;
      dropsRef.current = new Array(cols).fill(1);
    };

    setupSize();

    if (fullScreen) {
      window.addEventListener('resize', setupSize);
    } else {
      // Observe parent size changes for layout-driven resizes
      const parent = canvas.parentElement;
      if (parent && typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          setupSize();
        });
        resizeObserver.observe(parent);
      } else {
        window.addEventListener('resize', setupSize);
      }
    }

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    const draw = () => {
      // fade background lightly (use larger alpha for visibility when scoped)
      ctx.fillStyle = fullScreen ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.1)';
      // Use device pixel sizes already set in canvas.width/height where ctx is scaled
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = '15px monospace';

      const drops = dropsRef.current;
      const cols = columnsRef.current;

      for (let i = 0; i < cols; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.clientHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (fullScreen) {
        window.removeEventListener('resize', setupSize);
      } else {
        if (resizeObserver && canvas.parentElement) {
          resizeObserver.unobserve(canvas.parentElement);
        } else {
          window.removeEventListener('resize', setupSize);
        }
      }
      cancelAnimationFrame(animationId);
    };
  }, [fullScreen]);

  const className = fullScreen
    ? 'fixed inset-0 w-full h-full -z-10 opacity-10 pointer-events-none block'
    : 'absolute inset-0 w-full h-full -z-10 opacity-60 pointer-events-none block';

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ background: 'transparent', display: 'block', pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;