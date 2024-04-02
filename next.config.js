/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'server.cakol.id.vn'
            }
        ]
    }
};

module.exports = nextConfig;
