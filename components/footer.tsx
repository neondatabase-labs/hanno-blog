import config from '@/lib/config'
import Link from 'next/link'

export default function () {
  return (
    <footer className="mt-2 py-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <img src={config.logo} width={158} height={48} className="h-[30px] w-auto" alt="Neon Logo" />
        </Link>
        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">Copyright © {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}
