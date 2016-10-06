module.exports = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit');
		next();
	},
	logger: function (req, res, next) {
		var dateObject = new Date();
		var date = dateObject.toLocaleDateString();
		var time = dateObject.toLocaleTimeString();
		console.log('[' + date + ' ' + time + '] Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
}