import type { Presentation } from '../../types';
import { CLASE_0_SLIDES, CLASE_1_SLIDES, CLASE_2_SLIDES } from '../slidesData';

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

export const RUTA_WEB_AI_PRESENTATION: Presentation = {
  id: 'ruta-web-ai',
  title: 'Ruta Web con IA',
  shortTitle: 'Ruta Web con IA',
  subtitle: 'De Cero a tu Primera Web Profesional e Inteligente',
  badge: '3 Clases Prácticas',
  icon: 'Sparkles',
  description: 'Masterclass completa de 3 clases para preparar tu entorno, estructurar tu estrategia de conversión y dirigir a tu equipo de agentes con el Kit de Skills en Antigravity.',
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
    }
  ]
};

