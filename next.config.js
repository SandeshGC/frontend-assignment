/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["i.scdn.co",'localhost'],
		// remotePatterns: [
		// 	{
		// 		protocol: "http",
		// 		hostname: "i.scdn.co",
		// 		port: "",
		// 		pathname: "/image/**",
		// 	},
		// ],
	},
}

module.exports = nextConfig
