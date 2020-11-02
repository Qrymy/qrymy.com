import Doc, { Html, Head, Main, NextScript } from 'next/document'
import { Gtag } from '@components/gtag'

export default class Document extends Doc {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://unpkg.com/ress/dist/ress.min.css"
            rel="stylesheet"
          />
          <Gtag />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
