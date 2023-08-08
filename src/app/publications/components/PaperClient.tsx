/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import PaperList from "./PaperList";
import PaperFilters from "./PaperFilters";
import { getBreakpoint } from "@/utils";
import { AccordionClient } from "@/components";
import { PaperModel } from "@/models";

interface PaperProps {
  papers: PaperModel[];
}

export default function PaperClient({ papers }: PaperProps) {
  const [filteredData, setFilteredData] = useState<PaperModel[]>([]);
  const [breakpoint, setBreakpoint] = useState<string>("");

  useEffect(() => {
    if (papers) {
      setFilteredData(papers);
    }
  }, [papers]);

  const handleFilteredData = (data: PaperModel[]) => {
    setFilteredData(data);
  };

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
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl min-h-screen">
        <div className="text-4xl lg:text-6xl text-black text-center py-4">
          Publications
        </div>
        {["xl", "lg"].includes(breakpoint) ? (
          <div className="flex ">
            <div className="flex-none w-48 m-2">
              <PaperFilters
                largeScreen={true}
                paperData={papers}
                onFilteredData={handleFilteredData}
              />
            </div>
            <div className="flex-1">
              <PaperList paperData={filteredData} />
            </div>
          </div>
        ) : (
          <div>
            <div className="flex w-full justify-center">
              <div className="w-full bg-teal-400">
                <AccordionClient
                  title="filters"
                  open={false}
                  search={true}
                  content={
                    <PaperFilters
                      largeScreen={false}
                      paperData={papers}
                      onFilteredData={handleFilteredData}
                    />
                  }
                />
              </div>
            </div>
            <PaperList paperData={filteredData} />
          </div>
        )}
      </div>
    </div>
  );
}
