import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'

const blogs = defineCollection({
  name: 'blogs',
  directory: 'content',
  include: '**/*.md',
  schema: (z) => ({
    tag: z.string(),
    date: z.string(),
    title: z.string(),
    summary: z.string(),
    banner_image: z.string(),
    author: z.string(),
    author_image: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    const timestamp = new Date(document.date).getTime()
    const date = new Date(document.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    return {
      ...document,
      html,
      date,
      timestamp,
    }
  },
})

export default defineConfig({
  collections: [blogs],
})
