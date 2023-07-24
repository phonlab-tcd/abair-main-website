"use client";
import supabase from "@/services/supabase/supabase";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: posts } = await supabase.from("ab_publications").select("id");

  return posts
    ? posts.map(({ id }) => ({
        id,
      }))
    : [];
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: publication } = await supabase
    .from("ab_publications")
    .select(
      "id, created_at, title, abstract, pdf_url, year_published, authors, publication_category"
    )
    .match({ id })
    .single();

  console.log("fds1");

  if (!publication) {
    notFound();
  }

  return <pre>{JSON.stringify(publication, null, 2)}</pre>;
}
