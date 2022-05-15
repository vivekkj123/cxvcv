/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'randomuser.me', 'picsum.photos', 'previews.123rf.com'
    ]
  }
}

module.exports = nextConfig
