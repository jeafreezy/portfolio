"use client";
import { useColorSchemeContext } from "@/context/ModeSwitcherProvider";
import Image from "next/image";
import Link from "next/link";

const navRoutes = [
  {
    name: "Home",
    icon: "Route",
    route: "/",
  },
  {
    name: "About",
    icon: "Route",
    route: "/about",
  },
  {
    name: "Projects",
    icon: "Route",
    route: "/projects",
  },
  {
    name: "Articles",
    icon: "Route",
    route: "/articles",
  },
  {
    name: "Publications",
    icon: "Route",
    route: "/articles",
  },
  {
    name: "Speaking",
    icon: "Route",
    route: "/articles",
  },
];
export default function Home() {
  const { togglePreferredColorScheme } = useColorSchemeContext();

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-7xl  lg:px-8 bg-white ring-1 ring-border-light dark:bg-brand-black dark:ring-border-dark">
      <header className="flex items-center justify-between pt-6 mx-auto max-w-2xl lg:max-w-5xl">
        <div className="h-10 w-10 relative">
          <Link href={"/"}>
            <Image
              src="/emmanuel_jolaiya.png"
              alt="Emmanuel Jolaiya Avatar"
              fill
              priority
              className="absolute rounded-full p-0.5 h-9 w-9 ring-1 ring-border-light  dark:ring-border-dark"
              title="Emmanuel Jolaiya"
            />
          </Link>
        </div>
        <nav>
          <ul
            className="flex items-center gap-x-3 
          rounded-full bg-white/90 px-3 py-1 text-sm font-medium 
          text-brand-text shadow-lg shadow-brand-shadow ring-1  
          ring-border-darker backdrop-blur dark:bg-brand-bg 
          dark:text-brand-text-light dark:ring-white/10"
          >
            {navRoutes.map((route, key) => (
              <li
                key={`nav-item-${key}`}
                className="cursor-pointer relative block px-3 py-2 transition hover:text-deep-purple dark:hover:text-light-purple"
              >
                {route.name}
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="h-10 w-10 text-deep-purple hover:text-light-purple"
          onClick={togglePreferredColorScheme}
        >
          Light Mode
        </button>
      </header>
    </main>
  );
}
