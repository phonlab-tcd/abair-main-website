import React from "react";
import NewsCard from "@/components/NewsCard/NewsCard";
import { NewsModel } from "@/models";

interface NewsListProps {
  newsData: NewsModel[];
}

const NewsList = ({ newsData }: NewsListProps) => {
  return (
    <div className="p-4">
      <div className="flex mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
