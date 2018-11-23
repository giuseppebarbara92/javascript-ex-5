// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

var classe = [
  {
    'nome' : 'Aldo',
    'cognome' : 'Baglio'
  },

  {
    'nome' : 'Giovanni',
    'cognome' : 'Storti'
  },

  {
    'nome' : 'Giacomo',
    'cognome' : 'Poretti'
  },
];
// STAMPO I NOMI E I COGNOMI
for (var i = 0; i < classe.length; i++) {
var studente = classe[i];
console.log('Nome/cognome: ' + studente.nome + ' '+ studente.cognome);
document.getElementById("nomi_studenti").innerHTML += 'Nome: ' + studente.nome + '<br>';
document.getElementById("cognomi_studenti").innerHTML += 'Cognome: ' + studente.cognome + '<br>';
}
