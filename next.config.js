/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['avatars.githubusercontent.com'],
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/signin',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
