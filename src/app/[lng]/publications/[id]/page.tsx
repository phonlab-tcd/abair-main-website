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
    .select("*, people(*)")
    .match({ id: params?.id })
    .single();

  if (!publication) {
    return <h1>no publications</h1>;
  }

  const { data: publicationData } = await supabase
    .from("ab_publications")
    .select("*, people(*)");

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Top Bar */}
      <div className="w-full bg-gray-200 p-4">
        <div className="mx-[50px] md:mx-[100px] lg:mx-[170px]">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 ">
            {publication.title}
          </h1>
          <div className="text-gray-600 text-lg">
            {publication.year_published}
          </div>
          <div className="text-gray-800 text-lg">{publication.publication}</div>
          <p className="text-gray-1000 mb-4 italic">
            {publication.people &&
              publication.people.map((p) => p.name).join(",  ")}
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <div className="max-w-6xl flex flex-col lg:flex-row mx-[50px] md:mx-[100px] lg:mx-[170px]">
          {/* Adjusted Main Content */}
          <div className="flex-grow mr-4 mb-4 lg:mb-0">
            <p className="text-gray-800 mb-4">{publication.abstract}</p>

            <div className="flex justify-center">
              <a href={publication.pdf_url}>
                <button className="bg-primary-700 text-white px-4 py-2 rounded">
                  Download PDF
                </button>
              </a>
            </div>
          </div>

          {/* Vertical Sidebar */}
          <div className="flex-shrink-0 w-full lg:w-1/4 min-w-[288px] mb-4 bg-[#f9fdea] p-4 rounded-md lg:order-1 ml-0 lg:ml-4">
            <div className="text-gray-800">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">
                Related Publications
              </h2>

              {/* Publication Cards */}
              <div>
                {publicationData !== null && (
                  <LinkedPublications
                    publicationData={publicationData}
                    currentPublication={publication}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
