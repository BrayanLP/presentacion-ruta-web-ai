import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { ChevronDown } from 'lucide-react';
import type { ClassId, ThemeMode, ContrastRhythm } from './types';
import { CLASE_0_SLIDES, CLASE_1_SLIDES } from './data/slidesData';

// Slide Components Class 0
import { Slide0Hero } from './components/slides/clase0/Slide0Hero';
import { Slide0Equipment } from './components/slides/clase0/Slide0Equipment';
import { Slide0AIStack } from './components/slides/clase0/Slide0AIStack';
import { Slide0Accounts } from './components/slides/clase0/Slide0Accounts';
import { Slide0Domains } from './components/slides/clase0/Slide0Domains';
import { Slide0BusinessDNA } from './components/slides/clase0/Slide0BusinessDNA';
import { Slide0InteractiveChecklist } from './components/slides/clase0/Slide0InteractiveChecklist';

// Slide Components Class 1
import { Slide1Hero } from './components/slides/clase1/Slide1Hero';
import { Slide1Purpose } from './components/slides/clase1/Slide1Purpose';
import { Slide1WebVsSocial } from './components/slides/clase1/Slide1WebVsSocial';
import { Slide1ProfessionalWeb } from './components/slides/clase1/Slide1ProfessionalWeb';
import { Slide1TrustAndConversion } from './components/slides/clase1/Slide1TrustAndConversion';
import { Slide1Anatomy } from './components/slides/clase1/Slide1Anatomy';
import { Slide1AILanguage } from './components/slides/clase1/Slide1AILanguage';
import { Slide1Raffle } from './components/slides/clase1/Slide1Raffle';
import { Slide1ProjectBrief } from './components/slides/clase1/Slide1ProjectBrief';

// Presentation Tools
import { Navbar } from './components/Navbar';
import { ControlsBar } from './components/ControlsBar';
import { PresenterModal } from './components/PresenterModal';
import { OverviewGrid } from './components/OverviewGrid';
import { BriefGeneratorModal } from './components/BriefGenerator/BriefGeneratorModal';
import { ShortcutsModal } from './components/ShortcutsModal';
import { LaserPointer } from './components/LaserPointer';

const THEMES_ORDER: ThemeMode[] = [
  'cyber-emerald',
  'synthwave-neon',
  'electric-cyan',
  'solar-flare',
  'aurora-matrix'
];

