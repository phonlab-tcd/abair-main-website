/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./cloudflare-image-loader.js",
  },
};

module.exports = nextConfig;
