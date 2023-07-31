import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/sections";

export const metadata: Metadata = {
  title: "ABAIR",
  description: "Irish Speech and Language Technologies",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-grey-100">
        <Navbar />

        <div className="pt-12 lg:pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
