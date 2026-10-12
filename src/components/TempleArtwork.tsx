'use client';

import React from 'react';

interface TempleArtworkProps {
  className?: string;
  showTrees?: boolean;
}

export default function TempleArtwork({ className = '', showTrees = true }: TempleArtworkProps) {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden ${className}`}>
      {/* Centered Illustrated Temple & Tree Composition (Full 100vw Width, Shared 2032x3072 Registration) */}
      <div className="absolute bottom-0 inset-x-0 w-full flex justify-center items-end pointer-events-none">
        <div className="relative w-full max-w-none aspect-[2032/3072] flex items-end justify-center pointer-events-none">
          
          {/* LAYER 4: Foreground Temple Architecture Gopuram (z-[4]) */}
          <img
            src="/theartfulinvites/page1_temple.webp"
            alt="Sri Meenakshi Temple Architecture Dravidian Gopuram"
            width={2032}
            height={3072}
            className="gsap-p1-temple absolute inset-0 w-full h-full object-cover object-bottom block pointer-events-none z-[4] will-change-transform drop-shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              aspectRatio: '2032 / 3072',
              objectPosition: 'center bottom',
            }}
          />

          {/* LAYER 5: Foreground Botanical Trees Overlay (z-[5]) - Perfectly Aligned 1:1 with Temple */}
          {showTrees && (
            <img
              src="/theartfulinvites/page1_tree.webp"
              alt="Botanical Trees Framing"
              width={2032}
              height={3072}
              className="gsap-p1-tree absolute inset-0 w-full h-full object-cover object-bottom block pointer-events-none z-[5] will-change-transform"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                aspectRatio: '2032 / 3072',
                objectPosition: 'center bottom',
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
