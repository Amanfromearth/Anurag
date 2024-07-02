"use client";
import { ArrowUp } from "lucide-react";
import React, { useCallback, useState, useEffect } from "react";
import useSound from "use-sound";

const Footer = () => {
  const [play] = useSound("/click2.mp3");
  const [isLoading, setIsLoading] = useState(false);
  
  const handletop = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    // This ensures that the handletop function is only used after the component mounts
    if (typeof window !== "undefined") {
      window.handletop = handletop;
    }
  }, [handletop]);

  const handleClick = useCallback(
    (event, url) => {
      event.preventDefault();
      if (isLoading) return;
      setIsLoading(true);
      play();
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.href = url;
        }
      }, 300);
    },
    [play, isLoading]
  );

  return (
    <footer id="footer" className="w-full bottom-0 z-30 h-16 flex items-center justify-between px-4 py-4 md:px-8 text-black dark:text-white md:text-xl bg-neutral-200 dark:bg-dark-blue border-t border-neutral-700">
      <button className="group flex flex-col cursor-pointer" onClick={handletop}>
        <div className="flex flex-row items-center gap-1 group">Back to Top <ArrowUp className="group-hover:-translate-y-1 transition-all ease-in-out duration-300"/></div>
        <div className="w-0 h-[2px]  bg-black dark:bg-white group-hover:w-full transition-all ease-in-out duration-300" />
      </button>
      
      <FooterLink href="/about" onClick={handleClick}>
       Contact Me
      </FooterLink>
    </footer>
  );
};

const FooterLink = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={(e) => onClick(e, href)}
    className="group flex flex-col cursor-pointer"
  >
    {children}
    <div className="w-0 h-[2px] bg-black dark:bg-white group-hover:w-full transition-all ease-in-out duration-300" />
  </a>
);
export default Footer;
