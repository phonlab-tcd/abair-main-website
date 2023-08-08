/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { PaperModel } from "@/models";

import {
  AccordionClient,
  CategoryFilter,
  SortMenu,
  DateRangePicker,
  SearchBar,
} from "@/components";

interface PaperFiltersProps {
  largeScreen: boolean;
  paperData: PaperModel[];
  onFilteredData: (filteredData: PaperModel[]) => void;
}

const PaperFilters = ({
  largeScreen,
  paperData,
  onFilteredData,
}: PaperFiltersProps) => {
  const [categories, setCategories] = useState<(string | undefined)[]>([]);

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
    let filteredData: PaperModel[] = paperData;

    if (startYear && endYear && yearRangeSelected) {
      filteredData = filteredData.filter((paper) => {
        const paperDate = paper.year_published;
        return paperDate >= startYear && paperDate <= endYear;
      });
    }

    if (category !== "all" && category !== "") {
      filteredData = filteredData.filter(
        (paper) => paper.publication_category === category
      );
    } else {
      filteredData = filteredData.filter((paper) => paper.title !== "");
    }

    if (sortOption !== "") {
      filteredData.sort((a, b) => {
        const dateA = new Date(a.year_published as number).getTime();
        const dateB = new Date(b.year_published as number).getTime();
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

  useEffect(() => {
    const categories = [
      ...new Set(paperData.map((obj) => obj.publication_category)),
    ];
    setCategories(categories);
  }, []);

  return (
    <div className="w-full justify-center bg-teal-400">
      <AccordionClient
        search={true}
        title="category"
        open={largeScreen}
        content={
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={(category) => {
              setSelectedCategory(category);
              filterPaperData(
                category,
                sortBy,
                startYear,
                endYear,
                searchQuery
              );
            }}
          />
        }
      />
      <AccordionClient
        search={true}
        title="sort by"
        open={largeScreen}
        content={
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
        }
      />

      <AccordionClient
        search={true}
        title="date range"
        open={largeScreen}
        content={
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
        }
      />
      <AccordionClient
        search={true}
        title="search"
        open={largeScreen}
        content={
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
        }
      />
    </div>
  );
};

export default PaperFilters;
