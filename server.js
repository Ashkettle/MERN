var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public'));
app.listen(8080, function(){
  console.log('Web Server running on Port 8080');
  });

