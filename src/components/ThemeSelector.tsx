import React, { useState } from 'react';
import { 
  Palette, Flame, Sparkles, Zap, Sun, 
  Crosshair, Radio, Moon, SunMedium, Shuffle 
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

export const RHYTHM_OPTIONS: { id: ContrastRhythm; label: string; icon: any; hint: string }[] = [
  {
    id: 'alternating',
    label: 'Ritmo Intercalado (Luz ↔ Sombra)',
    icon: Shuffle,
    hint: 'Alterna fondos claros y oscuros para evitar fatiga visual'
  },
  {
    id: 'all-light',
    label: 'Modo Luz Editorial (100% Claro)',
    icon: SunMedium,
    hint: 'Fondos blancos y luminosos para máxima claridad y vigilia'
  },
  {
    id: 'all-dark',
    label: 'Modo Cyber Oscuro (100% Dark)',
    icon: Moon,
    hint: 'Estilo glassmorphism oscuro y neón'
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

  return (
    <div className="relative">
      <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
        {/* Quick Energy Boost button */}
        <button
          onClick={onTriggerWakeUp}
          className="px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-red-500/20 to-amber-500/20 hover:from-red-500/30 hover:to-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 active:scale-95 shadow-sm"
          title="¡Despertar Alumnos! Boost de Energía (W)"
        >
          <Flame className="w-3.5 h-3.5 text-orange-400 animate-bounce" />
          <span className="hidden sm:inline">¡Energía!</span>
        </button>

        {/* Quick Contrast Rhythm toggle button */}
        <button
          onClick={() => {
            const nextMap: Record<ContrastRhythm, ContrastRhythm> = {
              'alternating': 'all-light',
              'all-light': 'vibrant-warm',
              'vibrant-warm': 'all-dark',
              'all-dark': 'alternating'
            };
            onSelectContrastRhythm(nextMap[contrastRhythm]);
          }}
          className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
            contrastRhythm === 'alternating'
              ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40'
              : contrastRhythm === 'all-light'
              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
              : contrastRhythm === 'vibrant-warm'
              ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
              : 'bg-slate-800 text-slate-300 border border-slate-700'
          }`}
          title="Alternar Ritmo de Contraste (C)"
        >
          {contrastRhythm === 'alternating' && <Shuffle className="w-3.5 h-3.5 text-brand-400" />}
          {contrastRhythm === 'all-light' && <SunMedium className="w-3.5 h-3.5 text-amber-400" />}
          {contrastRhythm === 'vibrant-warm' && <Flame className="w-3.5 h-3.5 text-orange-400" />}
          {contrastRhythm === 'all-dark' && <Moon className="w-3.5 h-3.5 text-slate-400" />}
          <span className="hidden lg:inline">
            {contrastRhythm === 'alternating' ? 'Intercalado' : contrastRhythm === 'all-light' ? 'Luz' : contrastRhythm === 'vibrant-warm' ? 'Cálido' : 'Oscuro'}
          </span>
        </button>

        {/* Laser pointer toggle */}
        <button
          onClick={onToggleLaser}
          className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
            isLaserActive
              ? 'bg-red-500 text-white shadow-lg shadow-red-500/30 animate-pulse'
              : 'bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60'
          }`}
          title="Puntero Láser Neón (L)"
        >
          <Crosshair className="w-3.5 h-3.5 text-red-400" />
          <span className="hidden md:inline">{isLaserActive ? 'Láser ON' : 'Láser'}</span>
        </button>

        {/* Palette dropdown trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60 flex items-center gap-1.5"
          title="Menú de Estimulación y Colores (T)"
        >
          <Palette className="w-4 h-4 text-violet-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400" />
        </button>
      </div>

      {/* Floating Dropdown Modal */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-12 z-50 w-80 glass-panel p-4 rounded-2xl border border-slate-700 shadow-2xl bg-slate-950/95 space-y-4 animate-fadeIn">
            {/* Contrast Rhythm Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                <span className="text-xs font-mono text-brand-400 font-bold uppercase flex items-center gap-1.5">
                  <Shuffle className="w-3.5 h-3.5" /> Ritmo de Luz / Sombra (Anti-Fatiga)
                </span>
              </div>
              <div className="space-y-1.5">
                {RHYTHM_OPTIONS.map((opt) => {
                  const isSelected = contrastRhythm === opt.id;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => {
                        onSelectContrastRhythm(opt.id);
                      }}
                      className={`w-full p-2 rounded-xl text-left transition-all flex items-start gap-2.5 border ${
                        isSelected
                          ? 'bg-brand-500/15 border-brand-400 text-white shadow-sm'
                          : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${isSelected ? 'text-brand-400' : 'text-slate-500'}`} />
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">{opt.label}</div>
                        <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{opt.hint}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Theme Palettes Section */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between pb-1 border-b border-slate-800/60">
                <span className="text-xs font-mono text-slate-300 font-bold uppercase flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-violet-400" /> Acentos de Color
                </span>
                <span className="text-[10px] text-slate-500 font-mono">5 Estilos</span>
              </div>

              <div className="space-y-1.5">
                {THEMES_LIST.map((th) => {
                  const isCurrent = currentTheme === th.id;
                  const Icon = th.icon;
                  return (
                    <button
                      key={th.id}
                      onClick={() => {
                        onSelectTheme(th.id);
                        setIsOpen(false);
                      }}
                      className={`w-full p-2 rounded-xl text-left transition-all flex items-center justify-between border ${
                        isCurrent
                          ? 'bg-slate-800/90 border-brand-400 text-white shadow-md'
                          : 'bg-slate-900/50 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${th.colorPill}`} />
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">{th.label}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{th.description}</div>
                        </div>
                      </div>
                      <Icon className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Auto Cycle Colors toggle */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-200">Ciclo Automático</div>
                <div className="text-[10px] text-slate-400">Rota colores cada slide</div>
              </div>
              <button
                onClick={onToggleAutoCycle}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                  autoCycle
                    ? 'bg-brand-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {autoCycle ? 'ACTIVO' : 'OFF'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
