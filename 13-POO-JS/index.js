// Una clase llamada "Estudiante" que tenga:
class Estudiante {
    // Una variable llamada nombre
    // Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    constructor(nombre) {
        this._nombre = nombre;
        this._asignaturas = [ 'Javascript', 'HTML', 'CSS' ]
    }

    // Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos() {
        return { nombre: this._nombre, asignaturas: this._asignaturas }
    }
}


// Crea una nueva instancia de "Estudiante"
const estu1 = new Estudiante('Jorge');

// Haz la llamada al método obtenDatos
console.log(estu1.obtenDatos());
console.log(estu1._nombre);
estu1.nombre= 'Hola';
console.log(estu1.obtenDatos());
console.log(estu1._nombre);
console.log(estu1);