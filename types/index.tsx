import { StaticImageData } from "next/image";

export type TGalleryObj = {
  width?: number;
  height?: number;
  path: StaticImageData;
  description: string;
};

export enum GalleryMode {
  MAP = "map",
  GRID = "grid",
}
