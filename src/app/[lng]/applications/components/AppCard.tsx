import React from "react";
import Image from "next/image";
import getAverageColor from "../colours/getAverageColour";

interface AppCardProps {
  id: number;
  created_at: string;
  name: string;
  url: string;
  category: number;
  description: string;
  image: string;
  comingSoonMsg: string;
  colour: string;
}

const imageStyle = {
  maskImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.03))`,
  WebkitMaskImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.03))`, // For Safari support
};

const AppCard = ({
  id,
  created_at,
  name,
  url,
  category,
  description,
  image,
  comingSoonMsg,
  colour,
}: AppCardProps) => {
  const isDisabled = url === "#";

  console.log("colour of " + name + " is: " + colour);
  // colour = "bg-primary-200";
  return (
    <div
      /*className={`border ${
        isDisabled ? "bg-gray-300" : "border-primary-200 border-2"
      } p-4 ${
        isDisabled ? "" : "cursor-pointer hover:bg-primary-200 duration-500"
      } */
      className={`relative w-[300px] h-[350px] ${colour} p-0.5 my-4 mx-2 rounded-xl`}
    >
      <a
        href={isDisabled ? undefined : url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex">
          <Image
            src={image}
            alt={name}
            width={1080}
            height={200}
            style={imageStyle}
            //className="w-full h-[150px] object-cover rounded-md md:w-[175px] md:h-[140px] lg:w-[250px] lg:h-[200px]"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
        <div className="flex-grow mx-2">
          <h2 className="text-lg text-white font-semibold">{name}</h2>
          <p className="text-white">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default AppCard;
