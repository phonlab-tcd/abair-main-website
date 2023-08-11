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

  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex justify-center mt-8">
        <div className="max-w-6xl">
          <div className="flex-grow">
            <h1 className="text-3xl font-semibold mb-2 text-center">
              {publication.title}
            </h1>
            <div className="text-gray-600 text-lg text-center">
              {publication.year_published}
            </div>
            <p className="text-gray-1000 mb-4 text-center italic">
              {publication.authors.join(",  ")}
            </p>
            <p className="text-gray-800 mb-4">{publication.abstract}</p>

            <div className="flex justify-center">
              <a href={publication.pdf_url}>
                <button className="bg-primary-500 text-white px-4 py-2 rounded">
                  Download PDF
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
