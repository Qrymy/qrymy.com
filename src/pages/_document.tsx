import Doc, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends Doc {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
