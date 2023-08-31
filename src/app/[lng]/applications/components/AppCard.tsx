import React from "react";
import Image from "next/image";

interface AppCardProps {
  id: number;
  created_at: string;
  name: string;
  url: string;
  category: number;
  description: string;
  image: string;
  comingSoonMsg: string;
}

const AppCard = ({
  id,
  created_at,
  name,
  url,
  category,
  description,
  image,
  comingSoonMsg,
}: AppCardProps) => {
  const isDisabled = url === "#";

  return (
    <div
      className={`border ${
        isDisabled ? "bg-gray-300" : "border-primary-200 border-2"
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
          <Image
            src={image}
            alt={name}
            className="w-[100px] h-[80px] object-cover rounded-md md:w-[175px] md:h-[140px] lg:w-[250px] lg:h-[200px]"
          />
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-800">{description}</p>
          </div>
        </div>
      </a>
      {isDisabled && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50">
          <p className="text-white text-2xl font-semibold">{comingSoonMsg}</p>
        </div>
      )}
    </div>
  );
};

export default AppCard;
