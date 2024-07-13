"use client";

import Footer from "./Footer";
import NavBar, { NavRoutes } from "./NavBar";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const isPastOffset = useScrollPosition(100);

  return (
    <main className="bg-white dark:bg-black">
      <div className="text-black dark:text-white text-center">
        This site is a WIP please check back...
      </div>
      <div className="relative mx-auto min-h-screen w-full max-w-7xl flex flex-col gap-y-10 md:gap-y-20 px-4 sm:px-24 bg-white ring-1 ring-border-light dark:bg-brand-black dark:ring-border-dark">
        <NavBar />
        {children}
        <Footer />
        <div
          className={`fixed md:hidden bottom-2 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ${
            isPastOffset ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <NavRoutes isMobile />
        </div>
      </div>
    </main>
  );
}
