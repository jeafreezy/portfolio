import { APP_CONTENT } from "@/utils/content";
import Image from "next/image";
import EmmanuelAvatar from "@/public/emmanuel_jolaiya.jpeg";
import { socials } from "@/utils/config";
import Link from "next/link";
import EmailIcon from "@/components/icons/EmailIcon";

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1  lg:grid-rows-2 lg:grid-cols-2 min-h-screen gap-x-10 py-10 gap-y-10 mb-10">
      <div className="w-full space-y-10 row-span-1 lg:row-span-2">
        <h1 className="text-black dark:text-brand-text-light text-3xl sm:text-5xl font-bold">
          {APP_CONTENT.about.hero}
        </h1>
        <div className="flex flex-col gap-y-6 text-brand-text text-left dark:text-brand-text-light/80 text-base font-light leading-normal md:leading-relaxed">
          <p>{APP_CONTENT.about.content.firstBlock}</p>
          <p>{APP_CONTENT.about.content.secondBlock}</p>
          <p>{APP_CONTENT.about.content.thirdBlock}</p>
          <p>{APP_CONTENT.about.content.lastBlock}</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-20 items-start lg:items-end order-first lg:order-none">
        <div className="relative h-[300px] w-[300px] lg:w-[400px] lg:h-[400px] shadow-black/10 dark:shadow-white/10 shadow-sm">
          <Image
            src={EmmanuelAvatar}
            placeholder="blur"
            alt="Emmanuel Jolaiya Avatar"
            fill
            priority
            className="absolute object-cover rounded-2xl  rotate-3"
            title="Emmanuel Jolaiya"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-20 lg:items-end row-span-1">
        <div className="w-full lg:w-[400px] space-y-10 text-brand-text  dark:text-brand-text-light/80">
          <div className="flex flex-col gap-y-4 md:gap-y-6 ">
            {socials.map((socialNetwork) => (
              <span
                title={socialNetwork.title}
                className="flex items-center"
                key={`social-network-${socialNetwork.title}`}
              >
                <Link href={socialNetwork.url} target="blank" title={socialNetwork.title}>
                  <span className="flex items-center gap-x-4 ">
                    {
                      <socialNetwork.icon
                        className={`w-5 h-5 ${socialNetwork.title === "Fiverr" && "w-6 h-6"
                          } stroke-1  fill-brand-text/60 dark:fill-brand-text-light/50 dark:hover:fill-brand-text-light/80 transition duration-75`}
                      />
                    }
                    {socialNetwork.title}
                  </span>
                </Link>
              </span>
            ))}
          </div>
          <div className="w-full h-px dark:bg-brand-bg bg-brand-text-light"></div>
          <span className="flex items-center gap-x-4 ">
            <EmailIcon
              className={`w-5 h-5  stroke-1  fill-brand-text/60 dark:fill-brand-text-light/50 dark:hover:fill-brand-text-light/80 transition duration-75`}
            />
            <Link href={"mailto:emmanuel.jolaiya@un.org"} title="emmanuel.jolaiya[at]un.org">
              emmanuel.jolaiya[at]un.org
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
