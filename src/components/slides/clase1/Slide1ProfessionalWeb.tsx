import React from 'react';
import { ShieldCheck, Eye, Zap, Smartphone, MousePointerClick } from 'lucide-react';

const PILLARS = [
  {
    icon: Eye,
    title: '1. Claridad Inmediata (Regla 5s)',
    desc: 'En 5 segundos el usuario debe entender: ¿Qué vendes? ¿Para quién es? ¿Qué gano yo?',
    color: 'text-yellow-400',
    border: 'border-yellow-500/30'
  },
  {
    icon: ShieldCheck,
    title: '2. Disparadores de Confianza',
    desc: 'Testimonios reales, fotos del equipo, logotipos de clientes, políticas claras y garantías.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30'
  },
  {
    icon: Zap,
    title: '3. Velocidad Ultrarrápida',
    desc: 'Si tarda más de 2.5 segundos en cargar, el 50% de las personas abandonan la página.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30'
  },
  {
    icon: Smartphone,
    title: '4. Mobile-First al 100%',
    desc: 'El 80% del tráfico vendrá desde un teléfono celular. Debe verse perfecta en pantallas pequeñas.',
    color: 'text-violet-400',
    border: 'border-violet-500/30'
  },
  {
    icon: MousePointerClick,
    title: '5. Un Solo Objetivo (CTA)',
    desc: 'Llamados a la acción directos y contrastados. No marees con 10 opciones diferentes.',
    color: 'text-pink-400',
    border: 'border-pink-500/30'
  },
];

export const Slide1ProfessionalWeb: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between p-8 md:p-14 relative overflow-hidden">
      {/* Header */}
      <div className="space-y-1">
        <div className="text-xs font-mono text-yellow-400 font-semibold tracking-wider uppercase">
          Estándar de Excelencia #03
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">
          ⭐ Los 5 Pilares de una Web Profesional
        </h2>
        <p className="text-slate-400 text-sm md:text-base">
          Si tu web cumple estos 5 principios, estará en el 5% superior de cualquier mercado.
        </p>
      </div>

      {/* 5 Pillars list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-auto">
        {PILLARS.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className={`glass-card p-5 rounded-2xl border ${p.border} hover:scale-[1.02] transition-all flex flex-col justify-between space-y-3`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${p.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                  Pilar 0{idx + 1}
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          );
        })}

        {/* Bonus card: The Deadly Sin */}
        <div className="glass-card p-5 rounded-2xl border border-red-500/30 bg-red-950/20 flex flex-col justify-between space-y-3">
          <div className="text-xs font-mono text-red-400 font-bold uppercase">
            ⚠️ El Pecado Mortal
          </div>
          <div>
            <h3 className="text-base font-bold text-white mb-1">Textos Genéricos</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              "Somos líderes en innovación y calidad". Nadie cree eso. Sé específico: <em>"Entregamos tu web lista en 7 días o te devolvemos el dinero".</em>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-l-yellow-500">
        <span className="text-xs md:text-sm text-slate-300">
          🎯 <strong>La Regla de Oro:</strong> La gente no lee en internet; <u>escanea</u>. Haz tus títulos grandes, claros y con beneficios directos.
        </span>
      </div>
    </div>
  );
};
