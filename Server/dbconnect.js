var pg = require('pg');
var dbUrl = "postgres://postgres:q2w3e4@localhost:5432/postgres";

exports.dbget = function (code, callback) {
    pg.connect(dbUrl, function (err, client, done) {
        var handleError = function (err) {
            if(!err) return false;
            done(client);
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('An error occurred');
            return true;
        };
    
        var qstring = "SELECT * FROM students WHERE code='" + code + "'";
        var query = client.query(qstring);
        var cnt = 0;
    
        query.on('row', function (row, result) {
            result.addRow(row); 
        });
    
        query.on('end', function(result) {
            callback(result); 
        });
        done();
    });
}

exports.dbput = function () {
    
}