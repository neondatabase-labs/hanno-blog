import { Badge } from '@/components/ui/badge'
import config from '@/lib/config'
import { allBlogs } from 'content-collections'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> => {
  const { slug } = await params
  const blog = allBlogs.find((blog) => blog._meta.path.split('/').pop() === slug)
  if (!blog) notFound()
  return {
    title: blog.title,
    description: blog.summary,
    alternates: {
      canonical: new URL(`/blog/${slug}`, config.url),
    },
    openGraph: {
      title: blog.title,
      description: blog.summary,
      url: new URL(`/blog/${slug}`, config.url),
      images: [
        {
          url: blog.banner_image,
          width: 1920,
          height: 1080,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.summary,
      images: [blog.banner_image],
    },
  }
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const blog = allBlogs.find((blog) => blog._meta.path.split('/').pop() === slug)
  if (!blog) notFound()
  return (
    <div className="flex flex-col items-center">
      <article className="post-title col-start-4 col-end-10 xl:col-start-1 xl:col-end-9 lg:col-span-full">
        <div className="flex items-center">
          <Link href={`/blog/tag/${blog.tag}`.toLowerCase()} className="mr-3">
            <Badge>{blog.tag}</Badge>
          </Link>
          <time className="text-gray-400 text-sm" dateTime={blog.date}>
            {blog.date}
          </time>
        </div>
        <h1 className="mt-4 text-white text-4xl font-semibold">{blog.title}</h1>
        <p className="mt-2 text-2xl text-gray-400">{blog.summary}</p>
        <Image
          width={2400}
          height={1350}
          priority={true}
          className="mt-8"
          alt={blog.title}
          placeholder="blur"
          src={blog.banner_image}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAABtCAQAAADq1rSfAAACOUlEQVR42u3XAQ0AAAwCIO0f+u/hoAXNBQAAAOZVgAEAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAECAAQAAQIABAABAgAEAAECAAQAAQIABAABAgAEAAECAAQAAQIABAABAgAEAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAQIABAABAgAEAAECAAQAAQIABAABAgAEAAECAAQAAQIABAABAgAEAAECAAQAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAEWYAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAECAAQAAYNoDjTFtARIf5LkAAAAASUVORK5CYII="
        />
        <div className="py-12 prose prose-invert" dangerouslySetInnerHTML={{ __html: blog.html }} />
      </article>
    </div>
  )
}

export function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog._meta.path.split('/').pop(),
  }))
}
