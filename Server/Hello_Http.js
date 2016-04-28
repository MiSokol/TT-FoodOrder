var ejs = require('ejs-locals');
var express = require('express');
var app = express();

var pq = require('pg');

app.engine('html', ejs);
app.engine('ejs', ejs);
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/*', function (req, res) {
  res.render("./startPage");
});

app.post('/main', function (req, res) {
  res.render("./main", {Name: "Эрнесто Че Гевара", OrderForDates: "25.04 - 30.04", DeadlineOfOrder: "23.04", Price1: "1", Price2: "1", Price3: "1", Price4: "1", Price4: "1", Price5: "1",Price6: "1",Price7: "1",Price8: "1",Price9: "1", Price10: "1"});
});

app.post('/answer', function (req, res) {
    res.render("./answer");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
