var request = require('request');
var count = 0;
exports.html_loader = function(url, callback) {
		request(url, function(err, res, body) {
			console.log(count);
			if(err) {
				console.log(url, err);
				throw err;
			};
			count++;
			return callback(body, url);
		});
}

