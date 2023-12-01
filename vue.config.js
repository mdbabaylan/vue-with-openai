const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        os: require.resolve('os-browserify'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_API_KEY': JSON.stringify(process.env.VUE_APP_API_KEY),
      }),
    ],
  },
})
