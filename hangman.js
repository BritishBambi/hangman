//hangman games?

const prompt = require("prompt-sync")({ sigint: true });

const wordArray = ["Farhan", "Jojo", "Bart", "Tom"]

//random element from array?
var chosenWord = wordArray[Math.floor(Math.random()*wordArray.length)];
console.log(chosenWord)
 function hangman(chosenWord) {
    var guessesLeft = chosenWord.length
    var progressWord = []
    for (var i = 0; i < chosenWord.length; i++) {

        
        progressWord.push('-')
        var letter = prompt("What is your next letter? ");
        guessesLeft -= 1 

        if (chosenWord.indexOf(letter) != -1) { // if the character is found
            for (var i = 0; i < chosenWord.length; i++) { // loop on all characters
                if (chosenWord[i].toLowerCase() == letter.toLowerCase()) // if this is an occurance
                    progressWord[i] = chosenWord[i];
            }
        } else {
            // wrong choice
            console.log("wrong choice")
        }


        if (progressWord.indexOf('-') == -1) { // if there are no dashes left
            //win!
            console.log("You win!");
        } 
        else if (guessesLeft <= 0) {
            //player has lost
            console.log("player has lost")
        }


    progressWord.join(" "); // will form a string from the array, with a space as as delimeter
    }
  
}
hangman(chosenWord)