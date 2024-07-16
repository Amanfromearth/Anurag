// components/DrawerComponent.tsx
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
import { useDrawerStore } from "@/lib/store/usedrawerstore";


export default function DrawerComponent() {
  const [mounted, setMounted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [copied, setCopied] = useState(false);
  const scrollableRef = useRef(null);
  const observerRef = useRef(null);

  const { isOpen, setIsOpen } = useDrawerStore();

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

  const handleShareWebsite = () => {
    const websiteUrl = "https://anurag.be";
    navigator.clipboard
      .writeText(websiteUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  if (!mounted) {
    return null;
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
       <DrawerTrigger
        className={`fixed bottom-7 z-30 right-7 transition-opacity duration-300 ${
          scrollPosition > 100 && !isHidden
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] z-30 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C8FF54_0%,#393BB2_50%,#C8FF54_100%)]" />
          <span className="inline-flex  z-40  h-full w-full cursor-pointer items-center justify-center rounded-full bg-dark-blue px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Contact/Resume
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-full flex bg-neutral-950 items-center justify-center ">
        <div className="max-w-xl p-5">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-center mb-4">
              Get in Touch
            </DrawerTitle>
          </DrawerHeader>
          <div className="px-4 py-2 space-y-4">
            <Button
              variant="outline"
              className="w-full border-neutral-700 justify-start text-left font-normal"
              onClick={() =>
                (window.location.href = "mailto:anurag3b@gmail.com")
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              anurag3b@gmail.com
            </Button>
            <Button
              variant="outline"
              className="w-full border-neutral-700 justify-start text-left font-normal"
              onClick={handleShareWebsite}
            >
              <Share2 className="mr-2 h-4 w-4" />
              {copied ? "Copied URL!" : "Share My Website"}
            </Button>
            <Button
              variant="outline"
              className="w-full border-neutral-700 justify-start text-left font-normal"
              onClick={() =>
                window.open("https://github.com/Amanfromearth", "_blank")
              }
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Profile
            </Button>
            <Button
              variant="default"
              className="w-full"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1CDC2V-rU8DxTzAkkdqMgCfiwhZwiM3fS/view?usp=sharing",
                  "_blank"
                )
              }
            >
              <FileText className="mr-2 h-4 w-4" />
              View/Download Resume
            </Button>
          </div>
          <DrawerClose asChild className="px-4">
            <Button variant="outline" className="mt-4 w-full">
              Close
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}