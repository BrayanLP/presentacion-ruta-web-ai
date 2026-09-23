import React, { useState, useEffect } from 'react';
import { 
  Hammer, Monitor, Smartphone, Check, Copy, Download, CheckCircle2,
  Sparkles, Terminal, Edit3, ArrowRight, Palette, MessageCircle, Briefcase,
  Heart, ShoppingBag, Home
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { WebBriefData } from '../../../types';

interface BlockToggle {
  id: string;
  name: string;
  agent: string;
  tech: string;
  enabled: boolean;
}

interface FullCompanyConfig extends WebBriefData {
  whatsappGreeting: string;
  contactEmail: string;
  paletteId: string;
  fontFamily: string;
  toneOfVoice: string;
  visualStyle: string;
}

const BRAND_PALETTES = [
  {
    id: 'cyber-cyan',
    name: 'Cian Eléctrico & Violeta',
    primary: '#00F0FF',
    accent: '#8B5CF6',
    previewGradient: 'from-cyan-400 to-violet-500',
    tag: 'Tech & Alta Conversión',
    hexPrimary: '#00F0FF',
    hexAccent: '#8B5CF6'
  },
  {
    id: 'emerald-growth',
    name: 'Esmeralda Vital & Ámbar',
    primary: '#10B981',
    accent: '#F59E0B',
    previewGradient: 'from-emerald-400 to-amber-500',
    tag: 'Salud, Dental & Finanzas',
    hexPrimary: '#10B981',
    hexAccent: '#F59E0B'
  },
  {
    id: 'solar-fire',
    name: 'Naranja Fuego & Carmesí',
    primary: '#F97316',
    accent: '#EF4444',
    previewGradient: 'from-orange-400 to-rose-500',
    tag: 'Moda, Deporte & Acción',
    hexPrimary: '#F97316',
    hexAccent: '#EF4444'
  },
  {
    id: 'deep-navy',
    name: 'Azul Zafiro & Oro',
    primary: '#3B82F6',
    accent: '#EAB308',
    previewGradient: 'from-blue-500 to-yellow-400',
    tag: 'Inmobiliaria & Legal',
    hexPrimary: '#3B82F6',
    hexAccent: '#EAB308'
  },
  {
    id: 'minimal-light',
    name: 'Grafito & Púrpura Editorial',
    primary: '#0F172A',
    accent: '#6366F1',
    previewGradient: 'from-slate-700 to-indigo-500',
    tag: 'Consultoría & Minimalismo',
    hexPrimary: '#0F172A',
    hexAccent: '#6366F1'
  }
];

const PRESETS = [
  {
    id: 'agency',
    label: '💼 Agencia / B2B',
    icon: Briefcase,
    data: {
      businessName: 'Apex Brand Studio',
      industry: 'Agencia de Branding & Web con IA',
      tagline: 'Transformamos negocios comunes en marcas irresistibles que venden 24/7',
      targetAudience: 'Emprendedores, empresas y profesionales que buscan captar clientes por WhatsApp',
      mainProblemSolved: 'Sitios web obsoletos que no convierten visitas en clientes',
      primaryGoal: 'leads' as const,
      service1: 'Landing Pages de Alta Conversión',
      service2: 'Identidad Visual & Branding Estratégico',
      service3: 'Optimización SEO y Motores de IA (GEO)',
      whatsappNumber: '+51 987 654 321',
      whatsappGreeting: 'Hola Apex Brand, vi su web y quiero cotizar el desarrollo de mi web con IA',
      contactEmail: 'contacto@apexbrand.com',
      differentiator: 'Entrega en 48h con metodología de 9 Agentes de IA, Clean Code y garantía total de satisfacción.',
      brandColors: 'Cian Eléctrico (#00F0FF), Violeta (#8B5CF6) y Dark Mode',
      additionalNotes: 'Enfoque 100% en captación de leads por WhatsApp y confianza inmediata.',
      paletteId: 'cyber-cyan',
      fontFamily: 'Outfit + Inter (Moderna & Tech)',
      toneOfVoice: 'Persuasivo, tecnológico y directo a la acción',
      visualStyle: 'Glassmorphism moderno con microanimaciones suaves'
    }
  },
  {
    id: 'clinic',
    label: '🦷 Clínica / Salud',
    icon: Heart,
    data: {
      businessName: 'DentalPrime Especialistas',
      industry: 'Clínica Odontológica & Estética Dental',
      tagline: 'Sonrisas perfectas y saludables en tiempo récord sin dolor',
      targetAudience: 'Familias y pacientes que buscan tratamientos dentales seguros y de alta calidad',
      mainProblemSolved: 'Miedo al dolor dental y clínicas con presupuestos confusos o elevados',
      primaryGoal: 'booking' as const,
      service1: 'Diseño de Sonrisa Digital 3D',
      service2: 'Implantes Dentales sin Dolor',
      service3: 'Ortodoncia Invisible con Alineadores',
      whatsappNumber: '+51 912 345 678',
      whatsappGreeting: 'Hola DentalPrime, quiero agendar mi primera consulta de evaluación gratuita',
      contactEmail: 'citas@dentalprime.com',
      differentiator: 'Tecnología guiada 3D sin dolor, 1ra consulta de diagnóstico gratis y garantía de 5 años.',
      brandColors: 'Esmeralda Vital (#10B981), Ámbar (#F59E0B) y Blanco Médico',
      additionalNotes: 'Enfoque en transmitir máxima higiene, calidez y eliminar el miedo al dentista.',
      paletteId: 'emerald-growth',
      fontFamily: 'Inter + Roboto (Clínico & Legible)',
      toneOfVoice: 'Empático, cálido, profesional y de máxima confianza médica',
      visualStyle: 'Clean Studio luminoso con acentos esmeralda y testimonios de pacientes reales'
    }
  },
  {
    id: 'ecommerce',
    label: '🛍️ Moda / E-commerce',
    icon: ShoppingBag,
    data: {
      businessName: 'Lumina EcoStyle',
      industry: 'Moda Sostenible & Calzado Artesanal',
      tagline: 'Estilo atemporal hecho para durar cuidando el planeta',
      targetAudience: 'Hombres y mujeres de 22 a 45 años que valoran la moda ética y de alta calidad',
      mainProblemSolved: 'Prendas desechables de mala calidad y marcas que contaminan el medio ambiente',
      primaryGoal: 'sales' as const,
      service1: 'Colección Esenciales 100% Algodón Orgánico',
      service2: 'Calzado Artesanal Reciclado',
      service3: 'Garantía & Reparación de Por Vida',
      whatsappNumber: '+51 999 888 777',
      whatsappGreeting: 'Hola Lumina, quiero consultar disponibilidad y catálogo de la nueva temporada',
      contactEmail: 'hola@luminaecostyle.com',
      differentiator: 'Envíos express en 24h, cambios ilimitados gratuitos y 1 árbol plantado por compra.',
      brandColors: 'Naranja Fuego (#F97316), Carmesí (#EF4444) y Dark Mode',
      additionalNotes: 'Enfoque en estilo fotográfico de alta gama y compras impulsivas por WhatsApp.',
      paletteId: 'solar-fire',
      fontFamily: 'Space Grotesk + Inter (Disruptivo & Tendencia)',
      toneOfVoice: 'Inspirador, apasionado, fresco y sostenible',
      visualStyle: 'Dark mode elegante con cuadrícula fluida de productos y badges de sostenibilidad'
    }
  },
  {
    id: 'realestate',
    label: '🏡 Inmobiliaria',
    icon: Home,
    data: {
      businessName: 'Habitat Luxury Living',
      industry: 'Desarrollo & Venta Inmobiliaria de Alto Valor',
      tagline: 'Tu próximo hogar de ensueño con la mayor plusvalía del mercado',
      targetAudience: 'Inversionistas y familias que buscan departamentos exclusivos en zonas consolidadas',
      mainProblemSolved: 'Trámites burocráticos engorrosos y asesorías inmobiliarias sin transparencia',
      primaryGoal: 'leads' as const,
      service1: 'Departamentos de Estreno con Entrega Inmediata',
      service2: 'Preventa con Precios de Oportunidad & Alta Rentabilidad',
      service3: 'Asesoría Legal y Crédito Hipotecario Express',
      whatsappNumber: '+51 944 555 666',
      whatsappGreeting: 'Hola Habitat, me interesa conocer los departamentos disponibles y planes de financiamiento',
      contactEmail: 'inversiones@habitatliving.com',
      differentiator: 'Comisión cero para compradores, recorrido virtual 360° y asesoría legal personalizada.',
      brandColors: 'Azul Zafiro (#3B82F6), Oro (#EAB308) y Marino Profundo',
      additionalNotes: 'Enfoque en exclusividad, seguridad jurídica y visualización de planos y acabados.',
      paletteId: 'deep-navy',
      fontFamily: 'Playfair Display + Inter (Elegante & Exclusivo)',
      toneOfVoice: 'Exclusivo, formal, elegante y enfocado en seguridad patrimonial',
      visualStyle: 'Lujo sobrio con tipografía serif refinada y microinteracciones de alta gama'
    }
  }
];

const DEFAULT_BLOCKS: BlockToggle[] = [
  { id: 'navbar', name: '1. Navbar', agent: 'UI/UX Designer', tech: 'Next.js + Tailwind', enabled: true },
  { id: 'hero', name: '2. Hero', agent: 'Copywriter + Dev', tech: 'GSAP + Lottie', enabled: true },
  { id: 'servicios', name: '3. Servicios', agent: 'Web Developer', tech: 'Tailwind Cards', enabled: true },
  { id: 'beneficios', name: '4. Beneficios', agent: 'Copywriter', tech: 'Font Awesome', enabled: true },
  { id: 'sobre-nosotros', name: '5. Sobre Nosotros', agent: 'Content Creator', tech: 'Next/Image', enabled: true },
  { id: 'testimonios', name: '6. Testimonios', agent: 'Content Creator', tech: 'Glassmorphism', enabled: true },
  { id: 'faqs', name: '7. FAQs', agent: 'GEO Specialist', tech: 'Radix Accordion', enabled: true },
  { id: 'contacto', name: '8. Contacto', agent: 'Web Developer', tech: 'React Hook Form', enabled: true },
  { id: 'whatsapp', name: '9. WhatsApp', agent: 'Launch Manager', tech: 'Floating CTA', enabled: true },
  { id: 'footer', name: '10. Footer', agent: 'Web Architect', tech: 'Clean HTML5', enabled: true },
];

export const Slide4BuilderStation: React.FC = () => {
  // Navigation between Studio Workspaces
  const [stationTab, setStationTab] = useState<'form' | 'preview' | 'prompt'>('form');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [blocks, setBlocks] = useState<BlockToggle[]>(DEFAULT_BLOCKS);

  // Full Company & Brand Data State
  const [company, setCompany] = useState<FullCompanyConfig>(() => {
    try {
      const saved = localStorage.getItem('ruta_web_full_company_data');
      if (saved) return JSON.parse(saved);
      const briefSaved = localStorage.getItem('ruta_web_brief_data');
      if (briefSaved) {
        const parsedBrief = JSON.parse(briefSaved);
        return {
          ...PRESETS[0].data,
          ...parsedBrief
        };
      }
      return PRESETS[0].data;
    } catch {
      return PRESETS[0].data;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ruta_web_full_company_data', JSON.stringify(company));
      // Also sync minimal brief
      localStorage.setItem('ruta_web_brief_data', JSON.stringify({
        businessName: company.businessName,
        industry: company.industry,
        tagline: company.tagline,
        targetAudience: company.targetAudience,
        mainProblemSolved: company.mainProblemSolved,
        primaryGoal: company.primaryGoal,
        service1: company.service1,
        service2: company.service2,
        service3: company.service3,
        brandColors: company.brandColors,
        whatsappNumber: company.whatsappNumber,
        differentiator: company.differentiator,
        additionalNotes: company.additionalNotes
      }));
    } catch (e) {
      console.error(e);
    }
  }, [company]);

  const handleFieldChange = (field: keyof FullCompanyConfig, value: any) => {
    setCompany(prev => ({ ...prev, [field]: value }));
  };

  const handleApplyPreset = (presetId: string) => {
    const selected = PRESETS.find(p => p.id === presetId);
    if (selected) {
      setCompany(selected.data);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    }
  };

  const toggleBlock = (id: string) => {
    setBlocks(prev => prev.map(b => b.id === id ? { ...b, enabled: !b.enabled } : b));
  };

  const enableAllBlocks = () => {
    setBlocks(prev => prev.map(b => ({ ...b, enabled: true })));
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
  };

  const currentPalette = BRAND_PALETTES.find(p => p.id === company.paletteId) || BRAND_PALETTES[0];
  const cleanPhone = company.whatsappNumber.replace(/[^0-9]/g, '') || '51987654321';
  const encodedGreeting = encodeURIComponent(company.whatsappGreeting || `Hola ${company.businessName}, vi su web y deseo más información`);

  // Build the MASTER PROMPT integrating everything
  const generateFullMasterPrompt = () => {
    const activeBlocks = blocks.filter(b => b.enabled);

    return `# 🚀 PROMPT MAESTRO INTEGRAL — RUTA WEB CON IA
## SISTEMA DE CONSTRUCCIÓN COMPLETA DE PÁGINA WEB PROFESIONAL DIRIGIDA POR AGENTES EN ANTIGRAVITY IDE

Actúa como el **EQUIPO COMPLETO DE DESARROLLO Y DISEÑO WEB SENIOR** dentro de Antigravity IDE compuesto por:
1. **Web Architect**: Define la arquitectura Next.js App Router, modularidad y types en TypeScript.
2. **UI/UX Designer**: Diseña el Design System en Tailwind CSS con la paleta de marca (${currentPalette.name}), microinteracciones y UX 100% Mobile-First.
3. **Copywriter Persuasivo**: Redacta los textos de alta conversión usando fórmulas PAS y AIDA basadas en la identidad y dolor del cliente.
4. **Web Developer Frontend**: Construye los componentes interactivos en Next.js y Radix UI con Clean Code.
5. **GEO & SEO Specialist**: Inyecta datos estructurados Schema.org JSON-LD (LocalBusiness y FAQPage) y OpenGraph para buscadores y motores de IA (ChatGPT, Perplexity, Gemini).
6. **Chatbot & WhatsApp Specialist**: Conecta el botón flotante persistente con deep-link comercial y mensaje predeterminado de venta.
7. **Content Creator**: Redacta testimonios medibles, historia de autoridad (Sobre Nosotros) y las 5 FAQs demoledoras de objeciones.
8. **QA & Code Auditor**: Implementa Unit Tests con Vitest y asegura accesibilidad WCAG AA y Core Web Vitals.
9. **Launch Manager**: Documenta el proyecto en README.md con manual para no programadores y scripts de despliegue en Vercel.

---

### 📋 1. DATOS DE LA EMPRESA & BRIEF ESTRATÉGICO (CLASE 1)
- **Nombre de Marca / Empresa**: ${company.businessName}
- **Industria / Especialidad**: ${company.industry}
- **Propuesta de Valor Única (Tagline)**: "${company.tagline}"
- **Cliente Ideal (Avatar)**: ${company.targetAudience}
- **Dolor Clave que Resolvemos**: ${company.mainProblemSolved}
- **Objetivo Primario**: Captación directa de prospectos cualificados hacia WhatsApp (${company.primaryGoal.toUpperCase()})
- **Servicios Estrella**:
  1. ${company.service1}
  2. ${company.service2}
  3. ${company.service3}
- **Diferenciador Competitivo**: ${company.differentiator}
- **Canal de Contacto Principal (WhatsApp)**: ${company.whatsappNumber}
- **Mensaje de Apertura Comercial**: "${company.whatsappGreeting}"
- **Correo Oficial**: ${company.contactEmail}

---

### 🎨 2. IDENTIDAD VISUAL & BRANDING SYSTEM (CLASE 2 & CLASE 4)
- **Paleta de Colores**: ${currentPalette.name}
  * Color Primario / CTA: ${currentPalette.hexPrimary}
  * Color Secundario / Acento: ${currentPalette.hexAccent}
  * Fondo: Dark Mode premium (#090D18 / #0F172A) con soporte adaptativo
- **Tipografía de Marca**: ${company.fontFamily}
- **Tono de Voz**: ${company.toneOfVoice}
- **Estilo Visual**: ${company.visualStyle}

---

### ⚙️ 3. MOTOR TÉCNICO BAJO EL CAPÓ (CLASE 4/2)
- **Framework**: Next.js 14+ (App Router, React 18/19, TypeScript estricto)
- **Estilos**: Tailwind CSS con paleta HSL y variables CSS personalizadas
- **Componentes Accesibles**: Radix UI (@radix-ui/react-accordion, @radix-ui/react-dialog)
- **Formularios**: React Hook Form con validación en tiempo real (nombre, email y teléfono) sin recargar página
- **Animaciones & Microinteracciones**: GSAP (ScrollTrigger suave) + animaciones Lottie / Lucide React
- **Pruebas Automatizadas**: Vitest + React Testing Library para validar Navbar, Formulario y WhatsApp
- **Documentación**: README.md exhaustivo con guía para que el dueño actualice textos y teléfono sin programar

---

### 🧱 4. CONSTRUCCIÓN DE LOS 10 BLOQUES ESENCIALES (CLASE 4)
Construye cada uno de los bloques como componente React modular e independiente en \`/src/components/blocks/\`:

${activeBlocks.map(b => {
  switch(b.id) {
    case 'navbar':
      return `1. **Navbar (\`Navbar.tsx\`)**:
   - Logotipo tipográfico y badge interactivo de "${company.businessName}".
   - Enlaces de navegación con salto suave (#servicios, #beneficios, #nosotros, #faqs, #contacto).
   - Menú móvil lateral accesible con Radix UI Dialog para celulares.
   - Botón CTA de escape directo a WhatsApp con color primario ${currentPalette.hexPrimary}.`;
    case 'hero':
      return `2. **Hero Section (\`HeroSection.tsx\`)**:
   - Badge superior de autoridad (ej: "★ Calificado 4.9/5 por clientes en ${company.industry}").
   - Titular H1 magnético atacando el dolor principal: "${company.mainProblemSolved}".
   - Subtítulo persuasivo de 2 líneas con la propuesta de valor: "${company.tagline}".
   - Botón CTA principal de alto contraste ("Solicitar Cotización por WhatsApp") con pulso continuo y color ${currentPalette.hexPrimary}.
   - Botón secundario ("Explorar Servicios") con scroll suave.`;
    case 'servicios':
      return `3. **Servicios (\`ServicesGrid.tsx\`)**:
   - Rejilla responsiva con tarjetas modulares para los 3 servicios:
     * 1. ${company.service1}
     * 2. ${company.service2}
     * 3. ${company.service3}
   - Cada tarjeta incluye icono representativo, dolor específico que erradica, 3 entregables clave y micro-CTA "Cotizar por WhatsApp".`;
    case 'beneficios':
      return `4. **Beneficios (\`BenefitsSection.tsx\`)**:
   - 4 diferenciadores competitivos basados en: "${company.differentiator}".
   - Enfoque en beneficios tangibles: entrega ágil, 100% Mobile-First, velocidad < 1s y soporte garantizado.`;
    case 'sobre-nosotros':
      return `5. **Sobre Nosotros (\`AboutSection.tsx\`)**:
   - Foto o avatar profesional del fundador y breve historia de autoridad en ${company.industry}.
   - 3 métricas de validación numérica (+8 Años de Experiencia, 150+ Proyectos Exitosos, 99% Satisfacción).`;
    case 'testimonios':
      return `6. **Testimonios (\`TestimonialsSection.tsx\`)**:
   - 3 tarjetas de clientes reales con 5 estrellas, nombres creíbles y métricas de resultados medibles.`;
    case 'faqs':
      return `7. **FAQs (\`FAQAccordion.tsx\`)**:
   - Acordeón accesible construido con Radix UI Accordion (@radix-ui/react-accordion).
   - 5 preguntas que derriban objeciones clave de clientes en ${company.industry}: tiempos de entrega, edición de contenidos, conexión de WhatsApp, soporte y formas de pago.`;
    case 'contacto':
      return `8. **Contacto (\`ContactForm.tsx\`)**:
   - Formulario interactivo construido con React Hook Form.
   - Campos: Nombre completo, Correo electrónico (${company.contactEmail}), WhatsApp y Mensaje/Servicio de interés.
   - Validación instantánea sin recarga y mensaje animado de éxito al enviar.`;
    case 'whatsapp':
      return `9. **WhatsApp Flotante (\`WhatsAppFloating.tsx\`)**:
   - Botón flotante persistente en la esquina inferior derecha (zona de pulgar móvil).
   - Enlace directo a WhatsApp: https://wa.me/${cleanPhone}?text=${encodedGreeting}
   - Badge animado de "En línea" y animación de pulso sutil.`;
    case 'footer':
      return `10. **Footer (\`Footer.tsx\`)**:
   - Resumen de misión de marca, columnas de navegación rápida, enlaces legales y copyright dinámico del año actual para ${company.businessName}.`;
    default:
      return '';
  }
}).join('\n\n')}

