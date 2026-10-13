'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingData } from '@/data/wedding';

// Refined 4-Point Celestial Star Corner Ornament (Dual-tone Gold & Royal Blue)
function CornerStar({
  color = '#C99A42',
  centerColor = '#123B86',
  className,
}: {
  color?: string;
  centerColor?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-4 h-4 sm:w-[18px] sm:h-[18px] pointer-events-none select-none drop-shadow-xs ${className || ''}`}
      aria-hidden="true"
    >
      {/* 4-point sparkle star */}
      <path
        d="M12 0 C12 6.6 6.6 12 0 12 C6.6 12 12 17.4 12 24 C12 17.4 17.4 12 24 12 C17.4 12 12 6.6 12 0 Z"
        fill={color}
      />
      {/* Contrasting center jewel dot */}
      <circle cx="12" cy="12" r="2.2" fill={centerColor} />
    </svg>
  );
}

function CalendarIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#123B86" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#123B86" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LocationPinIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#123B86" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

interface EventCarouselProps {
  initialIdx?: number;
}

export default function EventCarousel({ initialIdx = 0 }: EventCarouselProps) {
  const [currentEventIdx, setCurrentEventIdx] = useState(initialIdx);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const eventTouchStartX = useRef<number | null>(null);

  const nextEvent = () => {
    setSlideDirection('next');
    setCurrentEventIdx((prev) => (prev === weddingData.events.length - 1 ? 0 : prev + 1));
  };

  const prevEvent = () => {
    setSlideDirection('prev');
    setCurrentEventIdx((prev) => (prev === 0 ? weddingData.events.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    eventTouchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (eventTouchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - eventTouchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        nextEvent();
      } else {
        prevEvent();
      }
    }
    eventTouchStartX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevEvent();
      } else if (e.key === 'ArrowRight') {
        nextEvent();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeEvent = weddingData.events[currentEventIdx];

  return (
    <section
      id="page-3"
      className="relative w-full min-h-[100svh] py-10 sm:py-14 md:py-20 px-3 sm:px-6 md:px-12 select-none flex items-center justify-center bg-[#FAF6EE]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Wedding Celebrations Carousel"
    >
      {/* 1. OUTER BACKGROUND: Soft Illustrated Traditional Indian Pattern */}
      <img
        src="/theartfulinvites/page3_bg.webp"
        alt="Wedding Event Celebrations Background Artwork"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-95"
      />

      {/* 2. REFINED EVENT PANEL: Antique Gold subtle outer rim + Inner Gold border with Corner Sparkle Stars */}
      <div className="relative z-10 w-full max-w-[1060px] rounded-[24px] sm:rounded-[28px] border-[1.5px] border-[#C99A42]/45 p-1 sm:p-1.5 bg-[#FFFCF5] shadow-[0_8px_24px_rgba(45,35,20,0.08)]">

        {/* Inner Gold Accent Line with Generous Padding */}
        <div className="relative w-full rounded-[18px] sm:rounded-[22px] border border-[#C99A42]/70 bg-[#FFFCF5] px-4 pt-4 pb-10 sm:px-6 sm:pt-6 sm:pb-8 md:p-8">

          {/* 4-Corner Sparkle Stars matching reference image */}
          {/* Top-Left: Gold star with blue center */}
          <CornerStar color="#C99A42" centerColor="#123B86" className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3" />
          {/* Top-Right: Royal Blue star with gold center */}
          <CornerStar color="#123B86" centerColor="#C99A42" className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3" />
          {/* Bottom-Left: Royal Blue star with gold center */}
          <CornerStar color="#123B86" centerColor="#C99A42" className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3" />
          {/* Bottom-Right: Gold star with blue center */}
          <CornerStar color="#C99A42" centerColor="#123B86" className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3" />

          {/* Eyebrow Label: Krishna & Radha in Royal Blue (#123B86) */}
          <div className="mb-3 sm:mb-4 pl-0.5 sm:pl-1">
            <span className="text-[#123B86] font-medium text-[13.5px] sm:text-[14.5px] tracking-wide font-sans">
              Krishna &amp; Radha
            </span>
          </div>

          {/* MAIN TWO-COLUMN COMPOSITION: Left (Photo Carousel) & Right (Details) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-7 md:gap-8 lg:gap-[34px] items-center">

            {/* 4. LEFT COLUMN: Clean Photograph Frame with Gold border accents */}
            <div className="md:col-span-5 lg:col-span-5 w-full">
              <div className="relative w-full rounded-[20px] border border-[#C99A42]/40 p-[2.5px] bg-[#FFFDF8] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                <div className="relative w-full rounded-[16px] border border-[#C99A42]/75 overflow-hidden bg-[#FAF6EE] aspect-[5/4] xs:aspect-[4/3] sm:aspect-[4/5]">

                  {/* Photo with Smooth Cross-fade Animation */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeEvent.id}
                      src={activeEvent.image}
                      alt={activeEvent.title}
                      initial={{ opacity: 0, x: slideDirection === 'next' ? 24 : -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: slideDirection === 'next' ? -24 : 24 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Carousel Controls Positioned Cleanly Inside Photo Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-auto z-20">
                    {/* Bottom-Left: Circular Previous & Next Buttons with 40px touch targets */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevEvent}
                        aria-label="Previous event celebration"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-[#123B86] border border-[#C99A42]/40 shadow-sm flex items-center justify-center active:scale-90 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42]"
                      >
                        <ChevronLeft size={18} strokeWidth={2.4} />
                      </button>
                      <button
                        onClick={nextEvent}
                        aria-label="Next event celebration"
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-[#123B86] border border-[#C99A42]/40 shadow-sm flex items-center justify-center active:scale-90 hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42]"
                      >
                        <ChevronRight size={18} strokeWidth={2.4} />
                      </button>
                    </div>

                    {/* Bottom-Right: Slide Pagination Indicators */}
                    <div className="flex items-center gap-1.5 bg-white/85 backdrop-blur-xs px-2.5 py-1.5 rounded-full border border-[#C99A42]/30 shadow-xs">
                      {weddingData.events.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSlideDirection(idx > currentEventIdx ? 'next' : 'prev');
                            setCurrentEventIdx(idx);
                          }}
                          aria-label={`Go to slide ${idx + 1}`}
                          className={`rounded-full transition-all duration-300 ${currentEventIdx === idx
                              ? 'w-2.5 h-2.5 bg-[#123B86]'
                              : 'w-2 h-2 bg-[#C99A42]/40 hover:bg-[#C99A42]'
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 5. RIGHT COLUMN: Elegant Serif Heading & Refined Event Details */}
            <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center text-left py-1 sm:py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvent.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex flex-col items-start w-full"
                >
                  {/* Event Title: Elegant Serif Heading (#392D21) */}
                  <h2 className="font-serif text-[#392D21] font-bold text-[clamp(26px,6vw,34px)] md:text-[clamp(30px,2.6vw,42px)] leading-[1.15] tracking-[-0.01em] mb-[12px]">
                    {activeEvent.title}
                  </h2>

                  {/* Horizontal Metadata Row: Date • Time • Venue */}
                  <div className="flex flex-wrap items-center gap-x-[16px] sm:gap-x-[20px] gap-y-[8px] text-[13.5px] sm:text-[14px] md:text-[14.5px] text-[#665B4E] font-medium leading-[1.5]">
                    {/* Date */}
                    <div className="inline-flex items-center gap-2">
                      <CalendarIcon size={16} />
                      <span>{activeEvent.date}</span>
                    </div>

                    {/* Time */}
                    <div className="inline-flex items-center gap-2">
                      <ClockIcon size={16} />
                      <span>{activeEvent.time}</span>
                    </div>

                    {/* Venue */}
                    <div className="inline-flex items-center gap-2 uppercase font-semibold text-[#392D21]">
                      <LocationPinIcon size={16} />
                      <span>{activeEvent.venue}</span>
                    </div>
                  </div>

                  {/* 6. Event Description: #665B4E, 14.5-15px, 1.6 line-height, max-width ~520px */}
                  <p className="text-[#665B4E] text-[14px] sm:text-[14.5px] md:text-[15px] leading-[1.62] max-w-[520px] mt-[14px]">
                    {activeEvent.description}
                  </p>

                  {/* 7. View Location Button: Standardized 44px min-height, royal blue, gold border, white text */}
                  <div className="mt-[20px] sm:mt-[22px] mb-2.5 sm:mb-0">
                    <a
                      href={activeEvent.mapLink || activeEvent.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-full bg-[#123B86] hover:bg-[#0E2F6C] text-white text-[14px] font-medium font-sans tracking-wide leading-none border border-[#C99A42] shadow-[0_2px_8px_rgba(18,59,134,0.25)] transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(18,59,134,0.35)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42] focus-visible:ring-offset-2"
                    >
                      View Location
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

