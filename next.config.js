/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'langfordk.hashnode.dev',
      'res.cloudinary.com',
    ]
  }
}

module.exports = nextConfig
