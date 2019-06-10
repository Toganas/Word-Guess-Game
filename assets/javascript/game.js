// list of words

var words = ["dumbledore", "babynifflers", "pickett", "bunty", "chupacabra", "credence", "demiguise", "grindelwald", "jacob", "leta", "matagot", "nagini", "newt", "nicolasflamel", "niffler", "obscurus", "occamy", "persimmon", "pistachio", "tina", "pumpernickel", "pumpkin", "queenie", "swoopingevil", "theseus", "thunderbird"]

// images?

var images = 
     { dumbledore: "assets/images/albus_dumbledore.jpeg" };
//      { w: "babynifflers", img: "assets/images/babynifflers.jpg" },
//      { w: "pickett", img: "assets/images/bowtruckle.jpg" },
//      { w: "bunty", img: "assets/images/bunty.jpg" }, 
//      { w: "chupacabra", img: "assets/images/chupacabra.jpg" },
//      { w: "credence", img: "assets/images/credence_barebone.jpg" },
//      { w: "demiguise", img: "assets/images/demiguise.jpg" },
//      { w: "grindelwald", img: "assets/images/grindelwald.jpg" },
//      { w: "jacob", img: "assets/images/jacobkowalski.jpg" },
//      { w: "leta", img: "assets/images/leta_lestrange.jpg" },
//      { w: "matagot", img: "assets/images/matagot.jpg" },
//      { w: "nagini", img: "assets/images/nagini.jpg" },
//      { w: "newt", img: "assets/images/newscamander.jpg" },
//      { w: "nicolasflamel", img: "assets/images/nicolasflamel.jpg" },
//      { w: "niffler", img: "assets/images/niffler_jewelry.jpg" },
//      { w: "obscurus", img: "assets/images/obscurus.png" },
//      { w: "occamy", img: "assets/images/occamy.jpg" },
//      { w: "persimmon", img: "assets/images/persimmon.jpg" },
//      { w: "pistachio",img: "assets/images/pistachio.jpg" },
//      { w: "tina", img: "assets/images/porpentina_goldstein.jpg" },
//      { w: "pumpernickel", img: "assets/images/pumpernickle.jpg" },
//      { w: "pumpkin", img: "assets/images/pumpkin.jpg"},
//      { w: "queenie", img: "assets/images/queenie_goldstein.jpg" },
//      { w: "swoopingevil", img: "assets/images/swooping_evil.jpg"},
//      { w: "theseus", img: "assets/images/theseus_scamander.jpg"},
//      { w: "thunderbird", img: "assets/images/thunderbird.jpg"}
//      ]

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
            document.getElementById("picture").src =images[words[0]];
           
            // This is gonna look like crap and  be super redundant, but I think it's gonna work.  I need to learn how to clean this up/DRY.

            //   if (previousWord === "dumbledore"){
            //       document.getElementById("picture").src = "assets/images/albus_dumbledore.jpeg";
            //   } else if (previousWord === "babynifflers") {
            //       document.getElementById("picture").src = "assets/images/babynifflers.jpg";
            //   } else if (previousWord === "pickett") {
            //       document.getElementById("picture").src = "assets/images/bowtruckle.jpg";
            //   } else if (previousWord === "bunty") {
            //       document.getElementById("picture").src = "assets/images/bunty.jpg";
            //   } else if (previousWord === "chupacabra") {
            //       document.getElementById("picture").src = "assets/images/chupacabra.jpg";
            //   } else if (previousWord === "credence") {
            //       document.getElementById("picture").src = "assets/images/credence_barebone.jpg";
            //   } else if (previousWord === "demiguise") {
            //       document.getElementById("picture").src = "assets/images/demiguise.jpg";
            //   } else if (previousWord === "grindelwald") {
            //       document.getElementById("picture").src = "assets/images/grindelwald.jpg";
            //   } else if (previousWord === "jacob") {
            //       document.getElementById("picture").src = "assets/images/jacobkowalski.jpg";
            //   } else if (previousWord === "leta") {
            //       document.getElementById("picture").src = "assets/images/leta_lestrange.jpg";
            //   } else if (previousWord === "matagot") {
            //       document.getElementById("picture").src = "assets/images/matagot.jpg";
            //   } else if (previousWord === "nagini") {
            //       document.getElementById("picture").src = "assets/images/nagini.jpg";
            //   } else if (previousWord === "newt") {
            //       document.getElementById("picture").src = "assets/images/newscamander.jpg";
            //   } else if (previousWord === "nicolasflamel") {
            //       document.getElementById("picture").src = "assets/images/nicolasflamel.jpg";
            //   } else if (previousWord === "niffler") {
            //       document.getElementById("picture").src = "assets/images/niffler_jewelry.jpg";
            //   } else if (previousWord === "obscurus") {
            //       document.getElementById("picture").src = "assets/images/obscurus.png";
            //   } else if (previousWord === "occamy") {
            //       document.getElementById("picture").src = "assets/images/occamy.jpg";
            //   } else if (previousWord === "persimmon") {
            //       document.getElementById("picture").src = "assets/images/persimmon.jpg";
            //   } else if (previousWord === "pistachio") {
            //       document.getElementById("picture").src = "assets/images/pistachio.jpg";
            //   } else if (previousWord === "tina") {
            //       document.getElementById("picture").src = "assets/images/porpentina_goldstein.jpg";
            //   } else if (previousWord === "pumpernickel") {
            //       document.getElementById("picture").src = "assets/images/pumpernickle.jpg";
            //   } else if (previousWord === "pumpkin") {
            //       document.getElementById("picture").src = "assets/images/pumpkin.jpg";
            //   } else if (previousWord === "queenie") {
            //       document.getElementById("picture").src = "assets/images/queenie_goldstein.jpg";
            //   } else if (previousWord === "swoopingevil") {
            //       document.getElementById("picture").src = "assets/images/swooping_evil.jpg";
            //   } else if (previousWord === "theseus") {
            //       document.getElementById("picture").src = "assets/images/theseus_scamander.jpg";
            //   } else if (previousWord === "thunderbird") {
            //       document.getElementById("picture").src = "assets/images/thunderbird.jpg";
            //   }     

            newGame();

             
      
    }

    // Out of guesses

    if (remaining === 0) {
        previousWord = [];
        previousWord.push("So close, better luck next time" + "");
        document.getElementById("previous").innerHTML = previousWord;
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
}