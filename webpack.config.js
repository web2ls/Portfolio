var webpack  = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/core.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/build'),
    publicPath: 'build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'css-loader!style-loader!file-loader!url-loader'
      }
    ]
  }
}
