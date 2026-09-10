import React, { useState } from 'react';
import { 
  Sparkles, Layers, Database, Layout, GitFork, 
  Target, CheckCircle2, ArrowRight, FileText, Zap
} from 'lucide-react';

interface Props {
  onOpenPlanModal: () => void;
}

const STEPS = [
  {
    num: '01',
    title: 'Definimos el Problema',
    desc: 'Identificar el dolor real y la frustración que eliminaremos del mercado.',
    icon: Target,
    badge: 'Diagnóstico'
  },
  {
    num: '02',
    title: 'Definimos el Usuario',
    desc: 'Quiénes son los roles: Admin, Cliente, Operador, Cocinero, etc.',
    icon: Zap,
    badge: 'Audiencia'
  },
  {
    num: '03',
    title: 'Definimos Funcionalidades',
    desc: 'Qué acciones exactas podrán realizar en la plataforma.',
    icon: Layers,
    badge: 'Features'
  },
  {
    num: '04',
    title: 'Definimos las Pantallas',
    desc: 'Dashboard, Login, Formularios de datos, Listados y Vistas de detalle.',
    icon: Layout,
    badge: 'UI / Wireframes'
  },
  {
    num: '05',
    title: 'Definimos los Flujos',
    desc: 'El viaje del usuario: desde que inicia sesión hasta que completa la tarea.',
    icon: GitFork,
    badge: 'UX Flows'
  },
  {
    num: '06',
    title: 'Definimos los Datos',
    desc: 'Estructura de tablas, relaciones y seguridad en Supabase PostgreSQL.',
    icon: Database,
    badge: 'Supabase DB'
  },
  {
    num: '07',
    title: 'Definimos el MVP',
    desc: 'El producto mínimo viable con el que saldremos a validar y vender.',
    icon: CheckCircle2,
    badge: 'Core Scope'
  },
  {
    num: '08',
    title: 'Priorizamos Features',
    desc: 'Separar lo no-negociable para la Fase 1 vs las mejoras para la Fase 2.',
    icon: Sparkles,
    badge: 'Hoja de Ruta'
  },
];

export const SlideSoftwareMVPSteps: React.FC<Props> = ({ onOpenPlanModal }) => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <div className="h-full flex flex-col p-6 sm:p-8 md:p-10 relative z-10 overflow-y-auto justify-between select-none">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            🧠 CLASE 1 — METODOLOGÍA CON AGENTES
          </span>
          <span className="text-xs font-mono text-slate-400">
            8 Pasos Guiados con IA
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display">
          De "Tengo una Idea" a "Sé qué Software voy a Construir"
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
          Cada alumno trabaja sobre su propia idea. Los agentes de IA nos guían paso a paso para estructurar la arquitectura completa.
        </p>
      </div>

      {/* 8 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-auto py-3">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = idx === selectedStep;

          return (
            <div
              key={idx}
              onClick={() => setSelectedStep(idx)}
              className={`glass-card p-3.5 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between group ${
                isSelected
                  ? 'bg-slate-900/95 border-cyan-500/60 shadow-lg shadow-cyan-500/15 ring-1 ring-cyan-500/40 -translate-y-0.5'
                  : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-7 h-7 rounded-xl font-mono font-bold text-xs flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-cyan-500/25 text-cyan-300 border-cyan-500/40'
                      : 'bg-slate-900 text-slate-400 border-slate-800 group-hover:border-slate-700'
                  }`}>
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{step.title}</span>
                </h3>

                <p className="text-[11px] text-slate-400 leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Result Callout & Plan CTA */}
      <div className="p-3.5 rounded-2xl banner-highlight-box bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-950/50 border border-cyan-500/40 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white font-display">
              🎯 Resultado de la Clase 1:
            </div>
            <div className="text-xs text-cyan-200/90 font-mono">
              Cada alumno termina con el <strong className="text-white">📋 PLAN DE SU SOFTWARE</strong> listo para programar con agentes.
            </div>
          </div>
        </div>

        <button
          onClick={onOpenPlanModal}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs font-mono flex items-center gap-2 shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
        >
          <FileText className="w-4 h-4 text-cyan-200" />
          <span>Generar Plan de mi Software</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
