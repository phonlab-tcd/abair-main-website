/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/services/supabase";
import PaperClient from "./components/PaperClient";

export default async function Page() {
  const { data: papers } = await supabase
    .from("ab_publications")
    .select(
      "id, created_at, title, abstract, pdf_url, year_published, authors, publication_category"
    );

  if (!papers) {
    return <p>No Publications Found</p>;
  }
  return <PaperClient papers={papers} />;
}