import React, { useState } from 'react';
import { 
  Layers, Navigation, Sparkles, Briefcase, Award, Users, 
  MessageSquareQuote, HelpCircle, Mail, MessageCircle, PanelBottom,
  CheckCircle2
} from 'lucide-react';

interface BlockItem {
  number: number;
  id: string;
  name: string;
  stage: 'Atención' | 'Interés' | 'Deseo' | 'Confianza' | 'Acción';
  questionSolved: string;
  techUsed: string;
  agentResponsible: string;
  icon: React.ElementType;
  color: string;
}

const BLOCKS_LIST: BlockItem[] = [
  {
    number: 1,
    id: 'navbar',
    name: 'Navbar (Barra Superior)',
    stage: 'Atención',
    questionSolved: '¿Dónde estoy y cómo navego rápido?',
    techUsed: 'Next.js + Tailwind + Lucide',
    agentResponsible: 'UI/UX Designer + Web Architect',
    icon: Navigation,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: 2,
    id: 'hero',
    name: 'Hero (Cabecera Principal)',
    stage: 'Atención',
    questionSolved: '¿Qué ofreces y por qué debería importarme en 5 segundos?',
    techUsed: 'Tailwind + GSAP + Lottie',
    agentResponsible: 'Copywriter + Designer + Developer',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-500'
  },
  {
    number: 3,
    id: 'servicios',
    name: 'Servicios (Oferta Central)',
    stage: 'Interés',
    questionSolved: '¿Qué problemas específicos me puedes resolver?',
    techUsed: 'React Modularity + Tailwind Grid',
    agentResponsible: 'Web Developer + Copywriter',
    icon: Briefcase,
    color: 'from-violet-500 to-purple-500'
  },
  {
    number: 4,
    id: 'beneficios',
    name: 'Beneficios (Diferenciación)',
    stage: 'Interés',
    questionSolved: '¿Por qué elegirte a ti antes que a la competencia?',
    techUsed: 'Tailwind Cards + Font Awesome Icons',
    agentResponsible: 'Copywriter + Strategist',
    icon: Award,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    number: 5,
    id: 'sobre-nosotros',
    name: 'Sobre Nosotros (Autoridad)',
    stage: 'Deseo',
    questionSolved: '¿Quiénes son las personas reales detrás de esto?',
    techUsed: 'Next/Image + Tailwind Flex',
    agentResponsible: 'Content Creator + Designer',
    icon: Users,
    color: 'from-sky-500 to-indigo-500'
  },
  {
    number: 6,
    id: 'testimonios',
    name: 'Testimonios (Prueba Social)',
    stage: 'Confianza',
    questionSolved: '¿Alguien más ya confió en ustedes y obtuvo resultados?',
    techUsed: 'Tailwind Glassmorphism + Avatar Badges',
    agentResponsible: 'Copywriter + Content Creator',
    icon: MessageSquareQuote,
    color: 'from-pink-500 to-rose-500'
  },
  {
    number: 7,
    id: 'faqs',
    name: 'FAQs (Acordeón de Preguntas)',
    stage: 'Confianza',
    questionSolved: '¿Qué pasa si tengo dudas de garantía, precios o tiempos?',
    techUsed: 'Radix UI Accordion + Schema.org GEO',
    agentResponsible: 'GEO Specialist + Auditor',
    icon: HelpCircle,
    color: 'from-amber-400 to-yellow-500'
  },
  {
    number: 8,
    id: 'contacto',
    name: 'Contacto (Formulario Validado)',
    stage: 'Acción',
    questionSolved: '¿Cómo envío mis datos formales para pedir cotización?',
    techUsed: 'React Hook Form + Validaciones Zod',
    agentResponsible: 'Web Developer + Auditor',
    icon: Mail,
    color: 'from-indigo-500 to-cyan-500'
  },
  {
    number: 9,
    id: 'whatsapp',
    name: 'WhatsApp (Cierre Inmediato)',
    stage: 'Acción',
    questionSolved: '¿Puedo hablar ya mismo con un humano por chat?',
    techUsed: 'Floating CTA + Event Tracking',
    agentResponsible: 'Launch Manager + Developer',
    icon: MessageCircle,
    color: 'from-emerald-400 to-green-600'
  },
  {
    number: 10,
    id: 'footer',
    name: 'Footer (Cierre y Legal)',
    stage: 'Confianza',
    questionSolved: '¿Dónde están los términos, redes y derechos reservados?',
    techUsed: 'Tailwind Clean Grid',
    agentResponsible: 'Web Architect + Launch Manager',
    icon: PanelBottom,
    color: 'from-slate-600 to-slate-800'
  }
];

export const Slide4BlocksAnatomy: React.FC = () => {
  const [activeBlock, setActiveBlock] = useState<BlockItem>(BLOCKS_LIST[1]); // Default Hero

  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto p-6 sm:p-10 relative overflow-y-auto overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Layers className="w-3.5 h-3.5" /> Arquitectura de Conversión
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            La Anatomía de los 10 Bloques Clave
          </h2>
        </div>
        <div className="text-xs font-mono text-slate-400">
          De la <span className="text-cyan-400 font-bold">Atención</span> a la <span className="text-emerald-400 font-bold">Acción en WhatsApp</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2">
        {/* Left: Interactive 10 Blocks Pipeline */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-2 max-h-[390px] overflow-y-auto pr-1">
          {BLOCKS_LIST.map((b) => {
            const isSelected = activeBlock.id === b.id;
            const Icon = b.icon;
            return (
              <button
                key={b.id}
                onClick={() => setActiveBlock(b)}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center justify-between group ${
                  isSelected
                    ? 'bg-slate-900 border-amber-500 ring-1 ring-amber-500/30 shadow-md'
                    : 'bg-slate-950/70 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${b.color} flex items-center justify-center text-white shrink-0 text-xs font-bold shadow-sm`}>
                    {b.number}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                      {b.name.split(' (')[0]}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      Fase: <span className="text-slate-300">{b.stage}</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 pl-1">
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Block Breakdown Card */}
        <div className="lg:col-span-5 glass-panel p-5 rounded-2xl flex flex-col justify-between">
          <div className="space-y-4">
            {/* Header of selected block */}
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800/80 pb-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activeBlock.color} flex items-center justify-center text-white shadow-lg`}>
                  <activeBlock.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-500 dark:text-amber-400 font-bold uppercase tracking-wider">
                    Bloque #{activeBlock.number} • Etapa {activeBlock.stage}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {activeBlock.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* The mental question it resolves */}
            <div className="p-3.5 rounded-xl glass-card border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="text-[11px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                🧠 Pregunta que responde en la mente del cliente:
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                "{activeBlock.questionSolved}"
              </p>
            </div>

            {/* Tech & Agent Details */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-slate-800/80">
                <span className="text-slate-400 font-mono">Tecnología bajo el capó:</span>
                <span className="font-mono text-cyan-300 font-semibold">{activeBlock.techUsed}</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-slate-800/80">
                <span className="text-slate-400 font-mono">Agente responsable:</span>
                <span className="font-mono text-amber-300 font-semibold">{activeBlock.agentResponsible}</span>
              </div>
            </div>
          </div>

          {/* Quick Director Rule */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-300 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Los 10 bloques juntos crean un embudo de alta conversión probado.</span>
          </div>
        </div>
      </div>

      {/* Footer banner */}
      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>💡 Cada bloque tiene un propósito psicológico; ninguno sobra.</span>
        <span className="hidden sm:inline text-amber-400">Haz clic en cualquier bloque para ver detalles</span>
      </div>
    </div>
  );
};
