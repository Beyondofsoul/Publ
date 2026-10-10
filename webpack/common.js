const path = require('path');
const plugins = require('./plugins');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },

  plugins: plugins.common,
};
