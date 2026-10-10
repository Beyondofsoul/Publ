const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./common');
const rules = require('./rules');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',

  module: {
    rules: rules(true),
  },

  output: {
    filename: 'bundle.js',
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    port: 3000,
    open: true,
    hot: true,
  },
});
