/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["se-images.campuslabs.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
