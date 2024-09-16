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
var gameState = DICE_ROLL; // declare the default game state

var playerDiceRoll = [];

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

  return `The players roll results are DICE 1: ${playerDiceRoll[0]} and DICE 2: ${playerDiceRoll[1]} <br><br> 
  Please input '1' or '2' to chose the order of which dice will come first`;
}

var playerScore = function(input){
  if( input != 1 && input != 2){
    return `Please only input 1 or 2`;
  }
  if(input == 1){
    var playerScore = String(playerDiceRoll[0]) + String(playerDiceRoll[1]);
    return `The value you chose is ${playerScore}`;
  }
  if(input == 2){
    var playerScore = String(playerDiceRoll[1]) + String(playerDiceRoll[0]);
    return `The value you chose is ${playerScore}`;
  }
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
    console.log("Players currently choosing dice order");
    myOutputValue = playerScore(input);
    return myOutputValue;
  }
};
