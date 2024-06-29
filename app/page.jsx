import React from "react";
import Maintext from "@/components/self/Maintext";
import { Table } from "@/components/self/Table";
import Cta from "@/components/self/cta";
import SoundButton from "@/components/self/soundButton";
import Projects from "@/components/self/Projects";

export default function Home() {
  return (
    <>
      <Maintext />
      <Table />
      <Projects/>
      <SoundButton>Click for ping!</SoundButton>
      <Cta />
    </>
  );
}
