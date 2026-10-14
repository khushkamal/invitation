'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingData } from '@/data/wedding';

// Modular Architecture Components (Requirement 16)
import OpeningExperience from './OpeningExperience';
import HeroScene from './HeroScene';
import InvitationScene from './InvitationScene';
import EventCarousel from './EventCarousel';
import WeddingStory from './WeddingStory';
import LocationFrame from './LocationFrame';
import RSVPSection from './RSVPSection';
import FinalTempleScene from './FinalTempleScene';

const CRITICAL_ASSETS = [
  '/invitation/page1_sky.webp',
  '/invitation/page1_temple.webp',
  '/invitation/page1_tree.webp',
  '/invitation/page2_bg.webp',
  '/invitation/page2_ganesh.webp',
  '/invitation/page3_bg.webp',
  '/invitation/event_haldi.png',
  '/invitation/event_mehendi.webp',
  '/invitation/event_sangeet.webp',
  '/invitation/event_wedding.webp',
  '/invitation/event_reception.webp',
  '/invitation/page4_sky.webp',
  '/invitation/page4_cloud.webp',
  '/invitation/page4_temple.webp',
  '/invitation/page4_couple_cutout.webp',
  '/invitation/page5_bg.webp',
  '/invitation/page5_golden_frame_portrait.png',
  '/invitation/page5_slide1.jpeg',
  '/invitation/page5_slide2.jpeg',
  '/invitation/page5_slide3.jpeg',
  '/invitation/page5_slide4.jpeg',
  '/invitation/page6_bg.webp',
  '/invitation/final_scene_temple_landscape.png',
  '/invitation/magic1.webp',
  '/invitation/magic2.webp',
  '/invitation/magic3.webp',
  '/invitation/magic4.webp',
  '/invitation/magic5.webp',
  '/invitation/magic6.webp',
];

