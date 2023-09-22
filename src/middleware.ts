import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, languages } from "./app/i18n/settings";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase-helpers";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)",
  ],
};

const langCookieName = "i18next";

export async function middleware(req: NextRequest) {
  let lng;
  if (req.cookies.has(langCookieName))
    lng = req.cookies.get(langCookieName)!.value;
  if (!lng) lng = fallbackLng;

  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    // Redirect if lng in path is not supported
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  } else if (
    // set lang cookie
    languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))
  ) {
    const lng = req.nextUrl.pathname
      .split("/")
      .filter((part) => part !== "")[0];
    const response = NextResponse.next();
    if (lng) response.cookies.set(langCookieName, lng);
    return response;
  }

  // supabase auth for next.js https://supabase.com/docs/guides/auth/auth-helpers/nextjs

  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  await supabase.auth.getSession();

  return res;
}
