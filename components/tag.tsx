import Link from 'next/link'

export default function ({ tagName }: { tagName: string }) {
  return (
    <li className="inline-flex">
      <Link href={`/blog/tag/${tagName}`.toLowerCase()} className="lt:border-b-2 lt:border-l-0 lt:pb-2.5 lt:pl-0 lt:pt-0">
        {tagName}
      </Link>
    </li>
  )
}
