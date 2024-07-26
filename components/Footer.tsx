"use client";

import { navRoutes } from "@/utils/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="border-t mb-12 md:mb-0 text-sm border-border-darker dark:border-white/10 py-6 md:py-10 flex flex-col lg:flex-row gap-y-6 items-center justify-between text-brand-text dark:text-brand-text-light leading-relaxed">
      <div className="flex flex-col">
        <ul className="flex items-center">
          {navRoutes
            .filter((route) => route.route !== "/")
            .map((route, key) => (
              <li
                className={`relative  flex items-center cursor-pointer px-2 py-2 transition hover:text-deep-purple dark:hover:text-light-purple ${
                  pathname === route.route &&
                  "text-deep-purple dark:text-light-purple"
                } `}
                key={`nav-item-${key}`}
              >
                <Link href={route.route} title={route.name}>
                  {pathname === route.route && (
                    <span className="transition font-medium  duration-1000 h-px absolute -bottom-[5px] bg-gradient-to-r from-light-purple/20  via-deep-purple  to-light-purple/20 dark:from-light-purple/20 dark:via-light-purple dark:to-light-purple/20 inset-x-1"></span>
                  )}
                  <span className="p-1">{route.name}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="text-center font-light text-xs sm:text-sm text-brand-text dark:text-brand-text-light">
        &copy; {new Date().getFullYear()} Emmanuel Jolaiya.
      </div>
    </footer>
  );
};

export default Footer;
