var request = require('request');

exports.html_loader = function(url, callback) {
  request(url, function(err, res, body) {
		console.log(url);
		if(err) {
			console.log(url, err);
		 	throw err;
	 	};

		return callback(body, url);
	});
}

