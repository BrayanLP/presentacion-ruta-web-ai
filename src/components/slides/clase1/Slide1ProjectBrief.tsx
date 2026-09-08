import React from 'react';
import { Target, Sparkles, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onOpenBriefModal: () => void;
}

export const Slide1ProjectBrief: React.FC<Props> = ({ onOpenBriefModal }) => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    onOpenBriefModal();
  };

  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-brand-400 font-semibold tracking-wider uppercase flex items-center gap-2">
          <Target className="w-4 h-4" />
          🎯 PROYECTO PRÁCTICO DE HOY
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          El Brief de mi Web
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          El entregable estrella de la Clase 1. Terminas esta sesión sabiendo exactamente qué vas a construir.
        </p>
      </div>

      {/* Center Callout Box */}
      <div className="glass-panel p-8 rounded-3xl border border-brand-500/40 my-auto text-center max-w-3xl mx-auto space-y-6 shadow-2xl shadow-brand-950/40 relative overflow-hidden">
        <div className="inline-flex p-3 rounded-2xl bg-brand-500/20 text-brand-400 border border-brand-500/30">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white font-display">
            Generador Interactivo de Brief
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Completa los 8 campos guiados y nuestra herramienta generará automáticamente tu documento estructurado y el <strong>Prompt Maestro listo para Antigravity IDE</strong>.
          </p>
        </div>

        {/* 3 Outcome bullet points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs font-mono text-slate-300">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Claridad absoluta del negocio</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Prompt copiable en 1 clic</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
            <span>Descarga en formato Markdown</span>
          </div>
        </div>

        {/* Big Action Button */}
        <div className="pt-2">
          <button
            onClick={triggerConfetti}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-500 via-emerald-400 to-cyan-400 hover:from-brand-400 hover:to-cyan-300 text-slate-950 font-extrabold text-base md:text-lg transition-all shadow-xl shadow-brand-500/25 hover:scale-105 active:scale-95"
          >
            <FileText className="w-6 h-6" />
            <span>Abrir Generador de Brief Web</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer next class teaser */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-l-brand-500">
        <span className="text-xs md:text-sm text-slate-200">
          🚀 <strong>En la Clase 2:</strong> Abriremos Antigravity IDE, pegaremos este Brief y veremos nacer los primeros componentes de tu web en tiempo real.
        </span>
      </div>
    </div>
  );
};
