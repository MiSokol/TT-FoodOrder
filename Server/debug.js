var ejs = require('ejs-locals');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'they call me mellow yellow',
    resave: false,
    saveUninitialized: true
}));
app.engine('html', ejs);
app.engine('ejs', ejs);
app.set('views', 'views');
app.set('view engine', 'ejs');

var db = require('./dbconnect');

app.get('/*', function (req, res) {
    var code = "NoPasaRun";
    console.log("User with code: " + code + " try to log in.");
    db.dbget(code, function (query) {
        var person = query.rows;
        if (person.length != 0){
            req.session.nameCode = person[0].code;
            console.log("User with name: " + person[0].studentname + "has came in.");
            res.render("./main", {Name: person[0].studentname, OrderForDates: "25.04 - 30.04", DeadlineOfOrder: "23.04", Price1: "1", Price2: "1", Price3: "1", Price4: "1", Price4: "1", Price5: "1", Price6: "1", Price7: "1", Price8: "1", Price9: "1", Price10: "1"});
        } else {
            //prompt("Wrong password! Try another one...");
        };
    });        
});
app.listen(8080, function () {
  console.log('Dubug started at port 8080!');
});