/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/services/supabase";

import PeopleClient from "./components/PeopleClient";

export default async function Page() {
  const { data: people } = await supabase
    .from("people")
    .select("id, name, image, bio, role");

  if (!people) {
    return <p>No People Found</p>;
  }
  return <PeopleClient people={people} />;
}
