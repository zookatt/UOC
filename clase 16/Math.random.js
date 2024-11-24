// GENERAR NUMERO Y LETRAS ALEATORIAS

// Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
// Como ejemplo, si deseamos generar un número aleatorio entre 25 y 75, la sentencia sería
const value = Math.floor(Math.random() * (75-25+1)) + 25;

console.log(value)


//1 Obtener un número aleatorio entre 5 y 7.
const v = Math.floor(Math.random() * (7 - 5 + 1)) + 5;
console.log(v)

//2 Ejercicio generador de letras aleatorias.
const nombre ='katia';
const nombreLength = nombre.length;//para calcular MAX de la formula
console.log(nombreLength)
const randomNum = Math.floor(Math.random() * nombreLength);
console.log(randomNum)
const letra = nombre.charAt(randomNum)
console.log(letra)