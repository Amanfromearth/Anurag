import React from "react";
import Maintext from "@/components/self/Maintext";
import { Table } from "@/components/self/Table";
import Cta from "@/components/self/cta";
import Projects from "@/components/self/Projects";
import Currently from "@/components/self/currently";

export const metadata = {
  description:
    "Full-stack developer with experience in building scalable web applications and leading projects from concept to deployment. Passionate about learning new technologies and solving real-world challenges through innovative solutions. Anurag Bevinal",
  canonical: "https://anurag.be/",}

export default function Home() {
  return (
    <section className="px-5 md:px-10 flex flex-col w-full items-center justify-center">
      <Maintext />
      <Table />
      <Projects/>
      <Currently/>
      <Cta />
      </section>
  );
}
