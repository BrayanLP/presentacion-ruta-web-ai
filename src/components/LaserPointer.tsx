import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  isActive: boolean;
}

export const LaserPointer: React.FC<Props> = ({ isActive }) => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [mounted, setMounted] = useState(false);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      animFrameRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isActive]);

  if (!isActive || !mounted) return null;

  // Render directly into document.body to bypass all CSS transform, backdrop-filter and z-index traps
  return createPortal(
    <div className="fixed inset-0 pointer-events-none select-none overflow-visible" style={{ zIndex: 2147483647 }}>
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
