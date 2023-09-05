/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import PaperList from "./PaperList";
import PaperFilters from "./PaperFilters";
import { getBreakpoint } from "@/utils";
import { AccordionClient } from "@/components/Accordion";
import { Tables } from "@/types/supabase-helpers";

import { useTranslation } from "@/app/i18n/client";

interface PaperProps {
  papers: Tables<"ab_publications">[];
  lng: string;
}

export default function PaperClient({ papers, lng }: PaperProps) {
  const [filteredData, setFilteredData] = useState<Tables<"ab_publications">[]>(
    []
  );
  const [breakpoint, setBreakpoint] = useState<string>("");
  const { t } = useTranslation(lng);

  useEffect(() => {
    if (papers) {
      setFilteredData(papers);
      console.log("papers:", papers);
    }
  }, [papers]);

  const handleFilteredData = (data: Tables<"ab_publications">[]) => {
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
      <div className="w-full mt-8 max-w-6xl min-h-screen">
        <div className="w-full text-center text-grey-800 text-2xl sm:text-3xl font-mono">
          {t("infoHeader.home.publications.title")}
        </div>
        {["xl", "lg"].includes(breakpoint) ? (
          <div className="flex">
            <div className="flex-none w-48 m-2">
              <PaperFilters
                largeScreen={true}
                paperData={papers}
                onFilteredData={handleFilteredData}
                lng={lng}
              />
            </div>
            <div className="flex-1">
              <PaperList paperData={filteredData} lng={lng} />
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
                      lng={lng}
                    />
                  }
                />
              </div>
            </div>
            <PaperList paperData={filteredData} lng={lng} />
          </div>
        )}
      </div>
    </div>
  );
}
