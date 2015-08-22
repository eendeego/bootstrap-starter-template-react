var path = require('path');
var Clean = require('clean-webpack-plugin');

const distDir = 'dist';

module.exports = {
  entry: [
    './app/index'
  ],
  output: {
    path: path.join(__dirname, distDir),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new Clean([distDir])
  ]
};
