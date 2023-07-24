import supabase from "@/services/supabase/supabase";

const getPeople = async () => {
  try {
    const { data, error } = await supabase
      .from("people")
      .select("id, name, image, bio, role, ab_publications (id, title)");

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

export default getPeople;
