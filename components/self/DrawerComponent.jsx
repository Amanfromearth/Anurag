"use client";
import { useState, useEffect, useRef } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { FileText, Github, Mail, Share2 } from "lucide-react";
import Link from "next/link";

export default function DrawerComponent() {
  const [mounted, setMounted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [copied, setCopied] = useState(false);
  const scrollableRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    scrollableRef.current = document.getElementById("scrollable-content");

    const updatePosition = () => {
      if (scrollableRef.current) {
        const newPosition = scrollableRef.current.scrollTop;
        setScrollPosition(newPosition);
      }
    };

    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", updatePosition);
      updatePosition();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHidden(true);
          } else {
            setIsHidden(false);
          }
        });
      },
      { threshold: 0 }
    );

    const cta = document.getElementById("cta");
    const footer = document.getElementById("footer");

    if (cta) observerRef.current.observe(cta);
    if (footer) observerRef.current.observe(footer);

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", updatePosition);
      }
      if (observerRef.current) {
        if (cta) observerRef.current.unobserve(cta);
        if (footer) observerRef.current.unobserve(footer);
      }
    };
  }, []);

  if (!mounted) {
    return null;
  }
  const handleShareWebsite = () => {
    const websiteUrl = "https://anurag.be"; // Replace with your actual website URL

    navigator.clipboard
      .writeText(websiteUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  return (
    <Drawer>
      <DrawerTrigger
        className={`fixed bottom-7 z-30 right-7 transition-opacity duration-300 ${
          scrollPosition > 100 && !isHidden
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative inline-flex z- h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] z-30 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C8FF54_0%,#393BB2_50%,#C8FF54_100%)]" />
          <span className="inline-flex  z-40  h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Contact/Resume
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-full flex items-center justify-center ">
        <div className="max-w-xl p-5">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-center mb-4">
              Get in Touch
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-4 py-2 space-y-4">
            <Link
              href="mailto:anurag3b@gmail.com"
              className="w-full inline-flex items-center justify-start px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Mail className="mr-2 h-4 w-4" />
              anurag3b@gmail.com
            </Link>
            <button
              onClick={handleShareWebsite}
              className="w-full inline-flex items-center justify-start px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Share2 className="mr-2 h-4 w-4" />
              {copied ? "Copied URL!" : "Share My Website"}
            </button>
            <Link
              href="https://github.com/Amanfromearth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-start px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Profile
            </Link>
            <Link
              href="https://drive.google.com/file/d/1CDC2V-rU8DxTzAkkdqMgCfiwhZwiM3fS/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-start px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FileText className="mr-2 h-4 w-4" />
              View/Download Resume
            </Link>
          </div>
          <DrawerClose asChild className="px-4">
            <button className="mt-4 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Close
            </button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
