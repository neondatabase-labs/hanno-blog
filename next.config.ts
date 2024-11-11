import { withContentCollections } from '@content-collections/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neon.tech',
        pathname: '/_next/static/media/stas-kelvich.57a77a57.jpg',
      },
      {
        protocol: 'https',
        hostname: 'neondatabase.wpengine.com',
        pathname: '/wp-content/uploads/2024/11/neon-IP-allowlist.png',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/blog/tag/all',
      },
    ]
  },
}

export default withContentCollections(nextConfig)
