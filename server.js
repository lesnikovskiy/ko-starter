var http = require('http');
var express = require('express');
var app = module.exports = express();
var path = require('path');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json()); // application/json parser
app.use(bodyParser.urlencoded({extended: false})); // application/x-www-urlencoded parser 
app.use(serveStatic(path.join(__dirname, 'src'), { 'index': ['index.html', 'default.htm'] }));

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server is listening on port: %d', app.get('port'));
});