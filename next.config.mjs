/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.unsplash.com"
    ],
  },
}

export default nextConfig