export function App() {
  const [currentClass, setCurrentClass] = useState<ClassId>(0);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  // Theme, Contrast & Focus States
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('cyber-emerald');
  const [contrastRhythm, setContrastRhythm] = useState<ContrastRhythm>('alternating');
  const [autoCycle, setAutoCycle] = useState<boolean>(true);
  const [isLaserActive, setIsLaserActive] = useState<boolean>(false);
  const [isWakingUp, setIsWakingUp] = useState<boolean>(false);

  // Presentation Mode: Hide top bar for immersive experience
  const [isNavbarHidden, setIsNavbarHidden] = useState<boolean>(false);
  const [isHoveringTop, setIsHoveringTop] = useState<boolean>(false);

  // Modals state
  const [isPresenterOpen, setIsPresenterOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slideRef = useRef<HTMLDivElement>(null);

  const currentSlides = currentClass === 0 ? CLASE_0_SLIDES : CLASE_1_SLIDES;
  const currentSlideData = currentSlides[slideIndex] || currentSlides[0];
  const nextSlideData = currentSlides[slideIndex + 1];

  // Determine the canvas brightness mode for the current slide
  const getSlideCanvasClass = () => {
    if (contrastRhythm === 'all-light') return 'canvas-light-mode';
    if (contrastRhythm === 'all-dark') return 'canvas-dark-mode';
    if (contrastRhythm === 'vibrant-warm') {
      return slideIndex % 2 === 0 ? 'canvas-warm-mode' : 'canvas-cool-mode';
    }
    // 'alternating' mode: Even slides are bright/light studio, odd slides are cyber dark!
    return slideIndex % 2 === 0 ? 'canvas-light-mode' : 'canvas-dark-mode';
  };

  // Synthesize energizing alert chime with Web Audio API
  const playWakeSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.15); // C6
      osc.frequency.exponentialRampToValueAtTime(1318.51, audioCtx.currentTime + 0.3); // E6

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.45);
    } catch {
      // Audio fallback
    }
  };

  // Trigger Wake-Up / Energy Boost
  const triggerWakeUp = () => {
    setIsWakingUp(true);
    playWakeSound();
    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#00f0ff', '#ff0055', '#ffe600', '#10b981']
    });

    // Toggle contrast mode on wake-up for dramatic awakening!
    setContrastRhythm((prev) => (prev === 'all-dark' ? 'alternating' : 'vibrant-warm'));

    setCurrentTheme((prev) => {
      const currIdx = THEMES_ORDER.indexOf(prev);
      return THEMES_ORDER[(currIdx + 1) % THEMES_ORDER.length];
    });

    setTimeout(() => setIsWakingUp(false), 700);
  };

  // Cycle to next theme
  const cycleNextTheme = () => {
    setCurrentTheme((prev) => {
      const currIdx = THEMES_ORDER.indexOf(prev);
      return THEMES_ORDER[(currIdx + 1) % THEMES_ORDER.length];
    });
  };

  // Cycle to next contrast rhythm
  const cycleContrastRhythm = () => {
    const nextMap: Record<ContrastRhythm, ContrastRhythm> = {
      'alternating': 'all-light',
      'all-light': 'vibrant-warm',
      'vibrant-warm': 'all-dark',
      'all-dark': 'alternating'
    };
    setContrastRhythm((prev) => nextMap[prev]);
  };

  // GSAP animation & Theme Auto-Cycle when slide changes
  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, y: 15, scale: 0.99 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' }
      );
    }

    // Auto-cycle theme on slide advance if enabled
    if (autoCycle) {
      const nextTheme = THEMES_ORDER[(slideIndex + (currentClass * 3)) % THEMES_ORDER.length];
      setCurrentTheme(nextTheme);
    }
  }, [currentClass, slideIndex, autoCycle]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
      setIsNavbarHidden(true); // Automatically hide navbar in fullscreen for keynote immersion!
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
      setIsNavbarHidden(false);
    }
  };

  const handleNext = () => {
    if (slideIndex < currentSlides.length - 1) {
      setSlideIndex((prev) => prev + 1);
    } else if (currentClass === 0) {
      // Transition from Class 0 to Class 1
      setCurrentClass(1);
      setSlideIndex(0);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    } else if (currentClass === 1) {
      setCurrentClass(0);
      setSlideIndex(CLASE_0_SLIDES.length - 1);
    }
  };

  const handleSelectClass = (c: ClassId) => {
    setCurrentClass(c);
    setSlideIndex(0);
  };

  const handleJumpToSlide = (idx: number) => {
    if (idx >= 0 && idx < currentSlides.length) {
      setSlideIndex(idx);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when user is typing in inputs or textareas
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'Escape') {
        setIsPresenterOpen(false);
        setIsOverviewOpen(false);
        setIsBriefOpen(false);
        setIsShortcutsOpen(false);
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 'h') {
        e.preventDefault();
        setIsNavbarHidden((prev) => !prev);
      } else if (e.key.toLowerCase() === 'c') {
        e.preventDefault();
        cycleContrastRhythm();
      } else if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        cycleNextTheme();
      } else if (e.key.toLowerCase() === 'l') {
        e.preventDefault();
        setIsLaserActive((prev) => !prev);
      } else if (e.key.toLowerCase() === 'w') {
        e.preventDefault();
        triggerWakeUp();
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'p' || e.key.toLowerCase() === 'n') {
        e.preventDefault();
        setIsPresenterOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'o') {
        e.preventDefault();
        setIsOverviewOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsBriefOpen((prev) => !prev);
      } else if (e.key === '0') {
        e.preventDefault();
        handleSelectClass(0);
      } else if (e.key === '1') {
        e.preventDefault();
        handleSelectClass(1);
      } else if (e.key === '?') {
        e.preventDefault();
        setIsShortcutsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideIndex, currentClass, currentSlides.length, autoCycle]);

  // Render current slide
  const renderCurrentSlide = () => {
    if (currentClass === 0) {
      switch (slideIndex) {
        case 0:
          return <Slide0Hero onNext={handleNext} />;
        case 1:
          return <Slide0Equipment />;
        case 2:
          return <Slide0AIStack />;
        case 3:
          return <Slide0Accounts />;
        case 4:
          return <Slide0Domains />;
        case 5:
          return <Slide0BusinessDNA />;
        case 6:
          return <Slide0InteractiveChecklist onGoToClass1={() => handleSelectClass(1)} />;
        default:
          return <Slide0Hero onNext={handleNext} />;
      }
    } else {
      switch (slideIndex) {
        case 0:
          return <Slide1Hero onNext={handleNext} />;
        case 1:
          return <Slide1Purpose />;
        case 2:
          return <Slide1WebVsSocial />;
        case 3:
          return <Slide1ProfessionalWeb />;
        case 4:
          return <Slide1TrustAndConversion />;
        case 5:
          return <Slide1Anatomy />;
        case 6:
          return <Slide1AILanguage />;
        case 7:
          return <Slide1Raffle onNext={handleNext} />;
        case 8:
          return <Slide1ProjectBrief onOpenBriefModal={() => setIsBriefOpen(true)} />;
        default:
          return <Slide1Hero onNext={handleNext} />;
      }
    }
  };

  const showNavbar = !isNavbarHidden || isHoveringTop;

  return (
    <div
      className={`flex flex-col h-screen w-screen text-slate-100 overflow-hidden relative font-sans transition-all duration-700 theme-${currentTheme} ${
        isWakingUp ? 'wake-up-shake' : ''
      }`}
    >
      {/* Laser Pointer */}
      <LaserPointer isActive={isLaserActive} />

      {/* Top Edge Hover Trigger Zone when Navbar is Hidden */}
      {isNavbarHidden && (
        <div
          onMouseEnter={() => setIsHoveringTop(true)}
          className="fixed top-0 left-0 right-0 h-4 z-40 cursor-pointer flex justify-center group"
          title="Pasa el cursor para mostrar la barra (o presiona H)"
        >
          <div className="px-4 py-1 rounded-b-xl bg-slate-900/90 border-x border-b border-brand-500/40 text-[10px] font-mono text-brand-300 opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg">
            <ChevronDown className="w-3 h-3" />
            <span>Mostrar Barra (H)</span>
          </div>
        </div>
      )}

      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Top Navigation Bar with Smooth Reveal on Hover */}
      <div
        onMouseLeave={() => isNavbarHidden && setIsHoveringTop(false)}
        className={`${isNavbarHidden ? 'fixed top-0 left-0 right-0 z-40 transition-transform duration-300' : 'relative'} ${
          isNavbarHidden && !showNavbar ? '-translate-y-full pointer-events-none' : 'translate-y-0'
        }`}
      >
        <Navbar
          currentClass={currentClass}
          onSelectClass={handleSelectClass}
          currentSlideIndex={slideIndex}
          totalSlides={currentSlides.length}
          onOpenOverview={() => setIsOverviewOpen(true)}
          onOpenPresenter={() => setIsPresenterOpen(true)}
          onOpenBrief={() => setIsBriefOpen(true)}
          onOpenShortcuts={() => setIsShortcutsOpen(true)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
          currentTheme={currentTheme}
          onSelectTheme={(t) => setCurrentTheme(t)}
          contrastRhythm={contrastRhythm}
          onSelectContrastRhythm={(r) => setContrastRhythm(r)}
          autoCycle={autoCycle}
          onToggleAutoCycle={() => setAutoCycle(!autoCycle)}
          isLaserActive={isLaserActive}
          onToggleLaser={() => setIsLaserActive(!isLaserActive)}
          onTriggerWakeUp={triggerWakeUp}
          isNavbarHidden={isNavbarHidden}
          onToggleHideNavbar={() => setIsNavbarHidden(!isNavbarHidden)}
        />
      </div>

      {/* Main Slide Canvas */}
      <main className={`flex-1 relative flex items-center justify-center overflow-hidden transition-all duration-300 ${
        isNavbarHidden ? 'p-2 sm:p-4' : 'p-2 sm:p-4 md:p-6'
      }`}>
        <div
          ref={slideRef}
          className={`w-full h-full max-w-7xl rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-2xl transition-all duration-500 border ${
            isNavbarHidden ? 'max-h-[96vh]' : 'max-h-[88vh]'
          } ${getSlideCanvasClass()}`}
        >
          {renderCurrentSlide()}
        </div>
      </main>

      {/* Floating Bottom Navigation */}
      <ControlsBar
        currentSlideIndex={slideIndex}
        totalSlides={currentSlides.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onJumpToSlide={handleJumpToSlide}
      />

      {/* Modals & Tools */}
      <PresenterModal
        isOpen={isPresenterOpen}
        onClose={() => setIsPresenterOpen(false)}
        slide={currentSlideData}
        nextSlide={nextSlideData}
        onNextSlide={handleNext}
      />

      <OverviewGrid
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={currentSlides}
        currentSlideIndex={slideIndex}
        onSelectSlide={handleJumpToSlide}
      />

      <BriefGeneratorModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
}

export default App;
