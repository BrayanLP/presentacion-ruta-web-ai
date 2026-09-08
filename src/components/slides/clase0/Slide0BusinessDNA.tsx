import React from 'react';
import { 
  Building2, Palette, Layers, FileText, PhoneCall, Share2, 
  MapPin, Clock, Camera, Target, Sparkles 
} from 'lucide-react';

const DNA_ITEMS = [
  { icon: Building2, label: 'Nombre Oficial', desc: 'Identidad comercial clara', color: 'text-emerald-400' },
  { icon: Sparkles, label: 'Logo / Isotipo', desc: 'Formato SVG o PNG transparente', color: 'text-cyan-400' },
  { icon: Palette, label: 'Paleta de Colores', desc: '1 Primario, 1 Secundario, 1 Acento', color: 'text-violet-400' },
  { icon: Layers, label: 'Servicios / Productos', desc: 'Los 3 más rentables o solicitados', color: 'text-yellow-400' },
  { icon: FileText, label: 'Descripción Breve', desc: 'Qué problema resuelves en 1 frase', color: 'text-pink-400' },
  { icon: PhoneCall, label: 'WhatsApp de Cierre', desc: 'El número que atenderá a los leads', color: 'text-emerald-400' },
  { icon: Share2, label: 'Redes Sociales', desc: 'Instagram, LinkedIn, TikTok, etc.', color: 'text-blue-400' },
  { icon: MapPin, label: 'Dirección o Ciudad', desc: 'Ubicación para SEO local', color: 'text-orange-400' },
  { icon: Clock, label: 'Horarios de Atención', desc: 'Expectativa real de respuesta', color: 'text-teal-400' },
  { icon: Camera, label: 'Fotos Reales / Stock', desc: 'Evitar fotos falsas genéricas', color: 'text-purple-400' },
  { icon: Target, label: 'Público Objetivo', desc: 'A quién le hablas exactamente', color: 'text-red-400' },
];

export const Slide0BusinessDNA: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-pink-400 font-semibold tracking-wider uppercase">
          Contenido & Estrategia #05
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          🏢 El ADN de tu Negocio
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Una página web sin datos de negocio es un cascarón vacío. Estos 11 ingredientes le darán vida y poder de venta.
        </p>
      </div>

      {/* Grid of 11 items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 my-auto">
        {DNA_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-card p-3.5 md:p-4 rounded-xl border border-slate-800 hover:border-slate-600 transition-all flex items-start gap-3 group"
            >
              <div className={`p-2 rounded-lg bg-slate-900 border border-slate-800 ${item.color} group-hover:scale-110 transition-transform shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs md:text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                  {item.label}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer banner */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-l-pink-500">
        <span className="text-xs md:text-sm text-slate-300">
          💡 <strong>Para la Clase 1:</strong> No te preocupes si no tienes todo al 100%. Con el Nombre, Servicios, WhatsApp y Público construiremos hoy tu <em>Brief de mi Web</em>.
        </span>
      </div>
    </div>
  );
};
