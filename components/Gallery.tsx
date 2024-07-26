"use client";

import Image from "next/image";
import BlurFade from "@/components/BlurFade";
import { galleryImages } from "@/utils/config";
import { useCallback, useState } from "react";
import { TGalleryObj } from "@/utils/types";
import GalleryImageDialog from "./ImageModal";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => setIsOpen(false), []);
  const [galleryPreview, setGalleryPreviewObj] = useState<TGalleryObj | any>(
    {}
  );
  return (
    <>
      <GalleryImageDialog
        imgObj={galleryPreview}
        isOpen={isOpen}
        onClose={closeModal}
      />
      <section className="flex flex-col gap-y-10">
        <div className="columns-2 gap-2 lg:gap-4 lg:columns-3">
          {galleryImages.map((imgObj, idx) => (
            <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
              <Image
                className="mb-4 size-full rounded-lg object-contain cursor-zoom-in hover:scale-95 transition-all"
                src={imgObj.path}
                width={imgObj.width}
                height={imgObj.height}
                alt={`Gallery Image ${idx + 1}`}
                placeholder="blur"
                onClick={() => {
                  setGalleryPreviewObj(imgObj);
                  setIsOpen(true);
                }}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
