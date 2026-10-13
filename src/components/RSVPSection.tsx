'use client';

import React from 'react';
import { weddingData } from '@/data/wedding';

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.892.524 3.662 1.435 5.176L2 22l4.966-1.399A9.958 9.958 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm.068 18.182a8.136 8.136 0 01-4.148-1.127l-.297-.176-3.082.868.825-3.003-.193-.308A8.139 8.139 0 1112.068 20.182zm4.462-6.108c-.244-.122-1.446-.713-1.67-.795-.224-.082-.387-.122-.55.122-.163.245-.632.795-.774.958-.143.163-.285.184-.53.061s-1.033-.381-1.968-1.214c-.728-.649-1.22-1.45-1.363-1.695-.143-.245-.015-.377.107-.499.11-.11.245-.285.367-.428.122-.143.163-.245.245-.408.082-.163.041-.306-.02-.428-.061-.122-.55-1.326-.754-1.815-.199-.477-.401-.412-.55-.42l-.469-.008c-.163 0-.428.061-.652.306s-.856.836-.856 2.04 1.141 2.366 1.304 2.57c.163.204 2.243 3.426 5.435 4.803.759.328 1.352.524 1.813.67.762.242 1.456.208 2.005.126.612-.092 1.876-.767 2.141-1.509.265-.742.265-1.378.184-1.509-.081-.131-.244-.212-.489-.334z"
      />
    </svg>
  );
}

export default function RSVPSection() {
  const cleanPhone = weddingData.rsvp.phone.replace(/\D/g, '');
  const rsvpText = encodeURIComponent(
    weddingData.rsvp.message || weddingData.rsvp.prefilledMessage || 'Namaste! We are happy to confirm our presence for the wedding celebrations.'
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${rsvpText}`;

  return (
    <section
      id="page-6"
      className="relative w-full min-h-[480px] sm:min-h-[520px] md:min-h-0 md:aspect-[3008/2080] overflow-hidden select-none bg-[#590D20]"
    >
      {/* Page 6 Background Artwork (Zoomed in ~2.5%) */}
      <img
        src="/invitation/page6_bg.webp"
        alt="RSVP Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-[1.025] transform origin-center will-change-transform"
      />

      {/* 1. "Will You Join Us?" Title inside arch */}
      <div className="absolute inset-x-0 top-[12%] sm:top-[16%] md:top-[18%] flex justify-center pointer-events-none z-10">
        <div className="gsap-reveal pointer-events-auto text-center px-4">
          <h2 className="text-[#4E0917] select-none text-center leading-[1.02]">
            <span className="font-luxurious text-[clamp(32px,5.2vw,86px)] inline-block align-baseline mr-1 text-[#4E0917]">
              Will
            </span>
            <span className="font-instrument text-[clamp(26px,4.2vw,70px)] font-normal text-[#4E0917]">
              You
            </span>
            <br />
            <span className="font-instrument text-[clamp(26px,4.2vw,70px)] font-normal text-[#4E0917]">
              Join Us?
            </span>
          </h2>
        </div>
      </div>

      {/* 2. RSVP Narrative Note (5 centered lines exactly matching reference) */}
      <div className="absolute inset-x-0 top-[35%] sm:top-[39%] md:top-[41%] flex justify-center pointer-events-none z-10">
        <div className="gsap-reveal pointer-events-auto text-center w-[86%] sm:w-[72%] md:w-[52%] max-w-[480px] px-3">
          <p className="font-sans text-[clamp(8px,1.05vw,15.5px)] text-[#4E0917] font-medium leading-[1.5] sm:leading-[1.58] select-none text-center">
            <span className="block">We would be truly honoured to</span>
            <span className="block">celebrate this day with you. Please</span>
            <span className="block">let us know if you&apos;ll be joining the</span>
            <span className="block">festivities — your presence is the</span>
            <span className="block">only gift we need.</span>
          </p>
        </div>
      </div>

      {/* 3. Dark Maroon WhatsApp RSVP Button & "TAP HERE" (Centered between temple spires) */}
      <div className="absolute inset-x-0 top-[57%] sm:top-[60%] md:top-[62%] flex justify-center pointer-events-none z-10">
        <div className="gsap-reveal pointer-events-auto flex flex-col items-center text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 sm:gap-3.5 min-h-[46px] px-7 sm:px-10 md:px-12 py-3 sm:py-3.5 rounded-[6px] bg-[#4E0917] hover:bg-[#3B0716] active:scale-95 text-white border border-[#C99A42]/50 shadow-[0_6px_22px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.02] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42] focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white flex-shrink-0" />
            <span className="font-sans text-[clamp(13px,1.25vw,17px)] font-semibold tracking-wide text-white whitespace-nowrap">
              RSVP on WhatsApp
            </span>
          </a>

          {/* TAP HERE Text below button with increased gap */}
          <span className="font-jost text-[clamp(8.5px,0.85vw,12px)] uppercase tracking-[0.24em] text-[#633B26] font-semibold mt-3.5 sm:mt-5 select-none">
            TAP HERE
          </span>
        </div>
      </div>
    </section>
  );
}
