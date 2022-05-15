import * as fs from 'fs'

var fs = require('fs');

function randomWords(words){
    var readME = fs.readFileSync('text.txt', 'utf8');
    var wordArr = readME.split(', ');

    words = (words > wordArr.length) ? wordArr.length : words;

    var randWords = [];
    for (let i = 0; i < words; i++){
        let newRandom;
        do {
            let rand = Math.floor(Math.random() * wordArr.length);
            newRandom = wordArr[rand];
        } while (randWords.includes(newRandom));

        randWords.push(newRandom);
    }
    return randWords.join(', ');

    let newRandom;
    let rand = Math.floor(Math.random() * wordArr.length);
    newRandom = wordArr[rand]
    return newRandom

}
console.log(randomWords(1));