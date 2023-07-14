/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.mlcdn.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/newsletter',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
