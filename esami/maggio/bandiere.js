
let url_base="https://maxzancanaro.github.io/codelabs/html_e_css/img/bandiere/"

let statiEbandiere=[
{nome: "Albania", immagine: "Albania.png"},
{nome: "Austria", immagine: "Austria.png"},
{nome: "Belgio", immagine: "Belgio.png"},
{nome: "Canada", immagine: "Canada.png"},
{nome: "Corea del Sud", immagine: "Corea_del_Sud.png"},
{nome: "Francia", immagine: "Francia.png"},
{nome: "Germania", immagine: "Germania.png"},
{nome: "Italia", immagine: "Italia.png"},
{nome: "Kazakistan", immagine: "Kazakistan.png"},
{nome: "Kirghizistan", immagine: "Kirghizistan.png"},
{nome: "Norvegia", immagine: "Norvegia.png"},
{nome: "Paesi Bassi", immagine: "Paesi_Bassi.png"},
{nome: "Portogallo", immagine: "Portogallo.png"},
{nome: "Regno Unito", immagine: "Regno_Unito.png"},
{nome: "Svezia", immagine: "Svezia.png"}]

function costruisciURL(objStato){
    let bandiera = objStato.immagine;
    let url = url_base + bandiera;
    return(url)
}

function cercaStatoSafe(arrayStati, statoTarget){
    let url = ''

    for (let stato of arrayStati) {
        if (stato.nome === statoTarget) {
            url = costruisciURL(stato);
        }
    }

    if (url === '') {
        url = url_base + 'sconosciuta.png'
    }

    return(url);
}


addEventListener("load", (event) => {

    /* caricare i nomi degli stati nel div elencoStati */
    elencoStatiElement = document.getElementById("elencoStati");


    /* preparare i listener per caricare l'immagine al click */
    for ( i=0; i< elencoStatiElement.children.length; i++ ) {
        let stato=statiEbandiere[i].nome;
        elencoStatiElement.children[i].textContent=stato;

        elencoStatiElement.children[i].addEventListener("click", (event) => {
            
            document.getElementById("bandierImmagine").setAttribute("src",cercaStatoSafe(statiEbandiere,stato));
            
            /* alternativa meno elegante */
            //document.getElementById("bandieraConsole").innerHTML='<img id="bandierImmagine" src="'+cercaStatoSafe(statiEbandiere,stato)+'" width="300">'
            
        });
    }


});
