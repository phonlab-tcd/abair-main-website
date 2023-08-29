import { NextResponse } from "next/server";

import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "./app/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|_next/image|images|assets|favicon.ico|sw.js).*)",
  ],
};

const cookieName = "i18next";

export function middleware(req) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  } else if (
    languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))
  ) {
    const lng = req.nextUrl.pathname
      .split("/")
      .filter((part) => part !== "")[0];
    const response = NextResponse.next();
    if (lng) response.cookies.set(cookieName, lng);
    return response;
  }
  console.log("req.headers:", req.headers.get("referer"));

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
