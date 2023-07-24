"use client";
import supabase from "@/services/supabase/supabase";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: posts } = await supabase.from("news_stories").select("id");

  return posts?.map(({ id }) => ({
    id,
  }));
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: story } = await supabase
    .from("news_stories")
    .select(
      "id, created_at, date, title_en, blurb_en, body_en, images, title_ga, blurb_ga, body_ga, video, news_category"
    )
    .match({ id })
    .single();

  if (!story) {
    notFound();
  }

  return <pre>{JSON.stringify(story, null, 2)}</pre>;
}
