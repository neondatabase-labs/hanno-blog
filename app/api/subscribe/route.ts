export const runtime = 'edge'

import { NextResponse } from 'next/server'
import { createPost } from './post.server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const resp = await createPost(null, formData)
  return NextResponse.json(resp[0], resp[1])
}
