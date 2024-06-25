
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



let parole=["luce",  "passione", "gioia", "forza", "pace", "cultura", "avventura", "natura",  "bellezza" ]
let indiceCasuale=Math.floor(Math.random()*parole.length);

window.addEventListener("load", (event) => {

    let elencoParoleElemento = document.getElementById("elencoParole");

    for ( i=0; i<elencoParoleElemento.children.length; i++ ) {
        elencoParoleElemento.children[i].textContent=parole[i];
    }

    let lettereElemento = document.getElementById("lettere");
    lettereElemento.textContent=splitLetters(parole[indiceCasuale],['a', 'e', 'i', 'o', 'u'])

    for ( child of elencoParoleElemento.children ) {

        if ( parole.indexOf(child.textContent)== indiceCasuale ) {
            /* click listener dell'elemento corretto */
            child.addEventListener("click", (e) => {
                let risultatoElement=document.getElementById("risultato");
                risultatoElement.style="color:green"
                risultatoElement.textContent="OK!";
            });
        } else {
            /* click listener dell' elemento sbagliato */
            child.addEventListener("click", (e) => {
                let risultatoElement=document.getElementById("risultato");

                risultatoElement.style="color:red"
                risultatoElement.textContent="Sbagliato!";
            });
        }

    }

});