import { FC, useMemo } from 'react'
import { css } from 'linaria'
import { WiseLink } from '@components/wise-link'
import { getIsoString, getReadableDate } from '@helpers/dayjs-helpers'
import { Article } from '@models/article'
import { COLORS, SIZES } from '../theme'

type Props = {
  readonly article: Article
}

const styles = {
  container: css`
    margin: ${SIZES.lg} 0;
  `,

  time: css`
    font-size: ${SIZES.sm};
    color: ${COLORS.text};
  `,

  title: css`
    margin-top: ${SIZES.xs};
    font-size: ${SIZES.sm};
    font-weight: normal;
  `,

  anchor: css`
    color: ${COLORS.primary};
    text-decoration-line: none;

    &:hover {
      text-decoration-line: underline;
    }
  `,
}

export const ArticleItem: FC<Props> = ({ article }) => {
  const { iso, readable } = useMemo(() => {
    const iso = getIsoString(article.date)
    const readable = getReadableDate(article.date)
    return { iso, readable }
  }, [article.date])

  return (
    <article className={styles.container}>
      <time className={styles.time} dateTime={iso}>
        {readable}
      </time>
      <h2 className={styles.title}>
        <WiseLink className={styles.anchor} href={`/${article.slug}`}>
          {article.title}
        </WiseLink>
      </h2>
    </article>
  )
}
