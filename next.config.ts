import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // Las fotos vienen del sitio actual de El Establo (Squarespace)
    remotePatterns: [
      { protocol: "https", hostname: "images.squarespace-cdn.com", pathname: "/content/v1/**" },
    ],
  },
};

export default nextConfig;
