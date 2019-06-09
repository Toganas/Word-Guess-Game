// list of words

var words = ["dumbledore", "babynifflers", "pickett", "bunty", "chupacabra", "credence", "demiguise", "grindelwald", "jacob", "leta", "matagot", "nagini", "newt", "nicolasflamel", "niffler", "obscurus", "occamy", "persimmon", "pistachio", "tina", "pumpernickel", "pumpkin", "queenie", "swoopingevil", "theseus", "thunderbird"]

// for(var i=0; i < words.length; i++){
    
// }


// grabbing a word

var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord);

// Creating Underscores

var underscore = [];
var generateUnderscore = function() {
    for (var i = 0; i < currentWord.length; i++) {
        underscore.push("_");
    }
    return underscore
}

console.log(generateUnderscore());

// On keyup event

var keyGuess = null;

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        keyGuess = event.key.toLowerCase()
    }
    console.log(keyGuess)
}


