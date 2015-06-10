var html = require('./html_loader');
var fs = require('fs');
var ws = fs.createWriteStream('./write_file.csv');
var body = function(url) {
	html.html_loader(url, function(response, url) {
		var cheerio = require('cheerio'),
			$ = cheerio.load(response);
		$('tr').each(function(idx, elem){
			ws.write('\n');
			$(this).children().each(function(id, elem) {
				text = $(this).text();
				switch (id % 3) {
						case 0:
						ws.write(text + ',');
					break;
						case 1:
						ws.write(text + ',');
					break;
						case 2:
						ws.write(url + text);
					break;
				}
				if(/[^\.]\/$/.test(text)) {
					body(url + text);
				};
			});
		});
	});
}
body(process.argv[2]);
