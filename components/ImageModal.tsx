import { TGalleryObj } from "@/utils/types";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";

type TImageModalProps = {
  imgObj: TGalleryObj;
  isOpen: boolean;
  onClose: () => void;
};
export default function GalleryImageDialog({
  imgObj,
  isOpen,
  onClose,
}: TImageModalProps) {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur" />
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel
            className="w-full h-full space-y-4 p-4"
            onClick={onClose}
          >
            <DialogTitle className="flex items-center justify-between text-black dark:text-white">
              <p> {imgObj.description}</p>
              <span
                className="cursor-pointer text-xl hidden md:block"
                title="Close"
                onClick={onClose}
              >
                X
              </span>
            </DialogTitle>
            <div className="relative h-full w-full rounded-2xl">
              <Image
                className="absolute m-auto rounded-2xl cursor-zoom-out "
                src={imgObj.path}
                fill
                objectFit="contain"
                alt={imgObj.description}
                priority
                placeholder="blur"
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
