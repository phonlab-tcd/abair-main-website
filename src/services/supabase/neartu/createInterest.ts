import supabase from "@/services/supabase/supabase";

const createInterest = async (
  name: string,
  email: string,
  interest: string,
  otherInfo: string,
  consent: boolean
) => {
  try {
    const { data, error } = await supabase
      .from("neartu_interest")
      .insert({
        name: name,
        email: email,
        areas_of_interest: interest,
        other_info: otherInfo,
        consent: consent,
      })
      .select()
      .single();

    if (error) {
      throw error;
    } else {
      return data;
    }
  } catch (error: any) {
    alert(error.message);
  }
};

export default createInterest;
