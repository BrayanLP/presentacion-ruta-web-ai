import React from 'react';
import { ArrowRight, Hammer, Layers, Smartphone, Bot, Sparkles } from 'lucide-react';

interface SlideProps {
  onNext: () => void;
}

export const Slide4Hero: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 relative overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Pill */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase">
          <Hammer className="w-3.5 h-3.5" />
          <span>CLASE 3 — CONSTRUYE TU WEB</span>
        </div>
        <span className="text-slate-500 text-xs font-mono hidden sm:inline">• Aquí Empieza la Acción</span>
      </div>

      {/* Main Punchy Hero Content */}
      <div className="max-w-4xl space-y-6 my-auto relative z-10">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] font-display">
            Construye <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">tu Web</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed">
            Aquí empieza la acción: tu primera versión funcional en vivo dirigida por ti y ejecutada por tus agentes.
          </p>
        </div>

        {/* 3 Sleek High-Impact Visual Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="glass-card p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center gap-3.5 hover:border-amber-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">10 Bloques</div>
              <div className="text-xs text-slate-400">Navbar hasta WhatsApp</div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center gap-3.5 hover:border-cyan-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Mobile First</div>
              <div className="text-xs text-slate-400">Diseñado para el celular</div>
            </div>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 bg-slate-900/60 flex items-center gap-3.5 hover:border-emerald-500/40 transition-colors">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Tus Agentes</div>
              <div className="text-xs text-slate-400">Tú diriges, la IA construye</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800/60 relative z-10">
        <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>🎯 Resultado: Primera versión funcional de tu web</span>
        </span>

        <button
          onClick={onNext}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95"
        >
          <span>Comenzar</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
