import type { Presentation } from '../../types';
import { CLASE_0_SLIDES, CLASE_1_SLIDES } from '../slidesData';

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

export const RUTA_WEB_AI_PRESENTATION: Presentation = {
  id: 'ruta-web-ai',
  title: 'Ruta Web con IA',
  shortTitle: 'Ruta Web con IA',
  subtitle: 'De Cero a tu Primera Web Profesional e Inteligente',
  badge: '2 Clases Prácticas',
  icon: 'Sparkles',
  description: 'Masterclass interactiva de 2 clases para preparar tu entorno de desarrollo y estructurar la estrategia de conversión de tu web con IA.',
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
    }
  ]
};
