import Doc, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends Doc {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://unpkg.com/ress/dist/ress.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
