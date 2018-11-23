// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// CREO UN ARRAY
var studenti = [
  {
    'nome' : 'Aldo',
    'cognome' : 'Baglio',
    'eta' : 20
  },

  {
    'nome' : 'Giovanni',
    'cognome' : 'Storti',
    'eta' : 24
  },

  {
    'nome' : 'Giacomo',
    'cognome' : 'Poretti',
    'eta' : 19
  },
];

for (var i = 0; i < studenti.length; i++) {
console.log(studenti[i]);
}

// CREO UN NUOVO OGGETTO DOVE INSERIRO' I MIEI PROMPT

var studenteAggiunto = {

};

// CHIEDO ALL'UTENTE DI INSERIRE  NOME-COGNOME-ETA'
var nomeUtente = prompt('Inserire un nome');
var cognomeUtente = prompt('Inserire un cognome');
var etaUtente = parseInt(prompt('Inserire età'));

studenteAggiunto.nome = nomeUtente;
console.log(studenteAggiunto.nome);

studenteAggiunto.cognome = cognomeUtente;
console.log(studenteAggiunto.cognome);

studenteAggiunto.eta = etaUtente;
console.log(studenteAggiunto.eta);

// IL MIO OGGETTO DOPO AVER INSERITO I DATI
console.log(studenteAggiunto);

// PUSHO IL MIO OGGETTO ALL'INTERNO DELL'ARRAY
studenti.push(studenteAggiunto);

// CREO UN CICLO FOR E STAMPO LA MIA LISTA
for (var i = 0; i < studenti.length; i++) {
var alunno = studenti[i];
console.log('Nome/Cognome/età: ' + ' ' + alunno.nome + ' ' + alunno.cognome + ' ' + alunno.eta);
}
