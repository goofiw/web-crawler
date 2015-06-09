var cheerio = require('cheerio');
var html = require('./html_loader');

var body = html.html_loader(process.argv[2], function(response) {
  console.log(response);
});
