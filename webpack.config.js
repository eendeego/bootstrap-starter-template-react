var path = require('path');
var Clean = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const distDir = 'dist';

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index'
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') },
    ],
  },
  output: {
    path: path.join(__dirname, distDir),
    filename: 'bundle.[hash].js',
    hashDigestLength: 8
  },
  plugins: [
    new Clean([distDir]),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html'
    }),
    new ExtractTextPlugin('styles.[md5:contenthash:8].css')
  ]
};
