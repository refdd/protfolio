/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org' , 'ar.wikipedia.org', "www.svgrepo.com" ],
  },
}

module.exports = nextConfig
