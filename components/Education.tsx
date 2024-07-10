import { APP_CONTENT } from "@/content/content";
import { TEducation } from "@/types";
import Image from "next/image";
import EducationIcon from "./icons/EducationIcon";

const Education = () => {
  return (
    <div className=" w-full flex flex-col gap-y-6 rounded-xl col-span-1 p-4 md:p-6 brand-ring  backdrop-blur dark:text-brand-text-light ">
      <div className="flex items-center gap-x-4">
        <EducationIcon className="icons icon-fill" />
        <p className="text-sm font-medium text-brand-text dark:text-brand-text-light">
          Education
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        {APP_CONTENT.education.map((education, id) => (
          <EducationCard education={education} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Education;

const EducationCard = ({ education }: { education: TEducation }) => {
  return (
    <div className="flex w-full gap-x-4">
      <div className="relative w-14 h-12  max-w-full flex items-center justify-center">
        <Image
          src={education.schoolLogo}
          priority
          placeholder="blur"
          fill
          className="rounded-full p-0.5 brand-ring object-cover"
          alt={education.schoolName}
        />
      </div>
      <div className="flex flex-col w-full space-y-1">
        <p className="text-sm font-medium ">{education.schoolName}</p>
        <div className="flex justify-between">
          <p className="text-sm font-light  text-brand-text/60 dark:text-brand-text-light/50 ">
            {education.degree}
          </p>
          <p className="text-sm font-light text-brand-text/60 dark:text-brand-text-light/50 ">
            {education.period}
          </p>
        </div>
      </div>
    </div>
  );
};
