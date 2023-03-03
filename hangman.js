const prompt = require("prompt-sync")({ sigint: true });
const wordArray = ["Farhan", "Jojo", "Bart", "Tom"]

var chosenWord = wordArray[Math.floor(Math.random()*wordArray.length)];
function hangman(chosenWord) {
    var guessesLeft = chosenWord.length
    var progressWord = []
    for (var i = 0; i < chosenWord.length; i++) {
        progressWord.push("-")
    }
    for (var i = 0; i < chosenWord.length; i++) {

        var letter = prompt("What is your next letter? ")
        guessesLeft -= 1 

        if ((chosenWord.toLowerCase()).indexOf(letter) != -1) { 
             for (var j = 0; j < chosenWord.length; j++) { 

                if (chosenWord[j].toLowerCase() == letter.toLowerCase()) { 
                    progressWord[j] = chosenWord[j];
                    console.log("Right choice")
                }
            }
        }
        else {
            console.log("wrong choice")

        }
        if (progressWord.indexOf('-') == -1) { 
            console.log("You win!");
            break
        } 
        else if (guessesLeft <= 0) {
            console.log("player has lost",guessesLeft)
            break
        }
    
        progressWord.join(" "); 
    }
  
}


hangman(chosenWord)



