// Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

function fibonacci(num) {
    let fib = [1, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        console.log(fib);
    }
    return fib;
}

console.log(fibonacci(10)); // Resultado: [1, 1, 2, 3, 5, 8]
