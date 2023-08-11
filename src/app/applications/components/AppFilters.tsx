import { ApplicationModel } from "@/models";
import React, { useState } from "react";

interface ApplicationFiltersProps {
  applicationData: ApplicationModel[];
  onFilteredData: (filteredData: ApplicationModel[]) => void;
}

const AppFilters = ({
  applicationData,
  onFilteredData,
}: ApplicationFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

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
          Education
        </button>
        <button
          className={`${
            selectedCategory === 3
              ? "border-b-2 border-primary-500 text-primary-500"
              : "text-gray-600 hover:text-primary-500"
          } px-4 py-2 font-medium transition duration-500 ease-in-out`}
          onClick={() => filterApplicationData(3)}
        >
          Public
        </button>
        <button
          className={`${
            selectedCategory === 2
              ? "border-b-2 border-primary-500 text-primary-500"
              : "text-gray-600 hover:text-primary-500"
          } px-4 py-2 font-medium transition duration-500 ease-in-out`}
          onClick={() => filterApplicationData(2)}
        >
          Accessibility
        </button>
      </span>
    </div>
  );
};

export default AppFilters;
