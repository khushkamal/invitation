'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
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
      rotation: (Math.random() - 0.5) * 20,
    };
    setParticles((prev) => [...prev.slice(-6), p]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((item) => item.id !== p.id));
    }, 1600);
  };

  const handleMagicClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = rect.left + rect.width / 2;
    const clickY = rect.top + rect.height / 2;
    spawnMagic(clickX, clickY);

    confetti({
      particleCount: 28,
      spread: 55,
      origin: {
        x: clickX / window.innerWidth,
        y: clickY / window.innerHeight,
      },
      colors: ['#D4AF37', '#CDAE80', '#590D20', '#FFFCF5'],
      ticks: 120,
      gravity: 0.8,
      scalar: 0.85,
    });
  };

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

      <section
        id="page-7"
        className="relative w-full aspect-[1872/3344] overflow-hidden select-none bg-[#E8D8C8]"
      >
        {/* Distinctive Final Scene Illustrated Landscape (Full width and full height edge-to-edge) */}
        <img
          src="/theartfulinvites/final_scene_temple_landscape.png"
          alt="Sacred Golden Temple Landscape & Botanical Artwork"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        />

        {/* Top Area: Live Countdown & "Touch here for magic" inside open sky (Starting) */}
        <div className="absolute inset-x-0 top-[3.5%] sm:top-[4.5%] flex flex-col items-center pointer-events-none z-10 px-4">
          <div className="pointer-events-auto">
            <CountdownSection />
          </div>

          {/* Cursive "Touch here for magic" with comfortable generous gap below countdown */}
          <button
            onClick={handleMagicClick}
            aria-label="Touch here for magic memory celebration"
            className="pointer-events-auto mt-8 sm:mt-12 md:mt-16 flex flex-col items-center text-center group cursor-pointer hover:scale-105 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A42] rounded-xl p-2 select-none"
          >
            <span className="font-luxurious text-[clamp(28px,4.5vw,72px)] text-[#4E0917] leading-[1.05] select-none">
              Touch here for
            </span>
            <span className="font-luxurious text-[clamp(28px,4.5vw,72px)] text-[#4E0917] leading-[1.05] select-none mt-1 sm:mt-2">
              magic
            </span>
          </button>
        </div>

        {/* Bottom Area: Social & Stationery Branding */}
        <div className="absolute inset-x-0 bottom-[3%] sm:bottom-[4%] flex justify-center pointer-events-none z-10">
          <div className="pointer-events-auto">
            <InstagramSection />
          </div>
        </div>
      </section>
    </>
  );
}
