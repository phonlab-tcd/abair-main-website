/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import NewsList from "./NewsList";
import NewsFilters from "./NewsFilters";
import { Tables } from "@/types/supabase-helpers";
import { getBreakpoint } from "@/utils";
import { AccordionClient } from "@/components/Accordion";
import { useTranslation } from "@/app/i18n/client";

interface NewsProps {
  news: Tables<"news_stories">[];
  lng: any;
}

export default function NewsClient({ news, lng }: NewsProps) {
  const [filteredData, setFilteredData] = useState<Tables<"news_stories">[]>(
    []
  );
  const [breakpoint, setBreakpoint] = useState<string>("");
  const { t } = useTranslation(lng);

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

  const handleFilteredData = (data: Tables<"news_stories">[]) => {
    setFilteredData(data);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full mt-8  max-w-6xl min-h-screen">
        <div className="w-full text-center text-grey-800 text-2xl sm:text-3xl font-mono">
          {t("infoHeader.home.news.title")}
        </div>

        {["xl", "lg"].includes(breakpoint) ? (
          <div className="flex ">
            <div className="flex-none w-48 m-2">
              <NewsFilters
                largeScreen={true}
                newsData={news}
                onFilteredData={handleFilteredData}
                lng={lng}
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
                      lng={lng}
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
