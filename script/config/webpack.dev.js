const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: './index.html',
    hot: true,
    port: +process.env.PORT
  },
  plugins: [
    new WebpackBar({ name: 'loading', color: 'orange' }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://localhost:${+process.env.PORT}/#/`]
      },
      clearConsole: true
    })
  ],
  stats: 'errors-only'
});
