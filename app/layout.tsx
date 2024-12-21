import Footer from '@/components/footer'
import Header from '@/components/header'
import SubscribeForm from '@/components/subscribe'
import config from '@/lib/config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const geist = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    images: config.ogImage,
  },
  twitter: {
    card: 'summary_large_image',
    title: config.title,
    description: config.description,
    images: config.ogImage,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-black antialiased">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col">{children}</div>
        <section className="mt-12 py-12 px-8 flex flex-col items-center border-t border-white/10 text-white" id="subscribe-form">
          <h2 className="text-4xl font-medium">
            Subscribe to <span className="text-brand">{config.name}'s News</span>
          </h2>
          <p className="mt-2 mb-4 text-gray-400">Get insider access to {config.name}'s latest news and events</p>
          <SubscribeForm />
        </section>
        <Footer />
      </body>
    </html>
  )
}
