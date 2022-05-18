export function randomWords(){
    var readME = "ஆல், இல், எல், ஏல், ஒல், கல், கால், கொல், கோல், சால், சூல், செல், சேல், சொல், தால், தோல், நல், நால், நில், நூல், நெல், பல், பால், புல், மால், மேல், வல், வால், வில், வெல், வேல்";
    var wordArr = readME.split(', ');

    /*words = (words > wordArr.length) ? wordArr.length : words;

    var randWords = [];
    for (let i = 0; i < words; i++){
        let newRandom;
        do {
            let rand = Math.floor(Math.random() * wordArr.length);
            newRandom = wordArr[rand];
        } while (randWords.includes(newRandom));

        randWords.push(newRandom);
    }
    return randWords.join(', ');*/

    let rand = Math.floor(Math.random() * wordArr.length);
    return wordArr[rand];

}