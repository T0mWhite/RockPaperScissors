// Rock, Paper, Scissors logic

// Player is playing a game against a computer.

// On load, ask for player name
let name = prompt('Please enter your name:');
// Sanitize the player name
name = name[0].toUpperCase() + name.substring(1);
// Send console greeting with player name and ask player if they would like to play rock, paper, scissors
const answer = prompt(
  `Welcome ${name}, are you ready to play Rock Paper Scissors? Type yes or no.`
);

// If yes, commence game
if (answer.toLowerCase() === 'yes') {
  // Game logic
  let compScore = 0;
  let playerScore = 0;
  let tieScore = 0;

  let startRound = () => {
    let compThrow;
    // Function to get the computer's throw
    function getCompThrow() {
      compThrow = Math.floor(Math.random() * 4 + 1);
    }
    // Call the computer's throw fucntion
    getCompThrow();

    // switch (compThrow) {
    //     case 1:
    //         compThrow = 'rock'
    //         break;
    // }
    // Set the computer's throw number to a string
    if (compThrow === 1) {
      compThrow = 'rock';
    } else if (compThrow === 2) {
      compThrow = 'paper';
    } else if (compThrow === 3) {
      compThrow = 'scissors';
    } else if (compThrow === 4) {
      compThrow = 'bomb';
    }

    // Ask the player for their throw
    let playerThrow = prompt('Choose rock, paper, or scissors... or maybe there\'s a better choice?');
    // Sanitize the throw
    playerThrow = playerThrow.toLowerCase();

    // Compare the comp throw to the player throw
    if (compThrow === playerThrow) {
      console.log(
        tieScore++,
        `Computer threw ${compThrow}, and you threw ${playerThrow}. The round was a tie! \n Current score: ${name}: ${playerScore}, Computer: ${compScore}, Tie: ${tieScore}`
      );
    } else if (compThrow === 'rock' && playerThrow !== 'paper') {
      console.log(
        compScore++,
        `Computer threw ${compThrow}, and you threw ${playerThrow}. You've lost this round!  \n Current score: ${name}: ${playerScore}, Computer: ${compScore}, Tie: ${tieScore}`
      );
    } else if (compThrow === 'paper' && playerThrow !== 'scissors') {
      console.log(
        compScore++,
        `Computer threw ${compThrow}, and you threw ${playerThrow}. You've lost this round!  \n Current score: ${name}: ${playerScore}, Computer: ${compScore}, Tie: ${tieScore}`
      );
    } else if (compThrow === 'scissors' && playerThrow !== 'rock') {
      console.log(
        compScore++,
        `Computer threw ${compThrow}, and you threw ${playerThrow}. You've lost this round!  \n Current score: ${name}: ${playerScore}, Computer: ${compScore}, Tie: ${tieScore}`
      );
    } else if (compThrow === 'bomb') {
      console.log(
        `Computer threw ${compThrow}! Computer blew you up! Game over!`
      );
    } else if (playerThrow === 'bomb') {
        console.log(
          `You threw ${playerThrow}! You blew up the computer and won! Game over!`
        );
    } else {
      return console.log(
        playerScore++,
        `Computer threw ${compThrow}, and you threw ${playerThrow}. Nice! You've won this round!`
      );
    }
  };

  startRound();

  // If no, clear console and end game
} else if (answer.toLowerCase() === 'no') {
  console.clear();
  endGame();
}

// Player is asked to send their throw through the console.
// Player commands can be "rock", "paper", "scissors", or "bomb". Commands are not case sensitive.
// Player command is compared to computer command.
// Rock beats scissors
// Scissors beats paper
// Paper beats rock
// Bomb beats all commands
// If both parties throw bomb, an eerie message is displayed
// If player wins, print this to the console
// If computer wins, print this to the console
// Console message refresh to play again
