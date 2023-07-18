/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import PaperList from "./PaperList";
import PaperFilters from "./PaperFilters";

export interface Paper {
  id: number;
  created_at: string;
  title: string;
  abstract: string;
  pdf_url: string;
  year_published: number;
  authors: string[];

  // new props

  publication_category: string;
}

interface PaperProps {
  papers: Paper[];
}

export default function PaperClient({ papers }: PaperProps) {
  const [filteredData, setFilteredData] = useState<Paper[]>([]);
  const [initialData, setInitialData] = useState<Paper[]>([]);

  useEffect(() => {
    if (papers) {
      const sortedData = papers.sort((a, b) => a.id - b.id); // Sort by ID in ascending order
      setFilteredData(sortedData);
    }
  }, [papers]);

  const handleFilteredData = (data: Paper[]) => {
    setFilteredData(data);
    setInitialData(data);
  };

  return (
    <div className="w-screen">
      <div className="w-full flex justify-center">
        <div className="container flex">
          <div className="w-1/5 mt-[93px]">
            <div className="">
              <PaperFilters
                paperData={initialData}
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
