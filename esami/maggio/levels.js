// Level 1
let url_base="https://maxzancanaro.github.io/codelabs/html_e_css/img/bandiere/"
const stato = {'nome': 'Italia', 'immagine': 'Italia.png'}

function costruisciURL(objStato){
    let bandiera = objStato.immagine;
    let url = url_base + bandiera;
    return(url)
}

console.log(costruisciURL(stato))

// Level 2
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

function cercaStato(arrayStati, statoTarget){
    for (let stato of arrayStati) {
        if (stato.nome === statoTarget) {
            return(costruisciURL(stato));
        }
    }
}

console.log(cercaStato(statiEbandiere, 'Italia'));

//Level 3
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

console.log(cercaStatoSafe(statiEbandiere, 'Spagna'));