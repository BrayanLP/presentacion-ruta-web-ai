import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Play, Pause, RotateCcw, 
  Clock 
} from 'lucide-react';

interface Props {
  currentSlideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpToSlide: (idx: number) => void;
}

export const ControlsBar: React.FC<Props> = ({
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext,
  onJumpToSlide,
}) => {
  // Live Stopwatch
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval: any = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSeconds(0);
  };

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 select-none">
      <div className="glass-panel px-2.5 py-1 rounded-xl border border-slate-700/80 shadow-xl flex items-center gap-2 md:gap-2.5 bg-slate-950/90 backdrop-blur-md">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          className="p-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-200 hover:text-white transition-all active:scale-95"
          title="Diapositiva Anterior (←)"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-1 px-1">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => onJumpToSlide(idx)}
              className={`transition-all rounded-full ${
                idx === currentSlideIndex
                  ? 'w-4 h-1.5 bg-cyan-400 shadow-sm shadow-cyan-400/50'
                  : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Ir a Diapositiva ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className="p-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-30 disabled:from-slate-800 disabled:to-slate-800 text-slate-950 font-bold transition-all shadow-sm active:scale-95"
          title="Siguiente Diapositiva (→ / Espacio)"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <div className="h-3 w-px bg-slate-800 hidden sm:block" />

        {/* Compact Presentation Timer */}
        <div className="hidden sm:flex items-center gap-1.5 px-1.5 py-0.5 rounded-lg bg-slate-900/90 border border-slate-800 font-mono text-[11px] text-slate-300">
          <Clock className="w-3 h-3 text-cyan-400" />
          <span className="font-semibold text-white">{formatTime(seconds)}</span>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-0.5 hover:text-cyan-400 text-slate-400 transition-colors"
            title={isRunning ? 'Pausar Cronómetro' : 'Reanudar Cronómetro'}
          >
            {isRunning ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
          </button>

          <button
            onClick={handleReset}
            className="p-0.5 hover:text-red-400 text-slate-400 transition-colors"
            title="Reiniciar Cronómetro"
          >
            <RotateCcw className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
