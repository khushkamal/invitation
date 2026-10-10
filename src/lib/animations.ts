'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Safely register GSAP plugins on client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AnimationOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  duration?: number;
  delay?: number;
  ease?: string;
}

/**
 * 1. FADE REVEAL
 * Smooth opacity & subtle vertical translation reveal
 */
export function fadeReveal(
  target: string | HTMLElement,
  options: AnimationOptions & { y?: number; x?: number; opacityFrom?: number } = {}
) {
  if (typeof window === 'undefined') return;

  const {
    trigger = target,
    start = 'top 85%',
    end = 'bottom 60%',
    scrub = false,
    duration = 1.2,
    delay = 0,
    ease = 'power2.out',
    y = 35,
    x = 0,
    opacityFrom = 0
  } = options;

  return gsap.fromTo(
    target,
    { opacity: opacityFrom, y, x },
    {
      opacity: 1,
      y: 0,
      x: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
        toggleActions: scrub ? undefined : 'play none none reverse'
      }
    }
  );
}

/**
 * 2. CLIP-PATH REVEAL
 * Architectural and frame unmasking reveal
 */
export function clipPathReveal(
  target: string | HTMLElement,
  options: AnimationOptions & { direction?: 'up' | 'down' | 'left' | 'right' | 'circle' } = {}
) {
  if (typeof window === 'undefined') return;

  const {
    trigger = target,
    start = 'top 80%',
    end = 'bottom 60%',
    duration = 1.4,
    ease = 'power3.inOut',
    direction = 'up'
  } = options;

  let initialClip = 'inset(100% 0% 0% 0%)';
  if (direction === 'down') initialClip = 'inset(0% 0% 100% 0%)';
  if (direction === 'left') initialClip = 'inset(0% 100% 0% 0%)';
  if (direction === 'right') initialClip = 'inset(0% 0% 0% 100%)';
  if (direction === 'circle') initialClip = 'circle(0% at 50% 50%)';

  const finalClip = direction === 'circle' ? 'circle(75% at 50% 50%)' : 'inset(0% 0% 0% 0%)';

  return gsap.fromTo(
    target,
    { clipPath: initialClip, webkitClipPath: initialClip },
    {
      clipPath: finalClip,
      webkitClipPath: finalClip,
      duration,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none reverse'
      }
    }
  );
}

/**
 * 3. IMAGE MASK REVEAL
 * Subtle zoom-out on reveal for editorial paintings and photographs
 */
export function imageMaskReveal(
  target: string | HTMLElement,
  options: AnimationOptions & { scaleFrom?: number } = {}
) {
  if (typeof window === 'undefined') return;

  const {
    trigger = target,
    start = 'top 85%',
    duration = 1.6,
    scaleFrom = 1.15,
    ease = 'power2.out'
  } = options;

  return gsap.fromTo(
    target,
    { scale: scaleFrom, opacity: 0.4 },
    {
      scale: 1,
      opacity: 1,
      duration,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none reverse'
      }
    }
  );
}

/**
 * 4. PARALLAX
 * Multi-plane scroll translation
 */
export function parallax(
  target: string | HTMLElement,
  options: AnimationOptions & { speed?: number; yPercent?: number } = {}
) {
  if (typeof window === 'undefined') return;

  const {
    trigger = target,
    start = 'top bottom',
    end = 'bottom top',
    scrub = 1,
    yPercent = -20
  } = options;

  return gsap.to(target, {
    yPercent,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub
    }
  });
}

/**
 * 5. STAGGER TEXT REVEAL
 * Editorial typography sequential entrance
 */
export function staggerText(
  targets: string | HTMLElement | HTMLElement[],
  options: AnimationOptions & { stagger?: number; y?: number } = {}
) {
  if (typeof window === 'undefined') return;

  const {
    trigger = targets as any,
    start = 'top 85%',
    stagger = 0.08,
    duration = 1.0,
    ease = 'power3.out',
    y = 25
  } = options;

  return gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      stagger,
      duration,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none reverse'
      }
    }
  );
}

/**
 * 6. DECORATIVE LINE & BORDER REVEAL
 * Flourishes, dividers, and ornamental borders drawing in
 */
export function decorativeLineReveal(
  target: string | HTMLElement,
  options: AnimationOptions & { origin?: string } = {}
) {
  if (typeof window === 'undefined') return;

  const {
    trigger = target,
    start = 'top 88%',
    duration = 1.4,
    ease = 'power2.inOut',
    origin = 'center center'
  } = options;

  return gsap.fromTo(
    target,
    { scaleX: 0, transformOrigin: origin, opacity: 0 },
    {
      scaleX: 1,
      opacity: 1,
      duration,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none reverse'
      }
    }
  );
}

/**
 * 7. ARCHITECTURAL DEPTH MOVEMENT
 * Moves background (slow), midground (moderate), foreground (faster)
 */
export function architecturalMovement(
  elements: {
    bg?: string | HTMLElement;
    mid?: string | HTMLElement;
    fg?: string | HTMLElement;
  },
  trigger: string | HTMLElement
) {
  if (typeof window === 'undefined') return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2
    }
  });

  if (elements.bg) {
    tl.to(elements.bg, { yPercent: -10, ease: 'none' }, 0);
  }
  if (elements.mid) {
    tl.to(elements.mid, { yPercent: -25, ease: 'none' }, 0);
  }
  if (elements.fg) {
    tl.to(elements.fg, { yPercent: -45, ease: 'none' }, 0);
  }

  return tl;
}

/**
 * 8. GSAP CONTEXT HELPER FOR REACT
 * Guarantees proper animation cleanup in React 18/19 & Next.js App Router
 */
export function createGsapContext(
  func: gsap.ContextFunc,
  scope?: string | object | Element | null
): gsap.Context {
  gsap.registerPlugin(ScrollTrigger);
  return gsap.context(func, scope || undefined);
}

/**
 * 9. GLOBAL CLEANUP
 */
export function cleanupGsap() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

