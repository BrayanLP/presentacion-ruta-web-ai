import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Layers } from 'lucide-react';
import type { PresentationSection } from '../types';

interface Props {
  sections: PresentationSection[];
  currentSectionIndex: number;
  onSelectSection: (index: number) => void;
}

const SECTION_COLORS: Record<string, { active: string; dot: string; text: string; bg: string }> = {
  emerald: {
    active: 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300',
    dot: 'bg-emerald-400',
    text: 'text-emerald-300',
    bg: 'bg-emerald-500/10'
  },
  violet: {
    active: 'border-violet-500/60 bg-violet-950/40 text-violet-300',
    dot: 'bg-violet-400',
    text: 'text-violet-300',
    bg: 'bg-violet-500/10'
  },
  cyan: {
    active: 'border-cyan-500/60 bg-cyan-950/40 text-cyan-300',
    dot: 'bg-cyan-400',
    text: 'text-cyan-300',
    bg: 'bg-cyan-500/10'
  },
  amber: {
    active: 'border-amber-500/60 bg-amber-950/40 text-amber-300',
    dot: 'bg-amber-400',
    text: 'text-amber-300',
    bg: 'bg-amber-500/10'
  },
  pink: {
    active: 'border-pink-500/60 bg-pink-950/40 text-pink-300',
    dot: 'bg-pink-400',
    text: 'text-pink-300',
    bg: 'bg-pink-500/10'
  },
  blue: {
    active: 'border-blue-500/60 bg-blue-950/40 text-blue-300',
    dot: 'bg-blue-400',
    text: 'text-blue-300',
    bg: 'bg-blue-500/10'
  }
};

export const SectionSelector: React.FC<Props> = ({
  sections,
  currentSectionIndex,
  onSelectSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeSection = sections[currentSectionIndex] || sections[0];
  const activeColorKey = activeSection?.color || (currentSectionIndex === 0 ? 'emerald' : 'violet');
  const activeColors = SECTION_COLORS[activeColorKey] || SECTION_COLORS.emerald;

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  if (sections.length <= 1) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0e1424] border border-slate-800 text-xs font-mono text-slate-300">
        <span className={`w-2 h-2 rounded-full ${activeColors.dot}`} />
        <span className="font-semibold">{activeSection.shortTitle || activeSection.title}</span>
      </div>
    );
  }

  return (
    <div className="relative select-none z-[90]" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all shadow-sm group ${
          isOpen
            ? 'bg-[#121929] border-cyan-500/50 ring-1 ring-cyan-500/30'
            : 'bg-[#0e1424] hover:bg-[#151e33] border-slate-800 hover:border-slate-700 text-slate-200'
        }`}
        title="Cambiar de Módulo o Clase"
      >
        <span className={`w-2 h-2 rounded-full ${activeColors.dot} animate-pulse`} />
        
        <span className="text-xs font-mono font-semibold text-white tracking-tight truncate max-w-[130px] sm:max-w-[170px]">
          {activeSection.shortTitle || activeSection.title}
        </span>

        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#162035] text-slate-300 hidden sm:inline border border-slate-800">
          {activeSection.slides.length} slides
        </span>

        <ChevronDown className={`w-3 h-3 text-slate-400 group-hover:text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu Modal - 100% Solid Opaque Background */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 rounded-2xl bg-[#080c16] border border-slate-700/90 shadow-2xl shadow-black p-2.5 z-[140] animate-fadeIn ring-1 ring-white/10">
          <div className="px-2.5 py-1.5 border-b border-slate-800/90 flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-cyan-400" />
              Módulos / Clases
            </span>
            <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-[#121929] border border-slate-800">
              {sections.length} disponibles
            </span>
          </div>

          <div className="space-y-1.5 max-h-72 overflow-y-auto pr-0.5">
            {sections.map((sec, idx) => {
              const isSelected = idx === currentSectionIndex;
              const colorKey = sec.color || (idx === 0 ? 'emerald' : idx === 1 ? 'violet' : 'cyan');
              const colors = SECTION_COLORS[colorKey] || SECTION_COLORS.emerald;

              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    onSelectSection(idx);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl transition-all border flex flex-col gap-0.5 group ${
                    isSelected
                      ? `${colors.active} shadow-sm ring-1 ring-cyan-500/20`
                      : 'bg-[#0f1626] border-slate-800/90 hover:bg-[#162035] hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                      <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                        {sec.title}
                      </span>
                    </div>

                    {isSelected && (
                      <span className="p-0.5 rounded bg-cyan-500/20 text-cyan-300">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>

                  {sec.description && (
                    <p className="text-[10px] text-slate-400 leading-snug line-clamp-1 pl-4 mt-0.5">
                      {sec.description}
                    </p>
                  )}

                  <div className="flex items-center gap-2 pl-4 pt-1 text-[10px] font-mono text-slate-400 border-t border-slate-800/50 mt-1">
                    <span>{sec.slides.length} diapositivas</span>
                    {sec.badge && (
                      <>
                        <span>•</span>
                        <span className={colors.text}>{sec.badge}</span>
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
