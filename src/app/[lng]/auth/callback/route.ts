import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/types/supabase-helpers";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const access_token = requestUrl.searchParams.get("access_token");
  const refresh_token = requestUrl.searchParams.get("refresh_token");

  if (access_token && refresh_token) {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    const value = await supabase.auth.setSession({
      refresh_token: refresh_token,
      access_token: access_token,
    });
    console.log("value:", value);
  }

  // URL to redirect to after sign in process completes
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}
