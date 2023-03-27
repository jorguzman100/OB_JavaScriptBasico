// Logger
const { debug } = require('winston');
const logger = require('./logger');

function myFunc() {
    let response = Math.random();
    console.log(`Response: ${response}`);
    if (response < 0.5) {
        throw new Error('No fue lo que esperaba...');
    }
}

try {
    myFunc();
    console.log('Corrió bien!');
}
catch (e) {
    console.error(`El valor de e es ${e}`);
}
finally {
    console.log('Anyways');
}




// console.log('En index.js');
/* ;
;
logger.debug('Este es un mensaje de Debug');
logger.warn('Este es un mensaje de Warn'); */