---

### 📂 5. ESTRUCTURA DE ARCHIVOS (CLEAN CODE ARCHITECTURE)
\`\`\`
/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Metadatos, fuentes (${company.fontFamily}) y Schema.org JSON-LD
│   │   ├── page.tsx               # Ensamblador de los 10 bloques
│   │   └── globals.css            # Tailwind directives, variables HSL (${currentPalette.name})
│   ├── components/
│   │   ├── blocks/                # Los 10 bloques modulares
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── BenefitsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── WhatsAppFloating.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                    # Componentes base reutilizables
│   ├── data/
│   │   └── businessContent.ts     # Datos centralizados del Brief de ${company.businessName}
│   └── tests/
│       ├── Navbar.test.tsx
│       ├── ContactForm.test.tsx
│       └── WhatsApp.test.tsx
├── README.md                      # Manual del director: cómo actualizar textos y desplegar en Vercel
├── package.json
└── tailwind.config.ts
\`\`\`

---

### 🎯 6. REGLAS DE ORO DE EJECUCIÓN (CLASES 0, 1, 2 Y 4)
1. **100% Mobile-First**: Diseña pensando primero en pantallas de 375px. El pulgar del usuario debe alcanzar el botón de WhatsApp y los CTAs principales con facilidad.
2. **Cero Texto de Relleno**: No uses "Lorem Ipsum". Todo el copywriting debe ser persuasivo, en tono ${company.toneOfVoice} y enfocado en generar confianza inmediata.
3. **SEO & GEO (Optimización para IA)**: Inyecta en el <head> del layout las etiquetas Meta, OpenGraph y un bloque <script type="application/ld+json"> con Schema.org de LocalBusiness y FAQPage para que ChatGPT, Perplexity y Google indexen el negocio.
4. **Validación Automática**: Ejecuta 'npm run test' para asegurar que las pruebas unitarias pasen al 100% antes de dar la tarea por finalizada.
5. **Resultado Final**: Entrega el proyecto listo para ejecutarse localmente con 'npm run dev' y preparado para ser desplegado en Vercel en 1 clic.`;
  };

  const masterPromptText = generateFullMasterPrompt();

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(masterPromptText);
    setCopiedPrompt(true);
    confetti({
      particleCount: 60,
      spread: 75,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handleDownloadPlan = () => {
    const element = document.createElement('a');
    const file = new Blob([masterPromptText], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `PROMPT_MAESTRO_${company.businessName.toUpperCase().replace(/\s+/g, '_')}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const isBlockEnabled = (id: string) => blocks.find(b => b.id === id)?.enabled ?? true;

  return (
    <div className="h-full flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden select-none">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800/80 pb-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <Hammer className="w-3.5 h-3.5" /> Generador de Web & Super Prompt de Negocio
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Web Builder Studio: Tu Empresa & Marca en Vivo
          </h2>
        </div>

        {/* Studio Workspace Mode Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-300 dark:border-slate-800">
            <button
              onClick={() => setStationTab('form')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all font-bold ${
                stationTab === 'form' 
                  ? 'bg-violet-600 text-white shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>1. Datos & Marca</span>
            </button>

            <button
              onClick={() => setStationTab('preview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all font-bold ${
                stationTab === 'preview' 
                  ? 'bg-amber-500 text-slate-950 shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>2. Simulador Web</span>
            </button>

            <button
              onClick={() => setStationTab('prompt')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all font-bold ${
                stationTab === 'prompt' 
                  ? 'bg-emerald-600 text-white shadow-sm' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>3. Prompt Maestro</span>
            </button>
          </div>

          {/* Quick Copy Master Button */}
          <button
            onClick={handleCopyPrompt}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-extrabold text-xs font-mono shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-950" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedPrompt ? '¡Prompt Copiado!' : 'Copiar Prompt'}</span>
          </button>
        </div>
      </div>

      {/* Main Studio Arena */}
      <div className="flex-1 my-auto py-2 overflow-y-auto">
        {/* ========================================================================= */}
        {/* TAB 1: FORMULARIO DE DATOS DE EMPRESA & IDENTIDAD DE MARCA */}
        {/* ========================================================================= */}
        {stationTab === 'form' && (
          <div className="space-y-4 max-w-5xl mx-auto py-1">
            {/* Presets Bar */}
            <div className="flex items-center justify-between flex-wrap gap-2 p-3 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-sm">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Cargar Presets Rápidos:</span>
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {PRESETS.map((pr) => {
                  const Icon = pr.icon;
                  const isActive = company.businessName === pr.data.businessName;
                  return (
                    <button
                      key={pr.id}
                      onClick={() => handleApplyPreset(pr.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                        isActive
                          ? 'bg-amber-500 text-slate-950 shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{pr.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Two-Column Form: Left Business, Right Brand Identity */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* Left Column: Business & Offer */}
              <div className="lg:col-span-7 glass-panel p-5 rounded-2xl space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-violet-700 dark:text-violet-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" /> 1. Datos de tu Empresa (Clase 1)
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Genera el Copywriting PAS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-mono font-medium mb-1">Nombre de la Empresa</label>
                    <input
                      type="text"
                      value={company.businessName}
                      onChange={(e) => handleFieldChange('businessName', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none shadow-sm"
                      placeholder="Ej: Apex Brand Studio"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-mono font-medium mb-1">Industria / Especialidad</label>
                    <input
                      type="text"
                      value={company.industry}
                      onChange={(e) => handleFieldChange('industry', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none shadow-sm"
                      placeholder="Ej: Agencia de Branding con IA"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-600 dark:text-slate-400 font-mono font-medium mb-1">Propuesta de Valor (Tagline del Hero)</label>
                    <input
                      type="text"
                      value={company.tagline}
                      onChange={(e) => handleFieldChange('tagline', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none shadow-sm"
                      placeholder="Ej: Transformamos negocios en marcas de alta conversión que venden 24/7"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-slate-600 dark:text-slate-400 font-mono font-medium mb-1">Dolor Principal a Resolver en el Cliente</label>
                    <input
                      type="text"
                      value={company.mainProblemSolved}
                      onChange={(e) => handleFieldChange('mainProblemSolved', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none shadow-sm"
                      placeholder="Ej: Sitios web obsoletos que no convierten visitas en clientes"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-mono font-medium mb-1">Servicio Estrella 1</label>
                    <input
                      type="text"
                      value={company.service1}
                      onChange={(e) => handleFieldChange('service1', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-mono font-medium mb-1">Servicio Estrella 2</label>
                    <input
                      type="text"
                      value={company.service2}
                      onChange={(e) => handleFieldChange('service2', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-mono font-medium mb-1">Servicio Estrella 3</label>
                    <input
                      type="text"
                      value={company.service3}
                      onChange={(e) => handleFieldChange('service3', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 font-mono font-medium mb-1">Diferenciador / Garantía</label>
                    <input
                      type="text"
                      value={company.differentiator}
                      onChange={(e) => handleFieldChange('differentiator', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:border-violet-500 focus:outline-none shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Brand Identity & Channels */}
              <div className="lg:col-span-5 space-y-3.5">
                {/* Visual Identity Block */}
                <div className="glass-panel p-5 rounded-2xl space-y-3 shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5" /> 2. Identidad Visual de Marca (Clase 2 & 4)
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Tailwind HSL</span>
                  </div>

                  {/* Palette Selector */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
                      Paleta de Colores de Marca:
                    </label>
                    <div className="grid grid-cols-1 gap-1.5">
                      {BRAND_PALETTES.map((pal) => (
                        <div
                          key={pal.id}
                          onClick={() => handleFieldChange('paletteId', pal.id)}
                          className={`p-2 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                            company.paletteId === pal.id
                              ? 'border-amber-500 bg-amber-500/10 font-bold'
                              : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className={`w-4 h-4 rounded-full bg-gradient-to-tr ${pal.previewGradient} shadow-sm shrink-0`} />
                            <span className="text-slate-900 dark:text-white">{pal.name}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">{pal.tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography & Tone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 font-mono mb-1">Tipografía</label>
                      <input
                        type="text"
                        value={company.fontFamily}
                        onChange={(e) => handleFieldChange('fontFamily', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 font-mono mb-1">Tono de Voz</label>
                      <input
                        type="text"
                        value={company.toneOfVoice}
                        onChange={(e) => handleFieldChange('toneOfVoice', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* WhatsApp & Contact Channels Block */}
                <div className="glass-panel p-4 rounded-2xl space-y-2.5 shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5" /> 3. Canales de Cierre Directo (WhatsApp)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 font-mono mb-0.5">WhatsApp (con código)</label>
                      <input
                        type="text"
                        value={company.whatsappNumber}
                        onChange={(e) => handleFieldChange('whatsappNumber', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-mono text-xs focus:outline-none"
                        placeholder="+51 987 654 321"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 dark:text-slate-400 font-mono mb-0.5">Correo Electrónico</label>
                      <input
                        type="email"
                        value={company.contactEmail}
                        onChange={(e) => handleFieldChange('contactEmail', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none"
                        placeholder="contacto@empresa.com"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-slate-600 dark:text-slate-400 font-mono mb-0.5">Mensaje de Apertura Comercial para WhatsApp</label>
                      <input
                        type="text"
                        value={company.whatsappGreeting}
                        onChange={(e) => handleFieldChange('whatsappGreeting', e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Bar */}
            <div className="p-3 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-sm">
              <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
                ✓ Todos los cambios se guardan y actualizan tu Prompt Maestro en tiempo real.
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStationTab('preview')}
                  className="px-3.5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs font-mono transition-all"
                >
                  Ver Simulador Web
                </button>
                <button
                  onClick={() => setStationTab('prompt')}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs font-mono flex items-center gap-1.5 shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
                >
                  <span>Generar & Copiar Prompt</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: SIMULADOR WEB RESPONSIVO (DESKTOP & MÓVIL) */}
        {/* ========================================================================= */}
        {stationTab === 'preview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left: 10 Blocks Toggles */}
            <div className="lg:col-span-4 space-y-2 max-h-[380px] overflow-y-auto pr-1">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pb-1">
                <span>10 Bloques ({blocks.filter(b => b.enabled).length}/10 activos):</span>
                <button onClick={enableAllBlocks} className="text-[10px] text-amber-600 dark:text-amber-400 hover:underline font-bold">
                  Activar Todos
                </button>
              </div>

              {blocks.map((b) => (
                <div
                  key={b.id}
                  onClick={() => toggleBlock(b.id)}
                  className={`p-2 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                    b.enabled
                      ? 'glass-card border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white'
                      : 'bg-slate-100 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800/50 text-slate-400 dark:text-slate-500 line-through'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${b.enabled ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-600'}`} />
                    <span className="font-semibold">{b.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-slate-800/80 px-1.5 py-0.5 rounded">
                    {b.tech.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Assembled Screen Preview */}
            <div className="lg:col-span-8 flex flex-col items-center">
              {/* Device Mode Toggle */}
              <div className="flex items-center gap-2 mb-2">
                <button
                  onClick={() => setViewMode('desktop')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1 transition-all ${
                    viewMode === 'desktop' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setViewMode('mobile')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono flex items-center gap-1 transition-all ${
                    viewMode === 'mobile' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Móvil (375px)</span>
                </button>
              </div>

              {/* Screen Frame */}
              <div className={`transition-all duration-300 ${
                viewMode === 'mobile' 
                  ? 'w-[310px] h-[390px] rounded-[32px] border-4 border-slate-700 bg-slate-950 shadow-2xl p-2' 
                  : 'w-full max-w-[560px] h-[370px] rounded-2xl border-4 border-slate-800 bg-slate-950 shadow-2xl p-2'
              } flex flex-col justify-between overflow-hidden relative text-white`}>
                
                {/* Window Top */}
                <div className="flex items-center justify-between px-2 py-1 border-b border-slate-800/80 shrink-0 text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-slate-300 truncate max-w-[200px]">{(company.businessName || 'mi-web').toLowerCase().replace(/\s+/g, '-')}.vercel.app</span>
                  <span className="text-emerald-400 font-semibold shrink-0">● 200 OK</span>
                </div>

                {/* Content Stream */}
                <div className="flex-1 overflow-y-auto p-2 space-y-2 text-xs">
                  {/* 1. Navbar */}
                  {isBlockEnabled('navbar') && (
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                      <span className="font-bold text-white text-[11px] truncate">⚡ {company.businessName}</span>
                      <div className="flex gap-2 text-[10px] text-slate-400">
                        <span>Servicios</span>
                        <span>FAQs</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-bold shrink-0">Contacto</span>
                    </div>
                  )}

                  {/* 2. Hero */}
                  {isBlockEnabled('hero') && (
                    <div className="p-3 rounded-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 text-center space-y-1">
                      <div className="text-[9px] font-mono text-cyan-400 uppercase">{company.industry}</div>
                      <div className="font-black text-white text-xs leading-snug">
                        {company.tagline}
                      </div>
                      <div className="text-[10px] text-slate-400">{company.differentiator}</div>
                    </div>
                  )}

                  {/* 3. Servicios */}
                  {isBlockEnabled('servicios') && (
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 truncate">
                        💼 {company.service1}
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 truncate">
                        ⚙️ {company.service2}
                      </div>
                    </div>
                  )}

                  {/* 4. Beneficios */}
                  {isBlockEnabled('beneficios') && (
                    <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/30 text-[10px] text-emerald-300 flex items-center justify-between">
                      <span>✓ 100% Mobile First</span>
                      <span>✓ Carga en 0.8s</span>
                      <span>✓ Clean Code</span>
                    </div>
                  )}

                  {/* 5. Sobre Nosotros */}
                  {isBlockEnabled('sobre-nosotros') && (
                    <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-[10px] text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-violet-500 flex items-center justify-center text-white text-[9px]">👨‍💼</span>
                      <span>Especialistas de autoridad en {company.industry}.</span>
                    </div>
                  )}

                  {/* 6. Testimonios */}
                  {isBlockEnabled('testimonios') && (
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[10px] text-slate-300 space-y-0.5">
                      <div className="text-amber-400 text-[9px]">★★★★★ "Multiplicamos las ventas por WhatsApp"</div>
                      <div className="text-slate-400 text-[9px]">— Cliente Verificado</div>
                    </div>
                  )}

                  {/* 7. FAQs */}
                  {isBlockEnabled('faqs') && (
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[10px] text-slate-300 space-y-1">
                      <div className="font-semibold text-white">▼ ¿Cómo contactar?</div>
                      <div className="text-slate-400 text-[9px] pl-2">A través de WhatsApp directo con respuesta en minutos.</div>
                    </div>
                  )}

                  {/* 8. Contacto */}
                  {isBlockEnabled('contacto') && (
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[10px] space-y-1">
                      <div className="text-slate-400">Contacto con Hook Form:</div>
                      <div className="flex gap-1">
                        <input disabled placeholder={company.contactEmail} className="bg-black/60 px-1.5 py-0.5 rounded text-[9px] text-slate-400 flex-1 border border-slate-800" />
                        <button className="px-2 py-0.5 rounded bg-violet-500 text-white text-[9px]">Enviar</button>
                      </div>
                    </div>
                  )}

                  {/* 10. Footer */}
                  {isBlockEnabled('footer') && (
                    <div className="p-2 rounded bg-slate-950 border-t border-slate-800 text-[9px] text-slate-500 text-center">
                      © 2026 {company.businessName} • Todos los derechos reservados
                    </div>
                  )}
                </div>

                {/* 9. Floating WhatsApp Icon */}
                {isBlockEnabled('whatsapp') && (
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-xl shadow-emerald-500/40 animate-bounce cursor-pointer">
                    💬
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: PROMPT MAESTRO INTEGRAL GENERADO LISTO PARA COPIAR */}
        {/* ========================================================================= */}
        {stationTab === 'prompt' && (
          <div className="space-y-3 max-w-5xl mx-auto py-1">
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-amber-500/10 border border-emerald-500/30 flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Prompt Maestro Personalizado Listo para Antigravity IDE</span>
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Integra los datos de <strong>{company.businessName}</strong>, paleta <strong>{currentPalette.name}</strong>, los 9 agentes y los 10 bloques.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadPlan}
                  className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 px-3 py-1.5 rounded-xl transition-colors text-xs font-mono font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descargar .md</span>
                </button>

                <button
                  onClick={handleCopyPrompt}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs font-mono shadow-lg transition-all active:scale-95"
                >
                  {copiedPrompt ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPrompt ? '¡Copiado con Éxito!' : 'Copiar Prompt Maestro Completo'}</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <pre className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 leading-relaxed overflow-x-auto max-h-[420px] select-all shadow-inner">
                {masterPromptText}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
        <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
          <CheckCircle2 className="w-4 h-4" />
          <span>Pega este prompt en Antigravity y dile: <em>"Ejecuta este plan paso a paso con tus agentes"</em>.</span>
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStationTab('form')}
            className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-lg text-[11px] font-bold transition-all"
          >
            <Edit3 className="w-3 h-3" />
            <span>Editar Empresa & Marca</span>
          </button>

          <button
            onClick={handleCopyPrompt}
            className="flex items-center gap-1 px-4 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] shadow-sm transition-all"
          >
            {copiedPrompt ? <Check className="w-3 h-3 text-emerald-950" /> : <Copy className="w-3 h-3" />}
            <span>{copiedPrompt ? '¡Copiado!' : 'Copiar Prompt'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
