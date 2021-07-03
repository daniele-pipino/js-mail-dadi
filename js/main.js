// ----------------------------------Traccia-----------------------------------------//

// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


// ----------------------------------Svolgimento Mail-----------------------------------------//

// 'database' email

var maildatabase = ['Daniele_pipino@icloud.com', 'ginopaoli@gmail.com', 'rosadeiventi@hotmail.com', 'pinolalavatrice@libero.it'];
console.table(maildatabase);

// chiediamo all'utente la sua mail

var mailrequest = prompt('Inserisci la tua mail');
console.log('User Email: ', mailrequest);

// verificare l'esistenza della  mail

// variabile d'appoggio

var exist = false;

// ciclo validazione

for (var i = 0; i < maildatabase.length; i++){

    if (mailrequest == maildatabase[i]) {
        exist = true;
    }
}

// alert

if (!exist) {
    alert('Try again');
} else {
    alert('Login Succesfully');
}
    
// ---------------gioco dei dadi----------------//

// estrazione

// var usernumber = Math.floor(Math.random() * 6) + 1;
// console.log('user: ', usernumber);

// var cpunumber = Math.floor(Math.random() * 6) + 1;
// console.log('cpu: ', cpunumber);

// decretazione vincitore

// if (usernumber > cpunumber) {
//     alert('User win!')
// } else if (usernumber == cpunumber) {
//     alert('Equal')
// }else {
//     alert('cpu Win!')
// }