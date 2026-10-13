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

  const items = [
    { label: 'D', val: timeLeft.days },
    { label: 'H', val: timeLeft.hours },
    { label: 'M', val: timeLeft.minutes },
    { label: 'S', val: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* 1. "Counting the Days" in elegant cursive calligraphy */}
      <h3 className="font-luxurious text-[clamp(32px,5.4vw,84px)] text-[#4E0917] text-center leading-tight mb-5 sm:mb-8 md:mb-10 select-none font-normal drop-shadow-xs">
        Counting the Days
      </h3>

      {/* 2. 4 White Rounded Cards with Colons and D, H, M, S below */}
      <div className="flex items-center justify-center gap-2 sm:gap-3.5 md:gap-5">
        {items.map((item, idx) => (
          <React.Fragment key={item.label}>
            <div className="flex flex-col items-center">
              {/* White Card */}
              <div className="w-[52px] h-[52px] xs:w-[60px] xs:h-[60px] sm:w-[76px] sm:h-[76px] md:w-[88px] md:h-[88px] bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center border border-black/[0.03]">
                <span className="font-instrument text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] font-normal leading-none">
                  {String(item.val).padStart(2, '0')}
                </span>
              </div>
              {/* D, H, M, S label */}
              <span className="font-jost text-[10px] sm:text-xs md:text-sm text-[#4E0917]/75 font-semibold mt-1 sm:mt-1.5 uppercase tracking-wider">
                {item.label}
              </span>
            </div>

            {/* Colon separator between cards */}
            {idx < 3 && (
              <span className="font-serif text-base xs:text-lg sm:text-2xl text-[#4E0917]/60 font-semibold mb-4 sm:mb-5 select-none">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
