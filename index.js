var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// This is looking for index.html!!!  So you have to specify where it can be found.
app.use(express.static(__dirname + '/app/'));

app.listen(port, function() {
  console.log('I am listening on port 3000!');
});
