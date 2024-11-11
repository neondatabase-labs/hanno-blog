import { NextResponse } from 'next/server'
import { searchBlog } from './search.server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const resp = await searchBlog(null, formData)
  return NextResponse.json(resp[0], resp[1])
}
