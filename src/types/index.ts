export type ClassId = number | string;

export type ThemeMode = 'cyber-emerald' | 'synthwave-neon' | 'electric-cyan' | 'solar-flare' | 'aurora-matrix';

export type ContrastRhythm = 'alternating' | 'all-light' | 'all-dark' | 'vibrant-warm';

export type SlideLayoutType = 
  | 'custom'
  | 'hero'
  | 'grid'
  | 'split'
  | 'comparison'
  | 'timeline'
  | 'quote'
  | 'stats';

export interface SlidePoint {
  title?: string;
  text: string;
  icon?: string;
  highlight?: boolean;
}

export interface SlideCard {
  title: string;
  desc: string;
  icon?: string;
  badge?: string;
  color?: string;
  list?: string[];
  link?: string;
}

export interface SlideComparison {
  leftTitle: string;
  leftSubtitle?: string;
  leftBadge?: string;
  leftItems: string[];
  rightTitle: string;
  rightSubtitle?: string;
  rightBadge?: string;
  rightItems: string[];
}

export interface SlideStat {
  value: string;
  label: string;
  subtext?: string;
  color?: string;
}

export interface SlideTimelineStep {
  step: string;
  title: string;
  desc: string;
  badge?: string;
  icon?: string;
}

export interface SlideCallout {
  type: 'tip' | 'warning' | 'info' | 'gem';
  title: string;
  text: string;
}

export interface SlideData {
  id: string;
  classId?: number | string;
  sectionId?: string;
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
  // Dynamic layout support
  layout?: SlideLayoutType;
  customComponentKey?: string;
  badge?: string;
  heroCta?: {
    text: string;
    action?: 'next' | 'brief' | 'external';
    url?: string;
  };
  points?: SlidePoint[];
  cards?: SlideCard[];
  comparison?: SlideComparison;
  quote?: {
    text: string;
    author?: string;
    role?: string;
  };
  stats?: SlideStat[];
  timeline?: SlideTimelineStep[];
  codeSnippet?: {
    language: string;
    code: string;
    title?: string;
  };
  callout?: SlideCallout;
}

export interface PresentationSection {
  id: string;
  title: string;
  shortTitle: string;
  badge?: string;
  color?: 'emerald' | 'violet' | 'cyan' | 'amber' | 'pink' | 'blue';
  description?: string;
  slides: SlideData[];
}

export interface Presentation {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  badge?: string;
  icon?: string;
  description?: string;
  hasBriefGenerator?: boolean;
  hasSoftwarePlanGenerator?: boolean;
  hasAppBlueprintGenerator?: boolean;
  sections: PresentationSection[];
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

export interface SoftwarePlanData {
  softwareName: string;
  whatToCreate: string;
  problemSolved: string;
  targetUser: string;
  keyFeatures: string;
  currentSolution: string;
  desiredImprovements: string;
  databaseNeeds?: string;
  mvpScope?: string;
}

export interface AppBlueprintData {
  appName: string;
  problemSolved: string;
  targetUser: string;
  valueProposition: string;
  keyFeatures: string;
  requiredScreens: string;
  userFlow: string;
  mvpScope: string;
  futureScope: string;
  supabaseNeeds?: string;
  similarApps?: string;
}
