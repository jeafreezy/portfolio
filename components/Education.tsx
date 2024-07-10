import EducationIcon from "./icons/EducationIcon";

const Education = () => {
  return (
    <div className="h-[400px] ring-1 col-span-1 p-4 md:p-10 ring-border-darker backdrop-blur dark:text-brand-text-light dark:ring-white/10">
      <span className="flex items-center gap-x-4">
        <EducationIcon className="icons icon-fill" />
        <p className="text-sm font-medium text-brand-text dark:text-brand-text-light">
          Education
        </p>
      </span>
    </div>
  );
};

export default Education;
