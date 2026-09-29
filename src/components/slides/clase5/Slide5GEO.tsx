import React, { useState } from 'react';
import { Bot, ChevronRight, Info, Zap } from 'lucide-react';

interface GeoItem {
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

const GEO_ITEMS: GeoItem[] = [
  {
    id: 'entity',
    emoji: '🏢',
    name: 'Entidad',
    what: 'Tu negocio como una entidad reconocible con nombre, categoría y atributos únicos que las IAs pueden identificar.',
    why: 'ChatGPT y Gemini usan entidades para responder preguntas. Si no eres una entidad clara, no existes para la IA.',
    example: '"Clínica García" → Tipo: Dentist | Ciudad: Lima | Especialidad: Blanqueamiento | Fundado: 2005',
    promptToAgent: 'Define la entidad del negocio con nombre oficial, tipo Schema, ubicación y atributos únicos.',
    badgeColor: 'border-violet-500/30 bg-violet-500/10 text-violet-400',
    tag: 'Identidad'
  },
  {
    id: 'structured',
    emoji: '🧬',
    name: 'Información Estructurada',
    what: 'Datos en formato JSON-LD que declaran explícitamente qué tipo de negocio eres, qué ofreces y dónde estás.',
    why: 'Las IAs y Google consumen datos estructurados directamente. Schema.org es el lenguaje universal de los motores de IA.',
    example: '{ "@type": "Dentist", "name": "Clínica García", "priceRange": "$$", "aggregateRating": {"ratingValue": "4.9"} }',
    promptToAgent: 'Implementa Schema JSON-LD tipo LocalBusiness con todas las propiedades: name, telephone, address, openingHours, priceRange.',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    tag: 'Schema.org'
  },
  {
    id: 'faqs',
    emoji: '❓',
    name: 'FAQs Semánticas',
    what: 'Preguntas y respuestas que replican exactamente las búsquedas que hacen tus clientes a las IAs.',
    why: 'Cuando alguien le pregunta a ChatGPT "¿cuánto cuesta el blanqueamiento dental en Lima?", tu FAQ puede ser la fuente citada.',
    example: 'Q: "¿Cuánto cuesta el blanqueamiento dental en Lima?" A: "En Clínica García el blanqueamiento cuesta entre S/350 y S/600..."',
    promptToAgent: 'Crea 8-10 FAQs con Schema FAQPage respondiendo las preguntas más frecuentes de clientes con contexto local.',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    tag: 'Ser Citado'
  },
  {
    id: 'semantic',
    emoji: '📚',
    name: 'Contenido Semántico',
    what: 'Texto que no solo usa keywords sino que cubre el tema completo: conceptos relacionados, contexto y variaciones naturales.',
    why: 'Los LLMs (ChatGPT, Gemini, Claude) entienden semántica profunda. Un contenido rico semánticamente = más probabilidad de ser citado.',
    example: 'Artículo sobre "blanqueamiento dental" que también incluye: "fotosensibilidad", "peroxido de carbamida", "Philips Zoom", "cuidados post-tratamiento".',
    promptToAgent: 'Escribe contenido semántico exhaustivo que cubra el tema principal y sus entidades relacionadas con profundidad experta.',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    tag: 'LLM-Ready'
  },
  {
    id: 'local',
    emoji: '📍',
    name: 'Información Local',
    what: 'Dirección completa, barrio, ciudad, país, horarios, teléfono y Google Maps integrado en tus datos estructurados.',
    why: 'Las IAs priorizan negocios con información local verificable. "Dentista cerca de mí" → necesitas datos locales en Schema.',
    example: '"address": {"streetAddress": "Av. Larco 1234", "addressLocality": "Miraflores", "addressRegion": "Lima", "postalCode": "15074"}',
    promptToAgent: 'Agrega PostalAddress completa en Schema LocalBusiness incluyendo barrio, coordenadas GPS y enlace a Google Maps.',
    badgeColor: 'border-rose-500/30 bg-rose-500/10 text-rose-400',
    tag: 'Local Pack'
  },
  {
    id: 'authority',
    emoji: '⭐',
    name: 'Autoridad',
    what: 'Señales que demuestran que eres un experto confiable: certificaciones, años de experiencia, premios y menciones externas.',
    why: 'Las IAs citan fuentes de autoridad. Sin señales de autoridad eres irrelevante frente a competidores con más credenciales.',
    example: '"award": "Premio Mejores Dentistas Lima 2024" | "hasCredential": "COP 12345" | sameAs: perfil LinkedIn, Google Business',
    promptToAgent: 'Agrega credenciales, premios y perfiles oficiales en Schema usando las propiedades award, hasCredential y sameAs.',
    badgeColor: 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400',
    tag: 'Confianza'
  },
  {
    id: 'business-data',
    emoji: '🗂️',
    name: 'Datos del Negocio',
    what: 'Toda la información oficial: nombre legal, NIF/RUC, horarios, métodos de pago, idiomas y área de servicio.',
    why: 'Las IAs necesitan datos completos para generar respuestas precisas. Datos incompletos = respuestas incorrectas o ausencia total.',
    example: '"paymentAccepted": "Cash, Visa, Mastercard" | "currenciesAccepted": "PEN" | "areaServed": "Lima Metropolitana" | "openingHoursSpecification": [...]',
    promptToAgent: 'Completa todas las propiedades del Schema LocalBusiness: paymentAccepted, currenciesAccepted, areaServed y openingHoursSpecification.',
    badgeColor: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
    tag: 'Completitud'
  }
];

export const Slide5GEO: React.FC = () => {
  const [selected, setSelected] = useState<GeoItem>(GEO_ITEMS[0]);

  return (
    <div className="h-full flex flex-col p-6 sm:p-8 relative overflow-hidden gap-4">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-500/6 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4 shrink-0">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Bot className="w-3.5 h-3.5" /> GEO — Generative Engine Optimization
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            ¿Cómo hago que las IAs entiendan mi negocio?
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
          <Info className="w-4 h-4 text-violet-400" />
          <span>Toca cada factor GEO</span>
        </div>
      </div>

      {/* AI Engines Banner */}
      <div className="flex items-center gap-2 flex-wrap shrink-0">
        {['ChatGPT', 'Gemini', 'Perplexity', 'Claude', 'Copilot', 'Grok'].map((ai) => (
          <span key={ai} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 flex items-center gap-1">
            <Zap className="w-3 h-3 text-violet-400" />
            {ai}
          </span>
        ))}
        <span className="text-[11px] text-slate-500 font-mono ml-1">→ todos usan GEO para decidir qué citar</span>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-1 min-h-0">
        {/* Left: 7 item grid */}
        <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 content-start overflow-y-auto pr-1">
          {GEO_ITEMS.map((item) => {
            const isSelected = selected.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`text-left p-3 rounded-xl border transition-all flex flex-col gap-1.5 relative group ${
                  isSelected
                    ? 'bg-slate-900 border-violet-500/70 ring-1 ring-violet-500/20 shadow-lg shadow-black/30'
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
                  <div className="absolute right-2 top-2 text-violet-400">
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
                    {selected.tag}
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
              <div className="p-3 rounded-xl bg-violet-500/8 border border-violet-500/25">
                <div className="text-[11px] font-mono font-bold text-violet-400 uppercase tracking-wider mb-1">🤖 ¿Por qué la IA lo necesita?</div>
                <p className="text-sm text-slate-200">{selected.why}</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">💡 Ejemplo de implementación</div>
                <p className="text-xs font-mono text-slate-300 leading-relaxed break-all">{selected.example}</p>
              </div>
            </div>

            {/* CEO prompt */}
            <div className="border-t border-slate-800/80 pt-3">
              <div className="text-[11px] font-mono text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
                👑 Cómo se lo ordenas a tu Agente GEO:
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-slate-800 text-xs font-mono text-violet-400 select-all">
                "{selected.promptToAgent}"
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono shrink-0">
        <span>🤖 7 factores para ser citado por ChatGPT, Gemini y Perplexity</span>
        <span className="hidden sm:inline text-violet-400">GEO = el nuevo SEO para la era de la IA</span>
      </div>
    </div>
  );
};
