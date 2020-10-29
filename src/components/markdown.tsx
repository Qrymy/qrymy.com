import { FC } from 'react'
import MarkdownToJSX, { MarkdownToJSX as MarkdownType } from 'markdown-to-jsx'
import { Article } from '@models/article'

type Props = {
  readonly article: Article
}

export const Markdown: FC<Props> = ({ article }) => {
  const overrides: MarkdownType.Overrides = {}

  return (
    <MarkdownToJSX options={{ overrides }}>{article.content}</MarkdownToJSX>
  )
}
