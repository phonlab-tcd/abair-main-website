// SidebarPaperCard.tsx
import { Tables } from "@/types/supabase-helpers";

import Link from "next/link";
import React from "react";

interface SidebarPaperCardProps {
  publication: Tables<"ab_publications">;
}

const SidebarPaperCard = ({ publication }: SidebarPaperCardProps) => {
  console.log(publication.people);
  if (publication.people) {
    let authorString = publication.people.map((p) => p.name).join(", ");
    if (publication.people.length > 1) {
      const firstAuthor = publication.people.slice(0, 1);
      //authorString = `${firstAuthor.toString} et al.`;
      authorString = "Neasa Ni Chiarain et al";
    }
    return (
      <Link
        href={`/${"en"}/publications/${publication.id}`}
        className="block p-4 border-primary-700 border-t-4 mb-4 mt-4 hover:border-primary-400 duration-300"
      >
        <h3 className="text-sm text-center font-semibold mb-1">
          {publication.title}
        </h3>
        <p className="text-gray-400 text-center mb-1">
          {publication.year_published}
        </p>
        <p className="text-gray-600 text-sm text-center mb-1">
          {publication.publication}
        </p>
        <p className="text-gray-600 font-semibold text-sm text-center">
          {authorString}
        </p>
      </Link>
    );
  } else return null;
};

export default SidebarPaperCard;
