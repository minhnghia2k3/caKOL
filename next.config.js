/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cakol-server.vercel.app',
                protocol: 'https'
            },
            {
                hostname: 'localhost',
                protocol: 'http'
            }
        ]
    }
};

module.exports = nextConfig;
