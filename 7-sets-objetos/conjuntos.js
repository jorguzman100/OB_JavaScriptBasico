const fullNames = [
    'John Smith',
    'Jane Doe',
    'David Johnson',
    'Emily Williams',
    'William Brown',
    'Olivia Davis',
    'Michael Wilson',
    'Sophia Taylor',
    'Jacob Martinez',
    'Isabella Garcia'
  ];

  
// Un nuevo Set con los nombres de tu familia
const nombresFamilia = new Set(['Carlos', 'Peter', 'Susana', 'Alba', 'Chelo', 'John', 'Emily']);
console.log(nombresFamilia);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
nombresFamilia.add('Alba', 'Chelo', 'John', 'Emily');
console.log(nombresFamilia);

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nombresFamilia.add('JS');
console.log(nombresFamilia);
