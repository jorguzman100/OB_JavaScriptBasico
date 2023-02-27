var moment = require('moment');

const yo = {
    nombre: 'Jorge',
    edad: 47,
    developer: true,
    hoy: moment().format('MMM Do yyyy'),
    nacimiento: moment('Dec 09 1975').format('MMM Do YYYY'),
    libro: 'El nomble camino octuple'
};

console.log(yo); 
