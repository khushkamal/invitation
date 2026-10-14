'use client';

import React from 'react';
import { weddingData } from '@/data/wedding';

export default function InvitationScene() {
  return (
    <section
      id="page-2"
      className="relative w-full overflow-hidden select-none bg-[#FAF5EB] aspect-[2032/3072]"
    >
      {/* 100% Full-Width Archway Background Illustration */}
      <img
        src="/invitation/page2_bg.webp"
        alt="Royal Invitation Folio Arch"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* 1. Ganesha Emblem (top: 21.8%) */}
      <div className="gsap-p2-ganesh absolute top-[21.8%] left-1/2 -translate-x-1/2 w-[7vw] max-w-[90px] min-w-[42px] aspect-square pointer-events-auto drop-shadow-sm">
        <img
          src="/invitation/page2_ganesh.webp"
          alt="Lord Ganesha"
          className="w-full h-full object-contain"
        />
      </div>

      {/* 2. Sanskrit Shloka (top: 26.6%) */}
      <div className="absolute top-[26.6%] left-1/2 -translate-x-1/2 w-[54%] xs:w-[56%] sm:w-[54%] max-w-[460px] text-center pointer-events-auto">
        <p className="font-serif text-[10px] xs:text-[11px] sm:text-[clamp(11px,1.1vw,18px)] text-[#E05370] font-semibold tracking-widest whitespace-nowrap">
          || ॐ श्री गणेशाय नमः ||
        </p>
      </div>

      {/* 3. Opening Blessings Line (top: 29.5%) */}
      <div className="absolute top-[29.5%] left-1/2 -translate-x-1/2 w-[54%] xs:w-[56%] sm:w-[54%] max-w-[460px] text-center pointer-events-auto">
        <p className="font-garamond text-[11px] xs:text-[12px] sm:text-[clamp(13px,1.7vw,28px)] text-[#444444] leading-[1.3] sm:leading-snug font-medium">
          With the blessings of God and our beloved parents,
          <br />
          we cordially
        </p>
      </div>

      {/* 4. Large Calligraphic 'Invite' (top: 35.2%) */}
      <div className="absolute top-[35.2%] left-1/2 -translate-x-1/2 w-[54%] xs:w-[56%] sm:w-[54%] max-w-[460px] text-center pointer-events-auto">
        <h3 className="font-script text-[36px] xs:text-[42px] sm:text-[clamp(48px,7vw,115px)] text-[#218AC7] leading-none font-normal drop-shadow-sm">
          Invite
        </h3>
      </div>

      {/* 5. Groom's Family Lineage Block (top: 41.2%) */}
      <div className="absolute top-[41.2%] left-1/2 -translate-x-1/2 w-[54%] xs:w-[56%] sm:w-[54%] max-w-[460px] text-center pointer-events-auto space-y-[0.2vw] sm:space-y-[0.3vw] text-[8.5px] xs:text-[9.5px] sm:text-[clamp(10px,1.25vw,20px)] text-[#555555] font-garamond leading-[1.22] sm:leading-snug">
        <p className="font-medium text-[#444444]">
          With the blessings of the Almighty and our beloved elders,
        </p>
        <p className="font-medium text-[#333333]">
          {weddingData.invitation.groomGrandparents}
        </p>
        <p className="italic text-[#777777] text-[8px] xs:text-[8.5px] sm:text-[clamp(8.5px,1.1vw,17px)]">together with</p>
        <p className="font-medium text-[#333333]">
          {weddingData.invitation.groomParents}
        </p>
        <p className="text-[8px] xs:text-[8.5px] sm:text-[clamp(8.5px,1.15vw,18px)] text-[#666666] pt-0.5">
          cordially invite you to grace the auspicious wedding ceremony of their beloved son
        </p>
      </div>

      {/* 6. Couple Names Block (top: 55.4%) */}
      <div className="absolute top-[55.4%] left-1/2 -translate-x-1/2 w-[54%] xs:w-[56%] sm:w-[54%] max-w-[460px] flex flex-col items-center justify-center text-center leading-none pointer-events-auto">
        <h2 className="font-asul font-serif text-[19px] xs:text-[23px] sm:text-[clamp(28px,4.5vw,78px)] text-[#D1A766] font-normal tracking-[0.14em] sm:tracking-[0.16em] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
          {weddingData.couple.groom.name}
        </h2>
        <span className="font-script text-[17px] xs:text-[21px] sm:text-[clamp(24px,3.5vw,56px)] text-[#218AC7] my-[0.15vw] sm:my-[0.4vw]">
          &amp;
        </span>
        <h2 className="font-asul font-serif text-[19px] xs:text-[23px] sm:text-[clamp(28px,4.5vw,78px)] text-[#D1A766] font-normal tracking-[0.14em] sm:tracking-[0.16em] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
          {weddingData.couple.bride.name}
        </h2>
      </div>

      {/* 7. Bride's Family Lineage Block (top: 68.8%) */}
      <div className="absolute top-[68.8%] left-1/2 -translate-x-1/2 w-[54%] xs:w-[56%] sm:w-[54%] max-w-[460px] text-center pointer-events-auto space-y-[0.2vw] sm:space-y-[0.3vw] text-[8.5px] xs:text-[9.5px] sm:text-[clamp(10px,1.25vw,20px)] text-[#555555] font-garamond leading-[1.22] sm:leading-snug">
        <p className="font-medium text-[#333333]">
          {weddingData.invitation.brideGrandparents}
        </p>
        <p className="italic text-[#777777] text-[8px] xs:text-[8.5px] sm:text-[clamp(8.5px,1.1vw,17px)]">and beloved daughter of</p>
        <p className="font-medium text-[#333333]">
          {weddingData.invitation.brideParents}
        </p>
      </div>

      {/* 8. Bottom Event Callout (top: 78.8%) */}
      <div className="absolute top-[78.8%] left-1/2 -translate-x-1/2 w-[54%] xs:w-[56%] sm:w-[54%] max-w-[460px] text-center pointer-events-auto">
        <p className="font-garamond text-[11px] xs:text-[12px] sm:text-[clamp(13px,1.7vw,28px)] font-bold text-[#218AC7] tracking-wider">
          On the following events
        </p>
      </div>
    </section>
  );
}
