var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var defaults = {
  port: 3001
};

var port = process.env.WDS_PORT =
  process.env.WDS_PORT ?
    parseInt(process.env.WDS_PORT, 10) :
    defaults.port;

var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: './app',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
