import React from 'react';
import { Terminal, ArrowRight, ShieldCheck, Cpu, Zap } from 'lucide-react';

interface SlideProps {
  onNext: () => void;
}

export const Slide0Hero: React.FC<SlideProps> = ({ onNext }) => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header pill */}
      <div className="flex items-center gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-semibold tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping" />
          Ruta Web con Inteligencia Artificial
        </div>
        <span className="text-slate-500 text-sm hidden sm:inline">• Módulo 00</span>
      </div>

      {/* Center content */}
      <div className="max-w-4xl space-y-6 my-auto">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-mono text-brand-400 tracking-wider font-semibold">
            🟢 CLASE 0 — LOS CIMIENTOS
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
            Prepara tu <span className="text-gradient-emerald">Entorno</span> de Trabajo
          </h1>
        </div>

        <p className="text-lg sm:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">
          Antes de escribir una sola línea de código o darle órdenes a la IA, aseguramos que tu estación, tus credenciales y el ADN de tu negocio estén listos para despegar.
        </p>

        {/* Feature Grid Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="glass-card p-4 rounded-xl border border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-brand-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">PILAR 1</div>
              <div className="text-sm font-semibold text-white">Hardware & Red</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">PILAR 2</div>
              <div className="text-sm font-semibold text-white">Antigravity + IA Pro</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800/80 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-mono">PILAR 3</div>
              <div className="text-sm font-semibold text-white">Cloud & ADN Negocio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-800/60">
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <Zap className="w-4 h-4 text-brand-400" />
          <span>Objetivo: Cero bloqueos técnicos en las clases prácticas</span>
        </div>

        <button
          onClick={onNext}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-brand-500/20 hover:scale-105 active:scale-95"
        >
          <span>Iniciar Recorrido</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
