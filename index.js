// Rock, Paper, Scissors logic

// Player is playing a game against a computer for 5 rounds.

// Game logic
let compScore = 0;
let playerScore = 0;
let tieScore = 0;
let roundCount = 0;

function endGame() {
  compScore = 0;
  playerScore = 0;
  tieScore = 0;
}

// On load, ask for player name
let playerName = prompt('Please enter your name:');
// Sanitize the player name
playerName = playerName[0].toUpperCase() + playerName.substring(1);
// Send console greeting with player name and ask player if they would like to play rock, paper, scissors
const answer = prompt(
  `Welcome ${playerName}, are you ready to play Rock Paper Scissors? There are 5 rounds! Type yes or no.`
);

// If yes, commence game
if (answer.toLowerCase() === 'yes') {
  //   Initialize round count
  roundCount = 0;

  //   Begin game
  startRound();
  // If no, clear console and end game
} else if (answer.toLowerCase() === 'no') {
  endGame();
  console.log("If you'd like to play, type yes next time!");
}

function startRound() {
  //  Start round and add to count
  roundCount++;

  let compThrow;

  // Function to get the computer's throw
  function getCompThrow() {
    compThrow = Math.floor(Math.random() * 16 + 1);
  }

  // Call the computer's throw function
  getCompThrow();

  // Make the computer's throw a readable string
  if (compThrow >= 1 && compThrow <= 6) {
    compThrow = 'rock';
  } else if (compThrow > 6 && compThrow <= 12) {
    compThrow = 'paper';
  } else if (compThrow > 12 && compThrow <= 15) {
    compThrow = 'scissors';
    // Rare occurence of computer throwing bomb
  } else if (compThrow === 16) {
    compThrow = 'bomb';
  }



  // Ask the player for their throw
  let playerThrow = prompt(
    "Choose rock, paper, or scissors... or maybe there's a better choice?"
  );
  // Sanitize the throw
  playerThrow = playerThrow.toLowerCase();



  // Compare the comp throw to the player throw
  //   Bomb tie ends with no winner
  if (playerThrow === 'bomb' && compThrow === 'bomb') {
    console.log(`You and the computer both threw bombs. Two bombs enter, no one leaves... Game over!`);
    roundCount = 0;
    roundCheck();
    //   If player/comp throws bomb, they win and end the game
  } else if (compThrow === 'bomb') {
    console.log(
      `Computer threw ${compThrow}! Computer blew you up!`
    );
    roundCount = 0;
    compScore = 10;
    roundCheck();
  } else if (playerThrow === 'bomb') {
    console.log(
      `You threw ${playerThrow}! You blew up the computer!`
    );
    roundCount = 0;
    playerScore = 10;
    roundCheck();
    //   Tie throws
  } else if (compThrow === playerThrow) {
    tieScore++;
    console.log(
      `Computer threw ${compThrow}, and you threw ${playerThrow}. Round ${roundCount} was a tie! \n Current score: ${playerName}: ${playerScore}, Computer: ${compScore}, Tie: ${tieScore}`
    );
    roundCheck();
    //   Rock beats paper
  } else if (compThrow === 'rock' && playerThrow !== 'paper') {
    compScore++;
    console.log(
      `Computer threw ${compThrow}, and you threw ${playerThrow}. You've lost round ${roundCount}!  \n Current score: ${playerName}: ${playerScore}, Computer: ${compScore}, Tie: ${tieScore}`
    );
    roundCheck();
    //   Paper beats scissors
  } else if (compThrow === 'paper' && playerThrow !== 'scissors') {
    compScore++;
    console.log(
      `Computer threw ${compThrow}, and you threw ${playerThrow}. You've lost round ${roundCount}!  \n Current score: ${playerName}: ${playerScore}, Computer: ${compScore}, Tie: ${tieScore}`
    );
    roundCheck();
    //   Scissors beats rock
  } else if (compThrow === 'scissors' && playerThrow !== 'rock') {
    compScore++;
    console.log(
      `Computer threw ${compThrow}, and you threw ${playerThrow}. You've lost round ${roundCount}!  \n Current score: ${playerName}: ${playerScore}, Computer: ${compScore}, Tie: ${tieScore}`
    );
    roundCheck();
  } else {
    // Player wins if none of the comp throws win
    playerScore++;
    console.log(
      `Computer threw ${compThrow}, and you threw ${playerThrow}. Nice! You've won round ${roundCount}!   \n Current score: ${playerName}: ${playerScore}, Computer: ${compScore}, Tie: ${tieScore}`
    );
    roundCheck();
  }
}

// Restart round until round 5 is done
function roundCheck() {
  if (roundCount <= 4 && roundCount !== 0) {
    startRound();
  } else {
    if (compScore === playerScore) {
      console.log('The game was a tie! Refresh to play again.');
    } else if (compScore > playerScore) {
      console.log('The computer beat you this time, refresh to try again!');
    } else {
      console.log('You won! Take that computer! Refresh to play again.');
    }
  }
}
