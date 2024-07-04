"use client";

import Image from "next/image";
import useSound from "use-sound";
import { useState, useCallback } from "react";
import Link from "next/link";

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
  }, [play]);

  return (
    <nav className="w-full sticky top-0 z-30 h-16 flex items-center justify-between px-4 py-4 md:px-8 text-white md:text-xl bg-dark-blue border-b border-neutral-700">
      <NavLink href="/#projects" onClick={handleClick}>
        Projects
      </NavLink>
      <a onClick={(e) => handleClick(e, "/")} className="h-full group" href="/">
        <Image
          className="h-full w-auto group-hover:rotate-180 ease-in-out duration-500"
          src="/logo.png"
          width={500}
          height={500}
          alt="Logo"
        />
      </a>
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
    <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all ease-in-out duration-300" />
  </a>
);

export default Nav;
