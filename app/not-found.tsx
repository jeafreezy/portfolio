"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <section>
      <div className="flex min-h-[calc(100vh-8rem)] items-center px-6 py-12">
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <h1 className="mt-3 text-2xl font-semibold text-black dark:text-brand-text-light md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-brand-text dark:text-brand-text-light/80">
            The page you are looking for doesn&apos;t exist.
          </p>

          <div className="group mt-6 flex w-full shrink-0 justify-center items-center gap-x-3 sm:w-auto text-brand-text dark:text-brand-text-light/80">
            <button onClick={() => router.back()}>
              <span>Go back</span>
            </button>
            <Link href="/">Take me home</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
