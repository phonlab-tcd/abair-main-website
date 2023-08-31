import { NextResponse } from "next/server";
import { fallbackLng, languages } from "./app/i18n/settings";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)",
  ],
};

const langCookieName = "i18next";

export function middleware(req) {
  let lng;
  if (req.cookies.has(langCookieName))
    lng = req.cookies.get(langCookieName).value;
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

  return NextResponse.next();
}
