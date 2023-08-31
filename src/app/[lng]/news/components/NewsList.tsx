"use client";

import { NewsCard } from "@/components/NewsCard";
import { NewsModel } from "@/models";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client";

interface NewsListProps {
  newsData: NewsModel[];
  lng: any;
}

const NewsList = ({ newsData, lng }: NewsListProps) => {
  const { t } = useTranslation(lng);

  return (
    <div className="flex flex-wrap w-full justify-center min-w-[400px]">
      {/* <div className="flex mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      {newsData.map((news, i) => (
        <div
          key={i}
          className="m-2 transition-all duration-300 hover:scale-102 shadow-sm hover:shadow-lg"
        >
          <Link href={`/${lng}/news/${news.id}`}>
            <NewsCard
              title={lng === "en" ? news.title_en : news.title_ga}
              blurb={lng === "en" ? news.blurb_en : news.blurb_ga}
              date={news.date}
              imageURL={news.images[0].url}
              news_category={news.news_category}
              category_string={`${t("search." + news.news_category)}`}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
