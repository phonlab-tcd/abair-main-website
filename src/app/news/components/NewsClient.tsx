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
      const sortedData = news.sort((a, b) => a.id - b.id); // Sort by ID in ascending order
      setFilteredData(sortedData);
      setInitialData(sortedData);
    }
  }, [news]);

  const handleFilteredData = (data: NewsModel[]) => {
    setFilteredData(data);
  };

  return (
    <div className="w-screen">
      <div className="w-full flex justify-center">
        <div className="container flex">
          <div className="w-1/5 mt-[93px]">
            <div className="">
              <NewsFilters
                newsData={initialData}
                onFilteredData={handleFilteredData}
              />
            </div>
          </div>
          <div className="w-4/5 h-24 pl-8">
            <div className="text-4xl md:text-6xl text-black text-center">
              News
            </div>
            <div>
              <NewsList newsData={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
