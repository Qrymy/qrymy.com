import { FC } from 'react'
import { css } from 'linaria'
import MarkdownToJSX, { MarkdownToJSX as MarkdownType } from 'markdown-to-jsx'
import { WiseLink } from '@components/wise-link'
import { Article } from '@models/article'
import { COLORS, SIZES } from '../theme'

type Props = {
  readonly article: Article
}

const styles = {
  container: css`
    color: ${COLORS.text};
    line-height: 1.8;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: ${SIZES.lg};
    }

    h1 {
      font-size: ${SIZES.lg};
    }

    h2 {
      font-size: ${SIZES.md};
    }

    p {
      margin-top: ${SIZES.sm};
    }

    hr {
      margin: ${SIZES.lg} 0;
    }

    ul,
    ol {
      padding-left: ${SIZES.sm};
      margin: ${SIZES.lg} 0;
    }

    code {
      padding: 0 ${SIZES['2xs']};
      color: ${COLORS.secondary};
      background-color: ${COLORS.gray};
      border-radius: ${SIZES['3xs']};
    }

    pre {
      padding: ${SIZES.sm};
      background-color: ${COLORS.text};
      margin: ${SIZES.lg} 0;
      border-radius: ${SIZES['3xs']};
      overflow-x: auto;

      code {
        color: ${COLORS.background};
        background-color: transparent;
      }
    }

    img {
      max-width: 100%;
      height: auto;
    }

    a {
      color: ${COLORS.primary};
    }

    table {
      width: 100%;
      margin: ${SIZES.lg} 0;
      border-collapse: collapse;
    }

    table,
    thead,
    tfoot,
    tr,
    th,
    td {
      border: solid 1px ${COLORS.gray};
    }

    th,
    td {
      padding: ${SIZES['2xs']} ${SIZES.sm};
    }
  `,
}

export const Markdown: FC<Props> = ({ article }) => {
  const overrides: MarkdownType.Overrides = {
    a: WiseLink,
  }

  return (
    <div className={styles.container}>
      <MarkdownToJSX options={{ overrides }}>{article.content}</MarkdownToJSX>
    </div>
  )
}
