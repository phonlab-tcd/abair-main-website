/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/services/supabase";

import PeopleClient from "./components/PeopleClient";

export default async function Page({
  params: { lng },
}: {
  params: { lng: any };
}) {
  const { data: people } = await supabase.from("people").select("*");

  if (!people) {
    return <p>No People Found</p>;
  }
  return <PeopleClient people={people} lng={lng} />;
}
