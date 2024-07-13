import React from "react";
import Image from "next/image";
import { readdir } from "fs/promises";
import path from "path";
import { ArrowRightIcon } from "lucide-react";
import ImageGallery from "@/components/self/imagegallery";
import Meteors from "@/components/magicui/meteor";

export async function generateMetadata(){
  return {
    title: "Anurag's Dev Portfolio",
    description: "Experienced full-stack developer specializing in scalable web applications and project leadership. Driven by a passion for cutting-edge technologies and creating innovative solutions to real-world problems.",
    alternates: {
      canonical: "https://anurag.be/about",
    },
  }
}
async function getImages() {
  const imageDirectory = path.join(process.cwd(), "public/gallery");
  try {
    const filenames = await readdir(imageDirectory);
    return filenames.map((filename) => ({
      src: `/gallery/${filename}`,
      alt: filename.replace(/\.[^/.]+$/, ""),
    }));
  } catch (error) {
    console.error("Error reading image directory:", error);
    return [];
  }
}

const EducationItem = ({ degree, institution, period }) => (
  <div className="flex flex-col space-y-1">
    <p className="font-semibold text-black dark:text-slate-100">{degree}</p>
    <p className="cursor-pointer group flex items-center w-fit">
      {institution}
      <ArrowRightIcon className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 duration-200 w-5 ml-1" />
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400">{period}</p>
  </div>
);

const SkillItem = ({ category, skills }) => (
  <div className="relative cursor-pointer hover:border-neutral-400 transition-colors ease-in-out duration-300 group overflow-hidden rounded-lg border bg-neutral-950 p-5 md:shadow-xl">
    <Meteors className="hidden group-hover:block" number={30} />
    <div className="w-full h-full">
      <h3 className="font-semibold mb-2">{category}</h3>
      <ul className="list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Page = async () => {
  const images = await getImages();

  const skills = [
    { category: "Frontend", skills: ["ReactJs", "NextJs"] },
    { category: "Backend", skills: ["NodeJs", "ExpressJs"] },
    { category: "Styling", skills: ["CSS", "TailwindCSS", "Framer Motion"] },
    { category: "Project Management", skills: ["GitHub"] },
    { category: "State Management", skills: ["Zustand"] },
    { category: "Database Management", skills: ["PrismaORM (PostgreSQL)"] },
  ];

  return (
    <section className="w-full">
      <div className="w-full border-b border-neutral-500">
        <Image
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABeAF4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDuWqCTpUrGq8hrtOVFaY1RlPWrczVQlapZpEic00Gmu1MDc1JqWkNWYzVJGqzG1UiWXENTKaqxtU6tVIxkTA0tRg07NUQTlqrytSs1QSvSBMgnbrVCZ6nnes+d+tSzWLGu/NMElV5JOaj83nrSsaXNFJKtRvWTHLzVqKSqSJbNWN6sK9Z0UlWEeqMWy6Gp26qyvT91BBIz1XlfilZqrytxSuUkV7h6zbh+tWrhqzLh6ls1iiGWTmofN5qKZ+TVYyc0I0SNKOX3q5DLWLHLVyGSrREkbcUlW43rIhkq9E9DMWaCPT91VUapA1TcglZqrytTy1V5TWXOdCiVLhutZdy3WtC4NZlyetS5m0YGfO1VGfmp7g9aou3NCmbqmWY5OauwSdKyUbmrsD1qpGc6ZtQPV+FqyLdulaMDUORzygaSNUoaqsZqYGo5jPlJSagkNSE1DJXI5nWoFSfvWZc960pqzrjvUOZ0QgZVzWfIea0bkdazpetCqHVGAxTzVyBqoqeatQGto1CJ0zYtm6VpQHpWTbHpWpbmq5zknA0YjxUwqvFVgUuYxcB5qGSpTUT9K4rnSkVJqz7jvWhNVC4qGzogjKuR1rNmrTue9Zs3WlzHXBEA61Zg61V71agrWMhTialt2rVt+1ZNt2rWt+1apnFNGhFVgVXiqcU7mDR//9k="
          placeholder="blur"
          priority
          src="/profile-pic2.jpg"
          width={1024}
          height={1024}
          alt="Anurag Bevinal's Photo"
          className="w-full h-auto"
        />
      </div>
      <div className="space-y-10 p-8 mt-8 w-full leading-7 text-black dark:text-slate-300 text-lg">
        <div className="space-y-10">
          <div className="space-y-6 text-lg max-w-3xl">
            <h1 className="text-3xl font-semibold text-black dark:text-white">
              Hello, I'm Anurag
            </h1>
            <p>
              Over the past two years as a developer, I've built web-startups
              and co-founded Zlock Technologies Pvt Ltd. My journey has equipped
              me with a diverse set of skills.
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
            <h2 className="text-3xl  font-semibold text-black dark:text-white border-b pb-2">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
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

export default Page;
