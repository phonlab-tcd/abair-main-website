import React, { useState } from "react";
import RoleFilter from "./RoleFilter";
import { SearchBar } from "@/components/Filters";

import { Tables } from "@/types/supabase-helpers";
import { AccordionClient } from "@/components/Accordion";
import { useTranslation } from "@/app/i18n/client";

interface PeopleFiltersProps {
  largeScreen: boolean;
  peopleData: Tables<"people">[];
  onFilteredData: (filteredData: Tables<"people">[]) => void;
  lng: any;
}

const PeopleFilters = ({
  largeScreen,
  peopleData,
  onFilteredData,
  lng,
}: PeopleFiltersProps) => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation(lng);

  const filterPeopleData = (selectedRole: string, searchQuery: string) => {
    let filteredData: Tables<"people">[] = peopleData;

    console.log(filteredData);

    if (selectedRole !== "All" && selectedRole !== "") {
      filteredData = filteredData.filter(
        (person) => selectedRole === person.role
      );
    } else {
      filteredData = filteredData.filter((person) => person.role !== "");
    }

    if (searchQuery !== "") {
      filteredData = filteredData.filter(
        (person) =>
          person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (person.bio &&
            person.bio.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      filteredData = filteredData.filter((person) => person.role !== "");
    }

    filteredData.sort((a, b) => a.id - b.id);

    console.log(filteredData);
    onFilteredData(filteredData);
  };

  return (
    <div className="w-full justify-center bg-teal-400">
      <AccordionClient
        search={true}
        title={t("search.category")}
        open={largeScreen}
        content={
          <RoleFilter
            selectedRole={selectedRole}
            onRoleChange={(role) => {
              setSelectedRole(role);
              filterPeopleData(role, searchQuery);
            }}
          />
        }
      />
      <AccordionClient
        search={true}
        title={t("search.search")}
        open={largeScreen}
        content={
          <SearchBar
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            onSearch={() => filterPeopleData(selectedRole, searchQuery)}
            lng={lng}
          />
        }
      />

      <div className="mt-6 space-y-10"></div>
    </div>
  );
};

export default PeopleFilters;
