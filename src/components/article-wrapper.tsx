import { FC, useMemo } from 'react'
import { css } from 'linaria'
import { getIsoString, getReadableDate } from '@helpers/dayjs-helpers'
import { Article } from '@models/article'
import { COLORS, SIZES } from '../theme'

type Props = {
  readonly article: Article
}

const styles = {
  container: css`
    margin: ${SIZES.xl} 0;
  `,

  header: css`
    margin-bottom: ${SIZES.xl};
  `,

  time: css`
    font-size: ${SIZES.sm};
    color: ${COLORS.text};
  `,

  title: css`
    margin-top: ${SIZES.xs};
    font-size: ${SIZES.md};
    font-weight: normal;
    color: ${COLORS.primary};
  `,
}

export const ArticleWrapper: FC<Props> = ({ children, article }) => {
  const { iso, readable } = useMemo(() => {
    const iso = getIsoString(article.date)
    const readable = getReadableDate(article.date)
    return { iso, readable }
  }, [article.date])

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <time className={styles.time} dateTime={iso}>
          {readable}
        </time>
        <h2 className={styles.title}>{article.title}</h2>
      </header>
      {children}
    </article>
  )
}
