//import { createRequire } from '/module';
import words from '/words.js';

document.getElementById("start").addEventListener("click", function() {
    document.getElementById("start").style.display = "none";
    // Randomly select a word from the array
    var word = words[Math.floor(Math.random() * words.length)];

    
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

// Number of remaining letters to be guessed
var remainingLetters = word.length;

// Track the letters that have been guessed
var guessedLetters = [];

// Number of lives remaining
var lives = 6;

// Track the incorrect guesses
var incorrectGuesses = [];

// Draw the game loop
function guessLetter(event) {
    // Get the player's guess
    var guess = event.key.toLowerCase();
    console.log(guess);
    console.log(event)
    if (guess.length > 1 || guess == " " || event.code.length != 4) return;
        
       

    
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
        answerArray[i] = "_";
    }

    // Number of remaining letters to be guessed
    var remainingLetters = word.length;

    // Track the letters that have been guessed
    var guessedLetters = [];

    // Number of lives remaining
    var lives = 6;

    // Track the incorrect guesses
    var incorrectGuesses = [];

    // Draw the game loop
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

        // If the guess is incorrect, track it
        if (!correctGuess) {
            lives--;
            incorrectGuesses.push(guess);
        }

        // Update the display
        document.getElementById("word").innerHTML = answerArray.join(" ");
        document.getElementById("guesses").innerHTML = "Letters guessed: " + guessedLetters.join(", ");
        document.getElementById("lives").innerHTML = "Lives left: " + lives;

        // Check if the game is over
        if (remainingLetters === 0) {
            document.getElementById("guesses").innerHTML = "Congratulations! You won!";
            document.removeEventListener("keydown", guessLetter);
        } else if (lives === 0) {
            document.getElementById("guesses").innerHTML = "Game over. The word was " + word + ".";
            document.removeEventListener("keydown", guessLetter);
            document.getElementById("play-again").style.display = "block";
        }
    }


    // Set up the initial display
    document.getElementById("word").innerHTML = answerArray.join(" ");
    document.getElementById("guesses").innerHTML = "Letters guessed: ";
    document.getElementById("lives").innerHTML = "Lives left: " + lives;

    // Set up play again button so that it reloads the page

    document.getElementById("play-again").addEventListener("click", function() {
        location.reload();
    });

    // Add the event listener for keystrokes
    document.addEventListener("keydown", guessLetter);
});