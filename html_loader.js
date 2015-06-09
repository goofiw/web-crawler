var request = require('request');

exports.html_loader = function(url, callback) {
  request(url, function(err, res, body) {
		if(err) { throw 'url rotten beans'; };
		return callback(body);
	});
}

