import { memo } from "react";
import { FlipWords } from "../ui/flipwords";

const words = ["Hello, I'm Anurag Bevinal"];

const Maintext = memo(() => (
  <section className="w-full inline-flex p-5 md:p-10 mt-10 bg-transparent">
    <div className="w-full lg:w-[75%] flex flex-col gap-3 leading-7 text-black dark:text-white text-lg md:text-3xl font-normal">
      <h1 className="text-xl md:text-4xl font-semibold">
        <FlipWords words={words} />
      </h1>

      <p className="text-neutral-500">Full-Stack Developer</p>

      <div className="flex items-center gap-2">
        <div className="relative w-2 h-2">
          <div className="absolute w-2 h-2 bg-green-300 rounded-full opacity-75 animate-ping  "></div>
          <div className="absolute w-2 h-2 bg-green-400 rounded-full"></div>
        </div>
        <p className="text-base text-neutral-500">
          Available for full-time role
        </p>
      </div>

      <p className="text-3xl">
        In the past two years, I co-founded Zlock Technologies and developed web
        startups, gaining diverse skills. I focus on creating scalable,
        user-friendly applications to solve real-world challenges, innovating
        and adapting in dynamic environments to deliver impactful solutions.
      </p>
    </div>
  </section>
));

Maintext.displayName = "Maintext";
export default Maintext;
