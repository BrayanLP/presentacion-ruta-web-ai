import React, { useState } from 'react';
import { 
  Laptop, Cpu, KeyRound, Lightbulb, CheckCircle2, 
  Circle, Sparkles, ArrowRight, ShieldCheck, Database
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onGoToClass1?: () => void;
}

interface ChecklistItem {
  id: string;
  category: string;
  label: string;
  icon: any;
  required: boolean;
}

const ITEMS: ChecklistItem[] = [
  // Equipo
  { id: 'eq-laptop', category: '💻 Equipo Físico', label: 'Laptop / Computadora disponible', icon: Laptop, required: true },
  { id: 'eq-net', category: '💻 Equipo Físico', label: 'Internet estable para desarrollo cloud', icon: Laptop, required: true },
  { id: 'eq-space', category: '💻 Equipo Físico', label: 'Espacio disponible para trabajar', icon: Laptop, required: true },

  // Inteligencia Artificial
  { id: 'ai-antigravity-install', category: '🤖 Inteligencia Artificial', label: 'Instalar Antigravity IDE', icon: Cpu, required: true },
  { id: 'ai-antigravity-login', category: '🤖 Inteligencia Artificial', label: 'Iniciar sesión en Antigravity', icon: Cpu, required: true },
  { id: 'ai-google-ai', category: '🤖 Inteligencia Artificial', label: 'Tener Google AI Pro activo', icon: Cpu, required: true },

  // Cuentas Clave
  { id: 'acc-github', category: '👨‍💻 Cuentas & Nube', label: 'Crear cuenta de GitHub', icon: KeyRound, required: true },
  { id: 'acc-vercel', category: '👨‍💻 Cuentas & Nube', label: 'Crear cuenta de Vercel', icon: KeyRound, required: true },
  { id: 'acc-supabase', category: '👨‍💻 Cuentas & Nube', label: 'Crear cuenta de Supabase (PostgreSQL DB)', icon: Database, required: true },
  { id: 'acc-google', category: '👨‍💻 Cuentas & Nube', label: 'Tener cuenta de Google activa', icon: KeyRound, required: true },

  // Idea de Software
  { id: 'idea-ready', category: '💡 Idea de Software', label: 'Tener clara tu idea de software (aunque sea inicial)', icon: Lightbulb, required: true },
  { id: 'idea-problem', category: '💡 Idea de Software', label: 'Tener identificado el problema y usuario que lo usará', icon: Lightbulb, required: true },
];

export const SlideSoftwareChecklist: React.FC<Props> = ({ onGoToClass1 }) => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      if (next.length === ITEMS.length) {
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#00f0ff', '#3b82f6', '#10b981', '#f59e0b']
        });
      }
      return next;
    });
  };

  const markAll = () => {
    setCheckedIds(ITEMS.map((i) => i.id));
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const progress = Math.round((checkedIds.length / ITEMS.length) * 100);
  const isComplete = checkedIds.length === ITEMS.length;

  const categories = Array.from(new Set(ITEMS.map((i) => i.category)));

  return (
    <div className="h-full flex flex-col p-6 sm:p-8 md:p-10 relative z-10 overflow-y-auto justify-between select-none">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            🧰 CLASE 0 — AUDITORÍA FINAL
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={markAll}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-cyan-300 border border-slate-700 transition-colors"
            >
              Marcar Todo
            </button>
            <span className="text-xs font-mono text-slate-400">
              {checkedIds.length} de {ITEMS.length} Listos ({progress}%)
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display">
          Checklist Maestro de Clase 0: Software con IA
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
          Verifica que tu equipo, tus cuentas de IA/Nube y tu idea de software estén al 100% antes de iniciar la Clase 1.
        </p>

        {/* Progress bar */}
        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden mt-3 border border-slate-800">
          <div
            className={`h-full transition-all duration-500 rounded-full ${
              isComplete
                ? 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-brand-400'
                : 'bg-gradient-to-r from-cyan-500 to-blue-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Grid of Checklist Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 my-auto py-3">
        {categories.map((cat, cIdx) => {
          const catItems = ITEMS.filter((i) => i.category === cat);
          const catCompleted = catItems.every((i) => checkedIds.includes(i.id));

          return (
            <div
              key={cIdx}
              className={`glass-card p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                catCompleted
                  ? 'bg-slate-900/90 border-cyan-500/40 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-950/70 border-slate-800/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800/80">
                  <span className="text-xs font-bold text-white font-display">{cat}</span>
                  {catCompleted ? (
                    <span className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500">
                      {catItems.filter((i) => checkedIds.includes(i.id)).length}/{catItems.length}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  {catItems.map((item) => {
                    const isChecked = checkedIds.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`p-2.5 rounded-xl cursor-pointer transition-all flex items-start gap-2 text-xs border ${
                          isChecked
                            ? 'bg-cyan-500/15 border-cyan-500/40 text-white font-medium'
                            : 'bg-slate-900/60 border-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isChecked ? (
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600" />
                          )}
                        </div>
                        <span className="leading-snug">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Banner */}
      <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>
            {isComplete
              ? '🎉 ¡Entorno 100% listo! Tienes todo para construir tu software.'
              : 'Completa todas las casillas para validar tu entorno.'}
          </span>
        </div>

        {onGoToClass1 && (
          <button
            onClick={onGoToClass1}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:opacity-90 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
          >
            <span>Ir a Clase 1: De tu Idea al MVP</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
