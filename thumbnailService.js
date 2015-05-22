var faye = require('faye');
var http = require('http');
var notificationServer = 	http.createServer();

var notificationServerPort = 15422;
var client = new faye.Client('http://localhost:'+notificationServerPort+'/');
console.log("publishing");
client.publish('/hello', {
  text: 'Hello world'
});
