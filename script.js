/**
 * Declare a function getComputerChoice() -- has no parameters, returns a string
denoting the computer's choice (either "rock", "paper", or "scissors")
 */
function getComputerChoice() {

  // Evaluate an expression which randomly returns a number between 0 and 2 (inclusive)
  switch (Math.floor(Math.random() * 3)) {

    // Depending on which number is returned, return either "rock", "paper" or "scissors"
    case 0:
      return "Rock";
      break;

    case 1:
      return "Paper";
      break;

    case 2:
      return "Scissors";
      break;
  }
}

/**
 * Declare a function declaration with two parameters: playerSelection and computerSelection
 * (We are assuming valid input for playerSelection in the form of a string "Rock", "Paper", or "Scissors" --
 * spelled correctly with the only the first letter capitalized -- this will be handled in the game() function)
 */
function playRound(playerSelection, computerSelection) {

  // Create a return string for when the player wins
  let youWin = `You win! ${playerSelection} beats ${computerSelection}!`;

  // Create a return string for when the plater loses
  let youLose = `You lose! ${computerSelection} beats ${playerSelection}!`;

  // Check if playerSelection is equal to computerSelection -- if so, return a string saying it's a tie
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${computerSelection}!`;
  } 
  
  else {

    // For each possible playerSelection:
    switch (playerSelection) {
      case "Rock":
        //Check if the computer chose the losing option --
        return computerSelection === "Scissors" ?
            // if so, return a string saying the player won
            youWin
          : // Otherwise return a string saying the player lost
            youLose;

      case "Paper":
        return computerSelection === "Rock" ? youWin : youLose;

      case "Scissors":
        return computerSelection === "Paper" ? youWin : youLose;
    }
  }
}

/**
 * Write a NEW function called game(). Use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end.
 * 
You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) 
feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.

At this point you should be using console.log() to display the results of each round and the winner at the end.

Use prompt() to get input from the user. Read the docs here if you need to.

Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.

Feel free to create more “helper” functions if you think it would be useful.

*/

//Declare a game() function
//Declare a variable for the player's score and set to 0
//Declare a variable for the computer's score and set to 0
//Declare a string to store the string describing the result of each round
//Create a while loop which loops until one of the scores is 3 
    //Create a variable to store input
    //Create a flag to check validity of input -- set to false
    //Create a while loop which loops until valid input is confirmed
        //If the input is valid, set switch the flag to true 
        //Otherwise, prompt the user again and store the new message in input variable
    //Call playRound() using the input, and getComputerChoice() -- store the result in the earlier created string;
    //Determine the winner by evaluating the result string -- increment the winner, or neither if it's a tie
    //Print the result to the console, and the current score
//Exit the loop and print a string with the final score and result