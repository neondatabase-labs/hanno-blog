import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Blog } from 'content-collections'
import Image from 'next/image'
import Link from 'next/link'

export default function ({ blog, loading = 'lazy' }: { blog: Blog; loading?: 'lazy' | 'eager' }) {
  return (
    <Link href={`/blog/${blog._meta.path}`}>
      <Image
        width={2400}
        height={1350}
        alt={blog.title}
        loading={loading}
        placeholder="blur"
        src={blog.banner_image}
        priority={loading === 'eager'}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAABtCAQAAADq1rSfAAACOUlEQVR42u3XAQ0AAAwCIO0f+u/hoAXNBQAAAOZVgAEAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAECAAQAAQIABAABAgAEAAECAAQAAQIABAABAgAEAAECAAQAAQIABAABAgAEAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAQIABAABAgAEAAECAAQAAQIABAABAgAEAAECAAQAAQIABAABAgAEAAECAAQAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAEWYAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAAABBgAAAAEGAAAAAQYAAECAAQAAYNoDjTFtARIf5LkAAAAASUVORK5CYII="
      />
      <Badge className="mt-6">{blog.tag}</Badge>
      <h3 className="mt-2 text-white font-semibold text-2xl">{blog.title}</h3>
      <div className="mt-4 flex flex-row items-center gap-x-1">
        <div className="flex flex-row items-center gap-x-3">
          <Avatar className="size-[24px]">
            <AvatarImage asChild src={blog.author_image}>
              <Image src={blog.author_image} alt={blog.author} width={24} height={24} />
            </AvatarImage>
            <AvatarFallback>{blog.author}</AvatarFallback>
          </Avatar>
          <span className="text-white">{blog.author}</span>
        </div>
        <span className="text-white/50">&middot;</span>
        <span className="text-white/50">{blog.date}</span>
      </div>
    </Link>
  )
}
