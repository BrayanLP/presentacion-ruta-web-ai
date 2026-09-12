import React from 'react';
import { 
  FileText, Sparkles, Smartphone, 
  Terminal, Database
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onOpenBlueprintModal: () => void;
}

export const SlideIosBlueprintInteractive: React.FC<Props> = ({ onOpenBlueprintModal }) => {
  const handleOpen = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#10b981', '#3b82f6', '#ec4899']
    });
    onOpenBlueprintModal();
  };

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 relative z-10 overflow-y-auto justify-between select-none">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
            <span>📄 ENTREGABLE FINAL — CLASE 1</span>
          </span>
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
            LISTO PARA ANTIGRAVITY IDE
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display tracking-tight">
          Tu Entregable: El APP BLUEPRINT
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
          Cada alumno termina la clase con el plano maestro de su aplicación. Este documento técnico es exactamente lo que los agentes de IA necesitan para construir tu app en minutos.
        </p>
      </div>

      {/* Main Blueprint Card */}
      <div className="my-auto py-2">
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-slate-900/95 via-slate-950/95 to-cyan-950/30 shadow-2xl relative overflow-hidden group">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>PLANO MAESTRO DE ARQUITECTURA MÓVIL</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-white font-display">
                Generador Interactivo de App Blueprint
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Completa los 9 campos de tu aplicación (o carga una de nuestras plantillas) y genera automáticamente el prompt maestro listo para pegar en <strong className="text-white">Antigravity IDE</strong> con <strong className="text-cyan-400">Expo Router</strong> y <strong className="text-emerald-400">Supabase</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono text-slate-300 pt-1">
                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>9 Pantallas iOS</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tablas Supabase</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-pink-400" />
                  <span>Prompt para IA</span>
                </div>
              </div>
            </div>

            {/* Big Action Box */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center space-y-4 shrink-0 w-full sm:w-80 shadow-inner">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-emerald-400 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-slate-950" />
              </div>

              <div>
                <div className="text-sm font-bold text-white font-display">
                  App Blueprint Modal
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Editor + Presets + Exportador
                </div>
              </div>

              <button
                onClick={handleOpen}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-600 hover:opacity-90 text-slate-950 font-black text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>ABRIR APP BLUEPRINT</span>
              </button>

              <span className="text-[10px] font-mono text-slate-500">
                Exporta en Markdown o Copia el Prompt
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <span>🎉 ¡Felicidades! Has completado la Fase de Preparación y Arquitectura</span>
        <span>Siguiente paso: Construcción en Antigravity IDE</span>
      </div>
    </div>
  );
};
