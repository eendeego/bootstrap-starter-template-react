var path = require('path');
var Clean = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

const distDir = 'dist';

module.exports = {
  entry: [
    './app/index'
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' }
    ],
  },
  output: {
    path: path.join(__dirname, distDir),
    filename: 'bundle.[hash].js'
  },
  plugins: [
    new Clean([distDir]),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html'
    })
  ]
};
