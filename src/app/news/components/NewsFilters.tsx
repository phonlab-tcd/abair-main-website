import React, { useState } from "react";
import { News } from "../data/NewsData";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortMenu from "./SortMenu";
import DateRangePicker from "./DateRangePicker";

interface NewsFiltersProps {
  newsData: News[];
  onFilteredData: (filteredData: News[]) => void;
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
    let filteredData: News[] = newsData;

    console.log("filtering by: " + searchQuery);

    if (startDate && endDate && dateRangeSelected) {
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      filteredData = filteredData.filter((news) => {
        const newsDate = new Date(news.date);
        return newsDate >= startDateObj && newsDate <= endDateObj;
      });
    }

    if (category !== "All" && category !== "") {
      filteredData = filteredData.filter((news) => news.category === category);
    } else {
      filteredData = filteredData.filter((news) => news.altText === "image");
    }

    if (sortOption !== "") {
      filteredData.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOption === "oldest" ? dateA - dateB : dateB - dateA;
      });
    }

    if (searchQuery !== "") {
      filteredData = filteredData.filter((news) =>
        news.title_en.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      filteredData = filteredData.filter((news) => news.altText === "image");
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
          filterNewsData(
            selectedCategory,
            sortBy,
            startDate,
            endDate,
            searchQuery
          )
        }
      />

      <div className="mt-6 space-y-10">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => {
            setSelectedCategory(category);
            filterNewsData(category, sortBy, startDate, endDate, searchQuery);
          }}
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
      </div>
    </div>
  );
};

export default NewsFilters;
