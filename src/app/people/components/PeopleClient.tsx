/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import PeopleList from "./PeopleList";
import PeopleFilters from "./PeopleFilters";

interface PublicationModel {
  id: number;
  title: string;
}

export interface PersonProps {
  id: number;
  name: string;
  image: string;
  bio: string;
  role: string;
  ab_publications: PublicationModel[];
}

interface PeopleProps {
  people: PersonProps[];
}

export default function PeopleClient({ people }: PeopleProps) {
  const [filteredData, setFilteredData] = useState<PersonProps[]>([]);
  const [initialData, setInitialData] = useState<PersonProps[]>([]);
  useEffect(() => {
    if (people) {
      const sortedData = people.sort((a, b) => a.id - b.id); // Sort by ID in ascending order
      setFilteredData(sortedData);
      setInitialData(sortedData);
    }
  }, [people]);

  const handleFilteredData = (data: PersonProps[]) => {
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
