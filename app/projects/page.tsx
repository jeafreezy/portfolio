"use client";
import { APP_CONTENT } from "@/utils/content";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { projectCategories } from "@/utils/config";
import { ProjectCategory } from "@/utils/enums";
import SecureIcon from "@/components/icons/SecureIcon";

const BASE_ROUTE = "/projects";
export default function ProjectsPage({}) {
  const router = useRouter();
  const params = useSearchParams();
  // if there is no param, then it can default to 'all'
  const currentCategory = params.get("category") ?? ProjectCategory.ALL;

  // a check to make sure the category is supported
  // otherwise, redirect to the default route
  useEffect(() => {
    if (
      projectCategories.filter(
        (category) => category.slug.toLocaleLowerCase() === currentCategory
      ).length > 0
    )
      return;
    router.replace(BASE_ROUTE);
  }, [currentCategory]);

  const updateRouteWithSelectedCategory = useCallback(
    (categorySlug: string) => {
      router.push(`${BASE_ROUTE}?category=${categorySlug}`);
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col gap-y-20  py-10 mb-10">
      <div className="w-full space-y-8 max-w-3xl">
        <h1 className="text-black dark:text-brand-text-light text-3xl sm:text-5xl font-bold leading-normal md:leading-[60px]">
          {APP_CONTENT.projects.hero.en}
        </h1>
        <div className="flex flex-col gap-y-6 brand-text text-left text-base font-light leading-normal md:leading-relaxed">
          <p>{APP_CONTENT.projects.description}</p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="flex gap-x-4 overflow-x-scroll w-full">
          {projectCategories.map((category, id) => (
            <div
              key={`project-category-${id}`}
              className={`cursor-pointer whitespace-nowrap py-2 px-5 rounded-md font-normal ${
                currentCategory === category.slug
                  ? "bg-black dark:bg-white text-white dark:text-brand-text transition-colors duration-300"
                  : "text-brand-text/80 hover:text-brand-text dark:text-brand-text-light/80 dark:hover:text-brand-text-light"
              }`}
              onClick={() => updateRouteWithSelectedCategory(category.slug)}
            >
              {category.displayName}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {APP_CONTENT.projects.projects
          .filter((project) =>
            currentCategory === ProjectCategory.ALL
              ? project
              : project.categories.includes(currentCategory as ProjectCategory)
          )
          .map((project, id) => (
            <Link href={project.demoLink} target="blank" key={id}>
              <div className="flex flex-col p-4 gap-y-2 brand-text hover:ring-[0.2px] hover:shadow-md dark:hover:shadow-white/40 border duration-300 transition-all  rounded-md cursor-pointer ">
                <div className="relative h-[200px] w-full shadow-md dark:shadow-white/20">
                  <Image
                    src={project.image}
                    placeholder="blur"
                    alt={project.title}
                    fill
                    priority
                    className="object-cover rounded-md"
                    title={project.title}
                  />
                </div>

                <h1 className="font-semibold">{project.title}</h1>
                <p className="text-xs text-brand-text/50 dark:text-brand-text-light/50">
                  {project.protected && (
                    <span
                      title="Protected by NDA"
                      className="flex gap-x-1 items-center"
                    >
                      <SecureIcon className="icons icon-fill" /> (NDA)
                    </span>
                  )}
                </p>
                <p className="text-sm text-brand-text/70 dark:text-brand-text-light/70">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, id) => (
                    <div
                      key={`project-${project.title}-tag-${id}`}
                      className="px-2 text-xs rounded-md  whitespace-nowrap py-1 bg-black text-white"
                      title={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
