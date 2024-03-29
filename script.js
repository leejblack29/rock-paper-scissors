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
  } else {
    // For each possible playerSelection:
    switch (playerSelection) {
      case "Rock":
        //Check if the computer chose the losing option --
        return computerSelection === "Scissors"
          ? // if so, return a string saying the player won
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

//Declare a game() function -- plays a best-of-five-rounds match of rock, paper, scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundResult = "The game has not begun.";

  const container = document.querySelector("#container");
  const results = document.querySelector("#results");

  container.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
      case "rock":
        roundResult = playRound("Rock", getComputerChoice());
        break;
      case "paper":
        roundResult = playRound("Paper", getComputerChoice());
        break;
      case "scissors":
        roundResult = playRound("Scissors", getComputerChoice());
        break;
      default:
        roundResult = "No selection made.";
    }

    //look at the beginning of the round result message -- increment winners score
    switch (roundResult.substring(0, 8)) {
      case "You win!":
        playerScore++;
        break;

      case "You lose":
        computerScore++;
        break;

      default:
        break;
    }

    results.textContent = `${roundResult}.
      
      Current Score:
      Player: ${playerScore}
      Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
      results.textContent += playerScore === 5 ? "You win!" : "You lose!";
      results.textContent += `Final Score: 
      Player: ${playerScore} 
      Computer: ${computerScore}`;
    }
  });

}

game();
