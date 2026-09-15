import React, { useState, useEffect } from 'react';
import { 
  X, Copy, Check, Download, FileText, Bot, Wand2, Sparkles, Code2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { WebBriefData } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_BRIEF: WebBriefData = {
  businessName: '',
  industry: '',
  tagline: '',
  targetAudience: '',
  mainProblemSolved: '',
  primaryGoal: 'leads',
  service1: '',
  service2: '',
  service3: '',
  brandColors: 'Esmeralda (#10B981) y Negro Carbón (#0A0D14)',
  whatsappNumber: '',
  differentiator: '',
  additionalNotes: ''
};

const SAMPLE_TEMPLATES: Record<string, Partial<WebBriefData>> = {
  agencia: {
    businessName: 'Apex Brand Studio',
    industry: 'Agencia de Branding y Marketing Digital',
    tagline: 'Transformamos marcas comunes en líderes indiscutibles de su categoría',
    targetAudience: 'Dueños de empresas B2B y fundadores de startups en Latinoamérica',
    mainProblemSolved: 'Marcas con baja diferenciación visual que pierden clientes frente a la competencia',
    primaryGoal: 'leads',
    service1: 'Diseño de Identidad de Marca y Sistemas Visuales',
    service2: 'Desarrollo de Sitios Web de Alta Conversión con Next.js',
    service3: 'Estrategia de Posicionamiento en Redes y Pauta Digital',
    brandColors: 'Violeta Neón (#8B5CF6), Cian Eléctrico (#06B6D4) y Grafito',
    whatsappNumber: '+51 987 654 321',
    differentiator: 'Metodología probada en más de 40 empresas con entrega en 14 días y garantía de satisfacción.'
  },
  restaurante: {
    businessName: 'Don Corleone Pizzas Artesanales',
    industry: 'Gastronomía / Pizzería Italiana',
    tagline: 'Masa madre fermentada por 48 horas y horneada a la leña en Miraflores',
    targetAudience: 'Familias, parejas y amantes de la auténtica comida italiana',
    mainProblemSolved: 'Pizzas industriales sin sabor auténtico y demoras excesivas en delivery',
    primaryGoal: 'booking',
    service1: 'Pizzas Artesanales Gourmet a la Piedra',
    service2: 'Pastas Frescas y Vinos Seleccionados',
    service3: 'Catering para Eventos y Cumpleaños',
    brandColors: 'Rojo Terracota (#E11D48), Dorado Cálido (#F59E0B) y Carbón',
    whatsappNumber: '+51 999 111 222',
    differentiator: 'Ingredientes 100% importados de Italia y entrega garantizada en 35 minutos o tu pizza es gratis.'
  },
  salud: {
    businessName: 'Clínica Dental NovaSmile',
    industry: 'Odontología Estética y Salud Oral',
    tagline: 'La sonrisa que siempre soñaste sin dolor ni tratamientos interminables',
    targetAudience: 'Profesionales y adultos que buscan mejorar su estética dental con tecnología láser',
    mainProblemSolved: 'Miedo al dolor en el dentista y presupuestos opacos con sorpresas',
    primaryGoal: 'leads',
    service1: 'Diseño de Sonrisa Digital y Carillas de Porcelana',
    service2: 'Ortodoncia Invisible (Alineadores Transparentes)',
    service3: 'Implantes Dentales y Blanqueamiento Láser',
    brandColors: 'Azul Turquesa (#0284C7), Blanco Puro y Esmeralda Suave',
    whatsappNumber: '+51 912 345 678',
    differentiator: 'Diagnóstico 3D computarizado sin costo en la primera cita y sedación consciente para cero dolor.'
  }
};

export const BriefGeneratorModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [brief, setBrief] = useState<WebBriefData>(() => {
    try {
      const saved = localStorage.getItem('ruta_web_brief_data');
      return saved ? JSON.parse(saved) : DEFAULT_BRIEF;
    } catch {
      return DEFAULT_BRIEF;
    }
  });

  const [activeTab, setActiveTab] = useState<'form' | 'prompt' | 'markdown'>('form');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('ruta_web_brief_data', JSON.stringify(brief));
      window.dispatchEvent(new CustomEvent('ruta_web_brief_updated', { detail: brief }));
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error(e);
    }
  }, [brief]);

  if (!isOpen) return null;

  const handleChange = (field: keyof WebBriefData, value: string) => {
    setBrief((prev) => ({ ...prev, [field]: value }));
  };

  const loadTemplate = (key: string) => {
    if (SAMPLE_TEMPLATES[key]) {
      setBrief((prev) => ({ ...prev, ...SAMPLE_TEMPLATES[key] }));
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.5 } });
    }
  };

  // Generate the Master Antigravity AI Prompt (Fused with Class 2 Agents & Skills)
  const generatePrompt = () => {
    return `Actúa como un Equipo de Élite de Desarrollo Web con IA orquestado en Antigravity IDE, compuesto por:
1. 🏗️ Web Architect (Skill: Web Design & Performance) -> Arquitectura limpia y modular con React / Next.js.
2. 🎨 UI/UX Designer (Skill: Web Design & Branding) -> Estética moderna, paletas HSL, glassmorphism y micro-interacciones.
3. 💻 Web Developer (Skill: Landing Page) -> Componentes TypeScript, responsive mobile-first y botón directo a WhatsApp.
4. ✍️ Copywriter (Skill: Copywriting) -> Fórmulas persuasivas PAS y AIDA con titulares magnéticos.
5. 🔍 SEO Specialist (Skill: SEO) -> Meta tags dinámicas, OpenGraph y jerarquía semántica H1/H2/H3.
6. 🤖 GEO Specialist (Skill: GEO) -> Datos estructurados Schema.org JSON-LD (LocalBusiness, FAQPage) para ChatGPT, Perplexity y Gemini.
7. 📝 Content Creator (Skill: Blog) -> Preguntas frecuentes de alta conversión y testimonios creíbles.
8. 🛡️ Auditor (Skill: Audit & Accessibility) -> Validación WCAG AA, contraste y rendimiento Lighthouse.
9. 🚀 Launch Manager (Skill: Launch) -> Configuración para despliegue en Vercel con certificado SSL.

👑 [DIRECTIVA DEL CEO — BRIEF DE NEGOCIO ESTRUCTURADO EN CLASE 1]
- Nombre Comercial: "${brief.businessName || 'Mi Negocio'}"
- Industria / Nicho: ${brief.industry || 'Servicios Profesionales'}
- Propuesta de Valor / Eslogan: "${brief.tagline || 'Soluciones de alto impacto'}"
- Público Objetivo: ${brief.targetAudience || 'Clientes que buscan calidad'}
- Problema Principal que Resuelve: ${brief.mainProblemSolved || 'Falta de soluciones profesionales'}
- Diferenciador Clave: ${brief.differentiator || 'Atención personalizada y rapidez'}

📦 [SERVICIOS / PRODUCTOS PRINCIPALES]
1. ${brief.service1 || 'Servicio Principal 1'}
2. ${brief.service2 || 'Servicio Principal 2'}
3. ${brief.service3 || 'Servicio Principal 3'}

🌐 [ESTRATEGIA SEO & GEO (Generative Engine Optimization)]
- Schema.org JSON-LD: Inyectar datos estructurados (LocalBusiness, Organization, FAQPage, Service) para que los motores de IA (ChatGPT Search, Perplexity, Gemini, Google) citen y recomienden el negocio con alta confianza.
- Metadata API: Configurar title dinámico, description con palabras clave de alta intención, OpenGraph para WhatsApp y Twitter Cards.
- Estructura Semántica: Único <h1> de alto impacto, <h2> por sección temática y contenido redactado para respuestas directas a motores de IA.

🎨 [IDENTIDAD VISUAL & ESTÉTICA MODERNA]
- Paleta de Colores: ${brief.brandColors}
- Modo: Dark Mode moderno con acentos vibrantes, glassmorphism sutil y bordes refinados.
- Tipografía recomendada: Outfit o Inter.

📲 [CANAL DE CONVERSIÓN DIRECTO]
- Botón Flotante de WhatsApp configurado a: ${brief.whatsappNumber || '+51 999 000 000'} con mensaje predeterminado: "Hola ${brief.businessName || 'equipo'}, estuve revisando su página web y quiero cotizar sus servicios."

📐 [ARQUITECTURA DE COMPONENTES A GENERAR]
1. Navbar.tsx (Header sticky con logo y botón CTA directo).
2. HeroSection.tsx (Titular magnético, subtítulo con dolor/promesa, prueba social y botón WhatsApp).
3. ServicesGrid.tsx (Grid de tarjetas de servicios con microinteracciones y beneficios).
4. AboutUs.tsx (Storytelling humano, métricas de confianza y credenciales).
5. FaqAccordion.tsx (Acordeones interactivos con Schema FAQPage para SEO/GEO).
6. ContactWhatsapp.tsx (Bloque de contacto directo y botón flotante con pulso animado).
7. Footer.tsx (Enlaces, datos de contacto locales y copyright).

Por favor genera el código limpio, modular, tipado con TypeScript, responsivo para celulares y listo para producción sin placeholders ni datos ficticios incompletos.`;
  };

  // Generate Markdown Document
  const generateMarkdown = () => {
    return `# BRIEF DE MI WEB — ${brief.businessName || 'Mi Proyecto'}

**Fecha de Creación:** ${new Date().toLocaleDateString('es-ES')}
**Ruta:** Web con Inteligencia Artificial
**Stack Tecnológico:** Next.js (App Router) + GSAP + React Hook Form + Tailwind CSS
**Especialidades:** Agente Arquitecto Frontend + Diseñador UI/UX + Especialista SEO & GEO (Generative Engine Optimization)

---

## 1. Identidad del Negocio
- **Nombre:** ${brief.businessName || 'No especificado'}
- **Industria:** ${brief.industry || 'No especificado'}
- **Eslogan / Propuesta Única:** ${brief.tagline || 'No especificado'}
- **Diferenciador Clave:** ${brief.differentiator || 'No especificado'}

## 2. Cliente y Necesidad
- **Público Objetivo & Geo-Targeting:** ${brief.targetAudience || 'No especificado'}
- **Problema que Resuelve:** ${brief.mainProblemSolved || 'No especificado'}
- **Objetivo de la Web:** ${brief.primaryGoal.toUpperCase()}

## 3. Oferta Concreta
1. ${brief.service1 || 'Servicio 1'}
2. ${brief.service2 || 'Servicio 2'}
3. ${brief.service3 || 'Servicio 3'}

## 4. Stack, SEO/GEO y Formularios
- **Framework:** Next.js (App Router, TypeScript)
- **Animaciones:** GSAP (Timelines & Hover Effects)
- **Validación de Formularios:** React Hook Form
- **Estrategia SEO & GEO:** Schema.org JSON-LD (LocalBusiness, FAQPage) + OpenGraph + sitemap.ts
- **Colores:** ${brief.brandColors}
- **WhatsApp de Ventas:** ${brief.whatsappNumber || 'No especificado'}
- **Notas Adicionales:** ${brief.additionalNotes || 'Ninguna'}

---
*Documento generado con el Generador de Brief de la Ruta Web con IA.*
`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadMarkdownFile = () => {
    const element = document.createElement('a');
    const file = new Blob([generateMarkdown()], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    const safeName = (brief.businessName || 'brief_mi_web').toLowerCase().replace(/\s+/g, '_');
    element.download = `${safeName}_brief.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-5xl h-[90vh] rounded-3xl border border-brand-500/40 shadow-2xl flex flex-col overflow-hidden bg-slate-950/90">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-white font-display flex items-center gap-2">
                <span>Generador de Brief de mi Web</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30 font-semibold hidden md:inline">
                  Next.js • GSAP • React Hook Form • SEO & GEO
                </span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Proyecto Clase 1 • Diseñado para llamar al Agente Arquitecto Frontend & Especialista SEO/GEO en Antigravity IDE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Template loader pills */}
            <div className="hidden lg:flex items-center gap-1.5 mr-3">
              <span className="text-[11px] text-slate-400 font-mono">Cargar Ejemplo:</span>
              <button
                onClick={() => loadTemplate('agencia')}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono"
              >
                Agencia
              </button>
              <button
                onClick={() => loadTemplate('restaurante')}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono"
              >
                Restaurante
              </button>
              <button
                onClick={() => loadTemplate('salud')}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono"
              >
                Clínica
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-900/80 border-b border-slate-800">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'form'
                  ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20'
                  : 'text-slate-400 hover:text-white bg-slate-800/60'
              }`}
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>1. Llenar Datos</span>
            </button>

            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'prompt'
                  ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20'
                  : 'text-slate-400 hover:text-white bg-slate-800/60'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>2. Prompt para Arquitecto Frontend</span>
            </button>

            <button
              onClick={() => setActiveTab('markdown')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'markdown'
                  ? 'bg-brand-500 text-slate-950 shadow-md shadow-brand-500/20'
                  : 'text-slate-400 hover:text-white bg-slate-800/60'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>3. Documento BRIEF.md</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => copyToClipboard(activeTab === 'markdown' ? generateMarkdown() : generatePrompt())}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-brand-400 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado al Portapapeles!' : 'Copiar'}</span>
            </button>

            <button
              onClick={downloadMarkdownFile}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold transition-all flex items-center gap-1.5 border border-slate-700"
              title="Descargar archivo Markdown"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Descargar .md</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === 'form' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Business & Audience */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-brand-400 font-bold uppercase tracking-wider">
                  🏢 1. Identidad y Propuesta
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nombre Oficial del Negocio *
                  </label>
                  <input
                    type="text"
                    value={brief.businessName}
                    onChange={(e) => handleChange('businessName', e.target.value)}
                    placeholder="Ej: Apex Brand Studio, Pizzería Don Corleone..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Industria / Nicho de Mercado *
                  </label>
                  <input
                    type="text"
                    value={brief.industry}
                    onChange={(e) => handleChange('industry', e.target.value)}
                    placeholder="Ej: Odontología estética, Gimnasio boutique, Agencia de viajes..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Propuesta de Valor en 1 Frase (Tu Eslogan o Promesa) *
                  </label>
                  <input
                    type="text"
                    value={brief.tagline}
                    onChange={(e) => handleChange('tagline', e.target.value)}
                    placeholder="Ej: Duplica tus ventas online con un sistema automático de WhatsApp"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Público Objetivo (¿Quién te compra?) *
                  </label>
                  <input
                    type="text"
                    value={brief.targetAudience}
                    onChange={(e) => handleChange('targetAudience', e.target.value)}
                    placeholder="Ej: Dueños de negocios gastronómicos de 25 a 45 años en Lima"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Problema Principal que Resuelves *
                  </label>
                  <input
                    type="text"
                    value={brief.mainProblemSolved}
                    onChange={(e) => handleChange('mainProblemSolved', e.target.value)}
                    placeholder="Ej: Tienen una web vieja que no carga en celular y no les genera ventas"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>
              </div>

              {/* Right Column: Services & Conversion */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-4 h-4" />
                  <span>2. Servicios, Stack & Conversión</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Servicio / Producto Principal #1 *
                  </label>
                  <input
                    type="text"
                    value={brief.service1}
                    onChange={(e) => handleChange('service1', e.target.value)}
                    placeholder="Ej: Plan Landing Page de Alta Conversión"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Servicio / Producto Principal #2 *
                  </label>
                  <input
                    type="text"
                    value={brief.service2}
                    onChange={(e) => handleChange('service2', e.target.value)}
                    placeholder="Ej: Plan Aplicación Web Ecommerce con Pasarela"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Servicio / Producto Principal #3
                  </label>
                  <input
                    type="text"
                    value={brief.service3}
                    onChange={(e) => handleChange('service3', e.target.value)}
                    placeholder="Ej: Mantenimiento y Posicionamiento SEO Mensual"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Diferenciador Clave (¿Por qué tú y no la competencia?)
                  </label>
                  <input
                    type="text"
                    value={brief.differentiator}
                    onChange={(e) => handleChange('differentiator', e.target.value)}
                    placeholder="Ej: Entrega récord en 7 días, garantía de reembolso y soporte 24/7"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      WhatsApp Oficial *
                    </label>
                    <input
                      type="text"
                      value={brief.whatsappNumber}
                      onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                      placeholder="+51 987 654 321"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Colores Deseados
                    </label>
                    <input
                      type="text"
                      value={brief.brandColors}
                      onChange={(e) => handleChange('brandColors', e.target.value)}
                      placeholder="Ej: Esmeralda y Negro Carbón"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-brand-500 font-sans"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'prompt' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-emerald-300 font-mono font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Prompt Maestro: Agente Arquitecto Frontend (Next.js + GSAP + React Hook Form)
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Listo para copiar y ejecutar directamente en Antigravity IDE en la Clase 2.
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(generatePrompt())}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold font-mono hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Prompt Maestro</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-slate-900/95 border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                {generatePrompt()}
              </pre>
            </div>
          )}

          {activeTab === 'markdown' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-cyan-300 font-mono font-bold flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Documento Formal de Especificaciones (BRIEF.md)
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Descárgalo o compártelo con tu equipo y alumnos.
                  </p>
                </div>
                <button
                  onClick={downloadMarkdownFile}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold font-mono hover:bg-cyan-400 transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar .md</span>
                </button>
              </div>

              <pre className="p-4 rounded-2xl bg-slate-900/95 border border-slate-800 text-slate-200 text-xs font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                {generateMarkdown()}
              </pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            💾 Todos tus cambios se guardan automáticamente en tu navegador.
          </span>

          <button
            onClick={() => {
              if (activeTab === 'form') {
                setActiveTab('prompt');
                confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
              } else {
                copyToClipboard(generatePrompt());
              }
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 via-cyan-400 to-violet-500 hover:from-brand-400 hover:to-violet-400 text-slate-950 font-bold text-xs sm:text-sm font-sans transition-all flex items-center gap-2 shadow-lg shadow-brand-500/20 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>{activeTab === 'form' ? 'Generar Prompt para Agente Arquitecto' : 'Copiar y Finalizar'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
