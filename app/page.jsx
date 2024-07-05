import React from "react";
import Maintext from "@/components/self/Maintext";
import { Table } from "@/components/self/Table";
import Cta from "@/components/self/cta";
import SoundButton from "@/components/self/soundButton";
import Projects from "@/components/self/Projects";

export default function Home() {
  return (
    <section className="flex flex-col w-full items-center justify-center">
      <Maintext />
      <Table />
      <Projects/>
      <Cta />
      </section>
  );
}
