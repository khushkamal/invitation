'use client';

import React from 'react';
import { weddingData } from '@/data/wedding';

export default function WeddingStory() {
  return (
    <div className="text-center max-w-xl mx-auto px-4">
      {/* 1. Header Typography Hierarchy (Above archway on rich maroon background) */}
      <div className="gsap-reveal space-y-1">
        <p className="font-jost text-xs sm:text-sm uppercase tracking-[0.28em] text-[#EAD7BD] font-semibold drop-shadow-sm">
          {weddingData.coupleStory.sectionPretitle}
        </p>
        <h2 className="font-instrument text-2xl sm:text-4xl md:text-5xl text-[#FFEBBB] uppercase tracking-wide font-normal drop-shadow-md">
          {weddingData.coupleStory.sectionTitle}
        </h2>
      </div>

      {/* 2. Narrative Story Content (Framed naturally inside the warm cream archway) */}
      <div
        className="gsap-reveal max-w-[280px] sm:max-w-[360px] md:max-w-md mx-auto"
        style={{ marginTop: '4.2rem' }}
      >
        <span className="font-script text-3xl sm:text-4xl md:text-5xl text-[#CDAE80] block drop-shadow-sm mb-1.5">
          {weddingData.coupleStory.scriptTitle}
        </span>
        <p className="font-garamond text-[11px] sm:text-xs md:text-sm text-[#460101] leading-relaxed italic font-medium text-center">
          &ldquo;{weddingData.coupleStory.narrative}&rdquo;
        </p>
      </div>
    </div>
  );
}
