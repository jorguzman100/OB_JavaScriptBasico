// Función para sumar dos números
function suma(a, b) {
  return a + b;
}

// Función para restar dos números
function resta(a, b) {
  return a - b;
}

// Función para multiplicar dos números
function multiplica(a, b) {
  return a * b;
}

// Función para dividir dos números
function divide(a, b) {
  if (b === 0) {
    return "Error: división por cero";
  }
  return a / b;
}

// Función para calcular el factorial de un número
function factorial(num) {
  if (num < 0) {
    return "Error: número negativo";
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Función para generar un número aleatorio entre dos límites
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('***** en matematicas.js *****');
// console.log(module);

module.exports = { suma, resta, multiplica, divide, factorial, random };
