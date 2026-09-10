import React, { useState } from 'react';
import { 
  Sparkles, Layers, ArrowRight, Check, Copy, 
  FileText, Database, Globe, Play
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
          Selecciona la ruta de formación que deseas impartir o navegar. Cada ruta cuenta con diapositivas interactivas, notas de expositor, herramientas de generación y URLs directas.
        </p>
      </div>

      {/* Grid of Presentations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-auto py-6">
        {presentations.map((p) => {
          const isWeb = p.id === 'ruta-web-ai';
          const slidesCount = totalSlides(p);

          return (
            <div
              key={p.id}
              onClick={() => onSelectPresentation(p, 0)}
              className={`glass-card p-6 sm:p-8 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between relative group hover:-translate-y-1.5 ${
                isWeb
                  ? 'bg-gradient-to-b from-emerald-950/30 via-slate-950/70 to-slate-950/90 border-emerald-500/40 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/15'
                  : 'bg-gradient-to-b from-cyan-950/30 via-slate-950/70 to-slate-950/90 border-cyan-500/40 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/15'
              }`}
            >
              <div>
                {/* Header Card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl border flex items-center justify-center ${
                      isWeb 
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' 
                        : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                    }`}>
                      {isWeb ? <Globe className="w-6 h-6" /> : <Database className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {p.badge || '2 Clases'}
                      </span>
                      <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                        Ruta Interna: <code className="text-white font-bold">/{p.id}</code>
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
                <h2 className="text-2xl sm:text-3xl font-black text-white font-display group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {p.subtitle}
                </p>

                {/* Modules / Sections List */}
                <div className="mt-5 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Módulos & Clases Incluidas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {p.sections.map((sec, sIdx) => (
                      <button
                        key={sec.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectPresentation(p, sIdx);
                        }}
                        className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-left transition-colors flex items-center justify-between group/sec"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover/sec:scale-125 transition-transform" />
                          <span className="text-xs font-bold text-white group-hover/sec:text-cyan-300 transition-colors">
                            {sec.shortTitle || sec.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">
                          {sec.slides.length} slides
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>{slidesCount} diapositivas interactivas</span>
                </div>

                <div className="flex items-center gap-2">
                  {p.hasBriefGenerator && (
                    <span className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-brand-300 flex items-center gap-1">
                      <FileText className="w-3 h-3" /> Generador Brief
                    </span>
                  )}
                  {p.hasSoftwarePlanGenerator && (
                    <span className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Plan Software
                    </span>
                  )}

                  <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:from-cyan-400 group-hover:to-blue-500 text-slate-950 font-bold text-xs font-mono flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all">
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
          <span>Rutas URL directas habilitadas: <code className="text-white font-bold">/ruta-web-ai</code> y <code className="text-white font-bold">/ruta-software-ai</code></span>
        </div>
        <div className="text-slate-500">
          Usa los botones de navegación o las flechas del teclado para proyectar
        </div>
      </div>
    </div>
  );
};
