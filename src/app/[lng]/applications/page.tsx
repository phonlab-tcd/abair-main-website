/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "@/app/i18n";

import { supabase } from "@/services/supabase";
import AppClient from "./components/AppClient";

interface PageProps {
  params: { lng: string };
}

export default async function Page({ params: { lng } }: PageProps) {
  const { data: applications } = await supabase.from("applications").select(); //id, created_at, name, url, category, image, description_en, description_ga

  if (!applications) {
    return <p>No News Found</p>;
  }

  return <AppClient applications={applications} lng={lng} />;
}
