var getInput = function(){
	return prompt("Please choose 'rock','paper' or 'scissors!");
};

var computerInput = function(){
	var randomNumber = Math.random();
	if(randomNumber < 0.33){
		return "rock";
	} else if(randomNumber < 0.66){
		return "paper";
	} return "scissors";
};

var getPlayerMove = function(move){
	// Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
	return move || getInput();
};

var getComputerMove = function(move){
	// Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay().
    return move || computerInput() ;
};

var getWinner = function(playerMove,computerMove){
	if(playerMove === computerMove){
		return "tie";
	} else if((playerMove === "rock" && computerMove === "scissors")||(playerMove === "paper" && computerMove === "rock")||(playerMove === "scissors" && computerMove === "paper")){
		return "player";
	} else{
		return "computer";
	}
};

var playToFive = function(){
	console.log("We are playing the game of rock-paper-scissors!");
	var playerWins = 0;
	var computerWins = 0;
	
	while(playerWins < 5 && computerWins < 5){
		var playerMove = getPlayerMove();
		var computerMove = getComputerMove();
			console.log('Player chose ' + playerMove + ' while computer chose ' + computerMove);
		var winner = getWinner(playerMove, computerMove);
		
		if(winner === "player"){
			playerWins+=1;
		}else if(winner === "computer"){
			computerWins+=1;
		} else{
			console.log("we have a tie!");
		}
	}
	console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
};

playToFive();