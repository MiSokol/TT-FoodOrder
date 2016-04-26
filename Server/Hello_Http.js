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
  res.render("./main", {Name: "Эрнесто Че Гевара", OrderForDates: "OOO", DeadlineOfOrder: "oOo", Praise1: "", Praise2: "1", Praise3: "1", Praise4: "1", Praise4: "1", Praise5: "1",Praise6: "1",Praise7: "1",Praise8: "1",Praise9: "1", Praise10: "1"});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
