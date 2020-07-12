// Initialize game variables

const gameWords = ['aposimz', 'aquaelie', 'bebop', 'odyssey', 'sidonia'];

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

console.log(isCorrectGuess('adios', 'a'))