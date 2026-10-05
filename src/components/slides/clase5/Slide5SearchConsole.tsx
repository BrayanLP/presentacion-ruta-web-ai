import React, { useState } from 'react';
import { Search, BarChart2, Activity, Map, ArrowRight, CheckCircle2, ChevronRight, Info, LineChart, Globe } from 'lucide-react';

interface GscFeature {
  id: string;
  icon: React.ElementType;
  name: string;
  what: string;
  benefit: string;
  badgeColor: string;
}

const GSC_FEATURES: GscFeature[] = [
  {
    id: 'performance',
    icon: LineChart,
    name: 'Rendimiento (Performance)',
    what: 'Muestra exactamente con qué palabras clave (keywords) las personas están encontrando tu web en Google, cuántos clics recibes y tu posición promedio.',
    benefit: 'Dejas de adivinar. Sabes exactamente qué busca tu cliente y puedes mejorar el SEO de las páginas que están en la página 2 de Google para pasarlas a la 1.',
    badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-400'
  },
  {
    id: 'inspection',
    icon: Search,
    name: 'Inspección de URLs',
    what: 'Permite ingresar cualquier página de tu web y decirle a Google: "¡Hey, acabo de publicar esto, revísalo ahora mismo!".',
    benefit: 'Acelera la indexación. En lugar de esperar semanas a que Google descubra tu nueva página de servicios, puede aparecer en los resultados en horas.',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
  },
  {
    id: 'sitemaps',
    icon: Map,
    name: 'Sitemaps',
    what: 'El lugar donde subes tu archivo sitemap.xml (generado automáticamente en tu web) para darle a Google un mapa completo de todas tus URLs.',
    benefit: 'Garantiza que Google no se pierda ninguna página oculta. Es como darle el plano de tu casa al buscador.',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400'
  },
  {
    id: 'core-web-vitals',
    icon: Activity,
    name: 'Métricas web principales',
    what: 'Un reporte de salud técnica que evalúa qué tan rápido carga tu web y si los botones saltan cuando el usuario intenta hacer clic.',
    benefit: 'Google premia a las webs rápidas y estables con mejores posiciones. Aquí ves si pasas el examen o necesitas optimizar imágenes.',
    badgeColor: 'border-violet-500/30 bg-violet-500/10 text-violet-400'
  }
];

export const Slide5SearchConsole: React.FC = () => {
  const [selected, setSelected] = useState<GscFeature>(GSC_FEATURES[0]);

  return (
    <div className="h-full flex flex-col p-6 sm:p-8 relative overflow-y-auto overflow-x-hidden gap-4">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/6 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 shrink-0">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Globe className="w-3.5 h-3.5" /> Herramienta Oficial
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Google Search Console
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
          <Info className="w-4 h-4 text-blue-400" />
          <span>Tu panel de control SEO gratuito</span>
        </div>
      </div>

      {/* Intro Box */}
      <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3 shrink-0">
        <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 mt-0.5">
          <BarChart2 className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Es la herramienta <strong>gratuita y oficial</strong> de Google que te permite monitorear cómo se muestra tu web en los resultados de búsqueda. Sin Search Console, tu estrategia de SEO está a ciegas.
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0 mt-2">
        {/* Left: 4 Features list */}
        <div className="lg:col-span-5 flex flex-col gap-2 overflow-y-auto pr-1">
          {GSC_FEATURES.map((feature) => {
            const isSelected = selected.id === feature.id;
            return (
              <button
                key={feature.id}
                onClick={() => setSelected(feature)}
                className={`text-left p-3.5 rounded-xl border transition-all flex items-center gap-3 relative group ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500/60 ring-1 ring-blue-500/20 shadow-lg shadow-black/30'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? feature.badgeColor : 'bg-slate-800 text-slate-400 group-hover:text-slate-300'}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-sm font-bold truncate block ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white transition-colors'}`}>
                    {feature.name}
                  </span>
                </div>
                {isSelected && (
                  <ChevronRight className="w-4 h-4 text-blue-400 absolute right-4 top-1/2 -translate-y-1/2" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Detail panel */}
        <div className="lg:col-span-7 flex flex-col gap-3 min-h-0 overflow-y-auto">
          <div className="glass-panel p-6 rounded-2xl flex flex-col gap-5 flex-1">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-800/80 pb-4">
              <div className={`p-3 rounded-xl ${selected.badgeColor}`}>
                <selected.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">{selected.name}</h3>
              </div>
            </div>

            {/* What & Why */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" /> ¿Qué hace exactamente?
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">{selected.what}</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <div className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> El beneficio para tu negocio
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">{selected.benefit}</p>
              </div>
            </div>
            
            <div className="mt-auto pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 font-mono">
               <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
               <span>Puedes conectar tu dominio a Search Console en un solo clic a través de Vercel.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
