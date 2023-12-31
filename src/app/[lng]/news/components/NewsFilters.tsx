"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Tables } from "@/types/supabase-helpers";

import { AccordionClient } from "@/components/Accordion";
import {
  CategoryFilter,
  SortMenu,
  DateRangePicker,
  SearchBar,
} from "@/components/Filters";
import { useTranslation } from "@/app/i18n/client";

interface NewsFiltersProps {
  largeScreen: boolean;
  newsData: Tables<"news_stories">[];
  onFilteredData: (filteredData: Tables<"news_stories">[]) => void;
  lng: any;
}

const NewsFilters = ({
  largeScreen,
  newsData,
  onFilteredData,
  lng,
}: NewsFiltersProps) => {
  const [categories, setCategories] = useState<(string | undefined)[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateRangeSelected, setDateRangeSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation(lng);

  const filterNewsData = (
    category: string,
    sortOption: string,
    startDate: string,
    endDate: string,
    searchQuery: string
  ) => {
    let filteredData: Tables<"news_stories">[] = newsData;

    if (startDate && endDate && dateRangeSelected) {
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      filteredData = filteredData.filter((news) => {
        const newsDate = new Date(news.date as string);
        return newsDate >= startDateObj && newsDate <= endDateObj;
      });
    }

    if (category !== "all" && category !== "") {
      filteredData = filteredData.filter(
        (news) => news.news_category === category
      );
    } else {
      filteredData = filteredData.filter((news) => news.title_en !== "");
    }

    if (sortOption !== "") {
      filteredData.sort((a, b) => {
        const dateA = new Date(a.date as string).getTime();
        const dateB = new Date(b.date as string).getTime();
        return sortOption === "oldest" ? dateA - dateB : dateB - dateA;
      });
    }

    if (searchQuery !== "") {
      filteredData = filteredData.filter(
        (news) =>
          news.title_en &&
          news.title_en.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      filteredData = filteredData.filter((news) => news.title_en !== "");
    }

    onFilteredData(filteredData);
  };

  useEffect(() => {
    const categories = [...new Set(newsData.map((obj) => obj.news_category))];
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
              filterNewsData(category, sortBy, startDate, endDate, searchQuery);
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
              filterNewsData(
                selectedCategory,
                sortOption,
                startDate,
                endDate,
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
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={(date) => {
              setStartDate(date);
              setDateRangeSelected(true);
              filterNewsData(
                selectedCategory,
                sortBy,
                date,
                endDate,
                searchQuery
              );
            }}
            onEndDateChange={(date) => {
              setEndDate(date);
              setDateRangeSelected(true);
              filterNewsData(
                selectedCategory,
                sortBy,
                startDate,
                date,
                searchQuery
              );
            }}
            onApplyDateRange={() => {
              setDateRangeSelected(true);
              filterNewsData(
                selectedCategory,
                sortBy,
                startDate,
                endDate,
                searchQuery
              );
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
            onSearch={() =>
              filterNewsData(
                selectedCategory,
                sortBy,
                startDate,
                endDate,
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

export default NewsFilters;
