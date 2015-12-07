var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  devtool: 'source-map',
  entry: [
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename:'build.js',
    publicPath: '/static/'
  },
  plugins: [
    /*new webpack.optimize.OccurenceOrderPlugin(),*/
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    loaders: [
      {
        loaders: ['babel'],
        exclude: /node_modules/
      },
      { exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader"), test: /\.css$/ }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  }
};

module.exports = config;