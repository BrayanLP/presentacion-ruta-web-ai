import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, ChevronDown, Check, FolderOpen, 
  Presentation as PresentationIcon, Search, LayoutGrid
} from 'lucide-react';
import type { Presentation } from '../types';

interface Props {
  presentations: Presentation[];
  currentPresentation: Presentation;
  onSelectPresentation: (p: Presentation) => void;
  onOpenHub?: () => void;
}

export const PresentationSelector: React.FC<Props> = ({
  presentations,
  currentPresentation,
  onSelectPresentation,
  onOpenHub,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const totalSlides = (p: Presentation) =>
    p.sections.reduce((acc, s) => acc + s.slides.length, 0);

  const filteredPresentations = presentations.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (p.subtitle && p.subtitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (p.badge && p.badge.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="relative select-none z-[100]" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition-all shadow-md group ${
          isOpen
            ? 'bg-[#121929] border-brand-500/60 ring-2 ring-brand-500/30'
            : 'bg-[#0e1424] hover:bg-[#151e33] border-slate-800 hover:border-brand-500/40 text-slate-100'
        }`}
        title="Cambiar de Presentación"
      >
        <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-500 via-cyan-400 to-pink-500 flex items-center justify-center text-slate-950 font-black text-xs shadow-sm shadow-brand-500/20 group-hover:scale-105 transition-transform">
          <PresentationIcon className="w-4 h-4 text-slate-950" />
        </div>

        <div className="text-left hidden sm:block">
          <div className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5 leading-none">
            <span className="font-display truncate max-w-[150px] lg:max-w-[200px]">
              {currentPresentation.shortTitle || currentPresentation.title}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-cyan-400 group-hover:text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          <span className="text-[10px] font-mono text-slate-400 leading-none mt-0.5 block">
            {currentPresentation.badge || `${currentPresentation.sections.length} módulos`}
          </span>
        </div>

        <ChevronDown className="w-3.5 h-3.5 text-slate-400 sm:hidden" />
      </button>

      {/* Dropdown Menu - 100% Solid Opaque Background */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2.5 w-84 sm:w-[420px] rounded-3xl bg-[#080c16] border border-slate-700/90 shadow-2xl shadow-black p-3 z-[150] animate-fadeIn ring-1 ring-white/10">
          {/* Header */}
          <div className="p-2.5 border-b border-slate-800/90 flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <FolderOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-display">
                  Catálogo de Presentaciones
                </h4>
                <p className="text-[10px] text-slate-400 font-mono">
                  Selecciona la presentación a proyectar
                </p>
              </div>
            </div>
            
            {onOpenHub && (
              <button
                onClick={() => {
                  onOpenHub();
                  setIsOpen(false);
                }}
                className="px-2.5 py-1 rounded-lg bg-[#121929] hover:bg-[#1a233a] text-[10px] font-mono text-cyan-300 border border-slate-700 transition-colors flex items-center gap-1"
                title="Ver Catálogo en Pantalla Completa (/hub)"
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Ver Hub</span>
              </button>
            )}
          </div>

          {/* Search Bar if multiple presentations */}
          {presentations.length > 2 && (
            <div className="px-2 mb-2">
              <div className="relative flex items-center">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Buscar presentación..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#0e1424] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          )}

          {/* Presentations List */}
          <div className="space-y-2 max-h-88 overflow-y-auto pr-1">
            {filteredPresentations.map((p) => {
              const isSelected = p.id === currentPresentation.id;
              const slidesCount = totalSlides(p);

              return (
                <button
                  key={p.id}
                  onClick={() => {
                    onSelectPresentation(p);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all border flex flex-col gap-1.5 relative group ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-500/20 via-cyan-500/15 to-pink-500/15 border-brand-500/60 text-white shadow-lg shadow-brand-500/15 ring-1 ring-brand-500/40'
                      : 'bg-[#0f1626] border-slate-800/90 hover:bg-[#162035] hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${isSelected ? 'bg-brand-400 animate-pulse shadow-sm shadow-brand-400' : 'bg-slate-600 group-hover:bg-slate-400'}`} />
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-300 transition-colors font-display">
                          {p.title}
                        </h5>
                        <div className="text-[10px] font-mono text-cyan-400">/{p.id}</div>
                      </div>
                    </div>

                    {isSelected ? (
                      <span className="px-2 py-0.5 rounded-md bg-brand-500/25 text-brand-300 text-[10px] font-mono font-bold flex items-center gap-1 border border-brand-500/40 shrink-0">
                        <Check className="w-3 h-3" /> Activa
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0">
                        Abrir →
                      </span>
                    )}
                  </div>

                  {p.subtitle && (
                    <p className="text-[11px] text-slate-400 leading-snug pl-5 line-clamp-2">
                      {p.subtitle}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-2 pl-5 pt-1 text-[10px] font-mono text-slate-400 border-t border-slate-800/50 mt-1">
                    <span className="px-2 py-0.5 rounded bg-[#162035] border border-slate-700/80 text-cyan-300 font-semibold">
                      {p.sections.length} {p.sections.length === 1 ? 'módulo' : 'módulos'}
                    </span>
                    <span>•</span>
                    <span>{slidesCount} diapositivas</span>
                    {p.badge && (
                      <>
                        <span>•</span>
                        <span className="text-brand-400 font-medium">{p.badge}</span>
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer Info */}
          <div className="p-2 mt-2 border-t border-slate-800/90 text-[10px] font-mono text-slate-400 text-center flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-brand-400 animate-spin-slow" />
            <span>Rutas internas: /ruta-web-ai & /ruta-software-ai</span>
          </div>
        </div>
      )}
    </div>
  );
};
