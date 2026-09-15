import React, { useState } from 'react';
import { 
  GitMerge, ArrowRight, Layout, Palette, Code2, 
  Bot, ShieldCheck, Rocket, Sparkles
} from 'lucide-react';

interface WorkflowStep {
  stepNumber: number;
  agent: string;
  agentRole: string;
  icon: React.ElementType;
  color: string;
  skillsUsed: string[];
  deliverable: string;
  handoffTo: string;
  actionText: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    agent: 'Web Architect',
    agentRole: 'Estructura & Cimientos',
    icon: Layout,
    color: 'from-blue-500 to-indigo-600',
    skillsUsed: ['Web Design', 'Performance'],
    deliverable: 'Proyecto inicializado con React, Tailwind CSS y estructura limpia de carpetas.',
    handoffTo: 'Pasa los cimientos al Copywriter y al UI/UX Designer.',
    actionText: 'Toma el Brief de la Clase 1 y crea el plano técnico del sitio.'
  },
  {
    stepNumber: 2,
    agent: 'Copywriter & UI/UX Designer',
    agentRole: 'Mensaje & Identidad Visual',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    skillsUsed: ['Copywriting', 'Web Design', 'Branding'],
    deliverable: 'Paleta cromática HSL, tipografías y textos magnéticos con fórmulas PAS y AIDA.',
    handoffTo: 'Pasa los assets y copys listos al Web Developer.',
    actionText: 'Definen la estética premium y redactan los titulares que enganchan.'
  },
  {
    stepNumber: 3,
    agent: 'Web Developer',
    agentRole: 'Construcción Frontend',
    icon: Code2,
    color: 'from-emerald-500 to-teal-600',
    skillsUsed: ['Landing Page', 'Performance'],
    deliverable: 'Componentes interactivos (Hero, Servicios, Testimonios, CTA flotante a WhatsApp).',
    handoffTo: 'Pasa la web funcional a los especialistas de SEO y GEO.',
    actionText: 'Ensambla y codifica la web componente por componente en Vite.'
  },
  {
    stepNumber: 4,
    agent: 'GEO & SEO Specialist',
    agentRole: 'Visibilidad & Motores de IA',
    icon: Bot,
    color: 'from-purple-500 to-indigo-600',
    skillsUsed: ['GEO', 'SEO'],
    deliverable: 'Meta-etiquetas OpenGraph y datos estructurados Schema.org JSON-LD.',
    handoffTo: 'Pasa el sitio optimizado al Auditor de Calidad.',
    actionText: 'Garantiza que Google, ChatGPT y Perplexity indexen y citen la web.'
  },
  {
    stepNumber: 5,
    agent: 'Auditor',
    agentRole: 'Control de Calidad & QA',
    icon: ShieldCheck,
    color: 'from-amber-500 to-orange-600',
    skillsUsed: ['Audit', 'Accessibility'],
    deliverable: 'Reporte 360° de enlaces comprobados, contraste WCAG y testing móvil.',
    handoffTo: 'Da luz verde al Launch Manager para publicación.',
    actionText: 'Escanea en busca de bugs, enlaces rotos o problemas en pantallas móviles.'
  },
  {
    stepNumber: 6,
    agent: 'Launch Manager',
    agentRole: 'Despliegue & Publicación',
    icon: Rocket,
    color: 'from-red-500 to-pink-600',
    skillsUsed: ['Launch'],
    deliverable: 'Web en vivo en Vercel con URL pública, HTTPS y repositorio sincronizado.',
    handoffTo: '¡Entrega la web al CEO (Tú) para empezar a vender!',
    actionText: 'Sube a GitHub y despliega en producción en menos de 60 segundos.'
  }
];

export const Slide2CollaborationWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStep = WORKFLOW_STEPS.find((s) => s.stepNumber === activeStep) || WORKFLOW_STEPS[0];

  return (
    <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 relative overflow-hidden select-none">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <GitMerge className="w-3.5 h-3.5 text-cyan-400" />
            Flujo de Producción
          </div>
          <span className="text-slate-500 text-xs hidden sm:inline">• 6 Fases en Cadena</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-display mt-1">
          La Coreografía <span className="text-gradient-cyan">Multi-Agente</span>
        </h2>
      </div>

      {/* 6 Step Progress Timeline */}
      <div className="grid grid-cols-6 gap-2 my-auto py-1">
        {WORKFLOW_STEPS.map((s) => {
          const isSelected = s.stepNumber === activeStep;
          const isPassed = s.stepNumber < activeStep;
          const Icon = s.icon;

          return (
            <button
              key={s.stepNumber}
              onClick={() => setActiveStep(s.stepNumber)}
              className={`p-2 sm:p-3 rounded-2xl border transition-all flex flex-col items-center text-center gap-1.5 cursor-pointer relative ${
                isSelected
                  ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/20 ring-2 ring-cyan-400/40 -translate-y-1'
                  : isPassed
                  ? 'bg-slate-950/80 border-emerald-500/40 text-emerald-300'
                  : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md`}>
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              <span className="text-[10px] font-mono font-bold uppercase">
                Paso {s.stepNumber}
              </span>
              <span className="text-[11px] font-semibold text-white truncate max-w-full hidden md:inline">
                {s.agent.split(' ')[0]}
              </span>

              {isPassed && (
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[9px] font-bold">
                  ✓
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Step Showcase Card */}
      <div className="glass-card p-5 sm:p-6 rounded-3xl border border-slate-700/80 bg-slate-950/90 shadow-2xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Left info */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentStep.color} text-white shadow-lg`}>
                <currentStep.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  Fase {currentStep.stepNumber} de 6 • {currentStep.agentRole}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                  {currentStep.agent}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              <strong>Acción:</strong> {currentStep.actionText}
            </p>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
              <strong className="text-emerald-400 font-mono">Entregable concreto:</strong> {currentStep.deliverable}
            </div>

            {/* Skills badge */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Skills activados:</span>
              <div className="flex gap-1.5">
                {currentStep.skillsUsed.map((sk, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-mono font-bold">
                    🧠 {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right handoff box */}
          <div className="lg:col-span-5 p-4 rounded-2xl bg-gradient-to-b from-cyan-950/30 to-slate-900/90 border border-cyan-500/30 flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Traspaso de Testigo
              </span>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {currentStep.handoffTo}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <span className="text-[10px] font-mono text-slate-400">
                {currentStep.stepNumber < 6 ? `Siguiente: Paso ${currentStep.stepNumber + 1}` : '¡Sitio Online!'}
              </span>

              {currentStep.stepNumber < 6 && (
                <button
                  onClick={() => setActiveStep((prev) => Math.min(6, prev + 1))}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  <span>Siguiente Paso</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
