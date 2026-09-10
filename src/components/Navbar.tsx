import React, { useState } from 'react';
import { Sliders } from 'lucide-react';
import type { Presentation, ThemeMode, ContrastRhythm } from '../types';
import { PresentationSelector } from './PresentationSelector';
import { SectionSelector } from './SectionSelector';
import { ControlCenterModal, THEMES_LIST } from './ControlCenterModal';

interface Props {
  presentations: Presentation[];
  currentPresentation: Presentation;
  onSelectPresentation: (p: Presentation) => void;
  currentSectionIndex: number;
  onSelectSection: (index: number) => void;
  currentSlideIndex: number;
  totalSlides: number;
  onOpenOverview: () => void;
  onOpenPresenter: () => void;
  onOpenBrief: () => void;
  onOpenSoftwarePlan: () => void;
  onOpenHub: () => void;
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
  presentations,
  currentPresentation,
  onSelectPresentation,
  currentSectionIndex,
  onSelectSection,
  currentSlideIndex,
  totalSlides,
  onOpenOverview,
  onOpenPresenter,
  onOpenBrief,
  onOpenSoftwarePlan,
  onOpenHub,
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
  const [isControlCenterOpen, setIsControlCenterOpen] = useState(false);

  const activeThemeObj = THEMES_LIST.find((t) => t.id === currentTheme) || THEMES_LIST[0];

  return (
    <header
      className={`h-16 px-3 sm:px-6 glass-panel border-b border-slate-800/80 flex items-center justify-between relative z-50 shrink-0 select-none transition-transform duration-300 ease-in-out ${
        isNavbarHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Left: Presentation Switcher & Class Dropdown */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Presentation Switcher Dropdown */}
        <PresentationSelector
          presentations={presentations}
          currentPresentation={currentPresentation}
          onSelectPresentation={onSelectPresentation}
          onOpenHub={onOpenHub}
        />

        <div className="h-4 w-px bg-slate-800 hidden sm:block" />

        {/* Section / Class Selection Dropdown */}
        <SectionSelector
          sections={currentPresentation.sections}
          currentSectionIndex={currentSectionIndex}
          onSelectSection={onSelectSection}
        />
      </div>

      {/* Center: Progress & Slide Counter */}
      <div className="hidden xl:flex items-center gap-3">
        <span className="text-xs font-mono text-slate-400">
          Slide <strong className="text-white">{currentSlideIndex + 1}</strong> de {totalSlides}
        </span>
        <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-brand-400 transition-all duration-300"
            style={{ width: `${((currentSlideIndex + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Right: Single Unified Button Opening the Control Center Dialog */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsControlCenterOpen(true)}
          className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-800 hover:border-cyan-500/50 text-xs font-mono font-semibold transition-all flex items-center gap-2 shadow-sm group hover:scale-[1.02] active:scale-95"
          title="Abrir Centro de Control y Herramientas (Atajos: W, C, L, T, P, O, F)"
        >
          <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
            <Sliders className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold">Herramientas</span>
          <div className="flex items-center gap-1.5 pl-1.5 border-l border-slate-800">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeThemeObj.colorPill}`} />
            <span className="text-[10px] text-slate-400 font-mono hidden md:inline">
              {contrastRhythm === 'alternating' ? 'Intercalado' : contrastRhythm === 'all-light' ? 'Luz' : contrastRhythm === 'vibrant-warm' ? 'Cálido' : 'Oscuro'}
            </span>
          </div>
        </button>
      </div>

      {/* Unified Control Center Modal Dialog */}
      <ControlCenterModal
        isOpen={isControlCenterOpen}
        onClose={() => setIsControlCenterOpen(false)}
        currentPresentation={currentPresentation}
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onOpenOverview={onOpenOverview}
        onOpenPresenter={onOpenPresenter}
        onOpenBrief={onOpenBrief}
        onOpenSoftwarePlan={onOpenSoftwarePlan}
        onOpenHub={onOpenHub}
        onOpenShortcuts={onOpenShortcuts}
        isFullscreen={isFullscreen}
        onToggleFullscreen={onToggleFullscreen}
        isNavbarHidden={isNavbarHidden}
        onToggleHideNavbar={onToggleHideNavbar}
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
    </header>
  );
};
