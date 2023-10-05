"use client";
import { Tables } from "@/types/supabase-helpers";

import React, { useState } from "react";
import { useTranslation } from "@/app/i18n/client";

interface ApplicationFiltersProps {
  applicationData: Tables<"applications">[];
  onFilteredData: (filteredData: Tables<"applications">[]) => void;
  lng: any;
}

const AppFilters = ({
  applicationData,
  onFilteredData,
  lng,
}: ApplicationFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const { t } = useTranslation(lng);

  const filterApplicationData = (category: number) => {
    const filteredData = applicationData.filter(
      (application) => application.category === category
    );
    onFilteredData(filteredData);
    setSelectedCategory(category);
  };

  return (
    <div className="flex justify-center bg-gray-100 border-primary-500">
      <button
        className={`${
          selectedCategory === 1
            ? "bg-primary-500 text-white"
            : "text-gray-600 hover:text-primary-500"
        } px-4 py-2 font-medium transition duration-500 ease-in-out`}
        onClick={() => filterApplicationData(1)}
      >
        {t("pages.applications.education").toUpperCase()}
      </button>
      <button
        className={`${
          selectedCategory === 3
            ? "bg-primary-500 text-white"
            : "text-gray-600 hover:text-primary-500"
        } px-4 py-2 font-medium transition duration-500 ease-in-out`}
        onClick={() => filterApplicationData(3)}
      >
        {t("pages.applications.public").toUpperCase()}
      </button>
      <button
        className={`${
          selectedCategory === 2
            ? "bg-primary-500 text-white"
            : "text-gray-600 hover:text-primary-500"
        } px-4 py-2 font-medium transition duration-500 ease-in-out`}
        onClick={() => filterApplicationData(2)}
      >
        {t("pages.applications.accessibility").toUpperCase()}
      </button>
    </div>
  );
};

export default AppFilters;
