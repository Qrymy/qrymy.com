const withLinaria = require('next-linaria')

module.exports = withLinaria({
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

    return config
  },
})
