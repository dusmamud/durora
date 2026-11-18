import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  experimental: {
    // lucide-react is a barrel import; only bundle the icons actually used.
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
