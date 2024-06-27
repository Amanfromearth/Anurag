"use client";

import Image from "next/image";
import useSound from "use-sound";
import { useState, useCallback } from "react";

const Nav = () => {
  const [play] = useSound("/click2.mp3");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback((event, url) => {
    event.preventDefault();
    if (isLoading) return;
    
    setIsLoading(true);
    play();
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  }, [play, isLoading]);

  return (
    <nav className="w-full sticky top-0 z-50 h-16 flex items-center justify-between px-4 py-4 md:px-8 text-black dark:text-white md:text-xl bg-neutral-200 dark:bg-dark-blue border-b border-neutral-700">
      <NavLink href="/" onClick={handleClick}>
        Projects
      </NavLink>
      <Image
        className="h-full w-auto"
        src="/logo.png"
        width={500}
        height={500}
        alt="Logo"
      />
      <NavLink href="/about" onClick={handleClick}>
        About me
      </NavLink>
    </nav>
  );
};

const NavLink = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={(e) => onClick(e, href)}
    className="group flex flex-col cursor-pointer"
  >
    {children}
    <div className="w-0 h-[2px] bg-black dark:bg-white group-hover:w-full transition-all ease-in-out duration-300" />
  </a>
);

export default Nav;