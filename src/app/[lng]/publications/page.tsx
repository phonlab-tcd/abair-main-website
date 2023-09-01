/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/services/supabase";
import PaperClient from "./components/PaperClient";

export default async function Page({
  params: { lng },
}: {
  params: { lng: any };
}) {
  const { data: papers } = await supabase
    .from("ab_publications")
    .select(`*, people( * )`);

  if (!papers) {
    return <p>No Publications Found</p>;
  }
  return <PaperClient papers={papers} lng={lng} />;
}
