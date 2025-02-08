"use client";
import { APP_CONTENT } from "@/utils/content";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { projectCategories } from "@/utils/config";
import { ProjectCategory } from "@/utils/enums";
import SecureIcon from "@/components/icons/SecureIcon";
import DropdownSelect from "@/components/DropdownSelect";
import CategoriesNav from "@/components/CategoriesNav";

const BASE_ROUTE = "/projects";

export default function ProjectsPage({ }) {
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
          {APP_CONTENT.projects.hero}
        </h1>
        <div className="flex flex-col gap-y-6 brand-text text-left text-base font-light leading-normal md:leading-relaxed">
          <p>{APP_CONTENT.projects.description}</p>
        </div>
      </div>
      <div className="relative w-full">
        {/* Web category selector  */}
        <CategoriesNav
          categories={projectCategories}
          currentCategory={currentCategory}
          onClick={updateRouteWithSelectedCategory}
        />
        {/* Mobile category selector  */}
        <DropdownSelect
          categories={projectCategories}
          onClick={updateRouteWithSelectedCategory}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {APP_CONTENT.projects.projects
          .filter((project) =>
            currentCategory === ProjectCategory.ALL
              ? project
              : project.categories.includes(currentCategory as ProjectCategory)
          )
          .map((project, id) => (
            <div
              key={id}
              className="flex flex-col p-4 gap-y-3 brand-text  rounded-2xl cursor-pointer "
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src={project.image}
                  placeholder="blur"
                  alt={project.title}
                  fill
                  priority
                  className="object-cover rounded-2xl  border-[0.5px]  bg-white"
                  title={project.title}
                />
              </div>
              {project.protected ? (
                <h1 className="font-semibold hover:text-deep-purple dark:hover:text-light-purple">
                  {project.title}
                </h1>
              ) : (
                <Link
                  href={project.demoLink}
                  target="blank"
                  className="flex flex-col gap-y-2 "
                  title={project.title}
                >
                  <h1 className="font-semibold hover:text-deep-purple dark:hover:text-light-purple">
                    {project.title}
                  </h1>
                </Link>
              )}

              <div className="text-xs text-brand-text dark:text-brand-text-light">
                <p
                  title="Protected by NDA"
                  className="flex gap-x-1 items-center"
                >
                  {project.protected ? (
                    <span>
                      <SecureIcon className="icons icon-fill" aria-hidden />
                      (Protected by NDA)
                    </span>
                  ) : (
                    project.date
                  )}
                </p>
              </div>

              <p className="text-sm text-brand-text dark:text-brand-text-light">
                <ReadMore text={project.shortDescription} maxLength={100} />
              </p>
              <div className="flex flex-wrap gap-2 self-start ">
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
          ))}
      </div>
    </div>
  );
}

const ReadMore = ({ text, maxLength }: { text: string; maxLength: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {isExpanded ? `${text} ` : `${text.substring(0, maxLength)}... `}
        <button
          onClick={toggleExpansion}
          className="text-deep-purple dark:text-light-purple focus:outline-none cursor-pointer"
        >
          {isExpanded ? " read less" : "read more"}
        </button>
      </p>
    </div>
  );
};
