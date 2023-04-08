/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true
})
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


// module.exports = nextConfig;
module.exports = withBundleAnalyzer({});
