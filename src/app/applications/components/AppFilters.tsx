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
  const [activeCategory, setActiveCategory] = useState<number>(1);

  const filterApplicationData = (category: number) => {
    const filteredData = applicationData.filter(
      (application) => application.category === category
    );
    onFilteredData(filteredData);
    setActiveCategory(category);
  };

  return (
    <div className="flex justify-center">
      <span className="space-x-4">
        <button
          className={`${
            activeCategory === 1
              ? "bg-primary-200 text-primary-600"
              : "bg-primary-500"
          } text-white px-4 py-2 rounded`}
          onClick={() => filterApplicationData(1)}
        >
          Education
        </button>
        <button
          className={`${
            activeCategory === 3
              ? "bg-primary-200 text-primary-600"
              : "bg-primary-500"
          } text-white px-4 py-2 rounded`}
          onClick={() => filterApplicationData(3)}
        >
          Public
        </button>
        <button
          className={`${
            activeCategory === 2
              ? "bg-primary-200 text-primary-600"
              : "bg-primary-500"
          } text-white px-4 py-2 rounded`}
          onClick={() => filterApplicationData(2)}
        >
          Accessibility
        </button>
      </span>
    </div>
  );
};

export default AppFilters;
