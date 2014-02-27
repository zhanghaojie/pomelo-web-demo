var express = require("express");
var pomelo = require("./pomelo-nodejs-driver.js").pomelo;

var app = express();

pomelo.init({
	host: "127.0.0.1",
	port: 3010
}, function() {
	pomelo.request("connector.entryHandler.entry", function(result) {
		console.log(result);
	})
})

app.get("/callback", function(req, res) {
	pomelo.request("connector.httpHandler.handle", {pathname: "/callback", query: req.query}, function(result) {
		console.log(result);
	})
})

app.listen(3000);

console.log("app run at http://localhost:3000")