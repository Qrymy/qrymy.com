const withCss = require('@zeit/next-css')

module.exports = withCss({
  webpack(config, _options) {
    config.module.rules.push({
      test: /\.tsx$/,
      use: [
        {
          loader: 'linaria/loader',
          options: { sourceMap: process.env.NODE_ENV !== 'production' },
        },
      ],
    })
  },
})
