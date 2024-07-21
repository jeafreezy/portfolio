"use client";
import { APP_CONTENT } from "@/utils/content";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { mediaCategories, projectCategories } from "@/utils/config";
import { MediaCategory, ProjectCategory } from "@/utils/enums";
import SecureIcon from "@/components/icons/SecureIcon";

const BASE_ROUTE = "/media";

export default function MediaPage({}) {
  const router = useRouter();
  const params = useSearchParams();
  // if there is no param, then it can default to 'all'
  const currentCategory = params.get("category") ?? MediaCategory.ALL;
  // a check to make sure the category is supported
  // otherwise, redirect to the default route
  useEffect(() => {
    if (
      mediaCategories.filter(
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
          {APP_CONTENT.media.hero.en}
        </h1>
        <div className="flex flex-col gap-y-6 brand-text text-left text-base font-light leading-normal md:leading-relaxed">
          <p>{APP_CONTENT.media.description}</p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="flex gap-x-4 overflow-x-scroll w-full">
          {mediaCategories.map((category, id) => (
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
        {APP_CONTENT.media.media
          .filter((media) =>
            currentCategory === ProjectCategory.ALL
              ? media
              : media.category === currentCategory
          )
          .map((media, id) => (
            <div
              key={id}
              className="flex flex-col p-4 gap-y-2 brand-text hover:ring-[0.2px] hover:shadow-md dark:hover:shadow-white/40 border duration-300 transition-all  rounded-md cursor-pointer "
            >
              {media.activities.map((activity, id) => (
                <div>{activity.conferenceName}</div>
              ))}
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
