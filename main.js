//Esercizio parola Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


// 1. Chiedo la parola all’utente
const parolaUtente = prompt("Inserisci una parola:");

// 2. Funzione  che controlla se è palindroma
function èPalindroma(parola) {
  // Creo una variabile dove metto la parola al contrario
  let parolaInvertita = "";

  // Ciclo per costruire la parola al contrario
  for (let i = parola.length - 1; i >= 0; i--) {
    parolaInvertita += parola[i];
  }

  // Confronto parola originale e parola invertita
  if (parola === parolaInvertita) {
    return true;
  } else {
    return false;
  }
}

// 3. Funzione  per stampare il risultato
function stampaRisultato(esito) {
  if (esito) {
    console.log("La parola è palindroma!");
  } else {
    console.log(" La parola NON è palindroma.");
  }
}

// 4. Uso le due funzioni
const risultato = èPalindroma(parolaUtente); // true o false
stampaRisultato(risultato); // stampa il messaggio





//Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.
