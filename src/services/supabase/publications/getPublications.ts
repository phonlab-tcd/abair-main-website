import supabase from "@/services/supabase/supabase";

const getPublications = async () => {
  try {
    const { data, error } = await supabase
      .from("ab_publications")
      .select(
        `id, created_at, title, abstract, pdf_url, year_published, authors`
      )
      .order("year_published", { ascending: false });

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
