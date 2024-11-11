'use client'

import { createPost } from '@/app/api/subscribe/post.server'
import { useActionState } from 'react'

const initialState: { message?: string; status?: number }[] = [{ message: '' }, { status: 400 }]

export default function () {
  const [state, formAction, isPending] = useActionState(createPost, initialState)
  return (
    <form action={formAction} className="relative w-full md:mt-7 max-w-[518px] 2xl:max-w-[400px] xl:max-w-[350px] lt:mt-0 lt:max-w-[416px] lg:mt-5 lg:max-w-[464px] sm:mt-6">
      <div className="relative z-20">
        <input
          required
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Your email address..."
          className="w-full appearance-none rounded-[50px] border bg-black pl-7 placeholder:text-white/60 focus:outline-none md:pr-32 xs:pr-7 h-14 pr-36 border-green-45 text-white"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="absolute inset-y-2 right-2 rounded-[80px] font-bold leading-none text-black transition-colors duration-200 sm:px-5 xs:flex xs:h-10 xs:w-10 xs:items-center xs:justify-center xs:px-0 h-10 px-7 py-3 bg-[#00e599] hover:bg-[#00FFAA]"
        >
          <span className="xs:hidden">Subscribe</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="hidden h-6 w-6 xs:block">
            <path
              fill="#0C0D0D"
              d="M24 12a1.29 1.29 0 0 0-.741-1.166L5.85 2.624a1.3 1.3 0 0 0-1.413.2 1.29 1.29 0 0 0-.37 1.373l2.102 6.274L15.375 12l-9.208 1.528-2.102 6.274a1.29 1.29 0 0 0 .315 1.32q.029.03.057.054a1.3 1.3 0 0 0 1.415.2l17.409-8.21c.45-.212.739-.668.739-1.166"
            />
          </svg>
        </button>
      </div>
      {isPending && <p className="mt-4 text-white/80">Subscribing...</p>}
      {state[0].message && state[0].message?.length > 0 && <p className="mt-4 text-white/80">{state[0].message}</p>}
    </form>
  )
}
