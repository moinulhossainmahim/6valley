/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '6valley.6amtech.com',
      },
    ]
  },
};

export default nextConfig;
