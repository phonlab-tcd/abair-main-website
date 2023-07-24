/* eslint-disable @next/next/no-img-element */
import React from "react";

import { News } from "./NewsClient";
import Link from "next/link";

const NewsCard: React.FC<News> = ({
  id,
  title_en,
  blurb_en,
  date,
  images,
  news_category,
}) => {
  const imageUrl = images[0]?.url; // Safely access the URL of the first image
  const headline = title_en; // Use title_en as headline
  const subheading =
    blurb_en.length > 136 ? `${blurb_en.slice(0, 136)}...` : blurb_en;

  return (
    <Link href={`/news/${id}`}>
      <div className="relative min-h-[250px] h-[400px] p-[16px] bg-white shadow-sm rounded-sm  transition-colors duration-300 hover:bg-primary-100">
        <img
          src={imageUrl}
          alt={"altText"}
          className="max-h-[175px] w-full object-cover object-center rounded-[4px] mb-[8px]"
        />
        <div style={{ height: `${3 * 1.2}em` }}>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {headline}
          </h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">{subheading}</p>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-[8px] bg-transparent">
          <p className=" text-[12px] font-bold mr-[8px] py-[4px] px-[8px] rounded-[4px] bg-primary-400 text-white">
            {date}
          </p>
          <span className="text-[12px] font-bold ml-[8px] py-[4px] px-[8px] rounded-[4px] bg-primary-400 text-white">
            {news_category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
