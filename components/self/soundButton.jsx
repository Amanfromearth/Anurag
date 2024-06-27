"use client";

import useSound from "use-sound";

const SoundButton = ({ children }) => {
  const [play] = useSound("/click2.mp3");
  return (
    <button
      onClick={play}
      className="group m-6 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
    >
      <div className="group relative h-full overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-3 text-neutral-50">
        <span className="relative z-10  rounded-md">{children}</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-neutral-700 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
        </span>
      </div>
    </button>
  );
};

export default SoundButton;
