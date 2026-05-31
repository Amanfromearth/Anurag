import { useCallback, useEffect, useRef, useState } from 'react';
import { FileText, Mail } from 'lucide-react';

import { GithubIcon, LinkedinIcon } from '@/components/react/brand-icons';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { CONTACT_OPEN_EVENT } from '@/lib/contact';

const RESUME_URL =
  'https://drive.google.com/file/d/1WNK8TSl9Hi0EYD6Qcr0HctaAOYGlPJf5/view?usp=drive_link';

export default function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Open the drawer when any vanilla opener dispatches the contact event.
  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener(CONTACT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONTACT_OPEN_EVENT, open);
  }, []);

  // Track scroll position and hide the floating trigger over the CTA/footer.
  useEffect(() => {
    const scrollable = document.getElementById('scrollable-content');

    const updatePosition = () => {
      if (scrollable) setScrollPosition(scrollable.scrollTop);
    };

    scrollable?.addEventListener('scroll', updatePosition);
    updatePosition();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsHidden(entry.isIntersecting));
      },
      { threshold: 0 },
    );

    const cta = document.getElementById('cta');
    const footer = document.getElementById('footer');
    if (cta) observerRef.current.observe(cta);
    if (footer) observerRef.current.observe(footer);

    return () => {
      scrollable?.removeEventListener('scroll', updatePosition);
      observerRef.current?.disconnect();
    };
  }, []);

  const openMail = useCallback(() => {
    window.location.href = 'mailto:anurag3b@gmail.com';
  }, []);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger
        className={`fixed bottom-7 z-30 right-7 transition-opacity duration-300 ${
          scrollPosition > 100 && !isHidden
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] z-30 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C8FF54_0%,#393BB2_50%,#C8FF54_100%)]" />
          <span className="inline-flex z-40 h-full w-full cursor-pointer items-center justify-center rounded-full bg-dark-blue px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Contact/Resume
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-full flex bg-neutral-950 items-center justify-center">
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
              onClick={openMail}
            >
              <Mail className="mr-2 h-4 w-4" />
              anurag3b@gmail.com
            </Button>
            <Button
              variant="outline"
              className="w-full border-neutral-700 justify-start text-left font-normal"
              onClick={() =>
                window.open('https://www.linkedin.com/in/anuragbevinal/', '_blank')
              }
            >
              <LinkedinIcon className="mr-2 h-4 w-4" />
              Linkedin Profile
            </Button>
            <Button
              variant="outline"
              className="w-full border-neutral-700 justify-start text-left font-normal"
              onClick={() =>
                window.open('https://github.com/Amanfromearth', '_blank')
              }
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub Profile
            </Button>
            <Button
              variant="default"
              className="w-full"
              onClick={() => window.open(RESUME_URL, '_blank')}
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
