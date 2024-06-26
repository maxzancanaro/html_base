
function lettersInString(targetString, lettersArray) {

    let result = false;
    
    for (let letter of lettersArray){
        if (targetString.includes(letter)){
            result = true;
            break
        }
    }
    return(result);
}

function removeLetters(targetString, lettersArray) {

    let outString = '';
    
    for (let letterIn of targetString){

        if (lettersInString(letterIn, lettersArray) == false){
            outString = outString + letterIn
        }
    }
    
    return(outString);
}

console.log(removeLetters('ciao', ['a', 'e', 'i']));


function splitLetters(targetString, lettersArray) {

    let outStringTarget = '';
    let outStringNonTarget = '';
    
    for (let letterIn of targetString){

        if (lettersInString(letterIn, lettersArray) == true){
            outStringTarget = outStringTarget + letterIn
        } else {
            outStringNonTarget = outStringNonTarget + letterIn
        }
    }
    
    return(outStringNonTarget+'-'+outStringTarget);
}

console.log(splitLetters('ciao', ['a', 'e', 'i']));