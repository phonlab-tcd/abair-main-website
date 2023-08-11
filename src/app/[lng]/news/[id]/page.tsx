import supabase from "@/services/supabase/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
export async function generateStaticParams() {
  const { data: news } = await supabase.from("news_stories").select("id");

  interface StaticParamsProps {
    id: number;
  }

  return news
    ? news.map((n) => ({
        id: String(n.id),
      }))
    : [];
}

interface PageProps {
  params?: { id: number };
}

export default async function Page({ params }: PageProps) {
  const { data: news } = await supabase
    .from("news_stories")
    .select(
      "id, created_at, date, title_en, blurb_en, body_en, images, title_ga, blurb_ga, body_ga, video, news_category"
    )
    .match({ id: params?.id })
    .single();

  if (!news) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex justify-center mt-8">
        <div className="max-w-6xl">
          <div className="flex-grow">
            <h1 className="text-3xl font-semibold mb-2 text-center">
              {news.title_en}
            </h1>
            <div className="text-gray-600 text-lg text-center">{news.date}</div>
            <p className="text-gray-800 mb-4 text-center">{news.blurb_en}</p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 justify-center">
              {news.images.map((image: any, index: number) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 object-cover rounded-md"
                >
                  <Image
                    src={image.url}
                    alt={image.url.toString()}
                    height={300}
                    width={450}
                  />
                </div>
              ))}
            </div>

            {/* <div className="text-gray-800" style={{ whiteSpace: "pre-line" }}>
              {news.body_en.replace(/~/g, "\n")}
            </div> */}
            <div className="text-gray-800" style={{ whiteSpace: "pre-line" }}>
              {news.body_en}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
