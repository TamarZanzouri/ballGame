
var events = require('events');
var util = require('util');
util.inherits(Player, events.EventEmitter);

msgReplay = + " the prints are: ";		//global var for printing the result

function Player(){
	this.score = 0;
	events.EventEmitter.call(this);
}

Player.prototype.scores = function(points){
	this.score += points;
	this.emit('addedScore');	//fires the event "addedScore"
}

Player.prototype.reducePoints = function(points){
	this.score -= points;
	this.emit('reducedScore');	//fires the event "reducedScore"
}

function displayScores(){
	console.log("the score is: " + this.score);
	msgReplay += "the score is: " + this.score + " ";
}

function checkScoreMinimum(){
	if(this.score < 0){			//checks if the current score is under 0 and prints an alarm
		console.log("you are under 0!!! this is your score: " + this.score);
		msgReplay += "the score is under 0!!! this is your current score: " + this.score + " "; 
	}	
}

var player = new Player();

player.on("addedScore", displayScores);
player.on("reducedScore", checkScoreMinimum);

module.exports = player;