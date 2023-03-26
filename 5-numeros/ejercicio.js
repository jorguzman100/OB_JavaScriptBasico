// Una variable que contenga tu altura en centímetros (entero)
const alturaCms = 169;

// Una variable que contenga tu altura en metros (número de coma flotante)
const alturaMts = 1.69;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
const pesoKgs = 78.5;

// Una variable que contenga tu altura en metros redondeada hacia arriba
const alturaMtsUp = Math.ceil(alturaMts);

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const pesoKgsUp = Math.ceil(pesoKgs);

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const maxJSMatch = Number.MAX_VALUE + 1 == Number.MAX_VALUE;


console.log(alturaCms);
console.log(alturaMts);
console.log(pesoKgs);
console.log(alturaMtsUp);
console.log(pesoKgsUp);
console.log(maxJSMatch);