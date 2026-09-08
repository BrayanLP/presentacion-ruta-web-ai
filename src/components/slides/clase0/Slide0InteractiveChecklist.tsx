import React, { useState } from 'react';
import { CheckCircle2, Circle, RefreshCw, Trophy, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLASE_0_CHECKLIST } from '../../../data/checklistData';

interface Props {
  onGoToClass1: () => void;
}

export const Slide0InteractiveChecklist: React.FC<Props> = ({ onGoToClass1 }) => {
  // Load initial checked items from localStorage
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('ruta_web_clase0_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const totalItems = CLASE_0_CHECKLIST.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);

  const toggleItem = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    try {
      localStorage.setItem('ruta_web_clase0_checklist', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    const newCompleted = Object.values(updated).filter(Boolean).length;
    if (newCompleted === totalItems) {
      triggerCelebration();
    }
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const markAll = () => {
    const allChecked: Record<string, boolean> = {};
    CLASE_0_CHECKLIST.forEach((cat) => {
      cat.items.forEach((it) => {
        allChecked[it.id] = true;
      });
    });
    setCheckedItems(allChecked);
    try {
      localStorage.setItem('ruta_web_clase0_checklist', JSON.stringify(allChecked));
    } catch (e) {
      console.error(e);
    }
    triggerCelebration();
  };

  const resetAll = () => {
    setCheckedItems({});
    try {
      localStorage.removeItem('ruta_web_clase0_checklist');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 md:p-12 relative overflow-hidden">
      {/* Header with progress */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Auditoría de Inicio en Vivo
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white font-display">
            Checklist Interactivo: Clase 0
          </h2>
        </div>

        {/* Progress pill & quick actions */}
        <div className="flex items-center gap-3">
          <div className="glass-panel px-4 py-2 rounded-xl flex items-center gap-3 border border-slate-700">
            <div className="text-right">
              <div className="text-xs text-slate-400 font-mono">Progreso</div>
              <div className="text-sm font-bold text-white">
                {completedCount} / {totalItems} ({progressPercent}%)
              </div>
            </div>
            <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={markAll}
            className="px-3 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono transition-all"
            title="Marcar todo como listo"
          >
            Marcar Todo
          </button>

          <button
            onClick={resetAll}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            title="Reiniciar checklist"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories Grid (Scrollable if needed) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-auto overflow-y-auto max-h-[60vh] pr-1">
        {CLASE_0_CHECKLIST.map((category) => (
          <div
            key={category.id}
            className="glass-card p-4 rounded-xl border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-mono text-emerald-400">
                {category.title}
              </h3>
              <p className="text-[11px] text-slate-400 mb-3 line-clamp-1">{category.description}</p>

              <div className="space-y-2">
                {category.items.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-2 rounded-lg cursor-pointer transition-all flex items-start gap-2 text-xs select-none ${
                        isChecked
                          ? 'bg-emerald-500/15 border border-emerald-500/40 text-white'
                          : 'bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isChecked ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-600" />
                        )}
                      </div>
                      <span className={`leading-tight ${isChecked ? 'line-through text-slate-300' : ''}`}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Next Class CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <span className="text-xs text-slate-400 font-mono">
          {progressPercent === 100
            ? '🎉 ¡Entorno 100% listo! Todo despejado para la Clase 1.'
            : '💡 Puedes completar los pendientes durante el día. ¡Pasemos a la estrategia!'}
        </span>

        <button
          onClick={onGoToClass1}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs md:text-sm transition-all shadow-lg shadow-violet-500/20 hover:scale-105 active:scale-95"
        >
          <span>Pasar a Clase 1: Piensa como Dueño</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
