import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Article } from '@models/article'

const DIRECTORY_NAME = '_articles' as const

const directory = join(process.cwd(), DIRECTORY_NAME)

export const getArticleSlugs = () => {
  return fs.readdirSync(directory)
}

export const getArticleBySlug = (slug: string) => {
  slug = slug.replace(/\.md$/, '')
  const path = join(directory, `${slug}.md`)
  const file = fs.readFileSync(path, 'utf8')
  const { data, content } = matter(file)
  const article: Article = {
    slug: typeof data.slug === 'string' ? data.slug : '',
    title: typeof data.title === 'string' ? data.title : '',
    date: typeof data.date === 'string' ? data.date : '',
    content,
  }
  return article
}

export const getAllArticles = () => {
  const slugs = getArticleSlugs()
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  return articles
}
