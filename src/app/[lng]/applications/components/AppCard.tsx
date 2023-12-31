import React from "react";
import Image from "next/image";
import getColour from "../data/colourCodes";

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

  colour = getColour(name);
  console.log("url:", url);
  return (
    <div
      className={`relative w-[300px] h-[350px] ${colour} my-4 mx-2 rounded-xl transition-all duration-300 hover:scale-102 shadow-sm hover:shadow-lg`}
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
