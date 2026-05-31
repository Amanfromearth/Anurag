import { useCallback, useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export interface GalleryImage {
  src: string;
  srcSet?: string;
  width: number;
  height: number;
  alt: string;
}

const GALLERY_SIZES = '(min-width: 640px) 460px, 100vw';

const IMAGES_PER_LOAD = 10;

export default function ImageGallery({
  initialImages,
}: {
  initialImages: GalleryImage[];
}) {
  const [loadedCount, setLoadedCount] = useState(IMAGES_PER_LOAD);

  const imageSets = useMemo(() => {
    const sets: GalleryImage[][] = [];
    for (let i = 0; i < loadedCount; i += IMAGES_PER_LOAD) {
      sets.push(initialImages.slice(i, i + IMAGES_PER_LOAD));
    }
    return sets;
  }, [initialImages, loadedCount]);

  const loadMore = useCallback(() => {
    setLoadedCount((prev) => Math.min(prev + IMAGES_PER_LOAD, initialImages.length));
  }, [initialImages.length]);

  return (
    <div className="space-y-6 text-slate-300">
      <h2 className="text-3xl font-semibold text-white border-b pb-2">
        Photo Gallery
      </h2>
      <p>
        Welcome to my visual diary. I&apos;ve often been described by my friends
        as an average photographer, but I&apos;ll let you be the judge of that.
      </p>
      {imageSets.map((imageSet, setIndex) => (
        <div
          key={`set-${setIndex}`}
          className="columns-1 sm:columns-2 gap-4 space-y-4"
        >
          {imageSet.map((image) => (
            <div key={image.src} className="break-inside-avoid">
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={GALLERY_SIZES}
                width={image.width}
                height={image.height}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg outline outline-1 -outline-offset-1 outline-white/10"
              />
            </div>
          ))}
        </div>
      ))}
      {loadedCount < initialImages.length && (
        <div className="w-full flex items-center justify-center">
          <button
            onClick={loadMore}
            className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-800 py-1 pl-6 pr-14 font-medium text-neutral-50 transition-transform duration-150 ease-out active:scale-[0.96]"
          >
            <span className="z-10 pr-2 group-hover:text-black transition-colors ease-in-out duration-300">
              Load More
            </span>
            <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-greeen transition-[width] ease-in-out duration-300 group-hover:w-[calc(100%-8px)]">
              <ArrowRight className="mr-3.5 text-black" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
