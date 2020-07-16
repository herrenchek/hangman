'use strict';

// Initialize game variables
const gameWords = [
    'aposimz', 
    'aquaelie', 
    'bebop', 
    'jehuty', 
    'odyssey', 
    'sidonia'
];

// Returns random word from gameWords array
randomWord = () => gameWords[Math.floor(Math.random() * gameWords.length)];

// Determines if letter is in word and returns Boolean
isCorrectGuess = (word, letter) => word.indexOf(letter) >= 0;

// Returns an array of underscores with equal length to that of the word
getBlanks = word => {
    const blanks = [];
    for (let i = 0; i < word.length; i++) {
        blanks.push('_');
    }
    return blanks;
}

// Fills blanks array in the correct locations given a letter and the word that array was built from
fillBlanks = (word, puzzleState, letter) => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            puzzleState[i] = letter;
        }
    }
    return puzzleState;
}

// Game management logic
setupRound = word => {
    const round = {
        word: word,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: getBlanks(word)
    }
    return round;
}

updateRound = () => {}

hasWon = () => {}

hasLost = () => {}

isEndOfRound = () => {}

setupGame = () => {}

startNewRound = () => {}

const myGame;