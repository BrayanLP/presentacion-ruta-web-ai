import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface SectionInfo {
  id: string;
  name: string;
  badge: string;
  desc: string;
  keyElements: string[];
  color: string;
}

const SECTIONS: SectionInfo[] = [
  {
    id: 'hero',
    name: '1. Hero Section (Portada)',
    badge: 'La Primera Impresión',
    desc: 'Es lo primero que se ve sin hacer scroll. Debe contener la propuesta única de valor, un subtítulo explicativo y el botón principal.',
    keyElements: ['Titular de alto impacto', 'Subtítulo que aclara el nicho', 'Botón de Acción (CTA) de color llamativo', 'Imagen o demo de producto'],
    color: 'emerald'
  },
  {
    id: 'servicios',
    name: '2. Servicios / Productos',
    badge: 'La Oferta Concreta',
    desc: 'Presenta los 3 servicios principales en tarjetas fáciles de comparar. Cada servicio debe tener un beneficio claro y botón de cotización.',
    keyElements: ['3 Tarjetas de servicio claras', 'Precios o botón de consulta', 'Beneficios específicos por servicio'],
    color: 'cyan'
  },
  {
    id: 'nosotros',
    name: '3. Nosotros / Autoridad',
    badge: 'La Conexión Humana',
    desc: 'La gente le compra a personas, no a robots. Cuenta brevemente tu historia, tu experiencia y los valores que te diferencian.',
    keyElements: ['Foto real de fundadores o equipo', 'Misión concisa (1 párrafo)', 'Logros, clientes atendidos o años de experiencia'],
    color: 'violet'
  },
  {
    id: 'faqs',
    name: '4. Preguntas Frecuentes (FAQs)',
    badge: 'El Destructor de Dudas',
    desc: 'Responde de antemano las 4 o 5 preguntas que todo cliente hace antes de pagar: tiempos, métodos de pago, garantías y soporte.',
    keyElements: ['Acordeones interactivos', 'Respuestas directas y transparentes', 'Ahorra horas respondiendo lo mismo'],
    color: 'yellow'
  },
  {
    id: 'cta',
    name: '5. CTA Final & Botón WhatsApp',
    badge: 'El Cierre de Trato',
    desc: 'El llamado final a la acción con un botón flotante de WhatsApp siempre visible en la esquina para que nunca se pierda un lead.',
    keyElements: ['Botón flotante en esquina inferior', 'Mensaje de WhatsApp predefinido', 'Garantía final o incentivo'],
    color: 'pink'
  }
];

export const Slide1Anatomy: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('hero');
  const activeSection = SECTIONS.find((s) => s.id === selectedId) || SECTIONS[0];

  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
          Arquitectura Web #05
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          📐 Estructura de una Web de Alta Conversión
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          El orden de las secciones está diseñado para responder las dudas del cliente en el momento exacto.
        </p>
      </div>

      {/* Interactive Wireframe + Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto items-stretch">
        {/* Left: Interactive Wireframe Stack (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2 justify-center">
          {SECTIONS.map((sec) => {
            const isSelected = sec.id === selectedId;
            return (
              <button
                key={sec.id}
                onClick={() => setSelectedId(sec.id)}
                className={`w-full p-3 rounded-xl text-left font-mono text-xs transition-all flex items-center justify-between border ${
                  isSelected
                    ? 'bg-slate-800 border-brand-400 text-white shadow-lg shadow-brand-500/10 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-brand-400 animate-pulse' : 'bg-slate-700'}`} />
                  <span className="font-semibold">{sec.name}</span>
                </div>
                <span className="text-[10px] text-slate-500">{sec.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Section Deep Dive Panel (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-brand-500/30 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-brand-400 font-bold uppercase tracking-wider">
                Detalles de Sección
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
                {activeSection.badge}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white font-display">
              {activeSection.name}
            </h3>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {activeSection.desc}
            </p>
          </div>

          {/* Key Elements list */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="text-xs font-mono text-slate-400 uppercase">Elementos Clave a Incluir:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeSection.keyElements.map((el, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/70 p-2 rounded-lg border border-slate-800">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  <span>{el}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer advice */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-l-cyan-500">
        <span className="text-xs md:text-sm text-slate-300">
          💡 <strong>Regla de Simplicidad:</strong> Menos es más. Una web con 5 secciones claras vende 10 veces más que una web con 20 páginas confusas.
        </span>
      </div>
    </div>
  );
};
