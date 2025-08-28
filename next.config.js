/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com"],
    formats: ["image/webp", "image/avif"],
  },
  // Remove the experimental optimizeCss feature that's causing the critters error
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
