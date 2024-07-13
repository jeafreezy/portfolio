import { APP_CONTENT } from "@/utils/content";

export default async function ProjectsPage({}) {
  return (
    <div className="min-h-screen flex flex-col gap-y-20  py-10 mb-10">
      <div className="w-full space-y-8 max-w-3xl">
        <h1 className="text-black dark:text-brand-text-light text-3xl sm:text-5xl font-bold leading-normal md:leading-[60px]">
          {APP_CONTENT.projects.hero.en}
        </h1>
        <div className="flex flex-col gap-y-6 text-brand-text text-left dark:text-brand-text-light/80 text-base font-light leading-normal md:leading-relaxed">
          <p>{APP_CONTENT.projects.description}</p>
        </div>
      </div>
    </div>
  );
}
