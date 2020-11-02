import { FC } from 'react'
import { css } from 'linaria'
import { WiseLink } from '@components/wise-link'
import { FOOTER_NAV, FOOTER_COPYRIGHT } from '@constants'
import { COLORS, SIZES } from '../theme'

const styles = {
  container: css`
    padding: ${SIZES.md} 0;
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
    text-decoration: none;

    &:hover {
      text-decoration-line: underline;
    }
  `,

  small: css`
    display: block;
    font-size: ${SIZES.xs};
    margin-top: ${SIZES.sm};
  `,
}

export const Footer: FC = () => {
  return (
    <footer className={styles.container}>
      <nav>
        <ul className={styles.list}>
          {FOOTER_NAV.map(({ label, href }) => (
            <li className={styles.listItem} key={href}>
              <WiseLink className={styles.anchor} href={href}>
                {label}
              </WiseLink>
            </li>
          ))}
        </ul>
      </nav>
      <small className={styles.small}>{FOOTER_COPYRIGHT}</small>
    </footer>
  )
}
