'use client';

import React from 'react';
import { weddingData } from '@/data/wedding';
import TempleArtwork from './TempleArtwork';

export default function HeroScene() {
  return (
    <section
      id="page-1"
      className="relative w-full h-[100svh] min-h-[100svh] overflow-hidden bg-[#5B95C0] select-none flex flex-col items-center justify-center m-0 p-0"
    >
      {/* LAYER 1: Vivid Blue Sky Background (100vw x 100svh, z-[1]) */}
      <img
        src="/theartfulinvites/page1_sky.webp"
        alt="Illustrated Blue Sky"
        className="gsap-p1-sky absolute inset-0 w-full h-[120%] block object-cover object-center -top-[10%] will-change-transform z-[1] pointer-events-none"
        style={{
          display: 'block',
          width: '100%',
          height: '120%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* LAYER 2: Soft White Clouds Layer Around Corners & Edges (z-[2]) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2] opacity-80">
        <div className="gsap-cloud-1 absolute top-8 left-6 md:left-20 w-72 md:w-96 h-28 md:h-36 rounded-full bg-white/80 blur-3xl will-change-transform" />
        <div className="gsap-cloud-2 absolute top-20 right-6 md:right-20 w-80 md:w-[32rem] h-32 md:h-44 rounded-full bg-white/75 blur-3xl will-change-transform" />
        <div className="gsap-cloud-3 absolute top-52 left-1/4 w-48 sm:w-64 md:w-80 h-24 md:h-32 rounded-full bg-white/65 blur-2xl will-change-transform" />
      </div>

      {/* LAYER 3: Centered Spacious Serif Typography (z-[3]) */}
      <div className="gsap-p1-text absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-[3] pointer-events-none will-change-transform">
        {/* RAHUL */}
        <h1 className="gsap-p1-groom gsap-p1-title font-asul font-serif text-[clamp(2.4rem,7.5vw,7.5rem)] text-white tracking-[0.16em] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] leading-tight pl-[0.16em] font-normal will-change-transform">
          {weddingData.couple.groom.name}
        </h1>

        {/* WEDS */}
        <p className="gsap-p1-weds gsap-p1-title font-jost text-[clamp(11px,1.2vw,16px)] text-[#E5C982] font-semibold tracking-[0.32em] uppercase my-2 sm:my-3.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] pl-[0.32em] will-change-transform">
          WEDS
        </p>

        {/* KIRAN */}
        <h1 className="gsap-p1-bride gsap-p1-title font-asul font-serif text-[clamp(2.4rem,7.5vw,7.5rem)] text-white tracking-[0.16em] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] leading-tight pl-[0.16em] font-normal will-change-transform">
          {weddingData.couple.bride.name}
        </h1>
      </div>

      {/* LAYER 4 & 5: Foreground Artwork (Hidden below viewport on initial frame, z-[4]) */}
      <TempleArtwork className="z-[4]" />
    </section>
  );
}
