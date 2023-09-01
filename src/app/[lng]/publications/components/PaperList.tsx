import React from "react";
import { PublicationCard } from "@/components/PublicationCard";

import Link from "next/link";
import { AccordionClient } from "@/components/Accordion";
import { Tables } from "@/types/supabase-helpers";

interface PaperListProps {
  paperData: Tables<"ab_publications">[];
  lng: string;
}

const PaperList = ({ paperData, lng }: PaperListProps) => {
  return (
    <div className="w-full flex justify-center p-2">
      <div className="flex flex-wrap w-full max-w-6xl justify-center">
        {paperData.map((publication, i) => (
          <div key={i} className="w-full p-2">
            <Link href={`/${lng}/publications/${publication.id}`}>
              <div className="text-lg font-semibold text-gray-800 mt-2 hover:underline">
                {publication.title}
              </div>
            </Link>
            <PublicationCard paper={publication}>
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
