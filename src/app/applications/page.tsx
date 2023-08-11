/* eslint-disable @next/next/no-img-element */

import { supabase } from "@/services/supabase";
import AppClient from "./components/AppClient";

export default async function Page() {
  const { data: applications } = await supabase.from("applications").select(); //id, created_at, name, url, category, image, description_en, description_ga

  if (!applications) {
    return <p>No News Found</p>;
  }

  return <AppClient applications={applications} />;
}
