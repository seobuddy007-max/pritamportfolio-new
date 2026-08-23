import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "pritamchatterjee.com",
          },
        ],
        destination: "https://www.pritamchatterjee.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
