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
    'bootstrap-sass!./bootstrap-sass.config.js',
    './app/index'
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') },

      // Needed for the css-loader when [bootstrap-sass-loader](https://github.com/justin808/bootstrap-sass-loader)
      // loads bootstrap's css.
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,   loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=image/svg+xml" }
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
