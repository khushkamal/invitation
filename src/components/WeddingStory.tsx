'use client';

import React from 'react';
import { weddingData } from '@/data/wedding';

export default function WeddingStory() {
  return (
    <>
      {/* 1. "Meet The" (Above archway on rich burgundy background) */}
      <div className="gsap-reveal absolute top-[4.2%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-auto">
        <p className="font-elsie text-[clamp(17px,2.5vw,42px)] text-[#EAD7BD] font-normal tracking-wide drop-shadow-sm select-none">
          {weddingData.coupleStory.sectionPretitle}
        </p>
      </div>

      {/* 2. "Bride & Groom" (Cursive calligraphy script on burgundy background) */}
      <div className="gsap-reveal absolute top-[6.8%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-auto">
        <h2 className="font-luxurious text-[clamp(28px,4.2vw,76px)] text-[#D7B480] font-normal leading-tight tracking-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] select-none">
          {weddingData.coupleStory.sectionTitle}
        </h2>
      </div>

      {/* 3. "Our Story" (Positioned gracefully inside the full-height arch dome) */}
      <div className="gsap-reveal absolute top-[18.2%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-auto z-10">
        <h3
          className="font-luxurious text-[clamp(26px,3.8vw,70px)] select-none text-center leading-none tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
          style={{ color: '#C29C54' }}
        >
          {weddingData.coupleStory.scriptTitle}
        </h3>
      </div>

      {/* 4. Narrative Story Paragraph (9 centered lines matching user reference with airy line spacing and deep maroon color) */}
      <div className="gsap-reveal absolute top-[23.6%] left-1/2 -translate-x-1/2 w-[72%] sm:w-[66%] md:w-[58%] text-center pointer-events-auto z-10">
        <p className="font-sans text-[clamp(8px,1.05vw,11.5px)] sm:text-[clamp(10px,1.15vw,13px)] md:text-[clamp(12px,1.2vw,15px)] text-[#3B0716] font-medium leading-[1.52] sm:leading-[1.58] md:leading-[1.62] select-none tracking-normal">
          <span className="block">Some souls are destined to find each other, no matter how long the journey.</span>
          <span className="block">Krishna and Radha&apos;s story wasn&apos;t just about falling in love—it was about</span>
          <span className="block">finding peace in each other&apos;s presence, strength in every challenge, and a</span>
          <span className="block">home in each other&apos;s hearts. Through every smile, every tear, and every</span>
          <span className="block">moment in between, their love only grew deeper. Today, as they take the</span>
          <span className="block">sacred vows of forever, they carry with them not only dreams of a beautiful</span>
          <span className="block">future but also the blessings of everyone who has been part of their</span>
          <span className="block">journey. With hearts full of love and gratitude, they invite you to celebrate</span>
          <span className="block">the beginning of their forever.</span>
        </p>
      </div>
    </>
  );
}
