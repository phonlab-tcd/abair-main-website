import Image from "next/image";

interface NewsCardProps {
  date: string | null;
  title: string | null;
  blurb: string | null;
  imageURL: string;
  news_category: string | null;
  category_string: string | null;
  altText?: string;
}

const NewsCard = ({
  title,
  blurb,
  date,
  imageURL = "",
  news_category,
  category_string,
  altText = "alt text",
}: NewsCardProps) => {
  return (
    <div className="relative h-[440px] w-[290px] p-3 bg-white rounded-sm">
      <Image
        src={imageURL}
        height={180}
        width={180}
        alt={altText}
        className="rounded-md h-[180px] w-full object-cover object-center "
      />

      <div className="text-lg font-semibold text-gray-800 mt-2">{title}</div>
      <p className="text-grey-400 text-sm my-1">{date}</p>
      <p className="text-sm text-gray-600 my-1">
        {blurb
          ? blurb.length > 200
            ? `${blurb?.slice(0, 200)}...`
            : blurb
          : null}
      </p>
      <span
        className={`absolute bottom-2 right-0 text-sm mr-[10px] p-0.5 rounded-sm ${
          news_category === "launch"
            ? "bg-applications-400"
            : news_category === "award"
            ? "bg-orange-400"
            : news_category === "presentation"
            ? "bg-synthesis-400"
            : news_category === "misc"
            ? "bg-grey-300"
            : null
        } text-white`}
      >
        {category_string}
      </span>
    </div>
  );
};
export default NewsCard;
export type { NewsCardProps };
