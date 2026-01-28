import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/partners",
        destination: "/about/partners",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
