import Maintext from "@/components/self/Maintext";
import { Table } from "@/components/self/Table";
import Projects from "@/components/self/Projects";
import Currently from "@/components/self/currently";

export const metadata = {
  description:
    "Full-stack developer with experience in building scalable web applications and leading projects from concept to deployment. Passionate about learning new technologies and solving real-world challenges through innovative solutions. Anurag Bevinal",
  alternates: {
    canonical: "https://anurag.be/",
  },
  openGraph: {
    images: "/header.webp",
    locale: "en_US",
    site_name: "Anurag Bevinal's Portfolio",
  },
};

export default function Home() {
  return (
    <section className="px-5 md:px-10 flex flex-col w-full items-center justify-center">
      <Maintext />
      <Table />
      <Projects />
      <Currently />
    </section>
  );
}
