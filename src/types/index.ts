export type ClassId = 0 | 1;

export type ThemeMode = 'cyber-emerald' | 'synthwave-neon' | 'electric-cyan' | 'solar-flare' | 'aurora-matrix';

export type ContrastRhythm = 'alternating' | 'all-light' | 'all-dark' | 'vibrant-warm';

export interface SlideData {
  id: string;
  classId: ClassId;
  slideNumber: number;
  totalInClass: number;
  category: string;
  title: string;
  subtitle?: string;
  durationMinutes: number;
  speakerNotes: {
    goal: string;
    talkingPoints: string[];
    questionsToAsk?: string[];
    liveActivity?: string;
  };
}

export interface ChecklistCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: {
    id: string;
    label: string;
    required: boolean;
    hint?: string;
  }[];
}

export interface WebBriefData {
  businessName: string;
  industry: string;
  tagline: string;
  targetAudience: string;
  mainProblemSolved: string;
  primaryGoal: 'leads' | 'sales' | 'branding' | 'booking';
  service1: string;
  service2: string;
  service3: string;
  brandColors: string;
  whatsappNumber: string;
  differentiator: string;
  additionalNotes: string;
}
