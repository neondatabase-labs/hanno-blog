import { NeonQueryFunction, QueryRows } from '@neondatabase/serverless'

export async function generateEmbedding(content: string, sql: NeonQueryFunction<false, false>) {
  const embeddingVector = (await sql`select rag_bge_small_en_v15.embedding_for_passage(${content})`) as QueryRows<false>
  return embeddingVector[0]['embedding_for_passage']
}
