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

export type TWorkExperience = {
  role: string;
  period: string;
  companyName: string;
  companyLogo: StaticImageData;
};

export type TEducation = {
  degree: string;
  period: string;
  schoolName: string;
  schoolLogo: StaticImageData;
};
