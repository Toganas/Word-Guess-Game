// list of words

var words = ["albus dumbledore", "baby nifflers", "pickett the bowtruckle", "bunty", "chupacabra", "credence barebone", "demiguise", "gellert grindelwald", "jacob kowalski", "leta lestrange", "matagot", "nagini", "newt scamander", "nicolas flamel", "niffler", "obscurus", "occamy", "persimmon", "pistachio", "porpentina goldstein", "pumpernickel", "pumpkin", "queenie goldstein", "swooping evil", "theseus scamander", "thunderbird"]

// for(var i=0; i < words.length; i++){
    
// }


// grabbing a word
var currentWord = words[Math.floor(Math.random() * words.length)];

var split = currentWord.split('');

document.getElementById("current").innerHTML=split.join("");



console.log(split);