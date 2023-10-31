/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import PeopleList from "./PeopleList";
import PeopleFilters from "./PeopleFilters";
import { Tables } from "@/types/supabase-helpers";
import { AccordionClient } from "@/components/Accordion";
import { getBreakpoint } from "@/utils";

import { useTranslation } from "@/app/i18n/client";

interface PeopleProps {
  people: Tables<"people">[];
  lng: string;
}

export default function PeopleClient({ people, lng }: PeopleProps) {
  const [filteredData, setFilteredData] = useState<Tables<"people">[]>([]);
  const [breakpoint, setBreakpoint] = useState<string>("");
  const { t } = useTranslation(lng);
  useEffect(() => {
    if (people) {
      const sortedData = people.sort((a, b) => a.id - b.id); // Sort by ID in ascending order
      setFilteredData(sortedData);
    }
  }, [people]);

  const handleFilteredData = (data: Tables<"people">[]) => {
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
    <div className="w-full flex flex-col justify-center">
      <div className="w-full flex justify-center items-center text-grey-800 text-2xl sm:text-3xl h-[112px] lg:h-[160px] font-mono">
        {t("pageTitles.people")}
      </div>
      <div className="w-full flex bg-white justify-center">
        <div className="w-full mt-4 max-w-6xl min-h-screen">
          {["xl", "lg"].includes(breakpoint) ? (
            <div className="flex">
              <div className="flex-none w-48 m-2 mt-8">
                <PeopleFilters
                  largeScreen={true}
                  lng={lng}
                  peopleData={people}
                  onFilteredData={handleFilteredData}
                />
              </div>
              <div className="flex-1">
                <PeopleList lng={lng} peopleData={filteredData} />
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
                      <PeopleFilters
                        largeScreen={false}
                        lng={lng}
                        peopleData={people}
                        onFilteredData={handleFilteredData}
                      />
                    }
                  />
                </div>
              </div>
              <PeopleList lng={lng} peopleData={filteredData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
