import React from "react";
import PaperCard from "./PaperCard";
import { Paper } from "./PaperClient";

interface PaperListProps {
  paperData: Paper[];
}

const PaperList: React.FC<PaperListProps> = ({ paperData }) => {
  return (
    <div className="p-4">
      <div className="flex mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paperData.map((paper, index) => (
          <PaperCard key={index} {...paper} />
        ))}
      </div>
    </div>
  );
};

export default PaperList;
