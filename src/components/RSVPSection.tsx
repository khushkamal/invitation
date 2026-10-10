'use client';

import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { weddingData } from '@/data/wedding';

function PinIcon({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M12 21C12 21 19 14.5 19 9.8C19 6.1 15.9 3 12 3C8.1 3 5 6.1 5 9.8C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function RSVPSection() {
  const whatsappUrl = `https://wa.me/${weddingData.rsvp.phone.replace(/\D/g, '')}?text=${encodeURIComponent(weddingData.rsvp.message || weddingData.rsvp.prefilledMessage || 'I COMMING')}`;

  return (
    <section id="page-6" className="relative w-full min-h-[70vh] sm:min-h-[85vh] py-20 sm:py-28 px-4 overflow-hidden select-none bg-white flex items-center justify-center">
      {/* Background Design */}
      <img
        src="/theartfulinvites/page6_bg.webp"
        alt="RSVP Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="gsap-reveal relative z-10 max-w-xl w-full mx-auto flex flex-col items-center justify-center p-6 sm:p-10 text-center space-y-4 sm:space-y-6 bg-white/70 backdrop-blur-md rounded-3xl border border-[#CDAE80]/50 shadow-[0_20px_50px_rgba(88,11,26,0.1)]">
        {/* Upper RSVP Pill Badge matching Framer AST */}
        <span className="font-jost text-xs sm:text-sm uppercase tracking-[0.28em] text-[#580B1A] font-bold">
          RSVP
        </span>

        {/* "Will You Join Us?" Typography: Luxurious Script initial "W" + Instrument Serif title matching Framer AST */}
        <h2 className="text-[#580B1A] text-center font-normal leading-[1.08] tracking-tight">
          <span className="font-script text-4xl sm:text-6xl md:text-7xl text-[#580B1A] mr-1 inline-block align-baseline">W</span>
          <span className="font-instrument text-2xl sm:text-4xl md:text-5xl uppercase tracking-wider font-normal">ill You</span>
          <br />
          <span className="font-instrument text-2xl sm:text-4xl md:text-5xl uppercase tracking-wider font-normal">Join Us?</span>
        </h2>

        {/* RSVP Note */}
        <p className="font-garamond text-xs sm:text-sm md:text-base text-[#580B1A] max-w-md leading-relaxed mx-auto">
          {weddingData.rsvp.note}
        </p>

        {/* Functioning WhatsApp RSVP Button constructed from configurable phone & prefilled message */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#580B1A] hover:bg-[#3E0510] active:scale-95 text-white shadow-xl font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all hover:scale-105 border border-[#CDAE80]/40"
        >
          <MessageCircle size={18} className="fill-white" />
          <span>{weddingData.rsvp.buttonLabel}</span>
          <span className="text-[9px] sm:text-[10px] bg-white/20 px-2 py-0.5 rounded font-jost font-bold tracking-widest uppercase ml-1">
            {weddingData.rsvp.ctaText}
          </span>
        </a>

        {/* Royal Venue Quick Location Link */}
        <a
          href={weddingData.venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-jost uppercase tracking-wider text-[#580B1A]/85 hover:text-[#580B1A] transition-colors pt-2"
        >
          <PinIcon size={13} className="text-[#CDAE80]" />
          <span>Venue: {weddingData.venue.name}</span>
          <ExternalLink size={11} className="opacity-70" />
        </a>
      </div>
    </section>
  );
}
