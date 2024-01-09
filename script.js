
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
 * Write a function that plays a single round of Rock Paper Scissors. 
 * The function should take two parameters - the playerSelection and computerSelection - 
 * and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
 * Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
 * Account for TIES by re-playing the round.
 * 
 * declare a function declaration with two parameters: playerSelection and computerSelection 
 * (We are assuming valid input for playerSelection in the form of a string "Rock", "Paper", or "Scissors" -- 
 * spelled correctly with the only the first letter capitalized -- this will be handled in the game() function)
 * 
 * Create a return string for when the player wins
 * Create a return string for when the plater loses
 * 
 * Check if playerSelection is equal to computerSelection -- if so, return a string saying it's a tie
 * 
 * Otherwise:
 * For each possible playerSelection:
 *      Check if the computer chose the losing option-- if so, return a string saying the player won
 * 
 *      Otherwise return a string saying the player lost
 *      
 * 
 */
