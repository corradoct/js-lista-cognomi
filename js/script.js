// Creo la variabile dell'elemento
var lista = document.getElementById('lista');

// Creo la lista dei cognomi
var listaCognomi = ['Bianchi', 'Rossi', 'Verdi', 'Duzioni', 'Balsano'];
// console.log(listaCognomi);

// Chiedo il cognome all'utente
var cognomeUtente = prompt('Inserisci il tuo cognome.');
// console.log(cognomeUtente);

// Inserisco il cognome dell'utente nella lista
listaCognomi.push(cognomeUtente);
// console.log(listaCognomi);

// Creo la lista in ordine alfabetico
for (var i = 0; i < listaCognomi.length; i++) {
  var listaCognomiOrdinata = listaCognomi.sort();
}
// Scrivo la lista e la posizione all'interno dell'array del nuovo cognome
var posCognomeUtente = listaCognomiOrdinata.indexOf(cognomeUtente);
lista.innerHTML = listaCognomiOrdinata + '<br>' + 'Ti trovi in posizione ' + (posCognomeUtente + 1) + '.';
