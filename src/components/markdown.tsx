import { FC } from 'react'
import Image from 'next/image'
import MarkdownToJSX, { MarkdownToJSX as MarkdownType } from 'markdown-to-jsx'
import { Article } from '@models/article'

type Props = {
  readonly article: Article
}

export const Markdown: FC<Props> = ({ article }) => {
  const overrides: MarkdownType.Overrides = {
    img: { component: Image, props: { unsized: true } },
  }

  return (
    <MarkdownToJSX options={{ overrides }}>{article.content}</MarkdownToJSX>
  )
}
