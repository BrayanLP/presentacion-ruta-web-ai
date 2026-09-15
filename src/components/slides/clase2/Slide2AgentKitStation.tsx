import React, { useState, useEffect } from 'react';
import { 
  Copy, Check, Download, Bot, Brain, 
  Edit3, Sparkles, Layers, CheckCircle2, 
  Wand2
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

const AGENT_OPTIONS = [
  { 
    id: 'architect', 
    name: 'Web Architect', 
    role: 'Estructura & Cimientos', 
    defaultSkill: 'web-design',
    taskPrompt: 'Define la arquitectura de carpetas, el stack técnico (React + Vite + Tailwind) y los componentes base.' 
  },
  { 
    id: 'designer', 
    name: 'UI/UX Designer', 
    role: 'Diseño Visual & Experiencia', 
    defaultSkill: 'web-design',
    taskPrompt: 'Diseña la jerarquía visual mobile-first, paleta HSL, tipografía Outfit/Inter y microinteracciones con glassmorphism.' 
  },
  { 
    id: 'developer', 
    name: 'Web Developer', 
    role: 'Desarrollo Frontend React', 
    defaultSkill: 'landing-page',
    taskPrompt: 'Construye los componentes modulares de la web (HeroSection, ServicesGrid, CTA flotante) conectando el botón de WhatsApp directo.' 
  },
  { 
    id: 'copywriter', 
    name: 'Copywriter', 
    role: 'Textos de Conversión', 
    defaultSkill: 'copywriting',
    taskPrompt: 'Redacta los 3 titulares magnéticos con fórmula PAS/AIDA, la propuesta de valor y las balas de beneficios del negocio.' 
  },
  { 
    id: 'seo', 
    name: 'SEO Specialist', 
    role: 'Posicionamiento Google', 
    defaultSkill: 'seo',
    taskPrompt: 'Genera las etiquetas Meta dinámicas, OpenGraph para WhatsApp y la estructura semántica de encabezados H1/H2/H3.' 
  },
  { 
    id: 'geo', 
    name: 'GEO Specialist', 
    role: 'Optimización Motores IA', 
    defaultSkill: 'geo',
    taskPrompt: 'Inyecta los datos estructurados Schema.org JSON-LD (LocalBusiness y FAQPage) para que ChatGPT, Perplexity y Gemini citen este negocio.' 
  },
  { 
    id: 'content', 
    name: 'Content Creator', 
    role: 'FAQs & Casos de Éxito', 
    defaultSkill: 'blog',
    taskPrompt: 'Genera las 5 preguntas frecuentes indispensables con respuestas persuasivas que destruyen objeciones de clientes.' 
  },
  { 
    id: 'auditor', 
    name: 'Auditor', 
    role: 'Control de Calidad & WCAG', 
    defaultSkill: 'audit',
    taskPrompt: 'Realiza una auditoría 360° de contraste de colores, accesibilidad WCAG AA, responsive móvil y verificación de enlaces.' 
  },
  { 
    id: 'launch', 
    name: 'Launch Manager', 
    role: 'Despliegue & Publicación', 
    defaultSkill: 'launch',
    taskPrompt: 'Guíame paso a paso para compilar el proyecto sin errores, sincronizar con GitHub y desplegar en Vercel con SSL y dominio.' 
  }
];

const SKILL_OPTIONS = [
  { id: 'landing-page', name: 'Landing Page', desc: 'Estructura de alta conversión mobile-first' },
  { id: 'web-design', name: 'Web Design', desc: 'Estética moderna, HSL y glassmorphism' },
  { id: 'copywriting', name: 'Copywriting', desc: 'Fórmulas persuasivas PAS y AIDA' },
  { id: 'seo', name: 'SEO', desc: 'Meta tags, OpenGraph y Core Web Vitals' },
  { id: 'geo', name: 'GEO', desc: 'Schema.org JSON-LD para motores de IA' },
  { id: 'blog', name: 'Blog', desc: 'Artículos y FAQs de autoridad' },
  { id: 'branding', name: 'Branding', desc: 'Consistencia de marca y tono de voz' },
  { id: 'accessibility', name: 'Accessibility', desc: 'Cumplimiento WCAG AA' },
  { id: 'performance', name: 'Performance', desc: 'Carga ultrarrápida y 90+ Lighthouse' },
  { id: 'audit', name: 'Audit', desc: 'Escaneo integral de bugs y calidad' },
  { id: 'launch', name: 'Launch', desc: 'Despliegue en Vercel y GitHub' }
];

export const Slide2AgentKitStation: React.FC<Props> = ({ onOpenBriefModal }) => {
  const [brief, setBrief] = useState<WebBriefData>(() => {
    try {
      const saved = localStorage.getItem('ruta_web_brief_data');
      return saved ? JSON.parse(saved) : DEFAULT_BRIEF;
    } catch {
      return DEFAULT_BRIEF;
    }
  });

  // Mode: 'modular' (Agente + Skill + Brief) or 'all-in-one' (Equipo Completo 9 Agentes + Brief)
  const [promptMode, setPromptMode] = useState<'modular' | 'all-in-one'>('all-in-one');
  const [selectedAgent, setSelectedAgent] = useState<string>('developer');
  const [selectedSkill, setSelectedSkill] = useState<string>('landing-page');
  const [customTask, setCustomTask] = useState<string>('');
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);
  const [downloadedKit, setDownloadedKit] = useState<boolean>(false);

  // Sync brief from custom events and localStorage
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

  const currentAgent = AGENT_OPTIONS.find((a) => a.id === selectedAgent) || AGENT_OPTIONS[0];
  const currentSkill = SKILL_OPTIONS.find((s) => s.id === selectedSkill) || SKILL_OPTIONS[0];

  // 1. Generate Modular Prompt (Agent + Skill + Clase 1 Brief)
  const generateModularPrompt = () => {
    return `Actúa como ${currentAgent.name} (${currentAgent.role}).
Carga el Skill "${currentSkill.name}" (${currentSkill.desc}).

📌 [BRIEF DE NEGOCIO — CLASE 1]
- Nombre del Negocio: "${brief.businessName || 'Mi Negocio'}"
- Nicho / Industria: ${brief.industry || 'Servicios Profesionales'}
- Propuesta de Valor: "${brief.tagline || 'Soluciones de alto impacto'}"
- Público Objetivo: ${brief.targetAudience || 'Clientes potenciales'}
- Dolor Principal Resuelto: ${brief.mainProblemSolved || 'Falta de solución profesional'}
- Diferenciador Clave: ${brief.differentiator || 'Atención personalizada y rapidez'}
- Servicios Principales:
  1. ${brief.service1 || 'Servicio 1'}
  2. ${brief.service2 || 'Servicio 2'}
  3. ${brief.service3 || 'Servicio 3'}
- Paleta de Colores: ${brief.brandColors || 'Dark Mode con acentos vibrantes'}
- Canal de Conversión (WhatsApp): ${brief.whatsappNumber || '+51 999 000 000'}

🎯 [MISIÓN & TAREA EXACTA]
${customTask.trim() || currentAgent.taskPrompt}

⚡ [ESTÁNDARES & REGLAS NO NEGOCIABLES DEL SKILL "${currentSkill.name}"]
- Código limpio, tipado en TypeScript con React + Tailwind CSS
- Diseño 100% Mobile-First optimizado para teléfonos y pantallas táctiles
- Botón de WhatsApp con mensaje predeterminado listo para iniciar conversación
- Cero código genérico o componentes placeholders vacíos.`;
  };

  // 2. Generate All-in-One Master Orchestration Prompt (All 9 Agents + Skills + Clase 1 Brief)
  const generateAllInOnePrompt = () => {
    return `Actúa como un Equipo de Élite de Desarrollo Web con Inteligencia Artificial orquestado en Antigravity IDE, compuesto por:
1. 🏗️ Web Architect (Skill: Web Design & Performance) -> Estructura modular y stack React + Vite.
2. 🎨 UI/UX Designer (Skill: Web Design & Branding) -> Estética premium, paleta HSL y glassmorphism.
3. 💻 Web Developer (Skill: Landing Page) -> Componentes interactivos y CTA flotante a WhatsApp.
4. ✍️ Copywriter (Skill: Copywriting) -> Fórmulas persuasivas PAS/AIDA y titulares de alto impacto.
5. 🔍 SEO Specialist (Skill: SEO) -> Meta tags, OpenGraph y jerarquía semántica H1/H2/H3.
6. 🤖 GEO Specialist (Skill: GEO) -> Datos estructurados Schema.org JSON-LD para ChatGPT, Perplexity y Gemini.
7. 📝 Content Creator (Skill: Blog) -> Acordeón de FAQs que resuelven las objeciones del cliente.
8. 🛡️ Auditor (Skill: Audit & Accessibility) -> Validación WCAG AA, contraste y responsive móvil.
9. 🚀 Launch Manager (Skill: Launch) -> Configuración para despliegue continuo en Vercel con SSL.

👑 [DIRECTIVA DEL CEO — BRIEF DE NEGOCIO ESTRUCTURADO EN CLASE 1]
- Nombre Comercial: "${brief.businessName || 'Mi Negocio'}"
- Nicho / Industria: ${brief.industry || 'Servicios Profesionales'}
- Propuesta Única de Valor: "${brief.tagline || 'Soluciones de alto impacto'}"
- Público Objetivo: ${brief.targetAudience || 'Clientes que buscan calidad'}
- Problema Principal que Resuelve: ${brief.mainProblemSolved || 'Falta de opciones profesionales'}
- Diferenciador Clave: ${brief.differentiator || 'Garantía y entrega rápida'}

📦 [SERVICIOS / PRODUCTOS PRINCIPALES]
1. ${brief.service1 || 'Servicio 1'}
2. ${brief.service2 || 'Servicio 2'}
3. ${brief.service3 || 'Servicio 3'}

🎨 [IDENTIDAD VISUAL & CONVERSIÓN]
- Paleta de Colores: ${brief.brandColors || 'Dark Mode con acentos cian y violeta'}
- Botón Flotante de WhatsApp: ${brief.whatsappNumber || '+51 999 000 000'} con mensaje: "Hola ${brief.businessName || 'equipo'}, estuve revisando su página web y deseo cotizar."

📐 [ARQUITECTURA DE COMPONENTES A GENERAR]
- Navbar.tsx (Logo + Botón CTA)
- HeroSection.tsx (Titular magnético + Subtítulo de beneficio + Botón WhatsApp)
- ServicesGrid.tsx (Tarjetas de los 3 servicios con micro-interacciones)
- WhyUs.tsx (Diferenciadores y prueba de valor)
- FaqAccordion.tsx (FAQs con Schema JSON-LD para motores de IA)
- ContactWhatsapp.tsx (Bloque de contacto directo y botón flotante)
- Footer.tsx (Derechos y datos de contacto)

Construye el proyecto completo de forma modular, responsiva, estilizada con Tailwind CSS y lista para producción en Antigravity IDE.`;
  };

  const activeGeneratedPrompt = promptMode === 'all-in-one' 
    ? generateAllInOnePrompt() 
    : generateModularPrompt();

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(activeGeneratedPrompt);
    setCopiedPrompt(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handleDownloadFullKit = () => {
    const fullKitMarkdown = `# 🧰 KIT DE AGENTES & SKILLS + BRIEF MAESTRO
# RUTA WEB CON IA — CLASE 1 & CLASE 2

## 👑 1. BRIEF DEL NEGOCIO (CLASE 1)
- **Negocio:** ${brief.businessName || 'Mi Negocio'}
- **Industria:** ${brief.industry || 'Servicios'}
- **Eslogan / Propuesta:** ${brief.tagline || 'Propuesta de valor'}
- **Público Objetivo:** ${brief.targetAudience || 'Público objetivo'}
- **Diferenciador:** ${brief.differentiator || 'Diferenciador'}
- **Servicio 1:** ${brief.service1}
- **Servicio 2:** ${brief.service2}
- **Servicio 3:** ${brief.service3}
- **Colores:** ${brief.brandColors}
- **WhatsApp:** ${brief.whatsappNumber}

---

## 🚀 2. PROMPT MAESTRO ALL-IN-ONE PARA ANTIGRAVITY
\`\`\`markdown
${generateAllInOnePrompt()}
\`\`\`

---

## 👨‍💻 3. CATÁLOGO DE PROMPTS MODULARES POR AGENTE (CLASE 2)
${AGENT_OPTIONS.map((a) => `
### ${a.name} (${a.role})
**Skill sugerido:** ${a.defaultSkill}
\`\`\`markdown
Actúa como ${a.name} (${a.role}).
Carga el Skill correspondiente.
Basándote en el Brief de "${brief.businessName}":
Tarea: ${a.taskPrompt}
WhatsApp de contacto: ${brief.whatsappNumber}
Colores: ${brief.brandColors}
\`\`\`
`).join('\n')}
`;

    const blob = new Blob([fullKitMarkdown], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const safeName = (brief.businessName || 'kit_agentes_brief').toLowerCase().replace(/\s+/g, '_');
    link.setAttribute('download', `${safeName}_prompt_maestro.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadedKit(true);
    confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });
    setTimeout(() => setDownloadedKit(false), 3000);
  };

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 md:p-12 relative overflow-hidden select-none">
      {/* Header & Brief Integration Bar */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <Wand2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              Fusión Clase 1 + 2
            </div>
            <span className="text-slate-500 text-xs hidden sm:inline">• Prompt Maestro</span>
          </div>

          {/* Active Brief Pill with Quick Edit Button */}
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
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

            <button
              onClick={handleDownloadFullKit}
              className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white text-[11px] font-bold font-mono transition-all cursor-pointer shadow-sm"
            >
              {downloadedKit ? <Check className="w-3 h-3 text-emerald-300" /> : <Download className="w-3 h-3" />}
              <span>Exportar (.md)</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mt-1">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
              Estación del <span className="text-gradient-cyan">Prompt Maestro</span>
            </h2>
          </div>

          {/* Prompt Mode Toggle Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/90 border border-slate-800 self-start sm:self-auto shrink-0">
            <button
              onClick={() => setPromptMode('all-in-one')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                promptMode === 'all-in-one'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>🚀 Equipo Completo (All-in-One)</span>
            </button>

            <button
              onClick={() => setPromptMode('modular')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                promptMode === 'modular'
                  ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>🎯 Por Agente & Skill</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Studio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto py-1">
        {/* Left Column: Controls according to mode */}
        <div className="lg:col-span-5 space-y-2.5">
          {promptMode === 'all-in-one' ? (
            /* All-in-One Highlights Card */
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" /> Orquestación de 9 Agentes en Antigravity
                </span>
                <span className="text-[10px] font-mono text-emerald-400">100% Automatizado</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Este prompt le entrega a <strong>Antigravity IDE</strong> la directiva completa del CEO para construir tu web de punta a punta coordinando a los 9 especialistas.
              </p>

              {/* Brief snapshot items */}
              <div className="space-y-1.5 text-xs font-mono text-slate-300 bg-black/40 p-3 rounded-xl border border-slate-800/80">
                <div className="text-cyan-300 font-bold truncate">🏢 Negocio: {brief.businessName || 'Sin Nombre'}</div>
                <div className="text-slate-400 truncate">🎯 Objetivo: Captar clientes por WhatsApp</div>
                <div className="text-slate-400 truncate">🎨 Colores: {brief.brandColors}</div>
                <div className="text-emerald-400 font-semibold truncate">📲 WhatsApp: {brief.whatsappNumber || 'Configurado'}</div>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Incluye Schema.org JSON-LD para aparecer en ChatGPT y Perplexity.</span>
              </div>
            </div>
          ) : (
            /* Modular Controls: Agent + Skill Selector */
            <>
              {/* Agent Selector */}
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold flex items-center gap-1.5">
                    <Bot className="w-3.5 h-3.5" /> 1. Elige al Agente
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{currentAgent.name}</span>
                </div>

                <div className="grid grid-cols-3 gap-1 max-h-28 overflow-y-auto pr-0.5">
                  {AGENT_OPTIONS.map((agent) => {
                    const isSelected = agent.id === selectedAgent;
                    return (
                      <button
                        key={agent.id}
                        onClick={() => {
                          setSelectedAgent(agent.id);
                          setSelectedSkill(agent.defaultSkill);
                        }}
                        className={`p-1.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-sm ring-1 ring-cyan-400/30'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="text-[9px] font-bold truncate">{agent.name}</div>
                        <div className="text-[8px] font-mono text-slate-400 truncate">{agent.role.split('&')[0]}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Skill Selector */}
              <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-purple-400 uppercase font-bold flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5" /> 2. Acopla el Skill
                  </span>
                  <span className="text-[10px] font-mono text-purple-300">{currentSkill.name}</span>
                </div>

                <div className="flex flex-wrap gap-1 max-h-20 overflow-y-auto">
                  {SKILL_OPTIONS.map((skill) => {
                    const isSelected = skill.id === selectedSkill;
                    return (
                      <button
                        key={skill.id}
                        onClick={() => setSelectedSkill(skill.id)}
                        className={`px-2 py-0.5 rounded-lg border text-left transition-all text-[9px] font-mono font-bold cursor-pointer ${
                          isSelected
                            ? 'bg-purple-500/25 border-purple-400 text-purple-200 shadow-sm ring-1 ring-purple-400/30'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        🧠 {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Task input */}
              <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <Edit3 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <input
                  type="text"
                  value={customTask}
                  onChange={(e) => setCustomTask(e.target.value)}
                  placeholder={`Personalizar tarea (Opcional)`}
                  className="w-full bg-transparent text-[10px] font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </>
          )}
        </div>

        {/* Right Column: Live Generated Master Prompt & One-Click Copy */}
        <div className="lg:col-span-7 glass-card p-4 sm:p-5 rounded-3xl border border-cyan-500/40 bg-slate-950/95 flex flex-col justify-between shadow-2xl relative">
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase">
                  {promptMode === 'all-in-one' 
                    ? 'Prompt Maestro All-in-One (Fusión Clase 1 + Clase 2)' 
                    : `Prompt Especializado: ${currentAgent.name} + Skill ${currentSkill.name}`}
                </span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400">Listo para Antigravity</span>
            </div>

            {/* Prompt code preview */}
            <div className="rounded-2xl bg-[#060a14] border border-slate-800 p-3 max-h-64 sm:max-h-72 overflow-y-auto">
              <pre className="text-[11px] font-mono text-cyan-200 leading-relaxed whitespace-pre-wrap select-all font-medium">
                {activeGeneratedPrompt}
              </pre>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-2 justify-between">
            <span className="text-[10px] font-mono text-slate-400">
              💡 Cópialo y pégalo en el chat de Antigravity para iniciar la construcción.
            </span>

            <button
              onClick={handleCopyPrompt}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 text-xs font-extrabold font-mono flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer hover:scale-105 active:scale-95"
            >
              {copiedPrompt ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950 font-black" />
                  <span>¡Prompt Maestro Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Prompt Maestro</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
