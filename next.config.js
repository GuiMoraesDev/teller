/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	images: {
    domains: ['avatars.githubusercontent.com'],
  },
	compiler: {
    styledComponents: true,
  },
	async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
