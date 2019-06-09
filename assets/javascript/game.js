// list of words

var words = ["dumbledore", "baby nifflers", "pickett", "bunty", "chupacabra", "credence", "demiguise", "grindelwald", "jacob", "leta", "matagot", "nagini", "newt", "nicolas flamel", "niffler", "obscurus", "occamy", "persimmon", "pistachio", "tina", "pumpernickel", "pumpkin", "queenie", "swooping evil", "theseus", "thunderbird"]

// for(var i=0; i < words.length; i++){
    
// }


// grabbing a word

var currentWord = words[Math.floor(Math.random() * words.length)];
currentWord = currentWord.replace(" ","");
var split = currentWord.split('');
split = [split]

console.log(split)



// Creating Underscores

// var underscore = [];

// var generateUnderscore = function () {
//     for (var i = 0, split.length; i++){
//     underscore.push('_');
//     }
// }

// console.log(generateUnderscore());

// document.getElementById("current").innerHTML = split.join("");

// On keyup event

var keyGuess = null;

document.onkeyup = function (event) {


    if (event.keyCode >= 65 && event.keyCode <= 90) {
        keyGuess = event.key.toLowerCase()
    }
    console.log(keyGuess)
}


