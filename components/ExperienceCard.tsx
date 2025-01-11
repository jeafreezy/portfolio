import Image, { StaticImageData } from "next/image";

const ExperienceCard = ({
  entityName,
  entityLogo,
  period,
  role,
}: {
  entityName: string;
  role: string;
  period: string;
  entityLogo: StaticImageData;
}) => {
  return (
    <div className="flex w-full gap-x-2 md:gap-x-4">
      <div className="relative w-10 h-8 md:w-14 md:h-12  max-w-full flex items-center justify-center">
        <Image
          src={entityLogo}
          priority
          placeholder="blur"
          fill
          className="rounded-full p-0.5 brand-ring object-cover"
          alt={entityName}
          aria-hidden
        />
      </div>
      <div className="flex flex-col w-full space-y-1">
        <p className="text-sm font-medium ">{entityName}</p>
        <div className="flex justify-between">
          <p className="text-sm font-light  text-brand-text dark:text-brand-text-light ">
            {role}
          </p>
          <p className="text-sm whitespace-nowrap font-light text-brand-text dark:text-brand-text-light ">
            {period}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
