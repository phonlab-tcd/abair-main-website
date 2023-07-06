"use client";

import React, { useState } from "react";
import NewsList from "./components/NewsList";
import NewsFilters from "./components/NewsFilters";
import { News, initialNewsData } from "./data/NewsData";

export default function Page() {
  const [filteredData, setFilteredData] = useState(initialNewsData);

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
                newsData={initialNewsData}
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
