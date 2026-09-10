import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { ChevronDown } from 'lucide-react';
import type { Presentation, ThemeMode, ContrastRhythm } from './types';
import { getAllPresentations } from './data/presentations';
import { usePresentationRouter } from './hooks/usePresentationRouter';

// Presentation Tools & Modals
import { Navbar } from './components/Navbar';
import { ControlsBar } from './components/ControlsBar';
import { PresenterModal } from './components/PresenterModal';
import { OverviewGrid } from './components/OverviewGrid';
import { BriefGeneratorModal } from './components/BriefGenerator/BriefGeneratorModal';
import { SoftwarePlanModal } from './components/SoftwarePlan/SoftwarePlanModal';
import { ShortcutsModal } from './components/ShortcutsModal';
import { LaserPointer } from './components/LaserPointer';
import { SlideRenderer } from './components/SlideRenderer';
import { PresentationHub } from './components/PresentationHub';

const THEMES_ORDER: ThemeMode[] = [
  'cyber-emerald',
  'synthwave-neon',
  'electric-cyan',
  'solar-flare',
  'aurora-matrix'
];

export function App() {
  const presentations = getAllPresentations();
  
  // Custom Router with internal deep-linking (/ruta-web-ai, /ruta-software-ai, /hub)
  const {
    currentPresentation,
    currentSectionIndex,
    slideIndex,
    isHub,
    activeTool,
    navigateTo,
    navigateToSlide,
    navigateToSection,
    navigateToHub,
  } = usePresentationRouter();

  // Theme, Contrast & Focus States
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('cyber-emerald');
  const [contrastRhythm, setContrastRhythm] = useState<ContrastRhythm>('alternating');
  const [autoCycle, setAutoCycle] = useState<boolean>(true);
  const [isLaserActive, setIsLaserActive] = useState<boolean>(true);
  const [isWakingUp, setIsWakingUp] = useState<boolean>(false);

  // Presentation Mode: Hide top bar for immersive experience
  const [isNavbarHidden, setIsNavbarHidden] = useState<boolean>(false);
  const [isHoveringTop, setIsHoveringTop] = useState<boolean>(false);

  // Modals state
  const [isPresenterOpen, setIsPresenterOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isBriefOpen, setIsBriefOpen] = useState(false);
  const [isSoftwarePlanOpen, setIsSoftwarePlanOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sync activeTool from URL
  useEffect(() => {
    if (activeTool === 'plan') {
      setIsSoftwarePlanOpen(true);
    } else if (activeTool === 'brief') {
      setIsBriefOpen(true);
    }
  }, [activeTool]);

  const slideRef = useRef<HTMLDivElement>(null);

  // Current active section and slides
  const activeSection = currentPresentation.sections[currentSectionIndex] || currentPresentation.sections[0];
  const currentSlides = activeSection.slides;
  const currentSlideData = currentSlides[slideIndex] || currentSlides[0];

  // Next slide preview for speaker notes (handles cross-section transitions)
  const nextSlideData =
    slideIndex + 1 < currentSlides.length
      ? currentSlides[slideIndex + 1]
      : currentSectionIndex + 1 < currentPresentation.sections.length
      ? currentPresentation.sections[currentSectionIndex + 1].slides[0]
      : undefined;

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
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const audioCtx = new AudioContextClass();
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
    if (autoCycle && !isHub) {
      const nextTheme = THEMES_ORDER[(slideIndex + (currentSectionIndex * 3)) % THEMES_ORDER.length];
      setCurrentTheme(nextTheme);
    }
  }, [currentPresentation.id, currentSectionIndex, slideIndex, autoCycle, isHub]);

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
      navigateToSlide(slideIndex + 1);
    } else if (currentSectionIndex < currentPresentation.sections.length - 1) {
      // Transition to Next Section
      navigateTo(currentPresentation.id, currentSectionIndex + 1, 0);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      navigateToSlide(slideIndex - 1);
    } else if (currentSectionIndex > 0) {
      // Transition to Previous Section
      const prevSectionIndex = currentSectionIndex - 1;
      const lastSlideIndex = currentPresentation.sections[prevSectionIndex].slides.length - 1;
      navigateTo(currentPresentation.id, prevSectionIndex, lastSlideIndex);
    }
  };

  const handleSelectPresentation = (presentation: Presentation, sectionIndex = 0) => {
    navigateTo(presentation.id, sectionIndex, 0);
  };

  const handleSelectSection = (index: number) => {
    if (index >= 0 && index < currentPresentation.sections.length) {
      navigateToSection(index);
    }
  };

  const handleJumpToSlide = (idx: number) => {
    if (idx >= 0 && idx < currentSlides.length) {
      navigateToSlide(idx);
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
        setIsSoftwarePlanOpen(false);
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
      } else if (e.key.toLowerCase() === 'b' || e.key.toLowerCase() === 's') {
        e.preventDefault();
        if (currentPresentation.hasSoftwarePlanGenerator) {
          setIsSoftwarePlanOpen((prev) => !prev);
        } else if (currentPresentation.hasBriefGenerator) {
          setIsBriefOpen((prev) => !prev);
        }
      } else if (e.key === '0') {
        e.preventDefault();
        handleSelectSection(0);
      } else if (e.key === '1') {
        e.preventDefault();
        if (currentPresentation.sections.length > 1) {
          handleSelectSection(1);
        }
      } else if (e.key === '2') {
        e.preventDefault();
        if (currentPresentation.sections.length > 2) {
          handleSelectSection(2);
        }
      } else if (e.key === '?') {
        e.preventDefault();
        setIsShortcutsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slideIndex, currentSectionIndex, currentSlides.length, currentPresentation, autoCycle, isHub]);

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
        className={`${isNavbarHidden ? 'fixed top-0 left-0 right-0 z-50 transition-transform duration-300' : 'relative z-50'} ${
          isNavbarHidden && !showNavbar ? '-translate-y-full pointer-events-none' : 'translate-y-0'
        }`}
      >
        <Navbar
          presentations={presentations}
          currentPresentation={currentPresentation}
          onSelectPresentation={handleSelectPresentation}
          currentSectionIndex={currentSectionIndex}
          onSelectSection={handleSelectSection}
          currentSlideIndex={slideIndex}
          totalSlides={currentSlides.length}
          onOpenOverview={() => setIsOverviewOpen(true)}
          onOpenPresenter={() => setIsPresenterOpen(true)}
          onOpenBrief={() => setIsBriefOpen(true)}
          onOpenSoftwarePlan={() => setIsSoftwarePlanOpen(true)}
          onOpenHub={navigateToHub}
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

      {/* Main Slide Canvas or Hub */}
      <main className={`flex-1 relative flex items-center justify-center overflow-hidden transition-all duration-300 ${
        isNavbarHidden ? 'p-2 sm:p-4' : 'p-2 sm:p-4 md:p-6'
      }`}>
        <div
          ref={slideRef}
          className={`w-full h-full max-w-7xl rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-2xl transition-all duration-500 border ${
            isNavbarHidden ? 'max-h-[96vh]' : 'max-h-[88vh]'
          } ${isHub ? 'bg-slate-950/90 border-slate-800' : getSlideCanvasClass()}`}
        >
          {isHub ? (
            <PresentationHub
              presentations={presentations}
              onSelectPresentation={(p, secIdx) => handleSelectPresentation(p, secIdx || 0)}
              onCloseHub={() => navigateTo(currentPresentation.id, currentSectionIndex, slideIndex)}
            />
          ) : (
            <SlideRenderer
              slide={currentSlideData}
              onNext={handleNext}
              onSelectSection={handleSelectSection}
              onOpenBrief={() => setIsBriefOpen(true)}
              onOpenSoftwarePlan={() => setIsSoftwarePlanOpen(true)}
            />
          )}
        </div>
      </main>

      {/* Floating Bottom Navigation (Only visible during slide presentations) */}
      {!isHub && (
        <ControlsBar
          currentSlideIndex={slideIndex}
          totalSlides={currentSlides.length}
          onPrev={handlePrev}
          onNext={handleNext}
          onJumpToSlide={handleJumpToSlide}
        />
      )}

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

      {/* Web Brief Generator Modal */}
      {currentPresentation.hasBriefGenerator && (
        <BriefGeneratorModal
          isOpen={isBriefOpen}
          onClose={() => setIsBriefOpen(false)}
        />
      )}

      {/* Software Plan Generator Modal */}
      {currentPresentation.hasSoftwarePlanGenerator && (
        <SoftwarePlanModal
          isOpen={isSoftwarePlanOpen}
          onClose={() => setIsSoftwarePlanOpen(false)}
        />
      )}

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
}

export default App;
