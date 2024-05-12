

/* restituisce una lista di 9 numeri random tra 1 e 100 */
function generatoreRandom9 () {
    let numeri = new Set();

    while ( numeri.size < 9 ) {
        numeri.add(1+Math.floor(Math.random() * 100));
    }
    return Array.from(numeri);
}

/* dati un array di numeri e un numero n, 
    restituisce la sottolista con i numeri divisibili per n (oppure la lista vuota) */
function estraiNumeriDivisibili (arrayNumeri, n) {
    
    return arrayNumeri.filter(function(num) {
         return num % n === 0;
      });
}

window.addEventListener("load", (event) => {
    let listaNumeri=generatoreRandom9 ();
    let nDivisore=2+Math.floor(Math.random() * 10);

    let elementiElement=document.getElementById("elementi");
    let divisoreElem=document.getElementById("divisore");
    let risultatoElem=document.getElementById("risultato");

    /* Operazioni di caricamento */

    for (i=0; i<9; i++ ) {
        elementiElement.children[i].textContent=listaNumeri[i];
    }

    divisoreElem.textContent=nDivisore;

    /* setting degli event listener */
    document.getElementById("btControllo").addEventListener("click", (event) => {
        console.log("button =>"+estraiNumeriDivisibili(listaNumeri,nDivisore));
        
        let divisori=estraiNumeriDivisibili(listaNumeri,nDivisore);
        console.log("# divisori="+divisori.length+" divisori="+divisori.toString())

        if ( divisori.length==0 ) {
            risultatoElem.textContent="non ce ne sono!";
        } else {
            risultatoElem.textContent=divisori.toString();
            
            for (e of elementiElement.children) {
                if ( divisori.indexOf(parseInt(e.textContent)) !== -1 ) {
                    e.style.color = "rgb(250 250 250)";
                    e.style.backgroundColor= "rgb(63 63 70)";  
                    //e.classList.add("text-zinc-50");
                    //e.classList.add("bg-zinc-900");
                } 
            };
        }

    });

});