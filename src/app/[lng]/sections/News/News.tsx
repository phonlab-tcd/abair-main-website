import { supabase } from "@/services/supabase";
import { NewsCard } from "@/components/NewsCard";
import { Button } from "@/components/Button";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { Tables } from "@/types/supabase-helpers";

const News = async ({ lng }: any) => {
  const { t } = await useTranslation(lng);

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
    <div className="w-full">
      <div className="w-full flex justify-center mt-8">
        <div className="flex items-center text-grey-800 text-xl lg:text-2xl font-mono">
          {t("infoHeader.home.news.title")}
        </div>
      </div>
      <div className="w-full flex justify-center items-end p-4">
        <div className="text-base text-center lg:text-lg font-light  text-grey-800 max-w-lg md:max-w-2xl lg:max-w-5xl">
          {t("infoHeader.home.news.description")}
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <div className="flex flex-wrap w-full max-w-6xl justify-center">
          {newsData.slice(0, 3).map((news, i) => (
            <div
              key={i}
              className="m-2 transition-all duration-300 hover:scale-102 shadow-sm hover:shadow-lg"
            >
              <Link href={`/${lng}/news/${news.id}`}>
                <NewsCard
                  title={lng === "en" ? news.title_en : news.title_ga}
                  blurb={lng === "en" ? news.blurb_en : news.blurb_ga}
                  date={news.date}
                  imageURL={news.images ? news.images[0].url : ""}
                  news_category={news.news_category}
                  category_string={`${t("search." + news.news_category)}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-8">
        <Link href={`/${lng}/news`}>
          <Button
            colors="bg-inherit text-grey-800 text-lg lg:text-xl hover:text-grey-900 hover:underline"
            sizes="py-0.5 px-1 rounded-sm"
          >
            {t("pages.home.seeAll")}{" "}
            <span className="text-3xl lg:text-4xl">&#8594;</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default News;
