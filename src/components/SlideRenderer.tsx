import React from 'react';
import type { SlideData } from '../types';

// Slide Components Class 0 (Ruta Web)
import { Slide0Hero } from './slides/clase0/Slide0Hero';
import { Slide0Equipment } from './slides/clase0/Slide0Equipment';
import { Slide0AIStack } from './slides/clase0/Slide0AIStack';
import { Slide0Accounts } from './slides/clase0/Slide0Accounts';
import { Slide0Domains } from './slides/clase0/Slide0Domains';
import { Slide0BusinessDNA } from './slides/clase0/Slide0BusinessDNA';
import { Slide0InteractiveChecklist } from './slides/clase0/Slide0InteractiveChecklist';

// Slide Components Class 1 (Ruta Web)
import { Slide1Hero } from './slides/clase1/Slide1Hero';
import { Slide1Purpose } from './slides/clase1/Slide1Purpose';
import { Slide1WebVsSocial } from './slides/clase1/Slide1WebVsSocial';
import { Slide1ProfessionalWeb } from './slides/clase1/Slide1ProfessionalWeb';
import { Slide1TrustAndConversion } from './slides/clase1/Slide1TrustAndConversion';
import { Slide1Anatomy } from './slides/clase1/Slide1Anatomy';
import { Slide1AILanguage } from './slides/clase1/Slide1AILanguage';
import { Slide1Raffle } from './slides/clase1/Slide1Raffle';
import { Slide1ProjectBrief } from './slides/clase1/Slide1ProjectBrief';

// Slide Components Class 2 (Ruta Web)
import { Slide2Hero } from './slides/clase2/Slide2Hero';
import { Slide2OfficeAntigravity } from './slides/clase2/Slide2OfficeAntigravity';
import { Slide2AgentsKit } from './slides/clase2/Slide2AgentsKit';
import { Slide2SkillsKit } from './slides/clase2/Slide2SkillsKit';
import { Slide2DirectingAgents } from './slides/clase2/Slide2DirectingAgents';
import { Slide2CollaborationWorkflow } from './slides/clase2/Slide2CollaborationWorkflow';
import { Slide2MistakesToAvoid } from './slides/clase2/Slide2MistakesToAvoid';
import { Slide2AgentKitStation } from './slides/clase2/Slide2AgentKitStation';

// Slide Components (Ruta Software)
import { SlideSoftwareChecklist } from './slides/software/SlideSoftwareChecklist';
import { SlideSoftwareIdeaInteractive } from './slides/software/SlideSoftwareIdeaInteractive';
import { SlideSoftwareMVPSteps } from './slides/software/SlideSoftwareMVPSteps';
import { SlideSoftwareFinalPlan } from './slides/software/SlideSoftwareFinalPlan';

// Slide Components (Ruta Apps iOS)
import { SlideIosIdeaInteractive } from './slides/ios/SlideIosIdeaInteractive';
import { SlideIosChecklist } from './slides/ios/SlideIosChecklist';
import { SlideIosExpenseCaseStudy } from './slides/ios/SlideIosExpenseCaseStudy';
import { SlideIosBlueprintInteractive } from './slides/ios/SlideIosBlueprintInteractive';

// Generic Slide for Dynamic Presentations
import { GenericSlide } from './slides/GenericSlide';

interface Props {
  slide: SlideData;
  onNext: () => void;
  onSelectSection: (sectionIndex: number) => void;
  onOpenBrief?: () => void;
  onOpenSoftwarePlan?: () => void;
  onOpenAppBlueprint?: () => void;
}

