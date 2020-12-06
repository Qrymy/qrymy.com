import Doc, { Html, Head, Main, NextScript } from 'next/document'
import { Gtag } from '@components/gtag'

export default class Document extends Doc {
  render() {
    return (
      <Html>
        <Head>
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
