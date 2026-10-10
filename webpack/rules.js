const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (isDevelopment) => [
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  },
  {
    test: /\.css$/,
    use: [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name].[hash][ext]',
    },
  },
];
