import { FC, useMemo } from 'react'
import { WiseLink } from '@components/wise-link'
import { getIsoString, getReadableDate } from '@helpers/dayjs-helpers'
import { Article } from '@models/article'

type Props = {
  readonly article: Article
}

export const ArticleItem: FC<Props> = ({ article }) => {
  const { iso, readable } = useMemo(() => {
    const iso = getIsoString(article.date)
    const readable = getReadableDate(article.date)
    return { iso, readable }
  }, [article.date])

  return (
    <article className="my-8">
      <time className="text-base text-gray-900" dateTime={iso}>
        {readable}
      </time>
      <h2 className="mt-3 text-2xl font-normal">
        <WiseLink
          className="text-primary no-underline hover:underline"
          href={`/${article.slug}`}
        >
          {article.title}
        </WiseLink>
      </h2>
    </article>
  )
}
