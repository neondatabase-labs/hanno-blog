'use client'

import { searchBlog } from '@/app/api/search/search.server'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toString } from 'mdast-util-to-string'
import Link from 'next/link'
import { useActionState } from 'react'

const initialState: { message?: any; status?: number }[] = [{ message: null }, { status: 200 }]

export default function () {
  const [state, formAction, isPending] = useActionState(searchBlog, initialState)
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="relative w-full">
          <svg width="12px" height="12px" viewBox="0 0 488.4 488.4" className="absolute left-4 top-1/2 transform -translate-y-1/2 fill-white">
            <path
              d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"
            />
          </svg>
          <input
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search"
            className="w-full appearance-none rounded-[50px] border bg-black pl-9 placeholder:text-white focus:outline-none h-10 border-brand text-white text-xs"
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>Hybrid Search</DialogTitle>
          <span className="text-gray-600 text-sm">
            (Powered by Neon's{' '}
            <a target="_blank" className="underline" href="https://github.com/neondatabase-labs/pgrag/">
              pgrag
            </a>
            )
          </span>
        </DialogHeader>
        <div className="w-full flex flex-col gap-y-3 max-h-[300px] sm:max-h-[600px] overflow-y-scroll">
          <form action={formAction} className="relative w-full">
            <input
              required
              type="text"
              name="query"
              autoComplete="off"
              placeholder="Search"
              className="w-full appearance-none rounded-[50px] border pl-7 placeholder:text-black/70 focus:outline-none focus:border-black h-10 text-black"
            />
          </form>
          {isPending && <span className="text-gray-400 text-left">Searching...</span>}
          {state[0].message &&
            (typeof state[0].message === 'string' ? (
              <>{state[0].message}</>
            ) : (
              <div className="flex flex-col text-left divide-y gap-y-4">
                {state[0].message.map((item: { slug: string; title: string; snippet: string }) => (
                  <div key={item.slug} className="px-4 py-2 flex flex-col">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm">{toString(fromMarkdown(item.snippet))}</p>
                    <Link prefetch={true} href={`/blog/${item.slug}`} className="mt-4 text-black underline text-sm">
                      Read more &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
