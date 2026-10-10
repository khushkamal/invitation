'use client';

import React, { useState, useEffect } from 'react';
import { weddingData } from '@/data/wedding';

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Dynamic countdown using configured target wedding date
    const target = new Date(weddingData.weddingDate?.dateString || '2026-12-17T11:30:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gsap-reveal w-full max-w-[285px] xs:max-w-[330px] sm:max-w-[360px] bg-[#FAF5EB]/90 backdrop-blur-md rounded-2xl p-3 xs:p-4 border border-[#CDAE80]/60 shadow-xl mx-auto">
      <span className="font-script text-xl xs:text-2xl sm:text-3xl text-[#580B1A] block mb-1.5 xs:mb-2 text-center drop-shadow-sm">
        Counting the Days
      </span>
      <div className="grid grid-cols-4 gap-1.5 xs:gap-2 text-center">
        {[
          { label: 'DAYS', val: timeLeft.days },
          { label: 'HOURS', val: timeLeft.hours },
          { label: 'MINS', val: timeLeft.minutes },
          { label: 'SECS', val: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="bg-white/95 rounded-xl py-1.5 xs:py-2 px-1 border border-[#CDAE80]/40 shadow-sm flex flex-col items-center justify-center">
            <span className="font-serif text-xl xs:text-2xl sm:text-3xl text-[#580B1A] font-bold leading-none tracking-tight">
              {String(item.val).padStart(2, '0')}
            </span>
            <span className="text-[8px] xs:text-[9px] font-jost uppercase tracking-[0.16em] xs:tracking-[0.2em] text-[#888888] font-semibold mt-0.5 xs:mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
