// Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. 
// Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.

let accumulo = 0;

while (true) {

// chiediamo il numero
numero = parseInt(prompt("Inserisci un numero da 1 a 20"));   

if (numero >1 && numero <=20) {

    for (let index = 1; index <=numero; index++) {
        
        if (index % 2 === 0) {
            console.log(index + " è un numero pari.");
          } else {
            accumulo += index;
          }
        
    } // for
    let media = accumulo/numero;
    
    console.log("La media dei numeri dispari è: "+ media.toFixed(2));
    
    


    break;
} // if


alert("Attenzione\n\n il numero inserito non è valido.")
}