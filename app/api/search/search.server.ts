'use server'

import { generateEmbedding } from '@/lib/embedding'
import { neon, neonConfig } from '@neondatabase/serverless'

neonConfig.poolQueryViaFetch = true

export async function searchBlog(_: any, formData: FormData) {
  try {
    if (!process.env.DATABASE_URL) throw new Error('Required environment variables not found.')
    const query = formData.get('query') as string
    if (!query) return [{ message: 'query is required' }, { status: 400 }]
    const sql = neon(process.env.DATABASE_URL)
    const topK = 3
    const embeddingVector = await generateEmbedding(query, sql)
    const results = await sql`select content, title, slug from hybrid_search(${query}, ${embeddingVector}::vector(384), ${topK});`
    const matchingLines = results.map((row) => {
      const words = row.content.split(' ').slice(0, 30).join(' ')
      return { title: row.title, slug: row.slug, snippet: words }
    })
    return [{ message: matchingLines }, { status: 200 }]
  } catch (error) {
    console.error('Search error:', error)
    return [{ message: 'Failed to search :/' }, { status: 500 }]
  }
}
