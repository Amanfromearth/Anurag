import { memo } from 'react';
import { FlipWords } from '../ui/flipwords';

const WORDS = ["Hello, I'm Anurag Bevinal"];

const MainText = memo(() => (
  <section className="w-full p-5 md:p-10 mt-8 bg-transparent">
    <div className="w-full lg:w-3/4 flex flex-col gap-3 text-black dark:text-white">
      <h1 className="text-xl md:text-4xl font-semibold">
        <FlipWords words={WORDS} />
      </h1>
      <p className="text-neutral-500 text-lg md:text-3xl">
        Full-Stack Developer
      </p>
      <div className="flex items-center gap-2">
        <span className="relative w-2 h-2">
          <span className="absolute w-2 h-2 bg-green-300 rounded-full opacity-75 animate-ping"></span>
          <span className="absolute w-2 h-2 bg-green-400 rounded-full"></span>
        </span>
        <p className="text-base text-neutral-500">
          Available for full-time role
        </p>
      </div>
      <p className="text-lg md:text-3xl leading-7">
        In the past two years, I co-founded Zlock Technologies and developed web startups, 
        gaining diverse skills. I focus on creating scalable, user-friendly applications 
        to solve real-world challenges, innovating and adapting in dynamic environments 
        to deliver impactful solutions.
      </p>
    </div>
  </section>
));

MainText.displayName = 'MainText';

export default MainText;