import React from 'react';
import { 
  Maximize2, Minimize2, Grid, BookOpen, FileText, 
  HelpCircle, EyeOff 
} from 'lucide-react';
import type { ClassId, ThemeMode, ContrastRhythm } from '../types';
import { ThemeSelector } from './ThemeSelector';

interface Props {
  currentClass: ClassId;
  onSelectClass: (c: ClassId) => void;
  currentSlideIndex: number;
  totalSlides: number;
  onOpenOverview: () => void;
  onOpenPresenter: () => void;
  onOpenBrief: () => void;
  onOpenShortcuts: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  currentTheme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
  contrastRhythm: ContrastRhythm;
  onSelectContrastRhythm: (r: ContrastRhythm) => void;
  autoCycle: boolean;
  onToggleAutoCycle: () => void;
  isLaserActive: boolean;
  onToggleLaser: () => void;
  onTriggerWakeUp: () => void;
  isNavbarHidden: boolean;
  onToggleHideNavbar: () => void;
}

export const Navbar: React.FC<Props> = ({
  currentClass,
  onSelectClass,
  currentSlideIndex,
  totalSlides,
  onOpenOverview,
  onOpenPresenter,
  onOpenBrief,
  onOpenShortcuts,
  isFullscreen,
  onToggleFullscreen,
  currentTheme,
  onSelectTheme,
  contrastRhythm,
  onSelectContrastRhythm,
  autoCycle,
  onToggleAutoCycle,
  isLaserActive,
  onToggleLaser,
  onTriggerWakeUp,
  isNavbarHidden,
  onToggleHideNavbar,
}) => {
  return (
    <header
      className={`h-16 px-4 sm:px-6 glass-panel border-b border-slate-800/80 flex items-center justify-between z-30 shrink-0 select-none transition-transform duration-300 ease-in-out ${
        isNavbarHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Brand & Class Switcher */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-500 via-cyan-400 to-pink-500 flex items-center justify-center text-slate-950 font-black text-sm shadow-md shadow-brand-500/20 animate-pulse-slow">
            AI
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-white text-sm tracking-tight font-display">
              Ruta Web con IA
            </span>
          </div>
        </div>

        <div className="h-5 w-px bg-slate-800 hidden sm:block" />

        {/* Class Selection Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onSelectClass(0)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
              currentClass === 0
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold">Clase 0: Entorno</span>
          </button>

          <button
            onClick={() => onSelectClass(1)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 ${
              currentClass === 1
                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="font-semibold">Clase 1: Estrategia</span>
          </button>
        </div>
      </div>

      {/* Progress & Slide Counter */}
      <div className="hidden xl:flex items-center gap-3">
        <span className="text-xs font-mono text-slate-400">
          Slide <strong className="text-white">{currentSlideIndex + 1}</strong> de {totalSlides}
        </span>
        <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-400 to-cyan-400 transition-all duration-300"
            style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Action Buttons & Theme Controls */}
      <div className="flex items-center gap-2">
        {/* Theme & Energy Controls */}
        <ThemeSelector
          currentTheme={currentTheme}
          onSelectTheme={onSelectTheme}
          contrastRhythm={contrastRhythm}
          onSelectContrastRhythm={onSelectContrastRhythm}
          autoCycle={autoCycle}
          onToggleAutoCycle={onToggleAutoCycle}
          isLaserActive={isLaserActive}
          onToggleLaser={onToggleLaser}
          onTriggerWakeUp={onTriggerWakeUp}
        />

        <div className="h-5 w-px bg-slate-800 hidden sm:block" />

        {/* Brief Generator trigger button */}
        <button
          onClick={onOpenBrief}
          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-brand-500/20 to-cyan-500/20 hover:from-brand-500/30 hover:to-cyan-500/30 text-brand-300 border border-brand-500/30 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 shadow-sm"
          title="Abrir Generador de Brief (B)"
        >
          <FileText className="w-3.5 h-3.5 text-brand-400" />
          <span className="hidden sm:inline">Brief</span>
        </button>

        {/* Presenter Notes */}
        <button
          onClick={onOpenPresenter}
          className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60"
          title="Notas de Presentador (P / N)"
        >
          <BookOpen className="w-4 h-4" />
        </button>

        {/* Slide Overview Grid */}
        <button
          onClick={onOpenOverview}
          className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60"
          title="Vista General de Slides (O)"
        >
          <Grid className="w-4 h-4" />
        </button>

        {/* Shortcuts Help */}
        <button
          onClick={onOpenShortcuts}
          className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60"
          title="Atajos de Teclado (?)"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Hide Navbar Toggle Button */}
        <button
          onClick={onToggleHideNavbar}
          className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60"
          title="Ocultar Barra Superior para Presentar (H)"
        >
          <EyeOff className="w-4 h-4 text-cyan-400" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onToggleFullscreen}
          className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700/60"
          title="Pantalla Completa (F)"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
