const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV === 'development';

const common = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),

  new Dotenv(),

  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'public',
        to: '',
      },
    ],
  }),
];

if (!isDevelopment) {
  common.push(
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  );
}

module.exports = {
  common,
};