export const SlideRenderer: React.FC<Props> = ({
  slide,
  onNext,
  onSelectSection,
  onOpenBrief,
  onOpenSoftwarePlan,
  onOpenAppBlueprint,
}) => {
  const handleOpenTool = onOpenAppBlueprint || onOpenSoftwarePlan || onOpenBrief;

  // If slide has a specific custom component key, render it
  if (slide.customComponentKey) {
    switch (slide.customComponentKey) {
      // Ruta Web - Clase 0
      case 'clase0-hero':
        return <Slide0Hero onNext={onNext} />;
      case 'clase0-equipment':
        return <Slide0Equipment />;
      case 'clase0-aistack':
        return <Slide0AIStack />;
      case 'clase0-accounts':
        return <Slide0Accounts />;
      case 'clase0-domains':
        return <Slide0Domains />;
      case 'clase0-businessdna':
        return <Slide0BusinessDNA />;
      case 'clase0-checklist':
        return <Slide0InteractiveChecklist onGoToClass1={() => onSelectSection(1)} />;

      // Ruta Web - Clase 1
      case 'clase1-hero':
        return <Slide1Hero onNext={onNext} />;
      case 'clase1-purpose':
        return <Slide1Purpose />;
      case 'clase1-webvssocial':
        return <Slide1WebVsSocial />;
      case 'clase1-professionalweb':
        return <Slide1ProfessionalWeb />;
      case 'clase1-trustandconversion':
        return <Slide1TrustAndConversion />;
      case 'clase1-anatomy':
        return <Slide1Anatomy />;
      case 'clase1-ailanguage':
        return <Slide1AILanguage />;
      case 'clase1-raffle':
        return <Slide1Raffle onNext={onNext} />;
      case 'clase1-projectbrief':
        return <Slide1ProjectBrief onOpenBriefModal={onOpenBrief || (() => {})} />;

      // Ruta Web - Clase 2 (Tu Equipo de IA)
      case 'clase2-hero':
        return <Slide2Hero onNext={onNext} />;
      case 'clase2-office':
        return <Slide2OfficeAntigravity />;
      case 'clase2-agents':
        return <Slide2AgentsKit onOpenBriefModal={onOpenBrief || (() => {})} />;
      case 'clase2-skills':
        return <Slide2SkillsKit />;
      case 'clase2-directing':
        return <Slide2DirectingAgents />;
      case 'clase2-collaboration':
        return <Slide2CollaborationWorkflow />;
      case 'clase2-mistakes':
        return <Slide2MistakesToAvoid />;
      case 'clase2-kit-station':
        return <Slide2AgentKitStation onOpenBriefModal={onOpenBrief || (() => {})} />;

      // Ruta Software con IA
      case 'software-idea-interactive':
        return <SlideSoftwareIdeaInteractive onOpenPlanModal={onOpenSoftwarePlan || (() => {})} />;
      case 'software-checklist':
        return <SlideSoftwareChecklist onGoToClass1={() => onSelectSection(1)} />;
      case 'software-mvp-steps':
        return <SlideSoftwareMVPSteps onOpenPlanModal={onOpenSoftwarePlan || (() => {})} />;
      case 'software-final-plan':
        return <SlideSoftwareFinalPlan onOpenPlanModal={onOpenSoftwarePlan || (() => {})} />;

      // Ruta Apps iOS con IA
      case 'ios-idea-interactive':
        return <SlideIosIdeaInteractive onOpenBlueprintModal={onOpenAppBlueprint || (() => {})} />;
      case 'ios-checklist':
        return <SlideIosChecklist onGoToClass1={() => onSelectSection(1)} />;
      case 'ios-expense-case-study':
        return <SlideIosExpenseCaseStudy />;
      case 'ios-blueprint-interactive':
        return <SlideIosBlueprintInteractive onOpenBlueprintModal={onOpenAppBlueprint || (() => {})} />;

      default:
        return <GenericSlide slide={slide} onNext={onNext} onOpenBrief={handleOpenTool} />;
    }
  }

  // Fallback to rich dynamic GenericSlide for all dynamic slides
  return <GenericSlide slide={slide} onNext={onNext} onOpenBrief={handleOpenTool} />;
};

