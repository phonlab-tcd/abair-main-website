/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, FC } from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSearch: () => void;
}

const SearchBar = ({
  searchQuery,
  onSearchQueryChange,
  onSearch,
}: SearchBarProps) => {
  useEffect(() => {
    onSearch();
  }, [searchQuery]);

  return (
    <div>
      <input
        className="border-green-500"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          const newSearchQuery = e.target.value;
          onSearchQueryChange(newSearchQuery);

          //console.log("value: " + e.target.value);
          //console.log("searchQuery: " + newSearchQuery);
        }}
        style={{ width: "150px", height: "40px", marginLeft: "20px" }}
      />
    </div>
  );
};

export default SearchBar;
