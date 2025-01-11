"use client";

import Image from "next/image";
import BlurFade from "@/components/BlurFade";
import { galleryImages } from "@/utils/config";
import { useCallback, useEffect, useState } from "react";
import GalleryImageDialog from "./ImageModal";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => setIsOpen(false), []);


  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleKeyDown = useCallback((event: { key: string; }) => {
    if (event.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    } else if (event.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }
  }, [galleryImages.length]);

  useEffect(() => {
    const listener = (event: { key: string; }) => {
      if (isOpen) {
        handleKeyDown(event);
      }
    };

    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <GalleryImageDialog
        imgObj={galleryImages[currentIndex]}
        isOpen={isOpen}
        onClose={closeModal}
      />
      <section className="flex flex-col gap-y-10">
        <div className="columns-2 gap-2 lg:gap-4 lg:columns-3">
          {galleryImages.map((imgObj, idx) => (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <button
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsOpen(true);
                }}>
                <Image
                  className="mb-4 size-full rounded-lg object-contain cursor-zoom-in hover:scale-95 transition-all"
                  src={imgObj.path}
                  width={imgObj.width}
                  height={imgObj.height}
                  alt={imgObj.description}
                  placeholder="blur"
                />
              </button>
            </BlurFade>

          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
