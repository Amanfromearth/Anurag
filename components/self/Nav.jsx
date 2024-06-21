"use client";
import Image from "next/image";
import useSound from "use-sound";

const Nav = () => {
  const [play] = useSound("/click2.mp3");

  const handleClick = (event, url) => {
    event.preventDefault();
    play();
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  };

  return (
    <nav className="w-full text-white md:text-xl inline-flex absolute px-4 py-4 md:px-8 items-center justify-between top-0 h-16 border-b border-neutral-700">
      <a
        href="/about"
        onClick={(e) => handleClick(e, "/about")}
        className="group flex flex-col cursor-pointer"
      >
        Projects
        <div className="w-0 h-[2px] bg-white group-hover:w-full transition-all ease-in-out duration-300" />
      </a>
      <Image
        className="h-full w-fit rounded-sm"
        src="/logo.png"
        width={500}
        height={500}
      />
      <a
        href="/"
        onClick={(e) => handleClick(e, "/")}
        className="group flex flex-col cursor-pointer"
      >
        About me
        <div className="w-0 h-[2px] bg-white group-hover:w-full ease-in-out transition-all duration-300" />
      </a>
    </nav>
  );
};

export default Nav;
