"use client";

import { redirect } from "next/navigation";
import { supabase } from "@/services/supabase";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AuthCallback() {
  const searchParams = useSearchParams();
  const access_token = searchParams.get("access_token");
  const refresh_token = searchParams.get("refresh_token");
  console.log(access_token, refresh_token);

  useEffect(() => {
    if (typeof access_token === "string" && typeof refresh_token === "string") {
      const value = supabase.auth
        .setSession({
          access_token,
          refresh_token,
        })
        .then(() => {
          console.log(value);
          redirect(process.env.NEXT_PUBLIC_BASE_URL as string);
        });
    } else {
      alert("Access token or Refresh token is NULL");
    }
  });
  return null;
}
