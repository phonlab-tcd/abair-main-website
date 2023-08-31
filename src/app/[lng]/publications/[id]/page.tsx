import supabase from "@/services/supabase/supabase";
import LinkedPublications from "./components/LinkedPublications";

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
      "id, created_at, title, abstract, pdf_url, year_published, people( id, name ), publication_category, publication"
    )
    .match({ id: params?.id })
    .single();

  if (!publication) {
    return <h1>no publications</h1>;
  }

  const { data: publicationData } = await supabase
    .from("ab_publications")
    .select(
      "id, created_at, title, abstract, pdf_url, year_published, people( id, name ), publication_category, publication"
    );

  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex justify-center mt-8">
        <div className="max-w-6xl flex">
          {/* Adjusted Main Content */}
          <div className="flex-grow mr-4">
            <h1 className="text-3xl font-semibold mb-2 text-center">
              {publication.title}
            </h1>
            <div className="text-gray-600 text-lg text-center">
              {publication.year_published}
            </div>
            <div className="text-gray-800 text-lg text-center">
              {publication.publication}
            </div>
            <p className="text-gray-1000 mb-4 text-center italic">
              {publication.people.map((p) => p.name).join(",  ")}
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

          {/* Vertical Sidebar */}
          <div className="flex-shrink-0 w-1/4 min-w-[288px] min-h-[800px] bg-primary-100 p-4">
            <div className="text-gray-800">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Related Publications
              </h2>

              {/* Publication Cards */}
              <div>
                <LinkedPublications
                  publicationData={publicationData}
                  currentPublication={publication}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
