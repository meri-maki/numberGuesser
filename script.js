let humanScore = 6;
let computerScore = 2;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}; 

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
   // Shorthand if statement because results are boolean
  return humanDifference <= computerDifference;
}
 
  
const checkHumanGuess = (humanScore) => {
    if(humanScore < 0 || humanScore > 9){ 
        window.alert("Please make sure your guess is between 0 and 9");
    }
};

  const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;