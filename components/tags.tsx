import { allBlogs } from 'content-collections'
import Link from 'next/link'
import Tag from './tag'

export default function () {
  return (
    <>
      <li className="inline-flex">
        <Link href="/blog/tag/all" className="lt:border-b-2 lt:border-l-0 lt:pb-2.5 lt:pl-0 lt:pt-0 min-w-[65px]">
          All Posts
        </Link>
      </li>
      {[
        ...new Set(
          allBlogs
            .map((i) => i.tag)
            .flat()
            .filter(Boolean),
        ),
      ].map((eachTag: string) => (
        <Tag tagName={eachTag} key={eachTag} />
      ))}
    </>
  )
}
