var faye = require('faye');
var http = require('http');
var notificationServer = 	http.createServer();

var notificationServerPort = 15422;
var	bayeux = new faye.NodeAdapter({mount: '/', timeout: 45});
bayeux.attach(notificationServer);
notificationServer.listen(notificationServerPort);
console.log("Faye server running on port "+15422);
