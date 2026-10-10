'use client';

import React from 'react';
import { weddingData } from '@/data/wedding';

export default function WeddingStory() {
  return (
    <div className="text-center space-y-2 max-w-xl mx-auto px-4">
      {/* 1. Header Typography Hierarchy */}
      <div className="gsap-reveal space-y-1">
        <p className="font-jost text-xs sm:text-sm uppercase tracking-[0.24em] text-[#888888] font-semibold">
          {weddingData.coupleStory.sectionPretitle}
        </p>
        <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl text-[#580B1A] uppercase tracking-wide font-normal">
          {weddingData.coupleStory.sectionTitle}
        </h2>
        <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#CDAE80] block mt-1 drop-shadow-sm">
          {weddingData.coupleStory.scriptTitle}
        </span>
      </div>

      {/* 2. Narrative Story Text (Balanced Width & Authentic Styling) */}
      <div className="gsap-reveal max-w-lg mx-auto py-2">
        <p className="font-garamond text-sm sm:text-base md:text-lg text-[#460101] leading-relaxed italic font-medium text-center">
          &ldquo;{weddingData.coupleStory.narrative}&rdquo;
        </p>
      </div>
    </div>
  );
}
