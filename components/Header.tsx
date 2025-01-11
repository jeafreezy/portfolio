import { socials } from "@/utils/config";
import { APP_CONTENT } from "@/utils/content";
import Image from "next/image";
import Link from "next/link";
import EmmanuelAvatar from "@/public/emmanuel_jolaiya.png";
const Header = () => {
  return (
    <header className="flex flex-col items-start gap-y-8 lg:gap-y-10">
      <div className="h-20 md:h-28 w-20 md:w-28 relative">
        <Link href={"/"}>
          <Image
            src={EmmanuelAvatar}
            placeholder="blur"
            alt="Emmanuel Jolaiya Avatar"
            fill
            priority
            className="absolute rounded-full p-0.5 ring-1 ring-border-light  dark:ring-border-dark"
            title="Emmanuel Jolaiya"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-y-4 md:gap-y-6 max-w-3xl">
        <h1 className="text-black dark:text-brand-text-light text-3xl sm:text-5xl font-bold tracking-tight leading-normal md:leading-relaxed">
          {APP_CONTENT.header.hero}
        </h1>
        <p className="text-brand-text dark:text-brand-text-light/80 text-base font-light leading-normal md:leading-relaxed">
          {APP_CONTENT.header.heroBio}
        </p>
      </div>
      <div className="flex gap-x-4 md:gap-x-6 items-center">
        {socials.map((socialNetwork) => (
          <span
            className="flex items-center justify-center"
            key={`social-network-${socialNetwork.title}`}
          >
            <Link
              href={socialNetwork.url}
              target="blank"
              title={socialNetwork.title}
            >
              {
                <socialNetwork.icon
                  className={`w-5 h-5 ${socialNetwork.title === "Fiverr" && "w-6 h-6"
                    } stroke-1  fill-brand-text/60 dark:fill-brand-text-light/50 dark:hover:fill-brand-text-light/80 transition duration-75`}
                />
              }
            </Link>
          </span>
        ))}
      </div>
    </header>
  );
};

export default Header;
