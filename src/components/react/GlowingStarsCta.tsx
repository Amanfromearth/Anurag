import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { playSound } from '@/lib/sound';
import { openContactDrawer } from '@/lib/contact';

const STARS = 150;
const COLUMNS = 25;

export default function GlowingStarsCta() {
  const [hover, setHover] = useState(false);

  const handleClick = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    playSound();
    setTimeout(() => openContactDrawer(), 300);
  }, []);

  return (
    <section id="cta" className="w-full inline-flex items-center justify-center">
      <div className="h-96 w-full relative">
        <Illustration mouseEnter={hover} />
        <div className="absolute inset-0 z-40 flex justify-center items-center">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}
            className="flex gloww active:translate-x-[3px] active:translate-y-[3px] active:shadow-xs border-2 items-center border-white w-64 md:w-80 justify-center p-3 gap-3 rounded-full text-white bg-black flex-row group hover:bg-glow transition-[background-color,translate,box-shadow] duration-500 ease-in-out"
          >
            <div className="rounded-full group-hover:bg-white bg-glow text-black p-1 transition-[background-color,rotate,translate] group-hover:rotate-180 duration-500 ease-in-out group-hover:translate-x-[193px] md:group-hover:translate-x-[242px]">
              <img alt="" aria-hidden="true" className="w-5 md:w-7" src="/zap.svg" />
            </div>
            <span className="group-hover:-translate-x-9 md:group-hover:-translate-x-11 transition-[color,translate] duration-500 group-hover:text-black text-2xl md:text-3xl ease-in-out">
              {hover ? 'Contact me now' : 'Liked my Work?'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function Illustration({ mouseEnter }: { mouseEnter: boolean }) {
  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const highlightedStars = useRef<number[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Respect reduced motion: skip the continuous twinkle entirely.
    if (reduceMotion) return;
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * STARS),
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div
      className="h-full p-1 w-full"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${COLUMNS}, 12fr)`,
        gap: '1px',
      }}
    >
      {Array.from({ length: STARS }).map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`star-${starIdx}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence initial={false} mode="wait">
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function Star({ isGlowing, delay }: { isGlowing: boolean; delay: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      key={delay}
      initial={{ scale: 1 }}
      animate={{
        // Reduced motion: keep the brightness change, drop the scale pulse.
        scale: isGlowing && !reduceMotion ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? '#fff' : '#666',
      }}
      transition={{ duration: 0.6, ease: 'easeInOut', delay }}
      className={cn('bg-[#666] h-px w-px rounded-full relative z-20')}
    />
  );
}

function Glow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay }}
      exit={{ opacity: 0 }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400"
    />
  );
}
