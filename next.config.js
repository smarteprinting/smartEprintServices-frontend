

const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },
    ];
  },

  // Prevent Next.js from issuing 308 trailing-slash redirects for /api/* paths.
  // The catch-all proxy at app/api/[...path]/route.js handles all API routing.
  skipTrailingSlashRedirect: true,

  async redirects() {
    return [
      // ── www → non-www canonical redirect ──────────────────────────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.smarteprintservices.com" }],
        destination: "https://smarteprintservices.com/:path*",
        permanent: true,
      },

      // ── Legacy service/repair pages → /shop ───────────────────────────────
      {
        source: "/services",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/printer-support",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/printer-support/:path*",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/hp-support",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/hp-support/:path*",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/technical-support",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/technical-support/:path*",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/remote-support",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/on-site-support",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/troubleshooting",
        destination: "/faqs",
        permanent: true,
      },
      {
        source: "/troubleshooting/:path*",
        destination: "/faqs",
        permanent: true,
      },

      // ── Legacy appointment/contact pages → /contact-us ────────────────────
      {
        source: "/book-an-appointment",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/consultation",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/schedule",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/schedule-service",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/service-request",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/maintenance",
        destination: "/contact-us",
        permanent: true,
      },

      // ── Test/legacy pages → /about ────────────────────────────────────────
      {
        source: "/about-us-testhatanahoga",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us-testhatanahoga/:path*",
        destination: "/about",
        permanent: true,
      },
    ];
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;