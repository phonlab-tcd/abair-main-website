import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/app/[lng]/layoutSections";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ABAIR",
  description: "Irish Speech and Language Technologies",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface RootLayoutProps {
  children: ReactNode;
  params: { lng: string };
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className="bg-white">
        <Navbar lng={lng} />

        <div className="pt-12 lg:pt-16">{children}</div>
        {/* @ts-expect-error Server Component */}
        <Footer lng={lng} />
      </body>
    </html>
  );
}
