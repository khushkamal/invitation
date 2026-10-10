'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CountdownSection from './CountdownSection';
import InstagramSection from './InstagramSection';

const magicPhotos = [
  '/theartfulinvites/magic1.webp',
  '/theartfulinvites/magic2.webp',
  '/theartfulinvites/magic3.webp',
  '/theartfulinvites/magic4.webp',
  '/theartfulinvites/magic5.webp',
  '/theartfulinvites/magic6.webp',
];

interface Particle {
  id: number;
  x: number;
  y: number;
  image: string;
  rotation: number;
}

export default function FinalTempleScene() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [magicActive, setMagicActive] = useState(false);
  const particleCounter = useRef(0);
  const magicIdx = useRef(0);

  const spawnMagic = (clientX: number, clientY: number) => {
    particleCounter.current += 1;
    const img = magicPhotos[magicIdx.current % magicPhotos.length];
    magicIdx.current += 1;
    const p: Particle = {
      id: particleCounter.current,
      x: clientX,
      y: clientY,
      image: img,
      rotation: (Math.random() - 0.5) * 30,
    };
    setParticles((prev) => [...prev.slice(-10), p]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((item) => item.id !== p.id));
    }, 1600);
  };

  useEffect(() => {
    if (!magicActive) return;
    const handleMove = (e: MouseEvent) => spawnMagic(e.clientX, e.clientY);
    const handleTouch = (e: TouchEvent) => {
      if (e.touches[0]) spawnMagic(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleTouch);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, [magicActive]);

  return (
    <>
      {/* Magic Particle Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.3, x: p.x - 40, y: p.y - 40, rotate: 0 }}
              animate={{ opacity: [0, 1, 0.9, 0], scale: [0.3, 0.9, 0.95, 0.5], y: p.y - 90, rotate: p.rotation }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute w-24 h-28 rounded-lg bg-white p-1 shadow-2xl border border-[#CDAE80] pointer-events-none"
            >
              <img src={p.image} alt="Magic Memory" className="w-full h-full object-cover rounded" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <section id="page-7" className="relative w-full min-h-[100svh] sm:min-h-screen py-16 sm:py-24 px-4 overflow-hidden select-none bg-[#F7F2EB] flex flex-col justify-between items-center">
        {/* Distinctive Final Scene Illustrated Landscape with Controlled Parallax */}
        <img
          src="/theartfulinvites/final_scene_temple_landscape.png"
          alt="Sacred Golden Temple Landscape & Botanical Artwork"
          className="gsap-p7-landscape absolute inset-0 w-full h-[115%] object-cover -top-[5%]"
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-between min-h-[80vh] py-4 text-center">
          {/* Top Area: Live Countdown Presentation */}
          <CountdownSection />

          {/* Middle Area: Touch Here for Magic Button */}
          <div className="my-auto flex flex-col items-center py-6">
            <button
              onClick={(e) => {
                setMagicActive((prev) => !prev);
                spawnMagic(e.clientX, e.clientY);
              }}
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white/95 text-[#580B1A] border border-[#CDAE80] shadow-xl hover:shadow-2xl transition-all active:scale-95 text-sm sm:text-base"
            >
              <Sparkles size={16} className="text-[#CDAE80] group-hover:rotate-12 transition-transform" />
              <span className="font-script text-2xl sm:text-3xl text-[#580B1A]">
                Touch here for Magic
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-[#CDAE80] bg-[#580B1A]/10 px-2 py-0.5 rounded-full border border-[#CDAE80]/30 ml-1.5">
                {magicActive ? 'ACTIVE ✨' : 'TAP'}
              </span>
            </button>
          </div>

          {/* Bottom Area: Social & Stationery Branding */}
          <InstagramSection />
        </div>
      </section>
    </>
  );
}
