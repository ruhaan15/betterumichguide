/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["se-images.campuslabs.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["se-images.campuslabs.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/clubs',
        permanent: true,
      },
    ]
  },
}
