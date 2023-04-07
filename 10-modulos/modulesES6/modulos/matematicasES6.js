// Función para sumar dos números
export function suma(a, b) {
  return a + b;
}

// Función para restar dos números
export function resta(a, b) {
  return a - b;
}

// Función para multiplicar dos números
export function multiplica(a, b) {
  return a * b;
}

// Función para dividir dos números
export function divide(a, b) {
  if (b === 0) {
    return "Error: división por cero";
  }
  return a / b;
}

// Función para calcular el factorial de un número
export function factorial(num) {
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
export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('***** En matematicasES6.js *****');



