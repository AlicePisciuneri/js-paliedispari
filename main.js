
//Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("Scegli: pari o dispari");
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));


//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom() {
  return Math.floor(Math.random() * 5) + 1;
}
const numeroComputer = numeroRandom();
//Sommiamo i due numeri
const somma = numeroUtente + numeroComputer;
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariDispari(numero) {
  if (numero % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
//Dichiariamo chi ha vinto.
if (sceltaUtente === risultato) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!");
}




