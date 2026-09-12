import React, { useState } from 'react';
import { 
  Sparkles, Layers, ArrowRight, Check, Copy, 
  Database, Globe, Play, Smartphone
} from 'lucide-react';
import type { Presentation } from '../types';

interface Props {
  presentations: Presentation[];
  onSelectPresentation: (p: Presentation, sectionIndex?: number) => void;
  onCloseHub: () => void;
}

export const PresentationHub: React.FC<Props> = ({
  presentations,
  onSelectPresentation,
  onCloseHub,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (p: Presentation, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/${p.id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(p.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const totalSlides = (p: Presentation) =>
    p.sections.reduce((acc, s) => acc + s.slides.length, 0);

  const getPresentationTheme = (id: string) => {
    switch (id) {
      case 'ruta-web-ai':
        return {
          icon: Globe,
          badgeBg: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300',
          cardBg: 'bg-gradient-to-b from-emerald-950/30 via-slate-950/70 to-slate-950/90 border-emerald-500/40 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/15',
          btnBg: 'bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400',
          accentDot: 'bg-emerald-400'
        };
      case 'ruta-software-ai':
        return {
          icon: Database,
          badgeBg: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300',
          cardBg: 'bg-gradient-to-b from-cyan-950/30 via-slate-950/70 to-slate-950/90 border-cyan-500/40 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/15',
          btnBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500',
          accentDot: 'bg-cyan-400'
        };
      case 'ruta-ios-ai':
      default:
        return {
          icon: Smartphone,
          badgeBg: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-300',
          cardBg: 'bg-gradient-to-b from-purple-950/30 via-slate-950/70 to-slate-950/90 border-purple-500/40 hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-500/15',
          btnBg: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500',
          accentDot: 'bg-pink-400'
        };
    }
  };

  return (
    <div className="h-full w-full flex flex-col p-6 sm:p-10 md:p-14 relative z-10 overflow-y-auto justify-between bg-slate-950/80 backdrop-blur-xl">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>PORTAL MULTI-PRESENTACIÓN & RUTAS DE APRENDIZAJE</span>
          </div>

          <button
            onClick={onCloseHub}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-mono border border-slate-700 transition-all flex items-center gap-2"
          >
            <span>Volver a la Presentación</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-display">
          Catálogo de Rutas con IA
        </h1>
        <p className="text-sm sm:text-lg text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Selecciona la ruta de formación que deseas proyectar o navegar. Cada ruta cuenta con diapositivas interactivas, notas de expositor, herramientas de generación y URLs directas.
        </p>
      </div>

      {/* Grid of Presentations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-auto py-6">
        {presentations.map((p) => {
          const slidesCount = totalSlides(p);
          const theme = getPresentationTheme(p.id);
          const Icon = theme.icon;

          return (
            <div
              key={p.id}
              onClick={() => onSelectPresentation(p, 0)}
              className={`glass-card p-6 sm:p-7 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between relative group hover:-translate-y-1.5 ${theme.cardBg}`}
            >
              <div>
                {/* Header Card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl border flex items-center justify-center ${theme.badgeBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {p.badge || '2 Clases'}
                      </span>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        Ruta: <code className="text-white font-bold">/{p.id}</code>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleCopyLink(p, e)}
                    className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1.5"
                    title="Copiar link directo a esta presentación"
                  >
                    {copiedId === p.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px] text-emerald-300 font-mono">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-mono">Link</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Title & Description */}
                <h2 className="text-xl sm:text-2xl font-black text-white font-display group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h2>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {p.subtitle}
                </p>

                {/* Modules / Sections List */}
                <div className="mt-4 space-y-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Módulos & Clases Incluidas:
                  </div>
                  <div className="space-y-1.5">
                    {p.sections.map((sec, sIdx) => (
                      <button
                        key={sec.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectPresentation(p, sIdx);
                        }}
                        className="w-full p-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-left transition-colors flex items-center justify-between group/sec"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className={`w-2 h-2 rounded-full ${theme.accentDot} group-hover/sec:scale-125 transition-transform shrink-0`} />
                          <span className="text-xs font-bold text-white group-hover/sec:text-cyan-300 transition-colors truncate">
                            {sec.shortTitle || sec.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">
                          {sec.slides.length} slides
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{slidesCount} diapositivas</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {p.hasBriefGenerator && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono text-brand-300">
                      Brief Web
                    </span>
                  )}
                  {p.hasSoftwarePlanGenerator && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono text-cyan-300">
                      Plan SaaS
                    </span>
                  )}
                  {p.hasAppBlueprintGenerator && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono text-purple-300">
                      App Blueprint
                    </span>
                  )}

                  <span className={`px-3 py-1.5 rounded-xl ${theme.btnBg} text-slate-950 font-bold text-xs font-mono flex items-center gap-1 shadow-md transition-all`}>
                    <Play className="w-3 h-3 fill-current" />
                    <span>Proyectar</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Rutas URL directas habilitadas: <code className="text-white font-bold">/ruta-web-ai</code>, <code className="text-white font-bold">/ruta-software-ai</code> y <code className="text-white font-bold">/ruta-ios-ai</code></span>
        </div>
        <div className="text-slate-500">
          Navega entre presentaciones y diapositivas con teclado o clic
        </div>
      </div>
    </div>
  );
};
