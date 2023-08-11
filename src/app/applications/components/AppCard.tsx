import React from "react";

interface AppCardProps {
  id: number;
  created_at: string;
  name: string;
  url: string;
  category: number;
  description_en: string;
  description_ga: string;
  image: string;
}

const AppCard = ({
  id,
  created_at,
  name,
  url,
  category,
  description_en,
  image,
}: AppCardProps) => {
  const isDisabled = url === "#";

  return (
    <div
      className={`border ${
        isDisabled ? "bg-gray-300" : "border-primary-300"
      } p-4 ${
        isDisabled ? "" : "cursor-pointer hover:bg-primary-200 duration-500"
      } relative`}
    >
      <a
        href={isDisabled ? undefined : url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex space-x-4">
          <img
            src={image}
            alt={name}
            className="w-[225px] h-[200px] object-cover rounded-md"
          />
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-800">{description_en}</p>
          </div>
        </div>
      </a>
      {isDisabled && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50">
          <p className="text-white text-2xl font-semibold">COMING SOON</p>
        </div>
      )}
    </div>
  );
};

export default AppCard;
