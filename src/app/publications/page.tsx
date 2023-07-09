"use client";

import React, { useState } from "react";
import PaperList from "./components/PaperList";
import PaperFilters from "./components/PaperFilters";
import { Paper, initialPaperData } from "./data/PaperData";

export default function Page() {
  const [filteredData, setFilteredData] = useState(initialPaperData);

  const handleFilteredData = (data: Paper[]) => {
    setFilteredData(data);
  };

  return (
    <div className="w-screen">
      <div className="w-full flex justify-center">
        <div className="container flex">
          <div className="w-1/5 mt-[93px]">
            <div className="">
              <PaperFilters
                paperData={initialPaperData}
                onFilteredData={handleFilteredData}
              />
            </div>
          </div>
          <div className="w-4/5 h-24 pl-8">
            <div className="text-4xl md:text-6xl text-black text-center">
              Papers
            </div>
            <div>
              <PaperList paperData={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
