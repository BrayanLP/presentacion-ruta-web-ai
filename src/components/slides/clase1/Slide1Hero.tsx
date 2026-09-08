import React from 'react';
import { ArrowRight, Brain, Sparkles, Target, Zap, Ban } from 'lucide-react';

interface SlideProps {
  onNext: () => void;
}

export const Slide1Hero: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Pill */}
      <div className="flex items-center gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-semibold tracking-wide uppercase">
          <Brain className="w-4 h-4 text-violet-400" />
          Módulo Estratégico #01
        </div>
        <span className="text-slate-500 text-sm hidden sm:inline">• Mentalidad de Conversión</span>
      </div>

      {/* Main Pitch */}
      <div className="max-w-4xl space-y-6 my-auto">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-bold uppercase">
            <Ban className="w-3.5 h-3.5" /> Hoy: Cero Código — 100% Estrategia
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
            Piensa como <span className="text-gradient-violet">Dueño</span> de una Web
          </h1>
        </div>

        {/* Master Quote */}
        <div className="p-6 rounded-2xl glass-panel border-l-4 border-l-violet-500 bg-violet-950/20">
          <blockquote className="text-xl sm:text-3xl text-slate-100 font-medium italic leading-relaxed">
            "Antes de crear tu web, tienes que saber exactamente qué debe conseguir."
          </blockquote>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
            — La IA puede construir en 3 minutos, pero solo tú defines el rumbo y las ventas.
          </p>
        </div>

        {/* 3 Key Objectives today */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-mono">ENFOQUE</div>
              <div className="text-xs sm:text-sm font-bold text-white">Objetivo & Conversión</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-mono">ESTRUCTURA</div>
              <div className="text-xs sm:text-sm font-bold text-white">Anatomía de Ventas</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-mono">ENTREGABLE HOY</div>
              <div className="text-xs sm:text-sm font-bold text-white">El Brief de tu Web</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800/60">
        <span className="text-xs text-slate-400 font-mono">
          🎯 Al terminar esta sesión, sabrás exactamente qué construir en Antigravity.
        </span>

        <button
          onClick={onNext}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-400 hover:to-indigo-500 text-white font-bold text-sm transition-all shadow-lg shadow-violet-500/20 hover:scale-105 active:scale-95"
        >
          <span>Descubrir el Método</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
