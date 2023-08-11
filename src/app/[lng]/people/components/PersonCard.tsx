/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { PersonModel } from "@/models";

const PersonCard = ({ id, name, bio, image, role }: PersonModel) => {
  return (
    <Link href={`/people/${id}`}>
      <div className="relative min-h-[250px] h-[400px] p-[16px] bg-white shadow-md rounded-md transition-colors duration-300 hover:bg-green-100">
        <img
          src={image}
          alt={`image of ${name}`}
          className="max-h-[200px] w-full object-cover object-center rounded-[4px] mb-[8px]"
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{bio}</p>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-[8px] bg-transparent">
          <p className="text-[12px] font-bold mr-[8px] py-[4px] px-[8px] rounded-[4px] bg-primary-300 text-white">
            {"id: " + id}
          </p>
          <span className="text-[12px] font-bold ml-[8px] py-[4px] px-[8px] rounded-[4px] bg-primary-300 text-white">
            {role}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PersonCard;