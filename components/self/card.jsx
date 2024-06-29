"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`w-2/5 h-72 group border rounded-lg p-[0.5px] bg-[linear-gradient(#4f4f53,#28292e_8%)]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full bg-[#141416] rounded-lg overflow-hidden relative">
        <motion.div
          className={`z-10 bg-${color}-500 group-hover:opacity-65 transition-opacity ease-in-out duration-500 opacity-50 blur-[60px] rounded-full w-[150px] h-[150px] absolute`}
          initial={{ x: 0, y: 210 }}
          animate={isHovered ? {
            x: [0, 260, 0],
            y: [110, 260, 110],
          } : { x: 0, y: 210 }}
          transition={isHovered ? {
            x: {
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            y: {
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          } : {}}
        />
        <div className={`w-full flex flex-col p-10 text-whtie z-20 h-full backdrop-blur-3xl`}>
          <h2 className="font-semibold text-2xl">naminggenie</h2>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="w-full p-5 space-y-10 md:p-10">
      <h2 className="scroll-m-20 w-fit border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Projects
      </h2>
      <div className="w-full px-28 flex gap-4 items-center justify-center overflow-hidden">
        <Card color="purple" />
        <Card color="orange" />
        <Card color="green" />
      </div>
    </section>
  );
};