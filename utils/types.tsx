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

export type TProjectCategory = {
  displayName: string;
  slug: string;
};

export type TMediaCategory = {
  displayName: string;
  slug: string;
};

export type TMediaItem = {
  talkTitle: string;
  abstract: string;
  conferenceName: string;
  conferenceYear: string;
  link: string;
  category: TMediaCategory;
};
