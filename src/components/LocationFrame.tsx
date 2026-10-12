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
  const [goldFrameMode, setGoldFrameMode] = useState<'photos' | 'location'>('photos');
  const [currentStoryIdx, setCurrentStoryIdx] = useState(0);

  // Story slider auto interval
  useEffect(() => {
    if (goldFrameMode !== 'photos') return;
    const timer = setInterval(() => {
      setCurrentStoryIdx((prev) => (prev + 1) % weddingData.coupleStory.slides.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [goldFrameMode]);

  return (
    <div className="flex flex-col items-center">
      {/* Elaborate Golden Ornamental Frame Component (Fluid Responsive Aspect Ratio 1492:1998) */}
      <div className="gsap-gold-frame relative w-[clamp(188px,32vw,560px)] aspect-[1492/1998] mx-auto flex items-center justify-center transition-transform">
        {/* Layer 1: Inner Transparent Aperture Content (Seamlessly tucked under golden frame bevel) */}
        <div className="absolute top-[14.5%] left-[14.2%] w-[71.6%] h-[72.8%] overflow-hidden bg-[#18110B] shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] z-10 flex flex-col justify-between rounded-[2px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStoryIdx}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="relative w-full h-full"
            >
              <img
                src={weddingData.coupleStory.slides[currentStoryIdx]}
                alt="Couple Memory"
                className="w-full h-full object-cover transition-all duration-700"
                style={{
                  objectPosition: SLIDE_CONFIG[currentStoryIdx]?.objectPosition || 'center center',
                }}
              />

              {/* Slide Indicator Dots inside Frame */}
              <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-1.5 z-20">
                {weddingData.coupleStory.slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentStoryIdx(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] ${
                      currentStoryIdx === idx ? 'bg-[#FFEBBB] w-3.5 shadow-sm' : 'bg-white/45 w-1.5'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Layer 2: Elaborate Golden Ornamental Frame PNG (Foreground Overlay) */}
        <img
          src="/theartfulinvites/page5_golden_frame_portrait.png"
          alt="Gold ornate location frame overlay"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_12px_28px_rgba(0,0,0,0.4)] select-none z-20"
        />
      </div>
    </div>
  );
}

