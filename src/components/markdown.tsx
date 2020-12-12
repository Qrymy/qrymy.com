import { FC } from 'react'
import MarkdownToJSX, { MarkdownToJSX as MarkdownType } from 'markdown-to-jsx'
import { WiseLink } from '@components/wise-link'
import { Article } from '@models/article'

type Props = {
  readonly article: Article
}

export const Markdown: FC<Props> = ({ article }) => {
  const overrides: MarkdownType.Overrides = {
    h1: <h1 className="text-3xl" />,
    h2: <h2 className="text-2xl" />,
    img: <img className="max-w-full h-auto mb-6" />,
    a: <WiseLink className="text-primary" />,
    code: (
      <code className="px-1 text-secondary text-xs bg-gray-200 rounded-sm	" />
    ),
  }

  return (
    <MarkdownToJSX
      className="space-y-6 text-gray-900 leading-relaxed"
      options={{ overrides }}
    >
      {article.content}
    </MarkdownToJSX>
  )
}
