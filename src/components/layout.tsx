import { FC } from 'react'
import { css } from 'linaria'
import { Header } from '@components/header'
import { Footer } from '@components/footer'
import { COLORS, SIZES } from '../theme'

const styles = {
  wrapper: css`
    width: ${SIZES.full};
    height: ${SIZES.full};
    backgorund-color: ${COLORS.background};

    & > * {
      font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
        'Hiragino Sans', Meiryo, sans-serif;
    }
  `,

  container: css`
    max-width: ${SIZES.main};
    margin: 0 auto;
    padding: ${SIZES.xl} ${SIZES.sm};
  `,

  content: css`
    min-height: 80vh;
  `,
}

export const Layout: FC = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  </div>
)
