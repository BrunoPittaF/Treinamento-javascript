/* script para data atual em formato legível para brasileiros */

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();
let fullDate = day + "/" + month + "/" + year;

console.log(fullDate);

/*////////////////////////////  Day 4 //////////////////////*/
/* Questão 1 */
let age = prompt("Digite a sua idade");
age = parseInt(age);
if (age >= 18) {
  alert("Você já está apto para dirigir");
} else {
  alert(`Você está a ${18 - age} anos de dirigir`);
}

/*Questão 2 */

let myAge = 22;
let yourAge = prompt("Digite a sua idade:");

yourAge = parseInt(yourAge);
if (yourAge < myAge) {
  console.log(`Você é ${Math.abs(yourAge - myAge)} anos mais novo do que eu`);
}
if (yourAge == myAge) {
  console.log(`Você e eu temos a mesma idade!`);
}
if (yourAge > myAge) {
  console.log(`Você é ${Math.abs(yourAge - myAge)} anos mais velho do que eu`);
}

/* Questão 5 */

let note = prompt("digite sua nota");
note = parseInt(note);

if (note >= 0 && note <= 49) {
  console.log("nota F");
}
if (note >= 50 && note <= 59) {
  console.log("nota D");
}
if (note >= 60 && note <= 69) {
  console.log("nota C");
}
if (note >= 70 && note <= 89) {
  console.log("nota B");
}
if (note >= 80 && note <= 100) {
  console.log("nota A");
}

/* loop exercicio 2*/

let numberTable = 10;
let result;
for (i = 0; i <= numberTable; i++) {
  result = i * i;
  console.log(`${Number(i)} x ${Number(i)} = ${Number(result)}`);
}
