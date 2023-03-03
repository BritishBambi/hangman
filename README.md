# Hangman Game

## Description

This is a simple hangman game written in Javascript. It uses the [Node.js](https://nodejs.org/en/) runtime environment for the terminal version and runs in the browser for the web version. We have created a front facing version that uses the input from the user to try and guess the word. We have also created a back facing version that uses a random word generator to pick a word for the user to guess in the console.

![Hangman Game](/assets/hangmanscreen.PNG)
![Hangman Terminal](/assets/hangmanterminal.PNG)

## Installation

### Terminal

To play the terminal version of the game, you will need to have Node.js installed on your machine. Once you have Node.js installed, you can clone this repository. Then you need to install the required dependencies by running:

* npm install
* npm install prompt-sync

The game can then be ran using the following command in the terminal:

* node hangmancli.js

This will then allow the user to play the game in the terminal.

### Web

To play the web version first the user must also clone the repository and then use an extension to go live on the index.html file. This will then allow the user to play the game in the browser.

## How to Play

The user will be prompted to enter a letter to guess the word. If the user guesses the correct letter, the letter will be displayed in the word as well as  the letters guessed section. If the user guesses the wrong letter, the letter will be displayed in the letters guessed section and the user will lose a life. The user will have 6 lives to guess the word. At the end of the game the user will be prompted to reload and start again.

## Credits

* Front end Design and Functionality  - [Jojo](https://github.com/BritishBambi/)
* Front end Javascript - [Bart](https://github.com/brayson98)
* Back end Javascript - [Farhan](https://github.com/farhan3311)

