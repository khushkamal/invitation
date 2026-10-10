'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { weddingData } from '@/data/wedding';

function PinIcon({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M12 21C12 21 19 14.5 19 9.8C19 6.1 15.9 3 12 3C8.1 3 5 6.1 5 9.8C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function LocationFrame() {
  const [goldFrameMode, setGoldFrameMode] = useState<'photos' | 'location'>('photos');
  const [currentStoryIdx, setCurrentStoryIdx] = useState(0);

  // Story slider auto interval (only when in photos mode)
  useEffect(() => {
    if (goldFrameMode !== 'photos') return;
    const timer = setInterval(() => {
      setCurrentStoryIdx((prev) => (prev + 1) % weddingData.coupleStory.slides.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [goldFrameMode]);

  return (
    <div className="flex flex-col items-center">
      {/* 3. Elaborate Golden Ornamental Frame Component with Full 320px-1920px+ Scaling */}
      <div className="gsap-gold-frame relative w-[260px] h-[348px] sm:w-[320px] sm:h-[428px] md:w-[360px] md:h-[482px] lg:w-[400px] lg:h-[536px] mx-auto flex items-center justify-center my-auto transition-transform">
        {/* Layer 1: Inner Transparent Aperture Content (Photos or Location Map Composition) */}
        <div className="absolute top-[14.8%] left-[15.5%] w-[68.7%] h-[71.5%] overflow-hidden bg-[#241A15] shadow-inner z-10 flex flex-col justify-between rounded-sm">
          <AnimatePresence mode="wait">
            {goldFrameMode === 'photos' ? (
              <motion.div
                key="photos-mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentStoryIdx}
                    src={weddingData.coupleStory.slides[currentStoryIdx]}
                    alt="Couple Memory"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Slide Indicator Dots inside Frame */}
                <div className="absolute bottom-2.5 inset-x-0 flex justify-center gap-1.5 z-20">
                  {weddingData.coupleStory.slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentStoryIdx(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        currentStoryIdx === idx ? 'bg-[#FFEBBB] w-4' : 'bg-white/40 w-1.5'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="location-mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#F7F2E7]"
              >
                {/* Architectural Engraving Illustration of Taj Hotel Mumbai */}
                <img
                  src="/theartfulinvites/taj_hotel_engraving.jpg"
                  alt="The Taj Mahal Palace Mumbai Architecture"
                  className="w-full h-full object-cover"
                />

                {/* Subtle Royal Vignette & Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-2.5 xs:p-3 text-center text-white z-20">
                  {/* Pulsing Golden Location Pin */}
                  <div className="flex justify-center mb-0.5 xs:mb-1">
                    <span className="relative flex h-4.5 w-4.5 xs:h-5 xs:w-5 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CDAE80] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 xs:h-4 xs:w-4 bg-[#CDAE80] border border-white items-center justify-center shadow-md">
                        <PinIcon size={8} className="text-[#580B1A]" />
                      </span>
                    </span>
                  </div>

                  <p className="font-instrument text-xs xs:text-sm sm:text-base tracking-wider uppercase font-bold text-[#FFEBBB] drop-shadow-sm leading-tight">
                    {weddingData.venue.name}
                  </p>
                  <p className="font-jost text-[8px] xs:text-[9px] sm:text-[10px] text-white/90 tracking-widest uppercase mt-0.5">
                    {weddingData.venue.coordinates}
                  </p>

                  {/* Functioning Interactive Directions Link */}
                  <a
                    href={weddingData.venue.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 xs:mt-2 inline-flex items-center justify-center gap-1.5 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-full bg-[#580B1A]/95 hover:bg-[#580B1A] border border-[#CDAE80]/70 text-white text-[9px] xs:text-[10px] font-jost font-semibold uppercase tracking-wider shadow-lg transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={9} className="text-[#FFEBBB]" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Layer 2: Elaborate Golden Ornamental Frame PNG (Foreground Overlay) */}
        <img
          src="/theartfulinvites/page5_golden_frame_portrait.png"
          alt="Gold ornate location frame overlay"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none drop-shadow-[0_16px_36px_rgba(0,0,0,0.45)] select-none z-20"
        />
      </div>

      {/* Mode Switcher Pill underneath Frame */}
      <div className="gsap-reveal inline-flex items-center gap-0.5 xs:gap-1 p-0.5 xs:p-1 rounded-full bg-[#580B1A]/10 border border-[#CDAE80]/50 backdrop-blur-sm mt-0.5 xs:mt-1 shadow-sm z-20">
        <button
          onClick={() => setGoldFrameMode('photos')}
          className={`px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full text-[9px] xs:text-[10px] font-jost uppercase tracking-wider font-semibold transition-all ${
            goldFrameMode === 'photos'
              ? 'bg-[#580B1A] text-white shadow-sm'
              : 'text-[#580B1A] hover:bg-black/5'
          }`}
        >
          📸 Moments
        </button>
        <button
          onClick={() => setGoldFrameMode('location')}
          className={`px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full text-[9px] xs:text-[10px] font-jost uppercase tracking-wider font-semibold transition-all ${
            goldFrameMode === 'location'
              ? 'bg-[#580B1A] text-white shadow-sm'
              : 'text-[#580B1A] hover:bg-black/5'
          }`}
        >
          📍 Venue &amp; Map
        </button>
      </div>
    </div>
  );
}
