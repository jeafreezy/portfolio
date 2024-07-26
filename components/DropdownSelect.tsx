import { TMediaCategory, TProjectCategory } from "@/utils/types";
import { Field, Select } from "@headlessui/react";
import { cn } from "@/lib/cn";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";

const DropdownSelect = ({
  categories,
  onClick,
}: {
  categories: TProjectCategory[] | TMediaCategory[];
  onClick: (e: any) => void;
}) => {
  return (
    <div className="w-full md:hidden">
      <Field>
        <div className="relative">
          <Select
            className={cn(
              "mt-3 block w-full appearance-none rounded-lg border-none bg-black/5 dark:bg-white/5 p-3 text-sm/6 dark:text-white text-black",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
              // Make the text of each option black on Windows
              "*:text-black"
            )}
            aria-label="Project category"
            onChange={(e) => onClick(e.target.value)}
          >
            <option value={"all"}>Select category</option>
            {categories.map((category, id) => (
              <option value={category.slug} key={`project-category-${id}`}>
                {category.displayName}
              </option>
            ))}
          </Select>
          <ChevronDownIcon
            className="icons icon-fill group pointer-events-none absolute top-2 right-2.5 size-8"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  );
};

export default DropdownSelect;
