var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname + 'dist'),
    filename: 'build.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        test: /\.css$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  }
};

module.exports = config;