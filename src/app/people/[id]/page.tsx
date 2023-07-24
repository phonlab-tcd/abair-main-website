"use client";
import supabase from "@/services/supabase/supabase";
import { notFound } from "next/navigation";
import { useEffect } from "react";

export async function generateStaticParams() {
  const { data: person } = await supabase.from("people").select("id");

  interface StaticParamsProps {
    id: string;
  }

  return person
    ? person.map(({ id }: StaticParamsProps) => ({
        id,
      }))
    : [];
}

interface PageProps {
  params?: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { data: person } = await supabase
    .from("people")
    .select("id, name, image, bio, role, ab_publications (id, title)")
    .match({ id: params?.id })
    .single();

  if (!person) {
    notFound();
  }

  return <pre>{JSON.stringify(person, null, 2)}</pre>;
}
