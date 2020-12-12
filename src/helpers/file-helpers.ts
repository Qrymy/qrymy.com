import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { Article } from '@/types/article'
import { DIRECTORY_NAME } from '@/constants'

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
    slug,
    title: typeof data.title === 'string' ? data.title : '',
    date: typeof data.date === 'number' ? data.date : Date.now(),
    content,
    description: typeof data.description === 'string' ? data.description : null,
    shouldNotListed:
      typeof data.shouldNotListed === 'boolean' ? data.shouldNotListed : false,
  }
  return article
}

export const getAllArticles = (showShouldNotListed = false) => {
  const slugs = getArticleSlugs()
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter(({ shouldNotListed }) => !(!showShouldNotListed && shouldNotListed))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  return articles
}
