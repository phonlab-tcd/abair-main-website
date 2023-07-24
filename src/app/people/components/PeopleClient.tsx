/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import PeopleList from "./PeopleList";
import PeopleFilters from "./PeopleFilters";
import { PersonModel } from "@/models";

interface PeopleProps {
  people: PersonModel[];
}

export default function PeopleClient({ people }: PeopleProps) {
  const [filteredData, setFilteredData] = useState<PersonModel[]>([]);
  const [initialData, setInitialData] = useState<PersonModel[]>([]);
  useEffect(() => {
    if (people) {
      const sortedData = people.sort((a, b) => a.id - b.id); // Sort by ID in ascending order
      setFilteredData(sortedData);
      setInitialData(sortedData);
    }
  }, [people]);

  const handleFilteredData = (data: PersonModel[]) => {
    setFilteredData(data);
  };

  return (
    <div className="w-screen">
      <div className="w-full flex justify-center">
        <div className="container flex">
          <div className="w-1/5 mt-[93px]">
            <div className="">
              <PeopleFilters
                peopleData={initialData}
                onFilteredData={handleFilteredData}
              />
            </div>
          </div>
          <div className="w-4/5 h-24 pl-8">
            <div className="text-4xl md:text-6xl text-black text-center">
              People
            </div>
            <div>
              <PeopleList peopleData={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
