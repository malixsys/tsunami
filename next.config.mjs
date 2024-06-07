/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {unoptimized: true},
    experimental: {images: {unoptimized: true}},
    basePath: "",
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
};

export default nextConfig;
