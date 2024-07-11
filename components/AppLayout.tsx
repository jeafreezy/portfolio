"use client";

import { usePathname } from "next/navigation";
import NavBar, { NavRoutes } from "./NavBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main className="bg-white dark:bg-black">
      <div className="text-center mx-auto max-w-xl py-1 text-sm font-medium text-brand-text shadow-lg shadow-brand-shadow dark:text-brand-text-light ">
        Note: This site is a WIP... Please check back.
      </div>
      <div className="relative mx-auto min-h-screen w-full max-w-7xl flex flex-col gap-y-10 md:gap-y-20 px-6 sm:px-20 bg-white ring-1 ring-border-light dark:bg-brand-black dark:ring-border-dark">
        <NavBar />
        {children}
        <div className="sticky  bottom-1 md:hidden">
          <NavRoutes isMobile />
        </div>
      </div>
    </main>
  );
}
