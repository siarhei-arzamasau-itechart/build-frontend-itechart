const path = require('path');
const cleanWebpackPligun = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              publicPath: './images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new cleanWebpackPligun(['dist']),
    new htmlWebpackPlugin({
      title: 'Awesome project',
      filename: 'awesomeIndex.html',
      template: './index.html',
    }),
  ],
};
