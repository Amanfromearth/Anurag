import { memo } from 'react';
import { FlipWords } from '../ui/flipwords';
const words = ["Hello, I'm Anurag"]
const Maintext = memo(() => (
  <section className="w-full p-5 md:p-10 mt-28 md:mt-20 bg-transparent">
    <div className="w-[90%] md:w-[38ch] leading-7 text-black dark:text-white text-lg md:text-3xl font-normal">
      <h1><FlipWords words={words} /></h1>
      <p className="text-neutral-500 py-2">
        Full-Stack Developer - RIT Graduate
      </p>
      <p>
        Over the past two years as a developer, I've built web-startups and co-founded Zlock Technologies Pvt Ltd. My journey has equipped me with a diverse set of skills. I'm deeply passionate about using technology to address real-world challenges, dedicated to developing user-friendly, scalable applications that cater to the needs of users and businesses. My experience has sharpened my ability to innovate and adapt in dynamic environments, propelling solutions that deliver tangible results.
      </p>
    </div>
  </section>
));

Maintext.displayName = 'Maintext';

export default Maintext;