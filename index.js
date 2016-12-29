var express = require('express');
var compression = require('compression');

var appServer = express();
appServer
  .use(compression())
  .use(express.static(__dirname + '/app'))
  .listen(4000);
