/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
import NewsFilters from "./NewsFilters";

export interface News {
  id: number;
  created_at: string;
  date: string;
  title_en: string;
  blurb_en: string;
  body_en: null | string;
  images: { url: string }[];
  title_ga: string;
  blurb_ga: string;
  body_ga: null | string;
  video: null | string;

  // new props

  news_category: string;
}

interface NewsProps {
  news: News[];
}

export default function NewsClient({ news }: NewsProps) {
  const [filteredData, setFilteredData] = useState<News[]>([]);
  const [initialData, setInitialData] = useState<News[]>([]);

  //const initialData: News[] = [];
  useEffect(() => {
    if (news) {
      const sortedData = news.sort((a, b) => a.id - b.id); // Sort by ID in ascending order
      setFilteredData(sortedData);
      setInitialData(sortedData);
    }
  }, [news]);

  const handleFilteredData = (data: News[]) => {
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
