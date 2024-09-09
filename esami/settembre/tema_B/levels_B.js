
function letteraInParola(targetWord, letter) {
    return (! targetWord.includes(letter))
}

let x = letteraInParola('CANE', 'C');
console.log(x);

function selezionaParole(wordsArray, letter) {

    let outArray = [];
    
    for (let word of wordsArray){

        if (letteraInParola(word, letter)){
            outArray.push(word)
        }
    }
    
    return(outArray);
}

let y = selezionaParole(['CANE', 'GATTO', 'CRICETO'], 'G');
console.log(y);


function generaLettera() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let indexRandom = Math.floor(Math.random()*27)
    return letters[indexRandom]
}    

let z = generaLettera();
console.log(z);