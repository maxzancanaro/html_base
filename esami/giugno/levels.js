// True if string contains any letter in array
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

// function that returns string without letters in array
function removeLetters(targetString, lettersArray) {

    let outString = '';
    
    for (let letterIn of targetString){

        if (lettersInString(letterIn, lettersArray) == false){
            outString = outString + letterIn
        }
    }
    
    return(outString);
}

// function that returns string without-with letters in array
function splitLetters(targetString, lettersArray) {

    let outStringTarget = '';
    let outStringNonTarget = '';
    
    for (let letterIn of targetString){

        if (lettersInString(letterIn, lettersArray)){
            outStringTarget = outStringTarget + letterIn
        } else {
            outStringNonTarget = outStringNonTarget + letterIn
        }
    }
    
    return(outStringNonTarget+'-'+outStringTarget);
}

console.log(splitLetters('aaaaaabcdefghilmnopqrstuvz', ['a', 'e', 'i', 'o', 'u']));