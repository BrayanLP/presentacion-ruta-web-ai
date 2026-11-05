import React from 'react';
import { ArrowRight, Dices, Sparkles, Users, Bot } from 'lucide-react';

interface SlideProps {
  onNext: () => void;
}

export const Slide6Hero: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto p-4 sm:p-6 md:p-10 relative overflow-x-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Pill */}
      <div className="flex items-center gap-3 relative z-10 shrink-0">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase">
          <Dices className="w-3.5 h-3.5 text-blue-400 animate-spin-slow" />
          <span>CLASE 6 — RULETA DE PROYECTOS EN VIVO</span>
        </div>
      </div>

      {/* Main Punchy Hero Content */}
      <div className="max-w-4xl space-y-6 my-auto relative z-10">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] font-display">
            Ruleta de Proyectos: <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              De la Idea al Prompt Maestro
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-medium max-w-3xl leading-relaxed">
            No más teoría abstracta. Los alumnos proponen su idea de página web, la ruleta elige al ganador y generamos juntos el <span className="text-cyan-300 font-semibold">Prompt Maestro en Next.js + Tailwind CSS</span>.
          </p>
        </div>

        {/* 3 Action Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="glass-card p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col gap-3.5 hover:border-blue-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-12 h-12 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white mb-1">1. Ideas de los Chicos</div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Ingresamos las ideas de sitios web de la audiencia (o pegamos la lista del chat en 1 clic).
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col gap-3.5 hover:border-cyan-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 w-12 h-12 flex items-center justify-center shrink-0">
              <Dices className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white mb-1">2. Giro de Ruleta</div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Sorteo interactivo con audio ticker, emoción en vivo y celebración de confeti al ganador.
              </div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col gap-3.5 hover:border-emerald-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-12 h-12 flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white mb-1">3. Prompt Maestro Next.js</div>
              <div className="text-xs text-slate-400 leading-relaxed">
                Generamos el prompt optimizado para Antigravity IDE con Tailwind, componentes y SEO.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800/60 relative z-10 shrink-0">
        <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Next.js 15 • App Router • Tailwind CSS • Antigravity IDE</span>
        </span>
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:opacity-95 text-white font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95"
        >
          <span>Ir a la Ruleta de Proyectos</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
