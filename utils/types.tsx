import { StaticImageData } from "next/image";

export type TGalleryObj = {
  width?: number;
  height?: number;
  path: StaticImageData;
  description: string;
};

export type TColorScheme = {
  togglePreferredColorScheme?: () => void;
  preferredColorScheme?: string;
};

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

export type TArticle = {
  date?: string;
  title?: string;
  exceprt?: string;
  link?: any;
};

export type TStackItem = {
  exceprt: string;
  title: string;
};

export type TProjectCategory = {
  displayName: string;
  slug: string;
};
