import React, { useState } from 'react';
import { Rocket, CheckCircle2, Circle, ChevronRight, Globe, Shield, BarChart2, Info } from 'lucide-react';

interface PublicationStep {
  id: string;
  emoji: string;
  step: number;
  name: string;
  what: string;
  how: string;
  agentTask: string;
  tip: string;
  badgeColor: string;
  accentColor: string;
  tag: string;
  done?: boolean;
}

const PUBLICATION_STEPS: PublicationStep[] = [
  {
    id: 'domain',
    step: 1,
    emoji: '🌐',
    name: 'Comprar Dominio',
    what: 'Tu dirección propia en internet. La compras en registradores como Namecheap, GoDaddy, Porkbun o Google Domains.',
    how: 'Busca disponibilidad → Elige .com o .pe/.co → Paga anualidad (desde $10/año) → Recibes acceso al panel DNS.',
    agentTask: 'Recomienda 3 opciones de dominio óptimas basadas en el Brief del negocio: cortas, sin guiones y con .com.',
    tip: '💡 Porkbun y Namecheap son los más baratos. Evita GoDaddy por sus precios de renovación.',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    accentColor: 'text-cyan-400',
    tag: 'Identidad'
  },
  {
    id: 'hosting',
    step: 2,
    emoji: '🖥️',
    name: 'Hosting',
    what: 'El servidor donde vive tu web. Con Next.js en Vercel, el hosting va incluido GRATIS en el plan Hobby.',
    how: 'Vercel Plan Free: 100GB de transferencia, SSL automático, CDN global y dominio .vercel.app gratis.',
    agentTask: 'Configura el vercel.json con los headers de seguridad y las rutas necesarias para el proyecto Next.js.',
    tip: '💡 No necesitas hosting separado. Vercel + Next.js = la combinación perfecta sin costos adicionales.',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    accentColor: 'text-emerald-400',
    tag: 'Gratis'
  },
  {
    id: 'vercel',
    step: 3,
    emoji: '▲',
    name: 'Deploy en Vercel',
    what: 'Publicar tu web en Vercel: conectas tu repo de GitHub y cada commit hace un deploy automático.',
    how: 'vercel.com → New Project → Import from GitHub → Select repo → Deploy (90 segundos).',
    agentTask: 'Crea el comando "npm run build" limpio, verifica que no hay errores TypeScript y hace push al repo GitHub.',
    tip: '💡 Cada vez que hagas push a main, Vercel actualiza tu web en vivo automáticamente. ¡Zero downtime!',
    badgeColor: 'border-slate-500/30 bg-slate-500/10 text-slate-300',
    accentColor: 'text-slate-300',
    tag: '90 segundos'
  },
  {
    id: 'dns',
    step: 4,
    emoji: '🔌',
    name: 'Conectar Dominio + DNS',
    what: 'Enlazar tu dominio comprado (Namecheap/Porkbun) con tu proyecto en Vercel mediante registros DNS.',
    how: 'Vercel → Settings → Domains → Add domain → Copia los nameservers → Pégalos en tu panel de dominio (24h de propagación).',
    agentTask: 'Documenta los pasos exactos de configuración DNS y verifica que el dominio apunta correctamente al deployment.',
    tip: '💡 Con Cloudflare como proxy DNS tienes velocidad extra + protección DDoS gratis + más.',
    badgeColor: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
    accentColor: 'text-orange-400',
    tag: 'Propagación DNS'
  },
  {
    id: 'ssl',
    step: 5,
    emoji: '🔒',
    name: 'SSL (HTTPS)',
    what: 'El candado verde de seguridad que convierte tu URL de http:// a https://. Vercel lo activa automáticamente.',
    how: 'Vercel genera un certificado Let\'s Encrypt gratuito al conectar tu dominio. Activación: automática, sin configuración.',
    agentTask: 'Agrega el redirect forzado de HTTP a HTTPS en el vercel.json y verifica el header Strict-Transport-Security.',
    tip: '💡 Sin SSL, Google marca tu web como "No segura" y penaliza el posicionamiento. Con Vercel es 100% automático.',
    badgeColor: 'border-green-500/30 bg-green-500/10 text-green-400',
    accentColor: 'text-green-400',
    tag: 'Automático'
  },
  {
    id: 'favicon',
    step: 6,
    emoji: '⭐',
    name: 'Favicon',
    what: 'El icono pequeño que aparece en la pestaña del navegador y en los favoritos. Refuerza el branding visual.',
    how: 'Genera favicon.ico, apple-touch-icon.png y og-image.jpg → colócalos en /public → configura en el metadata de Next.js.',
    agentTask: 'Genera el favicon desde el logo en múltiples tamaños (16x16, 32x32, 180x180) y los integra en el layout.tsx.',
    tip: '💡 Usa realfavicongenerator.net o pide al agente que los genere con sharp. Incluye el OG Image para redes sociales.',
    badgeColor: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
    accentColor: 'text-yellow-400',
    tag: 'Branding'
  },
  {
    id: 'analytics',
    step: 7,
    emoji: '📈',
    name: 'Analytics',
    what: 'Herramienta para ver quién visita tu web, desde dónde vienen, qué páginas ven y cuánto tiempo se quedan.',
    how: 'Vercel Analytics (gratis en plan Free) + Google Analytics 4 → monitoreo en tiempo real sin cookies adicionales.',
    agentTask: 'Integra Vercel Analytics con <Analytics /> y Google Analytics 4 via gtag en el layout.tsx de Next.js.',
    tip: '💡 Vercel Analytics no necesita cookies. GA4 te da datos más profundos de conversión y embudos.',
    badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    accentColor: 'text-blue-400',
    tag: 'Datos Reales'
  },
  {
    id: 'searchconsole',
    step: 8,
    emoji: '🔍',
    name: 'Search Console',
    what: 'El panel oficial de Google para ver qué búsquedas traen visitas a tu web y detectar errores de indexación.',
    how: 'search.google.com → Agregar propiedad → Verificar con meta tag en el layout → Enviar sitemap.xml → ¡Listo!',
    agentTask: 'Agrega la meta tag de verificación de Google en el metadata del layout.tsx y envía el sitemap al Search Console.',
    tip: '💡 Después de publicar, envía el sitemap manualmente para acelerar la indexación a horas en vez de semanas.',
    badgeColor: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
    accentColor: 'text-rose-400',
    tag: 'Google Oficial'
  }
];

