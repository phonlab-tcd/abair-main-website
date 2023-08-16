"use client";
import { ApplicationModel } from "@/models";
import React, { useState } from "react";
import { useTranslation } from "@/app/i18n/client";

interface ApplicationFiltersProps {
  applicationData: ApplicationModel[];
  onFilteredData: (filteredData: ApplicationModel[]) => void;
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
    <div className="flex justify-center border-b border-primary-500">
      <span className="space-x-4">
        <button
          className={`${
            selectedCategory === 1
              ? "border-b-2 border-primary-500 text-primary-500"
              : "text-gray-600 hover:text-primary-500"
          } px-4 py-2 font-medium transition duration-500 ease-in-out`}
          onClick={() => filterApplicationData(1)}
        >
          {t("pages.applications.education").toUpperCase()}
        </button>
        <button
          className={`${
            selectedCategory === 3
              ? "border-b-2 border-primary-500 text-primary-500"
              : "text-gray-600 hover:text-primary-500"
          } px-4 py-2 font-medium transition duration-500 ease-in-out`}
          onClick={() => filterApplicationData(3)}
        >
          {t("pages.applications.public").toUpperCase()}
        </button>
        <button
          className={`${
            selectedCategory === 2
              ? "border-b-2 border-primary-500 text-primary-500"
              : "text-gray-600 hover:text-primary-500"
          } px-4 py-2 font-medium transition duration-500 ease-in-out`}
          onClick={() => filterApplicationData(2)}
        >
          {t("pages.applications.accessibility").toUpperCase()}
        </button>
      </span>
    </div>
  );
};

export default AppFilters;
