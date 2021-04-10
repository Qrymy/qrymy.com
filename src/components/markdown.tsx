import { FC } from 'react'
import MarkdownToJSX from 'markdown-to-jsx'
import { Article } from '@/types/article'

type Props = {
  readonly article: Article
}

export const Markdown: FC<Props> = ({ article }) => (
  <MarkdownToJSX className="prose ">{article.content}</MarkdownToJSX>
)
