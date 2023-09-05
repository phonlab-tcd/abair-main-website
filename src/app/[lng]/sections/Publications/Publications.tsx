import { supabase } from "@/services/supabase";
import { Button } from "@/components/Button";
import { PublicationCard } from "@/components/PublicationCard";
import { AccordionClient } from "@/components/Accordion";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

const Publications = async ({ lng }: any) => {
  const { t } = await useTranslation(lng);

  const { data: publicationsData } = await supabase
    .from("ab_publications")
    .select(`*, people( * )`)
    .order("year_published", { ascending: false });

  if (!publicationsData) {
    return <p>No Publications Found</p>;
  }

  return (
    <div className="w-full max-w-lg md:max-w-2xl lg:max-w-5xl">
      <div className="w-full flex justify-center mt-8 ">
        <div className="flex items-center text-grey-600 text-xl lg:text-2xl font-mono">
          {t("infoHeader.home.publications.title")}
        </div>
      </div>
      <div className="w-full flex justify-center items-end p-4">
        <div className="text-base text-center lg:text-lg font-light text-grey-600 max-w-lg md:max-w-2xl lg:max-w-5xl">
          {t("infoHeader.home.publications.description")}
        </div>
      </div>
      <div className="w-full flex justify-center my-2">
        <div className="flex flex-wrap w-full max-w-6xl justify-center">
          {publicationsData.slice(0, 3).map((publication, i) => (
            <div key={i} className="w-full p-2">
              <Link href={`/${lng}/publications/${publication.id}`}>
                <div className="text-lg font-semibold text-gray-800 mt-2 hover:underline">
                  {publication.title}
                </div>
              </Link>
              <PublicationCard paper={publication}>
                <div>
                  <AccordionClient
                    title="abstract"
                    content={publication.abstract}
                  />
                </div>
              </PublicationCard>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-8">
        <Link href={`/${lng}/publications`}>
          <Button
            colors="bg-inherit text-grey-600 text-lg lg:text-xl hover:text-grey-700 hover:underline"
            sizes="py-0.5 px-1 rounded-sm"
          >
            {t("pages.home.seeAll")}{" "}
            <span className="text-3xl lg:text-4xl">&#8594;</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Publications;
