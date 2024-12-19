import { withContentCollections } from '@content-collections/next'
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const prependLine = "export const runtime = 'edge'"
const appLayoutPath = join(process.cwd(), 'app', 'layout.tsx')

const content = readFileSync(appLayoutPath, 'utf-8')
if (process.env.DEPLOYMENT_PLATFORM === 'workers') {
  if (!content.includes(prependLine)) writeFileSync(appLayoutPath, prependLine + content)
} else {
  if (content.includes(prependLine)) writeFileSync(appLayoutPath, content.replace(prependLine, ''))
}

const nextConfig = {
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
  async redirects() {
    return [
      {
        source: '/',
        permanent: true,
        destination: '/blog/tag/all',
      },
    ]
  },
}

export default withContentCollections(nextConfig)
