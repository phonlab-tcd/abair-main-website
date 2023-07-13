/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import PeopleList from "./components/PeopleList";
import PeopleFilters from "./components/PeopleFilters";
import { supabase } from "@/services/supabase";
import { initialPeopleData } from "./data/peopleData";

interface People {
  id: number;
  name: string;
  image: string;
  bio: string;
  role: string;
}

export default function Page() {
  const [filteredData, setFilteredData] = useState(initialPeopleData);

  useEffect(() => {
    const fetchData = async () => {
      const { data: people, error } = await supabase
        .from("people")
        .select("id, name, image, bio, role");

      if (error) {
        console.error("Error fetching people data:", error);
      } else {
        setFilteredData(people || []);
      }

      if (people) {
        const sortedData = people.sort((a, b) => a.id - b.id); // Sort by ID in ascending order
        setFilteredData(sortedData);
      }
    };

    fetchData();
  }, []);

  const handleFilteredData = (data: People[]) => {
    setFilteredData(data);
  };

  return (
    <div className="w-screen">
      <div className="w-full flex justify-center">
        <div className="container flex">
          <div className="w-1/5 mt-[93px]">
            <div className="">
              <PeopleFilters
                peopleData={initialPeopleData}
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
