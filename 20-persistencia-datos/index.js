// ********** - localStorage **********
// Set
localStorage.setItem('nombre', 'Jorge');
localStorage.setItem('persona', JSON.stringify({ // Convert object/array into string
    nombre: 'Nom1',
    edad: 25,
    civil: 'Soltero'
}));

// Get
console.log(localStorage.getItem('persona'));
console.log(JSON.parse(localStorage.getItem('persona'))); // Convert string into object/array

// Remove
localStorage.removeItem('nombre');
localStorage.removeItem('persona');


// ********** - socalStorage **********
// Set
sessionStorage.setItem('nombre-session', 'Jorge');
sessionStorage.setItem('persona-session', JSON.stringify({ // Convert object/array into string
    nombreSession: 'Nom1',
    edad: 25,
    civil: 'Soltero'
}));

// Get
console.log(sessionStorage.getItem('persona-session'));
console.log(JSON.parse(sessionStorage.getItem('persona-session'))); // Convert string into object/array

// Remove
sessionStorage.removeItem('nombre-session');
sessionStorage.removeItem('persona-session');


// ********** cookies **********
// Get
console.log(document.cookie);

// Set
document.cookie = 'nombreCookie=Jorge' // expires with the session
console.table(document.cookie);

// Set with expiration
document.cookie = "myCookie=myValue;expires=" + new Date('2023, 4, 16').toUTCString();
console.log(document.cookie);



// ********** Ejercicio **********

// Crea una variable con tu nombre
// Crea una variable con tu apellido
// Crea un objeto con tu nombre y tu apellido
const nombre = 'Jorge';
const apellido = 'Guzman'
const yo = {
    nombre: nombre,
    apellido: apellido
}

// Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem('yoSession', JSON.stringify(yo));

// Almacena el objeto anterior en la LocalStorage
localStorage.setItem('yoLocal', JSON.stringify(yo));

// Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie = `yoCookie=${JSON.stringify(yo)};expires=${new Date(new Date().getTime() + (2 * 60 * 1000)).toUTCString()}`;

// Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies
console.log('*** sessionStorage ***')
console.table(JSON.parse(sessionStorage.getItem('yoSession')));
console.log('*** localStorage ***')
console.table(JSON.parse(localStorage.getItem('yoLocal')));
console.log('*** cookie ***')
console.table(document.cookie);


// Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// Observa cómo la SessionStorage está vacía

// Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado


