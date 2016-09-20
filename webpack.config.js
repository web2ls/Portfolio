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
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?limit=10000&mimetype="image/gif'
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=10000&mimetype="image/jpg'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype="image/png'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=26000&mimetype="image/svg'
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
         loader: "file-loader" 
       }
    ]
  }
}
