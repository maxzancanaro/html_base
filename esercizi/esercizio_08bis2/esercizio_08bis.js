
function incr() {
    let element = document.getElementById("contatore");

    let contatore=parseInt(element.textContent)+1;
    
    if ( contatore >= 0 ) {
        element.style.color = "#000000";
    } 
    
    element.textContent = contatore;
};

function decr() {
    let element = document.getElementById("contatore");

    let contatore=parseInt(element.textContent)-1;

    if ( contatore < 0 ) {
        element.style.color = "#ff0000";
    } 

    element.textContent = contatore;

};


function cancella() {
    let element = document.getElementById("contatore");

    let contatore=0;

    element.style.color = "#000000";

    element.textContent = contatore;
};

