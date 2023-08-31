import { ReactNode } from "react";
// interface AuthorModel {
//   name: string;
// }

interface PublicationCardProps {
  abstract?: string;
  // authors?: AuthorModel[];
  authors?: string[];
  year_published?: number;
  publication_category?: string;
  publication?: string;
  pdf_url?: string;
  children?: ReactNode;
}

const PublicationCard = ({
  year_published,
  authors,
  publication,
  children,
}: PublicationCardProps) => {
  return (
    <div className="w-full">
      <div className="text-grey-400 text-sm">
        {publication}{" "}
        <span className="text-grey-400 text-sm my-1">{`(${year_published})`}</span>
      </div>
      <div className="text-grey-600 text-sm flex flex-col italic">
        <div>{`${authors && authors.map((a) => " " + a)}`}</div>
      </div>

      {/* <span
        className={`text-sm  p-1 rounded-sm ${
          publication_category === "education"
            ? "bg-applications-400"
            : publication_category === "recognition"
            ? "bg-recognition-400"
            : publication_category === "synthesis"
            ? "bg-synthesis-400"
            : "bg-grey-300"
        } text-white`}
      >
        {publication_category}
      </span> */}
      {children}
    </div>
  );
};
export default PublicationCard;
export type { PublicationCardProps };
