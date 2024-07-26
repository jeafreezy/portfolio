"use client";

import Footer from "./Footer";
import ScrollToTopIcon from "./icons/ScrollToTopIcon";
import NavBar, { NavRoutes } from "./NavBar";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const isPastOffset = useScrollPosition(100);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-white dark:bg-black">
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
        {/* Scroll to top button  */}
        <div
          className={`fixed hidden cursor-pointer border w-10 h-10 md:w-14 md:h-14 rounded-full bottom-0 right-2 md:right-10 transform transition-transform duration-300 md:flex items-center justify-center ${
            isPastOffset
              ? "translate-y-0 bottom-16 md:bottom-10"
              : "translate-y-full"
          }`}
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <ScrollToTopIcon className="icons icon-fill size-10" />
        </div>
      </div>
    </main>
  );
}
