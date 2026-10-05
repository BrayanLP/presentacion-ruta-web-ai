import React, { useState } from 'react';
import { 
  Rocket, Terminal, Eye, CheckCircle2, Copy, Check
} from 'lucide-react';

interface FirstBlockDetail {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  whatAgentDoes: string;
  agentName: string;
  techKey: string;
  visualPreview: React.ReactNode;
  promptExample: string;
}

export const Slide4FirstBlocks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'navbar' | 'hero' | 'servicios' | 'beneficios'>('hero');
  const [copied, setCopied] = useState(false);

  const BLOCKS: Record<string, FirstBlockDetail> = {
    navbar: {
      id: 'navbar',
      name: '1. Navbar',
      title: 'Barra Superior Flotante con Glassmorphism',
      subtitle: 'La brújula de tu sitio: orienta en 1 segundo y ofrece el botón de acción siempre visible.',
      whatAgentDoes: 'El UI/UX Designer define el logotipo a la izquierda, los enlaces ancla (#servicios, #faqs) al centro y el botón CTA a la derecha con efecto glassmorphism.',
      agentName: 'UI/UX Designer + Web Architect',
      techKey: 'Next.js Link + Tailwind backdrop-blur + Lucide Icons',
      promptExample: 'Crea el componente Navbar flotante con efecto blur semitransparente, enlaces suaves a las secciones y botón destacado "Contactar".',
      visualPreview: (
        <div className="w-full p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-400 to-brand-500 flex items-center justify-center font-black text-slate-950 text-xs">
              ⚡
            </div>
            <span className="font-extrabold text-sm text-white tracking-tight">TuMarca.ai</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-300">
            <span className="hover:text-cyan-400 cursor-pointer">Servicios</span>
            <span className="hover:text-cyan-400 cursor-pointer">Beneficios</span>
            <span className="hover:text-cyan-400 cursor-pointer">Testimonios</span>
            <span className="hover:text-cyan-400 cursor-pointer">FAQs</span>
          </div>

          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 text-xs font-bold shadow-md hover:scale-105 transition-all">
            Empezar Hoy
          </button>
        </div>
      )
    },
    hero: {
      id: 'hero',
      name: '2. Hero',
      title: 'Titular Magnético, Subtítulo y CTA de Conversión',
      subtitle: 'El 80% de tus ventas se ganan o pierden aquí. Responde al dolor urgente de tu cliente.',
      whatAgentDoes: 'El Copywriter aplica la fórmula PAS para redactar el titular con hook irresistible; el Developer monta la tipografía gigante y el botón principal con microanimación GSAP.',
      agentName: 'Copywriter + Web Developer',
      techKey: 'Tailwind Typography + GSAP FadeUp + Lottie Vector',
      promptExample: 'Genera el componente HeroSection con titular magnético con fórmula PAS, subtítulo explicativo de 2 líneas, botón CTA primario y badge de prueba social.',
      visualPreview: (
        <div className="w-full p-6 rounded-xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-center space-y-3 relative overflow-y-auto overflow-x-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono font-semibold">
            ✨ Más de 120 clientes satisfechos
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight font-display">
            Aumenta tus Ventas en 30 Días con una <span className="text-gradient-cyan">Web de Alto Impacto</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Diseñamos y programamos sitios modernos optimizados para convertir visitas en clientes reales por WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-brand-500 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/20">
              Cotizar por WhatsApp
            </button>
            <button className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono">
              Ver Trabajos
            </button>
          </div>
        </div>
      )
    },
    servicios: {
      id: 'servicios',
      name: '3. Servicios',
      title: 'Parrilla Modular de Ofertas y Soluciones',
      subtitle: 'Empaqueta lo que haces en soluciones comprensibles, no en conceptos técnicos confusos.',
      whatAgentDoes: 'El Web Developer crea una rejilla de tarjetas modulares en Tailwind; cada tarjeta destaca el problema que resuelve, precio orientativo y llamada al detalle.',
      agentName: 'Web Developer + UI/UX Designer',
      techKey: 'Tailwind Grid + Radix Hover Cards',
      promptExample: 'Crea el componente ServicesSection con rejilla de 3 tarjetas elegantes en glassmorphism, iconos temáticos y botón de consultar por cada servicio.',
      visualPreview: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-bold">01</div>
            <div className="text-xs font-bold text-white">Landing Pages</div>
            <div className="text-[11px] text-slate-400">Páginas de aterrizaje diseñadas para vender un solo producto o servicio.</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/40 space-y-1.5 ring-1 ring-cyan-500/20">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold">02</div>
            <div className="text-xs font-bold text-white">Webs Corporativas</div>
            <div className="text-[11px] text-slate-400">Sitios institucionales con múltiples páginas, blog y catálogo de servicios.</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs font-bold">03</div>
            <div className="text-xs font-bold text-white">Automatización IA</div>
            <div className="text-[11px] text-slate-400">Chatbots y agentes conectados a WhatsApp para responder 24/7.</div>
          </div>
        </div>
      )
    },
    beneficios: {
      id: 'beneficios',
      name: '4. Beneficios',
      title: 'Diferenciación Brutal y Ventajas Competitivas',
      subtitle: 'La gente no compra características; compra resultados, rapidez y tranquilidad.',
      whatAgentDoes: 'El Copywriter extrae los 4 diferenciadores del Brief y el Designer crea viñetas con iconografía de Font Awesome para una lectura en diagonal.',
      agentName: 'Copywriter + Content Creator',
      techKey: 'Font Awesome / Lucide Icons + Micro-Checkmarks',
      promptExample: 'Crea el componente BenefitsSection destacando los 4 diferenciadores del negocio con iconos llamativos y estadísticas de impacto.',
      visualPreview: (
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Entrega en 5 Días</div>
              <div className="text-[10px] text-slate-400">Sin demoras de meses gracias al kit multiagente.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">100% Mobile Ready</div>
              <div className="text-[10px] text-slate-400">Optimizado para verse perfecto en cualquier smartphone.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Sin Código Manual</div>
              <div className="text-[10px] text-slate-400">Todo el código queda documentado y respaldado.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Soporte Continuo</div>
              <div className="text-[10px] text-slate-400">Garantía total de funcionamiento sin sorpresas.</div>
            </div>
          </div>
        </div>
      )
    }
  };

  const current = BLOCKS[activeTab];

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(current.promptExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto p-6 sm:p-10 relative overflow-y-auto overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Rocket className="w-3.5 h-3.5" /> Construcción Fase 1
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Los 4 Bloques de Impacto Inmediato
          </h2>
        </div>
        
        {/* Navigation Tabs between 4 blocks */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          {(['navbar', 'hero', 'servicios', 'beneficios'] as const).map((key) => {
            const isTab = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  isTab
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {BLOCKS[key].name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto py-2">
        {/* Left: Interactive Visual Simulation */}
        <div className="lg:col-span-6 flex flex-col justify-between glass-panel p-5 rounded-2xl">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <Eye className="w-4 h-4" /> Vista Previa del Componente
              </span>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                {current.techKey}
              </span>
            </div>

            {/* Visual block simulation */}
            <div className="py-2">
              {current.visualPreview}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Agente: <strong className="text-amber-400">{current.agentName}</strong></span>
            <span className="text-emerald-400">✓ Listo para ensamblar</span>
          </div>
        </div>

        {/* Right: Director's Instruction Card & Copyable Prompt */}
        <div className="lg:col-span-6 flex flex-col justify-between glass-panel p-5 rounded-2xl space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">
                Fase 1 • Bloque Superior
              </span>
            </div>

            <h3 className="text-xl font-bold text-white font-display">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.subtitle}
            </p>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="text-[11px] font-mono font-bold text-cyan-400 uppercase">
                ⚙️ Lo que hace tu Agente por ti:
              </div>
              <p className="text-xs text-slate-300">
                {current.whatAgentDoes}
              </p>
            </div>
          </div>

          {/* Copyable prompt box */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Terminal className="w-3.5 h-3.5" /> Prompt para Antigravity IDE:
              </span>
              <button
                onClick={handleCopyPrompt}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-bold transition-all"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copied ? '¡Copiado!' : 'Copiar Prompt'}
              </button>
            </div>
            <div className="p-2.5 rounded-xl bg-black/60 border border-slate-800 text-xs font-mono text-emerald-400 select-all leading-relaxed">
              "{current.promptExample}"
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>🎯 Los primeros 4 bloques generan el 70% del interés de compra del visitante.</span>
        <span className="hidden sm:inline text-amber-400">Alterna los tabs para ver Navbar, Hero, Servicios y Beneficios</span>
      </div>
    </div>
  );
};
