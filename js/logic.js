// Initialize game variables

var gameWords = ['aposimz', 'aquaelie', 'bebop', 'odyssey', 'sidonia'];

// Returns random word from gameWords array
var randomWord = function() {
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}

console.log(randomWord())