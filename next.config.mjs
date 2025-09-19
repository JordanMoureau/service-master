/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.smcfireandwater.com" }],
        destination: "https://smcfireandwater.com/:path*",
        permanent: true, // 308
      },
    ];
  },
};

export default nextConfig;
