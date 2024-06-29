"use client";
import { ArrowUp } from "lucide-react";
import React, { useCallback, useState } from "react";
import useSound from "use-sound";

const Footer = () => {
  const [play] = useSound("/click2.mp3");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(
    (event, url) => {
      event.preventDefault();
      if (isLoading) return;

      setIsLoading(true);
      play();
      setTimeout(() => {
        window.location.href = url;
      }, 300);
    },
    [play]
  );
  return (
    <footer className="w-full bottom-0 z-50 h-16 flex items-center justify-between px-4 py-4 md:px-8 text-black dark:text-white md:text-xl bg-neutral-200 dark:bg-dark-blue border-t border-neutral-700">
      <FooterLink  href="#top" onClick={handleClick}>
        Back to Top 
      </FooterLink>
      
      <FooterLink href="/about" onClick={handleClick}>
        About me
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
