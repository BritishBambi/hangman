var words = require("./words") 


var selectedWords = words[Math.floor(Math.random() * words.length)]

var remainingLives = 6;

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

// Number of remaining letters to be guessed
var remainingLetters = word.length;

// Track the letters that have been guessed
var guessedLetters = [];

function guessLetter(event) {
    // Get the player's guess
    var guess = event.key.toLowerCase();
  
    // If the guess has already been made, display an error message
    if (guessedLetters.includes(guess)) {
      document.getElementById("guesses").innerHTML = "You already guessed that letter!";
      return;
    }
    // Add the guess to the list of guessed letters
  guessedLetters.push(guess);

  // Check if the guess is correct
  var correctGuess = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      answerArray[i] = guess;
      correctGuess = true;
      remainingLetters--;
    }
  }
}

// Update the display

// Check if the game is over

