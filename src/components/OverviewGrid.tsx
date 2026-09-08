import React from 'react';
import { X, Grid, Check } from 'lucide-react';
import type { SlideData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  currentSlideIndex: number;
  onSelectSlide: (idx: number) => void;
}

export const OverviewGrid: React.FC<Props> = ({
  isOpen,
  onClose,
  slides,
  currentSlideIndex,
  onSelectSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-5xl h-[85vh] rounded-3xl border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden bg-slate-950/95">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Grid className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Vista General de Diapositivas
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Haz clic en cualquier miniatura para saltar directamente
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid of Slides */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slides.map((s, idx) => {
            const isCurrent = idx === currentSlideIndex;
            return (
              <div
                key={s.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`glass-card p-4 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between space-y-3 relative group hover:-translate-y-1 ${
                  isCurrent
                    ? 'border-brand-400 bg-slate-900 shadow-lg shadow-brand-500/20 ring-2 ring-brand-500/30'
                    : 'border-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Slide 0{idx + 1}
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] font-mono font-bold text-brand-400 bg-brand-500/20 px-2 py-0.5 rounded flex items-center gap-1">
                      <Check className="w-3 h-3" /> Actual
                    </span>
                  )}
                </div>

                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-0.5">
                    {s.category}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-2">
                    {s.title}
                  </h4>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>~{s.durationMinutes} min</span>
                  <span className="text-brand-400 group-hover:underline">Saltar →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
