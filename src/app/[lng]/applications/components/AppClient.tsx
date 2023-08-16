"use client";
import { ApplicationModel } from "@/models";
import { useEffect, useState } from "react";
import AppFilters from "./AppFilters";
import AppCard from "./AppCard";
import { useTranslation } from "@/app/i18n/client";

interface ApplicationProps {
  applications: ApplicationModel[];
  lng: any;
}

export default function AppClient({ applications, lng }: ApplicationProps) {
  const [filteredData, setFilteredData] = useState<ApplicationModel[]>([]);
  const { t } = useTranslation(lng);

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

  // Separate app cards with no URL from others
  const cardsWithUrl = filteredData.filter((card) => card.url !== "#");
  const cardsWithoutUrl = filteredData.filter((card) => card.url === "#");

  // Combine arrays to place cards without URL at the bottom
  const sortedData = [...cardsWithUrl, ...cardsWithoutUrl];

  return (
    <div className="w-full flex justify-center">
      <div className="w-full mt-8 max-w-2xl min-h-screen">
        <div className="w-full text-center text-grey-800 text-2xl sm:text-3xl font-mono">
          {t("infoHeader.home.applications.title")}
        </div>
        <div className="flex justify-center mt-4 lg:mt-8">
          <AppFilters
            applicationData={applications}
            onFilteredData={handleFilteredData}
            lng={lng}
          />
        </div>
        <div className="my-8 space-y-4 mx-auto max-w-6xl">
          {sortedData.map((application, index) => (
            <AppCard
              key={index}
              id={application.id}
              name={application.name}
              url={application.url}
              category={application.category}
              description={
                lng === "en"
                  ? application.description_en
                  : application.description_ga
              }
              image={application.image}
              created_at={application.created_at}
              comingSoonMsg={lng === "en" ? "coming soon" : "le teacht"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
