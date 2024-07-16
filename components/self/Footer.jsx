"use client";
import { ArrowUp } from "lucide-react";
import React, { useCallback, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useDrawerStore } from "@/lib/store/usedrawerstore";
import { useSound } from "../hooks/usesound";

const Footer = () => {
  const playSound = useSound();  // Use our custom useSound hook
  const [isLoading, setIsLoading] = useState(false);
  const { setIsOpen } = useDrawerStore();

  const handleTop = useCallback(() => {
    playSound();
    scroll.scrollToTop({
      containerId: "scrollable-content",
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }, [playSound]);

  const handleClick = useCallback(
    (event, url) => {
      event.preventDefault();
      if (isLoading) return;
      setIsLoading(true);
      playSound();
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.location.href = url;
        }
      }, 300);
    },
    [playSound, isLoading]
  );

  return (
    <footer id="footer" className="w-full bottom-0 z-30 h-16 flex items-center justify-between px-4 py-4 md:px-8 text-black dark:text-white md:text-xl bg-dark-blue border-t border-neutral-700">
      <button className="group flex flex-col text-white cursor-pointer" onClick={handleTop}>
        <div className="flex flex-row items-center gap-1 group">
          Back to Top <ArrowUp className="group-hover:-translate-y-1 transition-all ease-in-out duration-300" />
        </div>
        <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all ease-in-out duration-300" />
      </button>
      <button className="group text-white flex flex-col cursor-pointer" onClick={() => setIsOpen(true)}>
        Contact Me
        <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all ease-in-out duration-300" />
      </button>
    </footer>
  );
};

export default Footer;