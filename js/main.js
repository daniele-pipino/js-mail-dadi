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

// var maildatabase = ['Daniele_pipino@icloud.com', 'ginopaoli@gmail.com', 'rosadeiventi@hotmail.com', 'pinolalavatrice@libero.it'];
// console.table(maildatabase);

// chiediamo all'utente la sua mail

// var mailrequest = prompt('Inserisci la tua mail');
// console.log('User Email: ', mailrequest);

// verificare l'esistenza della  mail

// var mailvalidation = mailrequest.includes('Daniele_pipino@icloud.com');
// console.log(mailvalidation);

// alert 

// if (mailvalidation == true) {
//     alert('Login Successfully')
// } else {
//     alert('Login Unsuccesfully...Try Again');
//     window.location.reload(true);
// }

// ---------------gioco dei dadi----------------//

var usernumber = Math.floor(Math.random() * 7) + 1;
console.log('user: ', usernumber);

var cpunumber = Math.floor(Math.random() * 7) + 1;
console.log('cpu: ', cpunumber);

if (usernumber > cpunumber) {
    alert('User win!')
} else if (usernumber == cpunumber) {
    alert('Equal')
}else {
    alert('cpu Win!')
}