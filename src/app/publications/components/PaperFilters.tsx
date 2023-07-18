import React, { useState } from "react";
import { Paper } from "./PaperClient";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortMenu from "./SortMenu";
import DateRangePicker from "./DateRangePicker";

interface PaperFiltersProps {
  paperData: Paper[];
  onFilteredData: (filteredData: Paper[]) => void;
}

const PaperFilters: React.FC<PaperFiltersProps> = ({
  paperData,
  onFilteredData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [startYear, setStartYear] = useState(2017);
  const [endYear, setEndYear] = useState(2022);
  const [yearRangeSelected, setYearRangeSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filterPaperData = (
    category: string,
    sortOption: string,
    startYear: number,
    endYear: number,
    searchQuery: string
  ) => {
    let filteredData: Paper[] = paperData;

    if (startYear && endYear && yearRangeSelected) {
      filteredData = filteredData.filter((paper) => {
        const paperDate = paper.year_published;
        return paperDate >= startYear && paperDate <= endYear;
      });
    }

    if (category !== "All" && category !== "") {
      filteredData = filteredData.filter(
        (paper) => paper.publication_category === category
      );
    } else {
      filteredData = filteredData.filter((paper) => paper.title !== "");
    }

    if (sortOption !== "") {
      filteredData.sort((a, b) => {
        const dateA = new Date(a.year_published).getTime();
        const dateB = new Date(b.year_published).getTime();
        return sortOption === "oldest" ? dateA - dateB : dateB - dateA;
      });
    }

    if (searchQuery) {
      filteredData = filteredData.filter((paper) =>
        paper.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    onFilteredData(filteredData);
  };

  return (
    <div className="h-22 bg-white shadow-md p-4 items-center justify-center">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center">
        Filter and Sort
      </label>
      <SearchBar
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onSearch={() =>
          filterPaperData(
            selectedCategory,
            sortBy,
            startYear,
            endYear,
            searchQuery
          )
        }
      />

      <div className="mt-6 space-y-10">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => {
            setSelectedCategory(category);
            filterPaperData(category, sortBy, startYear, endYear, searchQuery);
          }}
        />

        <SortMenu
          sortBy={sortBy}
          onSortChange={(sortOption) => {
            setSortBy(sortOption);
            filterPaperData(
              selectedCategory,
              sortOption,
              startYear,
              endYear,
              searchQuery
            );
          }}
        />

        <DateRangePicker
          startYear={startYear}
          endYear={endYear}
          onStartYearChange={(year) => {
            setStartYear(year);
            setYearRangeSelected(true);
            filterPaperData(
              selectedCategory,
              sortBy,
              year,
              endYear,
              searchQuery
            );
          }}
          onEndYearChange={(year) => {
            setEndYear(year);
            setYearRangeSelected(true);
            filterPaperData(
              selectedCategory,
              sortBy,
              startYear,
              year,
              searchQuery
            );
          }}
          onApplyYearRange={() => {
            setYearRangeSelected(true);
            filterPaperData(
              selectedCategory,
              sortBy,
              startYear,
              endYear,
              searchQuery
            );
          }}
        />
      </div>
    </div>
  );
};

export default PaperFilters;