export const Slide5Publication: React.FC = () => {
  const [selected, setSelected] = useState<PublicationStep>(PUBLICATION_STEPS[0]);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const toggleComplete = (id: string) => {
    setCompletedSteps(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((completedSteps.size / PUBLICATION_STEPS.length) * 100);

  return (
    <div className="h-full flex flex-col p-6 sm:p-8 relative overflow-y-auto overflow-x-hidden gap-4">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 shrink-0">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Rocket className="w-3.5 h-3.5" /> Publicación
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Lanza tu Web al Mundo Real
          </h2>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <Info className="w-4 h-4 text-cyan-400" />
            <span>Marca los pasos completados</span>
          </div>
          {/* Progress */}
          <div className="flex items-center gap-2">
            <div className="w-16 h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-slate-400">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0">
        {/* Left: 8 step list */}
        <div className="lg:col-span-5 flex flex-col gap-1.5 overflow-y-auto pr-1">
          {PUBLICATION_STEPS.map((step) => {
            const isSelected = selected.id === step.id;
            const isDone = completedSteps.has(step.id);
            return (
              <button
                key={step.id}
                onClick={() => setSelected(step)}
                className={`text-left p-3 rounded-xl border transition-all flex items-center gap-3 group relative ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/60 ring-1 ring-cyan-500/20 shadow-lg shadow-black/30'
                    : isDone
                    ? 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/50'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <span className="text-xl shrink-0">{step.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-slate-500">{step.step}.</span>
                    <span className={`text-xs font-bold truncate ${isSelected ? 'text-white' : isDone ? 'text-emerald-400' : 'text-slate-300 group-hover:text-white transition-colors'}`}>
                      {step.name}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${step.badgeColor}`}>
                    {step.tag}
                  </span>
                </div>
                {/* Complete toggle */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleComplete(step.id); }}
                  className="shrink-0 p-1 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {isDone
                    ? <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    : <Circle className="w-4 h-4 text-slate-600 hover:text-slate-400" />
                  }
                </button>
                {isSelected && (
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 absolute right-8 top-1/2 -translate-y-1/2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Detail panel */}
        <div className="lg:col-span-7 flex flex-col gap-3 min-h-0 overflow-y-auto">
          <div className="glass-panel p-5 rounded-2xl flex flex-col gap-4 flex-1">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selected.emoji}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500">Paso {selected.step} de 8</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{selected.name}</h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${selected.badgeColor}`}>
                    {selected.tag}
                  </span>
                </div>
              </div>
              <button
                onClick={() => toggleComplete(selected.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                  completedSteps.has(selected.id)
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400'
                }`}
              >
                {completedSteps.has(selected.id)
                  ? <><CheckCircle2 className="w-3.5 h-3.5" /> Completado</>
                  : <><Circle className="w-3.5 h-3.5" /> Marcar listo</>
                }
              </button>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">¿Qué es?</div>
                <p className="text-sm text-slate-200">{selected.what}</p>
              </div>
              <div className="p-3 rounded-xl bg-cyan-500/8 border border-cyan-500/20">
                <div className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Globe className="w-3 h-3" /> ¿Cómo se hace?
                </div>
                <p className="text-sm text-slate-200">{selected.how}</p>
              </div>
              <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                <div className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {selected.tip}
                </div>
              </div>
            </div>

            {/* Agent task */}
            <div className="border-t border-slate-800/80 pt-3">
              <div className="text-[11px] font-mono text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
                <Rocket className="w-3 h-3" /> Tarea para tu Launch Manager:
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-slate-800 text-xs font-mono text-cyan-400 select-all">
                "{selected.agentTask}"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono shrink-0">
        <span className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>8 pasos para publicar profesionalmente en internet</span>
        </span>
        <span className="hidden sm:flex items-center gap-1.5 text-cyan-400">
          <BarChart2 className="w-3.5 h-3.5" />
          {completedSteps.size}/{PUBLICATION_STEPS.length} pasos completados
        </span>
      </div>
    </div>
  );
};
