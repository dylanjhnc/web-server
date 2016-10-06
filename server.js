const PORT = 3000;
var express = require('express');
var app = express();

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit');
		next();
	},
	logger: function (req, res, next) {
		var dateObject = new Date();
		var time = dateObject.getHours() + ':' + dateObject.getMinutes() + ':' + dateObject.getSeconds();
		console.log('[' + time + '] Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});