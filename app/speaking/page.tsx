import { APP_CONTENT } from "@/utils/content";
import Link from "next/link";
import { TArticle } from "@/utils/types";

export default async function TalksPage({}) {
  return (
    <div className="min-h-screen flex flex-col gap-y-20  py-10 mb-10">
      <div className="w-full space-y-8 max-w-3xl">
        <h1 className="text-black dark:text-brand-text-light text-3xl sm:text-5xl font-bold leading-normal md:leading-[60px]">
          {APP_CONTENT.talks.hero.en}
        </h1>
        <div className="flex flex-col gap-y-6 text-brand-text text-left dark:text-brand-text-light/80 text-base font-light leading-normal md:leading-relaxed">
          <p>{APP_CONTENT.talks.description}</p>
        </div>
      </div>
      <div className="border-l border-border-darker relative dark:border-white/10 pl-6 md:px-8">
        <div className="flex flex-col gap-y-20 w-full">
          <div className="flex flex-col relative gap-y-10">
            {APP_CONTENT.articles.gisLounge.articles.map((article, id) => (
              <TalksCard key={`talk-${id}`} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const TalksCard = ({ article }: { article: TArticle }) => {
  return (
    <Link href={article.link} target="blank">
      <article className="flex flex-col md:flex-row gap-y-4 md:gap-y-0">
        <p className=" text-brand-text dark:text-brand-text-light/80 text-sm font-extralight whitespace-nowrap basis-1/4">
          {article.date}
        </p>
        <div className="flex flex-col gap-y-4 w-full -ml-4 md:ml-0 md:-mt-9 pl-4 md:p-8 cursor-pointer transition-colors hover:bg-opacity-100 bg-opacity-0 transform duration-100 rounded-2xl hover:bg-brand-bg/5 dark:hover:bg-brand-bg/50 ">
          <p className="text-black dark:text-brand-text-light text-base font-semibold tracking-tight">
            {article.title}
          </p>
          <p className="text-brand-text dark:text-brand-text-light/80 text-sm font-light">
            {article.exceprt}
          </p>
          <p className="text-deep-purple text-sm dark:text-light-purple">
            Read article {`>`}
          </p>
        </div>
      </article>
    </Link>
  );
};
