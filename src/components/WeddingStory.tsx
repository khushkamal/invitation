'use client';

import React from 'react';
import { weddingData } from '@/data/wedding';

export default function WeddingStory() {
  return (
    <>
      {/* 1. "Meet The" (Above archway on rich burgundy background) */}
      <div className="gsap-reveal absolute top-[3.6%] sm:top-[4.2%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-auto">
        <p className="font-elsie text-[15px] xs:text-[17px] sm:text-[clamp(18px,2.5vw,42px)] text-[#EAD7BD] font-normal tracking-wide drop-shadow-sm select-none">
          {weddingData.coupleStory.sectionPretitle}
        </p>
      </div>

      {/* 2. "Bride & Groom" (Cursive calligraphy script on burgundy background) */}
      <div className="gsap-reveal absolute top-[6.0%] sm:top-[6.8%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-auto">
        <h2 className="font-luxurious text-[25px] xs:text-[28px] sm:text-[clamp(32px,4.2vw,76px)] text-[#D7B480] font-normal leading-tight tracking-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] select-none">
          {weddingData.coupleStory.sectionTitle}
        </h2>
      </div>

      {/* 3. "Our Story" (Positioned gracefully inside the full-height arch dome) */}
      <div className="gsap-reveal absolute top-[13.5%] sm:top-[18.2%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-auto z-10">
        <h3
          className="font-luxurious text-[21px] xs:text-[25px] sm:text-[clamp(28px,3.8vw,70px)] select-none text-center leading-none tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
          style={{ color: '#C29C54' }}
        >
          {weddingData.coupleStory.scriptTitle}
        </h3>
      </div>

      {/* 4. Narrative Story Paragraph (Centered with airy line spacing and deep maroon color) */}
      <div className="gsap-reveal absolute top-[19.8%] sm:top-[23.6%] left-1/2 -translate-x-1/2 w-[74%] xs:w-[68%] sm:w-[66%] md:w-[58%] max-w-[460px] text-center pointer-events-auto z-10">
        <p className="font-sans text-[6.8px] xs:text-[7.8px] sm:text-[clamp(9.5px,1.1vw,12px)] md:text-[clamp(11px,1.2vw,14px)] text-[#3B0716] font-medium leading-[1.30] xs:leading-[1.36] sm:leading-[1.58] md:leading-[1.62] select-none tracking-normal">
          Some souls are destined to find each other, no matter how long the journey.
          Krishna and Radha&apos;s story wasn&apos;t just about falling in love—it was about
          finding peace in each other&apos;s presence, strength in every challenge, and a
          home in each other&apos;s hearts. Through every smile, every tear, and every
          moment in between, their love only grew deeper. Today, as they take the
          sacred vows of forever, they carry with them not only dreams of a beautiful
          future but also the blessings of everyone who has been part of their
          journey. With hearts full of love and gratitude, they invite you to celebrate
          the beginning of their forever.
        </p>
      </div>
    </>
  );
}
