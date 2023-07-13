import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RoleFilter from "./RoleFilter";

interface People {
  id: number;
  name: string;
  image: string;
  bio: string;
  role: string;
}
interface PeopleFiltersProps {
  peopleData: People[];
  onFilteredData: (filteredData: People[]) => void;
}

const PeopleFilters: React.FC<PeopleFiltersProps> = ({
  peopleData,
  onFilteredData,
}) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filterPeopleData = (role: string, searchQuery: string) => {
    let filteredData: People[] = peopleData;

    console.log("searching by: " + searchQuery);
    console.log("filtering by: " + role);

    console.log(filteredData);

    if (role !== "All" && role !== "") {
      filteredData = filteredData.filter((person) => person.role === role);
      console.log(filteredData);
    } else {
      filteredData = filteredData.filter((person) => person.role !== "");
    }

    if (searchQuery !== "") {
      filteredData = filteredData.filter(
        (person) =>
          person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          person.bio.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      filteredData = filteredData.filter((person) => person.role !== "");
    }

    filteredData.sort((a, b) => a.id - b.id);

    onFilteredData(filteredData);
  };

  return (
    <div className="h-22 bg-white shadow-md p-4 items-center justify-center">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Filter and Search
      </label>
      <SearchBar
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onSearch={() => filterPeopleData(selectedRole, searchQuery)}
      />

      <div className="mt-6 space-y-10">
        <RoleFilter
          selectedRole={selectedRole}
          onRoleChange={(role) => {
            setSelectedRole(role);
            filterPeopleData(role, searchQuery);
          }}
        />
      </div>
    </div>
  );
};

export default PeopleFilters;
