import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SHORTCUTS = [
  { key: '→ / Espacio', desc: 'Avanzar a la siguiente diapositiva' },
  { key: '←', desc: 'Regresar a la diapositiva anterior' },
  { key: 'H', desc: '👁️ Ocultar / Mostrar barra superior (Modo Presentación Inmersivo)' },
  { key: 'C', desc: '🌗 Alternar Ritmo de Contraste (Intercalado Luz ↔ Sombra / Claro / Oscuro / Cálido)' },
  { key: 'T', desc: '🎨 Cambiar Paleta de Colores / Acentos de Neón' },
  { key: 'L', desc: '🔴 Alternar Puntero Láser Neón para guiar la vista' },
  { key: 'W', desc: '⚡ ¡Boost de Energía! (Shock visual y despertar alumnos)' },
  { key: 'F', desc: 'Alternar modo Pantalla Completa' },
  { key: 'P / N', desc: 'Abrir / Cerrar Notas del Expositor' },
  { key: 'O', desc: 'Abrir Vista General de Diapositivas (Grid)' },
  { key: 'B', desc: 'Abrir Generador de Brief Web' },
  { key: '0 / 1', desc: 'Cambiar rápidamente entre Clase 0 y Clase 1' },
  { key: '?', desc: 'Abrir esta ventana de atajos' },
  { key: 'Esc', desc: 'Cerrar cualquier ventana emergente' },
];

export const ShortcutsModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-lg rounded-3xl border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden bg-slate-950/95">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Atajos de Teclado & Dinámicas
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Controla la presentación y la energía de la clase sin usar el mouse
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Shortcuts list */}
        <div className="p-5 space-y-2 max-h-[60vh] overflow-y-auto">
          {SHORTCUTS.map((sc, idx) => (
            <div
              key={idx}
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800/90 flex items-center justify-between text-xs"
            >
              <span className="text-slate-300 font-sans">{sc.desc}</span>
              <kbd className="px-2 py-1 rounded bg-slate-800 text-brand-300 font-mono text-[11px] font-bold border border-slate-700 shadow-sm">
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-center">
          <span className="text-xs text-slate-400 font-mono">
            Presiona <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-white">Esc</kbd> para cerrar
          </span>
        </div>
      </div>
    </div>
  );
};
