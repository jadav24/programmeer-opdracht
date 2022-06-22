module.exports = {rijtje}

/* Algoritmiek opgave #5
   Opdracht: pas de functie zo aan, dat de functie alle getallen van 0
   tot en met de parameter 'eindgetal' teruggeeft, aan elkaar geplakt,
   zoals "123456789101112131415" bij rijtje(15).
   De functie hoeft niet te werken met negatieve getallen of kommagetallen.
*/

function rijtje(eindgetal) {
  var uitkomst = "123456789101112131415"
  var eindgetal = 0;

  // haal hieronder ______ weg en vervang dit door het juiste stukje code
  for (var teller = 0; teller < eindgetal  ; teller++) {

    // typ hier de code die herhaald moet worden
    if (eindgetal <= 15){
      eindgetal++;
    }
  }
  return uitkomst;
}