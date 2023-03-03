var words = require("./words") 


var selectedWords = words[Math.floor(Math.random() * words.length)]

var remainingLives = 6;
var guessedLetters = [];
var correctLetters = [];

const updateDisplay = () => 
    {
    var wordDisplay = "";
    for (var i = 0; i < selectedWord.length; i++) {
    if (correctLetters.indexOf(selectedWord[i]) !== -1) {
      wordDisplay += selectedWord[i];
    } else {
      wordDisplay += "_";
    }}
}