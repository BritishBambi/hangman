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
        
        //for (var i = 0; i <= chosenWord.length; i++) {
            progressWord.push("-")
            //guessesLeft += 1

        //};
        console.log(progressWord)
        

        var letter = prompt("What is your next letter? ");

        if ((chosenWord.toLowerCase()).indexOf(letter) != -1) { // if the character is found
            for (var i = 0; i < chosenWord.length; i++) { // loop on all characters

                if (chosenWord[i].toLowerCase() === letter.toLowerCase()) { // if this is an occurance
                    console.log(chosenWord[i])  
                    console.log (progressWord[i])
                    console.log (progressWord)
                    console.log("found")

                    progressWord[i] = chosenWord[i];
                    guessesLeft -= 1 

                }
            }
            
        }
        else {
            // wrong choice
            console.log("wrong choice")
            guessesLeft -= 1 

        }
        if (progressWord.indexOf('-') == -1) { // if there are no dashes left
            //win!

            console.log("You win!");
        } 
        else if (guessesLeft <= 0) {
            //player has lost
            console.log("player has lost",guessesLeft)
        }

        


    progressWord.join(" "); // will form a string from the array, with a space as as delimeter
    }
  
}
hangman(chosenWord)