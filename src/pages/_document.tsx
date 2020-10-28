import Doc, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends Doc {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
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
