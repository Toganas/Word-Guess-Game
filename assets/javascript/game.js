// list of words

var words = ["dumbledore", "babynifflers", "pickett", "bunty", "chupacabra", "credence", "demiguise", "grindelwald", "jacob", "leta", "matagot", "nagini", "newt", "nicolasflamel", "niffler", "obscurus", "occamy", "persimmon", "pistachio", "tina", "pumpernickel", "pumpkin", "queenie", "swoopingevil", "theseus", "thunderbird"]


// global variables

var correct = [];
var incorrect = [];
var underscore = [];
var remaining = 10;
var wins = 0;
var previousWord = []




// grabbing a word

var currentWord = words[Math.floor(Math.random() * words.length)];
// console.log(currentWord);

// Creating Underscores

function generateUnderscore() {
    for (var i = 0; i < currentWord.length; i++) {
        underscore.push("_");
    }
    return underscore;
}

document.getElementById("current").innerHTML = generateUnderscore().join(" ");

// remaining guesses

document.getElementById("remaining").innerHTML = remaining;

//wins

document.getElementById("wins").innerHTML = wins;


// On keyup event

var keyGuess = null;

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        keyGuess = event.key.toLowerCase();

        // correct letter  

        for (var j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === keyGuess) {
                underscore[j] = keyGuess;
            }
        }
        document.getElementById("current").innerHTML = underscore.join(" ");
        // incorrect letter

        if (currentWord.indexOf(keyGuess) > -1) {
            correct.push(keyGuess);
            underscore[currentWord.indexOf(keyGuess)] = keyGuess;
        }
        else if (incorrect.indexOf(keyGuess) === -1) {
            incorrect.push(keyGuess);
            document.getElementById("letters").innerHTML = incorrect.join(", ");
            document.getElementById("remaining").innerHTML = remaining -= 1;
        }

        // Fully Guessed Word

        if (underscore.join("") == currentWord) {
            document.getElementById("wins").innerHTML = wins += 1;
            previousWord = [];
            previousWord.push(currentWord);
            document.getElementById("previous").innerHTML = previousWord;
            newGame();
            
        }
      
      
    }

    // Out of guesses

    if (remaining === 0) {
        previousWord = [];
        previousWord.push(currentWord);
        document.getElementById("previous").innerHTML = previousWord;
        // document.getElementsByClassName("picture").src = "pumpernickle_cork.jpg";
        document.getElementById('picture').src="assets/images/pumpernickle_cork.jpg";
        newGame();
    }

}

// I know this is bad, but I can't figure this out right now :(  Starting New Game

function newGame() {
    remaining = 10;
    correct = [];
    incorrect = [];
    underscore = [];
    currentWord = [];
    currentWord = words[Math.floor(Math.random() * words.length)];
    generateUnderscore();
    console.log
}
