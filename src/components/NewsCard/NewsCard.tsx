"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "@/app/i18n/client";

interface NewsCardProps {
  title: string;
  blurb: string;
  date: string;
  imageURL: string;
  news_category: string;
  lng: any;
}

const NewsCard = ({
  title,
  blurb,
  date,
  imageURL,
  news_category,
  lng,
}: NewsCardProps) => {
  const headline = title; // Use title as headline
  const { t } = useTranslation(lng);

  let subheading = "";
  if (blurb) {
    subheading = blurb.length > 136 ? `${blurb?.slice(0, 136)}...` : blurb;
  }

  return (
    <div className="relative min-h-[250px] h-[400px] p-[16px] bg-white shadow-sm rounded-sm  transition-colors duration-300 hover:bg-primary-100">
      <img
        src={imageURL}
        alt={"altText"}
        className="max-h-[175px] w-full object-cover object-center rounded-[4px] mb-[8px]"
      />
      <div style={{ height: `${3 * 1.2}em` }}>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{headline}</h2>
      </div>
      <p className="text-sm text-gray-600 mb-4">{subheading}</p>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-[8px] bg-transparent">
        <p className=" text-[12px] font-bold mr-[8px] py-[4px] px-[8px] rounded-[4px] bg-primary-400 text-white">
          {date}
        </p>
        <span className="text-[12px] font-bold ml-[8px] py-[4px] px-[8px] rounded-[4px] bg-primary-400 text-white">
          {`${t("search." + news_category)}`}
        </span>
      </div>
      {/* </a> */}
    </div>
  );
};

export default NewsCard;
