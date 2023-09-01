import { ReactNode } from "react";
import { Tables } from "@/types/supabase-helpers";

interface PublicationCardProps {
  paper: Tables<"ab_publications">;
  children?: ReactNode;
}

const PublicationCard = ({ paper, children }: PublicationCardProps) => {
  return (
    <div className="w-full">
      <div className="text-grey-400 text-sm">
        {paper.publication}{" "}
        <span className="text-grey-400 text-sm my-1">{`(${paper.year_published})`}</span>
      </div>
      <div className="text-grey-600 text-sm flex flex-col italic">
        <div>{`${paper.people && paper.people.map((a) => " " + a.name)}`}</div>
      </div>

      {children}
    </div>
  );
};
export default PublicationCard;
export type { PublicationCardProps };
