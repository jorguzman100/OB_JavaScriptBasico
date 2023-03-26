// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales1 = {
    nombre: 'Chuper',
    apellido: 'Mamalon',
    edad: 35,
    altura: 1.75,
    eresDesarrollador: true
};

const datosPersonales2 = {
    nombre: "Ana",
    apellido: "García",
    edad: 25,
    altura: 1.65,
    eresDesarrollador: false
}

const datosPersonales3 = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 29,
    altura: 1.78,
    eresDesarrollador: true
}


// Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales1.edad;

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const tres = [datosPersonales1, datosPersonales2, datosPersonales3];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const tresSorted = tres.sort((a,b) => b.edad - a.edad);

// Print
console.log(edad);
console.log(tres);
console.log(tresSorted);