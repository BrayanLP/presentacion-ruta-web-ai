import React, { useState } from 'react';
import { Search, ChevronRight, Info, Tag } from 'lucide-react';

interface SeoItem {
  id: string;
  emoji: string;
  name: string;
  what: string;
  why: string;
  example: string;
  promptToAgent: string;
  badgeColor: string;
  tag: string;
}

const SEO_ITEMS: SeoItem[] = [
  {
    id: 'titles',
    emoji: '📝',
    name: 'Títulos (Title Tag)',
    what: 'La etiqueta <title> que aparece en la pestaña del navegador y en los resultados de Google.',
    why: 'Es el factor SEO más importante: Google lo usa para entender de qué trata tu página y mostrarte en búsquedas.',
    example: '<title>Dentista en Lima | Blanqueamiento sin Dolor - Dr. García</title>',
    promptToAgent: 'Agrega un <title> único por página con la keyword principal al inicio, máximo 60 caracteres.',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    tag: 'Factor #1'
  },
  {
    id: 'descriptions',
    emoji: '📄',
    name: 'Meta Descripciones',
    what: 'El texto de 150-160 caracteres que aparece debajo del título en Google. No afecta el ranking directamente pero sí el CTR.',
    why: 'Una buena descripción invita al clic. Sin ella, Google elige texto al azar de tu web que puede lucir horrible.',
    example: '"¿Buscas dentista sin dolor en Lima? Agenda tu cita hoy y recibe una limpieza gratis. Más de 500 pacientes satisfechos."',
    promptToAgent: 'Escribe una meta description de 150 chars con CTA para cada página usando la keyword secundaria.',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    tag: 'CTR +35%'
  },
  {
    id: 'headings',
    emoji: '🏷️',
    name: 'Encabezados (H1-H6)',
    what: 'La jerarquía de títulos dentro de tu contenido. H1 es el título principal, H2 las secciones, H3 subsecciones.',
    why: 'Google escanea los encabezados para mapear el tema de tu página. Un H1 claro con keyword = ventaja enorme.',
    example: 'H1: "Dentista en Lima con 20 años de experiencia" | H2: "Nuestros servicios" | H3: "Blanqueamiento dental"',
    promptToAgent: 'Asegura un solo H1 por página con la keyword principal. Usa H2/H3 para estructurar secciones.',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    tag: 'Estructura'
  },
  {
    id: 'urls',
    emoji: '🔗',
    name: 'URLs Amigables',
    what: 'La dirección de cada página de tu web. Deben ser cortas, con guiones y la keyword principal.',
    why: 'Google prefiere URLs limpias. Una URL como /blanqueamiento-dental posiciona mejor que /p?id=238.',
    example: '✅ tudominio.com/blanqueamiento-dental | ❌ tudominio.com/page?id=238&cat=5',
    promptToAgent: 'Configura Next.js con rutas semánticas usando kebab-case e incluye keywords en la URL de cada página.',
    badgeColor: 'border-violet-500/30 bg-violet-500/10 text-violet-400',
    tag: 'Legibilidad'
  },
  {
    id: 'content',
    emoji: '✍️',
    name: 'Contenido de Calidad',
    what: 'El texto de tu web debe responder preguntas reales de tus clientes con profundidad y autoridad.',
    why: 'Google E-E-A-T: Experience, Expertise, Authoritativeness, Trust. Más contenido útil = más autoridad = más posiciones.',
    example: '"¿Cuánto dura el blanqueamiento dental?" → 200 palabras explicando el proceso, resultados y cuidados post-tratamiento.',
    promptToAgent: 'Escribe contenido E-E-A-T para cada sección: responde la intención de búsqueda del usuario con profundidad.',
    badgeColor: 'border-pink-500/30 bg-pink-500/10 text-pink-400',
    tag: 'E-E-A-T'
  },
  {
    id: 'images',
    emoji: '🖼️',
    name: 'Imágenes Optimizadas',
    what: 'Cada imagen debe tener alt text descriptivo, nombre de archivo con keyword y formato WebP para velocidad.',
    why: 'Google indexa imágenes. El alt text también ayuda a posicionar y es obligatorio para accesibilidad WCAG.',
    example: 'alt="blanqueamiento dental Lima resultados antes después" | nombre: blanqueamiento-dental-lima.webp',
    promptToAgent: 'Optimiza todas las imágenes con Next/Image, formato WebP, lazy loading y alt text con keywords.',
    badgeColor: 'border-sky-500/30 bg-sky-500/10 text-sky-400',
    tag: 'Velocidad'
  },
  {
    id: 'sitemap',
    emoji: '🗺️',
    name: 'Sitemap XML',
    what: 'Un archivo XML que lista todas las páginas de tu web para que Google las encuentre y rastrée.',
    why: 'Sin sitemap, Google puede tardarse semanas en descubrir tus páginas. Con él, se indexan en horas.',
    example: '<url><loc>tudominio.com/blanqueamiento-dental</loc><priority>0.8</priority></url>',
    promptToAgent: 'Genera sitemap.xml automático con Next.js metadata API y sube la URL al Google Search Console.',
    badgeColor: 'border-teal-500/30 bg-teal-500/10 text-teal-400',
    tag: 'Indexación'
  },
  {
    id: 'schema',
    emoji: '🧬',
    name: 'Schema Markup',
    what: 'Datos estructurados en formato JSON-LD que le dicen a Google el tipo exacto de contenido: negocio local, FAQ, producto.',
    why: 'Activa los Rich Snippets: estrellas, preguntas, horarios y precios en los resultados de búsqueda. CTR +150%.',
    example: '{ "@type": "Dentist", "name": "Clínica García", "telephone": "+51-1-234-5678", "openingHours": "Mo-Fr 08:00-18:00" }',
    promptToAgent: 'Implementa Schema JSON-LD tipo LocalBusiness y FAQPage en el layout de Next.js.',
    badgeColor: 'border-orange-500/30 bg-orange-500/10 text-orange-400',
    tag: 'Rich Snippets'
  },
  {
    id: 'searchconsole',
    emoji: '📊',
    name: 'Search Console',
    what: 'La herramienta gratuita de Google para ver qué búsquedas traen tráfico, qué páginas indexó y qué errores encontró.',
    why: 'Es tu panel de control SEO real. Sin él, vas a ciegas. Con él, ves exactamente qué keywords te dan dinero.',
    example: 'Ver: "blanqueamiento dental Lima" → 45 clics/día | Error 404 en /servicios → corregir URL.',
    promptToAgent: 'Agrega la verificación de Google Search Console con la meta tag en el layout y envía el sitemap.',
    badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    tag: 'Analytics'
  }
];

