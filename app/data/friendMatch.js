var newFriend = {
	friendName: "Bill",
	friendImg: "", 
	scores: ["4", "4", "4", "4", "4", "4", "4", "4", "4", "4"]};

var friendArray = {
	"friendName": "Joe",
	"friendImg": "2",
	"scores": [	1,	1,	1,	1,	1,	1,	1,	1,	1,	1	]};

var friendMatch = [];

function newArray() {

	for (var i = 0; i < newFriend.scores.length; i++) {
		var friendCalc = Math.abs(newFriend.scores[i] - friend.scores[i]);
		console.log("friendCalc: " + friendCalc);
		friendMatch.push(friendCalc);
	};
	console.log("friendMatch: " + friendMatch);
	var reducer = (accumulator, currentValue) => accumulator + currentValue;
	console.log(friendMatch.reduce(reducer));
};

newArray();