import React from 'react';
import { ArrowRight, Bot, Crown, Building2, Users } from 'lucide-react';

interface SlideProps {
  onNext: () => void;
}

export const Slide2Hero: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 relative select-none">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
          <Bot className="w-3.5 h-3.5 text-cyan-400" />
          Clase 2 — Tu Equipo de IA
        </div>
        <span className="text-slate-500 text-xs hidden sm:inline">• Antigravity IDE</span>
      </div>

      {/* Main Pitch */}
      <div className="w-full space-y-8 my-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight font-display">
          No vas a programar: vas a <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">dirigir a tu equipo de IA</span>
        </h1>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {/* Pillar 1: CEO */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-amber-500/10 to-slate-950/80 transition-all hover:border-amber-400/60">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3.5 shadow-md">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">TÚ = CEO</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
              Defines la visión, el brief de negocio y diriges las decisiones estratégicas.
            </p>
          </div>

          {/* Pillar 2: Agentes */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-cyan-500/10 to-slate-950/80 transition-all hover:border-cyan-400/60">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-3.5 shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">AGENTES = EQUIPO</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
              9 especialistas de élite con 11 superpoderes (Skills) listos para ejecutar.
            </p>
          </div>

          {/* Pillar 3: Antigravity */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-slate-950/80 transition-all hover:border-indigo-400/60">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-3.5 shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">ANTIGRAVITY = OFICINA</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
              Tu centro de mando donde la IA crea archivos, compila y prueba en vivo.
            </p>
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="flex items-center justify-end pt-4 border-t border-slate-800/60">
        <button
          onClick={onNext}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>Conocer tu Oficina Antigravity</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
