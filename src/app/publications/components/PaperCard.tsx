import React from "react";
import Link from "next/link";
import { PaperModel } from "@/models";

const PaperCard = ({
  id,
  title,
  abstract,
  year_published,
  pdf_url,
  publication_category,
  authors,
}: PaperModel) => {
  const imageUrl =
    "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/Neasa_UK_Speech_Keynote.JPG";
  const titleLines = 4; // Number of lines for the title

  const subheading =
    abstract.length > 200 ? `${abstract.slice(0, 200)}...` : abstract;
  const titleText = title;

  const authorNames = authors.join(",  "); // Join author names with a comma separator

  return (
    <div className="relative min-h-[250px] h-[400px] p-[16px] bg-white shadow-md rounded-md  transition-colors duration-300 hover:bg-green-100">
      {/* <a href={pdf_url} target="_blank" rel="noopener noreferrer"> */}
      <Link href={`/publications/${id}`}>
        <div className=" flex flex-1 flex-col">
          <div
            className="flex-none"
            style={{ height: `${titleLines * 1.2}em` }}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {titleText}
            </h2>
          </div>
          <div
            className="mt-[36px] mb-[8px]"
            style={{ height: `${3 * 1.2}em` }}
          >
            <p className="text-sm text-gray-1000 mb-2">{authorNames}</p>
          </div>
          <div className="flex-1 mt-[20px]">
            <p className="text-sm text-black mb-4 font-semibold">
              {subheading}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-[8px] bg-transparent">
          <p className=" text-[12px] font-bold mr-[8px] py-[4px] px-[8px] rounded-[4px] bg-primary-300 text-white">
            {year_published}
          </p>
          <span className="text-[12px] font-bold ml-[8px] py-[4px] px-[8px] rounded-[4px]  bg-primary-300 text-white">
            {publication_category}
          </span>
        </div>
      </Link>
      {/* </a> */}
    </div>
  );
};

export default PaperCard;
