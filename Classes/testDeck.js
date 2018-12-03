const Player = require('./Player');
const Deck = require('./Deck');
const Card = require('./Card');
const game = require('./game')

var table = new game();

table.addPlayer("bob415", 123);
table.addPlayer("a", 222);

table.initGame();



table.cardPlayed(3, "bob415"); // bob plays card #3



//console.log("Winning card at index 0 is ", table.judgeHand[0]['value']);

//console.log(table.getGameState());

table.dealPromptCard();

//console.log("Prompt is ", table.promptCard);
//console.log(table.buildSentence(0));

console.log('----');


// console.log(table.PlayersList);
//console.log(table.getJudgePlayer());

for (let i = 0; i<2; i++){
	
	console.log("\n loop:", i);
	table.newJudge();
	table.switchJudgeState();
	table.switchAnswerState();
	table.cardPlayed(2, "bob415");
	console.log(table.getGameState());
}


// console.log(table.PlayersList);

//console.log(table.getJudgePlayer());