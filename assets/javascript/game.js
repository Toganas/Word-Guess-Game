// list of words

var words = ["dumbledore", "baby nifflers", "pickett", "bunty", "chupacabra", "credence", "demiguise", "grindelwald", "jacob", "leta", "matagot", "nagini", "newt", "nicolas flamel", "niffler", "obscurus", "occamy", "persimmon", "pistachio", "tina", "pumpernickel", "pumpkin", "queenie", "swooping evil", "theseus", "thunderbird"]

// for(var i=0; i < words.length; i++){
    
// }


// grabbing a word
var currentWord = words[Math.floor(Math.random() * words.length)];
currentWord = currentWord.replace(" ","");
var split = currentWord.split('');

document.getElementById("current").innerHTML=split.join("");



console.log(split);