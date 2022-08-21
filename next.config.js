/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "langfordk.hashnode.dev",
      "res.cloudinary.com",
      "localhost",
      "i9.ytimg.com",
    ],
  },
};

module.exports = nextConfig;
