import React from "react";
import PersonCard from "./PersonCard";

interface People {
  id: number;
  name: string;
  image: string;
  bio: string;
  role: string;
}

interface NewsListProps {
  peopleData: People[];
}

const PeopleList: React.FC<NewsListProps> = ({ peopleData }) => {
  return (
    <div className="p-4">
      <div className="flex mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {peopleData.map((person, index) => (
          <PersonCard
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
