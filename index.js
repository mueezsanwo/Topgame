function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
 console.log(getComputerChoice()) 

 function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
  
    // Check for a tie
    if (playerSelection === computerSelection.toLowerCase()) {
      return "It's a tie!";
    }
  
    // Check for all other possibilities
    if (playerSelection === 'rock') {
      if (computerSelection === 'Paper') {
        return "You Lose! Paper beats Rock";
      } else {
        return "You Win! Rock beats Scissors";
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'Scissors') {
        return "You Lose! Scissors beat Paper";
      } else {
        return "You Win! Paper beats Rock";
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'Rock') {
        return "You Lose! Rock beats Scissors";
      } else {
        return "You Win! Scissors beat Paper";
      }
    } else {
      return "Invalid selection! Please select Rock, Paper, or Scissors.";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      const playerSelection = prompt(`Round ${i}: Choose Rock, Paper, or Scissors`);
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.startsWith("You Win!")) {
        playerScore++;
      } else if (result.startsWith("You Lose!")) {
        computerScore++;
      }
    }
  
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }

  console.log(game())