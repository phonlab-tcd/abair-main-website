/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, FC } from "react";
import { useTranslation } from "@/app/i18n/client";

interface SearchBarProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSearch: () => void;
  lng: any;
}

const SearchBar = ({
  searchQuery,
  onSearchQueryChange,
  onSearch,
  lng,
}: SearchBarProps) => {
  useEffect(() => {
    onSearch();
  }, [searchQuery]);
  const { t } = useTranslation(lng);

  return (
    <div>
      <input
        className="border-green-500 w-full h-8 px-1"
        type="text"
        placeholder={`${t("search.search")}...`}
        value={searchQuery}
        onChange={(e) => {
          const newSearchQuery = e.target.value;
          onSearchQueryChange(newSearchQuery);

          //console.log("value: " + e.target.value);
          //console.log("searchQuery: " + newSearchQuery);
        }}
      />
    </div>
  );
};

export default SearchBar;
