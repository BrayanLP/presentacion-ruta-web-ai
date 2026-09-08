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
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 select-none">
      <div className="glass-panel px-4 py-2 rounded-2xl border border-slate-700/80 shadow-2xl flex items-center gap-3 md:gap-4 bg-slate-950/80">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-200 hover:text-white transition-all"
          title="Diapositiva Anterior (←)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicator Dots or Number */}
        <div className="flex items-center gap-1.5 px-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => onJumpToSlide(idx)}
              className={`transition-all rounded-full ${
                idx === currentSlideIndex
                  ? 'w-6 h-2 bg-brand-400 shadow-sm shadow-brand-500/50'
                  : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Ir a Diapositiva ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className="p-2 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 hover:from-brand-400 hover:to-cyan-400 disabled:opacity-30 disabled:from-slate-800 disabled:to-slate-800 text-slate-950 font-bold transition-all shadow-md shadow-brand-500/10"
          title="Siguiente Diapositiva (→ / Espacio)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="h-4 w-px bg-slate-800 hidden sm:block" />

        {/* Live Presentation Timer */}
        <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs text-slate-300">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-semibold text-white">{formatTime(seconds)}</span>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-1 hover:text-brand-400 text-slate-400 transition-colors"
            title={isRunning ? 'Pausar Cronómetro' : 'Reanudar Cronómetro'}
          >
            {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>

          <button
            onClick={handleReset}
            className="p-1 hover:text-red-400 text-slate-400 transition-colors"
            title="Reiniciar Cronómetro"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
