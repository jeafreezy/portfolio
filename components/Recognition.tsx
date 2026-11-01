import Link from "next/link";

export default function Recognition() {
  return (
    <section aria-labelledby="recognition-heading" className="my-12 md:my-16">
      <div className="flex max-w-2xl items-center gap-4 border-l-2 border-deep-purple py-2 pl-4 dark:border-light-purple">
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-8 w-8 shrink-0 fill-none stroke-deep-purple dark:stroke-light-purple"
        >
          <circle cx="16" cy="12" r="9" strokeWidth="1.7" />
          <path d="m16 6 1.7 3.5 3.8.6-2.8 2.7.7 3.8-3.4-1.8-3.4 1.8.7-3.8-2.8-2.7 3.8-.6L16 6Z" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="m11 20-1 8 6-3 6 3-1-8" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
        <div>
          <h2 id="recognition-heading" className="text-sm font-medium text-brand-text dark:text-brand-text-light">
            Recognition
          </h2>
          <Link
            href="https://geospatialworld.net/rising-stars/2026/pdf/50-Rising-Star-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-deep-purple underline decoration-transparent underline-offset-4 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-purple dark:text-light-purple dark:focus-visible:outline-light-purple"
          >
            Top 50 Geospatial Rising Star Award
          </Link>
          <p className="text-sm text-brand-text dark:text-brand-text-light/70">
            Global award presented at Geospatial World Forum 2026 in Amsterdam
          </p>
          <ul className="mt-2 space-y-1 text-sm text-brand-text dark:text-brand-text-light/80">
            <li>
              <Link
                href="https://www.youthmappers.org/post/2020/01/28/introducing-the-2020-youthmappers-research-fellowship-teams"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-purple underline decoration-transparent underline-offset-4 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-purple dark:text-light-purple dark:focus-visible:outline-light-purple"
              >
                YouthMappers Research Fellow
              </Link>{" "}
              <span className="text-xs text-brand-text/70 dark:text-brand-text-light/60">
                Global fellowship, 2020
              </span>
            </li>
            <li>
              <Link
                href="https://sambusgeospatial.com/young-scholar-awards/young-scholar-award-winners/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-purple underline decoration-transparent underline-offset-4 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-purple dark:text-light-purple dark:focus-visible:outline-light-purple"
              >
                Esri Nigeria Young Scholar Award
              </Link>{" "}
              <span className="text-xs text-brand-text/70 dark:text-brand-text-light/60">
                2020
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
