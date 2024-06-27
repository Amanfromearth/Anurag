'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import SoundButton from './soundButton';

export default function ImageGallery({ initialImages }) {
  const [imageSets, setImageSets] = useState([initialImages.slice(0, 10)]);
  const [loadedCount, setLoadedCount] = useState(10);
  const [loadingStates, setLoadingStates] = useState([Array(10).fill(false)]);

  const loadMore = () => {
    const newCount = loadedCount + 10;
    const newImages = initialImages.slice(loadedCount, newCount);
    setImageSets(prevSets => [...prevSets, newImages]);
    setLoadedCount(newCount);
    setLoadingStates(prevStates => [...prevStates, Array(newImages.length).fill(false)]);
  };

  const handleImageLoad = (setIndex, imageIndex) => {
    setLoadingStates(prevStates => {
      const newStates = [...prevStates];
      newStates[setIndex][imageIndex] = true;
      return newStates;
    });
  };

  useEffect(() => {
    if (loadingStates.every(set => set.every(state => state))) {
      console.log('All images loaded, layout updated');
    }
  }, [loadingStates]);

  return (
    <div className="space-y-6 text-black dark:text-slate-300">
      <h2 className="text-3xl w-fit font-semibold text-black dark:text-white border-b pb-2">
        Photo Gallery
      </h2>
      <p>Welcome to my visual diary. I've often been described by my friends as an average photographer, but I'll let you be the judge of that.</p>
      {imageSets.map((imageSet, setIndex) => (
        <div key={`set-${setIndex}`} className="columns-1 sm:columns-2 gap-4 space-y-4">
          {imageSet.map((image, imageIndex) => (
            <div key={`image-${initialImages.indexOf(image)}`} className="break-inside-avoid">
              <Image
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-lg"
                onLoad={() => handleImageLoad(setIndex, imageIndex)}
              />
            </div>
          ))}
        </div>
      ))}
      {loadedCount < initialImages.length && (
        <div onClick={loadMore} className='w-full flex items-center justify-center'>
          <SoundButton>Load More</SoundButton>
        </div>
      )}
    </div>
  );
}