export default function FramerWeddingInvite() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Royal Seal / Opening Experience modal opens first on start
  const [isIntroOpen, setIsIntroOpen] = useState(true);

  // Aggressive Background Asset Preload & Memory Cache Optimization
  useEffect(() => {
    CRITICAL_ASSETS.forEach((src) => {
      const img = new Image();
      img.src = src;
      if ('decode' in img) {
        img.decode().catch(() => {});
      }
    });
  }, []);

  const toggleAudio = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
    }
  };

  const handleIntroEnter = (withAudio: boolean) => {
    setIsIntroOpen(false);
    if (withAudio && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
    }
  };

  // GSAP & Lenis Smooth Scroll Integration with strict context cleanup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
      infinite: false,
    });

    if (isIntroOpen) {
      lenis.stop();
    } else {
      lenis.start();
      ScrollTrigger.refresh();
    }

    lenis.on('scroll', ScrollTrigger.update);

    const rafTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafTicker);
    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isReducedMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

      if (isReducedMotion) {
        gsap.set('.gsap-p1-temple', { yPercent: 0, scale: 1, opacity: 1 });
        gsap.set('.gsap-p1-tree', { yPercent: 0, scale: 1, opacity: 1 });
        gsap.set('.gsap-p1-text', { opacity: 1, y: 0 });
        gsap.set('.gsap-p4-sky', { yPercent: 0, scale: 1 });
        gsap.set('.gsap-p4-pan-container', { y: 0 });
        gsap.set('.gsap-p4-couple-wrap', { yPercent: 0, opacity: 1 });
        gsap.set('.gsap-p4-couple', { scale: 1, opacity: 1 });
        return;
      }

      // 1. Page 1 Opening entrance (Bride & Groom typography reveals)
      if (!isIntroOpen) {
        gsap.fromTo(
          '.gsap-p1-title',
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.18,
            ease: 'power3.out',
          }
        );
      }

      // 2. Continuous horizontal drifting clouds (Page 1)
      gsap.to('.gsap-cloud-1', {
        x: 45,
        y: -10,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.gsap-cloud-2', {
        x: -50,
        y: 12,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.gsap-cloud-3', {
        x: 40,
        y: -8,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Page 4 Continuous Non-stop Left-Right Floating Clouds
      gsap.to('.gsap-p4-cloud-1', {
        x: 60,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.gsap-p4-cloud-2', {
        x: -55,
        duration: 13,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.gsap-p4-cloud-3', {
        x: 50,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // 3. MASTER SCROLL-DRIVEN HERO & TEMPLE CINEMATIC TIMELINE (Page 1)
      // Initial states: Temple & trees start below the fold, 100% opaque so they physically cover text as they rise
      gsap.set('.gsap-p1-temple, .gsap-p1-tree', { yPercent: 105, scale: 1.0, opacity: 1 });

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#page-1',
          start: 'top top',
          end: '+=240%',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // A. Layer 3: Typography Behind Temple (Maintains visibility and gently drifts as temple covers it)
      // The temple at z-[4] physically rises and progressively occludes this text at z-[3]
      heroTimeline.to(
        '.gsap-p1-text',
        {
          y: -70,
          scale: 0.96,
          ease: 'none',
        },
        0
      );


      // B. Layer 1: Sky Background slow majestic pan
      heroTimeline.to(
        '.gsap-p1-sky',
        {
          yPercent: 8,
          scale: 1.04,
          ease: 'none',
        },
        0
      );

      // C. Layer 4 & 5: SCENE 3 — TEMPLE & BOTANICAL TREES RISE IN SYNC (Physical Occlusion Illusion)
      // Temple at z-[4] and Trees at z-[5] move upward from below screen and cover the text at z-[3]
      heroTimeline.to(
        '.gsap-p1-temple, .gsap-p1-tree',
        {
          yPercent: 0,
          scale: 1.0,
          ease: 'power1.out',
        },
        0
      );

      // 4. Page 2 Ganesha reveal & family invitation typography entrances
      gsap.fromTo(
        '.gsap-p2-ganesh',
        { scale: 0.78, opacity: 0, y: 35 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#page-2',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 5. COORDINATED SCRUB-LINKED TIMELINE (Phases 1-4)
      // Initial states:
      // Full-width panoramic container starts at top (y: 0), revealing majestic temple spires & sky first
      gsap.set('.gsap-p4-pan-container', { y: 0 });
      // Bride and groom start slightly elevated above (-15%), descending when temple reaches half frame
      gsap.set('.gsap-p4-couple-wrap', { yPercent: -15, opacity: 1 });
      gsap.set('.gsap-p4-couple', { scale: 0.52, transformOrigin: 'center 48%', opacity: 1 });

      // Coordinated scrub-linked timeline: Pinned for generous scrolling space
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const p4Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#page-4',
          start: 'top top',
          end: isMobile ? '+=180%' : '+=380%',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. PHASE 1 — CLOUD HORIZONTAL MOVEMENT & SKY PARALLAX (Continuous throughout scroll)
      p4Timeline.to(
        '.gsap-p4-cloud-layer',
        {
          x: '20vw',
          duration: 1.0,
          ease: 'none',
        },
        0
      );

      // Light-blue sky subtle atmospheric zoom
      p4Timeline.to(
        '.gsap-p4-sky',
        {
          yPercent: -6,
          scale: 1.06,
          duration: 1.0,
          ease: 'none',
        },
        0
      );

      // 2 & 4. PANORAMIC VERTICAL PAN (Starts immediately from the first scroll pixel)
      p4Timeline.to(
        '.gsap-p4-pan-container',
        {
          y: () => {
            const el = document.querySelector('.gsap-p4-pan-container') as HTMLElement | null;
            if (!el) return 0;
            const diff = el.offsetTop + el.offsetHeight - window.innerHeight;
            return diff > 0 ? -diff : 0;
          },
          duration: 1.0,
          ease: 'none',
        },
        0
      );

      // 3. PHASE 3 — WHEN TEMPLE REACHES HALF FRAME, COUPLE DESCENDS DOWN (100% Solid Opaque)
      // As user scrolls and temple reaches half of the frame, bride & groom smoothly descend down into the doorway
      p4Timeline.fromTo(
        '.gsap-p4-couple-wrap',
        {
          yPercent: -15,
          opacity: 1,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.30,
          ease: 'power2.out',
        },
        0.38
      );

      // Scale settles gently into compact, elegant foreground size (57% proportion matching reference)
      p4Timeline.fromTo(
        '.gsap-p4-couple',
        {
          scale: 0.52,
          transformOrigin: 'center 48%',
        },
        {
          scale: 0.57,
          transformOrigin: 'center 48%',
          duration: 0.30,
          ease: 'power1.out',
        },
        0.38
      );


      // 6. Page 5 Golden Frame soft scale & reveal
      gsap.fromTo(
        '.gsap-gold-frame',
        { scale: 0.94, y: 25, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#page-5',
            start: 'top 75%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );



      // 9. General Scroll-Triggered Typography & Section reveals
      const reveals = gsap.utils.toArray<HTMLElement>('.gsap-reveal');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, mainRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(rafTicker);
      lenis.destroy();
    };
  }, [isIntroOpen]);

  return (
    <div className="min-h-screen w-full bg-[#FAF5EB] selection:bg-[#580B1A] selection:text-white relative overflow-x-hidden">
      {/* Audio element with loop */}
      <audio ref={audioRef} src="/music/wedding.mp3" loop preload="auto" />

      {/* Opening Envelope Modal ("Touch here for magic") */}
      <OpeningExperience
        isOpen={isIntroOpen}
        onEnter={handleIntroEnter}
        onClose={() => setIsIntroOpen(false)}
        onReopen={() => setIsIntroOpen(true)}
      />

      {/* Floating Audio Controller (Bottom-Left as in Framer template) */}
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause Wedding Music' : 'Play Wedding Music'}
        className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 flex items-center min-h-[44px] bg-[#FFFCF5]/95 backdrop-blur-md rounded-full p-1 pr-3.5 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all group border border-[#C99A42]/55 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42] focus-visible:ring-offset-2"
      >
        <div className="w-10 h-10 rounded-full bg-[#C99A42] flex items-center justify-center text-white shadow-md group-hover:bg-[#B58835] transition-colors">
          {isPlaying ? (
            <span className="text-xs font-bold tracking-tighter flex items-center gap-0.5" aria-hidden="true">
              <span className="w-1 h-3.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1 h-3.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            </span>
          ) : (
            <svg className="w-4 h-4 translate-x-0.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
        <span className="text-[#665B4E] text-xs font-mono ml-2 font-bold group-hover:text-[#392D21] transition-colors">&lt;</span>
      </button>

      {/* Main Full-Screen Cinematic Container */}
      <main ref={mainRef} className="w-full relative z-10">

        {/* PAGE 1: Hero Cover Sky, Temple, Tree, KIRAN WEDS RAHUL (100vw x 100svh) */}
        <HeroScene />

        {/* PAGE 2: Sacred Ganesha Blessing & Formal Family Invitation */}
        <InvitationScene />

        {/* PAGE 3: Wedding Event Celebrations Card Carousel */}
        <EventCarousel />

        {/* PAGE 4: Celestial Meenakshi Temple Cinematic Sequence (Phase 1 & Phase 2) */}
        <section
          id="page-4"
          className="relative w-full h-[100svh] min-h-[100svh] overflow-hidden select-none bg-[#79bbf7] flex items-center justify-center"
        >
          {/* 1. BACKGROUND LAYER: Full-Screen Light-Blue Sky (Continuous throughout) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <img
              src="/invitation/page4_sky.webp"
              alt="Light-Blue Sky Background"
              className="gsap-p4-sky absolute inset-0 w-full h-[115%] object-cover pointer-events-none -top-[7%] will-change-transform"
            />
          </div>

          {/* 2. MIDDLE LAYER: Ivory Cloud Artwork (Scrub-driven horizontal movement) */}
          <div className="gsap-p4-cloud-layer absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden will-change-transform">
            {/* Cloud 1: Upper Left Prominent Cloud */}
            <div className="gsap-p4-cloud-1 absolute top-[4%] sm:top-[6%] -left-[8%] sm:-left-[4%] w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-[50vw] aspect-[1185/1032] will-change-transform pointer-events-none select-none">
              <img
                src="/invitation/page4_cloud.webp"
                alt="Ivory Cloud 1"
                className="w-full h-full object-contain pointer-events-none select-none opacity-95 drop-shadow-sm"
              />
            </div>
            {/* Cloud 2: Mid-Upper Drifting Cloud */}
            <div className="gsap-p4-cloud-2 absolute top-[16%] sm:top-[14%] left-[28%] sm:left-[32%] w-[220px] sm:w-[320px] md:w-[420px] lg:w-[500px] max-w-[42vw] aspect-[1185/1032] will-change-transform pointer-events-none select-none">
              <img
                src="/invitation/page4_cloud.webp"
                alt="Ivory Cloud 2"
                className="w-full h-full object-contain pointer-events-none select-none opacity-90 drop-shadow-sm"
              />
            </div>
            {/* Cloud 3: Ambient Soft Cloud */}
            <div className="gsap-p4-cloud-3 absolute top-[30%] sm:top-[26%] left-[4%] sm:left-[8%] w-[190px] sm:w-[270px] md:w-[350px] lg:w-[420px] max-w-[35vw] aspect-[1185/1032] opacity-75 will-change-transform pointer-events-none select-none">
              <img
                src="/invitation/page4_cloud.webp"
                alt="Ivory Cloud 3"
                className="w-full h-full object-contain pointer-events-none select-none"
              />
            </div>
          </div>

          {/* 3 & 4. PANORAMIC TEMPLE & FOREGROUND BRIDE/GROOM FULL-WIDTH CONTAINER */}
          {/* Full-width container positioned lower in frame with generous sky breathing room above */}
          <div className="gsap-p4-pan-container absolute top-[12svh] sm:top-[20svh] left-1/2 -translate-x-1/2 w-[112%] sm:w-full max-w-none aspect-[1872/3344] pointer-events-none z-20 will-change-transform">

            {/* Layer 3: Colorful South Indian Meenakshi-style Temple (z-20) */}
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <img
                src="/invitation/page4_temple.webp"
                alt="Colorful South Indian Meenakshi-style Temple"
                className="gsap-p4-temple w-full h-full object-contain pointer-events-none"
              />
            </div>

            {/* Layer 4: Foreground Bride and Groom Illustration (Framed naturally in temple doorway) */}
            <div className="gsap-p4-couple-wrap absolute top-[12%] left-0 w-full h-full z-30 pointer-events-none will-change-transform opacity-100">
              <img
                src="/invitation/page4_couple_cutout.webp"
                alt="Bride and Groom Cutout"
                className="gsap-p4-couple w-full h-full object-contain pointer-events-none drop-shadow-[0_8px_25px_rgba(0,0,0,0.32)] will-change-transform opacity-100"
              />
            </div>

          </div>
        </section>

        {/* PAGE 5: Our Story & Golden Frame Photo Slider */}
        <section
          id="page-5"
          className="relative w-full overflow-hidden select-none bg-[#590D20] aspect-[2048/3072]"
        >
          <img
            src="/invitation/page5_bg.webp"
            alt="Our Story Background"
            decoding="auto"
            loading="lazy"
            width={2048}
            height={3072}
            sizes="(min-width: 1920px) calc(100vw * 1.0017), (min-width: 1440px) and (max-width: 1919.98px) calc(100vw * 1.0017), (min-width: 1200px) and (max-width: 1439.98px) calc(100vw * 1.0017), (min-width: 810px) and (max-width: 1199.98px) calc(100vw * 1.0017), (max-width: 809.98px) calc(100vw * 1.0017)"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />

          <WeddingStory />

          <div className="absolute top-[35.0%] sm:top-[36.0%] left-1/2 -translate-x-1/2 pointer-events-auto z-20">
            <LocationFrame />
          </div>
        </section>


        {/* PAGE 6: RSVP "Will You Join Us?" with WhatsApp Link */}
        <RSVPSection />

        {/* PAGE 7: Final Scenic Temple Landscape, Countdown & Social Branding */}
        <FinalTempleScene />

      </main>
    </div>
  );
}
