/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/services/supabase";
import NewsClient from "./components/NewsClient";

export default async function Page() {
  const { data: news } = await supabase
    .from("news_stories")
    .select(
      "id, created_at, date, title_en, blurb_en, body_en, images, title_ga, blurb_ga, body_ga, video, news_category"
    );

  if (!news) {
    return <p>No News Found</p>;
  }
  return <NewsClient news={news} />;
}
