"use client";
import React, { useState } from "react";
import { PaperModel, PersonModel } from "@/models";
import SidebarPaperCard from "./SidebarPaperCard";

interface LinkedPublicationsProps {
  publicationData: PaperModel[] | null;
  currentPublication: PaperModel;
}

const LinkedPublications = ({
  publicationData,
  currentPublication,
}: LinkedPublicationsProps) => {
  //1=category

  //2=authors

  const [selectedFilter, setSelectedFilter] = useState(1);
  if (selectedFilter == 1 && publicationData) {
    publicationData = publicationData.filter(
      (paper) =>
        paper.publication_category ===
          currentPublication.publication_category &&
        paper.id !== currentPublication.id
    );
  }
  //gap
  else if (selectedFilter == 2 && publicationData) {
    publicationData = publicationData.filter(
      (paper) =>
        countCommonNames(paper.authors, currentPublication.authors) >= 3 &&
        paper.id !== currentPublication.id
    );
  }

  function countCommonNames(array1?: PersonModel[], array2?: PersonModel[]) {
    if (!array1 || !array2) {
      return -1;
    }

    let commonCount = 0;

    for (const name1 of array1) {
      for (const name2 of array2) {
        if (name1 === name2) {
          commonCount++;
          break; // Since we found a match, no need to continue checking this name in array2
        }
      }
    }

    return commonCount;
  }
  if (publicationData) {
    return (
      <>
        <div className="flex justify-center">
          <span className="space-x-4">
            <button
              className={`${
                selectedFilter === 1
                  ? "border-b-2 border-primary-700 text-primary-700"
                  : "text-gray-800 hover:text-primary-700"
              } px-4 py-2 font-medium transition duration-500 ease-in-out`}
              onClick={() => setSelectedFilter(1)}
            >
              Category
            </button>
            <button
              className={`${
                selectedFilter === 2
                  ? "border-b-2 border-primary-700 text-primary-700"
                  : "text-gray-800 hover:text-primary-700"
              } px-4 py-2 font-medium transition duration-500 ease-in-out`}
              onClick={() => setSelectedFilter(2)}
            >
              Authors
            </button>
          </span>
        </div>

        <div>
          {publicationData.slice(0, 3).map((currentPublication: PaperModel) => (
            <SidebarPaperCard
              key={currentPublication.id}
              publication={currentPublication}
            />
          ))}
        </div>
      </>
    );
  }
};

export default LinkedPublications;
