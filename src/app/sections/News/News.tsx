import { supabase } from "@/services/supabase";
import { NewsCard, Button } from "abair-web-components";
import Link from "next/link";

const News = async () => {
  const { data: newsData } = await supabase
    .from("news_stories")
    .select(
      "id, date, title_en, blurb_en, images, title_ga, blurb_ga, news_category"
    )
    .order("date", { ascending: false });

  if (!newsData) {
    return <p>No News Found</p>;
  }

  return (
    <div className="w-full ">
      <div className="w-full flex justify-center mt-8">
        <div className="flex items-center text-grey-800 text-xl lg:text-2xl font-mono">
          Recent News & Events
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <div className="flex flex-wrap w-full max-w-6xl justify-center">
          {newsData.slice(0, 3).map((news, i) => (
            <div
              key={i}
              className="m-2 transition-all duration-300 hover:scale-102 shadow-sm hover:shadow-lg"
            >
              <Link href={`/news/${news.id}`}>
                <NewsCard
                  title={news.title_en}
                  blurb={news.blurb_en}
                  date={news.date}
                  imageURL={news.images[0].url}
                  news_category={news.news_category}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-8">
        <Link href={`/news`}>
          <Button
            colors="bg-inherit text-grey-800 text-lg lg:text-xl hover:text-grey-900 hover:underline"
            sizes="py-0.5 px-1 rounded-sm"
          >
            see all <span className="text-3xl lg:text-4xl">&#8594;</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default News;
