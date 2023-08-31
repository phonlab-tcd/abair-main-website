import supabase from "@/services/supabase/supabase";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: people } = await supabase.from("people").select("id");

  interface StaticParamsProps {
    id: number;
  }

  return people
    ? people.map((p) => ({
        id: String(p.id),
      }))
    : [];
}

interface PageProps {
  params?: { id: number };
}

export default async function Page({ params }: PageProps) {
  const { data: person } = await supabase
    .from("people")
    .select("id, name, image, bio, role, ab_publications (id, title)")
    .match({ id: params?.id })
    .single();

  console.log("fds");

  if (!person) {
    return <h1>no people</h1>;
  }

  return <pre>{JSON.stringify(person, null, 2)}</pre>;
}
