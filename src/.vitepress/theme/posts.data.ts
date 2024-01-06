import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: string
  category: string
  excerpt: string | undefined
  author: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/**/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url: "/www-rewrite" + url,
        excerpt,
        category: frontmatter.category,
        date: frontmatter.date,
        author: frontmatter.author,
      }))
      .sort((a, b) => b.date - a.date)
  }
})
