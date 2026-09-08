import React from 'react';
import { 
  X, BookOpen, Target, MessageCircle, Sparkles, 
  Lightbulb, ChevronRight, Clock 
} from 'lucide-react';
import type { SlideData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
  nextSlide?: SlideData;
  onNextSlide: () => void;
}

export const PresenterModal: React.FC<Props> = ({
  isOpen,
  onClose,
  slide,
  nextSlide,
  onNextSlide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="glass-panel w-full max-w-xl h-[85vh] rounded-3xl border border-brand-500/30 shadow-2xl flex flex-col overflow-hidden bg-slate-950/95">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Notas del Expositor / Profesor
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Slide {slide.slideNumber} de {slide.totalInClass} • {slide.category}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Slide Title */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Diapositiva Actual</span>
            <h4 className="text-base font-bold text-white mt-0.5">{slide.title}</h4>
            {slide.subtitle && (
              <p className="text-xs text-slate-300 mt-1 italic">{slide.subtitle}</p>
            )}
            <div className="mt-2 flex items-center gap-2 text-xs text-cyan-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>Tiempo sugerido: ~{slide.durationMinutes} minutos</span>
            </div>
          </div>

          {/* Goal */}
          <div className="space-y-1.5">
            <div className="text-xs font-mono text-brand-400 font-bold uppercase flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>Objetivo de esta Diapositiva</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs sm:text-sm text-slate-200 leading-relaxed">
              {slide.speakerNotes.goal}
            </div>
          </div>

          {/* Key Talking Points */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <span>Puntos Clave a Desarrollar</span>
            </div>
            <div className="space-y-2">
              {slide.speakerNotes.talkingPoints.map((point, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Questions to ask the community */}
          {slide.speakerNotes.questionsToAsk && slide.speakerNotes.questionsToAsk.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-mono text-pink-400 font-bold uppercase flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Preguntas para Activar a los Alumnos</span>
              </div>
              <div className="space-y-2">
                {slide.speakerNotes.questionsToAsk.map((q, i) => (
                  <div key={i} className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-200 flex items-start gap-2.5">
                    <span className="text-pink-400 font-bold">💬</span>
                    <span>"{q}"</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live Activity if any */}
          {slide.speakerNotes.liveActivity && (
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-yellow-400 font-bold uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Dinámica en Vivo Sugerida</span>
              </div>
              <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-200">
                {slide.speakerNotes.liveActivity}
              </div>
            </div>
          )}

          {/* Next Slide preview */}
          {nextSlide && (
            <div className="pt-3 border-t border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Siguiente Diapositiva</span>
              <div className="mt-1 p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{nextSlide.title}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{nextSlide.category}</div>
                </div>
                <button
                  onClick={() => {
                    onNextSlide();
                  }}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1"
                >
                  <span>Avanzar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
