/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
import NewsFilters from "./NewsFilters";
import { NewsModel } from "@/models";

interface NewsProps {
  news: NewsModel[];
}

export default function NewsClient({ news }: NewsProps) {
  const [filteredData, setFilteredData] = useState<NewsModel[]>([]);
  const [initialData, setInitialData] = useState<NewsModel[]>([]);

  //const initialData: News[] = [];
  useEffect(() => {
    if (news) {
      setFilteredData(news);
      setInitialData(news);
    }
  }, [news]);

  const handleFilteredData = (data: NewsModel[]) => {
    setFilteredData(data);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="text-4xl lg:text-6xl text-black text-center py-4">
          News
        </div>

        <div className="w-full">
          <NewsFilters
            newsData={initialData}
            onFilteredData={handleFilteredData}
          />
        </div>

        <NewsList newsData={filteredData} />
      </div>
    </div>
  );
}
