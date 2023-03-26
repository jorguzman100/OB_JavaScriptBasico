// Una cadena de texto con tu Nombre
const nombre = 'Jorge';

// Otra cadena de texto con tu Apellido
const apellido = 'Guzman';

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = nombre.concat(' ', apellido);

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudianteMayus = estudiante.toUpperCase();

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = estudiante.toLowerCase();

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const strLength = estudiante.length;

// Una variable que contenga la primera letra del Nombre
const primerLetra = nombre[0];
const primerLetra2 = nombre.charAt(0);

// Otra variable que contenga la última letra del Apellido
const ultimaLetra = apellido.charAt(apellido.length-1);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
const trimEstudiante = estudiante.replace(/\s+/g, '');

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const contiene = estudiante.includes(nombre);

// Print the strings
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(primerLetra);
console.log(primerLetra2);
console.log(ultimaLetra);
console.log(trimEstudiante);
console.log(contiene);
