"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import DateRangePicker from "./DateRangePicker";
import { AccordionClient } from "@/components/Accordion";
import { CategoryFilter, SortMenu, SearchBar } from "@/components/Filters";
import { useTranslation } from "@/app/i18n/client";
import { Tables } from "@/types/supabase-helpers";

interface PaperFiltersProps {
  largeScreen: boolean;
  paperData: Tables<"ab_publications">[];
  onFilteredData: (filteredData: Tables<"ab_publications">[]) => void;
  lng: any;
}

const PaperFilters = ({
  largeScreen,
  paperData,
  onFilteredData,
  lng,
}: PaperFiltersProps) => {
  const [categories, setCategories] = useState<(string | undefined)[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [startYear, setStartYear] = useState(2017);
  const [endYear, setEndYear] = useState(2022);
  const [yearRangeSelected, setYearRangeSelected] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation(lng);

  const filterPaperData = (
    category: string,
    sortOption: string,
    startYear: number,
    endYear: number,
    searchQuery: string
  ) => {
    let filteredData: Tables<"ab_publications">[] = paperData;

    if (startYear && endYear && yearRangeSelected) {
      //console.log("filtering by year with start year: " + startYear + "\n and end year: " + endYear);
      filteredData = filteredData.filter((paper) => {
        const paperDate = paper.year_published;
        if (paperDate) {
          return paperDate >= startYear && paperDate <= endYear;
        } else {
          return true;
        }
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
      filteredData = filteredData.filter(
        (paper) =>
          paper.title &&
          paper.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    //console.log("filtering");
    //console.log(filteredData)
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
        title={t("search.category")}
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
            lng={lng}
          />
        }
      />
      <AccordionClient
        search={true}
        title={t("search.sortBy")}
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
            lng={lng}
          />
        }
      />

      <AccordionClient
        search={true}
        title={t("search.dateRange")}
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
            lng={lng}
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
            onSearch={() =>
              filterPaperData(
                selectedCategory,
                sortBy,
                startYear,
                endYear,
                searchQuery
              )
            }
            lng={lng}
          />
        }
      />
    </div>
  );
};

export default PaperFilters;
