import supabase from "@/services/supabase/supabase";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: news } = await supabase.from("news_stories").select("id");

  interface StaticParamsProps {
    id: number;
  }

  return news
    ? news.map((n) => ({
        id: String(n.id),
      }))
    : [];
}

interface PageProps {
  params?: { id: number };
}

export default async function Page({ params }: PageProps) {
  const { data: news } = await supabase
    .from("news_stories")
    .select(
      "id, created_at, date, title_en, blurb_en, body_en, images, title_ga, blurb_ga, body_ga, video, news_category"
    )
    .match({ id: params?.id })
    .single();

  if (!news) {
    notFound();
  }

  return <pre>{JSON.stringify(news, null, 2)}</pre>;
}
