import Image from "next/image";
import React from "react";
import { readdir } from 'fs/promises';
import path from 'path';
import ImageGallery from "@/components/self/imagegallery";
import { ArrowRightIcon } from "lucide-react";

async function getImages() {
  try {
    const imageDirectory = path.join(process.cwd(), 'public/gallery');
    const imageFilenames = await readdir(imageDirectory);
    return imageFilenames.map(filename => ({
      src: `/gallery/${filename}`,
      alt: filename.replace(/\.[^/.]+$/, "")
    }));
  } catch (error) {
    console.error('Error reading image directory:', error);
    return []; // Return an empty array if there's an error
  }
}

const Page = async () => {
  const images = await getImages();

  return (
    <section>
      <div className="w-full border-b border-neutral-500">
        <Image
          src="/profile-pic2.jpg"
          width={1024}
          height={1024}
          alt="Anurag's profile picture"
          className="w-full h-auto"
        />
      </div>
      <div className="space-y-10 p-8 mt-8 w-full  leading-7 text-black dark:text-slate-300 text-lg md:text-xl">
      <div className="md:w-3/4 space-y-10">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-black dark:text-white">
            Hello, I'm Anurag
          </h1>
          <p>
            Over the past two years as a developer, I've built web-startups and
            co-founded Zlock Technologies Pvt Ltd. My journey has equipped me
            with a diverse set of skills.
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
        <div className="space-y-6 text-black dark:text-slate-200">
          <h2 className="text-3xl w-fit font-semibold text-black dark:text-white border-b pb-2">
            Education
          </h2>
          <div className="space-y-4">
            <EducationItem
              degree="Bachelor of Engineering - Electronics and Communication"
              institution="Ramaiah Institute of Technology"
              period="2019-2023"
            />
            <EducationItem
              degree="Pre University - PCMS"
              institution="Expert PU College"
              period="2017-2019"
            />
          </div>
        </div>
        </div>
        <ImageGallery initialImages={images} />
      </div>
    </section>
  );
};

const EducationItem = ({ degree, institution, period }) => (
  <div className="flex flex-col space-y-1">
    <p className="font-semibold text-black dark:text-slate-100">{degree}</p>
    <p className="cursor-pointer group flex items-center w-fit ">{institution}<ArrowRightIcon className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 duration-200 w-5 "/> </p>
    <p className="text-sm text-gray-600 dark:text-gray-400">{period}</p>
  </div>
);

export default Page;
