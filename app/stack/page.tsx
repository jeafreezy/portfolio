import { APP_CONTENT } from "@/utils/content";
import { TArticle, TStackItem } from "@/utils/types";

export default async function ArticlesPage({}) {
  return (
    <div className="min-h-screen flex flex-col gap-y-20  py-10 mb-10">
      <div className="w-full space-y-8 max-w-3xl">
        <h1 className="text-black dark:text-brand-text-light text-3xl sm:text-5xl font-bold leading-normal md:leading-[60px]">
          {APP_CONTENT.stacks.hero.en}
        </h1>
        <div className="flex flex-col gap-y-6 text-brand-text text-left dark:text-brand-text-light/80 text-base font-light leading-normal md:leading-relaxed">
          <p>{APP_CONTENT.stacks.description}</p>
        </div>
      </div>
      <div className="border-l border-border-darker relative dark:border-white/10 pl-6 md:px-8">
        <div className="flex flex-col gap-y-20 w-full">
          {APP_CONTENT.stacks.stacks.map((stack, id) => (
            <StackWrapper
              categoryName={stack.title}
              items={stack.tools}
              key={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const StackWrapper = ({
  categoryName,
  items,
}: {
  categoryName: string;
  items: TStackItem[];
}) => {
  return (
    <div className="flex">
      <p className=" text-black dark:text-brand-text-light text-base tracking-tight basis-1/6">
        {categoryName}
      </p>
      <div className="flex flex-col gap-y-10">
        {items.map((item, id) => (
          <StackCard key={`${categoryName}-item-${id}`} item={item} />
        ))}
      </div>
    </div>
  );
};
const StackCard = ({ item }: { item: TArticle }) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0">
      <div className="flex flex-col gap-y-4 w-full -ml-4 md:ml-0 md:-mt-9 pl-4 md:p-8 ">
        <p className="text-black dark:text-brand-text-light text-base font-semibold tracking-tight">
          {item.title}
        </p>
        <p className="text-brand-text dark:text-brand-text-light/80 text-sm font-light">
          {item.exceprt}
        </p>
      </div>
    </div>
  );
};
