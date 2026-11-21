/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Navigator.github.io',
  images: {
    unoptimized: true, },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
