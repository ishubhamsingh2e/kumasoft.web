import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [{ hostname: 'colabrio.ams3.cdn.digitaloceanspaces.com' }],
  }
};

export default nextConfig;
