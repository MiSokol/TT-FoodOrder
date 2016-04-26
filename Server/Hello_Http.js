var ejs = require('ejs-locals');
var express = require('express');
var app = express();

app.engine('html', ejs);
app.engine('ejs', ejs);
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/*', function (req, res) {
  res.render("./startPage");
});

app.post('/main', function (req, res) {
  res.send(req.body.code);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
