// list of words

var words = ["dumbledore", "babynifflers", "pickett", "bunty", "chupacabra", "credence", "demiguise", "grindelwald", "jacob", "leta", "matagot", "nagini", "newt", "nicolasflamel", "niffler", "obscurus", "occamy", "persimmon", "pistachio", "tina", "pumpernickel", "pumpkin", "queenie", "swoopingevil", "theseus", "thunderbird"]

// variable arrows that need filled by push/input

var correct = [];
var incorrect = [];
var underscore = [];


// grabbing a word

var currentWord = words[Math.floor(Math.random() * words.length)];
console.log(currentWord);

// Creating Underscores



var generateUnderscore = function() {
    for (var i = 0; i < currentWord.length; i++) {
        underscore.push("_");           
            }
    return underscore;
    }

document.getElementById("current").innerHTML = generateUnderscore().join(" ");




// On keyup event

var keyGuess = null;

document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        keyGuess = event.key.toLowerCase();
       
        // correct letter  
                
        for (var j =0; j < currentWord.length; j++){
            if (currentWord[j] === keyGuess){
                underscore[j] = keyGuess;
            }
        }
        document.getElementById("current").innerHTML = underscore. join(" ");
        // incorrect letter

       
        if (currentWord.indexOf(keyGuess) > -1) {
            correct.push(keyGuess);
            underscore[currentWord.indexOf(keyGuess)] = keyGuess;
        }
        else {
            incorrect.push(keyGuess);
            console.log(incorrect);
        }

            // Fully Guessed Word

            if (underscore.join("") == currentWord){
                console.log("You Win"); 
            } 

          
        }

       
    }
    console.log(keyGuess)



