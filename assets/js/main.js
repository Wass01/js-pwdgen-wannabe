var nome = prompt("Come ti chiami?");
console.log(nome);

var cognome = prompt("Quale è il tuo cognome?");
console.log(cognome);

var colorePreferito = prompt("Quale è il tuo colore preferito?");
console.log(colorePreferito);

var password = nome + cognome + colorePreferito + "21";
document.getElementById('password').innerHTML = password;
console.log(password);

var eta = prompt("i tuoi anni");
var dataNascita = 2021 - eta;
document.getElementById('eta').innerHTML = dataNascita;
console.log(dataNascita);
