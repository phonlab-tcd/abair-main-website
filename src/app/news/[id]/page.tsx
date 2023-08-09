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
    <div className="bg-white p-4 shadow-md rounded-md flex">
      <div className="flex-shrink-0 pr-8 w-48 mt-10">
        <div className="text-gray-600 text-lg text-center">{news.date}</div>
        <div className="px-3 py-2 text-base bg-blue-500 text-white rounded-lg mt-3 text-center">
          {news.news_category}
        </div>
      </div>
      <div className="flex-grow">
        <h1 className="text-3xl font-semibold mb-2 text-center">
          {news.title_en}
        </h1>
        <p className="text-gray-800 mb-4 text-center">{news.blurb_en}</p>
        <div className="flex space-x-2 justify-center">
          {news.images.map((image: any, index: number) => (
            <div key={index} className="object-cover rounded-md">
              <Image
                src={image.url}
                alt={image.url.toString()}
                height={250}
                width={375}
              />
            </div>
          ))}
        </div>

        <div className="text-gray-800" style={{ whiteSpace: "pre-line" }}>
          {news.body_en.replace(/~/g, "\n")}
        </div>
      </div>
    </div>
  );
}
