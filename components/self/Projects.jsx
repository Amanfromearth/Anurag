import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projectsData = [
  {
    image: "/naminggenie.png",
    title: "naminggenie",
    description: "Generates Domain names which are available to register based on the description of the website",
    websiteUrl: "https://naminggenie.com",
    readMoreUrl: "/projects/naminggenie"
  },
  {
    image: "/remotion.png",
    title: "Kineticx",
    description: "Generates a typography stop motion video based on the description user provides",
    websiteUrl: "https://kineticx.vercel.app/dashboard",
    readMoreUrl: "/projects/kineticx"
  },
];

const ProjectCard = ({ image, title, description, websiteUrl, readMoreUrl }) => (
  <div className="max-w-3xl grid grid-rows-2 md:grid-rows-none md:grid-cols-2 bg-[#FFFFFF08] border-dashed border-2 m-3 p-3 rounded-lg border-neutral-600">
    <Image width={500} height={500} src={image} alt={title} className="w-full brightness-90 border-2 border-neutral-300 rounded-lg" />
    <div className="py-3 px-5 w-full flex flex-col justify-between">
      <div className="w-full flex flex-col gap-3">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="w-[80%] text-neutral-400">{description}</p>
      </div>
      <div className="w-full flex justify-center gap-3 text-xs md:text-sm items-center">
        <a href={websiteUrl} className="group relative inline-flex h-12 items-center justify-center rounded-full bg-neutral-800 px-3 md:px-6 font-medium text-neutral-200">
          <span>Visit Website</span>
          <div className="relative ml-1 h-5 w-5 overflow-hidden">
            <ArrowUpRight className="absolute transition-all ease-in-out duration-300 group-hover:rotate-45" />
          </div>
        </a>
        <a href={readMoreUrl} className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
          <span className="z-10 pr-2 group-hover:text-black transition-colors ease-in-out duration-300">Read More</span>
          <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-greeen transition-[width] ease-in-out duration-300 group-hover:w-[calc(100%-8px)]">
            <ArrowRight className="mr-3.5 text-black" />
          </div>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div  id="projects" className="w-full px-1 pt-16 md:px-10 flex flex-col gap-5">
    <h2 className="w-fit mx-4 sm:mx-0 scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0">
      Projects
    </h2>
    <div className="flex w-full items-center justify-center flex-col">
      {projectsData.map((project, index) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;