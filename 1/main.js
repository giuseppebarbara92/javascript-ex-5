// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.

var studente = {
    'nome' : 'Giuseppe',
    'cognome' : 'Barbara',
    'eta' : 26,
    'corso' : 'Boolean',
    'esercizio_oggetto'  : 1
};
// STAMPO I VALORI CON IL METODO FOR IN

for (var key in studente) {
console.log(studente[key]);
}

// STAMPO CON IL METODO FOR IN SIA I VALORI CHE LE PROPRIEA'

for (var key in studente) {
document.writeln(key + ': ' + studente[key] + '<br>');
}
