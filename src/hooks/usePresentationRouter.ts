import { useState, useEffect, useCallback } from 'react';
import type { Presentation } from '../types';
import { getAllPresentations, getDefaultPresentation } from '../data/presentations';

export interface RouteState {
  presentationId: string;
  sectionIndex: number;
  slideIndex: number;
  isHub: boolean;
  activeTool?: 'brief' | 'plan';
}

export function usePresentationRouter() {
  const presentations = getAllPresentations();

  // Helper to parse path from pathname or hash
  const parseCurrentPath = useCallback((): RouteState => {
    // Check both pathname and hash (for static host compatibility)
    let path = window.location.pathname;
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      path = window.location.hash.slice(1);
    }

    const cleanPath = path.replace(/^\/|\/$/g, '');
    const segments = cleanPath ? cleanPath.split('/') : [];

    // Root route '/' or '/hub': Show all presentations
    if (segments.length === 0 || segments[0] === 'hub' || segments[0] === 'catalogo') {
      return {
        presentationId: getDefaultPresentation().id,
        sectionIndex: 0,
        slideIndex: 0,
        isHub: true,
      };
    }

    const presId = segments[0];
    const pres = presentations.find((p) => p.id === presId) || getDefaultPresentation();

    let secIndex = 0;
    let slideIdx = 0;
    let tool: 'brief' | 'plan' | undefined = undefined;

    if (segments.length > 1) {
      const secondSegment = segments[1];
      if (secondSegment === 'brief') {
        tool = 'brief';
      } else if (secondSegment === 'plan') {
        tool = 'plan';
      } else {
        // Try to match section id or index
        const foundSecIdx = pres.sections.findIndex(
          (s, idx) => s.id === secondSegment || `clase-${idx}` === secondSegment || `seccion-${idx}` === secondSegment
        );
        if (foundSecIdx !== -1) {
          secIndex = foundSecIdx;
        } else {
          // If numeric
          const parsed = parseInt(secondSegment, 10);
          if (!isNaN(parsed) && parsed >= 0 && parsed < pres.sections.length) {
            secIndex = parsed;
          }
        }
      }
    }

    if (segments.length > 2) {
      const thirdSegment = segments[2];
      if (thirdSegment === 'brief') {
        tool = 'brief';
      } else if (thirdSegment === 'plan') {
        tool = 'plan';
      } else {
        const parsedSlide = parseInt(thirdSegment, 10);
        if (!isNaN(parsedSlide) && parsedSlide >= 1) {
          slideIdx = parsedSlide - 1; // 1-indexed to 0-indexed
        }
      }
    }

    const targetSection = pres.sections[secIndex] || pres.sections[0];
    const clampedSlideIndex = Math.min(Math.max(0, slideIdx), Math.max(0, targetSection.slides.length - 1));

    return {
      presentationId: pres.id,
      sectionIndex: secIndex,
      slideIndex: clampedSlideIndex,
      isHub: false,
      activeTool: tool,
    };
  }, [presentations]);

  const [route, setRouteState] = useState<RouteState>(parseCurrentPath);

  // Sync state to URL
  const updateUrl = useCallback((newRoute: RouteState, replace = false) => {
    let url = '/';
    if (newRoute.isHub) {
      url = '/hub';
    } else {
      const pres = presentations.find((p) => p.id === newRoute.presentationId) || getDefaultPresentation();
      const sec = pres.sections[newRoute.sectionIndex] || pres.sections[0];
      const slideNum = newRoute.slideIndex + 1;

      url = `/${pres.id}/${sec.id}/${slideNum}`;
      if (newRoute.activeTool) {
        url += `/${newRoute.activeTool}`;
      }
    }

    if (replace) {
      window.history.replaceState(null, '', url);
    } else {
      window.history.pushState(null, '', url);
    }
  }, [presentations]);

  // Navigate helper
  const navigateTo = useCallback(
    (presentationId: string, sectionIndex = 0, slideIndex = 0, tool?: 'brief' | 'plan') => {
      const newRoute: RouteState = {
        presentationId,
        sectionIndex,
        slideIndex,
        isHub: false,
        activeTool: tool,
      };
      setRouteState(newRoute);
      updateUrl(newRoute, false);
    },
    [updateUrl]
  );

  const navigateToSlide = useCallback(
    (slideIndex: number) => {
      setRouteState((prev) => {
        const next = { ...prev, slideIndex, isHub: false };
        updateUrl(next, true); // replace url for smooth slide navigation
        return next;
      });
    },
    [updateUrl]
  );

  const navigateToSection = useCallback(
    (sectionIndex: number) => {
      setRouteState((prev) => {
        const next = { ...prev, sectionIndex, slideIndex: 0, isHub: false };
        updateUrl(next, false);
        return next;
      });
    },
    [updateUrl]
  );

  const navigateToPresentation = useCallback(
    (p: Presentation) => {
      navigateTo(p.id, 0, 0);
    },
    [navigateTo]
  );

  const navigateToHub = useCallback(() => {
    const newRoute: RouteState = {
      presentationId: getDefaultPresentation().id,
      sectionIndex: 0,
      slideIndex: 0,
      isHub: true,
    };
    setRouteState(newRoute);
    updateUrl(newRoute, false);
  }, [updateUrl]);

  // Listen to popstate (browser back/forward button)
  useEffect(() => {
    const handlePopState = () => {
      setRouteState(parseCurrentPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parseCurrentPath]);

  // Current presentation object
  const currentPresentation =
    presentations.find((p) => p.id === route.presentationId) || getDefaultPresentation();

  return {
    route,
    currentPresentation,
    currentSectionIndex: route.sectionIndex,
    slideIndex: route.slideIndex,
    isHub: route.isHub,
    activeTool: route.activeTool,
    navigateTo,
    navigateToSlide,
    navigateToSection,
    navigateToPresentation,
    navigateToHub,
  };
}
