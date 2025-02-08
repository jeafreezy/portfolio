"use client";

import { useThemeContext } from "@/context/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EmmanuelAvatar from "@/public/emmanuel_jolaiya.png";
import { navRoutes } from "@/utils/config";
import { PreferredColorScheme } from "@/utils/enums";
const NavBar = () => {
  const { togglePreferredColorScheme, preferredColorScheme } =
    useThemeContext();
  const pathname = usePathname();
  const themeSwitcherButtonLabel = `Switch to ${preferredColorScheme === PreferredColorScheme.DARK
    ? PreferredColorScheme.LIGHT
    : PreferredColorScheme.DARK
    } mode`
  return (
    <nav className="sticky md:top-0 z-10 flex w-full items-center justify-between pt-6">
      <div
        className={`${pathname !== "/"
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2"
          } h-12 w-12 relative  rounded-full transform transition-all duration-300`}
      >
        <Link href={"/"} title="Emmanuel Jolaiya Avatar">
          <Image
            src={EmmanuelAvatar}
            placeholder="blur"
            alt="Emmanuel Jolaiya Avatar"
            fill
            priority
            className="absolute rounded-full p-0.5 h-9 w-9 ring-1 ring-border-light  dark:ring-border-dark"
            title="Emmanuel Jolaiya"
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <NavRoutes />
      </div>
      <button
        className={`h-10 w-12 cursor-pointer  ${preferredColorScheme === PreferredColorScheme.DARK
          ? "bg-brand-bg"
          : "bg-white"
          } rounded-2xl p-3  hover:dark:ring-white/20 brand-ring flex items-center justify-center`}
        onClick={togglePreferredColorScheme}
        title={themeSwitcherButtonLabel}
        aria-label={themeSwitcherButtonLabel}
      >
        {preferredColorScheme === PreferredColorScheme.DARK ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.56 122.88"
            className="fill-white/20"
          >
            <path d="M121.85,87.3A64.31,64.31,0,1,1,36.88.4c2.94-1.37,5.92.91,4.47,4.47a56.29,56.29,0,0,0,75.75,77.4l.49-.27a3.41,3.41,0,0,1,4.61,4.61l-.35.69ZM92.46,74.67H92A16.11,16.11,0,0,0,76.2,58.93v-.52a15.08,15.08,0,0,0,11-4.72,15.19,15.19,0,0,0,4.72-11h.51a15.12,15.12,0,0,0,4.72,11,15.12,15.12,0,0,0,11,4.72v.51A16.13,16.13,0,0,0,92.46,74.67Zm10.09-46.59h-.27a7.94,7.94,0,0,0-2.49-5.81A7.94,7.94,0,0,0,94,19.78v-.27A7.94,7.94,0,0,0,99.79,17a8,8,0,0,0,2.49-5.8h.27A8,8,0,0,0,105,17a8,8,0,0,0,5.81,2.49v.27A8,8,0,0,0,105,22.27a7.94,7.94,0,0,0-2.49,5.81Zm-41.5,8h-.41a12.06,12.06,0,0,0-3.78-8.82A12.06,12.06,0,0,0,48,23.5v-.41a12.07,12.07,0,0,0,8.82-3.78,12.09,12.09,0,0,0,3.78-8.82h.41a12.08,12.08,0,0,0,3.77,8.82,12.09,12.09,0,0,0,8.83,3.78v.41a12.09,12.09,0,0,0-8.83,3.78,12.08,12.08,0,0,0-3.77,8.82Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 240 240"
            className=" fill-deep-purple"
          >
            <path d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16 C181.12,83.79,188.83,101,188.83,120c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16 c-19.01,0-36.21-7.7-48.67-20.16C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67 C83.79,58.88,101,51.17,120,51.17L120,51.17z M158.27,81.73c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85 c-9.79,9.79-15.85,23.32-15.85,38.27c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85 c14.95,0,28.48-6.06,38.27-15.85c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73L158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71 c-4.26,0-7.71-3.45-7.71-7.71V7.71L113.88,7.71z M170.87,19.72c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48 l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72L170.87,19.72z M214.19,58.57 c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8 c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57L214.19,58.57z M232.29,113.88c4.26,0,7.71,3.45,7.71,7.71 c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29L232.29,113.88z M220.28,170.87 c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19 L181.43,214.19z M126.12,232.29c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71 c4.26,0,7.71,3.45,7.71,7.71V232.29L126.12,232.29z M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48 l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28L69.13,220.28z M25.81,181.43 c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8 c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43L25.81,181.43z M7.71,126.12c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71 h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71L7.71,126.12z M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13L19.72,69.13z" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default NavBar;

export const NavRoutes = ({ isMobile }: { isMobile?: boolean }) => {
  const pathname = usePathname();
  return (
    <ul
      className={`flex items-center justify-between gap-x-3 
      rounded-full bg-white/90 px-4 md:px-8 py-1 text-sm font-medium 
      text-brand-text ring-1
      ring-border-darker backdrop-blur dark:bg-brand-bg 
      dark:text-brand-text-light dark:ring-white/10 ${isMobile
          ? "shadow-2xl shadow-black dark:shadow-white"
          : "shadow-lg shadow-brand-shadow"
        }`}
    >
      {navRoutes.map((route, key) => (
        <li
          className={`relative flex items-center cursor-pointer px-2 py-2 transition hover:text-deep-purple dark:hover:text-light-purple ${pathname === route.route &&
            "text-deep-purple dark:text-light-purple"
            } `}
          key={`nav-item-${key}`}
        >
          <Link href={route.route} title={route.name}>
            {pathname === route.route && (
              <span className="transition duration-1000 h-px absolute -bottom-[5px] bg-gradient-to-r from-light-purple/20  via-deep-purple  to-light-purple/20 dark:from-light-purple/20 dark:via-light-purple dark:to-light-purple/20 inset-x-1"></span>
            )}
            {!isMobile ? (
              <span className="p-1">{route.name}</span>
            ) : (
              <route.icon className="icons" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
