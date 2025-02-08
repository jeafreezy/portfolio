import { APP_CONTENT } from "@/utils/content";
import EducationIcon from "./icons/EducationIcon";
import ExperienceCard from "./ExperienceCard";

const Education = () => {
  return (
    <div className=" w-full flex flex-col gap-y-6 rounded-xl col-span-1 p-3 md:p-6 brand-ring  backdrop-blur dark:text-brand-text-light ">
      <div className="flex items-center gap-x-4">
        <EducationIcon className="icons icon-fill" aria-hidden />
        <p className="text-sm font-medium text-brand-text dark:text-brand-text-light">
          Education
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        {APP_CONTENT.education.map((education, id) => (
          <ExperienceCard
            entityLogo={education.schoolLogo}
            entityName={education.schoolName}
            period={education.period}
            role={education.degree}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