export const Slide5SEO: React.FC = () => {
  const [selected, setSelected] = useState<SeoItem>(SEO_ITEMS[0]);

  return (
    <div className="h-full flex flex-col p-6 sm:p-8 relative overflow-hidden gap-4">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 shrink-0">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Search className="w-3.5 h-3.5" /> SEO
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            ¿Cómo hago para que Google entienda mi web?
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
          <Info className="w-4 h-4 text-emerald-400" />
          <span>Toca cada factor para ver el detalle</span>
        </div>
      </div>

      {/* Main layout: Left grid + Right detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0">
        {/* Left: 9 item grid */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-2 content-start overflow-y-auto pr-1">
          {SEO_ITEMS.map((item) => {
            const isSelected = selected.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 relative group ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-500/70 ring-1 ring-emerald-500/20 shadow-lg shadow-black/30'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <span className="text-2xl leading-none">{item.emoji}</span>
                <span className={`text-[11px] font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white transition-colors'}`}>
                  {item.name}
                </span>
                {isSelected && (
                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full border ${item.badgeColor} w-fit`}>
                    {item.tag}
                  </span>
                )}
                {isSelected && (
                  <div className="absolute right-2 top-2 text-emerald-400">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
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
                  <h3 className="text-lg font-bold text-white font-display">{selected.name}</h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${selected.badgeColor}`}>
                    <Tag className="w-3 h-3 inline mr-1" />{selected.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* What & Why */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">¿Qué es?</div>
                <p className="text-sm text-slate-200">{selected.what}</p>
              </div>
              <div className="p-3 rounded-xl bg-emerald-500/8 border border-emerald-500/25">
                <div className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">💡 ¿Por qué importa?</div>
                <p className="text-sm text-slate-200">{selected.why}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">🔍 Ejemplo real</div>
                <p className="text-xs font-mono text-slate-300 leading-relaxed">{selected.example}</p>
              </div>
            </div>

            {/* CEO prompt */}
            <div className="border-t border-slate-800/80 pt-3">
              <div className="text-[11px] font-mono text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
                👑 Cómo se lo ordenas a tu Agente SEO:
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-slate-800 text-xs font-mono text-emerald-400 select-all">
                "{selected.promptToAgent}"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono shrink-0">
        <span>🔎 9 factores SEO que Google usa para posicionarte</span>
        <span className="hidden sm:inline text-emerald-400">Todos implementables con tu Agente SEO Specialist</span>
      </div>
    </div>
  );
};
