"use client";
import BlurFade from "@/components/BlurFade";
import GridIcon from "@/components/icons/GridIcon";
import MapIcon from "@/components/icons/MapIcon";
import GalleryImageDialog from "@/components/ImageModal";
import { APP_CONTENT } from "@/content/content";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import EmmanuelAvatar from "@/public/emmanuel_jolaiya.png";
import { galleryImages, navRoutes, socials } from "@/content/config";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import { GalleryMode, TGalleryObj } from "@/types";

export default function Home() {
  const pathname = usePathname();
  const [galleryMode, setGalleryMode] = useState(GalleryMode.GRID);
  const [isOpen, setIsOpen] = useState(false);
  const handleGalleryModeToggle = () => {
    if (galleryMode === GalleryMode.GRID) {
      setGalleryMode(GalleryMode.MAP);
    } else {
      setGalleryMode(GalleryMode.GRID);
    }
  };
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

      <header className="flex flex-col items-start gap-y-10">
        <div className="h-24 w-24 relative">
          <Link href={"/"}>
            <Image
              src={EmmanuelAvatar}
              placeholder="blur"
              alt="Emmanuel Jolaiya Avatar"
              fill
              priority
              className="absolute rounded-full p-0.5 h-9 w-9 ring-1 ring-border-light  dark:ring-border-dark"
              title="Emmanuel Jolaiya"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-y-6 max-w-3xl">
          <h1 className="text-black dark:text-brand-text-light text-4xl sm:text-5xl font-bold tracking-tight leading-relaxed">
            {APP_CONTENT.header.hero.en}
          </h1>
          <p className="text-brand-text dark:text-brand-text-light/80 text-base font-light leading-relaxed">
            {APP_CONTENT.header.heroBio.en}
          </p>
        </div>
        <div className="flex gap-x-6 items-center">
          {socials.map((socialNetwork) => (
            <span
              title={socialNetwork.title}
              className="flex items-center justify-center"
              key={`social-network-${socialNetwork.title}`}
            >
              <Link href={socialNetwork.url} target="blank">
                {
                  <socialNetwork.icon
                    className={`w-5 h-5 ${
                      socialNetwork.title === "Fiverr" && "w-8 h-8"
                    } stroke-1  fill-brand-text/60 dark:fill-brand-text-light/50 dark:hover:fill-brand-text-light/80 transition duration-75`}
                  />
                }
              </Link>
            </span>
          ))}
        </div>
      </header>
      <section className="flex flex-col gap-y-10">
        <div
          className="self-end flex items-center justify-center cursor-pointer"
          onClick={handleGalleryModeToggle}
          title={
            galleryMode == GalleryMode.MAP
              ? "Toggle grid view"
              : "Toggle map view"
          }
        >
          {galleryMode !== GalleryMode.MAP ? (
            <MapIcon className="icons icon-text" />
          ) : (
            <GridIcon className="icons icon-text" />
          )}
        </div>
        {galleryMode !== GalleryMode.MAP ? (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
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
        ) : (
          ""
        )}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-20">
        <WorkExperience />
        <Education />
      </section>
      <footer className="border-t text-sm border-border-darker dark:border-white/10 py-6 md:py-10 flex flex-col md:flex-row gap-y-6 items-center justify-between text-brand-text dark:text-brand-text-light/80  font-light leading-relaxed">
        <div className="flex flex-col">
          <ul className="flex items-center">
            {navRoutes.map((route, key) => (
              <Link href={route.route} key={`nav-item-${key}`}>
                <li
                  className={`relative flex items-center cursor-pointer px-2 py-2 transition hover:text-deep-purple dark:hover:text-light-purple ${
                    pathname === route.route &&
                    "text-deep-purple dark:text-light-purple"
                  } `}
                >
                  {pathname === route.route && (
                    <span className="transition duration-1000 h-px absolute -bottom-[5px] bg-gradient-to-r from-light-purple/20  via-deep-purple  to-light-purple/20 dark:from-light-purple/20 dark:via-light-purple dark:to-light-purple/20 inset-x-1"></span>
                  )}
                  {route.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-center text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Emmanuel Jolaiya. Design inspired by{" "}
          <span>
            <Link href={"https://spotlight.tailwindui.com/"} target="blank">
              Tailwind UI
            </Link>
          </span>{" "}
          and{" "}
          <span>
            <Link href={"https://dillion.io/"} target="blank">
              Dillion
            </Link>
          </span>
          .
        </div>
      </footer>
    </>
  );
}
