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
    let blanks = getBlanks(word);

    return {
        word: word,
        guessesLeft: 9,
        wrongGuesses: [],
        puzzleState: blanks
    };
}

// Updates round after each guess
updateRound = (round, letterGuessed) => {
    if (isCorrectGuess(round.word, letterGuessed)) {
        round.puzzleState = fillBlanks(round.word, round.puzzleState, letterGuessed);
    } else {
        round.wrongGuesses.push(letterGuessed);
        round.guessesLeft -= 1;
    }
}

// Checks if user has completed word
hasWon = puzzleState => puzzleState.indexOf('_') === -1;

// Checks if user has lost
hasLost = guessesLeft => guessesLeft === 0;

// Checks if current round is over
isEndOfRound = round => hasWon(round.puzzleState) || hasLost(round.guessesLeft);

// Returns object to generate a new round
setupGame = (words, wins, losses) => {
    let round = setupRound(randomWord(words));

    return {
        words: words,
        wins: wins,
        losses: losses,
        round: round
    };
}

// Updates game state and triggers new setup
startNewRound = game => {
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
const myGame = setupGame(gameWords, 0, 0);