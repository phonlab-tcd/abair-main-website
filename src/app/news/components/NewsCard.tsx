import React from "react";
import "../styles/NewsCard.css";

interface NewsCardProps {
  id: number;
  created_at: string;
  date: string;
  title_en: string;
  blurb_en: string;
  body_en: null | string;
  images: { url: string }[];
  title_ga: string;
  blurb_ga: string;
  body_ga: null | string;
  video: null | string;
  link: string;
  category: string;
  altText: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title_en,
  blurb_en,
  date,
  images,
  link,
  category,
  altText,
}) => {
  const imageUrl = images[0]?.url; // Safely access the URL of the first image
  const headline = title_en; // Use title_en as headline
  const subheading =
    blurb_en.length > 136 ? `${blurb_en.slice(0, 136)}...` : blurb_en;

  return (
    <div className="relative min-h-[250px] h-[400px] p-[16px] bg-white shadow-md rounded-md  transition-colors duration-300 hover:bg-green-100">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt={altText}
          className="max-h-[200px] w-full object-cover object-center rounded-[4px] mb-[8px]"
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{headline}</h2>
        <p className="text-sm text-gray-600 mb-4">{subheading}</p>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-[8px] bg-transparent">
          <p className=" text-[12px] font-bold mr-[8px] py-[4px] px-[8px] rounded-[4px] bg-[#7ad65c] text-white">
            {date}
          </p>
          <span className="text-[12px] font-bold ml-[8px] py-[4px] px-[8px] rounded-[4px]  bg-[#7ad65c] text-white">
            {category}
          </span>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
