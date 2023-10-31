import React from "react";
import PersonCard from "./PersonCard";
import { Tables } from "@/types/supabase-helpers";

interface PeopleListProps {
  lng: any;
  peopleData: Tables<"people">[];
}

const PeopleList = ({ lng, peopleData }: PeopleListProps) => {
  return (
    <div className="p-4">
      <div className="flex mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {peopleData.map((person, index) => (
          <PersonCard
            lng={lng}
            key={index}
            id={person.id}
            name={person.name}
            bio={person.bio}
            image={person.image}
            role={person.role}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
