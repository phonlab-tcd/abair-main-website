/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
import NewsFilters from "./NewsFilters";
import { NewsModel } from "@/models";
import { getBreakpoint } from "@/utils";
import { AccordionClient } from "@/components";

interface NewsProps {
  news: NewsModel[];
  lng: string;
}

export default function NewsClient({ news, lng }: NewsProps) {
  const [filteredData, setFilteredData] = useState<NewsModel[]>([]);
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
    }
  }, [news]);

  const handleFilteredData = (data: NewsModel[]) => {
    setFilteredData(data);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl min-h-screen">
        <div className="text-4xl lg:text-6xl text-black text-center py-4">
          News
        </div>
        {["xl", "lg"].includes(breakpoint) ? (
          <div className="flex ">
            <div className="flex-none w-48 m-2">
              <NewsFilters
                largeScreen={true}
                newsData={news}
                onFilteredData={handleFilteredData}
              />
            </div>
            <div className="flex-1">
              <NewsList newsData={filteredData} lng={lng} />
            </div>
          </div>
        ) : (
          <div>
            <div className="flex w-full justify-center">
              <div className="w-72 bg-teal-400">
                <AccordionClient
                  title="filters"
                  open={false}
                  search={true}
                  content={
                    <NewsFilters
                      largeScreen={false}
                      newsData={news}
                      onFilteredData={handleFilteredData}
                    />
                  }
                />
              </div>
            </div>
            <NewsList newsData={filteredData} lng={lng} />
          </div>
        )}
      </div>
    </div>
  );
}
