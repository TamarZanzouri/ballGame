var http = require('http');
var Player = require('./player_md');
msgReplay = "printing the results... ";		//global var for printing the result

var reqHandler = function(req, res){
	res.writeHead(200);
	res.end('succsess!!! ' + msgReplay);
}

server = http.createServer(reqHandler);

server.listen(3000, '127.0.0.1');

Player.scores(10);			//adding 10 points
Player.scores(20);			//adding 20 points
Player.scores(33);			//adding 30 points
Player.reducePoints(67);	//reducing 67 points
