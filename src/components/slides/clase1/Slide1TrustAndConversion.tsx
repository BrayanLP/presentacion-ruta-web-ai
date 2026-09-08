import React, { useState } from 'react';
import { Eye, HeartHandshake, MessageSquare, Sparkles } from 'lucide-react';

const FUNNEL_STAGES = [
  {
    step: '01',
    name: 'Atención Magnética',
    goal: 'Ganar los primeros 3 segundos',
    action: 'Titular con dolor o promesa fuerte + Imagen de alta calidad.',
    color: 'from-blue-500 to-cyan-500',
    icon: Eye
  },
  {
    step: '02',
    name: 'Interés & Propuesta',
    goal: 'Demostrar que entiendes su problema',
    action: 'Explicar el servicio de forma visual y qué transformación ofreces.',
    color: 'from-cyan-500 to-emerald-500',
    icon: Sparkles
  },
  {
    step: '03',
    name: 'Confianza & Autoridad',
    goal: 'Eliminar el miedo a ser estafado',
    action: 'Testimonios reales, fotos del creador/equipo, FAQs resolviendo objeciones.',
    color: 'from-emerald-500 to-violet-500',
    icon: HeartHandshake
  },
  {
    step: '04',
    name: 'Acción Inmediata',
    goal: 'Cerrar el contacto sin fricción',
    action: 'Botón directo a WhatsApp con mensaje predeterminado listo para enviar.',
    color: 'from-violet-500 to-pink-500',
    icon: MessageSquare
  }
];

export const Slide1TrustAndConversion: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
          Psicología de Ventas #04
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          📈 Cómo Convertir Visitas en Clientes
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Nadie compra en el primer segundo. La conversión es una escalera emocional de 4 peldaños.
        </p>
      </div>

      {/* 4 Step Funnel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto">
        {FUNNEL_STAGES.map((st, idx) => {
          const Icon = st.icon;
          const isSelected = activeStep === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`glass-card p-5 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'border-emerald-400/80 bg-slate-900/90 shadow-xl shadow-emerald-500/15 -translate-y-1'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    FASE {st.step}
                  </span>
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${st.color} text-slate-950`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{st.name}</h3>
                  <div className="text-xs text-brand-400 font-medium mt-1">{st.goal}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                <strong>¿Cómo se logra?</strong> {st.action}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active step deep-dive */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-l-emerald-500">
        <span className="text-xs md:text-sm text-slate-200">
          💡 <strong>El error común:</strong> Intentar pedir la venta en la Fase 1 sin haber construido la Confianza en la Fase 3. La web hace el trabajo emocional por ti.
        </span>
      </div>
    </div>
  );
};
