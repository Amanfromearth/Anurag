'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

const IMAGES_PER_LOAD = 10;

export default function ImageGallery({ initialImages }) {
  const [loadedCount, setLoadedCount] = useState(IMAGES_PER_LOAD);

  const imageSets = useMemo(() => {
    const sets = [];
    for (let i = 0; i < loadedCount; i += IMAGES_PER_LOAD) {
      sets.push(initialImages.slice(i, i + IMAGES_PER_LOAD));
    }
    return sets;
  }, [initialImages, loadedCount]);

  const loadMore = useCallback(() => {
    setLoadedCount(prevCount => Math.min(prevCount + IMAGES_PER_LOAD, initialImages.length));
  }, [initialImages.length]);

  return (
    <div className="space-y-6 text-slate-300">
      <h2 className="text-3xl font-semibold text-white border-b pb-2">
        Photo Gallery
      </h2>
      <p>Welcome to my visual diary. I've often been described by my friends as an average photographer, but I'll let you be the judge of that.</p>
      {imageSets.map((imageSet, setIndex) => (
        <div key={`set-${setIndex}`} className="columns-1 sm:columns-2 gap-4 space-y-4">
          {imageSet.map((image) => (
            <ImageItem key={image.src} image={image} />
          ))}
        </div>
      ))}
      {loadedCount < initialImages.length && (
        <LoadMoreButton onClick={loadMore} />
      )}
    </div>
  );
}

function ImageItem({ image }) {
  return (
    <div className="break-inside-avoid">
      <Image
        src={image.src}
        alt={image.alt}
        quality={75}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}

function LoadMoreButton({ onClick }) {
  return (
    <div onClick={onClick} className='w-full flex items-center justify-center'>
      <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-800 py-1 pl-6 pr-14 font-medium text-neutral-50">
        <span className="z-10 pr-2 group-hover:text-black transition-colors ease-in-out duration-300">Load More</span>
        <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-greeen transition-[width] ease-in-out duration-300 group-hover:w-[calc(100%-8px)]">
          <ArrowRight className="mr-3.5 text-black" />
        </div>
      </button>
    </div>
  );
}