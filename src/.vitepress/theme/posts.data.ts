import { createContentLoader } from 'vitepress'

interface Post {
  title: string
  url: string
  date: {
    time: number
    string: string
  }
  category: string
  excerpt: string | undefined
  author: string | undefined
  hero: string | undefined
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
        excerpt: frontmatter.excerpt || excerpt,
        category: frontmatter.category,
        date: formatDate(frontmatter.date),
        author: frontmatter.author,
        hero: frontmatter.hero
      }))
      .sort((a, b) => b.date.time - a.date.time)
  }
})

const formatDate = (raw: string): Post['date'] => {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
