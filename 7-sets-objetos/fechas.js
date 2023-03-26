// La fecha de hoy
const hoy = new Date();


// La fecha de tu nacimiento
const bd = new Date('December 28 1999');

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esMasTarde = hoy > bd;

// Una variable que contenga el día de tu nacimiento
const day = bd.getDay();

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = bd.getMonth() + 1;

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyo = bd.getFullYear();


// Print
console.log(hoy);
console.log(bd);
console.log(esMasTarde);
console.log(day);
console.log(mes);
console.log(anyo);