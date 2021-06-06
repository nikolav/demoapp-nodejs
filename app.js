
var app;
var server;
var express;
var sqlite3;

express = require('express');
sqlite3 = require('sqlite3');


app = express();
app.set('view engine', 'ejs');

app.get(
    '/', 
    function (req, res) {
      // res.send('<section><h1>hola mundo</h1><article>express js</article></section>');
      res.render('default');

    }
);


server = app.listen(3000, function () {
  console.log('listening on http://localhost:3000')
});

console.log('app running');
//eof
