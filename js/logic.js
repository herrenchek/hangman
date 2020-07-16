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

updateRound = (round, letterGuessed) => {
    if (isCorrectGuess(round.word, letterGuessed)) {
        round.puzzleState = fillBlanks(round.word, round.puzzleState, letterGuessed);
    } else {
        round.wrongGuesses.push(letterGuessed);
        round.guessesLeft -= 1;
    }
}

hasWon = puzzleState => puzzleState.indexOf('_') === -1;

hasLost = guessesLeft => guessesLeft === 0;

isEndOfRound = round => {}

setupGame = () => {
    const game = {
        words: words,
        wins: wins,
        losses: losses,
        round: round
    }
}

startNewRound = game => {}

const myGame;