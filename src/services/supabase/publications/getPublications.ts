import supabase from "@/services/supabase/supabase";
import { Tables } from "@/types/supabase-helpers";

const getPublications = async () => {
  try {
    const { data, error } = await supabase
      .from("ab_publications")
      .select(`*, people(*)`)
      .order("year_published", { ascending: false })
      .returns<Tables<"ab_publications"> & { people: Tables<"people"> }>();

    if (data) {
      return data;
    }

    if (error) {
      throw error;
    }
  } catch (error: any) {
    alert(error.message);
  }
};

export default getPublications;
