// Código con inconsistencias para ser arregladas con ESLint

var num1 = 5;
var num2 = 10;
if(num1 < num2)
	console.log("El número 1 es menor que el número 2");

for(let i = 0; i <= 5; i++) {
	if(i == 3)
		console.log("Tres");
	console.log(i);
}

let name = "Juan";
name = "Pedro";
console.log("Mi nombre es " + name);

function suma(a, b) {
	return a + b;
}

console.log("El resultado de la suma es " + suma(3, 5));
