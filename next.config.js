/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'pbs.twimg.com', // Twitter Profile Picture
      'i.postimg.cc'
    ]
  }
}

module.exports = nextConfig
