"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { supabase } from '@/services/supabase';

export default async function AuthCallback() {

    const searchParams = new URLSearchParams(document.location.search);
    const access_token = searchParams.get("access_token");
    const refresh_token = searchParams.get("refresh_token");

    const router = useRouter();
    console.log(access_token, refresh_token);

    useEffect(() => {
        async function load() {
          if (typeof access_token === "string" && typeof refresh_token === "string") {
            const value = await supabase.auth.setSession({
                access_token, refresh_token
            })
            console.log(value)
            router.push("/");
          } else {
            alert("Access token or Refresh token is NULL")
          }
        }
        load();
    })
}
  return null;
}
