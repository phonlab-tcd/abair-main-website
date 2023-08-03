import supabase from "@/services/supabase/supabase";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: publications } = await supabase
    .from("ab_publications")
    .select("id");

  interface StaticParamsProps {
    id: string;
  }

  const publicationIds = publications
    ? publications.map((p) => ({
        id: String(p.id),
      }))
    : [];

  return publicationIds;
}

interface PageProps {
  params?: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { data: publication } = await supabase
    .from("ab_publications")
    .select(
      "id, created_at, title, abstract, pdf_url, year_published, authors, publication_category"
    )
    .match({ id: params?.id })
    .single();

  if (!publication) {
    notFound();
  }

  return <pre>{JSON.stringify(publication, null, 2)}</pre>;
}
