let parole = ['PIOVRA', 'JAZZ', 'KIWI', 'QUADERNO', 'ZUCCHERO', 'METALLO', 'BICICLETTA', 'FAX', 'YOGHURT'];


function letteraInParola(targetWord, letter) {
    return (!targetWord.includes(letter))
}


function generaLettera() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let indexRandom = Math.floor(Math.random()*26);
    return letters[indexRandom]
}    

function selezionaParole(wordsArray, letter) {

    let outArray = [];
    
    for (let word of wordsArray){

        if (letteraInParola(word, letter)){
            outArray.push(word)
        }
    }
   
    return(outArray);
}


window.addEventListener("load", (event) => {

    // selezione elementi DOM
    let parolaElement=document.getElementById("parole");
    let letteraElement=document.getElementById("lettera");
    let risultatoElement=document.getElementById("risultato");


    /* variabili locali */ 
    let letteraSelezionata = generaLettera();
    let paroleSelezionate = selezionaParole(parole,letteraSelezionata);

    /* Operazioni di caricamento */

    letteraElement.textContent=letteraSelezionata;
 
    for (i=0; i<9; i++ ) {
        parolaElement.children[i].textContent=parole[i];
   };

    /* setting degli event listener */
    document.getElementById("btControllo").addEventListener("click", (event) => {
        console.log("controlla =>");
        
        for (i=0; i<9; i++ ) {
            if ( paroleSelezionate.includes(parolaElement.children[i].textContent) ) {
                console.log(parolaElement.children[i].textContent);

                parolaElement.children[i].style.color = "rgb(250 250 250)";
                parolaElement.children[i].style.backgroundColor= "rgb(63 63 70)";  
            }
        }

        console.log("lunghezza array= "+paroleSelezionate.length);
        if ( paroleSelezionate.length > 0 ) {
            risultatoElement.textContent=paroleSelezionate;
        } else {
            risultatoElement.textContent="non ce ne sono!"
        }

    });

});