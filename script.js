/** PLANNING BEAT THAT
 * "BEAT THAT" is a two player game, two dice will be rolled and the aim is to get the highest number possible from
 * that roll by ordering the dice in a specific order. the player that rolls the highest number wins
 * 
 * - there will be two players, and each player will take turns to roll the dice 
 * - when the player clicks submit, the computer will roll the dice for them and show the results
 * - the player will then pick the order of the dice
 * - after the two players have completed their rolls, the player with the higher number wins
 * 
 */

// INIT GLOBAL VARIABLES
var DICE_ROLL = "DICE_ROLL";
var CHOOSE_DICE_ORDER = "CHOOSE_DICE_ORDER";
var COMPARE_SCORE = "COMPARE_SCORE";
var gameState = DICE_ROLL; // declare the default game state

var playerDiceRoll = [];

var currentPlayer = 1;
var AllPlayersScore = []; // array to store the score of all the players

/** ROLL DICE FUNCTION */
var rollDice = function() {
  // Generate random dice number from 1 to 6
  var randomDiceNum = Math.floor(Math.random() * 6) + 1;
  console.log(`Random Dice Output: ${randomDiceNum}`);

  return randomDiceNum;
}

/** HELP THE PLAYER ROLL THE DICE TWICE */
var playerRollDiceTwice = function() {
  var count = 0;
  while(count < 2){
    playerDiceRoll.push(rollDice());
    count++;
  }

  console.log(`The player has rolled ${playerDiceRoll}`);

  return `Player ${currentPlayer}'s roll results are DICE 1: ${playerDiceRoll[0]} and DICE 2: ${playerDiceRoll[1]} <br><br> 
  Please input '1' or '2' to chose the order of which dice will come first`;
}
/** CALCULATE PLAYER SCORE */
var playerScore = function(input){
  var playerScore;

  if( input != 1 && input != 2){
    return `Please only input 1 or 2`;
  }
  if(input == 1){
    playerScore = String(playerDiceRoll[0]) + String(playerDiceRoll[1]);
  }
  if(input == 2){
    playerScore = String(playerDiceRoll[1]) + String(playerDiceRoll[0]);
  }

  AllPlayersScore.push(playerScore);
  playerDiceRoll = [];
  return `Player ${currentPlayer}'s chosen value is ${playerScore}`;
}

/**  */
var comparePlayerScore = function(){
  var comparedValue = `Player 1 score: ${AllPlayersScore[0]} <br>Player 2 score: ${AllPlayersScore[1]}`;

    // P1 Win
    if(AllPlayersScore[0] > AllPlayersScore[1]){
      comparedValue = comparedValue + `<br>Player 1 Wins!`; 
    }
    // P2 Win
    if(AllPlayersScore[0] < AllPlayersScore[1]){
      comparedValue = comparedValue + `<br>Player 2 Wins!`; 
    }
    //Draw
    if(AllPlayersScore[0] == AllPlayersScore[1]){
      comparedValue = comparedValue + `<br>It is a Draw!`; 
    }
    
    return comparedValue;
}


/** MAIN FUNCTION */
var main = function (input) {
  var myOutputValue = '';
  
  if(gameState == DICE_ROLL){
    console.log("Current game state is DICE_ROLL");

    myOutputValue = playerRollDiceTwice();

    gameState = CHOOSE_DICE_ORDER;
    return myOutputValue;
  }

  if(gameState == CHOOSE_DICE_ORDER){
    console.log("Player currently choosing dice order");
    myOutputValue = playerScore(input);

    if(currentPlayer == 1){
      currentPlayer = 2;
      gameState = DICE_ROLL;
      return `${myOutputValue} <br><br> It is now player 2's turn`
    }

    if(currentPlayer == 2){
      gameState = COMPARE_SCORE;
      return `${myOutputValue} <br><br> Press Submit to calculate the scores`
    }
  }

  if(gameState == COMPARE_SCORE){
    myOutputValue = comparePlayerScore();

    return myOutputValue;
  }
};
