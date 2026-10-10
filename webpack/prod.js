const { merge } = require('webpack-merge');
const common = require('./common');
const rules = require('./rules');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',

  module: {
    rules: rules(false),
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
