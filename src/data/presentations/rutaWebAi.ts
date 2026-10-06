import type { Presentation } from '../../types';
import { CLASE_0_SLIDES, CLASE_1_SLIDES, CLASE_2_SLIDES, CLASE_4_SLIDES, CLASE_5_SLIDES, CLASE_6_SLIDES } from '../slidesData';

// Enrich slides with customComponentKey so the SlideRenderer knows which custom interactive component to render
const enrichedClase0Slides = CLASE_0_SLIDES.map((slide, idx) => {
  const keys = [
    'clase0-hero',
    'clase0-equipment',
    'clase0-aistack',
    'clase0-accounts',
    'clase0-domains',
    'clase0-businessdna',
    'clase0-checklist'
  ];
  return {
    ...slide,
    layout: 'custom' as const,
    customComponentKey: keys[idx] || 'clase0-hero'
  };
});

const enrichedClase1Slides = CLASE_1_SLIDES.map((slide, idx) => {
  const keys = [
    'clase1-hero',
    'clase1-purpose',
    'clase1-webvssocial',
    'clase1-professionalweb',
    'clase1-trustandconversion',
    'clase1-anatomy',
    'clase1-ailanguage',
    'clase1-raffle',
    'clase1-projectbrief'
  ];
  return {
    ...slide,
    layout: 'custom' as const,
    customComponentKey: keys[idx] || 'clase1-hero'
  };
});

const enrichedClase2Slides = CLASE_2_SLIDES.map((slide, idx) => {
  const keys = [
    'clase2-hero',
    'clase2-office',
    'clase2-agents',
    'clase2-skills',
    'clase2-directing',
    'clase2-collaboration',
    'clase2-mistakes',
    'clase2-kit-station'
  ];
  return {
    ...slide,
    layout: 'custom' as const,
    customComponentKey: keys[idx] || 'clase2-hero'
  };
});

const enrichedClase4Slides = CLASE_4_SLIDES.map((slide, idx) => {
  const keys = [
    'clase4-hero',
    'clase4-under-the-hood',
    'clase4-blocks-anatomy',
    'clase4-first-blocks',
    'clase4-trust-blocks',
    'clase4-mobile-first',
    'clase4-clean-code-tests',
    'clase4-builder-station'
  ];
  return {
    ...slide,
    layout: 'custom' as const,
    customComponentKey: keys[idx] || 'clase4-hero'
  };
});

const enrichedClase5Slides = CLASE_5_SLIDES.map((slide, idx) => {
  const keys = [
    'clase5-hero',
    'clase5-seo',
    'clase5-geo',
    'clase5-publication',
    'clase5-search-console',
    'clase5-launch-station'
  ];
  return {
    ...slide,
    layout: 'custom' as const,
    customComponentKey: keys[idx] || 'clase5-hero'
  };
});

const enrichedClase6Slides = CLASE_6_SLIDES.map((slide, idx) => {
  const keys = [
    'clase6-hero',
    'clase6-projects-interactive'
  ];
  return {
    ...slide,
    layout: 'custom' as const,
    customComponentKey: keys[idx] || 'clase6-hero'
  };
});

export const RUTA_WEB_AI_PRESENTATION: Presentation = {
  id: 'ruta-web-ai',
  title: 'Ruta Web con IA',
  shortTitle: 'Ruta Web con IA',
  subtitle: 'De Cero a tu Primera Web Profesional e Inteligente',
  badge: '5 Clases Prácticas',
  icon: 'Sparkles',
  description: 'Masterclass completa de 5 clases para preparar tu entorno, estructurar tu estrategia, orquestar tus agentes, construir tu web y publicarla con SEO + GEO.',
  hasBriefGenerator: true,
  sections: [
    {
      id: 'clase-0',
      title: 'Clase 0: Prepara tu Entorno de Trabajo',
      shortTitle: 'Clase 0: Entorno',
      badge: 'Entorno',
      color: 'emerald',
      description: 'Herramientas, cuentas de Google AI Pro, Antigravity IDE, GitHub, Vercel y checklist interactivo.',
      slides: enrichedClase0Slides
    },
    {
      id: 'clase-1',
      title: 'Clase 1: Estrategia Web & Brief de Negocio',
      shortTitle: 'Clase 1: Estrategia',
      badge: 'Estrategia',
      color: 'violet',
      description: 'Propósito web, conversión vs redes, arquitectura, ruleta de sorteo y generador de brief maestro.',
      slides: enrichedClase1Slides
    },
    {
      id: 'clase-2',
      title: 'Clase 2: Tu Equipo de IA (Agentes & Skills)',
      shortTitle: 'Clase 2: Equipo de IA',
      badge: 'Agentes & Skills',
      color: 'cyan',
      description: 'Antigravity como oficina virtual, Kit de 9 Agentes, 11 Skills, dirección como CEO y estación de orquestación.',
      slides: enrichedClase2Slides
    },
    {
      id: 'clase-4',
      title: 'Clase 3: Construye tu Web (Aquí Empieza la Acción)',
      shortTitle: 'Clase 3: Construye tu Web',
      badge: 'Construcción',
      color: 'amber',
      description: 'Los 10 bloques esenciales, versión móvil, stack Next.js + Tailwind + Radix + Hook Form, Unit Tests y Web Builder Studio.',
      slides: enrichedClase4Slides
    },
    {
      id: 'clase-5',
      title: 'Clase 4: SEO + GEO + Publicación',
      shortTitle: 'Clase 4: SEO + GEO',
      badge: 'SEO & Publicación',
      color: 'emerald',
      description: 'SEO para Google, GEO para las IAs, dominio propio, SSL, Analytics y Search Console. Aquí cerramos el ciclo.',
      slides: enrichedClase5Slides
    },
    {
      id: 'clase-6',
      title: 'Clase 5: FULL PROYECTOS (Aprender Haciendo)',
      shortTitle: 'Clase 5: Proyectos',
      badge: 'Práctica',
      color: 'blue',
      description: 'A partir de aquí: Full Proyectos. No más teoría larga. Selecciona un proyecto y generemos el prompt maestro para Next.js.',
      slides: enrichedClase6Slides
    }
  ]
};

