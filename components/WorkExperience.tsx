import { APP_CONTENT } from "@/content/content";
import WorkIcon from "./icons/WorkIcon";
import { TWorkExperience } from "@/types";
import Image from "next/image";
import DownloadIcon from "./icons/DownloadIcon";
import Link from "next/link";

const WorkExperience = () => {
  return (
    <div className=" w-full flex flex-col gap-y-6 rounded-xl col-span-1 p-4 md:p-6 brand-ring  backdrop-blur dark:text-brand-text-light ">
      <div className="flex items-center gap-x-4">
        <WorkIcon className="icons icon-text fill-none" />
        <p className="text-sm font-medium text-brand-text dark:text-brand-text-light">
          Work Experience
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        {APP_CONTENT.workExperience.map((workExperience, id) => (
          <WorkExperienceCard experience={workExperience} key={id} />
        ))}
      </div>
      <Link href={APP_CONTENT.cvLink} target="blank">
        <button className="flex items-center justify-center gap-x-4 w-full p-3 text-brand-text dark:text-brand-text-light/50 bg-brand-bg/5 hover:bg-brand-bg/10 dark:hover:bg-brand-bg/50 transition-all duration-300 dark:bg-brand-bg rounded-md">
          <p className="text-sm"> Download CV </p>
          <DownloadIcon className="icons w-4 h-4 icon-text" />
        </button>
      </Link>
    </div>
  );
};

export default WorkExperience;

const WorkExperienceCard = ({
  experience,
}: {
  experience: TWorkExperience;
}) => {
  return (
    <div className="flex w-full gap-x-4">
      <div className="relative w-14 h-12  max-w-full flex items-center justify-center">
        <Image
          src={experience.companyLogo}
          priority
          placeholder="blur"
          fill
          className="rounded-full p-0.5 brand-ring object-cover"
          alt={experience.companyName}
        />
      </div>
      <div className="flex flex-col w-full space-y-1">
        <p className="text-sm font-medium ">{experience.companyName}</p>
        <div className="flex justify-between">
          <p className="text-sm font-light  text-brand-text/60 dark:text-brand-text-light/50 ">
            {experience.role}
          </p>
          <p className="text-sm font-light text-brand-text/60 dark:text-brand-text-light/50 ">
            {experience.period}
          </p>
        </div>
      </div>
    </div>
  );
};
