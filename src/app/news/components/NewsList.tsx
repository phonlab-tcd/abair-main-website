import React from "react";
import { NewsCard } from "abair-web-components";
import { NewsModel } from "@/models";
import Link from "next/link";

interface NewsListProps {
  newsData: NewsModel[];
}

const NewsList = ({ newsData }: NewsListProps) => {
  return (
    <div className="flex flex-wrap border w-full justify-center min-w-[400px]">
      {/* <div className="flex mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      {newsData.map((news, i) => (
        <div
          key={i}
          className="m-2 transition-all duration-300 hover:scale-102 shadow-sm hover:shadow-lg"
        >
          <Link href={`/news/${news.id}`}>
            <NewsCard
              title={news.title_en}
              blurb={news.blurb_en}
              date={news.date}
              imageURL={news.images[0].url}
              news_category={news.news_category}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
