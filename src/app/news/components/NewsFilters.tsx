import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortMenu from "./SortMenu";
import DateRangePicker from "./DateRangePicker";
import { NewsModel } from "@/models";
import { AccordionClient } from "@/components";

interface NewsFiltersProps {
  newsData: NewsModel[];
  onFilteredData: (filteredData: NewsModel[]) => void;
}

const NewsFilters: React.FC<NewsFiltersProps> = ({
  newsData,
  onFilteredData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateRangeSelected, setDateRangeSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filterNewsData = (
    category: string,
    sortOption: string,
    startDate: string,
    endDate: string,
    searchQuery: string
  ) => {
    let filteredData: NewsModel[] = newsData;

    console.log("filtering by: " + searchQuery);

    if (startDate && endDate && dateRangeSelected) {
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      filteredData = filteredData.filter((news) => {
        const newsDate = new Date(news.date as string);
        return newsDate >= startDateObj && newsDate <= endDateObj;
      });
    }

    if (category !== "All" && category !== "") {
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

  return (
    <div className="flex flex-wrap w-full justify-center p-4 bg-teal-200">
      <AccordionClient
        content={
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={(category) => {
              setSelectedCategory(category);
              filterNewsData(category, sortBy, startDate, endDate, searchQuery);
            }}
          />
        }
      />

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
      />

      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={(date) => {
          setStartDate(date);
          setDateRangeSelected(true);
          filterNewsData(selectedCategory, sortBy, date, endDate, searchQuery);
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
      />
    </div>
  );
};

export default NewsFilters;
