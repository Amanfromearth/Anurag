"use client";
import Image from "next/image";
import { useCallback } from "react";
import { useSound } from "../hooks/useSound";
import { useRouter } from 'next/navigation';

const Nav = () => {
  const playSound = useSound();
  const router = useRouter();

  const handleClick = useCallback((event, url) => {
    event.preventDefault();
    playSound();
    setTimeout(() => {
      router.push(url);
    }, 300);
  }, [playSound, router]);

  return (
    <nav className="w-full sticky top-0 z-30 h-16 flex items-center justify-between px-4 py-4 md:px-8 text-white md:text-xl bg-dark-blue border-b border-neutral-700">
      <NavLink href="/#projects" onClick={handleClick}>
        Projects
      </NavLink>
      <a onClick={(e) => handleClick(e, "/")} className="h-full group" href="/">
        <Image
          className="h-full w-auto group-hover:rotate-180 ease-in-out duration-500"
          src="/logo.webp"
          width={200}
          height={200}
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