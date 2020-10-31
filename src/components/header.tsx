import { FC } from 'react'
import { css } from 'linaria'
import { WiseLink } from '@components/wise-link'
import { HEADER_NAV } from '@constants'
import { COLORS, SIZES } from '../theme'

const styles = {
  container: css`
    height: ${SIZES['2xl']};
    line-height: ${SIZES['2xl']};
  `,

  list: css`
    list-style-type: none;
  `,

  listItem: css`
    display: inline-block;

    & + li {
      margin-left: ${SIZES.sm};
    }
  `,

  anchor: css`
    color: ${COLORS.text};
    text-decoration-line: none;

    &:hover {
      text-decoration-line: underline;
    }
  `,
}

export const Header: FC = () => (
  <header className={styles.container}>
    <nav>
      <ul className={styles.list}>
        {HEADER_NAV.map(({ label, href }) => (
          <li className={styles.listItem} key={href}>
            <WiseLink className={styles.anchor} href={href}>
              {label}
            </WiseLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
