
var express = require('express');


var app;
var server;

app = express();
app.get(
    '/', 
    function (req, res) {
      res.send('<section><h1>hola mundo</h1><article>express js</article></section>');
    }
);
server = app.listen(3000, function () {
  console.log('listening on http://localhost:3000')
});

console.log('app running');
//eof
