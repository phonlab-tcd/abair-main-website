/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/services/supabase";
import NewsClient from "./components/NewsClient";

export default async function Page() {
  const { data: news } = await supabase
    .from("news_stories")
    .select()
    .order("date", { ascending: false });

  if (!news) {
    return <p>No News Found</p>;
  }
  return <NewsClient news={news} />;
}
