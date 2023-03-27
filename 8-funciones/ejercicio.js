// Una función sin parámetros que devuelva siempre "true"
function verdad() { return true }

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const miPromesa = new Promise((resolve, reject) => {
    console.log('Promise...');
    setTimeout(() => {
        let response = Math.random();
        console.log(response);
        response >= 0.5 ? resolve() : reject();
    }, 3000);
});

miPromesa
    .then(() => console.log('Cumplida'))
    .catch(() => console.log('Rechazada'))
    .finally(() => console.log('Anyways'));

// Una función generadora de índices pares automáticos
function* generaIndex() {
    for(let i = 1; i <= 30; i++) {
        i % 2 === 0 ? yield i : false;
    }
}

let gen = generaIndex();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
