// importa el módulo controller.js
import { suma, resta, multiplica, divide, factorial, random } from "./controller.js";

// Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
import chalk from "chalk";

// devolver la multiplicación de suma(1, 2) y suma(4, 5)
console.log(chalk.red(suma(1, 2)));
console.log(chalk.blueBright.underline.bold(suma(4, 5)));
console.log(chalk.bgGreen(multiplica(suma(1, 2), suma(4, 5))));