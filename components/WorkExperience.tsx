import EducationIcon from "./icons/EducationIcon";
import WorkIcon from "./icons/WorkIcon";

const WorkExperience = () => {
  return (
    <div className="h-[400px] ring-1 col-span-1 p-4 md:p-10 ring-border-darker backdrop-blur dark:text-brand-text-light dark:ring-white/10">
      <span className="flex items-center gap-x-4">
        <WorkIcon className="icons icon-text fill-none" />
        <p className="text-sm font-medium text-brand-text dark:text-brand-text-light">
          Work Experience
        </p>
      </span>
    </div>
  );
};

export default WorkExperience;
