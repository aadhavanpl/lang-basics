export function randomWords(){
    var readME = "ஆல், இல், கல், கால், கொல், கோல், சூல், செல், சொல்";
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