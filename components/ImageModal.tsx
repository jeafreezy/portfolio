import { TGalleryObj } from "@/app/page";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";

type TImageModalProps = {
  imgObj: TGalleryObj;
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
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
        <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <DialogPanel className="max-w-lg space-y-4 p-12" onClick={onClose}>
            <DialogTitle className="font-bold">{imgObj.alt}</DialogTitle>
            <Description>{imgObj.description}</Description>
            <Image
              className="w-[80%] h-[80%] rounded-lg object-contain cursor-zoom-out transition-all duration-500"
              src={imgObj.path}
              fill
              alt={imgObj.alt}
              priority
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
