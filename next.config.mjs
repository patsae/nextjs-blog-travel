/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tatapi.tourismthailand.org",
      },
      {
        protocol: "https",
        hostname: "www.melivecode.com",
      },
    ],
  },
};

export default nextConfig;
