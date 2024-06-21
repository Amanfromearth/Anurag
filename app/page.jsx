import Maintext from "@/components/self/Maintext";
import Nav from "@/components/self/Nav";
import TableComponent from "@/components/self/Table";
import Cta from "@/components/self/cta";
import SoundButton from "@/components/self/soundButton";


export default function Home() {
  return (
    <main className="flex h-fit w-full flex-col items-center justify-between">
      <section className="relative w-full  md:w-[960px] rounded flex flex-col items-center h-full md:mt-20 md:border border-neutral-700">
        <Nav />
        <Maintext/>
        <TableComponent/>
        <SoundButton >Click for ping!</SoundButton>
        <Cta/>
      </section>
    </main>
  );
}
