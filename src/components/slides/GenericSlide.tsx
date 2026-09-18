import React from 'react';
import { 
  Sparkles, ArrowRight, CheckCircle2, XCircle, Lightbulb, 
  AlertTriangle, Zap, Quote as QuoteIcon,
  Terminal, Layers
} from 'lucide-react';
import type { SlideData } from '../../types';

interface Props {
  slide: SlideData;
  onNext?: () => void;
  onOpenBrief?: () => void;
}

export const GenericSlide: React.FC<Props> = ({ slide, onNext, onOpenBrief }) => {
  const layout = slide.layout || 'grid';

  const handleCta = () => {
    if (slide.heroCta?.action === 'brief' && onOpenBrief) {
      onOpenBrief();
    } else if (slide.heroCta?.action === 'external' && slide.heroCta.url) {
      window.open(slide.heroCta.url, '_blank');
    } else if (onNext) {
      onNext();
    }
  };

  // 1. HERO LAYOUT
  if (layout === 'hero') {
    return (
      <div className="h-full flex flex-col justify-between p-6 sm:p-10 md:p-14 relative z-10 overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
            <span>{slide.badge || slide.category}</span>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Slide 0{slide.slideNumber} / 0{slide.totalInClass}
          </span>
        </div>

        <div className="max-w-4xl my-auto py-6 space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-display leading-[1.1]">
            {slide.title}
          </h1>

          {slide.subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl">
              {slide.subtitle}
            </p>
          )}

          {/* Stats in Hero if available */}
          {slide.stats && slide.stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {slide.stats.map((stat, i) => (
                <div key={i} className="glass-card p-3.5 rounded-2xl border border-slate-800 bg-slate-900/60">
                  <div className="text-2xl sm:text-3xl font-black text-brand-400 font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">{stat.label}</div>
                  {stat.subtext && (
                    <div className="text-[10px] text-slate-400 mt-0.5">{stat.subtext}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Points list in Hero if available */}
          {slide.points && slide.points.length > 0 && (
            <div className="flex flex-wrap gap-2.5 pt-2">
              {slide.points.map((pt, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-200">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{pt.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping" />
            <span>{slide.category}</span>
          </div>

          <button
            onClick={handleCta}
            className="group px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-500 via-cyan-500 to-pink-500 hover:opacity-90 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-brand-500/25 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{slide.heroCta?.text || 'Comenzar Diapositiva'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  // 2. COMPARISON LAYOUT
  if (layout === 'comparison' && slide.comparison) {
    const { comparison } = slide;
    return (
      <div className="h-full flex flex-col p-6 sm:p-8 md:p-10 relative z-10 overflow-y-auto justify-between">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              {slide.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Slide 0{slide.slideNumber} / 0{slide.totalInClass}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-3xl">
              {slide.subtitle}
            </p>
          )}
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-4">
          {/* Left / Bad / Traditional Card */}
          <div className="glass-card p-5 sm:p-6 rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-950/20 to-slate-950/60 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 font-mono text-xs font-bold flex items-center gap-1.5 border border-red-500/40">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  {comparison.leftBadge || 'Enfoque Tradicional'}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {comparison.leftTitle}
              </h3>
              {comparison.leftSubtitle && (
                <p className="text-xs text-slate-400 mb-4">{comparison.leftSubtitle}</p>
              )}
              <div className="space-y-2.5">
                {comparison.leftItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right / Good / AI Accelerated Card */}
          <div className="glass-card p-5 sm:p-6 rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/25 to-slate-950/60 shadow-xl flex flex-col justify-between ring-1 ring-emerald-500/20">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5 border border-emerald-500/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {comparison.rightBadge || 'Con IA & Automatización'}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">10x MÁS RÁPIDO</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {comparison.rightTitle}
              </h3>
              {comparison.rightSubtitle && (
                <p className="text-xs text-slate-400 mb-4">{comparison.rightSubtitle}</p>
              )}
              <div className="space-y-2.5">
                {comparison.rightItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Callout */}
        {slide.callout ? (
          <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs text-slate-300">
              <strong className="text-white">{slide.callout.title}: </strong>
              {slide.callout.text}
            </div>
          </div>
        ) : (
          <div className="text-xs font-mono text-slate-400 text-right">
            Tiempo estimado: ~{slide.durationMinutes} min
          </div>
        )}
      </div>
    );
  }

  // 3. SPLIT LAYOUT (Left Points, Right Visual/Code/Card)
  if (layout === 'split') {
    return (
      <div className="h-full flex flex-col p-6 sm:p-8 md:p-10 relative z-10 overflow-y-auto justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              {slide.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Slide 0{slide.slideNumber} / 0{slide.totalInClass}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-3xl">
              {slide.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-4 items-center">
          {/* Left Column: Points & Explanations */}
          <div className="lg:col-span-6 space-y-3">
            {slide.points && slide.points.map((pt, i) => (
              <div 
                key={i} 
                className={`p-4 rounded-2xl border transition-all ${
                  pt.highlight 
                    ? 'bg-brand-500/10 border-brand-500/40 shadow-lg shadow-brand-500/10' 
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                {pt.title && (
                  <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {pt.title}
                  </h4>
                )}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pt.text}
                </p>
              </div>
            ))}

            {slide.callout && (
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300">{slide.callout.title}: </strong>
                  {slide.callout.text}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Code snippet OR Highlight Cards */}
          <div className="lg:col-span-6">
            {slide.codeSnippet ? (
              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-brand-400" />
                    <span>{slide.codeSnippet.title || slide.codeSnippet.language}</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                </div>
                <pre className="p-4 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
                  <code>{slide.codeSnippet.code}</code>
                </pre>
              </div>
            ) : slide.cards && slide.cards.length > 0 ? (
              <div className="space-y-3">
                {slide.cards.map((card, idx) => (
                  <div key={idx} className="glass-card p-4 rounded-2xl border border-slate-800 bg-slate-900/80">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-bold text-white">{card.title}</h4>
                      {card.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300">{card.desc}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 mt-4">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span>{slide.category}</span>
            <span className="hidden sm:inline">&bull; ~{slide.durationMinutes} min</span>
          </div>
          {slide.heroCta && (
            <button
              onClick={handleCta}
              className="group px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 via-cyan-500 to-pink-500 hover:opacity-90 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-brand-500/25 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{slide.heroCta.text}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // 4. TIMELINE LAYOUT
  if (layout === 'timeline' && slide.timeline) {
    return (
      <div className="h-full flex flex-col p-6 sm:p-8 md:p-10 relative z-10 overflow-y-auto justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              {slide.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Slide 0{slide.slideNumber} / 0{slide.totalInClass}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-3xl">
              {slide.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto py-4">
          {slide.timeline.map((item, idx) => (
            <div key={idx} className="glass-card p-5 rounded-3xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-brand-500/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-brand-500/20 text-brand-300 font-mono font-black text-sm flex items-center justify-center border border-brand-500/30 group-hover:scale-110 transition-transform">
                    {item.step || `0${idx + 1}`}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/80">
          <span>Paso a paso guiado</span>
          <span>~{slide.durationMinutes} min</span>
        </div>
      </div>
    );
  }

  // 5. QUOTE LAYOUT
  if (layout === 'quote' && slide.quote) {
    return (
      <div className="h-full flex flex-col p-6 sm:p-10 md:p-14 relative z-10 overflow-y-auto justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            {slide.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            Slide 0{slide.slideNumber} / 0{slide.totalInClass}
          </span>
        </div>

        <div className="max-w-4xl mx-auto my-auto text-center space-y-6">
          <QuoteIcon className="w-12 h-12 text-brand-400/40 mx-auto" />
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display leading-tight">
            "{slide.quote.text}"
          </blockquote>
          {(slide.quote.author || slide.quote.role) && (
            <div className="pt-2">
              <div className="text-lg font-bold text-brand-300 font-display">
                {slide.quote.author}
              </div>
              {slide.quote.role && (
                <div className="text-xs font-mono text-slate-400">{slide.quote.role}</div>
              )}
            </div>
          )}
        </div>

        <div className="text-xs font-mono text-slate-400 text-center">
          Idea clave para recordar
        </div>
      </div>
    );
  }

  // 6. DEFAULT / GRID LAYOUT
  return (
    <div className="h-full flex flex-col p-6 sm:p-8 md:p-10 relative z-10 overflow-y-auto justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            {slide.category}
          </span>
          <span className="text-xs font-mono text-slate-400">
            Slide 0{slide.slideNumber} / 0{slide.totalInClass}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display">
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-3xl">
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Cards Grid */}
      {slide.cards && slide.cards.length > 0 ? (
        <div className={`grid gap-4 my-auto py-4 ${
          slide.cards.length === 2 
            ? 'grid-cols-1 md:grid-cols-2' 
            : slide.cards.length === 3 
            ? 'grid-cols-1 md:grid-cols-3' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        }`}>
          {slide.cards.map((card, idx) => (
            <div 
              key={idx} 
              className="glass-card p-5 rounded-3xl border border-slate-800 bg-slate-900/80 flex flex-col justify-between hover:border-brand-500/40 hover:-translate-y-1 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    <Layers className="w-4 h-4" />
                  </span>
                  {card.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {card.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {card.desc}
                </p>

                {card.list && card.list.length > 0 && (
                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {card.list.map((li, lIdx) => (
                      <li key={lIdx} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : slide.points && slide.points.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-auto py-4">
          {slide.points.map((pt, i) => (
            <div key={i} className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-800 bg-slate-900/80">
              {pt.title && (
                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {pt.title}
                </h4>
              )}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pt.text}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {/* Footer info */}
      <div className="text-xs font-mono text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/80">
        <span>{slide.category}</span>
        <span>~{slide.durationMinutes} min</span>
      </div>
    </div>
  );
};
