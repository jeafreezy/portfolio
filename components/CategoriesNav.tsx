import { cn } from "@/lib/cn";
import { TMediaCategory, TProjectCategory } from "@/utils/types";

const CategoriesNav = ({
  categories,
  currentCategory,
  onClick,
}: {
  categories: TProjectCategory[] | TMediaCategory[];
  currentCategory: string;
  onClick: (e: any) => void;
}) => {
  return (
    <div className="hidden gap-x-4 overflow-x-scroll w-full md:flex">
      {categories.map((category, id) => (
        <div
          key={`project-category-${id}`}
          className={cn(
            `cursor-pointer whitespace-nowrap py-2 px-5 rounded-md font-normal ${
              currentCategory === category.slug
                ? "bg-black dark:bg-white text-white dark:text-brand-text transition-colors duration-300"
                : "text-brand-text/80 hover:text-brand-text dark:text-brand-text-light/80 dark:hover:text-brand-text-light"
            }`
          )}
          onClick={() => onClick(category.slug)}
        >
          {category.displayName}
        </div>
      ))}
    </div>
  );
};

export default CategoriesNav;
