import type { NextConfig } from "next";

/**
 * Sent on every response. The booking form collects a name, an email and a
 * phone number, so these are not merely cosmetic.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  async redirects() {
    return [
      // /index served a byte-identical copy of the home page under a second URL.
      { source: "/index", destination: "/", permanent: true },
    ];
  },

  images: {
    // Optimised images were returning max-age=0, so every repeat visit
    // revalidated each one. They are static photographs; cache them.
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
