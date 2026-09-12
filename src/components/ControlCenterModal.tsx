import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, Sparkles, Flame, Crosshair, Shuffle, Palette, 
  Layers, FileText, BookOpen, Grid, Maximize2, Minimize2, 
  EyeOff, Copy, Check, HelpCircle, LayoutGrid, Volume2, 
  SunMedium, Moon, Zap, Radio, Sun, Sliders, CheckCircle2
} from 'lucide-react';
import type { Presentation, ThemeMode, ContrastRhythm } from '../types';

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
    hint: 'Alterna automáticamente fondos claros y oscuros en cada slide para máxima vigilia',
    isDefault: true
  },
  {
    id: 'all-light',
    label: 'Modo Luz Editorial (100% Claro)',
    icon: SunMedium,
    hint: 'Fondos blancos y luminosos para máxima claridad y lectura diurna'
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

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentPresentation: Presentation;
  currentSlideIndex: number;
  totalSlides: number;
  onOpenOverview: () => void;
  onOpenPresenter: () => void;
  onOpenBrief: () => void;
  onOpenSoftwarePlan: () => void;
  onOpenAppBlueprint?: () => void;
  onOpenHub: () => void;
  onOpenShortcuts: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isNavbarHidden: boolean;
  onToggleHideNavbar: () => void;
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

export const ControlCenterModal: React.FC<Props> = ({
  isOpen,
  onClose,
  currentPresentation,
  currentSlideIndex,
  totalSlides,
  onOpenOverview,
  onOpenPresenter,
  onOpenBrief,
  onOpenSoftwarePlan,
  onOpenAppBlueprint,
  onOpenHub,
  onOpenShortcuts,
  isFullscreen,
  onToggleFullscreen,
  isNavbarHidden,
  onToggleHideNavbar,
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
  const [activeTab, setActiveTab] = useState<'live' | 'styles' | 'tools'>('live');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none">
      {/* Backdrop Click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Dialog Box */}
      <div className="relative w-full max-w-3xl rounded-3xl border border-slate-700/90 shadow-2xl flex flex-col overflow-hidden bg-[#080c16] text-slate-100 ring-1 ring-white/10 max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20">
              <Sliders className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-2">
                <span>Centro de Control de Presentación</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Slide 0{currentSlideIndex + 1} / 0{totalSlides}
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {currentPresentation.title} · Experiencia en vivo y visualización
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700/60"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Switcher */}
        <div className="px-4 pt-3 pb-2 bg-slate-900/50 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('live')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'live'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>1. En Vivo & Dinámicas</span>
          </button>

          <button
            onClick={() => setActiveTab('styles')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'styles'
                ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Shuffle className="w-3.5 h-3.5 text-brand-400" />
            <span>2. Estilos & Contraste</span>
          </button>

          <button
            onClick={() => setActiveTab('tools')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'tools'
                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>3. Herramientas & Pantalla</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* TAB 1: EN VIVO & DINÁMICAS */}
          {activeTab === 'live' && (
            <div className="space-y-4 animate-fadeIn">
              {/* Energy Boost & Laser Pointer Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* 1. Energy Boost */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-950/40 via-amber-950/20 to-slate-900 border border-orange-500/40 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                        <Flame className="w-5 h-5 animate-pulse" />
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-300 font-mono text-[10px] font-bold border border-orange-500/40">
                        Atajo: W
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-amber-200 mb-1 flex items-center gap-1.5">
                      <Volume2 className="w-4 h-4 text-orange-400" />
                      <span>¡Boost de Energía en Vivo!</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Dispara un acorde armónico C5-E6, lluvia de confeti y una vibración visual en pantalla para captar la atención de los alumnos.
                    </p>
                  </div>

                  <button
                    onClick={onTriggerWakeUp}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 hover:opacity-90 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <Flame className="w-4 h-4 text-slate-950 fill-current" />
                    <span>¡Disparar Ahora!</span>
                  </button>
                </div>

                {/* 2. Laser Pointer with Ribbon Trail */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-red-950/30 via-slate-900 to-slate-900 border border-red-500/40 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="p-2.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
                        <Crosshair className="w-5 h-5" />
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
                    <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                      <span>Puntero Láser con Cola Elegante</span>
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      Emite una estela neón fluida multicapa con núcleo incandescente y micro-chispas de plasma para señalar código y diagramas.
                    </p>
                  </div>

                  <button
                    onClick={onToggleLaser}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md ${
                      isLaserActive
                        ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/30'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                    }`}
                  >
                    <Crosshair className="w-4 h-4" />
                    <span>{isLaserActive ? 'Desactivar Puntero Láser' : 'Activar Puntero Láser'}</span>
                  </button>
                </div>
              </div>

              {/* Presenter Notes & Overview Grid Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenPresenter();
                  }}
                  className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-left transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300">
                        Notas del Expositor (Teleprompter)
                      </div>
                      <div className="text-[10px] text-slate-400">Guión, timer y vista previa</div>
                    </div>
                  </div>
                  <kbd className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-300 font-mono">P / N</kbd>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenOverview();
                  }}
                  className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/40 text-left transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Grid className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300">
                        Vista General (Grid de Diapositivas)
                      </div>
                      <div className="text-[10px] text-slate-400">Saltar a cualquier slide</div>
                    </div>
                  </div>
                  <kbd className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-cyan-300 font-mono">O</kbd>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: ESTILOS & CONTRASTE */}
          {activeTab === 'styles' && (
            <div className="space-y-5 animate-fadeIn">
              {/* Ritmo de Contraste */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-mono text-brand-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>Ritmo de Contraste Anti-Fatiga</span>
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
                            ? 'bg-brand-500/15 border-brand-400 text-white shadow-md shadow-brand-500/10 ring-1 ring-brand-400/40'
                            : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className={`p-2 rounded-xl shrink-0 mt-0.5 ${
                          isSelected ? 'bg-brand-500/25 text-brand-300' : 'bg-slate-800 text-slate-500'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0 pr-4">
                          <div className="text-xs font-bold text-white flex items-center gap-1.5 flex-wrap">
                            <span>{opt.label}</span>
                            {opt.isDefault && (
                              <span className="px-1.5 py-0.2 rounded bg-brand-500/20 text-brand-300 text-[9px] font-mono font-bold border border-brand-500/40">
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
                            <CheckCircle2 className="w-4 h-4 fill-brand-400 text-slate-950" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Paletas de Color */}
              <div className="pt-3 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" />
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
                        className={`p-3 rounded-2xl text-left transition-all border flex items-center justify-between ${
                          isCurrent
                            ? 'bg-slate-850 border-brand-400 text-white shadow-md ring-1 ring-brand-400/30'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${th.colorPill} shadow-sm shrink-0`} />
                          <div>
                            <div className="text-xs font-bold text-white leading-tight">{th.label}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{th.description}</div>
                          </div>
                        </div>
                        {isCurrent && <Check className="w-4 h-4 text-brand-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Auto Cycle Switch */}
                <div className="flex items-center justify-between bg-slate-900/70 p-3 rounded-2xl border border-slate-800 mt-3">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                      <span>Ciclo Automático de Neón</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
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
            </div>
          )}

          {/* TAB 3: HERRAMIENTAS & PANTALLA */}
          {activeTab === 'tools' && (
            <div className="space-y-4 animate-fadeIn">
              {/* Plan Software / App Blueprint / Brief Hero Action */}
              {(currentPresentation.hasSoftwarePlanGenerator || currentPresentation.hasAppBlueprintGenerator || currentPresentation.hasBriefGenerator) && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-indigo-950/40 border border-cyan-500/40 flex flex-wrap items-center justify-between gap-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-display">
                        {currentPresentation.hasAppBlueprintGenerator
                          ? '📱 Generador de APP BLUEPRINT'
                          : currentPresentation.hasSoftwarePlanGenerator
                          ? '📋 Generador del Plan de mi Software'
                          : '📄 Generador de Brief Web'}
                      </div>
                      <div className="text-[11px] text-cyan-200/90 font-mono">
                        {currentPresentation.hasAppBlueprintGenerator
                          ? 'Plano de 9 elementos para iOS + Expo Router + Supabase'
                          : currentPresentation.hasSoftwarePlanGenerator
                          ? 'Plantilla de 7 preguntas + Prompt listo para Antigravity IDE & Supabase'
                          : 'Generador de requerimientos para diseño y desarrollo web'}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                    onClose();
                    if (currentPresentation.hasAppBlueprintGenerator && onOpenAppBlueprint) {
                      onOpenAppBlueprint();
                    } else if (currentPresentation.hasSoftwarePlanGenerator) {
                      onOpenSoftwarePlan();
                    } else {
                      onOpenBrief();
                    }
                  }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-md shadow-cyan-500/25 transition-all hover:scale-105"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Abrir Generador</span>
                  </button>
                </div>
              )}

              {/* View Configuration Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Fullscreen Toggle */}
                <button
                  onClick={() => {
                    onToggleFullscreen();
                    onClose();
                  }}
                  className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 text-left transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-300 group-hover:text-cyan-400 transition-colors">
                      {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        {isFullscreen ? 'Salir de Pantalla Completa' : 'Pantalla Completa'}
                      </div>
                      <div className="text-[10px] text-slate-400">Modo Keynote inmersivo</div>
                    </div>
                  </div>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">F</kbd>
                </button>

                {/* Hide Navbar Toggle */}
                <button
                  onClick={() => {
                    onToggleHideNavbar();
                    onClose();
                  }}
                  className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 text-left transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-300 group-hover:text-cyan-400 transition-colors">
                      <EyeOff className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        {isNavbarHidden ? 'Fijar Barra Superior' : 'Ocultar Barra Superior'}
                      </div>
                      <div className="text-[10px] text-slate-400">Se revela pasando el mouse arriba</div>
                    </div>
                  </div>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">H</kbd>
                </button>

                {/* Copy Direct Link */}
                <button
                  onClick={handleCopyLink}
                  className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 text-left transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-800 text-cyan-400">
                      {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        {copiedLink ? '¡Link Copiado!' : 'Copiar Enlace Directo'}
                      </div>
                      <div className="text-[10px] text-slate-400">URL exacta del slide actual</div>
                    </div>
                  </div>
                </button>

                {/* Shortcuts Help */}
                <button
                  onClick={() => {
                    onClose();
                    onOpenShortcuts();
                  }}
                  className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 text-left transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-300 group-hover:text-cyan-400 transition-colors">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Atajos de Teclado</div>
                      <div className="text-[10px] text-slate-400">Guía rápida de teclas</div>
                    </div>
                  </div>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">?</kbd>
                </button>

                {/* View Hub Catalog */}
                <button
                  onClick={() => {
                    onClose();
                    onOpenHub();
                  }}
                  className="p-3.5 rounded-2xl bg-brand-500/10 hover:bg-brand-500/20 border border-brand-500/30 text-left transition-all flex items-center justify-between col-span-1 sm:col-span-2 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-500/20 text-brand-400 group-hover:scale-110 transition-transform">
                      <LayoutGrid className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-brand-200">Ver Catálogo de Presentaciones</div>
                      <div className="text-[10px] text-slate-400">Explorar todas las rutas y clases disponibles</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-brand-400 font-semibold">/hub →</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400 shrink-0">
          <span>💡 Presiona <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Esc</kbd> para cerrar</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all border border-slate-700/60"
          >
            Listo
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
