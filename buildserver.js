var path = require('path');
var express = require('express');
var webpack = require('webpack');
var target = process.argv[2];

if (target === "development") {
  var config = require('./webpack.dev.config');
  var app = express();
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    quiet: false,
    publicPath: config.output.publicPath,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      "Access-Control-Allow-Credentials": true
    }
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(3000, 'localhost', function(err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://localhost:3000');
  });
}