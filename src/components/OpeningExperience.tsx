'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Sparkles, MailOpen } from 'lucide-react';
import { weddingData } from '@/data/wedding';
import confetti from 'canvas-confetti';

interface OpeningExperienceProps {
  isOpen: boolean;
  onEnter: (withAudio: boolean) => void;
  onClose: () => void;
  onReopen?: () => void;
}

export default function OpeningExperience({
  isOpen,
  onEnter,
  onClose,
  onReopen,
}: OpeningExperienceProps) {
  const [isOpening, setIsOpening] = useState(false);

  const triggerReveal = (withAudio: boolean) => {
    setIsOpening(true);

    // Restrained, elegant celebratory shower of golden & saffron petals
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.52 },
      colors: ['#D4AF37', '#CDAE80', '#881324', '#FFA500'],
      ticks: 160,
      gravity: 0.85,
      scalar: 0.9,
    });

    // Try starting global audio if requested
    if (withAudio) {
      const audioEl = document.querySelector('audio');
      if (audioEl) {
        audioEl.play().catch(() => {});
      }
    }

    setTimeout(() => {
      setIsOpening(false);
      onClose();
      onEnter(withAudio);
    }, 950);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Royal Wedding Invitation Opening"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 select-none"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(25, 18, 14, 0.94) 0%, rgba(12, 8, 6, 0.98) 100%)',
              backdropFilter: 'blur(14px)',
            }}
          >
            {/* Handcrafted Parchment Invitation Folio */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={
                isOpening
                  ? { scale: [1, 1.02, 0.96], opacity: [1, 1, 0], y: [0, -8, 15] }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-md w-full bg-[#FAF5EB] text-[#2C1F15] rounded-3xl p-5 xs:p-7 sm:p-10 border-2 border-[#CDAE80]/70 shadow-[0_25px_80px_rgba(0,0,0,0.7),inset_0_0_40px_rgba(205,174,128,0.15)] text-center overflow-hidden"
            >
              {/* Subtle Sculpted Gold Corner Accents */}
              <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#CDAE80]/70 pointer-events-none rounded-tl-sm" />
              <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#CDAE80]/70 pointer-events-none rounded-tr-sm" />
              <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#CDAE80]/70 pointer-events-none rounded-bl-sm" />
              <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#CDAE80]/70 pointer-events-none rounded-br-sm" />

              {/* Sacred Sanskrit Invocation */}
              <p className="font-editorial text-[11px] xs:text-xs sm:text-sm tracking-[0.2em] text-[#580B1A] font-bold uppercase mb-2 xs:mb-3">
                ॥ ॐ श्री गणेशाय नमः ॥
              </p>

              {/* Stately Couple Monogram & Names */}
              <div className="my-1.5 xs:my-2">
                <h2 className="font-asul text-2xl xs:text-3xl sm:text-4xl text-[#2B1E14] tracking-[0.16em] uppercase font-normal leading-tight">
                  {weddingData.couple.bride.name}
                </h2>
                <p className="font-jost text-xs xs:text-sm text-[#CDAE80] font-semibold tracking-[0.25em] uppercase my-0.5 xs:my-1">
                  WEDS
                </p>
                <h2 className="font-asul text-2xl xs:text-3xl sm:text-4xl text-[#2B1E14] tracking-[0.16em] uppercase font-normal leading-tight">
                  {weddingData.couple.groom.name}
                </h2>
              </div>

              <p className="font-editorial italic text-[11px] xs:text-xs sm:text-sm text-[#666666] mt-1.5 xs:mt-2 mb-4 xs:mb-5 leading-relaxed px-1 xs:px-2">
                Cordially invite you to celebrate the auspicious union of their souls
              </p>

              {/* Central Ceremonial Wax Seal / "Touch here for magic" Interaction */}
              <div className="relative my-4 xs:my-6 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => triggerReveal(true)}
                  className="group relative w-32 h-32 xs:w-36 xs:h-36 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center p-3 shadow-2xl cursor-pointer focus:outline-none transition-transform"
                  style={{
                    background: 'radial-gradient(circle at 35% 30%, #8A1526 0%, #580B1A 60%, #38040E 100%)',
                    boxShadow: '0 12px 30px rgba(88, 11, 26, 0.45), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -4px 10px rgba(0, 0, 0, 0.5)',
                    border: '2px solid rgba(205, 174, 128, 0.8)',
                  }}
                  title="Touch here for magic"
                >
                  {/* Outer Golden Wax Stamp Ring */}
                  <div className="absolute inset-1.5 rounded-full border border-[#FFEBBB]/40 pointer-events-none" />

                  {/* Sparkle Icon */}
                  <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 text-[#FFEBBB] mb-0.5 group-hover:rotate-12 transition-transform duration-300" />

                  {/* Authentic Calligraphic Script Label */}
                  <span className="font-script text-xl xs:text-2xl sm:text-3xl text-[#FFF2B8] leading-tight drop-shadow-sm">
                    Touch here
                  </span>
                  <span className="font-editorial italic text-[10px] xs:text-xs tracking-wider text-[#FFD782] uppercase mt-0.5">
                    for magic
                  </span>

                  {/* Subtle Pulsing Halo */}
                  <div className="absolute -inset-2 rounded-full border border-[#CDAE80]/30 animate-ping pointer-events-none opacity-40" />
                </motion.button>
              </div>

              {/* Dual Action Triggers */}
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center mt-3 xs:mt-4">
                <button
                  onClick={() => triggerReveal(true)}
                  className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#590D20] via-[#751124] to-[#590D20] text-[#FFFCF5] font-jost text-xs tracking-[0.16em] uppercase font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-[#C99A42]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42]"
                >
                  <Volume2 className="w-4 h-4 text-[#E5C982]" />
                  <span>Open With Temple Raga</span>
                </button>

                <button
                  onClick={() => triggerReveal(false)}
                  className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-full bg-transparent hover:bg-[#590D20]/5 text-[#665B4E] hover:text-[#392D21] font-jost text-[0.72rem] tracking-wider uppercase border border-[#C99A42]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42]"
                >
                  <span>Open Silently</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Re-Open Envelope Seal Trigger (Requirement 7) */}
      {!isOpen && onReopen && (
        <button
          onClick={onReopen}
          title="Re-open Royal Envelope"
          aria-label="Re-open Royal Envelope"
          className="fixed top-4 right-4 sm:top-5 sm:right-6 z-40 inline-flex items-center gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4 rounded-full bg-[#FFFCF5]/95 backdrop-blur-md border border-[#C99A42]/75 text-[#590D20] shadow-[0_4px_14px_rgba(0,0,0,0.1)] text-[10.5px] sm:text-[11px] font-jost uppercase tracking-[0.16em] font-semibold hover:scale-105 active:scale-95 transition-all select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42]"
        >
          <MailOpen size={14} className="text-[#C99A42]" />
          <span>Royal Seal</span>
        </button>
      )}
    </>
  );
}
