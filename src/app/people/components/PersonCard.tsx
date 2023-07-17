/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../styles/PersonCard.css";

interface PersonCardProps {
  id: number;
  name: string;
  image: string;
  bio: string;
  role: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  id,
  name,
  image,
  bio,
  role,
}) => {
  const imageUrl = image;
  const headline = name;
  const subheading = bio;
  const altText = "image of " + name;

  return (
    <div className="card bg-white shadow-md rounded-md p-4 transition-colors duration-300 hover:bg-green-200">
      <a
        href={"https://www.google.ie/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={imageUrl} alt={altText} className="card-image" />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{headline}</h2>
        <p className="text-sm text-gray-600 mb-4">{subheading}</p>
        <div className="card-footer">
          <p className="card-date">{"id: " + id}</p>
          <span className="card-category">{role}</span>
        </div>
      </a>
    </div>
  );
};

export default PersonCard;
