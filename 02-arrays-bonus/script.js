const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// Fixare utilizzando for per fare un controllo tramite index e poi usare if
const longNames = [];

// Versione con for in cui non conosco le stringhe all'interno dell'array e lavoro tramite indice



// Versione con if in cui sono note le stringhe all'interno dell'array
/*
if ('Nathan'.length >= 5) {
  longNames.push('Nathan');
} if ('Ed'.length >= 5) {
  longNames.push('Ed');
} if ('Fabio'.length >= 5) {
  longNames.push('Fabio');
} if ('Phil'.length >= 5) {
  longNames.push('Phil');
} if ('Carlo'.length >= 5) {
  longNames.push('Carlo');
} if ('Lewis'.length >= 5) {
  longNames.push('Lewis');
} if ('Luca'.length >= 5) {
  longNames.push('Luca');
} */

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes("Fabio");


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
const teachersString = null;