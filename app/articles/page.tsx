import { APP_CONTENT } from "@/utils/content";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TArticle } from "@/utils/types";
import {
  AppService,
  HASHNODE_RSS_FEED_URL,
  MEDIUM_RSS_FEED_URL,
  SPATIALNODE_RSS_FEED_URL,
} from "@/services";
import { formatDate } from "@/utils/formatter";
import { extractFirst100Words } from "@/utils/parser";
import { sortDateInDescendingOrder } from "@/utils/sorter";

/**
 *This async function fetches the articles in the server from the RSS feeds.
 * @returns: The parsed articles.
 */
const fetchArticles = async () => {
  // fetch Spatialnode articles from RSS Feed
  const spatialnodeArticles = await AppService.fetchAndParseRSSFeed(
    SPATIALNODE_RSS_FEED_URL
  );
  // fetch Medium articles from RSS Feed
  const mediumArticles = await AppService.fetchAndParseRSSFeed(
    MEDIUM_RSS_FEED_URL
  );
  // fetch Hashnode articles from RSS Feed
  const hashnodeArticles = await AppService.fetchAndParseRSSFeed(
    HASHNODE_RSS_FEED_URL
  );
  return { spatialnodeArticles, mediumArticles, hashnodeArticles };
};

export default async function ArticlesPage({}) {
  const { spatialnodeArticles, mediumArticles, hashnodeArticles } =
    await fetchArticles();

  return (
    <div className="min-h-screen flex flex-col gap-y-20  py-10 mb-10">
      <div className="w-full space-y-8 max-w-3xl">
        <h1 className="text-black dark:text-brand-text-light text-3xl sm:text-5xl font-bold leading-normal md:leading-[60px]">
          {APP_CONTENT.articles.hero}
        </h1>
        <div className="flex flex-col gap-y-6 text-brand-text text-left dark:text-brand-text-light/80 text-base font-light leading-normal md:leading-relaxed">
          <p>{APP_CONTENT.articles.description}</p>
        </div>
      </div>
      <div className="border-l border-border-darker relative dark:border-white/10 pl-6 md:px-8">
        <div className="flex flex-col gap-y-20 w-full">
          {/* Spatialnode Articles */}
          {spatialnodeArticles && spatialnodeArticles?.length > 0 ? (
            <div className="flex flex-col relative gap-y-10">
              <ArticlePublisher
                logo={APP_CONTENT.articles.spatialnode.logo}
                title={APP_CONTENT.articles.spatialnode.name}
              />
              {spatialnodeArticles
                .sort((a, b) => sortDateInDescendingOrder(a.isoDate, b.isoDate))
                .map((article, id) => (
                  <ArticleCard
                    key={`spatialnode-articles-${id}`}
                    article={{
                      title: article.title,
                      link: article.link,
                      exceprt: extractFirst100Words(article.content),
                      date: formatDate(article.isoDate),
                    }}
                  />
                ))}
            </div>
          ) : null}

          {/* Nigeria SE4ALL Articles */}
          <div className="flex flex-col relative gap-y-10">
            <ArticlePublisher
              logo={APP_CONTENT.articles.nigeriaSE4ALL.logo}
              title={APP_CONTENT.articles.nigeriaSE4ALL.name}
            />
            {APP_CONTENT.articles.nigeriaSE4ALL.articles.map((article, id) => (
              <ArticleCard
                key={`nigeriase4all-article-${id}`}
                article={article}
              />
            ))}
          </div>

          {/* GIS Lounge Articles */}
          <div className="flex flex-col relative gap-y-10">
            <ArticlePublisher
              logo={APP_CONTENT.articles.gisLounge.logo}
              title={APP_CONTENT.articles.gisLounge.name}
            />
            {APP_CONTENT.articles.gisLounge.articles.map((article, id) => (
              <ArticleCard key={`gislounge-article-${id}`} article={article} />
            ))}
          </div>

          {/* Medium Articles */}
          {mediumArticles && mediumArticles.length > 0 ? (
            <div className="flex flex-col relative gap-y-10">
              <ArticlePublisher
                logo={APP_CONTENT.articles.medium.logo}
                title={APP_CONTENT.articles.medium.name}
              />
              {mediumArticles
                .sort((a, b) => sortDateInDescendingOrder(a.isoDate, b.isoDate))
                .map((article, id) => (
                  <ArticleCard
                    key={`medium-articles-${id}`}
                    article={{
                      title: article.title,
                      link: article.link,
                      exceprt: extractFirst100Words(article["content:encoded"]),
                      date: formatDate(article.isoDate),
                    }}
                  />
                ))}
            </div>
          ) : null}

          {/* YouthMappers Articles */}
          <div className="flex flex-col relative gap-y-10">
            <ArticlePublisher
              logo={APP_CONTENT.articles.youthmappers.logo}
              title={APP_CONTENT.articles.youthmappers.name}
            />
            {APP_CONTENT.articles.youthmappers.articles.map((article, id) => (
              <ArticleCard
                key={`youthmapper-article-${id}`}
                article={article}
              />
            ))}
          </div>

          {/* Hashnode Articles */}
          {hashnodeArticles && hashnodeArticles.length > 0 ? (
            <div className="flex flex-col relative gap-y-10">
              <ArticlePublisher
                logo={APP_CONTENT.articles.hashnode.logo}
                title={APP_CONTENT.articles.hashnode.name}
              />
              {hashnodeArticles
                .sort((a, b) => sortDateInDescendingOrder(a.isoDate, b.isoDate))
                .map((article, id) => (
                  <ArticleCard
                    key={`medium-articles-${id}`}
                    article={{
                      title: article.title,
                      link: article.link,
                      exceprt: extractFirst100Words(article.content),
                      date: formatDate(article.isoDate),
                    }}
                  />
                ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

const ArticleCard = ({ article }: { article: TArticle }) => {
  return (
    <Link href={article.link} target="blank">
      <article className="flex flex-col md:flex-row gap-y-4 md:gap-y-0">
        <p className=" text-brand-text dark:text-brand-text-light/80 text-sm font-extralight whitespace-nowrap basis-1/4">
          {article.date}
        </p>
        <div className="flex flex-col gap-y-4 w-full -ml-4 md:ml-0 md:-mt-9 pl-4 md:p-8 cursor-pointer transition-colors hover:bg-opacity-100 bg-opacity-0 transform duration-100 rounded-2xl hover:bg-brand-bg/5 dark:hover:bg-brand-bg/50 ">
          <p className="text-black dark:text-brand-text-light text-base font-semibold tracking-tight">
            {article.title}
          </p>
          <p className="text-brand-text dark:text-brand-text-light/80 text-sm font-light">
            {article.exceprt}
          </p>
          <p className="text-deep-purple text-sm dark:text-light-purple">
            Read article {`>`}
          </p>
        </div>
      </article>
    </Link>
  );
};

const ArticlePublisher = ({
  logo,
  title,
}: {
  logo: StaticImageData;
  title: string;
}) => {
  return (
    <div className="absolute -left-[40px] bg-white rounded-full dark:bg-black md:-left-[52px] -top-8 md:-top-2">
      <div className="relative w-8 h-8 md:w-10 md:h-10">
        <Image
          src={logo}
          placeholder="blur"
          alt={title}
          fill
          priority
          className="absolute rounded-full p-0.5 h-9 w-9 ring-1 ring-border-light  dark:ring-border-dark"
          title={title}
        />
      </div>
    </div>
  );
};
