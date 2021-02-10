/* script para data atual em formato legível para brasileiros */

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();
let fullDate = day + "/" + month + "/" + year;

console.log(fullDate);


