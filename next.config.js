/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_LOCAL: "http://localhost:3000",
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
