import React, { useState, useEffect } from 'react';
import { 
  Boxes, Layout, Palette, Code2, PenTool, Search, Bot, 
  FileText, ShieldCheck, Rocket, Copy, Check, 
  ChevronRight, Terminal, Edit3
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { WebBriefData } from '../../../types';

interface Props {
  onOpenBriefModal?: () => void;
}

const DEFAULT_BRIEF: WebBriefData = {
  businessName: 'Apex Brand Studio',
  industry: 'Agencia de Branding & Web con IA',
  tagline: 'Transformamos negocios comunes en marcas irresistibles que venden 24/7',
  targetAudience: 'Emprendedores, profesionales y empresas que buscan captar clientes por WhatsApp',
  mainProblemSolved: 'Sitios web obsoletos que no convierten visitas en clientes',
  primaryGoal: 'leads',
  service1: 'Diseño de Landing Pages de Alta Conversión',
  service2: 'Identidad Visual & Branding Estratégico',
  service3: 'Optimización SEO y Motores de IA (GEO)',
  brandColors: 'Cian Eléctrico (#06B6D4), Violeta (#8B5CF6) y Dark Mode',
  whatsappNumber: '+51 987 654 321',
  differentiator: 'Entrega en tiempo récord con metodología de 9 Agentes de IA y garantía de satisfacción.',
  additionalNotes: 'Enfoque 100% en captación de leads y confianza inmediata.'
};

interface AgentDef {
  id: string;
  name: string;
  role: string;
  icon: React.ElementType;
  color: string;
  tag: string;
  whenToUse: string;
  whatItDoes: string[];
  recommendedSkills: string[];
  generatePrompt: (b: WebBriefData) => string;
}

const AGENTS_LIST: AgentDef[] = [
  {
    id: 'architect',
    name: 'Web Architect',
    role: 'Arquitecto Técnico & Estructura',
    icon: Layout,
    color: 'from-blue-500 to-indigo-600',
    tag: 'Fase 1: Cimientos',
    whenToUse: 'Al iniciar el proyecto o al planificar la arquitectura de carpetas y stack.',
    whatItDoes: [
      'Define el stack técnico (React, Vite, TypeScript, Tailwind CSS).',
      'Crea la estructura limpia de carpetas (/components, /data, /types).',
      'Garantiza que el código sea escalable, modular y fácil de mantener.'
    ],
    recommendedSkills: ['Web Design', 'Landing Page', 'Performance'],
    generatePrompt: (b) => 
      `Actúa como Web Architect. Revisa nuestro Brief de Negocio de "${b.businessName || 'Mi Negocio'}" (${b.industry || 'Servicios'}) y define la arquitectura modular de carpetas y componentes en React + Vite para presentar sus servicios principales (${b.service1 || 'Servicio 1'}, ${b.service2 || 'Servicio 2'}).`
  },
  {
    id: 'designer',
    name: 'UI/UX Designer',
    role: 'Director Visual & Experiencia',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    tag: 'Fase 2: Estética',
    whenToUse: 'Para definir colores, tipografías, jerarquía visual y espaciados mobile-first.',
    whatItDoes: [
      'Diseña paletas cromáticas armónicas y contrastes accesibles.',
      'Crea wireframes visuales y composición equilibrada de secciones.',
      'Aplica microinteracciones y glassmorphism para evitar diseños genéricos.'
    ],
    recommendedSkills: ['Web Design', 'Branding', 'Accessibility'],
    generatePrompt: (b) => 
      `Actúa como UI/UX Designer. Con los Skills "Web Design" y "Branding", define la paleta cromática basada en: ${b.brandColors || 'Dark mode con acentos vibrantes'}, la tipografía Outfit/Inter y la composición visual mobile-first para "${b.businessName || 'nuestro negocio'}" con propuesta: "${b.tagline || 'Soluciones profesionales'}".`
  },
  {
    id: 'developer',
    name: 'Web Developer',
    role: 'Desarrollador Frontend React',
    icon: Code2,
    color: 'from-emerald-500 to-teal-600',
    tag: 'Fase 3: Construcción',
    whenToUse: 'Para codificar los componentes interactivos, animaciones y maquetación.',
    whatItDoes: [
      'Escribe componentes TypeScript limpios y reutilizables.',
      'Implementa botones con enlace directo a WhatsApp y modales.',
      'Garantiza que todo funcione rápido y sin errores en consola.'
    ],
    recommendedSkills: ['Landing Page', 'Performance', 'Accessibility'],
    generatePrompt: (b) => 
      `Actúa como Web Developer. Carga el Skill "Landing Page" y programa los componentes interactivos para "${b.businessName || 'Mi Negocio'}" con Tailwind CSS, soporte móvil 100% y botón directo de WhatsApp configurado a ${b.whatsappNumber || '+51 999 000 000'}.`
  },
  {
    id: 'copywriter',
    name: 'Copywriter',
    role: 'Redactor Persuasivo de Conversión',
    icon: PenTool,
    color: 'from-amber-500 to-orange-600',
    tag: 'Fase 2: Textos',
    whenToUse: 'Para escribir titulares que enganchen, beneficios claros y llamadas a la acción.',
    whatItDoes: [
      'Aplica fórmulas psicológicas probadas (AIDA, PAS, StoryBrand).',
      'Transforma características aburridas en beneficios irresistibles.',
      'Redacta CTAs directos que provocan clics hacia WhatsApp.'
    ],
    recommendedSkills: ['Copywriting', 'Landing Page', 'Branding'],
    generatePrompt: (b) => 
      `Actúa como Copywriter de alta conversión. Con el Skill "Copywriting", redacta los 3 titulares principales con fórmula PAS/AIDA, la propuesta de valor ("${b.tagline || 'Propuesta de valor'}") y los beneficios de los servicios (${b.service1}, ${b.service2}, ${b.service3}) para "${b.businessName}".`
  },
  {
    id: 'seo',
    name: 'SEO Specialist',
    role: 'Especialista en Posicionamiento Google',
    icon: Search,
    color: 'from-cyan-500 to-blue-600',
    tag: 'Fase 4: Visibilidad',
    whenToUse: 'Para optimizar meta-etiquetas, velocidad de carga y palabras clave.',
    whatItDoes: [
      'Configura etiquetas Meta, OpenGraph (para WhatsApp) y Twitter Cards.',
      'Optimiza la jerarquía de encabezados H1, H2, H3 y textos alternativos.',
      'Garantiza tiempos de carga ultrarrápidos para Core Web Vitals.'
    ],
    recommendedSkills: ['SEO', 'Performance', 'Blog'],
    generatePrompt: (b) => 
      `Actúa como SEO Specialist. Con el Skill "SEO", genera las meta etiquetas dinámicas, OpenGraph tags para WhatsApp y sitemap para posicionar a "${b.businessName || 'nuestro negocio'}" en el nicho de ${b.industry || 'servicios'} dirigido a ${b.targetAudience || 'clientes ideales'}.`
  },
  {
    id: 'geo',
    name: 'GEO Specialist',
    role: 'Optimización para Motores de IA',
    icon: Bot,
    color: 'from-purple-500 to-indigo-600',
    tag: 'Fase 4: Era IA',
    whenToUse: 'Para que ChatGPT, Perplexity, Claude y Gemini recomienden tu web como respuesta.',
    whatItDoes: [
      'Implementa Schema.org JSON-LD (LocalBusiness, Organization, FAQ).',
      'Estructura los datos para que los LLMs citen tu marca con precisión.',
      'El nuevo estándar: ser la primera opción en búsquedas generativas.'
    ],
    recommendedSkills: ['GEO', 'SEO', 'Audit'],
    generatePrompt: (b) => 
      `Actúa como GEO Specialist. Carga el Skill "GEO" e inyecta los datos estructurados Schema.org JSON-LD (LocalBusiness y FAQPage) para que ChatGPT, Perplexity y Gemini citen y recomienden a "${b.businessName || 'este negocio'}" como referente en ${b.industry}.`
  },
  {
    id: 'content',
    name: 'Content Creator',
    role: 'Generador de Autoridad & FAQs',
    icon: FileText,
    color: 'from-violet-500 to-fuchsia-600',
    tag: 'Fase 3: Contenido',
    whenToUse: 'Para redactar preguntas frecuentes, testimonios creíbles y posts de blog.',
    whatItDoes: [
      'Redacta las 6 FAQs que destruyen las objeciones de los clientes.',
      'Genera historias de éxito y testimonios realistas.',
      'Crea artículos de blog optimizados para educar a la audiencia.'
    ],
    recommendedSkills: ['Blog', 'Copywriting', 'SEO'],
    generatePrompt: (b) => 
      `Actúa como Content Creator. Con el Skill "Blog", genera las 5 preguntas frecuentes indispensables con respuestas persuasivas para "${b.businessName}", resolviendo el dolor principal: "${b.mainProblemSolved || 'dudas del cliente'}" y destacando: "${b.differentiator}".`
  },
  {
    id: 'auditor',
    name: 'Auditor',
    role: 'Control de Calidad & Accesibilidad',
    icon: ShieldCheck,
    color: 'from-emerald-600 to-green-700',
    tag: 'Fase 5: Calidad',
    whenToUse: 'Antes de publicar: revisa enlaces, rendimiento, contraste y mobile.',
    whatItDoes: [
      'Audita accesibilidad WCAG AA (navegación por teclado y contraste).',
      'Verifica que no existan enlaces rotos o imágenes sin cargar.',
      'Comprueba que el botón de WhatsApp funcione en todos los dispositivos.'
    ],
    recommendedSkills: ['Audit', 'Accessibility', 'Performance'],
    generatePrompt: (b) => 
      `Actúa como Auditor. Carga los Skills "Audit" y "Accessibility" para realizar un escaneo 360° en la web de "${b.businessName}", verificando contraste con los colores (${b.brandColors}), accesibilidad WCAG AA y el enlace al WhatsApp (${b.whatsappNumber}).`
  },
  {
    id: 'launch',
    name: 'Launch Manager',
    role: 'Despliegue & Publicación Global',
    icon: Rocket,
    color: 'from-red-500 to-orange-600',
    tag: 'Fase 6: Lanzamiento',
    whenToUse: 'Para conectar GitHub, desplegar en Vercel y configurar el dominio.',
    whatItDoes: [
      'Prepara el build de producción sin advertencias (`npm run build`).',
      'Automatiza el despliegue continuo en Vercel con certificado SSL gratis.',
      'Verifica el checklist final de lanzamiento en producción.'
    ],
    recommendedSkills: ['Launch', 'Audit', 'Performance'],
    generatePrompt: (b) => 
      `Actúa como Launch Manager. Con el Skill "Launch", guía el despliegue continuo en Vercel y GitHub para el sitio web de "${b.businessName}", asegurando build sin advertencias, certificado SSL y dominio activo.`
  }
];

export const Slide2AgentsKit: React.FC<Props> = ({ onOpenBriefModal }) => {
  const [brief, setBrief] = useState<WebBriefData>(() => {
    try {
      const saved = localStorage.getItem('ruta_web_brief_data');
      return saved ? JSON.parse(saved) : DEFAULT_BRIEF;
    } catch {
      return DEFAULT_BRIEF;
    }
  });

  const [selectedAgentId, setSelectedAgentId] = useState<string>('developer');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  // Sync brief from custom events and storage
  useEffect(() => {
    const handleUpdate = () => {
      try {
        const saved = localStorage.getItem('ruta_web_brief_data');
        if (saved) setBrief(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    };

    window.addEventListener('ruta_web_brief_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('ruta_web_brief_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const selectedAgent = AGENTS_LIST.find((a) => a.id === selectedAgentId) || AGENTS_LIST[0];
  const dynamicPrompt = selectedAgent.generatePrompt(brief);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="h-full flex flex-col justify-between p-5 sm:p-8 md:p-10 relative overflow-hidden select-none">
      {/* Header */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <Boxes className="w-3.5 h-3.5 text-cyan-400" />
              Kit de Agentes
            </div>
            <span className="text-slate-500 text-xs hidden sm:inline">• 9 Especialistas Listos</span>
          </div>

          {/* Active Brief indicator */}
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Brief: <strong className="text-white">{brief.businessName || 'Sin Nombre'}</strong></span>
            </div>

            {onOpenBriefModal && (
              <button
                onClick={onOpenBriefModal}
                className="px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 text-[11px] font-mono border border-slate-700 flex items-center gap-1 cursor-pointer transition-all"
                title="Editar Brief de Clase 1"
              >
                <Edit3 className="w-3 h-3" />
                <span>Editar</span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight font-display">
            Tu Equipo de <span className="text-gradient-cyan">9 Agentes de IA</span>
          </h2>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-1 items-start">
        {/* Left Column: Agents Grid (9 Agents in 3x3) */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-2">
          {AGENTS_LIST.map((agent) => {
            const isSelected = agent.id === selectedAgentId;
            const Icon = agent.icon;

            return (
              <button
                key={agent.id}
                onClick={() => setSelectedAgentId(agent.id)}
                className={`p-2.5 rounded-2xl border transition-all flex flex-col items-center text-center justify-between gap-1.5 cursor-pointer group relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/20 ring-2 ring-cyan-400/40 -translate-y-0.5'
                    : 'bg-slate-950/60 hover:bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-xl bg-gradient-to-br ${agent.color} text-white shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="w-full">
                  <div className="text-[9px] font-mono text-slate-400 uppercase font-semibold truncate">
                    {agent.tag.split(':')[0]}
                  </div>
                  <div className={`text-[11px] font-bold leading-tight line-clamp-1 mt-0.5 ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                    {agent.name}
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column: Agent Deep-Dive Details & Highlighted Activation Prompt */}
        <div className="lg:col-span-7 glass-card p-4 sm:p-5 rounded-3xl border border-cyan-500/40 bg-slate-950/95 flex flex-col justify-between shadow-2xl relative space-y-3">
          {/* Header of selected agent */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center gap-2.5">
              <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${selectedAgent.color} text-white shadow-md`}>
                <selectedAgent.icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider">
                  {selectedAgent.tag}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-white font-display">
                  {selectedAgent.name}
                </h3>
                <p className="text-[11px] text-slate-400">{selectedAgent.role}</p>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-end text-right">
              <span className="text-[9px] font-mono text-slate-400 uppercase">Cuándo activarlo:</span>
              <span className="text-[11px] text-amber-300 font-semibold max-w-[180px] line-clamp-1">
                {selectedAgent.whenToUse}
              </span>
            </div>
          </div>

          {/* Compact bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
            {selectedAgent.whatItDoes.slice(0, 2).map((item, idx) => (
              <div key={idx} className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-300 leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Recommended Skills */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold shrink-0">
              Skills recomendados:
            </span>
            <div className="flex flex-wrap gap-1">
              {selectedAgent.recommendedSkills.map((sk, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-mono font-bold">
                  🧠 {sk}
                </span>
              ))}
            </div>
          </div>

          {/* High-Contrast Prompt Box Fused with Brief */}
          <div className="rounded-2xl bg-[#060a14] border-2 border-cyan-500/50 p-3.5 shadow-xl relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wide">
                  Prompt de Invocación (con ADN de tu Brief)
                </span>
              </div>

              <button
                onClick={() => handleCopy(dynamicPrompt)}
                className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20 cursor-pointer hover:scale-105 active:scale-95"
              >
                {copiedPrompt ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-950 font-black" />
                    <span className="font-extrabold text-slate-950">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Prompt</span>
                  </>
                )}
              </button>
            </div>

            {/* Prompt text */}
            <div className="bg-black/60 p-3 rounded-xl border border-cyan-500/30">
              <p className="text-xs sm:text-[13px] font-mono text-cyan-200 leading-relaxed font-medium select-all">
                "{dynamicPrompt}"
              </p>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800/60">
            <span>💡 Si cambias el Brief, este prompt se actualiza al segundo.</span>
            <span className="text-emerald-400 font-semibold">100% Sincronizado</span>
          </div>
        </div>
      </div>
    </div>
  );
};
