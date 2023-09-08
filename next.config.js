/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cms.bladywebdev.pl',
                port: '',
                pathname: '/assets/**'
            }
        ]
    }
}

module.exports = nextConfig
