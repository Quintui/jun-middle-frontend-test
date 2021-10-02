const path = require('path')
const webpack = require('webpack')

module.exports = {
  stories: ['../**/*.stories.ts', '../**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]--[hash:base64:10]',
            },
          },
        },
        { loader: 'sass-loader' },
      ],
      include: path.resolve(__dirname, '../'),
    })

    config.resolve.extensions = ['.tsx', '.ts', '.jsx', '.js']

    config.resolve.alias = {
      stream: require.resolve('stream-browserify'),
    }

    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
      })
    )

    // Return the altered config
    return config
  },
}
