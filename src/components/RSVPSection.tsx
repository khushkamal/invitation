'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { weddingData } from '@/data/wedding';

export default function RSVPSection() {
  const whatsappUrl = `https://wa.me/${weddingData.rsvp.phone.replace(/\D/g, '')}?text=${encodeURIComponent(weddingData.rsvp.message || weddingData.rsvp.prefilledMessage || 'I COMMING')}`;

  return (
    <section
      id="page-6"
      className="relative w-full aspect-[3008/2080] overflow-hidden select-none bg-[#590D20]"
    >
      {/* Page 6 Background Artwork */}
      <img
        src="/theartfulinvites/page6_bg.webp"
        alt="RSVP Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* 1. "Will You Join Us?" Title inside arch */}
      <div className="absolute inset-x-0 top-[26%] sm:top-[27%] flex justify-center pointer-events-none z-10">
        <div className="gsap-reveal pointer-events-auto text-center px-4">
          <h2 className="text-[#580B1A] font-instrument text-[clamp(24px,4vw,68px)] leading-[1.05] select-none text-center font-normal">
            <span className="font-luxurious text-[clamp(38px,6.2vw,105px)] inline-block align-baseline mr-[-0.06em]">
              W
            </span>
            <span>ill You</span>
            <br />
            <span>Join Us?</span>
          </h2>
        </div>
      </div>

      {/* 2. RSVP Narrative Note (5 centered lines) */}
      <div className="absolute inset-x-0 top-[50%] sm:top-[51%] flex justify-center pointer-events-none z-10">
        <div className="gsap-reveal pointer-events-auto text-center w-[84%] sm:w-[68%] md:w-[50%] max-w-[460px] px-2">
          <p className="font-sans text-[clamp(7px,1.0vw,15.5px)] text-[#580B1A] font-medium leading-[1.5] sm:leading-[1.58] select-none text-center">
            <span className="block">We would be most honoured to</span>
            <span className="block">celebrate this day with you. Please</span>
            <span className="block">let us know if you&apos;ll be joining the</span>
            <span className="block">festivities — your presence is the</span>
            <span className="block">only gift we need.</span>
          </p>
        </div>
      </div>

      {/* 3. WhatsApp RSVP Button (Centered right between Meenakshi temple gopurams) */}
      <div className="absolute inset-x-0 top-[78%] sm:top-[79%] flex justify-center pointer-events-none z-10">
        <div className="gsap-reveal pointer-events-auto text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#580B1A] hover:bg-[#3D0510] active:scale-95 text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] font-sans text-[clamp(7.5px,0.95vw,14px)] font-semibold tracking-wide transition-all hover:scale-105 border border-[#CDAE80]/50"
          >
            <MessageCircle size={14} className="fill-[#25D366] text-[#25D366] stroke-none sm:w-4 sm:h-4 flex-shrink-0" />
            <span>RSVP on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
