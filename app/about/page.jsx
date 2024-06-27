import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="w-full">
        <Image src="/profile-pic2.jpg" width={1024} height={1024} />
      </div>
      <div className=" space-y-8 p-8 mt-8 w-[100%] md:w-[75%] leading-7 text-black dark:text-slate-300 text-lg md:text-2xl font-normal">
        <h2 className="text-3xl font-semibold text-black dark:text-white">Hello, it's me Anurag </h2>
        <p className="">
          Over the past two years as a developer, I've built web-startups and
          co-founded Zlock Technologies Pvt Ltd. My journey has equipped me with
          a diverse set of skills.
        </p>
        <p>
          I'm deeply passionate about using technology to address real-world
          challenges, dedicated to developing user-friendly, scalable
          applications that cater to the needs of users and businesses.
        </p>
        <p>
          My experience has sharpened my ability to innovate and adapt in
          dynamic environments, propelling solutions that deliver tangible
          results.
        </p>
      </div>
    </section>
  );
};

export default page;
