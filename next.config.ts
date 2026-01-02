import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "colabrio.ams3.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "ohio.clbthemes.com",
      },
    ],
  },
};

export default nextConfig;
