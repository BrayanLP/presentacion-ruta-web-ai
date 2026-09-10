import React, { useState } from 'react';
import { 
  Palette, Flame, Sparkles, Zap, Sun, 
  Crosshair, Radio, Moon, SunMedium, Shuffle, X,
  Check, Volume2
} from 'lucide-react';
import type { ThemeMode, ContrastRhythm } from '../types';

interface Props {
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
  contrastRhythm: ContrastRhythm;
  onSelectContrastRhythm: (r: ContrastRhythm) => void;
  autoCycle: boolean;
  onToggleAutoCycle: () => void;
  isLaserActive: boolean;
  onToggleLaser: () => void;
  onTriggerWakeUp: () => void;
}

export const THEMES_LIST: { id: ThemeMode; label: string; icon: any; colorPill: string; description: string }[] = [
  {
    id: 'cyber-emerald',
    label: 'Cyber Emerald',
    icon: Zap,
    colorPill: 'from-emerald-500 to-cyan-400',
    description: 'Verde IA & Neón Hacker'
  },
  {
    id: 'synthwave-neon',
    label: 'Synthwave Hyper',
    icon: Sparkles,
    colorPill: 'from-pink-500 via-purple-500 to-violet-500',
    description: 'Magenta Eléctrico & Ultravioleta'
  },
  {
    id: 'electric-cyan',
    label: 'Electric Azure',
    icon: Radio,
    colorPill: 'from-cyan-400 to-blue-600',
    description: 'Azul Quantum & Alta Frecuencia'
  },
  {
    id: 'solar-flare',
    label: 'Solar Flare',
    icon: Flame,
    colorPill: 'from-amber-400 via-orange-500 to-red-500',
    description: 'Adrenalina Pura & Fuego Dorado'
  },
  {
    id: 'aurora-matrix',
    label: 'Aurora Spectrum',
    icon: Sun,
    colorPill: 'from-pink-500 via-cyan-400 to-emerald-400',
    description: 'Gama Dinámica en Movimiento'
  }
];

export const RHYTHM_OPTIONS: { id: ContrastRhythm; label: string; icon: any; hint: string; isDefault?: boolean }[] = [
  {
    id: 'alternating',
    label: 'Ritmo Intercalado (Luz ↔ Sombra)',
    icon: Shuffle,
    hint: 'Alterna fondos claros y oscuros en cada slide para máxima vigilia',
    isDefault: true
  },
  {
    id: 'all-light',
    label: 'Modo Luz Editorial (100% Claro)',
    icon: SunMedium,
    hint: 'Fondos blancos y luminosos para máxima claridad'
  },
  {
    id: 'all-dark',
    label: 'Modo Cyber Oscuro (100% Dark)',
    icon: Moon,
    hint: 'Estilo glassmorphism oscuro y neón continuo'
  },
  {
    id: 'vibrant-warm',
    label: 'Modo Cálido Energético (Sunlight)',
    icon: Flame,
    hint: 'Fondos crema solar y ámbar estimulante'
  }
];

