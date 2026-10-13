'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '@/data/wedding';

const SLIDE_CONFIG: Record<number, { objectPosition: string; scale?: number }> = {
  0: { objectPosition: 'center 56%' }, // Slide 1: Kedarnath Temple - Couple walking front & center
  1: { objectPosition: 'center 26%' }, // Slide 2: Sunset Beach - Couple eye-level walking
  2: { objectPosition: 'center 40%' }, // Slide 3: Lavender Field - Couple centered
  3: { objectPosition: 'center 76%' }, // Slide 4: Waterfall - Couple embracing at base of falls
};

export default function LocationFrame() {
  const [currentStoryIdx, setCurrentStoryIdx] = useState(0);

  // Preload slides for smooth instant transitions
  useEffect(() => {
    weddingData.coupleStory.slides.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Story slider auto swap interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStoryIdx((prev) => (prev + 1) % weddingData.coupleStory.slides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentStoryIdx((prev) => (prev + 1) % weddingData.coupleStory.slides.length);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Elaborate Golden Ornamental Frame Component (Fluid Responsive Aspect Ratio 1492:1998) */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleNextSlide}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleNextSlide();
          }
        }}
        className="gsap-gold-frame relative w-[clamp(188px,32vw,560px)] aspect-[1492/1998] mx-auto flex items-center justify-center transition-transform cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42] rounded-lg"
        title="Tap to change photo"
        aria-label="Tap or press Enter to change photo"
      >
        {/* Layer 1: Inner Transparent Aperture Content (Seamlessly tucked under golden frame bevel) */}
        <div className="absolute top-[14.5%] left-[14.2%] w-[71.6%] h-[72.8%] overflow-hidden bg-[#18110B] shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] z-10 rounded-[2px]">
          <AnimatePresence>
            <motion.div
              key={currentStoryIdx}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={weddingData.coupleStory.slides[currentStoryIdx]}
                alt="Couple Memory"
                className="w-full h-full object-cover select-none pointer-events-none"
                style={{
                  objectPosition: SLIDE_CONFIG[currentStoryIdx]?.objectPosition || 'center center',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Layer 2: Elaborate Golden Ornamental Frame PNG (Foreground Overlay) */}
        <img
          src="/invitation/page5_golden_frame_portrait.png"
          alt="Gold ornate location frame overlay"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.4)] select-none z-20"
        />
      </div>
    </div>
  );
}

