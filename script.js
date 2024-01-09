
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


