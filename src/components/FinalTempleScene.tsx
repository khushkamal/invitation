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
  const sectionRef = useRef<HTMLElement>(null);
  const particleCounter = useRef(0);
  const magicIdx = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastSpawnTime = useRef(0);

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
    setParticles((prev) => [...prev.slice(-8), p]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((item) => item.id !== p.id));
    }, 1450);
  };

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Check if cursor/touch is within #page-7
      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        const dx = clientX - lastPos.current.x;
        const dy = clientY - lastPos.current.y;
        const dist = Math.hypot(dx, dy);
        const now = Date.now();

        // Spawn smoothly on movement:
        // Every ~45px of distance, or if moving at least 24px after 110ms
        if (dist >= 45 || (dist >= 24 && now - lastSpawnTime.current > 110)) {
          lastPos.current = { x: clientX, y: clientY };
          lastSpawnTime.current = now;
          spawnMagic(clientX, clientY);
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

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
              style={{ left: p.x, top: p.y }}
              initial={{ opacity: 0, scale: 0.4, x: '-50%', y: '-50%', rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.4, 1, 0.98, 0.65],
                x: '-50%',
                y: ['-50%', '-140%'],
                rotate: p.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="absolute w-28 h-36 xs:w-32 xs:h-40 sm:w-36 sm:h-46 md:w-42 md:h-54 rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.32)] pointer-events-none select-none overflow-hidden"
            >
              <img
                src={p.image}
                alt="Magic Memory"
                className="w-full h-full object-cover pointer-events-none select-none"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <section
        id="page-7"
        ref={sectionRef}
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
