"use client";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
import { useDrawerStore } from "@/lib/store/usedrawerstore";
import Image from "next/image";
import { useState, useCallback } from "react";
import { useSound } from "../hooks/useSound";

const Cta = () => {
  const [hover, setHover] = useState(false);
  const { setIsOpen } = useDrawerStore();
  const playSound = useSound(); 

  const handleClick = useCallback(
    (event) => {
      event.preventDefault();
      playSound();
      setTimeout(() => {
        setIsOpen(true);
      }, 300);
    },
    [playSound, setIsOpen]
  );

  return (
    <section
      id="cta"
      className="w-full inline-flex items-center justify-center"
    >
      <GlowingStarsBackgroundCard className="w-full h-96" hover={hover}>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleClick}
          className="flex gloww active:translate-x-[3px] active:translate-y-[3px] active:shadow-sm border-2 items-center border-white w-64 md:w-80 justify-center p-3 gap-3 rounded-full text-white bg-black flex-row group hover:bg-[#C8FF54] transition-all duration-500 ease-in-out"
        >
          <div className="rounded-full group-hover:bg-white bg-[#C8FF54] text-black p-1 transition-all group-hover:rotate-180 duration-500 ease-in-out group-hover:translate-x-[193px] md:group-hover:translate-x-[242px]">
            <Image width={0} height={0} alt="logo" className="w-5 md:w-7" src="/zap.svg" />
          </div>
          <span className="group-hover:-translate-x-9 md:group-hover:-translate-x-11 transition-all duration-500 group-hover:text-black text-2xl md:text-3xl ease-in-out">
            {hover ? "Contact me now" : "Liked my Work?"}
          </span>
        </button>
      </GlowingStarsBackgroundCard>
    </section>
  );
};

export default Cta;