"use client";
import supabase from "@/services/supabase/supabase";
import { notFound } from "next/navigation";
import { useEffect } from "react";

export async function generateStaticParams() {
  const { data: posts } = await supabase.from("people").select("id");

  return posts?.map(({ id }) => ({
    id,
  }));
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: person } = await supabase
    .from("people")
    .select("id, name, image, bio, role, ab_publications (id, title)")
    .match({ id })
    .single();

  if (!person) {
    notFound();
  }

  return <pre>{JSON.stringify(person, null, 2)}</pre>;
}
