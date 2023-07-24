import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RoleFilter from "./RoleFilter";
import { PersonModel } from "@/models";
interface PeopleFiltersModel {
  peopleData: PersonModel[];
  onFilteredData: (filteredData: PersonModel[]) => void;
}

const PeopleFilters = ({ peopleData, onFilteredData }: PeopleFiltersModel) => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filterPeopleData = (selectedRoles: string[], searchQuery: string) => {
    let filteredData: PersonModel[] = peopleData;

    console.log("original data: ");
    console.log(filteredData);
    console.log("selected roles: " + selectedRoles);

    if (selectedRoles.length > 0 && !selectedRoles.includes("All")) {
      filteredData = filteredData.filter((person) =>
        selectedRoles.includes(person.role)
      );
    } else if (selectedRoles.includes("All")) {
      filteredData = filteredData.filter((person) => person.role !== "");
      console.log("elseif");
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

    console.log(filteredData);
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
        onSearch={() => filterPeopleData(selectedRoles, searchQuery)}
      />

      <div className="mt-6 space-y-10">
        <RoleFilter
          selectedRoles={selectedRoles}
          onRoleChange={(roles) => {
            setSelectedRoles(roles);
            filterPeopleData(roles, searchQuery);
          }}
        />
      </div>
    </div>
  );
};

export default PeopleFilters;
