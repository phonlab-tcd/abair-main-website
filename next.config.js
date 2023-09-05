/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "pdntukcptgktuzpynlsv.supabase.co",
      "abair.ie",
      "abair.tcd.ie",
      "www.abair.tcd.ie",
    ],
  },
};

module.exports = nextConfig;
