/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'game-console-logos.s3.us-west-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  ...nextConfig,
}
