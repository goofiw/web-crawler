var request = require('request');

var html_loader = function(url) {
  request(url, function(err, res, body) {
	if(err) { throw 'url rotten beans'};
	return body;
	});
}
export.module(html_loader);
