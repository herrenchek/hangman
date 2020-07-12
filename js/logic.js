// Initialize game variables

const gameWords = ['aposimz', 'aquaelie', 'bebop', 'jehuty', 'odyssey', 'sidonia'];

// Returns random word from gameWords array
randomWord = () => gameWords[Math.floor(Math.random() * gameWords.length)];

console.log(randomWord())

// Determines if letter is in word and returns Boolean
isCorrectGuess = (word, letter) => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            return true;
        }
        return false;
    }
}

// Returns an array of underscores with equal length to that of the word
getBlanks = word => {
    const blanks = [];
    for (let i = 0; i < word.length; i++) {
        blanks.push('_');
    }
    return blanks;
}