export const ThemeSelector: React.FC<Props> = ({
  currentTheme,
  onSelectTheme,
  contrastRhythm,
  onSelectContrastRhythm,
  autoCycle,
  onToggleAutoCycle,
  isLaserActive,
  onToggleLaser,
  onTriggerWakeUp,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeThemeObj = THEMES_LIST.find((t) => t.id === currentTheme) || THEMES_LIST[0];

  return (
    <>
      {/* Compact Trigger Button in Top Header */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 text-xs font-mono font-medium transition-all flex items-center gap-2 shadow-sm group"
        title="Personalizar Efectos, Láser, Ritmo de Luz y Colores (T / C / L / W)"
      >
        <div className="flex items-center gap-1.5">
          <Palette className="w-3.5 h-3.5 text-violet-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-bold">Efectos & Estilo</span>
        </div>

        <div className="flex items-center gap-1.5 pl-1.5 border-l border-slate-800">
          <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${activeThemeObj.colorPill}`} />
          <span className="text-[11px] text-brand-300 font-mono hidden lg:inline">
            {contrastRhythm === 'alternating' ? 'Intercalado' : contrastRhythm === 'all-light' ? 'Luz' : contrastRhythm === 'vibrant-warm' ? 'Cálido' : 'Oscuro'}
          </span>
        </div>
      </button>

      {/* Full Settings & Experience Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
          <div className="glass-panel w-full max-w-2xl max-h-[90vh] rounded-3xl border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden bg-slate-950/98">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-violet-500 to-cyan-400 text-slate-950 shadow-md">
                  <Sparkles className="w-5 h-5 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-2">
                    <span>Efectos, Energía & Estilo Visual</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Controla la estimulación visual, dinamismo en vivo y paletas de color
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                title="Cerrar (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              {/* SECTION 1: Dynamic Live Tools (Energía & Láser) */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>Dinamismo & Herramientas en Vivo</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Energy Boost Action Button */}
                  <button
                    onClick={() => {
                      onTriggerWakeUp();
                    }}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-orange-500/20 via-amber-500/15 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border border-orange-500/40 text-left transition-all group flex flex-col justify-between shadow-md active:scale-95"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 rounded-xl bg-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform">
                        <Flame className="w-4 h-4" />
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-300 font-mono text-[10px] font-bold border border-orange-500/30">
                        Atajo: W
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-amber-200 group-hover:text-amber-100 flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>¡Disparar Boost de Energía!</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        Lanza sonido armónico C5-E6, lluvia de confeti y shock visual para despertar alumnos.
                      </p>
                    </div>
                  </button>

                  {/* Laser Pointer Switch Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="p-2 rounded-xl bg-red-500/20 text-red-400">
                        <Crosshair className="w-4 h-4" />
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 font-mono text-[10px]">
                          Atajo: L
                        </span>
                        <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] font-bold ${
                          isLaserActive
                            ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {isLaserActive ? 'SIEMPRE ACTIVO' : 'INACTIVO'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-bold text-white">Puntero Láser Neón</div>
                        <button
                          onClick={onToggleLaser}
                          className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                            isLaserActive
                              ? 'bg-red-500 hover:bg-red-600 text-white shadow-md shadow-red-500/30'
                              : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                          }`}
                        >
                          {isLaserActive ? 'Desactivar' : 'Activar'}
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        Puntero de alta visibilidad para señalar código, conceptos y diagramas en tiempo real.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Contrast Rhythm (Intercalado por Defecto) */}
              <div className="space-y-3 pt-3 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-brand-400 uppercase tracking-wider font-bold flex items-center gap-2">
                    <Shuffle className="w-4 h-4" />
                    <span>Ritmo de Contraste (Anti-Fatiga Visual)</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Atajo: C
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {RHYTHM_OPTIONS.map((opt) => {
                    const isSelected = contrastRhythm === opt.id;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => onSelectContrastRhythm(opt.id)}
                        className={`p-3 rounded-2xl text-left transition-all border flex items-start gap-3 relative ${
                          isSelected
                            ? 'bg-brand-500/15 border-brand-400 text-white shadow-md shadow-brand-500/10 ring-1 ring-brand-400/30'
                            : 'bg-slate-900/60 border-slate-800/90 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                          isSelected ? 'bg-brand-500/20 text-brand-400' : 'bg-slate-800 text-slate-500'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0 pr-4">
                          <div className="text-xs font-bold text-white flex items-center gap-1.5 flex-wrap">
                            <span>{opt.label}</span>
                            {opt.isDefault && (
                              <span className="px-1.5 py-0.2 rounded bg-brand-500/20 text-brand-300 text-[9px] font-mono font-bold border border-brand-500/30">
                                PREDETERMINADO
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                            {opt.hint}
                          </div>
                        </div>
                        {isSelected && (
                          <div className="absolute right-3 top-3 text-brand-400">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: Color Themes */}
              <div className="space-y-3 pt-3 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-wider font-bold flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    <span>Paletas de Color & Neón</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Atajo: T
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {THEMES_LIST.map((th) => {
                    const isCurrent = currentTheme === th.id;
                    return (
                      <button
                        key={th.id}
                        onClick={() => onSelectTheme(th.id)}
                        className={`p-2.5 rounded-2xl text-left transition-all border flex items-center justify-between ${
                          isCurrent
                            ? 'bg-slate-800/90 border-brand-400 text-white shadow-md'
                            : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${th.colorPill} shadow-sm`} />
                          <div>
                            <div className="text-xs font-bold text-white leading-tight">{th.label}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{th.description}</div>
                          </div>
                        </div>
                        {isCurrent && <Check className="w-3.5 h-3.5 text-brand-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 4: Auto Cycle */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between bg-slate-900/50 p-3 rounded-2xl border border-slate-800">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                    <span>Ciclo Automático de Neón</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Rota suavemente las paletas de color al avanzar entre diapositivas
                  </div>
                </div>
                <button
                  onClick={onToggleAutoCycle}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    autoCycle
                      ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/25'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {autoCycle ? 'ACTIVO' : 'DESACTIVADO'}
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>💡 Atajos rápidos: <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">W</kbd> Energía · <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">C</kbd> Contraste · <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">L</kbd> Láser</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all"
              >
                Listo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
