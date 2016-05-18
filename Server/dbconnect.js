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

exports.dbgetall = function (callback) {
	pg.connect(dbUrl, function (err, client, done) {
        var handleError = function (err) {
            if(!err) return false;
            done(client);
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('An error occurred');
            return true;
        };
    
        var qstring = "SELECT * FROM students";
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
};

exports.dbput = function (num, code, callback) {
    pg.connect(dbUrl, function(err, client, done) {
        var qstring = "UPDATE students SET "; 
        var n = num - (num % 10);
		var p = num % 10 + 1;
		if (num.length == 1) {
			 qstring += "monday_pack = " + p + " WHERE code = '" + code + "'; UPDATE students SET tuesday_pack = " + p + " WHERE code = '" + code + "';  UPDATE students SET wednesday_pack = " + p + " WHERE code = '" + code + "';  UPDATE students SET thursday_pack = " + p + " WHERE code = '" + code + "';  UPDATE students SET friday_pack = " + p + " WHERE code = '" + code + "';  UPDATE students SET saturday_pack = " + p + " WHERE code = '" + code + "';";
		} else if (n == 10) {
			qstring += "monday_pack = " + p + " WHERE code = '" + code + "';";
		} else if (n == 20) {
			qstring += "tuesday_pack = " + p + " WHERE code = '" + code + "';";
		} else if (n == 30) {
			qstring += "wednesday_pack = " + p + " WHERE code = '" + code + "';";
		} else if (n == 40) {
			qstring += "thursday_pack = " + p + " WHERE code = '" + code + "';";
		} else if (n == 50) {
			qstring += "friday_pack = " + p + " WHERE code = '" + code + "';";
		} else if (n == 60) {
			qstring += "saturday_pack = " + p + " WHERE code = '" + code + "';";
		}
		
		
		var query = client.query(qstring);
		
		query.on('row', function (row, result) {
			result.addRow(row);
		});
		
		query.on('end', function(result) {
			callback();
		});
		done();
    });
}