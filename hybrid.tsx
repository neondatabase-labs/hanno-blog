import { neon } from '@neondatabase/serverless'
import { execSync } from 'child_process'
import 'dotenv/config'
import fs from 'fs'
import frontmatter from 'gray-matter'
import path from 'path'
import { generateEmbedding } from './lib/embedding'

const getChangedMarkdownFiles = () => {
  try {
    return execSync("git diff --name-only HEAD^ HEAD -- '*'")
      .toString()
      .split('\n')
      .filter((i) => i?.includes('.md'))
  } catch (e) {
    console.log(e)
  }
  return []
}

async function index() {
  if (!process.env.DATABASE_URL) throw new Error('Required environment variables not found.')
  const sql = neon(process.env.DATABASE_URL)
  try {
    await sql`SET neon.allow_unstable_extensions='true';`
    await sql`create extension if not exists vector;`
    await sql`create extension if not exists rag_bge_small_en_v15 cascade;`
    await sql`create table if not exists documents (id bigint primary key generated always as identity, content text, title text, slug text, fts tsvector generated always as (to_tsvector('english', content)) stored, embedding vector(384));`
    await sql`create index if not exists documents_fts_idx on documents using gin(fts);`
    await sql`create index if not exists documents_embedding_idx on documents using hnsw (embedding vector_ip_ops);`
    await sql`create or replace function hybrid_search(query_text text, query_embedding vector(384), match_count int, full_text_weight float = 1, semantic_weight float = 1, rrf_k int = 50)
returns setof documents
language sql
as $$
with full_text as (
  select
    id,
    row_number() over(order by ts_rank_cd(fts, websearch_to_tsquery(query_text)) desc) as rank_ix
  from
    documents
  where
    fts @@ websearch_to_tsquery(query_text)
  order by rank_ix
  limit least(match_count, 30) * 2
),
semantic as (
  select
    id,
    row_number() over (order by embedding <#> query_embedding) as rank_ix
  from
    documents
  order by rank_ix
  limit least(match_count, 30) * 2
)
select
  documents.*
from
  full_text
  full outer join semantic
    on full_text.id = semantic.id
  join documents
    on coalesce(full_text.id, semantic.id) = documents.id
order by
  coalesce(1.0 / (rrf_k + full_text.rank_ix), 0.0) * full_text_weight +
  coalesce(1.0 / (rrf_k + semantic.rank_ix), 0.0) * semantic_weight
  desc
limit
  least(match_count, 30)
$$;`
    const contentDir = path.join(process.cwd(), 'content')
    const files = fs.readdirSync(contentDir)
    const changedFiles = getChangedMarkdownFiles().filter((i) => i.includes('.md'))
    const existingSlugs = await sql`select slug from documents;`
    const existingSlugsSet = new Set(existingSlugs.map((row) => row.slug))
    for (const file of files) {
      const filePath = path.join(contentDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data: attributes, content } = frontmatter(fileContent)
      const title = attributes.title || 'Untitled'
      const slug = attributes.slug || path.basename(file, path.extname(file))
      if (!existingSlugsSet.has(slug)) {
        const embeddingVector = await generateEmbedding(content, sql)
        await sql`insert into documents (content, title, slug, embedding) values (${content}, ${title}, ${slug}, ${embeddingVector}::vector(384));`
      }
    }
    for (const file of changedFiles) {
      const fileContent = fs.readFileSync(file, 'utf-8')
      const { data: attributes, content } = frontmatter(fileContent)
      const title = attributes.title || 'Untitled'
      const slug = attributes.slug || path.basename(file, path.extname(file))
      const embeddingVector = await generateEmbedding(content, sql)
      if (!existingSlugsSet.has(slug)) await sql`insert into documents (content, title, slug, embedding) values (${content}, ${title}, ${slug}, ${embeddingVector}::vector(384));`
      else await sql`update documents set content = ${content}, title = ${title}, embedding = ${embeddingVector}::vector(384) where slug = ${slug};`
    }
    console.log('Hybrid search context updated successfully.')
  } catch (error) {
    console.error(error)
  }
}

index()
