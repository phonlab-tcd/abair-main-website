import React from "react";
import "../styles/PaperCard.css";

interface PaperCardProps {
  id: number;
  created_at: string;
  title: string;
  abstract: string;
  pdf_url: string;
  year_published: number;
  authors: string[];

  // new props

  category: string;
}

const PaperCard: React.FC<PaperCardProps> = ({
  title,
  abstract,
  year_published,
  pdf_url,
  category,
  authors,
}) => {
  const imageUrl =
    "https://pdntukcptgktuzpynlsv.supabase.co/storage/v1/object/public/abair-bucket/news/Neasa_UK_Speech_Keynote.JPG";
  const titleLines = 4; // Number of lines for the title

  const subheading =
    abstract.length > 250 ? `${abstract.slice(0, 250)}...` : abstract;
  const titleText = title;

  const authorNames = authors.join(",  "); // Join author names with a comma separator

  return (
    <div className="card bg-white shadow-md rounded-md p-4 transition-colors duration-300 hover:bg-green-200">
      <a href={pdf_url} target="_blank" rel="noopener noreferrer">
        <div className="card-content">
          <div
            className="title-area"
            style={{ height: `${titleLines * 1.2}em` }}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {titleText}
            </h2>
          </div>
          <div className="authors-area">
            <p className="text-sm text-gray-1000 mb-2">{authorNames}</p>
          </div>
          <div className="abstract-area">
            <p className="text-sm text-black mb-4 font-semibold">
              {subheading}
            </p>
          </div>
        </div>
        <div className="card-footer">
          <p className="card-date text-black font-bold">{year_published}</p>
          <span className="card-category">{category}</span>
        </div>
      </a>
    </div>
  );
};

export default PaperCard;
