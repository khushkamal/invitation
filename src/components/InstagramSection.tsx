'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { weddingData } from '@/data/wedding';

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function InstagramSection() {
  return (
    <div className="flex flex-col items-center">
      {/* Middle Area: Hashtag, Instagram & "TAP HERE" Badge */}
      <div className="gsap-reveal flex flex-col items-center gap-1.5 xs:gap-2 my-auto">
        {/* Wedding Hashtag Treatment */}
        <p className="font-lusitana text-xl xs:text-2xl sm:text-3xl md:text-4xl text-[#580B1A] font-bold tracking-tight drop-shadow-sm">
          {weddingData.branding.hashtag || weddingData.couple.hashtag}
        </p>

        {/* Instagram Section with Functioning "TAP HERE" Interaction */}
        <div className="flex flex-col items-center gap-1.5 mt-1">
          <span className="text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] font-jost uppercase tracking-[0.24em] font-bold text-[#590D20] bg-[#590D20]/10 border border-[#C99A42]/50 px-3 py-0.5 rounded-full shadow-xs">
            TAP HERE
          </span>

          <a
            href={weddingData.branding.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 min-h-[44px] px-5 sm:px-6 py-2.5 rounded-full bg-[#FFFCF5] hover:bg-white active:scale-95 text-[#590D20] border border-[#C99A42]/75 shadow-md hover:shadow-xl transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42] focus-visible:ring-offset-2"
          >
            <InstagramIcon size={16} />
            <span className="font-sans text-[12px] sm:text-[13px] font-semibold tracking-wider text-[#590D20]">
              {weddingData.branding.instagramHandle}
            </span>
            <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#C99A42]" />
          </a>
        </div>
      </div>

      {/* Bottom Area: Closing Invitation Branding (No corporate footer) */}
      <div className="gsap-reveal pt-4 text-center text-[#580B1A]/85 pb-2">
        <p className="font-instrument text-xs sm:text-sm uppercase tracking-[0.28em] font-bold text-[#580B1A]">
          {weddingData.branding.studio}
        </p>
        <p className="text-[8px] xs:text-[9px] sm:text-[10px] font-jost tracking-[0.18em] text-[#888888] uppercase mt-0.5">
          TAI • Digital Wedding Stationery
        </p>
      </div>
    </div>
  );
}
