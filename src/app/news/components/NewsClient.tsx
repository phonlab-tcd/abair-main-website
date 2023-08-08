/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
import NewsFilters from "./NewsFilters";
import { NewsModel } from "@/models";
import { getBreakpoint } from "@/utils";

interface NewsProps {
  news: NewsModel[];
}

export default function NewsClient({ news }: NewsProps) {
  const [filteredData, setFilteredData] = useState<NewsModel[]>([]);
  const [initialData, setInitialData] = useState<NewsModel[]>([]);
  const [breakpoint, setBreakpoint] = useState<string>("");

  const handleResize = () => {
    setBreakpoint(getBreakpoint());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {["xl", "lg"].includes(breakpoint) ? (
          <div className="flex">
            <div className="flex-none w-48 m-2">
              <NewsFilters
                newsData={initialData}
                onFilteredData={handleFilteredData}
              />
            </div>
            <div className="flex-1">
              <NewsList newsData={filteredData} />
            </div>
          </div>
        ) : (
          <div className="">
            <NewsFilters
              newsData={initialData}
              onFilteredData={handleFilteredData}
            />

            <NewsList newsData={filteredData} />
          </div>
        )}
      </div>
    </div>
  );
}
