import React from 'react';
import { ArrowRight, Rocket, Sparkles, Code2 } from 'lucide-react';

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
      <div className="flex items-center gap-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold tracking-wider uppercase">
          <Rocket className="w-3.5 h-3.5" />
          <span>CLASE 5 — FULL PROYECTOS</span>
        </div>
      </div>

      {/* Main Punchy Hero Content */}
      <div className="max-w-4xl space-y-6 my-auto relative z-10">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] font-display">
            A Partir de Aquí: <br/>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Aprender Haciendo</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            No más teoría larga. Selecciona tu primer proyecto web real con Next.js y pongámonos a programar.
          </p>
        </div>

        {/* Action Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="glass-card p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col gap-3.5 hover:border-blue-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-12 h-12 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-white mb-1">Paso 1: Elige el Proyecto</div>
              <div className="text-sm text-slate-400">Selecciona entre opciones de portafolios, landing pages o apps interactivas.</div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col gap-3.5 hover:border-emerald-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-12 h-12 flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-white mb-1">Paso 2: Genera el Código</div>
              <div className="text-sm text-slate-400">Usaremos un Prompt Maestro para obtener tu código base en Next.js con Tailwind.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="flex items-center justify-end pt-6 border-t border-slate-800/60 relative z-10">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95"
        >
          <span>Seleccionar Proyecto</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
