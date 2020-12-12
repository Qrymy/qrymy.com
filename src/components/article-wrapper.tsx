import { FC, useMemo } from 'react'
import { getIsoString, getReadableDate } from '@/helpers/dayjs-helpers'
import { Article } from '@/types/article'

type Props = {
  readonly article: Article
}

export const ArticleWrapper: FC<Props> = ({ children, article }) => {
  const { iso, readable } = useMemo(() => {
    const iso = getIsoString(article.date)
    const readable = getReadableDate(article.date)
    return { iso, readable }
  }, [article.date])

  return (
    <article className="my-8">
      <header className="mb-8">
        <time className="text-base text-gray-900" dateTime={iso}>
          {readable}
        </time>
        <h2 className="mt-3 text-2xl font-normal text-primary">
          {article.title}
        </h2>
      </header>
      {children}
    </article>
  )
}
