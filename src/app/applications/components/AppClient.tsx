"use client";
import { ApplicationModel } from "@/models";
import { useEffect, useState } from "react";
import AppFilters from "./AppFilters";
import AppCard from "./AppCard";

interface ApplicationProps {
  applications: ApplicationModel[];
}

export default function AppClient({ applications }: ApplicationProps) {
  const [filteredData, setFilteredData] = useState<ApplicationModel[]>([]);

  useEffect(() => {
    if (applications) {
      const filteredData = applications.filter(
        (application) => application.category === 1
      );
      setFilteredData(filteredData);
    }
  }, [applications]);

  const handleFilteredData = (data: ApplicationModel[]) => {
    setFilteredData(data);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl min-h-screen">
        <div className="text-4xl lg:text-6xl text-black text-center py-4">
          Applications
        </div>
        <div className="flex justify-center">
          <AppFilters
            applicationData={applications}
            onFilteredData={handleFilteredData}
          />
        </div>
        <div className="my-8 space-y-4 mx-auto max-w-6xl">
          {filteredData.map((application, index) => (
            <AppCard
              key={index}
              id={application.id}
              name={application.name}
              url={application.url}
              category={application.category}
              description_en={application.description_en}
              description_ga={application.description_ga}
              image={application.image}
              created_at={application.created_at}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
