//Prompt per domandare alle persone Kilometri che devono fare e l' età.
var kilometriScelti = prompt('Quanti Kilometri desidera percorrere?');
var etàPersona = prompt('Quanti anni ha?');

//Variabili per applicare sconto Età.
var scontoMinorenni = 0.2;
var scontoOver65 = 0.4;

//Costo Biglietto per KM
var costoPerKm = 0.21;

var costoBigliettoTotale = costoPerKm * kilometriScelti;

//Calcolo Costo Totale Biglietto tenendo conto dell'età della persona.
if (etàPersona < 18) {
    costoBigliettoTotale = costoBigliettoTotale - costoBigliettoTotale * scontoMinorenni;
    document.getElementById('costoBigliettoTotale').innerHTML = costoBigliettoTotale;
    //console.log(costoBigliettoTotale);
}
else if (etàPersona >= 65) {
    costoBigliettoTotale = costoBigliettoTotale - costoBigliettoTotale * scontoOver65;
    document.getElementById('costoBigliettoTotale').innerHTML = costoBigliettoTotale;
    //console.log(costoBigliettoTotale);
}
else {
    document.getElementById('costoBigliettoTotale').innerHTML = costoBigliettoTotale;
    //console.log(costoBigliettoTotale);
}
