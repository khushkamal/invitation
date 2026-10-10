'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '@/data/wedding';

function CornerOrnament({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(205,174,128,0.8)] ${className || ''}`}
      style={{ width: 24, height: 24, ...style }}
    >
      <path d="M3 12C8 12 12 8 12 3C12 8 16 12 21 12C16 12 12 16 12 21C12 16 8 12 3 12Z" fill="#CDAE80" />
      <circle cx="12" cy="12" r="2.2" fill="#580B1A" />
    </svg>
  );
}

export default function Gallery() {
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  return (
    <section id="page-gallery" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#FAF5EB] overflow-hidden select-none border-t border-b border-[#CDAE80]/30">
      <div className="max-w-6xl mx-auto">
        {/* Gallery Section Header */}
        <div className="gsap-reveal text-center mb-8 sm:mb-12 space-y-2">
          <span className="font-jost text-xs sm:text-sm uppercase tracking-[0.28em] text-[#888888] font-semibold">
            Memories &amp; Moments
          </span>
          <h3 className="font-instrument text-3xl sm:text-4xl md:text-5xl text-[#580B1A] uppercase tracking-wider font-normal">
            Photo Chronicles
          </h3>
          <span className="font-script text-3xl sm:text-4xl md:text-5xl text-[#CDAE80] block drop-shadow-sm">
            Moments of Forever
          </span>
          <div className="w-20 h-0.5 bg-[#CDAE80]/60 mx-auto mt-3" />
        </div>

        {/* Gallery Photo Grid with Gold Ornamental Frames & Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {weddingData.gallery.slice(0, 6).map((photoUrl, idx) => {
            const itemMeta = weddingData.galleryItems[idx] || {
              title: 'Cherished Moment',
              subtitle: 'Kiran & Rahul',
              caption: 'Love written in the stars',
            };
            const isHero = idx === 0;

            return (
              <div
                key={photoUrl}
                onClick={() => setLightboxPhoto(photoUrl)}
                className={`gsap-gallery-card relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-[#FFFDF9] border border-[#CDAE80]/50 group cursor-pointer ${
                  isHero ? 'xs:col-span-2 xs:row-span-2' : ''
                }`}
              >
                {/* 4 Traditional Gold Corner Stars */}
                <CornerOrnament className="absolute top-2 left-2 z-20 pointer-events-none opacity-80 group-hover:scale-110 transition-transform" />
                <CornerOrnament className="absolute top-2 right-2 z-20 pointer-events-none opacity-80 group-hover:scale-110 transition-transform" />
                <CornerOrnament className="absolute bottom-2 left-2 z-20 pointer-events-none opacity-80 group-hover:scale-110 transition-transform" />
                <CornerOrnament className="absolute bottom-2 right-2 z-20 pointer-events-none opacity-80 group-hover:scale-110 transition-transform" />

                {/* Photo Container */}
                <div className={`relative w-full overflow-hidden ${isHero ? 'aspect-[4/3] sm:aspect-[16/11]' : 'aspect-[3/4]'}`}>
                  <img
                    src={photoUrl}
                    alt={itemMeta.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Golden Inlay Border */}
                  <div className="absolute inset-1.5 border border-[#CDAE80]/40 rounded-xl pointer-events-none" />

                  {/* Hover Overlay with Romantic Caption & Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#580B1A]/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white z-10">
                    <span className="font-script text-xl text-[#CDAE80] drop-shadow-sm">
                      {itemMeta.caption}
                    </span>
                    <h4 className="font-instrument text-base uppercase tracking-wider font-semibold">
                      {itemMeta.title}
                    </h4>
                    <span className="font-jost text-[10px] text-white/80 uppercase tracking-widest mt-0.5">
                      Tap to enlarge photo
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Photo Gallery */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg max-h-[85vh] rounded-2xl overflow-hidden border border-[#CDAE80]/60 shadow-2xl bg-[#FAF5EB]"
            >
              <img
                src={lightboxPhoto}
                alt="Enlarged Wedding Photograph"
                className="w-full h-full max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center font-bold text-sm transition-transform active:scale-90"
                aria-label="Close photo preview"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
