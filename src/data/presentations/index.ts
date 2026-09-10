import type { Presentation } from '../../types';
import { RUTA_WEB_AI_PRESENTATION } from './rutaWebAi';
import { RUTA_SOFTWARE_AI_PRESENTATION } from './rutaSoftwareAi';

export const PRESENTATIONS_CATALOG: Presentation[] = [
  RUTA_WEB_AI_PRESENTATION,
  RUTA_SOFTWARE_AI_PRESENTATION
];

export function getAllPresentations(): Presentation[] {
  return PRESENTATIONS_CATALOG;
}

export function getPresentation(id: string): Presentation {
  const found = PRESENTATIONS_CATALOG.find((p) => p.id === id);
  return found || PRESENTATIONS_CATALOG[0];
}

export function getDefaultPresentation(): Presentation {
  return PRESENTATIONS_CATALOG[0];
}

export { 
  RUTA_WEB_AI_PRESENTATION, 
  RUTA_SOFTWARE_AI_PRESENTATION 
};
