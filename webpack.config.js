var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const distDir = 'dist';

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:' + (process.env.WDS_PORT || 3000),
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') }
    ],
  },
  output: {
    path: path.join(__dirname, distDir),
    filename: 'bundle.[hash].js',
    hashDigestLength: 8
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new Clean([distDir]),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html'
    }),
    new ExtractTextPlugin('styles.[md5:contenthash:8].css')
  ]
};
