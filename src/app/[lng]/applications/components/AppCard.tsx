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
      /*className={`border ${
        isDisabled ? "bg-gray-300" : "border-primary-200 border-2"
      } p-4 ${
        isDisabled ? "" : "cursor-pointer hover:bg-primary-200 duration-500"
      } */
      className="relative w-[300px] h-[300px] bg-primary-500 p-1 my-4 mx-2"
    >
      <a
        href={isDisabled ? undefined : url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex bg-primary-500 bg-blend-normal">
          <Image
            src={image}
            alt={name}
            width={1080}
            height={500}
            //className="w-full h-[150px] object-cover rounded-md md:w-[175px] md:h-[140px] lg:w-[250px] lg:h-[200px]"
            className="w-full h-[150px] object-cover"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-lg text-white font-semibold">{name}</h2>
          <p className="text-white">{description}</p>
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
