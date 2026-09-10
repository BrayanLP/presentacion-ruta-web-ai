import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isActive: boolean;
}

interface Point {
  x: number;
  y: number;
  time: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export const LaserPointer: React.FC<Props> = ({ isActive }) => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const lastPosRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  const isMovingRef = useRef<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Resize canvas to match window
  useEffect(() => {
    if (!isActive || !mounted) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isActive, mounted]);

  // Track mouse movement and animate trailing laser tail
  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();

      setPos({ x, y });

      // Add to trail
      pointsRef.current.push({ x, y, time: now });

      // Calculate speed
      const dx = x - lastPosRef.current.x;
      const dy = y - lastPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Emit elegant luminous embers on fast movement
      if (dist > 8 && particlesRef.current.length < 35) {
        const count = Math.min(3, Math.floor(dist / 12));
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 1.5 + 0.5;
          particlesRef.current.push({
            x: x + (Math.random() - 0.5) * 6,
            y: y + (Math.random() - 0.5) * 6,
            vx: Math.cos(angle) * speed - dx * 0.05,
            vy: Math.sin(angle) * speed - dy * 0.05,
            size: Math.random() * 2 + 1.2,
            alpha: 0.9,
            life: 0,
            maxLife: Math.random() * 18 + 14,
          });
        }
      }

      lastPosRef.current = { x, y };
      isMovingRef.current = true;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Render loop for the ribbon tail & sparks
    const render = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

          const now = performance.now();
          const trailLifetime = 280; // duration in ms for tail to dissipate

          // Filter out expired points
          pointsRef.current = pointsRef.current.filter((p) => now - p.time < trailLifetime);
          const pts = pointsRef.current;

          if (pts.length > 2) {
            // 1. Draw outer neon glow ribbon
            ctx.save();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (let i = 0; i < pts.length - 1; i++) {
              const p0 = pts[i];
              const p1 = pts[i + 1];
              const age = (now - p0.time) / trailLifetime; // 0 (new) to 1 (old)
              const progress = i / (pts.length - 1); // 0 (tail tip) to 1 (head)
              const alpha = Math.max(0, (1 - age) * progress);

              if (alpha <= 0.01) continue;

              // Outer diffuse aura
              ctx.beginPath();
              ctx.moveTo(p0.x, p0.y);
              ctx.lineTo(p1.x, p1.y);
              ctx.lineWidth = Math.max(1, progress * 14);
              ctx.strokeStyle = `rgba(255, 0, 77, ${alpha * 0.28})`;
              ctx.shadowColor = '#ff0044';
              ctx.shadowBlur = 12;
              ctx.stroke();

              // Vivid Neon Core Beam
              ctx.beginPath();
              ctx.moveTo(p0.x, p0.y);
              ctx.lineTo(p1.x, p1.y);
              ctx.lineWidth = Math.max(0.8, progress * 6);
              ctx.strokeStyle = `rgba(255, 20, 60, ${alpha * 0.85})`;
              ctx.shadowColor = '#ff2a6d';
              ctx.shadowBlur = 8;
              ctx.stroke();

              // White-Hot Filament Center
              ctx.beginPath();
              ctx.moveTo(p0.x, p0.y);
              ctx.lineTo(p1.x, p1.y);
              ctx.lineWidth = Math.max(0.4, progress * 2.2);
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
              ctx.shadowBlur = 3;
              ctx.shadowColor = '#ffffff';
              ctx.stroke();
            }
            ctx.restore();
          }

          // 2. Render micro embers / plasma particles
          if (particlesRef.current.length > 0) {
            ctx.save();
            particlesRef.current.forEach((part) => {
              part.x += part.vx;
              part.y += part.vy;
              part.life++;
              const lifeRatio = part.life / part.maxLife;
              const alpha = Math.max(0, part.alpha * (1 - lifeRatio));

              ctx.beginPath();
              ctx.arc(part.x, part.y, part.size * (1 - lifeRatio * 0.5), 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, ${Math.floor(180 * (1 - lifeRatio))}, 100, ${alpha})`;
              ctx.shadowColor = '#ff0055';
              ctx.shadowBlur = 6;
              ctx.fill();
            });

            particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife);
            ctx.restore();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isActive]);

  if (!isActive || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 pointer-events-none select-none overflow-visible" style={{ zIndex: 2147483647 }}>
      {/* Dynamic Hardware Accelerated Canvas for Tail Ribbon & Embers */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none w-full h-full"
        style={{ zIndex: 2147483646 }}
      />

      {/* Outer pulsing laser aura ring */}
      <div
        className="laser-pointer-ring"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />

      {/* Solid high-intensity laser core with white hot center */}
      <div
        className="laser-pointer-cursor"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-sm" />
      </div>
    </div>,
    document.body
  );
};
