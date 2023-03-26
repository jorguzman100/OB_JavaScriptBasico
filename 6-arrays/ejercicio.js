// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compras = ['manzanas', 'plátanos', 'pan', 'leche', 'huevos'];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push('Aceite de Girasol');
console.log(compras);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop();
console.log(compras);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
    {
      titulo: 'El Padrino',
      director: 'Francis Ford Coppola',
      fecha: 1972
    },
    {
      titulo: 'El Señor de los Anillos: El Retorno del Rey',
      director: 'Peter Jackson',
      fecha: 2003
    },
    {
      titulo: 'Star Wars: Episodio V - El Imperio Contraataca',
      director: 'Irvin Kershner',
      fecha: 1980
    },
    {
      titulo: 'El Club de la Pelea',
      director: 'David Fincher',
      fecha: 1999
    },
    {
      titulo: 'La Lista de Schindler',
      director: 'Steven Spielberg',
      fecha: 1993
    },
    {
      titulo: 'El Gran Dictador',
      director: 'Charlie Chaplin',
      fecha: 1940
    }
  ];
  
  

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasFavoritas2 = peliculasFavoritas.filter(peli => peli.fecha > 1990);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const pelisFavDirectores = peliculasFavoritas.map(peli => peli.director);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const pelisFavTitulos = peliculasFavoritas.map(peli => peli.titulo);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titulosDirectores = pelisFavDirectores.concat(pelisFavTitulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const titulosDirectores2 = [...pelisFavDirectores, ...pelisFavTitulos];


// Print
console.log(peliculasFavoritas2);
console.log(pelisFavDirectores);
console.log(pelisFavTitulos);
console.log(titulosDirectores);
console.log(titulosDirectores2);