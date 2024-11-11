import config from '@/lib/config'
import Link from 'next/link'

export default function () {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/">
          <img loading="lazy" decoding="async" src={config.logo} width={158} height={48} className="h-[30px] w-auto" alt="Neon Logo" />
        </Link>
        <div className="hidden md:flex flex-row items-center gap-x-3">
          <a
            aria-label="Deploy to Vercel"
            href="https://vercel.com/new/clone?repository-url=https://github.com/neondatabase-labs/hanno-blog&env=DATABASE_URL,RESEND_API_KEY"
            target="_blank"
          >
            <img alt="Deploy to Vercel" loading="lazy" decoding="async" src="https://vercel.com/button" width="103" height="32" />
          </a>
          <a
            aria-label="Deploy to Netlify"
            href="https://app.netlify.com/start/deploy?repository=https://github.com/neondatabase-labs/hanno-blog#DATABASE_URL&RESEND_API_KEY"
            target="_blank"
          >
            <img alt="Deploy to Netlify" loading="lazy" decoding="async" src="https://www.netlify.com/img/deploy/button.svg" width="179" height="32" className="h-[30px] w-auto" />
          </a>
          <a aria-label="Deploy to Render" href="https://render.com/deploy?repo=https://github.com/neondatabase-labs/hanno-blog" target="_blank">
            <img
              width="153"
              height="40"
              loading="lazy"
              decoding="async"
              alt="Deploy to Render"
              className="h-[30px] w-auto rounded"
              src="https://render.com/images/deploy-to-render-button.svg"
            />
          </a>
        </div>
        <Link
          href="#subscribe-form"
          className="inline-flex items-center justify-center whitespace-nowrap font-medium hover:bg-[#00e5bf] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-9 bg-brand text-black text-sm px-4 py-2 rounded-full"
        >
          Subscribe
        </Link>
      </div>
    </header>
  )
}
