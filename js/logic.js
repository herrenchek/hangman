'use strict';

// Game instructions
(function() {
    alert('Welcome! Instructions go here.');
})();

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
const randomWord = () => gameWords[Math.floor(Math.random() * gameWords.length)];

// Determines if letter is in word and returns Boolean
const isCorrectGuess = (word, letter) => word.indexOf(letter) >= 0;

// Returns an array of underscores with equal length to that of the word
const getBlanks = word => {
    const blanks = [];
    for (let i = 0; i < word.length; i++) {
        blanks.push('_');
    }
    return blanks;
}

// Fills blanks array in the correct locations given a letter and the word that array was built from
const fillBlanks = (word, puzzleState, letter) => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            puzzleState[i] = letter;
        }
    }
    return puzzleState;
}

// Game management logic
const setupRound = word => {
    let blanks = getBlanks(word);

    return {
        word: word,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: blanks
    };
}

// Updates round after each guess
const updateRound = (round, letterGuessed) => {
    if (isCorrectGuess(round.word, letterGuessed)) {
        round.puzzleState = fillBlanks(round.word, round.puzzleState, letterGuessed);
    } else {
        round.wrongGuesses.push(letterGuessed);
        round.guessesLeft -= 1;
    }
}

// Checks if user has completed word
const hasWon = puzzleState => puzzleState.indexOf('_') === -1;

// Checks if user has lost
const hasLost = guessesLeft => guessesLeft === 0;

// Checks if current round is over
const isEndOfRound = round => hasWon(round.puzzleState) || hasLost(round.guessesLeft);

// Returns object to generate a new round
const setupGame = (words, wins, losses) => {
    let round = setupRound(randomWord(words));

    return {
        words: words,
        wins: wins,
        losses: losses,
        round: round
    };
}

// Constructor notation
// An arrow function cannot be used as a function constructor
// function SetupGame(words, wins, losses) {
//     this.words = words;
//     this.wins = wins;
//     this.losses = losses;
    // Less efficient than above arrow function
//     this.round = setupRound(randomWord(words));
// }

// Updates game state and triggers new setup
const startNewRound = game => {
    let currentRound = game.round;

    if (hasWon(currentRound.puzzleState)) {
        game.wins += 1;
        alert('Winner! The word was ' + currentRound.word);
    } else if (hasLost(currentRound.guessesLeft)) {
        game.losses += 1;
        alert('You lost. The word was ' + currentRound.word);
    }

    game.round = setupRound(randomWord(game.words));
}

// Starts the game
const myGame = new SetupGame(gameWords, 0, 0);

// Uses the ramdom word and displays the empty blanks
document.getElementById("puzzle-state").innerHTML = myGame.round.puzzleState.join(" ");

//Initializes element with the id 'wrong-guesses' as empty
document.getElementById("wrong-guesses").innerHTML = myGame.round.wrongGuesses;

//Initializes element with the id 'guesses-left' as 9
document.getElementById("guesses-left").innerHTML = myGame.round.guessesLeft;

//Initializes element with the id 'win-counter' as 0
document.getElementById("win-counter").innerHTML = myGame.wins;

//Initializes element with the id 'loss-counter' as 0
document.getElementById("loss-counter").innerHTML = myGame.losses;