import { memo } from 'react';
import { FlipWords } from '../ui/flipwords';
const words = ["Hello, I'm Anurag Bevinal"]
const Maintext = memo(() => (
  <section  className="w-full p-5 md:p-10 mt-10 md:mt-20 bg-transparent">
    <div className="w-full lg:w-[75%] leading-7 text-black dark:text-white text-lg md:text-3xl font-normal">
      <h1 className='text-xl md:text-4xl font-semibold'><FlipWords words={words} /></h1>
      <p className="text-neutral-500 py-2">
        Full-Stack Developer
      </p>
      <p>
      In the past two years, I co-founded Zlock Technologies and developed web startups, gaining diverse skills. I focus on creating scalable, user-friendly applications to solve real-world challenges, innovating and adapting in dynamic environments to deliver impactful solutions.
      </p>
    </div>
  </section>
));

Maintext.displayName = 'Maintext';

export default Maintext;