/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'storage.mlcdn.com',
      'https://adac-development.s3.us-west-2.amazonaws.com/'
    ]
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
