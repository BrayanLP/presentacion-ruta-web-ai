import React, { useState } from 'react';
import { Globe, CheckCircle2, Sparkles, Search, Bot, Rocket, Shield, BarChart2, Star, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const ACHIEVEMENTS = [
  { id: 'seo', emoji: '🔎', label: 'SEO Optimizado', desc: 'Google te entiende y te posiciona', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
  { id: 'geo', emoji: '🤖', label: 'GEO Implementado', desc: 'ChatGPT, Gemini y Perplexity te citan', color: 'text-violet-400', border: 'border-violet-500/30', bg: 'bg-violet-500/10' },
  { id: 'domain', emoji: '🌐', label: 'Dominio Propio', desc: 'Tu dirección permanente en internet', color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' },
  { id: 'ssl', emoji: '🔒', label: 'HTTPS Activo', desc: 'Seguro y confiable para tus clientes', color: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-500/10' },
  { id: 'analytics', emoji: '📈', label: 'Analytics Online', desc: 'Datos reales de tus visitantes', color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10' },
  { id: 'console', emoji: '📊', label: 'Search Console', desc: 'Monitoreo en Google activado', color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-500/10' },
];

const MASTER_PROMPT = `Eres el Agente Launch Manager especializado en SEO + GEO + Publicación.

FASE 1 — SEO:
- Agrega títulos únicos con keyword principal (máx 60 chars)
- Escribe meta descriptions de 150 chars con CTA
- Estructura H1/H2/H3 con jerarquía de keywords
- Optimiza URLs con kebab-case semántico
- Implementa Schema JSON-LD (LocalBusiness + FAQPage)
- Genera sitemap.xml y robots.txt
- Configura og:image, og:title y og:description
- Agrega Google Search Console verification tag

FASE 2 — GEO:
- Schema LocalBusiness completo con todos los atributos
- FAQPage con 8-10 preguntas semánticas del negocio
- Entidad clara: name, type, location, priceRange, rating
- sameAs con perfiles verificados (Google Business, LinkedIn)
- Contenido semántico con entidades relacionadas
- Información local: dirección, horarios, métodos de pago

FASE 3 — PUBLICACIÓN:
- Verificar build limpio con "npm run build"
- Push al repositorio GitHub (rama main)
- Deploy automático en Vercel
- Conectar dominio personalizado en Vercel Settings
- Verificar SSL activo (https://)
- Subir favicon y apple-touch-icon en /public
- Integrar Vercel Analytics y Google Analytics 4
- Enviar sitemap al Search Console

RESULTADO ESPERADO: Web publicada, indexada y lista para recibir clientes.`;

export const Slide5LaunchStation: React.FC = () => {
  const [launched, setLaunched] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeAchievements, setActiveAchievements] = useState<Set<string>>(new Set());

  const handleLaunch = () => {
    setLaunched(true);
    // Activate all achievements with stagger
    ACHIEVEMENTS.forEach((a, i) => {
      setTimeout(() => {
        setActiveAchievements(prev => new Set([...prev, a.id]));
      }, i * 200);
    });
    // Confetti burst
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#8B5CF6', '#06B6D4', '#F59E0B', '#EF4444']
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.5 },
          colors: ['#10B981', '#8B5CF6', '#06B6D4']
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.5 },
          colors: ['#F59E0B', '#EF4444', '#8B5CF6']
        });
      }, 400);
    }, 300);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(MASTER_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col p-6 sm:p-8 relative overflow-hidden gap-4">
      {/* Ambient glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 shrink-0">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Star className="w-3.5 h-3.5" /> Resultado Final
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            🌐 Web Publicada en Internet
          </h2>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-bold transition-all ${
          launched
            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
            : 'bg-slate-900 border-slate-700 text-slate-400'
        }`}>
          {launched
            ? <><CheckCircle2 className="w-4 h-4" /> ¡Lanzamiento Exitoso!</>
            : <><Globe className="w-4 h-4" /> Pendiente de Lanzamiento</>
          }
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0">
        {/* Left column: Achievements + Launch button */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Achievement grid */}
          <div className="grid grid-cols-2 gap-2 flex-1">
            {ACHIEVEMENTS.map((a) => {
              const isActive = activeAchievements.has(a.id);
              return (
                <div
                  key={a.id}
                  className={`p-3.5 rounded-xl border transition-all duration-500 flex flex-col gap-2 ${
                    isActive
                      ? `${a.bg} ${a.border} shadow-lg`
                      : 'bg-slate-950/60 border-slate-800/80 opacity-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl">{a.emoji}</span>
                    {isActive && <CheckCircle2 className={`w-4 h-4 ${a.color}`} />}
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${isActive ? a.color : 'text-slate-500'}`}>{a.label}</div>
                    <div className="text-[10px] text-slate-500 leading-tight">{a.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 shrink-0">
            {[
              { icon: Search, label: 'SEO', value: '9 factores', color: 'text-emerald-400' },
              { icon: Bot, label: 'GEO', value: '7 señales', color: 'text-violet-400' },
              { icon: Rocket, label: 'Deploy', value: '8 pasos', color: 'text-cyan-400' },
            ].map((stat) => (
              <div key={stat.label} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                <stat.icon className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                <div className={`text-base font-black ${stat.color}`}>{stat.value}</div>
                <div className="text-[10px] text-slate-500 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Launch button */}
          <button
            onClick={handleLaunch}
            disabled={launched}
            className={`w-full py-4 rounded-2xl font-black text-base transition-all flex items-center justify-center gap-3 ${
              launched
                ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 cursor-default'
                : 'bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 hover:from-emerald-400 hover:to-violet-400 text-slate-950 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-500/20'
            }`}
          >
            {launched ? (
              <><CheckCircle2 className="w-5 h-5" /> ¡Web Publicada con Éxito!</>
            ) : (
              <><Rocket className="w-5 h-5" /> 🚀 ¡Lanzar mi Web al Mundo!</>
            )}
          </button>
        </div>

        {/* Right column: Master Prompt */}
        <div className="lg:col-span-7 flex flex-col gap-3 min-h-0">
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-3 flex-1 min-h-0">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 shrink-0">
              <div>
                <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-0.5">
                  👑 Prompt Maestro de Clase 5
                </div>
                <h3 className="text-base font-bold text-white">SEO + GEO + Publicación Completa</h3>
              </div>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                  copied
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-amber-500/50 hover:text-amber-400'
                }`}
              >
                {copied ? <><Check className="w-3.5 h-3.5" /> Copiado</> : <><Copy className="w-3.5 h-3.5" /> Copiar</>}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto min-h-0">
              <pre className="text-[11px] font-mono text-emerald-400 leading-relaxed whitespace-pre-wrap break-words p-3 bg-black/50 rounded-xl border border-slate-800 select-all h-full">
                {MASTER_PROMPT}
              </pre>
            </div>

            <div className="shrink-0 p-3 rounded-xl bg-violet-500/8 border border-violet-500/25">
              <div className="text-[11px] font-mono font-bold text-violet-400 mb-1">🎯 Cómo usarlo:</div>
              <p className="text-xs text-slate-300">
                Copia este prompt y pégalo en <strong className="text-white">Antigravity IDE</strong> con tu Agente Launch Manager activo. 
                Ejecutará las 3 fases automáticamente: SEO → GEO → Publicación.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono shrink-0">
        <span className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>🎓 Clase 5 completada — Ruta Web con IA finalizada</span>
        </span>
        <span className="hidden sm:flex items-center gap-1.5 text-emerald-400">
          <Shield className="w-3.5 h-3.5" />
          <BarChart2 className="w-3.5 h-3.5" />
          Web profesional, segura y medida
        </span>
      </div>
    </div>
  );
};
