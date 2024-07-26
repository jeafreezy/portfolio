"use client";
import { APP_CONTENT } from "@/utils/content";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

import { mediaCategories } from "@/utils/config";
import { MediaCategory } from "@/utils/enums";
import Link from "next/link";
import CategoriesNav from "@/components/CategoriesNav";
import DropdownSelect from "@/components/DropdownSelect";

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
          {APP_CONTENT.media.hero}
        </h1>

        <div className="flex flex-col gap-y-6 brand-text text-left text-base font-light leading-normal md:leading-relaxed">
          <p>{APP_CONTENT.media.description}</p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="relative w-full">
          {/* Web category selector  */}
          <CategoriesNav
            categories={mediaCategories}
            currentCategory={currentCategory}
            onClick={updateRouteWithSelectedCategory}
          />
          {/* Mobile category selector  */}
          <DropdownSelect
            categories={mediaCategories}
            onClick={updateRouteWithSelectedCategory}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {APP_CONTENT.media.media
          .filter((media) =>
            currentCategory === MediaCategory.ALL
              ? media
              : media.category === currentCategory
          )
          .map((media, id) => (
            <div
              key={id}
              className="flex flex-col gap-y-4 w-full -ml-4 md:ml-0 md:-mt-9 pl-4 py-4 md:p-8 cursor-pointer transition-colors hover:bg-opacity-100 bg-opacity-0 transform duration-100 rounded-2xl hover:bg-brand-bg/5 dark:hover:bg-brand-bg/50 "
            >
              <span className="font-light text-xs text-brand-text dark:text-brand-text-light/80">
                {media.organizerName} | {media.year}
              </span>

              <p className="text-black dark:text-brand-text-light text-base font-semibold tracking-tight">
                {media.talkTitle}
              </p>
              <p className="text-brand-text dark:text-brand-text-light/80 text-sm font-light">
                {media.abstract}
              </p>
              <Link href={media.link} target="blank" title={media.talkTitle}>
                <p className="text-deep-purple text-sm dark:text-light-purple">
                  {media.category == MediaCategory.PODCAST
                    ? "Listent to podcast"
                    : media.slides
                    ? "View slides"
                    : media.category == MediaCategory.INTERVIEWS
                    ? "Read"
                    : "Watch video"}
                  {` >`}
                </p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
