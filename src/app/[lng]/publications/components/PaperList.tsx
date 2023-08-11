import React from "react";
import { PublicationCard } from "abair-web-components";
import { PaperModel } from "@/models";
import Link from "next/link";
import { AccordionClient } from "@/components";

interface PaperListProps {
  paperData: PaperModel[];
}

const PaperList = ({ paperData }: PaperListProps) => {
  return (
    <div className="w-full flex justify-center p-2">
      <div className="flex flex-wrap w-full max-w-6xl justify-center">
        {paperData.map((publication, i) => (
          <div key={i} className="w-full p-2">
            <Link href={`/publications/${publication.id}`}>
              <div className="text-lg font-semibold text-gray-800 mt-2 hover:underline">
                {publication.title}
              </div>
            </Link>
            <PublicationCard {...publication}>
              <AccordionClient
                title="abstract"
                content={publication.abstract}
              />
            </PublicationCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaperList;