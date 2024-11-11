import Card from '@/components/card'
import Search from '@/components/search'
import Socials from '@/components/socials'
import Tags from '@/components/tags'
import config from '@/lib/config'
import { allBlogs } from 'content-collections'
import 'core-js/features/array/to-sorted'
import { notFound } from 'next/navigation'

const getFilteredPosts = (tag: string) =>
  (tag === 'all' ? allBlogs : allBlogs.filter((blog) => blog.tag.toLowerCase().includes(tag.toLowerCase()))).toSorted((a, b) => b.timestamp - a.timestamp)

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const filteredPosts = getFilteredPosts(tag)
  if (filteredPosts.length < 1) notFound()
  return {
    title: `Tag: ${tag} |  ${config.title}`,
    description: `Explore the latest articles and insights related to ${tag} on the ${config.title}.`,
    openGraph: {
      title: `Tag: ${tag} |  ${config.title}`,
      description: `Explore the latest articles and insights related to ${tag} on the ${config.title}.`,
      url: new URL('/blog/tag' + tag, config.url).toString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: `Tag: ${tag} | ${config.title}`,
      description: `Explore the latest articles and insights related to ${tag} on the ${config.title}.`,
    },
  }
}

export default async function TagPosts({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const filteredPosts = getFilteredPosts(tag)
  if (filteredPosts.length < 1) notFound()
  return (
    <div className="flex flex-row gap-x-8 flex-wrap">
      <div className="w-full sm:hidden mb-4">
        <Search />
      </div>
      <ul className="pb-4 sm:pb-0 text-white flex flex-row overflow-x-scroll sm:overflow-x-visible gap-x-3 sm:gap-x-0 sm:flex-col gap-y-3.5 sm:max-w-[120px]">
        <div className="hidden sm:block">
          <Search />
        </div>
        <Tags />
        <div className="hidden sm:block mt-4 pt-4 border-t border-gray-800">
          <Socials />
        </div>
      </ul>
      <div className="mt-4 sm:mt-0 grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full sm:max-w-[calc(100%-152px)]">
        {filteredPosts.map((blog, index) => (
          <Card key={blog._meta.path} blog={blog} {...(index === 0 ? { loading: 'eager' } : {})} />
        ))}
      </div>
      <div className="w-full sm:hidden mt-10 pt-10 border-t border-gray-800 text-white">
        <Socials />
      </div>
    </div>
  )
}
