import { APP_CONTENT } from "@/utils/content";
import WorkIcon from "./icons/WorkIcon";
import DownloadIcon from "./icons/DownloadIcon";
import Link from "next/link";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    <div className=" w-full flex flex-col gap-y-6 rounded-xl col-span-1  p-3 md:p-6 brand-ring  backdrop-blur dark:text-brand-text-light ">
      <div className="flex items-center gap-x-4">
        <WorkIcon className="icons icon-text fill-none" />
        <p className="text-sm font-medium text-brand-text dark:text-brand-text-light">
          Work Experience
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        {APP_CONTENT.workExperience.map((workExperience, id) => (
          <ExperienceCard
            entityLogo={workExperience.companyLogo}
            entityName={workExperience.companyName}
            period={workExperience.period}
            role={workExperience.role}
            key={id}
          />
        ))}
      </div>
      <Link href={APP_CONTENT.cvLink} target="blank">
        <button className="flex items-center justify-center gap-x-4 w-full p-3 text-brand-text dark:text-brand-text-light bg-brand-bg/5 hover:bg-brand-bg/10 dark:hover:bg-brand-bg/50 transition-all duration-300 dark:bg-brand-bg rounded-md">
          <p className="text-sm p-1"> Download CV </p>
          <DownloadIcon className="icons w-4 h-4 icon-text" />
        </button>
      </Link>
    </div>
  );
};

export default WorkExperience;
